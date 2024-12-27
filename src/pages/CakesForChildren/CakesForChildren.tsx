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

export function CakesForChildren() {
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

  const filterCakes = filterCakesByCategory('for_children', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);
  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);
  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);
  const cakesRow4 = cakeDistribution(filterCakes, 7, 10);
  const cakesRow5 = cakeDistribution(filterCakes, 10, 13);
  const cakesRow6 = cakeDistribution(filterCakes, 13, 16);
  const cakesRow7 = cakeDistribution(filterCakes, 16, 19);
  const cakesRow8 = cakeDistribution(filterCakes, 19, 22);

  return (
    <CakesPageEven
      title="Торты для детей"
      subtitle="Самый популярный десерт!"
      text="Детские торты являются самым популярным угощением для праздника. И каждый родитель ответственно относится к выбору десерта для своего ребенка. В свою очередь, я могу предложить оригинальный дизайн, а также проверенные начинки из натуральных ингредиентов. Торты с Vanilla.Crazy сделают праздник для вашего ребенка незабываемым!"
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
      row4={cakesRow4}
      row5={cakesRow5}
      row6={cakesRow6}
      row7={cakesRow7}
      row8={cakesRow8}
    />
  );
}
