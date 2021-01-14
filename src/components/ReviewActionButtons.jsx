import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import * as Linking from 'expo-linking';

import Text from './Text';
import useDeleteReview from '../hooks/deleteReview';

const styles = StyleSheet.create({
    reviewButtonParent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 15,
        marginBottom: 15
    },
    viewRepoButton: {
      padding: 10,
      backgroundColor: '#0366d6',
      color: 'white',
      borderRadius: 7,
      overflow: 'hidden',
      margin: 5,
      marginLeft: 20,
      marginRight: 10,
      textAlign: 'center'
    },
    deleteRepoButton: {
      padding: 10,
      backgroundColor: '#DC143C',
      color: 'white',
      borderRadius: 7,
      overflow: 'hidden',
      margin: 5,
      textAlign: 'center'
    }
});

const ReviewActionButtons = ({ id, url, refetch }) => {
    const [deleteReview] = useDeleteReview();

    const deleteConfirmation = () =>
    Alert.alert(
      "Delete confirmation",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Delete", onPress: () => removeReview() }
      ],
      { cancelable: false }
    );

    const openLink = () => {
        Linking.openURL(url);
    };

    const removeReview = () => {
        deleteReview(id);
        refetch();
    };

    console.log(id);
    return (
        <View style={styles.reviewButtonParent}>
            <TouchableWithoutFeedback onPress={openLink}>
                <Text fontWeight='bold' style={styles.viewRepoButton}>View repository</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={deleteConfirmation}>
                <Text fontWeight='bold' style={styles.deleteRepoButton}>Delete review</Text>
            </TouchableWithoutFeedback>
        </View>
    );

};

export default ReviewActionButtons;