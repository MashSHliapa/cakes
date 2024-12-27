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

export function CakesForLadies() {
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

  const filterCakes = filterCakesByCategory('for_women', cakes);

  const cakesRow1 = cakeDistribution(filterCakes, 0, 3);

  const cakesRow2 = cakeDistribution(filterCakes, 6, 7);

  const cakesRow3 = cakeDistribution(filterCakes, 3, 6);

  const cakesRow4 = cakeDistribution(filterCakes, 7, 10);
  const cakesRow5 = cakeDistribution(filterCakes, 10, 13);
  const cakesRow6 = cakeDistribution(filterCakes, 13, 16);

  return (
    <CakesPageOdd
      title="торты для леди"
      subtitle="Торты для прекрасных дам!"
      text="Ищите вкусный оригинальный подарок для своей любимой женщины? Хотите порадовать маму, бабушку? Хотите сделать незабываемый подарок для подруги или коллеги по работе? Тогда Вам точно понравится наша коллекция тортов для женщин. Интересный декор и разнообразие начинок создаст неповторимый вкус Вашему подарку!"
      row1={cakesRow1}
      row2={cakesRow2}
      row3={cakesRow3}
      row4={cakesRow4}
      row5={cakesRow5}
      row6={cakesRow6}
    />
  );
}
