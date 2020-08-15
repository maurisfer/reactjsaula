import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/ChocolateList/App';
import Login from './pages/Login/login';
import NotFound from './pages/NotFound/404';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        {/* <Route path = '/registeruser' component = {}></Route>
        <Route path = '/registerchocolate' component = {}></Route> */}
        <Route path = '/list' component = {App}/>
        <Route path = '*' component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
