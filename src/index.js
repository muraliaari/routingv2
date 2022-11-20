import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import Aboutcompany from './pages/Aboutcompany';
import AboutFounder from './pages/AboutFounder';
import Contact from './pages/Contact';
import ToDo from './pages/ToDo';
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
    children:[
      {
        path:"company",
        element:<Aboutcompany/>
      },
      {
        path:"founders",
        element:<AboutFounder/>
      }
    ]
  },
  {
    path: "contact",
    element: <Contact/>,
  },
]);
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "todo",
        element: <ToDo/>,
      },
      {
        path: "about",
        element: <About/>,
        children:[
          {
            path:"company",
            element:<Aboutcompany/>
          },
          {
            path:"founders",
            element:<AboutFounder/>
          }
        ]
      },

    ]
  },
  
  {
    path: "contact",
    element: <Contact/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
