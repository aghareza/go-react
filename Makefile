all: build-react-app run

.PHONY: build-react-app
build-react-app:
	@echo "> build react app"
	@cd ui && npm run build

.PHONY: run
run:
	@go run cmd/server/main.go

.PHONY: run-web-only
run-web-only:
	@cd ui && npm run web-only