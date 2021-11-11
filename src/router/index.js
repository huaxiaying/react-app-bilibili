import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import  thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import todoApp from '@/redux/reducers/index';
import { appRoutes } from '@router/routes';

const loggerMiddleware = createLogger()

let store = createStore(todoApp,applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
) );

class AppRouter extends Component {
  render() {

    const routes = (
      <Provider store={store}>
        <Router>
          <Switch>
            { appRoutes.map(item => (
              <Route path={item.path} component={item.component} key={item.path} />
            ))}
          </Switch>
        </Router>
      </Provider>
    )

    return routes;
  }
}


export default AppRouter;