jQuery(document).ready(function($) {
  
    var main_slider = document.getElementById("hp-sequence");
    var $main_slider = $(main_slider);
    var $hp_sequence_pagination = $('.hp-sequence-pagination:first');
    
    if( $main_slider.size() > 0 ) {
      
      var auto     = $('#hp-sequence').data('auto');
      var interval = $('#hp-sequence').data('interval');
      
      var hpSequence = sequence(main_slider, {
        keyNavigation: true,
        autoPlay: auto,
        autoPlayInterval: (interval * 1000),
        animateCanvasDuration: 1400,
        pagination: '.hp-sequence-pagination'
      });
      
      // hpSequence.animationStarted = function() {

      //   console.log("animationStarted");
      //   $hp_sequence_pagination.addClass('seq-active');
      // }
      // hpSequence.animationEnded = function() {

      //   console.log("animationEnded");
      //   $hp_sequence_pagination.removeClass('seq-active');
      // }

    }
    
    // $('article.solution-cube').matchHeight();
    
    
    $('.companies-slider').slick({
      arrows: false,
      speed: 600,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1324,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      autoplay: true,
      autoplaySpeed: 5000,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
    });
    
    
    $('.news-slider').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 600,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
    })
    
    
    var $hp_case_studies = $('#hp_case_studies');
    
    // scaleVideoContainer($hp_case_studies);
    // initBannerVideoSize('.video-container .poster img', $hp_case_studies);
    // initBannerVideoSize('.video-container .filter', $hp_case_studies);
    // initBannerVideoSize('.video-container video', $hp_case_studies);

    $(window).on('resize', function() {
        // scaleVideoContainer($hp_case_studies);
        // scaleBannerVideoSize('.video-container .poster img', $hp_case_studies);
        // scaleBannerVideoSize('.video-container .filter', $hp_case_studies);
        // scaleBannerVideoSize('.video-container video', $hp_case_studies);
    });
    
    
    jQuery('.hp-services .service-link').matchHeight();
    jQuery('.hp-case-studies .item-block').matchHeight();
});


function scaleVideoContainer($wrapper) {

    // var height = $(window).height() + 5;
    var height = $wrapper.height() + 5;
    console.log( height )
    var unitHeight = parseInt(height) + 'px';
    // $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element, $wrapper){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element, $wrapper);
}

function scaleBannerVideoSize(element, $wrapper){

    // var windowWidth = $(window).width(),
    var windowWidth = $wrapper.width(),
    windowHeight = $wrapper.height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
