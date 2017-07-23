jQuery(document).ready(function($){
  
  var navbar = $("#navbar");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  });
  

  $('.mobile_nav_toggle').click(function () {
    
    $('#mobile_nav').toggleClass('active');
  });
  
  
  $('.fancybox-media').fancybox({
    openEffect  : 'fade',
    closeEffect : 'none',
    helpers : {
      media : {}
    }
  });
  
  
  $('#search-field').focus(function(event) {
    $(this).addClass('with-value');
  }).blur(function(event) {
    if( $(this).val() === '' ) {
      $(this).removeClass('with-value');
    }
  });
  
  
  new Waypoint({
    element: document.getElementById('return_to_top'),
    handler: function(direction) {
      // console.log( this.element.id + ' triggers at ' + this.triggerPoint  + ' dir: ', direction);
      
      if (direction === 'down') {
        this.element.classList.add('show');
        // this.element.style.display = 'block';
        // this.element.style.opacity = 1;
      }
      else {
        this.element.classList.remove('show');
        // this.element.style.display = 'none';
        // this.element.style.opacity = 0;
      }
      
    },
    offset: '-150%'
  });
  
  $('#return_to_top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });
  
  
  
  
  
  var $related_slider = $('.related-items-slider');
  
  $related_slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      // var i = (currentSlide ? currentSlide : 0) + 1;
      var i = (currentSlide ? currentSlide : 0)+slick.options.slidesToShow;
      // $status.text(i + '/' + slick.slideCount);
      
      slick.$nextArrow.find('.count').remove();
      slick.$prevArrow.find('.count').remove();
      
      console.log( slick );
      
      // var page = 1;
      // var pages = 1;
      
      // page = Math.ceil( currentSlide % slick.options.slidesToShow );
      // pages = Math.ceil( slick.slideCount / slick.options.slidesToShow );
      
      // slick.$nextArrow.append(' <span class="count">&nbsp; ' + i+'/'+pages + ' </span>');
      
      
      slick.$nextArrow.append(' <span class="count">&nbsp; ' + Math.min(i,slick.slideCount) +'/'+slick.slideCount + ' </span>');
      
      
      // console.log( slick.currentSlide >= slick.slideCount - slick.options.slidesToShow );
      // console.log( slick.currentSlide , slick.slideCount , slick.options.slidesToShow );
      if( slick.slideCount - slick.options.slidesToShow <= 0){
        
        slick.$nextArrow.hide();
        slick.$prevArrow.hide();
      }
  });
  
  $related_slider.slick({
    rtl: g_rtl,
    dots: false,
    infinite: false,
    // speed: 400,
    // autoplay: true,
    // autoplaySpeed: 3000,
    nextArrow: $('.cta-slick-slider-section .slick-arrow.slick-next'),
    prevArrow: $('.cta-slick-slider-section .slick-arrow.slick-prev'),
    
    slidesToShow: 4,
    slidesToScroll: 4,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
  
  
  
  
  // Accordion
  $('.sidebar-nav > .menu-item-has-children > a').click(function(e){
      e.preventDefault();
       
      $(this).next('.sub-menu').slideToggle('fast', function () {
        var $el = $(this);
        $el.parent('li').toggleClass('active', !$el.is(':hidden'));
      });
      $(".sidebar-nav > .menu-item-has-children > .sub-menu")
        .not(  $(this).next('.sub-menu')  )
        .slideUp('fast');
  });
  
  
  $('.mobile-nav-container > ul > .menu-item-has-children > a').click(function(e){
      e.preventDefault();
       
      $(this).next('.sub-menu').slideToggle('fast', function () {
        var $el = $(this);
        $el.parent('li').toggleClass('active', !$el.is(':hidden'));
      });
      $(".sidebar-nav > .menu-item-has-children > .sub-menu")
        .not(  $(this).next('.sub-menu')  )
        .slideUp('fast');
  });
  
  
  
  
  // Infinite Scroll
  // ---------------
  
  
  function onScrollAnimate($items) {
    
    $items.each( function() {
      var osElement = $(this);

      osElement.waypoint(function() {
        
        // console.log( 'waypoint: ', osElement );
        
        osElement.addClass('animated');
        
      },{
        triggerOnce: true,
        offset: '90%'
      });
    });
  }

  onScrollAnimate( $('.js-inview-animate .js-ajax-item') );
    
  // console.log( $('.post-listing')[0] );
  
  var infinite = new Waypoint.Infinite({
    element: $('.post-listing')[0],
    items: '.js-ajax-item',
    onAfterPageLoad: function ($items) {
      
      onScrollAnimate( $items );
    }
  });
  
});

