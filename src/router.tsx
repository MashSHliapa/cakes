import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
// import { Main } from './components/Main'
import { Cakes } from './pages/Cakes'
import { Cake } from './pages/Cake'
import { AboutMe } from './pages/AboutMe/AboutMe'
import { CakesForWedding } from './pages/CakesForWedding'
import { CakesForChildren } from './pages/CakesForChildren'
import { CakesForMen } from './pages/CakesForMen'
import { CakesForWomen } from './pages/CakesForWomen'
import { OpenCakes } from './pages/OpenCakes'
import { Pies } from './pages/Pies'
import { Sets } from './pages/Sets'
import { CakesForChristening } from './pages/CakesForChristening'
import { Fillings } from './pages/Fillings'


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
      },
      {
        path: '/cakes/for_wedding',
        element: <CakesForWedding />
      },
      {
        path: '/cakes/for_children',
        element: <CakesForChildren/>
      },
      {
        path: '/cakes/for_christening',
        element: <CakesForChristening/>
      },
      {
        path: '/cakes/for_men',
        element: <CakesForMen/>
      },
      {
        path: '/cakes/for_women',
        element: <CakesForWomen/>
      },
      {
        path: '/cakes/open_cakes',
        element: <OpenCakes/>
      },
      {
        path: '/cakes/pies',
        element: <Pies/>
      },
      {
        path: '/cakes/sets',
        element: <Sets/>
      },
      {
        path: '/cakes/fillings',
        element: <Fillings/>
      }
    ]
  }
])
