import { useState, useEffect } from 'react';

export type State = Record<string, any>;
type Selector<State> = (state: State) => State;
export type Action = { type: string; value?: any };

type Store = {
  getState: () => State;
  setState: (newState: State) => void;
  subscribe: (listener: State) => void;
};

export const createStore = (initialState: State): Store => {
  let state = initialState;
  const listeners = new Set();

  const getState = () => state;

  const setState = (newState: any) => {
    state = { ...state, ...newState };
    listeners.forEach((listener: any) => listener(state));
  };

  const subscribe = (listener: State) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
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

/// Too many renders if you use in the same file with useSelector
export const useStoreRaw = (store: Store) => {
  const { getState, subscribe } = store;
  const [state, setState] = useState(getState());

  useEffect(() => subscribe(setState), [subscribe]);

  return state;
};

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
 * create the store
 * -------------------------------------
 * export const todoStore = createStore(initialState);
 *----------------------------------------
 **************************** USAGE ***************************
 *** WRITE ***
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

  * OR - not recomended (not in the same time and in the same component with useSelector)
  * return the entire store - good for debugging or when all state need in the same file
  * the component will always render
   const { todos, count, user, list } = useStoreRaw(todoState);
*/

// React 18 only
// const useStore = (store, selector = (state) => state) =>
//   useSyncExternalStore(store.subscribe, () => selector(store.getState()));

// export const useStoreRaw = (store) =>
//   useSyncExternalStore(store.subscribe, () => selector(store.getState()));
