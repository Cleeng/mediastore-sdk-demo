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
  const { showModal } = usePopupsContext();

  return (
    <HomePageWrapperStyled>
      <Header isHomePage />
      <BannerStyled>
        <BannerBgStyled />
        <BannerContentStyled>
          <BannerHeading>Your favorites movies, series, and much more.</BannerHeading>
          <BannerSubheading>Buy it and enjoy the best content</BannerSubheading>
          <BuyButtonStyled onClick={() => showModal('checkout')}>Buy</BuyButtonStyled>
        </BannerContentStyled>
      </BannerStyled>
      <HomePageContentStyled />
    </HomePageWrapperStyled>
  )
}

export default HomePage;