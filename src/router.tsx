import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
// import { Main } from './components/Main'
import { Cakes } from './pages/Cakes'
import { Cake } from './pages/Cake'
import { AboutMe } from './pages/Cake/AboutMe'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Cakes />
      },
      {
        path: '/cake/:postId',
        element: <Cake />
      },
      {
        path: '/about',
        element: <AboutMe />
      }
    ]
  }
])
