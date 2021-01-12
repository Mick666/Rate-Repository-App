import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Formik } from "formik";
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignIn from '../hooks/signIn';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  loginForm: {
    padding: 10,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderStyle: 'solid',
  },
  loginButton: {
    padding: 10,
    backgroundColor: '#0366d6',
    color: 'white',
    borderRadius: 7,
    overflow: 'hidden',
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center'
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least five characters')
    .required('A username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least five characters')
    .required('A password is required')
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.loginParent}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.loginForm}
        testID='usernameField'
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.loginForm}
        testID='passwordField'
      />
      <TouchableWithoutFeedback onPress={onSubmit} testID='submitButton'>
        <Text style={styles.loginButton} testID='signInText'>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;