import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Container, LandingImage, Title, TitleBold, ButtonsContainer, Button, ButtonText, TotalConnections } from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses')
  }

  function handleNavigateToStudyPages() {
    navigation.navigate('Study')
  }

  const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
      api.get('connections').then(response => {
        const { total } = response.data;

        setTotalConnections(total);
      })
    }, [])

  return (
    <Container>
      <LandingImage source={landingImg} style={{resizeMode: 'contain'}} />

      <Title>
        Bem vindo, {'\n'}
        <TitleBold>O que desejas fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <Button style={{backgroundColor: '#9871f5'}} onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />

          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button onPress={handleNavigateToGiveClassesPage} style={{backgroundColor: '#04d361'}}>
          <Image source={giveClassesIcon} />

          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conceções já realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
}

export default Landing;
