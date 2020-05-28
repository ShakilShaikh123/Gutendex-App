import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { textStyles, styles } from '../styles';
import Svg from '../assets/svg';

const Header = (props) => {
    return (
        <View style={{
            flexDirection: 'row', flexDirection: 'row', alignItems: 'center', marginTop: 20
        }}>
            <TouchableOpacity onPress={() => { props.navigation.pop() }}>
                <Svg name={'back'} width={24} height={24} />
            </TouchableOpacity>
            <Text style={{ ...textStyles.h2, ...{ marginLeft: 20 } }}>{props.title}</Text>
        </View >
    )
}

export default Header;