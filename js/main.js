
(function() {
  
  var autoUpdate = true,
      timeTrans = 6000;
    
      if(!(document.querySelector('.cd-slider-top'))){
        return false;
    }
    
    var cdSliderTop = document.querySelector('.cd-slider-top'),
        item = cdSliderTop.querySelectorAll("li"),
        nav = cdSliderTop.querySelector(".nav_slider_top");

    item[0].className = "current_slide";

    for (var i = 0, len = item.length; i < len; i++) {
        var color = item[i].getAttribute("data-color");
        item[i].style.backgroundColor=color;
    }

    // Detect IE
    // hide ripple effect on IE9
    var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE");
        if ( msie > 0 ) {
            var version = parseInt(ua.substring(msie+ 5, ua.indexOf(".", msie)));
            if (version === 9) { cdSliderTop.className = "cd-slider-top ie9";}
    }

    if (item.length <= 1) {
        nav.style.display = "none";
    }

    function prevSlide() {
        var currentSlide = cdSliderTop.querySelector("li.current_slide"),
            prevElement = currentSlide.previousElementSibling,
            prevSlide = ( prevElement !== null) ? prevElement : item[item.length-1],
            prevColor = prevSlide.getAttribute("data-color"),
            el = document.createElement('span');

        currentSlide.className = "";
        prevSlide.className = "current_slide";

        nav.children[0].appendChild(el);

        var size = ( cdSliderTop.clientWidth >= cdSliderTop.clientHeight ) ? cdSliderTop.clientWidth*2 : cdSliderTop.clientHeight*2,
            ripple = nav.children[0].querySelector("span");

        ripple.style.height = size + 'px';
        ripple.style.width = size + 'px';
        ripple.style.backgroundColor = prevColor;

        ripple.addEventListener("webkitTransitionEnd", function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });

        ripple.addEventListener("transitionend", function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });

    }

    function nextSlide() {
        var currentSlide = cdSliderTop.querySelector("li.current_slide"),
            nextElement = currentSlide.nextElementSibling,
            nextSlide = ( nextElement !== null ) ? nextElement : item[0],
            nextColor = nextSlide.getAttribute("data-color"),
            el = document.createElement('span');

        currentSlide.className = "";
        nextSlide.className = "current_slide";

        nav.children[1].appendChild(el);

        var size = ( cdSliderTop.clientWidth >= cdSliderTop.clientHeight ) ? cdSliderTop.clientWidth*2 : cdSliderTop.clientHeight*2,
              ripple = nav.children[1].querySelector("span");

        ripple.style.height = size + 'px';
        ripple.style.width = size + 'px';
        ripple.style.backgroundColor = nextColor;

        ripple.addEventListener("webkitTransitionEnd", function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });

        ripple.addEventListener("transitionend", function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });

    }

    updateNavColor();

    function updateNavColor () {
        var currentSlide = cdSliderTop.querySelector("li.current_slide");

        var nextColor = ( currentSlide.nextElementSibling !== null ) ? currentSlide.nextElementSibling.getAttribute("data-color") : item[0].getAttribute("data-color");
        var prevColor = ( currentSlide.previousElementSibling !== null ) ? currentSlide.previousElementSibling.getAttribute("data-color") : item[item.length-1].getAttribute("data-color");

        if (item.length > 2) {
            nav.querySelector(".prev").style.backgroundColor = prevColor;
            nav.querySelector(".next").style.backgroundColor = nextColor;
        }
    }

    nav.querySelector(".next").addEventListener('click', function(event) {
        event.preventDefault();
        nextSlide();
        updateNavColor();
    });

    nav.querySelector(".prev").addEventListener("click", function(event) {
        event.preventDefault();
        prevSlide();
        updateNavColor();
    });
  
  //autoUpdate
  setInterval(function() {
    if (autoUpdate) {
      nextSlide();
      updateNavColor();
    };
    },timeTrans);

})();

var ww = document.body.clientWidth;

$(document).ready(function() {
    $(".adaptiv_nav li a:not(.inserted-a)").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    })
    
    $(".toggleMenu").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".adaptiv_nav").toggle();
    });
    adjustMenu();
})

$(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
});

