import React from 'react';
import { View, Text } from 'react-native';

import Fiction from './Fiction.svg';
import Drama from './Drama.svg';
import Humour from './Humour.svg';
import Politics from './Politics.svg';
import Philosophy from './Philosophy.svg';
import History from './History.svg';
import Adventure from './Adventure.svg';
import Back from './Back.svg';
import Cancel from './Cancel.svg';
import Next from './Next.svg';
import Pattern from './Pattern.svg';
import Search from './Search.svg';

const Svg = (props) => {
    switch (props.name) {
        case 'fiction':
            return (
                <Fiction width={props.width} height={props.height} />
            );
        case 'drama':
            return (
                <Drama width={props.width} height={props.height} />
            );
        case 'humour':
            return (
                <Humour width={props.width} height={props.height} />
            );
        case 'politics':
            return (
                <Politics width={props.width} height={props.height} />
            );
        case 'philosophy':
            return (
                <Philosophy width={props.width} height={props.height} />
            );
        case 'history':
            return (
                <History width={props.width} height={props.height} />
            );
        case 'adventure':
            return (
                <Adventure width={props.width} height={props.height} />
            );
        case 'back':
            return (
                <Back width={props.width} height={props.height} />
            )
        case 'cancel':
            return (
                <Cancel width={props.width} height={props.height} />
            );
        case 'next':
            return (
                <Next width={props.width} height={props.height} />
            );
        case 'pattern':
            return (
                <Pattern width={props.width} height={props.height}
                    preserveAspectRatio="xMinYMin slice"
                    viewBox="0 0 500 500"

                    stroke="blue"
                    strokeWidth="30.5"
                    fill="green"
                />
            );
        case 'search':
            return (
                <Search width={props.width} height={props.height} />
            )
        default: return <View><Text>No Icon</Text></View>
    }
}

export default Svg;



