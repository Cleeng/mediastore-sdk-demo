import './App.css';
import { MyAccount, Config, store } from '@cleeng/mediastore-sdk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import Components from './pages/Components/Components';
import Header from './components/Header/Header';
import { Popups } from './components/Popups/Popups';
import '@adyen/adyen-web/dist/adyen.css';
import 'react-loading-skeleton/dist/skeleton.css';

const App = () => {
  Config.setEnvironment('sandbox');
  Config.setPublisher('898676925');
  Config.setMyAccountUrl('http://localhost:3000/acc');
  Config.setCheckoutPayPalUrls({
    successUrl: 'http://localhost:3000/components',
    cancelUrl: 'http://localhost:3000/components',
    errorUrl: 'http://localhost:3000/components'
  });
  Config.setMyAccountPayPalUrls({
    successUrl: 'http://localhost:3000/acc',
    cancelUrl: 'http://localhost:3000/acc',
    errorUrl: 'http://localhost:3000/acc'
  });

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <main>
            <Popups>
              <Switch>
                <Route
                  path="/"
                  exact
                  component={() => <HomePage />}
                />
                <Route
                  path="/components"
                  exact
                  component={() => <Components />}
                />
                <Route
                  path="/acc"
                  component={({ match }) => (
                    <div className="myAccWrapper">
                      <Header />
                      <MyAccount />
                    </div>
                  )} />
              </Switch>
            </Popups>
          </main>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
