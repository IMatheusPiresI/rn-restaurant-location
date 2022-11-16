import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';

import { ButtonTypeVehicle } from '../../components/ButtonTypeVehicle';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

type Location = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type Vehicle = 'DRIVING' | 'BICYCLING' | 'WALKING' | 'TRANSIT';

type InfoRoute =
  | {
      duration: string;
      distance: string;
    }
  | undefined;

export const RestaurantLocation = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  const [typeVehicle, setTypeVehicle] = useState<Vehicle>('DRIVING');
  const [infoRoute, setInfoRoute] = useState<InfoRoute>(undefined);
  console.log;
  const [location, setLocation] = useState<Location | undefined>(undefined);
  const theme = useTheme();

  const handlePermissionLocation = () => {
    Platform.OS === 'android'
      ? PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ).then((log) => {
          console.log('User accept');
          console.log(log, 'log');
        })
      : '';
  };

  const getMyLocation = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        console.log(info.coords.latitude);
        console.log(info.coords.longitude);

        setLocation({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      () => {
        console.log('erro');
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
      },
    );
  };

  const handleChangeTypeVehicle = (type: Vehicle) => {
    setTypeVehicle(type);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getMyLocation();
  }, []);
  return (
    <S.Container>
      <StatusBar hidden />
      <S.Header>
        <S.ButtonGoBack onPress={handleGoBack}>
          <MaterialIcons
            name="arrow-back"
            size={23}
            color={theme.colors.shape}
          />
        </S.ButtonGoBack>
        <S.Title>Time and Distance to our restaurant</S.Title>
      </S.Header>

      <MapView
        style={{ width: width, height: height }}
        onMapReady={handlePermissionLocation}
        region={location}
        zoomEnabled={true}
        loadingEnabled={true}
        showsUserLocation={true}
        showsMyLocationButton
      >
        <Marker
          key={'Vegreen'}
          coordinate={{
            latitude: -15.827228,
            longitude: -48.113813,
          }}
          title={'Vegreen'}
          description={'Restaurant'}
        >
          <S.MarkerContainer
            source={{
              uri: 'https://i.insider.com/535940feecad04bf38aaa871?width=600&format=jpeg&auto=webp',
            }}
            resizeMode="cover"
          />
        </Marker>
        <MapViewDirections
          origin={location}
          destination={{
            latitude: -15.827228,
            longitude: -48.113813,
          }}
          apikey={'AIzaSyBp-zP6Ts9i36u2FSSGrjS7psLXTePFkRs'}
          language={'pt-BR'}
          region={'BR'}
          mode={typeVehicle}
          strokeWidth={4}
          strokeColor={'#03d9f5'}
          onReady={(item) => {
            setInfoRoute({
              duration: item.duration.toFixed(1),
              distance: item.distance.toFixed(1),
            });
          }}
        />
      </MapView>
      <S.ContainerInfoRoute>
        <S.VehicleTypesWrapper>
          <ButtonTypeVehicle
            iconName="directions-car"
            onPress={() => handleChangeTypeVehicle('DRIVING')}
            active={typeVehicle === 'DRIVING'}
          />
          <ButtonTypeVehicle
            iconName="directions-bike"
            onPress={() => handleChangeTypeVehicle('BICYCLING')}
            active={typeVehicle === 'BICYCLING'}
          />
          <ButtonTypeVehicle
            iconName="directions-walk"
            onPress={() => handleChangeTypeVehicle('WALKING')}
            active={typeVehicle === 'WALKING'}
          />
        </S.VehicleTypesWrapper>

        <S.InfoVehicleTimeDistance>
          <S.WrapperInfo>
            <MaterialIcons name="timer" size={23} color={theme.colors.shape} />
            <S.Info>
              {infoRoute ? infoRoute.duration + ' min' : 'loading...'}
            </S.Info>
          </S.WrapperInfo>

          <S.WrapperInfo>
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={23}
              color={theme.colors.shape}
            />
            <S.Info>
              {infoRoute ? infoRoute.distance + ' km/h' : 'loading...'}
            </S.Info>
          </S.WrapperInfo>
        </S.InfoVehicleTimeDistance>
      </S.ContainerInfoRoute>
    </S.Container>
  );
};