var adjustMenu = function() {
    if (ww <= 1024) {
        $(".cd-slider-top").hide();

        $(".toggleMenu").css("display", "inline-block");
        if (!$(".toggleMenu").hasClass("active")) {
            $(".adaptiv_nav").hide();
        } else {
            $(".adaptiv_nav").show();
        }
        $(".adaptiv_nav li").unbind('mouseenter mouseleave');
        $(".adaptiv_nav li a.parent").unbind('click').bind('click', function(e) {
            // must be attached to anchor element to prevent bubbling
            e.preventDefault();
            $(this).parent("li").toggleClass("hover");
        });
    } 
    else if (ww > 1024) {
        $(".cd-slider-top").show();

        $(".toggleMenu").css("display", "none");
        $(".adaptiv_nav").show();
        $(".adaptiv_nav li").removeClass("hover");
        $(".adaptiv_nav li a").unbind('click');
        $(".adaptiv_nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
            // must be attached to li so that mouseleave is not triggered when hover over submenu
            $(this).toggleClass('hover');
        });
    }

    if (ww <= 768){
        $("#arrow-img").hide();
        $(".adaptiv_nav > li > .parent").css("background-image", 'url("../img/downArrow.png")');
    }else if(ww > 768){
        $("#arrow-img").show();
        $(".adaptiv_nav > li > .parent").css("background-image", "none");
    }
}




function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return (setStr);
}

$(function () {
    $(".cookie__accept").on('click', function () {
        var date = new Date;
        date.setDate(date.getDate() + 365);
        document.cookie = "createCookiePolit=1; path=/; expires=" + date.toUTCString();
        $('.cookie').css('display', 'none');
    });
    if (!getCookie('createCookiePolit')) {
        $('.cookie').css('display', 'block');
    }
}());


jQuery(document).ready(function ($) {
    $('.cd-testimonials-wrapper').flexslider({
        selector: ".cd-testimonials > li",
        animation: "slide",
        controlNav: false,
        slideshow: false,
        smoothHeight: true,
        start: function () {
            $('.cd-testimonials').children('li').css({
                'opacity': 1,
                'position': 'relative'
            });
        }
    });
    $('.cd-see-all').on('click', function () {
        $('.cd-testimonials-all').addClass('is-visible');
    });
    $('.cd-testimonials-all .close-btn').on('click', function () {
        $('.cd-testimonials-all').removeClass('is-visible');
    });
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.cd-testimonials-all').removeClass('is-visible');
        }
    });
    $('.cd-testimonials-all-wrapper').children('ul').masonry({
        itemSelector: '.cd-testimonials-item'
    });
});
jQuery(document).ready(function ($) {



    $('.slider_slick').slick({
        arrows: true,
        prevArrow: $('.left'),
        nextArrow: $('.right'),
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: false,
      }
    }
  ]
    });
    
    
