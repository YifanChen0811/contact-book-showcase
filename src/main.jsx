import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacts from './routes/Contacts'
import Contact from './routes/Contact'
import Edit from './routes/Edit'
import New from './routes/New'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Contacts />
      },
      {
        path: '/contact/:id',
        element: <Contact />
      },
      {
        path: '/edit/:id',
        element: <Edit />
      },
      {
        path: '/new',
        element: <New />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
