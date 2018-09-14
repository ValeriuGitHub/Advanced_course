// Google Map

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.500956, lng: -0.124615 },
        zoom: 8,
        styles: [{
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#70cbbb"
            }]
        }]
    });
}

// Scroll for Anchor

$(document).ready(function() {
    $("a[href*='#header']").on("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
        return false;
    });
    $("a[href*='#scroll']").on("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
        return false;
    });
    for (var i = 1; i < 5; i++) {
        var blogText = $("a[href*='blog__text" + i + "']")
        blogText.on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1500);
            e.preventDefault();
            return false;
        });
    }
});

// Preloader

var preloader = function() {

    var preloader = $('.preloader'),
        imagesCount = $('img').length,
        background = $('background').length,
        perc__display = $('.preloader__percents'),
        progress = 0,
        loadedImg = 0;

    for (var i = 0; i < imagesCount; i++) {
        img_copy = new Image();
        img_copy.src = document.images[i].src;
        img_copy.onload = img_load;
        img_copy.onerror = img_load;
    }

    if (imagesCount == 0) {
        perc__display.text(100 + '%');
        preloader.fadeOut();
    }

    function img_load() {
        loadedImg++;
        perc__display.text(Math.ceil(loadedImg / imagesCount * 100) + '%')
        if (loadedImg >= imagesCount) {
            preloader.fadeOut();
        }
    }
}

preloader();

// Index Rotate

var indexRotate = function() {

    $(".welcome__button").on('click', function(e) {
        e.preventDefault();
        $(".welcome__button-wrapper").toggleClass("welcome__button-wrapper_none");
        $(".window__form").toggleClass("window-rotate");
    });

    $(".login__comeback").on('click', function(e) {
        e.preventDefault();
        $(".welcome__button-wrapper").toggleClass("welcome__button-wrapper_none");
        $(".window__form").toggleClass("window-rotate");
    });

}

indexRotate();

// mobile blog menu

var mobileBlogMenu = function() {

    var swipe = $(".blog-column__swipe");
    nav = $(".blog-column__nav");
    wrapper = $(".blog-column__swipe-wrapper");

    $(".blog-column__swipe-wrapper").on('click', function(e) {
        e.preventDefault();
        swipe.toggleClass("blog-column__swipe_active");
        nav.toggleClass("blog-column__nav_active");
        wrapper.toggleClass("blog-column__swipe-wrapper_active");
    });
}

mobileBlogMenu();

// BurgerMenu 

var burgerMenu = function() {
    var nav = $(".header-nav");
    var button = $(".header-top-right__menu-burger");
    var buttonActive = $(".header-top-right__menu-burger_active");

    $(".header-top-right__menu-burger").on('click', function(e) {
        e.preventDefault();
        nav.fadeIn(0, function() {
            nav.toggleClass("header-nav_active");
            $(".header-top-right__burger").toggleClass("header-top-right__burger_active");
            button.toggleClass("header__menu-burger_active");
        });
    });
    buttonActive.on('click', function(e) {
        e.preventDefault();
        button.removeClass("header-top-right__menu-burger_active");
    });
}

burgerMenu();

// Forms

