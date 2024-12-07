import { useSelector } from 'react-redux';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageEven } from '../../components/CakesPageEven/CakesPageEven';
import { RootState } from '../../redux/store';

export function CakesTwoTier() {
  const cakes = useSelector((state: RootState) => state.cakes.data);

  const filterCakes = filterCakesByCategory('two_tier', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);
  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);
  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  return (
    <CakesPageEven
      title="Двухъярусные торты"
      subtitle="Двухъярусное наслождение!"
      text="Если на Вашем правднике большое количество гостей, то двухъярусные торты - это идеальное решение! В добавок, можно сделать интресное расположения ярусов отностительно друг друга, подобрать незабывваемый дизайн и даже сделать разые начинки для каждого яруса!!"
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
    />
  );
}
