import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import { styles } from './style';

const EnquiryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>
          Please fill in the enquiry form and we will get back to you asap
        </Text>
        <View style={styles.content}>
          <TextInput
            style={{
              height: 90,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}
            placeholder="Name*"
          />
          <TextInput
            style={{
              height: 70,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}
            placeholder="Phone*"
          />
          <TextInput
            style={{
              height: 70,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}
            placeholder="Email*"
          />
          <TextInput
            style={{
              height: 70,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}
            placeholder="Message*"
          />
        </View>
      </View>
    </View>
  );
};
export default EnquiryScreen;
