// ----------------------------------------
// SVG images
// ----------------------------------------

// Replace all SVG images with inline SVG
function svgReplace() {
	$('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

			setUpClickHandlers();
			setUpTooltips();
		}, 'xml');

	});
}

$(function() {
  svgReplace();
});


// ----------------------------------------
// Scroll to ID
// ----------------------------------------

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
        return false;
      }
    }
  });
});


// ----------------------------------------
// TypeType
// ----------------------------------------

// Header Text

$('header h1').typetype('zachgreen.codes', {
  	t: 150,
  	e: 0,
  });


// ----------------------------------------
// Trigger Animations
// ----------------------------------------

$('.intro img, nav').delay(2500).queue(function() {
	$(this).addClass('ready');
});


// ----------------------------------------
// Sticky Header
// ----------------------------------------

$(function() {
    //caches a jQuery object containing the header element
    var header = $('header');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    });
});

// ----------------------------------------
// Back to Top button
// ----------------------------------------

$(function() {
    //caches a jQuery object containing the header element
    var topButton = $('.back-to-top');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            topButton.fadeIn('slow');
        } else {
            topButton.fadeOut('fast');
        }
    });
});








