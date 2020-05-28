import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TouchableHighlight } from 'react-native';
import Svg from '../../../assets/svg';
import { styles } from '../../../styles';

const CatalogList = (props) => {
    return (
        <View>
            <FlatList
                data={props.catalog_data}
                renderItem={({ item }) => <CatalogItem item={item} onClick={props.onCategorySelect} />}
            />
        </View>
    )
}

const CatalogItem = ({ item, index, onClick }) => (
    <TouchableOpacity
        style={{ marginTop: 10, }}
        key={index} onPress={() => {
            onClick(item);
        }}>
        <View style={styles.catalogItem}><View style={{
            flexDirection: 'row',
        }}>
                <Svg name={item.key} width={24} height={24} />
                <Text style={{ paddingLeft: 10, fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>
                    {item.name}
                </Text>
            </View>
            <Svg name={'next'} width={24} height={22} />
        </View>
    </TouchableOpacity>
)



export default CatalogList;