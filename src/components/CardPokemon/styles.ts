import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  align-items: center;
  
  border-radius: 4px;
  border: 1px solid black;
  background-color: white;
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  height: 180px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  transition: all ease 0.4s;
  width: 95%;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const Pokemon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  > img {
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
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 16px;
  font-weight: normal;
  line-height: 14px;
  margin-top: 50px;
  text-transform: capitalize;
`;
