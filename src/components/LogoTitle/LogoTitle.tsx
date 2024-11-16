import logo from '../images/logo_title.svg';
import './LogoTitle.scss';

export function LogoTitle() {
  return (
    <div className="logo-title__logo-wrapper">
      <div className="logo-title__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="logo-title__separator"></div>
    </div>
  );
}
