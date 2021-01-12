import React from 'react';
import { View, StyleSheet} from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    detailsParent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
        marginBottom: 15
    },
    indivDetails: {
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 0,
        flexBasis: 'auto'
        
    }
});

export const shortenNumber = (number) => {
    return number < 1000 ? number :
        (number / 1000)
            .toString()
            .replace(/\.[0-9]{2,}/, function (match) {
                return `.${match[1]}`;
            })
            .concat('k');
};

const RepoItemDetails = ({ stars, forks, reviews, rating }) => {
    return (
        <View style={styles.detailsParent}>
            <View style={styles.indivDetails}>
                <Text testID='stars'>{shortenNumber(stars)}</Text>
                <Text color='textSecondary'>Stars</Text>
            </View>
            <View style={styles.indivDetails}>
                <Text testID='forks'>{shortenNumber(forks)}</Text>
                <Text color='textSecondary'>Forks</Text>
            </View>
            <View style={styles.indivDetails}>
                <Text testID='reviews'>{shortenNumber(reviews)}</Text>
                <Text color='textSecondary'>Reviews</Text>
            </View>
            <View style={styles.indivDetails}>
                <Text testID='rating'>{shortenNumber(rating)}</Text>
                <Text color='textSecondary'>Rating</Text>
            </View>
        </View>
    );
};

export default RepoItemDetails;