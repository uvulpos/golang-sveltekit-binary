package storage

import "github.com/go-sqlx/sqlx"

func (h *UserStore) CreateTransaction() (*sqlx.Tx, error) {
	tx, txErr := h.dbstore.DB.Beginx()
	if txErr != nil {
		return nil, txErr
	}
	return tx, nil
}
