import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';

const renderitem = ({ item, index }) => {
  return (
    <View
      style={{
        backgroundColor: 'pink',
        borderRadius: 5,
        marginVertical: 40,
        height: 200,
        padding: 50,
        // marginLeft: 20,
        // marginRight: 20,
      }}
    >
      <Text style={{ fontSize: 30 }}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );
};

export default renderitem;
