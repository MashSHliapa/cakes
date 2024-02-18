import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { CakesCard } from "../../components/CakesCard"

export function CakesForMen() {
  const cakes = useSelector((state: RootState) => state.cakes.data)

  const filterCakes = cakes.filter((item) => item.category === 'for_men')

  const CakesForMen = filterCakes.map((item) => <CakesCard post={item} key={item.id} />)

  return (
    <div className="cakes">
      <div className="cakes__container _container">
        <div className="cakes__body">
          <div className="cakes__list">
            {CakesForMen}
          </div>
        </div>
      </div>
    </div>
  )
}

