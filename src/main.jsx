import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from "./routes/homePage/Homepage"
import Dashboard from "./routes/dashboardPage/DashboardPage"
import ChatPage from "./routes/chatPage/ChatPage"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from "./layout/rootLayout/RootLayout"
import DashBoardLayout from './layout/dashboardlayout/DashBoardLayout.jsx'
import SignIn from "./routes/signInPage/SignInPage"
import SignUp from "./routes/signUpPage/SignUpPage"


const router = createBrowserRouter([
  {
    element:<RootLayout />,
    children:[
      {
        path:'/',
        element:<Homepage />
      },
      {
        path:'/sign-in/*',
        element:<SignIn />
      },
      {
        path:'/sign-up/*',
        element:<Homepage />
      },
      {
        element:<DashBoardLayout />,
        children:[
          {
            path:'/dashboard',
            element:<Dashboard />
          },
          {
            path:'/dashboard/chats/:id',
            element:<ChatPage />
          }
        ]
      }
     
    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
