import React from 'react';
import { useParams } from 'react-router-native';
import { View, Text, StyleSheet } from 'react-native';

import getSingleRepository from '../hooks/getSingleRepository';
import RepoItemHeader from './RepositoryItemHeader';
import RepoItemDetails from './RepositoryItemDetails';
import RepoItemLink from './RepositoryItemLink';
import RepoItemReviews from './RepoItemReviews';


const styles = StyleSheet.create({
    repoItemParent: {
        backgroundColor: 'white',
    }
});

const SingleRepoItem = () => {
    const { id } = useParams();
    const { repository } = getSingleRepository({ id, first: 3 });

    if (!repository) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
    console.log(repository.reviews);
    return (
        <View style={styles.repoItemParent}>
            <RepoItemHeader
                avatar={repository.ownerAvatarUrl}
                description={repository.description}
                fullName={repository.fullName}
                language={repository.language}
                id={repository.id}
            />
            <RepoItemDetails
                stars={repository.stargazersCount}
                forks={repository.forksCount}
                reviews={repository.reviewCount}
                rating={repository.ratingAverage}
            />
            <RepoItemLink url={repository.url} />
            <RepoItemReviews id={id}/>
        </View>
    );
};

export default SingleRepoItem;