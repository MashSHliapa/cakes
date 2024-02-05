import logo from '../images/logo.png'
import flower from '../images/main_frower.png'
import slogan from '../images/main_slogan.png'
import image from '../images/main-theme.jpg'
import './Main.scss'

export function Main() {
  return (
    <main className="main">
      {/* <div className="main__image _ibg">
        <img src={image} alt="image" />
      </div> */}
      <div className="main__container _container">
        <div className="main__body">
          <div className="main__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="main__info">
            <div className="main__name">Ольга</div>
            <div className="main__title">Ваш семейный кондитер</div>
          </div>
          <div className="main__decor">
            <img src={flower} alt="flower" width={150} />
          </div>
          <div className="main__slogan">
            <img src={slogan} alt="slogan" />
          </div>
        </div>
        <div className="main__text">Торты для Вашего праздника!</div>
      </div>
    </main>
  )
}
