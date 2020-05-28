export default function reducer(
    state = {
        isLoading: false,
        data: {}
    },
    action,
) {
    switch (action.type) {
        case 'FETCH_BOOK_LOADING': {
            return { ...state, isLoading: true, data: {} };
        }
        case 'FETCH_BOOK_SUCCESS': {
            return { ...state, isLoading: false, data: action.data };
        }
        case 'FETCH_BOOK_FAILED': {
            return { ...state, isLoading: false, data: {} };
        }
        default: {
            return state;
        }
    }
}