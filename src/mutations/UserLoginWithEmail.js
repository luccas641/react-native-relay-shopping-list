import { commitMutation, graphql } from 'react-relay';
import Environment from '../createRelayEnvironment';

const mutation = graphql`
  mutation UserLoginWithEmailMutation($input: UserLoginWithEmailInput!) {
    UserLoginWithEmail(input: $input) {
      error
      token
      clientMutationId
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(Environment, {
    mutation,
    variables: {
      input,
    },
    onCompleted,
    onError,
  });
}

export default { commit };
