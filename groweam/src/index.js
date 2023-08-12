import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Todo from './pages/Todo';
import Meeting from './pages/Meeting';
import TeamManage from './pages/TeamManage';
import DashBoard from './pages/DashBoard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Landing/>},
      {path: '/dashboard', element: <DashBoard/>},
      {path: '/login', element: <Login/>},
      {path: '/todo', element: <Todo/>},
      {path: '/meeting', element: <Meeting/>},
      {path: '/teamManage', element: <TeamManage/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
