import { useSelector } from 'react-redux';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageOdd } from '../../components/CakesPageOdd/CakesPageOdd';
import { RootState } from '../../redux/store';

export function OpenCakes() {
  const cakes = useSelector((state: RootState) => state.cakes.data);

  const filterCakes = filterCakesByCategory('open_cakes', cakes);

  const openCakesRow1 = cakeDistribution(filterCakes, 0, 3);

  const openCakesRow2 = cakeDistribution(filterCakes, 6, 7);

  const openCakesRow3 = cakeDistribution(filterCakes, 3, 6);

  return (
    <CakesPageOdd
      title="Открытые медовики"
      subtitle="Что такое открытый Медовик?"
      text="Это тонкие медовые коржи, пропитанные кремом со сметаной, сливочным сыром, белым шоколадом и ванилью.
      Коржи очень мягкие, тают во рту! Внешний вид может быть классическим – в виде круга. А может быть в виде сердечка или любых цифр. Такой торт, без сомнений, украсит ваш праздничный стол!"
      row1={openCakesRow1}
      row2={openCakesRow2}
      row3={openCakesRow3}
    />
  );
}
