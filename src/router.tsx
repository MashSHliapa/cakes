import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Main } from './components/Main'
import { Cakes } from './pages/Cakes'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Cakes />
      }
    ]
  }
])
