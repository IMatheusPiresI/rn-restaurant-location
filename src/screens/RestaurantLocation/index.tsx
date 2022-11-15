import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import * as S from './styles';

export const RestaurantLocation = () => {
  const { width, height } = Dimensions.get('window');
  const [location, setLocation] = useState<
    | {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
      }
    | undefined
  >({
    latitude: 37.4220936,
    longitude: -122.083922,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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

  useEffect(() => {
    getMyLocation();
  }, []);
  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <MapView
        style={{ width: width, height: height }}
        onMapReady={handlePermissionLocation}
        region={location}
        zoomEnabled={true}
        loadingEnabled={true}
        showsUserLocation={true}
        showsMyLocationButton
      />
    </S.Container>
  );
};
