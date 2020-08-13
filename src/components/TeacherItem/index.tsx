import React from 'react';
import { Image } from 'react-native';

import { Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio, Footer, Price, PriceValue, ButtonsContainer, FavoriteButton, ContactButton, ContactButtonText } from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        {teacher.bio}
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>{teacher.cost}</PriceValue>
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
