import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import ChiefWoman from '../../assets/chiefwoman.png';

import * as S from './styles';

export const Home = () => {
  const navigation = useNavigation();

  const handleNavigateLocation = () => {
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
          <S.ButtonOption>
            <S.Option
              source={{
                uri: 'https://img.freepik.com/free-vector/green-restaurant-menu-background_23-2147490040.jpg',
              }}
              resizeMode="cover"
            >
              <S.ShadowImage>
                <S.Title>Menu</S.Title>
              </S.ShadowImage>
            </S.Option>
          </S.ButtonOption>
          <S.ButtonOption onPress={handleNavigateLocation}>
            <S.Option
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhXVTZVtIw92zmhTfo2ocTNhOfOyKQkajsA&usqp=CAU',
              }}
            >
              <S.ShadowImage>
                <S.Title>Location</S.Title>
              </S.ShadowImage>
            </S.Option>
          </S.ButtonOption>
          <S.ButtonOption>
            <S.Option
              source={{
                uri: 'https://i.pinimg.com/originals/48/89/a3/4889a3eefec6c33e097c0d2aaf00ff1d.jpg',
              }}
            >
              <S.ShadowImage>
                <S.Title>Orders</S.Title>
              </S.ShadowImage>
            </S.Option>
          </S.ButtonOption>
        </S.BoxOptions>
      </S.BoxAppInfo>
    </S.Container>
  );
};
