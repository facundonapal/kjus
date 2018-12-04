/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-history-localstorage-sessionstorage-domprefixes-hasevent-mq-prefixes-setclasses-testallprops-testprop-teststyles-cssclassprefix:has-- !*/
!function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }
    function o() {
        var e, t, n, o, i, s, a;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [],
                t = C[l],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn,
                i = 0; i < e.length; i++)
                    s = e[i],
                    a = s.split("."),
                    1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]]instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                    Modernizr[a[0]][a[1]] = o),
                    S.push((o ? "" : "no-") + a.join("-"))
            }
    }
    function i(e) {
        var t = x.className
          , n = Modernizr._config.classPrefix || "";
        if (_ && (t = t.baseVal),
        Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n),
        _ ? x.className.baseVal = t : x.className = t)
    }
    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function a() {
        var e = t.body;
        return e || (e = s(_ ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function l(e, n, r, o) {
        var i, l, u, f, c = "modernizr", d = s("div"), p = a();
        if (parseInt(r, 10))
            for (; r--; )
                u = s("div"),
                u.id = o ? o[r] : c + (r + 1),
                d.appendChild(u);
        return i = s("style"),
        i.type = "text/css",
        i.id = "s" + c,
        (p.fake ? p : d).appendChild(i),
        p.appendChild(d),
        i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)),
        d.id = c,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        f = x.style.overflow,
        x.style.overflow = "hidden",
        x.appendChild(p)),
        l = n(d, e),
        p.fake ? (p.parentNode.removeChild(p),
        x.style.overflow = f,
        x.offsetHeight) : d.parentNode.removeChild(d),
        !!l
    }
    function u(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function c(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function d(e, t, n) {
        var o;
        for (var i in e)
            if (e[i]in t)
                return n === !1 ? e[i] : (o = t[e[i]],
                r(o, "function") ? c(o, n || t) : o);
        return !1
    }
    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function m(t, n, r) {
        var o;
        if ("getComputedStyle"in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o)
                r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }
    function v(t, r) {
        var o = t.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; o--; )
                if (e.CSS.supports(p(t[o]), r))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var i = []; o--; )
                i.push("(" + p(t[o]) + ":" + r + ")");
            return i = i.join(" or "),
            l("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == m(e, null, "position")
            })
        }
        return n
    }
    function y(e, t, o, i) {
        function a() {
            c && (delete O.style,
            delete O.modElem)
        }
        if (i = r(i, "undefined") ? !1 : i,
        !r(o, "undefined")) {
            var l = v(e, o);
            if (!r(l, "undefined"))
                return l
        }
        for (var c, d, p, m, y, g = ["modernizr", "tspan", "samp"]; !O.style && g.length; )
            c = !0,
            O.modElem = s(g.shift()),
            O.style = O.modElem.style;
        for (p = e.length,
        d = 0; p > d; d++)
            if (m = e[d],
            y = O.style[m],
            u(m, "-") && (m = f(m)),
            O.style[m] !== n) {
                if (i || r(o, "undefined"))
                    return a(),
                    "pfx" == t ? m : !0;
                try {
                    O.style[m] = o
                } catch (h) {}
                if (O.style[m] != y)
                    return a(),
                    "pfx" == t ? m : !0
            }
        return a(),
        !1
    }
    function g(e, t, n, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1)
          , a = (e + " " + T.join(s + " ") + s).split(" ");
        return r(t, "string") || r(t, "undefined") ? y(a, t, o, i) : (a = (e + " " + P.join(s + " ") + s).split(" "),
        d(a, t, n))
    }
    function h(e, t, r) {
        return g(e, n, n, t, r)
    }
    var S = []
      , C = []
      , b = {
        _version: "3.5.0",
        _config: {
            classPrefix: "has--",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            C.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            C.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = b,
    Modernizr = new Modernizr,
    Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState"in e.history : !1
    }),
    Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e),
            localStorage.removeItem(e),
            !0
        } catch (t) {
            return !1
        }
    }),
    Modernizr.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e),
            sessionStorage.removeItem(e),
            !0
        } catch (t) {
            return !1
        }
    });
    var w = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    b._prefixes = w;
    var x = t.documentElement
      , _ = "svg" === x.nodeName.toLowerCase()
      , z = "Moz O ms Webkit"
      , P = b._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    b._domPrefixes = P;
    var A = function() {
        function e(e, t) {
            var o;
            return e ? (t && "string" != typeof t || (t = s(t || "div")),
            e = "on" + e,
            o = e in t,
            !o && r && (t.setAttribute || (t = s("div")),
            t.setAttribute(e, ""),
            o = "function" == typeof t[e],
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
            o) : !1
        }
        var r = !("onblur"in t.documentElement);
        return e
    }();
    b.hasEvent = A;
    var E = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        }
        : function(t) {
            var n = !1;
            return l("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }),
            n
        }
    }();
    b.mq = E;
    var T = (b.testStyles = l,
    b._config.usePrefixes ? z.split(" ") : []);
    b._cssomPrefixes = T;
    var N = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete N.elem
    });
    var O = {
        style: N.elem.style
    };
    Modernizr._q.unshift(function() {
        delete O.style
    });
    b.testProp = function(e, t, r) {
        return y([e], n, t, r)
    }
    ;
    b.testAllProps = g,
    b.testAllProps = h,
    Modernizr.addTest("cssanimations", h("animationName", "a", !0)),
    o(),
    i(S),
    delete b.addTest,
    delete b.addAsyncTest;
    for (var j = 0; j < Modernizr._q.length; j++)
        Modernizr._q[j]();
    e.Modernizr = Modernizr
}(window, document);
