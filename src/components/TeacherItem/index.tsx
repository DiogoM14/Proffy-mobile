import React from 'react';
import { Image } from 'react-native';

import { Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio, Footer, Price, PriceValue, ButtonsContainer, FavoriteButton, ContactButton, ContactButtonText } from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: 'https://github.com/xavi002.png' }} />

        <ProfileInfo>
          <Name>Diogo</Name>
          <Subject>Matemática</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo illo totam iste? Fugiat vitae ea tempora aliquid. Qui ad, voluptas accusamus, nulla maiores asperiores veritatis et nesciunt reiciendis perspiciatis quisquam.
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>20$</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton>
            <Image source={heartOutlineIcon} />
          </FavoriteButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contacto</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>

      </Footer>

    </Container>
  );
}

export default TeacherItem;
