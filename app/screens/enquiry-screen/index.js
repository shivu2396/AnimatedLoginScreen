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
      </View>
      <TextInput
        style={{
          marginHorizontal: 10,
          padding: 10,
          width: '90%',
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        }}
        placeholder="Name*:"
      />
      <TextInput
        style={{
          marginHorizontal: 10,
          padding: 10,
          width: '90%',
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        }}
        placeholder="Phone*:"
      />
      <TextInput
        style={{
          marginHorizontal: 10,
          width: '90%',
          padding: 10,
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        }}
        placeholder="Email*:"
      />
      <TextInput
        style={{
          marginHorizontal: 10,
          padding: 10,
          width: '90%',
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        }}
        placeholder="Message*:"
      />
      <TouchableOpacity style={styles.fotterbtn}>
        <Text style={styles.text}> Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default EnquiryScreen;
