import React from "react";
import ReactDOM from "react-dom";
import {
  UIRouter,
  UIView,
  // useSrefActive,
  pushStateLocationPlugin,
} from "@uirouter/react";
import { visualizer } from '@uirouter/visualizer';

import "./index.css";
import Navigation from './components/Navigation';
import SnowApp from "./snow/SnowApp";
import Tablez from './components/Tablez';
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => <h3>hello world</h3>;

export default function config(router: any) {
  // Specify the initial route when the initial URL matched no state
  router.urlService.rules.initial({ state: "home" });
  // Setup the state visualizer
  visualizer(router);
};

const App = () => {
  //const activeClass = "active";
  // const helloSref = useSrefActive("home", {}, activeClass);
  // const snowAppSref = useSrefActive("snow", {}, activeClass);

  return (
    <div>
      {/* <a {...helloSref}>Hello</a>{' | '}
      <a {...snowAppSref}>Snow</a> */}
      <Navigation />
      <div className="container">
        <UIView />
      </div>
    </div>
  );
};

const homeState = { name: "home", url: "/home", component: Home };
const snowState = { name: "snow", url: "/snow", component: SnowApp };
const tablezState = { name: "tablez", url: "/tablez", component: Tablez };

ReactDOM.render(
  <React.StrictMode>
    <UIRouter
      plugins={[pushStateLocationPlugin]}
      states={[homeState, snowState, tablezState]}
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
