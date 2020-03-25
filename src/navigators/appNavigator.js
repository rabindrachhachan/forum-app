import React from 'react';

import {
    createSwitchNavigator,
    createStackNavigator,
} from 'react-navigation';

import LaunchScreen from '../screens/launch/launchScreen';
import ListScreen from "../screens/post/listScreen";
import PostScreen from "../screens/post/postScreen";
import UserScreen from "../screens/user/userScreen";
import CustomHeader  from "../screens/components/header"


const AppNavigation = createStackNavigator({
    postList:{
        screen: ListScreen,
        navigationOptions: ({ navigation }) => ({
            header: (
                <CustomHeader
                    title={'Post list'}
                    navigation={navigation}
                />
            ),
        }),
    },
    
    postview:{
        screen: PostScreen,
        navigationOptions: ({ navigation }) => ({
            header: (
                <CustomHeader
                    title={'Post details'}
                    navigation={navigation}
                />
            ),
        }),
    },
    
    userview:{
        screen: UserScreen,
        navigationOptions: ({ navigation }) => ({
            header: (
                <CustomHeader
                    title={'User details'}
                    navigation={navigation}
                />
            ),
        }),
    }

},{
    initialRouteName: 'postList',
});


const RootNavigator = createSwitchNavigator(
    {
        launch: LaunchScreen,
        app: AppNavigation,
    },
    {
        initialRouteName: 'launch',
    }
);

export default RootNavigator;
