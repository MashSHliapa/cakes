import { PostData } from '../../types/interfaces'
import { Contacts } from '../Contacts'
import './CakeCard.scss'

export function CakeCard(props: { post: PostData }) {

  return (
    <div className="cake-card">
      <div className="cake-card__body">
        <div className="cake-card__image">
          <img src={props.post.image} alt="image" />
        </div>
        <div className="cake-card__info">
          <div className="cake-card__title">{props.post.title}</div>
          <div className="cake-card__subtitle">Для создания выбранного Вами угощения используется только натуральные и качественные ингредиенты!
            <span>Также можно выбрать и изменить декор по Вашему усмотрению. А начинку можно выбрать здесь.</span>
          </div>
          <div className="cake-card__separator"></div>
          <div className="cake-card__text">Все подробности оговариваются индивидуально
            в соответствии с Вашими пожеланиями!</div>
            <Contacts />
        </div>
      </div>
    </div>
  )
}
