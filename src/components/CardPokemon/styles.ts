import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  alig-items: center;
  background: white;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  height: 180px;
  flex-direction: column;
  justify-content: center;
  transition: all ease 0.4s;
  width: inherit;

  &:hover {
    cursor: pointer;
    border-radius: 15px;

    > img {
      filter: grayscale(0);
      top: -45px;
    }
  }
`;

export const Pokemon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  > img {
    -webkit-transition: -webkit-filter 400ms ease;
    filter: grayscale(100%);
    height: 60px;
    transition: all ease 0.4s;
    width: 60px;
    z-index: 10;
  }

  > svg {
    height: 180px;
    position: absolute;
    right: 5px;
    top: 0;
    width: 180px;

    path {
      fill: rgba(255, 255, 255, 0.2);
    }
  }
  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-top: 5px;
  }
`;

export const PokemonName = styled.span`
  color: ${({ theme }) => theme.colors.background.input};
  font-size: 40px;
  font-weight: bold;
  line-height: 45px;
  text-transform: capitalize;
`;
