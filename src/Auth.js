import { useEffect, useContext } from 'react';
import './App.css';
import { Auth as MediastoreAuth } from '@cleeng/mediastore-sdk';
import AuthContext from './components/AuthContext/AuthContext';
import { NavLink } from 'react-router-dom';
import { usePopupsContext, popupTypes } from './components/Popups/Popups';

const Auth = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { showModal } = usePopupsContext();


  useEffect(() => {
    if (MediastoreAuth.isLogged()) {
      setIsAuthenticated(true);
    }
  })

  return (
    <div className="AppAuth">
      <header className="App-header">
        <ul className="menu">
          {!isAuthenticated && (
            <>
              <li><button onClick={() => showModal(popupTypes.LOGIN)}>Login</button></li>
              <li><button onClick={() => showModal(popupTypes.REGISTER)}>Register</button></li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <NavLink to="/">Homepage</NavLink>
              </li>
              <li>
                <NavLink to="/components">Components</NavLink>
              </li>
              <li>
                <NavLink to="/acc">My Account</NavLink>
              </li>
              <li><button onClick={() => { MediastoreAuth.logout(() => window.location.href = "/") }}>Logout</button></li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Auth;
