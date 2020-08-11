import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import Home from './Home';
import Details from './Details';

const StackNavigator = createStackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    },
    DetailsScreen: {
        screen: Details,
        navigationOptions: {
            headerShown: false,
        }
    },
})

export default createAppContainer(StackNavigator);