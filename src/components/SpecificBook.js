import './SpecificBook.css'
import {useContext, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartContext } from './CartContext';

function SpecificBook () {
    const {cart, addToCart} = useContext(CartContext);

    let book = useLoaderData();
    const [count, setCount] = useState( cart[book.id] || 1);
    let totalPrice = count * book.price;
    
    return (
        <main className='specific-book'>
            <div className="about-block">
                <div className="book-block">
                    <div className="book-cover">
                        <img 
                            src={book.image} 
                            alt={book.title} />
                    </div>
                    <div className="book-info">
                        <div>
                            <h1>Book name:
                            <span>{book.title}</span>
                            </h1>
                        </div>
                        <div>
                            Book author:
                            <span>{book.author}</span>
                        </div>
                        <div>
                            Book level:
                            <span>Beginner</span>
                        </div>
                        <div>
                            Book tags:
                            <span>core</span>
                        </div>
                    </div>
                </div>
                <div className="description">
                    {book.description}
                </div>
            </div>
            <div className="price-block">
                <form method="post" className="price-block__book-price-count" onSubmit={event => {event.preventDefault(); addToCart(book.id, count)}}>
                    <div className="price-block__price-per-one">
                        <span>Price,$</span>
                        <span id="pricePerOne">{book.price}</span>
                    </div>
                    <div className="price-block__count">
                        <label htmlFor="count">Count</label>
                        <input type="number" data-testid="count" name="count" value={count} min="1" max="42" 
                               onChange={event => setCount(Number(event.target.value))} />
                    </div>  
                    <div className="price-block__total-price">
                        <span>Total price</span>
                        <span data-testid="totalPrice">{totalPrice.toFixed(2)}</span>
                    </div>
                    <div >
                        <button className="price-block__add-button" type="submit">Add to cart</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default SpecificBook;