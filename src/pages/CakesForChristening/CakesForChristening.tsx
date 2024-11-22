import { useSelector } from 'react-redux';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageOdd } from '../../components/CakesPageOdd/CakesPageOdd';
import { RootState } from '../../redux/store';

export function CakesForChristening() {
  const cakes = useSelector((state: RootState) => state.cakes.data);

  const filterCakes = filterCakesByCategory('for_christening', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);
  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);
  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  return (
    <CakesPageOdd
      title="Торты на Крещение"
      subtitle="Как выбрать десерт?"
      text="Крещение младенца - одно из самых важных событий в жизни ребенка и его родителей. И чтобы выбрать торт на крещение мальчика или девочки, нужно определится с начинкой, украшением и весом. Все эти нюансы можно обсудить с кондитером, с учетом возраста ребенка и вкусовых предподчений родителей."
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
    />
  );
}
