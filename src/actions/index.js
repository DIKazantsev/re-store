import { createActions } from 'redux-actions';

// export const { booksLoaded, booksError, booksRequested } = createActions({
//     FETCH_BOOKS_SUCCESS: (newBooks) => newBooks,
//     FETCH_BOOKS_FAILURE: (error) => error
// },
//     'FETCH_BOOKS_REQUEST'

// )

export const { fetchBooksSuccess, fetchBooksFailure,
    bookAddedToCart, bookRemovedFromCart,
    allBooksRemovedFromCart, fetchBooksRequest } = createActions(
        {
            FETCH_BOOKS_SUCCESS: (newBooks) => (newBooks),
            FETCH_BOOKS_FAILURE: (error) => (error),
            BOOK_ADDED_TO_CART: (bookId) => (bookId),
            BOOK_REMOVED_FROM_CART: (bookId) => (bookId),
            ALL_BOOKS_REMOVED_FROM_CART: (bookId) => (bookId),

        },
        'FETCH_BOOKS_REQUEST',
        {
            prefix: '[book]', // String used to prefix each type
            namespace: ' ' // Separator between prefix and type.  Default: `/`
        }
    );

// const booksRequested = () => {
//     return {
//         type: 'FETCH_BOOKS_REQUEST'
//     }
// }

// const booksLoaded = (newBooks) => {
//     return {
//         type: 'FETCH_BOOKS_SUCCESS',
//         payload: newBooks
//     }
// }

// const booksError = (error) => {
//     return {
//         type: 'FETCH_BOOKS_FAILURE',
//         payload: error
//     }
// }
// export const bookAddedToCart = (bookId) => {
//     return {
//         type: 'BOOK_ADDED_TO_CART',
//         payload: bookId
//     }
// }

// export const bookRemovedFromCart = (bookId) => {
//     return {
//         type: 'BOOK_REMOVED_FROM_CART',
//         payload: bookId
//     };
// };

// export const bookRemovedFromCart = createAction(
//     'BOOK_REMOVED_FROM_CART',
//     bookId => bookId
// )

// export const allBooksRemovedFromCart = (bookId) => {
//     return {
//         type: 'ALL_BOOKS_REMOVED_FROM_CART',
//         payload: bookId
//     };
// };


const fetchBooks = (bookstoreService) => () => (dispatch) => {

    dispatch(fetchBooksRequest());

    bookstoreService.getBooks()
        .then((data) => {
            dispatch(fetchBooksSuccess(data));
        }).catch((err) => {
            dispatch(fetchBooksFailure(err))
        })
}

export {
    fetchBooks
};