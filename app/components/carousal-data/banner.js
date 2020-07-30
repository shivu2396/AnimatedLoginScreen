import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';

const renderitem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imagesbanner} source={item.src} />
    </View>
  );
};

export default renderitem;
