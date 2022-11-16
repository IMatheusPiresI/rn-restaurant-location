import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(22)}px;
`;

export const BoxChiefImage = styled.View`
  flex: 1;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
`;

export const ImageChief = styled.Image`
  width: 100%;
  height: ${RFValue(425)}px;
  position: absolute;
  bottom: ${RFPercentage(35)}px;
`;

export const BoxAppInfo = styled.View`
  width: 125%;
  height: ${RFPercentage(50)}px;
  position: absolute;
  bottom: -${RFPercentage(15)}px;
  background-color: rgba(34, 179, 100, 0.85);
  border-radius: 5000px;
  border-color: #fff;
  border-width: 5px;

  align-items: center;
  padding: ${RFValue(20)}px ${RFValue(40)}px;
`;

export const RestaurantName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  font-style: italic;
`;

export const BoxOptions = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(30)}px;
`;
