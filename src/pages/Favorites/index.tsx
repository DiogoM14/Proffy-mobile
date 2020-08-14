import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import { Container, ScrollFavoritesList } from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

const Favorites: React.FC = () => {
  const [favorites, isFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        isFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  })

  return (
    <Container>
      <PageHeader title="Os meus proffys favoritos" />

      <ScrollFavoritesList contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}>
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher} favorited />
          )
        })}
      </ScrollFavoritesList>
    </Container>
  );
}

export default Favorites;
