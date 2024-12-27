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

export function Pies() {
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

  const filterCakes = filterCakesByCategory('pies', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);
  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);
  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  return (
    <CakesPageOdd
      title="Пирожные"
      subtitle="Порционные угощения на Вашем празднике!"
      text="На совеременных праздниках пирожные уже давно перестали быть просто десертом. Это лакомство - произведение кондитерского искусства. Порционные пирожные идеально подойдут для небольшой компании. Минимальный заказ от 6 штук."
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
    />
  );
}
