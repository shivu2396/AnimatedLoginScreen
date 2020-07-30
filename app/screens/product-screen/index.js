import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import { styles } from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fooddata from '../../json-data/foodlist';
import FoodItems from '../../components/product-card/productitems';
import Picturesdata from '../../json-data/pictures';
import Carousel from 'react-native-snap-carousel';
import renderitem from '../../components/carousal-data/banner';

const ProductScreen = () => {
  const [food, setfood] = useState(Fooddata);
  const [pic, setpic] = useState(Picturesdata);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <FontAwesome
            style={styles.searchicon}
            name="search"
            color="black"
            size={15}
          />
          <TextInput
            style={styles.searchBarInput}
            placeholder="Search for any Products "
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <FlatList
        data={Fooddata}
        renderItem={({ item }) => (
          <FoodItems id={item.id} title={item.title} src={item.src} />
        )}
        numColumns={3}
        keyExtractor={(item, index) => item.id}
      />

      <Carousel
        layout={'default'}
        data={pic}
        sliderWidth={400}
        itemWidth={400}
        renderItem={renderitem}
        // onSnapToItem={(index) => this.setState({ activeIndex: index })}
      />
    </View>
  );
};
export default ProductScreen;
