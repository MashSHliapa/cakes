import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { MainMenu } from '../MainMenu/MainMenu';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';
import { Fillings } from '../Fillings/Fillings';
import './Layout.scss';
import { OpenCakes } from '../../pages/OpenCakes/OpenCakes';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <MainMenu />
      <OpenCakes />
      <Fillings />
      <Outlet />
      <Footer />
    </div>
  );
}
