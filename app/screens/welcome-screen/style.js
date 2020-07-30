import { StyleSheet } from 'react-native';
import { Size } from '../../../app/theme/size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D6E63',
  },

  logo: {
    position: 'relative', // because it's parent
    width: Size.deviceHeight * 0.6,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    top: 1, // child
    // bottom: 0, // position where you want
    // left: 0,
    color: 'white',
    fontSize: 18,
  },
  text1: {
    position: 'absolute', // child
    marginVertical: 75,
    top: 1,
    textAlign: 'center', // position where you want
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 22,
  },
  text2: {
    position: 'absolute', // child
    marginVertical: 40,
    top: 65,
    textAlign: 'center', // position where you want
    color: 'white',
    fontSize: 10,
  },
  categorylist: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,

    backgroundColor: 'white',
  },
  title: {},
});
