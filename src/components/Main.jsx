import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Switch, Redirect } from "react-router-native";
import { useDebounce } from 'use-debounce';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepoItem from './SingleRepoItem';
import useRepositories from '../hooks/useRepositories';
import CreateReview from './CreateReview';
import RepoItemReviews from './RepoItemReviews';


const styles = StyleSheet.create({
    mainBackground: {
        backgroundColor: theme.colors.mainBackgroundColor,
        flexGrow: 1,
        flexShrink: 1,
    },
    reviewBackground: {
        backgroundColor: 'white'
    }
});

const Main = () => {
    const [ordering, setOrdering] = useState('CREATED_AT');
    const [orderDirection, setDirection] = useState('DESC');
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
    const { repositories, fetchMore } = useRepositories({ordering, orderDirection, debouncedSearchTerm, first: 5});


    return (
        <View style={styles.mainBackground}>
            <AppBar />
            <Switch>
                <Route path='/login'>
                    <SignIn />
                </Route>
                <Route path='/signup'>
                    <SignUp />
                </Route>
                <Route path='/repo/:id'>
                    <SingleRepoItem />
                </Route>
                <Route path='/createReview'>
                    <CreateReview repositories={repositories} />
                </Route>
                <Route path='/userReviews'>
                    <View style={styles.reviewBackground}>
                        <RepoItemReviews getAllUserReviews />
                    </View>
                </Route>
                <Route path='/' exact>
                    <RepositoryList
                    repositories={repositories}
                    setOrdering={setOrdering}
                    setDirection={setDirection}
                    setSearchTerm={setSearchTerm}
                    fetchMore={fetchMore}
                    />
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    );
};

export default Main;