import React from "react";
import ReactDOM from "react-dom";
import {
  UIRouter,
  UIView,
  useSrefActive,
  pushStateLocationPlugin,
} from "@uirouter/react";
import { visualizer } from "@uirouter/visualizer";

import "./index.css";
import { Navigation } from "./components/Navigation";
import TableApp from "./table/TableApp";
import Filterjs from "./components/tables/Filterjs";
import Map from "./components/Map";
import { Todo } from "./todolist/Todo";
import RadioImageApp from "./components/forms/RadioImageApp";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => <h3>hello world</h3>;

export default function config(router: any) {
  // Specify the initial route when the initial URL matched no state
  router.urlService.rules.initial({ state: "home" });
  // Setup the state visualizer
  visualizer(router);
}

const App = () => {
  const activeClass = "active";
  const home = useSrefActive("home", {}, activeClass);
  const table = useSrefActive("table", {}, activeClass);
  const filter = useSrefActive("filter", {}, activeClass);
  const map = useSrefActive("map", {}, activeClass);
  const todo = useSrefActive("todo", {}, activeClass);
  const radioImage = useSrefActive("radioImage", {}, activeClass);

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
      />
      <div className="container">
        <UIView />
      </div>
    </div>
  );
};

const homeState = { name: "home", url: "/home", component: Home };
const tableState = { name: "table", url: "/table", component: TableApp };
const filterjsState = { name: "filter", url: "/filter", component: Filterjs };
const mapState = { name: "map", url: "/map", component: Map };
const todoState = { name: "todo", url: "/todo", component: Todo };
const radioImageState = {
  name: "radioImage",
  url: "/radio-image",
  component: RadioImageApp,
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
      ]}
      config={config}
    >
      <App />
    </UIRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
