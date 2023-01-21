window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: "#dots",
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next"
        }
      }) 
  })
