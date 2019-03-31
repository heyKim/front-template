import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
// import { ConnectedRouter } from 'connected-react-router'
import { Router, Route, IndexRoute, BrowserRouter , Switch, Redirect, Link} from 'react-router-dom'
import App from './main/App';
import Page1 from './main/Page1';
import Page2 from './main/Page2';
import Module1 from './module1/Module1_app';
import Module2 from './module2/Module2_app';

const history = createBrowserHistory()
// const store = configureStore(history)
const rootElement = document.getElementById('root');
const Routers = () => (
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
);
ReactDOM.render(
    <BrowserRouter>
    <div>
        <Routers />
    </div>
   </BrowserRouter>

  , rootElement);
