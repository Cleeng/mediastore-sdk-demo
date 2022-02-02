/* eslint-disable no-unused-vars */

import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../components/AuthContext/AuthContext';
import {
  HomePageWrapperStyled,
  HomePageContentStyled,
  ListOfComponentsStyled,
  ComponentItemStyled,
  ComponentTitleStyled,
  ComponentWrapperStyled
} from './ComponentsStyled';
import Header from '../../components/Header/Header';
import { usePopupsContext } from '../../components/Popups/Popups';
import {
  Login,
  Register,
  PasswordReset,
  Purchase,
  // MyAccount,
  Subscriptions,
  PaymentInfo,
  UpdateProfile,
  Capture,
  Consents,
  CheckoutConsents,
  TransactionList,
  SubscriptionSwitches,
  Checkout,
  PlanDetails
} from '@cleeng/mediastore-sdk';


const HomePage = () => {
  let history = useHistory();
  const { showModal } = usePopupsContext();
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <HomePageWrapperStyled>
      <Header />
      <HomePageContentStyled>
        { isAuthenticated && (
        <ListOfComponentsStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Checkout Wrapper</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <Checkout offerId="S592266666_PL" onSuccess={() => history.push('/acc')}/>
            </ComponentWrapperStyled>
          </ComponentItemStyled>

           <ComponentItemStyled>
            <ComponentTitleStyled>Register</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <Register />
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Login</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <Login />
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>PasswordReset</ComponentTitleStyled>
            <ComponentWrapperStyled>
            <PasswordReset onSuccess={() => console.log('success')}/>
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Checkout</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <Purchase onPaymentComplete={() => console.log('complete')}/>
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Plan Details</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <PlanDetails />
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Subscriptions</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <Subscriptions />
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Subscription Switches</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <SubscriptionSwitches offerId={'S538257415_PL'}/>
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Payment details</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <PaymentInfo />
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Transactions list</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <TransactionList />
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>User Profile</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <UpdateProfile />
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Consents</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <CheckoutConsents onSuccess={() => console.log('Checkout onSuccess callback')}/>
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Capture</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <Capture onSuccess={() => console.log('Capture onSuccess callback')}/>
            </ComponentWrapperStyled>
          </ComponentItemStyled>

        </ListOfComponentsStyled>
        )}
      </HomePageContentStyled>
    </HomePageWrapperStyled>
  )
}

export default HomePage;