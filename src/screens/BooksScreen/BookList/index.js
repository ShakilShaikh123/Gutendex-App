import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import Svg from '../../../assets/svg';
import { connect } from 'react-redux';
import { Colors } from '../../../res/Colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const BookList = (props) => {
    return (
        <FlatList
            style={{
                backgroundColor: '#00000000',
                marginBottom: 25
            }}
            columnWrapperStyle={{
                flex: 1,
                justifyContent: "space-around",
            }}
            numColumns={3}
            data={props.data.results}
            renderItem={({ item }) => <BookItem item={item} onClick={props.onBookSelect} />}
        />
    )
}

const BookItem = ({ item, index, onClick }) => {
    let authorDetails = Object.assign({}, item.authors[0]);
    return (
        <TouchableOpacity
            key={index}
             onPress={() => {
                onClick(item);
            }}>
            <View style={{
                width: (screenWidth / 3) - 30,

                height: 260,
                marginBottom: 0
            }}>
                <View style={{
                    width: (screenWidth / 3) - 30,
                    alignItems: 'center',
                    height: 162,
                    borderRadius: 4,
                    marginBottom: 1,
                    marginHorizontal: 1,

                    shadowColor: '#000000',
                    elevation: 2.0,
                    borderRadius: 8
                }}>
                    <Image
                        source={{ uri: item.formats['image/jpeg'] }}
                        style={{ width: (screenWidth / 3) - 20, height: 162, borderRadius: 8 }}
                    />
                </View>
                <View style={{
                }}>
                    <Text style={{ marginTop: 5, marginBottom: 1, fontFamily: 'Montserrat-SemiBold', color: Colors.MINE_SHAFT, fontSize: 12, paddingHorizontal: 3 }} numberOfLines={2}>
                        {item.title}
                    </Text>
                    <Text style={{ fontFamily: 'Montserrat-Regular', color: Colors.MINE_SHAFT, fontSize: 12, paddingHorizontal: 4, marginBottom: 0 }} numberOfLines={2}>
                        {Object.assign({}, item.authors[0])['name']}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const mapStateToProps = (state) => ({
    data: state.fetchBookReducer.data,
});

export default connect(mapStateToProps)(BookList);