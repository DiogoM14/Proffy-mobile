import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import { Container, ScrollTeacherList, SearchForm, Label, Input, InputGroup, InputBlock, SubmitButton, SubmitButtonText } from './styles';
import TeacherItem from '../../components/TeacherItem';

import { Feather } from '@expo/vector-icons';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input placeholder="Qual a matéria?" placeholderTextColor="#c1bccc" />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input placeholder="Qual o dia?" placeholderTextColor="#c1bccc" />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input placeholder="Qual horário?" placeholderTextColor="#c1bccc" />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>

          </SearchForm>
        )}
      </PageHeader>

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
