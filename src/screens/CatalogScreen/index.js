import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { textStyles, styles } from '../../styles';
import { text } from '../../res/Text';
import CatalogList from './CatalogList';
import Svg from '../../assets/svg';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class CatalogScreen extends Component {
    onCategorySelect = (category) => {
        this.props.navigation.navigate("Books", { category: category });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ position: 'absolute', height: screenHeight * 3 / 9, top: 0, left: -0 }}>
                    <Svg name={'pattern'}
                        width={screenWidth} height={screenHeight * 3 / 9}
                    />
                </View>
                <View style={{ height: 200, marginTop: '12%', marginBottom: '10%' }}>
                    <Text style={textStyles.h1}>{text.APP_TITLE}</Text>
                    <Text style={textStyles.medium}>{text.DESCRIPTION}</Text>
                </View>

                <CatalogList catalog_data={text.CATALOG_DATA} onCategorySelect={this.onCategorySelect} />
            </View>
        )
    }
}

export default CatalogScreen;