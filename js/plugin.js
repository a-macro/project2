$(document).ready(function(){
    $('.slider-block_add').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });  

     $('.slider__news-all').slick({
      prevArrow:"<button type='button' class='slick-prev left_2'></button>",
      nextArrow:"<button type='button' class='slick-next right_2'></button>",
      slidesToShow: 3,
      slidesToScroll: 1,
infinite: true,
       speed: 1100,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
    });
  

  $(function() {
    var pathname_url = window.location.pathname;
    var href_url = window.location.href;
    $("nav.site-menu ul li").each(function() {
      var link = $(this).find("a").attr("href");
      if(pathname_url == link || href_url == link) {
        $(this).addClass("active");
      }
  });

  $(".show").click(function(){ 
    $(".overlay").show();
  });
  $(".close-form").click(function(){ 
    $(".overlay").hide();
  });
  $(".close").click(function(){ 
    $(".overlay").hide(); 
  });


var navMenu = $('.site-menu');
var navMenuTop = navMenu.offset().top;

$(window).resize(function() {
    navMenuTop = navMenu.offset().top;
});

jQuery(".site-menu").wrap('<div class="nav-placeholder"></div>');
jQuery(".nav-placeholder").height(jQuery(".site-menu"));
jQuery(".site-menu").wrapInner('<div class="nav-inner"></div>');

$(window).scroll(function(){
var winScrollTopValue = $(window).scrollTop(); 

if (winScrollTopValue > navMenuTop) {
    navMenu.addClass('sticky');
    jQuery(".nav-placeholder").height(jQuery(".site-menu").outerHeight());
    $(".nav-inner > ul > li").addClass('stickyColorLi');
} else {
    navMenu.removeClass('sticky');
    $(".nav-inner > ul > li").removeClass('stickyColorLi');
}
});

});
$(document).ready(function(){
	$.easing.def = "easeInOutQuad";
	$('li.button a').click(function(e){
		var dropDown = $(this).parent().next();
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		e.preventDefault();
  })

  $(".models").click(function(){ 
    $(".form-group").show();
    $(".choose1").hide();
  });
  $(".back-to-models").click(function(){ 
    $(".form-group").hide();
    $(".choose1").show();
  });

  $(".two").click(function(){ 
    $(".second-list").show();
    $(".first-list").hide();
    $(".two").addClass('list-active');
    $(".one").removeClass('list-active');
  });
  $(".one").click(function(){ 
    $(".second-list").hide();
    $(".first-list").show();
    $(".one").addClass('list-active');
    $(".two").removeClass('list-active');
  });




var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


function recalculateCart()
{
  var subtotal = 0;
  
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal;
  
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
   
    $('.totals-value').fadeIn(fadeTime);
  });
}


function updateQuantity(quantityInput)
{
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


function removeItem(removeButton)
{
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}










});

