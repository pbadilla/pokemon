import React, { SVGProps } from 'react';

import ImmflyLogo from "~/assets/images/immfly_logo.svg";
import PokemonLogo from "~/assets/images/pokemon_logo.svg";

import * as SC from './styles';
  
const Header: React.FC = () => {
  return (
    <SC.Header>
      <SC.HeaderWrapper>
        <SC.LogoImmfly src={ImmflyLogo} data-test="logo-immfly" />
        <SC.LogoPokemon src={PokemonLogo} data-test="logo-pokemon" />
      </SC.HeaderWrapper>
    </SC.Header>
  );
};

export default Header;
