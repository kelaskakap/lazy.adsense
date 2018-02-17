// jQuery Initialization
jQuery(document).ready(function ($) {
    "use strict";

    $('.adsense').adsenseLoader({
        onLoad: function ($this) {
            $this.addClass('adsense--loaded');
        }
    });

});