import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Main from './component/layout/Main';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Places from './component/Places/Places';
import ErrorPage from './component/ErrorPage/ErrorPage';


const router=createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'places',
        element: <Places></Places>,
        loader: ()=>fetch('places.json')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
