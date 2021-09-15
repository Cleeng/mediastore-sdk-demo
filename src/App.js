import './App.css';
import { useState, useEffect } from 'react';
import { MyAccount as CleengMyAccount, Config, store } from '@cleeng/mediastore-sdk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import AuthContext from './components/AuthContext/AuthContext';
import Header from './components/Header/Header';
import { Popups } from './components/Popups/Popups';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Config.setEnvironment('sandbox');
    Config.setPublisher('898676925');
    Config.setOffer('S242980909_PL');
    Config.setTheme(
      {
        "fontColor": "#ffffff",
        "backgroundColor": "#292525",
        "cardColor": "#675d5d",
        "successColor": "#435dc5",
        "primaryColor": "#435dc5",
        "loaderColor": "#cccccc"
      }
    )
  },[]);
  
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
                      path="/acc"
                      component={({ match }) => (
                        <div className="myAccWrapper">
                          <Header />
                          <CleengMyAccount routeMatch={match}/>
                        </div>
                      )}/>
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
