import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Layout from './Layout'; // Changed from App to Layout
import HomePage from './components/HomePage'; // Import the new HomePage component
import Sales from './components/Sales';

// Instagramのリンク欄などは URL の # を %23 にエンコードしてしまう。
// その形(/#/%23company-message)のままだと HashRouter がルートとして解釈できず
// 404になるため、ルーター生成前に元の形へ戻しておく。
const encodedAnchor = window.location.hash.match(/^#\/%23([\w-]+)$/);
if (encodedAnchor) {
  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}${window.location.search}#/#${encodedAnchor[1]}`
  );
}

// Create the router configuration
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "sales",
        element: <Sales />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
