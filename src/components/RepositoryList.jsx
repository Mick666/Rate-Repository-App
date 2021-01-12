import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositorySorter from './RepositorySortDropdown';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setOrdering, setDirection, setSearchTerm, fetchMore }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <RepositoryItem repo={item} />
  );

  const onEndReach = () => {
    console.log('end reached');
    fetchMore();
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ListHeaderComponent={<RepositorySorter setOrdering={setOrdering} setDirection={setDirection} setSearchTerm={setSearchTerm}/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = ({ repositories, setOrdering, setDirection, setSearchTerm, fetchMore }) => {
  return <RepositoryListContainer
  repositories={repositories}
  setOrdering={setOrdering}
  setDirection={setDirection}
  setSearchTerm={setSearchTerm}
  fetchMore={fetchMore}
  />;
};

export default RepositoryList;