import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';
import { Images } from '../../theme/image';

const Category = ({ title, src, subtitle, OnPress, id, subpart }) => (
  <View style={styles.content}>
    <TouchableOpacity style={styles.inner}>
      <Text style={styles.heading}> {title}</Text>
      <Text style={styles.subheading}> {subtitle}</Text>
      <Image style={styles.logo1} source={Images.main} />
      <Text style={styles.innertext}> Rs 200</Text>
      <FontAwesome style={styles.innertext1} name="heart-o" size={30} />
      <Text style={styles.TITLE}>{subpart}</Text>
    </TouchableOpacity>
  </View>
);
export default Category;
