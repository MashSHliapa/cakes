import instagram from '../images/instagram.svg'
import telegram from '../images/telegram.svg'
import logo from '../images/footer_logo.svg'
import './Footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__col footer__col_1">
            <div className="footer__contacts contacts">
              <div className="contacts__text _text">Мои контакты:</div>
              <div className="contacts__data">
                <div className="contacts__phone">+375 (29) 226-67-34</div>
                <div className="contacts__email">Email: ovknady@mail.ru</div>
                <div className="contacts__icons">
                  <div className="contacts__icon-instagram _icon">
                    <a href="https://www.instagram.com/vanilla.crazy/?igshid=MzMyNGUyNmU2YQ%3D%3D" target="_blank">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </div>
                  <div className="contacts__icon-telegram _icon">
                    <a href="https://web.telegram.org/k/#/@MariaShliapnikova" target="_blank"><img src={telegram} alt="telegram" /></a>
                  </div>
                </div>
              </div>
              <div className="contacts__text _text">Адрес самовывоза:</div>
              <div className="contacts__address">г. Минск<br />
                ул. Белецкого, 14/2</div>
            </div>
          </div>

          <div className="footer__col footer__col_2">
            <div className="footer__info info">
              <div className="info__logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="info__about">
                <div className="info__name">ОЛЬГА КАБРЫНСКАЯ</div>
                <div className="info__title">Ваш семейный кондитер</div>
              </div>
            </div>
          </div>

          <div className="footer__col footer__col_3">
            <div className="footer__delivery delivery">
              <div className="delivery__text _text">Способы доставки:</div>
              <div className="delivery__conditions">Возможна доставка через Яндекс <br /> от двери до двери <span>Свадебные заказы от 4 кг.<br />
                доставляются на место Вашего мероприятия</span> Вы можете забрать свой заказ<br /> по адресу: <br /> г. Минск, ул. Белецкого, 14/2</div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">Vanilla Crazy ©</div>
      </div>
    </footer >
  )
}
