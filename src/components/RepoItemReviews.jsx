import React from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';

import Text from './Text';
import getSingleRepository from '../hooks/getSingleRepository';
import getUserReviews from '../hooks/getUserReviews';

const win = Dimensions.get('window');
const reviewWidth = 46;
const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: '#e1e4e8'
    },
    reviewRating: {
        borderColor: '#0366d6',
        padding: 10,
        borderWidth: 2,
        marginRight: 30,
        marginLeft: 20,
        width: reviewWidth,
        height: reviewWidth,
        borderRadius: reviewWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 15,
        marginBottom: 15
    },
    reviewTextParent: {
        alignItems: 'center',
        width: win.width - 100,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    flatListParent: {
        marginBottom: win.height - 150
    },
    reviewNumber: {
        color: '#0366d6',
    }
});

const parseDate = (date) => {
    const splitDate = date.split('T')[0].split('-');
    return `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}`;
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepoItemReviewContainer = ({ review }) => {
    return (
        <View style={{ flexGrow: 1 }}>
            <View style={styles.reviewHeader}>
                <View style={styles.reviewRating}>
                    <Text style={styles.reviewNumber} fontWeight='bold' >{review.rating}</Text>
                </View>
                <View>
                    <Text fontWeight='bold'>{review.user.username}</Text>
                    <Text color='textSecondary'>{parseDate(review.createdAt)}</Text>
                    <View style={styles.reviewTextParent}>
                        <Text>{review.text}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const RepoItemReviews = ({ id, getAllUserReviews }) => {

    const { reviews, fetchMore } = getAllUserReviews ? getUserReviews({ first: 3, includeReviews: true }) : getSingleRepository({ id, first: 3 });

    const reviewNodes = reviews
        ? reviews.edges.map(edge => edge.node)
        : [];

    const renderItem = ({ item }) => (
        <RepoItemReviewContainer review={item} />
    );


    const onEndReach = () => {
        console.log('end reached');
        fetchMore();
      };

    return (
        <View style={styles.flatListParent}>
            {getAllUserReviews ? null : <View style={styles.separator} />}
            <FlatList
                data={reviewNodes}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

export default RepoItemReviews;