import React from 'react';
import { Container } from 'react-bootstrap';
import DogDataProvider, { useDogProviderState } from './DogDataProvider';
import { IDog, Status } from './dog.interface';
import ProfileCard from './ProfileCard';
import Loader from './Loader/Loader';
import Error from './Error/Error';

interface FriendsListProps {
  friends: IDog[] | undefined;
}

const FriendsList = ({ friends }: FriendsListProps) => (
  <div>
    {friends &&
      friends.map((friend) => (
        <div key={friend.name}>
          <ProfileCard data={friend} />
        </div>
      ))}
  </div>
);

const PureDogFriends = () => {
  const { data, status, error } = useDogProviderState();
  console.log({ data });

  return (
    <Container>
      <h1 className="text-3xl font-bold leading-7 text-black sm:text-4xl sm:leading-9 sm:truncate my-5">
        Friends:
      </h1>
      <div className="mt-10">
        {error?.message !== '' ? (
          <Error errorMessage={error.message} />
        ) : status === Status.loading ? (
          <Loader isInherit={true} />
        ) : (
          <FriendsList friends={data.friends} />
        )}
      </div>
    </Container>
  );
};

const DogFriends = () => {
  return (
    <DogDataProvider>
      <PureDogFriends />
    </DogDataProvider>
  );
};

export default DogFriends;
