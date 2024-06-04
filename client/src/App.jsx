import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import AddFormInfo from './pages/AddFormInfo';
import HomePage from './pages/HomePage';
import ViewRow from './pages/ViewRow';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/ViewRow', element: <ViewRow /> },
  { path: '/AddFormInfo', element: <AddFormInfo /> }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}