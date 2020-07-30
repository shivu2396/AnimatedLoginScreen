import { StyleSheet } from 'react-native';
import { Size } from '../../../app/theme/size';

export const styles = StyleSheet.create({
  container: {
    height: Size.deviceWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    width: Size.deviceWidth * 0.35,
    // flex: 2,
    backgroundColor: 'white',
  },
  productcontent: {
    // marginVertical: 8,
    marginRight: 15,
    // backgroundColor: 'pink',
  },
  fooditems: {
    // marginStart: 10,

    height: Size.deviceWidth * 0.2,
    width: Size.deviceWidth * 0.2,
    borderRadius: 50,
  },
  heading: {
    textAlign: 'center',
  },
});
