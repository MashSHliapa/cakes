import { MenuBurger } from '../BurgerMenu/BurgerMenu';
import { Navbar } from '../Navbar/Navbar';
import logo from '../icons/header_logo.svg';
import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__navbar">
            <Navbar />
          </div>
          <div className="header__burger">
            <MenuBurger />
          </div>
        </div>
      </div>
    </header>
  );
}
