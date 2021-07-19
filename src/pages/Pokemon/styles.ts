import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const Container = styled.div`
  align-items: center;
  background: white;
  border-radius: 2px;
  border: 1px solid black;
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5% auto 0 auto;
  min-height: 430px;
  transition: all ease 0.4s;
  width: 400px;

  h1 {
    color: black;
    font-size: 14px;
    font-weight: normal;
    margin-top: 2rem;
  }

  img {
    min-width: 80px;
  }
`;

export const GoBack = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  &:hover {
    cursor: pointer;
  }
  > span {
    left: 175px;
    font-size: 14px;
    position: relative;
    top: 15px;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;

export const ContentXtras = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: left;
  width: 100%;
  & > ul {
    list-style: none;
    line-height: 2rem;
    padding: 0;
    text-align: left;
    width: 100%;
    li > ul li {
      font-size: 12px;
      line-height: 14px;
      list-style: disc;
      margin-left: 30px;
    }
  }

  span {
    font-size: 12px;
  }
`;

export const Header = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  margin-top: 14vh;
  position: relative;

  > img {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 6%;
    height: 350px;
    width: 350px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 40px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 3px;
    }
  }

  ${media.lessThan('huge')`
    margin-top: 12vh;

    > img {
      height: 180px;
      width: 180px;
    }

    > div {
      padding-top: 20px;
    }
  `};
`;

export const PokemonLoader = styled.div`
  position: relative;
  z-index: 1;

  height: 350px;
  width: 350px;
  border-radius: 50px;

  ${media.lessThan('huge')`
    height: 180px;
    width: 180px;
    border-radius: 80px;
  `};

  animation: animate 3s ease infinite;

  @keyframes animate {
    0% {
      transform: rotate(240deg);
    }
    100% {
      transform: rotate(600deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-size: 175px 315px;
    background-repeat: no-repeat;
    border-top-left-radius: 175px;
    border-bottom-left-radius: 175px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 50%;
    transform: translateX(-50%);
    width: 9px;
    height: 9px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    z-index: 30;
    box-shadow: 0px 0px 40px 6px #fff;
  }

  span {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: white;
    border-radius: 50%;
  }
`;

export const PokemonName = styled.span`
  font-weight: bold;
  font-size: 60px;
  line-height: 65px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.primary};

  ${media.lessThan('huge')`
    font-size: 35px;
    line-height: 40px;
  `};
`;

