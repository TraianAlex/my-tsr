import {
  IAction,
  createStore,
  Reducer,
  State,
  resolveEach,
  useSelector,
} from './store';

interface TodosState {
  id: string;
  text: string;
}

type TodosType = {
  todos: TodosState[];
  title: string;
  count: number;
  count2: number;
  user: string;
  list: string[];
};

const initialState: TodosType = {
  todos: [],
  title: 'Dispatch',
  count: 0,
  count2: 0,
  user: '',
  list: [],
};

export const ADD_TODO = 'ADD_TODO';
export const ADD_LIST = 'ADD_LIST';
export const SET_COUNT = 'SET_COUNT';
export const SET_COUNT2 = 'SET_COUNT2';
export const SET_USER = 'SET_USER';
export const DELETE_TODO = 'DELETE_TODO';

const setUser = (state: State, action: IAction) => {
  return {
    ...state,
    user: action.value,
  };
};

const addTodo = (state: State, action: IAction) => {
  return {
    ...state,
    todos: [
      ...state.todos,
      { id: Math.random().toString(), text: action.value },
    ],
    count: state.count + 1,
  };
};

const setCount = (state: State, action: IAction) => {
  return {
    ...state,
    count: state.count + action.value,
  };
};

const setCount2 = (state: State, action: IAction) => {
  return {
    ...state,
    count2: state.count2 + action.value,
  };
};

const addList = (state: State, action: IAction) => {
  return {
    ...state,
    list: [...state.list, action.value],
    count2: state.count2 + 1,
  };
};

const deleteTodo = (state: State, action: IAction) => {
  return {
    ...state,
    todos: [
      ...state.todos.filter((todo: TodosState) => todo.id !== action.value),
    ],
    count: state.count - 1,
  };
};

const todoReducer: Reducer = resolveEach(initialState, {
  [ADD_TODO]: addTodo,
  [ADD_LIST]: addList,
  [SET_USER]: setUser,
  [DELETE_TODO]: deleteTodo,
  [SET_COUNT]: setCount,
  [SET_COUNT2]: setCount2,
});

export const todoStore = createStore(initialState, todoReducer);

export const useTest = () => {
  const user = useSelector(todoStore, 'user');

  const testFunction2 = () => {
    return `${user} is ok`;
  };

  return { testFunction2 };
};

export const useTest2 = () => {
  const count2 = useSelector(todoStore, 'count2');

  const testFunction1 = () => {
    return `${count2} increased`;
  }

  return { testFunction1 };
};
