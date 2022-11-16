import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
`;

export const Header = styled.View`
  width: 85%;
  position: absolute;
  top: ${({ theme }) => theme.metrics.statusBarHeight + 45}px;
  z-index: 2;

  padding: ${RFValue(10)}px ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.lightGreen};

  border-radius: ${RFValue(50)}px;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: bold;

  margin-left: 10px;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const MarkerContainer = styled.ImageBackground`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;

  border-width: 2px;
  border-color: green;
`;

export const ContainerInfoRoute = styled.View`
  width: 100%;
  height: ${({ theme }) =>
    RFPercentage(20) + theme.metrics.bottomSpaceHeight}px;
  background-color: ${({ theme }) => theme.colors.transparent.lightGreen};

  border-top-left-radius: ${RFValue(180)}px;
  border-top-right-radius: ${RFValue(180)}px;
  border-width: ${RFValue(2)}px;
  border-color: ${({ theme }) => theme.colors.darkGreen};
  position: absolute;
  bottom: 0;

  elevation: 10;

  align-items: center;
`;

export const VehicleTypesWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: ${RFValue(200)}px;
  margin: ${RFValue(10)}px;
`;

export const InfoVehicleTimeDistance = styled.View`
  flex-direction: row;

  justify-content: center;
`;

export const WrapperInfo = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0 ${RFValue(20)}px;
`;

export const Info = styled.Text`
  margin-left: 5px;
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.shape};
  elevation: 3;
`;
