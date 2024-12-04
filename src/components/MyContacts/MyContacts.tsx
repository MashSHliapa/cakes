import instagram from '../icons/instagram.svg';
import telegram from '../icons/telegram.svg';
import './MyContacts.scss';

export function MyContacts() {
  return (
    <div className="my-contacts">
      <div className="my-contacts__body">
        <div className="my-contacts__contacts">
          <h5 className="my-contacts__subtitle subtitle">Мои контакты:</h5>
          <div className="my-contacts__phone">
            <a href="tel:+375292266734">+375(29) 226-67-34</a>
          </div>
          <div className="my-contacts__email">Email: ovknady@mail.ru</div>
          <div className="my-contacts__icons">
            <div className="my-contacts__icon _icon">
              <a href="https://www.instagram.com/vanilla.crazy/?igshid=MzMyNGUyNmU2YQ%3D%3D" target="_blank">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
            <div className="my-contacts__icon _icon">
              <a href="https://web.telegram.org/k/#@Ovknady" target="_blank">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-contacts__pickup">
          <h5 className="my-contacts__subtitle subtitle">Адрес самовывоза:</h5>
          <div className="my-contacts__address">
            г. Минск <br />
            ул. Белецкого, 14/2
          </div>
        </div>
      </div>
    </div>
  );
}
