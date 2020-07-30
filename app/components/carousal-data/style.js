import { StyleSheet } from 'react-native';
import { Size } from '../../../app/theme/size';

export const styles = StyleSheet.create({
  container: {
    height: Size.deviceWidth * 0.6,
    marginBottom: Size.moderateScale(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  imagesbanner: {
    height: Size.deviceWidth * 0.6,
    width: '100%',
    // width: Size.deviceWidth * 0.99,
    // padding: 10,
  },
});
