import { Link } from 'react-router-dom';
import './BookItem.css';
import missingbook from '../pictures/missingbook.webp'

function BookItem (props) {
    let shortTitle = props.item.title;
    let image = props.item.image || missingbook;

    if (shortTitle.length > 24) {
        shortTitle = shortTitle.slice(0, 25) + "..."
    }

    return (
        <div className="book-item">
                <div className="book-item__book-cover">
                    <img 
                    src={image} 
                    alt={props.item.title} />
                </div>
                <div className="book-item__info">
                    <div className="book-item__book-name">
                        {shortTitle}
                    </div>
                    <div className="book-item__author-name">
                        {props.item.author}
                    </div>
                    <div>
                        <div className="book-item__price">
                            {props.item.price}
                        </div>
                        <Link to={`/book/${props.item.id}`} className="book-item__view-button">View</Link>
                    </div>
                </div>
        </div>
    )
}

export default BookItem;