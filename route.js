import {
    createStackNavigator,
} from 'react-navigation';

import Home from './src/screens/home/home';
import Landing from './src/screens/landing/landing';

const Route = createStackNavigator({
    Home: {
        screen: Home
    },
    Landing: {
        screen: Landing
    },
}, {
    initialRouteName: 'Landing',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: true,
    }
});

export default Route;