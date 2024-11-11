export const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',

  responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
