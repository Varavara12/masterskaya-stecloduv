$(function() {

   $("#my-menu").mmenu({
       extensions:[ "position-right", "theme-black", "effect-panels-zoom", "pagedim-black"],
       offCanvas: {
           position: 'left'
       },
           navbar:{title:'<img src="img/logo1.png" alt="Мастерская Стеклодув">'},
       navbars: [
           {
               position: 'left',
               content: [ 'searchfield' ]
           }, {
               position: 'left',
               content: [
                   'prev',
                   'title',
                   'close'
               ]
           },
       ],
       });

    var api = $('#my-menu').data('mmenu');
    var $icon = $('.hamburger');

    api.bind( "open:finish", function()
    {
        setTimeout(function()
        {
            $icon.addClass( "is-active" );
        }, 10);
    });

    api.bind("close:finish", function()
    {
        setTimeout(function()
        {
            $icon.removeClass( "is-active" )
        }, 10);
    });

    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService()
        }, 100);
    });

    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0:{
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

    

   function carouselService() {
       $('.carousel-services-item').each(function () {
          var thr  = $(this),
              thrh = thr.find('.carousel-services-content').outerHeight();
              thr.find('.carousel-services-image').css('min-height', thrh)
       });
   }carouselService();

    $('.carousel-services-composition .h3').each(function () {
        var thd = $(this);
        thd.html(thd.html().replace(/(\S+)\s*$/, '<span>$1</span> '));
    });

    $('.modal .h3').each(function () {
        var thd1 = $(this);
        thd1.html(thd1.html().replace(/(\S+)\s*$/, '<span>$1</span> '));
    });

    $('section .h2').each(function () {
        var thd2 = $(this);
        thd2.html(thd2.html().replace(/^(\S+)/, '<span>$1</span> '));
    });



     $('select').selectize();

     $('.reviews').owlCarousel({
         loop: true,
         items: 1,
         smartSpeed: 800,
         nav: false,
         autoHeight: true

     });

     $('.videos').owlCarousel({
         loop: true,
         items: 2,
         smartSpeed: 800,
         dots: false,
         nav: true,
         navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
         responsiveClass: true,
         responsive: {
             0:{
                 items: 1
             },
             992: {
                 items: 2
             }
         }
     });

    $(window).scroll(function () {
        if($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });

    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    //E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });

    function onResize() {
        $('.carousel-services-content').equalHeights();
    } onResize();
    window.onresize = function () {
        onResize()
    };

});

$(function () {
    $(".modal").iziModal({
        title: 'Подробнее о товаре <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>',
        width: 800,
        padding: 10,
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutUp',
        overlayColor: 'rgba(0, 0, 0, 0.9)',
        headerColor: '#F04820',

});

});$(window).scroll(function(){
    if($('body').scrollTop()>0)
        $('body').scrollTop(0);
});

$(function(){
    $('img').on('click',function(){
        $('img , .layout').fadeOut();
        var atr = $('iframe').attr("src");
        $('iframe').attr("src", atr + '?rel=0&autoplay=1');
    });
});

$(window).on('load', function () {
    $('#preloader').delay(2000).fadeOut('slow');
});


var video = document.querySelector('video'),
     container = document.querySelector('#container-video');

var setVideoDimensions = function () {
    // Video's intrinsic dimensions
    var w = video.videoWidth,
         h = video.videoHeight;

    // Intrinsic Ratio
    // Will be more than 1 if W > H and less if W < H
    var videoRatio = (w / h).toFixed(2);

    // Get the container's computed styles
    //
    // Also calculate the min dimensions required (this will be
    // the container dimentions)
    var containerStyles = window.getComputedStyle(container),
         minW = parseInt( containerStyles.getPropertyValue('width') ),
         minH = parseInt( containerStyles.getPropertyValue('height') );

    // What's the min:intrinsic dimensions
    //
    // The idea is to get which of the container dimension
    // has a higher value when compared with the equivalents
    // of the video. Imagine a 1200x700 container and
    // 1000x500 video. Then in order to find the right balance
    // and do minimum scaling, we have to find the dimension
    // with higher ratio.
    //
    // Ex: 1200/1000 = 1.2 and 700/500 = 1.4 - So it is best to
    // scale 500 to 700 and then calculate what should be the
    // right width. If we scale 1000 to 1200 then the height
    // will become 600 proportionately.
    var widthRatio = minW / w,
         heightRatio = minH / h;

    // Whichever ratio is more, the scaling
    // has to be done over that dimension

    video.style.width = newWidth + 'px';
    video.style.height = newHeight + 'px';
};

video.addEventListener('loadedmetadata', setVideoDimensions, false);
window.addEventListener('resize', setVideoDimensions, null);
