import { useSelector } from 'react-redux';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageOdd } from '../../components/CakesPageOdd/CakesPageOdd';
import { RootState } from '../../redux/store';

export function Pies() {
  const cakes = useSelector((state: RootState) => state.cakes.data);

  const filterCakes = filterCakesByCategory('pie', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);
  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);
  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  return (
    <CakesPageOdd
      title="Пирожные"
      subtitle="Пирожные"
      text="На совеременных праздниках пирожные уже давно перестали быть просто десертом. Это лакомство - произведение кондитерского искусства. Порционные пирожные идеально подойдут для небольшой компании. Минимальный заказ: от 6 штук."
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
    />
  );
}
