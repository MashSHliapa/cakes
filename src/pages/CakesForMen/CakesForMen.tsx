import { useSelector } from 'react-redux';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageEven } from '../../components/CakesPageEven/CakesPageEven';
import { RootState } from '../../redux/store';

export function CakesForMen() {
  const cakes = useSelector((state: RootState) => state.cakes.data);

  const filterCakes = filterCakesByCategory('for_men', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);
  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);
  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);
  const cakesRow4 = cakeDistribution(filterCakes, 7, 10);
  const cakesRow5 = cakeDistribution(filterCakes, 10, 13);
  const cakesRow6 = cakeDistribution(filterCakes, 13, 16);
  const cakesRow7 = cakeDistribution(filterCakes, 16, 19);
  const cakesRow8 = cakeDistribution(filterCakes, 19, 22);

  return (
    <CakesPageEven
      title="Торты для джентельменов"
      subtitle="Как выбирать торт для мужчин?"
      text="Определиться с украшением для торта Вам  помогут простые правила:
      Выбор оформления торта для мужчины зависит от того кому именно предназначается угощение и от его любимых хобби и увлечений. Если же торт любимому мужчине, то стоит вспомнить ваши общие семейные традиции и приятные моменты прошлого."
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
      row4={cakesRow4}
      row5={cakesRow5}
      row6={cakesRow6}
      row7={cakesRow7}
      row8={cakesRow8}
    />
  );
}
