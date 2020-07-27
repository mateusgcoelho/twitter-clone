import React from 'react';

import { Container, Dot, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
        <Retweeted>
          <RocketseatIcon />
          Você retweetou
        </Retweeted>

        <Body>
          <Avatar />

          <Content>
            <Header>
              <strong>Mateus Coelho</strong>
              <span>@ocoelhooo</span>
              <Dot />
              <time>27 de jun</time>
            </Header>

            <Description>
              Ola mundo é o que ha
            </Description>
            <ImageContent />

            <Icons>
              <Status>
                <CommentIcon />
                18
              </Status>
              <Status>
                <RetweetIcon />
                18
              </Status>
              <Status>
                <LikeIcon />
                157
              </Status>
            </Icons>
          </Content>
        </Body>
      </Container>
  );
}

export default Tweet;