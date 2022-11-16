import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type Props = {
  uri: string;
  title: string;
} & TouchableOpacityProps;

export const ButtonWelcomeRoles = ({ title, uri, ...rest }: Props) => (
  <S.Container {...rest}>
    <S.BackgroundImage
      source={{
        uri: uri,
      }}
      resizeMode="cover"
    >
      <S.ShadowImage>
        <S.Title>{title}</S.Title>
      </S.ShadowImage>
    </S.BackgroundImage>
  </S.Container>
);
