import { DOGICON, CATICON } from '../assets/images/markers';
import { PHOTO1, PHOTO2, PHOTO3 } from '../assets/images/pets';

export const getMissedPets = () => {
  return [
    {
      id: 1, name: 'Catinga',
      coordinate: { latitude: -23.189, longitude: -45.933 },
      type: 'cat', icon: CATICON, photo: PHOTO1,
      missedDate: '2019-03-06', description: 'Gato vira-lastas simpático do posto Ipiranga',
      contact: { name: 'Pedrão', phone: '12982041640' }
    },
    {
      id: 2, name: 'Lulu',
      coordinate: { latitude: -23.185, longitude: -45.935 },
      type: 'dog', icon: DOGICON, photo: PHOTO2,
      missedDate: '2019-02-28', description: 'Poodle linda porte médio cor branca...',
      contact: { name: 'Josephina', phone: '1299999999' }
    },
    {
      id: 3, name: 'Amadeu',
      coordinate: { latitude: -23.187, longitude: -45.937 },
      type: 'dog', icon: DOGICON, photo: PHOTO3,
      missedDate: '2019-02-28', description: 'Boxer malhado que atende pelo nome de Amadeu',
      contact: { name: 'Silva', phone: '1299999999' }
    }
  ]
}

export const getMissedPet = (id) => {
  return getMissedPets().filter(pet => pet.id == id)[0];
}
