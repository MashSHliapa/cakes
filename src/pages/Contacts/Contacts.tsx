import { Title } from '../../components/Title/Title';
import { MyContacts } from '../../components/MyContacts/MyContacts';
import { LogoTitle } from '../../components/LogoTitle/LogoTitle';
import { Home } from '../../components/Home/Home';
import arrowLeft from '../../components/icons/arrow_left.svg';
import arrowRight from '../../components/icons/arrow_right.svg';
import yandex from '../../components/images/yandex.png';
import address from '../../components/images/address.png';
import './Contacts.scss';

export function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__container _container">
        <div className="contacts__body">
          <div className="contacts__info">
            <div className="contacts__contacts">
              <div className="contacts__title">
                <Title>Контакты</Title>
              </div>
              <div className="contacts__subtitle">
                {' '}
                Связаться
                <br /> с Vanilla.Crazy
              </div>
              <div className="contacts__my-contacts">
                <MyContacts />
              </div>
            </div>
            <div className="contacts__delivery delivery-methods">
              <div className="delivery-methods__logo-title">
                <LogoTitle />
              </div>
              <div className="delivery-methods__subtitle">Способы доставки:</div>
              <div className="delivery-methods__conditions ">
                <a
                  href="https://taxi.yandex.by/ru_by/"
                  target="_blank"
                  className="delivery-methods__condition delivery-methods__condition_yandex"
                >
                  <div className="delivery-methods__text">Возможна доставка через Яндекс от двери до двери</div>
                  <div className="delivery-methods__icon">
                    <img src={arrowLeft} alt="arrow-left" />
                  </div>
                  <div className="delivery-methods__hover-img background _ibg">
                    <img src={yandex} alt="yandex" />
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%91%D0%B5%D0%BB%D0%B5%D1%86%D0%BA%D0%BE%D0%B3%D0%BE+14%2F2,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+220117/@53.8554411,27.4564377,15.75z/data=!4m6!3m5!1s0x46dbda7ef77cc097:0x665da62bb8ca7f0f!8m2!3d53.8563077!4d27.4605159!16s%2Fg%2F11sv88m1fr?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="delivery-methods__condition delivery-methods__condition_address"
                >
                  <div className="delivery-methods__icon">
                    <img src={arrowRight} alt="arrow-right" />
                  </div>
                  <div className="delivery-methods__text">Вы также можете забрать свой заказ самостоятельно</div>
                  <div className="delivery-methods__hover-img background _ibg">
                    <img src={address} alt="yandex" />
                  </div>
                </a>
                <div className="delivery-methods__condition delivery-methods__condition_wedding-order">
                  <div className="delivery-methods__text">
                    Свадебные заказы от 4 кг <br /> доставляются на место Вашего мероприятия
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contacts__home">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}
