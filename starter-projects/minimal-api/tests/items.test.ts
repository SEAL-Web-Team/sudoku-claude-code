import request from "supertest";
import { afterEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { resetStore } from "../src/store.js";

const app = createApp();

afterEach(() => {
  resetStore();
});

describe("GET /health", () => {
  it("returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});

describe("GET /items", () => {
  it("returns empty list initially", async () => {
    const res = await request(app).get("/items");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("filters by completed query param", async () => {
    await request(app)
      .post("/items")
      .send({ title: "Done task", completed: true });
    await request(app)
      .post("/items")
      .send({ title: "Open task", completed: false });

    const done = await request(app).get("/items?completed=true");
    expect(done.body).toHaveLength(1);
    expect(done.body[0].title).toBe("Done task");

    const open = await request(app).get("/items?completed=false");
    expect(open.body).toHaveLength(1);
    expect(open.body[0].title).toBe("Open task");
  });

  it("rejects invalid completed param", async () => {
    const res = await request(app).get("/items?completed=maybe");
    expect(res.status).toBe(400);
  });
});

describe("POST /items", () => {
  it("creates an item", async () => {
    const res = await request(app)
      .post("/items")
      .send({ title: "Write tests" });

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({
      id: 1,
      title: "Write tests",
      completed: false,
    });
  });

  it("rejects missing title", async () => {
    const res = await request(app).post("/items").send({});
    expect(res.status).toBe(400);
  });
});

describe("GET /items/:id", () => {
  it("returns one item", async () => {
    const created = await request(app)
      .post("/items")
      .send({ title: "Read docs" });

    const res = await request(app).get(`/items/${created.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Read docs");
  });

  it("returns 404 for missing item", async () => {
    const res = await request(app).get("/items/999");
    expect(res.status).toBe(404);
  });
});

describe("PUT /items/:id", () => {
  it("updates an item", async () => {
    const created = await request(app)
      .post("/items")
      .send({ title: "Old title" });

    const res = await request(app)
      .put(`/items/${created.body.id}`)
      .send({ title: "New title", completed: true });

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      title: "New title",
      completed: true,
    });
  });

  it("returns 404 for missing item", async () => {
    const res = await request(app)
      .put("/items/999")
      .send({ title: "Nope" });
    expect(res.status).toBe(404);
  });
});

describe("DELETE /items/:id", () => {
  it("deletes an item", async () => {
    const created = await request(app)
      .post("/items")
      .send({ title: "Temporary" });

    const del = await request(app).delete(`/items/${created.body.id}`);
    expect(del.status).toBe(204);

    const get = await request(app).get(`/items/${created.body.id}`);
    expect(get.status).toBe(404);
  });

  it("returns 404 for missing item", async () => {
    const res = await request(app).delete("/items/999");
    expect(res.status).toBe(404);
  });
});
