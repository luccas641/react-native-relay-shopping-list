import {
  createStackNavigator
} from 'react-navigation';

import UserList from '../screens/User/UserList';
import UserDetail from '../screens/User/UserDetail';
import UserCreate from '../screens/User/UserCreate';
import Login from '../screens/User/Login';
import ProductList from '../screens/Product/ProductList';
import ProductScan from '../screens/Product/ProductScan';
import ProductDetail from '../screens/Product/ProductDetail';
import ShoppingLists from '../screens/ShoppingList/ShoppingLists';
import ShoppingListDetail from '../screens/ShoppingList/ShoppingListDetail';

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
  Login: {
    screen: Login
  },
  ProductDetail: {
    screen: ProductDetail
  },
  ProductList: {
    screen: ProductList
  },
  ProductScan: {
    screen: ProductScan
  },
  ShoppingListDetail: {
    screen: ShoppingListDetail
  },
  ShoppingLists: {
    screen: ShoppingLists
  },
}, {
  initialRouteName: 'Login',
});