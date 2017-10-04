import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';
import { Home, Counter } from './containers';
import { VideoStore, WinStore } from './stores';
import './styles/main.css';

/* CSS Entry point */
const isDev = process.env.NODE_ENV !== 'production';

if (module.hot && isDev) {
    /* hotmodule replacement for extracted CSS */
    const cssNode = document.getElementById('css-bundle');
    const port = process.env.PORT || 3000;
    cssNode.href = `http://localhost:${port}/dist/style.css?${Date.now()}`;
    module.hot.accept();
}


const Events = require('events');

const eventsHandler = new Events();
eventsHandler.send = (eventName, arg) => eventsHandler.emit(eventName, arg)

const stores = {
    video: new VideoStore({ events: eventsHandler }),
    win: new WinStore({ events: eventsHandler })
};


setTimeout(() => {
    /* let the app bootstrap and events beeing registered... */
    stores.win.startLivePeer();
}, 1000);


const App = ({ children }) => (
  <Provider {...stores}>
    {children}
  </Provider>
);

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/counter" component={Counter} />
  </Route>
);

render(
  <div>
    {/* isDev && <DevTools /> */}
    <Router history={hashHistory} routes={Routes} />
  </div>,
  document.getElementById('root')
);
