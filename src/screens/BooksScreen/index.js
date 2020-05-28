import React, { Component } from 'react';
import { View, Text, Linking, Alert } from 'react-native';
import { textStyles, styles, screenHeight, screenWidth } from '../../styles';
import { text } from '../../res/Text';
import Header from '../../components/Header';
import Search from '../../components/Search';
import BookList from './BookList';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';

class BooksScreen extends Component {
    componentDidMount() {
        let bookGenreKey = this.props.route.params.category.key;
        this.fetchBooks(bookGenreKey, "");
    }

    fetchBooks = (bookGenreKey, searchText) => {
        this.props.dispatch({ type: 'FETCH_BOOK', genre: bookGenreKey, searchText: searchText });
    }

    onSearchText = (text) => {
        let bookGenreKey = this.props.route.params.category.key;
        this.fetchBooks(bookGenreKey, text)
    }

    openUrl = (book) => {
        let url = '';
        if (book.formats['text/html; charset=utf-8']) {
            url = book.formats['text/html; charset=utf-8'];
        } else
            if ((book.formats['application/pdf'])) {
                url = book.formats['application/pdf'];
            } else
                if ((book.formats['text/plain; charset=utf-8'])) {
                    url = book.formats['text/plain; charset=utf-8'];
                }

        if (url === '') {
            Alert.alert("Some Error Occured")
        } else
            Linking.openURL(url).catch((err) => { Alert.alert("Some Error Occured") });
    }

    getHtmlUrl = (formats) => {
        let urls = [];
        for (var i = 0; i < formats; i++) {
            console.log(formats[i]);
            //Do something
        }
    }

    render() {
        return (
            <View style={{ height: screenHeight }}>
                <View style={[styles.container, { backgroundColor: 'white', height: '15%', paddingBottom: 0 }]}>
                    <Header navigation={this.props.navigation} title={this.props.route.params.category.name} />
                    <Search onChangeText={this.onSearchText} />
                </View >

                <View style={[styles.container, { paddingTop: 0, height: '85%', paddingTop: 10, backgroundColor: this.props.isLoading ? '#0000001A' : null }]}>
                    {this.props.isLoading ? <View style={{ position: 'absolute', top: '35%', left: '40%' }}><Loader simple loading={this.props.isLoading} /></View> : null}
                    <BookList onBookSelect={(book) => {
                        // alert(JSON.stringify(book.formats['text/html; charset=utf-8']));
                        this.openUrl(book)
                    }}
                    />

                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.fetchBookReducer.isLoading,
});

export default connect(mapStateToProps)(BooksScreen);