import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import myPhoto from '../images/my_photo.png';
import mainPhoto from '../images/main_photo.png';
import mainLogo from '../images/main_logo.svg';
import './Main.scss';

export function Main() {
  function scrollToContacts() {
    console.log('scroll');
    setTimeout(() => {
      scrollToPage('contacts');
    }, 200);
  }

  return (
    <main className="main">
      <div className="main__container _container">
        <div className="main__body">
          <div className="main__info">
            <div className="main__data">
              <h1 className="main__name">Ольга</h1>
              <h2 className="main__title">Ваш семейный кондитер</h2>
              <h3 className="main__slogan">С моими десертами остаются навсегда!</h3>
            </div>
            <div className="main__button-wrapper">
              <NavLink to="/contacts" className="main__button button" onClick={scrollToContacts}>
                Заказать
              </NavLink>
            </div>
          </div>
          <div className="main__images">
            <div className="main__main-logo-wrapper">
              <div className="main__main-logo">
                <img src={mainLogo} alt="main_logo" />
              </div>
              <div className="main__main-photo">
                <img src={mainPhoto} alt="main_photo" />
              </div>
            </div>
            <div className="main__my-photo">
              <img src={myPhoto} alt="my_photo" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
