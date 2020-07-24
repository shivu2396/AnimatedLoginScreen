// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StatusBar,
// } from 'react-native';

// import * as Animatable from 'react-native-animatable';
// // import LinearGradient from 'react-native-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import { styles } from './style';

// const SignInScreen = ({ navigation }) => {
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//     check_textInputChange: false,
//     secureTextEntry: true,
//   });

//   const textInputChange = (val) => {
//     if (val.length != 0) {
//       setData({
//         ...data, //array destructuing get current state value
//         email: val,
//         check_textInputChange: true,
//       });
//     } else {
//       setData({
//         ...data,
//         email: val,
//         check_textInputChange: false,
//       });
//     }
//   };

//   const handlePasswordChange = (val) => {
//     setData({
//       ...data,
//       password: val,
//     });
//   };

//   const updateSecureTextEntry = () => {
//     // Created another function for tooggle functionality
//     setData({
//       ...data,
//       secureTextEntry: !data.secureTextEntry,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#009387" barStyle="light-content" />
//       <View style={styles.header}>
//         <Text style={styles.text_header}>Welcome!</Text>
//       </View>
//       <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//         <Text style={styles.text_footer}>Username</Text>
//         <View style={styles.action}>
//           <FontAwesome name="user-o" color="black" size={20} />
//           <TextInput
//             placeholder="Your Username"
//             placeholderTextColor="#666666"
//             style={styles.textInput}
//             autoCapitalize="none"
//             onChangeText={(val) => textInputChange(val)}
//           />
//           {data.check_textInputChange ? (
//             <Animatable.View animation="bounceIn">
//               <Feather name="check-circle" color="green" size={20} />
//             </Animatable.View>
//           ) : null}
//         </View>

//         <Text style={styles.text_footer}>Password</Text>
//         <View style={styles.action}>
//           <Feather name="lock" color={'black'} size={20} />
//           <TextInput
//             placeholder="Your Password"
//             placeholderTextColor="#666666"
//             secureTextEntry={data.secureTextEntry ? true : false}
//             style={styles.textInput}
//             autoCapitalize="none"
//             onChangeText={(val) => handlePasswordChange(val)}
//           />
//           <TouchableOpacity onPress={updateSecureTextEntry}>
//             {data.secureTextEntry ? (
//               <Feather name="eye-off" color="grey" size={20} />
//             ) : (
//               <Feather name="eye" color="grey" size={20} />
//             )}
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity>
//           <Text style={{ color: '#009387', marginTop: 15 }}>
//             Forgot password?
//           </Text>
//         </TouchableOpacity>
//         <View style={styles.button}>
//           <TouchableOpacity
//             style={styles.signIn}
//             onPress={() => navigation.navigate('SettingsScreen')}
//           >
//             <Text style={styles.textSign}>Sign In</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => navigation.navigate('SettingsScreen')}
//             style={styles.signUp}
//           >
//             <Text
//               style={[
//                 styles.textSign,
//                 {
//                   color: '#009387',
//                 },
//               ]}
//             >
//               Sign Up
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </Animatable.View>
//     </View>
//   );
// };

// export default SignInScreen;

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { styles } from './style';

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{ text: 'Okay' }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        { text: 'Okay' },
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: 'white',
          },
        ]}
      >
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="green" size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="pink" size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: '#009387', marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: '#009387',
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
