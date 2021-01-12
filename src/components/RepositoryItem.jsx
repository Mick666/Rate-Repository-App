import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import RepoItemHeader from './RepositoryItemHeader';
import RepoItemDetails from './RepositoryItemDetails';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    repoItemParent: {
        backgroundColor: 'white',
    }
});

const RepositoryItem = ({ repo }) => {
    return (
        <Link to={`repo/${repo.id}`} component={TouchableWithoutFeedback}>
        <View style={styles.repoItemParent}>
            <RepoItemHeader
                avatar={repo.ownerAvatarUrl}
                description={repo.description}
                fullName={repo.fullName}
                language={repo.language}
            />
            <RepoItemDetails
                stars={repo.stargazersCount}
                forks={repo.forksCount}
                reviews={repo.reviewCount}
                rating={repo.ratingAverage}
            />
            </View>
        </Link>
    );
};

export default RepositoryItem;