import React from 'react';

import PageHeader from '../../components/PageHeader';

import { Container, ScrollTeacherList } from './styles';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />

      <ScrollTeacherList contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollTeacherList>
    </Container>
  );
}

export default TeacherList;
