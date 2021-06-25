import { useState } from 'react';
import './App.css';
import { Login, Register, OfferContainer } from 'mediastoresdk-iwona';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const App = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [popupType, setPopupType] = useState('');
 
  return (
    <div className="App">
      <Router history={history}>
      <header className="App-header">
        <ul className="menu">
          <li><button onClick={() => {setIsPopupOpened(true); setPopupType('login')}}>Login</button></li>
          <li><button onClick={() => {setIsPopupOpened(true); setPopupType('register')}}>Register</button></li>
        </ul>
      </header>
      <main>
      <button onClick={() => {setIsPopupOpened(true); setPopupType('checkout')}}>Buy</button>
        {isPopupOpened && (
          <div className="popupWrapper" onClick={() => {
              setIsPopupOpened(false);
            }}>
            <div className="popupContent" onClick={(event) => {
              event.stopPropagation(); 
            }}>
              {popupType === 'login' && (
                <Login urlProps={{location: {search: 'offerId=S343557015_PL'}}}/>

              )}
              {popupType === 'register' && (
                <Register urlProps={{location: {search: 'offerId=S343557015_PL'}}}/>

              )}
              {popupType === 'checkout' && (
                <OfferContainer urlProps={{location: {search: 'offerId=S343557015_PL'}}}/>
              )}
            </div>
          </div>
        )}
      </main>
      </Router>
    </div>
  );
}

export default App;
