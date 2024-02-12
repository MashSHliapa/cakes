import image from '../images/main_photo.png'
import info from '../images/main_info.png'
import './Main.scss'

export function Main() {
  return (
    <main className="main">
      <div className="main__container _container">
        <div className="main__body">
          <div className="main__image _ibg">
            <img src={image} alt="image" />
          </div>
          <div className="main__info">
            <img src={info} alt="theme" /><img />
          </div>
        </div>
        <div className="main__text">Торты для Вашего праздника!</div>
      </div>
    </main>
  )
}
