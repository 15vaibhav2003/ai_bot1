import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from "./routes/homePage/Homepage"
import Dashboard from "./routes/dashboardPage/DashboardPage"
import ChatPage from "./routes/chatPage/ChatPage"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage />
    ),
  },
  {
    path: "/dashboard",
    element:<Dashboard />,
    children:[
     {path:"/dashboard/page/:id" ,element:<ChatPage />} 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
