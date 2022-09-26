import { createStore } from './store';

export interface TodosState {
  id: string;
  text: string;
}

type TodosType = {
  todos: TodosState[];
  title: string;
  count: number;
  user: string;
  list: string[];
};

const initialState: TodosType = {
  todos: [],
  title: 'SetState3',
  count: 0,
  user: '',
  list: [],
};

const { setState, useSelector } = createStore(initialState);

setState('user', 'Alex');

export const todoAddHandler = (text: string) => {
  setState('todos', (p: any) => [
    ...p,
    { id: Math.random().toString(), text: text },
  ]);
  setState('count', (p: any) => p + 1);
};

export const createList = (text: string) => {
  setState('list', (p: any) => [...p, text]);
};

export const todoDeleteHandler = (todoId: string) => {
  setState('todos', (p: any) => [
    ...p.filter((todo: TodosState) => todo.id !== todoId),
  ]);
  setState('count', (p: any) => p - 1);
};

export { useSelector };
