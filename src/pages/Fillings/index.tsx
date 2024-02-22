import { useSelector } from 'react-redux'
import { Title } from '../../components/Title'
import { CakesCard } from '../../components/CakesCard'
import { FillingsCard } from '../../components/FillingsCard'
export function Fillings() {

  const { data: posts } = useSelector((state: RootState) => state.fillings)
  console.log(posts)


  const fillingsPage = posts.map((item) => <FillingsCard key={item.id} post={item} />)


  return (
    <div className="cakes">
      <Title>Начинки</Title>
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__list">
            {fillingsPage}
          </div>
        </div>
      </div>
    </div>
  )
}
