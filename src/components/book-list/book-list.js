import React, { Component } from 'react';
import BookListItem from '../book-list-item'
import './book-list.css'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions'
import { bindActionCreators } from 'redux';
import { compose } from '../../utils'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator';

const BookList = (state) => {
    console.log('state', state)
    return (
        <ul className='book-list'>
            {state.books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookListItem
                            book={book}
                            onAddedToCart={() => state.onAddedToCart(book.id)} />
                    </li>
                )
            })}
        </ul>
    )
}



class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: (id) => bookAddedToCart(id)
    }, dispatch)

    //Обычная форма диспатчеров

    // return bindActionCreators({
    //     booksLoaded,
    //     booksRequested,
    //     booksError
    // }, dispatch)
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
