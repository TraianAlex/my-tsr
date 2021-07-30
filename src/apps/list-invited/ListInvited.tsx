import React, { useState } from 'react';
import List from './List';
import AddToList from './AddToList';

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      age: 35,
      img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      note: 'Allegeric to staying on the same team',
    },
    {
      name: 'Kobe Bryant',
      age: 42,
      img: 'https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg',
    },
  ]);

  return (
    <div className="container text-center mt-2">
      <h2>People Invited to my Party</h2>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
