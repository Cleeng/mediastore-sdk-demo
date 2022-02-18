import Auth from "../../Auth"
import logo from './images/logo-green.png';

import {
  HeaderStyled,
  LogoStyled
} from './HeaderStyled';

const Header = ({ color }) => {
  return (
    <HeaderStyled color={color}>
      <LogoStyled src={logo} />
      <Auth/>
    </HeaderStyled>
  )
}

export default Header;