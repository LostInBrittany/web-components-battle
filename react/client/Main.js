"use strict";
import reactPolymer from 'react-polymer';
import React from "react";
import { render } from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import reducers from "./reducers/reducers.js";

import App from "./components/App.js";
import Users from "./pages/Users.js";
import Login from "./pages/Login.js";
import UserList from "./components/user/UserList.js";
import UserMap from "./components/user/UserMap.js";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(Object.assign({}, reducers, {
    routing: routerReducer
  })),
  composeEnhancers(applyMiddleware(thunk))
);

const history = syncHistoryWithStore(hashHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App} >
        <IndexRoute component={Users} />        
        <Route path="/users" component={Users}>
            <IndexRoute component={UserList} />
            <Route path="list" component={UserList}/>
            <Route path="map" component={UserMap}/>
            <Route path="map/:id" component={UserMap}/>
        </Route>        
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));