var forms = function() {

    var validName = false;
    var validEmail = false;
    var validPassword = false;
    var validCheckbox = false;
    var textArea = false;

    $("form").submit(function(e) {
        e.preventDefault();

        var name = $(".name").val();
        var email = $(".email").val();
        var password = $(".password").val();
        var textarea = $("#textarea").val()

        if (name == "") {
            $(".name").addClass("error");
        } else {
            $(".name").removeClass("error").addClass("sucess");
            validName = true;
        }

        if (password == "") {
            $(".password").addClass("error");
        } else {
            $(".password").removeClass("error").addClass("sucess");
            validPassword = true;
        }

        if (email == "") {
            $(".email").addClass("error");
        } else {
            $(".email").removeClass("error").addClass("sucess");
            validEmail = true;
        }

        if (textarea == "") {
            $("#textarea").addClass("error");
        } else {
            $("#textarea").removeClass("error").addClass("sucess");
            textArea = true;
        }

        if ($("#login__checkbox_input").is(":checked") && $("#radio1").is(":checked")) {
            validCheckbox = true;
        } else {

            var alertRobot = $(".input-error");

            alertRobot.toggleClass("input-error_active");

            $("#send-message__close-error").on('click', function(e) {
                e.preventDefault();
                alertRobot.fadeOut(300, function() {
                    alertRobot.remove();
                })
            })
        }
        if (validCheckbox == true && validName == true && validPassword == true) {

            var alertWelcome = $(".send-message__welcome");

            alertWelcome.toggleClass("send-message__welcome_active");

            $("#send-message__close_welcome").on('click', function(e) {
                e.preventDefault();
                alertWelcome.fadeOut(300, function() {
                    alertWelcome.remove();
                })
                $("form").unbind('submit').submit();
            })
        }

        if (textArea == true && validName == true && validPassword == true) {
            var alertWorks = $(".send-message");

            alertWorks.toggleClass("send-message_active");

            $("#send-message__close").on('click', function(e) {
                e.preventDefault();
                alertWorks.fadeOut(300, function() {
                    alertWorks.remove();
                })
                $("form").unbind('submit').submit();
            })
        }
    });
}

forms();

// Draw Circle

var drawCircle = function(chartDiam, strokeWidth) {
    var circle = $(".skills-section__item"),
        chartDiam = 120,
        strokeWidth = 15,
        chartRadius = (chartDiam - strokeWidth) / 2,
        charPi = (chartDiam - strokeWidth) * Math.PI;
    for (var i = 0; i < circle.length; i++) {
        var chartName = $(circle[i]).find(".skill").html(),
            chartValue = $(circle[i]).find(".circles__value").html(),
            chartPercentage = chartValue * charPi / 100,
            chartHTML = "<svg width=\"" + chartDiam + "\" height=\"" + chartDiam + "\"><circle transform=\"rotate(-90)\" r=\"" + chartRadius + "\" cx=\"-50%\" cy=\"50%\" stroke-width=\"" + strokeWidth + "\" class=\"circle__first\"/><circle transform=\"rotate(-90)\" style=\"stroke-dasharray: " + chartPercentage + "px " + charPi + "px;\" r=\"" + chartRadius + "\" cx=\"-50%\" cy=\"50%\" stroke-width=\"" + strokeWidth + "\" class=\"circle__second\" /></svg><div class=\"skill\">" + chartName + "</div>";
        $(circle[i]).html(chartHTML);
    }
}

drawCircle();

// Slider

