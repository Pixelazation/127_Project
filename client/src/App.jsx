import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import FormInfo from './pages/FormInfo';
import HomePage from './pages/HomePage';
import ViewRow from './pages/ViewRow';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/ViewRow/:id', element: <ViewRow /> },
  { path: '/AddFormInfo', element: <FormInfo /> },
  { path: '/EditFormInfo/:id', element: <FormInfo /> }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}