import { CakeCard } from '../../components/CakeCard'
import { useSelector } from 'react-redux'

export function Cake() {
  const { data: post } = useSelector((state) => state.cakes)

  const cakePage = post.slice(0, 1).map((item) => <CakeCard key={item.id} post={item} />)

  return (
    <div className="cake">
      <div className="cake__container _container">
        <div className="cake__body">
          {cakePage}
        </div>
      </div>
    </div>
  )
}