var slider = function() {
    var item = $(".slider__item"),
        linkUp = $(".slider__controls-top"),
        linkDown = $(".slider__controls-down");

    linkUp.on("click", function(e) {
        e.preventDefault()

        var current = $('.slider__item.slider__item_active'),
            currentIndex = current.index(),
            nextIndex = currentIndex + 1;
        next = current.next(),
            prev = current.prev();

        if (!next.length) {
            next = item.first();
            console.log(" NEXT ");
        }

        if (!prev.length) {
            prev = item.last();
            console.log(" PREV ");
        }

        var nextnext = next.next(),
            prevprev = prev.prev();

        if (!nextnext) {
            nextnext = item.first();
            console.log(" NEXTNEXT ");
        }

        if (!prevprev.length) {
            prevprev = item.last();
            console.log(" PREVPREV ");
        }

        var speed = 1000;

        var nextImg = next.find('.portfolio__img').attr("src");
        var prevImg = prev.find('.portfolio__img').attr("src");
        var nextnextImg = nextnext.find(".portfolio__img").attr("src");
        var prevprevImg = prevprev.find(".portfolio__img").attr("src");
        // small SLIDER
        var smallPrev = $('.slider__prev'),
            smallNext = $('.slider__next'),
            smallPrevBgFirst = smallPrev.find('.slider__bg').first(),
            smallPrevBgSecond = smallPrev.find('.slider__bg').last(),
            smallNextBgFirst = smallNext.find('.slider__bg').first(),
            smallNextBgSecond = smallNext.find('.slider__bg').last(),
            smallPrevBgFirstImg = smallPrevBgFirst.find('.slider__bg-img'),
            smallPrevBgSecondImg = smallPrevBgSecond.find('.slider__bg-img'),
            smallNextBgFirstImg = smallNextBgFirst.find('.slider__bg-img'),
            smallNextBgSecondImg = smallNextBgSecond.find('.slider__bg-img');

        smallPrevBgFirstImg.attr('src', prevImg);
        smallNextBgFirstImg.attr('src', nextImg);
        smallPrevBgSecondImg.attr('src', prevprevImg);
        smallNextBgSecondImg.attr('src', nextnextImg);

        smallPrevBgFirst.css({ top: '100%' });
        smallPrevBgSecond.css({ top: 0 });
        smallNextBgFirst.css({ top: 0 });
        smallNextBgSecond.css({ top: '-100%' });

        smallPrevBgFirst.animate({ top: 0 }, speed);
        smallPrevBgSecond.animate({ top: '-100%' }, speed);
        smallNextBgFirst.animate({ top: '100%' }, speed);
        smallNextBgSecond.animate({ top: 0 }, speed);

        current.fadeOut(700);
        current.removeClass("slider__item_active");

        if (nextIndex == ($('.slider__item:last').index() + 1)) {
            $('.slider__item').eq(0).fadeIn(1000);
            $('.slider__item').eq(0).addClass("slider__item_active");
        } else {
            next.fadeIn(700);
            next.addClass("slider__item_active");
        }
    });

    linkDown.on("click", function(e) {
        e.preventDefault();
        var current = $('.slider__item.slider__item_active'),
            currentIndex = $('.slider__item.slider__item_active').index(),
            prevIndex = currentIndex - 1,
            prev = $('.slider__item').eq(prevIndex),
            nextIndex = currentIndex + 1,
            next = $('.slider__item').eq(nextIndex);

        current.fadeOut(700);
        current.removeClass("slider__item_active");
        prev.fadeIn(700);
        prev.addClass("slider__item_active");

        if (!next.length) {
            next = item.first();
            console.log(" NEXT ");
        }

        if (!prev.length) {
            prev = item.last();
            console.log(" PREV ");
        }

        var nextnext = next.next(),
            prevprev = prev.prev();

        if (!nextnext) {
            nextnext = item.first();
            console.log(" NEXTNEXT ");
        }

        if (!prevprev.length) {
            prevprev = item.last();
            console.log(" PREVPREV ");
        }

        var speed = 1000;

        var nextImg = next.find('.portfolio__img').attr("src");
        var prevImg = prev.find('.portfolio__img').attr("src");
        var nextnextImg = nextnext.find(".portfolio__img").attr("src");
        var prevprevImg = prevprev.find(".portfolio__img").attr("src");
        // small SLIDER
        var smallPrev = $('.slider__prev'),
            smallNext = $('.slider__next'),
            smallPrevBgFirst = smallPrev.find('.slider__bg').first(),
            smallPrevBgSecond = smallPrev.find('.slider__bg').last(),
            smallNextBgFirst = smallNext.find('.slider__bg').first(),
            smallNextBgSecond = smallNext.find('.slider__bg').last(),
            smallPrevBgFirstImg = smallPrevBgFirst.find('.slider__bg-img'),
            smallPrevBgSecondImg = smallPrevBgSecond.find('.slider__bg-img'),
            smallNextBgFirstImg = smallNextBgFirst.find('.slider__bg-img'),
            smallNextBgSecondImg = smallNextBgSecond.find('.slider__bg-img');

        smallPrevBgFirstImg.attr('src', prevImg);
        smallNextBgFirstImg.attr('src', nextImg);
        smallPrevBgSecondImg.attr('src', prevprevImg);
        smallNextBgSecondImg.attr('src', nextnextImg);

        smallPrevBgFirst.css({ top: '100%' });
        smallPrevBgSecond.css({ top: 0 });
        smallNextBgFirst.css({ top: 0 });
        smallNextBgSecond.css({ top: '-100%' });

        smallPrevBgFirst.animate({ top: 0 }, speed);
        smallPrevBgSecond.animate({ top: '-100%' }, speed);
        smallNextBgFirst.animate({ top: '100%' }, speed);
        smallNextBgSecond.animate({ top: 0 }, speed);

        current.fadeOut(700);
        current.removeClass("slider__item_active");
    });
}

