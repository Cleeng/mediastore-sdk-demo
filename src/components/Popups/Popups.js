
import { useState, createContext, useContext } from 'react';
import { Login, Register, Checkout, PasswordReset } from '@cleeng/mediastore-sdk';
import {
  PopupsWrapperStyled
} from './PopupsStyled';

export const popupTypes = {
  CHECKOUT: 'checkout',
  LOGIN: 'login',
  REGISTER: 'register',
  PASSWORD_RESET: 'passwordReset'
}

const initialState = {
  showModal: () => { },
  hideModal: () => { },
}

const PopupContext = createContext(initialState);
export const usePopupsContext = () => useContext(PopupContext);


export const Popups = ({ children }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [popupType, setPopupType] = useState('checkout');

  const showModal = (popupType) => {
    setPopupType(popupType);
    setIsPopupOpened(true);
  }

  const hideModal = () => {
    setIsPopupOpened(false);
  }

  return (
    <PopupContext.Provider value={{ showModal, hideModal }}>
      {children}
      {isPopupOpened && (
        <Popup popupType={popupType} setPopupType={setPopupType} />
      )}
    </PopupContext.Provider>
  )
}

export const Popup = ({ popupType, setPopupType }) => {
  const { hideModal } = usePopupsContext();

  return (
    <PopupsWrapperStyled>
      <div className="popupWrapper" onClick={() => {
        hideModal()
      }}>
        <div className="popupContent" onClick={(event) => {
          event.stopPropagation();
        }}>
          {popupType === popupTypes.LOGIN && (
            <Login
              onSuccess={() => hideModal()}
              onRegisterClick={() => setPopupType(popupTypes.REGISTER)}
              onPasswordResetClick={() => setPopupType(popupTypes.PASSWORD_RESET)} />
          )}
          {popupType === popupTypes.REGISTER && (
            <Register
              onSuccess={() => hideModal()}
              onHaveAccountClick={() => setPopupType(popupTypes.LOGIN)} />

          )}
          {popupType === popupTypes.CHECKOUT && (
            <Checkout onSuccess={() => hideModal()} offerId="S531234647_PL" />
          )}
          {popupType === popupTypes.PASSWORD_RESET && (
            <PasswordReset onSuccess={() => hideModal()} />
          )}
        </div>
      </div>
    </PopupsWrapperStyled>
  )
}
