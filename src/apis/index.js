import axios from 'axios';
const BASE_URL = 'http://skunkworks.ignitesol.com:8000';

export function fetchBooks(genre = "", search = "") {
    return axios.request({
        method: 'get',
        url: BASE_URL + '/books?&search=' + search + '&topic=' + genre + '&mime_type=image',
    });
}

