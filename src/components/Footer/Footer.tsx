import { MyContacts } from '../MyContacts/MyContacts';
import { Home } from '../Home/Home';
import logo from '../images/footer_logo.svg';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__content-box">
            <div className="footer__column">
              <div className="footer__info info">
                <div className="info__logo">
                  <img src={logo} alt="logo" />
                </div>
                <h3 className="info__name">ОЛЬГА КАБРЫНСКАЯ</h3>
                <h4 className="info__title">Ваш семейный кондитер</h4>
              </div>
            </div>
            <div className="footer__column">
              <div className="footer__my-contacts my-contacts">
                <div className="my-contacts__my-contacts">
                  <MyContacts />
                </div>
              </div>
            </div>
            <div className="footer__column">
              <div className="footer__delivery delivery">
                <h5 className="delivery__subtitle subtitle">Способы доставки:</h5>
                <div className="delivery__conditions">
                  <h4 className="delivery__condition">Возможна доставка через Яндекс от двери до двери</h4>
                  <h4 className="delivery__condition">
                    Свадебные заказы <span>от 4 кг </span>
                    доставляются на место Вашего мероприятия
                  </h4>
                  <h4 className="delivery__condition">Вы также можете забрать свой заказ самостоятельно!</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__home">
            <Home />
          </div>
          <div className="footer__copyright">Vanilla Crazy {new Date().getFullYear()} ©</div>
        </div>
      </div>
    </footer>
  );
}
