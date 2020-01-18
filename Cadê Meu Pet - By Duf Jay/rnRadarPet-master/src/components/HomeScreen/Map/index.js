import React, { Component } from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

import { getMissedPets } from '../../../services/FetchPet';
import { POINTICON } from '../../../assets/images/markers';
import styles from './styles';

export default class Map extends Component {
  state = {
    region: null,
    me: null,
    pets: null
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async({ coords: {latitude, longitude} }) => {
        this.setState({
          region: {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          },
          me: {
            coordinate: {
              latitude: latitude,
              longitude: longitude
            },
            image: POINTICON
          },
          pets: getMissedPets()
        });
      }
    );
  }

  showPetInfo(pet) {
    this.props.navigation.push('Pet', { petId: pet.id });
  }

  render() {
    const { region, me, pets } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={region}>

          {me && (
            <Marker
              coordinate={me.coordinate}
              image={me.image}/>
          )}

          {pets &&
            pets.map(pet => (
              <Marker
                key={pet.id}
                coordinate={pet.coordinate}
                image={pet.icon}
                onPress={e => { this.showPetInfo(pet) }}/>
            ))
          }
        </MapView>
      </View>
    );
  }
}