if (ww <= 1024){
        $(".right").hide();
        $(".left").hide();
    }else if(ww > 1024){
        $(".right").show();
        $(".left").show();
    }

    var mainHeader = $('.cd-auto-hide-header'),
        secondaryNavigation = $('.cd-secondary-nav'),
        belowNavHeroContent = $('.sub-nav-hero'),
        headerHeight = mainHeader.height();
    var scrolling = false,
        previousTop = 0,
        currentTop = 0,
        scrollDelta = 10,
        scrollOffset = 150;
    mainHeader.on('click', '.nav-trigger', function (event) {
        event.preventDefault();
        mainHeader.toggleClass('nav-open');
    });
    $(window).on('scroll', function () {
        if (!scrolling) {
            scrolling = true;
            (!window.requestAnimationFrame) ? setTimeout(autoHideHeader, 250) : requestAnimationFrame(autoHideHeader);
        }
    });
    $(window).on('resize', function () {
        headerHeight = mainHeader.height();
    });

    function autoHideHeader() {
        var currentTop = $(window).scrollTop();
        (belowNavHeroContent.length > 0) ? checkStickyNavigation(currentTop) : checkSimpleNavigation(currentTop);
        previousTop = currentTop;
        scrolling = false;
    }

    function checkSimpleNavigation(currentTop) {
        if (previousTop - currentTop > scrollDelta) {
            mainHeader.removeClass('is-hidden');
        } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            mainHeader.addClass('is-hidden');
        }
    }

    function checkStickyNavigation(currentTop) {
        var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
        if (previousTop >= currentTop) {
            if (currentTop < secondaryNavOffsetTop) {
                mainHeader.removeClass('is-hidden');
                secondaryNavigation.removeClass('fixed slide-up');
                belowNavHeroContent.removeClass('secondary-nav-fixed');
            } else if (previousTop - currentTop > scrollDelta) {
                mainHeader.removeClass('is-hidden');
                secondaryNavigation.removeClass('slide-up').addClass('fixed');
                belowNavHeroContent.addClass('secondary-nav-fixed');
            }
        } else {
            if (currentTop > secondaryNavOffsetTop + scrollOffset) {
                mainHeader.addClass('is-hidden');
                secondaryNavigation.addClass('fixed slide-up');
                belowNavHeroContent.addClass('secondary-nav-fixed');
            } else if (currentTop > secondaryNavOffsetTop) {
                mainHeader.removeClass('is-hidden');
                secondaryNavigation.addClass('fixed').removeClass('slide-up');
                belowNavHeroContent.addClass('secondary-nav-fixed');
            }
        }
    }
});
jQuery(document).ready(function ($) {
    /* Dropdown menu for services */
    if ($(window).width() >= '1024') {
        var subMenuTrigger = $('#cd-navigation a[href="services.shtml"]').parent('li'),
            servicesMenu = '<ul id="dropDownMenu" class="dropdown-content-serv">' +
                '<li><a href="/banner.shtml">Печать баннеров</a>' +
                '<a href="/vyveski.shtml">Изготовление вывесок</a></li>' +
                '<li><a href="/vol_letters.shtml">Объемные буквы</a></li>' +
                '<li><a href="/light_boxes.shtml">Световые короба</a></li>' +
                '<li><a href="/input_groups.shtml">Входные группы</a></li>' +
                '<li><a href="/vitrina.shtml">Оформление и брендирование витрин</a></li>' +
                '<li><a href="/rezka.shtml">Фрезерная и лазерная резка</a></li>' +
                '<li><a href="/pos.shtml">POS-продукция</a></li>' +
                '<li><a href="/transport.shtml">Брендирование транспорта</a></li>' +
                '<li><a href="/printing.shtml">Печать</a></li>' +
                '<li><a href="/web_razrabotka.shtml">Веб-разработка</a></li>' +
                '</ul>';
        subMenuTrigger.attr('data-activates', 'dropDownMenu');
        subMenuTrigger.append(servicesMenu);
        subMenuTrigger.dropdown({
                inDuration: 200,
                outDuration: 600,
                constrainWidth: true,
                hover: true,
                gutter: 0,
                belowOrigin: true,
                alignment: 'left',
                stopPropagation: true
            }
        );
    }
});


function cookie() {

    var cookieAcceptButton = $('.cookie__accept'),
        cookieDeclineButton = $('.cookie__decline'),
        cookieAlert = $('.cookie');

    cookieAcceptButton.on('click', function () {
        cookieAlert.fadeOut('slow');
    });

    cookieDeclineButton.on('click', function () {
        cookieAlert.fadeOut('slow');
    });

}

$(function () {
    cookie();
});

$(function () {
    $.getScript("/js/maskedinput.min.js")
        .done(function () {
           $('#your-tel').mask("9 (999) 999-99-99");
        });

    $('.modal').modal();
    var testPhone = /^((\d|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    $('#your-email').val('wefji932jf1i313j'); // проверка на робота

    $('#modal-callback1 .btn-agree').click(function (e) {
        e.preventDefault();
        var name = $('#modal-callback1 #your-name'),
            tel = $('#modal-callback1 #your-tel'),
            errors = false;

        if (!name.val()) {
            name.addClass('invalid');
            errors = true;
        }
        if (!tel.val() || !testPhone.test(tel.val())) {
            tel.addClass('invalid');
            errors = true;
        }

        console.log(errors);

        if (errors === true) {
            Materialize.toast('Поля не заполнены, или заполнены не верно', 2500);
        } else {

            var formData = {},
                inputs = $('#modal-callback1 form input');

            inputs.each(function () {
                var input = $(this)
                formData[input.attr('name')] = input.val()
            })

            $.ajax({
                url: 'callback_mail.php',
                type: 'POST',
                data: formData,
                beforeSend: function () {
                    $('.progress').fadeIn();
                },
                error: function (xhr) {
                    $('.progress').fadeOut();
                    Materialize.toast('Произошла ошибка. Попробуйте отправить форму еще раз', 3500);
                },
                complete: function (xhr) {
                    $('.progress').fadeOut();
                    if (xhr.status == 200) {
                        yaCounter21805663.reachGoal('callback');
                        yaCounter21805663.reachGoal('all_goal');
                        $('#modal-callback1').modal('close');
                        $('#modal-callback1-send').modal('open');
                        inputs.val('');
                        $('#your-email').val('wefji932jf1i313j');
                        inputs.removeClass('valid')

                    }
                }
            });
        }
    })
})
