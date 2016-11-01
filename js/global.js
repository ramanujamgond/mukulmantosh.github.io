$(function() {
    "use strict";

    function e() {
        o = $(window).width(), l = $(window).height(), d = $(".cmn-toggle-switch").is(":visible") ? !0 : !1
    }

    function t() {
        e(), $('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function() {
            var e = c["swiper-" + $(this).attr("id")],
                t = $(this),
                a = i(t);
            e.params.slidesPerView = a, e.reInit();
            var n = t.find(".pagination span"),
                s = n.hide().slice(0, n.length + 1 - a);
            s.length <= 1 || a >= t.find(".swiper-slide").length ? t.addClass("pagination-hidden") : t.removeClass("pagination-hidden"), s.show()
        })
    }

    function a() {
        var e = 0;
        $(".swiper-container").each(function() {
            var t = $(this),
                a = "swiper-unique-id-" + e;
            t.addClass("swiper-" + a + " initialized").attr("id", a), t.find(".pagination").addClass("pagination-" + a);
            var n = parseInt(t.attr("data-autoplay"), 10),
                s = parseInt(t.attr("data-center"), 10),
                r = t.closest(".circle-description-slide-box").length ? !1 : !0,
                o = t.attr("data-slides-per-view");
            "responsive" == o ? o = i(t) : "auto" != o && (o = parseInt(o, 10));
            var l = parseInt(t.attr("data-loop"), 10),
                d = parseInt(t.attr("data-speed"), 10),
                g = parseInt(t.attr("data-initial-slide"), 10);
            if (g || (g = 0), c["swiper-" + a] = new Swiper(".swiper-" + a, {
                    speed: d,
                    pagination: ".pagination-" + a,
                    loop: l,
                    paginationClickable: !0,
                    autoplay: n,
                    slidesPerView: o,
                    keyboardControl: !0,
                    calculateHeight: !0,
                    initialSlide: g,
                    simulateTouch: r,
                    centeredSlides: s,
                    roundLengths: !0,
                    onSlideChangeEnd: function(e) {
                        var a = (l === !0 ? e.activeIndex : e.activeLoopIndex, t.find(".swiper-slide-active").attr("data-val"));
                        t.find('.swiper-slide[data-val="' + a + '"]').addClass("active")
                    },
                    onSlideChangeStart: function(e) {
                        if (t.find(".swiper-slide.active").removeClass("active"), t.hasClass("thumbnails-preview")) {
                            var a = 1 === l ? e.activeLoopIndex : e.activeIndex;
                            c["swiper-" + t.next().attr("id")].swipeTo(a), t.next().find(".current").removeClass("current"), t.next().find('.swiper-slide[data-val="' + a + '"]').addClass("current")
                        }
                    },
                    onSlideClick: function(e) {
                        t.hasClass("thumbnails") && c["swiper-" + t.prev().attr("id")].swipeTo(e.clickedSlideIndex)
                    }
                }), c["swiper-" + a].reInit(), "responsive" == t.attr("data-slides-per-view")) {
                var p = t.find(".pagination span"),
                    u = p.hide().slice(0, p.length + 1 - o);
                u.length <= 1 || o >= t.find(".swiper-slide").length ? t.addClass("pagination-hidden") : t.removeClass("pagination-hidden"), u.show()
            }
            e++
        })
    }

    function i(e) {
        return o >= v ? parseInt(e.attr("data-add-slides"), 10) : o >= h ? parseInt(e.attr("data-lg-slides"), 10) : o >= u ? parseInt(e.attr("data-md-slides"), 10) : o >= p ? parseInt(e.attr("data-sm-slides"), 10) : o >= g ? parseInt(e.attr("data-xs-slides"), 10) : parseInt(e.attr("data-mob-slides"), 10)
    }

    function n(e) {
        return 0 === e ? "00" : 10 > e ? "0" + e : "" + e
    }

    function s(e) {
        var t = new Date,
            a = new Date(e),
            i = a - t;
        0 > i && (i = 0);
        var s = parseInt(i / 864e5, 10),
            r = i % 864e5,
            o = parseInt(r / 36e5, 10),
            l = r % 36e5,
            d = parseInt(l / 6e4, 10),
            c = l % 6e4,
            g = parseInt(c / 1e3, 10);
        $(".days").text(n(s)), $(".hours").text(n(o)), $(".minutes").text(n(d)), $(".seconds").text(n(g))
    }

    function r(e) {
        var t, a, i, n = {
                "style-1": {
                    style: [{
                        featureType: "landscape",
                        stylers: [{
                            hue: "#FFBB00"
                        }, {
                            saturation: 43.400000000000006
                        }, {
                            lightness: 37.599999999999994
                        }, {
                            gamma: 1
                        }]
                    }, {
                        featureType: "road.highway",
                        stylers: [{
                            hue: "#FFC200"
                        }, {
                            saturation: -61.8
                        }, {
                            lightness: 45.599999999999994
                        }, {
                            gamma: 1
                        }]
                    }, {
                        featureType: "road.arterial",
                        stylers: [{
                            hue: "#FF0300"
                        }, {
                            saturation: -100
                        }, {
                            lightness: 51.19999999999999
                        }, {
                            gamma: 1
                        }]
                    }, {
                        featureType: "road.local",
                        stylers: [{
                            hue: "#FF0300"
                        }, {
                            saturation: -100
                        }, {
                            lightness: 52
                        }, {
                            gamma: 1
                        }]
                    }, {
                        featureType: "water",
                        stylers: [{
                            hue: "#0078FF"
                        }, {
                            saturation: -13.200000000000003
                        }, {
                            lightness: 2.4000000000000057
                        }, {
                            gamma: 1
                        }]
                    }, {
                        featureType: "poi",
                        stylers: [{
                            hue: "#00FF6A"
                        }, {
                            saturation: -1.0989010989011234
                        }, {
                            lightness: 11.200000000000017
                        }, {
                            gamma: 1
                        }]
                    }]
                }
            },
            s = $("#" + e).attr("data-lat"),
            r = $("#" + e).attr("data-lng"),
            o = $("#" + e).attr("data-string"),
            l = new google.maps.LatLng(s, r),
            d = $("#" + e).attr("data-marker"),
            c = parseInt($("#" + e).attr("data-zoom"), 10),
            g = n[$("#map-canvas").attr("data-style")].style,
            p = new google.maps.StyledMapType(g, {
                name: "Styled Map"
            }),
            u = {
                zoom: c,
                disableDefaultUI: !0,
                center: l,
                scrollwheel: !1,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
                }
            };
        t = new google.maps.Map(document.getElementById(e), u), t.mapTypes.set("map_style", p), t.setMapTypeId("map_style"), i = new google.maps.InfoWindow({
            content: o
        }), a = new google.maps.Marker({
            position: l,
            map: t,
            icon: d
        }), google.maps.event.addListener(a, "click", function() {
            i.open(t, a)
        })
    }
    var o, l, d, c = [],
        g = 480,
        p = 768,
        u = 992,
        h = 1200,
        v = 1600,
        f = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);
    if (e(), $(".center-image").each(function() {
            var e = $(this).attr("src");
            $(this).parent().addClass("background-block").css({
                "background-image": "url(" + e + ")"
            }), $(this).hide()
        }), $(window).load(function() {
            $("#loading").fadeOut(), 1 == $("#map-canvas").length && r("map-canvas"), a(), ({
                itemSelector: ".item",
                masonry: {
                    gutter: 0,
                    columnWidth: ".grid-sizer"
                }
            }), $(window).scrollTop() > 0 ? $(".header").addClass("scrolled") : $(".header").removeClass("scrolled")
        }), f ? window.addEventListener("orientationchange", function() {
            t()
        }, !1) : $(window).resize(function() {
            t()
        }), $(window).scroll(function() {
            $(window).scrollTop() > 0 ? $(".header").addClass("scrolled") : $(".header").removeClass("scrolled")
        }), $(".swiper-arrow-left").on("click", function() {
            c["swiper-" + $(this).parent().attr("id")].swipePrev()
        }), $(".swiper-arrow-right").on("click", function() {
            c["swiper-" + $(this).parent().attr("id")].swipeNext()
        }), $(".cmn-toggle-switch").on("click", function() {
            return $(this).toggleClass("active"), $(".header").toggleClass("active"), $(".main-nav").slideToggle(), !1
        }), $(".play-btn").on("click", function() {
            var e = $(this).data("video");
            return $(this).siblings(".movie").show(), $(this).siblings(".movie").find("iframe").attr("src", e), !1
        }), $(".movie .close-button").on("click", function() {
            return $(this).parent(".movie").hide(), $(this).siblings("iframe").attr("src", "about:blank"), !1
        }), $(".video-bg").on("click", function() {
            var e = $(this).data("video");
            return $(this).parents(".fullheight").find("iframe").attr("src", e).show(), $(this).addClass(".active"), !1
        }), $(document).on("click", ".register-link", function() {
            return $(".register-popup").show("slow"), !1
        }), $(".search-link").on("click", function() {
            return $(this).siblings(".search-popup").show("slow"), !1
        }), $(".popup-close").on("click", function() {
            return $(this).parents(".custom-popup").hide("slow"), !1
        }), $(".conf-item").on({
            mouseenter: function() {
                $(this).find(".conf-autors").stop().slideToggle("slow")
            },
            mouseleave: function() {
                $(this).find(".conf-autors").stop().slideToggle("slow")
            }
        }), $(document).on({
            mouseenter: function() {
                var e = $(this).data("image"),
                    t = $(this).parents(".swiper-slide").find(".speaker-img");
                t.css({
                    "background-image": "url(" + e + ")"
                })
            },
            mouseleave: function() {
                var e = $(this).parents(".swiper-slide").find(".speaker-img"),
                    t = e.find("img").attr("src");
                e.css({
                    "background-image": "url(" + t + ")"
                })
            }
        }, ".speaker-change img"), $(".shedule-entry, .shedule-user").on({
            mouseenter: function() {
                $(this).parent(".shedule-block").addClass("active")
            },
            mouseleave: function() {
                $(this).parent(".shedule-block").removeClass("active")
            }
        }), $(".counters-block").length) {
        var m = $(".counters-block").data("finaldate");
        s(m), setInterval(function() {
            s(m)
        }, 1e3)
    }
    if ($(".ClassyCountdown").length) {
        var b = $("#countdown").data("style");
        if ("yellow" == b) var w = "#f3dd02";
        else if ("green" == b) var w = "#4cae51";
        else if ("red" == b) var w = "#f34135";
        else if ("dark" == b) var w = "#9d656d";
        else if ("blue" == b) var w = "#206ab0";
        else if ("orange" == b) var w = "#f60";
        else if ("purple" == b) var w = "#636";
        else if ("pink" == b) var w = "#ec659c";
        else if ("green-light" == b) var w = "#2bbab0";
        else if ("red-dark" == b) var w = "#861f49";
        else if ("blue-light" == b) var w = "#861f49";
        else if ("orchid" == b) var w = "#B565A7";
        else if ("pink-light" == b) var w = "#9933cc";
        else if ("princeton" == b) var w = "#ff9966";
        else if ("sandy" == b) var w = "#ff6666";
        else if ("rhodamine" == b) var w = "#cc0099";
        else var w = "#f3dd02";
        $("#countdown").ClassyCountdown({
            theme: "white",
            end: $.now() + 645600,
            color: "#0bbf47",
            style: {
                element: "",
                labels: !1,
                days: {
                    gauge: {
                        thickness: .05,
                        bgColor: "rgba(255,255,255,0)",
                        fgColor: w
                    }
                },
                hours: {
                    gauge: {
                        thickness: .05,
                        bgColor: "rgba(255,255,255,0)",
                        fgColor: w
                    }
                },
                minutes: {
                    gauge: {
                        thickness: .05,
                        bgColor: "rgba(255,255,255,0)",
                        fgColor: w
                    }
                },
                seconds: {
                    gauge: {
                        thickness: .05,
                        bgColor: "rgba(255,255,255,0)",
                        fgColor: w
                    }
                }
            }
        })
    }
    var C = 0;
    $(document).on("click", ".nav-tab-item", function() {
        var e = $(this);
        if (C || e.hasClass("active")) return !1;
        C = 1, e.closest(".nav-tab").find(".nav-tab-item").removeClass("active"), e.addClass("active");
        var a = e.parent().parent().find(".nav-tab-item").index(this);
        e.closest(".tab-wrapper").find(".tab-info:visible").fadeOut(500, function() {
            e.closest(".tab-wrapper").find(".tab-info").eq(a).fadeIn(500, function() {
                C = 0, t()
            })
        })
    });
    var y = function() {
            $('<div id="imagelightbox-loading"><div></div></div>').appendTo("body")
        },
        k = function() {
            $("#imagelightbox-loading").remove()
        },
        x = function(e) {
            $('<button type="button" id="imagelightbox-close" title="Close"></button>').appendTo("body").on("click touchend", function() {
                return $(this).remove(), e.quitImageLightbox(), !1
            })
        },
        I = function() {
            $("#imagelightbox-close").remove()
        },
        T = function() {
            $('<div id="imagelightbox-overlay"></div>').appendTo("body")
        },
        S = function() {
            $("#imagelightbox-overlay").remove()
        },
        F = function() {
            $("#imagelightbox-caption").remove()
        },
        L = function() {
            var e = $('a[href="' + $("#imagelightbox").attr("src") + '"] img').attr("alt");
            e.length > 0 && $('<div id="imagelightbox-caption">' + e + "</div>").appendTo("body")
        },
        A = function(e, t) {
            var a = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"><i class="fa fa-chevron-left"></i></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"><i class="fa fa-chevron-right"></i></button>');
            a.appendTo("body"), a.on("click touchend", function(a) {
                a.preventDefault();
                var i = $(this),
                    n = $(t + '[href="' + $("#imagelightbox").attr("src") + '"]'),
                    s = n.index(t);
                return i.hasClass("imagelightbox-arrow-left") ? (s -= 1, $(t).eq(s).length || (s = $(t).length)) : (s += 1, $(t).eq(s).length || (s = 0)), e.switchImageLightbox(s), !1
            })
        },
        M = function() {
            $(".imagelightbox-arrow").remove()
        },
        P = ".lightbox",
        _ = $(P).imageLightbox({
            quitOnDocClick: !1,
            onStart: function() {
                A(_, P), T(), x(_)
            },
            onEnd: function() {
                M(), F(), S(), I(), k()
            },
            onLoadStart: function() {
                F(), y()
            },
            onLoadEnd: function() {
                $(".imagelightbox-arrow").css("display", "block"), L(), k()
            }
        });
    $(".conf-button").on("click", function() {
        return $(".style-page").hasClass("slide-right") ? ($(".style-page").removeClass("slide-right"), $(".conf-button span").removeClass("act")) : ($(".style-page").addClass("slide-right"), $(".conf-button span").addClass("act")), !1
    }), $(".entry").on("click", function() {
        var e = $("body").attr("data-color"),
            t = $(this).attr("data-color");
        return $(this).hasClass("active") ? !1 : ($(this).parent().find(".active").removeClass("active"), $(this).addClass("active"), $("body").attr("data-color", t), $("img").each(function() {
            $(this).attr("src", $(this).attr("src").replace("_" + e, "_" + t))
        }), $("#map-canvas").attr("data-marker", $("#map-canvas").attr("data-marker").replace("_" + e, "_" + t)), $(".c-btn." + e).removeClass(e).addClass(t), $(".c-btn." + e + "-2").removeClass(e + "-2").addClass(t + "-2"), $(".c-btn.hv-" + e).removeClass("hv-" + e).addClass("hv-" + t), $(".c-btn.hv-" + e + "-t").removeClass("hv-" + e + "-t").addClass("hv-" + t + "-t"), "dark" == t && $(".price.style-2.center .c-btn").attr("class", "register-link c-btn b-50 hv-dark-o red dark"), "dark" == e && ($(".c-btn.black").removeClass("black").addClass(t), $(".c-btn.black-2").removeClass("black-2").addClass(t + "-2"), $(".custom-popup .c-btn").attr("class", "c-btn b-50 black hv-yellow-o")), $(".message-line .c-btn").attr("class", "register-link c-btn b-50 black hv-black-o"), void localStorage.setItem("color", t))
    })
});