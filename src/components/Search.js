import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { textStyles, styles } from '../styles';
import { Colors } from '../res/Colors';
import Svg from '../assets/svg';

const Search = (props) => {
    const [value, onChangeText] = React.useState('');
    const [isFocused, setFocus] = React.useState(false);
    const { onFocus, onBlur, ...otherProps } = props;

    let handleFocus = event => {
        setFocus(true);

        if (onFocus) {
            onFocus(event);
        }
    }

    let handleBlur = event => {
        setFocus(true);

        if (onBlur) {
            onBlur(event);
        }
    }

    return (
        <View style={{
            flexDirection: 'row', flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: Colors.ATHENS_GRAY,
            paddingLeft: 10, paddingRight: 10, height: 40, borderRadius: 4, borderWidth: isFocused ? 1 : 0, borderColor: isFocused ? Colors.ROYAL_BLUE : null
        }}>
            <Svg name={'search'} width={18} height={18} />
            <TextInput
                autoCorrect={false}
                keyboardType="visible-password"

                onFocus={handleFocus}
                onBlur={handleBlur}
                selectionColor={'blue'}
                style={{
                    width: '100%',
                    marginLeft: 10,
                    paddingBottom: 8,
                    alignItems: 'center',
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 16,
                    color: Colors.MINE_SHAFT,
                }}
                textStyles={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 16,
                    color: Colors.MINE_SHAFT,
                }}
                placeholderStyle={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 16,
                    color: Colors.SILVER_CHALICE,
                }}

                // placeholderTextColor={Colors.SILVER_CHALICE}
                placeholder={'Search'}
                onChangeText={text => {
                    onChangeText(text);
                    props.onChangeText(text);
                }}
                value={value}
                numberOfLines={1}

                // style={[styles.textInputStyle, this.props.textStyle]}

                textAlignVertical={'center'}
            // keyboardType={"name-phone-pad"}

            // value={this.state.editProfilePayload.name} keyboardType={"name-phone-pad"} maxLength={50} placeholder={"Enter Your Full Name"} editable={true}
            />
        </View >
    )
}

export default Search;