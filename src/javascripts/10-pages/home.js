jQuery(document).ready(function($){
  
  if( ! jQuery('body.page-template-home').length ) return;
  
  
  var main_slider = document.getElementById("hp-sequence");
  var $main_slider = $(main_slider);
  // var $hp_sequence_pagination = $('.hp-sequence-pagination:first');
  
  if( $main_slider.size() > 0 ) {
    
    var auto     = $('#hp-sequence').data('auto');
    var interval = $('#hp-sequence').data('interval');
    
    var hpSequence = sequence(main_slider, {
      animateCanvas: false,
      keyNavigation: true,
      autoPlay: auto,
      autoPlayInterval: (interval * 1000),
      // animateCanvasDuration: 1400,
      pagination: '.hp-sequence-pagination'
    });
    
  }
  
  
  $('.news-line-slider').slick({
    rtl: g_rtl,
    fade: true,
    dots: false,
    infinite: true,
    speed: 400,
    cssEase: 'linear',
    // autoplay: true,
    autoplaySpeed: 3000,
  });
  
  
  
  smoothScroll.init({
    offset: 80,
    speed: 1000
  });
  
});
