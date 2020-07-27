import React from 'react';

import Feed from '../Feed';
import { Container, EditButton, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
        
            <h1>Mateus Coelho</h1>
            <h2>@ocoelhooo</h2>

            <p>
                Programming student in React, React Native, NodeJS • <a href="https://github.com/mateusgcoelho" target="blank">My GitHub</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido em 28 de janeiro de 2004
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>1</strong>
                </span>
                <span>
                    <strong>5,2 mi </strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;