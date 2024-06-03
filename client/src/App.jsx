import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import AddFormInfo from './pages/AddFormInfo';
import HomePage from './pages/HomePage';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/AddFormInfo', element: <AddFormInfo /> }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}