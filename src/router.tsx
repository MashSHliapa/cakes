import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
// import { Main } from './components/Main'
import { Cakes } from './pages/Cakes'
import { Cake } from './pages/Cake'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Cakes />
      },
      {
        path: '/cake',
        element: <Cake />
      }
    ]
  }
])
