import { useSelector } from 'react-redux'
import { Title } from '../../components/Title'
import { CakesCard } from '../../components/CakesCard'
import './Cakes.scss'

export function Cakes() {

  const { data: post } = useSelector((state) => state.cakes)

  const cakesPage = post.map((item) => <CakesCard key={item.id} post={item} />)

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
