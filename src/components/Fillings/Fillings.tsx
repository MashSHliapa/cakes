import { useSelector } from 'react-redux';
import { sliderSettings } from './sliderSettings';
import Slider from 'react-slick';
import { FillingsCard } from '../FillingsCard/FillingsCard';
import { Title } from '../Title/Title';
import { Home } from '../Home/Home';
import { RootState } from '../../redux/store';
import image from '../images/fillings/fillings_flower.png';
import './Fillings.scss';

export function Fillings() {
  const { data: posts } = useSelector((state: RootState) => state.fillings);
  console.log(posts);

  const fillingsPage = posts.slice(0, 10).map((item) => <FillingsCard key={item.id} post={item} />);

  return (
    <div className="fillings">
      <div className="fillings__container _container">
        <div className="fillings__body">
          <div className="fillings__title">
            <Title>Начинки</Title>
          </div>
          <div className="fillings__image">
            <img src={image} alt="image" />
          </div>
          <div className="fillings__home">
            <Home />
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
