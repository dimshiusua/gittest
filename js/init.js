//init bPopup

$('.open-order-modal').on('click', function(){
     $('.modal-order').bPopup({
            fadeSpeed: 'slow', //can be a string ('slow'/'fast') or int
            followSpeed: 1500, //can be a string ('slow'/'fast') or int
            modalColor: '#d2dbe0'
        });
})
$('.btn_close_order').on('click', function(){
     $('.modal-order').bPopup().close();
})

//init form-styler
$('select').styler();
//init slick carousel
$('.about-us-carouseul').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
		