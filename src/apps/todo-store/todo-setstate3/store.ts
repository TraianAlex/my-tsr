import { useState, useEffect, SetStateAction, useCallback } from 'react';

export type State = Record<string, any>;
type StateKeys = keyof State;
type Selector<State> = (state: State) => State;

const isFunction = (fn: unknown): fn is Function => typeof fn === 'function';

const updateValue = <Value>(oldValue: Value, newValue: SetStateAction<Value>) =>
  isFunction(newValue) ? newValue(oldValue) : newValue;

export const createStore = (initialState: State) => {
  let state = initialState;
  const listeners = new Set();

  const getState = () => state;

  const setState = <StateKey extends StateKeys>(
    stateKey: StateKey,
    update: SetStateAction<State[StateKey]>,
  ) => {
    state = {
      ...state,
      [stateKey]: updateValue(state[stateKey], update),
    } as Pick<State, StateKey> as Partial<State>;

    listeners.forEach((listener: any) => listener(getState()));
  };

  const subscribe = (listener: State) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const useStore = (selector: Selector<State> = (state: State) => state) => {
    const [state, setState] = useState(selector(getState()));

    useEffect(() => {
      subscribe((state: State) => setState(selector(state)));
    }, [selector]);

    return state;
  };

  const useSelector = <StateKey extends StateKeys>(stateKey: StateKey) => {
    const selector = useCallback((state: State) => state[stateKey], [stateKey]);
    const partialState = useStore(selector);
    const updater = useCallback(
      (u: SetStateAction<State[StateKey]>) => setState(stateKey, u),
      [stateKey],
    );

    return [partialState, updater] as const;
  };

  return { setState, useSelector };
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
 * export const { setState, useSelector } = createStore(initialState);
 *----------------------------------------
 **************************** USAGE ***************************
 *** WRITE ***
  setState('todos', (prev: any) => [
    ...prev,
    { id: Math.random().toString(), text: text },
  ]);
  setState('count', (prev: any) => prev + 1);

  *** READ *** - recomended when a peace of state need to use - 
  * this will render only the component that consume this part of state
   const [todos] = useSelector('todos');
   const count = useSelector('count);

  ** get and set like useState
   const [list, setList] = useSelector('list');
   setList((p: State['list']) => [...p, 'initial list']);
*/

// React 18 only
// const useStore = (store, selector = (state) => state) =>
//   useSyncExternalStore(store.subscribe, () => selector(store.getState()));

// export const useStoreRaw = (store) =>
//   useSyncExternalStore(store.subscribe, () => selector(store.getState()));
