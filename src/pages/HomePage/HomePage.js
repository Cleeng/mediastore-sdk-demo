
import { useContext } from 'react';
import AuthContext from '../../components/AuthContext/AuthContext';
import {
  HomePageWrapperStyled,
  BannerStyled,
  BannerBgStyled,
  BannerContentStyled,
  BannerHeading,
  BannerSubheading,
  BuyButtonStyled,
  HomePageContentStyled,
  ListOfComponentsStyled,
  ComponentItemStyled,
  ComponentTitleStyled,
  ComponentWrapperStyled
} from './HomePageStyled';
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
  // Capture,
  // Consents,
  CheckoutConsents,
  TransactionList,
  SubscriptionSwitches
} from '@cleeng/mediastore-sdk';


const HomePage = () => {
  const { showModal } = usePopupsContext();
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <HomePageWrapperStyled>
      <Header />
      <BannerStyled>
        <BannerBgStyled/>
        <BannerContentStyled>
          <BannerHeading>Your favorites movies, series, and much more.</BannerHeading>
          <BannerSubheading>Buy it and enjoy it for only 10$/month</BannerSubheading>
          <BuyButtonStyled onClick={() => showModal('checkout')}>Buy</BuyButtonStyled>
        </BannerContentStyled>
      </BannerStyled>
      <HomePageContentStyled>
        { isAuthenticated && (
        <ListOfComponentsStyled>

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
              <PasswordReset />
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Checkout</ComponentTitleStyled>
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
              <Subscriptions />
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
              <CheckoutConsents />
            </ComponentWrapperStyled>
          </ComponentItemStyled> *

          {/* <ComponentItemStyled>
            <ComponentTitleStyled>Capture</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <Capture redirectUrl={['/acc']} />
            </ComponentWrapperStyled>
          </ComponentItemStyled> */}

        </ListOfComponentsStyled>
        )}
      </HomePageContentStyled>
    </HomePageWrapperStyled>
  )
}

export default HomePage;