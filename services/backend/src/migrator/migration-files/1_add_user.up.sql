CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE auth_source AS ENUM ('basic', 'ldap');

CREATE TABLE IF NOT EXISTS roles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR UNIQUE NOT NULL,
    inherit_from UUID,
    FOREIGN KEY (inherit_from) REFERENCES roles(id) ON DELETE SET NULL,
    CHECK (inherit_from <> id)
);

CREATE TABLE IF NOT EXISTS permissions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR UNIQUE NOT NULL,
    description VARCHAR NOT NULL,
    identifier VARCHAR UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS role_permissions (
    role_id UUID,
    permission_id UUID,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR,
    ldap_uuid UUID,
    auth_source auth_source DEFAULT 'basic',
    admin_review_required Boolean DEFAULT FALSE NOT NULL,
    role_id UUID DEFAULT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,

    CONSTRAINT valid_ldap_entry CHECK (
        (auth_source != 'ldap' AND (ldap_uuid IS NULL AND password IS NOT NULL) ) OR 
        (auth_source = 'ldap' AND (ldap_uuid IS NOT NULL AND password IS NULL))
    )
);

CREATE UNIQUE INDEX unique_ldap_uuid ON users (ldap_uuid) WHERE (auth_source = 'ldap');

INSERT INTO roles (name, inherit_from) VALUES 
    ('User', NULL);
INSERT INTO roles (name, inherit_from) VALUES 
    ('Admin', (SELECT id FROM roles WHERE name = 'User'));

INSERT INTO permissions (name, description, identifier) VALUES 
('Admin Greet', 'A unique greeting that just an admin gets', 'GREET_ADMIN'),
('User Greet', 'Just a nice everyones greet', 'GREET_USER'),
('Manage Users', 'Create Update Read Delete Users', 'MANAGE_USERS');

INSERT INTO role_permissions (role_id, permission_id) VALUES
((SELECT id FROM roles WHERE name = 'User'), (SELECT id FROM permissions WHERE identifier = 'GREET_USER')),
((SELECT id FROM roles WHERE name = 'Admin'), (SELECT id FROM permissions WHERE identifier = 'GREET_ADMIN')),
((SELECT id FROM roles WHERE name = 'Admin'), (SELECT id FROM permissions WHERE identifier = 'MANAGE_USERS'));

-- password is default "123"
INSERT INTO users (username, email, password, ldap_uuid, auth_source, role_id) VALUES
('uvulpos', 'uvulpos@home.de', '$2a$08$J3nf0/vYoiG0HVrLOBneEum5b9zrZo64lBmf48Zxf8flgL0oY3RPy', NULL, 'basic', (SELECT id FROM roles WHERE name = 'Admin')),
('umbra', 'umbra@home.de', '$2a$08$J3nf0/vYoiG0HVrLOBneEum5b9zrZo64lBmf48Zxf8flgL0oY3RPy', NULL, 'basic', (SELECT id FROM roles WHERE name = 'User')),
('ldap-user', 'ldap-user@home.de', NULL, 'a56eff7d-5fb8-3574-92f1-136f6344777d', 'ldap', (SELECT id FROM roles WHERE name = 'User'));

CREATE VIEW roles_with_permission_recursive AS 
    WITH RECURSIVE cte AS (
        SELECT r.id, r.name, r.inherit_from, rp.permission_id
        FROM roles r
        JOIN role_permissions rp ON rp.role_id = r.id
        UNION ALL
        SELECT cte.id, cte.name, r.inherit_from, rp.permission_id
        FROM cte
        JOIN roles r ON cte.inherit_from = r.id
        JOIN role_permissions rp ON rp.role_id = r.id
    ),
    aggregated AS (
        SELECT cte.id, cte.name, JSONB_AGG(DISTINCT p.*) AS permissions
        FROM cte
        JOIN permissions p ON p.id = cte.permission_id
        GROUP BY cte.id, cte.name
    )
    SELECT * FROM aggregated;


CREATE VIEW user_with_permission AS 
    SELECT 
        u.*, 
        r.name AS "role_name", 
        rpr.permissions        
    FROM users u 
        LEFT JOIN roles r ON u.role_id = r.id 
        LEFT JOIN roles_with_permission_recursive rpr ON r.id = rpr.id
    GROUP BY u.id, r.id, rpr.permissions;

CREATE VIEW user_with_rolename AS 
    SELECT 
        u.*, 
        r.name AS "role_name"
    FROM users u 
        LEFT JOIN roles r ON u.role_id = r.id 
    GROUP BY u.id, r.id;
