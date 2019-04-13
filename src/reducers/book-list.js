import { handleActions } from 'redux-actions';


const defaultState = {
    books: [],
    loading: true,
    error: null
}

const updateBookList = handleActions({
    FETCH_BOOKS_REQUEST: (state, action) => {
        return defaultState
    },
    FETCH_BOOKS_SUCCESS: (state, action) => {
        return {
            books: action.payload,
            loading: false,
            error: null
        }
    },
    FETCH_BOOKS_FAILURE: (state, action) => {
        return {
            books: [],
            loading: false,
            error: action.payload
        }
    },


},
    defaultState,
    {
        prefix: '[book]', // String used to prefix each type
        namespace: ' ' // Separator between prefix and type.  Default: `/`
    }
)

// const updateBookList = (state, action) => {

//     if (state === undefined) {
//         return {
//             books: [],
//             loading: true,
//             error: null
//         };
//     }

//     switch (action.type) {
//         case 'FETCH_BOOKS_REQUEST':
//             return {
//                 books: [],
//                 loading: true,
//                 error: null
//             };

//         case 'FETCH_BOOKS_SUCCESS':
//             return {
//                 books: action.payload,
//                 loading: false,
//                 error: null
//             };

//         case 'FETCH_BOOKS_FAILURE':
//             return {
//                 books: [],
//                 loading: false,
//                 error: action.payload
//             };

//         default:
//             return state.bookList;
//     }
// };

export default updateBookList;