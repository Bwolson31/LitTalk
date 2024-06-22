import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home';
// import Signup from './pages/Signup';
import Login from './pages/Login';
// import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
// import CheckoutForm from './pages/CheckoutForm';
// import SearchResultsPage from './components/SearchResultsPage'; 

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Update from './pages/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profile',
        element: <Profile />
      }, {
        path: 'litforum/:litforumId',
        element: <litForum />
      },
      {
        path: 'create-litforum',
        element: <litForumCreationpPage />
      },
      {
        path: 'profile/:username',
        element: <Profile />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);