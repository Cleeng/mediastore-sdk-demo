import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;

  background-color: ${ props => props.color ? props.color : 'transparent'};
`;

export const LogoStyled = styled.img`
  height: 50px;
  width: auto;
`;