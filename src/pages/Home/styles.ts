import styled from 'styled-components/macro';
import media from 'styled-media-query';

export const Container = styled.div<{theme?: string;}>`
  align-items: stretch;
  // background-color: ${props => props.theme === "light" ? '#f3f1f1' : '#363636'};
  background-color:'#f3f1f1';
  display: flex;
  flex-direction: column;
  padding: 30px 80px;

  > svg {
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: -1;
    height: 100vh;
    width: auto;

    path {
      fill: rgba(0, 0, 0, 0.03);
    }
  }

  button {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text.primary};

    width: 50%;
    height: 50px;
    background: #5a92a5;
    margin: 30px auto 0;

    outline: 0;
    border: 0;
    border-radius: 4px;
    opacity: 0.8;

    transition: all linear 0.2s;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  ${media.lessThan('large')`
    padding: 10px;
  `};
`;

export const SubTitle = styled.span`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: normal;
  margin: 2rem 0 0 0;
`;

export const ToggleButton = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: normal;
  margin: 0 0 1rem 0;
`;

export const Pokemons = styled.div`
  display: grid;
  flex: 1;
  gap: 1rem;

  ${media.lessThan('huge')`
    grid-template-columns: repeat(3, 1fr);
  `};

  ${media.between('small', 'large')`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${media.lessThan('small')`
    grid-template-columns: repeat(1, 1fr);
  `};

`;
