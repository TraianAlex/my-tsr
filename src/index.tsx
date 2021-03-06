import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  UIRouter,
  UIView,
  useSrefActive,
  pushStateLocationPlugin,
} from '@uirouter/react';
import { visualizer } from '@uirouter/visualizer';

import './index.css';
import { Navigation } from './components/Navigation';
import TableApp from './table/TableApp';
import Filterjs from './components/tables/Filterjs';
import Map from './components/Map';
import { Todo } from './todolist/Todo';
import RadioImageApp from './components/compound-components/RadioImageApp';
import RadioImageApp2 from './components/flexible-compound-components/RadioImageApp';
import Profile from './components/provider-pattern/Profile';
import DogFriends from './components/provider-pattern/DogFriends';
import { WatchList } from './apps/watch-list/WatchList';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Home = () => (
  <Container>
    <h3>hello world</h3>
  </Container>
);

export default function config(router: any) {
  // Specify the initial route when the initial URL matched no state
  router.urlService.rules.initial({ state: 'home' });
  // Setup the state visualizer
  visualizer(router);
}

const App = () => {
  const activeClass = 'active';
  const home = useSrefActive('home', {}, activeClass);
  const table = useSrefActive('table', {}, activeClass);
  const filter = useSrefActive('filter', {}, activeClass);
  const map = useSrefActive('map', {}, activeClass);
  const todo = useSrefActive('todo', {}, activeClass);
  const radioImage = useSrefActive('radioImage', {}, activeClass);
  const radioImage2 = useSrefActive('radioImage2', {}, activeClass);
  const profile = useSrefActive('profile', {}, activeClass);
  const friends = useSrefActive('friends', {}, activeClass);
  const watchList = useSrefActive('watch-list', {}, activeClass);

  return (
    <div>
      {/* <a {...home}>Home</a>{' | '}<a {...table}>Table</a> */}
      <Navigation
        home={home}
        table={table}
        filter={filter}
        map={map}
        todo={todo}
        radioImage={radioImage}
        radioImage2={radioImage2}
        profile={profile}
        friends={friends}
        watchList={watchList}
      />
      <UIView />
    </div>
  );
};

const homeState = { name: 'home', url: '/home', component: Home };
const tableState = { name: 'table', url: '/table', component: TableApp };
const filterjsState = { name: 'filter', url: '/filter', component: Filterjs };
const mapState = { name: 'map', url: '/map', component: Map };
const todoState = { name: 'todo', url: '/todo', component: Todo };
const radioImageState = {
  name: 'radioImage',
  url: '/radio-image',
  component: RadioImageApp,
};
const radioImageState2 = {
  name: 'radioImage2',
  url: '/radio-image2',
  component: RadioImageApp2,
};
const dogProfileState = {
  name: 'profile',
  url: '/profile',
  component: Profile,
};
const dogFriendsState = {
  name: 'friends',
  url: '/friends',
  component: DogFriends,
};
const watchListState = {
  name: 'watch-list',
  url: '/watch-list',
  component: WatchList,
};

ReactDOM.render(
  <React.StrictMode>
    <UIRouter
      plugins={[pushStateLocationPlugin]}
      states={[
        homeState,
        tableState,
        filterjsState,
        mapState,
        todoState,
        radioImageState,
        radioImageState2,
        dogProfileState,
        dogFriendsState,
        watchListState,
      ]}
      config={config}
    >
      <App />
    </UIRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
