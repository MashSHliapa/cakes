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

export function Sets() {
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

  const filterCakes = filterCakesByCategory('set', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);
  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);
  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  return (
    <CakesPageEven
      title="Наборы"
      subtitle="Тортик + пирожные"
      text="И как не восхититься, если получаешь в подарок такой удивительный набор, состоящий из тортика и нескольких пирожных?! Такие наборы идеально подходят для праздников, которые требуют красивой подачи: торт - для виновника торжества, а пирожные - для гостей. Равнодушным не останется никто, без исключения!"
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
    />
  );
}
