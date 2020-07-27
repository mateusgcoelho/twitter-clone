import React from 'react';

import SideBar from '../Sidebar';
import MenuBar from '../MenuBar';
import Main from '../Main';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
      <Container>
          <Wrapper>
              <MenuBar />
              <Main />
              <SideBar />
          </Wrapper>
      </Container>
  );
}

export default Layout;