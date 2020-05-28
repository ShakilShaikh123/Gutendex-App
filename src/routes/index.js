import React, { Component } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { Dimensions } from "react-native";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

import { connect } from 'react-redux';


import SplashScreen from '../screens/SplashScreen';
import CatalogScreen from '../screens/CatalogScreen';
import BooksScreen from '../screens/BooksScreen';


const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const FadeTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
}

export const CardTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                    {
                        rotate: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0],
                        }),
                    },
                    {
                        scale: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0.9],
                            })
                            : 1,
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                }),
            },
        };
    },
}

class App extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <NavigationContainer initialRouteName="Catalog">
                <Stack.Navigator>
                    {/* <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={{
                            headerShown: false,

                            ...FadeTransition,
                        }}
                    /> */}
                    <Stack.Screen
                        name="Catalog"
                        component={CatalogScreen}
                        options={{
                            headerShown: false,

                            ...FadeTransition,
                        }}
                    />
                    <Stack.Screen
                        name="Books"
                        component={BooksScreen}
                        options={{
                            headerShown: false,

                            ...FadeTransition,
                        }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(App);
