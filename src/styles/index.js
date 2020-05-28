import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../res/Colors';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const textStyles = StyleSheet.create({
    h1: {
        color: Colors.ROYAL_BLUE,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 48
    },
    h2: {
        color: Colors.ROYAL_BLUE,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30
    },
    medium: {
        color: Colors.MINE_SHAFT,
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
    }
})

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.TITAN_WHITE,
        width: '100%',
        height: '100%',
        paddingHorizontal: 20
    }, catalogItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        alignItems: 'center',

        borderRadius: 4,
        marginBottom: 2,
        marginHorizontal: 1,

        elevation: 2.0,


    }
})

