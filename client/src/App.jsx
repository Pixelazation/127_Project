import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import AddFormInfo from './pages/AddFormInfo';
import BrowseWithDropdown from './pages/BrowseWithDropdown';
import FrontWithNavBar from './pages/FrontWithNavBar';
import HomePage from './pages/HomePage';
import ViewSlips from './pages/ViewSlips';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/AddFormInfo', element: <AddFormInfo /> },
  { path: '/BrowseWithDropdown', element: <BrowseWithDropdown /> },
  { path: '/FrontWithNavBar', element: <FrontWithNavBar /> },
  { path: '/ViewSlips', element: <ViewSlips /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}