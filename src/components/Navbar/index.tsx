import { NavLink } from 'react-router-dom'
import './Navbar.scss'

export function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list">
          <li className="navbar__item _icon">
            <a className="navbar__link" href="#">Примеры работ</a>
          </li>
          <li className="navbar__item _icon">
            <a className="navbar__link" href="#">Начинки</a>
          </li>
          <li className="navbar__item _icon">
            <a className="navbar__link" href="#">Отзывы</a>
          </li>
          <li className="navbar__item _icon">
            <a className="navbar__link" href="#">Контакты</a>
          </li>
          <li className="navbar__item _icon">
            <NavLink className="navbar__link" to="/about">Обо мне</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
