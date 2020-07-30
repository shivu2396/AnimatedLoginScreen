import { StyleSheet } from 'react-native';
import { Size } from '../../../app/theme/size';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#8D6E63',
  },
  inner: {
    marginTop: Size.moderateScale(20),
    // marginHorizontal: Size.moderateScale(5),
    marginStart: Size.moderateScale(16),
    // marginVertical: Size.moderateScale(5),
    borderRadius: Size.moderateScale(10),
    height: Size.deviceHeight * 0.25,
    width: Size.deviceHeight * 0.22,
    backgroundColor: 'white',
  },
  heading: {
    marginTop: Size.moderateScale(5),
    marginHorizontal: Size.moderateScale(5),
  },
  subheading: {
    marginHorizontal: Size.moderateScale(5),
    fontSize: Size.moderateScale(10),
    color: 'gray',
  },
  logo1: {
    borderRadius: Size.moderateScale(10),
    // marginHorizontal: 5,
    height: Size.deviceHeight * 0.18,
    width: Size.deviceHeight * 0.22,
  },
  innertext: {
    position: 'absolute',
    bottom: 0,
    marginHorizontal: Size.moderateScale(5),
    fontSize: Size.moderateScale(10),
  },
  innertext1: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    marginHorizontal: Size.moderateScale(5),
    fontSize: 12,
  },
  content: {
    flex: 1,
    backgroundColor: '#8D6E63',
  },
});
