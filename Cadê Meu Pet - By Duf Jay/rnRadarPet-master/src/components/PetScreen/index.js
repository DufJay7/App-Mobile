import React, { Component } from 'react'
import { Text, View, Image, Button, Linking } from 'react-native'

import { getMissedPet } from '../../services/FetchPet';

import styles from './styles';

export default class index extends Component {
  makeCall(phone) {
    Linking.openURL(`tel:${phone}`);
  }

  render() {
    const { navigation } = this.props;
    const pet = getMissedPet(navigation.getParam('petId', 'NO-ID'));

    return (
      <View style={styles.container}>
        <Image
          source={pet.photo}
          resizeMode={'contain'}
          style={styles.photo}/>
        <Text style={styles.name}>{pet.name} foi perdido</Text>
        <Text style={styles.description}>{pet.description}</Text>
        <Text style={styles.contact}>Dono(a): {pet.contact.name}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Ligar" onPress={e => { this.makeCall(pet.contact.phone) }}/>
        </View>
      </View>
    )
  }
}
