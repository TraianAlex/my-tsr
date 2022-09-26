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

const { getState, setState, useSelector } = createStore(initialState);

setState({ user: 'Alex' });

export const todoAddHandler = (text: string) => {
  setState({
    todos: [...getState().todos, { id: Math.random().toString(), text: text }],
    count: getState().count + 1,
  });
};

export const createList = (text: string) => {
  setState({
    list: [...getState().list, text],
  });
};

export const todoDeleteHandler = (todoId: string) => {
  setState({
    todos: [
      ...getState().todos.filter((todo: TodosState) => todo.id !== todoId),
    ],
    count: getState().count - 1,
  });
};

export { useSelector };
