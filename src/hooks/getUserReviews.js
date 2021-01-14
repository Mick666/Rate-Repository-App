import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';

const getUserReviews = (variables) => {

    const { data, loading, fetchMore, refetch,...result } = useQuery(AUTHORIZED_USER, {
        fetchPolicy: 'network-and-cache',
        variables
    });
    const handleFetchMore = () => {
        const canFetchMore =
          !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;

        console.log(data);
    
        if (!canFetchMore) {
          return;
        }
        fetchMore({
          query: AUTHORIZED_USER,
          variables: {
            after: data.authorizedUser.reviews.pageInfo.endCursor,
            ...variables,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const nextResult = {
                reviews: {
                ...fetchMoreResult.authorizedUser.reviews,
                edges: [
                  ...previousResult.authorizedUser.reviews.edges,
                  ...fetchMoreResult.authorizedUser.reviews.edges,
                ],
              },
            };
            console.log(nextResult.reviews);
            return nextResult;
          },
        });
      };
    
      return {
        reviews: data ? data.authorizedUser.reviews : undefined,
        fetchMore: handleFetchMore,
        loading,
        ...result,
        refetch
      };
};

export default getUserReviews;