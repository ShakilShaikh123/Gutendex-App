import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SplashScreen extends Component {
    componentDidMount() {
        // this.props.navigation.navigate("LogPage");
        setTimeout(() => {
            // _retrieveData('login').then(login => {
            //     if (login && login === "true") {
            //         this.props.navigation.reset({
            //             index: 0,
            //             routes: [{ name: 'dashboard' }],
            //         });
            //     } else {
            //         this.props.navigation.reset({
            //             index: 0,
            //             routes: [{ name: 'LogPage' }],
            //         });
            //     }
            // })

            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Catalog' }],
            });

        }, 5000);
    }
    render() {
        return (
            <View><Text>SplashScreen</Text></View>
        )
    }
}

export default SplashScreen;