import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);

    const deleteReview = async (id) => {
        const mutationResult = await mutate({variables: { id: id } });
        console.log(mutationResult);
        return mutationResult;
    };

    return [deleteReview, result];
};

export default useDeleteReview;