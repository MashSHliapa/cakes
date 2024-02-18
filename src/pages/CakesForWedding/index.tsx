import { useSelector } from 'react-redux'
import { CakesCard } from '../../components/CakesCard'
import { Title } from '../../components/Title'
import { RootState } from '../../redux/store'

export function CakesForWedding() {

  const cakes = useSelector((state: RootState) => state.cakes.data)
  const filterCakes = cakes.filter((item) => item.category === 'wedding')
  const CakesForWedding = filterCakes.map((item) => <CakesCard post={item} key={item.id} />)

  return (
    <div className="cakes">
      <Title>Торты для свадьбы</Title>
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__list">
            {CakesForWedding}
          </div>
        </div>
      </div>
    </div>
  )
}
