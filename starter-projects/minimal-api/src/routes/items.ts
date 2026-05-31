import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItem,
  listItems,
  updateItem,
} from "../store.js";
import type { CreateItemInput, UpdateItemInput } from "../types.js";

export const itemsRouter = Router();

itemsRouter.get("/", (req, res) => {
  const completedParam = req.query.completed;
  let completed: boolean | undefined;

  if (completedParam !== undefined) {
    if (completedParam === "true") {
      completed = true;
    } else if (completedParam === "false") {
      completed = false;
    } else {
      res.status(400).json({ error: "completed must be true or false" });
      return;
    }
  }

  res.json(listItems(completed));
});

itemsRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).json({ error: "id must be a number" });
    return;
  }

  const item = getItem(id);
  if (!item) {
    res.status(404).json({ error: "Item not found" });
    return;
  }
  res.json(item);
});

itemsRouter.post("/", (req, res) => {
  const body = req.body as CreateItemInput;
  if (!body?.title || typeof body.title !== "string" || !body.title.trim()) {
    res.status(400).json({ error: "title is required" });
    return;
  }

  const item = createItem(body);
  res.status(201).json(item);
});

itemsRouter.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).json({ error: "id must be a number" });
    return;
  }

  const body = req.body as UpdateItemInput;
  const item = updateItem(id, body);
  if (!item) {
    res.status(404).json({ error: "Item not found" });
    return;
  }
  res.json(item);
});

itemsRouter.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).json({ error: "id must be a number" });
    return;
  }

  const removed = deleteItem(id);
  if (!removed) {
    res.status(404).json({ error: "Item not found" });
    return;
  }
  res.status(204).send();
});
