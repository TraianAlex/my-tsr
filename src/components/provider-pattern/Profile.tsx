import * as React from "react";
import { useDogProviderState } from "./DogDataProvider";
import ProfileCard from "./ProfileCard";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import { Status } from "./dog.interface";
import DogDataProvider from "./DogDataProvider";
import Banner from "./Banner/Banner";

const PureProfile = () => {
  // Our custom hook that "subscirbes" to the state changes in
  // the data provider component, DogDataProvider.
	const { data, status, error } = useDogProviderState();

  return (
    <div className="App">
      <main className="py-5 md:py-20 max-w-screen-xl mx-auto text-center text-white w-full">
        <Banner
          title={"React Component Patterns:"}
          subtitle={"Provider Pattern"}
        />
        <div className="container">
          <h1 className="text-3xl font-bold leading-7 text-white sm:text-4xl sm:leading-9 sm:truncate my-5">
            Profile
          </h1>
          <div className="mt-10">
            {/* If the API call returns an error we will show an error message */}
            {error ? (
              <Error errorMessage={error.message} />
            ) : // Show a loading state when we are fetching the data
            status === Status.loading ? (
              <Loader isInherit={true} />
            ) : (
              // Display the content with the data
              // provided via the custom hook, useDogProviderState.
              <ProfileCard data={data} />
            )}
          </div>
          <div>
            <span className="inline-block text-base py-2 leading-none text-white mt-0">
              {/* Show the user's name, Collins, if the status is loaded and there is no error */}
              {status === Status.loaded && !error && data.name}
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
