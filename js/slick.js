//mainWrap carousel
let mainCarousel = 
  $(".mainWrap main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    // autoplaySpeed: 2000,
    // centerMode: true,
});




$(".bannerEvent section .carousel").slick({
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  centerPadding: "60px",
});

$(".bannerSns .banner_scroll").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
});

$(".magazine .sideScroll").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});

$(".bannerBrand_sideScroll").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});
