import { useQuery } from '@apollo/react-hooks';
import { SINGLE_REPOSITORY } from '../graphql/queries';

const getSingleRepository = (variables) => {

    const { data, loading, fetchMore, ...result } = useQuery(SINGLE_REPOSITORY, {
        fetchPolicy: 'network-and-cache',
        variables
    });
    const handleFetchMore = () => {
        const canFetchMore =
          !loading && data && data.repository.reviews.pageInfo.hasNextPage;

        console.log(data);
    
        if (!canFetchMore) {
          return;
        }
        console.log('running fetch');
        fetchMore({
          query: SINGLE_REPOSITORY,
          variables: {
            after: data.repository.reviews.pageInfo.endCursor,
            ...variables,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
              console.log(previousResult.repository);
              console.log(fetchMoreResult.repository);
            const nextResult = {
                reviews: {
                ...fetchMoreResult.repository.reviews,
                edges: [
                  ...previousResult.repository.reviews.edges,
                  ...fetchMoreResult.repository.reviews.edges,
                ],
              },
            };
            console.log(nextResult.reviews);
            return nextResult;
          },
        });
      };
    
      return {
        repository: data ? data.repository : undefined,
        reviews: data ? data.repository.reviews : undefined,
        fetchMore: handleFetchMore,
        loading,
        ...result,
      };
};

export default getSingleRepository;