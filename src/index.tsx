import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  UIRouter,
  UIView,
  useSrefActive,
  pushStateLocationPlugin,
} from '@uirouter/react';
// import { visualizer } from '@uirouter/visualizer';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigation } from './layout/Navigation';
import TableApp from './table/TableApp';
import Filterjs from './components/tables/Filterjs';
import Map from './components/Map';
import { Todo } from './apps/todolist/Todo';
import { TodoApp } from './apps/todo-store/TodoApp';
import RadioImageApp from './components/compound-components/RadioImageApp';
import RadioImageApp2 from './components/flexible-compound-components/RadioImageApp';
import Profile from './components/provider-pattern/Profile';
import DogFriends from './components/provider-pattern/DogFriends';
import { WatchList } from './apps/watch-list/WatchList';
import ListInvited from './apps/list-invited/ListInvited';
import { GoogleSheets } from './apps/google-sheets/GoogleSheets';
import { Home } from './components/Home';

const config = (router: any) => {
  // Specify the initial route when the initial URL matched no state
  router.urlService.rules.initial({ state: 'home' });
  // Setup the state visualizer
  // visualizer(router);
};

export type NavProps = {
  home: object;
  table: object;
  filter: object;
  map: object;
  todo: object;
  todos: object;
  radioImage: object;
  radioImage2: object;
  friends: object;
  profile: object;
  watchList: object;
  listInvited: object;
  googleSheets: object;
};

type LinkState = {
  name: string;
  url: string;
  component: React.FC<{}>;
};

const App: React.FC = () => {
  const activeClass = 'active';
  const home = useSrefActive('home', {}, activeClass);
  const table = useSrefActive('table', {}, activeClass);
  const filter = useSrefActive('filter', {}, activeClass);
  const map = useSrefActive('map', {}, activeClass);
  const todo = useSrefActive('todo', {}, activeClass);
  const todos = useSrefActive('todos', {}, activeClass);
  const radioImage = useSrefActive('radioImage', {}, activeClass);
  const radioImage2 = useSrefActive('radioImage2', {}, activeClass);
  const profile = useSrefActive('profile', {}, activeClass);
  const friends = useSrefActive('friends', {}, activeClass);
  const watchList = useSrefActive('watch-list', {}, activeClass);
  const listInvited = useSrefActive('list-invited', {}, activeClass);
  const googleSheets = useSrefActive('google-sheets', {}, activeClass);

  return (
    <div>
      {/* <a {...home}>Home</a>{' | '}<a {...table}>Table</a> */}
      <Navigation
        home={home}
        table={table}
        filter={filter}
        map={map}
        todo={todo}
        todos={todos}
        radioImage={radioImage}
        radioImage2={radioImage2}
        profile={profile}
        friends={friends}
        watchList={watchList}
        listInvited={listInvited}
        googleSheets={googleSheets}
      />
      <UIView />
    </div>
  );
};

const homeState: LinkState = { name: 'home', url: '/home', component: Home };
const tableState: LinkState = {
  name: 'table',
  url: '/table',
  component: TableApp,
};
const filterjsState: LinkState = {
  name: 'filter',
  url: '/filter',
  component: Filterjs,
};
const mapState: LinkState = { name: 'map', url: '/map', component: Map };
const todoState: LinkState = { name: 'todo', url: '/todo', component: Todo };
const todosState: LinkState = {
  name: 'todos',
  url: '/todos',
  component: TodoApp,
};
const radioImageState: LinkState = {
  name: 'radioImage',
  url: '/radio-image',
  component: RadioImageApp,
};
const radioImageState2: LinkState = {
  name: 'radioImage2',
  url: '/radio-image2',
  component: RadioImageApp2,
};
const dogProfileState: LinkState = {
  name: 'profile',
  url: '/profile',
  component: Profile,
};
const dogFriendsState: LinkState = {
  name: 'friends',
  url: '/friends',
  component: DogFriends,
};
const watchListState: LinkState = {
  name: 'watch-list',
  url: '/watch-list',
  component: WatchList,
};
const listInvitedState: LinkState = {
  name: 'list-invited',
  url: '/list-invited',
  component: ListInvited,
};
const googleSheetsState: LinkState = {
  name: 'google-sheets',
  url: '/google-sheets',
  component: GoogleSheets,
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
        todosState,
        radioImageState,
        radioImageState2,
        dogProfileState,
        dogFriendsState,
        watchListState,
        listInvitedState,
        googleSheetsState,
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
