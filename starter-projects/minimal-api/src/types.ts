export interface Item {
  id: number;
  title: string;
  completed: boolean;
}

export interface CreateItemInput {
  title: string;
  completed?: boolean;
}

export interface UpdateItemInput {
  title?: string;
  completed?: boolean;
}
