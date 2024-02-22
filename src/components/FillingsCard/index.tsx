import { PostData } from '../../types/interfaces'
import './FillingsCard.scss'

export function FillingsCard(props: { post: PostData }) {
  return (
    <div className="fillings-card">
      <div className="fillings-card__body">
        <div className="fillings-card__image">
          <img src={props.post.image} alt="image" />
        </div>
        <div className="fillings-card__info">
          <div className="fillings-card__weight">Минимальный вес: {props.post.weight}</div>
          <div className="fillings-card__name">
            <div className="fillings-card__title">{props.post.title} <span>{props.post.subtitle}</span></div>
            <div className="fillings-card__separator"></div>
          </div>
          <div className="fillings-card__text">{props.post.text}</div>
        </div>
      </div>
    </div>
  )
}
