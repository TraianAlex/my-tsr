import { createStore, State } from './store';

/* CONFIG */
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

/* USE */
setState('user', 'Alex');

export const todoAddHandler = (text: string) => {
  setState('todos', (p: State['count']) => [
    ...p,
    { id: Math.random().toString(), text: text },
  ]);
  setState('count', (p: State['count']) => p + 1);
};

export const createList = (text: string) => {
  setState('list', (p: State['list']) => [...p, text]);
};

export const todoDeleteHandler = (todoId: string) => {
  setState('todos', (p: State['todos']) => [
    ...p.filter((todo: TodosState) => todo.id !== todoId),
  ]);
  setState('count', (p: State['count']) => p - 1);
};

export const setCount = (nr: number) => {
  setState('count', (p: State['count']) => p + nr);
};

export { useSelector };
