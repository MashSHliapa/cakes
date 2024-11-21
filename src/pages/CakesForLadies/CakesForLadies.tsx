import { useSelector } from 'react-redux';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageOdd } from '../../components/CakesPageOdd/CakesPageOdd';
import { RootState } from '../../redux/store';

export function CakesForLadies() {
  const cakes = useSelector((state: RootState) => state.cakes.data);

  const filterCakes = filterCakesByCategory('for_women', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);

  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);

  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  const cakesRow4 = cakeDistribution(filterCakes, 7, 10);
  const cakesRow5 = cakeDistribution(filterCakes, 10, 13);
  const cakesRow6 = cakeDistribution(filterCakes, 13, 16);

  return (
    <CakesPageOdd
      title="торты для леди"
      subtitle="Торты для прекрасных дам!"
      text="Ищите вкусный оригинальный подарок для своей любимой женщины? Хотите порадовать маму, бабушку? Хотите сделать незабываемый подарок для подруги или коллеги по работе? Тогда Вам точно понравится наша коллекция тортов для женщин. Интересный декор и разнообразие начинок создаст неповторимый вкус Вашему подарку!"
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
      row4={cakesRow4}
      row5={cakesRow5}
      row6={cakesRow6}
    />
  );
}
