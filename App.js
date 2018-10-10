import React from 'react';
import { Text, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import {Home} from './src/screens/home/home';
import {Landing} from './src/screens/landing/landing';

// const Route = createStackNavigator({
//   Home: {
//       screen: Home
//   },
//   Landing: {
//       screen: Landing
//   },
// }, {
//   initialRouteName: 'Landing',
//   headerMode: 'none',
//   navigationOptions: {
//       headerVisible: false,
//   }
// });
// import Route from './route'
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Home/>
      </View>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return <Route />;
//   }
// }


