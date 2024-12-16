import { useState } from 'react';
import toTop from '../icons/button_top.svg';
import './GoToTop.scss';

export function GoToTop() {
  const [, setIsButtonVisible] = useState(false);
  const buttonTop = document.querySelector('.go-to-top__button');
  const mainMenu = document.querySelector('.main-menu__body') as HTMLElement;

  document.addEventListener('scroll', function () {
    const pageCakes = document.querySelector('.cakes');
    const button = document.querySelector('.cakes__button-wrapper');
    const upperLimit = (button?.getBoundingClientRect().top ?? 0) + window.scrollY + 50;
    const lowerLimit = (pageCakes?.getBoundingClientRect().bottom ?? 0) + window.scrollY - 400;

    if (window.scrollY > upperLimit && window.scrollY < lowerLimit) {
      buttonTop?.classList.add('_active');
      setIsButtonVisible(true);
    } else {
      buttonTop?.classList.remove('_active');
      setIsButtonVisible(false);
    }
  });

  return (
    <div className="go-to-top">
      <div
        className="go-to-top__button"
        onClick={() => window.scrollTo({ top: mainMenu?.offsetTop, behavior: 'smooth' })}
      >
        <img src={toTop} alt="to_top" />
      </div>
    </div>
  );
}
