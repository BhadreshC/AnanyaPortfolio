console.log("app js called")
d = document.querySelector(".js--overlay__inner")
console.log(d)

!(function (e) {
  function t(i) {
    if (a[i]) return a[i].exports;
    var r = (a[i] = {
      exports: {},
      id: i,
      loaded: !1,
    });
    return e[i].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
  }
  var a = {};
  return (t.m = e), (t.c = a), (t.p = "http://aroraananya.dev/assets/"), t(0);
})([
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    var r = a(1),
      n = i(r),
      s = a(2),
      o = (i(s), a(10)),
      l = i(o),
      p = document.querySelector(".js--overlay"),
      d = document.querySelector(".js--overlay__inner"),
      u = document.querySelectorAll(".js--overlay-trigger"),
      c = (document.querySelector(".js--overlay-close"), document.querySelector(".js--main")),
      m = "js--overlay-is-shown",
      f = document.querySelector(".js-category"),
      h = document.querySelector(".js-footer"),
      g = document.querySelector(".js-header"),
      v = function (e, t) {
        var a = t.querySelectorAll("img");
        document.querySelectorAll(".swiper-wrapper");
        return {
          width: a[0].clientWidth + "px",
          height: e.height + "px",
        };
      },
      w = function (e) {
        var t = e.slides[e.activeIndex],
          a = t.getAttribute("data-theme") || "light",
          i = t.getAttribute("data-category") || "uncategorized";
        c.classList.remove("theme--dark"),
          c.classList.remove("theme--light"),
          c.classList.add("theme--" + a),
          (f.innerHTML = i),
          (h.style.width = v(e, e.slides[e.activeIndex]).width);
      },
      y = function (e) {
        c.classList.remove("is-loading"), (h.style.width = v(e, e.slides[e.activeIndex]).width);
      },
      b = new n["default"](".swiper-container", {
        speed: 600,
        loop: !0,
        autoHeight: !0,
        keyboardControl: !0,
        mousewheelControl: !0,
        hashnav: !0,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        preloadImages: !0,
        onInit: w,
        onTransitionStart: w,
        onImagesReady: y,
      }),
      x = function () {
        console.log(g.offsetHeight),
          (d.style.height = g.offsetHeight + b.height + "px"),
          (d.style.width = v(b, b.slides[b.activeIndex]).width),
          (h.style.width = v(b, b.slides[b.activeIndex]).width);
      },
      T = function () {
        window.scrollTo(0, 1), (p.scrollTop = 0), x(), c.classList.toggle(m);
      };
    (window.onresize = function () {
      x();
    }),
      x(),
      Array.prototype.forEach.call(u, function (e, t) {
        e.addEventListener("click", T);
      }),
      (0, l["default"])(document.querySelectorAll(".js-lettering"));
  },
  function (e, t, a) {
    !(function () {
      "use strict";

      function e(e) {
        e.fn.swiper = function (t) {
          var i;
          return (
            e(this).each(function () {
              var e = new a(this, t);
              i || (i = e);
            }),
            i
          );
        };
      }
      var t,
        a = function (e, r) {
          function n(e) {
            return Math.floor(e);
          }

          function s() {
            b.autoplayTimeoutId = setTimeout(function () {
              b.params.loop
                ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b))
                : b.isEnd
                ? r.autoplayStopOnLast
                  ? b.stopAutoplay()
                  : (b._slideTo(0), b.emit("onAutoplay", b))
                : (b._slideNext(), b.emit("onAutoplay", b));
            }, b.params.autoplay);
          }

          function o(e, a) {
            var i = t(e.target);
            if (!i.is(a))
              if ("string" == typeof a) i = i.parents(a);
              else if (a.nodeType) {
                var r;
                return (
                  i.parents().each(function (e, t) {
                    t === a && (r = a);
                  }),
                  r ? a : void 0
                );
              }
            if (0 !== i.length) return i[0];
          }

          function l(e, t) {
            t = t || {};
            var a = window.MutationObserver || window.WebkitMutationObserver,
              i = new a(function (e) {
                e.forEach(function (e) {
                  b.onResize(!0), b.emit("onObserverUpdate", b, e);
                });
              });
            i.observe(e, {
              attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
              childList: "undefined" == typeof t.childList ? !0 : t.childList,
              characterData: "undefined" == typeof t.characterData ? !0 : t.characterData,
            }),
              b.observers.push(i);
          }

          function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!b.params.allowSwipeToNext && ((b.isHorizontal() && 39 === t) || (!b.isHorizontal() && 40 === t)))
              return !1;
            if (!b.params.allowSwipeToPrev && ((b.isHorizontal() && 37 === t) || (!b.isHorizontal() && 38 === t)))
              return !1;
            if (
              !(
                e.shiftKey ||
                e.altKey ||
                e.ctrlKey ||
                e.metaKey ||
                (document.activeElement &&
                  document.activeElement.nodeName &&
                  ("input" === document.activeElement.nodeName.toLowerCase() ||
                    "textarea" === document.activeElement.nodeName.toLowerCase()))
              )
            ) {
              if (37 === t || 39 === t || 38 === t || 40 === t) {
                var a = !1;
                if (
                  b.container.parents(".swiper-slide").length > 0 &&
                  0 === b.container.parents(".swiper-slide-active").length
                )
                  return;
                var i = {
                    left: window.pageXOffset,
                    top: window.pageYOffset,
                  },
                  r = window.innerWidth,
                  n = window.innerHeight,
                  s = b.container.offset();
                b.rtl && (s.left = s.left - b.container[0].scrollLeft);
                for (
                  var o = [
                      [s.left, s.top],
                      [s.left + b.width, s.top],
                      [s.left, s.top + b.height],
                      [s.left + b.width, s.top + b.height],
                    ],
                    l = 0;
                  l < o.length;
                  l++
                ) {
                  var p = o[l];
                  p[0] >= i.left && p[0] <= i.left + r && p[1] >= i.top && p[1] <= i.top + n && (a = !0);
                }
                if (!a) return;
              }
              b.isHorizontal()
                ? ((37 !== t && 39 !== t) || (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
                  ((39 === t && !b.rtl) || (37 === t && b.rtl)) && b.slideNext(),
                  ((37 === t && !b.rtl) || (39 === t && b.rtl)) && b.slidePrev())
                : ((38 !== t && 40 !== t) || (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
                  40 === t && b.slideNext(),
                  38 === t && b.slidePrev());
            }
          }

          function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = b.mousewheel.event,
              a = 0,
              i = b.rtl ? -1 : 1;
            if ("mousewheel" === t)
              if (b.params.mousewheelForceToAxis)
                if (b.isHorizontal()) {
                  if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                  a = e.wheelDeltaX * i;
                } else {
                  if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                  a = e.wheelDeltaY;
                }
              else a = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * i : -e.wheelDeltaY;
            else if ("DOMMouseScroll" === t) a = -e.detail;
            else if ("wheel" === t)
              if (b.params.mousewheelForceToAxis)
                if (b.isHorizontal()) {
                  if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                  a = -e.deltaX * i;
                } else {
                  if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                  a = -e.deltaY;
                }
              else a = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * i : -e.deltaY;
            if (0 !== a) {
              if ((b.params.mousewheelInvert && (a = -a), b.params.freeMode)) {
                var r = b.getWrapperTranslate() + a * b.params.mousewheelSensitivity,
                  n = b.isBeginning,
                  s = b.isEnd;
                if (
                  (r >= b.minTranslate() && (r = b.minTranslate()),
                  r <= b.maxTranslate() && (r = b.maxTranslate()),
                  b.setWrapperTransition(0),
                  b.setWrapperTranslate(r),
                  b.updateProgress(),
                  b.updateActiveIndex(),
                  ((!n && b.isBeginning) || (!s && b.isEnd)) && b.updateClasses(),
                  b.params.freeModeSticky
                    ? (clearTimeout(b.mousewheel.timeout),
                      (b.mousewheel.timeout = setTimeout(function () {
                        b.slideReset();
                      }, 300)))
                    : b.params.lazyLoading && b.lazy && b.lazy.load(),
                  0 === r || r === b.maxTranslate())
                )
                  return;
              } else {
                if (new window.Date().getTime() - b.mousewheel.lastScrollTime > 60)
                  if (0 > a)
                    if ((b.isEnd && !b.params.loop) || b.animating) {
                      if (b.params.mousewheelReleaseOnEdges) return !0;
                    } else b.slideNext();
                  else if ((b.isBeginning && !b.params.loop) || b.animating) {
                    if (b.params.mousewheelReleaseOnEdges) return !0;
                  } else b.slidePrev();
                b.mousewheel.lastScrollTime = new window.Date().getTime();
              }
              return (
                b.params.autoplay && b.stopAutoplay(), e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1
              );
            }
          }

          function u(e, a) {
            e = t(e);
            var i,
              r,
              n,
              s = b.rtl ? -1 : 1;
            (i = e.attr("data-swiper-parallax") || "0"),
              (r = e.attr("data-swiper-parallax-x")),
              (n = e.attr("data-swiper-parallax-y")),
              r || n
                ? ((r = r || "0"), (n = n || "0"))
                : b.isHorizontal()
                ? ((r = i), (n = "0"))
                : ((n = i), (r = "0")),
              (r = r.indexOf("%") >= 0 ? parseInt(r, 10) * a * s + "%" : r * a * s + "px"),
              (n = n.indexOf("%") >= 0 ? parseInt(n, 10) * a + "%" : n * a + "px"),
              e.transform("translate3d(" + r + ", " + n + ",0px)");
          }

          function c(e) {
            return (
              0 !== e.indexOf("on") &&
                (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
              e
            );
          }
          if (!(this instanceof a)) return new a(e, r);
          var m = {
              direction: "horizontal",
              touchEventsTarget: "container",
              initialSlide: 0,
              speed: 300,
              autoplay: !1,
              autoplayDisableOnInteraction: !0,
              autoplayStopOnLast: !1,
              iOSEdgeSwipeDetection: !1,
              iOSEdgeSwipeThreshold: 20,
              freeMode: !1,
              freeModeMomentum: !0,
              freeModeMomentumRatio: 1,
              freeModeMomentumBounce: !0,
              freeModeMomentumBounceRatio: 1,
              freeModeSticky: !1,
              freeModeMinimumVelocity: 0.02,
              autoHeight: !1,
              setWrapperSize: !1,
              virtualTranslate: !1,
              effect: "slide",
              coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0,
              },
              flip: {
                slideShadows: !0,
                limitRotation: !0,
              },
              cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
              fade: {
                crossFade: !1,
              },
              parallax: !1,
              scrollbar: null,
              scrollbarHide: !0,
              scrollbarDraggable: !1,
              scrollbarSnapOnRelease: !1,
              keyboardControl: !1,
              mousewheelControl: !1,
              mousewheelReleaseOnEdges: !1,
              mousewheelInvert: !1,
              mousewheelForceToAxis: !1,
              mousewheelSensitivity: 1,
              hashnav: !1,
              breakpoints: void 0,
              spaceBetween: 0,
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerColumnFill: "column",
              slidesPerGroup: 1,
              centeredSlides: !1,
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0,
              roundLengths: !1,
              touchRatio: 1,
              touchAngle: 45,
              simulateTouch: !0,
              shortSwipes: !0,
              longSwipes: !0,
              longSwipesRatio: 0.5,
              longSwipesMs: 300,
              followFinger: !0,
              onlyExternal: !1,
              threshold: 0,
              touchMoveStopPropagation: !0,
              uniqueNavElements: !0,
              pagination: null,
              paginationElement: "span",
              paginationClickable: !1,
              paginationHide: !1,
              paginationBulletRender: null,
              paginationProgressRender: null,
              paginationFractionRender: null,
              paginationCustomRender: null,
              paginationType: "bullets",
              resistance: !0,
              resistanceRatio: 0.85,
              nextButton: null,
              prevButton: null,
              watchSlidesProgress: !1,
              watchSlidesVisibility: !1,
              grabCursor: !1,
              preventClicks: !0,
              preventClicksPropagation: !0,
              slideToClickedSlide: !1,
              lazyLoading: !1,
              lazyLoadingInPrevNext: !1,
              lazyLoadingInPrevNextAmount: 1,
              lazyLoadingOnTransitionStart: !1,
              preloadImages: !0,
              updateOnImagesReady: !0,
              loop: !1,
              loopAdditionalSlides: 0,
              loopedSlides: null,
              control: void 0,
              controlInverse: !1,
              controlBy: "slide",
              allowSwipeToPrev: !0,
              allowSwipeToNext: !0,
              swipeHandler: null,
              noSwiping: !0,
              noSwipingClass: "swiper-no-swiping",
              slideClass: "swiper-slide",
              slideActiveClass: "swiper-slide-active",
              slideVisibleClass: "swiper-slide-visible",
              slideDuplicateClass: "swiper-slide-duplicate",
              slideNextClass: "swiper-slide-next",
              slidePrevClass: "swiper-slide-prev",
              wrapperClass: "swiper-wrapper",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              buttonDisabledClass: "swiper-button-disabled",
              paginationCurrentClass: "swiper-pagination-current",
              paginationTotalClass: "swiper-pagination-total",
              paginationHiddenClass: "swiper-pagination-hidden",
              paginationProgressbarClass: "swiper-pagination-progressbar",
              observer: !1,
              observeParents: !1,
              a11y: !1,
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
              runCallbacksOnInit: !0,
            },
            f = r && r.virtualTranslate;
          r = r || {};
          var h = {};
          for (var g in r)
            if (
              "object" != typeof r[g] ||
              null === r[g] ||
              r[g].nodeType ||
              r[g] === window ||
              r[g] === document ||
              ("undefined" != typeof i && r[g] instanceof i) ||
              ("undefined" != typeof jQuery && r[g] instanceof jQuery)
            )
              h[g] = r[g];
            else {
              h[g] = {};
              for (var v in r[g]) h[g][v] = r[g][v];
            }
          for (var w in m)
            if ("undefined" == typeof r[w]) r[w] = m[w];
            else if ("object" == typeof r[w]) for (var y in m[w]) "undefined" == typeof r[w][y] && (r[w][y] = m[w][y]);
          var b = this;
          if (
            ((b.params = r),
            (b.originalParams = h),
            (b.classNames = []),
            "undefined" != typeof t && "undefined" != typeof i && (t = i),
            ("undefined" != typeof t ||
              (t = "undefined" == typeof i ? window.Dom7 || window.Zepto || window.jQuery : i)) &&
              ((b.$ = t),
              (b.currentBreakpoint = void 0),
              (b.getActiveBreakpoint = function () {
                if (!b.params.breakpoints) return !1;
                var e,
                  t = !1,
                  a = [];
                for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && a.push(e);
                a.sort(function (e, t) {
                  return parseInt(e, 10) > parseInt(t, 10);
                });
                for (var i = 0; i < a.length; i++) (e = a[i]), e >= window.innerWidth && !t && (t = e);
                return t || "max";
              }),
              (b.setBreakpoint = function () {
                var e = b.getActiveBreakpoint();
                if (e && b.currentBreakpoint !== e) {
                  var t = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams,
                    a = b.params.loop && t.slidesPerView !== b.params.slidesPerView;
                  for (var i in t) b.params[i] = t[i];
                  (b.currentBreakpoint = e), a && b.destroyLoop && b.reLoop(!0);
                }
              }),
              b.params.breakpoints && b.setBreakpoint(),
              (b.container = t(e)),
              0 !== b.container.length))
          ) {
            if (b.container.length > 1) {
              var x = [];
              return (
                b.container.each(function () {
                  x.push(new a(this, r));
                }),
                x
              );
            }
            (b.container[0].swiper = b),
              b.container.data("swiper", b),
              b.classNames.push("swiper-container-" + b.params.direction),
              b.params.freeMode && b.classNames.push("swiper-container-free-mode"),
              b.support.flexbox || (b.classNames.push("swiper-container-no-flexbox"), (b.params.slidesPerColumn = 1)),
              b.params.autoHeight && b.classNames.push("swiper-container-autoheight"),
              (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0),
              ["cube", "coverflow", "flip"].indexOf(b.params.effect) >= 0 &&
                (b.support.transforms3d
                  ? ((b.params.watchSlidesProgress = !0), b.classNames.push("swiper-container-3d"))
                  : (b.params.effect = "slide")),
              "slide" !== b.params.effect && b.classNames.push("swiper-container-" + b.params.effect),
              "cube" === b.params.effect &&
                ((b.params.resistanceRatio = 0),
                (b.params.slidesPerView = 1),
                (b.params.slidesPerColumn = 1),
                (b.params.slidesPerGroup = 1),
                (b.params.centeredSlides = !1),
                (b.params.spaceBetween = 0),
                (b.params.virtualTranslate = !0),
                (b.params.setWrapperSize = !1)),
              ("fade" !== b.params.effect && "flip" !== b.params.effect) ||
                ((b.params.slidesPerView = 1),
                (b.params.slidesPerColumn = 1),
                (b.params.slidesPerGroup = 1),
                (b.params.watchSlidesProgress = !0),
                (b.params.spaceBetween = 0),
                (b.params.setWrapperSize = !1),
                "undefined" == typeof f && (b.params.virtualTranslate = !0)),
              b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1),
              (b.wrapper = b.container.children("." + b.params.wrapperClass)),
              b.params.pagination &&
                ((b.paginationContainer = t(b.params.pagination)),
                b.params.uniqueNavElements &&
                  "string" == typeof b.params.pagination &&
                  b.paginationContainer.length > 1 &&
                  1 === b.container.find(b.params.pagination).length &&
                  (b.paginationContainer = b.container.find(b.params.pagination)),
                "bullets" === b.params.paginationType && b.params.paginationClickable
                  ? b.paginationContainer.addClass("swiper-pagination-clickable")
                  : (b.params.paginationClickable = !1),
                b.paginationContainer.addClass("swiper-pagination-" + b.params.paginationType)),
              (b.params.nextButton || b.params.prevButton) &&
                (b.params.nextButton &&
                  ((b.nextButton = t(b.params.nextButton)),
                  b.params.uniqueNavElements &&
                    "string" == typeof b.params.nextButton &&
                    b.nextButton.length > 1 &&
                    1 === b.container.find(b.params.nextButton).length &&
                    (b.nextButton = b.container.find(b.params.nextButton))),
                b.params.prevButton &&
                  ((b.prevButton = t(b.params.prevButton)),
                  b.params.uniqueNavElements &&
                    "string" == typeof b.params.prevButton &&
                    b.prevButton.length > 1 &&
                    1 === b.container.find(b.params.prevButton).length &&
                    (b.prevButton = b.container.find(b.params.prevButton)))),
              (b.isHorizontal = function () {
                return "horizontal" === b.params.direction;
              }),
              (b.rtl =
                b.isHorizontal() &&
                ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction"))),
              b.rtl && b.classNames.push("swiper-container-rtl"),
              b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")),
              b.params.slidesPerColumn > 1 && b.classNames.push("swiper-container-multirow"),
              b.device.android && b.classNames.push("swiper-container-android"),
              b.container.addClass(b.classNames.join(" ")),
              (b.translate = 0),
              (b.progress = 0),
              (b.velocity = 0),
              (b.lockSwipeToNext = function () {
                b.params.allowSwipeToNext = !1;
              }),
              (b.lockSwipeToPrev = function () {
                b.params.allowSwipeToPrev = !1;
              }),
              (b.lockSwipes = function () {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1;
              }),
              (b.unlockSwipeToNext = function () {
                b.params.allowSwipeToNext = !0;
              }),
              (b.unlockSwipeToPrev = function () {
                b.params.allowSwipeToPrev = !0;
              }),
              (b.unlockSwipes = function () {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0;
              }),
              b.params.grabCursor &&
                ((b.container[0].style.cursor = "move"),
                (b.container[0].style.cursor = "-webkit-grab"),
                (b.container[0].style.cursor = "-moz-grab"),
                (b.container[0].style.cursor = "grab")),
              (b.imagesToLoad = []),
              (b.imagesLoaded = 0),
              (b.loadImage = function (e, t, a, i, r) {
                function n() {
                  r && r();
                }
                var s;
                e.complete && i
                  ? n()
                  : t
                  ? ((s = new window.Image()), (s.onload = n), (s.onerror = n), a && (s.srcset = a), t && (s.src = t))
                  : n();
              }),
              (b.preloadImages = function () {
                function e() {
                  "undefined" != typeof b &&
                    null !== b &&
                    (void 0 !== b.imagesLoaded && b.imagesLoaded++,
                    b.imagesLoaded === b.imagesToLoad.length &&
                      (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)));
                }
                b.imagesToLoad = b.container.find("img");
                for (var t = 0; t < b.imagesToLoad.length; t++)
                  b.loadImage(
                    b.imagesToLoad[t],
                    b.imagesToLoad[t].currentSrc || b.imagesToLoad[t].getAttribute("src"),
                    b.imagesToLoad[t].srcset || b.imagesToLoad[t].getAttribute("srcset"),
                    !0,
                    e
                  );
              }),
              (b.autoplayTimeoutId = void 0),
              (b.autoplaying = !1),
              (b.autoplayPaused = !1),
              (b.startAutoplay = function () {
                return "undefined" != typeof b.autoplayTimeoutId
                  ? !1
                  : b.params.autoplay
                  ? b.autoplaying
                    ? !1
                    : ((b.autoplaying = !0), b.emit("onAutoplayStart", b), void s())
                  : !1;
              }),
              (b.stopAutoplay = function (e) {
                b.autoplayTimeoutId &&
                  (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId),
                  (b.autoplaying = !1),
                  (b.autoplayTimeoutId = void 0),
                  b.emit("onAutoplayStop", b));
              }),
              (b.pauseAutoplay = function (e) {
                b.autoplayPaused ||
                  (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId),
                  (b.autoplayPaused = !0),
                  0 === e
                    ? ((b.autoplayPaused = !1), s())
                    : b.wrapper.transitionEnd(function () {
                        b && ((b.autoplayPaused = !1), b.autoplaying ? s() : b.stopAutoplay());
                      }));
              }),
              (b.minTranslate = function () {
                return -b.snapGrid[0];
              }),
              (b.maxTranslate = function () {
                return -b.snapGrid[b.snapGrid.length - 1];
              }),
              (b.updateAutoHeight = function () {
                var e = b.slides.eq(b.activeIndex)[0];
                if ("undefined" != typeof e) {
                  var t = e.offsetHeight;
                  t && b.wrapper.css("height", t + "px");
                }
              }),
              (b.updateContainerSize = function () {
                var e, t;
                (e = "undefined" != typeof b.params.width ? b.params.width : b.container[0].clientWidth),
                  (t = "undefined" != typeof b.params.height ? b.params.height : b.container[0].clientHeight),
                  (0 === e && b.isHorizontal()) ||
                    (0 === t && !b.isHorizontal()) ||
                    ((e =
                      e -
                      parseInt(b.container.css("padding-left"), 10) -
                      parseInt(b.container.css("padding-right"), 10)),
                    (t =
                      t -
                      parseInt(b.container.css("padding-top"), 10) -
                      parseInt(b.container.css("padding-bottom"), 10)),
                    (b.width = e),
                    (b.height = t),
                    (b.size = b.isHorizontal() ? b.width : b.height));
              }),
              (b.updateSlidesSize = function () {
                (b.slides = b.wrapper.children("." + b.params.slideClass)),
                  (b.snapGrid = []),
                  (b.slidesGrid = []),
                  (b.slidesSizesGrid = []);
                var e,
                  t = b.params.spaceBetween,
                  a = -b.params.slidesOffsetBefore,
                  i = 0,
                  r = 0;
                if ("undefined" != typeof b.size) {
                  "string" == typeof t && t.indexOf("%") >= 0 && (t = (parseFloat(t.replace("%", "")) / 100) * b.size),
                    (b.virtualSize = -t),
                    b.rtl
                      ? b.slides.css({
                          marginLeft: "",
                          marginTop: "",
                        })
                      : b.slides.css({
                          marginRight: "",
                          marginBottom: "",
                        });
                  var s;
                  b.params.slidesPerColumn > 1 &&
                    ((s =
                      Math.floor(b.slides.length / b.params.slidesPerColumn) ===
                      b.slides.length / b.params.slidesPerColumn
                        ? b.slides.length
                        : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn),
                    "auto" !== b.params.slidesPerView &&
                      "row" === b.params.slidesPerColumnFill &&
                      (s = Math.max(s, b.params.slidesPerView * b.params.slidesPerColumn)));
                  var o,
                    l = b.params.slidesPerColumn,
                    p = s / l,
                    d = p - (b.params.slidesPerColumn * p - b.slides.length);
                  for (e = 0; e < b.slides.length; e++) {
                    o = 0;
                    var u = b.slides.eq(e);
                    if (b.params.slidesPerColumn > 1) {
                      var c, m, f;
                      "column" === b.params.slidesPerColumnFill
                        ? ((m = Math.floor(e / l)),
                          (f = e - m * l),
                          (m > d || (m === d && f === l - 1)) && ++f >= l && ((f = 0), m++),
                          (c = m + (f * s) / l),
                          u.css({
                            "-webkit-box-ordinal-group": c,
                            "-moz-box-ordinal-group": c,
                            "-ms-flex-order": c,
                            "-webkit-order": c,
                            order: c,
                          }))
                        : ((f = Math.floor(e / p)), (m = e - f * p)),
                        u
                          .css({
                            "margin-top": 0 !== f && b.params.spaceBetween && b.params.spaceBetween + "px",
                          })
                          .attr("data-swiper-column", m)
                          .attr("data-swiper-row", f);
                    }
                    "none" !== u.css("display") &&
                      ("auto" === b.params.slidesPerView
                        ? ((o = b.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0)),
                          b.params.roundLengths && (o = n(o)))
                        : ((o = (b.size - (b.params.slidesPerView - 1) * t) / b.params.slidesPerView),
                          b.params.roundLengths && (o = n(o)),
                          b.isHorizontal()
                            ? (b.slides[e].style.width = o + "px")
                            : (b.slides[e].style.height = o + "px")),
                      (b.slides[e].swiperSlideSize = o),
                      b.slidesSizesGrid.push(o),
                      b.params.centeredSlides
                        ? ((a = a + o / 2 + i / 2 + t),
                          0 === e && (a = a - b.size / 2 - t),
                          Math.abs(a) < 0.001 && (a = 0),
                          r % b.params.slidesPerGroup === 0 && b.snapGrid.push(a),
                          b.slidesGrid.push(a))
                        : (r % b.params.slidesPerGroup === 0 && b.snapGrid.push(a),
                          b.slidesGrid.push(a),
                          (a = a + o + t)),
                      (b.virtualSize += o + t),
                      (i = o),
                      r++);
                  }
                  b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;
                  var h;
                  if (
                    (b.rtl &&
                      b.wrongRTL &&
                      ("slide" === b.params.effect || "coverflow" === b.params.effect) &&
                      b.wrapper.css({
                        width: b.virtualSize + b.params.spaceBetween + "px",
                      }),
                    (b.support.flexbox && !b.params.setWrapperSize) ||
                      (b.isHorizontal()
                        ? b.wrapper.css({
                            width: b.virtualSize + b.params.spaceBetween + "px",
                          })
                        : b.wrapper.css({
                            height: b.virtualSize + b.params.spaceBetween + "px",
                          })),
                    b.params.slidesPerColumn > 1 &&
                      ((b.virtualSize = (o + b.params.spaceBetween) * s),
                      (b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween),
                      b.wrapper.css({
                        width: b.virtualSize + b.params.spaceBetween + "px",
                      }),
                      b.params.centeredSlides))
                  ) {
                    for (h = [], e = 0; e < b.snapGrid.length; e++)
                      b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && h.push(b.snapGrid[e]);
                    b.snapGrid = h;
                  }
                  if (!b.params.centeredSlides) {
                    for (h = [], e = 0; e < b.snapGrid.length; e++)
                      b.snapGrid[e] <= b.virtualSize - b.size && h.push(b.snapGrid[e]);
                    (b.snapGrid = h),
                      Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) > 1 &&
                        b.snapGrid.push(b.virtualSize - b.size);
                  }
                  0 === b.snapGrid.length && (b.snapGrid = [0]),
                    0 !== b.params.spaceBetween &&
                      (b.isHorizontal()
                        ? b.rtl
                          ? b.slides.css({
                              marginLeft: t + "px",
                            })
                          : b.slides.css({
                              marginRight: t + "px",
                            })
                        : b.slides.css({
                            marginBottom: t + "px",
                          })),
                    b.params.watchSlidesProgress && b.updateSlidesOffset();
                }
              }),
              (b.updateSlidesOffset = function () {
                for (var e = 0; e < b.slides.length; e++)
                  b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop;
              }),
              (b.updateSlidesProgress = function (e) {
                if (("undefined" == typeof e && (e = b.translate || 0), 0 !== b.slides.length)) {
                  "undefined" == typeof b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                  var t = -e;
                  b.rtl && (t = e), b.slides.removeClass(b.params.slideVisibleClass);
                  for (var a = 0; a < b.slides.length; a++) {
                    var i = b.slides[a],
                      r = (t - i.swiperSlideOffset) / (i.swiperSlideSize + b.params.spaceBetween);
                    if (b.params.watchSlidesVisibility) {
                      var n = -(t - i.swiperSlideOffset),
                        s = n + b.slidesSizesGrid[a],
                        o = (n >= 0 && n < b.size) || (s > 0 && s <= b.size) || (0 >= n && s >= b.size);
                      o && b.slides.eq(a).addClass(b.params.slideVisibleClass);
                    }
                    i.progress = b.rtl ? -r : r;
                  }
                }
              }),
              (b.updateProgress = function (e) {
                "undefined" == typeof e && (e = b.translate || 0);
                var t = b.maxTranslate() - b.minTranslate(),
                  a = b.isBeginning,
                  i = b.isEnd;
                0 === t
                  ? ((b.progress = 0), (b.isBeginning = b.isEnd = !0))
                  : ((b.progress = (e - b.minTranslate()) / t),
                    (b.isBeginning = b.progress <= 0),
                    (b.isEnd = b.progress >= 1)),
                  b.isBeginning && !a && b.emit("onReachBeginning", b),
                  b.isEnd && !i && b.emit("onReachEnd", b),
                  b.params.watchSlidesProgress && b.updateSlidesProgress(e),
                  b.emit("onProgress", b, b.progress);
              }),
              (b.updateActiveIndex = function () {
                var e,
                  t,
                  a,
                  i = b.rtl ? b.translate : -b.translate;
                for (t = 0; t < b.slidesGrid.length; t++)
                  "undefined" != typeof b.slidesGrid[t + 1]
                    ? i >= b.slidesGrid[t] && i < b.slidesGrid[t + 1] - (b.slidesGrid[t + 1] - b.slidesGrid[t]) / 2
                      ? (e = t)
                      : i >= b.slidesGrid[t] && i < b.slidesGrid[t + 1] && (e = t + 1)
                    : i >= b.slidesGrid[t] && (e = t);
                (0 > e || "undefined" == typeof e) && (e = 0),
                  (a = Math.floor(e / b.params.slidesPerGroup)),
                  a >= b.snapGrid.length && (a = b.snapGrid.length - 1),
                  e !== b.activeIndex &&
                    ((b.snapIndex = a), (b.previousIndex = b.activeIndex), (b.activeIndex = e), b.updateClasses());
              }),
              (b.updateClasses = function () {
                b.slides.removeClass(
                  b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass
                );
                var e = b.slides.eq(b.activeIndex);
                e.addClass(b.params.slideActiveClass);
                var a = e.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
                b.params.loop && 0 === a.length && b.slides.eq(0).addClass(b.params.slideNextClass);
                var i = e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
                if (
                  (b.params.loop && 0 === i.length && b.slides.eq(-1).addClass(b.params.slidePrevClass),
                  b.paginationContainer && b.paginationContainer.length > 0)
                ) {
                  var r,
                    n = b.params.loop
                      ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup)
                      : b.snapGrid.length;
                  if (
                    (b.params.loop
                      ? ((r = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup)),
                        r > b.slides.length - 1 - 2 * b.loopedSlides && (r -= b.slides.length - 2 * b.loopedSlides),
                        r > n - 1 && (r -= n),
                        0 > r && "bullets" !== b.params.paginationType && (r = n + r))
                      : (r = "undefined" != typeof b.snapIndex ? b.snapIndex : b.activeIndex || 0),
                    "bullets" === b.params.paginationType &&
                      b.bullets &&
                      b.bullets.length > 0 &&
                      (b.bullets.removeClass(b.params.bulletActiveClass),
                      b.paginationContainer.length > 1
                        ? b.bullets.each(function () {
                            t(this).index() === r && t(this).addClass(b.params.bulletActiveClass);
                          })
                        : b.bullets.eq(r).addClass(b.params.bulletActiveClass)),
                    "fraction" === b.params.paginationType &&
                      (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(r + 1),
                      b.paginationContainer.find("." + b.params.paginationTotalClass).text(n)),
                    "progress" === b.params.paginationType)
                  ) {
                    var s = (r + 1) / n,
                      o = s,
                      l = 1;
                    b.isHorizontal() || ((l = s), (o = 1)),
                      b.paginationContainer
                        .find("." + b.params.paginationProgressbarClass)
                        .transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")")
                        .transition(b.params.speed);
                  }
                  "custom" === b.params.paginationType &&
                    b.params.paginationCustomRender &&
                    (b.paginationContainer.html(b.params.paginationCustomRender(b, r + 1, n)),
                    b.emit("onPaginationRendered", b, b.paginationContainer[0]));
                }
                b.params.loop ||
                  (b.params.prevButton &&
                    b.prevButton &&
                    b.prevButton.length > 0 &&
                    (b.isBeginning
                      ? (b.prevButton.addClass(b.params.buttonDisabledClass),
                        b.params.a11y && b.a11y && b.a11y.disable(b.prevButton))
                      : (b.prevButton.removeClass(b.params.buttonDisabledClass),
                        b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))),
                  b.params.nextButton &&
                    b.nextButton &&
                    b.nextButton.length > 0 &&
                    (b.isEnd
                      ? (b.nextButton.addClass(b.params.buttonDisabledClass),
                        b.params.a11y && b.a11y && b.a11y.disable(b.nextButton))
                      : (b.nextButton.removeClass(b.params.buttonDisabledClass),
                        b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))));
              }),
              (b.updatePagination = function () {
                if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
                  var e = "";
                  if ("bullets" === b.params.paginationType) {
                    for (
                      var t = b.params.loop
                          ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup)
                          : b.snapGrid.length,
                        a = 0;
                      t > a;
                      a++
                    )
                      e += b.params.paginationBulletRender
                        ? b.params.paginationBulletRender(a, b.params.bulletClass)
                        : "<" +
                          b.params.paginationElement +
                          ' class="' +
                          b.params.bulletClass +
                          '"></' +
                          b.params.paginationElement +
                          ">";
                    b.paginationContainer.html(e),
                      (b.bullets = b.paginationContainer.find("." + b.params.bulletClass)),
                      b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination();
                  }
                  "fraction" === b.params.paginationType &&
                    ((e = b.params.paginationFractionRender
                      ? b.params.paginationFractionRender(
                          b,
                          b.params.paginationCurrentClass,
                          b.params.paginationTotalClass
                        )
                      : '<span class="' +
                        b.params.paginationCurrentClass +
                        '"></span> / <span class="' +
                        b.params.paginationTotalClass +
                        '"></span>'),
                    b.paginationContainer.html(e)),
                    "progress" === b.params.paginationType &&
                      ((e = b.params.paginationProgressRender
                        ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass)
                        : '<span class="' + b.params.paginationProgressbarClass + '"></span>'),
                      b.paginationContainer.html(e)),
                    "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0]);
                }
              }),
              (b.update = function (e) {
                function t() {
                  (i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate())),
                    b.setWrapperTranslate(i),
                    b.updateActiveIndex(),
                    b.updateClasses();
                }
                if (
                  (b.updateContainerSize(),
                  b.updateSlidesSize(),
                  b.updateProgress(),
                  b.updatePagination(),
                  b.updateClasses(),
                  b.params.scrollbar && b.scrollbar && b.scrollbar.set(),
                  e)
                ) {
                  var a, i;
                  b.controller && b.controller.spline && (b.controller.spline = void 0),
                    b.params.freeMode
                      ? (t(), b.params.autoHeight && b.updateAutoHeight())
                      : ((a =
                          ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) &&
                          b.isEnd &&
                          !b.params.centeredSlides
                            ? b.slideTo(b.slides.length - 1, 0, !1, !0)
                            : b.slideTo(b.activeIndex, 0, !1, !0)),
                        a || t());
                } else b.params.autoHeight && b.updateAutoHeight();
              }),
              (b.onResize = function (e) {
                b.params.breakpoints && b.setBreakpoint();
                var t = b.params.allowSwipeToPrev,
                  a = b.params.allowSwipeToNext;
                (b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0),
                  b.updateContainerSize(),
                  b.updateSlidesSize(),
                  ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(),
                  b.params.scrollbar && b.scrollbar && b.scrollbar.set(),
                  b.controller && b.controller.spline && (b.controller.spline = void 0);
                var i = !1;
                if (b.params.freeMode) {
                  var r = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                  b.setWrapperTranslate(r),
                    b.updateActiveIndex(),
                    b.updateClasses(),
                    b.params.autoHeight && b.updateAutoHeight();
                } else
                  b.updateClasses(),
                    (i =
                      ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) &&
                      b.isEnd &&
                      !b.params.centeredSlides
                        ? b.slideTo(b.slides.length - 1, 0, !1, !0)
                        : b.slideTo(b.activeIndex, 0, !1, !0));
                b.params.lazyLoading && !i && b.lazy && b.lazy.load(),
                  (b.params.allowSwipeToPrev = t),
                  (b.params.allowSwipeToNext = a);
              });
            var T = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled
              ? (T = ["pointerdown", "pointermove", "pointerup"])
              : window.navigator.msPointerEnabled && (T = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
              (b.touchEvents = {
                start: b.support.touch || !b.params.simulateTouch ? "touchstart" : T[0],
                move: b.support.touch || !b.params.simulateTouch ? "touchmove" : T[1],
                end: b.support.touch || !b.params.simulateTouch ? "touchend" : T[2],
              }),
              (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) &&
                ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass(
                  "swiper-wp8-" + b.params.direction
                ),
              (b.initEvents = function (e) {
                var t = e ? "off" : "on",
                  a = e ? "removeEventListener" : "addEventListener",
                  i = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0],
                  n = b.support.touch ? i : document,
                  s = !!b.params.nested;
                b.browser.ie
                  ? (i[a](b.touchEvents.start, b.onTouchStart, !1),
                    n[a](b.touchEvents.move, b.onTouchMove, s),
                    n[a](b.touchEvents.end, b.onTouchEnd, !1))
                  : (b.support.touch &&
                      (i[a](b.touchEvents.start, b.onTouchStart, !1),
                      i[a](b.touchEvents.move, b.onTouchMove, s),
                      i[a](b.touchEvents.end, b.onTouchEnd, !1)),
                    !r.simulateTouch ||
                      b.device.ios ||
                      b.device.android ||
                      (i[a]("mousedown", b.onTouchStart, !1),
                      document[a]("mousemove", b.onTouchMove, s),
                      document[a]("mouseup", b.onTouchEnd, !1))),
                  window[a]("resize", b.onResize),
                  b.params.nextButton &&
                    b.nextButton &&
                    b.nextButton.length > 0 &&
                    (b.nextButton[t]("click", b.onClickNext),
                    b.params.a11y && b.a11y && b.nextButton[t]("keydown", b.a11y.onEnterKey)),
                  b.params.prevButton &&
                    b.prevButton &&
                    b.prevButton.length > 0 &&
                    (b.prevButton[t]("click", b.onClickPrev),
                    b.params.a11y && b.a11y && b.prevButton[t]("keydown", b.a11y.onEnterKey)),
                  b.params.pagination &&
                    b.params.paginationClickable &&
                    (b.paginationContainer[t]("click", "." + b.params.bulletClass, b.onClickIndex),
                    b.params.a11y &&
                      b.a11y &&
                      b.paginationContainer[t]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)),
                  (b.params.preventClicks || b.params.preventClicksPropagation) && i[a]("click", b.preventClicks, !0);
              }),
              (b.attachEvents = function () {
                b.initEvents();
              }),
              (b.detachEvents = function () {
                b.initEvents(!0);
              }),
              (b.allowClick = !0),
              (b.preventClicks = function (e) {
                b.allowClick ||
                  (b.params.preventClicks && e.preventDefault(),
                  b.params.preventClicksPropagation &&
                    b.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation()));
              }),
              (b.onClickNext = function (e) {
                e.preventDefault(), (b.isEnd && !b.params.loop) || b.slideNext();
              }),
              (b.onClickPrev = function (e) {
                e.preventDefault(), (b.isBeginning && !b.params.loop) || b.slidePrev();
              }),
              (b.onClickIndex = function (e) {
                e.preventDefault();
                var a = t(this).index() * b.params.slidesPerGroup;
                b.params.loop && (a += b.loopedSlides), b.slideTo(a);
              }),
              (b.updateClickedSlide = function (e) {
                var a = o(e, "." + b.params.slideClass),
                  i = !1;
                if (a) for (var r = 0; r < b.slides.length; r++) b.slides[r] === a && (i = !0);
                if (!a || !i) return (b.clickedSlide = void 0), void (b.clickedIndex = void 0);
                if (
                  ((b.clickedSlide = a),
                  (b.clickedIndex = t(a).index()),
                  b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex)
                ) {
                  var n,
                    s = b.clickedIndex;
                  if (b.params.loop) {
                    if (b.animating) return;
                    (n = t(b.clickedSlide).attr("data-swiper-slide-index")),
                      b.params.centeredSlides
                        ? s < b.loopedSlides - b.params.slidesPerView / 2 ||
                          s > b.slides.length - b.loopedSlides + b.params.slidesPerView / 2
                          ? (b.fixLoop(),
                            (s = b.wrapper
                              .children(
                                "." +
                                  b.params.slideClass +
                                  '[data-swiper-slide-index="' +
                                  n +
                                  '"]:not(.swiper-slide-duplicate)'
                              )
                              .eq(0)
                              .index()),
                            setTimeout(function () {
                              b.slideTo(s);
                            }, 0))
                          : b.slideTo(s)
                        : s > b.slides.length - b.params.slidesPerView
                        ? (b.fixLoop(),
                          (s = b.wrapper
                            .children(
                              "." +
                                b.params.slideClass +
                                '[data-swiper-slide-index="' +
                                n +
                                '"]:not(.swiper-slide-duplicate)'
                            )
                            .eq(0)
                            .index()),
                          setTimeout(function () {
                            b.slideTo(s);
                          }, 0))
                        : b.slideTo(s);
                  } else b.slideTo(s);
                }
              });
            var S,
              C,
              z,
              M,
              E,
              P,
              I,
              k,
              L,
              B,
              D = "input, select, textarea, button",
              H = Date.now(),
              A = [];
            (b.animating = !1),
              (b.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              });
            var O, G;
            if (
              ((b.onTouchStart = function (e) {
                if (
                  (e.originalEvent && (e = e.originalEvent),
                  (O = "touchstart" === e.type),
                  O || !("which" in e) || 3 !== e.which)
                ) {
                  if (b.params.noSwiping && o(e, "." + b.params.noSwipingClass)) return void (b.allowClick = !0);
                  if (!b.params.swipeHandler || o(e, b.params.swipeHandler)) {
                    var a = (b.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                      i = (b.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && a <= b.params.iOSEdgeSwipeThreshold)) {
                      if (
                        ((S = !0),
                        (C = !1),
                        (z = !0),
                        (E = void 0),
                        (G = void 0),
                        (b.touches.startX = a),
                        (b.touches.startY = i),
                        (M = Date.now()),
                        (b.allowClick = !0),
                        b.updateContainerSize(),
                        (b.swipeDirection = void 0),
                        b.params.threshold > 0 && (k = !1),
                        "touchstart" !== e.type)
                      ) {
                        var r = !0;
                        t(e.target).is(D) && (r = !1),
                          document.activeElement && t(document.activeElement).is(D) && document.activeElement.blur(),
                          r && e.preventDefault();
                      }
                      b.emit("onTouchStart", b, e);
                    }
                  }
                }
              }),
              (b.onTouchMove = function (e) {
                if ((e.originalEvent && (e = e.originalEvent), !O || "mousemove" !== e.type)) {
                  if (e.preventedByNestedSwiper)
                    return (
                      (b.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                      void (b.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY)
                    );
                  if (b.params.onlyExternal)
                    return (
                      (b.allowClick = !1),
                      void (
                        S &&
                        ((b.touches.startX = b.touches.currentX =
                          "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (b.touches.startY = b.touches.currentY =
                          "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                        (M = Date.now()))
                      )
                    );
                  if (O && document.activeElement && e.target === document.activeElement && t(e.target).is(D))
                    return (C = !0), void (b.allowClick = !1);
                  if ((z && b.emit("onTouchMove", b, e), !(e.targetTouches && e.targetTouches.length > 1))) {
                    if (
                      ((b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                      (b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                      "undefined" == typeof E)
                    ) {
                      var a =
                        (180 *
                          Math.atan2(
                            Math.abs(b.touches.currentY - b.touches.startY),
                            Math.abs(b.touches.currentX - b.touches.startX)
                          )) /
                        Math.PI;
                      E = b.isHorizontal() ? a > b.params.touchAngle : 90 - a > b.params.touchAngle;
                    }
                    if (
                      (E && b.emit("onTouchMoveOpposite", b, e),
                      "undefined" == typeof G &&
                        b.browser.ieTouch &&
                        ((b.touches.currentX === b.touches.startX && b.touches.currentY === b.touches.startY) ||
                          (G = !0)),
                      S)
                    ) {
                      if (E) return void (S = !1);
                      if (G || !b.browser.ieTouch) {
                        (b.allowClick = !1),
                          b.emit("onSliderMove", b, e),
                          e.preventDefault(),
                          b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(),
                          C ||
                            (r.loop && b.fixLoop(),
                            (I = b.getWrapperTranslate()),
                            b.setWrapperTransition(0),
                            b.animating &&
                              b.wrapper.trigger(
                                "webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"
                              ),
                            b.params.autoplay &&
                              b.autoplaying &&
                              (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()),
                            (B = !1),
                            b.params.grabCursor &&
                              ((b.container[0].style.cursor = "move"),
                              (b.container[0].style.cursor = "-webkit-grabbing"),
                              (b.container[0].style.cursor = "-moz-grabbin"),
                              (b.container[0].style.cursor = "grabbing"))),
                          (C = !0);
                        var i = (b.touches.diff = b.isHorizontal()
                          ? b.touches.currentX - b.touches.startX
                          : b.touches.currentY - b.touches.startY);
                        (i *= b.params.touchRatio),
                          b.rtl && (i = -i),
                          (b.swipeDirection = i > 0 ? "prev" : "next"),
                          (P = i + I);
                        var n = !0;
                        if (
                          (i > 0 && P > b.minTranslate()
                            ? ((n = !1),
                              b.params.resistance &&
                                (P =
                                  b.minTranslate() - 1 + Math.pow(-b.minTranslate() + I + i, b.params.resistanceRatio)))
                            : 0 > i &&
                              P < b.maxTranslate() &&
                              ((n = !1),
                              b.params.resistance &&
                                (P =
                                  b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - I - i, b.params.resistanceRatio))),
                          n && (e.preventedByNestedSwiper = !0),
                          !b.params.allowSwipeToNext && "next" === b.swipeDirection && I > P && (P = I),
                          !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && P > I && (P = I),
                          b.params.followFinger)
                        ) {
                          if (b.params.threshold > 0) {
                            if (!(Math.abs(i) > b.params.threshold || k)) return void (P = I);
                            if (!k)
                              return (
                                (k = !0),
                                (b.touches.startX = b.touches.currentX),
                                (b.touches.startY = b.touches.currentY),
                                (P = I),
                                void (b.touches.diff = b.isHorizontal()
                                  ? b.touches.currentX - b.touches.startX
                                  : b.touches.currentY - b.touches.startY)
                              );
                          }
                          (b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(),
                            b.params.freeMode &&
                              (0 === A.length &&
                                A.push({
                                  position: b.touches[b.isHorizontal() ? "startX" : "startY"],
                                  time: M,
                                }),
                              A.push({
                                position: b.touches[b.isHorizontal() ? "currentX" : "currentY"],
                                time: new window.Date().getTime(),
                              })),
                            b.updateProgress(P),
                            b.setWrapperTranslate(P);
                        }
                      }
                    }
                  }
                }
              }),
              (b.onTouchEnd = function (e) {
                if ((e.originalEvent && (e = e.originalEvent), z && b.emit("onTouchEnd", b, e), (z = !1), S)) {
                  b.params.grabCursor &&
                    C &&
                    S &&
                    ((b.container[0].style.cursor = "move"),
                    (b.container[0].style.cursor = "-webkit-grab"),
                    (b.container[0].style.cursor = "-moz-grab"),
                    (b.container[0].style.cursor = "grab"));
                  var a = Date.now(),
                    i = a - M;
                  if (
                    (b.allowClick &&
                      (b.updateClickedSlide(e),
                      b.emit("onTap", b, e),
                      300 > i &&
                        a - H > 300 &&
                        (L && clearTimeout(L),
                        (L = setTimeout(function () {
                          b &&
                            (b.params.paginationHide &&
                              b.paginationContainer.length > 0 &&
                              !t(e.target).hasClass(b.params.bulletClass) &&
                              b.paginationContainer.toggleClass(b.params.paginationHiddenClass),
                            b.emit("onClick", b, e));
                        }, 300))),
                      300 > i && 300 > a - H && (L && clearTimeout(L), b.emit("onDoubleTap", b, e))),
                    (H = Date.now()),
                    setTimeout(function () {
                      b && (b.allowClick = !0);
                    }, 0),
                    !S || !C || !b.swipeDirection || 0 === b.touches.diff || P === I)
                  )
                    return void (S = C = !1);
                  S = C = !1;
                  var r;
                  if (((r = b.params.followFinger ? (b.rtl ? b.translate : -b.translate) : -P), b.params.freeMode)) {
                    if (r < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                    if (r > -b.maxTranslate())
                      return void (b.slides.length < b.snapGrid.length
                        ? b.slideTo(b.snapGrid.length - 1)
                        : b.slideTo(b.slides.length - 1));
                    if (b.params.freeModeMomentum) {
                      if (A.length > 1) {
                        var n = A.pop(),
                          s = A.pop(),
                          o = n.position - s.position,
                          l = n.time - s.time;
                        (b.velocity = o / l),
                          (b.velocity = b.velocity / 2),
                          Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0),
                          (l > 150 || new window.Date().getTime() - n.time > 300) && (b.velocity = 0);
                      } else b.velocity = 0;
                      A.length = 0;
                      var p = 1e3 * b.params.freeModeMomentumRatio,
                        d = b.velocity * p,
                        u = b.translate + d;
                      b.rtl && (u = -u);
                      var c,
                        m = !1,
                        f = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                      if (u < b.maxTranslate())
                        b.params.freeModeMomentumBounce
                          ? (u + b.maxTranslate() < -f && (u = b.maxTranslate() - f),
                            (c = b.maxTranslate()),
                            (m = !0),
                            (B = !0))
                          : (u = b.maxTranslate());
                      else if (u > b.minTranslate())
                        b.params.freeModeMomentumBounce
                          ? (u - b.minTranslate() > f && (u = b.minTranslate() + f),
                            (c = b.minTranslate()),
                            (m = !0),
                            (B = !0))
                          : (u = b.minTranslate());
                      else if (b.params.freeModeSticky) {
                        var h,
                          g = 0;
                        for (g = 0; g < b.snapGrid.length; g += 1)
                          if (b.snapGrid[g] > -u) {
                            h = g;
                            break;
                          }
                        (u =
                          Math.abs(b.snapGrid[h] - u) < Math.abs(b.snapGrid[h - 1] - u) || "next" === b.swipeDirection
                            ? b.snapGrid[h]
                            : b.snapGrid[h - 1]),
                          b.rtl || (u = -u);
                      }
                      if (0 !== b.velocity)
                        p = b.rtl
                          ? Math.abs((-u - b.translate) / b.velocity)
                          : Math.abs((u - b.translate) / b.velocity);
                      else if (b.params.freeModeSticky) return void b.slideReset();
                      b.params.freeModeMomentumBounce && m
                        ? (b.updateProgress(c),
                          b.setWrapperTransition(p),
                          b.setWrapperTranslate(u),
                          b.onTransitionStart(),
                          (b.animating = !0),
                          b.wrapper.transitionEnd(function () {
                            b &&
                              B &&
                              (b.emit("onMomentumBounce", b),
                              b.setWrapperTransition(b.params.speed),
                              b.setWrapperTranslate(c),
                              b.wrapper.transitionEnd(function () {
                                b && b.onTransitionEnd();
                              }));
                          }))
                        : b.velocity
                        ? (b.updateProgress(u),
                          b.setWrapperTransition(p),
                          b.setWrapperTranslate(u),
                          b.onTransitionStart(),
                          b.animating ||
                            ((b.animating = !0),
                            b.wrapper.transitionEnd(function () {
                              b && b.onTransitionEnd();
                            })))
                        : b.updateProgress(u),
                        b.updateActiveIndex();
                    }
                    return void (
                      (!b.params.freeModeMomentum || i >= b.params.longSwipesMs) &&
                      (b.updateProgress(), b.updateActiveIndex())
                    );
                  }
                  var v,
                    w = 0,
                    y = b.slidesSizesGrid[0];
                  for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup)
                    "undefined" != typeof b.slidesGrid[v + b.params.slidesPerGroup]
                      ? r >= b.slidesGrid[v] &&
                        r < b.slidesGrid[v + b.params.slidesPerGroup] &&
                        ((w = v), (y = b.slidesGrid[v + b.params.slidesPerGroup] - b.slidesGrid[v]))
                      : r >= b.slidesGrid[v] &&
                        ((w = v), (y = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]));
                  var x = (r - b.slidesGrid[w]) / y;
                  if (i > b.params.longSwipesMs) {
                    if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                    "next" === b.swipeDirection &&
                      (x >= b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w)),
                      "prev" === b.swipeDirection &&
                        (x > 1 - b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w));
                  } else {
                    if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                    "next" === b.swipeDirection && b.slideTo(w + b.params.slidesPerGroup),
                      "prev" === b.swipeDirection && b.slideTo(w);
                  }
                }
              }),
              (b._slideTo = function (e, t) {
                return b.slideTo(e, t, !0, !0);
              }),
              (b.slideTo = function (e, t, a, i) {
                "undefined" == typeof a && (a = !0),
                  "undefined" == typeof e && (e = 0),
                  0 > e && (e = 0),
                  (b.snapIndex = Math.floor(e / b.params.slidesPerGroup)),
                  b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
                var r = -b.snapGrid[b.snapIndex];
                b.params.autoplay &&
                  b.autoplaying &&
                  (i || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(t) : b.stopAutoplay()),
                  b.updateProgress(r);
                for (var n = 0; n < b.slidesGrid.length; n++)
                  -Math.floor(100 * r) >= Math.floor(100 * b.slidesGrid[n]) && (e = n);
                return !b.params.allowSwipeToNext && r < b.translate && r < b.minTranslate()
                  ? !1
                  : !b.params.allowSwipeToPrev && r > b.translate && r > b.maxTranslate() && (b.activeIndex || 0) !== e
                  ? !1
                  : ("undefined" == typeof t && (t = b.params.speed),
                    (b.previousIndex = b.activeIndex || 0),
                    (b.activeIndex = e),
                    (b.rtl && -r === b.translate) || (!b.rtl && r === b.translate)
                      ? (b.params.autoHeight && b.updateAutoHeight(),
                        b.updateClasses(),
                        "slide" !== b.params.effect && b.setWrapperTranslate(r),
                        !1)
                      : (b.updateClasses(),
                        b.onTransitionStart(a),
                        0 === t
                          ? (b.setWrapperTranslate(r), b.setWrapperTransition(0), b.onTransitionEnd(a))
                          : (b.setWrapperTranslate(r),
                            b.setWrapperTransition(t),
                            b.animating ||
                              ((b.animating = !0),
                              b.wrapper.transitionEnd(function () {
                                b && b.onTransitionEnd(a);
                              }))),
                        !0));
              }),
              (b.onTransitionStart = function (e) {
                "undefined" == typeof e && (e = !0),
                  b.params.autoHeight && b.updateAutoHeight(),
                  b.lazy && b.lazy.onTransitionStart(),
                  e &&
                    (b.emit("onTransitionStart", b),
                    b.activeIndex !== b.previousIndex &&
                      (b.emit("onSlideChangeStart", b),
                      b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)));
              }),
              (b.onTransitionEnd = function (e) {
                (b.animating = !1),
                  b.setWrapperTransition(0),
                  "undefined" == typeof e && (e = !0),
                  b.lazy && b.lazy.onTransitionEnd(),
                  e &&
                    (b.emit("onTransitionEnd", b),
                    b.activeIndex !== b.previousIndex &&
                      (b.emit("onSlideChangeEnd", b),
                      b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))),
                  b.params.hashnav && b.hashnav && b.hashnav.setHash();
              }),
              (b.slideNext = function (e, t, a) {
                if (b.params.loop) {
                  if (b.animating) return !1;
                  b.fixLoop();
                  b.container[0].clientLeft;
                  return b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, a);
                }
                return b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, a);
              }),
              (b._slideNext = function (e) {
                return b.slideNext(!0, e, !0);
              }),
              (b.slidePrev = function (e, t, a) {
                if (b.params.loop) {
                  if (b.animating) return !1;
                  b.fixLoop();
                  b.container[0].clientLeft;
                  return b.slideTo(b.activeIndex - 1, t, e, a);
                }
                return b.slideTo(b.activeIndex - 1, t, e, a);
              }),
              (b._slidePrev = function (e) {
                return b.slidePrev(!0, e, !0);
              }),
              (b.slideReset = function (e, t, a) {
                return b.slideTo(b.activeIndex, t, e);
              }),
              (b.setWrapperTransition = function (e, t) {
                b.wrapper.transition(e),
                  "slide" !== b.params.effect &&
                    b.effects[b.params.effect] &&
                    b.effects[b.params.effect].setTransition(e),
                  b.params.parallax && b.parallax && b.parallax.setTransition(e),
                  b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e),
                  b.params.control && b.controller && b.controller.setTransition(e, t),
                  b.emit("onSetTransition", b, e);
              }),
              (b.setWrapperTranslate = function (e, t, a) {
                var i = 0,
                  r = 0,
                  s = 0;
                b.isHorizontal() ? (i = b.rtl ? -e : e) : (r = e),
                  b.params.roundLengths && ((i = n(i)), (r = n(r))),
                  b.params.virtualTranslate ||
                    (b.support.transforms3d
                      ? b.wrapper.transform("translate3d(" + i + "px, " + r + "px, " + s + "px)")
                      : b.wrapper.transform("translate(" + i + "px, " + r + "px)")),
                  (b.translate = b.isHorizontal() ? i : r);
                var o,
                  l = b.maxTranslate() - b.minTranslate();
                (o = 0 === l ? 0 : (e - b.minTranslate()) / l),
                  o !== b.progress && b.updateProgress(e),
                  t && b.updateActiveIndex(),
                  "slide" !== b.params.effect &&
                    b.effects[b.params.effect] &&
                    b.effects[b.params.effect].setTranslate(b.translate),
                  b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate),
                  b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate),
                  b.params.control && b.controller && b.controller.setTranslate(b.translate, a),
                  b.emit("onSetTranslate", b, b.translate);
              }),
              (b.getTranslate = function (e, t) {
                var a, i, r, n;
                return (
                  "undefined" == typeof t && (t = "x"),
                  b.params.virtualTranslate
                    ? b.rtl
                      ? -b.translate
                      : b.translate
                    : ((r = window.getComputedStyle(e, null)),
                      window.WebKitCSSMatrix
                        ? ((i = r.transform || r.webkitTransform),
                          i.split(",").length > 6 &&
                            (i = i
                              .split(", ")
                              .map(function (e) {
                                return e.replace(",", ".");
                              })
                              .join(", ")),
                          (n = new window.WebKitCSSMatrix("none" === i ? "" : i)))
                        : ((n =
                            r.MozTransform ||
                            r.OTransform ||
                            r.MsTransform ||
                            r.msTransform ||
                            r.transform ||
                            r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
                          (a = n.toString().split(","))),
                      "x" === t &&
                        (i = window.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
                      "y" === t &&
                        (i = window.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
                      b.rtl && i && (i = -i),
                      i || 0)
                );
              }),
              (b.getWrapperTranslate = function (e) {
                return "undefined" == typeof e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e);
              }),
              (b.observers = []),
              (b.initObservers = function () {
                if (b.params.observeParents) for (var e = b.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                l(b.container[0], {
                  childList: !1,
                }),
                  l(b.wrapper[0], {
                    attributes: !1,
                  });
              }),
              (b.disconnectObservers = function () {
                for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
                b.observers = [];
              }),
              (b.createLoop = function () {
                b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
                var e = b.wrapper.children("." + b.params.slideClass);
                "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = e.length),
                  (b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10)),
                  (b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides),
                  b.loopedSlides > e.length && (b.loopedSlides = e.length);
                var a,
                  i = [],
                  r = [];
                for (
                  e.each(function (a, n) {
                    var s = t(this);
                    a < b.loopedSlides && r.push(n),
                      a < e.length && a >= e.length - b.loopedSlides && i.push(n),
                      s.attr("data-swiper-slide-index", a);
                  }),
                    a = 0;
                  a < r.length;
                  a++
                )
                  b.wrapper.append(t(r[a].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
                for (a = i.length - 1; a >= 0; a--)
                  b.wrapper.prepend(t(i[a].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
              }),
              (b.destroyLoop = function () {
                b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(),
                  b.slides.removeAttr("data-swiper-slide-index");
              }),
              (b.reLoop = function (e) {
                var t = b.activeIndex - b.loopedSlides;
                b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(t + b.loopedSlides, 0, !1);
              }),
              (b.fixLoop = function () {
                var e;
                b.activeIndex < b.loopedSlides
                  ? ((e = b.slides.length - 3 * b.loopedSlides + b.activeIndex),
                    (e += b.loopedSlides),
                    b.slideTo(e, 0, !1, !0))
                  : (("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides) ||
                      b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) &&
                    ((e = -b.slides.length + b.activeIndex + b.loopedSlides),
                    (e += b.loopedSlides),
                    b.slideTo(e, 0, !1, !0));
              }),
              (b.appendSlide = function (e) {
                if ((b.params.loop && b.destroyLoop(), "object" == typeof e && e.length))
                  for (var t = 0; t < e.length; t++) e[t] && b.wrapper.append(e[t]);
                else b.wrapper.append(e);
                b.params.loop && b.createLoop(), (b.params.observer && b.support.observer) || b.update(!0);
              }),
              (b.prependSlide = function (e) {
                b.params.loop && b.destroyLoop();
                var t = b.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                  for (var a = 0; a < e.length; a++) e[a] && b.wrapper.prepend(e[a]);
                  t = b.activeIndex + e.length;
                } else b.wrapper.prepend(e);
                b.params.loop && b.createLoop(),
                  (b.params.observer && b.support.observer) || b.update(!0),
                  b.slideTo(t, 0, !1);
              }),
              (b.removeSlide = function (e) {
                b.params.loop && (b.destroyLoop(), (b.slides = b.wrapper.children("." + b.params.slideClass)));
                var t,
                  a = b.activeIndex;
                if ("object" == typeof e && e.length) {
                  for (var i = 0; i < e.length; i++) (t = e[i]), b.slides[t] && b.slides.eq(t).remove(), a > t && a--;
                  a = Math.max(a, 0);
                } else (t = e), b.slides[t] && b.slides.eq(t).remove(), a > t && a--, (a = Math.max(a, 0));
                b.params.loop && b.createLoop(),
                  (b.params.observer && b.support.observer) || b.update(!0),
                  b.params.loop ? b.slideTo(a + b.loopedSlides, 0, !1) : b.slideTo(a, 0, !1);
              }),
              (b.removeAllSlides = function () {
                for (var e = [], t = 0; t < b.slides.length; t++) e.push(t);
                b.removeSlide(e);
              }),
              (b.effects = {
                fade: {
                  setTranslate: function () {
                    for (var e = 0; e < b.slides.length; e++) {
                      var t = b.slides.eq(e),
                        a = t[0].swiperSlideOffset,
                        i = -a;
                      b.params.virtualTranslate || (i -= b.translate);
                      var r = 0;
                      b.isHorizontal() || ((r = i), (i = 0));
                      var n = b.params.fade.crossFade
                        ? Math.max(1 - Math.abs(t[0].progress), 0)
                        : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                      t.css({
                        opacity: n,
                      }).transform("translate3d(" + i + "px, " + r + "px, 0px)");
                    }
                  },
                  setTransition: function (e) {
                    if ((b.slides.transition(e), b.params.virtualTranslate && 0 !== e)) {
                      var t = !1;
                      b.slides.transitionEnd(function () {
                        if (!t && b) {
                          (t = !0), (b.animating = !1);
                          for (
                            var e = [
                                "webkitTransitionEnd",
                                "transitionend",
                                "oTransitionEnd",
                                "MSTransitionEnd",
                                "msTransitionEnd",
                              ],
                              a = 0;
                            a < e.length;
                            a++
                          )
                            b.wrapper.trigger(e[a]);
                        }
                      });
                    }
                  },
                },
                flip: {
                  setTranslate: function () {
                    for (var e = 0; e < b.slides.length; e++) {
                      var a = b.slides.eq(e),
                        i = a[0].progress;
                      b.params.flip.limitRotation && (i = Math.max(Math.min(a[0].progress, 1), -1));
                      var r = a[0].swiperSlideOffset,
                        n = -180 * i,
                        s = n,
                        o = 0,
                        l = -r,
                        p = 0;
                      if (
                        (b.isHorizontal() ? b.rtl && (s = -s) : ((p = l), (l = 0), (o = -s), (s = 0)),
                        (a[0].style.zIndex = -Math.abs(Math.round(i)) + b.slides.length),
                        b.params.flip.slideShadows)
                      ) {
                        var d = b.isHorizontal()
                            ? a.find(".swiper-slide-shadow-left")
                            : a.find(".swiper-slide-shadow-top"),
                          u = b.isHorizontal()
                            ? a.find(".swiper-slide-shadow-right")
                            : a.find(".swiper-slide-shadow-bottom");
                        0 === d.length &&
                          ((d = t(
                            '<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'
                          )),
                          a.append(d)),
                          0 === u.length &&
                            ((u = t(
                              '<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'
                            )),
                            a.append(u)),
                          d.length && (d[0].style.opacity = Math.max(-i, 0)),
                          u.length && (u[0].style.opacity = Math.max(i, 0));
                      }
                      a.transform(
                        "translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)"
                      );
                    }
                  },
                  setTransition: function (e) {
                    if (
                      (b.slides
                        .transition(e)
                        .find(
                          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                        )
                        .transition(e),
                      b.params.virtualTranslate && 0 !== e)
                    ) {
                      var a = !1;
                      b.slides.eq(b.activeIndex).transitionEnd(function () {
                        if (!a && b && t(this).hasClass(b.params.slideActiveClass)) {
                          (a = !0), (b.animating = !1);
                          for (
                            var e = [
                                "webkitTransitionEnd",
                                "transitionend",
                                "oTransitionEnd",
                                "MSTransitionEnd",
                                "msTransitionEnd",
                              ],
                              i = 0;
                            i < e.length;
                            i++
                          )
                            b.wrapper.trigger(e[i]);
                        }
                      });
                    }
                  },
                },
                cube: {
                  setTranslate: function () {
                    var e,
                      a = 0;
                    b.params.cube.shadow &&
                      (b.isHorizontal()
                        ? ((e = b.wrapper.find(".swiper-cube-shadow")),
                          0 === e.length && ((e = t('<div class="swiper-cube-shadow"></div>')), b.wrapper.append(e)),
                          e.css({
                            height: b.width + "px",
                          }))
                        : ((e = b.container.find(".swiper-cube-shadow")),
                          0 === e.length &&
                            ((e = t('<div class="swiper-cube-shadow"></div>')), b.container.append(e))));
                    for (var i = 0; i < b.slides.length; i++) {
                      var r = b.slides.eq(i),
                        n = 90 * i,
                        s = Math.floor(n / 360);
                      b.rtl && ((n = -n), (s = Math.floor(-n / 360)));
                      var o = Math.max(Math.min(r[0].progress, 1), -1),
                        l = 0,
                        p = 0,
                        d = 0;
                      i % 4 === 0
                        ? ((l = 4 * -s * b.size), (d = 0))
                        : (i - 1) % 4 === 0
                        ? ((l = 0), (d = 4 * -s * b.size))
                        : (i - 2) % 4 === 0
                        ? ((l = b.size + 4 * s * b.size), (d = b.size))
                        : (i - 3) % 4 === 0 && ((l = -b.size), (d = 3 * b.size + 4 * b.size * s)),
                        b.rtl && (l = -l),
                        b.isHorizontal() || ((p = l), (l = 0));
                      var u =
                        "rotateX(" +
                        (b.isHorizontal() ? 0 : -n) +
                        "deg) rotateY(" +
                        (b.isHorizontal() ? n : 0) +
                        "deg) translate3d(" +
                        l +
                        "px, " +
                        p +
                        "px, " +
                        d +
                        "px)";
                      if (
                        (1 >= o && o > -1 && ((a = 90 * i + 90 * o), b.rtl && (a = 90 * -i - 90 * o)),
                        r.transform(u),
                        b.params.cube.slideShadows)
                      ) {
                        var c = b.isHorizontal()
                            ? r.find(".swiper-slide-shadow-left")
                            : r.find(".swiper-slide-shadow-top"),
                          m = b.isHorizontal()
                            ? r.find(".swiper-slide-shadow-right")
                            : r.find(".swiper-slide-shadow-bottom");
                        0 === c.length &&
                          ((c = t(
                            '<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'
                          )),
                          r.append(c)),
                          0 === m.length &&
                            ((m = t(
                              '<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'
                            )),
                            r.append(m)),
                          c.length && (c[0].style.opacity = Math.max(-o, 0)),
                          m.length && (m[0].style.opacity = Math.max(o, 0));
                      }
                    }
                    if (
                      (b.wrapper.css({
                        "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                        "transform-origin": "50% 50% -" + b.size / 2 + "px",
                      }),
                      b.params.cube.shadow)
                    )
                      if (b.isHorizontal())
                        e.transform(
                          "translate3d(0px, " +
                            (b.width / 2 + b.params.cube.shadowOffset) +
                            "px, " +
                            -b.width / 2 +
                            "px) rotateX(90deg) rotateZ(0deg) scale(" +
                            b.params.cube.shadowScale +
                            ")"
                        );
                      else {
                        var f = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                          h = 1.5 - (Math.sin((2 * f * Math.PI) / 360) / 2 + Math.cos((2 * f * Math.PI) / 360) / 2),
                          g = b.params.cube.shadowScale,
                          v = b.params.cube.shadowScale / h,
                          w = b.params.cube.shadowOffset;
                        e.transform(
                          "scale3d(" +
                            g +
                            ", 1, " +
                            v +
                            ") translate3d(0px, " +
                            (b.height / 2 + w) +
                            "px, " +
                            -b.height / 2 / v +
                            "px) rotateX(-90deg)"
                        );
                      }
                    var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                    b.wrapper.transform(
                      "translate3d(0px,0," +
                        y +
                        "px) rotateX(" +
                        (b.isHorizontal() ? 0 : a) +
                        "deg) rotateY(" +
                        (b.isHorizontal() ? -a : 0) +
                        "deg)"
                    );
                  },
                  setTransition: function (e) {
                    b.slides
                      .transition(e)
                      .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                      )
                      .transition(e),
                      b.params.cube.shadow &&
                        !b.isHorizontal() &&
                        b.container.find(".swiper-cube-shadow").transition(e);
                  },
                },
                coverflow: {
                  setTranslate: function () {
                    for (
                      var e = b.translate,
                        a = b.isHorizontal() ? -e + b.width / 2 : -e + b.height / 2,
                        i = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate,
                        r = b.params.coverflow.depth,
                        n = 0,
                        s = b.slides.length;
                      s > n;
                      n++
                    ) {
                      var o = b.slides.eq(n),
                        l = b.slidesSizesGrid[n],
                        p = o[0].swiperSlideOffset,
                        d = ((a - p - l / 2) / l) * b.params.coverflow.modifier,
                        u = b.isHorizontal() ? i * d : 0,
                        c = b.isHorizontal() ? 0 : i * d,
                        m = -r * Math.abs(d),
                        f = b.isHorizontal() ? 0 : b.params.coverflow.stretch * d,
                        h = b.isHorizontal() ? b.params.coverflow.stretch * d : 0;
                      Math.abs(h) < 0.001 && (h = 0),
                        Math.abs(f) < 0.001 && (f = 0),
                        Math.abs(m) < 0.001 && (m = 0),
                        Math.abs(u) < 0.001 && (u = 0),
                        Math.abs(c) < 0.001 && (c = 0);
                      var g =
                        "translate3d(" + h + "px," + f + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                      if (
                        (o.transform(g),
                        (o[0].style.zIndex = -Math.abs(Math.round(d)) + 1),
                        b.params.coverflow.slideShadows)
                      ) {
                        var v = b.isHorizontal()
                            ? o.find(".swiper-slide-shadow-left")
                            : o.find(".swiper-slide-shadow-top"),
                          w = b.isHorizontal()
                            ? o.find(".swiper-slide-shadow-right")
                            : o.find(".swiper-slide-shadow-bottom");
                        0 === v.length &&
                          ((v = t(
                            '<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'
                          )),
                          o.append(v)),
                          0 === w.length &&
                            ((w = t(
                              '<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'
                            )),
                            o.append(w)),
                          v.length && (v[0].style.opacity = d > 0 ? d : 0),
                          w.length && (w[0].style.opacity = -d > 0 ? -d : 0);
                      }
                    }
                    if (b.browser.ie) {
                      var y = b.wrapper[0].style;
                      y.perspectiveOrigin = a + "px 50%";
                    }
                  },
                  setTransition: function (e) {
                    b.slides
                      .transition(e)
                      .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                      )
                      .transition(e);
                  },
                },
              }),
              (b.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function (e, a) {
                  if ("undefined" != typeof e && ("undefined" == typeof a && (a = !0), 0 !== b.slides.length)) {
                    var i = b.slides.eq(e),
                      r = i.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                    !i.hasClass("swiper-lazy") ||
                      i.hasClass("swiper-lazy-loaded") ||
                      i.hasClass("swiper-lazy-loading") ||
                      (r = r.add(i[0])),
                      0 !== r.length &&
                        r.each(function () {
                          var e = t(this);
                          e.addClass("swiper-lazy-loading");
                          var r = e.attr("data-background"),
                            n = e.attr("data-src"),
                            s = e.attr("data-srcset");
                          b.loadImage(e[0], n || r, s, !1, function () {
                            if (
                              (r
                                ? (e.css("background-image", 'url("' + r + '")'), e.removeAttr("data-background"))
                                : (s && (e.attr("srcset", s), e.removeAttr("data-srcset")),
                                  n && (e.attr("src", n), e.removeAttr("data-src"))),
                              e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),
                              i.find(".swiper-lazy-preloader, .preloader").remove(),
                              b.params.loop && a)
                            ) {
                              var t = i.attr("data-swiper-slide-index");
                              if (i.hasClass(b.params.slideDuplicateClass)) {
                                var o = b.wrapper.children(
                                  '[data-swiper-slide-index="' + t + '"]:not(.' + b.params.slideDuplicateClass + ")"
                                );
                                b.lazy.loadImageInSlide(o.index(), !1);
                              } else {
                                var l = b.wrapper.children(
                                  "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]'
                                );
                                b.lazy.loadImageInSlide(l.index(), !1);
                              }
                            }
                            b.emit("onLazyImageReady", b, i[0], e[0]);
                          }),
                            b.emit("onLazyImageLoad", b, i[0], e[0]);
                        });
                  }
                },
                load: function () {
                  var e;
                  if (b.params.watchSlidesVisibility)
                    b.wrapper.children("." + b.params.slideVisibleClass).each(function () {
                      b.lazy.loadImageInSlide(t(this).index());
                    });
                  else if (b.params.slidesPerView > 1)
                    for (e = b.activeIndex; e < b.activeIndex + b.params.slidesPerView; e++)
                      b.slides[e] && b.lazy.loadImageInSlide(e);
                  else b.lazy.loadImageInSlide(b.activeIndex);
                  if (b.params.lazyLoadingInPrevNext)
                    if (
                      b.params.slidesPerView > 1 ||
                      (b.params.lazyLoadingInPrevNextAmount && b.params.lazyLoadingInPrevNextAmount > 1)
                    ) {
                      var a = b.params.lazyLoadingInPrevNextAmount,
                        i = b.params.slidesPerView,
                        r = Math.min(b.activeIndex + i + Math.max(a, i), b.slides.length),
                        n = Math.max(b.activeIndex - Math.max(i, a), 0);
                      for (e = b.activeIndex + b.params.slidesPerView; r > e; e++)
                        b.slides[e] && b.lazy.loadImageInSlide(e);
                      for (e = n; e < b.activeIndex; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                    } else {
                      var s = b.wrapper.children("." + b.params.slideNextClass);
                      s.length > 0 && b.lazy.loadImageInSlide(s.index());
                      var o = b.wrapper.children("." + b.params.slidePrevClass);
                      o.length > 0 && b.lazy.loadImageInSlide(o.index());
                    }
                },
                onTransitionStart: function () {
                  b.params.lazyLoading &&
                    (b.params.lazyLoadingOnTransitionStart ||
                      (!b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded)) &&
                    b.lazy.load();
                },
                onTransitionEnd: function () {
                  b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load();
                },
              }),
              (b.scrollbar = {
                isTouched: !1,
                setDragPosition: function (e) {
                  var t = b.scrollbar,
                    a = b.isHorizontal()
                      ? "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].pageX
                        : e.pageX || e.clientX
                      : "touchstart" === e.type || "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY || e.clientY,
                    i = a - t.track.offset()[b.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                    r = -b.minTranslate() * t.moveDivider,
                    n = -b.maxTranslate() * t.moveDivider;
                  r > i ? (i = r) : i > n && (i = n),
                    (i = -i / t.moveDivider),
                    b.updateProgress(i),
                    b.setWrapperTranslate(i, !0);
                },
                dragStart: function (e) {
                  var t = b.scrollbar;
                  (t.isTouched = !0),
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setDragPosition(e),
                    clearTimeout(t.dragTimeout),
                    t.track.transition(0),
                    b.params.scrollbarHide && t.track.css("opacity", 1),
                    b.wrapper.transition(100),
                    t.drag.transition(100),
                    b.emit("onScrollbarDragStart", b);
                },
                dragMove: function (e) {
                  var t = b.scrollbar;
                  t.isTouched &&
                    (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                    t.setDragPosition(e),
                    b.wrapper.transition(0),
                    t.track.transition(0),
                    t.drag.transition(0),
                    b.emit("onScrollbarDragMove", b));
                },
                dragEnd: function (e) {
                  var t = b.scrollbar;
                  t.isTouched &&
                    ((t.isTouched = !1),
                    b.params.scrollbarHide &&
                      (clearTimeout(t.dragTimeout),
                      (t.dragTimeout = setTimeout(function () {
                        t.track.css("opacity", 0), t.track.transition(400);
                      }, 1e3))),
                    b.emit("onScrollbarDragEnd", b),
                    b.params.scrollbarSnapOnRelease && b.slideReset());
                },
                enableDraggable: function () {
                  var e = b.scrollbar,
                    a = b.support.touch ? e.track : document;
                  t(e.track).on(b.touchEvents.start, e.dragStart),
                    t(a).on(b.touchEvents.move, e.dragMove),
                    t(a).on(b.touchEvents.end, e.dragEnd);
                },
                disableDraggable: function () {
                  var e = b.scrollbar,
                    a = b.support.touch ? e.track : document;
                  t(e.track).off(b.touchEvents.start, e.dragStart),
                    t(a).off(b.touchEvents.move, e.dragMove),
                    t(a).off(b.touchEvents.end, e.dragEnd);
                },
                set: function () {
                  if (b.params.scrollbar) {
                    var e = b.scrollbar;
                    (e.track = t(b.params.scrollbar)),
                      b.params.uniqueNavElements &&
                        "string" == typeof b.params.scrollbar &&
                        e.track.length > 1 &&
                        1 === b.container.find(b.params.scrollbar).length &&
                        (e.track = b.container.find(b.params.scrollbar)),
                      (e.drag = e.track.find(".swiper-scrollbar-drag")),
                      0 === e.drag.length &&
                        ((e.drag = t('<div class="swiper-scrollbar-drag"></div>')), e.track.append(e.drag)),
                      (e.drag[0].style.width = ""),
                      (e.drag[0].style.height = ""),
                      (e.trackSize = b.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight),
                      (e.divider = b.size / b.virtualSize),
                      (e.moveDivider = e.divider * (e.trackSize / b.size)),
                      (e.dragSize = e.trackSize * e.divider),
                      b.isHorizontal()
                        ? (e.drag[0].style.width = e.dragSize + "px")
                        : (e.drag[0].style.height = e.dragSize + "px"),
                      e.divider >= 1 ? (e.track[0].style.display = "none") : (e.track[0].style.display = ""),
                      b.params.scrollbarHide && (e.track[0].style.opacity = 0);
                  }
                },
                setTranslate: function () {
                  if (b.params.scrollbar) {
                    var e,
                      t = b.scrollbar,
                      a = (b.translate || 0, t.dragSize);
                    (e = (t.trackSize - t.dragSize) * b.progress),
                      b.rtl && b.isHorizontal()
                        ? ((e = -e),
                          e > 0
                            ? ((a = t.dragSize - e), (e = 0))
                            : -e + t.dragSize > t.trackSize && (a = t.trackSize + e))
                        : 0 > e
                        ? ((a = t.dragSize + e), (e = 0))
                        : e + t.dragSize > t.trackSize && (a = t.trackSize - e),
                      b.isHorizontal()
                        ? (b.support.transforms3d
                            ? t.drag.transform("translate3d(" + e + "px, 0, 0)")
                            : t.drag.transform("translateX(" + e + "px)"),
                          (t.drag[0].style.width = a + "px"))
                        : (b.support.transforms3d
                            ? t.drag.transform("translate3d(0px, " + e + "px, 0)")
                            : t.drag.transform("translateY(" + e + "px)"),
                          (t.drag[0].style.height = a + "px")),
                      b.params.scrollbarHide &&
                        (clearTimeout(t.timeout),
                        (t.track[0].style.opacity = 1),
                        (t.timeout = setTimeout(function () {
                          (t.track[0].style.opacity = 0), t.track.transition(400);
                        }, 1e3)));
                  }
                },
                setTransition: function (e) {
                  b.params.scrollbar && b.scrollbar.drag.transition(e);
                },
              }),
              (b.controller = {
                LinearSpline: function (e, t) {
                  (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
                  var a, i;
                  this.x.length;
                  this.interpolate = function (e) {
                    return e
                      ? ((i = r(this.x, e)),
                        (a = i - 1),
                        ((e - this.x[a]) * (this.y[i] - this.y[a])) / (this.x[i] - this.x[a]) + this.y[a])
                      : 0;
                  };
                  var r = (function () {
                    var e, t, a;
                    return function (i, r) {
                      for (t = -1, e = i.length; e - t > 1; ) i[(a = (e + t) >> 1)] <= r ? (t = a) : (e = a);
                      return e;
                    };
                  })();
                },
                getInterpolateFunction: function (e) {
                  b.controller.spline ||
                    (b.controller.spline = b.params.loop
                      ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid)
                      : new b.controller.LinearSpline(b.snapGrid, e.snapGrid));
                },
                setTranslate: function (e, t) {
                  function i(t) {
                    (e = t.rtl && "horizontal" === t.params.direction ? -b.translate : b.translate),
                      "slide" === b.params.controlBy &&
                        (b.controller.getInterpolateFunction(t), (n = -b.controller.spline.interpolate(-e))),
                      (n && "container" !== b.params.controlBy) ||
                        ((r = (t.maxTranslate() - t.minTranslate()) / (b.maxTranslate() - b.minTranslate())),
                        (n = (e - b.minTranslate()) * r + t.minTranslate())),
                      b.params.controlInverse && (n = t.maxTranslate() - n),
                      t.updateProgress(n),
                      t.setWrapperTranslate(n, !1, b),
                      t.updateActiveIndex();
                  }
                  var r,
                    n,
                    s = b.params.control;
                  if (b.isArray(s)) for (var o = 0; o < s.length; o++) s[o] !== t && s[o] instanceof a && i(s[o]);
                  else s instanceof a && t !== s && i(s);
                },
                setTransition: function (e, t) {
                  function i(t) {
                    t.setWrapperTransition(e, b),
                      0 !== e &&
                        (t.onTransitionStart(),
                        t.wrapper.transitionEnd(function () {
                          n && (t.params.loop && "slide" === b.params.controlBy && t.fixLoop(), t.onTransitionEnd());
                        }));
                  }
                  var r,
                    n = b.params.control;
                  if (b.isArray(n)) for (r = 0; r < n.length; r++) n[r] !== t && n[r] instanceof a && i(n[r]);
                  else n instanceof a && t !== n && i(n);
                },
              }),
              (b.hashnav = {
                init: function () {
                  if (b.params.hashnav) {
                    b.hashnav.initialized = !0;
                    var e = document.location.hash.replace("#", "");
                    if (e)
                      for (var t = 0, a = 0, i = b.slides.length; i > a; a++) {
                        var r = b.slides.eq(a),
                          n = r.attr("data-hash");
                        if (n === e && !r.hasClass(b.params.slideDuplicateClass)) {
                          var s = r.index();
                          b.slideTo(s, t, b.params.runCallbacksOnInit, !0);
                        }
                      }
                  }
                },
                setHash: function () {
                  b.hashnav.initialized &&
                    b.params.hashnav &&
                    (document.location.hash = b.slides.eq(b.activeIndex).attr("data-hash") || "");
                },
              }),
              (b.disableKeyboardControl = function () {
                (b.params.keyboardControl = !1), t(document).off("keydown", p);
              }),
              (b.enableKeyboardControl = function () {
                (b.params.keyboardControl = !0), t(document).on("keydown", p);
              }),
              (b.mousewheel = {
                event: !1,
                lastScrollTime: new window.Date().getTime(),
              }),
              b.params.mousewheelControl)
            ) {
              try {
                new window.WheelEvent("wheel"), (b.mousewheel.event = "wheel");
              } catch (N) {
                (window.WheelEvent || (b.container[0] && "wheel" in b.container[0])) && (b.mousewheel.event = "wheel");
              }
              !b.mousewheel.event && window.WheelEvent,
                b.mousewheel.event || void 0 === document.onmousewheel || (b.mousewheel.event = "mousewheel"),
                b.mousewheel.event || (b.mousewheel.event = "DOMMouseScroll");
            }
            (b.disableMousewheelControl = function () {
              return b.mousewheel.event ? (b.container.off(b.mousewheel.event, d), !0) : !1;
            }),
              (b.enableMousewheelControl = function () {
                return b.mousewheel.event ? (b.container.on(b.mousewheel.event, d), !0) : !1;
              }),
              (b.parallax = {
                setTranslate: function () {
                  b.container
                    .children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                    .each(function () {
                      u(this, b.progress);
                    }),
                    b.slides.each(function () {
                      var e = t(this);
                      e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(
                        function () {
                          var t = Math.min(Math.max(e[0].progress, -1), 1);
                          u(this, t);
                        }
                      );
                    });
                },
                setTransition: function (e) {
                  "undefined" == typeof e && (e = b.params.speed),
                    b.container
                      .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                      .each(function () {
                        var a = t(this),
                          i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (i = 0), a.transition(i);
                      });
                },
              }),
              (b._plugins = []);
            for (var R in b.plugins) {
              var W = b.plugins[R](b, b.params[R]);
              W && b._plugins.push(W);
            }
            return (
              (b.callPlugins = function (e) {
                for (var t = 0; t < b._plugins.length; t++)
                  e in b._plugins[t] &&
                    b._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
              }),
              (b.emitterEventListeners = {}),
              (b.emit = function (e) {
                b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (b.emitterEventListeners[e])
                  for (t = 0; t < b.emitterEventListeners[e].length; t++)
                    b.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
              }),
              (b.on = function (e, t) {
                return (
                  (e = c(e)),
                  b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []),
                  b.emitterEventListeners[e].push(t),
                  b
                );
              }),
              (b.off = function (e, t) {
                var a;
                if (((e = c(e)), "undefined" == typeof t)) return (b.emitterEventListeners[e] = []), b;
                if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
                  for (a = 0; a < b.emitterEventListeners[e].length; a++)
                    b.emitterEventListeners[e][a] === t && b.emitterEventListeners[e].splice(a, 1);
                  return b;
                }
              }),
              (b.once = function (e, t) {
                e = c(e);
                var a = function () {
                  t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, a);
                };
                return b.on(e, a), b;
              }),
              (b.a11y = {
                makeFocusable: function (e) {
                  return e.attr("tabIndex", "0"), e;
                },
                addRole: function (e, t) {
                  return e.attr("role", t), e;
                },
                addLabel: function (e, t) {
                  return e.attr("aria-label", t), e;
                },
                disable: function (e) {
                  return e.attr("aria-disabled", !0), e;
                },
                enable: function (e) {
                  return e.attr("aria-disabled", !1), e;
                },
                onEnterKey: function (e) {
                  13 === e.keyCode &&
                    (t(e.target).is(b.params.nextButton)
                      ? (b.onClickNext(e),
                        b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage))
                      : t(e.target).is(b.params.prevButton) &&
                        (b.onClickPrev(e),
                        b.isBeginning
                          ? b.a11y.notify(b.params.firstSlideMessage)
                          : b.a11y.notify(b.params.prevSlideMessage)),
                    t(e.target).is("." + b.params.bulletClass) && t(e.target)[0].click());
                },
                liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function (e) {
                  var t = b.a11y.liveRegion;
                  0 !== t.length && (t.html(""), t.html(e));
                },
                init: function () {
                  b.params.nextButton &&
                    b.nextButton &&
                    b.nextButton.length > 0 &&
                    (b.a11y.makeFocusable(b.nextButton),
                    b.a11y.addRole(b.nextButton, "button"),
                    b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)),
                    b.params.prevButton &&
                      b.prevButton &&
                      b.prevButton.length > 0 &&
                      (b.a11y.makeFocusable(b.prevButton),
                      b.a11y.addRole(b.prevButton, "button"),
                      b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)),
                    t(b.container).append(b.a11y.liveRegion);
                },
                initPagination: function () {
                  b.params.pagination &&
                    b.params.paginationClickable &&
                    b.bullets &&
                    b.bullets.length &&
                    b.bullets.each(function () {
                      var e = t(this);
                      b.a11y.makeFocusable(e),
                        b.a11y.addRole(e, "button"),
                        b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
                    });
                },
                destroy: function () {
                  b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove();
                },
              }),
              (b.init = function () {
                b.params.loop && b.createLoop(),
                  b.updateContainerSize(),
                  b.updateSlidesSize(),
                  b.updatePagination(),
                  b.params.scrollbar &&
                    b.scrollbar &&
                    (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()),
                  "slide" !== b.params.effect &&
                    b.effects[b.params.effect] &&
                    (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()),
                  b.params.loop
                    ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit)
                    : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit),
                      0 === b.params.initialSlide &&
                        (b.parallax && b.params.parallax && b.parallax.setTranslate(),
                        b.lazy && b.params.lazyLoading && (b.lazy.load(), (b.lazy.initialImageLoaded = !0)))),
                  b.attachEvents(),
                  b.params.observer && b.support.observer && b.initObservers(),
                  b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(),
                  b.params.autoplay && b.startAutoplay(),
                  b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(),
                  b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(),
                  b.params.hashnav && b.hashnav && b.hashnav.init(),
                  b.params.a11y && b.a11y && b.a11y.init(),
                  b.emit("onInit", b);
              }),
              (b.cleanupStyles = function () {
                b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),
                  b.wrapper.removeAttr("style"),
                  b.slides &&
                    b.slides.length &&
                    b.slides
                      .removeClass(
                        [
                          b.params.slideVisibleClass,
                          b.params.slideActiveClass,
                          b.params.slideNextClass,
                          b.params.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-column")
                      .removeAttr("data-swiper-row"),
                  b.paginationContainer &&
                    b.paginationContainer.length &&
                    b.paginationContainer.removeClass(b.params.paginationHiddenClass),
                  b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass),
                  b.params.prevButton && t(b.params.prevButton).removeClass(b.params.buttonDisabledClass),
                  b.params.nextButton && t(b.params.nextButton).removeClass(b.params.buttonDisabledClass),
                  b.params.scrollbar &&
                    b.scrollbar &&
                    (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"),
                    b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"));
              }),
              (b.destroy = function (e, t) {
                b.detachEvents(),
                  b.stopAutoplay(),
                  b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(),
                  b.params.loop && b.destroyLoop(),
                  t && b.cleanupStyles(),
                  b.disconnectObservers(),
                  b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(),
                  b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(),
                  b.params.a11y && b.a11y && b.a11y.destroy(),
                  b.emit("onDestroy"),
                  e !== !1 && (b = null);
              }),
              b.init(),
              b
            );
          }
        };
      a.prototype = {
        isSafari: (function () {
          var e = navigator.userAgent.toLowerCase();
          return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function (e) {
          return "[object Array]" === Object.prototype.toString.apply(e);
        },
        browser: {
          ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
          ieTouch:
            (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) ||
            (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
        },
        device: (function () {
          var e = navigator.userAgent,
            t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            a = e.match(/(iPad).*OS\s([\d_]+)/),
            i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            r = !a && e.match(/(iPhone\sOS)\s([\d_]+)/);
          return {
            ios: a || r || i,
            android: t,
          };
        })(),
        support: {
          touch:
            (window.Modernizr && Modernizr.touch === !0) ||
            (function () {
              return !!("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch));
            })(),
          transforms3d:
            (window.Modernizr && Modernizr.csstransforms3d === !0) ||
            (function () {
              var e = document.createElement("div").style;
              return (
                "webkitPerspective" in e ||
                "MozPerspective" in e ||
                "OPerspective" in e ||
                "MsPerspective" in e ||
                "perspective" in e
              );
            })(),
          flexbox: (function () {
            for (
              var e = document.createElement("div").style,
                t =
                  "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                    " "
                  ),
                a = 0;
              a < t.length;
              a++
            )
              if (t[a] in e) return !0;
          })(),
          observer: (function () {
            return "MutationObserver" in window || "WebkitMutationObserver" in window;
          })(),
        },
        plugins: {},
      };
      for (
        var i = (function () {
            var e = function (e) {
                var t = this,
                  a = 0;
                for (a = 0; a < e.length; a++) t[a] = e[a];
                return (t.length = e.length), this;
              },
              t = function (t, a) {
                var i = [],
                  r = 0;
                if (t && !a && t instanceof e) return t;
                if (t)
                  if ("string" == typeof t) {
                    var n,
                      s,
                      o = t.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                      var l = "div";
                      for (
                        0 === o.indexOf("<li") && (l = "ul"),
                          0 === o.indexOf("<tr") && (l = "tbody"),
                          (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (l = "tr"),
                          0 === o.indexOf("<tbody") && (l = "table"),
                          0 === o.indexOf("<option") && (l = "select"),
                          s = document.createElement(l),
                          s.innerHTML = t,
                          r = 0;
                        r < s.childNodes.length;
                        r++
                      )
                        i.push(s.childNodes[r]);
                    } else
                      for (
                        n =
                          a || "#" !== t[0] || t.match(/[ .<>:~]/)
                            ? (a || document).querySelectorAll(t)
                            : [document.getElementById(t.split("#")[1])],
                          r = 0;
                        r < n.length;
                        r++
                      )
                        n[r] && i.push(n[r]);
                  } else if (t.nodeType || t === window || t === document) i.push(t);
                  else if (t.length > 0 && t[0].nodeType) for (r = 0; r < t.length; r++) i.push(t[r]);
                return new e(i);
              };
            return (
              (e.prototype = {
                addClass: function (e) {
                  if ("undefined" == typeof e) return this;
                  for (var t = e.split(" "), a = 0; a < t.length; a++)
                    for (var i = 0; i < this.length; i++) this[i].classList.add(t[a]);
                  return this;
                },
                removeClass: function (e) {
                  for (var t = e.split(" "), a = 0; a < t.length; a++)
                    for (var i = 0; i < this.length; i++) this[i].classList.remove(t[a]);
                  return this;
                },
                hasClass: function (e) {
                  return this[0] ? this[0].classList.contains(e) : !1;
                },
                toggleClass: function (e) {
                  for (var t = e.split(" "), a = 0; a < t.length; a++)
                    for (var i = 0; i < this.length; i++) this[i].classList.toggle(t[a]);
                  return this;
                },
                attr: function (e, t) {
                  if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                  for (var a = 0; a < this.length; a++)
                    if (2 === arguments.length) this[a].setAttribute(e, t);
                    else for (var i in e) (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
                  return this;
                },
                removeAttr: function (e) {
                  for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                  return this;
                },
                data: function (e, t) {
                  if ("undefined" != typeof t) {
                    for (var a = 0; a < this.length; a++) {
                      var i = this[a];
                      i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), (i.dom7ElementDataStorage[e] = t);
                    }
                    return this;
                  }
                  if (this[0]) {
                    var r = this[0].getAttribute("data-" + e);
                    return r
                      ? r
                      : this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage)
                      ? this[0].dom7ElementDataStorage[e]
                      : void 0;
                  }
                },
                transform: function (e) {
                  for (var t = 0; t < this.length; t++) {
                    var a = this[t].style;
                    a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e;
                  }
                  return this;
                },
                transition: function (e) {
                  "string" != typeof e && (e += "ms");
                  for (var t = 0; t < this.length; t++) {
                    var a = this[t].style;
                    a.webkitTransitionDuration =
                      a.MsTransitionDuration =
                      a.msTransitionDuration =
                      a.MozTransitionDuration =
                      a.OTransitionDuration =
                      a.transitionDuration =
                        e;
                  }
                  return this;
                },
                on: function (e, a, i, r) {
                  function n(e) {
                    var r = e.target;
                    if (t(r).is(a)) i.call(r, e);
                    else for (var n = t(r).parents(), s = 0; s < n.length; s++) t(n[s]).is(a) && i.call(n[s], e);
                  }
                  var s,
                    o,
                    l = e.split(" ");
                  for (s = 0; s < this.length; s++)
                    if ("function" == typeof a || a === !1)
                      for (
                        "function" == typeof a && ((i = arguments[1]), (r = arguments[2] || !1)), o = 0;
                        o < l.length;
                        o++
                      )
                        this[s].addEventListener(l[o], i, r);
                    else
                      for (o = 0; o < l.length; o++)
                        this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []),
                          this[s].dom7LiveListeners.push({
                            listener: i,
                            liveListener: n,
                          }),
                          this[s].addEventListener(l[o], n, r);
                  return this;
                },
                off: function (e, t, a, i) {
                  for (var r = e.split(" "), n = 0; n < r.length; n++)
                    for (var s = 0; s < this.length; s++)
                      if ("function" == typeof t || t === !1)
                        "function" == typeof t && ((a = arguments[1]), (i = arguments[2] || !1)),
                          this[s].removeEventListener(r[n], a, i);
                      else if (this[s].dom7LiveListeners)
                        for (var o = 0; o < this[s].dom7LiveListeners.length; o++)
                          this[s].dom7LiveListeners[o].listener === a &&
                            this[s].removeEventListener(r[n], this[s].dom7LiveListeners[o].liveListener, i);
                  return this;
                },
                once: function (e, t, a, i) {
                  function r(s) {
                    a(s), n.off(e, t, r, i);
                  }
                  var n = this;
                  "function" == typeof t && ((t = !1), (a = arguments[1]), (i = arguments[2])), n.on(e, t, r, i);
                },
                trigger: function (e, t) {
                  for (var a = 0; a < this.length; a++) {
                    var i;
                    try {
                      i = new window.CustomEvent(e, {
                        detail: t,
                        bubbles: !0,
                        cancelable: !0,
                      });
                    } catch (r) {
                      (i = document.createEvent("Event")), i.initEvent(e, !0, !0), (i.detail = t);
                    }
                    this[a].dispatchEvent(i);
                  }
                  return this;
                },
                transitionEnd: function (e) {
                  function t(n) {
                    if (n.target === this) for (e.call(this, n), a = 0; a < i.length; a++) r.off(i[a], t);
                  }
                  var a,
                    i = [
                      "webkitTransitionEnd",
                      "transitionend",
                      "oTransitionEnd",
                      "MSTransitionEnd",
                      "msTransitionEnd",
                    ],
                    r = this;
                  if (e) for (a = 0; a < i.length; a++) r.on(i[a], t);
                  return this;
                },
                width: function () {
                  return this[0] === window
                    ? window.innerWidth
                    : this.length > 0
                    ? parseFloat(this.css("width"))
                    : null;
                },
                outerWidth: function (e) {
                  return this.length > 0
                    ? e
                      ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left"))
                      : this[0].offsetWidth
                    : null;
                },
                height: function () {
                  return this[0] === window
                    ? window.innerHeight
                    : this.length > 0
                    ? parseFloat(this.css("height"))
                    : null;
                },
                outerHeight: function (e) {
                  return this.length > 0
                    ? e
                      ? this[0].offsetHeight +
                        parseFloat(this.css("margin-top")) +
                        parseFloat(this.css("margin-bottom"))
                      : this[0].offsetHeight
                    : null;
                },
                offset: function () {
                  if (this.length > 0) {
                    var e = this[0],
                      t = e.getBoundingClientRect(),
                      a = document.body,
                      i = e.clientTop || a.clientTop || 0,
                      r = e.clientLeft || a.clientLeft || 0,
                      n = window.pageYOffset || e.scrollTop,
                      s = window.pageXOffset || e.scrollLeft;
                    return {
                      top: t.top + n - i,
                      left: t.left + s - r,
                    };
                  }
                  return null;
                },
                css: function (e, t) {
                  var a;
                  if (1 === arguments.length) {
                    if ("string" != typeof e) {
                      for (a = 0; a < this.length; a++) for (var i in e) this[a].style[i] = e[i];
                      return this;
                    }
                    if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
                  }
                  if (2 === arguments.length && "string" == typeof e) {
                    for (a = 0; a < this.length; a++) this[a].style[e] = t;
                    return this;
                  }
                  return this;
                },
                each: function (e) {
                  for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                  return this;
                },
                html: function (e) {
                  if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
                  for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                  return this;
                },
                text: function (e) {
                  if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
                  for (var t = 0; t < this.length; t++) this[t].textContent = e;
                  return this;
                },
                is: function (a) {
                  if (!this[0]) return !1;
                  var i, r;
                  if ("string" == typeof a) {
                    var n = this[0];
                    if (n === document) return a === document;
                    if (n === window) return a === window;
                    if (n.matches) return n.matches(a);
                    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(a);
                    if (n.mozMatchesSelector) return n.mozMatchesSelector(a);
                    if (n.msMatchesSelector) return n.msMatchesSelector(a);
                    for (i = t(a), r = 0; r < i.length; r++) if (i[r] === this[0]) return !0;
                    return !1;
                  }
                  if (a === document) return this[0] === document;
                  if (a === window) return this[0] === window;
                  if (a.nodeType || a instanceof e) {
                    for (i = a.nodeType ? [a] : a, r = 0; r < i.length; r++) if (i[r] === this[0]) return !0;
                    return !1;
                  }
                  return !1;
                },
                index: function () {
                  if (this[0]) {
                    for (var e = this[0], t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && t++;
                    return t;
                  }
                },
                eq: function (t) {
                  if ("undefined" == typeof t) return this;
                  var a,
                    i = this.length;
                  return t > i - 1
                    ? new e([])
                    : 0 > t
                    ? ((a = i + t), new e(0 > a ? [] : [this[a]]))
                    : new e([this[t]]);
                },
                append: function (t) {
                  var a, i;
                  for (a = 0; a < this.length; a++)
                    if ("string" == typeof t) {
                      var r = document.createElement("div");
                      for (r.innerHTML = t; r.firstChild; ) this[a].appendChild(r.firstChild);
                    } else if (t instanceof e) for (i = 0; i < t.length; i++) this[a].appendChild(t[i]);
                    else this[a].appendChild(t);
                  return this;
                },
                prepend: function (t) {
                  var a, i;
                  for (a = 0; a < this.length; a++)
                    if ("string" == typeof t) {
                      var r = document.createElement("div");
                      for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i--)
                        this[a].insertBefore(r.childNodes[i], this[a].childNodes[0]);
                    } else if (t instanceof e)
                      for (i = 0; i < t.length; i++) this[a].insertBefore(t[i], this[a].childNodes[0]);
                    else this[a].insertBefore(t, this[a].childNodes[0]);
                  return this;
                },
                insertBefore: function (e) {
                  for (var a = t(e), i = 0; i < this.length; i++)
                    if (1 === a.length) a[0].parentNode.insertBefore(this[i], a[0]);
                    else if (a.length > 1)
                      for (var r = 0; r < a.length; r++) a[r].parentNode.insertBefore(this[i].cloneNode(!0), a[r]);
                },
                insertAfter: function (e) {
                  for (var a = t(e), i = 0; i < this.length; i++)
                    if (1 === a.length) a[0].parentNode.insertBefore(this[i], a[0].nextSibling);
                    else if (a.length > 1)
                      for (var r = 0; r < a.length; r++)
                        a[r].parentNode.insertBefore(this[i].cloneNode(!0), a[r].nextSibling);
                },
                next: function (a) {
                  return new e(
                    this.length > 0
                      ? a
                        ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(a)
                          ? [this[0].nextElementSibling]
                          : []
                        : this[0].nextElementSibling
                        ? [this[0].nextElementSibling]
                        : []
                      : []
                  );
                },
                nextAll: function (a) {
                  var i = [],
                    r = this[0];
                  if (!r) return new e([]);
                  for (; r.nextElementSibling; ) {
                    var n = r.nextElementSibling;
                    a ? t(n).is(a) && i.push(n) : i.push(n), (r = n);
                  }
                  return new e(i);
                },
                prev: function (a) {
                  return new e(
                    this.length > 0
                      ? a
                        ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(a)
                          ? [this[0].previousElementSibling]
                          : []
                        : this[0].previousElementSibling
                        ? [this[0].previousElementSibling]
                        : []
                      : []
                  );
                },
                prevAll: function (a) {
                  var i = [],
                    r = this[0];
                  if (!r) return new e([]);
                  for (; r.previousElementSibling; ) {
                    var n = r.previousElementSibling;
                    a ? t(n).is(a) && i.push(n) : i.push(n), (r = n);
                  }
                  return new e(i);
                },
                parent: function (e) {
                  for (var a = [], i = 0; i < this.length; i++)
                    e ? t(this[i].parentNode).is(e) && a.push(this[i].parentNode) : a.push(this[i].parentNode);
                  return t(t.unique(a));
                },
                parents: function (e) {
                  for (var a = [], i = 0; i < this.length; i++)
                    for (var r = this[i].parentNode; r; ) e ? t(r).is(e) && a.push(r) : a.push(r), (r = r.parentNode);
                  return t(t.unique(a));
                },
                find: function (t) {
                  for (var a = [], i = 0; i < this.length; i++)
                    for (var r = this[i].querySelectorAll(t), n = 0; n < r.length; n++) a.push(r[n]);
                  return new e(a);
                },
                children: function (a) {
                  for (var i = [], r = 0; r < this.length; r++)
                    for (var n = this[r].childNodes, s = 0; s < n.length; s++)
                      a ? 1 === n[s].nodeType && t(n[s]).is(a) && i.push(n[s]) : 1 === n[s].nodeType && i.push(n[s]);
                  return new e(t.unique(i));
                },
                remove: function () {
                  for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                  return this;
                },
                add: function () {
                  var e,
                    a,
                    i = this;
                  for (e = 0; e < arguments.length; e++) {
                    var r = t(arguments[e]);
                    for (a = 0; a < r.length; a++) (i[i.length] = r[a]), i.length++;
                  }
                  return i;
                },
              }),
              (t.fn = e.prototype),
              (t.unique = function (e) {
                for (var t = [], a = 0; a < e.length; a++) -1 === t.indexOf(e[a]) && t.push(e[a]);
                return t;
              }),
              t
            );
          })(),
          r = ["jQuery", "Zepto", "Dom7"],
          n = 0;
        n < r.length;
        n++
      )
        window[r[n]] && e(window[r[n]]);
      var s;
      (s = "undefined" == typeof i ? window.Dom7 || window.Zepto || window.jQuery : i),
        s &&
          ("transitionEnd" in s.fn ||
            (s.fn.transitionEnd = function (e) {
              function t(n) {
                if (n.target === this) for (e.call(this, n), a = 0; a < i.length; a++) r.off(i[a], t);
              }
              var a,
                i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                r = this;
              if (e) for (a = 0; a < i.length; a++) r.on(i[a], t);
              return this;
            }),
          "transform" in s.fn ||
            (s.fn.transform = function (e) {
              for (var t = 0; t < this.length; t++) {
                var a = this[t].style;
                a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e;
              }
              return this;
            }),
          "transition" in s.fn ||
            (s.fn.transition = function (e) {
              "string" != typeof e && (e += "ms");
              for (var t = 0; t < this.length; t++) {
                var a = this[t].style;
                a.webkitTransitionDuration =
                  a.MsTransitionDuration =
                  a.msTransitionDuration =
                  a.MozTransitionDuration =
                  a.OTransitionDuration =
                  a.transitionDuration =
                    e;
              }
              return this;
            })),
        (window.Swiper = a);
    })(),
      (e.exports = window.Swiper);
  },
  function (e, t, a) {
    function i(e, t, a) {
      var i = !0,
        o = !0;
      if ("function" != typeof e) throw new TypeError(s);
      return (
        n(a) && ((i = "leading" in a ? !!a.leading : i), (o = "trailing" in a ? !!a.trailing : o)),
        r(e, t, {
          leading: i,
          maxWait: t,
          trailing: o,
        })
      );
    }
    var r = a(3),
      n = a(4),
      s = "Expected a function";
    e.exports = i;
  },
  function (e, t, a) {
    function i(e, t, a) {
      function i(t) {
        var a = w,
          i = y;
        return (w = y = void 0), (C = t), (x = e.apply(i, a));
      }

      function d(e) {
        return (C = e), (T = setTimeout(m, t)), z ? i(e) : x;
      }

      function u(e) {
        var a = e - S,
          i = e - C,
          r = t - a;
        return M ? p(r, b - i) : r;
      }

      function c(e) {
        var a = e - S,
          i = e - C;
        return !S || a >= t || 0 > a || (M && i >= b);
      }

      function m() {
        var e = n();
        return c(e) ? f(e) : void (T = setTimeout(m, u(e)));
      }

      function f(e) {
        return clearTimeout(T), (T = void 0), E && w ? i(e) : ((w = y = void 0), x);
      }

      function h() {
        void 0 !== T && clearTimeout(T), (S = C = 0), (w = y = T = void 0);
      }

      function g() {
        return void 0 === T ? x : f(n());
      }

      function v() {
        var e = n(),
          a = c(e);
        if (((w = arguments), (y = this), (S = e), a)) {
          if (void 0 === T) return d(S);
          if (M) return clearTimeout(T), (T = setTimeout(m, t)), i(S);
        }
        return void 0 === T && (T = setTimeout(m, t)), x;
      }
      var w,
        y,
        b,
        x,
        T,
        S = 0,
        C = 0,
        z = !1,
        M = !1,
        E = !0;
      if ("function" != typeof e) throw new TypeError(o);
      return (
        (t = s(t) || 0),
        r(a) &&
          ((z = !!a.leading),
          (M = "maxWait" in a),
          (b = M ? l(s(a.maxWait) || 0, t) : b),
          (E = "trailing" in a ? !!a.trailing : E)),
        (v.cancel = h),
        (v.flush = g),
        v
      );
    }
    var r = a(4),
      n = a(5),
      s = a(6),
      o = "Expected a function",
      l = Math.max,
      p = Math.min;
    e.exports = i;
  },
  function (e, t) {
    function a(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    e.exports = a;
  },
  function (e, t) {
    var a = Date.now;
    e.exports = a;
  },
  function (e, t, a) {
    function i(e) {
      if ("number" == typeof e) return e;
      if (s(e)) return o;
      if (n(e)) {
        var t = r(e.valueOf) ? e.valueOf() : e;
        e = n(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(l, "");
      var a = d.test(e);
      return a || u.test(e) ? c(e.slice(2), a ? 2 : 8) : p.test(e) ? o : +e;
    }
    var r = a(7),
      n = a(4),
      s = a(8),
      o = NaN,
      l = /^\s+|\s+$/g,
      p = /^[-+]0x[0-9a-f]+$/i,
      d = /^0b[01]+$/i,
      u = /^0o[0-7]+$/i,
      c = parseInt;
    e.exports = i;
  },
  function (e, t, a) {
    function i(e) {
      var t = r(e) ? l.call(e) : "";
      return t == n || t == s;
    }
    var r = a(4),
      n = "[object Function]",
      s = "[object GeneratorFunction]",
      o = Object.prototype,
      l = o.toString;
    e.exports = i;
  },
  function (e, t, a) {
    function i(e) {
      return "symbol" == typeof e || (r(e) && o.call(e) == n);
    }
    var r = a(9),
      n = "[object Symbol]",
      s = Object.prototype,
      o = s.toString;
    e.exports = i;
  },
  function (e, t) {
    function a(e) {
      return !!e && "object" == typeof e;
    }
    e.exports = a;
  },
  function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var a = function (e, t, a, i) {
        if ("undefined" != typeof e.textContent) var r = e.textContent;
        else var r = e.innerText;
        var n,
          r = r.split(t),
          s = "";
        if (r.length) {
          for (var o = 0, l = r.length; (n = r[o]), l > o; o++)
            s += '<span class="' + a + (o + 1) + '">' + n + "</span>" + i;
          e.innerHTML = s;
        }
      },
      i = {
        init: function (e) {
          for (var t = e.length - 1; t >= 0; --t) a(e[t], "", "char", "");
        },
      },
      r = function (e, t) {
        null != e && ("undefined" == typeof e.length && (e = [e]), i.init(e));
      };
    t["default"] = r;
  },
]);

console.log("app js called sucuess")
