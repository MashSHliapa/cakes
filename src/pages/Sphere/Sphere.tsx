import { useSelector } from 'react-redux';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageEven } from '../../components/CakesPageEven/CakesPageEven';
import { RootState } from '../../redux/store';

export function Sphere() {
  const cakes = useSelector((state: RootState) => state.cakes.data);

  const filterCakes = filterCakesByCategory('sphere', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);
  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);
  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);
  const cakesRow4 = cakeDistribution(filterCakes, 7, 10);

  return (
    <CakesPageEven
      title="Торт-сфера"
      subtitle="... а что же внутри?"
      text="Торт-сфера - это не просто десерт, а радуга эмоций! Корпус выполнен из шоколада (молочного или белого), внутри - полноценный торт, но чтоб до него добраться, нужно разбить сферу молоточком (входит к комплект). Также внутрь можно положить сладости, обручальное кольцо или другой приятный подарок-сюрприз. Подари впечатления!"
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
      row4={cakesRow4}
    />
  );
}
