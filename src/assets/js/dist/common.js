"use strict";

// rem 수치 변환
var windowSize = $(window).innerWidth(),
    baseSize = 460;

if (windowSize < baseSize) {
  $(document).find('html').animate({
    fontSize: $(window).innerWidth() * 10 / 36
  }, 0);
} else {
  $(document).find('html').animate({
    fontSize: baseSize * 10 / 36
  }, 0);
} // rem resize 수치 변환


$(window).on('resize', function () {
  if ($(window).innerWidth() < baseSize) {
    $(document).find('html').animate({
      fontSize: $(window).innerWidth() * 10 / 36
    }, 0);
  } else {
    $(document).find('html').animate({
      fontSize: baseSize * 10 / 36
    }, 0);
  }
}); // swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  rewind: true,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); // //popup service01

$('.is_active').on('click', function () {
  var idx = $('.is_active').index(this);
  $('.popup').eq(idx).addClass('active');
}); //popup
// $('.chk01').on('click', function () {
//     var idx = $('.chk01').index(this);
//     $('.popup').eq(idx).addClass('active');
// });

$('.btn_close').on('click', function () {
  $(this).closest('.popup').removeClass('active');
});
$('.closePopup').on('click', function () {
  $(this).closest('.popup').removeClass('active');
}); //info01 gender img

$('.info_page02 .list_item').on('click', function () {
  var idx = $('.info_page02 .list_item').index(this);
  $('.info_page02 .list_item').removeClass('active');
  $('.info_page02 .list_item').eq(idx).addClass('active');
}); //info04 autohypen

$(document).on("keyup", ".cellphone", function () {
  $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
}); //type01 tap

var tapItem = document.querySelectorAll('.insurance-card .list_item');

for (var i = 0; i < tapItem.length; i++) {
  $(tapItem).on('click', function () {
    var idx = $(tapItem).index(this);
    $(tapItem).removeClass('on');
    $(tapItem).eq(idx).addClass('on');
    $('.popup').eq(idx).addClass('active');
  });
} //type01 popup active 


$('.type01_popup dl').on('click', function () {
  var idx = $('.type01_popup dl').index(this);
  $('.type01_popup dl').removeClass('active');
  $('.type01_popup dl').eq(idx).addClass('active');
}); //result01 checkbox

$('.result_container .btn_check button').on('click', function () {
  $('.result_container .btn_check').toggleClass('active');
}); //result01 type02

$('.result.type02 .list_item').on('click', function () {
  var idx = $('.result.type02 .list_item').index(this);
  $('.result.type02 .list_item').removeClass('active');
  $('.result.type02 .list_item').eq(idx).addClass('active');
  $('.result.type02 .selec_result').removeClass('on');
  $('.result.type02 .selec_result').eq(idx).addClass('on');
}); //result01 service_btn

$('.service_btn .btn_wrap').on('click', function () {
  $('.service_btn').addClass('active');
}); // result02 체크 최대 3개

var maxChecked = 3;
var totalChecked = 0;

function CountChecked(el) {
  if (el.checked) {
    totalChecked += 1;
    console.log(totalChecked, maxChecked);
  } else {
    totalChecked -= 1;
    console.log(totalChecked, maxChecked);
  }

  if (totalChecked > maxChecked) {
    totalChecked -= 1;
    $('.popup.max').addClass('active');
    el.checked = false;
  }
} //tap


$(".tap_nav li").on('click', function () {
  $(".tap_nav li").removeClass("on");
  $(this).addClass("on");
  var idx = $(this).index() + 1;
  $(".tap_con > div").removeClass("active");
  $("#tap0" + idx).addClass("active");
}); //tooltip

if ($('.tooltip').length) {
  var tooltip = function tooltip() {
    el_tooltip.classList.toggle('active');
  };

  var el_tooltip = document.querySelector('.tooltip');
  el_tooltip.addEventListener('click', tooltip);
}