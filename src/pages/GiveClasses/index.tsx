import React from 'react';
import { View } from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import { Container, Content, Title, Description, OkButton, OkButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      <Content source={giveClassesBgImage} resizeMode="contain">
        <Title>Queres ser um Proffy?</Title>
        <Description>Para começar, precisas de te registar como professor na nossa plataforma web.</Description>
      </Content>

      <OkButton onPress={handleNavigateBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  );
}

export default GiveClasses;
