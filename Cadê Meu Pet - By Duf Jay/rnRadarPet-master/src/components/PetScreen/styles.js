import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  photo: {
    width: window.width,
    height: Math.round(window.width * 9 / 16)
  },
  name: {
    textAlign: 'center',
    fontSize: 22,
    marginVertical: 20
  },
  description: {
    textAlign: 'center',
    marginVertical: 5
  },
  contact: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 5
  },
  buttonContainer: {
    marginVertical: 5,
    marginHorizontal: 30
  }
})

export default styles;
