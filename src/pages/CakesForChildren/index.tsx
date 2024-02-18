import { useSelector } from 'react-redux'
import { Title } from '../../components/Title'
import { CakesCard } from '../../components/CakesCard'
import { RootState } from '../../redux/store'

export function CakesForChildren() {

  const cakes = useSelector((state: RootState) => state.cakes.data)
  const filterCakes = cakes.filter((item) => item.category === 'children')
  const CakesForChildren = filterCakes.map((item) => <CakesCard post={item} key={item.id} />)

  return (
    <div className="cakes">
      <Title>Торты для детей</Title>
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__list">
            {CakesForChildren}
          </div>
        </div>
      </div>
    </div>
  )
}
