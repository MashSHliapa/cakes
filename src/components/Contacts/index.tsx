import instagram from '../images/instagram.png'
import telegram from '../images/telegram.svg'
import './Contacts.scss'

export function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__body">
        <div className="contacts__phone">
        <a href="tel:+375292266734">+375(29) 226-67-34</a>
        </div>
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
    </div>
  )
}
