import { useSelector } from 'react-redux';
import { LogoTitle } from '../../components/LogoTitle/LogoTitle';
import { RootState } from '../../redux/store';
import { PostData } from '../../types/interfaces';
import './OpenCakes.scss';

export function OpenCakes() {
  const cakes = useSelector((state: RootState) => state.cakes.data);
  const filterCakes = cakes.filter((item: PostData) => item.category === 'open_cakes');

  const openCakesRow1 = filterCakes.slice(0, 3).map((item: PostData, index) => (
    <div key={item.id} className={`cakes__item ${[1, 4, 6, 8].includes(index) ? 'cakes__item-center' : ''}`}>
      <img src={item.image} alt="img"></img>
    </div>
  ));

  const openCakesRow2 = filterCakes.slice(6, 7).map((item: PostData, index) => (
    <div key={item.id} className={`cakes__item ${[1, 4, 6, 8].includes(index) ? 'cakes__item-center' : ''}`}>
      <img src={item.image} alt="img"></img>
    </div>
  ));

  const openCakesRow3 = filterCakes.slice(3, 6).map((item: PostData, index) => (
    <div key={item.id} className={`cakes__item ${[1, 4, 6, 8].includes(index) ? 'cakes__item-center' : ''}`}>
      <img src={item.image} alt="img"></img>
    </div>
  ));

  return (
    <div className="cakes">
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__logo-title">
            <LogoTitle />
          </div>
          <h2 className="cakes__title">Открытые медовики</h2>
          <div className="cakes__box">
            <div className="cakes__list">{openCakesRow1}</div>
            <div className="cakes__description-row">
              <div className="cakes__description">
                <h3 className="cakes__subtitle">Что такое открытый Медовик?</h3>
                <h3 className="cakes__text">
                  Это тонкие медовые коржи, пропитанные кремом со сметаной, сливочным сыром, белым шоколадом и ванилью.
                  Коржи очень мягкие, тают во рту! Внешний вид может быть классическим – в виде круга. А может быть в
                  виде сердечка или любых цифр. Такой торт, без сомнений, украсит ваш праздничный стол!
                </h3>
                <div className="cakes__button-wrapper">
                  <div className="cakes__button button">Заказать</div>
                </div>
              </div>
              <div className="cakes__item">{openCakesRow2}</div>
            </div>
            <div className="cakes__list">{openCakesRow3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
