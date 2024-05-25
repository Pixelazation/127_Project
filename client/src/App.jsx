import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import AddFormInfo from './pages/AddFormInfo';
import BrowseWithDropdown from './pages/BrowseWithDropdown';
import FrontWithNavBar from './pages/FrontWithNavBar';
import HomePage from './pages/HomePage';
import ViewSlips from './pages/ViewSlips';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/AddFormInfo', element: <AddFormInfo /> },
{ path: '/BrowseWithDropdown', element: <BrowseWithDropdown /> },
{ path: '/FrontWithNavBar', element: <FrontWithNavBar /> },
{ path: '/HomePage', element: <HomePage /> },
{ path: '/ViewSlips', element: <ViewSlips /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}