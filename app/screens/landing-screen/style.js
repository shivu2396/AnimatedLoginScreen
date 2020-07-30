import { StyleSheet } from 'react-native';
import { Size } from '../../../app/theme/size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D6E63',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: Size.deviceHeight * 0.3,
    height: Size.deviceHeight * 0.3,
    borderRadius: Size.moderateScale(110),
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: Size.moderateScale(30),
    borderTopRightRadius: Size.moderateScale(30),
    paddingVertical: Size.moderateScale(50),
    paddingHorizontal: Size.moderateScale(30),
  },
  logo: {
    width: Size.deviceHeight * 0.3,
    height: Size.deviceHeight * 0.3,
    borderRadius: Size.moderateScale(110),
  },
  title: {
    color: '#8D6E63',
    fontSize: Size.moderateScale(30),
    fontWeight: 'bold',
  },

  button: {
    flexDirection: 'row',
    marginTop: Size.moderateScale(30),
  },
  box: {
    width: 150,
    borderWidth: 0.5,
    borderRadius: 3,
    backgroundColor: '#8D6E63',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  but: {
    flexDirection: 'row',
    width: 150,
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: '#8D6E63',

    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 10,
  },
  textSign1: {
    color: '#8D6E63',
  },
  textSign: {
    color: 'white',
  },
});
