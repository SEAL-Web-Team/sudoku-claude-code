# Minimal API starter

Express + TypeScript CRUD API for Sudoku workshop modules 2–5.

## Quick start

```bash
npm install
npm test
npm run dev
```

Server runs at `http://localhost:3000`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/health` | Health check |
| GET | `/items` | List items; optional `?completed=true\|false` |
| GET | `/items/:id` | Get one item |
| POST | `/items` | Create `{ "title": "...", "completed"?: boolean }` |
| PUT | `/items/:id` | Update title and/or completed |
| DELETE | `/items/:id` | Delete item |

## Try it

```bash
curl http://localhost:3000/health
curl http://localhost:3000/items
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d "{\"title\":\"First task\"}"
curl "http://localhost:3000/items?completed=false"
```

## Layout

```
minimal-api/
├── src/
│   ├── index.ts       # starts server
│   ├── app.ts         # Express app (exported for tests)
│   ├── store.ts       # in-memory store
│   ├── types.ts
│   └── routes/items.ts
└── tests/items.test.ts
```

## With Claude

1. Copy [`claude-templates/typescript/CLAUDE.md`](../../claude-templates/typescript/CLAUDE.md) to `CLAUDE.md`.
2. Module 3: `/analyze` the request flow.
3. Module 4: `/plan` an extension (search, pagination, or validation) — see [example 01](../../examples/01-build-crud-app/README.md).
4. Module 5: break a test intentionally, then `/fix`.

Data is in-memory only; restarting the server clears items.
