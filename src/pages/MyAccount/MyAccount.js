import { MyAccountStyled } from './MyAccountStyled';
import Header from '../../components/Header/Header';
import { useRouteMatch } from 'react-router-dom';

const MyAccount = () => {
  const match1 = useRouteMatch();

  return (
    <MyAccountStyled>
      <Header />
      { match1 && (
        <MyAccount routeMatch={match1} />
      )}
    </MyAccountStyled>
  )
}

export default MyAccount;
