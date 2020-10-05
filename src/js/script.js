// $(document).ready(function() {
//     $('.carousel__inner').slick({
//         // dots: true, //кружки снизу слайда
//         infinite: true, // повтор слайдов, после посмотров всех
//         autoplay: true, // автопереключение слайдов
//         speed: 1200, // скорость переключения слайдов
//         slidesToShow: 1, // количество слайдов одновременно
//         // adaptiveHeight: true, //автоматический подбор высоты
//         /* fade: true,
//         cssEase: 'linear' */ // эффектное переключение слайдов
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 dots: true,
//                 arrows: false
//             }
//         }]
//     });
// });

// add Tiny Slider
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
});