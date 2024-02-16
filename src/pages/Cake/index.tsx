import { useParams } from 'react-router-dom'
import { CakeCard } from '../../components/CakeCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { PostData } from '../../types/interfaces'

export function Cake() {

  const { data: posts } = useSelector((state: RootState) => state.cakes)

  console.log(posts)

  const { postId } = useParams()
  console.log(postId)

  const card = posts.find((item: PostData) => item.id == postId)
  console.log(card)


  return (
    <div className="cake">
      <div className="cake__container _container">
        <div className="cake__body">
          {card && <CakeCard post={card} />}
        </div>
      </div>
    </div>
  )
}
