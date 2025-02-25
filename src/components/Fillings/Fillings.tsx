import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import Slider from 'react-slick';
import { sliderSettings } from './sliderSettings';
import { fetchFillings } from '../../redux/fillingsSlice';
import { RootState } from '../../redux/store';
import { FillingsCard } from '../FillingsCard/FillingsCard';
import { Title } from '../Title/Title';
import { Home } from '../Home/Home';
import { Loading } from '../Loading/Loading';
import { DataInitialState } from '../../types/interfaces';
import image from '../images/fillings/fillings_flower.png';
import './Fillings.scss';

export function Fillings() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.fillings);

  const dispatch = useDispatch<ThunkDispatch<DataInitialState, null, AnyAction>>();

  useEffect(() => {
    dispatch(fetchFillings());
  }, [dispatch]);

  const fillingsPage = posts.map((item) => <FillingsCard key={item.id} post={item} />);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-danger" id="text-danger">
        {error}
      </div>
    );
  }

  return (
    <div className="fillings" id="fillings">
      <div className="fillings__container _container">
        <div className="fillings__body">
          <div className="fillings__title-wrapper">
            <div className="fillings__title">
              <Title>Начинки</Title>
            </div>
            <div className="fillings__home">
              <Home />
            </div>
            <div className="fillings__image">
              <img src={image} alt="image" />
            </div>
          </div>
          <div className="fillings__slider slider">
            <Slider {...sliderSettings} appendDots={(dots) => <div className="slick-dots">{dots}</div>}>
              {fillingsPage}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
