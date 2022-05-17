function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}


(function ($) {
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


(function ($) {
    if (isIE() && isIE() < 11) {
        $('html').addClass('lt-ie11');
        $(document).ready(function () {
            PointerEventsPolyfill.initialize({});
        });
    }
    if (isIE() && isIE() < 10) {
        $('html').addClass('lt-ie10');
    }
})(jQuery);
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.hasClass("wow-animation") && $(".wow").length) {
        $(document).ready(function () {
            new WOW().init();
        });
    }
})(jQuery);
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart', containerClass: 'ui-to-top fa fa-angle-up'
            });
        });
    }
})(jQuery);
;
(function ($) {
    var o = $('.responsive-tabs');
    if (o.length > 0) {
        $(document).ready(function () {
            o.each(function () {
                var $this = $(this);
                $this.easyResponsiveTabs({
                    type: $this.attr("data-type") === "accordion" ? "accordion" : "default"
                });
            });
        });
    }
})(jQuery);



(function ($) {
    var o = $('.rd-navbar');
    if (o.length > 0) {
        $(document).ready(function () {
            o.RDNavbar({
                //                stuckWidth: 1024, 
                //                stuckMorph: true, 
                //                stuckLayout: "rd-navbar-static", 
                anchorNavSpeed: 500,
                responsive: {
                    0: {
                        layout: 'rd-navbar-fixed', focusOnHover: false,
                        anchorNavOffset: -60
                    },
                    //                    768: {
                    //                        layout: 'rd-navbar-fullwidth', stickUpOffset: '50%'
                    //                    },
                    992: {
                        layout: o.attr("data-rd-navbar-lg").split(" ")[0],
                        stickUp: true,
                        stickUpClone: true,
                        stickUpOffset: '50%',
                        focusOnHover: false,
                        anchorNavOffset: -70
                    }
                }

            });
        });
    }
})(jQuery);



(function ($) {
    var o = $('.rd-parallax');
    if (o.length) {
        $(document).ready(function () {
            o.each(function () {
                $(this).RDParallax({
                    direction: ($('html').hasClass("smoothscroll") || $('html').hasClass("smoothscroll-all")) && !isIE() ? "normal" : "inverse"
                });
            });
        });
    }
})(jQuery);



(function ($) {
    var o = $('.owl-carousel');
    if (o.length) {
        var isTouch = "ontouchstart" in window;
        function preventScroll(e) {
            e.preventDefault();
        }
        $(document).ready(function () {
            o.each(function () {
                var c = $(this), responsive = {
                };
                var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-"], values = [0, 480, 768, 992, 1200], i, j;
                for (i = 0; i < values.length; i++) {
                    responsive[values[i]] = {
                    };
                    for (j = i; j >= -1; j--) {
                        if (!responsive[values[i]]["items"] && c.attr("data" + aliaces[j] + "items")) {
                            responsive[values[i]]["items"] = j < 0 ? 1 : parseInt(c.attr("data" + aliaces[j] + "items"));
                        }
                        if (!responsive[values[i]]["stagePadding"] && responsive[values[i]]["stagePadding"] !== 0 && c.attr("data" + aliaces[j] + "stage-padding")) {
                            responsive[values[i]]["stagePadding"] = j < 0 ? 0 : parseInt(c.attr("data" + aliaces[j] + "stage-padding"));
                        }
                        if (!responsive[values[i]]["margin"] && responsive[values[i]]["margin"] !== 0 && c.attr("data" + aliaces[j] + "margin")) {
                            responsive[values[i]]["margin"] = j < 0 ? 30 : parseInt(c.attr("data" + aliaces[j] + "margin"));
                        }
                    }
                }
                c.owlCarousel({
                    autoplay: c.attr("data-autoplay") === "true", loop: c.attr("data-loop") !== "false", nav: c.attr("data-nav") === "true", dots: c.attr("data-dots") === "true", dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each")) : false, responsive: responsive, navText: [], onInitialized: function () {
                        if ($.fn.magnificPopup) {
                            var o = this.$element.find('[data-lightbox]').not('[data-lightbox="gallery"] [data-lightbox]'), g = this.$element.find('[data-lightbox^="gallery"]');
                            if (o.length) {
                                o.each(function () {
                                    var $this = $(this);
                                    $this.magnificPopup({
                                        type: $this.attr("data-lightbox"), callbacks: {
                                            open: function () {
                                                if (isTouch) {
                                                    $(document).on("touchmove", preventScroll);
                                                    $(document).swipe({
                                                        swipeDown: function () {
                                                            $.magnificPopup.close();
                                                        }
                                                    });
                                                }
                                            }, close: function () {
                                                if (isTouch) {
                                                    $(document).off("touchmove", preventScroll);
                                                    $(document).swipe("destroy");
                                                }
                                            }
                                        }
                                    });
                                })
                            }
                            if (g.length) {
                                g.each(function () {
                                    var $gallery = $(this);
                                    $gallery.find('[data-lightbox]').each(function () {
                                        var $item = $(this);
                                        $item.addClass("mfp-" + $item.attr("data-lightbox"));
                                    }).end().magnificPopup({
                                        delegate: '[data-lightbox]', type: "image", gallery: {
                                            enabled: true
                                        }, callbacks: {
                                            open: function () {
                                                if (isTouch) {
                                                    $(document).on("touchmove", preventScroll);
                                                    $(document).swipe({
                                                        swipeDown: function () {
                                                            $.magnificPopup.close();
                                                        }
                                                    });
                                                }
                                            }, close: function () {
                                                if (isTouch) {
                                                    $(document).off("touchmove", preventScroll);
                                                    $(document).swipe("destroy");
                                                }
                                            }
                                        }
                                    });
                                })
                            }
                        }
                    }
                });
            });
        });
    }
})(jQuery);


//(function ($) {
//    var o = $('.rd-navbar-search');
//    if (o.length) {
//        $(document).ready(function () {
//            o.RDSearch({
//            });
//        });
//    }
//})(jQuery);

function iOS() {

    var iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()) { return true; }
        }
    }

    return false;
}

$(document).ready(function () {
    var menu = document.getElementById('menu');

    menu.style.display = 'none';
    setTimeout(function () {
        menu.style.display = 'block';
        menu.className = 'mfb-component--br mfb-zoomin';
    }, 1);
    if (iOS()) {
        $('#link_app_mosan').attr('href','itms-services://?action=download-manifest&amp;url=https://mosan.telemor.tl/ios-app/TimorEU.plist');
        $('#link_app_mosan_agent').attr('href','itms-services://?action=download-manifest&amp;url=https://mosan.telemor.tl/ios-app/Mosan.plist');
    }else{
        $('#link_app_mosan').attr('href','https://play.google.com/store/apps/details?id=com.mosan.eu');
        $('#link_app_mosan_agent').attr('href','https://play.google.com/store/apps/details?id=com.mosan.agent');
    }
});


