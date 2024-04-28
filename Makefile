
.install-deps: ## install all dependencies
	@bash  ./devops/scripts/utils/install-dependencies.sh

dev: .install-deps ## start debugging in docker compose microservices (auto reload)
	@docker compose -f compose-dev.yaml up --abort-on-container-exit backend frontend reverse-proxy

build-full: .install-deps ## build current plattform
	@bash ./devops/scripts/build-service/binary.sh

local-release: .install-deps ## build all app versions locally (via goreleaser)
	@bash  ./devops/scripts/utils/local-release.sh

storybook:
	@(cd services/frontend ; npm run storybook)

test-be: ## run golang tests
	@docker compose -f compose-dev.yaml up --abort-on-container-exit postgres backend-tests

test-fe: ## run sveltekit tests
	@docker compose -f compose-dev.yaml up --abort-on-container-exit frontend-tests

build-dockerfile-binary: ## build one dockerimage that contains everything
	@bash ./devops/scripts/build-container/binary.sh

build-dockerfile-frontend: ## build the frontend microservice
	@bash ./devops/scripts/build-container/frontend.sh

build-dockerfile-backend: ## build the backend microservice
	@bash ./devops/scripts/build-container/backend.sh

help: ## print our all commands to commandline
	@echo "\033[34m"
	@echo "		SvelteKit + Golang Example"
	@echo "	   ------------------------------------"
	@echo "   		github: @uvulpos"
	@echo "\033[0m"
	@echo ""
	@echo "\033[33mDevelopment Commands:\033[0m"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | grep -B0 -E 'dev'
	@echo ""
	@echo "\033[33mBuild Commands:\033[0m"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | grep -B0 -E 'build-full|local-release'
	@echo ""
	@echo "\033[33mDocker Commands:\033[0m"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | grep -B0 -E 'build-dockerfile-'
	@echo ""
	@echo "\033[33mTest Commands:\033[0m"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | grep -B0 -E 'test-be|test-fe'