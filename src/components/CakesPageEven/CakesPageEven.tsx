import { LogoTitle } from '../LogoTitle/LogoTitle';
import { IPropsCakesPage } from '../../types/interfaces';

export function CakesPageEven(props: IPropsCakesPage) {
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
                  <div className="cakes__button button">Заказать</div>
                </div>
              </div>
            </div>
            <div className="cakes__list">{props.row3}</div>
            <div className="cakes__list">{props.row4}</div>
            <div className="cakes__list">{props.row5}</div>
            <div className="cakes__list">{props.row6}</div>
            <div className="cakes__list">{props.row7}</div>
            <div className="cakes__list">{props.row8}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
