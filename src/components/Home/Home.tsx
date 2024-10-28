import { NavLink } from 'react-router-dom';
import './Home.scss';

export function Home() {
  return (
    <div className="home">
      <NavLink to="/" target="_top" className="home__text">
        На главную
      </NavLink>
    </div>
  );
}
