import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { LogoTitle } from '../LogoTitle/LogoTitle';
import { GoToTop } from '../GoToTop/GoToTop';
import { IPropsCakesPage } from '../../types/interfaces';

export function CakesPageEven(props: IPropsCakesPage) {
  function scrollToContacts() {
    setTimeout(() => scrollToPage('contacts'), 100);
  }

  return (
    <div className="cakes">
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__logo-title">
            <LogoTitle />
          </div>
          <h2 className="cakes__title">{props.title}</h2>
          <div className="cakes__box">
            <div className="cakes__list">{props.row1}</div>
            <div className="cakes__description-row cakes__description-row_even">
              <div className="cakes__item">{props.row2}</div>
              <div className="cakes__description">
                <h3 className="cakes__subtitle">{props.subtitle}</h3>
                <h3 className="cakes__text">{props.text}</h3>
                <div className="cakes__button-wrapper">
                  <NavLink to="/contacts" className="cakes__button button" onClick={scrollToContacts}>
                    Заказать
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="cakes__list">{props.row3}</div>
            {[props.row4, props.row5, props.row6, props.row7, props.row8].map(
              (row, index) =>
                row && (
                  <div className="cakes__list" key={index}>
                    {row}
                  </div>
                ),
            )}
          </div>
        </div>
        <div className="cakes__go-to-top">
          <GoToTop />
        </div>
      </div>
    </div>
  );
}
