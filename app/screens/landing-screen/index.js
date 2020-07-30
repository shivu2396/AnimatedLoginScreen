import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { styles } from './style';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8D6E63" barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.circle}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            style={styles.logo}
            source={require('../../../assets/coffe.jpg')}
            // resizeMode="stretch"
          />
        </View>
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: 'white',
          },
        ]}
        animation="fadeInUp"
      >
        <Text style={styles.title}>Get the best Coffee in town!</Text>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('BottomTab')}
          >
            <Text style={styles.textSign}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.but}
            onPress={() => navigation.navigate('SignInScreen')}
          >
            <Text style={styles.textSign1}>Login</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SplashScreen;
