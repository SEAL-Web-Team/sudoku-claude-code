import type { CreateItemInput, Item, UpdateItemInput } from "./types.js";

let nextId = 1;
const items = new Map<number, Item>();

export function listItems(completed?: boolean): Item[] {
  const all = Array.from(items.values());
  if (completed === undefined) {
    return all;
  }
  return all.filter((item) => item.completed === completed);
}

export function getItem(id: number): Item | undefined {
  return items.get(id);
}

export function createItem(input: CreateItemInput): Item {
  const item: Item = {
    id: nextId++,
    title: input.title.trim(),
    completed: input.completed ?? false,
  };
  items.set(item.id, item);
  return item;
}

export function updateItem(id: number, input: UpdateItemInput): Item | undefined {
  const existing = items.get(id);
  if (!existing) {
    return undefined;
  }
  const updated: Item = {
    ...existing,
    ...(input.title !== undefined ? { title: input.title.trim() } : {}),
    ...(input.completed !== undefined ? { completed: input.completed } : {}),
  };
  items.set(id, updated);
  return updated;
}

export function deleteItem(id: number): boolean {
  return items.delete(id);
}

/** Reset store between tests */
export function resetStore(): void {
  items.clear();
  nextId = 1;
}
