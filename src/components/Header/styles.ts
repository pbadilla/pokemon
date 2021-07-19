import styled from 'styled-components/macro'
import { device } from '~/styles/breakpoints'

export const Header = styled.header`
  margin: 5vh 0;
  width: 100%;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

export const HeaderWrapper = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  text-align: center;
`

export const LogoImmfly = styled.img`
  margin: 0 auto;
  width: 25px;
`;

export const LogoPokemon = styled.img`
  margin: 0 auto;
  width: 230px;
`