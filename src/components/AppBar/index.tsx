// @flow
import React from 'react';
import styled from 'styled-components';
import RickAndMortyLogo from '../../assets/svgs/rick-and-morty-logo.svg';

const HEADER_BOX_SHADOW =
  '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)';

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #11b0c8;
  border-bottom: 1px solid #06a3bb;
  padding: 10px 25px;
  height: 90px;
  box-shadow: ${HEADER_BOX_SHADOW};
`;

const Image = styled.img`
  height: 60px;
`;

function AppBar(): React.ReactElement {
  return (
    <Header>
      <Image src={RickAndMortyLogo} alt="Rick & Morty logo" />
    </Header>
  );
}

export default AppBar;
