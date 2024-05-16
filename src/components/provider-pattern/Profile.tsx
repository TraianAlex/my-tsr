import React from 'react';
import { useDogProviderState } from './DogDataProvider';
import ProfileCard from './ProfileCard';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import { Status } from './dog.interface';
import DogDataProvider from './DogDataProvider';
import Banner from './Banner/Banner';

const PureProfile = () => {
  const { data, status, error } = useDogProviderState();

  return (
    <div className="App">
      <main className="py-5 md:py-20 max-w-screen-xl mx-auto text-center text-black w-full">
        <Banner
          title={'React Component Patterns:'}
          subtitle={'Provider Pattern'}
        />
        <div className="container">
          <h1 className="text-3xl font-bold leading-7 text-black sm:text-4xl sm:leading-9 sm:truncate my-5">
            Profile
          </h1>
          <div className="mt-10">
            {error?.message ? (
              <Error errorMessage={error.message} />
            ) : status === Status.loading ? (
              <Loader isInherit={true} />
            ) : (
              <ProfileCard data={data} />
            )}
          </div>
          <div>
            <span className="inline-block text-base py-2 leading-none text-black mt-0">
              {status === Status.loaded && !error?.message && data.name}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

const Profile = () => {
  return (
    <DogDataProvider>
      <PureProfile />
    </DogDataProvider>
  );
};

export default Profile;
