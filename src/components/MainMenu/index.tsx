import for_wedding from '../images/mainMenu/for_wedding.png'
import for_children from '../images/mainMenu/for_children.png'
import for_christening from '../images/mainMenu/for_christening.png'
import for_men from '../images/mainMenu/for_men.png'
import for_women from '../images/mainMenu/for_women.png'
import open_honey from '../images/mainMenu/open_honey.png'
import pies from '../images/mainMenu/pies.png'
import sets from '../images/mainMenu/sets.png'
import fillings from '../images/mainMenu/fillings.png'
import decor from '../images/decor.png'
import './MainMenu.scss'

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
                <a href="#">
                  <img src={for_wedding} alt="for_wedding" />
                </a>
                <div className="main-menu__title">Свадебные</div>
              </li>
              <li className="main-menu__item">
                <a href="#">
                  <img src={for_children} alt="for_children" />
                </a>
                <div className="main-menu__title">Детские</div>
              </li>
              <li className="main-menu__item">
                <a href="#">
                  <img src={for_christening} alt="for_christening" />
                </a>
                <div className="main-menu__title main-menu__title_title-middle">На Крещение</div>
              </li>
              <li className="main-menu__item">
                <a href="#">
                  <img src={for_men} alt="for_men" />
                </a>
                <div className="main-menu__title main-menu__title_title-long">Для джентельменов</div>
              </li>
              <li className="main-menu__item">
                <a href="#">
                  <img src={for_women} alt="for_women" />
                </a>
                <div className="main-menu__title">Для леди</div>
              </li>
              <li className="main-menu__item">
                <a href="#">
                  <img src={open_honey} alt="honey_cakes" />
                </a>
                <div className="main-menu__title main-menu__title_title-long">Открытые медовики</div>
              </li>
              <li className="main-menu__item">
                <a href="#">
                  <img src={pies} alt="pies" />
                </a>
                <div className="main-menu__title">Пирожные</div>
              </li>
              <li className="main-menu__item">
                <a href="#">
                  <img src={sets} alt="sets" />
                </a>
                <div className="main-menu__title">Наборы</div>
              </li>
              <li className="main-menu__item">
                <a href="#">
                  <img src={fillings} alt="fillings" />
                </a>
                <div className="main-menu__title">Начинки</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
