import Immutable, { Map } from 'immutable';
import { IAction, createStore, Reducer, State, resolveEach } from './store';

interface TodosState {
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

const initialState = Immutable.fromJS({
  todos: [],
  title: 'Immutable',
  count: 0,
  user: '',
  list: [],
} as TodosType);

export const ADD_TODO = 'ADD_TODO';
export const ADD_LIST = 'ADD_LIST';
export const SET_COUNT = 'SET_COUNT';
export const SET_USER = 'SET_USER';
export const DELETE_TODO = 'DELETE_TODO';

const setUser = (state: State, action: IAction) => {
  return state.set('user', action.value);
};

const addTodo = (state: State, action: IAction) => {
  return state.merge({
    todos: state
      .get('todos')
      .push(Map({ id: Math.random().toString(), text: action.value })),
  });
};

const setCount = (state: State, action: IAction) => {
  return state.set('count', state.get('count') + action.value);
};

const addList = (state: State, action: IAction) => {
  return state.merge({
    list: state.get('list').push(action.value),
  });
};

const deleteTodo = (state: State, action: IAction) => {
  const index = state.get('todos').indexOf(action.value);
  return state.merge({
    todos: state.get('todos').remove(index),
  });
};

const todoReducer: Reducer = resolveEach(initialState, {
  [ADD_TODO]: addTodo,
  [ADD_LIST]: addList,
  [SET_USER]: setUser,
  [DELETE_TODO]: deleteTodo,
  [SET_COUNT]: setCount,
});

export const todoStore = createStore(initialState, todoReducer);
