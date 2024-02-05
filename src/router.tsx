import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Main } from './components/Main'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      }
    ]
  }
])
