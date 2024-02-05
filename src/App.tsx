import './App.scss'
import { Layout } from './components/Layout'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  )
}
