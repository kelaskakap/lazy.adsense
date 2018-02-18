// jQuery Initialization
jQuery(document).ready(function ($) {
    "use strict";

    $('.adsense').adsenseLoader({
        onLoad: function ($this) {
            $this.addClass('adsense--loaded');
        }
    });
	
	$('.adsense728x90').adsenseLoader({
        onLoad: function ($thisx) {
            $thisx.addClass('adsense728x90--loaded');
        }
    });
	
	$('.adsense300x600').adsenseLoader({
        onLoad: function ($this) {
            $this.addClass('adsense300x600--loaded');
        }
    });

});