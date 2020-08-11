import React from 'react';

import { Container, Image, Title, TitleBold } from './styles';

import landingImg from '../../assets/images/landing.png';

const Landing: React.FC = () => {
  return (
    <Container>
      <Image source={landingImg} style={{resizeMode: 'contain'}} />

      <Title>
        Bem vindo, {'\n'}
        <TitleBold>O que desejas fazer?</TitleBold>
      </Title>
    </Container>
  );
}

export default Landing;
