import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home, {loader as homeLoader} from './routes/home.jsx';
import Authors, {loader as authorsLoader} from './routes/authors.jsx';
import Books,{ loader as booksLoader } from './routes/books.jsx';
import Book from './routes/book.jsx';

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
        path: '/books',
        element: <Books/>,
        loader: booksLoader
      },
      {
        path: '/book',
        element: <Book/>
      }

    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
