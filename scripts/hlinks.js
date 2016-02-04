/* global $ */
'use strict';

$(function () {

  // show/hide elements based on the url id (if any)
  var showhide = function() {
    // get the h2 id from the url
    var hid = window.location.href.split('#')[1] || '';
    // if no id, hide all first level elements
    var show = !!hid;

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
        e.toggle(show);
      };
    });
  };


  // make all <h2> clickable
  $('.page-content > h2').each(function () {
    var h = $(this);
    var hid = h.attr('id');
    var a = $('<a>').attr('href', '#'+hid).html(h.html());

    h.html('').append(a);
  });

  // when the url change
  $(window).on('hashchange', showhide);
  // check url for show/hide when page is loaded
  showhide();
});



