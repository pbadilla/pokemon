import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;

  align-items: stretch;
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
    color: ${({ theme }) => theme.colors.text.white};

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

export const Pokemons = styled.div`
  display: grid;
  flex: 1;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  ${media.lessThan('huge')`
    grid-template-columns: repeat(3, 1fr);
  `};

  ${media.lessThan('large')`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: 50px;
  `};
`;
