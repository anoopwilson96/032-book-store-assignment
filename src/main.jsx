import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './app/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home, {loader as homeLoader} from './routes/home.jsx';
import Authors, {loader as authorsLoader} from './routes/products/authors.jsx';
import Books,{ loader as booksLoader } from './routes/products/books.jsx';
import Book, {loader as bookLoader} from './routes/products/book.jsx';
import Author,{loader as authorLoader} from './routes/products/author.jsx';
import Login from './routes/login.jsx';
import Cart from './routes/products/cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home/>,
        loader: homeLoader
      },
      {
        path: '/authors',
        element: <Authors/>,
        loader: authorsLoader
      },
      {
        path:'/authors/:authorId',
        element: <Author/>,
        loader: authorLoader
      },
      {
        path: '/books',
        element: <Books/>,
        loader: booksLoader
      },
      {
        path: '/books/:bookId',
        element: <Book/>,
        loader: bookLoader
        
      },
      {
        path: '/login',
        element:<Login/>,
        
      },
      {
        path: '/cart',
        element: <Cart/>
      }

    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)



