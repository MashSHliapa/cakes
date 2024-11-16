import forWedding from '../images/mainMenu/for_wedding.png';
import forChildren from '../images/mainMenu/for_children.png';
import forChristening from '../images/mainMenu/for_christening.png';
import twoTier from '../images/mainMenu/two_tier.png';
import openHoney from '../images/mainMenu/open_honey.png';
import forMen from '../images/mainMenu/for_men.png';
import forWomen from '../images/mainMenu/for_women.png';
import cakeSphere from '../images/mainMenu/cake_sphere.png';
import pies from '../images/mainMenu/pies.png';
import sets from '../images/mainMenu/sets.png';
// import logo from '../images/mainMenu/menu_logo.svg';
import arrow from '../images/mainMenu/menu_arrow.svg';
import './MainMenu.scss';
import { LogoTitle } from '../LogoTitle/LogoTitle';

export function MainMenu() {
  return (
    <div className="main-menu">
      <div className="main-menu__container _container">
        <div className="main-menu__body">
          {/* <div className="main-menu__logo-wrapper">
            <div className="main-menu__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="main-menu__separator"></div>
          </div> */}
          <div className="main-menu__logo-title">
            <LogoTitle />
          </div>
          <h2 className="main-menu__title">Выберите понравившийся декор из категорий</h2>
          <ul className="main-menu__list">
            <li className="main-menu__item">
              <img src={forWedding} alt="for-wedding" />
              <div className="main-menu__item-text">Свадебные</div>
            </li>
            <li className="main-menu__item">
              <img src={forChildren} alt="for-children" />
              <div className="main-menu__item-text">Детские</div>
            </li>
            <li className="main-menu__item">
              <img src={forChristening} alt="for-christening" />
              <div className="main-menu__item-text">На Крещение</div>
            </li>
            <li className="main-menu__item">
              <img src={twoTier} alt="two-tier" />
              <div className="main-menu__item-text">Двухярусные</div>
            </li>
            <li className="main-menu__item">
              <img src={openHoney} alt="open_honey" />
              <div className="main-menu__item-text">Открытые медовики</div>
            </li>
            <li className="main-menu__item">
              <img src={forMen} alt="for_men" />
              <div className="main-menu__item-text">Для джентльменов</div>
            </li>
            <li className="main-menu__item">
              <img src={forWomen} alt="for_women" />
              <div className="main-menu__item-text">Для Леди</div>
            </li>
            <li className="main-menu__item">
              <img src={cakeSphere} alt="cake_sphere" />
              <div className="main-menu__item-text">Торт-сфера</div>
            </li>
            <li className="main-menu__item">
              <img src={pies} alt="pies" />
              <div className="main-menu__item-text">Пирожные</div>
            </li>
            <li className="main-menu__item">
              <img src={sets} alt="sets" />
              <div className="main-menu__item-text">Наборы</div>
            </li>
          </ul>
          <div className="main-menu__subtitle">Также можно изменить выбранный декор по Вашему усмотрению</div>
          <div className="main-menu__fillings-box">
            <div className="main-menu__fillings-text">Выбирай начинку по своему вкусу</div>
            <div className="main-menu__arrow">
              <img src={arrow} alt="arrow" />
            </div>
            <div className="main-menu__button-wrapper">
              <a href="#fillings" className="main-menu__button button">
                Начинки
              </a>
            </div>
          </div>
          <h3 className="main-menu__slogan">
            Для создания выбранного Вами угощения используются только натуральные и качественные ингредиенты!
          </h3>
        </div>
      </div>
    </div>
  );
}
