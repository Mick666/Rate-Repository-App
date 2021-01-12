import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    color: 'red',
  },
  errorBorder: {
    borderColor: 'red',
  },
  regularBorder: {
    borderColor: 'grey',
  }
});

const FormikTextInput = ({ style, name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const inputStyles = [
    showError && styles.errorBorder,
    !showError && styles.regularBorder,
    style
  ];

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={inputStyles}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;