import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchCakes } from '../../redux/cakesSlice';
import { RootState } from '../../redux/store';
import { cakeDistribution } from '../../helpers/cakeDistribution';
import { scrollToPage } from '../../helpers/scrollToPage';
import { filterCakesByCategory } from '../../helpers/filterCakesByCategory';
import { CakesPageEven } from '../../components/CakesPageEven/CakesPageEven';
import { Loading } from '../../components/Loading/Loading';
import { DataInitialState } from '../../types/interfaces';

export function CakesTwoTier() {
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

  const filterCakes = filterCakesByCategory('two_tier', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);
  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);
  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  return (
    <CakesPageEven
      title="Многоярусные торты"
      subtitle="Многоярусное наслаждение!"
      text="Если на Вашем правднике большое количество гостей, то двухъярусные торты - это идеальное решение! В добавок, можно сделать интресное расположения ярусов отностительно друг друга, подобрать незабываемый дизайн и даже сделать разые начинки для каждого яруса!!"
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
    />
  );
}
