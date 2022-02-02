/* eslint-disable no-unused-vars */

import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../components/AuthContext/AuthContext';
import {
  HomePageWrapperStyled,
  BannerStyled,
  BannerBgStyled,
  BannerContentStyled,
  BannerHeading,
  BannerSubheading,
  BuyButtonStyled,
  HomePageContentStyled
} from './HomePageStyled';
import Header from '../../components/Header/Header';
import { usePopupsContext } from '../../components/Popups/Popups';


const HomePage = () => {
  let history = useHistory();
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
      <HomePageContentStyled />
    </HomePageWrapperStyled>
  )
}

export default HomePage;