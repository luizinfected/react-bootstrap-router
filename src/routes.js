import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import ErrorPage from './error-page';
import Contato from './Contato';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contatos",
                element: <Contato/>,
            },
        ],
    },
    {
        path: "contato",
        element: <Contato/>,
    },
]);