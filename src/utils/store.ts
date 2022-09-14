import { useState, useEffect } from 'react';

type State = any;

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
      listeners.forEach((listener: State) => listener(currentState));
    },
    subscribe: (listener: State) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
};

export const useStore = (store: Store, selector = (state: State) => state) => {
  const { getState, subscribe } = store;
  const [state, setState] = useState(selector(getState()));

  useEffect(
    () => subscribe((state: State) => setState(selector(state))),
    [selector, subscribe],
  );

  return state;
};

export const useStoreItem = (store: Store, item: string | number) => 
  useStore(store, (state) => state[item]);

// export const useStore = (store, selector = (state) => state) =>
//   useSyncExternalStore(store.subscribe, () => selector(store.getState()));
