import React from 'react';
import StickyBox  from 'react-sticky-box';

import News from '../News';
import List from '../List';
import FollowSugestion from '../FollowSugestion';

import { Container, SearchWrapper, SearchInput, Body, SearchIcon } from './styles';

const Sidebar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>

          <StickyBox>
            <Body>
              <List
                title="Talvez você curta"
                elements={[
                  <FollowSugestion
                    name= "Fernando Bertolo"
                    nickname= "@bertolo"
                  />,
                  <FollowSugestion
                    name= "Fernando Bertolo"
                    nickname= "@bertolo"
                  />,
                  <FollowSugestion
                    name= "Fernando Bertolo"
                    nickname= "@bertolo"
                  />
                ]}
              />
              <List
                title="Talvez você curta"
                elements={[
                  <News />,
                  <News />,
                  <News />,
                ]}
              />
              <List
                title="Talvez você curta"
                elements={[
                  <News />,
                  <News />,
                  <News />,
                ]}
              />
              <List
                title="Talvez você curta"
                elements={[
                  <News />,
                  <News />,
                  <News />,
                ]}
              />
            </Body>
          </StickyBox>
      </Container>
  );
}

export default Sidebar;