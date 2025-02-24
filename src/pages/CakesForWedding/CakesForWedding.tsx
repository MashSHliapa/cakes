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

export function CakesForWedding() {
  const { data: cakes, loading, error } = useSelector((state: RootState) => state.cakes);

  const dispatch = useDispatch<ThunkDispatch<DataInitialState, null, AnyAction>>();

  useEffect(() => {
    dispatch(fetchCakes());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      scrollToPage('text-danger');
      console.log(error);
    }
  }, [error]);

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
