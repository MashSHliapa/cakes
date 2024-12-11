import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { MainMenu } from '../MainMenu/MainMenu';
import { Fillings } from '../Fillings/Fillings';
import { Footer } from '../Footer/Footer';
import './Layout.scss';
import { Form } from '../../pages/Form/Form';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <MainMenu />
      <Form />
      <Outlet />
      <Fillings />
      <Footer />
    </div>
  );
}
