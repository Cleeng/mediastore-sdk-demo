
import { useState, createContext, useContext } from 'react';
import { Login, Register, OfferContainer } from '@cleeng/mediastore-sdk';
import {
  PopupsWrapperStyled
} from './PopupsStyled';

export const popupTypes = {
  CHECKOUT: 'checkout',
  LOGIN: 'login',
  REGISTER: 'register'
}

const initialState = {
  showModal: () => {},
  hideModal: () => {},
}

const PopupContext = createContext(initialState);
export const usePopupsContext = () => useContext(PopupContext);


export const Popups = ({children}) => {
  const [isPopupOpened,setIsPopupOpened] = useState(false);
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
        <Popup popupType={popupType} />
      )}
    </PopupContext.Provider>
  )
}

export const Popup = ({popupType}) => {
  const {hideModal} = usePopupsContext();

  return (
    <PopupsWrapperStyled>
        <div className="popupWrapper" onClick={() => {
            hideModal()
          }}>
          <div className="popupContent" onClick={(event) => {
            event.stopPropagation(); 
          }}>
            {popupType === popupTypes.LOGIN && (
              <Login onSuccess={() => hideModal()} />
            )}
            {popupType === popupTypes.REGISTER && (
              <Register onSuccess={() => hideModal()}/>
      
            )}
            {popupType === popupTypes.CHECKOUT && (
              <OfferContainer onPaymentComplete={() => hideModal()} />
            )}
          </div>
        </div>
    </PopupsWrapperStyled>
  )
}
