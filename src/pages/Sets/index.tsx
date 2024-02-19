import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Title } from '../../components/Title'
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory'

export function Sets() {

  const cakes = useSelector((state: RootState) => state.cakes.data)

  return (
    <div className="cakes">
      <Title>Наборы</Title>
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__list">
            {filterCakesByCategory('set', cakes)}
          </div>
        </div>
      </div>
    </div>
  )
}
