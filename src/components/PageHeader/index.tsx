import React from 'react';

import { Container, TopBar, GoBack, Title } from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <GoBack onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </GoBack>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>
    </Container>
  );
}

export default PageHeader;
