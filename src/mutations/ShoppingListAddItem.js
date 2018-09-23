import { commitMutation, graphql } from 'react-relay';
import Environment from '../createRelayEnvironment';

const mutation = graphql`
  mutation ShoppingListAddItemMutation($input: ShoppingListAddItemInput!) {
    ShoppingListAddItem(input: $input) {
      error
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
