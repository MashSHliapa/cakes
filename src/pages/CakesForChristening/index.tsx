import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Title } from '../../components/Title/Title'
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory'

export function CakesForChristening() {

  const cakes = useSelector((state: RootState) => state.cakes.data)

  return (
    <div className="cakes">
      <Title>Торты на Крещение</Title>
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__list">
            {filterCakesByCategory('for_christening', cakes)}
          </div>
        </div>
      </div>
    </div>
  )
}
