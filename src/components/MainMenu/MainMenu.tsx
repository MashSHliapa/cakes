import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { LogoTitle } from '../LogoTitle/LogoTitle';
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
import arrow from '../images/mainMenu/menu_arrow.svg';
import './MainMenu.scss';

export function MainMenu() {
  function scrollToCakes() {
    setTimeout(() => scrollToPage('cakes'), 200);
  }

  return (
    <div className="main-menu" id="main-menu">
      <div className="main-menu__container _container">
        <div className="main-menu__body">
          <div className="main-menu__logo-title">
            <LogoTitle />
          </div>
          <h2 className="main-menu__title">Выберите понравившийся декор из категорий</h2>
          <ul className="main-menu__list">
            <NavLink to="/cakes/for_wedding" className="main-menu__item" onClick={scrollToCakes}>
              <img src={forWedding} alt="for-wedding" />
              <div className="main-menu__item-text">Свадебные</div>
            </NavLink>
            <NavLink to="/cakes/for_children" className="main-menu__item" onClick={scrollToCakes}>
              <img src={forChildren} alt="for-children" />
              <div className="main-menu__item-text">Детские</div>
            </NavLink>
            <NavLink to="/cakes/for_christening" className="main-menu__item" onClick={scrollToCakes}>
              <img src={forChristening} alt="for-christening" />
              <div className="main-menu__item-text">На Крещение</div>
            </NavLink>
            <NavLink to="/cakes/two_tier" className="main-menu__item" onClick={scrollToCakes}>
              <img src={twoTier} alt="two-tier" />
              <div className="main-menu__item-text">Двухярусные</div>
            </NavLink>
            <NavLink to="/cakes/open_cakes" className="main-menu__item" onClick={scrollToCakes}>
              <img src={openHoney} alt="open_honey" />
              <div className="main-menu__item-text">Открытые медовики</div>
            </NavLink>
            <NavLink to="/cakes/for_men" className="main-menu__item" onClick={scrollToCakes}>
              <img src={forMen} alt="for_men" />
              <div className="main-menu__item-text">Для джентльменов</div>
            </NavLink>
            <NavLink to="/cakes/for_women" className="main-menu__item" onClick={scrollToCakes}>
              <img src={forWomen} alt="for_women" />
              <div className="main-menu__item-text">Для Леди</div>
            </NavLink>
            <NavLink to="/cakes/sphere" className="main-menu__item" onClick={scrollToCakes}>
              <img src={cakeSphere} alt="sphere" />
              <div className="main-menu__item-text">Торт-сфера</div>
            </NavLink>
            <NavLink to="/cakes/pies" className="main-menu__item" onClick={scrollToCakes}>
              <img src={pies} alt="pies" />
              <div className="main-menu__item-text">Пирожные</div>
            </NavLink>
            <NavLink to="/cakes/sets" className="main-menu__item" onClick={scrollToCakes}>
              <img src={sets} alt="sets" />
              <div className="main-menu__item-text">Наборы</div>
            </NavLink>
          </ul>
          <div className="main-menu__subtitle">Также можно изменить выбранный декор по Вашему усмотрению</div>
          <div className="main-menu__fillings-box">
            <div className="main-menu__fillings-text">Выбирай начинку по своему вкусу</div>
            <div className="main-menu__arrow">
              <img src={arrow} alt="arrow" />
            </div>
            <div className="main-menu__button-wrapper">
              <a href="#fillings" className="main-menu__button button button-main">
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
