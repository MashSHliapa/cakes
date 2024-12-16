import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { MainMenu } from '../MainMenu/MainMenu';
import { Fillings } from '../Fillings/Fillings';
import { Footer } from '../Footer/Footer';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <MainMenu />
      <Outlet />
      <Fillings />
      <Footer />
    </div>
  );
}
