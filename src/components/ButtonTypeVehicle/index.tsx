import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

type Props = {
  iconName: string;
  active?: boolean;
} & TouchableOpacityProps;

export const ButtonTypeVehicle = ({
  iconName,
  active = false,
  ...rest
}: Props) => {
  const theme = useTheme();
  return (
    <S.Container {...rest} active={active}>
      <MaterialIcons
        name={iconName}
        size={28}
        color={active ? theme.colors.shape : theme.colors.darkGreen}
      />
    </S.Container>
  );
};
