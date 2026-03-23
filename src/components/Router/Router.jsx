import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import App from '../../App';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';

export const router = createBrowserRouter([
    {
       path:"/",
       Component:Root,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
            index:true,
            path:"/",
            loader:()=>fetch('appData.json'),
            Component:Home,
        },
        {
            path:"/apps",
            Component:Apps,
        },
        {
            path:"/installation",
            Component:Installation,
        },
       ]

    }
]);
