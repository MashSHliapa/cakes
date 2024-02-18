import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Title } from '../../components/Title'
import { CakesCard } from '../../components/CakesCard'

export function Cakes() {

  const { data: posts } = useSelector((state: RootState) => state.cakes)

  const cakesPage = posts.map((item) => <CakesCard key={item.id} post={item} />)

  return (
    <div className="cakes">
      <Title>примеры работ</Title>
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__list">
            {cakesPage}
          </div>
        </div>
      </div>
    </div>
  )
}
