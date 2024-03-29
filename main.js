var preloader = (function () {
  var percentsTotal = 0,
    preloader = $('.preloader');

  var imgPath = $('*').map(function (ndx, element) {
    var background = $(element).css('background-image'),
      img = $(element).is('img'),
      path = '';

    if (background != 'none') {
      path = background.replace('url("', '').replace('")', '');
    }

    if (img) {
      path = $(element).attr('src');
    }

    if (path) return path

  });

  var setPercents = function (total, current) {
    var persents = Math.ceil(current / total * 100);

    $('.preloader__percents').text(persents + '%');

    if (persents >= 100) {
      preloader.fadeOut();
    }
  }

  var loadImages = function (images) {

    if (!images.length) preloader.fadeOut();

    images.forEach(function (img, i, images) {
      var fakeImage = $('<img>', {
        attr: {
          src: img
        }
      });

      fakeImage.on('load error', function () {
        percentsTotal++;
        setPercents(images.length, percentsTotal);
      });
    });
  }

  return {
    init: function () {
      var imgs = imgPath.toArray();

      loadImages(imgs);
    }
  }
}());

  var slider = (function () {
    var counter = 1,
      duration = 300,
      inProcess = false;

    var moveSlide = function (container, direction) {
      var items = $('.slider__item', container),
        activeItem = items.filter('.active'),
        direction = direction == 'down' ? 100 : -100;

      if (counter >= items.length) counter = 0;

      var reqItem = items.eq(counter);

      activeItem.animate({
        'top': direction + '%'
      }, duration);

      reqItem.animate({
        'top': 0
      }, duration, function () {
        activeItem.removeClass('active')
          .css('top', '-' + direction + '%');
        $(this).addClass('active');

        inProcess = false;
      });
    }

    return {
      init: function () {
        $('.slider__controls-top').on('click', function (e) {
          e.preventDefault();

          if (!inProcess) {
            inProcess = true;

            moveSlide($('.slider_first'), 'down');
            moveSlide($('.slider_opposite'), 'up');

            counter++;
          }
        });
      }
    }
  }());

var slideShow = (function () {
  return {
    init: function () {
      $('.slideshow__link').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
          container = $this.closest('.slideshow'),
          path = $this.attr('href'),
          display = container.find('.slideshow__display-pic'),
          preloader = $('#preloader'),
          fadedOut = $.Deferred(),
          loaded = $.Deferred();

          display.fadeOut(function() {
            fadedOut.resolve();
          });

          fadedOut.done(function () {
            preloader.show();

            display.attr('src', path).on('load', function(){
              loaded.resolve();
            });
          });

          loaded.done(function(){
            preloader.hide();
            display.show();
          });
      });
    }
  }
}());

$(function () {
  preloader.init();
  slider.init();
  slideShow.init();

  var deferred = $.Deferred();
  var deferred2 = $.Deferred();

  $('.res').on('click', function (e) {
    e.preventDefault();

    setTimeout(function(){
      deferred.resolve();
    }, 2000);

  });

  $('.rej').on('click', function (e) {
    e.preventDefault();

    setTimeout(function(){
      deferred2.resolve();
    }, 3000);

  });

  deferred.done(function() {
    console.log('deferref is done!!');
  });

  deferred2.fail(function() {
    console.log('deferred is failed!!');
  });

  $.when(deferred, deferred2).done(function(){
    console.log('Оба объекта в состоянии resolve');
  });

});


