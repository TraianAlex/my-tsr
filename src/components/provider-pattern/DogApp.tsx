import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './Banner/Banner';
import Nav from './Nav';
import Profile from './Profile';
import DogFriends from './DogFriends';
import DogDataProvider from './DogDataProvider';

function App() {
  return (
    <Router>
      <div className="App">
        <DogDataProvider>
          <Nav />
          <main className="py-5 md:py-20 max-w-screen-xl mx-auto text-center text-white w-full">
            <Banner
              title={'React Component Patterns:'}
              subtitle={'Provider Pattern'}
            />
            <Switch>
              <Route exact path="/dog">
                <Profile />
              </Route>
              <Route path="/friends">
                <DogFriends />
              </Route>
            </Switch>
          </main>
        </DogDataProvider>
      </div>
    </Router>
  );
}

export default App;
