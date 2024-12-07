import { useSelector } from 'react-redux';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageOdd } from '../../components/CakesPageOdd/CakesPageOdd';
import { RootState } from '../../redux/store';

export function CakesForWedding() {
  const cakes = useSelector((state: RootState) => state.cakes.data);

  const filterCakes = filterCakesByCategory('for_wedding', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);

  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);

  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  const cakesRow4 = cakeDistribution(filterCakes, 7, 10);

  return (
    <CakesPageOdd
      title="Свадебные торты"
      subtitle="Неизменная традиция - свадебный торт!"
      text="Разрезать свадебный торт - прекрасная традиция на каждой свадьбе. Особенный, чувственный момент для новобрачной пары, который останется в памяти навсегда. Возможность сделать нежные фотографии и порадовать гостей потрясающим дизайном и вкусом. Вашему вниманию предлагаются свадебные торты, которые сделают Ваше торжество незабываемым!"
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
      row4={cakesRow4}
    />
  );
}

