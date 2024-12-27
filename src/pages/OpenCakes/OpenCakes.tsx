import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchCakes } from '../../redux/cakesSlice';
import { RootState } from '../../redux/store';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { scrollToPage } from '../../helpers/scrollToPage';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageOdd } from '../../components/CakesPageOdd/CakesPageOdd';
import { Loading } from '../../components/Loading/Loading';
import { DataInitialState } from '../../types/interfaces';

export function OpenCakes() {
  const { data: cakes, loading, error } = useSelector((state: RootState) => state.cakes);

  const dispatch = useDispatch<ThunkDispatch<DataInitialState, null, AnyAction>>();

  useEffect(() => {
    scrollToPage('cakes');
    dispatch(fetchCakes());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

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
