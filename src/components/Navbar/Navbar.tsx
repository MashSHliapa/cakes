import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list">
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Примеры работ
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Начинки
            </a>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/about">
              Обо мне
            </NavLink>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Контакты и Доставка
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
