import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  active: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  border-width: ${RFValue(1)}px;
  padding: ${RFValue(3)}px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
  elevation: 3;

  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.colors.shape};
      background-color: ${({ theme }) => theme.colors.darkGreen};
    `};
`;
