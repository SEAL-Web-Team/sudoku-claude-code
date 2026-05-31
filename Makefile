.PHONY: help lint test hooks-install structure

help:
	@echo "Sudoku Claude Code workshop — common tasks"
	@echo "  make hooks-install  — install pre-commit hooks"
	@echo "  make lint           — pre-commit on all files"
	@echo "  make structure      — verify key directories exist"
	@echo "  make test           — alias for structure (docs repo)"

hooks-install:
	pre-commit install

lint:
	pre-commit run --all-files

structure:
	@test -d beginner-track
	@test -d claude-templates
	@test -d slash-commands
	@test -d hooks
	@test -d workflows
	@test -d playwright
	@test -d skills
	@test -d resources/gstack
	@test -d starter-projects
	@echo "Workshop structure OK"

test: structure
