import Auth from "../../Auth"
import logo from './images/logo-png.png';

import {
  HeaderStyled,
  LogoStyled
} from './HeaderStyled';

const Header = ({ isHomePage }) => {
  return (
    <HeaderStyled isHomePage={isHomePage}>
      <LogoStyled src={logo} />
      <Auth />
    </HeaderStyled>
  )
}

export default Header;