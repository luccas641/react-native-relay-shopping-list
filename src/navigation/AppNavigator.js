import {
  createStackNavigator
} from 'react-navigation';

import UserList from '../screens/User/UserList';
import UserDetail from '../screens/User/UserDetail';
import ProductList from '../screens/Product/ProductList';
import ProductScan from '../screens/Product/ProductScan';
import ProductDetail from '../screens/Product/ProductDetail';
import ShoppingLists from '../screens/ShoppingList/ShoppingLists';
import ShoppingListDetail from '../screens/ShoppingList/ShoppingListDetail';
import ShoppingListCreate from '../screens/ShoppingList/ShoppingListCreate';

import Login from '../screens/User/Login';
import UserCreate from '../screens/User/UserCreate';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  UserList: {
    screen: UserList
  },
  UserDetail: {
    screen: UserDetail
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
  ShoppingListCreate: {
    screen: ShoppingListCreate
  },
  UserCreate: {
    screen: UserCreate
  },
  Login: {
    screen: Login
  }
}, {
  initialRouteName: 'Login',
});