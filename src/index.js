import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './styles/index.css';

import reportWebVitals from './reportWebVitals';
import {createHashRouter, RouterProvider} from "react-router-dom";

import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import LogementPage from "./pages/LogementPage.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createHashRouter([
    {
        path: "/",
        basename: "/P11_TAYLOR_Heather",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/logement/:detailsId",
                element: <LogementPage />,
            },
            {
                path: "/a_propos",
                element: <About />
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();