import './App.css';
import { MyAccount, store } from 'mediastoresdk-iwona';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import Auth from './Auth';

const history = createBrowserHistory();
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <main>
            <Switch>
              <Route path="/" exact
                      component={() => <Auth/>}/>
              <Route path="/my-account"
                    component={() => <div className="myAccWrapper"><a href="/">Go to main page</a><MyAccount routeMatch={{path: '/my-account'}}/></div>}/>
            </Switch>
          </main>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
