import './App.css';
import { useState } from 'react';
import { MyAccount, Config, store } from '@cleeng/mediastore-sdk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import Components from './pages/Components/Components';
import AuthContext from './components/AuthContext/AuthContext';
import Header from './components/Header/Header';
import { Popups } from './components/Popups/Popups';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
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
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
