import './Header.scss'

export function Header() {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="#">Примеры работ</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Начинки</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Доставка</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Отзывы</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Контакты</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Обо мне</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
