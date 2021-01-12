import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    urlLink: {
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

const RepoItemLink = ({ url }) => {
    const handlePress = () => {
        Linking.openURL(url);
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <Text style={styles.urlLink}>Open in Github</Text>
        </TouchableWithoutFeedback>
    );
};

export default RepoItemLink;