import { useState, useEffect } from 'react';

export interface IAction<T extends string = string> {
  type: T;
  value?: any;
}
export type State = Record<string, any>;
type Selector<State> = (state: State) => State;
//export type Action = { type: string; value?: any };
export type Reducer = (state: State, action: IAction) => State;

type Store = {
  getState: () => State;
  setState: (newState: State) => void;
  subscribe: (listener: State) => void;
  dispatch: (action: IAction) => void;
};

export const createStore = (initialState: State, reduce: Reducer): Store => {
  let state = initialState;
  const listeners = new Set();
  return {
    getState: () => state,
    setState: (newState) => {
      state = { ...state, ...newState };
      listeners.forEach((listener: any) => listener(state));
    },
    subscribe: (listener: State) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    dispatch: (action) => {
      state = reduce(state, action);
      listeners.forEach((listener: any) => listener(state));
    },
  };
};

const useStore = (
  store: Store,
  selector: Selector<State> = (state: State) => state,
) => {
  const { getState, subscribe } = store;
  const [state, setState] = useState(selector(getState()));

  useEffect(
    () => subscribe((state: State) => setState(selector(state))),
    [selector, subscribe],
  );

  return state;
};

export const useSelector = (store: Store, item: string | number) =>
  useStore(store, (state) => state[item]);

export const useStoreRaw = (store: Store) => {
  const { getState, subscribe } = store;
  const [state, setState] = useState(getState());

  useEffect(() => subscribe(setState), [subscribe]);

  return state;
};

export const resolveEach =
  (initialState: State, handlers: State) =>
  (state = initialState, action: IAction) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

/*************************** CONFIG *********************************
 * type your initial state
 * -------------------------------------
 * type TodosType = {
 *  todos: TodosState[]; (interface TodosState { id: string; text: string })
 *  count: number;
 *  user: string;
 *  list: string[];
 * };
 * -------------------------------------
 * create the initial state with default values
 * -------------------------------------
 * const initialState: TodosType = {
 *  todos: [],
 *  title: 'Dispatch',
 *  count: 0,
 *  user: '',
 *  list: [],
 * };
 * -------------------------------------
 * create the action types
 * -------------------------------------
 * export const ADD_TODO = 'ADD_TODO';
 * -------------------------------------
 * create your reducer
 * -------------------------------------
 * const reducer: Reducer = (state: State, action: IAction) => state 
 
 * or function for each state and use resolveEach to compose the reducer
 * const todoReducer: Reducer = resolveEach(initialState, {
 *  [ADD_TODO]: addTodo,
 *  [ADD_LIST]: addList,
 *  [SET_USER]: setUser,
 *  [DELETE_TODO]: deleteTodo,
 *  [SET_COUNT]: setCount,
 * });
 * -------------------------------------
 * create the store
 * -------------------------------------
 * export const todoStore = createStore(initialState, todoReducer);
 *----------------------------------------
 **************************** USAGE ***************************
 *** WRITE *** - recomended - 
    const { dispatch } = todoStore;
    dispatch({ type: ADD_TODO, value: text });
  
 * OR - not recomended - this bring the logic back in the component
   const { getState, setState } = todoStore;
   setState({
      todos: [
        ...getState().todos,
        { id: Math.random().toString(), text: 'value' },
      ],
      count: getState().count + 1,
    });

  *** READ *** - recomended when a peace of state need to use - 
  * this will render only the component that consume this part of state
   const todos = useSelector(todoStore, 'todos');

  * OR *(not in the same time and in the same component with useSelector)
  * return the entire store - good for debugging or when all state need in the same file
  * the component will always render
   const { todos, count, user, list } = useStoreRaw(todoState);
*/

// React 18 only
// const useStore = (store, selector = (state) => state) =>
//   useSyncExternalStore(store.subscribe, () => selector(store.getState()));

// export const useStoreRaw = (store) =>
//   useSyncExternalStore(store.subscribe, () => selector(store.getState()));
