import React from 'react';

import PageHeader from '../../components/PageHeader';

import { Container, ScrollFavoritesList } from './styles';
import TeacherItem from '../../components/TeacherItem';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Os meus proffys favoritos" />

      <ScrollFavoritesList contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollFavoritesList>
    </Container>
  );
}

export default Favorites;
