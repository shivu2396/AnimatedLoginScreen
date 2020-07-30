import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';
import { Images } from '../../theme/image';

const FoodItems = ({ title, src, subtitle, OnPress, id, subpart }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.productcontent}>
      <Image style={styles.fooditems} source={src} />
      <Text style={styles.heading}> {title}</Text>
    </TouchableOpacity>
  </View>
);

export default FoodItems;
