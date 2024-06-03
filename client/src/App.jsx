import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import AddFormInfo from './pages/AddFormInfo';

import USure from './pages/USure';
import HomePage from './pages/HomePage';
import ViewSlips from './pages/ViewSlips';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/AddFormInfo', element: <AddFormInfo /> },
  { path: '/USure', element: <USure /> },
  { path: '/ViewSlips', element: <ViewSlips /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}