
import {
  HomePageWrapperStyled,
  BannerStyled,
  BannerBgStyled,
  BannerContentStyled,
  BannerHeading,
  BannerSubheading,
  BuyButtonStyled,
  HomePageContentStyled,
  // ListOfComponentsStyled,
  ComponentItemStyled,
  ComponentTitleStyled,
  ComponentWrapperStyled
} from './HomePageStyled';
import Header from '../../components/Header/Header';
import { usePopupsContext } from '../../components/Popups/Popups';
import {
  Login,
  Register,
  Purchase,
  MyAccount,
  PlanDetails,
  SubscriptionSwitchesList,
  PaymentInfo,
  UpdateProfile,
  Capture,
  Consents,
  CheckoutConsents
} from '@cleeng/mediastore-sdk';


const HomePage = () => {
  const { showModal } = usePopupsContext();

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
        {/* <ListOfComponentsStyled>

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
            <ComponentTitleStyled>Checkout</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <Purchase />
            </ComponentWrapperStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>My Account</ComponentTitleStyled>
          </ComponentItemStyled>

          <ComponentItemStyled>
            <ComponentTitleStyled>Plan Details</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <PlanDetails />
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
              Hard to export that component
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
          </ComponentItemStyled> */}

          {/* <ComponentItemStyled>
            <ComponentTitleStyled>Capture</ComponentTitleStyled>
            <ComponentWrapperStyled>
              <Capture redirectUrl={['/acc']} />
            </ComponentWrapperStyled>
          </ComponentItemStyled> */}

        {/* </ListOfComponentsStyled> */}
      </HomePageContentStyled>
    </HomePageWrapperStyled>
  )
}

export default HomePage;