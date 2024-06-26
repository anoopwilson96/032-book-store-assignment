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
import Home from './routes/home.jsx';
import Authors, {loader as authorsLoader} from './routes/authors.jsx';
import Books from './routes/books.jsx';
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
      },
      {
        path: '/authors',
        element: <Authors/>,
        loader: authorsLoader
      },
      {
        path: '/books',
        element: <Books/>
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
