jQuery(function ($) {

    'use strict';


    // Search
    // OnePageNav
    // Sticky Nav
    // Hide Mobile Menu
    // Parallax Scrolling
    // Slick Slider
    // On Click add class 
    // loadMoreResults
    // Cubeportfolio
    // gmap


    // -------------------------------------------------------------
    // Search
    // -------------------------------------------------------------

    (function () {

        $('.search-icon').on("click", function(event){
            $('.open-search').css('height', '100vh');
            return false;
        });
        $('.close-search').on("click",function(event){
            $('.open-search').css('height', '0');
            return false;
        });

    }()); 


    // -------------------------------------------------------------
    //  OnePageNav
    // -------------------------------------------------------------

    (function() {
        
        $('.tr-onepage .navbar').onePageNav({});

    }());      


    // -------------------------------------------------------------
    //  Sticky Nav
    // -------------------------------------------------------------


    (function () {

        $(window).scroll(function() {
            var nav = $('.tr-onepage .tr-menu');
            var $this = $(this);

            if($this.scrollTop() > 30) {
                nav.addClass('fixed-top animated fadeInDown');
            }
            else {
                nav.removeClass('fixed-top animated fadeInDown');
            }
        });

    }());     

    // -------------------------------------------------------------
    //  Hide Mobile Menu
    // -------------------------------------------------------------

    (function () {  
        function menuHide(){
            var windowWidth = $(window).width();
                if(windowWidth < 991 ){
                    $('.navbar-collapse a').on("click", function (e) {
                    $('.navbar-collapse').collapse('toggle');
                });
            }  
        }
        menuHide();
    }()); 


    // -------------------------------------------------------------
    //  Parallax Scrolling
    // -------------------------------------------------------------

    jarallax(document.querySelectorAll('.tr-parallax'), {
        keepImg: true,
    });


    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

    (function() {

        $(".testimonial-slider").slick({
            infinite: true,
            dots: false,
            slidesToShow: 1,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,
            nextArrow: '<i class="fa fa-angle-left"></i>',
            prevArrow: '<i class="fa fa-angle-right"></i>',
        }); 

        $(".about-slider").slick({
            infinite: true,
            dots: false,
            slidesToShow: 2,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,
            nextArrow: '<i class="fa fa-arrow-left"></i>',
            prevArrow: '<i class="fa fa-arrow-right"></i>',
            responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
              }
            }
            ]  
        }); 

        $(".brands-slider").slick({
            infinite: true,
            dots: false,
            slidesToShow: 4,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
              }
            }
            ]  
        }); 
      
    }());

    
    // -------------------------------------------------------------
    //  On Click add class 
    // -------------------------------------------------------------

    (function() {
        
        $('.steps-list li').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });            
          
    }());  

    
    // -------------------------------------------------------------
    //  loadMoreResults
    // -------------------------------------------------------------

    (function() {

        $('.load-more').loadMoreResults({
            tag: {
                name: 'div','class': 'col-md-4'
            },
            displayedItems: 9,
            showItems: 3,
        });           
          
    }());  
     

    // -------------------------------------------------------------
    //  Cubeportfolio
    // -------------------------------------------------------------
    
    (function () {
        
        $('#portfolio-item').cubeportfolio({
            filters: '#portfolio-menu',
            loadMore: '#portfolio-menu',
            animationType: 'flipBottom',  
            loadMoreAction: 'click',
            loadMore: '#js-loadMore-agency',          
            gapHorizontal: 30,
            gapVertical: 30,
            cols: 3,
            mediaQueries: [{
                width: 768,
                cols: 3
            }, {
                width: 480,
                cols: 2
            }, {
                width: 0,
                cols: 1
            }],                  

            });

    }()); 

    // -------------------------------------------------------------
    //  gmap
    // -------------------------------------------------------------

    (function(){

        var map;  

        map = new GMaps({
            el: '#gmap',
            lat: 51.511258,       
            lng: -0.089201,
            scrollwheel:false,
            zoom: 12,
            zoomControl : false,
            panControl : false,
            streetViewControl : true,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = 'images/others/map-icon.png';
        map.addMarker({
            lat: 51.511258,       
            lng: -0.089201,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'left',
            backgroundColor: '#efece0',
        });


        var styles = [ 

            {
                "featureType": "road",
                "stylers": [
                    { "color": "#ffffff" }
                ]
            },{
                "featureType": "water",
                "stylers": [
                    { "color": "#dedede" }
                ]
          },{
              "featureType": "landscape",
              "stylers": [
              { "color": "#ebebeb" }
              ]
            },{
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#a8a8a8" }
                ]
            },{
                "featureType": "poi",
                "stylers": [
                 { "color": "#cccccc" }
                ]
            },{
                "elementType": "labels.text",
                "stylers": [
                    { "saturation": 1 },
                    { "weight": 0.1 },
                    { "color": "#a8a8a8" }
                ]
            }

        ];

         map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });

        map.setStyle("map_style");
    }());     
   

// script end
});



