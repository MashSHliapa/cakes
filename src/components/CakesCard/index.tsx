import { NavLink } from 'react-router-dom'
import { PostData } from '../../types/interfaces'
import './CakesCard.scss'

export function CakesCard(props: { post: PostData }) {

  return (
    <div className="cakes-card">
      <div className="cakes-card__body">
        <div className="cakes-card__image">
          <img src={props.post.image} alt="image" />
        </div>
        {/* <div className="cakes-card__title">{props.post.title}</div>
        <div className="cakes-card__separator"></div> */}
        <NavLink to="/cake" className="cakes-card__button">Подробнее</NavLink>
      </div>
    </div>
  )
}
