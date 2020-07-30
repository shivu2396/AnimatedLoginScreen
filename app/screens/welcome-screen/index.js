import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { styles } from './style';
import { Images } from '.././../theme/image';
import Category from '../../components/welcomedata-screen/Welinnerdata';
import Innerdata from '../../json-data/coffeedata';

const SettingsScreen = () => {
  const [topics, settopics] = useState(Innerdata);
  console.log('data', topics);
  console.log('list', topics.Innerdata);

  // const onPressFilter = (subpart) => {
  //   settopics(Innerdata.filter((Innerdata) => Innerdata.subpart == subpart));
  //   topics.filter((ele) => (ele.is_selected = false));
  // };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8D6E63" barStyle="light-content" />
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../../assets/banner.jpg')}
        />

        <Text style={styles.text}> Coffee</Text>
        <Text style={styles.text1}> The Science of Delicious.</Text>
        <Text style={styles.text2}>Amazing Coffee from around the world!.</Text>
      </View>
      <View style={styles.categorylist}>
        <TouchableOpacity
          onPress={() => {
            settopics(Innerdata);
          }}
        >
          <Text style={styles.title}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            settopics(
              Innerdata.filter((Innerdata) => Innerdata.subpart == 'Hot')
            );
          }}
        >
          <Text style={styles.title}>Hot </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            settopics(
              Innerdata.filter((Innerdata) => Innerdata.subpart == 'Cold')
            );
          }}
        >
          <Text style={styles.title}>Cold</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            settopics(
              Innerdata.filter((Innerdata) => Innerdata.subpart == 'Iced')
            );
          }}
        >
          <Text style={styles.title}>Iced</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Innerdata}
        renderItem={({ item }) => (
          <Category
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            src={item.src}
            subpart={item.subpart}
            is_selected={item.is_selected}
          />
        )}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};
export default SettingsScreen;
