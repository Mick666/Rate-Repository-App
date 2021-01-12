import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';

const usePostReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const postReview = async ({ repositoryName, ownerName, rating, review }) => {
        const mutationResult = await mutate({variables: { repositoryName: repositoryName, ownerName: ownerName, rating: Number(rating), text: review } });
        console.log(mutationResult);
        return mutationResult;
    };

    return [postReview, result];
};

export default usePostReview;