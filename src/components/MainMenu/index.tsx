import for_wedding from '../images/mainMenu/for_wedding.png'
import for_children from '../images/mainMenu/for_children.png'
import for_christening from '../images/mainMenu/for_christening.png'
import for_men from '../images/mainMenu/for_men.png'
import for_women from '../images/mainMenu/for_women.png'
import open_cakes from '../images/mainMenu/open_honey.png'
import pies from '../images/mainMenu/pies.png'
import sets from '../images/mainMenu/sets.png'
import fillings from '../images/mainMenu/fillings.png'
import decor from '../images/decor.png'
import './MainMenu.scss'
import { NavLink } from 'react-router-dom'

export function MainMenu() {
  return (
    <div className="main-menu">
      <div className="main__decor">
        <img src={decor} alt="decor" />
      </div>
      <div className="main-menu__container _container">
        <div className="main-menu__body">

          <div className="main-menu__menu">
            <ul className="main-menu__list">
              <li className="main-menu__item">
                <NavLink to={'/cakes/for_wedding'}>
                  <img src={for_wedding} alt="for_wedding" />
                </NavLink>
                <div className="main-menu__title">Свадебные</div>
              </li>
              <li className="main-menu__item">
                <NavLink to={'/cakes/for_children'}>
                  <img src={for_children} alt="for_children" />
                </NavLink>
                <div className="main-menu__title">Детские</div>
              </li>
              <li className="main-menu__item">
                <NavLink to={'/cakes/for_christening'}>
                  <img src={for_christening} alt="for_christening" />
                </NavLink>
                <div className="main-menu__title main-menu__title_title-middle">На Крещение</div>
              </li>
              <li className="main-menu__item">
                <NavLink to={'/cakes/for_men'}>
                  <img src={for_men} alt="for_men" />
                </NavLink>
                <div className="main-menu__title main-menu__title_title-long">Для джентельменов</div>
              </li>
              <li className="main-menu__item">
                <NavLink to={'/cakes/for_women'}>
                  <img src={for_women} alt="for_women" />
                </NavLink>
                <div className="main-menu__title">Для леди</div>
              </li>
              <li className="main-menu__item">
                <NavLink to={'/cakes/open_cakes'}>
                  <img src={open_cakes} alt="open_cakes" />
                </NavLink>
                <div className="main-menu__title main-menu__title_title-long">Открытые медовики</div>
              </li>
              <li className="main-menu__item">
                <NavLink to={'/cakes/pies'}>
                  <img src={pies} alt="pies" />
                </NavLink>
                <div className="main-menu__title">Пирожные</div>
              </li>
              <li className="main-menu__item">
                <NavLink to={'/cakes/sets'}>
                  <img src={sets} alt="sets" />
                </NavLink>
                <div className="main-menu__title">Наборы</div>
              </li>
              <li className="main-menu__item">
                <NavLink to={'/cakes/fillings'}>
                  <img src={fillings} alt="fillings" />
                </NavLink>
                <div className="main-menu__title">Начинки</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
