window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: "#dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next"
    },
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
})

window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider2'), {
    slidesToShow: 1,
    slidesToScroll: 1,
  })
})

window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider3'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: "#dots2"
  })
})