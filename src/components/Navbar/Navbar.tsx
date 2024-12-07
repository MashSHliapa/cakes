import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import './Navbar.scss';

export function Navbar() {
  function scrollToPageAboutMe() {
    setTimeout(() => scrollToPage('about'), 100);
  }

  function scrollToContacts() {
    setTimeout(() => scrollToPage('contacts'), 100);
  }

  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list">
          <li className="navbar__item">
            <a className="navbar__link" href="#main-menu">
              Примеры работ
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#fillings">
              Начинки
            </a>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/about" onClick={scrollToPageAboutMe}>
              Обо мне
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contacts" onClick={scrollToContacts} className="navbar__link">
              Контакты и Доставка
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
