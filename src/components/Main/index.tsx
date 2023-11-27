import logo from '../images/logo.png'
import flower from '../images/frower_main.png'
import slogan from '../images/slogan_main.png'
import image from '../images/main_bg.jpg'
import './Main.scss'

export function Main() {
  return (
    <main className="main">
      <div className="main__image">
        <img src={image} alt="image" />
      </div>
      <div className="main__container _container">
        <div className="main__body">
          <div className="main__logo">
            <img src={logo} alt="logo"  />
          </div>
          <div className="main__info">
            <div className="main__name">Ольга</div>
            <div className="main__title">Ваш семейный кондитер</div>
          </div>
          <div className="main__decor">
            <img src={flower} alt="flower" />
          </div>
          <div className="main__slogan">
            <img src={slogan} alt="slogan" />
          </div>
        </div>
      </div>
    </main>
  )
}