slider();

// Parallax 

$(window).scroll(function() {
    var st = $(this).scrollTop();

    // $(".header").css({
    //     "transform": "translateX(-" + st / 220 + "px",
    //     "margin-right":  - (st / 220) + "px"
    // });

    $(".what-people-say").css({
        "transform": "translateX(-" + st / 1250 + "px",
        "margin-right": -(st / 1250) + "px"
    });
});

// Blog navigation

// var blogNav = function() {
//     var aside = $(".aside-nav");
//     if (aside.length) {
//         var menu = $(".nav");
//         var item = $(".nav__item");

//         var item1 = $(".nav__item1");
//         var item2 = $(".nav__item2");
//         var item3 = $(".nav__item3");
//         var item4 = $(".nav__item4");

//         var navOffset = aside.offset().top;

//         var itemOffset1 = $("#blog__text1").offset().top - 200;
//         var itemOffset2 = $("#blog__text2").offset().top;
//         var itemOffset3 = $("#blog__text3").offset().top;
//         var itemOffset4 = $("#blog__text4").offset().top;

//         $(window).scroll(function() {
//             var scrollPos = $(window).scrollTop();

//             if (scrollPos >= navOffset) {
//                 aside.addClass("aside-nav_active");
//                 menu.addClass("nav_active");
//             } else {
//                 aside.removeClass("aside-nav_active");
//                 menu.removeClass("nav_active");
//             }

//             if (scrollPos >= itemOffset1) {
//                 item1.addClass("nav__item_active");
//             } else {
//                 item1.removeClass("nav__item_active");
//             }

//             if (scrollPos >= itemOffset2) {
//                 item1.removeClass("nav__item_active");
//                 item2.addClass("nav__item_active");
//             } else {
//                 item2.removeClass("nav__item_active");
//             }

//             if (scrollPos >= itemOffset3) {
//                 item2.removeClass("nav__item_active");
//                 item3.addClass("nav__item_active");
//             } else {
//                 item3.removeClass("nav__item_active");
//             }

//             if (scrollPos >= itemOffset4) {
//                 item3.removeClass("nav__item_active");
//                 item4.addClass("nav__item_active");
//             } else {
//                 item4.removeClass("nav__item_active");
//             }

//         });
//     }
// }

// blogNav();

var blogNav = function(){
    var aside = $(".aside-nav"),
        menu = $(".nav"),
        item = $(".nav__item"),
        itemBlock = $(".item__navigation_block"),
        itemActive = $(".nav__item_active"),
        navOffset = item.offset().top;

    // item.click(function(e){
    //     e.preventDefault();
    //     item.eq($(this).index()).addClass("nav__item_active");
    // });

    var itemOffset = item.eq($(this).index()).offset().top,
        nextItemOffset = item.eq($(this).index() + 1).offset().top;

        console.log(itemOffset);
        console.log(nextItemOffset);

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        console.log(scrollPos);
        // console.log("navOffset =", navOffset);
        if(scrollPos >= navOffset) {
            aside.addClass("aside-nav_active");
            menu.addClass("nav_active");
        } else {
            aside.removeClass("aside-nav_active");
            menu.removeClass("nav_active");
        }

        // if(scrollPos >= itemOffset) {
        //     item.eq($(this).index() + 1).addClass("nav__item_active");
        // } else {
        //     item.eq($(this).index() - 1).removeClass("nav__item_active");
        // }
    })
}

blogNav();