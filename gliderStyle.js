new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  duration: 0.5,
  dots: '.carousel__indicadores',
  arrows: {
    prev: '.glider__prev',
    next: '.glider__next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 550,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 150,
        duration: 0.5
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 150,
        duration: 0.5
      }
    }
  ]
});