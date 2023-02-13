import './App.css';
import Header from './components/Header.js';
import BookList from './components/BookList';
import booksJson from './misc/books.json'
import SpecificBook from './components/SpecificBook';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import ShoppingCart from './components/ShoppingCart';
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import { useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import Error404 from './components/404.js'
import {BooksContext} from './components/BooksContext';
import { CartContext } from './components/CartContext';

function App() {
  const [username, setUsername] = useState(reactLocalStorage.get('Username'));
  const logIn = function (name) {
      reactLocalStorage.set('Username', name);
      setUsername(name);
  }

  const logOut = function () {
    reactLocalStorage.remove('Username');
    setUsername(null);
  }

  const [cart, setCart] = useState(reactLocalStorage.getObject('cart'));
  const addToCart = function (bookId, count) {
    cart[bookId] = count;
    reactLocalStorage.setObject('cart', cart);
    setCart(cart);
  }

  const clearCart = function () {
    reactLocalStorage.remove('cart');
    setCart({});
  }

  let routes;
  if (!username) {
    routes = <Route path='/' element = {<Layout username={username} logOut={logOut} />}>
                <Route path='' element = {<SignIn logIn={logIn}/>}/>
                <Route path='*' element = {<Error404 />} />
              </Route>
  }
  else {
    routes = <Route path='/' element = {<Layout username={username} logOut={logOut} />}>
              <Route path='' element = {<BookList />}/>
              <Route path='books' element = {<BookList />}/>
              <Route path='book/:id' loader={bookLoader} element = {<SpecificBook /> }/>
              <Route path='cart' element = {<ShoppingCart />}/>
              <Route path='*' element = {<Error404 />} />
            </Route>
  }

  let router = createBrowserRouter(
    createRoutesFromElements(routes), {
      basename: "/x-course-task/"
    }
  );

  return (
    <BooksContext.Provider value={booksJson.books}>
      <CartContext.Provider value={{cart, addToCart, clearCart}} >
        <RouterProvider router={router} />
      </CartContext.Provider>
    </BooksContext.Provider>
  );
}

function Layout({username, logOut}) {
  return (
      <div className='screen'>
          <Header username={username} logOut={logOut} />
          <div className='component-block'>
            <Outlet />
          </div>
          <Footer />
      </div>
  );
}

export async function bookLoader({
  params,
}) {
  if (!params.id || isNaN(params.id)) {
    throw new Error("Expected params.id");
  }
  params.id = parseInt(params.id);
  for (let book of booksJson.books) {
      if (book.id === params.id) {
        return book;
      }
  }
  throw new Error(`I couldn't find a book with id "${params.id}"`);
}

export default App;
