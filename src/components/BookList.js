import ToolBar from './ToolBar';
import BookItem from "./BookItem.js";
import './BookList.css';
import { useContext, useState } from 'react';
import { BooksContext } from './BooksContext';

function BookList () {
    const [filters, setFilters]  = useState({});

    let books = useContext (BooksContext);

    books = books.filter(book => book.title.toLowerCase().includes(filters.title));
    books = books.filter(book => filters.priceMin <= book.price);
    books = books.filter(book => book.price < filters.priceMax);

    let bookItems = [];
    for (let book of books) {
        bookItems.push(
        <BookItem item = {book} key={book.id.toString()} />
        )
    }

    return (
        <main className='booklist-block'>
            <ToolBar setFilters={setFilters} />
            <div className="book-shelf">
                {bookItems}
            </div>
        </main>
    );
}

export default BookList;