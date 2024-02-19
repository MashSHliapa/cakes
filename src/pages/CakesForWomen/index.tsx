import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Title } from '../../components/Title'
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory'

export function CakesForWomen() {

  const cakes = useSelector((state: RootState) => state.cakes.data)

  return (
    <div className="cakes">
      <Title>Торты для леди</Title>
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__list">
            {filterCakesByCategory('for_women', cakes)}
          </div>
        </div>
      </div>
    </div>
  )
}
