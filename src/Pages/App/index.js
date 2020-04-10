import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from '../../Components/Login/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={LoginForm}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
