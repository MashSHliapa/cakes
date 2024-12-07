import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AboutMe } from './pages/AboutMe/AboutMe';
import { Contacts } from './pages/Contacts/Contacts';
import { CakesForWedding } from './pages/CakesForWedding/CakesForWedding';
import { CakesForChildren } from './pages/CakesForChildren/CakesForChildren';
import { CakesForMen } from './pages/CakesForMen/CakesForMen';
import { CakesForLadies } from './pages/CakesForLadies/CakesForLadies';
import { OpenCakes } from './pages/OpenCakes/OpenCakes';
import { Pies } from './pages/Pies/Pies';
import { Sets } from './pages/Sets/Sets';
import { CakesForChristening } from './pages/CakesForChristening/CakesForChristening';
import { CakesTwoTier } from './pages/CakesTwoTier/CakesTwoTier';
import { Sphere } from './pages/Sphere/Sphere';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <></>,
      },
      {
        path: '/about',
        element: <AboutMe />,
      },
      {
        path: '/contacts',
        element: <Contacts/>,
      },
      {
        path: '/cakes/for_wedding',
        element: <CakesForWedding />,
      },
      {
        path: '/cakes/for_children',
        element: <CakesForChildren />,
      },
      {
        path: '/cakes/for_christening',
        element: <CakesForChristening />,
      },
      {
        path: '/cakes/two_tier',
        element: <CakesTwoTier />,
      },
      {
        path: '/cakes/for_men',
        element: <CakesForMen />,
      },
      {
        path: '/cakes/for_women',
        element: <CakesForLadies />,
      },
      {
        path: '/cakes/open_cakes',
        element: <OpenCakes />,
      },
      {
        path: '/cakes/sphere',
        element: <Sphere />,
      },
      {
        path: '/cakes/pies',
        element: <Pies />,
      },
      {
        path: '/cakes/sets',
        element: <Sets />,
      },
    ],
  },
]);
