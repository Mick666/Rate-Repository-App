import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from '../graphql/mutations';

const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP);

    const signUp = async ({ username, password }) => {
        const mutationResult = await mutate({variables: { username: username, password: password } });
        return mutationResult;
    };

    return [signUp, result];
};

export default useSignUp;