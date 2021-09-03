import Auth from "../../Auth"
import logo from './images/logo-green.png';

import {
  HeaderStyled,
  LogoStyled
} from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled src={logo} />
      <Auth/>
    </HeaderStyled>
  )
}

export default Header;