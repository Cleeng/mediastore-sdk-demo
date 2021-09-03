import styled from 'styled-components';
import cover from './cover.jpeg';

export const HomePageWrapperStyled = styled.div`
  position: relative;
  background: white;
  height: 100vh;
  width: 100%;
`;

export const BannerStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const BannerBgStyled = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.7;
  }
`;

export const BannerContentStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerHeading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #4EB7A1;
  margin-bottom: 36px;
`;

export const BannerSubheading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 36px;
`;

export const BuyButtonStyled = styled.button`
  padding: 16px 30px;
  min-width: 140px;
  font-size: 16px;
  background: #4EB7A1;
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const HomePageContentStyled = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 1100px;
  margin: 50px auto;
`;

export const ListOfComponentsStyled = styled.ul`

`;

export const ComponentItemStyled = styled.li``;

export const ComponentTitleStyled = styled.h4`
  font-size: 26px;
  font-weight: bold;
  color: #4EB7A1;
  margin: 150px 0 30px 0;
  text-align: center;
`;

export const ComponentWrapperStyled = styled.div`
  padding: 50px 150px;
  border: 5px #CCCCCC solid;
`;