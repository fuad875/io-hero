import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppsDetails from '../Pages/Apps/AppsDetails';




export const router = createBrowserRouter([
    {
       path:"/",
       Component:Root,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
            index:true,
            path:"/",
            loader:()=>fetch('/appData.json').then(res => res.json()),
            Component:Home,
        },
        {
            path:"/apps",
            loader:()=>fetch('/appData.json').then(res => res.json()),
            Component:Apps,
        },
        {
            path:"/apps/:id",
             loader:()=>fetch('/appData.json').then(res => res.json()),
            Component:AppsDetails,
        },
        {
            path:"/installation",
            Component:Installation,
        },
       ]

    }
]);
