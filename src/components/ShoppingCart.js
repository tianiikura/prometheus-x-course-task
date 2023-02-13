import { useContext } from 'react';
import { BooksContext } from './BooksContext';
import { CartContext } from './CartContext';
import EmptyBasket from './EmptyBasket';
import './ShoppingCart.css';

function ShoppingCart () {
    const books = useContext (BooksContext);
    const {cart, clearCart} = useContext(CartContext);

    if (Object.keys(cart).length === 0) {
        return <EmptyBasket /> ;
    }

    let booksInCart = [];
    for (let book of books) {
        if (cart[book.id]) {
            booksInCart.push(book);
        }
    }
    
    let purchaseItems = [];
    let cartTotalPrice =  0;
    for (let book of booksInCart) {
        let count = cart[book.id];
        let totalPrice = count * book.price;
        cartTotalPrice += totalPrice;
        
        purchaseItems.push(
            <div className='basket-page__purchase-item' key={book.id.toString()}>
                <div className='basket-page__book-name'>
                    {book.title}
                </div>
                <div className='basket-page__price-per-one'>
                    {book.price}
                </div>
                <div className='basket-page__count'>
                    {count}
                </div>
                <div className='basket-page__book-total-price'>
                    {totalPrice.toFixed(2)}
                </div>
            </div>
        )
    }
 
    return (
        <main className="basket-page">
            <div>
                <button type="button" 
                        className="basket-page__purchase-button basket-page__purchase-button_active"
                        onClick={event => clearCart()} >
                    Purchase
                </button>  
            </div>       
            {purchaseItems}
            <div className="basket-page__total-amount">
                Total price,$ <span>{cartTotalPrice.toFixed(2)}</span> 
            </div>
        </main>
    )
}

export default ShoppingCart;