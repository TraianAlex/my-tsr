import { useState, useEffect } from 'react';

type State = Record<string, any>;
type Selector<State> = (state: State) => any;

type Store = {
  getState: () => State;
  setState: (newState: State) => void;
  subscribe: (listener: State) => void;
};

export const createStore = (initialState: State): Store => {
  let currentState = initialState;
  const listeners = new Set();
  return {
    getState: () => currentState,
    setState: (newState) => {
      currentState = newState;
      listeners.forEach((listener: any) => listener(currentState));
    },
    subscribe: (listener: State) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
};

export const useStore = (
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

// Too many renders
// export const useStoreRaw = (store: Store) => {
//   const { getState, subscribe } = store;
//   const [state, setState] = useState(getState());

//   useEffect(() => subscribe(setState), [subscribe]);

//   return state;
// };

// React 18 only
// export const useStore = (store, selector = (state) => state) =>
//   useSyncExternalStore(store.subscribe, () => selector(store.getState()));
