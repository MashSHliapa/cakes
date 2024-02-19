import { CakesCard } from "../components/CakesCard"
import { PostData } from "../types/interfaces"

export function filterCakesByCategory(category: string, cakes: PostData[]) {
  const filterCakes = cakes.filter((item: PostData) => item.category === category)
  const CakesForWomen = filterCakes.map((item: PostData) => <CakesCard post={item} key={item.id} />)
  return CakesForWomen
}
