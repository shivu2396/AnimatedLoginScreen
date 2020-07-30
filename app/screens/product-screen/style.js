import { StyleSheet } from 'react-native';
import { Size } from '../../../app/theme/size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D6E63',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: Size.deviceHeight * 0.3,
    height: Size.deviceHeight * 0.1,
    // backgroundColor: 'pink',
  },

  searchBar: {
    padding: Size.moderateScale(3),
    flexDirection: 'row',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    // marginTop: Size.moderateScale(73),
    borderRadius: Size.moderateScale(5),
  },
  searchBarInput: {
    width: Size.deviceWidth * 0.74,
    marginStart: 5,
    fontSize: Size.moderateScale(13),
  },
  searchicon: {
    marginTop: 5,
  },

  contentContainer: {
    height: 200,
    width: 300,
  },
  box: {
    height: Size.deviceHeight * 0.48,
    width: Size.deviceHeight * 0.42,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // backgroundColor: 'white',
  },
});
