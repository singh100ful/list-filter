import {RouteProp} from '@react-navigation/native';
import * as React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderMolecule from 'src/components/molecules/HeaderMolecule';
import {StackParamsList} from 'src/layout/Layout';
import {WHITE} from 'src/styles/colors';
import {SCALE_10} from 'src/styles/spacing';

interface MapProps {
  route?: RouteProp<StackParamsList, 'Map'>;
}

const Map: React.FC<MapProps> = props => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={{flex: 1}}>
      <HeaderMolecule title="Assigned To Me">
        <Icon
          name="list"
          color={WHITE}
          size={20}
          style={{paddingHorizontal: SCALE_10}}
        />
      </HeaderMolecule>
      <View
        style={{
          height: '92%',
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{...StyleSheet.absoluteFillObject}}
          region={{
            latitude: 51.526,
            longitude: 19.2551,
            latitudeDelta: 0.9,
            longitudeDelta: 0.9 * (width / height),
          }}>
          {props.route?.params.data.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              description={marker.short_desc}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

export default Map;
