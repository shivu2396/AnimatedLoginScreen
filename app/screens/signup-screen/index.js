import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './style';
import Validation from '../../components/sigin-screen/validate';

const SignUpScreen = ({ navigation }) => {
  const [inputemail, setinputemail] = useState(['']);
  const [inputpassword, setinputpassword] = useState(['']);
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailadd, setemailadd] = useState(false);
  const [passadd, setpassadd] = useState(false);
  const [textconfirmpassword, settextconfirmpassword] = useState(false);

  const onPress = () => {
    var emailerror = Validation('email', inputemail);
    var passworderror = Validation('password', inputpassword);
    var passerror = Validation('confirm', confirmPassword, {
      password: inputpassword,
    });

    setemailadd(emailerror);
    setpassadd(passworderror);
    settextconfirmpassword(passerror);
    if (emailerror || passworderror || passerror) {
      return false;
    } else {
      navigation.navigate('BottomTab');
    }
  };
  return (
    <View style={styles.container}>
      {/* Header Block */}
      <StatusBar backgroundColor="#8D6E63" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register</Text>
      </View>
      {/*Content Block */}
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="black" size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(TextInputEmail) => setinputemail(TextInputEmail)}
            onBlur={() => setemailadd(Validation('email', inputemail))}
            value={inputemail}
          />

          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        </View>

        {emailadd && <Text style={{ color: 'red' }}>{emailadd}</Text>}
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color={'black'} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(TextInputPassword) =>
              setinputpassword(TextInputPassword)
            }
            onBlur={() => setpassadd(Validation('password', inputpassword))}
            value={inputpassword}
          />
        </View>
        {passadd && <Text style={{ color: 'red' }}>{passadd}</Text>}
        <Text style={styles.text_footer}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color={'black'} size={20} />
          <TextInput
            placeholder="Your Confirm Password"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(TextInputPassword) =>
              setConfirmPassword(TextInputPassword)
            }
            onBlur={() =>
              settextconfirmpassword(
                Validation('password', confirmPassword, inputpassword)
              )
            }
            value={confirmPassword}
          />
        </View>
        {textconfirmpassword && (
          <Text style={{ color: 'red' }}>{textconfirmpassword}</Text>
        )}
        <TouchableOpacity>
          <Text
            style={{ color: '#8D6E63', marginTop: 15, alignSelf: 'flex-end' }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
        {/* Footer Block */}
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => onPress()}>
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;
