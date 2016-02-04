/* global $ */
'use strict';

$(function () {

  // show/hide elements based on the url id (if any)
  var toggleShowHide = function() {
    // get the h2 id from the url
    var hid = window.location.href.split('#')[1] || '';
    // if no id, hide all first level elements

    var road = (hid.indexOf('-') > -1);

    if (road) {
      showRoad(hid);
    } else if (hid) {
      showCity(hid);
    } else {
      showReset();
    };

    $('.page-content').toggleClass('road', road);
    // jump to top
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 1);
  };

  // show the road from given starting point
  var showRoad = function(hid) {
    var show = false;

    // loop over all first level elements
    $('.page-content > *').each(function () {
      // the element
      var e = $(this);
      // the element id
      var id = e.attr('id');

      if (e.is('h2')) {
        if (hid) {
          // if hid is not empty
          // show if the current <h2> is #hid
          show = (hid == e.attr('id'));
          if (show) {
            // set hid to be the next <h2> to display
            hid = e.attr('data-next');
          }
          // apply show/hide
          e.toggle(show);
        } else {
          // if hid is empty show all <h2>
          e.show();
        }
      } else {
        // if the element is not <h1> or <h2>
        e.toggle(show && !e.is('h1'));
      };
    });
  };

  // show one city and their starting points
  var showCity = function(hid) {
    $('.page-content > *[id^='+hid+']').show();
    $('.page-content > *:not([id^='+hid+'])').hide();

  };

  // show only <h1> elements
  var showReset = function() {
    $('.page-content > h1').show();
    $('.page-content > :not(h1)').hide();
  };

  // make all <h1> and <h2> clickable
  $('.page-content > h2, .page-content > h1').each(function () {
    var h = $(this);
    var hid = h.attr('id');
    var a = $('<a>').attr('href', '#'+hid).html(h.html());

    h.html('').append(a);
  });

  // when the url change
  $(window).on('hashchange', toggleShowHide);
  // check url for show/hide when page is loaded
  toggleShowHide();
});



