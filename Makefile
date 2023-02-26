all: build-react-app run

.PHONY: build-react-app
build-react-app:
	@echo "> build react app"
	@cd ui && npm run build

.PHONY: run
run:
	@go run cmd/server/main.go
