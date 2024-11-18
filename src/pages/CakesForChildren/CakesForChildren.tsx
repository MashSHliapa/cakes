import { useSelector } from 'react-redux';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageEven } from '../../components/CakesPageEven/CakesPageEven';
import { RootState } from '../../redux/store';

export function CakesForChildren() {
  const cakes = useSelector((state: RootState) => state.cakes.data);

  const filterCakes = filterCakesByCategory('for_children', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);

  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);

  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  return (
    <CakesPageEven
      title="Торты для детей"
      subtitle="Что такое открытый Медовик?"
      text="И какой детский праздник обходится без вкуснейшего оригинального торта? Чтоб удивить маленьких именниников, мы предлагаем огромный выбор разнообразных тортов с любыми элементами декора! Любимые персонажи из мультиков и фильмов, супергерои и прекрасные принцессы однозначно порадуют детей и их родителей!"
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
    />
  );
}
