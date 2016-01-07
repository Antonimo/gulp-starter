jQuery(document).ready(function($){
  
  var header = $(".top-header");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
  
  $('.mobile_nav_toggle').click(function () {
    
    $('#mobile_nav').toggleClass('active');
  });
  
  smoothScroll.init({
    offset: 80
  });
  
  $('#search-field').focus(function(event) {
    $(this).addClass('with-value');
  }).blur(function(event) {
    if( $(this).val() === '' ) {
      $(this).removeClass('with-value');
    }
  });
  
  $('.nav-search-form').on('submit', function(event) {
    var input = $('#search-field');

    if( input.val() != '' ) {
      return
    }

    event.preventDefault();
    input.focus();
  });
  
  
  $('.sidebar-nav .menu-item-has-children > a').click(function(e){
    e.preventDefault();
    $(this).next('.sub-menu').slideToggle('fast');
    // $(".sidebar-nav .menu-item-has-children > .sub-menu").not($(this).next('.sub-menu')).slideUp('fast');
  });
  
  // Modal load ajax multiple fix
  $('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal')
      .find(".modal-content").empty();
  });
  
  
  jQuery('.page-template-cards .customer-link').matchHeight();
  
  
  // $('#chtest input').iCheck({
  //   checkboxClass: 'icheckbox_minimal-green',
  //   radioClass: 'iradio_minimal-green',
  //   increaseArea: '20%' // optional
  // });
  
  $('select').niceSelect();
  
});