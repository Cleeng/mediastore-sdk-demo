import { useState } from 'react';
import './App.css';
import { Login, Register, OfferContainer } from 'mediastoresdk-iwona';

const Auth = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [popupType, setPopupType] = useState('');
 
  return (
      <div className="AppAuth">
        <header className="App-header">
          <ul className="menu">
            <li><button onClick={() => {setIsPopupOpened(true); setPopupType('login')}}>Login</button></li>
            <li><button onClick={() => {setIsPopupOpened(true); setPopupType('register')}}>Register</button></li>
            <li><a href="/my-account">My Account</a></li>
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
                  <Login urlProps={{location: {search: 'offerId=S533261892_PL'}}}/>

                )}
                {popupType === 'register' && (
                  <Register urlProps={{location: {search: 'offerId=S533261892_PL'}}}/>

                )}
                {popupType === 'checkout' && (
                  <OfferContainer urlProps={{location: {search: 'offerId=S533261892_PL'}}}/>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
  );
}

export default Auth;
