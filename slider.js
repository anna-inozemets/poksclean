$(document).ready(function() {
  $('.useful__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});

$(window).on("scroll", function () {
  AOS.init();
});

$(document).ready(function() {
  $('#openModal').click(function() {
    $('.modal').addClass('open');
  });

  $('#closeModal').click(function() {
    $('.modal').removeClass('open');
  });
  $('#submitForm').click(function(event) {
    event.preventDefault();
    $('.modal').removeClass('open');
  })
});
