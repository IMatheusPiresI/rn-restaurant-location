import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const BackgroundImage = styled.ImageBackground`
  width: ${RFValue(105)}px;
  height: ${RFValue(105)}px;
  border-radius: ${RFValue(10)}px;
  overflow: hidden;
  background-color: #fff;

  elevation: 5;

  margin: 0 10px;
`;

export const ShadowImage = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(22)}px;
`;
