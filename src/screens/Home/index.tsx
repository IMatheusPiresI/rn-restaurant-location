/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import ChiefWoman from '../../assets/chiefwoman.png';
import { ButtonWelcomeRoles } from '../../components/ButtonWelcomeRoles';

import * as S from './styles';

export const Home = () => {
  const navigation = useNavigation();

  const handleGoToLocation = () => {
    navigation.navigate('RestaurantLocation');
  };

  return (
    <S.Container
      source={{
        uri: 'https://i.pinimg.com/originals/da/27/15/da27153b26bc7d304223bb197b63cf13.jpg',
      }}
      resizeMode="cover"
    >
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <S.BoxChiefImage>
        <S.ImageChief source={ChiefWoman} resizeMode="cover" />
      </S.BoxChiefImage>
      <S.BoxAppInfo style={{ elevation: 25 }}>
        <S.RestaurantName>Welcome to Vegreen</S.RestaurantName>

        <S.BoxOptions>
          <ButtonWelcomeRoles
            title="Menu"
            uri="https://img.freepik.com/free-vector/green-restaurant-menu-background_23-2147490040.jpg"
          />
          <ButtonWelcomeRoles
            title="Location"
            uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhXVTZVtIw92zmhTfo2ocTNhOfOyKQkajsA&usqp=CAU"
            onPress={handleGoToLocation}
          />
          <ButtonWelcomeRoles
            title="Orders"
            uri="https://i.pinimg.com/originals/48/89/a3/4889a3eefec6c33e097c0d2aaf00ff1d.jpg"
          />
        </S.BoxOptions>
      </S.BoxAppInfo>
    </S.Container>
  );
};
