
import { useHistory } from 'react-router-dom';
import {
  HomePageWrapperStyled,
  HomePageContentStyled,
  ListOfComponentsStyled,
  ComponentItemStyled,
  ComponentTitleStyled,
  ComponentTextStyled,
  ComponentWrapperStyled
} from './ComponentsStyled';
import Header from '../../components/Header/Header';
import {
  Login,
  Register,
  PasswordReset,
  Purchase,
  Subscriptions,
  PaymentInfo,
  UpdateProfile,
  Capture,
  CheckoutConsents,
  TransactionList,
  SubscriptionSwitches,
  Checkout,
  PlanDetails,
  MediastoreAuth
} from '@cleeng/mediastore-sdk';


const HomePage = () => {
  let history = useHistory();

  return (
    <HomePageWrapperStyled>
      <Header />
      <HomePageContentStyled>
        {MediastoreAuth.isLogged() && (
          <ListOfComponentsStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled>Checkout</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <Checkout offerId="S531234647_PL" onSuccess={() => history.push('/acc')} />
              </ComponentWrapperStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled id="register">Register</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <Register onSuccess={() => history.push('/')} onHaveAccountClick={() => { window.location = '#login'; return false; }} />
              </ComponentWrapperStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled id="login">Login</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <Login
                  onSuccess={() => history.push('/')}
                  onRegisterClick={() => { window.location = '#register'; return false }}
                  onPasswordResetClick={() => { window.location = '#passwordReset'; return false }} />
              </ComponentWrapperStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled id="passwordReset">PasswordReset</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <PasswordReset onSuccess={() => { console.log('Reset password requested successfully'); history.push('/') }} />
              </ComponentWrapperStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled>Purchase</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <Purchase
                  offerId="S531234647_PL"
                  onSuccess={() => history.push('/acc')}
                />
              </ComponentWrapperStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled>PlanDetails</ComponentTitleStyled>
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
              <ComponentTitleStyled>SubscriptionSwitches</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <SubscriptionSwitches offerId='S531234647_PL' />
              </ComponentWrapperStyled>
              <ComponentTextStyled>
                'Oops, something went wrong!' error message will be shown when user has no access to the offer S531234647_PL
              </ComponentTextStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled>PaymentInfo</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <PaymentInfo />
              </ComponentWrapperStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled>TransactionList</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <TransactionList />
              </ComponentWrapperStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled>UpdateProfile</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <UpdateProfile />
              </ComponentWrapperStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled>CheckoutConsents</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <CheckoutConsents onSuccess={() => console.log('Checkout onSuccess callback')} />
              </ComponentWrapperStyled>
              <ComponentTextStyled>
                If there are no consents fields to update, the loader will be shown
              </ComponentTextStyled>
            </ComponentItemStyled>

            <ComponentItemStyled>
              <ComponentTitleStyled>Capture</ComponentTitleStyled>
              <ComponentWrapperStyled>
                <Capture onSuccess={() => console.log("capture success clb")} />
              </ComponentWrapperStyled>
              <ComponentTextStyled>
                If there are no capture fields to update, the loader will be shown
              </ComponentTextStyled>

            </ComponentItemStyled>

          </ListOfComponentsStyled>
        )}
      </HomePageContentStyled>
    </HomePageWrapperStyled>
  )
}

export default HomePage;