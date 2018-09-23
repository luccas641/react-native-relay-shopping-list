import {
  createStackNavigator
} from 'react-navigation';

import UserList from '../screens/User/UserList';
import UserDetail from '../screens/User/UserDetail';
import UserCreate from '../screens/User/UserCreate';
import ProductList from '../screens/Product/ProductList';
import ProductDetail from '../screens/Product/ProductDetail';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  UserList: {
    screen: UserList
  },
  UserDetail: {
    screen: UserDetail
  },
  UserCreate: {
    screen: UserCreate
  },
  ProductDetail: {
    screen: ProductDetail
  },
  ProductList: {
    screen: ProductList
  },
}, {
  initialRouteName: 'ProductList',
});