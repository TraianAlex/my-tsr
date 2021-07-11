import React, { useState, useEffect, createContext, useContext } from 'react';
import { IDog, Status } from './dog.interface';
import DATA from '../../utils/data-dog';

interface State {
  data: IDog;
  status: Status;
  error: Error;
}

const initState: State = {
  status: Status.loading,
  data: {
    name: '',
    breed: '',
    friends: [
      {
        name: '',
        breed: '',
      },
    ],
  },
  error: {
    name: '',
    message: '',
  },
};

const DogDataProviderContext = createContext(initState);
DogDataProviderContext.displayName = 'DogDataProvider';

export function useDogProviderState() {
  const context = useContext(DogDataProviderContext);

  if (context === undefined) {
    throw new Error('useDogProviderState must be used within DogDataProvider.');
  }

  return context;
}

const DogDataProvider: React.FC = ({ children }): React.ReactElement => {
  const [state, setState] = useState<State>(initState);

  useEffect(() => {
    setState(initState);

    (async (): Promise<void> => {
      try {
        // MOCK API CALL
        const asyncMockApiFn = async (): Promise<IDog> =>
          await new Promise((resolve) => setTimeout(() => resolve(DATA), 1000));
        // MOCK FAILED API CALL
        // const asyncFnReject = async (): Promise<void> => {
        // 	await new Promise((resolve, reject) =>
        // 		setTimeout(() => {
        // 			reject(new Error('Request failed with status code 404'));
        // 		}, 1000),
        // 	);
        // };
        const data = await asyncMockApiFn();
        console.log('1 CALL');
        setState({
          data,
          status: Status.loaded,
          error: { name: '', message: '' },
        });
      } catch (error) {
        console.log(error.message);

        setState({
          error,
          status: Status.error,
          data: { name: '', breed: '' },
        });
      }
    })();
  }, []);

  return (
    <DogDataProviderContext.Provider value={state}>
      {children}
    </DogDataProviderContext.Provider>
  );
};

export default DogDataProvider;
