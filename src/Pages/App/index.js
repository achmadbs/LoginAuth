import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from '../../Components/Login/login';
import Dashboard from '../Dashboard/index';
import { Provider } from 'react-redux';
import { store } from '../../Config/Redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={LoginForm}/>
          <Route path='/Dashboard' exact component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
