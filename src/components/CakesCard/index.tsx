import './CakesCard.scss'

export function CakesCard(props) {

  return (
    <div className="cakes-card">
      <div className="cakes-card__body">
        <div className="cakes-card__image">
          <img src={props.post.image} alt="image" />
        </div>
        <div className="cakes-card__title">{props.post.title}</div>
        <div className="cakes-card__separator"></div>
        <a href="#" className="cakes-card__button">Подробнее</a>
      </div>
    </div>
  )
}
