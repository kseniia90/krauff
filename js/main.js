"use strict";

// shopping cart popup open/close on click

if(document.querySelector('.shopping_cart_popup') !== null) {

  document.querySelectorAll('.open_shopping_cart_popup').forEach(function(button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      document.querySelector('.shopping_cart_popup').classList.add('active');
    });
  })
  document.querySelector('.shopping_cart_popup-content').addEventListener('click', function (e) {
    e.stopPropagation();
  });
  
  document.querySelector('.shopping_cart_popup').addEventListener('click', function (e) {
    document.body.style.overflow = 'visible';
    document.querySelector('.shopping_cart_popup').classList.remove('active');
  });
  document.querySelector('.open_order_form_popup').addEventListener('click', function (e) {
    document.body.style.overflow = 'visible';
    document.querySelector('.shopping_cart_popup').classList.remove('active');
  });
  document.querySelector('.close__cart_popup').addEventListener('click', function (e) {
    document.body.style.overflow = 'visible';
    document.querySelector('.shopping_cart_popup').classList.remove('active');
  });

}

// order_form popup open/close on click

if(document.querySelector('.order_form_popup') !== null) {

  document.querySelectorAll('.open_order_form_popup').forEach(function(button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      document.querySelector('.order_form_popup').classList.add('active');
    });
  })
  document.querySelector('.order_form_popup-content').addEventListener('click', function (e) {
    e.stopPropagation();
  });
  
  document.querySelector('.close_popup').addEventListener('click', function (e) {
    document.body.style.overflow = 'visible';
    document.querySelector('.order_form_popup').classList.remove('active');
  });
}

// shopping cart counter on click

$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // show all products on mobile
  $(".products-show-more").on("click", function () {
    $(".products__result__item").toggleClass("showContent");
});
});