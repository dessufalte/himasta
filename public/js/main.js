/*! For license information please see main.js.LICENSE.txt */
!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var a = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && "string" != typeof e)
            )
                for (var a in e)
                    n.d(
                        r,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/"),
        n((n.s = 27));
})([
    function (e, t, n) {
        "use strict";
        e.exports = n(15);
    },
    function (e, t, n) {
        "use strict";
        e.exports = n(19);
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            var r = n(8),
                a = n(0),
                i = n.n(a),
                o = n(12),
                l = n.n(o),
                u = n(13),
                s = n(14),
                c = n(5),
                f = n(9),
                d = n.n(f);
            function p() {
                return (p =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var m = function (e, t) {
                    for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
                        n.push(t[r], e[r + 1]);
                    return n;
                },
                h = function (e) {
                    return (
                        null !== e &&
                        "object" == typeof e &&
                        "[object Object]" ===
                            (e.toString
                                ? e.toString()
                                : Object.prototype.toString.call(e)) &&
                        !Object(r.typeOf)(e)
                    );
                },
                v = Object.freeze([]),
                g = Object.freeze({});
            function y(e) {
                return "function" == typeof e;
            }
            function b(e) {
                return e.displayName || e.name || "Component";
            }
            function w(e) {
                return e && "string" == typeof e.styledComponentId;
            }
            var x =
                    ("undefined" != typeof e &&
                        (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0,
                            FAST_REFRESH: !0,
                        }).REACT_APP_SC_ATTR ||
                            Object({
                                NODE_ENV: "production",
                                PUBLIC_URL: "",
                                WDS_SOCKET_HOST: void 0,
                                WDS_SOCKET_PATH: void 0,
                                WDS_SOCKET_PORT: void 0,
                                FAST_REFRESH: !0,
                            }).SC_ATTR)) ||
                    "data-styled",
                k = "undefined" != typeof window && "HTMLElement" in window,
                S = Boolean(
                    "boolean" == typeof SC_DISABLE_SPEEDY
                        ? SC_DISABLE_SPEEDY
                        : "undefined" != typeof e &&
                          void 0 !==
                              Object({
                                  NODE_ENV: "production",
                                  PUBLIC_URL: "",
                                  WDS_SOCKET_HOST: void 0,
                                  WDS_SOCKET_PATH: void 0,
                                  WDS_SOCKET_PORT: void 0,
                                  FAST_REFRESH: !0,
                              }).REACT_APP_SC_DISABLE_SPEEDY &&
                          "" !==
                              Object({
                                  NODE_ENV: "production",
                                  PUBLIC_URL: "",
                                  WDS_SOCKET_HOST: void 0,
                                  WDS_SOCKET_PATH: void 0,
                                  WDS_SOCKET_PORT: void 0,
                                  FAST_REFRESH: !0,
                              }).REACT_APP_SC_DISABLE_SPEEDY
                        ? "false" !==
                              Object({
                                  NODE_ENV: "production",
                                  PUBLIC_URL: "",
                                  WDS_SOCKET_HOST: void 0,
                                  WDS_SOCKET_PATH: void 0,
                                  WDS_SOCKET_PORT: void 0,
                                  FAST_REFRESH: !0,
                              }).REACT_APP_SC_DISABLE_SPEEDY &&
                          Object({
                              NODE_ENV: "production",
                              PUBLIC_URL: "",
                              WDS_SOCKET_HOST: void 0,
                              WDS_SOCKET_PATH: void 0,
                              WDS_SOCKET_PORT: void 0,
                              FAST_REFRESH: !0,
                          }).REACT_APP_SC_DISABLE_SPEEDY
                        : "undefined" != typeof e &&
                          void 0 !==
                              Object({
                                  NODE_ENV: "production",
                                  PUBLIC_URL: "",
                                  WDS_SOCKET_HOST: void 0,
                                  WDS_SOCKET_PATH: void 0,
                                  WDS_SOCKET_PORT: void 0,
                                  FAST_REFRESH: !0,
                              }).SC_DISABLE_SPEEDY &&
                          "" !==
                              Object({
                                  NODE_ENV: "production",
                                  PUBLIC_URL: "",
                                  WDS_SOCKET_HOST: void 0,
                                  WDS_SOCKET_PATH: void 0,
                                  WDS_SOCKET_PORT: void 0,
                                  FAST_REFRESH: !0,
                              }).SC_DISABLE_SPEEDY &&
                          "false" !==
                              Object({
                                  NODE_ENV: "production",
                                  PUBLIC_URL: "",
                                  WDS_SOCKET_HOST: void 0,
                                  WDS_SOCKET_PATH: void 0,
                                  WDS_SOCKET_PORT: void 0,
                                  FAST_REFRESH: !0,
                              }).SC_DISABLE_SPEEDY &&
                          Object({
                              NODE_ENV: "production",
                              PUBLIC_URL: "",
                              WDS_SOCKET_HOST: void 0,
                              WDS_SOCKET_PATH: void 0,
                              WDS_SOCKET_PORT: void 0,
                              FAST_REFRESH: !0,
                          }).SC_DISABLE_SPEEDY
                );
            function O(e) {
                for (
                    var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                    r < t;
                    r++
                )
                    n[r - 1] = arguments[r];
                throw new Error(
                    "An error occurred. See https://git.io/JUIaE#" +
                        e +
                        " for more information." +
                        (n.length > 0 ? " Args: " + n.join(", ") : "")
                );
            }
            var C = (function () {
                    function e(e) {
                        (this.groupSizes = new Uint32Array(512)),
                            (this.length = 512),
                            (this.tag = e);
                    }
                    var t = e.prototype;
                    return (
                        (t.indexOfGroup = function (e) {
                            for (var t = 0, n = 0; n < e; n++)
                                t += this.groupSizes[n];
                            return t;
                        }),
                        (t.insertRules = function (e, t) {
                            if (e >= this.groupSizes.length) {
                                for (
                                    var n = this.groupSizes,
                                        r = n.length,
                                        a = r;
                                    e >= a;

                                )
                                    (a <<= 1) < 0 && O(16, "" + e);
                                (this.groupSizes = new Uint32Array(a)),
                                    this.groupSizes.set(n),
                                    (this.length = a);
                                for (var i = r; i < a; i++)
                                    this.groupSizes[i] = 0;
                            }
                            for (
                                var o = this.indexOfGroup(e + 1),
                                    l = 0,
                                    u = t.length;
                                l < u;
                                l++
                            )
                                this.tag.insertRule(o, t[l]) &&
                                    (this.groupSizes[e]++, o++);
                        }),
                        (t.clearGroup = function (e) {
                            if (e < this.length) {
                                var t = this.groupSizes[e],
                                    n = this.indexOfGroup(e),
                                    r = n + t;
                                this.groupSizes[e] = 0;
                                for (var a = n; a < r; a++)
                                    this.tag.deleteRule(n);
                            }
                        }),
                        (t.getGroup = function (e) {
                            var t = "";
                            if (e >= this.length || 0 === this.groupSizes[e])
                                return t;
                            for (
                                var n = this.groupSizes[e],
                                    r = this.indexOfGroup(e),
                                    a = r + n,
                                    i = r;
                                i < a;
                                i++
                            )
                                t += this.tag.getRule(i) + "/*!sc*/\n";
                            return t;
                        }),
                        e
                    );
                })(),
                j = new Map(),
                E = new Map(),
                P = 1,
                _ = function (e) {
                    if (j.has(e)) return j.get(e);
                    for (; E.has(P); ) P++;
                    var t = P++;
                    return j.set(e, t), E.set(t, e), t;
                },
                T = function (e) {
                    return E.get(e);
                },
                L = function (e, t) {
                    j.set(e, t), E.set(t, e);
                },
                A = "style[" + x + '][data-styled-version="5.3.0"]',
                I = new RegExp(
                    "^" + x + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
                ),
                R = function (e, t, n) {
                    for (
                        var r, a = n.split(","), i = 0, o = a.length;
                        i < o;
                        i++
                    )
                        (r = a[i]) && e.registerName(t, r);
                },
                M = function (e, t) {
                    for (
                        var n = t.innerHTML.split("/*!sc*/\n"),
                            r = [],
                            a = 0,
                            i = n.length;
                        a < i;
                        a++
                    ) {
                        var o = n[a].trim();
                        if (o) {
                            var l = o.match(I);
                            if (l) {
                                var u = 0 | parseInt(l[1], 10),
                                    s = l[2];
                                0 !== u &&
                                    (L(s, u),
                                    R(e, s, l[3]),
                                    e.getTag().insertRules(u, r)),
                                    (r.length = 0);
                            } else r.push(o);
                        }
                    }
                },
                z = function () {
                    return "undefined" != typeof window &&
                        void 0 !== window.__webpack_nonce__
                        ? window.__webpack_nonce__
                        : null;
                },
                N = function (e) {
                    var t = document.head,
                        n = e || t,
                        r = document.createElement("style"),
                        a = (function (e) {
                            for (
                                var t = e.childNodes, n = t.length;
                                n >= 0;
                                n--
                            ) {
                                var r = t[n];
                                if (r && 1 === r.nodeType && r.hasAttribute(x))
                                    return r;
                            }
                        })(n),
                        i = void 0 !== a ? a.nextSibling : null;
                    r.setAttribute(x, "active"),
                        r.setAttribute("data-styled-version", "5.3.0");
                    var o = z();
                    return (
                        o && r.setAttribute("nonce", o), n.insertBefore(r, i), r
                    );
                },
                D = (function () {
                    function e(e) {
                        var t = (this.element = N(e));
                        t.appendChild(document.createTextNode("")),
                            (this.sheet = (function (e) {
                                if (e.sheet) return e.sheet;
                                for (
                                    var t = document.styleSheets,
                                        n = 0,
                                        r = t.length;
                                    n < r;
                                    n++
                                ) {
                                    var a = t[n];
                                    if (a.ownerNode === e) return a;
                                }
                                O(17);
                            })(t)),
                            (this.length = 0);
                    }
                    var t = e.prototype;
                    return (
                        (t.insertRule = function (e, t) {
                            try {
                                return (
                                    this.sheet.insertRule(t, e),
                                    this.length++,
                                    !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        }),
                        (t.deleteRule = function (e) {
                            this.sheet.deleteRule(e), this.length--;
                        }),
                        (t.getRule = function (e) {
                            var t = this.sheet.cssRules[e];
                            return void 0 !== t && "string" == typeof t.cssText
                                ? t.cssText
                                : "";
                        }),
                        e
                    );
                })(),
                F = (function () {
                    function e(e) {
                        var t = (this.element = N(e));
                        (this.nodes = t.childNodes), (this.length = 0);
                    }
                    var t = e.prototype;
                    return (
                        (t.insertRule = function (e, t) {
                            if (e <= this.length && e >= 0) {
                                var n = document.createTextNode(t),
                                    r = this.nodes[e];
                                return (
                                    this.element.insertBefore(n, r || null),
                                    this.length++,
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.deleteRule = function (e) {
                            this.element.removeChild(this.nodes[e]),
                                this.length--;
                        }),
                        (t.getRule = function (e) {
                            return e < this.length
                                ? this.nodes[e].textContent
                                : "";
                        }),
                        e
                    );
                })(),
                B = (function () {
                    function e(e) {
                        (this.rules = []), (this.length = 0);
                    }
                    var t = e.prototype;
                    return (
                        (t.insertRule = function (e, t) {
                            return (
                                e <= this.length &&
                                (this.rules.splice(e, 0, t), this.length++, !0)
                            );
                        }),
                        (t.deleteRule = function (e) {
                            this.rules.splice(e, 1), this.length--;
                        }),
                        (t.getRule = function (e) {
                            return e < this.length ? this.rules[e] : "";
                        }),
                        e
                    );
                })(),
                V = k,
                H = { isServer: !k, useCSSOMInjection: !S },
                W = (function () {
                    function e(e, t, n) {
                        void 0 === e && (e = g),
                            void 0 === t && (t = {}),
                            (this.options = p({}, H, {}, e)),
                            (this.gs = t),
                            (this.names = new Map(n)),
                            !this.options.isServer &&
                                k &&
                                V &&
                                ((V = !1),
                                (function (e) {
                                    for (
                                        var t = document.querySelectorAll(A),
                                            n = 0,
                                            r = t.length;
                                        n < r;
                                        n++
                                    ) {
                                        var a = t[n];
                                        a &&
                                            "active" !== a.getAttribute(x) &&
                                            (M(e, a),
                                            a.parentNode &&
                                                a.parentNode.removeChild(a));
                                    }
                                })(this));
                    }
                    e.registerId = function (e) {
                        return _(e);
                    };
                    var t = e.prototype;
                    return (
                        (t.reconstructWithOptions = function (t, n) {
                            return (
                                void 0 === n && (n = !0),
                                new e(
                                    p({}, this.options, {}, t),
                                    this.gs,
                                    (n && this.names) || void 0
                                )
                            );
                        }),
                        (t.allocateGSInstance = function (e) {
                            return (this.gs[e] = (this.gs[e] || 0) + 1);
                        }),
                        (t.getTag = function () {
                            return (
                                this.tag ||
                                (this.tag =
                                    ((n = (t = this.options).isServer),
                                    (r = t.useCSSOMInjection),
                                    (a = t.target),
                                    (e = n
                                        ? new B(a)
                                        : r
                                        ? new D(a)
                                        : new F(a)),
                                    new C(e)))
                            );
                            var e, t, n, r, a;
                        }),
                        (t.hasNameForId = function (e, t) {
                            return (
                                this.names.has(e) && this.names.get(e).has(t)
                            );
                        }),
                        (t.registerName = function (e, t) {
                            if ((_(e), this.names.has(e)))
                                this.names.get(e).add(t);
                            else {
                                var n = new Set();
                                n.add(t), this.names.set(e, n);
                            }
                        }),
                        (t.insertRules = function (e, t, n) {
                            this.registerName(e, t),
                                this.getTag().insertRules(_(e), n);
                        }),
                        (t.clearNames = function (e) {
                            this.names.has(e) && this.names.get(e).clear();
                        }),
                        (t.clearRules = function (e) {
                            this.getTag().clearGroup(_(e)), this.clearNames(e);
                        }),
                        (t.clearTag = function () {
                            this.tag = void 0;
                        }),
                        (t.toString = function () {
                            return (function (e) {
                                for (
                                    var t = e.getTag(),
                                        n = t.length,
                                        r = "",
                                        a = 0;
                                    a < n;
                                    a++
                                ) {
                                    var i = T(a);
                                    if (void 0 !== i) {
                                        var o = e.names.get(i),
                                            l = t.getGroup(a);
                                        if (void 0 !== o && 0 !== l.length) {
                                            var u =
                                                    x +
                                                    ".g" +
                                                    a +
                                                    '[id="' +
                                                    i +
                                                    '"]',
                                                s = "";
                                            void 0 !== o &&
                                                o.forEach(function (e) {
                                                    e.length > 0 &&
                                                        (s += e + ",");
                                                }),
                                                (r +=
                                                    "" +
                                                    l +
                                                    u +
                                                    '{content:"' +
                                                    s +
                                                    '"}/*!sc*/\n');
                                        }
                                    }
                                }
                                return r;
                            })(this);
                        }),
                        e
                    );
                })(),
                U = /(a)(d)/gi,
                $ = function (e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97));
                };
            function Y(e) {
                var t,
                    n = "";
                for (t = Math.abs(e); t > 52; t = (t / 52) | 0)
                    n = $(t % 52) + n;
                return ($(t % 52) + n).replace(U, "$1-$2");
            }
            var X = function (e, t) {
                    for (var n = t.length; n; )
                        e = (33 * e) ^ t.charCodeAt(--n);
                    return e;
                },
                K = function (e) {
                    return X(5381, e);
                };
            function q(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var n = e[t];
                    if (y(n) && !w(n)) return !1;
                }
                return !0;
            }
            var Q = K("5.3.0"),
                G = (function () {
                    function e(e, t, n) {
                        (this.rules = e),
                            (this.staticRulesId = ""),
                            (this.isStatic =
                                (void 0 === n || n.isStatic) && q(e)),
                            (this.componentId = t),
                            (this.baseHash = X(Q, t)),
                            (this.baseStyle = n),
                            W.registerId(t);
                    }
                    return (
                        (e.prototype.generateAndInjectStyles = function (
                            e,
                            t,
                            n
                        ) {
                            var r = this.componentId,
                                a = [];
                            if (
                                (this.baseStyle &&
                                    a.push(
                                        this.baseStyle.generateAndInjectStyles(
                                            e,
                                            t,
                                            n
                                        )
                                    ),
                                this.isStatic && !n.hash)
                            )
                                if (
                                    this.staticRulesId &&
                                    t.hasNameForId(r, this.staticRulesId)
                                )
                                    a.push(this.staticRulesId);
                                else {
                                    var i = he(this.rules, e, t, n).join(""),
                                        o = Y(X(this.baseHash, i.length) >>> 0);
                                    if (!t.hasNameForId(r, o)) {
                                        var l = n(i, "." + o, void 0, r);
                                        t.insertRules(r, o, l);
                                    }
                                    a.push(o), (this.staticRulesId = o);
                                }
                            else {
                                for (
                                    var u = this.rules.length,
                                        s = X(this.baseHash, n.hash),
                                        c = "",
                                        f = 0;
                                    f < u;
                                    f++
                                ) {
                                    var d = this.rules[f];
                                    if ("string" == typeof d) c += d;
                                    else if (d) {
                                        var p = he(d, e, t, n),
                                            m = Array.isArray(p)
                                                ? p.join("")
                                                : p;
                                        (s = X(s, m + f)), (c += m);
                                    }
                                }
                                if (c) {
                                    var h = Y(s >>> 0);
                                    if (!t.hasNameForId(r, h)) {
                                        var v = n(c, "." + h, void 0, r);
                                        t.insertRules(r, h, v);
                                    }
                                    a.push(h);
                                }
                            }
                            return a.join(" ");
                        }),
                        e
                    );
                })(),
                Z = /^\s*\/\/.*$/gm,
                J = [":", "[", ".", "#"];
            function ee(e) {
                var t,
                    n,
                    r,
                    a,
                    i = void 0 === e ? g : e,
                    o = i.options,
                    l = void 0 === o ? g : o,
                    s = i.plugins,
                    c = void 0 === s ? v : s,
                    f = new u.a(l),
                    d = [],
                    p = (function (e) {
                        function t(t) {
                            if (t)
                                try {
                                    e(t + "}");
                                } catch (e) {}
                        }
                        return function (n, r, a, i, o, l, u, s, c, f) {
                            switch (n) {
                                case 1:
                                    if (0 === c && 64 === r.charCodeAt(0))
                                        return e(r + ";"), "";
                                    break;
                                case 2:
                                    if (0 === s) return r + "/*|*/";
                                    break;
                                case 3:
                                    switch (s) {
                                        case 102:
                                        case 112:
                                            return e(a[0] + r), "";
                                        default:
                                            return r + (0 === f ? "/*|*/" : "");
                                    }
                                case -2:
                                    r.split("/*|*/}").forEach(t);
                            }
                        };
                    })(function (e) {
                        d.push(e);
                    }),
                    m = function (e, r, i) {
                        return (0 === r && -1 !== J.indexOf(i[n.length])) ||
                            i.match(a)
                            ? e
                            : "." + t;
                    };
                function h(e, i, o, l) {
                    void 0 === l && (l = "&");
                    var u = e.replace(Z, ""),
                        s = i && o ? o + " " + i + " { " + u + " }" : u;
                    return (
                        (t = l),
                        (n = i),
                        (r = new RegExp("\\" + n + "\\b", "g")),
                        (a = new RegExp("(\\" + n + "\\b){2,}")),
                        f(o || !i ? "" : i, s)
                    );
                }
                return (
                    f.use(
                        [].concat(c, [
                            function (e, t, a) {
                                2 === e &&
                                    a.length &&
                                    a[0].lastIndexOf(n) > 0 &&
                                    (a[0] = a[0].replace(r, m));
                            },
                            p,
                            function (e) {
                                if (-2 === e) {
                                    var t = d;
                                    return (d = []), t;
                                }
                            },
                        ])
                    ),
                    (h.hash = c.length
                        ? c
                              .reduce(function (e, t) {
                                  return t.name || O(15), X(e, t.name);
                              }, 5381)
                              .toString()
                        : ""),
                    h
                );
            }
            var te = i.a.createContext(),
                ne = (te.Consumer, i.a.createContext()),
                re = (ne.Consumer, new W()),
                ae = ee();
            function ie() {
                return Object(a.useContext)(te) || re;
            }
            function oe() {
                return Object(a.useContext)(ne) || ae;
            }
            function le(e) {
                var t = Object(a.useState)(e.stylisPlugins),
                    n = t[0],
                    r = t[1],
                    o = ie(),
                    u = Object(a.useMemo)(
                        function () {
                            var t = o;
                            return (
                                e.sheet
                                    ? (t = e.sheet)
                                    : e.target &&
                                      (t = t.reconstructWithOptions(
                                          { target: e.target },
                                          !1
                                      )),
                                e.disableCSSOMInjection &&
                                    (t = t.reconstructWithOptions({
                                        useCSSOMInjection: !1,
                                    })),
                                t
                            );
                        },
                        [e.disableCSSOMInjection, e.sheet, e.target]
                    ),
                    s = Object(a.useMemo)(
                        function () {
                            return ee({
                                options: { prefix: !e.disableVendorPrefixes },
                                plugins: n,
                            });
                        },
                        [e.disableVendorPrefixes, n]
                    );
                return (
                    Object(a.useEffect)(
                        function () {
                            l()(n, e.stylisPlugins) || r(e.stylisPlugins);
                        },
                        [e.stylisPlugins]
                    ),
                    i.a.createElement(
                        te.Provider,
                        { value: u },
                        i.a.createElement(ne.Provider, { value: s }, e.children)
                    )
                );
            }
            var ue = (function () {
                    function e(e, t) {
                        var n = this;
                        (this.inject = function (e, t) {
                            void 0 === t && (t = ae);
                            var r = n.name + t.hash;
                            e.hasNameForId(n.id, r) ||
                                e.insertRules(
                                    n.id,
                                    r,
                                    t(n.rules, r, "@keyframes")
                                );
                        }),
                            (this.toString = function () {
                                return O(12, String(n.name));
                            }),
                            (this.name = e),
                            (this.id = "sc-keyframes-" + e),
                            (this.rules = t);
                    }
                    return (
                        (e.prototype.getName = function (e) {
                            return void 0 === e && (e = ae), this.name + e.hash;
                        }),
                        e
                    );
                })(),
                se = /([A-Z])/,
                ce = /([A-Z])/g,
                fe = /^ms-/,
                de = function (e) {
                    return "-" + e.toLowerCase();
                };
            function pe(e) {
                return se.test(e) ? e.replace(ce, de).replace(fe, "-ms-") : e;
            }
            var me = function (e) {
                return null == e || !1 === e || "" === e;
            };
            function he(e, t, n, r) {
                if (Array.isArray(e)) {
                    for (var a, i = [], o = 0, l = e.length; o < l; o += 1)
                        "" !== (a = he(e[o], t, n, r)) &&
                            (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
                    return i;
                }
                return me(e)
                    ? ""
                    : w(e)
                    ? "." + e.styledComponentId
                    : y(e)
                    ? "function" != typeof (u = e) ||
                      (u.prototype && u.prototype.isReactComponent) ||
                      !t
                        ? e
                        : he(e(t), t, n, r)
                    : e instanceof ue
                    ? n
                        ? (e.inject(n, r), e.getName(r))
                        : e
                    : h(e)
                    ? (function e(t, n) {
                          var r,
                              a,
                              i = [];
                          for (var o in t)
                              t.hasOwnProperty(o) &&
                                  !me(t[o]) &&
                                  (h(t[o])
                                      ? i.push.apply(i, e(t[o], o))
                                      : y(t[o])
                                      ? i.push(pe(o) + ":", t[o], ";")
                                      : i.push(
                                            pe(o) +
                                                ": " +
                                                ((r = o),
                                                (null == (a = t[o]) ||
                                                "boolean" == typeof a ||
                                                "" === a
                                                    ? ""
                                                    : "number" != typeof a ||
                                                      0 === a ||
                                                      r in s.a
                                                    ? String(a).trim()
                                                    : a + "px") + ";")
                                        ));
                          return n ? [n + " {"].concat(i, ["}"]) : i;
                      })(e)
                    : e.toString();
                var u;
            }
            function ve(e) {
                for (
                    var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                    r < t;
                    r++
                )
                    n[r - 1] = arguments[r];
                return y(e) || h(e)
                    ? he(m(v, [e].concat(n)))
                    : 0 === n.length &&
                      1 === e.length &&
                      "string" == typeof e[0]
                    ? e
                    : he(m(e, n));
            }
            new Set();
            var ge = function (e, t, n) {
                    return (
                        void 0 === n && (n = g),
                        (e.theme !== n.theme && e.theme) || t || n.theme
                    );
                },
                ye = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                be = /(^-|-$)/g;
            function we(e) {
                return e.replace(ye, "-").replace(be, "");
            }
            var xe = function (e) {
                return Y(K(e) >>> 0);
            };
            function ke(e) {
                return "string" == typeof e && !0;
            }
            var Se = function (e) {
                    return (
                        "function" == typeof e ||
                        ("object" == typeof e &&
                            null !== e &&
                            !Array.isArray(e))
                    );
                },
                Oe = function (e) {
                    return (
                        "__proto__" !== e &&
                        "constructor" !== e &&
                        "prototype" !== e
                    );
                };
            function Ce(e, t, n) {
                var r = e[n];
                Se(t) && Se(r) ? je(r, t) : (e[n] = t);
            }
            function je(e) {
                for (
                    var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                    r < t;
                    r++
                )
                    n[r - 1] = arguments[r];
                for (var a = 0, i = n; a < i.length; a++) {
                    var o = i[a];
                    if (Se(o)) for (var l in o) Oe(l) && Ce(e, o[l], l);
                }
                return e;
            }
            var Ee = i.a.createContext();
            Ee.Consumer;
            var Pe = {};
            function _e(e, t, n) {
                var r = w(e),
                    o = !ke(e),
                    l = t.attrs,
                    u = void 0 === l ? v : l,
                    s = t.componentId,
                    f =
                        void 0 === s
                            ? (function (e, t) {
                                  var n = "string" != typeof e ? "sc" : we(e);
                                  Pe[n] = (Pe[n] || 0) + 1;
                                  var r = n + "-" + xe("5.3.0" + n + Pe[n]);
                                  return t ? t + "-" + r : r;
                              })(t.displayName, t.parentComponentId)
                            : s,
                    m = t.displayName,
                    h =
                        void 0 === m
                            ? (function (e) {
                                  return ke(e)
                                      ? "styled." + e
                                      : "Styled(" + b(e) + ")";
                              })(e)
                            : m,
                    x =
                        t.displayName && t.componentId
                            ? we(t.displayName) + "-" + t.componentId
                            : t.componentId || f,
                    k =
                        r && e.attrs
                            ? Array.prototype.concat(e.attrs, u).filter(Boolean)
                            : u,
                    S = t.shouldForwardProp;
                r &&
                    e.shouldForwardProp &&
                    (S = t.shouldForwardProp
                        ? function (n, r, a) {
                              return (
                                  e.shouldForwardProp(n, r, a) &&
                                  t.shouldForwardProp(n, r, a)
                              );
                          }
                        : e.shouldForwardProp);
                var O,
                    C = new G(n, x, r ? e.componentStyle : void 0),
                    j = C.isStatic && 0 === u.length,
                    E = function (e, t) {
                        return (function (e, t, n, r) {
                            var i = e.attrs,
                                o = e.componentStyle,
                                l = e.defaultProps,
                                u = e.foldedComponentIds,
                                s = e.shouldForwardProp,
                                f = e.styledComponentId,
                                d = e.target,
                                m = (function (e, t, n) {
                                    void 0 === e && (e = g);
                                    var r = p({}, t, { theme: e }),
                                        a = {};
                                    return (
                                        n.forEach(function (e) {
                                            var t,
                                                n,
                                                i,
                                                o = e;
                                            for (t in (y(o) && (o = o(r)), o))
                                                r[t] = a[t] =
                                                    "className" === t
                                                        ? ((n = a[t]),
                                                          (i = o[t]),
                                                          n && i
                                                              ? n + " " + i
                                                              : n || i)
                                                        : o[t];
                                        }),
                                        [r, a]
                                    );
                                })(
                                    ge(t, Object(a.useContext)(Ee), l) || g,
                                    t,
                                    i
                                ),
                                h = m[0],
                                v = m[1],
                                b = (function (e, t, n, r) {
                                    var a = ie(),
                                        i = oe();
                                    return t
                                        ? e.generateAndInjectStyles(g, a, i)
                                        : e.generateAndInjectStyles(n, a, i);
                                })(o, r, h),
                                w = n,
                                x = v.$as || t.$as || v.as || t.as || d,
                                k = ke(x),
                                S = v !== t ? p({}, t, {}, v) : t,
                                O = {};
                            for (var C in S)
                                "$" !== C[0] &&
                                    "as" !== C &&
                                    ("forwardedAs" === C
                                        ? (O.as = S[C])
                                        : (s
                                              ? s(C, c.default, x)
                                              : !k || Object(c.default)(C)) &&
                                          (O[C] = S[C]));
                            return (
                                t.style &&
                                    v.style !== t.style &&
                                    (O.style = p({}, t.style, {}, v.style)),
                                (O.className = Array.prototype
                                    .concat(
                                        u,
                                        f,
                                        b !== f ? b : null,
                                        t.className,
                                        v.className
                                    )
                                    .filter(Boolean)
                                    .join(" ")),
                                (O.ref = w),
                                Object(a.createElement)(x, O)
                            );
                        })(O, e, t, j);
                    };
                return (
                    (E.displayName = h),
                    ((O = i.a.forwardRef(E)).attrs = k),
                    (O.componentStyle = C),
                    (O.displayName = h),
                    (O.shouldForwardProp = S),
                    (O.foldedComponentIds = r
                        ? Array.prototype.concat(
                              e.foldedComponentIds,
                              e.styledComponentId
                          )
                        : v),
                    (O.styledComponentId = x),
                    (O.target = r ? e.target : e),
                    (O.withComponent = function (e) {
                        var r = t.componentId,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++)
                                    (n = i[r]),
                                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(t, ["componentId"]),
                            i = r && r + "-" + (ke(e) ? e : we(b(e)));
                        return _e(e, p({}, a, { attrs: k, componentId: i }), n);
                    }),
                    Object.defineProperty(O, "defaultProps", {
                        get: function () {
                            return this._foldedDefaultProps;
                        },
                        set: function (t) {
                            this._foldedDefaultProps = r
                                ? je({}, e.defaultProps, t)
                                : t;
                        },
                    }),
                    (O.toString = function () {
                        return "." + O.styledComponentId;
                    }),
                    o &&
                        d()(O, e, {
                            attrs: !0,
                            componentStyle: !0,
                            displayName: !0,
                            foldedComponentIds: !0,
                            shouldForwardProp: !0,
                            styledComponentId: !0,
                            target: !0,
                            withComponent: !0,
                        }),
                    O
                );
            }
            var Te = function (e) {
                return (function e(t, n, a) {
                    if (
                        (void 0 === a && (a = g),
                        !Object(r.isValidElementType)(n))
                    )
                        return O(1, String(n));
                    var i = function () {
                        return t(n, a, ve.apply(void 0, arguments));
                    };
                    return (
                        (i.withConfig = function (r) {
                            return e(t, n, p({}, a, {}, r));
                        }),
                        (i.attrs = function (r) {
                            return e(
                                t,
                                n,
                                p({}, a, {
                                    attrs: Array.prototype
                                        .concat(a.attrs, r)
                                        .filter(Boolean),
                                })
                            );
                        }),
                        i
                    );
                })(_e, e);
            };
            [
                "a",
                "abbr",
                "address",
                "area",
                "article",
                "aside",
                "audio",
                "b",
                "base",
                "bdi",
                "bdo",
                "big",
                "blockquote",
                "body",
                "br",
                "button",
                "canvas",
                "caption",
                "cite",
                "code",
                "col",
                "colgroup",
                "data",
                "datalist",
                "dd",
                "del",
                "details",
                "dfn",
                "dialog",
                "div",
                "dl",
                "dt",
                "em",
                "embed",
                "fieldset",
                "figcaption",
                "figure",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "head",
                "header",
                "hgroup",
                "hr",
                "html",
                "i",
                "iframe",
                "img",
                "input",
                "ins",
                "kbd",
                "keygen",
                "label",
                "legend",
                "li",
                "link",
                "main",
                "map",
                "mark",
                "marquee",
                "menu",
                "menuitem",
                "meta",
                "meter",
                "nav",
                "noscript",
                "object",
                "ol",
                "optgroup",
                "option",
                "output",
                "p",
                "param",
                "picture",
                "pre",
                "progress",
                "q",
                "rp",
                "rt",
                "ruby",
                "s",
                "samp",
                "script",
                "section",
                "select",
                "small",
                "source",
                "span",
                "strong",
                "style",
                "sub",
                "summary",
                "sup",
                "table",
                "tbody",
                "td",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "time",
                "title",
                "tr",
                "track",
                "u",
                "ul",
                "var",
                "video",
                "wbr",
                "circle",
                "clipPath",
                "defs",
                "ellipse",
                "foreignObject",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "stop",
                "svg",
                "text",
                "textPath",
                "tspan",
            ].forEach(function (e) {
                Te[e] = Te(e);
            });
            !(function () {
                function e(e, t) {
                    (this.rules = e),
                        (this.componentId = t),
                        (this.isStatic = q(e)),
                        W.registerId(this.componentId + 1);
                }
                var t = e.prototype;
                (t.createStyles = function (e, t, n, r) {
                    var a = r(he(this.rules, t, n, r).join(""), ""),
                        i = this.componentId + e;
                    n.insertRules(i, i, a);
                }),
                    (t.removeStyles = function (e, t) {
                        t.clearRules(this.componentId + e);
                    }),
                    (t.renderStyles = function (e, t, n, r) {
                        e > 2 && W.registerId(this.componentId + e),
                            this.removeStyles(e, n),
                            this.createStyles(e, t, n, r);
                    });
            })();
            !(function () {
                function e() {
                    var e = this;
                    (this._emitSheetCSS = function () {
                        var t = e.instance.toString(),
                            n = z();
                        return (
                            "<style " +
                            [
                                n && 'nonce="' + n + '"',
                                x + '="true"',
                                'data-styled-version="5.3.0"',
                            ]
                                .filter(Boolean)
                                .join(" ") +
                            ">" +
                            t +
                            "</style>"
                        );
                    }),
                        (this.getStyleTags = function () {
                            return e.sealed ? O(2) : e._emitSheetCSS();
                        }),
                        (this.getStyleElement = function () {
                            var t;
                            if (e.sealed) return O(2);
                            var n =
                                    (((t = {})[x] = ""),
                                    (t["data-styled-version"] = "5.3.0"),
                                    (t.dangerouslySetInnerHTML = {
                                        __html: e.instance.toString(),
                                    }),
                                    t),
                                r = z();
                            return (
                                r && (n.nonce = r),
                                [
                                    i.a.createElement(
                                        "style",
                                        p({}, n, { key: "sc-0-0" })
                                    ),
                                ]
                            );
                        }),
                        (this.seal = function () {
                            e.sealed = !0;
                        }),
                        (this.instance = new W({ isServer: !0 })),
                        (this.sealed = !1);
                }
                var t = e.prototype;
                (t.collectStyles = function (e) {
                    return this.sealed
                        ? O(2)
                        : i.a.createElement(le, { sheet: this.instance }, e);
                }),
                    (t.interleaveWithNodeStream = function (e) {
                        return O(3);
                    });
            })();
            t.a = Te;
        }.call(this, n(21)));
    },
    ,
    ,
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r =
                /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
            a = (function (e) {
                var t = {};
                return function (n) {
                    return void 0 === t[n] && (t[n] = e(n)), t[n];
                };
            })(function (e) {
                return (
                    r.test(e) ||
                    (111 === e.charCodeAt(0) &&
                        110 === e.charCodeAt(1) &&
                        e.charCodeAt(2) < 91)
                );
            });
        t.default = a;
    },
    ,
    function (e, t, n) {
        "use strict";
        var r = Object.getOwnPropertySymbols,
            a = Object.prototype.hasOwnProperty,
            i = Object.prototype.propertyIsEnumerable;
        function o(e) {
            if (null === e || void 0 === e)
                throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                );
            return Object(e);
        }
        e.exports = (function () {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                    return !1;
                for (var t = {}, n = 0; n < 10; n++)
                    t["_" + String.fromCharCode(n)] = n;
                if (
                    "0123456789" !==
                    Object.getOwnPropertyNames(t)
                        .map(function (e) {
                            return t[e];
                        })
                        .join("")
                )
                    return !1;
                var r = {};
                return (
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                        r[e] = e;
                    }),
                    "abcdefghijklmnopqrst" ===
                        Object.keys(Object.assign({}, r)).join("")
                );
            } catch (a) {
                return !1;
            }
        })()
            ? Object.assign
            : function (e, t) {
                  for (var n, l, u = o(e), s = 1; s < arguments.length; s++) {
                      for (var c in (n = Object(arguments[s])))
                          a.call(n, c) && (u[c] = n[c]);
                      if (r) {
                          l = r(n);
                          for (var f = 0; f < l.length; f++)
                              i.call(n, l[f]) && (u[l[f]] = n[l[f]]);
                      }
                  }
                  return u;
              };
    },
    function (e, t, n) {
        "use strict";
        e.exports = n(22);
    },
    function (e, t, n) {
        "use strict";
        var r = n(23),
            a = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0,
            },
            i = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0,
            },
            o = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0,
            },
            l = {};
        function u(e) {
            return r.isMemo(e) ? o : l[e.$$typeof] || a;
        }
        (l[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
        }),
            (l[r.Memo] = o);
        var s = Object.defineProperty,
            c = Object.getOwnPropertyNames,
            f = Object.getOwnPropertySymbols,
            d = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
        e.exports = function e(t, n, r) {
            if ("string" !== typeof n) {
                if (m) {
                    var a = p(n);
                    a && a !== m && e(t, a, r);
                }
                var o = c(n);
                f && (o = o.concat(f(n)));
                for (var l = u(t), h = u(n), v = 0; v < o.length; ++v) {
                    var g = o[v];
                    if (
                        !i[g] &&
                        (!r || !r[g]) &&
                        (!h || !h[g]) &&
                        (!l || !l[g])
                    ) {
                        var y = d(n, g);
                        try {
                            s(t, g, y);
                        } catch (b) {}
                    }
                }
            }
            return t;
        };
    },
    function (e, t, n) {
        "use strict";
        !(function e() {
            if (
                "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
                "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
            )
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                } catch (t) {
                    console.error(t);
                }
        })(),
            (e.exports = n(16));
    },
    function (e, t, n) {
        (function (t) {
            var n = "Expected a function",
                r = /^\s+|\s+$/g,
                a = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                o = /^0o[0-7]+$/i,
                l = parseInt,
                u = "object" == typeof t && t && t.Object === Object && t,
                s =
                    "object" == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                c = u || s || Function("return this")(),
                f = Object.prototype.toString,
                d = Math.max,
                p = Math.min,
                m = function () {
                    return c.Date.now();
                };
            function h(e, t, r) {
                var a,
                    i,
                    o,
                    l,
                    u,
                    s,
                    c = 0,
                    f = !1,
                    h = !1,
                    y = !0;
                if ("function" != typeof e) throw new TypeError(n);
                function b(t) {
                    var n = a,
                        r = i;
                    return (a = i = void 0), (c = t), (l = e.apply(r, n));
                }
                function w(e) {
                    return (c = e), (u = setTimeout(k, t)), f ? b(e) : l;
                }
                function x(e) {
                    var n = e - s;
                    return void 0 === s || n >= t || n < 0 || (h && e - c >= o);
                }
                function k() {
                    var e = m();
                    if (x(e)) return S(e);
                    u = setTimeout(
                        k,
                        (function (e) {
                            var n = t - (e - s);
                            return h ? p(n, o - (e - c)) : n;
                        })(e)
                    );
                }
                function S(e) {
                    return (u = void 0), y && a ? b(e) : ((a = i = void 0), l);
                }
                function O() {
                    var e = m(),
                        n = x(e);
                    if (((a = arguments), (i = this), (s = e), n)) {
                        if (void 0 === u) return w(s);
                        if (h) return (u = setTimeout(k, t)), b(s);
                    }
                    return void 0 === u && (u = setTimeout(k, t)), l;
                }
                return (
                    (t = g(t) || 0),
                    v(r) &&
                        ((f = !!r.leading),
                        (o = (h = "maxWait" in r)
                            ? d(g(r.maxWait) || 0, t)
                            : o),
                        (y = "trailing" in r ? !!r.trailing : y)),
                    (O.cancel = function () {
                        void 0 !== u && clearTimeout(u),
                            (c = 0),
                            (a = s = i = u = void 0);
                    }),
                    (O.flush = function () {
                        return void 0 === u ? l : S(m());
                    }),
                    O
                );
            }
            function v(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            function g(e) {
                if ("number" == typeof e) return e;
                if (
                    (function (e) {
                        return (
                            "symbol" == typeof e ||
                            ((function (e) {
                                return !!e && "object" == typeof e;
                            })(e) &&
                                "[object Symbol]" == f.call(e))
                        );
                    })(e)
                )
                    return NaN;
                if (v(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = v(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(r, "");
                var n = i.test(e);
                return n || o.test(e)
                    ? l(e.slice(2), n ? 2 : 8)
                    : a.test(e)
                    ? NaN
                    : +e;
            }
            e.exports = function (e, t, r) {
                var a = !0,
                    i = !0;
                if ("function" != typeof e) throw new TypeError(n);
                return (
                    v(r) &&
                        ((a = "leading" in r ? !!r.leading : a),
                        (i = "trailing" in r ? !!r.trailing : i)),
                    h(e, t, { leading: a, maxWait: t, trailing: i })
                );
            };
        }.call(this, n(20)));
    },
    function (e, t) {
        e.exports = function (e, t, n, r) {
            var a = n ? n.call(r, e, t) : void 0;
            if (void 0 !== a) return !!a;
            if (e === t) return !0;
            if ("object" !== typeof e || !e || "object" !== typeof t || !t)
                return !1;
            var i = Object.keys(e),
                o = Object.keys(t);
            if (i.length !== o.length) return !1;
            for (
                var l = Object.prototype.hasOwnProperty.bind(t), u = 0;
                u < i.length;
                u++
            ) {
                var s = i[u];
                if (!l(s)) return !1;
                var c = e[s],
                    f = t[s];
                if (
                    !1 === (a = n ? n.call(r, c, f, s) : void 0) ||
                    (void 0 === a && c !== f)
                )
                    return !1;
            }
            return !0;
        };
    },
    function (e, t, n) {
        "use strict";
        t.a = function (e) {
            function t(e, r, u, s, d) {
                for (
                    var p,
                        m,
                        h,
                        v,
                        w,
                        k = 0,
                        S = 0,
                        O = 0,
                        C = 0,
                        j = 0,
                        A = 0,
                        R = (h = p = 0),
                        z = 0,
                        N = 0,
                        D = 0,
                        F = 0,
                        B = u.length,
                        V = B - 1,
                        H = "",
                        W = "",
                        U = "",
                        $ = "";
                    z < B;

                ) {
                    if (
                        ((m = u.charCodeAt(z)),
                        z === V &&
                            0 !== S + C + O + k &&
                            (0 !== S && (m = 47 === S ? 10 : 47),
                            (C = O = k = 0),
                            B++,
                            V++),
                        0 === S + C + O + k)
                    ) {
                        if (
                            z === V &&
                            (0 < N && (H = H.replace(f, "")),
                            0 < H.trim().length)
                        ) {
                            switch (m) {
                                case 32:
                                case 9:
                                case 59:
                                case 13:
                                case 10:
                                    break;
                                default:
                                    H += u.charAt(z);
                            }
                            m = 59;
                        }
                        switch (m) {
                            case 123:
                                for (
                                    p = (H = H.trim()).charCodeAt(0),
                                        h = 1,
                                        F = ++z;
                                    z < B;

                                ) {
                                    switch ((m = u.charCodeAt(z))) {
                                        case 123:
                                            h++;
                                            break;
                                        case 125:
                                            h--;
                                            break;
                                        case 47:
                                            switch ((m = u.charCodeAt(z + 1))) {
                                                case 42:
                                                case 47:
                                                    e: {
                                                        for (
                                                            R = z + 1;
                                                            R < V;
                                                            ++R
                                                        )
                                                            switch (
                                                                u.charCodeAt(R)
                                                            ) {
                                                                case 47:
                                                                    if (
                                                                        42 ===
                                                                            m &&
                                                                        42 ===
                                                                            u.charCodeAt(
                                                                                R -
                                                                                    1
                                                                            ) &&
                                                                        z +
                                                                            2 !==
                                                                            R
                                                                    ) {
                                                                        z =
                                                                            R +
                                                                            1;
                                                                        break e;
                                                                    }
                                                                    break;
                                                                case 10:
                                                                    if (
                                                                        47 === m
                                                                    ) {
                                                                        z =
                                                                            R +
                                                                            1;
                                                                        break e;
                                                                    }
                                                            }
                                                        z = R;
                                                    }
                                            }
                                            break;
                                        case 91:
                                            m++;
                                        case 40:
                                            m++;
                                        case 34:
                                        case 39:
                                            for (
                                                ;
                                                z++ < V &&
                                                u.charCodeAt(z) !== m;

                                            );
                                    }
                                    if (0 === h) break;
                                    z++;
                                }
                                switch (
                                    ((h = u.substring(F, z)),
                                    0 === p &&
                                        (p = (H = H.replace(
                                            c,
                                            ""
                                        ).trim()).charCodeAt(0)),
                                    p)
                                ) {
                                    case 64:
                                        switch (
                                            (0 < N && (H = H.replace(f, "")),
                                            (m = H.charCodeAt(1)))
                                        ) {
                                            case 100:
                                            case 109:
                                            case 115:
                                            case 45:
                                                N = r;
                                                break;
                                            default:
                                                N = L;
                                        }
                                        if (
                                            ((F = (h = t(r, N, h, m, d + 1))
                                                .length),
                                            0 < I &&
                                                ((w = l(
                                                    3,
                                                    h,
                                                    (N = n(L, H, D)),
                                                    r,
                                                    P,
                                                    E,
                                                    F,
                                                    m,
                                                    d,
                                                    s
                                                )),
                                                (H = N.join("")),
                                                void 0 !== w &&
                                                    0 ===
                                                        (F = (h = w.trim())
                                                            .length) &&
                                                    ((m = 0), (h = ""))),
                                            0 < F)
                                        )
                                            switch (m) {
                                                case 115:
                                                    H = H.replace(x, o);
                                                case 100:
                                                case 109:
                                                case 45:
                                                    h = H + "{" + h + "}";
                                                    break;
                                                case 107:
                                                    (h =
                                                        (H = H.replace(
                                                            g,
                                                            "$1 $2"
                                                        )) +
                                                        "{" +
                                                        h +
                                                        "}"),
                                                        (h =
                                                            1 === T ||
                                                            (2 === T &&
                                                                i("@" + h, 3))
                                                                ? "@-webkit-" +
                                                                  h +
                                                                  "@" +
                                                                  h
                                                                : "@" + h);
                                                    break;
                                                default:
                                                    (h = H + h),
                                                        112 === s &&
                                                            ((W += h),
                                                            (h = ""));
                                            }
                                        else h = "";
                                        break;
                                    default:
                                        h = t(r, n(r, H, D), h, s, d + 1);
                                }
                                (U += h),
                                    (h = D = N = R = p = 0),
                                    (H = ""),
                                    (m = u.charCodeAt(++z));
                                break;
                            case 125:
                            case 59:
                                if (
                                    1 <
                                    (F = (H = (
                                        0 < N ? H.replace(f, "") : H
                                    ).trim()).length)
                                )
                                    switch (
                                        (0 === R &&
                                            ((p = H.charCodeAt(0)),
                                            45 === p || (96 < p && 123 > p)) &&
                                            (F = (H = H.replace(" ", ":"))
                                                .length),
                                        0 < I &&
                                            void 0 !==
                                                (w = l(
                                                    1,
                                                    H,
                                                    r,
                                                    e,
                                                    P,
                                                    E,
                                                    W.length,
                                                    s,
                                                    d,
                                                    s
                                                )) &&
                                            0 === (F = (H = w.trim()).length) &&
                                            (H = "\0\0"),
                                        (p = H.charCodeAt(0)),
                                        (m = H.charCodeAt(1)),
                                        p)
                                    ) {
                                        case 0:
                                            break;
                                        case 64:
                                            if (105 === m || 99 === m) {
                                                $ += H + u.charAt(z);
                                                break;
                                            }
                                        default:
                                            58 !== H.charCodeAt(F - 1) &&
                                                (W += a(
                                                    H,
                                                    p,
                                                    m,
                                                    H.charCodeAt(2)
                                                ));
                                    }
                                (D = N = R = p = 0),
                                    (H = ""),
                                    (m = u.charCodeAt(++z));
                        }
                    }
                    switch (m) {
                        case 13:
                        case 10:
                            47 === S
                                ? (S = 0)
                                : 0 === 1 + p &&
                                  107 !== s &&
                                  0 < H.length &&
                                  ((N = 1), (H += "\0")),
                                0 < I * M &&
                                    l(0, H, r, e, P, E, W.length, s, d, s),
                                (E = 1),
                                P++;
                            break;
                        case 59:
                        case 125:
                            if (0 === S + C + O + k) {
                                E++;
                                break;
                            }
                        default:
                            switch ((E++, (v = u.charAt(z)), m)) {
                                case 9:
                                case 32:
                                    if (0 === C + k + S)
                                        switch (j) {
                                            case 44:
                                            case 58:
                                            case 9:
                                            case 32:
                                                v = "";
                                                break;
                                            default:
                                                32 !== m && (v = " ");
                                        }
                                    break;
                                case 0:
                                    v = "\\0";
                                    break;
                                case 12:
                                    v = "\\f";
                                    break;
                                case 11:
                                    v = "\\v";
                                    break;
                                case 38:
                                    0 === C + S + k &&
                                        ((N = D = 1), (v = "\f" + v));
                                    break;
                                case 108:
                                    if (0 === C + S + k + _ && 0 < R)
                                        switch (z - R) {
                                            case 2:
                                                112 === j &&
                                                    58 ===
                                                        u.charCodeAt(z - 3) &&
                                                    (_ = j);
                                            case 8:
                                                111 === A && (_ = A);
                                        }
                                    break;
                                case 58:
                                    0 === C + S + k && (R = z);
                                    break;
                                case 44:
                                    0 === S + O + C + k &&
                                        ((N = 1), (v += "\r"));
                                    break;
                                case 34:
                                case 39:
                                    0 === S &&
                                        (C = C === m ? 0 : 0 === C ? m : C);
                                    break;
                                case 91:
                                    0 === C + S + O && k++;
                                    break;
                                case 93:
                                    0 === C + S + O && k--;
                                    break;
                                case 41:
                                    0 === C + S + k && O--;
                                    break;
                                case 40:
                                    if (0 === C + S + k) {
                                        if (0 === p)
                                            switch (2 * j + 3 * A) {
                                                case 533:
                                                    break;
                                                default:
                                                    p = 1;
                                            }
                                        O++;
                                    }
                                    break;
                                case 64:
                                    0 === S + O + C + k + R + h && (h = 1);
                                    break;
                                case 42:
                                case 47:
                                    if (!(0 < C + k + O))
                                        switch (S) {
                                            case 0:
                                                switch (
                                                    2 * m +
                                                    3 * u.charCodeAt(z + 1)
                                                ) {
                                                    case 235:
                                                        S = 47;
                                                        break;
                                                    case 220:
                                                        (F = z), (S = 42);
                                                }
                                                break;
                                            case 42:
                                                47 === m &&
                                                    42 === j &&
                                                    F + 2 !== z &&
                                                    (33 ===
                                                        u.charCodeAt(F + 2) &&
                                                        (W += u.substring(
                                                            F,
                                                            z + 1
                                                        )),
                                                    (v = ""),
                                                    (S = 0));
                                        }
                            }
                            0 === S && (H += v);
                    }
                    (A = j), (j = m), z++;
                }
                if (0 < (F = W.length)) {
                    if (
                        ((N = r),
                        0 < I &&
                            void 0 !== (w = l(2, W, N, e, P, E, F, s, d, s)) &&
                            0 === (W = w).length)
                    )
                        return $ + W + U;
                    if (((W = N.join(",") + "{" + W + "}"), 0 !== T * _)) {
                        switch ((2 !== T || i(W, 2) || (_ = 0), _)) {
                            case 111:
                                W = W.replace(b, ":-moz-$1") + W;
                                break;
                            case 112:
                                W =
                                    W.replace(y, "::-webkit-input-$1") +
                                    W.replace(y, "::-moz-$1") +
                                    W.replace(y, ":-ms-input-$1") +
                                    W;
                        }
                        _ = 0;
                    }
                }
                return $ + W + U;
            }
            function n(e, t, n) {
                var a = t.trim().split(h);
                t = a;
                var i = a.length,
                    o = e.length;
                switch (o) {
                    case 0:
                    case 1:
                        var l = 0;
                        for (e = 0 === o ? "" : e[0] + " "; l < i; ++l)
                            t[l] = r(e, t[l], n).trim();
                        break;
                    default:
                        var u = (l = 0);
                        for (t = []; l < i; ++l)
                            for (var s = 0; s < o; ++s)
                                t[u++] = r(e[s] + " ", a[l], n).trim();
                }
                return t;
            }
            function r(e, t, n) {
                var r = t.charCodeAt(0);
                switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
                    case 38:
                        return t.replace(v, "$1" + e.trim());
                    case 58:
                        return e.trim() + t.replace(v, "$1" + e.trim());
                    default:
                        if (0 < 1 * n && 0 < t.indexOf("\f"))
                            return t.replace(
                                v,
                                (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                            );
                }
                return e + t;
            }
            function a(e, t, n, r) {
                var o = e + ";",
                    l = 2 * t + 3 * n + 4 * r;
                if (944 === l) {
                    e = o.indexOf(":", 9) + 1;
                    var u = o.substring(e, o.length - 1).trim();
                    return (
                        (u = o.substring(0, e).trim() + u + ";"),
                        1 === T || (2 === T && i(u, 1)) ? "-webkit-" + u + u : u
                    );
                }
                if (0 === T || (2 === T && !i(o, 1))) return o;
                switch (l) {
                    case 1015:
                        return 97 === o.charCodeAt(10) ? "-webkit-" + o + o : o;
                    case 951:
                        return 116 === o.charCodeAt(3) ? "-webkit-" + o + o : o;
                    case 963:
                        return 110 === o.charCodeAt(5) ? "-webkit-" + o + o : o;
                    case 1009:
                        if (100 !== o.charCodeAt(4)) break;
                    case 969:
                    case 942:
                        return "-webkit-" + o + o;
                    case 978:
                        return "-webkit-" + o + "-moz-" + o + o;
                    case 1019:
                    case 983:
                        return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
                    case 883:
                        if (45 === o.charCodeAt(8)) return "-webkit-" + o + o;
                        if (0 < o.indexOf("image-set(", 11))
                            return o.replace(j, "$1-webkit-$2") + o;
                        break;
                    case 932:
                        if (45 === o.charCodeAt(4))
                            switch (o.charCodeAt(5)) {
                                case 103:
                                    return (
                                        "-webkit-box-" +
                                        o.replace("-grow", "") +
                                        "-webkit-" +
                                        o +
                                        "-ms-" +
                                        o.replace("grow", "positive") +
                                        o
                                    );
                                case 115:
                                    return (
                                        "-webkit-" +
                                        o +
                                        "-ms-" +
                                        o.replace("shrink", "negative") +
                                        o
                                    );
                                case 98:
                                    return (
                                        "-webkit-" +
                                        o +
                                        "-ms-" +
                                        o.replace("basis", "preferred-size") +
                                        o
                                    );
                            }
                        return "-webkit-" + o + "-ms-" + o + o;
                    case 964:
                        return "-webkit-" + o + "-ms-flex-" + o + o;
                    case 1023:
                        if (99 !== o.charCodeAt(8)) break;
                        return (
                            "-webkit-box-pack" +
                            (u = o
                                .substring(o.indexOf(":", 15))
                                .replace("flex-", "")
                                .replace("space-between", "justify")) +
                            "-webkit-" +
                            o +
                            "-ms-flex-pack" +
                            u +
                            o
                        );
                    case 1005:
                        return p.test(o)
                            ? o.replace(d, ":-webkit-") +
                                  o.replace(d, ":-moz-") +
                                  o
                            : o;
                    case 1e3:
                        switch (
                            ((t =
                                (u = o.substring(13).trim()).indexOf("-") + 1),
                            u.charCodeAt(0) + u.charCodeAt(t))
                        ) {
                            case 226:
                                u = o.replace(w, "tb");
                                break;
                            case 232:
                                u = o.replace(w, "tb-rl");
                                break;
                            case 220:
                                u = o.replace(w, "lr");
                                break;
                            default:
                                return o;
                        }
                        return "-webkit-" + o + "-ms-" + u + o;
                    case 1017:
                        if (-1 === o.indexOf("sticky", 9)) break;
                    case 975:
                        switch (
                            ((t = (o = e).length - 10),
                            (l =
                                (u = (
                                    33 === o.charCodeAt(t)
                                        ? o.substring(0, t)
                                        : o
                                )
                                    .substring(e.indexOf(":", 7) + 1)
                                    .trim()).charCodeAt(0) +
                                (0 | u.charCodeAt(7))))
                        ) {
                            case 203:
                                if (111 > u.charCodeAt(8)) break;
                            case 115:
                                o = o.replace(u, "-webkit-" + u) + ";" + o;
                                break;
                            case 207:
                            case 102:
                                o =
                                    o.replace(
                                        u,
                                        "-webkit-" +
                                            (102 < l ? "inline-" : "") +
                                            "box"
                                    ) +
                                    ";" +
                                    o.replace(u, "-webkit-" + u) +
                                    ";" +
                                    o.replace(u, "-ms-" + u + "box") +
                                    ";" +
                                    o;
                        }
                        return o + ";";
                    case 938:
                        if (45 === o.charCodeAt(5))
                            switch (o.charCodeAt(6)) {
                                case 105:
                                    return (
                                        (u = o.replace("-items", "")),
                                        "-webkit-" +
                                            o +
                                            "-webkit-box-" +
                                            u +
                                            "-ms-flex-" +
                                            u +
                                            o
                                    );
                                case 115:
                                    return (
                                        "-webkit-" +
                                        o +
                                        "-ms-flex-item-" +
                                        o.replace(S, "") +
                                        o
                                    );
                                default:
                                    return (
                                        "-webkit-" +
                                        o +
                                        "-ms-flex-line-pack" +
                                        o
                                            .replace("align-content", "")
                                            .replace(S, "") +
                                        o
                                    );
                            }
                        break;
                    case 973:
                    case 989:
                        if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4))
                            break;
                    case 931:
                    case 953:
                        if (!0 === C.test(e))
                            return 115 ===
                                (u = e.substring(
                                    e.indexOf(":") + 1
                                )).charCodeAt(0)
                                ? a(
                                      e.replace("stretch", "fill-available"),
                                      t,
                                      n,
                                      r
                                  ).replace(":fill-available", ":stretch")
                                : o.replace(u, "-webkit-" + u) +
                                      o.replace(
                                          u,
                                          "-moz-" + u.replace("fill-", "")
                                      ) +
                                      o;
                        break;
                    case 962:
                        if (
                            ((o =
                                "-webkit-" +
                                o +
                                (102 === o.charCodeAt(5) ? "-ms-" + o : "") +
                                o),
                            211 === n + r &&
                                105 === o.charCodeAt(13) &&
                                0 < o.indexOf("transform", 10))
                        )
                            return (
                                o
                                    .substring(0, o.indexOf(";", 27) + 1)
                                    .replace(m, "$1-webkit-$2") + o
                            );
                }
                return o;
            }
            function i(e, t) {
                var n = e.indexOf(1 === t ? ":" : "{"),
                    r = e.substring(0, 3 !== t ? n : 10);
                return (
                    (n = e.substring(n + 1, e.length - 1)),
                    R(2 !== t ? r : r.replace(O, "$1"), n, t)
                );
            }
            function o(e, t) {
                var n = a(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                return n !== t + ";"
                    ? n.replace(k, " or ($1)").substring(4)
                    : "(" + t + ")";
            }
            function l(e, t, n, r, a, i, o, l, u, c) {
                for (var f, d = 0, p = t; d < I; ++d)
                    switch ((f = A[d].call(s, e, p, n, r, a, i, o, l, u, c))) {
                        case void 0:
                        case !1:
                        case !0:
                        case null:
                            break;
                        default:
                            p = f;
                    }
                if (p !== t) return p;
            }
            function u(e) {
                return (
                    void 0 !== (e = e.prefix) &&
                        ((R = null),
                        e
                            ? "function" !== typeof e
                                ? (T = 1)
                                : ((T = 2), (R = e))
                            : (T = 0)),
                    u
                );
            }
            function s(e, n) {
                var r = e;
                if (
                    (33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < I)
                ) {
                    var a = l(-1, n, r, r, P, E, 0, 0, 0, 0);
                    void 0 !== a && "string" === typeof a && (n = a);
                }
                var i = t(L, r, n, 0, 0);
                return (
                    0 < I &&
                        void 0 !==
                            (a = l(-2, i, r, r, P, E, i.length, 0, 0, 0)) &&
                        (i = a),
                    "",
                    (_ = 0),
                    (E = P = 1),
                    i
                );
            }
            var c = /^\0+/g,
                f = /[\0\r\f]/g,
                d = /: */g,
                p = /zoo|gra/,
                m = /([,: ])(transform)/g,
                h = /,\r+?/g,
                v = /([\t\r\n ])*\f?&/g,
                g = /@(k\w+)\s*(\S*)\s*/,
                y = /::(place)/g,
                b = /:(read-only)/g,
                w = /[svh]\w+-[tblr]{2}/,
                x = /\(\s*(.*)\s*\)/g,
                k = /([\s\S]*?);/g,
                S = /-self|flex-/g,
                O = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                C = /stretch|:\s*\w+\-(?:conte|avail)/,
                j = /([^-])(image-set\()/,
                E = 1,
                P = 1,
                _ = 0,
                T = 1,
                L = [],
                A = [],
                I = 0,
                R = null,
                M = 0;
            return (
                (s.use = function e(t) {
                    switch (t) {
                        case void 0:
                        case null:
                            I = A.length = 0;
                            break;
                        default:
                            if ("function" === typeof t) A[I++] = t;
                            else if ("object" === typeof t)
                                for (var n = 0, r = t.length; n < r; ++n)
                                    e(t[n]);
                            else M = 0 | !!t;
                    }
                    return e;
                }),
                (s.set = u),
                void 0 !== e && u(e),
                s
            );
        };
    },
    function (e, t, n) {
        "use strict";
        t.a = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1,
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(7),
            a = 60103,
            i = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var o = 60109,
            l = 60110,
            u = 60112;
        t.Suspense = 60113;
        var s = 60115,
            c = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
            var f = Symbol.for;
            (a = f("react.element")),
                (i = f("react.portal")),
                (t.Fragment = f("react.fragment")),
                (t.StrictMode = f("react.strict_mode")),
                (t.Profiler = f("react.profiler")),
                (o = f("react.provider")),
                (l = f("react.context")),
                (u = f("react.forward_ref")),
                (t.Suspense = f("react.suspense")),
                (s = f("react.memo")),
                (c = f("react.lazy"));
        }
        var d = "function" === typeof Symbol && Symbol.iterator;
        function p(e) {
            for (
                var t =
                        "https://reactjs.org/docs/error-decoder.html?invariant=" +
                        e,
                    n = 1;
                n < arguments.length;
                n++
            )
                t += "&args[]=" + encodeURIComponent(arguments[n]);
            return (
                "Minified React error #" +
                e +
                "; visit " +
                t +
                " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
        }
        var m = {
                isMounted: function () {
                    return !1;
                },
                enqueueForceUpdate: function () {},
                enqueueReplaceState: function () {},
                enqueueSetState: function () {},
            },
            h = {};
        function v(e, t, n) {
            (this.props = e),
                (this.context = t),
                (this.refs = h),
                (this.updater = n || m);
        }
        function g() {}
        function y(e, t, n) {
            (this.props = e),
                (this.context = t),
                (this.refs = h),
                (this.updater = n || m);
        }
        (v.prototype.isReactComponent = {}),
            (v.prototype.setState = function (e, t) {
                if (
                    "object" !== typeof e &&
                    "function" !== typeof e &&
                    null != e
                )
                    throw Error(p(85));
                this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (v.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (g.prototype = v.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), r(b, v.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
            x = Object.prototype.hasOwnProperty,
            k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, n) {
            var r,
                i = {},
                o = null,
                l = null;
            if (null != t)
                for (r in (void 0 !== t.ref && (l = t.ref),
                void 0 !== t.key && (o = "" + t.key),
                t))
                    x.call(t, r) && !k.hasOwnProperty(r) && (i[r] = t[r]);
            var u = arguments.length - 2;
            if (1 === u) i.children = n;
            else if (1 < u) {
                for (var s = Array(u), c = 0; c < u; c++)
                    s[c] = arguments[c + 2];
                i.children = s;
            }
            if (e && e.defaultProps)
                for (r in (u = e.defaultProps))
                    void 0 === i[r] && (i[r] = u[r]);
            return {
                $$typeof: a,
                type: e,
                key: o,
                ref: l,
                props: i,
                _owner: w.current,
            };
        }
        function O(e) {
            return "object" === typeof e && null !== e && e.$$typeof === a;
        }
        var C = /\/+/g;
        function j(e, t) {
            return "object" === typeof e && null !== e && null != e.key
                ? (function (e) {
                      var t = { "=": "=0", ":": "=2" };
                      return (
                          "$" +
                          e.replace(/[=:]/g, function (e) {
                              return t[e];
                          })
                      );
                  })("" + e.key)
                : t.toString(36);
        }
        function E(e, t, n, r, o) {
            var l = typeof e;
            ("undefined" !== l && "boolean" !== l) || (e = null);
            var u = !1;
            if (null === e) u = !0;
            else
                switch (l) {
                    case "string":
                    case "number":
                        u = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case a:
                            case i:
                                u = !0;
                        }
                }
            if (u)
                return (
                    (o = o((u = e))),
                    (e = "" === r ? "." + j(u, 0) : r),
                    Array.isArray(o)
                        ? ((n = ""),
                          null != e && (n = e.replace(C, "$&/") + "/"),
                          E(o, t, n, "", function (e) {
                              return e;
                          }))
                        : null != o &&
                          (O(o) &&
                              (o = (function (e, t) {
                                  return {
                                      $$typeof: a,
                                      type: e.type,
                                      key: t,
                                      ref: e.ref,
                                      props: e.props,
                                      _owner: e._owner,
                                  };
                              })(
                                  o,
                                  n +
                                      (!o.key || (u && u.key === o.key)
                                          ? ""
                                          : ("" + o.key).replace(C, "$&/") +
                                            "/") +
                                      e
                              )),
                          t.push(o)),
                    1
                );
            if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
                for (var s = 0; s < e.length; s++) {
                    var c = r + j((l = e[s]), s);
                    u += E(l, t, n, c, o);
                }
            else if (
                "function" ===
                typeof (c = (function (e) {
                    return null === e || "object" !== typeof e
                        ? null
                        : "function" ===
                          typeof (e = (d && e[d]) || e["@@iterator"])
                        ? e
                        : null;
                })(e))
            )
                for (e = c.call(e), s = 0; !(l = e.next()).done; )
                    u += E((l = l.value), t, n, (c = r + j(l, s++)), o);
            else if ("object" === l)
                throw (
                    ((t = "" + e),
                    Error(
                        p(
                            31,
                            "[object Object]" === t
                                ? "object with keys {" +
                                      Object.keys(e).join(", ") +
                                      "}"
                                : t
                        )
                    ))
                );
            return u;
        }
        function P(e, t, n) {
            if (null == e) return e;
            var r = [],
                a = 0;
            return (
                E(e, r, "", "", function (e) {
                    return t.call(n, e, a++);
                }),
                r
            );
        }
        function _(e) {
            if (-1 === e._status) {
                var t = e._result;
                (t = t()),
                    (e._status = 0),
                    (e._result = t),
                    t.then(
                        function (t) {
                            0 === e._status &&
                                ((t = t.default),
                                (e._status = 1),
                                (e._result = t));
                        },
                        function (t) {
                            0 === e._status &&
                                ((e._status = 2), (e._result = t));
                        }
                    );
            }
            if (1 === e._status) return e._result;
            throw e._result;
        }
        var T = { current: null };
        function L() {
            var e = T.current;
            if (null === e) throw Error(p(321));
            return e;
        }
        var A = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: { transition: 0 },
            ReactCurrentOwner: w,
            IsSomeRendererActing: { current: !1 },
            assign: r,
        };
        (t.Children = {
            map: P,
            forEach: function (e, t, n) {
                P(
                    e,
                    function () {
                        t.apply(this, arguments);
                    },
                    n
                );
            },
            count: function (e) {
                var t = 0;
                return (
                    P(e, function () {
                        t++;
                    }),
                    t
                );
            },
            toArray: function (e) {
                return (
                    P(e, function (e) {
                        return e;
                    }) || []
                );
            },
            only: function (e) {
                if (!O(e)) throw Error(p(143));
                return e;
            },
        }),
            (t.Component = v),
            (t.PureComponent = y),
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
            (t.cloneElement = function (e, t, n) {
                if (null === e || void 0 === e) throw Error(p(267, e));
                var i = r({}, e.props),
                    o = e.key,
                    l = e.ref,
                    u = e._owner;
                if (null != t) {
                    if (
                        (void 0 !== t.ref && ((l = t.ref), (u = w.current)),
                        void 0 !== t.key && (o = "" + t.key),
                        e.type && e.type.defaultProps)
                    )
                        var s = e.type.defaultProps;
                    for (c in t)
                        x.call(t, c) &&
                            !k.hasOwnProperty(c) &&
                            (i[c] =
                                void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
                }
                var c = arguments.length - 2;
                if (1 === c) i.children = n;
                else if (1 < c) {
                    s = Array(c);
                    for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
                    i.children = s;
                }
                return {
                    $$typeof: a,
                    type: e.type,
                    key: o,
                    ref: l,
                    props: i,
                    _owner: u,
                };
            }),
            (t.createContext = function (e, t) {
                return (
                    void 0 === t && (t = null),
                    ((e = {
                        $$typeof: l,
                        _calculateChangedBits: t,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                    }).Provider = { $$typeof: o, _context: e }),
                    (e.Consumer = e)
                );
            }),
            (t.createElement = S),
            (t.createFactory = function (e) {
                var t = S.bind(null, e);
                return (t.type = e), t;
            }),
            (t.createRef = function () {
                return { current: null };
            }),
            (t.forwardRef = function (e) {
                return { $$typeof: u, render: e };
            }),
            (t.isValidElement = O),
            (t.lazy = function (e) {
                return {
                    $$typeof: c,
                    _payload: { _status: -1, _result: e },
                    _init: _,
                };
            }),
            (t.memo = function (e, t) {
                return {
                    $$typeof: s,
                    type: e,
                    compare: void 0 === t ? null : t,
                };
            }),
            (t.useCallback = function (e, t) {
                return L().useCallback(e, t);
            }),
            (t.useContext = function (e, t) {
                return L().useContext(e, t);
            }),
            (t.useDebugValue = function () {}),
            (t.useEffect = function (e, t) {
                return L().useEffect(e, t);
            }),
            (t.useImperativeHandle = function (e, t, n) {
                return L().useImperativeHandle(e, t, n);
            }),
            (t.useLayoutEffect = function (e, t) {
                return L().useLayoutEffect(e, t);
            }),
            (t.useMemo = function (e, t) {
                return L().useMemo(e, t);
            }),
            (t.useReducer = function (e, t, n) {
                return L().useReducer(e, t, n);
            }),
            (t.useRef = function (e) {
                return L().useRef(e);
            }),
            (t.useState = function (e) {
                return L().useState(e);
            }),
            (t.version = "17.0.2");
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            a = n(7),
            i = n(17);
        function o(e) {
            for (
                var t =
                        "https://reactjs.org/docs/error-decoder.html?invariant=" +
                        e,
                    n = 1;
                n < arguments.length;
                n++
            )
                t += "&args[]=" + encodeURIComponent(arguments[n]);
            return (
                "Minified React error #" +
                e +
                "; visit " +
                t +
                " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
        }
        if (!r) throw Error(o(227));
        var l = new Set(),
            u = {};
        function s(e, t) {
            c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
            for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var f = !(
                "undefined" === typeof window ||
                "undefined" === typeof window.document ||
                "undefined" === typeof window.document.createElement
            ),
            d =
                /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            p = Object.prototype.hasOwnProperty,
            m = {},
            h = {};
        function v(e, t, n, r, a, i, o) {
            (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
                (this.attributeName = r),
                (this.attributeNamespace = a),
                (this.mustUseProperty = n),
                (this.propertyName = e),
                (this.type = t),
                (this.sanitizeURL = i),
                (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
            .split(" ")
            .forEach(function (e) {
                g[e] = new v(e, 0, !1, e, null, !1, !1);
            }),
            [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"],
            ].forEach(function (e) {
                var t = e[0];
                g[t] = new v(t, 1, !1, e[1], null, !1, !1);
            }),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(
                function (e) {
                    g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
                }
            ),
            [
                "autoReverse",
                "externalResourcesRequired",
                "focusable",
                "preserveAlpha",
            ].forEach(function (e) {
                g[e] = new v(e, 2, !1, e, null, !1, !1);
            }),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
                .split(" ")
                .forEach(function (e) {
                    g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
                }),
            ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                g[e] = new v(e, 3, !0, e, null, !1, !1);
            }),
            ["capture", "download"].forEach(function (e) {
                g[e] = new v(e, 4, !1, e, null, !1, !1);
            }),
            ["cols", "rows", "size", "span"].forEach(function (e) {
                g[e] = new v(e, 6, !1, e, null, !1, !1);
            }),
            ["rowSpan", "start"].forEach(function (e) {
                g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
            });
        var y = /[\-:]([a-z])/g;
        function b(e) {
            return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
            var a = g.hasOwnProperty(t) ? g[t] : null;
            (null !== a
                ? 0 === a.type
                : !r &&
                  2 < t.length &&
                  ("o" === t[0] || "O" === t[0]) &&
                  ("n" === t[1] || "N" === t[1])) ||
                ((function (e, t, n, r) {
                    if (
                        null === t ||
                        "undefined" === typeof t ||
                        (function (e, t, n, r) {
                            if (null !== n && 0 === n.type) return !1;
                            switch (typeof t) {
                                case "function":
                                case "symbol":
                                    return !0;
                                case "boolean":
                                    return (
                                        !r &&
                                        (null !== n
                                            ? !n.acceptsBooleans
                                            : "data-" !==
                                                  (e = e
                                                      .toLowerCase()
                                                      .slice(0, 5)) &&
                                              "aria-" !== e)
                                    );
                                default:
                                    return !1;
                            }
                        })(e, t, n, r)
                    )
                        return !0;
                    if (r) return !1;
                    if (null !== n)
                        switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t;
                        }
                    return !1;
                })(t, n, a, r) && (n = null),
                r || null === a
                    ? (function (e) {
                          return (
                              !!p.call(h, e) ||
                              (!p.call(m, e) &&
                                  (d.test(e) ? (h[e] = !0) : ((m[e] = !0), !1)))
                          );
                      })(t) &&
                      (null === n
                          ? e.removeAttribute(t)
                          : e.setAttribute(t, "" + n))
                    : a.mustUseProperty
                    ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                    : ((t = a.attributeName),
                      (r = a.attributeNamespace),
                      null === n
                          ? e.removeAttribute(t)
                          : ((n =
                                3 === (a = a.type) || (4 === a && !0 === n)
                                    ? ""
                                    : "" + n),
                            r
                                ? e.setAttributeNS(r, t, n)
                                : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(y, b);
                g[t] = new v(t, 1, !1, e, null, !1, !1);
            }),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
                .split(" ")
                .forEach(function (e) {
                    var t = e.replace(y, b);
                    g[t] = new v(
                        t,
                        1,
                        !1,
                        e,
                        "http://www.w3.org/1999/xlink",
                        !1,
                        !1
                    );
                }),
            ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                var t = e.replace(y, b);
                g[t] = new v(
                    t,
                    1,
                    !1,
                    e,
                    "http://www.w3.org/XML/1998/namespace",
                    !1,
                    !1
                );
            }),
            ["tabIndex", "crossOrigin"].forEach(function (e) {
                g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
            }),
            (g.xlinkHref = new v(
                "xlinkHref",
                1,
                !1,
                "xlink:href",
                "http://www.w3.org/1999/xlink",
                !0,
                !1
            )),
            ["src", "href", "action", "formAction"].forEach(function (e) {
                g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
            });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            k = 60103,
            S = 60106,
            O = 60107,
            C = 60108,
            j = 60114,
            E = 60109,
            P = 60110,
            _ = 60112,
            T = 60113,
            L = 60120,
            A = 60115,
            I = 60116,
            R = 60121,
            M = 60128,
            z = 60129,
            N = 60130,
            D = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
            var F = Symbol.for;
            (k = F("react.element")),
                (S = F("react.portal")),
                (O = F("react.fragment")),
                (C = F("react.strict_mode")),
                (j = F("react.profiler")),
                (E = F("react.provider")),
                (P = F("react.context")),
                (_ = F("react.forward_ref")),
                (T = F("react.suspense")),
                (L = F("react.suspense_list")),
                (A = F("react.memo")),
                (I = F("react.lazy")),
                (R = F("react.block")),
                F("react.scope"),
                (M = F("react.opaque.id")),
                (z = F("react.debug_trace_mode")),
                (N = F("react.offscreen")),
                (D = F("react.legacy_hidden"));
        }
        var B,
            V = "function" === typeof Symbol && Symbol.iterator;
        function H(e) {
            return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (V && e[V]) || e["@@iterator"])
                ? e
                : null;
        }
        function W(e) {
            if (void 0 === B)
                try {
                    throw Error();
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    B = (t && t[1]) || "";
                }
            return "\n" + B + e;
        }
        var U = !1;
        function $(e, t) {
            if (!e || U) return "";
            U = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (t)
                    if (
                        ((t = function () {
                            throw Error();
                        }),
                        Object.defineProperty(t.prototype, "props", {
                            set: function () {
                                throw Error();
                            },
                        }),
                        "object" === typeof Reflect && Reflect.construct)
                    ) {
                        try {
                            Reflect.construct(t, []);
                        } catch (u) {
                            var r = u;
                        }
                        Reflect.construct(e, [], t);
                    } else {
                        try {
                            t.call();
                        } catch (u) {
                            r = u;
                        }
                        e.call(t.prototype);
                    }
                else {
                    try {
                        throw Error();
                    } catch (u) {
                        r = u;
                    }
                    e();
                }
            } catch (u) {
                if (u && r && "string" === typeof u.stack) {
                    for (
                        var a = u.stack.split("\n"),
                            i = r.stack.split("\n"),
                            o = a.length - 1,
                            l = i.length - 1;
                        1 <= o && 0 <= l && a[o] !== i[l];

                    )
                        l--;
                    for (; 1 <= o && 0 <= l; o--, l--)
                        if (a[o] !== i[l]) {
                            if (1 !== o || 1 !== l)
                                do {
                                    if ((o--, 0 > --l || a[o] !== i[l]))
                                        return (
                                            "\n" +
                                            a[o].replace(" at new ", " at ")
                                        );
                                } while (1 <= o && 0 <= l);
                            break;
                        }
                }
            } finally {
                (U = !1), (Error.prepareStackTrace = n);
            }
            return (e = e ? e.displayName || e.name : "") ? W(e) : "";
        }
        function Y(e) {
            switch (e.tag) {
                case 5:
                    return W(e.type);
                case 16:
                    return W("Lazy");
                case 13:
                    return W("Suspense");
                case 19:
                    return W("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return (e = $(e.type, !1));
                case 11:
                    return (e = $(e.type.render, !1));
                case 22:
                    return (e = $(e.type._render, !1));
                case 1:
                    return (e = $(e.type, !0));
                default:
                    return "";
            }
        }
        function X(e) {
            if (null == e) return null;
            if ("function" === typeof e) return e.displayName || e.name || null;
            if ("string" === typeof e) return e;
            switch (e) {
                case O:
                    return "Fragment";
                case S:
                    return "Portal";
                case j:
                    return "Profiler";
                case C:
                    return "StrictMode";
                case T:
                    return "Suspense";
                case L:
                    return "SuspenseList";
            }
            if ("object" === typeof e)
                switch (e.$$typeof) {
                    case P:
                        return (e.displayName || "Context") + ".Consumer";
                    case E:
                        return (
                            (e._context.displayName || "Context") + ".Provider"
                        );
                    case _:
                        var t = e.render;
                        return (
                            (t = t.displayName || t.name || ""),
                            e.displayName ||
                                ("" !== t
                                    ? "ForwardRef(" + t + ")"
                                    : "ForwardRef")
                        );
                    case A:
                        return X(e.type);
                    case R:
                        return X(e._render);
                    case I:
                        (t = e._payload), (e = e._init);
                        try {
                            return X(e(t));
                        } catch (n) {}
                }
            return null;
        }
        function K(e) {
            switch (typeof e) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return e;
                default:
                    return "";
            }
        }
        function q(e) {
            var t = e.type;
            return (
                (e = e.nodeName) &&
                "input" === e.toLowerCase() &&
                ("checkbox" === t || "radio" === t)
            );
        }
        function Q(e) {
            e._valueTracker ||
                (e._valueTracker = (function (e) {
                    var t = q(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(
                            e.constructor.prototype,
                            t
                        ),
                        r = "" + e[t];
                    if (
                        !e.hasOwnProperty(t) &&
                        "undefined" !== typeof n &&
                        "function" === typeof n.get &&
                        "function" === typeof n.set
                    ) {
                        var a = n.get,
                            i = n.set;
                        return (
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function () {
                                    return a.call(this);
                                },
                                set: function (e) {
                                    (r = "" + e), i.call(this, e);
                                },
                            }),
                            Object.defineProperty(e, t, {
                                enumerable: n.enumerable,
                            }),
                            {
                                getValue: function () {
                                    return r;
                                },
                                setValue: function (e) {
                                    r = "" + e;
                                },
                                stopTracking: function () {
                                    (e._valueTracker = null), delete e[t];
                                },
                            }
                        );
                    }
                })(e));
        }
        function G(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(),
                r = "";
            return (
                e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
                (e = r) !== n && (t.setValue(e), !0)
            );
        }
        function Z(e) {
            if (
                "undefined" ===
                typeof (e =
                    e || ("undefined" !== typeof document ? document : void 0))
            )
                return null;
            try {
                return e.activeElement || e.body;
            } catch (t) {
                return e.body;
            }
        }
        function J(e, t) {
            var n = t.checked;
            return a({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != n ? n : e._wrapperState.initialChecked,
            });
        }
        function ee(e, t) {
            var n = null == t.defaultValue ? "" : t.defaultValue,
                r = null != t.checked ? t.checked : t.defaultChecked;
            (n = K(null != t.value ? t.value : n)),
                (e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled:
                        "checkbox" === t.type || "radio" === t.type
                            ? null != t.checked
                            : null != t.value,
                });
        }
        function te(e, t) {
            null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function ne(e, t) {
            te(e, t);
            var n = K(t.value),
                r = t.type;
            if (null != n)
                "number" === r
                    ? ((0 === n && "" === e.value) || e.value != n) &&
                      (e.value = "" + n)
                    : e.value !== "" + n && (e.value = "" + n);
            else if ("submit" === r || "reset" === r)
                return void e.removeAttribute("value");
            t.hasOwnProperty("value")
                ? ae(e, t.type, n)
                : t.hasOwnProperty("defaultValue") &&
                  ae(e, t.type, K(t.defaultValue)),
                null == t.checked &&
                    null != t.defaultChecked &&
                    (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var r = t.type;
                if (
                    !(
                        ("submit" !== r && "reset" !== r) ||
                        (void 0 !== t.value && null !== t.value)
                    )
                )
                    return;
                (t = "" + e._wrapperState.initialValue),
                    n || t === e.value || (e.value = t),
                    (e.defaultValue = t);
            }
            "" !== (n = e.name) && (e.name = ""),
                (e.defaultChecked = !!e._wrapperState.initialChecked),
                "" !== n && (e.name = n);
        }
        function ae(e, t, n) {
            ("number" === t && Z(e.ownerDocument) === e) ||
                (null == n
                    ? (e.defaultValue = "" + e._wrapperState.initialValue)
                    : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ie(e, t) {
            return (
                (e = a({ children: void 0 }, t)),
                (t = (function (e) {
                    var t = "";
                    return (
                        r.Children.forEach(e, function (e) {
                            null != e && (t += e);
                        }),
                        t
                    );
                })(t.children)) && (e.children = t),
                e
            );
        }
        function oe(e, t, n, r) {
            if (((e = e.options), t)) {
                t = {};
                for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                for (n = 0; n < e.length; n++)
                    (a = t.hasOwnProperty("$" + e[n].value)),
                        e[n].selected !== a && (e[n].selected = a),
                        a && r && (e[n].defaultSelected = !0);
            } else {
                for (n = "" + K(n), t = null, a = 0; a < e.length; a++) {
                    if (e[a].value === n)
                        return (
                            (e[a].selected = !0),
                            void (r && (e[a].defaultSelected = !0))
                        );
                    null !== t || e[a].disabled || (t = e[a]);
                }
                null !== t && (t.selected = !0);
            }
        }
        function le(e, t) {
            if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
            return a({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue,
            });
        }
        function ue(e, t) {
            var n = t.value;
            if (null == n) {
                if (((n = t.children), (t = t.defaultValue), null != n)) {
                    if (null != t) throw Error(o(92));
                    if (Array.isArray(n)) {
                        if (!(1 >= n.length)) throw Error(o(93));
                        n = n[0];
                    }
                    t = n;
                }
                null == t && (t = ""), (n = t);
            }
            e._wrapperState = { initialValue: K(n) };
        }
        function se(e, t) {
            var n = K(t.value),
                r = K(t.defaultValue);
            null != n &&
                ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue &&
                    e.defaultValue !== n &&
                    (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue &&
                "" !== t &&
                null !== t &&
                (e.value = t);
        }
        var fe = "http://www.w3.org/1999/xhtml",
            de = "http://www.w3.org/2000/svg";
        function pe(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml";
            }
        }
        function me(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e
                ? pe(t)
                : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
                ? "http://www.w3.org/1999/xhtml"
                : e;
        }
        var he,
            ve,
            ge =
                ((ve = function (e, t) {
                    if (e.namespaceURI !== de || "innerHTML" in e)
                        e.innerHTML = t;
                    else {
                        for (
                            (he =
                                he || document.createElement("div")).innerHTML =
                                "<svg>" + t.valueOf().toString() + "</svg>",
                                t = he.firstChild;
                            e.firstChild;

                        )
                            e.removeChild(e.firstChild);
                        for (; t.firstChild; ) e.appendChild(t.firstChild);
                    }
                }),
                "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
                    ? function (e, t, n, r) {
                          MSApp.execUnsafeLocalFunction(function () {
                              return ve(e, t);
                          });
                      }
                    : ve);
        function ye(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType)
                    return void (n.nodeValue = t);
            }
            e.textContent = t;
        }
        var be = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0,
            },
            we = ["Webkit", "ms", "Moz", "O"];
        function xe(e, t, n) {
            return null == t || "boolean" === typeof t || "" === t
                ? ""
                : n ||
                  "number" !== typeof t ||
                  0 === t ||
                  (be.hasOwnProperty(e) && be[e])
                ? ("" + t).trim()
                : t + "px";
        }
        function ke(e, t) {
            for (var n in ((e = e.style), t))
                if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"),
                        a = xe(n, t[n], r);
                    "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, a) : (e[n] = a);
                }
        }
        Object.keys(be).forEach(function (e) {
            we.forEach(function (t) {
                (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
                    (be[t] = be[e]);
            });
        });
        var Se = a(
            { menuitem: !0 },
            {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
            }
        );
        function Oe(e, t) {
            if (t) {
                if (
                    Se[e] &&
                    (null != t.children || null != t.dangerouslySetInnerHTML)
                )
                    throw Error(o(137, e));
                if (null != t.dangerouslySetInnerHTML) {
                    if (null != t.children) throw Error(o(60));
                    if (
                        "object" !== typeof t.dangerouslySetInnerHTML ||
                        !("__html" in t.dangerouslySetInnerHTML)
                    )
                        throw Error(o(61));
                }
                if (null != t.style && "object" !== typeof t.style)
                    throw Error(o(62));
            }
        }
        function Ce(e, t) {
            if (-1 === e.indexOf("-")) return "string" === typeof t.is;
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        function je(e) {
            return (
                (e = e.target || e.srcElement || window)
                    .correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            );
        }
        var Ee = null,
            Pe = null,
            _e = null;
        function Te(e) {
            if ((e = ea(e))) {
                if ("function" !== typeof Ee) throw Error(o(280));
                var t = e.stateNode;
                t && ((t = na(t)), Ee(e.stateNode, e.type, t));
            }
        }
        function Le(e) {
            Pe ? (_e ? _e.push(e) : (_e = [e])) : (Pe = e);
        }
        function Ae() {
            if (Pe) {
                var e = Pe,
                    t = _e;
                if (((_e = Pe = null), Te(e), t))
                    for (e = 0; e < t.length; e++) Te(t[e]);
            }
        }
        function Ie(e, t) {
            return e(t);
        }
        function Re(e, t, n, r, a) {
            return e(t, n, r, a);
        }
        function Me() {}
        var ze = Ie,
            Ne = !1,
            De = !1;
        function Fe() {
            (null === Pe && null === _e) || (Me(), Ae());
        }
        function Be(e, t) {
            var n = e.stateNode;
            if (null === n) return null;
            var r = na(n);
            if (null === r) return null;
            n = r[t];
            e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) ||
                        (r = !(
                            "button" === (e = e.type) ||
                            "input" === e ||
                            "select" === e ||
                            "textarea" === e
                        )),
                        (e = !r);
                    break e;
                default:
                    e = !1;
            }
            if (e) return null;
            if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
            return n;
        }
        var Ve = !1;
        if (f)
            try {
                var He = {};
                Object.defineProperty(He, "passive", {
                    get: function () {
                        Ve = !0;
                    },
                }),
                    window.addEventListener("test", He, He),
                    window.removeEventListener("test", He, He);
            } catch (ve) {
                Ve = !1;
            }
        function We(e, t, n, r, a, i, o, l, u) {
            var s = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, s);
            } catch (c) {
                this.onError(c);
            }
        }
        var Ue = !1,
            $e = null,
            Ye = !1,
            Xe = null,
            Ke = {
                onError: function (e) {
                    (Ue = !0), ($e = e);
                },
            };
        function qe(e, t, n, r, a, i, o, l, u) {
            (Ue = !1), ($e = null), We.apply(Ke, arguments);
        }
        function Qe(e) {
            var t = e,
                n = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
                e = t;
                do {
                    0 !== (1026 & (t = e).flags) && (n = t.return),
                        (e = t.return);
                } while (e);
            }
            return 3 === t.tag ? n : null;
        }
        function Ge(e) {
            if (13 === e.tag) {
                var t = e.memoizedState;
                if (
                    (null === t &&
                        null !== (e = e.alternate) &&
                        (t = e.memoizedState),
                    null !== t)
                )
                    return t.dehydrated;
            }
            return null;
        }
        function Ze(e) {
            if (Qe(e) !== e) throw Error(o(188));
        }
        function Je(e) {
            if (
                !(e = (function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Qe(e))) throw Error(o(188));
                        return t !== e ? null : e;
                    }
                    for (var n = e, r = t; ; ) {
                        var a = n.return;
                        if (null === a) break;
                        var i = a.alternate;
                        if (null === i) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue;
                            }
                            break;
                        }
                        if (a.child === i.child) {
                            for (i = a.child; i; ) {
                                if (i === n) return Ze(a), e;
                                if (i === r) return Ze(a), t;
                                i = i.sibling;
                            }
                            throw Error(o(188));
                        }
                        if (n.return !== r.return) (n = a), (r = i);
                        else {
                            for (var l = !1, u = a.child; u; ) {
                                if (u === n) {
                                    (l = !0), (n = a), (r = i);
                                    break;
                                }
                                if (u === r) {
                                    (l = !0), (r = a), (n = i);
                                    break;
                                }
                                u = u.sibling;
                            }
                            if (!l) {
                                for (u = i.child; u; ) {
                                    if (u === n) {
                                        (l = !0), (n = i), (r = a);
                                        break;
                                    }
                                    if (u === r) {
                                        (l = !0), (r = i), (n = a);
                                        break;
                                    }
                                    u = u.sibling;
                                }
                                if (!l) throw Error(o(189));
                            }
                        }
                        if (n.alternate !== r) throw Error(o(190));
                    }
                    if (3 !== n.tag) throw Error(o(188));
                    return n.stateNode.current === n ? e : t;
                })(e))
            )
                return null;
            for (var t = e; ; ) {
                if (5 === t.tag || 6 === t.tag) return t;
                if (t.child) (t.child.return = t), (t = t.child);
                else {
                    if (t === e) break;
                    for (; !t.sibling; ) {
                        if (!t.return || t.return === e) return null;
                        t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                }
            }
            return null;
        }
        function et(e, t) {
            for (var n = e.alternate; null !== t; ) {
                if (t === e || t === n) return !0;
                t = t.return;
            }
            return !1;
        }
        var tt,
            nt,
            rt,
            at,
            it = !1,
            ot = [],
            lt = null,
            ut = null,
            st = null,
            ct = new Map(),
            ft = new Map(),
            dt = [],
            pt =
                "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                    " "
                );
        function mt(e, t, n, r, a) {
            return {
                blockedOn: e,
                domEventName: t,
                eventSystemFlags: 16 | n,
                nativeEvent: a,
                targetContainers: [r],
            };
        }
        function ht(e, t) {
            switch (e) {
                case "focusin":
                case "focusout":
                    lt = null;
                    break;
                case "dragenter":
                case "dragleave":
                    ut = null;
                    break;
                case "mouseover":
                case "mouseout":
                    st = null;
                    break;
                case "pointerover":
                case "pointerout":
                    ct.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    ft.delete(t.pointerId);
            }
        }
        function vt(e, t, n, r, a, i) {
            return null === e || e.nativeEvent !== i
                ? ((e = mt(t, n, r, a, i)),
                  null !== t && null !== (t = ea(t)) && nt(t),
                  e)
                : ((e.eventSystemFlags |= r),
                  (t = e.targetContainers),
                  null !== a && -1 === t.indexOf(a) && t.push(a),
                  e);
        }
        function gt(e) {
            var t = Jr(e.target);
            if (null !== t) {
                var n = Qe(t);
                if (null !== n)
                    if (13 === (t = n.tag)) {
                        if (null !== (t = Ge(n)))
                            return (
                                (e.blockedOn = t),
                                void at(e.lanePriority, function () {
                                    i.unstable_runWithPriority(
                                        e.priority,
                                        function () {
                                            rt(n);
                                        }
                                    );
                                })
                            );
                    } else if (3 === t && n.stateNode.hydrate)
                        return void (e.blockedOn =
                            3 === n.tag ? n.stateNode.containerInfo : null);
            }
            e.blockedOn = null;
        }
        function yt(e) {
            if (null !== e.blockedOn) return !1;
            for (var t = e.targetContainers; 0 < t.length; ) {
                var n = Jt(
                    e.domEventName,
                    e.eventSystemFlags,
                    t[0],
                    e.nativeEvent
                );
                if (null !== n)
                    return null !== (t = ea(n)) && nt(t), (e.blockedOn = n), !1;
                t.shift();
            }
            return !0;
        }
        function bt(e, t, n) {
            yt(e) && n.delete(t);
        }
        function wt() {
            for (it = !1; 0 < ot.length; ) {
                var e = ot[0];
                if (null !== e.blockedOn) {
                    null !== (e = ea(e.blockedOn)) && tt(e);
                    break;
                }
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = Jt(
                        e.domEventName,
                        e.eventSystemFlags,
                        t[0],
                        e.nativeEvent
                    );
                    if (null !== n) {
                        e.blockedOn = n;
                        break;
                    }
                    t.shift();
                }
                null === e.blockedOn && ot.shift();
            }
            null !== lt && yt(lt) && (lt = null),
                null !== ut && yt(ut) && (ut = null),
                null !== st && yt(st) && (st = null),
                ct.forEach(bt),
                ft.forEach(bt);
        }
        function xt(e, t) {
            e.blockedOn === t &&
                ((e.blockedOn = null),
                it ||
                    ((it = !0),
                    i.unstable_scheduleCallback(
                        i.unstable_NormalPriority,
                        wt
                    )));
        }
        function kt(e) {
            function t(t) {
                return xt(t, e);
            }
            if (0 < ot.length) {
                xt(ot[0], e);
                for (var n = 1; n < ot.length; n++) {
                    var r = ot[n];
                    r.blockedOn === e && (r.blockedOn = null);
                }
            }
            for (
                null !== lt && xt(lt, e),
                    null !== ut && xt(ut, e),
                    null !== st && xt(st, e),
                    ct.forEach(t),
                    ft.forEach(t),
                    n = 0;
                n < dt.length;
                n++
            )
                (r = dt[n]).blockedOn === e && (r.blockedOn = null);
            for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
                gt(n), null === n.blockedOn && dt.shift();
        }
        function St(e, t) {
            var n = {};
            return (
                (n[e.toLowerCase()] = t.toLowerCase()),
                (n["Webkit" + e] = "webkit" + t),
                (n["Moz" + e] = "moz" + t),
                n
            );
        }
        var Ot = {
                animationend: St("Animation", "AnimationEnd"),
                animationiteration: St("Animation", "AnimationIteration"),
                animationstart: St("Animation", "AnimationStart"),
                transitionend: St("Transition", "TransitionEnd"),
            },
            Ct = {},
            jt = {};
        function Et(e) {
            if (Ct[e]) return Ct[e];
            if (!Ot[e]) return e;
            var t,
                n = Ot[e];
            for (t in n)
                if (n.hasOwnProperty(t) && t in jt) return (Ct[e] = n[t]);
            return e;
        }
        f &&
            ((jt = document.createElement("div").style),
            "AnimationEvent" in window ||
                (delete Ot.animationend.animation,
                delete Ot.animationiteration.animation,
                delete Ot.animationstart.animation),
            "TransitionEvent" in window || delete Ot.transitionend.transition);
        var Pt = Et("animationend"),
            _t = Et("animationiteration"),
            Tt = Et("animationstart"),
            Lt = Et("transitionend"),
            At = new Map(),
            It = new Map(),
            Rt = [
                "abort",
                "abort",
                Pt,
                "animationEnd",
                _t,
                "animationIteration",
                Tt,
                "animationStart",
                "canplay",
                "canPlay",
                "canplaythrough",
                "canPlayThrough",
                "durationchange",
                "durationChange",
                "emptied",
                "emptied",
                "encrypted",
                "encrypted",
                "ended",
                "ended",
                "error",
                "error",
                "gotpointercapture",
                "gotPointerCapture",
                "load",
                "load",
                "loadeddata",
                "loadedData",
                "loadedmetadata",
                "loadedMetadata",
                "loadstart",
                "loadStart",
                "lostpointercapture",
                "lostPointerCapture",
                "playing",
                "playing",
                "progress",
                "progress",
                "seeking",
                "seeking",
                "stalled",
                "stalled",
                "suspend",
                "suspend",
                "timeupdate",
                "timeUpdate",
                Lt,
                "transitionEnd",
                "waiting",
                "waiting",
            ];
        function Mt(e, t) {
            for (var n = 0; n < e.length; n += 2) {
                var r = e[n],
                    a = e[n + 1];
                (a = "on" + (a[0].toUpperCase() + a.slice(1))),
                    It.set(r, t),
                    At.set(r, a),
                    s(a, [r]);
            }
        }
        (0, i.unstable_now)();
        var zt = 8;
        function Nt(e) {
            if (0 !== (1 & e)) return (zt = 15), 1;
            if (0 !== (2 & e)) return (zt = 14), 2;
            if (0 !== (4 & e)) return (zt = 13), 4;
            var t = 24 & e;
            return 0 !== t
                ? ((zt = 12), t)
                : 0 !== (32 & e)
                ? ((zt = 11), 32)
                : 0 !== (t = 192 & e)
                ? ((zt = 10), t)
                : 0 !== (256 & e)
                ? ((zt = 9), 256)
                : 0 !== (t = 3584 & e)
                ? ((zt = 8), t)
                : 0 !== (4096 & e)
                ? ((zt = 7), 4096)
                : 0 !== (t = 4186112 & e)
                ? ((zt = 6), t)
                : 0 !== (t = 62914560 & e)
                ? ((zt = 5), t)
                : 67108864 & e
                ? ((zt = 4), 67108864)
                : 0 !== (134217728 & e)
                ? ((zt = 3), 134217728)
                : 0 !== (t = 805306368 & e)
                ? ((zt = 2), t)
                : 0 !== (1073741824 & e)
                ? ((zt = 1), 1073741824)
                : ((zt = 8), e);
        }
        function Dt(e, t) {
            var n = e.pendingLanes;
            if (0 === n) return (zt = 0);
            var r = 0,
                a = 0,
                i = e.expiredLanes,
                o = e.suspendedLanes,
                l = e.pingedLanes;
            if (0 !== i) (r = i), (a = zt = 15);
            else if (0 !== (i = 134217727 & n)) {
                var u = i & ~o;
                0 !== u
                    ? ((r = Nt(u)), (a = zt))
                    : 0 !== (l &= i) && ((r = Nt(l)), (a = zt));
            } else
                0 !== (i = n & ~o)
                    ? ((r = Nt(i)), (a = zt))
                    : 0 !== l && ((r = Nt(l)), (a = zt));
            if (0 === r) return 0;
            if (
                ((r = n & (((0 > (r = 31 - Ut(r)) ? 0 : 1 << r) << 1) - 1)),
                0 !== t && t !== r && 0 === (t & o))
            ) {
                if ((Nt(t), a <= zt)) return t;
                zt = a;
            }
            if (0 !== (t = e.entangledLanes))
                for (e = e.entanglements, t &= r; 0 < t; )
                    (a = 1 << (n = 31 - Ut(t))), (r |= e[n]), (t &= ~a);
            return r;
        }
        function Ft(e) {
            return 0 !== (e = -1073741825 & e.pendingLanes)
                ? e
                : 1073741824 & e
                ? 1073741824
                : 0;
        }
        function Bt(e, t) {
            switch (e) {
                case 15:
                    return 1;
                case 14:
                    return 2;
                case 12:
                    return 0 === (e = Vt(24 & ~t)) ? Bt(10, t) : e;
                case 10:
                    return 0 === (e = Vt(192 & ~t)) ? Bt(8, t) : e;
                case 8:
                    return (
                        0 === (e = Vt(3584 & ~t)) &&
                            0 === (e = Vt(4186112 & ~t)) &&
                            (e = 512),
                        e
                    );
                case 2:
                    return 0 === (t = Vt(805306368 & ~t)) && (t = 268435456), t;
            }
            throw Error(o(358, e));
        }
        function Vt(e) {
            return e & -e;
        }
        function Ht(e) {
            for (var t = [], n = 0; 31 > n; n++) t.push(e);
            return t;
        }
        function Wt(e, t, n) {
            e.pendingLanes |= t;
            var r = t - 1;
            (e.suspendedLanes &= r),
                (e.pingedLanes &= r),
                ((e = e.eventTimes)[(t = 31 - Ut(t))] = n);
        }
        var Ut = Math.clz32
                ? Math.clz32
                : function (e) {
                      return 0 === e ? 32 : (31 - (($t(e) / Yt) | 0)) | 0;
                  },
            $t = Math.log,
            Yt = Math.LN2;
        var Xt = i.unstable_UserBlockingPriority,
            Kt = i.unstable_runWithPriority,
            qt = !0;
        function Qt(e, t, n, r) {
            Ne || Me();
            var a = Zt,
                i = Ne;
            Ne = !0;
            try {
                Re(a, e, t, n, r);
            } finally {
                (Ne = i) || Fe();
            }
        }
        function Gt(e, t, n, r) {
            Kt(Xt, Zt.bind(null, e, t, n, r));
        }
        function Zt(e, t, n, r) {
            var a;
            if (qt)
                if ((a = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
                    (e = mt(null, e, t, n, r)), ot.push(e);
                else {
                    var i = Jt(e, t, n, r);
                    if (null === i) a && ht(e, r);
                    else {
                        if (a) {
                            if (-1 < pt.indexOf(e))
                                return (e = mt(i, e, t, n, r)), void ot.push(e);
                            if (
                                (function (e, t, n, r, a) {
                                    switch (t) {
                                        case "focusin":
                                            return (
                                                (lt = vt(lt, e, t, n, r, a)), !0
                                            );
                                        case "dragenter":
                                            return (
                                                (ut = vt(ut, e, t, n, r, a)), !0
                                            );
                                        case "mouseover":
                                            return (
                                                (st = vt(st, e, t, n, r, a)), !0
                                            );
                                        case "pointerover":
                                            var i = a.pointerId;
                                            return (
                                                ct.set(
                                                    i,
                                                    vt(
                                                        ct.get(i) || null,
                                                        e,
                                                        t,
                                                        n,
                                                        r,
                                                        a
                                                    )
                                                ),
                                                !0
                                            );
                                        case "gotpointercapture":
                                            return (
                                                (i = a.pointerId),
                                                ft.set(
                                                    i,
                                                    vt(
                                                        ft.get(i) || null,
                                                        e,
                                                        t,
                                                        n,
                                                        r,
                                                        a
                                                    )
                                                ),
                                                !0
                                            );
                                    }
                                    return !1;
                                })(i, e, t, n, r)
                            )
                                return;
                            ht(e, r);
                        }
                        Ar(e, t, r, null, n);
                    }
                }
        }
        function Jt(e, t, n, r) {
            var a = je(r);
            if (null !== (a = Jr(a))) {
                var i = Qe(a);
                if (null === i) a = null;
                else {
                    var o = i.tag;
                    if (13 === o) {
                        if (null !== (a = Ge(i))) return a;
                        a = null;
                    } else if (3 === o) {
                        if (i.stateNode.hydrate)
                            return 3 === i.tag
                                ? i.stateNode.containerInfo
                                : null;
                        a = null;
                    } else i !== a && (a = null);
                }
            }
            return Ar(e, t, r, a, n), null;
        }
        var en = null,
            tn = null,
            nn = null;
        function rn() {
            if (nn) return nn;
            var e,
                t,
                n = tn,
                r = n.length,
                a = "value" in en ? en.value : en.textContent,
                i = a.length;
            for (e = 0; e < r && n[e] === a[e]; e++);
            var o = r - e;
            for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
            return (nn = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function an(e) {
            var t = e.keyCode;
            return (
                "charCode" in e
                    ? 0 === (e = e.charCode) && 13 === t && (e = 13)
                    : (e = t),
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            );
        }
        function on() {
            return !0;
        }
        function ln() {
            return !1;
        }
        function un(e) {
            function t(t, n, r, a, i) {
                for (var o in ((this._reactName = t),
                (this._targetInst = r),
                (this.type = n),
                (this.nativeEvent = a),
                (this.target = i),
                (this.currentTarget = null),
                e))
                    e.hasOwnProperty(o) &&
                        ((t = e[o]), (this[o] = t ? t(a) : a[o]));
                return (
                    (this.isDefaultPrevented = (
                        null != a.defaultPrevented
                            ? a.defaultPrevented
                            : !1 === a.returnValue
                    )
                        ? on
                        : ln),
                    (this.isPropagationStopped = ln),
                    this
                );
            }
            return (
                a(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e &&
                            (e.preventDefault
                                ? e.preventDefault()
                                : "unknown" !== typeof e.returnValue &&
                                  (e.returnValue = !1),
                            (this.isDefaultPrevented = on));
                    },
                    stopPropagation: function () {
                        var e = this.nativeEvent;
                        e &&
                            (e.stopPropagation
                                ? e.stopPropagation()
                                : "unknown" !== typeof e.cancelBubble &&
                                  (e.cancelBubble = !0),
                            (this.isPropagationStopped = on));
                    },
                    persist: function () {},
                    isPersistent: on,
                }),
                t
            );
        }
        var sn,
            cn,
            fn,
            dn = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function (e) {
                    return e.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0,
            },
            pn = un(dn),
            mn = a({}, dn, { view: 0, detail: 0 }),
            hn = un(mn),
            vn = a({}, mn, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: En,
                button: 0,
                buttons: 0,
                relatedTarget: function (e) {
                    return void 0 === e.relatedTarget
                        ? e.fromElement === e.srcElement
                            ? e.toElement
                            : e.fromElement
                        : e.relatedTarget;
                },
                movementX: function (e) {
                    return "movementX" in e
                        ? e.movementX
                        : (e !== fn &&
                              (fn && "mousemove" === e.type
                                  ? ((sn = e.screenX - fn.screenX),
                                    (cn = e.screenY - fn.screenY))
                                  : (cn = sn = 0),
                              (fn = e)),
                          sn);
                },
                movementY: function (e) {
                    return "movementY" in e ? e.movementY : cn;
                },
            }),
            gn = un(vn),
            yn = un(a({}, vn, { dataTransfer: 0 })),
            bn = un(a({}, mn, { relatedTarget: 0 })),
            wn = un(
                a({}, dn, {
                    animationName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0,
                })
            ),
            xn = un(
                a({}, dn, {
                    clipboardData: function (e) {
                        return "clipboardData" in e
                            ? e.clipboardData
                            : window.clipboardData;
                    },
                })
            ),
            kn = un(a({}, dn, { data: 0 })),
            Sn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified",
            },
            On = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta",
            },
            Cn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey",
            };
        function jn(e) {
            var t = this.nativeEvent;
            return t.getModifierState
                ? t.getModifierState(e)
                : !!(e = Cn[e]) && !!t[e];
        }
        function En() {
            return jn;
        }
        var Pn = un(
                a({}, mn, {
                    key: function (e) {
                        if (e.key) {
                            var t = Sn[e.key] || e.key;
                            if ("Unidentified" !== t) return t;
                        }
                        return "keypress" === e.type
                            ? 13 === (e = an(e))
                                ? "Enter"
                                : String.fromCharCode(e)
                            : "keydown" === e.type || "keyup" === e.type
                            ? On[e.keyCode] || "Unidentified"
                            : "";
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: En,
                    charCode: function (e) {
                        return "keypress" === e.type ? an(e) : 0;
                    },
                    keyCode: function (e) {
                        return "keydown" === e.type || "keyup" === e.type
                            ? e.keyCode
                            : 0;
                    },
                    which: function (e) {
                        return "keypress" === e.type
                            ? an(e)
                            : "keydown" === e.type || "keyup" === e.type
                            ? e.keyCode
                            : 0;
                    },
                })
            ),
            _n = un(
                a({}, vn, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0,
                })
            ),
            Tn = un(
                a({}, mn, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: En,
                })
            ),
            Ln = un(
                a({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
            ),
            An = un(
                a({}, vn, {
                    deltaX: function (e) {
                        return "deltaX" in e
                            ? e.deltaX
                            : "wheelDeltaX" in e
                            ? -e.wheelDeltaX
                            : 0;
                    },
                    deltaY: function (e) {
                        return "deltaY" in e
                            ? e.deltaY
                            : "wheelDeltaY" in e
                            ? -e.wheelDeltaY
                            : "wheelDelta" in e
                            ? -e.wheelDelta
                            : 0;
                    },
                    deltaZ: 0,
                    deltaMode: 0,
                })
            ),
            In = [9, 13, 27, 32],
            Rn = f && "CompositionEvent" in window,
            Mn = null;
        f && "documentMode" in document && (Mn = document.documentMode);
        var zn = f && "TextEvent" in window && !Mn,
            Nn = f && (!Rn || (Mn && 8 < Mn && 11 >= Mn)),
            Dn = String.fromCharCode(32),
            Fn = !1;
        function Bn(e, t) {
            switch (e) {
                case "keyup":
                    return -1 !== In.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function Vn(e) {
            return "object" === typeof (e = e.detail) && "data" in e
                ? e.data
                : null;
        }
        var Hn = !1;
        var Wn = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
        };
        function Un(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
            Le(r),
                0 < (t = Rr(t, "onChange")).length &&
                    ((n = new pn("onChange", "change", null, n, r)),
                    e.push({ event: n, listeners: t }));
        }
        var Yn = null,
            Xn = null;
        function Kn(e) {
            jr(e, 0);
        }
        function qn(e) {
            if (G(ta(e))) return e;
        }
        function Qn(e, t) {
            if ("change" === e) return t;
        }
        var Gn = !1;
        if (f) {
            var Zn;
            if (f) {
                var Jn = "oninput" in document;
                if (!Jn) {
                    var er = document.createElement("div");
                    er.setAttribute("oninput", "return;"),
                        (Jn = "function" === typeof er.oninput);
                }
                Zn = Jn;
            } else Zn = !1;
            Gn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
            Yn && (Yn.detachEvent("onpropertychange", nr), (Xn = Yn = null));
        }
        function nr(e) {
            if ("value" === e.propertyName && qn(Xn)) {
                var t = [];
                if (($n(t, Xn, e, je(e)), (e = Kn), Ne)) e(t);
                else {
                    Ne = !0;
                    try {
                        Ie(e, t);
                    } finally {
                        (Ne = !1), Fe();
                    }
                }
            }
        }
        function rr(e, t, n) {
            "focusin" === e
                ? (tr(), (Xn = n), (Yn = t).attachEvent("onpropertychange", nr))
                : "focusout" === e && tr();
        }
        function ar(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                return qn(Xn);
        }
        function ir(e, t) {
            if ("click" === e) return qn(t);
        }
        function or(e, t) {
            if ("input" === e || "change" === e) return qn(t);
        }
        var lr =
                "function" === typeof Object.is
                    ? Object.is
                    : function (e, t) {
                          return (
                              (e === t && (0 !== e || 1 / e === 1 / t)) ||
                              (e !== e && t !== t)
                          );
                      },
            ur = Object.prototype.hasOwnProperty;
        function sr(e, t) {
            if (lr(e, t)) return !0;
            if (
                "object" !== typeof e ||
                null === e ||
                "object" !== typeof t ||
                null === t
            )
                return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++)
                if (!ur.call(t, n[r]) || !lr(e[n[r]], t[n[r]])) return !1;
            return !0;
        }
        function cr(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
        }
        function fr(e, t) {
            var n,
                r = cr(e);
            for (e = 0; r; ) {
                if (3 === r.nodeType) {
                    if (((n = e + r.textContent.length), e <= t && n >= t))
                        return { node: r, offset: t - e };
                    e = n;
                }
                e: {
                    for (; r; ) {
                        if (r.nextSibling) {
                            r = r.nextSibling;
                            break e;
                        }
                        r = r.parentNode;
                    }
                    r = void 0;
                }
                r = cr(r);
            }
        }
        function dr(e, t) {
            return (
                !(!e || !t) &&
                (e === t ||
                    ((!e || 3 !== e.nodeType) &&
                        (t && 3 === t.nodeType
                            ? dr(e, t.parentNode)
                            : "contains" in e
                            ? e.contains(t)
                            : !!e.compareDocumentPosition &&
                              !!(16 & e.compareDocumentPosition(t)))))
            );
        }
        function pr() {
            for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
                try {
                    var n = "string" === typeof t.contentWindow.location.href;
                } catch (r) {
                    n = !1;
                }
                if (!n) break;
                t = Z((e = t.contentWindow).document);
            }
            return t;
        }
        function mr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return (
                t &&
                (("input" === t &&
                    ("text" === e.type ||
                        "search" === e.type ||
                        "tel" === e.type ||
                        "url" === e.type ||
                        "password" === e.type)) ||
                    "textarea" === t ||
                    "true" === e.contentEditable)
            );
        }
        var hr = f && "documentMode" in document && 11 >= document.documentMode,
            vr = null,
            gr = null,
            yr = null,
            br = !1;
        function wr(e, t, n) {
            var r =
                n.window === n
                    ? n.document
                    : 9 === n.nodeType
                    ? n
                    : n.ownerDocument;
            br ||
                null == vr ||
                vr !== Z(r) ||
                ("selectionStart" in (r = vr) && mr(r)
                    ? (r = { start: r.selectionStart, end: r.selectionEnd })
                    : (r = {
                          anchorNode: (r = (
                              (r.ownerDocument &&
                                  r.ownerDocument.defaultView) ||
                              window
                          ).getSelection()).anchorNode,
                          anchorOffset: r.anchorOffset,
                          focusNode: r.focusNode,
                          focusOffset: r.focusOffset,
                      }),
                (yr && sr(yr, r)) ||
                    ((yr = r),
                    0 < (r = Rr(gr, "onSelect")).length &&
                        ((t = new pn("onSelect", "select", null, t, n)),
                        e.push({ event: t, listeners: r }),
                        (t.target = vr))));
        }
        Mt(
            "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
                " "
            ),
            0
        ),
            Mt(
                "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
                    " "
                ),
                1
            ),
            Mt(Rt, 2);
        for (
            var xr =
                    "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                        " "
                    ),
                kr = 0;
            kr < xr.length;
            kr++
        )
            It.set(xr[kr], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
            c("onMouseLeave", ["mouseout", "mouseover"]),
            c("onPointerEnter", ["pointerout", "pointerover"]),
            c("onPointerLeave", ["pointerout", "pointerover"]),
            s(
                "onChange",
                "change click focusin focusout input keydown keyup selectionchange".split(
                    " "
                )
            ),
            s(
                "onSelect",
                "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                    " "
                )
            ),
            s("onBeforeInput", [
                "compositionend",
                "keypress",
                "textInput",
                "paste",
            ]),
            s(
                "onCompositionEnd",
                "compositionend focusout keydown keypress keyup mousedown".split(
                    " "
                )
            ),
            s(
                "onCompositionStart",
                "compositionstart focusout keydown keypress keyup mousedown".split(
                    " "
                )
            ),
            s(
                "onCompositionUpdate",
                "compositionupdate focusout keydown keypress keyup mousedown".split(
                    " "
                )
            );
        var Sr =
                "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
                    " "
                ),
            Or = new Set(
                "cancel close invalid load scroll toggle".split(" ").concat(Sr)
            );
        function Cr(e, t, n) {
            var r = e.type || "unknown-event";
            (e.currentTarget = n),
                (function (e, t, n, r, a, i, l, u, s) {
                    if ((qe.apply(this, arguments), Ue)) {
                        if (!Ue) throw Error(o(198));
                        var c = $e;
                        (Ue = !1), ($e = null), Ye || ((Ye = !0), (Xe = c));
                    }
                })(r, t, void 0, e),
                (e.currentTarget = null);
        }
        function jr(e, t) {
            t = 0 !== (4 & t);
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    a = r.event;
                r = r.listeners;
                e: {
                    var i = void 0;
                    if (t)
                        for (var o = r.length - 1; 0 <= o; o--) {
                            var l = r[o],
                                u = l.instance,
                                s = l.currentTarget;
                            if (
                                ((l = l.listener),
                                u !== i && a.isPropagationStopped())
                            )
                                break e;
                            Cr(a, l, s), (i = u);
                        }
                    else
                        for (o = 0; o < r.length; o++) {
                            if (
                                ((u = (l = r[o]).instance),
                                (s = l.currentTarget),
                                (l = l.listener),
                                u !== i && a.isPropagationStopped())
                            )
                                break e;
                            Cr(a, l, s), (i = u);
                        }
                }
            }
            if (Ye) throw ((e = Xe), (Ye = !1), (Xe = null), e);
        }
        function Er(e, t) {
            var n = ra(t),
                r = e + "__bubble";
            n.has(r) || (Lr(t, e, 2, !1), n.add(r));
        }
        var Pr = "_reactListening" + Math.random().toString(36).slice(2);
        function _r(e) {
            e[Pr] ||
                ((e[Pr] = !0),
                l.forEach(function (t) {
                    Or.has(t) || Tr(t, !1, e, null), Tr(t, !0, e, null);
                }));
        }
        function Tr(e, t, n, r) {
            var a =
                    4 < arguments.length && void 0 !== arguments[4]
                        ? arguments[4]
                        : 0,
                i = n;
            if (
                ("selectionchange" === e &&
                    9 !== n.nodeType &&
                    (i = n.ownerDocument),
                null !== r && !t && Or.has(e))
            ) {
                if ("scroll" !== e) return;
                (a |= 2), (i = r);
            }
            var o = ra(i),
                l = e + "__" + (t ? "capture" : "bubble");
            o.has(l) || (t && (a |= 4), Lr(i, e, a, t), o.add(l));
        }
        function Lr(e, t, n, r) {
            var a = It.get(t);
            switch (void 0 === a ? 2 : a) {
                case 0:
                    a = Qt;
                    break;
                case 1:
                    a = Gt;
                    break;
                default:
                    a = Zt;
            }
            (n = a.bind(null, t, n, e)),
                (a = void 0),
                !Ve ||
                    ("touchstart" !== t &&
                        "touchmove" !== t &&
                        "wheel" !== t) ||
                    (a = !0),
                r
                    ? void 0 !== a
                        ? e.addEventListener(t, n, { capture: !0, passive: a })
                        : e.addEventListener(t, n, !0)
                    : void 0 !== a
                    ? e.addEventListener(t, n, { passive: a })
                    : e.addEventListener(t, n, !1);
        }
        function Ar(e, t, n, r, a) {
            var i = r;
            if (0 === (1 & t) && 0 === (2 & t) && null !== r)
                e: for (;;) {
                    if (null === r) return;
                    var o = r.tag;
                    if (3 === o || 4 === o) {
                        var l = r.stateNode.containerInfo;
                        if (l === a || (8 === l.nodeType && l.parentNode === a))
                            break;
                        if (4 === o)
                            for (o = r.return; null !== o; ) {
                                var u = o.tag;
                                if (
                                    (3 === u || 4 === u) &&
                                    ((u = o.stateNode.containerInfo) === a ||
                                        (8 === u.nodeType &&
                                            u.parentNode === a))
                                )
                                    return;
                                o = o.return;
                            }
                        for (; null !== l; ) {
                            if (null === (o = Jr(l))) return;
                            if (5 === (u = o.tag) || 6 === u) {
                                r = i = o;
                                continue e;
                            }
                            l = l.parentNode;
                        }
                    }
                    r = r.return;
                }
            !(function (e, t, n) {
                if (De) return e(t, n);
                De = !0;
                try {
                    ze(e, t, n);
                } finally {
                    (De = !1), Fe();
                }
            })(function () {
                var r = i,
                    a = je(n),
                    o = [];
                e: {
                    var l = At.get(e);
                    if (void 0 !== l) {
                        var u = pn,
                            s = e;
                        switch (e) {
                            case "keypress":
                                if (0 === an(n)) break e;
                            case "keydown":
                            case "keyup":
                                u = Pn;
                                break;
                            case "focusin":
                                (s = "focus"), (u = bn);
                                break;
                            case "focusout":
                                (s = "blur"), (u = bn);
                                break;
                            case "beforeblur":
                            case "afterblur":
                                u = bn;
                                break;
                            case "click":
                                if (2 === n.button) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                u = gn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                u = yn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                u = Tn;
                                break;
                            case Pt:
                            case _t:
                            case Tt:
                                u = wn;
                                break;
                            case Lt:
                                u = Ln;
                                break;
                            case "scroll":
                                u = hn;
                                break;
                            case "wheel":
                                u = An;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                u = xn;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                u = _n;
                        }
                        var c = 0 !== (4 & t),
                            f = !c && "scroll" === e,
                            d = c ? (null !== l ? l + "Capture" : null) : l;
                        c = [];
                        for (var p, m = r; null !== m; ) {
                            var h = (p = m).stateNode;
                            if (
                                (5 === p.tag &&
                                    null !== h &&
                                    ((p = h),
                                    null !== d &&
                                        null != (h = Be(m, d)) &&
                                        c.push(Ir(m, h, p))),
                                f)
                            )
                                break;
                            m = m.return;
                        }
                        0 < c.length &&
                            ((l = new u(l, s, null, n, a)),
                            o.push({ event: l, listeners: c }));
                    }
                }
                if (0 === (7 & t)) {
                    if (
                        ((u = "mouseout" === e || "pointerout" === e),
                        (!(l = "mouseover" === e || "pointerover" === e) ||
                            0 !== (16 & t) ||
                            !(s = n.relatedTarget || n.fromElement) ||
                            (!Jr(s) && !s[Gr])) &&
                            (u || l) &&
                            ((l =
                                a.window === a
                                    ? a
                                    : (l = a.ownerDocument)
                                    ? l.defaultView || l.parentWindow
                                    : window),
                            u
                                ? ((u = r),
                                  null !==
                                      (s = (s = n.relatedTarget || n.toElement)
                                          ? Jr(s)
                                          : null) &&
                                      (s !== (f = Qe(s)) ||
                                          (5 !== s.tag && 6 !== s.tag)) &&
                                      (s = null))
                                : ((u = null), (s = r)),
                            u !== s))
                    ) {
                        if (
                            ((c = gn),
                            (h = "onMouseLeave"),
                            (d = "onMouseEnter"),
                            (m = "mouse"),
                            ("pointerout" !== e && "pointerover" !== e) ||
                                ((c = _n),
                                (h = "onPointerLeave"),
                                (d = "onPointerEnter"),
                                (m = "pointer")),
                            (f = null == u ? l : ta(u)),
                            (p = null == s ? l : ta(s)),
                            ((l = new c(h, m + "leave", u, n, a)).target = f),
                            (l.relatedTarget = p),
                            (h = null),
                            Jr(a) === r &&
                                (((c = new c(d, m + "enter", s, n, a)).target =
                                    p),
                                (c.relatedTarget = f),
                                (h = c)),
                            (f = h),
                            u && s)
                        )
                            e: {
                                for (d = s, m = 0, p = c = u; p; p = Mr(p)) m++;
                                for (p = 0, h = d; h; h = Mr(h)) p++;
                                for (; 0 < m - p; ) (c = Mr(c)), m--;
                                for (; 0 < p - m; ) (d = Mr(d)), p--;
                                for (; m--; ) {
                                    if (
                                        c === d ||
                                        (null !== d && c === d.alternate)
                                    )
                                        break e;
                                    (c = Mr(c)), (d = Mr(d));
                                }
                                c = null;
                            }
                        else c = null;
                        null !== u && zr(o, l, u, c, !1),
                            null !== s && null !== f && zr(o, f, s, c, !0);
                    }
                    if (
                        "select" ===
                            (u =
                                (l = r ? ta(r) : window).nodeName &&
                                l.nodeName.toLowerCase()) ||
                        ("input" === u && "file" === l.type)
                    )
                        var v = Qn;
                    else if (Un(l))
                        if (Gn) v = or;
                        else {
                            v = ar;
                            var g = rr;
                        }
                    else
                        (u = l.nodeName) &&
                            "input" === u.toLowerCase() &&
                            ("checkbox" === l.type || "radio" === l.type) &&
                            (v = ir);
                    switch (
                        (v && (v = v(e, r))
                            ? $n(o, v, n, a)
                            : (g && g(e, l, r),
                              "focusout" === e &&
                                  (g = l._wrapperState) &&
                                  g.controlled &&
                                  "number" === l.type &&
                                  ae(l, "number", l.value)),
                        (g = r ? ta(r) : window),
                        e)
                    ) {
                        case "focusin":
                            (Un(g) || "true" === g.contentEditable) &&
                                ((vr = g), (gr = r), (yr = null));
                            break;
                        case "focusout":
                            yr = gr = vr = null;
                            break;
                        case "mousedown":
                            br = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            (br = !1), wr(o, n, a);
                            break;
                        case "selectionchange":
                            if (hr) break;
                        case "keydown":
                        case "keyup":
                            wr(o, n, a);
                    }
                    var y;
                    if (Rn)
                        e: {
                            switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e;
                            }
                            b = void 0;
                        }
                    else
                        Hn
                            ? Bn(e, n) && (b = "onCompositionEnd")
                            : "keydown" === e &&
                              229 === n.keyCode &&
                              (b = "onCompositionStart");
                    b &&
                        (Nn &&
                            "ko" !== n.locale &&
                            (Hn || "onCompositionStart" !== b
                                ? "onCompositionEnd" === b && Hn && (y = rn())
                                : ((tn =
                                      "value" in (en = a)
                                          ? en.value
                                          : en.textContent),
                                  (Hn = !0))),
                        0 < (g = Rr(r, b)).length &&
                            ((b = new kn(b, e, null, n, a)),
                            o.push({ event: b, listeners: g }),
                            y
                                ? (b.data = y)
                                : null !== (y = Vn(n)) && (b.data = y))),
                        (y = zn
                            ? (function (e, t) {
                                  switch (e) {
                                      case "compositionend":
                                          return Vn(t);
                                      case "keypress":
                                          return 32 !== t.which
                                              ? null
                                              : ((Fn = !0), Dn);
                                      case "textInput":
                                          return (e = t.data) === Dn && Fn
                                              ? null
                                              : e;
                                      default:
                                          return null;
                                  }
                              })(e, n)
                            : (function (e, t) {
                                  if (Hn)
                                      return "compositionend" === e ||
                                          (!Rn && Bn(e, t))
                                          ? ((e = rn()),
                                            (nn = tn = en = null),
                                            (Hn = !1),
                                            e)
                                          : null;
                                  switch (e) {
                                      case "paste":
                                          return null;
                                      case "keypress":
                                          if (
                                              !(
                                                  t.ctrlKey ||
                                                  t.altKey ||
                                                  t.metaKey
                                              ) ||
                                              (t.ctrlKey && t.altKey)
                                          ) {
                                              if (t.char && 1 < t.char.length)
                                                  return t.char;
                                              if (t.which)
                                                  return String.fromCharCode(
                                                      t.which
                                                  );
                                          }
                                          return null;
                                      case "compositionend":
                                          return Nn && "ko" !== t.locale
                                              ? null
                                              : t.data;
                                      default:
                                          return null;
                                  }
                              })(e, n)) &&
                            0 < (r = Rr(r, "onBeforeInput")).length &&
                            ((a = new kn(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                n,
                                a
                            )),
                            o.push({ event: a, listeners: r }),
                            (a.data = y));
                }
                jr(o, t);
            });
        }
        function Ir(e, t, n) {
            return { instance: e, listener: t, currentTarget: n };
        }
        function Rr(e, t) {
            for (var n = t + "Capture", r = []; null !== e; ) {
                var a = e,
                    i = a.stateNode;
                5 === a.tag &&
                    null !== i &&
                    ((a = i),
                    null != (i = Be(e, n)) && r.unshift(Ir(e, i, a)),
                    null != (i = Be(e, t)) && r.push(Ir(e, i, a))),
                    (e = e.return);
            }
            return r;
        }
        function Mr(e) {
            if (null === e) return null;
            do {
                e = e.return;
            } while (e && 5 !== e.tag);
            return e || null;
        }
        function zr(e, t, n, r, a) {
            for (var i = t._reactName, o = []; null !== n && n !== r; ) {
                var l = n,
                    u = l.alternate,
                    s = l.stateNode;
                if (null !== u && u === r) break;
                5 === l.tag &&
                    null !== s &&
                    ((l = s),
                    a
                        ? null != (u = Be(n, i)) && o.unshift(Ir(n, u, l))
                        : a || (null != (u = Be(n, i)) && o.push(Ir(n, u, l)))),
                    (n = n.return);
            }
            0 !== o.length && e.push({ event: t, listeners: o });
        }
        function Nr() {}
        var Dr = null,
            Fr = null;
        function Br(e, t) {
            switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!t.autoFocus;
            }
            return !1;
        }
        function Vr(e, t) {
            return (
                "textarea" === e ||
                "option" === e ||
                "noscript" === e ||
                "string" === typeof t.children ||
                "number" === typeof t.children ||
                ("object" === typeof t.dangerouslySetInnerHTML &&
                    null !== t.dangerouslySetInnerHTML &&
                    null != t.dangerouslySetInnerHTML.__html)
            );
        }
        var Hr = "function" === typeof setTimeout ? setTimeout : void 0,
            Wr = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function Ur(e) {
            1 === e.nodeType
                ? (e.textContent = "")
                : 9 === e.nodeType &&
                  null != (e = e.body) &&
                  (e.textContent = "");
        }
        function $r(e) {
            for (; null != e; e = e.nextSibling) {
                var t = e.nodeType;
                if (1 === t || 3 === t) break;
            }
            return e;
        }
        function Yr(e) {
            e = e.previousSibling;
            for (var t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ("$" === n || "$!" === n || "$?" === n) {
                        if (0 === t) return e;
                        t--;
                    } else "/$" === n && t++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        var Xr = 0;
        var Kr = Math.random().toString(36).slice(2),
            qr = "__reactFiber$" + Kr,
            Qr = "__reactProps$" + Kr,
            Gr = "__reactContainer$" + Kr,
            Zr = "__reactEvents$" + Kr;
        function Jr(e) {
            var t = e[qr];
            if (t) return t;
            for (var n = e.parentNode; n; ) {
                if ((t = n[Gr] || n[qr])) {
                    if (
                        ((n = t.alternate),
                        null !== t.child || (null !== n && null !== n.child))
                    )
                        for (e = Yr(e); null !== e; ) {
                            if ((n = e[qr])) return n;
                            e = Yr(e);
                        }
                    return t;
                }
                n = (e = n).parentNode;
            }
            return null;
        }
        function ea(e) {
            return !(e = e[qr] || e[Gr]) ||
                (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
                ? null
                : e;
        }
        function ta(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            throw Error(o(33));
        }
        function na(e) {
            return e[Qr] || null;
        }
        function ra(e) {
            var t = e[Zr];
            return void 0 === t && (t = e[Zr] = new Set()), t;
        }
        var aa = [],
            ia = -1;
        function oa(e) {
            return { current: e };
        }
        function la(e) {
            0 > ia || ((e.current = aa[ia]), (aa[ia] = null), ia--);
        }
        function ua(e, t) {
            ia++, (aa[ia] = e.current), (e.current = t);
        }
        var sa = {},
            ca = oa(sa),
            fa = oa(!1),
            da = sa;
        function pa(e, t) {
            var n = e.type.contextTypes;
            if (!n) return sa;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                return r.__reactInternalMemoizedMaskedChildContext;
            var a,
                i = {};
            for (a in n) i[a] = t[a];
            return (
                r &&
                    (((e =
                        e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                        t),
                    (e.__reactInternalMemoizedMaskedChildContext = i)),
                i
            );
        }
        function ma(e) {
            return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function ha() {
            la(fa), la(ca);
        }
        function va(e, t, n) {
            if (ca.current !== sa) throw Error(o(168));
            ua(ca, t), ua(fa, n);
        }
        function ga(e, t, n) {
            var r = e.stateNode;
            if (
                ((e = t.childContextTypes),
                "function" !== typeof r.getChildContext)
            )
                return n;
            for (var i in (r = r.getChildContext()))
                if (!(i in e)) throw Error(o(108, X(t) || "Unknown", i));
            return a({}, n, r);
        }
        function ya(e) {
            return (
                (e =
                    ((e = e.stateNode) &&
                        e.__reactInternalMemoizedMergedChildContext) ||
                    sa),
                (da = ca.current),
                ua(ca, e),
                ua(fa, fa.current),
                !0
            );
        }
        function ba(e, t, n) {
            var r = e.stateNode;
            if (!r) throw Error(o(169));
            n
                ? ((e = ga(e, t, da)),
                  (r.__reactInternalMemoizedMergedChildContext = e),
                  la(fa),
                  la(ca),
                  ua(ca, e))
                : la(fa),
                ua(fa, n);
        }
        var wa = null,
            xa = null,
            ka = i.unstable_runWithPriority,
            Sa = i.unstable_scheduleCallback,
            Oa = i.unstable_cancelCallback,
            Ca = i.unstable_shouldYield,
            ja = i.unstable_requestPaint,
            Ea = i.unstable_now,
            Pa = i.unstable_getCurrentPriorityLevel,
            _a = i.unstable_ImmediatePriority,
            Ta = i.unstable_UserBlockingPriority,
            La = i.unstable_NormalPriority,
            Aa = i.unstable_LowPriority,
            Ia = i.unstable_IdlePriority,
            Ra = {},
            Ma = void 0 !== ja ? ja : function () {},
            za = null,
            Na = null,
            Da = !1,
            Fa = Ea(),
            Ba =
                1e4 > Fa
                    ? Ea
                    : function () {
                          return Ea() - Fa;
                      };
        function Va() {
            switch (Pa()) {
                case _a:
                    return 99;
                case Ta:
                    return 98;
                case La:
                    return 97;
                case Aa:
                    return 96;
                case Ia:
                    return 95;
                default:
                    throw Error(o(332));
            }
        }
        function Ha(e) {
            switch (e) {
                case 99:
                    return _a;
                case 98:
                    return Ta;
                case 97:
                    return La;
                case 96:
                    return Aa;
                case 95:
                    return Ia;
                default:
                    throw Error(o(332));
            }
        }
        function Wa(e, t) {
            return (e = Ha(e)), ka(e, t);
        }
        function Ua(e, t, n) {
            return (e = Ha(e)), Sa(e, t, n);
        }
        function $a() {
            if (null !== Na) {
                var e = Na;
                (Na = null), Oa(e);
            }
            Ya();
        }
        function Ya() {
            if (!Da && null !== za) {
                Da = !0;
                var e = 0;
                try {
                    var t = za;
                    Wa(99, function () {
                        for (; e < t.length; e++) {
                            var n = t[e];
                            do {
                                n = n(!0);
                            } while (null !== n);
                        }
                    }),
                        (za = null);
                } catch (n) {
                    throw (
                        (null !== za && (za = za.slice(e + 1)), Sa(_a, $a), n)
                    );
                } finally {
                    Da = !1;
                }
            }
        }
        var Xa = x.ReactCurrentBatchConfig;
        function Ka(e, t) {
            if (e && e.defaultProps) {
                for (var n in ((t = a({}, t)), (e = e.defaultProps)))
                    void 0 === t[n] && (t[n] = e[n]);
                return t;
            }
            return t;
        }
        var qa = oa(null),
            Qa = null,
            Ga = null,
            Za = null;
        function Ja() {
            Za = Ga = Qa = null;
        }
        function ei(e) {
            var t = qa.current;
            la(qa), (e.type._context._currentValue = t);
        }
        function ti(e, t) {
            for (; null !== e; ) {
                var n = e.alternate;
                if ((e.childLanes & t) === t) {
                    if (null === n || (n.childLanes & t) === t) break;
                    n.childLanes |= t;
                } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
                e = e.return;
            }
        }
        function ni(e, t) {
            (Qa = e),
                (Za = Ga = null),
                null !== (e = e.dependencies) &&
                    null !== e.firstContext &&
                    (0 !== (e.lanes & t) && (Ro = !0), (e.firstContext = null));
        }
        function ri(e, t) {
            if (Za !== e && !1 !== t && 0 !== t)
                if (
                    (("number" === typeof t && 1073741823 !== t) ||
                        ((Za = e), (t = 1073741823)),
                    (t = { context: e, observedBits: t, next: null }),
                    null === Ga)
                ) {
                    if (null === Qa) throw Error(o(308));
                    (Ga = t),
                        (Qa.dependencies = {
                            lanes: 0,
                            firstContext: t,
                            responders: null,
                        });
                } else Ga = Ga.next = t;
            return e._currentValue;
        }
        var ai = !1;
        function ii(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: { pending: null },
                effects: null,
            };
        }
        function oi(e, t) {
            (e = e.updateQueue),
                t.updateQueue === e &&
                    (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects,
                    });
        }
        function li(e, t) {
            return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null,
            };
        }
        function ui(e, t) {
            if (null !== (e = e.updateQueue)) {
                var n = (e = e.shared).pending;
                null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
                    (e.pending = t);
            }
        }
        function si(e, t) {
            var n = e.updateQueue,
                r = e.alternate;
            if (null !== r && n === (r = r.updateQueue)) {
                var a = null,
                    i = null;
                if (null !== (n = n.firstBaseUpdate)) {
                    do {
                        var o = {
                            eventTime: n.eventTime,
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: n.callback,
                            next: null,
                        };
                        null === i ? (a = i = o) : (i = i.next = o),
                            (n = n.next);
                    } while (null !== n);
                    null === i ? (a = i = t) : (i = i.next = t);
                } else a = i = t;
                return (
                    (n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: i,
                        shared: r.shared,
                        effects: r.effects,
                    }),
                    void (e.updateQueue = n)
                );
            }
            null === (e = n.lastBaseUpdate)
                ? (n.firstBaseUpdate = t)
                : (e.next = t),
                (n.lastBaseUpdate = t);
        }
        function ci(e, t, n, r) {
            var i = e.updateQueue;
            ai = !1;
            var o = i.firstBaseUpdate,
                l = i.lastBaseUpdate,
                u = i.shared.pending;
            if (null !== u) {
                i.shared.pending = null;
                var s = u,
                    c = s.next;
                (s.next = null), null === l ? (o = c) : (l.next = c), (l = s);
                var f = e.alternate;
                if (null !== f) {
                    var d = (f = f.updateQueue).lastBaseUpdate;
                    d !== l &&
                        (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
                        (f.lastBaseUpdate = s));
                }
            }
            if (null !== o) {
                for (d = i.baseState, l = 0, f = c = s = null; ; ) {
                    u = o.lane;
                    var p = o.eventTime;
                    if ((r & u) === u) {
                        null !== f &&
                            (f = f.next =
                                {
                                    eventTime: p,
                                    lane: 0,
                                    tag: o.tag,
                                    payload: o.payload,
                                    callback: o.callback,
                                    next: null,
                                });
                        e: {
                            var m = e,
                                h = o;
                            switch (((u = t), (p = n), h.tag)) {
                                case 1:
                                    if ("function" === typeof (m = h.payload)) {
                                        d = m.call(p, d, u);
                                        break e;
                                    }
                                    d = m;
                                    break e;
                                case 3:
                                    m.flags = (-4097 & m.flags) | 64;
                                case 0:
                                    if (
                                        null ===
                                            (u =
                                                "function" ===
                                                typeof (m = h.payload)
                                                    ? m.call(p, d, u)
                                                    : m) ||
                                        void 0 === u
                                    )
                                        break e;
                                    d = a({}, d, u);
                                    break e;
                                case 2:
                                    ai = !0;
                            }
                        }
                        null !== o.callback &&
                            ((e.flags |= 32),
                            null === (u = i.effects)
                                ? (i.effects = [o])
                                : u.push(o));
                    } else
                        (p = {
                            eventTime: p,
                            lane: u,
                            tag: o.tag,
                            payload: o.payload,
                            callback: o.callback,
                            next: null,
                        }),
                            null === f
                                ? ((c = f = p), (s = d))
                                : (f = f.next = p),
                            (l |= u);
                    if (null === (o = o.next)) {
                        if (null === (u = i.shared.pending)) break;
                        (o = u.next),
                            (u.next = null),
                            (i.lastBaseUpdate = u),
                            (i.shared.pending = null);
                    }
                }
                null === f && (s = d),
                    (i.baseState = s),
                    (i.firstBaseUpdate = c),
                    (i.lastBaseUpdate = f),
                    (Dl |= l),
                    (e.lanes = l),
                    (e.memoizedState = d);
            }
        }
        function fi(e, t, n) {
            if (((e = t.effects), (t.effects = null), null !== e))
                for (t = 0; t < e.length; t++) {
                    var r = e[t],
                        a = r.callback;
                    if (null !== a) {
                        if (
                            ((r.callback = null),
                            (r = n),
                            "function" !== typeof a)
                        )
                            throw Error(o(191, a));
                        a.call(r);
                    }
                }
        }
        var di = new r.Component().refs;
        function pi(e, t, n, r) {
            (n =
                null === (n = n(r, (t = e.memoizedState))) || void 0 === n
                    ? t
                    : a({}, t, n)),
                (e.memoizedState = n),
                0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var mi = {
            isMounted: function (e) {
                return !!(e = e._reactInternals) && Qe(e) === e;
            },
            enqueueSetState: function (e, t, n) {
                e = e._reactInternals;
                var r = su(),
                    a = cu(e),
                    i = li(r, a);
                (i.payload = t),
                    void 0 !== n && null !== n && (i.callback = n),
                    ui(e, i),
                    fu(e, a, r);
            },
            enqueueReplaceState: function (e, t, n) {
                e = e._reactInternals;
                var r = su(),
                    a = cu(e),
                    i = li(r, a);
                (i.tag = 1),
                    (i.payload = t),
                    void 0 !== n && null !== n && (i.callback = n),
                    ui(e, i),
                    fu(e, a, r);
            },
            enqueueForceUpdate: function (e, t) {
                e = e._reactInternals;
                var n = su(),
                    r = cu(e),
                    a = li(n, r);
                (a.tag = 2),
                    void 0 !== t && null !== t && (a.callback = t),
                    ui(e, a),
                    fu(e, r, n);
            },
        };
        function hi(e, t, n, r, a, i, o) {
            return "function" === typeof (e = e.stateNode).shouldComponentUpdate
                ? e.shouldComponentUpdate(r, i, o)
                : !t.prototype ||
                      !t.prototype.isPureReactComponent ||
                      !sr(n, r) ||
                      !sr(a, i);
        }
        function vi(e, t, n) {
            var r = !1,
                a = sa,
                i = t.contextType;
            return (
                "object" === typeof i && null !== i
                    ? (i = ri(i))
                    : ((a = ma(t) ? da : ca.current),
                      (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                          ? pa(e, a)
                          : sa)),
                (t = new t(n, i)),
                (e.memoizedState =
                    null !== t.state && void 0 !== t.state ? t.state : null),
                (t.updater = mi),
                (e.stateNode = t),
                (t._reactInternals = e),
                r &&
                    (((e =
                        e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                        a),
                    (e.__reactInternalMemoizedMaskedChildContext = i)),
                t
            );
        }
        function gi(e, t, n, r) {
            (e = t.state),
                "function" === typeof t.componentWillReceiveProps &&
                    t.componentWillReceiveProps(n, r),
                "function" === typeof t.UNSAFE_componentWillReceiveProps &&
                    t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && mi.enqueueReplaceState(t, t.state, null);
        }
        function yi(e, t, n, r) {
            var a = e.stateNode;
            (a.props = n), (a.state = e.memoizedState), (a.refs = di), ii(e);
            var i = t.contextType;
            "object" === typeof i && null !== i
                ? (a.context = ri(i))
                : ((i = ma(t) ? da : ca.current), (a.context = pa(e, i))),
                ci(e, n, a, r),
                (a.state = e.memoizedState),
                "function" === typeof (i = t.getDerivedStateFromProps) &&
                    (pi(e, t, i, n), (a.state = e.memoizedState)),
                "function" === typeof t.getDerivedStateFromProps ||
                    "function" === typeof a.getSnapshotBeforeUpdate ||
                    ("function" !== typeof a.UNSAFE_componentWillMount &&
                        "function" !== typeof a.componentWillMount) ||
                    ((t = a.state),
                    "function" === typeof a.componentWillMount &&
                        a.componentWillMount(),
                    "function" === typeof a.UNSAFE_componentWillMount &&
                        a.UNSAFE_componentWillMount(),
                    t !== a.state && mi.enqueueReplaceState(a, a.state, null),
                    ci(e, n, a, r),
                    (a.state = e.memoizedState)),
                "function" === typeof a.componentDidMount && (e.flags |= 4);
        }
        var bi = Array.isArray;
        function wi(e, t, n) {
            if (
                null !== (e = n.ref) &&
                "function" !== typeof e &&
                "object" !== typeof e
            ) {
                if (n._owner) {
                    if ((n = n._owner)) {
                        if (1 !== n.tag) throw Error(o(309));
                        var r = n.stateNode;
                    }
                    if (!r) throw Error(o(147, e));
                    var a = "" + e;
                    return null !== t &&
                        null !== t.ref &&
                        "function" === typeof t.ref &&
                        t.ref._stringRef === a
                        ? t.ref
                        : (((t = function (e) {
                              var t = r.refs;
                              t === di && (t = r.refs = {}),
                                  null === e ? delete t[a] : (t[a] = e);
                          })._stringRef = a),
                          t);
                }
                if ("string" !== typeof e) throw Error(o(284));
                if (!n._owner) throw Error(o(290, e));
            }
            return e;
        }
        function xi(e, t) {
            if ("textarea" !== e.type)
                throw Error(
                    o(
                        31,
                        "[object Object]" === Object.prototype.toString.call(t)
                            ? "object with keys {" +
                                  Object.keys(t).join(", ") +
                                  "}"
                            : t
                    )
                );
        }
        function ki(e) {
            function t(t, n) {
                if (e) {
                    var r = t.lastEffect;
                    null !== r
                        ? ((r.nextEffect = n), (t.lastEffect = n))
                        : (t.firstEffect = t.lastEffect = n),
                        (n.nextEffect = null),
                        (n.flags = 8);
                }
            }
            function n(n, r) {
                if (!e) return null;
                for (; null !== r; ) t(n, r), (r = r.sibling);
                return null;
            }
            function r(e, t) {
                for (e = new Map(); null !== t; )
                    null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        (t = t.sibling);
                return e;
            }
            function a(e, t) {
                return ((e = Wu(e, t)).index = 0), (e.sibling = null), e;
            }
            function i(t, n, r) {
                return (
                    (t.index = r),
                    e
                        ? null !== (r = t.alternate)
                            ? (r = r.index) < n
                                ? ((t.flags = 2), n)
                                : r
                            : ((t.flags = 2), n)
                        : n
                );
            }
            function l(t) {
                return e && null === t.alternate && (t.flags = 2), t;
            }
            function u(e, t, n, r) {
                return null === t || 6 !== t.tag
                    ? (((t = Xu(n, e.mode, r)).return = e), t)
                    : (((t = a(t, n)).return = e), t);
            }
            function s(e, t, n, r) {
                return null !== t && t.elementType === n.type
                    ? (((r = a(t, n.props)).ref = wi(e, t, n)),
                      (r.return = e),
                      r)
                    : (((r = Uu(n.type, n.key, n.props, null, e.mode, r)).ref =
                          wi(e, t, n)),
                      (r.return = e),
                      r);
            }
            function c(e, t, n, r) {
                return null === t ||
                    4 !== t.tag ||
                    t.stateNode.containerInfo !== n.containerInfo ||
                    t.stateNode.implementation !== n.implementation
                    ? (((t = Ku(n, e.mode, r)).return = e), t)
                    : (((t = a(t, n.children || [])).return = e), t);
            }
            function f(e, t, n, r, i) {
                return null === t || 7 !== t.tag
                    ? (((t = $u(n, e.mode, r, i)).return = e), t)
                    : (((t = a(t, n)).return = e), t);
            }
            function d(e, t, n) {
                if ("string" === typeof t || "number" === typeof t)
                    return ((t = Xu("" + t, e.mode, n)).return = e), t;
                if ("object" === typeof t && null !== t) {
                    switch (t.$$typeof) {
                        case k:
                            return (
                                ((n = Uu(
                                    t.type,
                                    t.key,
                                    t.props,
                                    null,
                                    e.mode,
                                    n
                                )).ref = wi(e, null, t)),
                                (n.return = e),
                                n
                            );
                        case S:
                            return ((t = Ku(t, e.mode, n)).return = e), t;
                    }
                    if (bi(t) || H(t))
                        return ((t = $u(t, e.mode, n, null)).return = e), t;
                    xi(e, t);
                }
                return null;
            }
            function p(e, t, n, r) {
                var a = null !== t ? t.key : null;
                if ("string" === typeof n || "number" === typeof n)
                    return null !== a ? null : u(e, t, "" + n, r);
                if ("object" === typeof n && null !== n) {
                    switch (n.$$typeof) {
                        case k:
                            return n.key === a
                                ? n.type === O
                                    ? f(e, t, n.props.children, r, a)
                                    : s(e, t, n, r)
                                : null;
                        case S:
                            return n.key === a ? c(e, t, n, r) : null;
                    }
                    if (bi(n) || H(n))
                        return null !== a ? null : f(e, t, n, r, null);
                    xi(e, n);
                }
                return null;
            }
            function m(e, t, n, r, a) {
                if ("string" === typeof r || "number" === typeof r)
                    return u(t, (e = e.get(n) || null), "" + r, a);
                if ("object" === typeof r && null !== r) {
                    switch (r.$$typeof) {
                        case k:
                            return (
                                (e = e.get(null === r.key ? n : r.key) || null),
                                r.type === O
                                    ? f(t, e, r.props.children, a, r.key)
                                    : s(t, e, r, a)
                            );
                        case S:
                            return c(
                                t,
                                (e = e.get(null === r.key ? n : r.key) || null),
                                r,
                                a
                            );
                    }
                    if (bi(r) || H(r))
                        return f(t, (e = e.get(n) || null), r, a, null);
                    xi(t, r);
                }
                return null;
            }
            function h(a, o, l, u) {
                for (
                    var s = null, c = null, f = o, h = (o = 0), v = null;
                    null !== f && h < l.length;
                    h++
                ) {
                    f.index > h ? ((v = f), (f = null)) : (v = f.sibling);
                    var g = p(a, f, l[h], u);
                    if (null === g) {
                        null === f && (f = v);
                        break;
                    }
                    e && f && null === g.alternate && t(a, f),
                        (o = i(g, o, h)),
                        null === c ? (s = g) : (c.sibling = g),
                        (c = g),
                        (f = v);
                }
                if (h === l.length) return n(a, f), s;
                if (null === f) {
                    for (; h < l.length; h++)
                        null !== (f = d(a, l[h], u)) &&
                            ((o = i(f, o, h)),
                            null === c ? (s = f) : (c.sibling = f),
                            (c = f));
                    return s;
                }
                for (f = r(a, f); h < l.length; h++)
                    null !== (v = m(f, a, h, l[h], u)) &&
                        (e &&
                            null !== v.alternate &&
                            f.delete(null === v.key ? h : v.key),
                        (o = i(v, o, h)),
                        null === c ? (s = v) : (c.sibling = v),
                        (c = v));
                return (
                    e &&
                        f.forEach(function (e) {
                            return t(a, e);
                        }),
                    s
                );
            }
            function v(a, l, u, s) {
                var c = H(u);
                if ("function" !== typeof c) throw Error(o(150));
                if (null == (u = c.call(u))) throw Error(o(151));
                for (
                    var f = (c = null),
                        h = l,
                        v = (l = 0),
                        g = null,
                        y = u.next();
                    null !== h && !y.done;
                    v++, y = u.next()
                ) {
                    h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
                    var b = p(a, h, y.value, s);
                    if (null === b) {
                        null === h && (h = g);
                        break;
                    }
                    e && h && null === b.alternate && t(a, h),
                        (l = i(b, l, v)),
                        null === f ? (c = b) : (f.sibling = b),
                        (f = b),
                        (h = g);
                }
                if (y.done) return n(a, h), c;
                if (null === h) {
                    for (; !y.done; v++, y = u.next())
                        null !== (y = d(a, y.value, s)) &&
                            ((l = i(y, l, v)),
                            null === f ? (c = y) : (f.sibling = y),
                            (f = y));
                    return c;
                }
                for (h = r(a, h); !y.done; v++, y = u.next())
                    null !== (y = m(h, a, v, y.value, s)) &&
                        (e &&
                            null !== y.alternate &&
                            h.delete(null === y.key ? v : y.key),
                        (l = i(y, l, v)),
                        null === f ? (c = y) : (f.sibling = y),
                        (f = y));
                return (
                    e &&
                        h.forEach(function (e) {
                            return t(a, e);
                        }),
                    c
                );
            }
            return function (e, r, i, u) {
                var s =
                    "object" === typeof i &&
                    null !== i &&
                    i.type === O &&
                    null === i.key;
                s && (i = i.props.children);
                var c = "object" === typeof i && null !== i;
                if (c)
                    switch (i.$$typeof) {
                        case k:
                            e: {
                                for (c = i.key, s = r; null !== s; ) {
                                    if (s.key === c) {
                                        switch (s.tag) {
                                            case 7:
                                                if (i.type === O) {
                                                    n(e, s.sibling),
                                                        ((r = a(
                                                            s,
                                                            i.props.children
                                                        )).return = e),
                                                        (e = r);
                                                    break e;
                                                }
                                                break;
                                            default:
                                                if (s.elementType === i.type) {
                                                    n(e, s.sibling),
                                                        ((r = a(
                                                            s,
                                                            i.props
                                                        )).ref = wi(e, s, i)),
                                                        (r.return = e),
                                                        (e = r);
                                                    break e;
                                                }
                                        }
                                        n(e, s);
                                        break;
                                    }
                                    t(e, s), (s = s.sibling);
                                }
                                i.type === O
                                    ? (((r = $u(
                                          i.props.children,
                                          e.mode,
                                          u,
                                          i.key
                                      )).return = e),
                                      (e = r))
                                    : (((u = Uu(
                                          i.type,
                                          i.key,
                                          i.props,
                                          null,
                                          e.mode,
                                          u
                                      )).ref = wi(e, r, i)),
                                      (u.return = e),
                                      (e = u));
                            }
                            return l(e);
                        case S:
                            e: {
                                for (s = i.key; null !== r; ) {
                                    if (r.key === s) {
                                        if (
                                            4 === r.tag &&
                                            r.stateNode.containerInfo ===
                                                i.containerInfo &&
                                            r.stateNode.implementation ===
                                                i.implementation
                                        ) {
                                            n(e, r.sibling),
                                                ((r = a(
                                                    r,
                                                    i.children || []
                                                )).return = e),
                                                (e = r);
                                            break e;
                                        }
                                        n(e, r);
                                        break;
                                    }
                                    t(e, r), (r = r.sibling);
                                }
                                ((r = Ku(i, e.mode, u)).return = e), (e = r);
                            }
                            return l(e);
                    }
                if ("string" === typeof i || "number" === typeof i)
                    return (
                        (i = "" + i),
                        null !== r && 6 === r.tag
                            ? (n(e, r.sibling),
                              ((r = a(r, i)).return = e),
                              (e = r))
                            : (n(e, r),
                              ((r = Xu(i, e.mode, u)).return = e),
                              (e = r)),
                        l(e)
                    );
                if (bi(i)) return h(e, r, i, u);
                if (H(i)) return v(e, r, i, u);
                if ((c && xi(e, i), "undefined" === typeof i && !s))
                    switch (e.tag) {
                        case 1:
                        case 22:
                        case 0:
                        case 11:
                        case 15:
                            throw Error(o(152, X(e.type) || "Component"));
                    }
                return n(e, r);
            };
        }
        var Si = ki(!0),
            Oi = ki(!1),
            Ci = {},
            ji = oa(Ci),
            Ei = oa(Ci),
            Pi = oa(Ci);
        function _i(e) {
            if (e === Ci) throw Error(o(174));
            return e;
        }
        function Ti(e, t) {
            switch ((ua(Pi, t), ua(Ei, e), ua(ji, Ci), (e = t.nodeType))) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
                    break;
                default:
                    t = me(
                        (t =
                            (e = 8 === e ? t.parentNode : t).namespaceURI ||
                            null),
                        (e = e.tagName)
                    );
            }
            la(ji), ua(ji, t);
        }
        function Li() {
            la(ji), la(Ei), la(Pi);
        }
        function Ai(e) {
            _i(Pi.current);
            var t = _i(ji.current),
                n = me(t, e.type);
            t !== n && (ua(Ei, e), ua(ji, n));
        }
        function Ii(e) {
            Ei.current === e && (la(ji), la(Ei));
        }
        var Ri = oa(0);
        function Mi(e) {
            for (var t = e; null !== t; ) {
                if (13 === t.tag) {
                    var n = t.memoizedState;
                    if (
                        null !== n &&
                        (null === (n = n.dehydrated) ||
                            "$?" === n.data ||
                            "$!" === n.data)
                    )
                        return t;
                } else if (
                    19 === t.tag &&
                    void 0 !== t.memoizedProps.revealOrder
                ) {
                    if (0 !== (64 & t.flags)) return t;
                } else if (null !== t.child) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break;
                for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) return null;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
            return null;
        }
        var zi = null,
            Ni = null,
            Di = !1;
        function Fi(e, t) {
            var n = Vu(5, null, null, 0);
            (n.elementType = "DELETED"),
                (n.type = "DELETED"),
                (n.stateNode = t),
                (n.return = e),
                (n.flags = 8),
                null !== e.lastEffect
                    ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
                    : (e.firstEffect = e.lastEffect = n);
        }
        function Bi(e, t) {
            switch (e.tag) {
                case 5:
                    var n = e.type;
                    return (
                        null !==
                            (t =
                                1 !== t.nodeType ||
                                n.toLowerCase() !== t.nodeName.toLowerCase()
                                    ? null
                                    : t) && ((e.stateNode = t), !0)
                    );
                case 6:
                    return (
                        null !==
                            (t =
                                "" === e.pendingProps || 3 !== t.nodeType
                                    ? null
                                    : t) && ((e.stateNode = t), !0)
                    );
                case 13:
                default:
                    return !1;
            }
        }
        function Vi(e) {
            if (Di) {
                var t = Ni;
                if (t) {
                    var n = t;
                    if (!Bi(e, t)) {
                        if (!(t = $r(n.nextSibling)) || !Bi(e, t))
                            return (
                                (e.flags = (-1025 & e.flags) | 2),
                                (Di = !1),
                                void (zi = e)
                            );
                        Fi(zi, n);
                    }
                    (zi = e), (Ni = $r(t.firstChild));
                } else (e.flags = (-1025 & e.flags) | 2), (Di = !1), (zi = e);
            }
        }
        function Hi(e) {
            for (
                e = e.return;
                null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

            )
                e = e.return;
            zi = e;
        }
        function Wi(e) {
            if (e !== zi) return !1;
            if (!Di) return Hi(e), (Di = !0), !1;
            var t = e.type;
            if (
                5 !== e.tag ||
                ("head" !== t && "body" !== t && !Vr(t, e.memoizedProps))
            )
                for (t = Ni; t; ) Fi(e, t), (t = $r(t.nextSibling));
            if ((Hi(e), 13 === e.tag)) {
                if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                    throw Error(o(317));
                e: {
                    for (e = e.nextSibling, t = 0; e; ) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("/$" === n) {
                                if (0 === t) {
                                    Ni = $r(e.nextSibling);
                                    break e;
                                }
                                t--;
                            } else
                                ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                        }
                        e = e.nextSibling;
                    }
                    Ni = null;
                }
            } else Ni = zi ? $r(e.stateNode.nextSibling) : null;
            return !0;
        }
        function Ui() {
            (Ni = zi = null), (Di = !1);
        }
        var $i = [];
        function Yi() {
            for (var e = 0; e < $i.length; e++)
                $i[e]._workInProgressVersionPrimary = null;
            $i.length = 0;
        }
        var Xi = x.ReactCurrentDispatcher,
            Ki = x.ReactCurrentBatchConfig,
            qi = 0,
            Qi = null,
            Gi = null,
            Zi = null,
            Ji = !1,
            eo = !1;
        function to() {
            throw Error(o(321));
        }
        function no(e, t) {
            if (null === t) return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
                if (!lr(e[n], t[n])) return !1;
            return !0;
        }
        function ro(e, t, n, r, a, i) {
            if (
                ((qi = i),
                (Qi = t),
                (t.memoizedState = null),
                (t.updateQueue = null),
                (t.lanes = 0),
                (Xi.current = null === e || null === e.memoizedState ? To : Lo),
                (e = n(r, a)),
                eo)
            ) {
                i = 0;
                do {
                    if (((eo = !1), !(25 > i))) throw Error(o(301));
                    (i += 1),
                        (Zi = Gi = null),
                        (t.updateQueue = null),
                        (Xi.current = Ao),
                        (e = n(r, a));
                } while (eo);
            }
            if (
                ((Xi.current = _o),
                (t = null !== Gi && null !== Gi.next),
                (qi = 0),
                (Zi = Gi = Qi = null),
                (Ji = !1),
                t)
            )
                throw Error(o(300));
            return e;
        }
        function ao() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null,
            };
            return (
                null === Zi ? (Qi.memoizedState = Zi = e) : (Zi = Zi.next = e),
                Zi
            );
        }
        function io() {
            if (null === Gi) {
                var e = Qi.alternate;
                e = null !== e ? e.memoizedState : null;
            } else e = Gi.next;
            var t = null === Zi ? Qi.memoizedState : Zi.next;
            if (null !== t) (Zi = t), (Gi = e);
            else {
                if (null === e) throw Error(o(310));
                (e = {
                    memoizedState: (Gi = e).memoizedState,
                    baseState: Gi.baseState,
                    baseQueue: Gi.baseQueue,
                    queue: Gi.queue,
                    next: null,
                }),
                    null === Zi
                        ? (Qi.memoizedState = Zi = e)
                        : (Zi = Zi.next = e);
            }
            return Zi;
        }
        function oo(e, t) {
            return "function" === typeof t ? t(e) : t;
        }
        function lo(e) {
            var t = io(),
                n = t.queue;
            if (null === n) throw Error(o(311));
            n.lastRenderedReducer = e;
            var r = Gi,
                a = r.baseQueue,
                i = n.pending;
            if (null !== i) {
                if (null !== a) {
                    var l = a.next;
                    (a.next = i.next), (i.next = l);
                }
                (r.baseQueue = a = i), (n.pending = null);
            }
            if (null !== a) {
                (a = a.next), (r = r.baseState);
                var u = (l = i = null),
                    s = a;
                do {
                    var c = s.lane;
                    if ((qi & c) === c)
                        null !== u &&
                            (u = u.next =
                                {
                                    lane: 0,
                                    action: s.action,
                                    eagerReducer: s.eagerReducer,
                                    eagerState: s.eagerState,
                                    next: null,
                                }),
                            (r =
                                s.eagerReducer === e
                                    ? s.eagerState
                                    : e(r, s.action));
                    else {
                        var f = {
                            lane: c,
                            action: s.action,
                            eagerReducer: s.eagerReducer,
                            eagerState: s.eagerState,
                            next: null,
                        };
                        null === u ? ((l = u = f), (i = r)) : (u = u.next = f),
                            (Qi.lanes |= c),
                            (Dl |= c);
                    }
                    s = s.next;
                } while (null !== s && s !== a);
                null === u ? (i = r) : (u.next = l),
                    lr(r, t.memoizedState) || (Ro = !0),
                    (t.memoizedState = r),
                    (t.baseState = i),
                    (t.baseQueue = u),
                    (n.lastRenderedState = r);
            }
            return [t.memoizedState, n.dispatch];
        }
        function uo(e) {
            var t = io(),
                n = t.queue;
            if (null === n) throw Error(o(311));
            n.lastRenderedReducer = e;
            var r = n.dispatch,
                a = n.pending,
                i = t.memoizedState;
            if (null !== a) {
                n.pending = null;
                var l = (a = a.next);
                do {
                    (i = e(i, l.action)), (l = l.next);
                } while (l !== a);
                lr(i, t.memoizedState) || (Ro = !0),
                    (t.memoizedState = i),
                    null === t.baseQueue && (t.baseState = i),
                    (n.lastRenderedState = i);
            }
            return [i, r];
        }
        function so(e, t, n) {
            var r = t._getVersion;
            r = r(t._source);
            var a = t._workInProgressVersionPrimary;
            if (
                (null !== a
                    ? (e = a === r)
                    : ((e = e.mutableReadLanes),
                      (e = (qi & e) === e) &&
                          ((t._workInProgressVersionPrimary = r), $i.push(t))),
                e)
            )
                return n(t._source);
            throw ($i.push(t), Error(o(350)));
        }
        function co(e, t, n, r) {
            var a = Tl;
            if (null === a) throw Error(o(349));
            var i = t._getVersion,
                l = i(t._source),
                u = Xi.current,
                s = u.useState(function () {
                    return so(a, t, n);
                }),
                c = s[1],
                f = s[0];
            s = Zi;
            var d = e.memoizedState,
                p = d.refs,
                m = p.getSnapshot,
                h = d.source;
            d = d.subscribe;
            var v = Qi;
            return (
                (e.memoizedState = { refs: p, source: t, subscribe: r }),
                u.useEffect(
                    function () {
                        (p.getSnapshot = n), (p.setSnapshot = c);
                        var e = i(t._source);
                        if (!lr(l, e)) {
                            (e = n(t._source)),
                                lr(f, e) ||
                                    (c(e),
                                    (e = cu(v)),
                                    (a.mutableReadLanes |= e & a.pendingLanes)),
                                (e = a.mutableReadLanes),
                                (a.entangledLanes |= e);
                            for (var r = a.entanglements, o = e; 0 < o; ) {
                                var u = 31 - Ut(o),
                                    s = 1 << u;
                                (r[u] |= e), (o &= ~s);
                            }
                        }
                    },
                    [n, t, r]
                ),
                u.useEffect(
                    function () {
                        return r(t._source, function () {
                            var e = p.getSnapshot,
                                n = p.setSnapshot;
                            try {
                                n(e(t._source));
                                var r = cu(v);
                                a.mutableReadLanes |= r & a.pendingLanes;
                            } catch (i) {
                                n(function () {
                                    throw i;
                                });
                            }
                        });
                    },
                    [t, r]
                ),
                (lr(m, n) && lr(h, t) && lr(d, r)) ||
                    (((e = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: oo,
                        lastRenderedState: f,
                    }).dispatch = c =
                        Po.bind(null, Qi, e)),
                    (s.queue = e),
                    (s.baseQueue = null),
                    (f = so(a, t, n)),
                    (s.memoizedState = s.baseState = f)),
                f
            );
        }
        function fo(e, t, n) {
            return co(io(), e, t, n);
        }
        function po(e) {
            var t = ao();
            return (
                "function" === typeof e && (e = e()),
                (t.memoizedState = t.baseState = e),
                (e = (e = t.queue =
                    {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: oo,
                        lastRenderedState: e,
                    }).dispatch =
                    Po.bind(null, Qi, e)),
                [t.memoizedState, e]
            );
        }
        function mo(e, t, n, r) {
            return (
                (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
                null === (t = Qi.updateQueue)
                    ? ((t = { lastEffect: null }),
                      (Qi.updateQueue = t),
                      (t.lastEffect = e.next = e))
                    : null === (n = t.lastEffect)
                    ? (t.lastEffect = e.next = e)
                    : ((r = n.next),
                      (n.next = e),
                      (e.next = r),
                      (t.lastEffect = e)),
                e
            );
        }
        function ho(e) {
            return (e = { current: e }), (ao().memoizedState = e);
        }
        function vo() {
            return io().memoizedState;
        }
        function go(e, t, n, r) {
            var a = ao();
            (Qi.flags |= e),
                (a.memoizedState = mo(
                    1 | t,
                    n,
                    void 0,
                    void 0 === r ? null : r
                ));
        }
        function yo(e, t, n, r) {
            var a = io();
            r = void 0 === r ? null : r;
            var i = void 0;
            if (null !== Gi) {
                var o = Gi.memoizedState;
                if (((i = o.destroy), null !== r && no(r, o.deps)))
                    return void mo(t, n, i, r);
            }
            (Qi.flags |= e), (a.memoizedState = mo(1 | t, n, i, r));
        }
        function bo(e, t) {
            return go(516, 4, e, t);
        }
        function wo(e, t) {
            return yo(516, 4, e, t);
        }
        function xo(e, t) {
            return yo(4, 2, e, t);
        }
        function ko(e, t) {
            return "function" === typeof t
                ? ((e = e()),
                  t(e),
                  function () {
                      t(null);
                  })
                : null !== t && void 0 !== t
                ? ((e = e()),
                  (t.current = e),
                  function () {
                      t.current = null;
                  })
                : void 0;
        }
        function So(e, t, n) {
            return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                yo(4, 2, ko.bind(null, t, e), n)
            );
        }
        function Oo() {}
        function Co(e, t) {
            var n = io();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && no(t, r[1])
                ? r[0]
                : ((n.memoizedState = [e, t]), e);
        }
        function jo(e, t) {
            var n = io();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && no(t, r[1])
                ? r[0]
                : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Eo(e, t) {
            var n = Va();
            Wa(98 > n ? 98 : n, function () {
                e(!0);
            }),
                Wa(97 < n ? 97 : n, function () {
                    var n = Ki.transition;
                    Ki.transition = 1;
                    try {
                        e(!1), t();
                    } finally {
                        Ki.transition = n;
                    }
                });
        }
        function Po(e, t, n) {
            var r = su(),
                a = cu(e),
                i = {
                    lane: a,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null,
                },
                o = t.pending;
            if (
                (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
                (t.pending = i),
                (o = e.alternate),
                e === Qi || (null !== o && o === Qi))
            )
                eo = Ji = !0;
            else {
                if (
                    0 === e.lanes &&
                    (null === o || 0 === o.lanes) &&
                    null !== (o = t.lastRenderedReducer)
                )
                    try {
                        var l = t.lastRenderedState,
                            u = o(l, n);
                        if (
                            ((i.eagerReducer = o), (i.eagerState = u), lr(u, l))
                        )
                            return;
                    } catch (s) {}
                fu(e, a, r);
            }
        }
        var _o = {
                readContext: ri,
                useCallback: to,
                useContext: to,
                useEffect: to,
                useImperativeHandle: to,
                useLayoutEffect: to,
                useMemo: to,
                useReducer: to,
                useRef: to,
                useState: to,
                useDebugValue: to,
                useDeferredValue: to,
                useTransition: to,
                useMutableSource: to,
                useOpaqueIdentifier: to,
                unstable_isNewReconciler: !1,
            },
            To = {
                readContext: ri,
                useCallback: function (e, t) {
                    return (
                        (ao().memoizedState = [e, void 0 === t ? null : t]), e
                    );
                },
                useContext: ri,
                useEffect: bo,
                useImperativeHandle: function (e, t, n) {
                    return (
                        (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                        go(4, 2, ko.bind(null, t, e), n)
                    );
                },
                useLayoutEffect: function (e, t) {
                    return go(4, 2, e, t);
                },
                useMemo: function (e, t) {
                    var n = ao();
                    return (
                        (t = void 0 === t ? null : t),
                        (e = e()),
                        (n.memoizedState = [e, t]),
                        e
                    );
                },
                useReducer: function (e, t, n) {
                    var r = ao();
                    return (
                        (t = void 0 !== n ? n(t) : t),
                        (r.memoizedState = r.baseState = t),
                        (e = (e = r.queue =
                            {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t,
                            }).dispatch =
                            Po.bind(null, Qi, e)),
                        [r.memoizedState, e]
                    );
                },
                useRef: ho,
                useState: po,
                useDebugValue: Oo,
                useDeferredValue: function (e) {
                    var t = po(e),
                        n = t[0],
                        r = t[1];
                    return (
                        bo(
                            function () {
                                var t = Ki.transition;
                                Ki.transition = 1;
                                try {
                                    r(e);
                                } finally {
                                    Ki.transition = t;
                                }
                            },
                            [e]
                        ),
                        n
                    );
                },
                useTransition: function () {
                    var e = po(!1),
                        t = e[0];
                    return ho((e = Eo.bind(null, e[1]))), [e, t];
                },
                useMutableSource: function (e, t, n) {
                    var r = ao();
                    return (
                        (r.memoizedState = {
                            refs: { getSnapshot: t, setSnapshot: null },
                            source: e,
                            subscribe: n,
                        }),
                        co(r, e, t, n)
                    );
                },
                useOpaqueIdentifier: function () {
                    if (Di) {
                        var e = !1,
                            t = (function (e) {
                                return { $$typeof: M, toString: e, valueOf: e };
                            })(function () {
                                throw (
                                    (e ||
                                        ((e = !0),
                                        n("r:" + (Xr++).toString(36))),
                                    Error(o(355)))
                                );
                            }),
                            n = po(t)[1];
                        return (
                            0 === (2 & Qi.mode) &&
                                ((Qi.flags |= 516),
                                mo(
                                    5,
                                    function () {
                                        n("r:" + (Xr++).toString(36));
                                    },
                                    void 0,
                                    null
                                )),
                            t
                        );
                    }
                    return po((t = "r:" + (Xr++).toString(36))), t;
                },
                unstable_isNewReconciler: !1,
            },
            Lo = {
                readContext: ri,
                useCallback: Co,
                useContext: ri,
                useEffect: wo,
                useImperativeHandle: So,
                useLayoutEffect: xo,
                useMemo: jo,
                useReducer: lo,
                useRef: vo,
                useState: function () {
                    return lo(oo);
                },
                useDebugValue: Oo,
                useDeferredValue: function (e) {
                    var t = lo(oo),
                        n = t[0],
                        r = t[1];
                    return (
                        wo(
                            function () {
                                var t = Ki.transition;
                                Ki.transition = 1;
                                try {
                                    r(e);
                                } finally {
                                    Ki.transition = t;
                                }
                            },
                            [e]
                        ),
                        n
                    );
                },
                useTransition: function () {
                    var e = lo(oo)[0];
                    return [vo().current, e];
                },
                useMutableSource: fo,
                useOpaqueIdentifier: function () {
                    return lo(oo)[0];
                },
                unstable_isNewReconciler: !1,
            },
            Ao = {
                readContext: ri,
                useCallback: Co,
                useContext: ri,
                useEffect: wo,
                useImperativeHandle: So,
                useLayoutEffect: xo,
                useMemo: jo,
                useReducer: uo,
                useRef: vo,
                useState: function () {
                    return uo(oo);
                },
                useDebugValue: Oo,
                useDeferredValue: function (e) {
                    var t = uo(oo),
                        n = t[0],
                        r = t[1];
                    return (
                        wo(
                            function () {
                                var t = Ki.transition;
                                Ki.transition = 1;
                                try {
                                    r(e);
                                } finally {
                                    Ki.transition = t;
                                }
                            },
                            [e]
                        ),
                        n
                    );
                },
                useTransition: function () {
                    var e = uo(oo)[0];
                    return [vo().current, e];
                },
                useMutableSource: fo,
                useOpaqueIdentifier: function () {
                    return uo(oo)[0];
                },
                unstable_isNewReconciler: !1,
            },
            Io = x.ReactCurrentOwner,
            Ro = !1;
        function Mo(e, t, n, r) {
            t.child = null === e ? Oi(t, null, n, r) : Si(t, e.child, n, r);
        }
        function zo(e, t, n, r, a) {
            n = n.render;
            var i = t.ref;
            return (
                ni(t, a),
                (r = ro(e, t, n, r, i, a)),
                null === e || Ro
                    ? ((t.flags |= 1), Mo(e, t, r, a), t.child)
                    : ((t.updateQueue = e.updateQueue),
                      (t.flags &= -517),
                      (e.lanes &= ~a),
                      nl(e, t, a))
            );
        }
        function No(e, t, n, r, a, i) {
            if (null === e) {
                var o = n.type;
                return "function" !== typeof o ||
                    Hu(o) ||
                    void 0 !== o.defaultProps ||
                    null !== n.compare ||
                    void 0 !== n.defaultProps
                    ? (((e = Uu(n.type, null, r, t, t.mode, i)).ref = t.ref),
                      (e.return = t),
                      (t.child = e))
                    : ((t.tag = 15), (t.type = o), Do(e, t, o, r, a, i));
            }
            return (
                (o = e.child),
                0 === (a & i) &&
                ((a = o.memoizedProps),
                (n = null !== (n = n.compare) ? n : sr)(a, r) &&
                    e.ref === t.ref)
                    ? nl(e, t, i)
                    : ((t.flags |= 1),
                      ((e = Wu(o, r)).ref = t.ref),
                      (e.return = t),
                      (t.child = e))
            );
        }
        function Do(e, t, n, r, a, i) {
            if (null !== e && sr(e.memoizedProps, r) && e.ref === t.ref) {
                if (((Ro = !1), 0 === (i & a)))
                    return (t.lanes = e.lanes), nl(e, t, i);
                0 !== (16384 & e.flags) && (Ro = !0);
            }
            return Vo(e, t, n, r, i);
        }
        function Fo(e, t, n) {
            var r = t.pendingProps,
                a = r.children,
                i = null !== e ? e.memoizedState : null;
            if (
                "hidden" === r.mode ||
                "unstable-defer-without-hiding" === r.mode
            )
                if (0 === (4 & t.mode))
                    (t.memoizedState = { baseLanes: 0 }), bu(t, n);
                else {
                    if (0 === (1073741824 & n))
                        return (
                            (e = null !== i ? i.baseLanes | n : n),
                            (t.lanes = t.childLanes = 1073741824),
                            (t.memoizedState = { baseLanes: e }),
                            bu(t, e),
                            null
                        );
                    (t.memoizedState = { baseLanes: 0 }),
                        bu(t, null !== i ? i.baseLanes : n);
                }
            else
                null !== i
                    ? ((r = i.baseLanes | n), (t.memoizedState = null))
                    : (r = n),
                    bu(t, r);
            return Mo(e, t, a, n), t.child;
        }
        function Bo(e, t) {
            var n = t.ref;
            ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
                (t.flags |= 128);
        }
        function Vo(e, t, n, r, a) {
            var i = ma(n) ? da : ca.current;
            return (
                (i = pa(t, i)),
                ni(t, a),
                (n = ro(e, t, n, r, i, a)),
                null === e || Ro
                    ? ((t.flags |= 1), Mo(e, t, n, a), t.child)
                    : ((t.updateQueue = e.updateQueue),
                      (t.flags &= -517),
                      (e.lanes &= ~a),
                      nl(e, t, a))
            );
        }
        function Ho(e, t, n, r, a) {
            if (ma(n)) {
                var i = !0;
                ya(t);
            } else i = !1;
            if ((ni(t, a), null === t.stateNode))
                null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                    vi(t, n, r),
                    yi(t, n, r, a),
                    (r = !0);
            else if (null === e) {
                var o = t.stateNode,
                    l = t.memoizedProps;
                o.props = l;
                var u = o.context,
                    s = n.contextType;
                "object" === typeof s && null !== s
                    ? (s = ri(s))
                    : (s = pa(t, (s = ma(n) ? da : ca.current)));
                var c = n.getDerivedStateFromProps,
                    f =
                        "function" === typeof c ||
                        "function" === typeof o.getSnapshotBeforeUpdate;
                f ||
                    ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                        "function" !== typeof o.componentWillReceiveProps) ||
                    ((l !== r || u !== s) && gi(t, o, r, s)),
                    (ai = !1);
                var d = t.memoizedState;
                (o.state = d),
                    ci(t, r, o, a),
                    (u = t.memoizedState),
                    l !== r || d !== u || fa.current || ai
                        ? ("function" === typeof c &&
                              (pi(t, n, c, r), (u = t.memoizedState)),
                          (l = ai || hi(t, n, l, r, d, u, s))
                              ? (f ||
                                    ("function" !==
                                        typeof o.UNSAFE_componentWillMount &&
                                        "function" !==
                                            typeof o.componentWillMount) ||
                                    ("function" ===
                                        typeof o.componentWillMount &&
                                        o.componentWillMount(),
                                    "function" ===
                                        typeof o.UNSAFE_componentWillMount &&
                                        o.UNSAFE_componentWillMount()),
                                "function" === typeof o.componentDidMount &&
                                    (t.flags |= 4))
                              : ("function" === typeof o.componentDidMount &&
                                    (t.flags |= 4),
                                (t.memoizedProps = r),
                                (t.memoizedState = u)),
                          (o.props = r),
                          (o.state = u),
                          (o.context = s),
                          (r = l))
                        : ("function" === typeof o.componentDidMount &&
                              (t.flags |= 4),
                          (r = !1));
            } else {
                (o = t.stateNode),
                    oi(e, t),
                    (l = t.memoizedProps),
                    (s = t.type === t.elementType ? l : Ka(t.type, l)),
                    (o.props = s),
                    (f = t.pendingProps),
                    (d = o.context),
                    "object" === typeof (u = n.contextType) && null !== u
                        ? (u = ri(u))
                        : (u = pa(t, (u = ma(n) ? da : ca.current)));
                var p = n.getDerivedStateFromProps;
                (c =
                    "function" === typeof p ||
                    "function" === typeof o.getSnapshotBeforeUpdate) ||
                    ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                        "function" !== typeof o.componentWillReceiveProps) ||
                    ((l !== f || d !== u) && gi(t, o, r, u)),
                    (ai = !1),
                    (d = t.memoizedState),
                    (o.state = d),
                    ci(t, r, o, a);
                var m = t.memoizedState;
                l !== f || d !== m || fa.current || ai
                    ? ("function" === typeof p &&
                          (pi(t, n, p, r), (m = t.memoizedState)),
                      (s = ai || hi(t, n, s, r, d, m, u))
                          ? (c ||
                                ("function" !==
                                    typeof o.UNSAFE_componentWillUpdate &&
                                    "function" !==
                                        typeof o.componentWillUpdate) ||
                                ("function" === typeof o.componentWillUpdate &&
                                    o.componentWillUpdate(r, m, u),
                                "function" ===
                                    typeof o.UNSAFE_componentWillUpdate &&
                                    o.UNSAFE_componentWillUpdate(r, m, u)),
                            "function" === typeof o.componentDidUpdate &&
                                (t.flags |= 4),
                            "function" === typeof o.getSnapshotBeforeUpdate &&
                                (t.flags |= 256))
                          : ("function" !== typeof o.componentDidUpdate ||
                                (l === e.memoizedProps &&
                                    d === e.memoizedState) ||
                                (t.flags |= 4),
                            "function" !== typeof o.getSnapshotBeforeUpdate ||
                                (l === e.memoizedProps &&
                                    d === e.memoizedState) ||
                                (t.flags |= 256),
                            (t.memoizedProps = r),
                            (t.memoizedState = m)),
                      (o.props = r),
                      (o.state = m),
                      (o.context = u),
                      (r = s))
                    : ("function" !== typeof o.componentDidUpdate ||
                          (l === e.memoizedProps && d === e.memoizedState) ||
                          (t.flags |= 4),
                      "function" !== typeof o.getSnapshotBeforeUpdate ||
                          (l === e.memoizedProps && d === e.memoizedState) ||
                          (t.flags |= 256),
                      (r = !1));
            }
            return Wo(e, t, n, r, i, a);
        }
        function Wo(e, t, n, r, a, i) {
            Bo(e, t);
            var o = 0 !== (64 & t.flags);
            if (!r && !o) return a && ba(t, n, !1), nl(e, t, i);
            (r = t.stateNode), (Io.current = t);
            var l =
                o && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : r.render();
            return (
                (t.flags |= 1),
                null !== e && o
                    ? ((t.child = Si(t, e.child, null, i)),
                      (t.child = Si(t, null, l, i)))
                    : Mo(e, t, l, i),
                (t.memoizedState = r.state),
                a && ba(t, n, !0),
                t.child
            );
        }
        function Uo(e) {
            var t = e.stateNode;
            t.pendingContext
                ? va(0, t.pendingContext, t.pendingContext !== t.context)
                : t.context && va(0, t.context, !1),
                Ti(e, t.containerInfo);
        }
        var $o,
            Yo,
            Xo,
            Ko = { dehydrated: null, retryLane: 0 };
        function qo(e, t, n) {
            var r,
                a = t.pendingProps,
                i = Ri.current,
                o = !1;
            return (
                (r = 0 !== (64 & t.flags)) ||
                    (r =
                        (null === e || null !== e.memoizedState) &&
                        0 !== (2 & i)),
                r
                    ? ((o = !0), (t.flags &= -65))
                    : (null !== e && null === e.memoizedState) ||
                      void 0 === a.fallback ||
                      !0 === a.unstable_avoidThisFallback ||
                      (i |= 1),
                ua(Ri, 1 & i),
                null === e
                    ? (void 0 !== a.fallback && Vi(t),
                      (e = a.children),
                      (i = a.fallback),
                      o
                          ? ((e = Qo(t, e, i, n)),
                            (t.child.memoizedState = { baseLanes: n }),
                            (t.memoizedState = Ko),
                            e)
                          : "number" === typeof a.unstable_expectedLoadTime
                          ? ((e = Qo(t, e, i, n)),
                            (t.child.memoizedState = { baseLanes: n }),
                            (t.memoizedState = Ko),
                            (t.lanes = 33554432),
                            e)
                          : (((n = Yu(
                                { mode: "visible", children: e },
                                t.mode,
                                n,
                                null
                            )).return = t),
                            (t.child = n)))
                    : (e.memoizedState,
                      o
                          ? ((a = Zo(e, t, a.children, a.fallback, n)),
                            (o = t.child),
                            (i = e.child.memoizedState),
                            (o.memoizedState =
                                null === i
                                    ? { baseLanes: n }
                                    : { baseLanes: i.baseLanes | n }),
                            (o.childLanes = e.childLanes & ~n),
                            (t.memoizedState = Ko),
                            a)
                          : ((n = Go(e, t, a.children, n)),
                            (t.memoizedState = null),
                            n))
            );
        }
        function Qo(e, t, n, r) {
            var a = e.mode,
                i = e.child;
            return (
                (t = { mode: "hidden", children: t }),
                0 === (2 & a) && null !== i
                    ? ((i.childLanes = 0), (i.pendingProps = t))
                    : (i = Yu(t, a, 0, null)),
                (n = $u(n, a, r, null)),
                (i.return = e),
                (n.return = e),
                (i.sibling = n),
                (e.child = i),
                n
            );
        }
        function Go(e, t, n, r) {
            var a = e.child;
            return (
                (e = a.sibling),
                (n = Wu(a, { mode: "visible", children: n })),
                0 === (2 & t.mode) && (n.lanes = r),
                (n.return = t),
                (n.sibling = null),
                null !== e &&
                    ((e.nextEffect = null),
                    (e.flags = 8),
                    (t.firstEffect = t.lastEffect = e)),
                (t.child = n)
            );
        }
        function Zo(e, t, n, r, a) {
            var i = t.mode,
                o = e.child;
            e = o.sibling;
            var l = { mode: "hidden", children: n };
            return (
                0 === (2 & i) && t.child !== o
                    ? (((n = t.child).childLanes = 0),
                      (n.pendingProps = l),
                      null !== (o = n.lastEffect)
                          ? ((t.firstEffect = n.firstEffect),
                            (t.lastEffect = o),
                            (o.nextEffect = null))
                          : (t.firstEffect = t.lastEffect = null))
                    : (n = Wu(o, l)),
                null !== e
                    ? (r = Wu(e, r))
                    : ((r = $u(r, i, a, null)).flags |= 2),
                (r.return = t),
                (n.return = t),
                (n.sibling = r),
                (t.child = n),
                r
            );
        }
        function Jo(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            null !== n && (n.lanes |= t), ti(e.return, t);
        }
        function el(e, t, n, r, a, i) {
            var o = e.memoizedState;
            null === o
                ? (e.memoizedState = {
                      isBackwards: t,
                      rendering: null,
                      renderingStartTime: 0,
                      last: r,
                      tail: n,
                      tailMode: a,
                      lastEffect: i,
                  })
                : ((o.isBackwards = t),
                  (o.rendering = null),
                  (o.renderingStartTime = 0),
                  (o.last = r),
                  (o.tail = n),
                  (o.tailMode = a),
                  (o.lastEffect = i));
        }
        function tl(e, t, n) {
            var r = t.pendingProps,
                a = r.revealOrder,
                i = r.tail;
            if ((Mo(e, t, r.children, n), 0 !== (2 & (r = Ri.current))))
                (r = (1 & r) | 2), (t.flags |= 64);
            else {
                if (null !== e && 0 !== (64 & e.flags))
                    e: for (e = t.child; null !== e; ) {
                        if (13 === e.tag) null !== e.memoizedState && Jo(e, n);
                        else if (19 === e.tag) Jo(e, n);
                        else if (null !== e.child) {
                            (e.child.return = e), (e = e.child);
                            continue;
                        }
                        if (e === t) break e;
                        for (; null === e.sibling; ) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return;
                        }
                        (e.sibling.return = e.return), (e = e.sibling);
                    }
                r &= 1;
            }
            if ((ua(Ri, r), 0 === (2 & t.mode))) t.memoizedState = null;
            else
                switch (a) {
                    case "forwards":
                        for (n = t.child, a = null; null !== n; )
                            null !== (e = n.alternate) &&
                                null === Mi(e) &&
                                (a = n),
                                (n = n.sibling);
                        null === (n = a)
                            ? ((a = t.child), (t.child = null))
                            : ((a = n.sibling), (n.sibling = null)),
                            el(t, !1, a, n, i, t.lastEffect);
                        break;
                    case "backwards":
                        for (
                            n = null, a = t.child, t.child = null;
                            null !== a;

                        ) {
                            if (null !== (e = a.alternate) && null === Mi(e)) {
                                t.child = a;
                                break;
                            }
                            (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                        }
                        el(t, !0, n, null, i, t.lastEffect);
                        break;
                    case "together":
                        el(t, !1, null, null, void 0, t.lastEffect);
                        break;
                    default:
                        t.memoizedState = null;
                }
            return t.child;
        }
        function nl(e, t, n) {
            if (
                (null !== e && (t.dependencies = e.dependencies),
                (Dl |= t.lanes),
                0 !== (n & t.childLanes))
            ) {
                if (null !== e && t.child !== e.child) throw Error(o(153));
                if (null !== t.child) {
                    for (
                        n = Wu((e = t.child), e.pendingProps),
                            t.child = n,
                            n.return = t;
                        null !== e.sibling;

                    )
                        (e = e.sibling),
                            ((n = n.sibling = Wu(e, e.pendingProps)).return =
                                t);
                    n.sibling = null;
                }
                return t.child;
            }
            return null;
        }
        function rl(e, t) {
            if (!Di)
                switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t), (t = t.sibling);
                        null === n ? (e.tail = null) : (n.sibling = null);
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n), (n = n.sibling);
                        null === r
                            ? t || null === e.tail
                                ? (e.tail = null)
                                : (e.tail.sibling = null)
                            : (r.sibling = null);
                }
        }
        function al(e, t, n) {
            var r = t.pendingProps;
            switch (t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return null;
                case 1:
                    return ma(t.type) && ha(), null;
                case 3:
                    return (
                        Li(),
                        la(fa),
                        la(ca),
                        Yi(),
                        (r = t.stateNode).pendingContext &&
                            ((r.context = r.pendingContext),
                            (r.pendingContext = null)),
                        (null !== e && null !== e.child) ||
                            (Wi(t)
                                ? (t.flags |= 4)
                                : r.hydrate || (t.flags |= 256)),
                        null
                    );
                case 5:
                    Ii(t);
                    var i = _i(Pi.current);
                    if (((n = t.type), null !== e && null != t.stateNode))
                        Yo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
                    else {
                        if (!r) {
                            if (null === t.stateNode) throw Error(o(166));
                            return null;
                        }
                        if (((e = _i(ji.current)), Wi(t))) {
                            (r = t.stateNode), (n = t.type);
                            var l = t.memoizedProps;
                            switch (((r[qr] = t), (r[Qr] = l), n)) {
                                case "dialog":
                                    Er("cancel", r), Er("close", r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Er("load", r);
                                    break;
                                case "video":
                                case "audio":
                                    for (e = 0; e < Sr.length; e++)
                                        Er(Sr[e], r);
                                    break;
                                case "source":
                                    Er("error", r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Er("error", r), Er("load", r);
                                    break;
                                case "details":
                                    Er("toggle", r);
                                    break;
                                case "input":
                                    ee(r, l), Er("invalid", r);
                                    break;
                                case "select":
                                    (r._wrapperState = {
                                        wasMultiple: !!l.multiple,
                                    }),
                                        Er("invalid", r);
                                    break;
                                case "textarea":
                                    ue(r, l), Er("invalid", r);
                            }
                            for (var s in (Oe(n, l), (e = null), l))
                                l.hasOwnProperty(s) &&
                                    ((i = l[s]),
                                    "children" === s
                                        ? "string" === typeof i
                                            ? r.textContent !== i &&
                                              (e = ["children", i])
                                            : "number" === typeof i &&
                                              r.textContent !== "" + i &&
                                              (e = ["children", "" + i])
                                        : u.hasOwnProperty(s) &&
                                          null != i &&
                                          "onScroll" === s &&
                                          Er("scroll", r));
                            switch (n) {
                                case "input":
                                    Q(r), re(r, l, !0);
                                    break;
                                case "textarea":
                                    Q(r), ce(r);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    "function" === typeof l.onClick &&
                                        (r.onclick = Nr);
                            }
                            (r = e),
                                (t.updateQueue = r),
                                null !== r && (t.flags |= 4);
                        } else {
                            switch (
                                ((s = 9 === i.nodeType ? i : i.ownerDocument),
                                e === fe && (e = pe(n)),
                                e === fe
                                    ? "script" === n
                                        ? (((e =
                                              s.createElement(
                                                  "div"
                                              )).innerHTML =
                                              "<script></script>"),
                                          (e = e.removeChild(e.firstChild)))
                                        : "string" === typeof r.is
                                        ? (e = s.createElement(n, { is: r.is }))
                                        : ((e = s.createElement(n)),
                                          "select" === n &&
                                              ((s = e),
                                              r.multiple
                                                  ? (s.multiple = !0)
                                                  : r.size &&
                                                    (s.size = r.size)))
                                    : (e = s.createElementNS(e, n)),
                                (e[qr] = t),
                                (e[Qr] = r),
                                $o(e, t),
                                (t.stateNode = e),
                                (s = Ce(n, r)),
                                n)
                            ) {
                                case "dialog":
                                    Er("cancel", e), Er("close", e), (i = r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Er("load", e), (i = r);
                                    break;
                                case "video":
                                case "audio":
                                    for (i = 0; i < Sr.length; i++)
                                        Er(Sr[i], e);
                                    i = r;
                                    break;
                                case "source":
                                    Er("error", e), (i = r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Er("error", e), Er("load", e), (i = r);
                                    break;
                                case "details":
                                    Er("toggle", e), (i = r);
                                    break;
                                case "input":
                                    ee(e, r), (i = J(e, r)), Er("invalid", e);
                                    break;
                                case "option":
                                    i = ie(e, r);
                                    break;
                                case "select":
                                    (e._wrapperState = {
                                        wasMultiple: !!r.multiple,
                                    }),
                                        (i = a({}, r, { value: void 0 })),
                                        Er("invalid", e);
                                    break;
                                case "textarea":
                                    ue(e, r), (i = le(e, r)), Er("invalid", e);
                                    break;
                                default:
                                    i = r;
                            }
                            Oe(n, i);
                            var c = i;
                            for (l in c)
                                if (c.hasOwnProperty(l)) {
                                    var f = c[l];
                                    "style" === l
                                        ? ke(e, f)
                                        : "dangerouslySetInnerHTML" === l
                                        ? null != (f = f ? f.__html : void 0) &&
                                          ge(e, f)
                                        : "children" === l
                                        ? "string" === typeof f
                                            ? ("textarea" !== n || "" !== f) &&
                                              ye(e, f)
                                            : "number" === typeof f &&
                                              ye(e, "" + f)
                                        : "suppressContentEditableWarning" !==
                                              l &&
                                          "suppressHydrationWarning" !== l &&
                                          "autoFocus" !== l &&
                                          (u.hasOwnProperty(l)
                                              ? null != f &&
                                                "onScroll" === l &&
                                                Er("scroll", e)
                                              : null != f && w(e, l, f, s));
                                }
                            switch (n) {
                                case "input":
                                    Q(e), re(e, r, !1);
                                    break;
                                case "textarea":
                                    Q(e), ce(e);
                                    break;
                                case "option":
                                    null != r.value &&
                                        e.setAttribute(
                                            "value",
                                            "" + K(r.value)
                                        );
                                    break;
                                case "select":
                                    (e.multiple = !!r.multiple),
                                        null != (l = r.value)
                                            ? oe(e, !!r.multiple, l, !1)
                                            : null != r.defaultValue &&
                                              oe(
                                                  e,
                                                  !!r.multiple,
                                                  r.defaultValue,
                                                  !0
                                              );
                                    break;
                                default:
                                    "function" === typeof i.onClick &&
                                        (e.onclick = Nr);
                            }
                            Br(n, r) && (t.flags |= 4);
                        }
                        null !== t.ref && (t.flags |= 128);
                    }
                    return null;
                case 6:
                    if (e && null != t.stateNode) Xo(0, t, e.memoizedProps, r);
                    else {
                        if ("string" !== typeof r && null === t.stateNode)
                            throw Error(o(166));
                        (n = _i(Pi.current)),
                            _i(ji.current),
                            Wi(t)
                                ? ((r = t.stateNode),
                                  (n = t.memoizedProps),
                                  (r[qr] = t),
                                  r.nodeValue !== n && (t.flags |= 4))
                                : (((r = (
                                      9 === n.nodeType ? n : n.ownerDocument
                                  ).createTextNode(r))[qr] = t),
                                  (t.stateNode = r));
                    }
                    return null;
                case 13:
                    return (
                        la(Ri),
                        (r = t.memoizedState),
                        0 !== (64 & t.flags)
                            ? ((t.lanes = n), t)
                            : ((r = null !== r),
                              (n = !1),
                              null === e
                                  ? void 0 !== t.memoizedProps.fallback && Wi(t)
                                  : (n = null !== e.memoizedState),
                              r &&
                                  !n &&
                                  0 !== (2 & t.mode) &&
                                  ((null === e &&
                                      !0 !==
                                          t.memoizedProps
                                              .unstable_avoidThisFallback) ||
                                  0 !== (1 & Ri.current)
                                      ? 0 === Ml && (Ml = 3)
                                      : ((0 !== Ml && 3 !== Ml) || (Ml = 4),
                                        null === Tl ||
                                            (0 === (134217727 & Dl) &&
                                                0 === (134217727 & Fl)) ||
                                            hu(Tl, Al))),
                              (r || n) && (t.flags |= 4),
                              null)
                    );
                case 4:
                    return (
                        Li(), null === e && _r(t.stateNode.containerInfo), null
                    );
                case 10:
                    return ei(t), null;
                case 17:
                    return ma(t.type) && ha(), null;
                case 19:
                    if ((la(Ri), null === (r = t.memoizedState))) return null;
                    if (
                        ((l = 0 !== (64 & t.flags)), null === (s = r.rendering))
                    )
                        if (l) rl(r, !1);
                        else {
                            if (
                                0 !== Ml ||
                                (null !== e && 0 !== (64 & e.flags))
                            )
                                for (e = t.child; null !== e; ) {
                                    if (null !== (s = Mi(e))) {
                                        for (
                                            t.flags |= 64,
                                                rl(r, !1),
                                                null !== (l = s.updateQueue) &&
                                                    ((t.updateQueue = l),
                                                    (t.flags |= 4)),
                                                null === r.lastEffect &&
                                                    (t.firstEffect = null),
                                                t.lastEffect = r.lastEffect,
                                                r = n,
                                                n = t.child;
                                            null !== n;

                                        )
                                            (e = r),
                                                ((l = n).flags &= 2),
                                                (l.nextEffect = null),
                                                (l.firstEffect = null),
                                                (l.lastEffect = null),
                                                null === (s = l.alternate)
                                                    ? ((l.childLanes = 0),
                                                      (l.lanes = e),
                                                      (l.child = null),
                                                      (l.memoizedProps = null),
                                                      (l.memoizedState = null),
                                                      (l.updateQueue = null),
                                                      (l.dependencies = null),
                                                      (l.stateNode = null))
                                                    : ((l.childLanes =
                                                          s.childLanes),
                                                      (l.lanes = s.lanes),
                                                      (l.child = s.child),
                                                      (l.memoizedProps =
                                                          s.memoizedProps),
                                                      (l.memoizedState =
                                                          s.memoizedState),
                                                      (l.updateQueue =
                                                          s.updateQueue),
                                                      (l.type = s.type),
                                                      (e = s.dependencies),
                                                      (l.dependencies =
                                                          null === e
                                                              ? null
                                                              : {
                                                                    lanes: e.lanes,
                                                                    firstContext:
                                                                        e.firstContext,
                                                                })),
                                                (n = n.sibling);
                                        return (
                                            ua(Ri, (1 & Ri.current) | 2),
                                            t.child
                                        );
                                    }
                                    e = e.sibling;
                                }
                            null !== r.tail &&
                                Ba() > Wl &&
                                ((t.flags |= 64),
                                (l = !0),
                                rl(r, !1),
                                (t.lanes = 33554432));
                        }
                    else {
                        if (!l)
                            if (null !== (e = Mi(s))) {
                                if (
                                    ((t.flags |= 64),
                                    (l = !0),
                                    null !== (n = e.updateQueue) &&
                                        ((t.updateQueue = n), (t.flags |= 4)),
                                    rl(r, !0),
                                    null === r.tail &&
                                        "hidden" === r.tailMode &&
                                        !s.alternate &&
                                        !Di)
                                )
                                    return (
                                        null !==
                                            (t = t.lastEffect = r.lastEffect) &&
                                            (t.nextEffect = null),
                                        null
                                    );
                            } else
                                2 * Ba() - r.renderingStartTime > Wl &&
                                    1073741824 !== n &&
                                    ((t.flags |= 64),
                                    (l = !0),
                                    rl(r, !1),
                                    (t.lanes = 33554432));
                        r.isBackwards
                            ? ((s.sibling = t.child), (t.child = s))
                            : (null !== (n = r.last)
                                  ? (n.sibling = s)
                                  : (t.child = s),
                              (r.last = s));
                    }
                    return null !== r.tail
                        ? ((n = r.tail),
                          (r.rendering = n),
                          (r.tail = n.sibling),
                          (r.lastEffect = t.lastEffect),
                          (r.renderingStartTime = Ba()),
                          (n.sibling = null),
                          (t = Ri.current),
                          ua(Ri, l ? (1 & t) | 2 : 1 & t),
                          n)
                        : null;
                case 23:
                case 24:
                    return (
                        wu(),
                        null !== e &&
                            (null !== e.memoizedState) !==
                                (null !== t.memoizedState) &&
                            "unstable-defer-without-hiding" !== r.mode &&
                            (t.flags |= 4),
                        null
                    );
            }
            throw Error(o(156, t.tag));
        }
        function il(e) {
            switch (e.tag) {
                case 1:
                    ma(e.type) && ha();
                    var t = e.flags;
                    return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
                case 3:
                    if (
                        (Li(), la(fa), la(ca), Yi(), 0 !== (64 & (t = e.flags)))
                    )
                        throw Error(o(285));
                    return (e.flags = (-4097 & t) | 64), e;
                case 5:
                    return Ii(e), null;
                case 13:
                    return (
                        la(Ri),
                        4096 & (t = e.flags)
                            ? ((e.flags = (-4097 & t) | 64), e)
                            : null
                    );
                case 19:
                    return la(Ri), null;
                case 4:
                    return Li(), null;
                case 10:
                    return ei(e), null;
                case 23:
                case 24:
                    return wu(), null;
                default:
                    return null;
            }
        }
        function ol(e, t) {
            try {
                var n = "",
                    r = t;
                do {
                    (n += Y(r)), (r = r.return);
                } while (r);
                var a = n;
            } catch (i) {
                a = "\nError generating stack: " + i.message + "\n" + i.stack;
            }
            return { value: e, source: t, stack: a };
        }
        function ll(e, t) {
            try {
                console.error(t.value);
            } catch (n) {
                setTimeout(function () {
                    throw n;
                });
            }
        }
        ($o = function (e, t) {
            for (var n = t.child; null !== n; ) {
                if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                else if (4 !== n.tag && null !== n.child) {
                    (n.child.return = n), (n = n.child);
                    continue;
                }
                if (n === t) break;
                for (; null === n.sibling; ) {
                    if (null === n.return || n.return === t) return;
                    n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
            }
        }),
            (Yo = function (e, t, n, r) {
                var i = e.memoizedProps;
                if (i !== r) {
                    (e = t.stateNode), _i(ji.current);
                    var o,
                        l = null;
                    switch (n) {
                        case "input":
                            (i = J(e, i)), (r = J(e, r)), (l = []);
                            break;
                        case "option":
                            (i = ie(e, i)), (r = ie(e, r)), (l = []);
                            break;
                        case "select":
                            (i = a({}, i, { value: void 0 })),
                                (r = a({}, r, { value: void 0 })),
                                (l = []);
                            break;
                        case "textarea":
                            (i = le(e, i)), (r = le(e, r)), (l = []);
                            break;
                        default:
                            "function" !== typeof i.onClick &&
                                "function" === typeof r.onClick &&
                                (e.onclick = Nr);
                    }
                    for (f in (Oe(n, r), (n = null), i))
                        if (
                            !r.hasOwnProperty(f) &&
                            i.hasOwnProperty(f) &&
                            null != i[f]
                        )
                            if ("style" === f) {
                                var s = i[f];
                                for (o in s)
                                    s.hasOwnProperty(o) &&
                                        (n || (n = {}), (n[o] = ""));
                            } else
                                "dangerouslySetInnerHTML" !== f &&
                                    "children" !== f &&
                                    "suppressContentEditableWarning" !== f &&
                                    "suppressHydrationWarning" !== f &&
                                    "autoFocus" !== f &&
                                    (u.hasOwnProperty(f)
                                        ? l || (l = [])
                                        : (l = l || []).push(f, null));
                    for (f in r) {
                        var c = r[f];
                        if (
                            ((s = null != i ? i[f] : void 0),
                            r.hasOwnProperty(f) &&
                                c !== s &&
                                (null != c || null != s))
                        )
                            if ("style" === f)
                                if (s) {
                                    for (o in s)
                                        !s.hasOwnProperty(o) ||
                                            (c && c.hasOwnProperty(o)) ||
                                            (n || (n = {}), (n[o] = ""));
                                    for (o in c)
                                        c.hasOwnProperty(o) &&
                                            s[o] !== c[o] &&
                                            (n || (n = {}), (n[o] = c[o]));
                                } else
                                    n || (l || (l = []), l.push(f, n)), (n = c);
                            else
                                "dangerouslySetInnerHTML" === f
                                    ? ((c = c ? c.__html : void 0),
                                      (s = s ? s.__html : void 0),
                                      null != c &&
                                          s !== c &&
                                          (l = l || []).push(f, c))
                                    : "children" === f
                                    ? ("string" !== typeof c &&
                                          "number" !== typeof c) ||
                                      (l = l || []).push(f, "" + c)
                                    : "suppressContentEditableWarning" !== f &&
                                      "suppressHydrationWarning" !== f &&
                                      (u.hasOwnProperty(f)
                                          ? (null != c &&
                                                "onScroll" === f &&
                                                Er("scroll", e),
                                            l || s === c || (l = []))
                                          : "object" === typeof c &&
                                            null !== c &&
                                            c.$$typeof === M
                                          ? c.toString()
                                          : (l = l || []).push(f, c));
                    }
                    n && (l = l || []).push("style", n);
                    var f = l;
                    (t.updateQueue = f) && (t.flags |= 4);
                }
            }),
            (Xo = function (e, t, n, r) {
                n !== r && (t.flags |= 4);
            });
        var ul = "function" === typeof WeakMap ? WeakMap : Map;
        function sl(e, t, n) {
            ((n = li(-1, n)).tag = 3), (n.payload = { element: null });
            var r = t.value;
            return (
                (n.callback = function () {
                    Xl || ((Xl = !0), (Kl = r)), ll(0, t);
                }),
                n
            );
        }
        function cl(e, t, n) {
            (n = li(-1, n)).tag = 3;
            var r = e.type.getDerivedStateFromError;
            if ("function" === typeof r) {
                var a = t.value;
                n.payload = function () {
                    return ll(0, t), r(a);
                };
            }
            var i = e.stateNode;
            return (
                null !== i &&
                    "function" === typeof i.componentDidCatch &&
                    (n.callback = function () {
                        "function" !== typeof r &&
                            (null === ql
                                ? (ql = new Set([this]))
                                : ql.add(this),
                            ll(0, t));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : "",
                        });
                    }),
                n
            );
        }
        var fl = "function" === typeof WeakSet ? WeakSet : Set;
        function dl(e) {
            var t = e.ref;
            if (null !== t)
                if ("function" === typeof t)
                    try {
                        t(null);
                    } catch (n) {
                        Nu(e, n);
                    }
                else t.current = null;
        }
        function pl(e, t) {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    return;
                case 1:
                    if (256 & t.flags && null !== e) {
                        var n = e.memoizedProps,
                            r = e.memoizedState;
                        (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                            t.elementType === t.type ? n : Ka(t.type, n),
                            r
                        )),
                            (e.__reactInternalSnapshotBeforeUpdate = t);
                    }
                    return;
                case 3:
                    return void (
                        256 & t.flags && Ur(t.stateNode.containerInfo)
                    );
                case 5:
                case 6:
                case 4:
                case 17:
                    return;
            }
            throw Error(o(163));
        }
        function ml(e, t, n) {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    if (
                        null !==
                        (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
                    ) {
                        e = t = t.next;
                        do {
                            if (3 === (3 & e.tag)) {
                                var r = e.create;
                                e.destroy = r();
                            }
                            e = e.next;
                        } while (e !== t);
                    }
                    if (
                        null !==
                        (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
                    ) {
                        e = t = t.next;
                        do {
                            var a = e;
                            (r = a.next),
                                0 !== (4 & (a = a.tag)) &&
                                    0 !== (1 & a) &&
                                    (Ru(n, e), Iu(n, e)),
                                (e = r);
                        } while (e !== t);
                    }
                    return;
                case 1:
                    return (
                        (e = n.stateNode),
                        4 & n.flags &&
                            (null === t
                                ? e.componentDidMount()
                                : ((r =
                                      n.elementType === n.type
                                          ? t.memoizedProps
                                          : Ka(n.type, t.memoizedProps)),
                                  e.componentDidUpdate(
                                      r,
                                      t.memoizedState,
                                      e.__reactInternalSnapshotBeforeUpdate
                                  ))),
                        void (null !== (t = n.updateQueue) && fi(n, t, e))
                    );
                case 3:
                    if (null !== (t = n.updateQueue)) {
                        if (((e = null), null !== n.child))
                            switch (n.child.tag) {
                                case 5:
                                    e = n.child.stateNode;
                                    break;
                                case 1:
                                    e = n.child.stateNode;
                            }
                        fi(n, t, e);
                    }
                    return;
                case 5:
                    return (
                        (e = n.stateNode),
                        void (
                            null === t &&
                            4 & n.flags &&
                            Br(n.type, n.memoizedProps) &&
                            e.focus()
                        )
                    );
                case 6:
                case 4:
                case 12:
                    return;
                case 13:
                    return void (
                        null === n.memoizedState &&
                        ((n = n.alternate),
                        null !== n &&
                            ((n = n.memoizedState),
                            null !== n &&
                                ((n = n.dehydrated), null !== n && kt(n))))
                    );
                case 19:
                case 17:
                case 20:
                case 21:
                case 23:
                case 24:
                    return;
            }
            throw Error(o(163));
        }
        function hl(e, t) {
            for (var n = e; ; ) {
                if (5 === n.tag) {
                    var r = n.stateNode;
                    if (t)
                        "function" === typeof (r = r.style).setProperty
                            ? r.setProperty("display", "none", "important")
                            : (r.display = "none");
                    else {
                        r = n.stateNode;
                        var a = n.memoizedProps.style;
                        (a =
                            void 0 !== a &&
                            null !== a &&
                            a.hasOwnProperty("display")
                                ? a.display
                                : null),
                            (r.style.display = xe("display", a));
                    }
                } else if (6 === n.tag)
                    n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                else if (
                    ((23 !== n.tag && 24 !== n.tag) ||
                        null === n.memoizedState ||
                        n === e) &&
                    null !== n.child
                ) {
                    (n.child.return = n), (n = n.child);
                    continue;
                }
                if (n === e) break;
                for (; null === n.sibling; ) {
                    if (null === n.return || n.return === e) return;
                    n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
            }
        }
        function vl(e, t) {
            if (xa && "function" === typeof xa.onCommitFiberUnmount)
                try {
                    xa.onCommitFiberUnmount(wa, t);
                } catch (i) {}
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    if (
                        null !== (e = t.updateQueue) &&
                        null !== (e = e.lastEffect)
                    ) {
                        var n = (e = e.next);
                        do {
                            var r = n,
                                a = r.destroy;
                            if (((r = r.tag), void 0 !== a))
                                if (0 !== (4 & r)) Ru(t, n);
                                else {
                                    r = t;
                                    try {
                                        a();
                                    } catch (i) {
                                        Nu(r, i);
                                    }
                                }
                            n = n.next;
                        } while (n !== e);
                    }
                    break;
                case 1:
                    if (
                        (dl(t),
                        "function" ===
                            typeof (e = t.stateNode).componentWillUnmount)
                    )
                        try {
                            (e.props = t.memoizedProps),
                                (e.state = t.memoizedState),
                                e.componentWillUnmount();
                        } catch (i) {
                            Nu(t, i);
                        }
                    break;
                case 5:
                    dl(t);
                    break;
                case 4:
                    kl(e, t);
            }
        }
        function gl(e) {
            (e.alternate = null),
                (e.child = null),
                (e.dependencies = null),
                (e.firstEffect = null),
                (e.lastEffect = null),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.pendingProps = null),
                (e.return = null),
                (e.updateQueue = null);
        }
        function yl(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function bl(e) {
            e: {
                for (var t = e.return; null !== t; ) {
                    if (yl(t)) break e;
                    t = t.return;
                }
                throw Error(o(160));
            }
            var n = t;
            switch (((t = n.stateNode), n.tag)) {
                case 5:
                    var r = !1;
                    break;
                case 3:
                case 4:
                    (t = t.containerInfo), (r = !0);
                    break;
                default:
                    throw Error(o(161));
            }
            16 & n.flags && (ye(t, ""), (n.flags &= -17));
            e: t: for (n = e; ; ) {
                for (; null === n.sibling; ) {
                    if (null === n.return || yl(n.return)) {
                        n = null;
                        break e;
                    }
                    n = n.return;
                }
                for (
                    n.sibling.return = n.return, n = n.sibling;
                    5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

                ) {
                    if (2 & n.flags) continue t;
                    if (null === n.child || 4 === n.tag) continue t;
                    (n.child.return = n), (n = n.child);
                }
                if (!(2 & n.flags)) {
                    n = n.stateNode;
                    break e;
                }
            }
            r ? wl(e, n, t) : xl(e, n, t);
        }
        function wl(e, t, n) {
            var r = e.tag,
                a = 5 === r || 6 === r;
            if (a)
                (e = a ? e.stateNode : e.stateNode.instance),
                    t
                        ? 8 === n.nodeType
                            ? n.parentNode.insertBefore(e, t)
                            : n.insertBefore(e, t)
                        : (8 === n.nodeType
                              ? (t = n.parentNode).insertBefore(e, n)
                              : (t = n).appendChild(e),
                          (null !== (n = n._reactRootContainer) &&
                              void 0 !== n) ||
                              null !== t.onclick ||
                              (t.onclick = Nr));
            else if (4 !== r && null !== (e = e.child))
                for (wl(e, t, n), e = e.sibling; null !== e; )
                    wl(e, t, n), (e = e.sibling);
        }
        function xl(e, t, n) {
            var r = e.tag,
                a = 5 === r || 6 === r;
            if (a)
                (e = a ? e.stateNode : e.stateNode.instance),
                    t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (4 !== r && null !== (e = e.child))
                for (xl(e, t, n), e = e.sibling; null !== e; )
                    xl(e, t, n), (e = e.sibling);
        }
        function kl(e, t) {
            for (var n, r, a = t, i = !1; ; ) {
                if (!i) {
                    i = a.return;
                    e: for (;;) {
                        if (null === i) throw Error(o(160));
                        switch (((n = i.stateNode), i.tag)) {
                            case 5:
                                r = !1;
                                break e;
                            case 3:
                            case 4:
                                (n = n.containerInfo), (r = !0);
                                break e;
                        }
                        i = i.return;
                    }
                    i = !0;
                }
                if (5 === a.tag || 6 === a.tag) {
                    e: for (var l = e, u = a, s = u; ; )
                        if ((vl(l, s), null !== s.child && 4 !== s.tag))
                            (s.child.return = s), (s = s.child);
                        else {
                            if (s === u) break e;
                            for (; null === s.sibling; ) {
                                if (null === s.return || s.return === u)
                                    break e;
                                s = s.return;
                            }
                            (s.sibling.return = s.return), (s = s.sibling);
                        }
                    r
                        ? ((l = n),
                          (u = a.stateNode),
                          8 === l.nodeType
                              ? l.parentNode.removeChild(u)
                              : l.removeChild(u))
                        : n.removeChild(a.stateNode);
                } else if (4 === a.tag) {
                    if (null !== a.child) {
                        (n = a.stateNode.containerInfo),
                            (r = !0),
                            (a.child.return = a),
                            (a = a.child);
                        continue;
                    }
                } else if ((vl(e, a), null !== a.child)) {
                    (a.child.return = a), (a = a.child);
                    continue;
                }
                if (a === t) break;
                for (; null === a.sibling; ) {
                    if (null === a.return || a.return === t) return;
                    4 === (a = a.return).tag && (i = !1);
                }
                (a.sibling.return = a.return), (a = a.sibling);
            }
        }
        function Sl(e, t) {
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    var n = t.updateQueue;
                    if (null !== (n = null !== n ? n.lastEffect : null)) {
                        var r = (n = n.next);
                        do {
                            3 === (3 & r.tag) &&
                                ((e = r.destroy),
                                (r.destroy = void 0),
                                void 0 !== e && e()),
                                (r = r.next);
                        } while (r !== n);
                    }
                    return;
                case 1:
                    return;
                case 5:
                    if (null != (n = t.stateNode)) {
                        r = t.memoizedProps;
                        var a = null !== e ? e.memoizedProps : r;
                        e = t.type;
                        var i = t.updateQueue;
                        if (((t.updateQueue = null), null !== i)) {
                            for (
                                n[Qr] = r,
                                    "input" === e &&
                                        "radio" === r.type &&
                                        null != r.name &&
                                        te(n, r),
                                    Ce(e, a),
                                    t = Ce(e, r),
                                    a = 0;
                                a < i.length;
                                a += 2
                            ) {
                                var l = i[a],
                                    u = i[a + 1];
                                "style" === l
                                    ? ke(n, u)
                                    : "dangerouslySetInnerHTML" === l
                                    ? ge(n, u)
                                    : "children" === l
                                    ? ye(n, u)
                                    : w(n, l, u, t);
                            }
                            switch (e) {
                                case "input":
                                    ne(n, r);
                                    break;
                                case "textarea":
                                    se(n, r);
                                    break;
                                case "select":
                                    (e = n._wrapperState.wasMultiple),
                                        (n._wrapperState.wasMultiple =
                                            !!r.multiple),
                                        null != (i = r.value)
                                            ? oe(n, !!r.multiple, i, !1)
                                            : e !== !!r.multiple &&
                                              (null != r.defaultValue
                                                  ? oe(
                                                        n,
                                                        !!r.multiple,
                                                        r.defaultValue,
                                                        !0
                                                    )
                                                  : oe(
                                                        n,
                                                        !!r.multiple,
                                                        r.multiple ? [] : "",
                                                        !1
                                                    ));
                            }
                        }
                    }
                    return;
                case 6:
                    if (null === t.stateNode) throw Error(o(162));
                    return void (t.stateNode.nodeValue = t.memoizedProps);
                case 3:
                    return void (
                        (n = t.stateNode).hydrate &&
                        ((n.hydrate = !1), kt(n.containerInfo))
                    );
                case 12:
                    return;
                case 13:
                    return (
                        null !== t.memoizedState &&
                            ((Hl = Ba()), hl(t.child, !0)),
                        void Ol(t)
                    );
                case 19:
                    return void Ol(t);
                case 17:
                    return;
                case 23:
                case 24:
                    return void hl(t, null !== t.memoizedState);
            }
            throw Error(o(163));
        }
        function Ol(e) {
            var t = e.updateQueue;
            if (null !== t) {
                e.updateQueue = null;
                var n = e.stateNode;
                null === n && (n = e.stateNode = new fl()),
                    t.forEach(function (t) {
                        var r = Fu.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r));
                    });
            }
        }
        function Cl(e, t) {
            return (
                null !== e &&
                (null === (e = e.memoizedState) || null !== e.dehydrated) &&
                null !== (t = t.memoizedState) &&
                null === t.dehydrated
            );
        }
        var jl = Math.ceil,
            El = x.ReactCurrentDispatcher,
            Pl = x.ReactCurrentOwner,
            _l = 0,
            Tl = null,
            Ll = null,
            Al = 0,
            Il = 0,
            Rl = oa(0),
            Ml = 0,
            zl = null,
            Nl = 0,
            Dl = 0,
            Fl = 0,
            Bl = 0,
            Vl = null,
            Hl = 0,
            Wl = 1 / 0;
        function Ul() {
            Wl = Ba() + 500;
        }
        var $l,
            Yl = null,
            Xl = !1,
            Kl = null,
            ql = null,
            Ql = !1,
            Gl = null,
            Zl = 90,
            Jl = [],
            eu = [],
            tu = null,
            nu = 0,
            ru = null,
            au = -1,
            iu = 0,
            ou = 0,
            lu = null,
            uu = !1;
        function su() {
            return 0 !== (48 & _l) ? Ba() : -1 !== au ? au : (au = Ba());
        }
        function cu(e) {
            if (0 === (2 & (e = e.mode))) return 1;
            if (0 === (4 & e)) return 99 === Va() ? 1 : 2;
            if ((0 === iu && (iu = Nl), 0 !== Xa.transition)) {
                0 !== ou && (ou = null !== Vl ? Vl.pendingLanes : 0), (e = iu);
                var t = 4186112 & ~ou;
                return (
                    0 === (t &= -t) &&
                        0 === (t = (e = 4186112 & ~e) & -e) &&
                        (t = 8192),
                    t
                );
            }
            return (
                (e = Va()),
                0 !== (4 & _l) && 98 === e
                    ? (e = Bt(12, iu))
                    : (e = Bt(
                          (e = (function (e) {
                              switch (e) {
                                  case 99:
                                      return 15;
                                  case 98:
                                      return 10;
                                  case 97:
                                  case 96:
                                      return 8;
                                  case 95:
                                      return 2;
                                  default:
                                      return 0;
                              }
                          })(e)),
                          iu
                      )),
                e
            );
        }
        function fu(e, t, n) {
            if (50 < nu) throw ((nu = 0), (ru = null), Error(o(185)));
            if (null === (e = du(e, t))) return null;
            Wt(e, t, n), e === Tl && ((Fl |= t), 4 === Ml && hu(e, Al));
            var r = Va();
            1 === t
                ? 0 !== (8 & _l) && 0 === (48 & _l)
                    ? vu(e)
                    : (pu(e, n), 0 === _l && (Ul(), $a()))
                : (0 === (4 & _l) ||
                      (98 !== r && 99 !== r) ||
                      (null === tu ? (tu = new Set([e])) : tu.add(e)),
                  pu(e, n)),
                (Vl = e);
        }
        function du(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            for (
                null !== n && (n.lanes |= t), n = e, e = e.return;
                null !== e;

            )
                (e.childLanes |= t),
                    null !== (n = e.alternate) && (n.childLanes |= t),
                    (n = e),
                    (e = e.return);
            return 3 === n.tag ? n.stateNode : null;
        }
        function pu(e, t) {
            for (
                var n = e.callbackNode,
                    r = e.suspendedLanes,
                    a = e.pingedLanes,
                    i = e.expirationTimes,
                    l = e.pendingLanes;
                0 < l;

            ) {
                var u = 31 - Ut(l),
                    s = 1 << u,
                    c = i[u];
                if (-1 === c) {
                    if (0 === (s & r) || 0 !== (s & a)) {
                        (c = t), Nt(s);
                        var f = zt;
                        i[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
                    }
                } else c <= t && (e.expiredLanes |= s);
                l &= ~s;
            }
            if (((r = Dt(e, e === Tl ? Al : 0)), (t = zt), 0 === r))
                null !== n &&
                    (n !== Ra && Oa(n),
                    (e.callbackNode = null),
                    (e.callbackPriority = 0));
            else {
                if (null !== n) {
                    if (e.callbackPriority === t) return;
                    n !== Ra && Oa(n);
                }
                15 === t
                    ? ((n = vu.bind(null, e)),
                      null === za
                          ? ((za = [n]), (Na = Sa(_a, Ya)))
                          : za.push(n),
                      (n = Ra))
                    : 14 === t
                    ? (n = Ua(99, vu.bind(null, e)))
                    : (n = Ua(
                          (n = (function (e) {
                              switch (e) {
                                  case 15:
                                  case 14:
                                      return 99;
                                  case 13:
                                  case 12:
                                  case 11:
                                  case 10:
                                      return 98;
                                  case 9:
                                  case 8:
                                  case 7:
                                  case 6:
                                  case 4:
                                  case 5:
                                      return 97;
                                  case 3:
                                  case 2:
                                  case 1:
                                      return 95;
                                  case 0:
                                      return 90;
                                  default:
                                      throw Error(o(358, e));
                              }
                          })(t)),
                          mu.bind(null, e)
                      )),
                    (e.callbackPriority = t),
                    (e.callbackNode = n);
            }
        }
        function mu(e) {
            if (((au = -1), (ou = iu = 0), 0 !== (48 & _l)))
                throw Error(o(327));
            var t = e.callbackNode;
            if (Au() && e.callbackNode !== t) return null;
            var n = Dt(e, e === Tl ? Al : 0);
            if (0 === n) return null;
            var r = n,
                a = _l;
            _l |= 16;
            var i = Su();
            for ((Tl === e && Al === r) || (Ul(), xu(e, r)); ; )
                try {
                    ju();
                    break;
                } catch (u) {
                    ku(e, u);
                }
            if (
                (Ja(),
                (El.current = i),
                (_l = a),
                null !== Ll ? (r = 0) : ((Tl = null), (Al = 0), (r = Ml)),
                0 !== (Nl & Fl))
            )
                xu(e, 0);
            else if (0 !== r) {
                if (
                    (2 === r &&
                        ((_l |= 64),
                        e.hydrate && ((e.hydrate = !1), Ur(e.containerInfo)),
                        0 !== (n = Ft(e)) && (r = Ou(e, n))),
                    1 === r)
                )
                    throw ((t = zl), xu(e, 0), hu(e, n), pu(e, Ba()), t);
                switch (
                    ((e.finishedWork = e.current.alternate),
                    (e.finishedLanes = n),
                    r)
                ) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 2:
                        _u(e);
                        break;
                    case 3:
                        if (
                            (hu(e, n),
                            (62914560 & n) === n && 10 < (r = Hl + 500 - Ba()))
                        ) {
                            if (0 !== Dt(e, 0)) break;
                            if (((a = e.suspendedLanes) & n) !== n) {
                                su(), (e.pingedLanes |= e.suspendedLanes & a);
                                break;
                            }
                            e.timeoutHandle = Hr(_u.bind(null, e), r);
                            break;
                        }
                        _u(e);
                        break;
                    case 4:
                        if ((hu(e, n), (4186112 & n) === n)) break;
                        for (r = e.eventTimes, a = -1; 0 < n; ) {
                            var l = 31 - Ut(n);
                            (i = 1 << l), (l = r[l]) > a && (a = l), (n &= ~i);
                        }
                        if (
                            ((n = a),
                            10 <
                                (n =
                                    (120 > (n = Ba() - n)
                                        ? 120
                                        : 480 > n
                                        ? 480
                                        : 1080 > n
                                        ? 1080
                                        : 1920 > n
                                        ? 1920
                                        : 3e3 > n
                                        ? 3e3
                                        : 4320 > n
                                        ? 4320
                                        : 1960 * jl(n / 1960)) - n))
                        ) {
                            e.timeoutHandle = Hr(_u.bind(null, e), n);
                            break;
                        }
                        _u(e);
                        break;
                    case 5:
                        _u(e);
                        break;
                    default:
                        throw Error(o(329));
                }
            }
            return pu(e, Ba()), e.callbackNode === t ? mu.bind(null, e) : null;
        }
        function hu(e, t) {
            for (
                t &= ~Bl,
                    t &= ~Fl,
                    e.suspendedLanes |= t,
                    e.pingedLanes &= ~t,
                    e = e.expirationTimes;
                0 < t;

            ) {
                var n = 31 - Ut(t),
                    r = 1 << n;
                (e[n] = -1), (t &= ~r);
            }
        }
        function vu(e) {
            if (0 !== (48 & _l)) throw Error(o(327));
            if ((Au(), e === Tl && 0 !== (e.expiredLanes & Al))) {
                var t = Al,
                    n = Ou(e, t);
                0 !== (Nl & Fl) && (n = Ou(e, (t = Dt(e, t))));
            } else n = Ou(e, (t = Dt(e, 0)));
            if (
                (0 !== e.tag &&
                    2 === n &&
                    ((_l |= 64),
                    e.hydrate && ((e.hydrate = !1), Ur(e.containerInfo)),
                    0 !== (t = Ft(e)) && (n = Ou(e, t))),
                1 === n)
            )
                throw ((n = zl), xu(e, 0), hu(e, t), pu(e, Ba()), n);
            return (
                (e.finishedWork = e.current.alternate),
                (e.finishedLanes = t),
                _u(e),
                pu(e, Ba()),
                null
            );
        }
        function gu(e, t) {
            var n = _l;
            _l |= 1;
            try {
                return e(t);
            } finally {
                0 === (_l = n) && (Ul(), $a());
            }
        }
        function yu(e, t) {
            var n = _l;
            (_l &= -2), (_l |= 8);
            try {
                return e(t);
            } finally {
                0 === (_l = n) && (Ul(), $a());
            }
        }
        function bu(e, t) {
            ua(Rl, Il), (Il |= t), (Nl |= t);
        }
        function wu() {
            (Il = Rl.current), la(Rl);
        }
        function xu(e, t) {
            (e.finishedWork = null), (e.finishedLanes = 0);
            var n = e.timeoutHandle;
            if ((-1 !== n && ((e.timeoutHandle = -1), Wr(n)), null !== Ll))
                for (n = Ll.return; null !== n; ) {
                    var r = n;
                    switch (r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) &&
                                void 0 !== r &&
                                ha();
                            break;
                        case 3:
                            Li(), la(fa), la(ca), Yi();
                            break;
                        case 5:
                            Ii(r);
                            break;
                        case 4:
                            Li();
                            break;
                        case 13:
                        case 19:
                            la(Ri);
                            break;
                        case 10:
                            ei(r);
                            break;
                        case 23:
                        case 24:
                            wu();
                    }
                    n = n.return;
                }
            (Tl = e),
                (Ll = Wu(e.current, null)),
                (Al = Il = Nl = t),
                (Ml = 0),
                (zl = null),
                (Bl = Fl = Dl = 0);
        }
        function ku(e, t) {
            for (;;) {
                var n = Ll;
                try {
                    if ((Ja(), (Xi.current = _o), Ji)) {
                        for (var r = Qi.memoizedState; null !== r; ) {
                            var a = r.queue;
                            null !== a && (a.pending = null), (r = r.next);
                        }
                        Ji = !1;
                    }
                    if (
                        ((qi = 0),
                        (Zi = Gi = Qi = null),
                        (eo = !1),
                        (Pl.current = null),
                        null === n || null === n.return)
                    ) {
                        (Ml = 1), (zl = t), (Ll = null);
                        break;
                    }
                    e: {
                        var i = e,
                            o = n.return,
                            l = n,
                            u = t;
                        if (
                            ((t = Al),
                            (l.flags |= 2048),
                            (l.firstEffect = l.lastEffect = null),
                            null !== u &&
                                "object" === typeof u &&
                                "function" === typeof u.then)
                        ) {
                            var s = u;
                            if (0 === (2 & l.mode)) {
                                var c = l.alternate;
                                c
                                    ? ((l.updateQueue = c.updateQueue),
                                      (l.memoizedState = c.memoizedState),
                                      (l.lanes = c.lanes))
                                    : ((l.updateQueue = null),
                                      (l.memoizedState = null));
                            }
                            var f = 0 !== (1 & Ri.current),
                                d = o;
                            do {
                                var p;
                                if ((p = 13 === d.tag)) {
                                    var m = d.memoizedState;
                                    if (null !== m) p = null !== m.dehydrated;
                                    else {
                                        var h = d.memoizedProps;
                                        p =
                                            void 0 !== h.fallback &&
                                            (!0 !==
                                                h.unstable_avoidThisFallback ||
                                                !f);
                                    }
                                }
                                if (p) {
                                    var v = d.updateQueue;
                                    if (null === v) {
                                        var g = new Set();
                                        g.add(s), (d.updateQueue = g);
                                    } else v.add(s);
                                    if (0 === (2 & d.mode)) {
                                        if (
                                            ((d.flags |= 64),
                                            (l.flags |= 16384),
                                            (l.flags &= -2981),
                                            1 === l.tag)
                                        )
                                            if (null === l.alternate)
                                                l.tag = 17;
                                            else {
                                                var y = li(-1, 1);
                                                (y.tag = 2), ui(l, y);
                                            }
                                        l.lanes |= 1;
                                        break e;
                                    }
                                    (u = void 0), (l = t);
                                    var b = i.pingCache;
                                    if (
                                        (null === b
                                            ? ((b = i.pingCache = new ul()),
                                              (u = new Set()),
                                              b.set(s, u))
                                            : void 0 === (u = b.get(s)) &&
                                              ((u = new Set()), b.set(s, u)),
                                        !u.has(l))
                                    ) {
                                        u.add(l);
                                        var w = Du.bind(null, i, s, l);
                                        s.then(w, w);
                                    }
                                    (d.flags |= 4096), (d.lanes = t);
                                    break e;
                                }
                                d = d.return;
                            } while (null !== d);
                            u = Error(
                                (X(l.type) || "A React component") +
                                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                            );
                        }
                        5 !== Ml && (Ml = 2), (u = ol(u, l)), (d = o);
                        do {
                            switch (d.tag) {
                                case 3:
                                    (i = u),
                                        (d.flags |= 4096),
                                        (t &= -t),
                                        (d.lanes |= t),
                                        si(d, sl(0, i, t));
                                    break e;
                                case 1:
                                    i = u;
                                    var x = d.type,
                                        k = d.stateNode;
                                    if (
                                        0 === (64 & d.flags) &&
                                        ("function" ===
                                            typeof x.getDerivedStateFromError ||
                                            (null !== k &&
                                                "function" ===
                                                    typeof k.componentDidCatch &&
                                                (null === ql || !ql.has(k))))
                                    ) {
                                        (d.flags |= 4096),
                                            (t &= -t),
                                            (d.lanes |= t),
                                            si(d, cl(d, i, t));
                                        break e;
                                    }
                            }
                            d = d.return;
                        } while (null !== d);
                    }
                    Pu(n);
                } catch (S) {
                    (t = S), Ll === n && null !== n && (Ll = n = n.return);
                    continue;
                }
                break;
            }
        }
        function Su() {
            var e = El.current;
            return (El.current = _o), null === e ? _o : e;
        }
        function Ou(e, t) {
            var n = _l;
            _l |= 16;
            var r = Su();
            for ((Tl === e && Al === t) || xu(e, t); ; )
                try {
                    Cu();
                    break;
                } catch (a) {
                    ku(e, a);
                }
            if ((Ja(), (_l = n), (El.current = r), null !== Ll))
                throw Error(o(261));
            return (Tl = null), (Al = 0), Ml;
        }
        function Cu() {
            for (; null !== Ll; ) Eu(Ll);
        }
        function ju() {
            for (; null !== Ll && !Ca(); ) Eu(Ll);
        }
        function Eu(e) {
            var t = $l(e.alternate, e, Il);
            (e.memoizedProps = e.pendingProps),
                null === t ? Pu(e) : (Ll = t),
                (Pl.current = null);
        }
        function Pu(e) {
            var t = e;
            do {
                var n = t.alternate;
                if (((e = t.return), 0 === (2048 & t.flags))) {
                    if (null !== (n = al(n, t, Il))) return void (Ll = n);
                    if (
                        (24 !== (n = t).tag && 23 !== n.tag) ||
                        null === n.memoizedState ||
                        0 !== (1073741824 & Il) ||
                        0 === (4 & n.mode)
                    ) {
                        for (var r = 0, a = n.child; null !== a; )
                            (r |= a.lanes | a.childLanes), (a = a.sibling);
                        n.childLanes = r;
                    }
                    null !== e &&
                        0 === (2048 & e.flags) &&
                        (null === e.firstEffect &&
                            (e.firstEffect = t.firstEffect),
                        null !== t.lastEffect &&
                            (null !== e.lastEffect &&
                                (e.lastEffect.nextEffect = t.firstEffect),
                            (e.lastEffect = t.lastEffect)),
                        1 < t.flags &&
                            (null !== e.lastEffect
                                ? (e.lastEffect.nextEffect = t)
                                : (e.firstEffect = t),
                            (e.lastEffect = t)));
                } else {
                    if (null !== (n = il(t)))
                        return (n.flags &= 2047), void (Ll = n);
                    null !== e &&
                        ((e.firstEffect = e.lastEffect = null),
                        (e.flags |= 2048));
                }
                if (null !== (t = t.sibling)) return void (Ll = t);
                Ll = t = e;
            } while (null !== t);
            0 === Ml && (Ml = 5);
        }
        function _u(e) {
            var t = Va();
            return Wa(99, Tu.bind(null, e, t)), null;
        }
        function Tu(e, t) {
            do {
                Au();
            } while (null !== Gl);
            if (0 !== (48 & _l)) throw Error(o(327));
            var n = e.finishedWork;
            if (null === n) return null;
            if (
                ((e.finishedWork = null),
                (e.finishedLanes = 0),
                n === e.current)
            )
                throw Error(o(177));
            e.callbackNode = null;
            var r = n.lanes | n.childLanes,
                a = r,
                i = e.pendingLanes & ~a;
            (e.pendingLanes = a),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.expiredLanes &= a),
                (e.mutableReadLanes &= a),
                (e.entangledLanes &= a),
                (a = e.entanglements);
            for (var l = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
                var s = 31 - Ut(i),
                    c = 1 << s;
                (a[s] = 0), (l[s] = -1), (u[s] = -1), (i &= ~c);
            }
            if (
                (null !== tu && 0 === (24 & r) && tu.has(e) && tu.delete(e),
                e === Tl && ((Ll = Tl = null), (Al = 0)),
                1 < n.flags
                    ? null !== n.lastEffect
                        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                        : (r = n)
                    : (r = n.firstEffect),
                null !== r)
            ) {
                if (
                    ((a = _l),
                    (_l |= 32),
                    (Pl.current = null),
                    (Dr = qt),
                    mr((l = pr())))
                ) {
                    if ("selectionStart" in l)
                        u = { start: l.selectionStart, end: l.selectionEnd };
                    else
                        e: if (
                            ((u =
                                ((u = l.ownerDocument) && u.defaultView) ||
                                window),
                            (c = u.getSelection && u.getSelection()) &&
                                0 !== c.rangeCount)
                        ) {
                            (u = c.anchorNode),
                                (i = c.anchorOffset),
                                (s = c.focusNode),
                                (c = c.focusOffset);
                            try {
                                u.nodeType, s.nodeType;
                            } catch (j) {
                                u = null;
                                break e;
                            }
                            var f = 0,
                                d = -1,
                                p = -1,
                                m = 0,
                                h = 0,
                                v = l,
                                g = null;
                            t: for (;;) {
                                for (
                                    var y;
                                    v !== u ||
                                        (0 !== i && 3 !== v.nodeType) ||
                                        (d = f + i),
                                        v !== s ||
                                            (0 !== c && 3 !== v.nodeType) ||
                                            (p = f + c),
                                        3 === v.nodeType &&
                                            (f += v.nodeValue.length),
                                        null !== (y = v.firstChild);

                                )
                                    (g = v), (v = y);
                                for (;;) {
                                    if (v === l) break t;
                                    if (
                                        (g === u && ++m === i && (d = f),
                                        g === s && ++h === c && (p = f),
                                        null !== (y = v.nextSibling))
                                    )
                                        break;
                                    g = (v = g).parentNode;
                                }
                                v = y;
                            }
                            u =
                                -1 === d || -1 === p
                                    ? null
                                    : { start: d, end: p };
                        } else u = null;
                    u = u || { start: 0, end: 0 };
                } else u = null;
                (Fr = { focusedElem: l, selectionRange: u }),
                    (qt = !1),
                    (lu = null),
                    (uu = !1),
                    (Yl = r);
                do {
                    try {
                        Lu();
                    } catch (j) {
                        if (null === Yl) throw Error(o(330));
                        Nu(Yl, j), (Yl = Yl.nextEffect);
                    }
                } while (null !== Yl);
                (lu = null), (Yl = r);
                do {
                    try {
                        for (l = e; null !== Yl; ) {
                            var b = Yl.flags;
                            if ((16 & b && ye(Yl.stateNode, ""), 128 & b)) {
                                var w = Yl.alternate;
                                if (null !== w) {
                                    var x = w.ref;
                                    null !== x &&
                                        ("function" === typeof x
                                            ? x(null)
                                            : (x.current = null));
                                }
                            }
                            switch (1038 & b) {
                                case 2:
                                    bl(Yl), (Yl.flags &= -3);
                                    break;
                                case 6:
                                    bl(Yl),
                                        (Yl.flags &= -3),
                                        Sl(Yl.alternate, Yl);
                                    break;
                                case 1024:
                                    Yl.flags &= -1025;
                                    break;
                                case 1028:
                                    (Yl.flags &= -1025), Sl(Yl.alternate, Yl);
                                    break;
                                case 4:
                                    Sl(Yl.alternate, Yl);
                                    break;
                                case 8:
                                    kl(l, (u = Yl));
                                    var k = u.alternate;
                                    gl(u), null !== k && gl(k);
                            }
                            Yl = Yl.nextEffect;
                        }
                    } catch (j) {
                        if (null === Yl) throw Error(o(330));
                        Nu(Yl, j), (Yl = Yl.nextEffect);
                    }
                } while (null !== Yl);
                if (
                    ((x = Fr),
                    (w = pr()),
                    (b = x.focusedElem),
                    (l = x.selectionRange),
                    w !== b &&
                        b &&
                        b.ownerDocument &&
                        dr(b.ownerDocument.documentElement, b))
                ) {
                    null !== l &&
                        mr(b) &&
                        ((w = l.start),
                        void 0 === (x = l.end) && (x = w),
                        "selectionStart" in b
                            ? ((b.selectionStart = w),
                              (b.selectionEnd = Math.min(x, b.value.length)))
                            : (x =
                                  ((w = b.ownerDocument || document) &&
                                      w.defaultView) ||
                                  window).getSelection &&
                              ((x = x.getSelection()),
                              (u = b.textContent.length),
                              (k = Math.min(l.start, u)),
                              (l = void 0 === l.end ? k : Math.min(l.end, u)),
                              !x.extend && k > l && ((u = l), (l = k), (k = u)),
                              (u = fr(b, k)),
                              (i = fr(b, l)),
                              u &&
                                  i &&
                                  (1 !== x.rangeCount ||
                                      x.anchorNode !== u.node ||
                                      x.anchorOffset !== u.offset ||
                                      x.focusNode !== i.node ||
                                      x.focusOffset !== i.offset) &&
                                  ((w = w.createRange()).setStart(
                                      u.node,
                                      u.offset
                                  ),
                                  x.removeAllRanges(),
                                  k > l
                                      ? (x.addRange(w),
                                        x.extend(i.node, i.offset))
                                      : (w.setEnd(i.node, i.offset),
                                        x.addRange(w))))),
                        (w = []);
                    for (x = b; (x = x.parentNode); )
                        1 === x.nodeType &&
                            w.push({
                                element: x,
                                left: x.scrollLeft,
                                top: x.scrollTop,
                            });
                    for (
                        "function" === typeof b.focus && b.focus(), b = 0;
                        b < w.length;
                        b++
                    )
                        ((x = w[b]).element.scrollLeft = x.left),
                            (x.element.scrollTop = x.top);
                }
                (qt = !!Dr), (Fr = Dr = null), (e.current = n), (Yl = r);
                do {
                    try {
                        for (b = e; null !== Yl; ) {
                            var S = Yl.flags;
                            if ((36 & S && ml(b, Yl.alternate, Yl), 128 & S)) {
                                w = void 0;
                                var O = Yl.ref;
                                if (null !== O) {
                                    var C = Yl.stateNode;
                                    switch (Yl.tag) {
                                        case 5:
                                            w = C;
                                            break;
                                        default:
                                            w = C;
                                    }
                                    "function" === typeof O
                                        ? O(w)
                                        : (O.current = w);
                                }
                            }
                            Yl = Yl.nextEffect;
                        }
                    } catch (j) {
                        if (null === Yl) throw Error(o(330));
                        Nu(Yl, j), (Yl = Yl.nextEffect);
                    }
                } while (null !== Yl);
                (Yl = null), Ma(), (_l = a);
            } else e.current = n;
            if (Ql) (Ql = !1), (Gl = e), (Zl = t);
            else
                for (Yl = r; null !== Yl; )
                    (t = Yl.nextEffect),
                        (Yl.nextEffect = null),
                        8 & Yl.flags &&
                            (((S = Yl).sibling = null), (S.stateNode = null)),
                        (Yl = t);
            if (
                (0 === (r = e.pendingLanes) && (ql = null),
                1 === r ? (e === ru ? nu++ : ((nu = 0), (ru = e))) : (nu = 0),
                (n = n.stateNode),
                xa && "function" === typeof xa.onCommitFiberRoot)
            )
                try {
                    xa.onCommitFiberRoot(
                        wa,
                        n,
                        void 0,
                        64 === (64 & n.current.flags)
                    );
                } catch (j) {}
            if ((pu(e, Ba()), Xl)) throw ((Xl = !1), (e = Kl), (Kl = null), e);
            return 0 !== (8 & _l) || $a(), null;
        }
        function Lu() {
            for (; null !== Yl; ) {
                var e = Yl.alternate;
                uu ||
                    null === lu ||
                    (0 !== (8 & Yl.flags)
                        ? et(Yl, lu) && (uu = !0)
                        : 13 === Yl.tag &&
                          Cl(e, Yl) &&
                          et(Yl, lu) &&
                          (uu = !0));
                var t = Yl.flags;
                0 !== (256 & t) && pl(e, Yl),
                    0 === (512 & t) ||
                        Ql ||
                        ((Ql = !0),
                        Ua(97, function () {
                            return Au(), null;
                        })),
                    (Yl = Yl.nextEffect);
            }
        }
        function Au() {
            if (90 !== Zl) {
                var e = 97 < Zl ? 97 : Zl;
                return (Zl = 90), Wa(e, Mu);
            }
            return !1;
        }
        function Iu(e, t) {
            Jl.push(t, e),
                Ql ||
                    ((Ql = !0),
                    Ua(97, function () {
                        return Au(), null;
                    }));
        }
        function Ru(e, t) {
            eu.push(t, e),
                Ql ||
                    ((Ql = !0),
                    Ua(97, function () {
                        return Au(), null;
                    }));
        }
        function Mu() {
            if (null === Gl) return !1;
            var e = Gl;
            if (((Gl = null), 0 !== (48 & _l))) throw Error(o(331));
            var t = _l;
            _l |= 32;
            var n = eu;
            eu = [];
            for (var r = 0; r < n.length; r += 2) {
                var a = n[r],
                    i = n[r + 1],
                    l = a.destroy;
                if (((a.destroy = void 0), "function" === typeof l))
                    try {
                        l();
                    } catch (s) {
                        if (null === i) throw Error(o(330));
                        Nu(i, s);
                    }
            }
            for (n = Jl, Jl = [], r = 0; r < n.length; r += 2) {
                (a = n[r]), (i = n[r + 1]);
                try {
                    var u = a.create;
                    a.destroy = u();
                } catch (s) {
                    if (null === i) throw Error(o(330));
                    Nu(i, s);
                }
            }
            for (u = e.current.firstEffect; null !== u; )
                (e = u.nextEffect),
                    (u.nextEffect = null),
                    8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
                    (u = e);
            return (_l = t), $a(), !0;
        }
        function zu(e, t, n) {
            ui(e, (t = sl(0, (t = ol(n, t)), 1))),
                (t = su()),
                null !== (e = du(e, 1)) && (Wt(e, 1, t), pu(e, t));
        }
        function Nu(e, t) {
            if (3 === e.tag) zu(e, e, t);
            else
                for (var n = e.return; null !== n; ) {
                    if (3 === n.tag) {
                        zu(n, e, t);
                        break;
                    }
                    if (1 === n.tag) {
                        var r = n.stateNode;
                        if (
                            "function" ===
                                typeof n.type.getDerivedStateFromError ||
                            ("function" === typeof r.componentDidCatch &&
                                (null === ql || !ql.has(r)))
                        ) {
                            var a = cl(n, (e = ol(t, e)), 1);
                            if ((ui(n, a), (a = su()), null !== (n = du(n, 1))))
                                Wt(n, 1, a), pu(n, a);
                            else if (
                                "function" === typeof r.componentDidCatch &&
                                (null === ql || !ql.has(r))
                            )
                                try {
                                    r.componentDidCatch(t, e);
                                } catch (i) {}
                            break;
                        }
                    }
                    n = n.return;
                }
        }
        function Du(e, t, n) {
            var r = e.pingCache;
            null !== r && r.delete(t),
                (t = su()),
                (e.pingedLanes |= e.suspendedLanes & n),
                Tl === e &&
                    (Al & n) === n &&
                    (4 === Ml ||
                    (3 === Ml && (62914560 & Al) === Al && 500 > Ba() - Hl)
                        ? xu(e, 0)
                        : (Bl |= n)),
                pu(e, t);
        }
        function Fu(e, t) {
            var n = e.stateNode;
            null !== n && n.delete(t),
                0 === (t = 0) &&
                    (0 === (2 & (t = e.mode))
                        ? (t = 1)
                        : 0 === (4 & t)
                        ? (t = 99 === Va() ? 1 : 2)
                        : (0 === iu && (iu = Nl),
                          0 === (t = Vt(62914560 & ~iu)) && (t = 4194304))),
                (n = su()),
                null !== (e = du(e, t)) && (Wt(e, t, n), pu(e, n));
        }
        function Bu(e, t, n, r) {
            (this.tag = e),
                (this.key = n),
                (this.sibling =
                    this.child =
                    this.return =
                    this.stateNode =
                    this.type =
                    this.elementType =
                        null),
                (this.index = 0),
                (this.ref = null),
                (this.pendingProps = t),
                (this.dependencies =
                    this.memoizedState =
                    this.updateQueue =
                    this.memoizedProps =
                        null),
                (this.mode = r),
                (this.flags = 0),
                (this.lastEffect = this.firstEffect = this.nextEffect = null),
                (this.childLanes = this.lanes = 0),
                (this.alternate = null);
        }
        function Vu(e, t, n, r) {
            return new Bu(e, t, n, r);
        }
        function Hu(e) {
            return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Wu(e, t) {
            var n = e.alternate;
            return (
                null === n
                    ? (((n = Vu(e.tag, t, e.key, e.mode)).elementType =
                          e.elementType),
                      (n.type = e.type),
                      (n.stateNode = e.stateNode),
                      (n.alternate = e),
                      (e.alternate = n))
                    : ((n.pendingProps = t),
                      (n.type = e.type),
                      (n.flags = 0),
                      (n.nextEffect = null),
                      (n.firstEffect = null),
                      (n.lastEffect = null)),
                (n.childLanes = e.childLanes),
                (n.lanes = e.lanes),
                (n.child = e.child),
                (n.memoizedProps = e.memoizedProps),
                (n.memoizedState = e.memoizedState),
                (n.updateQueue = e.updateQueue),
                (t = e.dependencies),
                (n.dependencies =
                    null === t
                        ? null
                        : { lanes: t.lanes, firstContext: t.firstContext }),
                (n.sibling = e.sibling),
                (n.index = e.index),
                (n.ref = e.ref),
                n
            );
        }
        function Uu(e, t, n, r, a, i) {
            var l = 2;
            if (((r = e), "function" === typeof e)) Hu(e) && (l = 1);
            else if ("string" === typeof e) l = 5;
            else
                e: switch (e) {
                    case O:
                        return $u(n.children, a, i, t);
                    case z:
                        (l = 8), (a |= 16);
                        break;
                    case C:
                        (l = 8), (a |= 1);
                        break;
                    case j:
                        return (
                            ((e = Vu(12, n, t, 8 | a)).elementType = j),
                            (e.type = j),
                            (e.lanes = i),
                            e
                        );
                    case T:
                        return (
                            ((e = Vu(13, n, t, a)).type = T),
                            (e.elementType = T),
                            (e.lanes = i),
                            e
                        );
                    case L:
                        return (
                            ((e = Vu(19, n, t, a)).elementType = L),
                            (e.lanes = i),
                            e
                        );
                    case N:
                        return Yu(n, a, i, t);
                    case D:
                        return (
                            ((e = Vu(24, n, t, a)).elementType = D),
                            (e.lanes = i),
                            e
                        );
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                                case E:
                                    l = 10;
                                    break e;
                                case P:
                                    l = 9;
                                    break e;
                                case _:
                                    l = 11;
                                    break e;
                                case A:
                                    l = 14;
                                    break e;
                                case I:
                                    (l = 16), (r = null);
                                    break e;
                                case R:
                                    l = 22;
                                    break e;
                            }
                        throw Error(o(130, null == e ? e : typeof e, ""));
                }
            return (
                ((t = Vu(l, n, t, a)).elementType = e),
                (t.type = r),
                (t.lanes = i),
                t
            );
        }
        function $u(e, t, n, r) {
            return ((e = Vu(7, e, r, t)).lanes = n), e;
        }
        function Yu(e, t, n, r) {
            return ((e = Vu(23, e, r, t)).elementType = N), (e.lanes = n), e;
        }
        function Xu(e, t, n) {
            return ((e = Vu(6, e, null, t)).lanes = n), e;
        }
        function Ku(e, t, n) {
            return (
                ((t = Vu(
                    4,
                    null !== e.children ? e.children : [],
                    e.key,
                    t
                )).lanes = n),
                (t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation,
                }),
                t
            );
        }
        function qu(e, t, n) {
            (this.tag = t),
                (this.containerInfo = e),
                (this.finishedWork =
                    this.pingCache =
                    this.current =
                    this.pendingChildren =
                        null),
                (this.timeoutHandle = -1),
                (this.pendingContext = this.context = null),
                (this.hydrate = n),
                (this.callbackNode = null),
                (this.callbackPriority = 0),
                (this.eventTimes = Ht(0)),
                (this.expirationTimes = Ht(-1)),
                (this.entangledLanes =
                    this.finishedLanes =
                    this.mutableReadLanes =
                    this.expiredLanes =
                    this.pingedLanes =
                    this.suspendedLanes =
                    this.pendingLanes =
                        0),
                (this.entanglements = Ht(0)),
                (this.mutableSourceEagerHydrationData = null);
        }
        function Qu(e, t, n) {
            var r =
                3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : null;
            return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
            };
        }
        function Gu(e, t, n, r) {
            var a = t.current,
                i = su(),
                l = cu(a);
            e: if (n) {
                t: {
                    if (Qe((n = n._reactInternals)) !== n || 1 !== n.tag)
                        throw Error(o(170));
                    var u = n;
                    do {
                        switch (u.tag) {
                            case 3:
                                u = u.stateNode.context;
                                break t;
                            case 1:
                                if (ma(u.type)) {
                                    u =
                                        u.stateNode
                                            .__reactInternalMemoizedMergedChildContext;
                                    break t;
                                }
                        }
                        u = u.return;
                    } while (null !== u);
                    throw Error(o(171));
                }
                if (1 === n.tag) {
                    var s = n.type;
                    if (ma(s)) {
                        n = ga(n, s, u);
                        break e;
                    }
                }
                n = u;
            } else n = sa;
            return (
                null === t.context ? (t.context = n) : (t.pendingContext = n),
                ((t = li(i, l)).payload = { element: e }),
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                ui(a, t),
                fu(a, l, i),
                l
            );
        }
        function Zu(e) {
            if (!(e = e.current).child) return null;
            switch (e.child.tag) {
                case 5:
                default:
                    return e.child.stateNode;
            }
        }
        function Ju(e, t) {
            if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                var n = e.retryLane;
                e.retryLane = 0 !== n && n < t ? n : t;
            }
        }
        function es(e, t) {
            Ju(e, t), (e = e.alternate) && Ju(e, t);
        }
        function ts(e, t, n) {
            var r =
                (null != n &&
                    null != n.hydrationOptions &&
                    n.hydrationOptions.mutableSources) ||
                null;
            if (
                ((n = new qu(e, t, null != n && !0 === n.hydrate)),
                (t = Vu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
                (n.current = t),
                (t.stateNode = n),
                ii(t),
                (e[Gr] = n.current),
                _r(8 === e.nodeType ? e.parentNode : e),
                r)
            )
                for (e = 0; e < r.length; e++) {
                    var a = (t = r[e])._getVersion;
                    (a = a(t._source)),
                        null == n.mutableSourceEagerHydrationData
                            ? (n.mutableSourceEagerHydrationData = [t, a])
                            : n.mutableSourceEagerHydrationData.push(t, a);
                }
            this._internalRoot = n;
        }
        function ns(e) {
            return !(
                !e ||
                (1 !== e.nodeType &&
                    9 !== e.nodeType &&
                    11 !== e.nodeType &&
                    (8 !== e.nodeType ||
                        " react-mount-point-unstable " !== e.nodeValue))
            );
        }
        function rs(e, t, n, r, a) {
            var i = n._reactRootContainer;
            if (i) {
                var o = i._internalRoot;
                if ("function" === typeof a) {
                    var l = a;
                    a = function () {
                        var e = Zu(o);
                        l.call(e);
                    };
                }
                Gu(t, o, e, a);
            } else {
                if (
                    ((i = n._reactRootContainer =
                        (function (e, t) {
                            if (
                                (t ||
                                    (t = !(
                                        !(t = e
                                            ? 9 === e.nodeType
                                                ? e.documentElement
                                                : e.firstChild
                                            : null) ||
                                        1 !== t.nodeType ||
                                        !t.hasAttribute("data-reactroot")
                                    )),
                                !t)
                            )
                                for (var n; (n = e.lastChild); )
                                    e.removeChild(n);
                            return new ts(e, 0, t ? { hydrate: !0 } : void 0);
                        })(n, r)),
                    (o = i._internalRoot),
                    "function" === typeof a)
                ) {
                    var u = a;
                    a = function () {
                        var e = Zu(o);
                        u.call(e);
                    };
                }
                yu(function () {
                    Gu(t, o, e, a);
                });
            }
            return Zu(o);
        }
        function as(e, t) {
            var n =
                2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : null;
            if (!ns(t)) throw Error(o(200));
            return Qu(e, t, null, n);
        }
        ($l = function (e, t, n) {
            var r = t.lanes;
            if (null !== e)
                if (e.memoizedProps !== t.pendingProps || fa.current) Ro = !0;
                else {
                    if (0 === (n & r)) {
                        switch (((Ro = !1), t.tag)) {
                            case 3:
                                Uo(t), Ui();
                                break;
                            case 5:
                                Ai(t);
                                break;
                            case 1:
                                ma(t.type) && ya(t);
                                break;
                            case 4:
                                Ti(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                r = t.memoizedProps.value;
                                var a = t.type._context;
                                ua(qa, a._currentValue), (a._currentValue = r);
                                break;
                            case 13:
                                if (null !== t.memoizedState)
                                    return 0 !== (n & t.child.childLanes)
                                        ? qo(e, t, n)
                                        : (ua(Ri, 1 & Ri.current),
                                          null !== (t = nl(e, t, n))
                                              ? t.sibling
                                              : null);
                                ua(Ri, 1 & Ri.current);
                                break;
                            case 19:
                                if (
                                    ((r = 0 !== (n & t.childLanes)),
                                    0 !== (64 & e.flags))
                                ) {
                                    if (r) return tl(e, t, n);
                                    t.flags |= 64;
                                }
                                if (
                                    (null !== (a = t.memoizedState) &&
                                        ((a.rendering = null),
                                        (a.tail = null),
                                        (a.lastEffect = null)),
                                    ua(Ri, Ri.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 23:
                            case 24:
                                return (t.lanes = 0), Fo(e, t, n);
                        }
                        return nl(e, t, n);
                    }
                    Ro = 0 !== (16384 & e.flags);
                }
            else Ro = !1;
            switch (((t.lanes = 0), t.tag)) {
                case 2:
                    if (
                        ((r = t.type),
                        null !== e &&
                            ((e.alternate = null),
                            (t.alternate = null),
                            (t.flags |= 2)),
                        (e = t.pendingProps),
                        (a = pa(t, ca.current)),
                        ni(t, n),
                        (a = ro(null, t, r, e, a, n)),
                        (t.flags |= 1),
                        "object" === typeof a &&
                            null !== a &&
                            "function" === typeof a.render &&
                            void 0 === a.$$typeof)
                    ) {
                        if (
                            ((t.tag = 1),
                            (t.memoizedState = null),
                            (t.updateQueue = null),
                            ma(r))
                        ) {
                            var i = !0;
                            ya(t);
                        } else i = !1;
                        (t.memoizedState =
                            null !== a.state && void 0 !== a.state
                                ? a.state
                                : null),
                            ii(t);
                        var l = r.getDerivedStateFromProps;
                        "function" === typeof l && pi(t, r, l, e),
                            (a.updater = mi),
                            (t.stateNode = a),
                            (a._reactInternals = t),
                            yi(t, r, e, n),
                            (t = Wo(null, t, r, !0, i, n));
                    } else (t.tag = 0), Mo(null, t, a, n), (t = t.child);
                    return t;
                case 16:
                    a = t.elementType;
                    e: {
                        switch (
                            (null !== e &&
                                ((e.alternate = null),
                                (t.alternate = null),
                                (t.flags |= 2)),
                            (e = t.pendingProps),
                            (a = (i = a._init)(a._payload)),
                            (t.type = a),
                            (i = t.tag =
                                (function (e) {
                                    if ("function" === typeof e)
                                        return Hu(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === _) return 11;
                                        if (e === A) return 14;
                                    }
                                    return 2;
                                })(a)),
                            (e = Ka(a, e)),
                            i)
                        ) {
                            case 0:
                                t = Vo(null, t, a, e, n);
                                break e;
                            case 1:
                                t = Ho(null, t, a, e, n);
                                break e;
                            case 11:
                                t = zo(null, t, a, e, n);
                                break e;
                            case 14:
                                t = No(null, t, a, Ka(a.type, e), r, n);
                                break e;
                        }
                        throw Error(o(306, a, ""));
                    }
                    return t;
                case 0:
                    return (
                        (r = t.type),
                        (a = t.pendingProps),
                        Vo(e, t, r, (a = t.elementType === r ? a : Ka(r, a)), n)
                    );
                case 1:
                    return (
                        (r = t.type),
                        (a = t.pendingProps),
                        Ho(e, t, r, (a = t.elementType === r ? a : Ka(r, a)), n)
                    );
                case 3:
                    if ((Uo(t), (r = t.updateQueue), null === e || null === r))
                        throw Error(o(282));
                    if (
                        ((r = t.pendingProps),
                        (a = null !== (a = t.memoizedState) ? a.element : null),
                        oi(e, t),
                        ci(t, r, null, n),
                        (r = t.memoizedState.element) === a)
                    )
                        Ui(), (t = nl(e, t, n));
                    else {
                        if (
                            ((i = (a = t.stateNode).hydrate) &&
                                ((Ni = $r(
                                    t.stateNode.containerInfo.firstChild
                                )),
                                (zi = t),
                                (i = Di = !0)),
                            i)
                        ) {
                            if (null != (e = a.mutableSourceEagerHydrationData))
                                for (a = 0; a < e.length; a += 2)
                                    ((i = e[a])._workInProgressVersionPrimary =
                                        e[a + 1]),
                                        $i.push(i);
                            for (n = Oi(t, null, r, n), t.child = n; n; )
                                (n.flags = (-3 & n.flags) | 1024),
                                    (n = n.sibling);
                        } else Mo(e, t, r, n), Ui();
                        t = t.child;
                    }
                    return t;
                case 5:
                    return (
                        Ai(t),
                        null === e && Vi(t),
                        (r = t.type),
                        (a = t.pendingProps),
                        (i = null !== e ? e.memoizedProps : null),
                        (l = a.children),
                        Vr(r, a)
                            ? (l = null)
                            : null !== i && Vr(r, i) && (t.flags |= 16),
                        Bo(e, t),
                        Mo(e, t, l, n),
                        t.child
                    );
                case 6:
                    return null === e && Vi(t), null;
                case 13:
                    return qo(e, t, n);
                case 4:
                    return (
                        Ti(t, t.stateNode.containerInfo),
                        (r = t.pendingProps),
                        null === e
                            ? (t.child = Si(t, null, r, n))
                            : Mo(e, t, r, n),
                        t.child
                    );
                case 11:
                    return (
                        (r = t.type),
                        (a = t.pendingProps),
                        zo(e, t, r, (a = t.elementType === r ? a : Ka(r, a)), n)
                    );
                case 7:
                    return Mo(e, t, t.pendingProps, n), t.child;
                case 8:
                case 12:
                    return Mo(e, t, t.pendingProps.children, n), t.child;
                case 10:
                    e: {
                        (r = t.type._context),
                            (a = t.pendingProps),
                            (l = t.memoizedProps),
                            (i = a.value);
                        var u = t.type._context;
                        if (
                            (ua(qa, u._currentValue),
                            (u._currentValue = i),
                            null !== l)
                        )
                            if (
                                ((u = l.value),
                                0 ===
                                    (i = lr(u, i)
                                        ? 0
                                        : 0 |
                                          ("function" ===
                                          typeof r._calculateChangedBits
                                              ? r._calculateChangedBits(u, i)
                                              : 1073741823)))
                            ) {
                                if (l.children === a.children && !fa.current) {
                                    t = nl(e, t, n);
                                    break e;
                                }
                            } else
                                for (
                                    null !== (u = t.child) && (u.return = t);
                                    null !== u;

                                ) {
                                    var s = u.dependencies;
                                    if (null !== s) {
                                        l = u.child;
                                        for (
                                            var c = s.firstContext;
                                            null !== c;

                                        ) {
                                            if (
                                                c.context === r &&
                                                0 !== (c.observedBits & i)
                                            ) {
                                                1 === u.tag &&
                                                    (((c = li(
                                                        -1,
                                                        n & -n
                                                    )).tag = 2),
                                                    ui(u, c)),
                                                    (u.lanes |= n),
                                                    null !==
                                                        (c = u.alternate) &&
                                                        (c.lanes |= n),
                                                    ti(u.return, n),
                                                    (s.lanes |= n);
                                                break;
                                            }
                                            c = c.next;
                                        }
                                    } else
                                        l =
                                            10 === u.tag && u.type === t.type
                                                ? null
                                                : u.child;
                                    if (null !== l) l.return = u;
                                    else
                                        for (l = u; null !== l; ) {
                                            if (l === t) {
                                                l = null;
                                                break;
                                            }
                                            if (null !== (u = l.sibling)) {
                                                (u.return = l.return), (l = u);
                                                break;
                                            }
                                            l = l.return;
                                        }
                                    u = l;
                                }
                        Mo(e, t, a.children, n), (t = t.child);
                    }
                    return t;
                case 9:
                    return (
                        (a = t.type),
                        (r = (i = t.pendingProps).children),
                        ni(t, n),
                        (r = r((a = ri(a, i.unstable_observedBits)))),
                        (t.flags |= 1),
                        Mo(e, t, r, n),
                        t.child
                    );
                case 14:
                    return (
                        (i = Ka((a = t.type), t.pendingProps)),
                        No(e, t, a, (i = Ka(a.type, i)), r, n)
                    );
                case 15:
                    return Do(e, t, t.type, t.pendingProps, r, n);
                case 17:
                    return (
                        (r = t.type),
                        (a = t.pendingProps),
                        (a = t.elementType === r ? a : Ka(r, a)),
                        null !== e &&
                            ((e.alternate = null),
                            (t.alternate = null),
                            (t.flags |= 2)),
                        (t.tag = 1),
                        ma(r) ? ((e = !0), ya(t)) : (e = !1),
                        ni(t, n),
                        vi(t, r, a),
                        yi(t, r, a, n),
                        Wo(null, t, r, !0, e, n)
                    );
                case 19:
                    return tl(e, t, n);
                case 23:
                case 24:
                    return Fo(e, t, n);
            }
            throw Error(o(156, t.tag));
        }),
            (ts.prototype.render = function (e) {
                Gu(e, this._internalRoot, null, null);
            }),
            (ts.prototype.unmount = function () {
                var e = this._internalRoot,
                    t = e.containerInfo;
                Gu(null, e, null, function () {
                    t[Gr] = null;
                });
            }),
            (tt = function (e) {
                13 === e.tag && (fu(e, 4, su()), es(e, 4));
            }),
            (nt = function (e) {
                13 === e.tag && (fu(e, 67108864, su()), es(e, 67108864));
            }),
            (rt = function (e) {
                if (13 === e.tag) {
                    var t = su(),
                        n = cu(e);
                    fu(e, n, t), es(e, n);
                }
            }),
            (at = function (e, t) {
                return t();
            }),
            (Ee = function (e, t, n) {
                switch (t) {
                    case "input":
                        if (
                            (ne(e, n),
                            (t = n.name),
                            "radio" === n.type && null != t)
                        ) {
                            for (n = e; n.parentNode; ) n = n.parentNode;
                            for (
                                n = n.querySelectorAll(
                                    "input[name=" +
                                        JSON.stringify("" + t) +
                                        '][type="radio"]'
                                ),
                                    t = 0;
                                t < n.length;
                                t++
                            ) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var a = na(r);
                                    if (!a) throw Error(o(90));
                                    G(r), ne(r, a);
                                }
                            }
                        }
                        break;
                    case "textarea":
                        se(e, n);
                        break;
                    case "select":
                        null != (t = n.value) && oe(e, !!n.multiple, t, !1);
                }
            }),
            (Ie = gu),
            (Re = function (e, t, n, r, a) {
                var i = _l;
                _l |= 4;
                try {
                    return Wa(98, e.bind(null, t, n, r, a));
                } finally {
                    0 === (_l = i) && (Ul(), $a());
                }
            }),
            (Me = function () {
                0 === (49 & _l) &&
                    ((function () {
                        if (null !== tu) {
                            var e = tu;
                            (tu = null),
                                e.forEach(function (e) {
                                    (e.expiredLanes |= 24 & e.pendingLanes),
                                        pu(e, Ba());
                                });
                        }
                        $a();
                    })(),
                    Au());
            }),
            (ze = function (e, t) {
                var n = _l;
                _l |= 2;
                try {
                    return e(t);
                } finally {
                    0 === (_l = n) && (Ul(), $a());
                }
            });
        var is = { Events: [ea, ta, na, Le, Ae, Au, { current: !1 }] },
            os = {
                findFiberByHostInstance: Jr,
                bundleType: 0,
                version: "17.0.2",
                rendererPackageName: "react-dom",
            },
            ls = {
                bundleType: os.bundleType,
                version: os.version,
                rendererPackageName: os.rendererPackageName,
                rendererConfig: os.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: x.ReactCurrentDispatcher,
                findHostInstanceByFiber: function (e) {
                    return null === (e = Je(e)) ? null : e.stateNode;
                },
                findFiberByHostInstance:
                    os.findFiberByHostInstance ||
                    function () {
                        return null;
                    },
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
            };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!us.isDisabled && us.supportsFiber)
                try {
                    (wa = us.inject(ls)), (xa = us);
                } catch (ve) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = is),
            (t.createPortal = as),
            (t.findDOMNode = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render) throw Error(o(188));
                    throw Error(o(268, Object.keys(e)));
                }
                return (e = null === (e = Je(t)) ? null : e.stateNode);
            }),
            (t.flushSync = function (e, t) {
                var n = _l;
                if (0 !== (48 & n)) return e(t);
                _l |= 1;
                try {
                    if (e) return Wa(99, e.bind(null, t));
                } finally {
                    (_l = n), $a();
                }
            }),
            (t.hydrate = function (e, t, n) {
                if (!ns(t)) throw Error(o(200));
                return rs(null, e, t, !0, n);
            }),
            (t.render = function (e, t, n) {
                if (!ns(t)) throw Error(o(200));
                return rs(null, e, t, !1, n);
            }),
            (t.unmountComponentAtNode = function (e) {
                if (!ns(e)) throw Error(o(40));
                return (
                    !!e._reactRootContainer &&
                    (yu(function () {
                        rs(null, null, e, !1, function () {
                            (e._reactRootContainer = null), (e[Gr] = null);
                        });
                    }),
                    !0)
                );
            }),
            (t.unstable_batchedUpdates = gu),
            (t.unstable_createPortal = function (e, t) {
                return as(
                    e,
                    t,
                    2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null
                );
            }),
            (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                if (!ns(n)) throw Error(o(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(o(38));
                return rs(e, t, n, !1, r);
            }),
            (t.version = "17.0.2");
    },
    function (e, t, n) {
        "use strict";
        e.exports = n(18);
    },
    function (e, t, n) {
        "use strict";
        var r, a, i, o;
        if (
            "object" === typeof performance &&
            "function" === typeof performance.now
        ) {
            var l = performance;
            t.unstable_now = function () {
                return l.now();
            };
        } else {
            var u = Date,
                s = u.now();
            t.unstable_now = function () {
                return u.now() - s;
            };
        }
        if (
            "undefined" === typeof window ||
            "function" !== typeof MessageChannel
        ) {
            var c = null,
                f = null,
                d = function e() {
                    if (null !== c)
                        try {
                            var n = t.unstable_now();
                            c(!0, n), (c = null);
                        } catch (r) {
                            throw (setTimeout(e, 0), r);
                        }
                };
            (r = function (e) {
                null !== c ? setTimeout(r, 0, e) : ((c = e), setTimeout(d, 0));
            }),
                (a = function (e, t) {
                    f = setTimeout(e, t);
                }),
                (i = function () {
                    clearTimeout(f);
                }),
                (t.unstable_shouldYield = function () {
                    return !1;
                }),
                (o = t.unstable_forceFrameRate = function () {});
        } else {
            var p = window.setTimeout,
                m = window.clearTimeout;
            if ("undefined" !== typeof console) {
                var h = window.cancelAnimationFrame;
                "function" !== typeof window.requestAnimationFrame &&
                    console.error(
                        "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                    ),
                    "function" !== typeof h &&
                        console.error(
                            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                        );
            }
            var v = !1,
                g = null,
                y = -1,
                b = 5,
                w = 0;
            (t.unstable_shouldYield = function () {
                return t.unstable_now() >= w;
            }),
                (o = function () {}),
                (t.unstable_forceFrameRate = function (e) {
                    0 > e || 125 < e
                        ? console.error(
                              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                          )
                        : (b = 0 < e ? Math.floor(1e3 / e) : 5);
                });
            var x = new MessageChannel(),
                k = x.port2;
            (x.port1.onmessage = function () {
                if (null !== g) {
                    var e = t.unstable_now();
                    w = e + b;
                    try {
                        g(!0, e) ? k.postMessage(null) : ((v = !1), (g = null));
                    } catch (n) {
                        throw (k.postMessage(null), n);
                    }
                } else v = !1;
            }),
                (r = function (e) {
                    (g = e), v || ((v = !0), k.postMessage(null));
                }),
                (a = function (e, n) {
                    y = p(function () {
                        e(t.unstable_now());
                    }, n);
                }),
                (i = function () {
                    m(y), (y = -1);
                });
        }
        function S(e, t) {
            var n = e.length;
            e.push(t);
            e: for (;;) {
                var r = (n - 1) >>> 1,
                    a = e[r];
                if (!(void 0 !== a && 0 < j(a, t))) break e;
                (e[r] = t), (e[n] = a), (n = r);
            }
        }
        function O(e) {
            return void 0 === (e = e[0]) ? null : e;
        }
        function C(e) {
            var t = e[0];
            if (void 0 !== t) {
                var n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, a = e.length; r < a; ) {
                        var i = 2 * (r + 1) - 1,
                            o = e[i],
                            l = i + 1,
                            u = e[l];
                        if (void 0 !== o && 0 > j(o, n))
                            void 0 !== u && 0 > j(u, o)
                                ? ((e[r] = u), (e[l] = n), (r = l))
                                : ((e[r] = o), (e[i] = n), (r = i));
                        else {
                            if (!(void 0 !== u && 0 > j(u, n))) break e;
                            (e[r] = u), (e[l] = n), (r = l);
                        }
                    }
                }
                return t;
            }
            return null;
        }
        function j(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id;
        }
        var E = [],
            P = [],
            _ = 1,
            T = null,
            L = 3,
            A = !1,
            I = !1,
            R = !1;
        function M(e) {
            for (var t = O(P); null !== t; ) {
                if (null === t.callback) C(P);
                else {
                    if (!(t.startTime <= e)) break;
                    C(P), (t.sortIndex = t.expirationTime), S(E, t);
                }
                t = O(P);
            }
        }
        function z(e) {
            if (((R = !1), M(e), !I))
                if (null !== O(E)) (I = !0), r(N);
                else {
                    var t = O(P);
                    null !== t && a(z, t.startTime - e);
                }
        }
        function N(e, n) {
            (I = !1), R && ((R = !1), i()), (A = !0);
            var r = L;
            try {
                for (
                    M(n), T = O(E);
                    null !== T &&
                    (!(T.expirationTime > n) ||
                        (e && !t.unstable_shouldYield()));

                ) {
                    var o = T.callback;
                    if ("function" === typeof o) {
                        (T.callback = null), (L = T.priorityLevel);
                        var l = o(T.expirationTime <= n);
                        (n = t.unstable_now()),
                            "function" === typeof l
                                ? (T.callback = l)
                                : T === O(E) && C(E),
                            M(n);
                    } else C(E);
                    T = O(E);
                }
                if (null !== T) var u = !0;
                else {
                    var s = O(P);
                    null !== s && a(z, s.startTime - n), (u = !1);
                }
                return u;
            } finally {
                (T = null), (L = r), (A = !1);
            }
        }
        var D = o;
        (t.unstable_IdlePriority = 5),
            (t.unstable_ImmediatePriority = 1),
            (t.unstable_LowPriority = 4),
            (t.unstable_NormalPriority = 3),
            (t.unstable_Profiling = null),
            (t.unstable_UserBlockingPriority = 2),
            (t.unstable_cancelCallback = function (e) {
                e.callback = null;
            }),
            (t.unstable_continueExecution = function () {
                I || A || ((I = !0), r(N));
            }),
            (t.unstable_getCurrentPriorityLevel = function () {
                return L;
            }),
            (t.unstable_getFirstCallbackNode = function () {
                return O(E);
            }),
            (t.unstable_next = function (e) {
                switch (L) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = L;
                }
                var n = L;
                L = t;
                try {
                    return e();
                } finally {
                    L = n;
                }
            }),
            (t.unstable_pauseExecution = function () {}),
            (t.unstable_requestPaint = D),
            (t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3;
                }
                var n = L;
                L = e;
                try {
                    return t();
                } finally {
                    L = n;
                }
            }),
            (t.unstable_scheduleCallback = function (e, n, o) {
                var l = t.unstable_now();
                switch (
                    ("object" === typeof o && null !== o
                        ? (o =
                              "number" === typeof (o = o.delay) && 0 < o
                                  ? l + o
                                  : l)
                        : (o = l),
                    e)
                ) {
                    case 1:
                        var u = -1;
                        break;
                    case 2:
                        u = 250;
                        break;
                    case 5:
                        u = 1073741823;
                        break;
                    case 4:
                        u = 1e4;
                        break;
                    default:
                        u = 5e3;
                }
                return (
                    (e = {
                        id: _++,
                        callback: n,
                        priorityLevel: e,
                        startTime: o,
                        expirationTime: (u = o + u),
                        sortIndex: -1,
                    }),
                    o > l
                        ? ((e.sortIndex = o),
                          S(P, e),
                          null === O(E) &&
                              e === O(P) &&
                              (R ? i() : (R = !0), a(z, o - l)))
                        : ((e.sortIndex = u),
                          S(E, e),
                          I || A || ((I = !0), r(N))),
                    e
                );
            }),
            (t.unstable_wrapCallback = function (e) {
                var t = L;
                return function () {
                    var n = L;
                    L = t;
                    try {
                        return e.apply(this, arguments);
                    } finally {
                        L = n;
                    }
                };
            });
    },
    function (e, t, n) {
        "use strict";
        n(7);
        var r = n(0),
            a = 60103;
        if (
            ((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)
        ) {
            var i = Symbol.for;
            (a = i("react.element")), (t.Fragment = i("react.fragment"));
        }
        var o =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                    .ReactCurrentOwner,
            l = Object.prototype.hasOwnProperty,
            u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
            var r,
                i = {},
                s = null,
                c = null;
            for (r in (void 0 !== n && (s = "" + n),
            void 0 !== t.key && (s = "" + t.key),
            void 0 !== t.ref && (c = t.ref),
            t))
                l.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
            if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                    void 0 === i[r] && (i[r] = t[r]);
            return {
                $$typeof: a,
                type: e,
                key: s,
                ref: c,
                props: i,
                _owner: o.current,
            };
        }
        (t.jsx = s), (t.jsxs = s);
    },
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (r) {
            "object" === typeof window && (n = window);
        }
        e.exports = n;
    },
    function (e, t) {
        var n,
            r,
            a = (e.exports = {});
        function i() {
            throw new Error("setTimeout has not been defined");
        }
        function o() {
            throw new Error("clearTimeout has not been defined");
        }
        function l(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout)
                return (n = setTimeout), setTimeout(e, 0);
            try {
                return n(e, 0);
            } catch (t) {
                try {
                    return n.call(null, e, 0);
                } catch (t) {
                    return n.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                n = "function" === typeof setTimeout ? setTimeout : i;
            } catch (e) {
                n = i;
            }
            try {
                r = "function" === typeof clearTimeout ? clearTimeout : o;
            } catch (e) {
                r = o;
            }
        })();
        var u,
            s = [],
            c = !1,
            f = -1;
        function d() {
            c &&
                u &&
                ((c = !1),
                u.length ? (s = u.concat(s)) : (f = -1),
                s.length && p());
        }
        function p() {
            if (!c) {
                var e = l(d);
                c = !0;
                for (var t = s.length; t; ) {
                    for (u = s, s = []; ++f < t; ) u && u[f].run();
                    (f = -1), (t = s.length);
                }
                (u = null),
                    (c = !1),
                    (function (e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === o || !r) && clearTimeout)
                            return (r = clearTimeout), clearTimeout(e);
                        try {
                            r(e);
                        } catch (t) {
                            try {
                                return r.call(null, e);
                            } catch (t) {
                                return r.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function m(e, t) {
            (this.fun = e), (this.array = t);
        }
        function h() {}
        (a.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            s.push(new m(e, t)), 1 !== s.length || c || l(p);
        }),
            (m.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (a.title = "browser"),
            (a.browser = !0),
            (a.env = {}),
            (a.argv = []),
            (a.version = ""),
            (a.versions = {}),
            (a.on = h),
            (a.addListener = h),
            (a.once = h),
            (a.off = h),
            (a.removeListener = h),
            (a.removeAllListeners = h),
            (a.emit = h),
            (a.prependListener = h),
            (a.prependOnceListener = h),
            (a.listeners = function (e) {
                return [];
            }),
            (a.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (a.cwd = function () {
                return "/";
            }),
            (a.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (a.umask = function () {
                return 0;
            });
    },
    function (e, t, n) {
        "use strict";
        var r = 60103,
            a = 60106,
            i = 60107,
            o = 60108,
            l = 60114,
            u = 60109,
            s = 60110,
            c = 60112,
            f = 60113,
            d = 60120,
            p = 60115,
            m = 60116,
            h = 60121,
            v = 60122,
            g = 60117,
            y = 60129,
            b = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
            var w = Symbol.for;
            (r = w("react.element")),
                (a = w("react.portal")),
                (i = w("react.fragment")),
                (o = w("react.strict_mode")),
                (l = w("react.profiler")),
                (u = w("react.provider")),
                (s = w("react.context")),
                (c = w("react.forward_ref")),
                (f = w("react.suspense")),
                (d = w("react.suspense_list")),
                (p = w("react.memo")),
                (m = w("react.lazy")),
                (h = w("react.block")),
                (v = w("react.server.block")),
                (g = w("react.fundamental")),
                (y = w("react.debug_trace_mode")),
                (b = w("react.legacy_hidden"));
        }
        function x(e) {
            if ("object" === typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case r:
                        switch ((e = e.type)) {
                            case i:
                            case l:
                            case o:
                            case f:
                            case d:
                                return e;
                            default:
                                switch ((e = e && e.$$typeof)) {
                                    case s:
                                    case c:
                                    case m:
                                    case p:
                                    case u:
                                        return e;
                                    default:
                                        return t;
                                }
                        }
                    case a:
                        return t;
                }
            }
        }
        var k = u,
            S = r,
            O = c,
            C = i,
            j = m,
            E = p,
            P = a,
            _ = l,
            T = o,
            L = f;
        (t.ContextConsumer = s),
            (t.ContextProvider = k),
            (t.Element = S),
            (t.ForwardRef = O),
            (t.Fragment = C),
            (t.Lazy = j),
            (t.Memo = E),
            (t.Portal = P),
            (t.Profiler = _),
            (t.StrictMode = T),
            (t.Suspense = L),
            (t.isAsyncMode = function () {
                return !1;
            }),
            (t.isConcurrentMode = function () {
                return !1;
            }),
            (t.isContextConsumer = function (e) {
                return x(e) === s;
            }),
            (t.isContextProvider = function (e) {
                return x(e) === u;
            }),
            (t.isElement = function (e) {
                return "object" === typeof e && null !== e && e.$$typeof === r;
            }),
            (t.isForwardRef = function (e) {
                return x(e) === c;
            }),
            (t.isFragment = function (e) {
                return x(e) === i;
            }),
            (t.isLazy = function (e) {
                return x(e) === m;
            }),
            (t.isMemo = function (e) {
                return x(e) === p;
            }),
            (t.isPortal = function (e) {
                return x(e) === a;
            }),
            (t.isProfiler = function (e) {
                return x(e) === l;
            }),
            (t.isStrictMode = function (e) {
                return x(e) === o;
            }),
            (t.isSuspense = function (e) {
                return x(e) === f;
            }),
            (t.isValidElementType = function (e) {
                return (
                    "string" === typeof e ||
                    "function" === typeof e ||
                    e === i ||
                    e === l ||
                    e === y ||
                    e === o ||
                    e === f ||
                    e === d ||
                    e === b ||
                    ("object" === typeof e &&
                        null !== e &&
                        (e.$$typeof === m ||
                            e.$$typeof === p ||
                            e.$$typeof === u ||
                            e.$$typeof === s ||
                            e.$$typeof === c ||
                            e.$$typeof === g ||
                            e.$$typeof === h ||
                            e[0] === v))
                );
            }),
            (t.typeOf = x);
    },
    function (e, t, n) {
        "use strict";
        e.exports = n(24);
    },
    function (e, t, n) {
        "use strict";
        var r = "function" === typeof Symbol && Symbol.for,
            a = r ? Symbol.for("react.element") : 60103,
            i = r ? Symbol.for("react.portal") : 60106,
            o = r ? Symbol.for("react.fragment") : 60107,
            l = r ? Symbol.for("react.strict_mode") : 60108,
            u = r ? Symbol.for("react.profiler") : 60114,
            s = r ? Symbol.for("react.provider") : 60109,
            c = r ? Symbol.for("react.context") : 60110,
            f = r ? Symbol.for("react.async_mode") : 60111,
            d = r ? Symbol.for("react.concurrent_mode") : 60111,
            p = r ? Symbol.for("react.forward_ref") : 60112,
            m = r ? Symbol.for("react.suspense") : 60113,
            h = r ? Symbol.for("react.suspense_list") : 60120,
            v = r ? Symbol.for("react.memo") : 60115,
            g = r ? Symbol.for("react.lazy") : 60116,
            y = r ? Symbol.for("react.block") : 60121,
            b = r ? Symbol.for("react.fundamental") : 60117,
            w = r ? Symbol.for("react.responder") : 60118,
            x = r ? Symbol.for("react.scope") : 60119;
        function k(e) {
            if ("object" === typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case a:
                        switch ((e = e.type)) {
                            case f:
                            case d:
                            case o:
                            case u:
                            case l:
                            case m:
                                return e;
                            default:
                                switch ((e = e && e.$$typeof)) {
                                    case c:
                                    case p:
                                    case g:
                                    case v:
                                    case s:
                                        return e;
                                    default:
                                        return t;
                                }
                        }
                    case i:
                        return t;
                }
            }
        }
        function S(e) {
            return k(e) === d;
        }
        (t.AsyncMode = f),
            (t.ConcurrentMode = d),
            (t.ContextConsumer = c),
            (t.ContextProvider = s),
            (t.Element = a),
            (t.ForwardRef = p),
            (t.Fragment = o),
            (t.Lazy = g),
            (t.Memo = v),
            (t.Portal = i),
            (t.Profiler = u),
            (t.StrictMode = l),
            (t.Suspense = m),
            (t.isAsyncMode = function (e) {
                return S(e) || k(e) === f;
            }),
            (t.isConcurrentMode = S),
            (t.isContextConsumer = function (e) {
                return k(e) === c;
            }),
            (t.isContextProvider = function (e) {
                return k(e) === s;
            }),
            (t.isElement = function (e) {
                return "object" === typeof e && null !== e && e.$$typeof === a;
            }),
            (t.isForwardRef = function (e) {
                return k(e) === p;
            }),
            (t.isFragment = function (e) {
                return k(e) === o;
            }),
            (t.isLazy = function (e) {
                return k(e) === g;
            }),
            (t.isMemo = function (e) {
                return k(e) === v;
            }),
            (t.isPortal = function (e) {
                return k(e) === i;
            }),
            (t.isProfiler = function (e) {
                return k(e) === u;
            }),
            (t.isStrictMode = function (e) {
                return k(e) === l;
            }),
            (t.isSuspense = function (e) {
                return k(e) === m;
            }),
            (t.isValidElementType = function (e) {
                return (
                    "string" === typeof e ||
                    "function" === typeof e ||
                    e === o ||
                    e === d ||
                    e === u ||
                    e === l ||
                    e === m ||
                    e === h ||
                    ("object" === typeof e &&
                        null !== e &&
                        (e.$$typeof === g ||
                            e.$$typeof === v ||
                            e.$$typeof === s ||
                            e.$$typeof === c ||
                            e.$$typeof === p ||
                            e.$$typeof === b ||
                            e.$$typeof === w ||
                            e.$$typeof === x ||
                            e.$$typeof === y))
                );
            }),
            (t.typeOf = k);
    },
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0),
            a = n.n(r),
            i = n(10),
            o = n.n(i),
            l = n.p + "static/media/olimpiade-statsitika.40c86a2d.png",
            u = n.p + "static/media/infografis.e7a3403a.png",
            s = {
                lomba: [
                    { imageSrc: l, title: "Olimpiade Statistika" },
                    { imageSrc: u, title: "Lomba Infografis Statistika" },
                ],
                faqs: [
                    {
                        question:
                            "Apakah mahasiswa boleh mendaftar pada 2 cabang lomba sekaligus?",
                        answer: "Mahasiswa diperbolehkan mendaftar pada kedua cabang lomba sekaligus, dengan catatan jika keduanya masuk final hanya boleh memilih salah satu lomba saja.",
                    },
                    {
                        question:
                            " Jika sudah melalui sidang skripsi, tapi status kartu mahasiswa masih aktif sampai akhir masa pendaftaran apakah masih boleh mengikuti lomba?",
                        answer: "Peserta diharuskan berstatus mahasiswa aktif sampai kegiatan EPSILON berakhir.",
                    },
                    {
                        question:
                            "Bagaimana saya mengetahui bahwa pendaftaran tim saya berhasil dilakukan?",
                        answer: "Peserta bisa mengecek notifikasi di email yang didaftarkan atau melihat status akun di website.",
                    },
                    {
                        question:
                            "Bagaimana jika terdapat kendala saat akan mengumpulkan jawaban melalui website?",
                        answer: "Jawaban dapat dikirimkan melalui email EPSILON dan konfirmasi kepada narahubung perlombaan terkait.",
                    },
                    {
                        question:
                            "Jika belum memiliki kartu tanda mahasiswa, apakah boleh diganti dengan kartu identitas lainnya?",
                        answer: "Boleh menggunakan kartu atau surat tanda mahasiswa yang menyatakan bahwa benar peserta merupakan mahasiswa aktif di perguruan tinggi.",
                    },
                    {
                        question:
                            "Apakah peserta diperbolehkan mengganti anggota tim dalam tahapan perlombaan?",
                        answer: "Peserta tidak diperbolehkan mengganti atau menukar anggota tim.",
                    },
                    {
                        question:
                            "Apakah diperbolehkan jika dalam satu tim terdiri dari 2 anggota yang berasal dari jurusan berbeda?",
                        answer: "Boleh. Asalkan dalam satu tim tersebut berasal dari perguruan tinggi yang sama.",
                    },
                    {
                        question:
                            "Bagaimana jika kami memiliki kesulitan atau pertanyaan lain selama proses pendaftaran?",
                        answer: "Silakan hubungi kami melalui contact person.",
                    },
                ],
                link: [
                    { name: "Home", url: "/" },
                    { name: "Lomba", url: "#lomba" },
                    { name: "Semnas", url: "#semnas" },
                    { name: "FAQ", url: "#faq" },
                ],
                timeline: [
                    {
                        title: "Pendaftaran Lomba Olimpiade Statistika",
                        date: "1 Agustus - 26 Agustus 2022",
                    },
                    {
                        title: "Pendaftaran Lomba Infografis Statistika",
                        date: "1 Agustus - 31 Agustus 2022",
                    },
                    {
                        title: "Babak penyisihan Lomba Infografis Statistika",
                        date: "3 Agustus - 2 September 2022",
                    },
                    {
                        title: "Opening Ceremony EPSILON 2022",
                        date: "28 Agustus 2022",
                    },
                    {
                        title: "Babak Penyisihan Olimpiade Statistika",
                        date: "28 Agustus 2022",
                    },
                    {
                        title: "Pengumuman Hasil Babak Penyisihan Olimpiade Statistika",
                        date: "31 Agustus 2022",
                    },
                    {
                        title: "Babak Semifinal Olimpiade Statistika",
                        date: "11 September 2022",
                    },
                    {
                        title: "Pengumuman Hasil Babak Penyisihan Lomba Infografis Statistika",
                        date: "12 September 2022",
                    },
                    {
                        title: "Pengumuman Hasil Babak Semifinal Olimpiade Statistika",
                        date: "17 September 2022",
                    },
                    {
                        title: "Pengumuman Topik Analisis Data",
                        date: "23 September 2022",
                    },
                    {
                        title: "Pengerjaan Analisis Data",
                        date: "23 September - 29 September 2022",
                    },
                    {
                        title: "Technical Meeting",
                        date: "24 September 2022 dan 26 September 2022",
                    },
                    {
                        title: "Babak Final Olimpiade Statistika dan Lomba Infografis Statistika",
                        date: "1 Oktober 2022",
                    },
                    {
                        title: "Pengumuman hasil babak final pada Charity Concert DN",
                        date: "2 Oktober 2022",
                    },
                ],
            },
            c = n(1),
            f = Object(r.createContext)(),
            d = function (e) {
                return Object(c.jsx)(f.Provider, {
                    value: s,
                    children: e.children,
                });
            },
            p = f;
        function m(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? h(Object(n), !0).forEach(function (t) {
                          m(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : h(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                          );
                      });
            }
            return e;
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function y(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if (
                        "undefined" !== typeof Symbol &&
                        Symbol.iterator in Object(e)
                    ) {
                        var n = [],
                            r = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (
                                var o, l = e[Symbol.iterator]();
                                !(r = (o = l.next()).done) &&
                                (n.push(o.value), !t || n.length !== t);
                                r = !0
                            );
                        } catch (u) {
                            (a = !0), (i = u);
                        } finally {
                            try {
                                r || null == l.return || l.return();
                            } finally {
                                if (a) throw i;
                            }
                        }
                        return n;
                    }
                })(e, t) ||
                (function (e, t) {
                    if (e) {
                        if ("string" === typeof e) return g(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                            "Object" === n &&
                                e.constructor &&
                                (n = e.constructor.name),
                            "Map" === n || "Set" === n
                                ? Array.from(e)
                                : "Arguments" === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n
                                  )
                                ? g(e, t)
                                : void 0
                        );
                    }
                })(e, t) ||
                (function () {
                    throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                })()
            );
        }
        var b = n(2),
            w = function (e, t) {
                return (w =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t)
                            Object.prototype.hasOwnProperty.call(t, n) &&
                                (e[n] = t[n]);
                    })(e, t);
            };
        function x(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError(
                    "Class extends value " +
                        String(t) +
                        " is not a constructor or null"
                );
            function n() {
                this.constructor = e;
            }
            w(e, t),
                (e.prototype =
                    null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
        }
        var k = function () {
            return (k =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in (t = arguments[n]))
                            Object.prototype.hasOwnProperty.call(t, a) &&
                                (e[a] = t[a]);
                    return e;
                }).apply(this, arguments);
        };
        function S(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                    t.indexOf(r) < 0 &&
                    (n[r] = e[r]);
            if (
                null != e &&
                "function" === typeof Object.getOwnPropertySymbols
            ) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    t.indexOf(r[a]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                        (n[r[a]] = e[r[a]]);
            }
            return n;
        }
        Object.create;
        function O(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
                a,
                i = n.call(e),
                o = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    o.push(r.value);
            } catch (l) {
                a = { error: l };
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i);
                } finally {
                    if (a) throw a.error;
                }
            }
            return o;
        }
        function C(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, a = 0, i = t.length; a < i; a++)
                    (!r && a in t) ||
                        (r || (r = Array.prototype.slice.call(t, 0, a)),
                        (r[a] = t[a]));
            return e.concat(r || t);
        }
        Object.create;
        var j = function (e) {
                return {
                    isEnabled: function (t) {
                        return e.some(function (e) {
                            return !!t[e];
                        });
                    },
                };
            },
            E = {
                measureLayout: j([
                    "layout",
                    "layoutId",
                    "drag",
                    "_layoutResetTransform",
                ]),
                animation: j([
                    "animate",
                    "exit",
                    "variants",
                    "whileHover",
                    "whileTap",
                    "whileFocus",
                    "whileDrag",
                ]),
                exit: j(["exit"]),
                drag: j(["drag", "dragControls"]),
                focus: j(["whileFocus"]),
                hover: j(["whileHover", "onHoverStart", "onHoverEnd"]),
                tap: j(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                pan: j([
                    "onPan",
                    "onPanStart",
                    "onPanSessionStart",
                    "onPanEnd",
                ]),
                layoutAnimation: j(["layout", "layoutId"]),
            };
        var P = Object(r.createContext)({ strict: !1 }),
            _ = Object.keys(E),
            T = _.length;
        var L = Object(r.createContext)({
                transformPagePoint: function (e) {
                    return e;
                },
                isStatic: !1,
            }),
            A = Object(r.createContext)({});
        var I = Object(r.createContext)(null);
        function R(e) {
            var t = Object(r.useRef)(null);
            return null === t.current && (t.current = e()), t.current;
        }
        function M() {
            var e = Object(r.useContext)(I);
            if (null === e) return [!0, null];
            var t = e.isPresent,
                n = e.onExitComplete,
                a = e.register,
                i = F();
            Object(r.useEffect)(function () {
                return a(i);
            }, []);
            return !t && n
                ? [
                      !1,
                      function () {
                          return null === n || void 0 === n ? void 0 : n(i);
                      },
                  ]
                : [!0];
        }
        function z(e) {
            return null === e || e.isPresent;
        }
        var N = 0,
            D = function () {
                return N++;
            },
            F = function () {
                return R(D);
            },
            B = Object(r.createContext)(null),
            V = "undefined" !== typeof window,
            H = V ? r.useLayoutEffect : r.useEffect;
        function W(e, t, n, a) {
            var i = Object(r.useContext)(L),
                o = Object(r.useContext)(P),
                l = Object(r.useContext)(A).visualElement,
                u = Object(r.useContext)(I),
                s = (function (e) {
                    var t = e.layoutId,
                        n = Object(r.useContext)(B);
                    return n && void 0 !== t ? n + "-" + t : t;
                })(n),
                c = Object(r.useRef)(void 0);
            a || (a = o.renderer),
                !c.current &&
                    a &&
                    (c.current = a(e, {
                        visualState: t,
                        parent: l,
                        props: k(k({}, n), { layoutId: s }),
                        presenceId: null === u || void 0 === u ? void 0 : u.id,
                        blockInitialAnimation:
                            !1 ===
                            (null === u || void 0 === u ? void 0 : u.initial),
                    }));
            var f = c.current;
            return (
                H(function () {
                    f &&
                        (f.setProps(k(k(k({}, i), n), { layoutId: s })),
                        (f.isPresent = z(u)),
                        (f.isPresenceRoot =
                            !l ||
                            l.presenceId !==
                                (null === u || void 0 === u ? void 0 : u.id)),
                        f.syncRender());
                }),
                Object(r.useEffect)(function () {
                    var e;
                    f &&
                        (null === (e = f.animationState) ||
                            void 0 === e ||
                            e.animateChanges());
                }),
                H(function () {
                    return function () {
                        return null === f || void 0 === f
                            ? void 0
                            : f.notifyUnmount();
                    };
                }, []),
                f
            );
        }
        function U(e) {
            return (
                "object" === typeof e &&
                Object.prototype.hasOwnProperty.call(e, "current")
            );
        }
        function $(e) {
            return Array.isArray(e);
        }
        function Y(e) {
            return "string" === typeof e || $(e);
        }
        function X(e, t, n, r, a) {
            var i;
            return (
                void 0 === r && (r = {}),
                void 0 === a && (a = {}),
                "string" === typeof t &&
                    (t =
                        null === (i = e.variants) || void 0 === i
                            ? void 0
                            : i[t]),
                "function" === typeof t
                    ? t(null !== n && void 0 !== n ? n : e.custom, r, a)
                    : t
            );
        }
        function K(e, t, n) {
            var r = e.getProps();
            return X(
                r,
                t,
                null !== n && void 0 !== n ? n : r.custom,
                (function (e) {
                    var t = {};
                    return (
                        e.forEachValue(function (e, n) {
                            return (t[n] = e.get());
                        }),
                        t
                    );
                })(e),
                (function (e) {
                    var t = {};
                    return (
                        e.forEachValue(function (e, n) {
                            return (t[n] = e.getVelocity());
                        }),
                        t
                    );
                })(e)
            );
        }
        function q(e) {
            var t;
            return (
                "function" ===
                    typeof (null === (t = e.animate) || void 0 === t
                        ? void 0
                        : t.start) ||
                Y(e.initial) ||
                Y(e.animate) ||
                Y(e.whileHover) ||
                Y(e.whileDrag) ||
                Y(e.whileTap) ||
                Y(e.whileFocus) ||
                Y(e.exit)
            );
        }
        function Q(e) {
            return Boolean(q(e) || e.variants);
        }
        function G(e, t) {
            var n = (function (e, t) {
                    if (q(e)) {
                        var n = e.initial,
                            r = e.animate;
                        return {
                            initial: !1 === n || Y(n) ? n : void 0,
                            animate: Y(r) ? r : void 0,
                        };
                    }
                    return !1 !== e.inherit ? t : {};
                })(e, Object(r.useContext)(A)),
                a = n.initial,
                i = n.animate;
            return Object(r.useMemo)(
                function () {
                    return { initial: a, animate: i };
                },
                t ? [Z(a), Z(i)] : []
            );
        }
        function Z(e) {
            return Array.isArray(e) ? e.join(" ") : e;
        }
        function J(e) {
            var t = e.preloadedFeatures,
                n = e.createVisualElement,
                a = e.useRender,
                i = e.useVisualState,
                o = e.Component;
            return (
                t &&
                    (function (e) {
                        for (var t in e) {
                            var n = e[t];
                            null !== n && (E[t].Component = n);
                        }
                    })(t),
                Object(r.forwardRef)(function (e, t) {
                    var l = Object(r.useContext)(L).isStatic,
                        u = null,
                        s = G(e, l),
                        c = i(e, l);
                    return (
                        !l &&
                            V &&
                            ((s.visualElement = W(o, c, e, n)),
                            (u = (function (e, t, n) {
                                var a = [];
                                if ((Object(r.useContext)(P), !t)) return null;
                                for (var i = 0; i < T; i++) {
                                    var o = _[i],
                                        l = E[o],
                                        u = l.isEnabled,
                                        s = l.Component;
                                    u(e) &&
                                        s &&
                                        a.push(
                                            r.createElement(
                                                s,
                                                k({ key: o }, e, {
                                                    visualElement: t,
                                                })
                                            )
                                        );
                                }
                                return a;
                            })(e, s.visualElement))),
                        r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(
                                A.Provider,
                                { value: s },
                                a(
                                    o,
                                    e,
                                    (function (e, t, n) {
                                        return Object(r.useCallback)(
                                            function (r) {
                                                var a;
                                                r &&
                                                    (null === (a = e.mount) ||
                                                        void 0 === a ||
                                                        a.call(e, r)),
                                                    t &&
                                                        (r
                                                            ? t.mount(r)
                                                            : t.unmount()),
                                                    n &&
                                                        ("function" === typeof n
                                                            ? n(r)
                                                            : U(n) &&
                                                              (n.current = r));
                                            },
                                            [t]
                                        );
                                    })(c, s.visualElement, t),
                                    c,
                                    l
                                )
                            ),
                            u
                        )
                    );
                })
            );
        }
        function ee(e) {
            function t(t, n) {
                return void 0 === n && (n = {}), J(e(t, n));
            }
            var n = new Map();
            return new Proxy(t, {
                get: function (e, r) {
                    return n.has(r) || n.set(r, t(r)), n.get(r);
                },
            });
        }
        var te = [
            "animate",
            "circle",
            "defs",
            "desc",
            "ellipse",
            "g",
            "image",
            "line",
            "filter",
            "marker",
            "mask",
            "metadata",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "rect",
            "stop",
            "svg",
            "switch",
            "symbol",
            "text",
            "tspan",
            "use",
            "view",
        ];
        function ne(e) {
            return (
                "string" === typeof e &&
                !e.includes("-") &&
                !!(te.indexOf(e) > -1 || /[A-Z]/.test(e))
            );
        }
        var re = {};
        var ae = ["", "X", "Y", "Z"],
            ie = ["transformPerspective", "x", "y", "z"];
        function oe(e, t) {
            return ie.indexOf(e) - ie.indexOf(t);
        }
        ["translate", "scale", "rotate", "skew"].forEach(function (e) {
            return ae.forEach(function (t) {
                return ie.push(e + t);
            });
        });
        var le = new Set(ie);
        function ue(e) {
            return le.has(e);
        }
        var se = new Set(["originX", "originY", "originZ"]);
        function ce(e) {
            return se.has(e);
        }
        function fe(e, t) {
            var n = t.layout,
                r = t.layoutId;
            return (
                ue(e) ||
                ce(e) ||
                ((n || void 0 !== r) && (!!re[e] || "opacity" === e))
            );
        }
        var de = function (e) {
                return null !== e && "object" === typeof e && e.getVelocity;
            },
            pe = {
                x: "translateX",
                y: "translateY",
                z: "translateZ",
                transformPerspective: "perspective",
            };
        function me(e) {
            return e.startsWith("--");
        }
        var he = function (e, t) {
                return t && "number" === typeof e ? t.transform(e) : e;
            },
            ve = function (e, t) {
                return function (n) {
                    return Math.max(Math.min(n, t), e);
                };
            },
            ge = function (e) {
                return e % 1 ? Number(e.toFixed(5)) : e;
            },
            ye = /(-)?([\d]*\.?[\d])+/g,
            be =
                /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
            we =
                /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
        function xe(e) {
            return "string" === typeof e;
        }
        var ke = function (e) {
                return {
                    test: function (t) {
                        return (
                            xe(t) && t.endsWith(e) && 1 === t.split(" ").length
                        );
                    },
                    parse: parseFloat,
                    transform: function (t) {
                        return "" + t + e;
                    },
                };
            },
            Se = ke("deg"),
            Oe = ke("%"),
            Ce = ke("px"),
            je = ke("vh"),
            Ee = ke("vw"),
            Pe = k(k({}, Oe), {
                parse: function (e) {
                    return Oe.parse(e) / 100;
                },
                transform: function (e) {
                    return Oe.transform(100 * e);
                },
            }),
            _e = {
                test: function (e) {
                    return "number" === typeof e;
                },
                parse: parseFloat,
                transform: function (e) {
                    return e;
                },
            },
            Te = k(k({}, _e), { transform: ve(0, 1) }),
            Le = k(k({}, _e), { default: 1 }),
            Ae = k(k({}, _e), { transform: Math.round }),
            Ie = {
                borderWidth: Ce,
                borderTopWidth: Ce,
                borderRightWidth: Ce,
                borderBottomWidth: Ce,
                borderLeftWidth: Ce,
                borderRadius: Ce,
                radius: Ce,
                borderTopLeftRadius: Ce,
                borderTopRightRadius: Ce,
                borderBottomRightRadius: Ce,
                borderBottomLeftRadius: Ce,
                width: Ce,
                maxWidth: Ce,
                height: Ce,
                maxHeight: Ce,
                size: Ce,
                top: Ce,
                right: Ce,
                bottom: Ce,
                left: Ce,
                padding: Ce,
                paddingTop: Ce,
                paddingRight: Ce,
                paddingBottom: Ce,
                paddingLeft: Ce,
                margin: Ce,
                marginTop: Ce,
                marginRight: Ce,
                marginBottom: Ce,
                marginLeft: Ce,
                rotate: Se,
                rotateX: Se,
                rotateY: Se,
                rotateZ: Se,
                scale: Le,
                scaleX: Le,
                scaleY: Le,
                scaleZ: Le,
                skew: Se,
                skewX: Se,
                skewY: Se,
                distance: Ce,
                translateX: Ce,
                translateY: Ce,
                translateZ: Ce,
                x: Ce,
                y: Ce,
                z: Ce,
                perspective: Ce,
                transformPerspective: Ce,
                opacity: Te,
                originX: Pe,
                originY: Pe,
                originZ: Ce,
                zIndex: Ae,
                fillOpacity: Te,
                strokeOpacity: Te,
                numOctaves: Ae,
            };
        function Re(e, t, n, r, a, i, o, l) {
            var u,
                s = e.style,
                c = e.vars,
                f = e.transform,
                d = e.transformKeys,
                p = e.transformOrigin;
            d.length = 0;
            var m = !1,
                h = !1,
                v = !0;
            for (var g in t) {
                var y = t[g];
                if (me(g)) c[g] = y;
                else {
                    var b = Ie[g],
                        w = he(y, b);
                    if (ue(g)) {
                        if (((m = !0), (f[g] = w), d.push(g), !v)) continue;
                        y !==
                            (null !== (u = b.default) && void 0 !== u
                                ? u
                                : 0) && (v = !1);
                    } else if (ce(g)) (p[g] = w), (h = !0);
                    else if (
                        (null === n || void 0 === n ? void 0 : n.isHydrated) &&
                        (null === r || void 0 === r ? void 0 : r.isHydrated) &&
                        re[g]
                    ) {
                        var x = re[g].process(y, r, n),
                            k = re[g].applyTo;
                        if (k)
                            for (var S = k.length, O = 0; O < S; O++)
                                s[k[O]] = x;
                        else s[g] = x;
                    } else s[g] = w;
                }
            }
            r && n && o && l
                ? ((s.transform = o(r.deltaFinal, r.treeScale, m ? f : void 0)),
                  i && (s.transform = i(f, s.transform)),
                  (s.transformOrigin = l(r)))
                : (m &&
                      (s.transform = (function (e, t, n, r) {
                          var a = e.transform,
                              i = e.transformKeys,
                              o = t.enableHardwareAcceleration,
                              l = void 0 === o || o,
                              u = t.allowTransformNone,
                              s = void 0 === u || u,
                              c = "";
                          i.sort(oe);
                          for (var f = !1, d = i.length, p = 0; p < d; p++) {
                              var m = i[p];
                              (c += (pe[m] || m) + "(" + a[m] + ") "),
                                  "z" === m && (f = !0);
                          }
                          return (
                              !f && l ? (c += "translateZ(0)") : (c = c.trim()),
                              r
                                  ? (c = r(a, n ? "" : c))
                                  : s && n && (c = "none"),
                              c
                          );
                      })(e, a, v, i)),
                  h &&
                      (s.transformOrigin = (function (e) {
                          var t = e.originX,
                              n = void 0 === t ? "50%" : t,
                              r = e.originY,
                              a = void 0 === r ? "50%" : r,
                              i = e.originZ;
                          return n + " " + a + " " + (void 0 === i ? 0 : i);
                      })(p)));
        }
        var Me = function () {
            return {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {},
            };
        };
        function ze(e, t, n) {
            for (var r in t) de(t[r]) || fe(r, n) || (e[r] = t[r]);
        }
        function Ne(e, t, n) {
            var a = {};
            return (
                ze(a, e.style || {}, e),
                Object.assign(
                    a,
                    (function (e, t, n) {
                        var a = e.transformTemplate;
                        return Object(r.useMemo)(
                            function () {
                                var e = {
                                    style: {},
                                    transform: {},
                                    transformKeys: [],
                                    transformOrigin: {},
                                    vars: {},
                                };
                                Re(
                                    e,
                                    t,
                                    void 0,
                                    void 0,
                                    { enableHardwareAcceleration: !n },
                                    a
                                );
                                var r = e.style;
                                return k(k({}, e.vars), r);
                            },
                            [t]
                        );
                    })(e, t, n)
                ),
                e.transformValues && (a = e.transformValues(a)),
                a
            );
        }
        function De(e, t, n) {
            var r = {},
                a = Ne(e, t, n);
            return (
                Boolean(e.drag) &&
                    ((r.draggable = !1),
                    (a.userSelect =
                        a.WebkitUserSelect =
                        a.WebkitTouchCallout =
                            "none"),
                    (a.touchAction =
                        !0 === e.drag
                            ? "none"
                            : "pan-" + ("x" === e.drag ? "y" : "x"))),
                (r.style = a),
                r
            );
        }
        var Fe = new Set([
            "initial",
            "animate",
            "exit",
            "style",
            "variants",
            "transition",
            "transformTemplate",
            "transformValues",
            "custom",
            "inherit",
            "layout",
            "layoutId",
            "_layoutResetTransform",
            "onLayoutAnimationComplete",
            "onViewportBoxUpdate",
            "onLayoutMeasure",
            "onBeforeLayoutMeasure",
            "onAnimationStart",
            "onAnimationComplete",
            "onUpdate",
            "onDragStart",
            "onDrag",
            "onDragEnd",
            "onMeasureDragConstraints",
            "onDirectionLock",
            "onDragTransitionEnd",
            "drag",
            "dragControls",
            "dragListener",
            "dragConstraints",
            "dragDirectionLock",
            "_dragX",
            "_dragY",
            "dragElastic",
            "dragMomentum",
            "dragPropagation",
            "dragTransition",
            "whileDrag",
            "onPan",
            "onPanStart",
            "onPanEnd",
            "onPanSessionStart",
            "onTap",
            "onTapStart",
            "onTapCancel",
            "onHoverStart",
            "onHoverEnd",
            "whileFocus",
            "whileTap",
            "whileHover",
        ]);
        function Be(e) {
            return Fe.has(e);
        }
        var Ve = function (e) {
            return !Be(e);
        };
        try {
            var He = n(5).default;
            Ve = function (e) {
                return e.startsWith("on") ? !Be(e) : He(e);
            };
        } catch (Mf) {}
        function We(e, t, n) {
            return "string" === typeof e ? e : Ce.transform(t + n * e);
        }
        var Ue = function (e, t) {
                return Ce.transform(e * t);
            },
            $e = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
            Ye = { offset: "strokeDashoffset", array: "strokeDasharray" };
        function Xe(e, t, n, r, a, i, o, l) {
            var u = t.attrX,
                s = t.attrY,
                c = t.originX,
                f = t.originY,
                d = t.pathLength,
                p = t.pathSpacing,
                m = void 0 === p ? 1 : p,
                h = t.pathOffset,
                v = void 0 === h ? 0 : h;
            Re(
                e,
                S(t, [
                    "attrX",
                    "attrY",
                    "originX",
                    "originY",
                    "pathLength",
                    "pathSpacing",
                    "pathOffset",
                ]),
                n,
                r,
                a,
                i,
                o,
                l
            ),
                (e.attrs = e.style),
                (e.style = {});
            var g = e.attrs,
                y = e.style,
                b = e.dimensions,
                w = e.totalPathLength;
            g.transform &&
                (b && (y.transform = g.transform), delete g.transform),
                b &&
                    (void 0 !== c || void 0 !== f || y.transform) &&
                    (y.transformOrigin = (function (e, t, n) {
                        return We(t, e.x, e.width) + " " + We(n, e.y, e.height);
                    })(b, void 0 !== c ? c : 0.5, void 0 !== f ? f : 0.5)),
                void 0 !== u && (g.x = u),
                void 0 !== s && (g.y = s),
                void 0 !== w &&
                    void 0 !== d &&
                    (function (e, t, n, r, a, i) {
                        void 0 === r && (r = 1),
                            void 0 === a && (a = 0),
                            void 0 === i && (i = !0);
                        var o = i ? $e : Ye;
                        e[o.offset] = Ue(-a, t);
                        var l = Ue(n, t),
                            u = Ue(r, t);
                        e[o.array] = l + " " + u;
                    })(g, w, d, m, v, !1);
        }
        var Ke = function () {
            return k(
                k(
                    {},
                    {
                        style: {},
                        transform: {},
                        transformKeys: [],
                        transformOrigin: {},
                        vars: {},
                    }
                ),
                { attrs: {} }
            );
        };
        function qe(e, t) {
            var n = Object(r.useMemo)(
                function () {
                    var n = Ke();
                    return (
                        Xe(
                            n,
                            t,
                            void 0,
                            void 0,
                            { enableHardwareAcceleration: !1 },
                            e.transformTemplate
                        ),
                        k(k({}, n.attrs), { style: k({}, n.style) })
                    );
                },
                [t]
            );
            if (e.style) {
                var a = {};
                ze(a, e.style, e), (n.style = k(k({}, a), n.style));
            }
            return n;
        }
        function Qe(e) {
            void 0 === e && (e = !1);
            return function (t, n, a, i, o) {
                var l = i.latestValues,
                    u = (ne(t) ? qe : De)(n, l, o),
                    s = (function (e, t, n) {
                        var r = {};
                        for (var a in e)
                            (Ve(a) || (!0 === n && Be(a)) || (!t && !Be(a))) &&
                                (r[a] = e[a]);
                        return r;
                    })(n, "string" === typeof t, e),
                    c = k(k(k({}, s), u), { ref: a });
                return Object(r.createElement)(t, c);
            };
        }
        var Ge = /([a-z])([A-Z])/g,
            Ze = function (e) {
                return e.replace(Ge, "$1-$2").toLowerCase();
            };
        function Je(e, t) {
            var n = t.style,
                r = t.vars;
            for (var a in (Object.assign(e.style, n), r))
                e.style.setProperty(a, r[a]);
        }
        var et = new Set([
            "baseFrequency",
            "diffuseConstant",
            "kernelMatrix",
            "kernelUnitLength",
            "keySplines",
            "keyTimes",
            "limitingConeAngle",
            "markerHeight",
            "markerWidth",
            "numOctaves",
            "targetX",
            "targetY",
            "surfaceScale",
            "specularConstant",
            "specularExponent",
            "stdDeviation",
            "tableValues",
            "viewBox",
            "gradientTransform",
        ]);
        function tt(e, t) {
            for (var n in (Je(e, t), t.attrs))
                e.setAttribute(et.has(n) ? n : Ze(n), t.attrs[n]);
        }
        function nt(e) {
            var t = e.style,
                n = {};
            for (var r in t) (de(t[r]) || fe(r, e)) && (n[r] = t[r]);
            return n;
        }
        function rt(e) {
            var t = nt(e);
            for (var n in e) {
                if (de(e[n]))
                    t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] =
                        e[n];
            }
            return t;
        }
        function at(e) {
            return "object" === typeof e && "function" === typeof e.start;
        }
        var it = function (e) {
            return Array.isArray(e);
        };
        function ot(e) {
            var t,
                n = de(e) ? e.get() : e;
            return (
                (t = n),
                Boolean(t && "object" === typeof t && t.mix && t.toValue)
                    ? n.toValue()
                    : n
            );
        }
        function lt(e, t, n, r) {
            var a = e.scrapeMotionValuesFromProps,
                i = e.createRenderState,
                o = e.onMount,
                l = { latestValues: st(t, n, r, a), renderState: i() };
            return (
                o &&
                    (l.mount = function (e) {
                        return o(t, e, l);
                    }),
                l
            );
        }
        var ut = function (e) {
            return function (t, n) {
                var a = Object(r.useContext)(A),
                    i = Object(r.useContext)(I);
                return n
                    ? lt(e, t, a, i)
                    : R(function () {
                          return lt(e, t, a, i);
                      });
            };
        };
        function st(e, t, n, r) {
            var a = {},
                i = !1 === (null === n || void 0 === n ? void 0 : n.initial),
                o = r(e);
            for (var l in o) a[l] = ot(o[l]);
            var u = e.initial,
                s = e.animate,
                c = q(e),
                f = Q(e);
            t &&
                f &&
                !c &&
                !1 !== e.inherit &&
                ((null !== u && void 0 !== u) || (u = t.initial),
                (null !== s && void 0 !== s) || (s = t.animate));
            var d = i || !1 === u ? s : u;
            d &&
                "boolean" !== typeof d &&
                !at(d) &&
                (Array.isArray(d) ? d : [d]).forEach(function (t) {
                    var n = X(e, t);
                    if (n) {
                        var r = n.transitionEnd;
                        n.transition;
                        var i = S(n, ["transitionEnd", "transition"]);
                        for (var o in i) a[o] = i[o];
                        for (var o in r) a[o] = r[o];
                    }
                });
            return a;
        }
        var ct = {
            useVisualState: ut({
                scrapeMotionValuesFromProps: rt,
                createRenderState: Ke,
                onMount: function (e, t, n) {
                    var r = n.renderState,
                        a = n.latestValues;
                    try {
                        r.dimensions =
                            "function" === typeof t.getBBox
                                ? t.getBBox()
                                : t.getBoundingClientRect();
                    } catch (i) {
                        r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                    "path" === t.tagName &&
                        (r.totalPathLength = t.getTotalLength()),
                        Xe(
                            r,
                            a,
                            void 0,
                            void 0,
                            { enableHardwareAcceleration: !1 },
                            e.transformTemplate
                        ),
                        tt(t, r);
                },
            }),
        };
        var ft,
            dt = {
                useVisualState: ut({
                    scrapeMotionValuesFromProps: nt,
                    createRenderState: Me,
                }),
            };
        function pt(e, t, n, r) {
            var a = t.forwardMotionProps,
                i = void 0 !== a && a,
                o = ne(e) ? ct : dt;
            return k(k({}, o), {
                preloadedFeatures: n,
                useRender: Qe(i),
                createVisualElement: r,
                Component: e,
            });
        }
        function mt(e, t, n, r) {
            return (
                e.addEventListener(t, n, r),
                function () {
                    return e.removeEventListener(t, n, r);
                }
            );
        }
        function ht(e, t, n, a) {
            Object(r.useEffect)(
                function () {
                    var r = e.current;
                    if (n && r) return mt(r, t, n, a);
                },
                [e, t, n, a]
            );
        }
        function vt(e) {
            return "undefined" !== typeof PointerEvent &&
                e instanceof PointerEvent
                ? !("mouse" !== e.pointerType)
                : e instanceof MouseEvent;
        }
        function gt(e) {
            return !!e.touches;
        }
        !(function (e) {
            (e.Animate = "animate"),
                (e.Hover = "whileHover"),
                (e.Tap = "whileTap"),
                (e.Drag = "whileDrag"),
                (e.Focus = "whileFocus"),
                (e.Exit = "exit");
        })(ft || (ft = {}));
        var yt = { pageX: 0, pageY: 0 };
        function bt(e, t) {
            void 0 === t && (t = "page");
            var n = e.touches[0] || e.changedTouches[0] || yt;
            return { x: n[t + "X"], y: n[t + "Y"] };
        }
        function wt(e, t) {
            return (
                void 0 === t && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] }
            );
        }
        function xt(e, t) {
            return (
                void 0 === t && (t = "page"),
                { point: gt(e) ? bt(e, t) : wt(e, t) }
            );
        }
        var kt = function (e, t) {
                void 0 === t && (t = !1);
                var n,
                    r = function (t) {
                        return e(t, xt(t));
                    };
                return t
                    ? ((n = r),
                      function (e) {
                          var t = e instanceof MouseEvent;
                          (!t || (t && 0 === e.button)) && n(e);
                      })
                    : r;
            },
            St = {
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointercancel: "mousecancel",
                pointerover: "mouseover",
                pointerout: "mouseout",
                pointerenter: "mouseenter",
                pointerleave: "mouseleave",
            },
            Ot = {
                pointerdown: "touchstart",
                pointermove: "touchmove",
                pointerup: "touchend",
                pointercancel: "touchcancel",
            };
        function Ct(e) {
            return V && null === window.onpointerdown
                ? e
                : V && null === window.ontouchstart
                ? Ot[e]
                : V && null === window.onmousedown
                ? St[e]
                : e;
        }
        function jt(e, t, n, r) {
            return mt(e, Ct(t), kt(n, "pointerdown" === t), r);
        }
        function Et(e, t, n, r) {
            return ht(e, Ct(t), n && kt(n, "pointerdown" === t), r);
        }
        function Pt(e) {
            var t = null;
            return function () {
                return (
                    null === t &&
                    ((t = e),
                    function () {
                        t = null;
                    })
                );
            };
        }
        var _t = Pt("dragHorizontal"),
            Tt = Pt("dragVertical");
        function Lt(e) {
            var t = !1;
            if ("y" === e) t = Tt();
            else if ("x" === e) t = _t();
            else {
                var n = _t(),
                    r = Tt();
                n && r
                    ? (t = function () {
                          n(), r();
                      })
                    : (n && n(), r && r());
            }
            return t;
        }
        function At() {
            var e = Lt(!0);
            return !e || (e(), !1);
        }
        function It(e, t, n) {
            return function (r, a) {
                var i;
                vt(r) &&
                    !At() &&
                    (null === n || void 0 === n || n(r, a),
                    null === (i = e.animationState) ||
                        void 0 === i ||
                        i.setActive(ft.Hover, t));
            };
        }
        var Rt = function e(t, n) {
            return !!n && (t === n || e(t, n.parentElement));
        };
        function Mt(e) {
            return Object(r.useEffect)(function () {
                return function () {
                    return e();
                };
            }, []);
        }
        var zt = function (e, t) {
                return function (n) {
                    return t(e(n));
                };
            },
            Nt = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return e.reduce(zt);
            };
        var Dt = function (e) {
                return function (t) {
                    return e(t), null;
                };
            },
            Ft = {
                tap: Dt(function (e) {
                    var t = e.onTap,
                        n = e.onTapStart,
                        a = e.onTapCancel,
                        i = e.whileTap,
                        o = e.visualElement,
                        l = t || n || a || i,
                        u = Object(r.useRef)(!1),
                        s = Object(r.useRef)(null);
                    function c() {
                        var e;
                        null === (e = s.current) || void 0 === e || e.call(s),
                            (s.current = null);
                    }
                    function f() {
                        var e;
                        return (
                            c(),
                            (u.current = !1),
                            null === (e = o.animationState) ||
                                void 0 === e ||
                                e.setActive(ft.Tap, !1),
                            !At()
                        );
                    }
                    function d(e, n) {
                        f() &&
                            (Rt(o.getInstance(), e.target)
                                ? null === t || void 0 === t || t(e, n)
                                : null === a || void 0 === a || a(e, n));
                    }
                    function p(e, t) {
                        f() && (null === a || void 0 === a || a(e, t));
                    }
                    Et(
                        o,
                        "pointerdown",
                        l
                            ? function (e, t) {
                                  var r;
                                  c(),
                                      u.current ||
                                          ((u.current = !0),
                                          (s.current = Nt(
                                              jt(window, "pointerup", d),
                                              jt(window, "pointercancel", p)
                                          )),
                                          null === n || void 0 === n || n(e, t),
                                          null === (r = o.animationState) ||
                                              void 0 === r ||
                                              r.setActive(ft.Tap, !0));
                              }
                            : void 0
                    ),
                        Mt(c);
                }),
                focus: Dt(function (e) {
                    var t = e.whileFocus,
                        n = e.visualElement;
                    ht(
                        n,
                        "focus",
                        t
                            ? function () {
                                  var e;
                                  null === (e = n.animationState) ||
                                      void 0 === e ||
                                      e.setActive(ft.Focus, !0);
                              }
                            : void 0
                    ),
                        ht(
                            n,
                            "blur",
                            t
                                ? function () {
                                      var e;
                                      null === (e = n.animationState) ||
                                          void 0 === e ||
                                          e.setActive(ft.Focus, !1);
                                  }
                                : void 0
                        );
                }),
                hover: Dt(function (e) {
                    var t = e.onHoverStart,
                        n = e.onHoverEnd,
                        r = e.whileHover,
                        a = e.visualElement;
                    Et(a, "pointerenter", t || r ? It(a, !0, t) : void 0),
                        Et(a, "pointerleave", n || r ? It(a, !1, n) : void 0);
                }),
            };
        function Bt(e, t) {
            if (!Array.isArray(t)) return !1;
            var n = t.length;
            if (n !== e.length) return !1;
            for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
            return !0;
        }
        var Vt = function (e, t, n) {
                return Math.min(Math.max(n, e), t);
            },
            Ht = 0.001;
        function Wt(e) {
            var t,
                n,
                r = e.duration,
                a = void 0 === r ? 800 : r,
                i = e.bounce,
                o = void 0 === i ? 0.25 : i,
                l = e.velocity,
                u = void 0 === l ? 0 : l,
                s = e.mass,
                c = void 0 === s ? 1 : s,
                f = 1 - o;
            (f = Vt(0.05, 1, f)),
                (a = Vt(0.01, 10, a / 1e3)),
                f < 1
                    ? ((t = function (e) {
                          var t = e * f,
                              n = t * a,
                              r = t - u,
                              i = Ut(e, f),
                              o = Math.exp(-n);
                          return Ht - (r / i) * o;
                      }),
                      (n = function (e) {
                          var n = e * f * a,
                              r = n * u + u,
                              i = Math.pow(f, 2) * Math.pow(e, 2) * a,
                              o = Math.exp(-n),
                              l = Ut(Math.pow(e, 2), f);
                          return (
                              ((-t(e) + Ht > 0 ? -1 : 1) * ((r - i) * o)) / l
                          );
                      }))
                    : ((t = function (e) {
                          return Math.exp(-e * a) * ((e - u) * a + 1) - 0.001;
                      }),
                      (n = function (e) {
                          return Math.exp(-e * a) * (a * a * (u - e));
                      }));
            var d = (function (e, t, n) {
                for (var r = n, a = 1; a < 12; a++) r -= e(r) / t(r);
                return r;
            })(t, n, 5 / a);
            if (((a *= 1e3), isNaN(d)))
                return { stiffness: 100, damping: 10, duration: a };
            var p = Math.pow(d, 2) * c;
            return {
                stiffness: p,
                damping: 2 * f * Math.sqrt(c * p),
                duration: a,
            };
        }
        function Ut(e, t) {
            return e * Math.sqrt(1 - t * t);
        }
        var $t = ["duration", "bounce"],
            Yt = ["stiffness", "damping", "mass"];
        function Xt(e, t) {
            return t.some(function (t) {
                return void 0 !== e[t];
            });
        }
        function Kt(e) {
            var t = e.from,
                n = void 0 === t ? 0 : t,
                r = e.to,
                a = void 0 === r ? 1 : r,
                i = e.restSpeed,
                o = void 0 === i ? 2 : i,
                l = e.restDelta,
                u = S(e, ["from", "to", "restSpeed", "restDelta"]),
                s = { done: !1, value: n },
                c = (function (e) {
                    var t = k(
                        {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                        },
                        e
                    );
                    if (!Xt(e, Yt) && Xt(e, $t)) {
                        var n = Wt(e);
                        (t = k(k(k({}, t), n), {
                            velocity: 0,
                            mass: 1,
                        })).isResolvedFromDuration = !0;
                    }
                    return t;
                })(u),
                f = c.stiffness,
                d = c.damping,
                p = c.mass,
                m = c.velocity,
                h = c.duration,
                v = c.isResolvedFromDuration,
                g = qt,
                y = qt;
            function b() {
                var e = m ? -m / 1e3 : 0,
                    t = a - n,
                    r = d / (2 * Math.sqrt(f * p)),
                    i = Math.sqrt(f / p) / 1e3;
                if (
                    ((null !== l && void 0 !== l) ||
                        (l = Math.abs(a - n) <= 1 ? 0.01 : 0.4),
                    r < 1)
                ) {
                    var o = Ut(i, r);
                    (g = function (n) {
                        var l = Math.exp(-r * i * n);
                        return (
                            a -
                            l *
                                (((e + r * i * t) / o) * Math.sin(o * n) +
                                    t * Math.cos(o * n))
                        );
                    }),
                        (y = function (n) {
                            var a = Math.exp(-r * i * n);
                            return (
                                r *
                                    i *
                                    a *
                                    ((Math.sin(o * n) * (e + r * i * t)) / o +
                                        t * Math.cos(o * n)) -
                                a *
                                    (Math.cos(o * n) * (e + r * i * t) -
                                        o * t * Math.sin(o * n))
                            );
                        });
                } else if (1 === r)
                    g = function (n) {
                        return a - Math.exp(-i * n) * (t + (e + i * t) * n);
                    };
                else {
                    var u = i * Math.sqrt(r * r - 1);
                    g = function (n) {
                        var o = Math.exp(-r * i * n),
                            l = Math.min(u * n, 300);
                        return (
                            a -
                            (o *
                                ((e + r * i * t) * Math.sinh(l) +
                                    u * t * Math.cosh(l))) /
                                u
                        );
                    };
                }
            }
            return (
                b(),
                {
                    next: function (e) {
                        var t = g(e);
                        if (v) s.done = e >= h;
                        else {
                            var n = 1e3 * y(e),
                                r = Math.abs(n) <= o,
                                i = Math.abs(a - t) <= l;
                            s.done = r && i;
                        }
                        return (s.value = s.done ? a : t), s;
                    },
                    flipTarget: function () {
                        var e;
                        (m = -m), (n = (e = [a, n])[0]), (a = e[1]), b();
                    },
                }
            );
        }
        Kt.needsInterpolation = function (e, t) {
            return "string" === typeof e || "string" === typeof t;
        };
        var qt = function (e) {
                return 0;
            },
            Qt = function (e, t, n) {
                var r = t - e;
                return 0 === r ? 1 : (n - e) / r;
            },
            Gt = function (e, t, n) {
                return -n * e + n * t + e;
            },
            Zt = function (e, t) {
                return function (n) {
                    return Boolean(
                        (xe(n) && we.test(n) && n.startsWith(e)) ||
                            (t && Object.prototype.hasOwnProperty.call(n, t))
                    );
                };
            },
            Jt = function (e, t, n) {
                return function (r) {
                    var a;
                    if (!xe(r)) return r;
                    var i = r.match(ye),
                        o = i[0],
                        l = i[1],
                        u = i[2],
                        s = i[3];
                    return (
                        ((a = {})[e] = parseFloat(o)),
                        (a[t] = parseFloat(l)),
                        (a[n] = parseFloat(u)),
                        (a.alpha = void 0 !== s ? parseFloat(s) : 1),
                        a
                    );
                };
            },
            en = ve(0, 255),
            tn = k(k({}, _e), {
                transform: function (e) {
                    return Math.round(en(e));
                },
            }),
            nn = {
                test: Zt("rgb", "red"),
                parse: Jt("red", "green", "blue"),
                transform: function (e) {
                    var t = e.red,
                        n = e.green,
                        r = e.blue,
                        a = e.alpha,
                        i = void 0 === a ? 1 : a;
                    return (
                        "rgba(" +
                        tn.transform(t) +
                        ", " +
                        tn.transform(n) +
                        ", " +
                        tn.transform(r) +
                        ", " +
                        ge(Te.transform(i)) +
                        ")"
                    );
                },
            };
        var rn = {
                test: Zt("#"),
                parse: function (e) {
                    var t = "",
                        n = "",
                        r = "",
                        a = "";
                    return (
                        e.length > 5
                            ? ((t = e.substr(1, 2)),
                              (n = e.substr(3, 2)),
                              (r = e.substr(5, 2)),
                              (a = e.substr(7, 2)))
                            : ((t = e.substr(1, 1)),
                              (n = e.substr(2, 1)),
                              (r = e.substr(3, 1)),
                              (a = e.substr(4, 1)),
                              (t += t),
                              (n += n),
                              (r += r),
                              (a += a)),
                        {
                            red: parseInt(t, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(r, 16),
                            alpha: a ? parseInt(a, 16) / 255 : 1,
                        }
                    );
                },
                transform: nn.transform,
            },
            an = {
                test: Zt("hsl", "hue"),
                parse: Jt("hue", "saturation", "lightness"),
                transform: function (e) {
                    var t = e.hue,
                        n = e.saturation,
                        r = e.lightness,
                        a = e.alpha,
                        i = void 0 === a ? 1 : a;
                    return (
                        "hsla(" +
                        Math.round(t) +
                        ", " +
                        Oe.transform(ge(n)) +
                        ", " +
                        Oe.transform(ge(r)) +
                        ", " +
                        ge(Te.transform(i)) +
                        ")"
                    );
                },
            },
            on = function (e, t, n) {
                var r = e * e,
                    a = t * t;
                return Math.sqrt(Math.max(0, n * (a - r) + r));
            },
            ln = [rn, nn, an],
            un = function (e) {
                return ln.find(function (t) {
                    return t.test(e);
                });
            },
            sn = function (e) {
                return (
                    "'" +
                    e +
                    "' is not an animatable color. Use the equivalent color code instead."
                );
            },
            cn = function (e, t) {
                var n = un(e),
                    r = un(t);
                sn(e), sn(t), n.transform, r.transform;
                var a = n.parse(e),
                    i = r.parse(t),
                    o = k({}, a),
                    l = n === an ? Gt : on;
                return function (e) {
                    for (var t in o) "alpha" !== t && (o[t] = l(a[t], i[t], e));
                    return (o.alpha = Gt(a.alpha, i.alpha, e)), n.transform(o);
                };
            },
            fn = {
                test: function (e) {
                    return nn.test(e) || rn.test(e) || an.test(e);
                },
                parse: function (e) {
                    return nn.test(e)
                        ? nn.parse(e)
                        : an.test(e)
                        ? an.parse(e)
                        : rn.parse(e);
                },
                transform: function (e) {
                    return xe(e)
                        ? e
                        : e.hasOwnProperty("red")
                        ? nn.transform(e)
                        : an.transform(e);
                },
            },
            dn = "${c}",
            pn = "${n}";
        function mn(e) {
            var t = [],
                n = 0,
                r = e.match(be);
            r &&
                ((n = r.length),
                (e = e.replace(be, dn)),
                t.push.apply(t, r.map(fn.parse)));
            var a = e.match(ye);
            return (
                a &&
                    ((e = e.replace(ye, pn)), t.push.apply(t, a.map(_e.parse))),
                { values: t, numColors: n, tokenised: e }
            );
        }
        function hn(e) {
            return mn(e).values;
        }
        function vn(e) {
            var t = mn(e),
                n = t.values,
                r = t.numColors,
                a = t.tokenised,
                i = n.length;
            return function (e) {
                for (var t = a, n = 0; n < i; n++)
                    t = t.replace(
                        n < r ? dn : pn,
                        n < r ? fn.transform(e[n]) : ge(e[n])
                    );
                return t;
            };
        }
        var gn = function (e) {
            return "number" === typeof e ? 0 : e;
        };
        var yn = {
                test: function (e) {
                    var t, n, r, a;
                    return (
                        isNaN(e) &&
                        xe(e) &&
                        (null !==
                            (n =
                                null === (t = e.match(ye)) || void 0 === t
                                    ? void 0
                                    : t.length) && void 0 !== n
                            ? n
                            : 0) +
                            (null !==
                                (a =
                                    null === (r = e.match(be)) || void 0 === r
                                        ? void 0
                                        : r.length) && void 0 !== a
                                ? a
                                : 0) >
                            0
                    );
                },
                parse: hn,
                createTransformer: vn,
                getAnimatableNone: function (e) {
                    var t = hn(e);
                    return vn(e)(t.map(gn));
                },
            },
            bn = function (e) {
                return "number" === typeof e;
            };
        function wn(e, t) {
            return bn(e)
                ? function (n) {
                      return Gt(e, t, n);
                  }
                : fn.test(e)
                ? cn(e, t)
                : On(e, t);
        }
        var xn = function (e, t) {
                var n = C([], e),
                    r = n.length,
                    a = e.map(function (e, n) {
                        return wn(e, t[n]);
                    });
                return function (e) {
                    for (var t = 0; t < r; t++) n[t] = a[t](e);
                    return n;
                };
            },
            kn = function (e, t) {
                var n = k(k({}, e), t),
                    r = {};
                for (var a in n)
                    void 0 !== e[a] &&
                        void 0 !== t[a] &&
                        (r[a] = wn(e[a], t[a]));
                return function (e) {
                    for (var t in r) n[t] = r[t](e);
                    return n;
                };
            };
        function Sn(e) {
            for (
                var t = yn.parse(e), n = t.length, r = 0, a = 0, i = 0, o = 0;
                o < n;
                o++
            )
                r || "number" === typeof t[o]
                    ? r++
                    : void 0 !== t[o].hue
                    ? i++
                    : a++;
            return { parsed: t, numNumbers: r, numRGB: a, numHSL: i };
        }
        var On = function (e, t) {
                var n = yn.createTransformer(t),
                    r = Sn(e),
                    a = Sn(t);
                return (
                    r.numHSL === a.numHSL &&
                        r.numRGB === a.numRGB &&
                        (r.numNumbers, a.numNumbers),
                    Nt(xn(r.parsed, a.parsed), n)
                );
            },
            Cn = function (e, t) {
                return function (n) {
                    return Gt(e, t, n);
                };
            };
        function jn(e, t, n) {
            for (
                var r,
                    a = [],
                    i =
                        n ||
                        ("number" === typeof (r = e[0])
                            ? Cn
                            : "string" === typeof r
                            ? fn.test(r)
                                ? cn
                                : On
                            : Array.isArray(r)
                            ? xn
                            : "object" === typeof r
                            ? kn
                            : void 0),
                    o = e.length - 1,
                    l = 0;
                l < o;
                l++
            ) {
                var u = i(e[l], e[l + 1]);
                if (t) {
                    var s = Array.isArray(t) ? t[l] : t;
                    u = Nt(s, u);
                }
                a.push(u);
            }
            return a;
        }
        function En(e, t, n) {
            var r = void 0 === n ? {} : n,
                a = r.clamp,
                i = void 0 === a || a,
                o = r.ease,
                l = r.mixer,
                u = e.length;
            t.length,
                !o || !Array.isArray(o) || o.length,
                e[0] > e[u - 1] &&
                    ((e = [].concat(e)),
                    (t = [].concat(t)),
                    e.reverse(),
                    t.reverse());
            var s = jn(t, o, l),
                c =
                    2 === u
                        ? (function (e, t) {
                              var n = e[0],
                                  r = e[1],
                                  a = t[0];
                              return function (e) {
                                  return a(Qt(n, r, e));
                              };
                          })(e, s)
                        : (function (e, t) {
                              var n = e.length,
                                  r = n - 1;
                              return function (a) {
                                  var i = 0,
                                      o = !1;
                                  if (
                                      (a <= e[0]
                                          ? (o = !0)
                                          : a >= e[r] &&
                                            ((i = r - 1), (o = !0)),
                                      !o)
                                  ) {
                                      for (
                                          var l = 1;
                                          l < n && !(e[l] > a || l === r);
                                          l++
                                      );
                                      i = l - 1;
                                  }
                                  var u = Qt(e[i], e[i + 1], a);
                                  return t[i](u);
                              };
                          })(e, s);
            return i
                ? function (t) {
                      return c(Vt(e[0], e[u - 1], t));
                  }
                : c;
        }
        var Pn,
            _n = function (e) {
                return function (t) {
                    return 1 - e(1 - t);
                };
            },
            Tn = function (e) {
                return function (t) {
                    return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
                };
            },
            Ln = function (e) {
                return function (t) {
                    return t * t * ((e + 1) * t - e);
                };
            },
            An = function (e) {
                return e;
            },
            In =
                ((Pn = 2),
                function (e) {
                    return Math.pow(e, Pn);
                }),
            Rn = _n(In),
            Mn = Tn(In),
            zn = function (e) {
                return 1 - Math.sin(Math.acos(e));
            },
            Nn = _n(zn),
            Dn = Tn(Nn),
            Fn = Ln(1.525),
            Bn = _n(Fn),
            Vn = Tn(Fn),
            Hn = (function (e) {
                var t = Ln(e);
                return function (e) {
                    return (e *= 2) < 1
                        ? 0.5 * t(e)
                        : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
                };
            })(1.525),
            Wn = function (e) {
                if (1 === e || 0 === e) return e;
                var t = e * e;
                return e < 0.36363636363636365
                    ? 7.5625 * t
                    : e < 0.7272727272727273
                    ? 9.075 * t - 9.9 * e + 3.4
                    : e < 0.9
                    ? 12.066481994459833 * t -
                      19.63545706371191 * e +
                      8.898060941828255
                    : 10.8 * e * e - 20.52 * e + 10.72;
            },
            Un = _n(Wn);
        function $n(e, t) {
            return e
                .map(function () {
                    return t || Mn;
                })
                .splice(0, e.length - 1);
        }
        function Yn(e) {
            var t = e.from,
                n = void 0 === t ? 0 : t,
                r = e.to,
                a = void 0 === r ? 1 : r,
                i = e.ease,
                o = e.offset,
                l = e.duration,
                u = void 0 === l ? 300 : l,
                s = { done: !1, value: n },
                c = Array.isArray(a) ? a : [n, a],
                f = (function (e, t) {
                    return e.map(function (e) {
                        return e * t;
                    });
                })(
                    o && o.length === c.length
                        ? o
                        : (function (e) {
                              var t = e.length;
                              return e.map(function (e, n) {
                                  return 0 !== n ? n / (t - 1) : 0;
                              });
                          })(c),
                    u
                );
            function d() {
                return En(f, c, { ease: Array.isArray(i) ? i : $n(c, i) });
            }
            var p = d();
            return {
                next: function (e) {
                    return (s.value = p(e)), (s.done = e >= u), s;
                },
                flipTarget: function () {
                    c.reverse(), (p = d());
                },
            };
        }
        var Xn = {
            keyframes: Yn,
            spring: Kt,
            decay: function (e) {
                var t = e.velocity,
                    n = void 0 === t ? 0 : t,
                    r = e.from,
                    a = void 0 === r ? 0 : r,
                    i = e.power,
                    o = void 0 === i ? 0.8 : i,
                    l = e.timeConstant,
                    u = void 0 === l ? 350 : l,
                    s = e.restDelta,
                    c = void 0 === s ? 0.5 : s,
                    f = e.modifyTarget,
                    d = { done: !1, value: a },
                    p = o * n,
                    m = a + p,
                    h = void 0 === f ? m : f(m);
                return (
                    h !== m && (p = h - a),
                    {
                        next: function (e) {
                            var t = -p * Math.exp(-e / u);
                            return (
                                (d.done = !(t > c || t < -c)),
                                (d.value = d.done ? h : h + t),
                                d
                            );
                        },
                        flipTarget: function () {},
                    }
                );
            },
        };
        var Kn = (1 / 60) * 1e3,
            qn =
                "undefined" !== typeof performance
                    ? function () {
                          return performance.now();
                      }
                    : function () {
                          return Date.now();
                      },
            Qn =
                "undefined" !== typeof window
                    ? function (e) {
                          return window.requestAnimationFrame(e);
                      }
                    : function (e) {
                          return setTimeout(function () {
                              return e(qn());
                          }, Kn);
                      };
        var Gn = !0,
            Zn = !1,
            Jn = !1,
            er = { delta: 0, timestamp: 0 },
            tr = ["read", "update", "preRender", "render", "postRender"],
            nr = tr.reduce(function (e, t) {
                return (
                    (e[t] = (function (e) {
                        var t = [],
                            n = [],
                            r = 0,
                            a = !1,
                            i = new WeakSet(),
                            o = {
                                schedule: function (e, o, l) {
                                    void 0 === o && (o = !1),
                                        void 0 === l && (l = !1);
                                    var u = l && a,
                                        s = u ? t : n;
                                    return (
                                        o && i.add(e),
                                        -1 === s.indexOf(e) &&
                                            (s.push(e),
                                            u && a && (r = t.length)),
                                        e
                                    );
                                },
                                cancel: function (e) {
                                    var t = n.indexOf(e);
                                    -1 !== t && n.splice(t, 1), i.delete(e);
                                },
                                process: function (l) {
                                    var u;
                                    if (
                                        ((a = !0),
                                        (t = (u = [n, t])[0]),
                                        ((n = u[1]).length = 0),
                                        (r = t.length))
                                    )
                                        for (var s = 0; s < r; s++) {
                                            var c = t[s];
                                            c(l),
                                                i.has(c) &&
                                                    (o.schedule(c), e());
                                        }
                                    a = !1;
                                },
                            };
                        return o;
                    })(function () {
                        return (Zn = !0);
                    })),
                    e
                );
            }, {}),
            rr = tr.reduce(function (e, t) {
                var n = nr[t];
                return (
                    (e[t] = function (e, t, r) {
                        return (
                            void 0 === t && (t = !1),
                            void 0 === r && (r = !1),
                            Zn || ur(),
                            n.schedule(e, t, r)
                        );
                    }),
                    e
                );
            }, {}),
            ar = tr.reduce(function (e, t) {
                return (e[t] = nr[t].cancel), e;
            }, {}),
            ir = tr.reduce(function (e, t) {
                return (
                    (e[t] = function () {
                        return nr[t].process(er);
                    }),
                    e
                );
            }, {}),
            or = function (e) {
                return nr[e].process(er);
            },
            lr = function e(t) {
                (Zn = !1),
                    (er.delta = Gn
                        ? Kn
                        : Math.max(Math.min(t - er.timestamp, 40), 1)),
                    (er.timestamp = t),
                    (Jn = !0),
                    tr.forEach(or),
                    (Jn = !1),
                    Zn && ((Gn = !1), Qn(e));
            },
            ur = function () {
                (Zn = !0), (Gn = !0), Jn || Qn(lr);
            },
            sr = function () {
                return er;
            },
            cr = rr;
        function fr(e, t, n) {
            return void 0 === n && (n = 0), e - t - n;
        }
        var dr = function (e) {
            var t = function (t) {
                var n = t.delta;
                return e(n);
            };
            return {
                start: function () {
                    return cr.update(t, !0);
                },
                stop: function () {
                    return ar.update(t);
                },
            };
        };
        function pr(e) {
            var t,
                n,
                r,
                a,
                i,
                o = e.from,
                l = e.autoplay,
                u = void 0 === l || l,
                s = e.driver,
                c = void 0 === s ? dr : s,
                f = e.elapsed,
                d = void 0 === f ? 0 : f,
                p = e.repeat,
                m = void 0 === p ? 0 : p,
                h = e.repeatType,
                v = void 0 === h ? "loop" : h,
                g = e.repeatDelay,
                y = void 0 === g ? 0 : g,
                b = e.onPlay,
                w = e.onStop,
                x = e.onComplete,
                O = e.onRepeat,
                C = e.onUpdate,
                j = S(e, [
                    "from",
                    "autoplay",
                    "driver",
                    "elapsed",
                    "repeat",
                    "repeatType",
                    "repeatDelay",
                    "onPlay",
                    "onStop",
                    "onComplete",
                    "onRepeat",
                    "onUpdate",
                ]),
                E = j.to,
                P = 0,
                _ = j.duration,
                T = !1,
                L = !0,
                A = (function (e) {
                    if (Array.isArray(e.to)) return Yn;
                    if (Xn[e.type]) return Xn[e.type];
                    var t = new Set(Object.keys(e));
                    return t.has("ease") ||
                        (t.has("duration") && !t.has("dampingRatio"))
                        ? Yn
                        : t.has("dampingRatio") ||
                          t.has("stiffness") ||
                          t.has("mass") ||
                          t.has("damping") ||
                          t.has("restSpeed") ||
                          t.has("restDelta")
                        ? Kt
                        : Yn;
                })(j);
            (null === (n = (t = A).needsInterpolation) || void 0 === n
                ? void 0
                : n.call(t, o, E)) &&
                ((i = En([0, 100], [o, E], { clamp: !1 })), (o = 0), (E = 100));
            var I = A(k(k({}, j), { from: o, to: E }));
            function R() {
                P++,
                    "reverse" === v
                        ? (d = (function (e, t, n, r) {
                              return (
                                  void 0 === n && (n = 0),
                                  void 0 === r && (r = !0),
                                  r ? fr(t + -e, t, n) : t - (e - t) + n
                              );
                          })(d, _, y, (L = P % 2 === 0)))
                        : ((d = fr(d, _, y)), "mirror" === v && I.flipTarget()),
                    (T = !1),
                    O && O();
            }
            function M(e) {
                if ((L || (e = -e), (d += e), !T)) {
                    var t = I.next(Math.max(0, d));
                    (a = t.value), i && (a = i(a)), (T = L ? t.done : d <= 0);
                }
                null === C || void 0 === C || C(a),
                    T &&
                        (0 === P && ((null !== _ && void 0 !== _) || (_ = d)),
                        P < m
                            ? (function (e, t, n, r) {
                                  return r ? e >= t + n : e <= -n;
                              })(d, _, y, L) && R()
                            : (r.stop(), x && x()));
            }
            return (
                u && (null === b || void 0 === b || b(), (r = c(M)).start()),
                {
                    stop: function () {
                        null === w || void 0 === w || w(), r.stop();
                    },
                }
            );
        }
        function mr(e, t) {
            return t ? e * (1e3 / t) : 0;
        }
        var hr = function (e) {
                return 1e3 * e;
            },
            vr = function (e, t) {
                return 1 - 3 * t + 3 * e;
            },
            gr = function (e, t) {
                return 3 * t - 6 * e;
            },
            yr = function (e) {
                return 3 * e;
            },
            br = function (e, t, n) {
                return ((vr(t, n) * e + gr(t, n)) * e + yr(t)) * e;
            },
            wr = function (e, t, n) {
                return 3 * vr(t, n) * e * e + 2 * gr(t, n) * e + yr(t);
            };
        var xr = 0.1;
        function kr(e, t, n, r) {
            if (e === t && n === r) return An;
            for (var a = new Float32Array(11), i = 0; i < 11; ++i)
                a[i] = br(i * xr, e, n);
            function o(t) {
                for (var r = 0, i = 1; 10 !== i && a[i] <= t; ++i) r += xr;
                --i;
                var o = r + ((t - a[i]) / (a[i + 1] - a[i])) * xr,
                    l = wr(o, e, n);
                return l >= 0.001
                    ? (function (e, t, n, r) {
                          for (var a = 0; a < 8; ++a) {
                              var i = wr(t, n, r);
                              if (0 === i) return t;
                              t -= (br(t, n, r) - e) / i;
                          }
                          return t;
                      })(t, o, e, n)
                    : 0 === l
                    ? o
                    : (function (e, t, n, r, a) {
                          var i,
                              o,
                              l = 0;
                          do {
                              (i = br((o = t + (n - t) / 2), r, a) - e) > 0
                                  ? (n = o)
                                  : (t = o);
                          } while (Math.abs(i) > 1e-7 && ++l < 10);
                          return o;
                      })(t, r, r + xr, e, n);
            }
            return function (e) {
                return 0 === e || 1 === e ? e : br(o(e), t, r);
            };
        }
        var Sr = {
                linear: An,
                easeIn: In,
                easeInOut: Mn,
                easeOut: Rn,
                circIn: zn,
                circInOut: Dn,
                circOut: Nn,
                backIn: Fn,
                backInOut: Vn,
                backOut: Bn,
                anticipate: Hn,
                bounceIn: Un,
                bounceInOut: function (e) {
                    return e < 0.5
                        ? 0.5 * (1 - Wn(1 - 2 * e))
                        : 0.5 * Wn(2 * e - 1) + 0.5;
                },
                bounceOut: Wn,
            },
            Or = function (e) {
                if (Array.isArray(e)) {
                    e.length;
                    var t = O(e, 4);
                    return kr(t[0], t[1], t[2], t[3]);
                }
                return "string" === typeof e ? Sr[e] : e;
            },
            Cr = function (e, t) {
                return (
                    "zIndex" !== e &&
                    (!("number" !== typeof t && !Array.isArray(t)) ||
                        !(
                            "string" !== typeof t ||
                            !yn.test(t) ||
                            t.startsWith("url(")
                        ))
                );
            },
            jr = function () {
                return {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restDelta: 0.5,
                    restSpeed: 10,
                };
            },
            Er = function (e) {
                return {
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restDelta: 0.01,
                    restSpeed: 10,
                };
            },
            Pr = function () {
                return { type: "keyframes", ease: "linear", duration: 0.3 };
            },
            _r = function (e) {
                return { type: "keyframes", duration: 0.8, values: e };
            },
            Tr = {
                x: jr,
                y: jr,
                z: jr,
                rotate: jr,
                rotateX: jr,
                rotateY: jr,
                rotateZ: jr,
                scaleX: Er,
                scaleY: Er,
                scale: Er,
                opacity: Pr,
                backgroundColor: Pr,
                color: Pr,
                default: Er,
            },
            Lr = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function Ar(e) {
            var t = e.slice(0, -1).split("("),
                n = t[0],
                r = t[1];
            if ("drop-shadow" === n) return e;
            var a = (r.match(ye) || [])[0];
            if (!a) return e;
            var i = r.replace(a, ""),
                o = Lr.has(n) ? 1 : 0;
            return a !== r && (o *= 100), n + "(" + o + i + ")";
        }
        var Ir = /([a-z-]*)\(.*?\)/g,
            Rr = k(k({}, yn), {
                getAnimatableNone: function (e) {
                    var t = e.match(Ir);
                    return t ? t.map(Ar).join(" ") : e;
                },
            }),
            Mr = k(k({}, Ie), {
                color: fn,
                backgroundColor: fn,
                outlineColor: fn,
                fill: fn,
                stroke: fn,
                borderColor: fn,
                borderTopColor: fn,
                borderRightColor: fn,
                borderBottomColor: fn,
                borderLeftColor: fn,
                filter: Rr,
                WebkitFilter: Rr,
            }),
            zr = function (e) {
                return Mr[e];
            };
        function Nr(e, t) {
            var n,
                r = zr(e);
            return (
                r !== Rr && (r = yn),
                null === (n = r.getAnimatableNone) || void 0 === n
                    ? void 0
                    : n.call(r, t)
            );
        }
        function Dr(e) {
            var t = e.ease,
                n = e.times,
                r = e.yoyo,
                a = e.flip,
                i = e.loop,
                o = S(e, ["ease", "times", "yoyo", "flip", "loop"]),
                l = k({}, o);
            return (
                n && (l.offset = n),
                o.duration && (l.duration = hr(o.duration)),
                o.repeatDelay && (l.repeatDelay = hr(o.repeatDelay)),
                t &&
                    (l.ease = (function (e) {
                        return Array.isArray(e) && "number" !== typeof e[0];
                    })(t)
                        ? t.map(Or)
                        : Or(t)),
                "tween" === o.type && (l.type = "keyframes"),
                (r || i || a) &&
                    (!0,
                    r
                        ? (l.repeatType = "reverse")
                        : i
                        ? (l.repeatType = "loop")
                        : a && (l.repeatType = "mirror"),
                    (l.repeat = i || r || a || o.repeat)),
                "spring" !== o.type && (l.type = "keyframes"),
                l
            );
        }
        function Fr(e, t, n) {
            var r;
            return (
                Array.isArray(t.to) &&
                    ((null !== (r = e.duration) && void 0 !== r) ||
                        (e.duration = 0.8)),
                (function (e) {
                    Array.isArray(e.to) &&
                        null === e.to[0] &&
                        ((e.to = C([], O(e.to))), (e.to[0] = e.from));
                })(t),
                (function (e) {
                    e.when,
                        e.delay,
                        e.delayChildren,
                        e.staggerChildren,
                        e.staggerDirection,
                        e.repeat,
                        e.repeatType,
                        e.repeatDelay,
                        e.from;
                    var t = S(e, [
                        "when",
                        "delay",
                        "delayChildren",
                        "staggerChildren",
                        "staggerDirection",
                        "repeat",
                        "repeatType",
                        "repeatDelay",
                        "from",
                    ]);
                    return !!Object.keys(t).length;
                })(e) ||
                    (e = k(
                        k({}, e),
                        (function (e, t) {
                            var n;
                            return (
                                (n = it(t) ? _r : Tr[e] || Tr.default),
                                k({ to: t }, n(t))
                            );
                        })(n, t.to)
                    )),
                k(k({}, t), Dr(e))
            );
        }
        function Br(e, t, n, r, a) {
            var i,
                o = Wr(r, e),
                l = null !== (i = o.from) && void 0 !== i ? i : t.get(),
                u = Cr(e, n);
            "none" === l && u && "string" === typeof n
                ? (l = Nr(e, n))
                : Vr(l) && "string" === typeof n
                ? (l = Hr(n))
                : !Array.isArray(n) &&
                  Vr(n) &&
                  "string" === typeof l &&
                  (n = Hr(l));
            var s = Cr(e, l);
            return s && u && !1 !== o.type
                ? function () {
                      var r = {
                          from: l,
                          to: n,
                          velocity: t.getVelocity(),
                          onComplete: a,
                          onUpdate: function (e) {
                              return t.set(e);
                          },
                      };
                      return "inertia" === o.type || "decay" === o.type
                          ? (function (e) {
                                var t,
                                    n = e.from,
                                    r = void 0 === n ? 0 : n,
                                    a = e.velocity,
                                    i = void 0 === a ? 0 : a,
                                    o = e.min,
                                    l = e.max,
                                    u = e.power,
                                    s = void 0 === u ? 0.8 : u,
                                    c = e.timeConstant,
                                    f = void 0 === c ? 750 : c,
                                    d = e.bounceStiffness,
                                    p = void 0 === d ? 500 : d,
                                    m = e.bounceDamping,
                                    h = void 0 === m ? 10 : m,
                                    v = e.restDelta,
                                    g = void 0 === v ? 1 : v,
                                    y = e.modifyTarget,
                                    b = e.driver,
                                    w = e.onUpdate,
                                    x = e.onComplete;
                                function S(e) {
                                    return (
                                        (void 0 !== o && e < o) ||
                                        (void 0 !== l && e > l)
                                    );
                                }
                                function O(e) {
                                    return void 0 === o
                                        ? l
                                        : void 0 === l ||
                                          Math.abs(o - e) < Math.abs(l - e)
                                        ? o
                                        : l;
                                }
                                function C(e) {
                                    null === t || void 0 === t || t.stop(),
                                        (t = pr(
                                            k(k({}, e), {
                                                driver: b,
                                                onUpdate: function (t) {
                                                    var n;
                                                    null === w ||
                                                        void 0 === w ||
                                                        w(t),
                                                        null ===
                                                            (n = e.onUpdate) ||
                                                            void 0 === n ||
                                                            n.call(e, t);
                                                },
                                                onComplete: x,
                                            })
                                        ));
                                }
                                function j(e) {
                                    C(
                                        k(
                                            {
                                                type: "spring",
                                                stiffness: p,
                                                damping: h,
                                                restDelta: g,
                                            },
                                            e
                                        )
                                    );
                                }
                                if (S(r)) j({ from: r, velocity: i, to: O(r) });
                                else {
                                    var E = s * i + r;
                                    "undefined" !== typeof y && (E = y(E));
                                    var P,
                                        _,
                                        T = O(E),
                                        L = T === o ? -1 : 1;
                                    C({
                                        type: "decay",
                                        from: r,
                                        velocity: i,
                                        timeConstant: f,
                                        power: s,
                                        restDelta: g,
                                        modifyTarget: y,
                                        onUpdate: S(E)
                                            ? function (e) {
                                                  (P = _),
                                                      (_ = e),
                                                      (i = mr(
                                                          e - P,
                                                          sr().delta
                                                      )),
                                                      ((1 === L && e > T) ||
                                                          (-1 === L &&
                                                              e < T)) &&
                                                          j({
                                                              from: e,
                                                              to: T,
                                                              velocity: i,
                                                          });
                                              }
                                            : void 0,
                                    });
                                }
                                return {
                                    stop: function () {
                                        return null === t || void 0 === t
                                            ? void 0
                                            : t.stop();
                                    },
                                };
                            })(k(k({}, r), o))
                          : pr(
                                k(k({}, Fr(o, r, e)), {
                                    onUpdate: function (e) {
                                        var t;
                                        r.onUpdate(e),
                                            null === (t = o.onUpdate) ||
                                                void 0 === t ||
                                                t.call(o, e);
                                    },
                                    onComplete: function () {
                                        var e;
                                        r.onComplete(),
                                            null === (e = o.onComplete) ||
                                                void 0 === e ||
                                                e.call(o);
                                    },
                                })
                            );
                  }
                : function () {
                      var e;
                      return (
                          t.set(n),
                          a(),
                          null ===
                              (e =
                                  null === o || void 0 === o
                                      ? void 0
                                      : o.onComplete) ||
                              void 0 === e ||
                              e.call(o),
                          { stop: function () {} }
                      );
                  };
        }
        function Vr(e) {
            return (
                0 === e ||
                ("string" === typeof e &&
                    0 === parseFloat(e) &&
                    -1 === e.indexOf(" "))
            );
        }
        function Hr(e) {
            return "number" === typeof e ? 0 : Nr("", e);
        }
        function Wr(e, t) {
            return e[t] || e.default || e;
        }
        function Ur(e, t, n, r) {
            return (
                void 0 === r && (r = {}),
                t.start(function (a) {
                    var i,
                        o,
                        l = Br(e, t, n, r, a),
                        u = (function (e, t) {
                            var n;
                            return null !== (n = (Wr(e, t) || {}).delay) &&
                                void 0 !== n
                                ? n
                                : 0;
                        })(r, e),
                        s = function () {
                            return (o = l());
                        };
                    return (
                        u ? (i = setTimeout(s, hr(u))) : s(),
                        function () {
                            clearTimeout(i),
                                null === o || void 0 === o || o.stop();
                        }
                    );
                })
            );
        }
        function $r(e, t) {
            -1 === e.indexOf(t) && e.push(t);
        }
        function Yr(e, t) {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
        }
        var Xr = (function () {
                function e() {
                    this.subscriptions = [];
                }
                return (
                    (e.prototype.add = function (e) {
                        var t = this;
                        return (
                            $r(this.subscriptions, e),
                            function () {
                                return Yr(t.subscriptions, e);
                            }
                        );
                    }),
                    (e.prototype.notify = function (e, t, n) {
                        var r = this.subscriptions.length;
                        if (r)
                            if (1 === r) this.subscriptions[0](e, t, n);
                            else
                                for (var a = 0; a < r; a++) {
                                    var i = this.subscriptions[a];
                                    i && i(e, t, n);
                                }
                    }),
                    (e.prototype.getSize = function () {
                        return this.subscriptions.length;
                    }),
                    (e.prototype.clear = function () {
                        this.subscriptions.length = 0;
                    }),
                    e
                );
            })(),
            Kr = (function () {
                function e(e) {
                    var t,
                        n = this;
                    (this.timeDelta = 0),
                        (this.lastUpdated = 0),
                        (this.updateSubscribers = new Xr()),
                        (this.velocityUpdateSubscribers = new Xr()),
                        (this.renderSubscribers = new Xr()),
                        (this.canTrackVelocity = !1),
                        (this.updateAndNotify = function (e, t) {
                            void 0 === t && (t = !0),
                                (n.prev = n.current),
                                (n.current = e);
                            var r = sr(),
                                a = r.delta,
                                i = r.timestamp;
                            n.lastUpdated !== i &&
                                ((n.timeDelta = a),
                                (n.lastUpdated = i),
                                cr.postRender(n.scheduleVelocityCheck)),
                                n.prev !== n.current &&
                                    n.updateSubscribers.notify(n.current),
                                n.velocityUpdateSubscribers.getSize() &&
                                    n.velocityUpdateSubscribers.notify(
                                        n.getVelocity()
                                    ),
                                t && n.renderSubscribers.notify(n.current);
                        }),
                        (this.scheduleVelocityCheck = function () {
                            return cr.postRender(n.velocityCheck);
                        }),
                        (this.velocityCheck = function (e) {
                            e.timestamp !== n.lastUpdated &&
                                ((n.prev = n.current),
                                n.velocityUpdateSubscribers.notify(
                                    n.getVelocity()
                                ));
                        }),
                        (this.hasAnimated = !1),
                        (this.prev = this.current = e),
                        (this.canTrackVelocity =
                            ((t = this.current), !isNaN(parseFloat(t))));
                }
                return (
                    (e.prototype.onChange = function (e) {
                        return this.updateSubscribers.add(e);
                    }),
                    (e.prototype.clearListeners = function () {
                        this.updateSubscribers.clear();
                    }),
                    (e.prototype.onRenderRequest = function (e) {
                        return e(this.get()), this.renderSubscribers.add(e);
                    }),
                    (e.prototype.attach = function (e) {
                        this.passiveEffect = e;
                    }),
                    (e.prototype.set = function (e, t) {
                        void 0 === t && (t = !0),
                            t && this.passiveEffect
                                ? this.passiveEffect(e, this.updateAndNotify)
                                : this.updateAndNotify(e, t);
                    }),
                    (e.prototype.get = function () {
                        return this.current;
                    }),
                    (e.prototype.getPrevious = function () {
                        return this.prev;
                    }),
                    (e.prototype.getVelocity = function () {
                        return this.canTrackVelocity
                            ? mr(
                                  parseFloat(this.current) -
                                      parseFloat(this.prev),
                                  this.timeDelta
                              )
                            : 0;
                    }),
                    (e.prototype.start = function (e) {
                        var t = this;
                        return (
                            this.stop(),
                            new Promise(function (n) {
                                (t.hasAnimated = !0), (t.stopAnimation = e(n));
                            }).then(function () {
                                return t.clearAnimation();
                            })
                        );
                    }),
                    (e.prototype.stop = function () {
                        this.stopAnimation && this.stopAnimation(),
                            this.clearAnimation();
                    }),
                    (e.prototype.isAnimating = function () {
                        return !!this.stopAnimation;
                    }),
                    (e.prototype.clearAnimation = function () {
                        this.stopAnimation = null;
                    }),
                    (e.prototype.destroy = function () {
                        this.updateSubscribers.clear(),
                            this.renderSubscribers.clear(),
                            this.stop();
                    }),
                    e
                );
            })();
        function qr(e) {
            return new Kr(e);
        }
        var Qr = function (e) {
                return function (t) {
                    return t.test(e);
                };
            },
            Gr = [
                _e,
                Ce,
                Oe,
                Se,
                Ee,
                je,
                {
                    test: function (e) {
                        return "auto" === e;
                    },
                    parse: function (e) {
                        return e;
                    },
                },
            ],
            Zr = function (e) {
                return Gr.find(Qr(e));
            },
            Jr = C(C([], O(Gr)), [fn, yn]),
            ea = function (e) {
                return Jr.find(Qr(e));
            };
        function ta(e, t, n) {
            e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, qr(n));
        }
        function na(e, t) {
            var n = K(e, t),
                r = n ? e.makeTargetAnimatable(n, !1) : {},
                a = r.transitionEnd,
                i = void 0 === a ? {} : a;
            r.transition;
            var o,
                l = S(r, ["transitionEnd", "transition"]);
            for (var u in (l = k(k({}, l), i))) {
                ta(e, u, ((o = l[u]), it(o) ? o[o.length - 1] || 0 : o));
            }
        }
        function ra(e, t) {
            C([], O(t))
                .reverse()
                .forEach(function (n) {
                    var r,
                        a = e.getVariant(n);
                    a && na(e, a),
                        null === (r = e.variantChildren) ||
                            void 0 === r ||
                            r.forEach(function (e) {
                                ra(e, t);
                            });
                });
        }
        function aa(e, t) {
            if (t) return (t[e] || t.default || t).from;
        }
        function ia(e, t, n) {
            var r;
            if (
                (void 0 === n && (n = {}),
                e.notifyAnimationStart(),
                Array.isArray(t))
            ) {
                var a = t.map(function (t) {
                    return oa(e, t, n);
                });
                r = Promise.all(a);
            } else if ("string" === typeof t) r = oa(e, t, n);
            else {
                var i = "function" === typeof t ? K(e, t, n.custom) : t;
                r = la(e, i, n);
            }
            return r.then(function () {
                return e.notifyAnimationComplete(t);
            });
        }
        function oa(e, t, n) {
            var r;
            void 0 === n && (n = {});
            var a = K(e, t, n.custom),
                i = (a || {}).transition,
                o = void 0 === i ? e.getDefaultTransition() || {} : i;
            n.transitionOverride && (o = n.transitionOverride);
            var l = a
                    ? function () {
                          return la(e, a, n);
                      }
                    : function () {
                          return Promise.resolve();
                      },
                u = (
                    null === (r = e.variantChildren) || void 0 === r
                        ? void 0
                        : r.size
                )
                    ? function (r) {
                          void 0 === r && (r = 0);
                          var a = o.delayChildren,
                              i = void 0 === a ? 0 : a,
                              l = o.staggerChildren,
                              u = o.staggerDirection;
                          return (function (e, t, n, r, a, i) {
                              void 0 === n && (n = 0);
                              void 0 === r && (r = 0);
                              void 0 === a && (a = 1);
                              var o = [],
                                  l = (e.variantChildren.size - 1) * r,
                                  u =
                                      1 === a
                                          ? function (e) {
                                                return (
                                                    void 0 === e && (e = 0),
                                                    e * r
                                                );
                                            }
                                          : function (e) {
                                                return (
                                                    void 0 === e && (e = 0),
                                                    l - e * r
                                                );
                                            };
                              return (
                                  Array.from(e.variantChildren)
                                      .sort(ua)
                                      .forEach(function (e, r) {
                                          o.push(
                                              oa(
                                                  e,
                                                  t,
                                                  k(k({}, i), {
                                                      delay: n + u(r),
                                                  })
                                              ).then(function () {
                                                  return e.notifyAnimationComplete(
                                                      t
                                                  );
                                              })
                                          );
                                      }),
                                  Promise.all(o)
                              );
                          })(e, t, i + r, l, u, n);
                      }
                    : function () {
                          return Promise.resolve();
                      },
                s = o.when;
            if (s) {
                var c = O("beforeChildren" === s ? [l, u] : [u, l], 2),
                    f = c[0],
                    d = c[1];
                return f().then(d);
            }
            return Promise.all([l(), u(n.delay)]);
        }
        function la(e, t, n) {
            var r,
                a = void 0 === n ? {} : n,
                i = a.delay,
                o = void 0 === i ? 0 : i,
                l = a.transitionOverride,
                u = a.type,
                s = e.makeTargetAnimatable(t),
                c = s.transition,
                f = void 0 === c ? e.getDefaultTransition() : c,
                d = s.transitionEnd,
                p = S(s, ["transition", "transitionEnd"]);
            l && (f = l);
            var m = [],
                h =
                    u &&
                    (null === (r = e.animationState) || void 0 === r
                        ? void 0
                        : r.getState()[u]);
            for (var v in p) {
                var g = e.getValue(v),
                    y = p[v];
                if (!(!g || void 0 === y || (h && sa(h, v)))) {
                    var b = Ur(v, g, y, k({ delay: o }, f));
                    m.push(b);
                }
            }
            return Promise.all(m).then(function () {
                d && na(e, d);
            });
        }
        function ua(e, t) {
            return e.sortNodePosition(t);
        }
        function sa(e, t) {
            var n = e.protectedKeys,
                r = e.needsAnimating,
                a = n.hasOwnProperty(t) && !0 !== r[t];
            return (r[t] = !1), a;
        }
        var ca = [ft.Animate, ft.Hover, ft.Tap, ft.Drag, ft.Focus, ft.Exit],
            fa = C([], O(ca)).reverse(),
            da = ca.length;
        function pa(e) {
            var t = (function (e) {
                    return function (t) {
                        return Promise.all(
                            t.map(function (t) {
                                var n = t.animation,
                                    r = t.options;
                                return ia(e, n, r);
                            })
                        );
                    };
                })(e),
                n = (function () {
                    var e;
                    return (
                        ((e = {})[ft.Animate] = ma(!0)),
                        (e[ft.Hover] = ma()),
                        (e[ft.Tap] = ma()),
                        (e[ft.Drag] = ma()),
                        (e[ft.Focus] = ma()),
                        (e[ft.Exit] = ma()),
                        e
                    );
                })(),
                r = {},
                a = !0,
                i = function (t, n) {
                    var r = K(e, n);
                    if (r) {
                        r.transition;
                        var a = r.transitionEnd,
                            i = S(r, ["transition", "transitionEnd"]);
                        t = k(k(k({}, t), i), a);
                    }
                    return t;
                };
            function o(o, l) {
                for (
                    var u,
                        s = e.getProps(),
                        c = e.getVariantContext(!0) || {},
                        f = [],
                        d = new Set(),
                        p = {},
                        m = 1 / 0,
                        h = function (t) {
                            var r = fa[t],
                                h = n[r],
                                v =
                                    null !== (u = s[r]) && void 0 !== u
                                        ? u
                                        : c[r],
                                g = Y(v),
                                y = r === l ? h.isActive : null;
                            !1 === y && (m = t);
                            var b = v === c[r] && v !== s[r] && g;
                            if (
                                (b && a && e.manuallyAnimateOnMount && (b = !1),
                                (h.protectedKeys = k({}, p)),
                                (!h.isActive && null === y) ||
                                    (!v && !h.prevProp) ||
                                    at(v) ||
                                    "boolean" === typeof v)
                            )
                                return "continue";
                            var w =
                                    (function (e, t) {
                                        if ("string" === typeof t)
                                            return t !== e;
                                        if ($(t)) return !Bt(t, e);
                                        return !1;
                                    })(h.prevProp, v) ||
                                    (r === l && h.isActive && !b && g) ||
                                    (t > m && g),
                                x = Array.isArray(v) ? v : [v],
                                S = x.reduce(i, {});
                            !1 === y && (S = {});
                            var j = h.prevResolvedValues,
                                E = void 0 === j ? {} : j,
                                P = k(k({}, E), S),
                                _ = function (e) {
                                    (w = !0),
                                        d.delete(e),
                                        (h.needsAnimating[e] = !0);
                                };
                            for (var T in P) {
                                var L = S[T],
                                    A = E[T];
                                p.hasOwnProperty(T) ||
                                    (L !== A
                                        ? it(L) && it(A)
                                            ? Bt(L, A)
                                                ? (h.protectedKeys[T] = !0)
                                                : _(T)
                                            : void 0 !== L
                                            ? _(T)
                                            : d.add(T)
                                        : void 0 !== L && d.has(T)
                                        ? _(T)
                                        : (h.protectedKeys[T] = !0));
                            }
                            (h.prevProp = v),
                                (h.prevResolvedValues = S),
                                h.isActive && (p = k(k({}, p), S)),
                                a && e.blockInitialAnimation && (w = !1),
                                w &&
                                    !b &&
                                    f.push.apply(
                                        f,
                                        C(
                                            [],
                                            O(
                                                x.map(function (e) {
                                                    return {
                                                        animation: e,
                                                        options: k(
                                                            { type: r },
                                                            o
                                                        ),
                                                    };
                                                })
                                            )
                                        )
                                    );
                        },
                        v = 0;
                    v < da;
                    v++
                )
                    h(v);
                if (((r = k({}, p)), d.size)) {
                    var g = {};
                    d.forEach(function (t) {
                        var n = e.getBaseTarget(t);
                        void 0 !== n && (g[t] = n);
                    }),
                        f.push({ animation: g });
                }
                var y = Boolean(f.length);
                return (
                    a &&
                        !1 === s.initial &&
                        !e.manuallyAnimateOnMount &&
                        (y = !1),
                    (a = !1),
                    y ? t(f) : Promise.resolve()
                );
            }
            return {
                isAnimated: function (e) {
                    return void 0 !== r[e];
                },
                animateChanges: o,
                setActive: function (t, r, a) {
                    var i;
                    return n[t].isActive === r
                        ? Promise.resolve()
                        : (null === (i = e.variantChildren) ||
                              void 0 === i ||
                              i.forEach(function (e) {
                                  var n;
                                  return null === (n = e.animationState) ||
                                      void 0 === n
                                      ? void 0
                                      : n.setActive(t, r);
                              }),
                          (n[t].isActive = r),
                          o(a, t));
                },
                setAnimateFunction: function (n) {
                    t = n(e);
                },
                getState: function () {
                    return n;
                },
            };
        }
        function ma(e) {
            return (
                void 0 === e && (e = !1),
                {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {},
                }
            );
        }
        var ha = {
                animation: Dt(function (e) {
                    var t = e.visualElement,
                        n = e.animate;
                    t.animationState || (t.animationState = pa(t)),
                        at(n) &&
                            Object(r.useEffect)(
                                function () {
                                    return n.subscribe(t);
                                },
                                [n]
                            );
                }),
                exit: Dt(function (e) {
                    var t = e.custom,
                        n = e.visualElement,
                        a = O(M(), 2),
                        i = a[0],
                        o = a[1],
                        l = Object(r.useContext)(I);
                    Object(r.useEffect)(
                        function () {
                            var e,
                                r,
                                a =
                                    null === (e = n.animationState) ||
                                    void 0 === e
                                        ? void 0
                                        : e.setActive(ft.Exit, !i, {
                                              custom:
                                                  null !==
                                                      (r =
                                                          null === l ||
                                                          void 0 === l
                                                              ? void 0
                                                              : l.custom) &&
                                                  void 0 !== r
                                                      ? r
                                                      : t,
                                          });
                            !i && (null === a || void 0 === a || a.then(o));
                        },
                        [i]
                    );
                }),
            },
            va = function (e) {
                return e.hasOwnProperty("x") && e.hasOwnProperty("y");
            },
            ga = function (e) {
                return va(e) && e.hasOwnProperty("z");
            },
            ya = function (e, t) {
                return Math.abs(e - t);
            };
        function ba(e, t) {
            if (bn(e) && bn(t)) return ya(e, t);
            if (va(e) && va(t)) {
                var n = ya(e.x, t.x),
                    r = ya(e.y, t.y),
                    a = ga(e) && ga(t) ? ya(e.z, t.z) : 0;
                return Math.sqrt(
                    Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(a, 2)
                );
            }
        }
        var wa = (function () {
            function e(e, t, n) {
                var r = this,
                    a = (void 0 === n ? {} : n).transformPagePoint;
                if (
                    ((this.startEvent = null),
                    (this.lastMoveEvent = null),
                    (this.lastMoveEventInfo = null),
                    (this.handlers = {}),
                    (this.updatePoint = function () {
                        if (r.lastMoveEvent && r.lastMoveEventInfo) {
                            var e = Sa(r.lastMoveEventInfo, r.history),
                                t = null !== r.startEvent,
                                n = ba(e.offset, { x: 0, y: 0 }) >= 3;
                            if (t || n) {
                                var a = e.point,
                                    i = sr().timestamp;
                                r.history.push(k(k({}, a), { timestamp: i }));
                                var o = r.handlers,
                                    l = o.onStart,
                                    u = o.onMove;
                                t ||
                                    (l && l(r.lastMoveEvent, e),
                                    (r.startEvent = r.lastMoveEvent)),
                                    u && u(r.lastMoveEvent, e);
                            }
                        }
                    }),
                    (this.handlePointerMove = function (e, t) {
                        (r.lastMoveEvent = e),
                            (r.lastMoveEventInfo = xa(t, r.transformPagePoint)),
                            vt(e) && 0 === e.buttons
                                ? r.handlePointerUp(e, t)
                                : cr.update(r.updatePoint, !0);
                    }),
                    (this.handlePointerUp = function (e, t) {
                        r.end();
                        var n = r.handlers,
                            a = n.onEnd,
                            i = n.onSessionEnd,
                            o = Sa(xa(t, r.transformPagePoint), r.history);
                        r.startEvent && a && a(e, o), i && i(e, o);
                    }),
                    !(gt(e) && e.touches.length > 1))
                ) {
                    (this.handlers = t), (this.transformPagePoint = a);
                    var i = xa(xt(e), this.transformPagePoint),
                        o = i.point,
                        l = sr().timestamp;
                    this.history = [k(k({}, o), { timestamp: l })];
                    var u = t.onSessionStart;
                    u && u(e, Sa(i, this.history)),
                        (this.removeListeners = Nt(
                            jt(window, "pointermove", this.handlePointerMove),
                            jt(window, "pointerup", this.handlePointerUp),
                            jt(window, "pointercancel", this.handlePointerUp)
                        ));
                }
            }
            return (
                (e.prototype.updateHandlers = function (e) {
                    this.handlers = e;
                }),
                (e.prototype.end = function () {
                    this.removeListeners && this.removeListeners(),
                        ar.update(this.updatePoint);
                }),
                e
            );
        })();
        function xa(e, t) {
            return t ? { point: t(e.point) } : e;
        }
        function ka(e, t) {
            return { x: e.x - t.x, y: e.y - t.y };
        }
        function Sa(e, t) {
            var n = e.point;
            return {
                point: n,
                delta: ka(n, Ca(t)),
                offset: ka(n, Oa(t)),
                velocity: ja(t, 0.1),
            };
        }
        function Oa(e) {
            return e[0];
        }
        function Ca(e) {
            return e[e.length - 1];
        }
        function ja(e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            for (
                var n = e.length - 1, r = null, a = Ca(e);
                n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > hr(t)));

            )
                n--;
            if (!r) return { x: 0, y: 0 };
            var i = (a.timestamp - r.timestamp) / 1e3;
            if (0 === i) return { x: 0, y: 0 };
            var o = { x: (a.x - r.x) / i, y: (a.y - r.y) / i };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
        }
        function Ea(e) {
            return e;
        }
        function Pa(e) {
            var t = e.top;
            return {
                x: { min: e.left, max: e.right },
                y: { min: t, max: e.bottom },
            };
        }
        var _a = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
        function Ta() {
            return { x: k({}, _a), y: k({}, _a) };
        }
        function La(e) {
            return [e("x"), e("y")];
        }
        function Aa(e, t, n) {
            var r = t.min,
                a = t.max;
            return (
                void 0 !== r && e < r
                    ? (e = n ? Gt(r, e, n.min) : Math.max(e, r))
                    : void 0 !== a &&
                      e > a &&
                      (e = n ? Gt(a, e, n.max) : Math.min(e, a)),
                e
            );
        }
        function Ia(e, t, n) {
            return {
                min: void 0 !== t ? e.min + t : void 0,
                max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
            };
        }
        function Ra(e, t) {
            var n,
                r = t.min - e.min,
                a = t.max - e.max;
            return (
                t.max - t.min < e.max - e.min &&
                    ((r = (n = O([a, r], 2))[0]), (a = n[1])),
                { min: e.min + r, max: e.min + a }
            );
        }
        function Ma(e, t, n) {
            return { min: za(e, t), max: za(e, n) };
        }
        function za(e, t) {
            var n;
            return "number" === typeof e
                ? e
                : null !== (n = e[t]) && void 0 !== n
                ? n
                : 0;
        }
        function Na(e, t) {
            return Pa(
                (function (e, t) {
                    var n = e.top,
                        r = e.left,
                        a = e.bottom,
                        i = e.right;
                    void 0 === t && (t = Ea);
                    var o = t({ x: r, y: n }),
                        l = t({ x: i, y: a });
                    return { top: o.y, left: o.x, bottom: l.y, right: l.x };
                })(e.getBoundingClientRect(), t)
            );
        }
        function Da(e, t, n) {
            return (
                void 0 === t && (t = 0),
                void 0 === n && (n = 0.01),
                ba(e, t) < n
            );
        }
        function Fa(e) {
            return e.max - e.min;
        }
        function Ba(e, t) {
            var n = 0.5,
                r = Fa(e),
                a = Fa(t);
            return (
                a > r
                    ? (n = Qt(t.min, t.max - r, e.min))
                    : r > a && (n = Qt(e.min, e.max - a, t.min)),
                Vt(0, 1, n)
            );
        }
        function Va(e, t, n, r) {
            void 0 === r && (r = 0.5),
                (e.origin = r),
                (e.originPoint = Gt(t.min, t.max, e.origin)),
                (e.scale = Fa(n) / Fa(t)),
                Da(e.scale, 1, 1e-4) && (e.scale = 1),
                (e.translate = Gt(n.min, n.max, e.origin) - e.originPoint),
                Da(e.translate) && (e.translate = 0);
        }
        function Ha(e, t, n, r) {
            Va(e.x, t.x, n.x, Wa(r.originX)), Va(e.y, t.y, n.y, Wa(r.originY));
        }
        function Wa(e) {
            return "number" === typeof e ? e : 0.5;
        }
        function Ua(e, t, n) {
            (e.min = n.min + t.min), (e.max = e.min + Fa(t));
        }
        var $a = function (e, t) {
            return e.depth - t.depth;
        };
        function Ya(e) {
            return e.projection.isEnabled || e.shouldResetTransform();
        }
        function Xa(e, t) {
            void 0 === t && (t = []);
            var n = e.parent;
            return n && Xa(n, t), Ya(e) && t.push(e), t;
        }
        function Ka(e) {
            if (!e.shouldResetTransform()) {
                var t,
                    n = e.getLayoutState();
                e.notifyBeforeLayoutMeasure(n.layout),
                    (n.isHydrated = !0),
                    (n.layout = e.measureViewportBox()),
                    (n.layoutCorrected =
                        ((t = n.layout), { x: k({}, t.x), y: k({}, t.y) })),
                    e.notifyLayoutMeasure(
                        n.layout,
                        e.prevViewportBox || n.layout
                    ),
                    cr.update(function () {
                        return e.rebaseProjectionTarget();
                    });
            }
        }
        function qa(e, t) {
            return { min: t.min - e.min, max: t.max - e.min };
        }
        function Qa(e, t) {
            return { x: qa(e.x, t.x), y: qa(e.y, t.y) };
        }
        function Ga(e, t) {
            var n = e.getLayoutId(),
                r = t.getLayoutId();
            return n !== r || (void 0 === r && e !== t);
        }
        function Za(e) {
            var t = e.getProps(),
                n = t.drag,
                r = t._dragX;
            return n && !r;
        }
        function Ja(e, t) {
            (e.min = t.min), (e.max = t.max);
        }
        function ei(e, t, n) {
            return n + t * (e - n);
        }
        function ti(e, t, n, r, a) {
            return void 0 !== a && (e = ei(e, a, r)), ei(e, n, r) + t;
        }
        function ni(e, t, n, r, a) {
            void 0 === t && (t = 0),
                void 0 === n && (n = 1),
                (e.min = ti(e.min, t, n, r, a)),
                (e.max = ti(e.max, t, n, r, a));
        }
        function ri(e, t) {
            var n = t.x,
                r = t.y;
            ni(e.x, n.translate, n.scale, n.originPoint),
                ni(e.y, r.translate, r.scale, r.originPoint);
        }
        function ai(e, t, n, r) {
            var a = O(r, 3),
                i = a[0],
                o = a[1],
                l = a[2];
            (e.min = t.min), (e.max = t.max);
            var u = void 0 !== n[l] ? n[l] : 0.5,
                s = Gt(t.min, t.max, u);
            ni(e, n[i], n[o], s, n.scale);
        }
        var ii = ["x", "scaleX", "originX"],
            oi = ["y", "scaleY", "originY"];
        function li(e, t, n) {
            ai(e.x, t.x, n, ii), ai(e.y, t.y, n, oi);
        }
        function ui(e, t, n, r, a) {
            return (
                (e = ei((e -= t), 1 / n, r)),
                void 0 !== a && (e = ei(e, 1 / a, r)),
                e
            );
        }
        function si(e, t, n) {
            var r = O(n, 3),
                a = r[0],
                i = r[1],
                o = r[2];
            !(function (e, t, n, r, a) {
                void 0 === t && (t = 0),
                    void 0 === n && (n = 1),
                    void 0 === r && (r = 0.5);
                var i = Gt(e.min, e.max, r) - t;
                (e.min = ui(e.min, t, n, i, a)),
                    (e.max = ui(e.max, t, n, i, a));
            })(e, t[a], t[i], t[o], t.scale);
        }
        function ci(e, t) {
            si(e.x, t, ii), si(e.y, t, oi);
        }
        var fi = new Set();
        function di(e, t, n) {
            e[n] || (e[n] = []), e[n].push(t);
        }
        function pi(e) {
            return (
                fi.add(e),
                function () {
                    return fi.delete(e);
                }
            );
        }
        function mi() {
            if (fi.size) {
                var e = 0,
                    t = [[]],
                    n = [],
                    r = function (n) {
                        return di(t, n, e);
                    },
                    a = function (t) {
                        di(n, t, e), e++;
                    };
                fi.forEach(function (t) {
                    t(r, a), (e = 0);
                }),
                    fi.clear();
                for (var i = n.length, o = 0; o <= i; o++)
                    t[o] && t[o].forEach(vi), n[o] && n[o].forEach(vi);
            }
        }
        var hi,
            vi = function (e) {
                return e();
            },
            gi = new WeakMap(),
            yi = (function () {
                function e(e) {
                    var t = e.visualElement;
                    (this.isDragging = !1),
                        (this.currentDirection = null),
                        (this.constraints = !1),
                        (this.elastic = {
                            x: { min: 0, max: 1 },
                            y: { min: 0, max: 1 },
                        }),
                        (this.props = {}),
                        (this.hasMutatedConstraints = !1),
                        (this.cursorProgress = { x: 0.5, y: 0.5 }),
                        (this.originPoint = {}),
                        (this.openGlobalLock = null),
                        (this.panSession = null),
                        (this.visualElement = t),
                        this.visualElement.enableLayoutProjection(),
                        gi.set(t, this);
                }
                return (
                    (e.prototype.start = function (e, t) {
                        var n = this,
                            r = void 0 === t ? {} : t,
                            a = r.snapToCursor,
                            i = void 0 !== a && a,
                            o = r.cursorProgress,
                            l = this.props.transformPagePoint;
                        this.panSession = new wa(
                            e,
                            {
                                onSessionStart: function (e) {
                                    var t;
                                    n.stopMotion();
                                    var r = (function (e) {
                                        return xt(e, "client");
                                    })(e).point;
                                    null === (t = n.cancelLayout) ||
                                        void 0 === t ||
                                        t.call(n),
                                        (n.cancelLayout = pi(function (e, t) {
                                            var a = Xa(n.visualElement),
                                                l = (function (e) {
                                                    var t = [];
                                                    return (
                                                        e.children.forEach(
                                                            function e(n) {
                                                                Ya(n) &&
                                                                    t.push(n),
                                                                    n.children.forEach(
                                                                        e
                                                                    );
                                                            }
                                                        ),
                                                        t.sort($a)
                                                    );
                                                })(n.visualElement),
                                                u = C(C([], O(a)), O(l)),
                                                s = !1;
                                            n.isLayoutDrag() &&
                                                n.visualElement.lockProjectionTarget(),
                                                t(function () {
                                                    u.forEach(function (e) {
                                                        return e.resetTransform();
                                                    });
                                                }),
                                                e(function () {
                                                    Ka(n.visualElement),
                                                        l.forEach(Ka);
                                                }),
                                                t(function () {
                                                    u.forEach(function (e) {
                                                        return e.restoreTransform();
                                                    }),
                                                        i &&
                                                            (s =
                                                                n.snapToCursor(
                                                                    r
                                                                ));
                                                }),
                                                e(function () {
                                                    Boolean(
                                                        n.getAxisMotionValue(
                                                            "x"
                                                        ) && !n.isExternalDrag()
                                                    ) ||
                                                        n.visualElement.rebaseProjectionTarget(
                                                            !0,
                                                            n.visualElement.measureViewportBox(
                                                                !1
                                                            )
                                                        ),
                                                        n.visualElement.scheduleUpdateLayoutProjection();
                                                    var e =
                                                        n.visualElement
                                                            .projection;
                                                    La(function (t) {
                                                        if (!s) {
                                                            var a = e.target[t],
                                                                i = a.min,
                                                                l = a.max;
                                                            n.cursorProgress[
                                                                t
                                                            ] = o
                                                                ? o[t]
                                                                : Qt(
                                                                      i,
                                                                      l,
                                                                      r[t]
                                                                  );
                                                        }
                                                        var u =
                                                            n.getAxisMotionValue(
                                                                t
                                                            );
                                                        u &&
                                                            (n.originPoint[t] =
                                                                u.get());
                                                    });
                                                }),
                                                t(function () {
                                                    ir.update(),
                                                        ir.preRender(),
                                                        ir.render(),
                                                        ir.postRender();
                                                }),
                                                e(function () {
                                                    return n.resolveDragConstraints();
                                                });
                                        }));
                                },
                                onStart: function (e, t) {
                                    var r,
                                        a,
                                        i,
                                        o = n.props,
                                        l = o.drag,
                                        u = o.dragPropagation;
                                    (!l ||
                                        u ||
                                        (n.openGlobalLock && n.openGlobalLock(),
                                        (n.openGlobalLock = Lt(l)),
                                        n.openGlobalLock)) &&
                                        (mi(),
                                        (n.isDragging = !0),
                                        (n.currentDirection = null),
                                        null ===
                                            (a = (r = n.props).onDragStart) ||
                                            void 0 === a ||
                                            a.call(r, e, t),
                                        null ===
                                            (i =
                                                n.visualElement
                                                    .animationState) ||
                                            void 0 === i ||
                                            i.setActive(ft.Drag, !0));
                                },
                                onMove: function (e, t) {
                                    var r,
                                        a,
                                        i,
                                        o,
                                        l = n.props,
                                        u = l.dragPropagation,
                                        s = l.dragDirectionLock;
                                    if (u || n.openGlobalLock) {
                                        var c = t.offset;
                                        if (s && null === n.currentDirection)
                                            return (
                                                (n.currentDirection =
                                                    (function (e, t) {
                                                        void 0 === t &&
                                                            (t = 10);
                                                        var n = null;
                                                        Math.abs(e.y) > t
                                                            ? (n = "y")
                                                            : Math.abs(e.x) >
                                                                  t &&
                                                              (n = "x");
                                                        return n;
                                                    })(c)),
                                                void (
                                                    null !==
                                                        n.currentDirection &&
                                                    (null ===
                                                        (a = (r = n.props)
                                                            .onDirectionLock) ||
                                                        void 0 === a ||
                                                        a.call(
                                                            r,
                                                            n.currentDirection
                                                        ))
                                                )
                                            );
                                        n.updateAxis("x", t.point, c),
                                            n.updateAxis("y", t.point, c),
                                            null ===
                                                (o = (i = n.props).onDrag) ||
                                                void 0 === o ||
                                                o.call(i, e, t),
                                            (hi = e);
                                    }
                                },
                                onSessionEnd: function (e, t) {
                                    return n.stop(e, t);
                                },
                            },
                            { transformPagePoint: l }
                        );
                    }),
                    (e.prototype.resolveDragConstraints = function () {
                        var e = this,
                            t = this.props,
                            n = t.dragConstraints,
                            r = t.dragElastic,
                            a =
                                this.visualElement.getLayoutState()
                                    .layoutCorrected;
                        (this.constraints =
                            !!n &&
                            (U(n)
                                ? this.resolveRefConstraints(a, n)
                                : (function (e, t) {
                                      var n = t.top,
                                          r = t.left,
                                          a = t.bottom,
                                          i = t.right;
                                      return {
                                          x: Ia(e.x, r, i),
                                          y: Ia(e.y, n, a),
                                      };
                                  })(a, n))),
                            (this.elastic = (function (e) {
                                return (
                                    !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                                    {
                                        x: Ma(e, "left", "right"),
                                        y: Ma(e, "top", "bottom"),
                                    }
                                );
                            })(r)),
                            this.constraints &&
                                !this.hasMutatedConstraints &&
                                La(function (t) {
                                    e.getAxisMotionValue(t) &&
                                        (e.constraints[t] = (function (e, t) {
                                            var n = {};
                                            return (
                                                void 0 !== t.min &&
                                                    (n.min = t.min - e.min),
                                                void 0 !== t.max &&
                                                    (n.max = t.max - e.min),
                                                n
                                            );
                                        })(a[t], e.constraints[t]));
                                });
                    }),
                    (e.prototype.resolveRefConstraints = function (e, t) {
                        var n = this.props,
                            r = n.onMeasureDragConstraints,
                            a = n.transformPagePoint,
                            i = t.current;
                        this.constraintsBox = Na(i, a);
                        var o = (function (e, t) {
                            return { x: Ra(e.x, t.x), y: Ra(e.y, t.y) };
                        })(e, this.constraintsBox);
                        if (r) {
                            var l = r(
                                (function (e) {
                                    var t = e.x,
                                        n = e.y;
                                    return {
                                        top: n.min,
                                        bottom: n.max,
                                        left: t.min,
                                        right: t.max,
                                    };
                                })(o)
                            );
                            (this.hasMutatedConstraints = !!l),
                                l && (o = Pa(l));
                        }
                        return o;
                    }),
                    (e.prototype.cancelDrag = function () {
                        var e, t;
                        this.visualElement.unlockProjectionTarget(),
                            null === (e = this.cancelLayout) ||
                                void 0 === e ||
                                e.call(this),
                            (this.isDragging = !1),
                            this.panSession && this.panSession.end(),
                            (this.panSession = null),
                            !this.props.dragPropagation &&
                                this.openGlobalLock &&
                                (this.openGlobalLock(),
                                (this.openGlobalLock = null)),
                            null === (t = this.visualElement.animationState) ||
                                void 0 === t ||
                                t.setActive(ft.Drag, !1);
                    }),
                    (e.prototype.stop = function (e, t) {
                        var n, r, a;
                        null === (n = this.panSession) ||
                            void 0 === n ||
                            n.end(),
                            (this.panSession = null);
                        var i = this.isDragging;
                        if ((this.cancelDrag(), i)) {
                            var o = t.velocity;
                            this.animateDragEnd(o),
                                null === (a = (r = this.props).onDragEnd) ||
                                    void 0 === a ||
                                    a.call(r, e, t);
                        }
                    }),
                    (e.prototype.snapToCursor = function (e) {
                        var t = this;
                        return La(function (n) {
                            if (bi(n, t.props.drag, t.currentDirection)) {
                                var r = t.getAxisMotionValue(n);
                                if (!r) return (t.cursorProgress[n] = 0.5), !0;
                                var a = t.visualElement.getLayoutState().layout,
                                    i = a[n].max - a[n].min,
                                    o = a[n].min + i / 2,
                                    l = e[n] - o;
                                (t.originPoint[n] = e[n]), r.set(l);
                            }
                        }).includes(!0);
                    }),
                    (e.prototype.updateAxis = function (e, t, n) {
                        if (bi(e, this.props.drag, this.currentDirection))
                            return this.getAxisMotionValue(e)
                                ? this.updateAxisMotionValue(e, n)
                                : this.updateVisualElementAxis(e, t);
                    }),
                    (e.prototype.updateAxisMotionValue = function (e, t) {
                        var n = this.getAxisMotionValue(e);
                        if (t && n) {
                            var r = this.originPoint[e] + t[e],
                                a = this.constraints
                                    ? Aa(
                                          r,
                                          this.constraints[e],
                                          this.elastic[e]
                                      )
                                    : r;
                            n.set(a);
                        }
                    }),
                    (e.prototype.updateVisualElementAxis = function (e, t) {
                        var n,
                            r = this.visualElement.getLayoutState().layout[e],
                            a = r.max - r.min,
                            i = this.cursorProgress[e],
                            o = (function (e, t, n, r, a) {
                                var i = e - t * n;
                                return r ? Aa(i, r, a) : i;
                            })(
                                t[e],
                                a,
                                i,
                                null === (n = this.constraints) || void 0 === n
                                    ? void 0
                                    : n[e],
                                this.elastic[e]
                            );
                        this.visualElement.setProjectionTargetAxis(e, o, o + a);
                    }),
                    (e.prototype.setProps = function (e) {
                        var t = e.drag,
                            n = void 0 !== t && t,
                            r = e.dragDirectionLock,
                            a = void 0 !== r && r,
                            i = e.dragPropagation,
                            o = void 0 !== i && i,
                            l = e.dragConstraints,
                            u = void 0 !== l && l,
                            s = e.dragElastic,
                            c = void 0 === s ? 0.35 : s,
                            f = e.dragMomentum,
                            d = void 0 === f || f,
                            p = S(e, [
                                "drag",
                                "dragDirectionLock",
                                "dragPropagation",
                                "dragConstraints",
                                "dragElastic",
                                "dragMomentum",
                            ]);
                        this.props = k(
                            {
                                drag: n,
                                dragDirectionLock: a,
                                dragPropagation: o,
                                dragConstraints: u,
                                dragElastic: c,
                                dragMomentum: d,
                            },
                            p
                        );
                    }),
                    (e.prototype.getAxisMotionValue = function (e) {
                        var t = this.props,
                            n = t.layout,
                            r = t.layoutId,
                            a = "_drag" + e.toUpperCase();
                        return this.props[a]
                            ? this.props[a]
                            : n || void 0 !== r
                            ? void 0
                            : this.visualElement.getValue(e, 0);
                    }),
                    (e.prototype.isLayoutDrag = function () {
                        return !this.getAxisMotionValue("x");
                    }),
                    (e.prototype.isExternalDrag = function () {
                        var e = this.props,
                            t = e._dragX,
                            n = e._dragY;
                        return t || n;
                    }),
                    (e.prototype.animateDragEnd = function (e) {
                        var t = this,
                            n = this.props,
                            r = n.drag,
                            a = n.dragMomentum,
                            i = n.dragElastic,
                            o = n.dragTransition,
                            l = (function (e, t) {
                                void 0 === t && (t = !0);
                                var n,
                                    r = e.getProjectionParent();
                                return (
                                    !!r &&
                                    (t
                                        ? ci(
                                              (n = Qa(
                                                  r.projection.target,
                                                  e.projection.target
                                              )),
                                              r.getLatestValues()
                                          )
                                        : (n = Qa(
                                              r.getLayoutState().layout,
                                              e.getLayoutState().layout
                                          )),
                                    La(function (t) {
                                        return e.setProjectionTargetAxis(
                                            t,
                                            n[t].min,
                                            n[t].max,
                                            !0
                                        );
                                    }),
                                    !0)
                                );
                            })(
                                this.visualElement,
                                this.isLayoutDrag() && !this.isExternalDrag()
                            ),
                            u = this.constraints || {};
                        if (l && Object.keys(u).length && this.isLayoutDrag()) {
                            var s = this.visualElement.getProjectionParent();
                            if (s) {
                                var c = Qa(s.projection.targetFinal, u);
                                La(function (e) {
                                    var t = c[e],
                                        n = t.min,
                                        r = t.max;
                                    u[e] = {
                                        min: isNaN(n) ? void 0 : n,
                                        max: isNaN(r) ? void 0 : r,
                                    };
                                });
                            }
                        }
                        var f = La(function (n) {
                            var s;
                            if (bi(n, r, t.currentDirection)) {
                                var c =
                                        null !==
                                            (s =
                                                null === u || void 0 === u
                                                    ? void 0
                                                    : u[n]) && void 0 !== s
                                            ? s
                                            : {},
                                    f = i ? 200 : 1e6,
                                    d = i ? 40 : 1e7,
                                    p = k(
                                        k(
                                            {
                                                type: "inertia",
                                                velocity: a ? e[n] : 0,
                                                bounceStiffness: f,
                                                bounceDamping: d,
                                                timeConstant: 750,
                                                restDelta: 1,
                                                restSpeed: 10,
                                            },
                                            o
                                        ),
                                        c
                                    );
                                return t.getAxisMotionValue(n)
                                    ? t.startAxisValueAnimation(n, p)
                                    : t.visualElement.startLayoutAnimation(
                                          n,
                                          p,
                                          l
                                      );
                            }
                        });
                        return Promise.all(f).then(function () {
                            var e, n;
                            null === (n = (e = t.props).onDragTransitionEnd) ||
                                void 0 === n ||
                                n.call(e);
                        });
                    }),
                    (e.prototype.stopMotion = function () {
                        var e = this;
                        La(function (t) {
                            var n = e.getAxisMotionValue(t);
                            n
                                ? n.stop()
                                : e.visualElement.stopLayoutAnimation();
                        });
                    }),
                    (e.prototype.startAxisValueAnimation = function (e, t) {
                        var n = this.getAxisMotionValue(e);
                        if (n) {
                            var r = n.get();
                            return n.set(r), n.set(r), Ur(e, n, 0, t);
                        }
                    }),
                    (e.prototype.scalePoint = function () {
                        var e = this,
                            t = this.props,
                            n = t.drag;
                        if (U(t.dragConstraints) && this.constraintsBox) {
                            this.stopMotion();
                            var r = { x: 0, y: 0 };
                            La(function (t) {
                                r[t] = Ba(
                                    e.visualElement.projection.target[t],
                                    e.constraintsBox[t]
                                );
                            }),
                                this.updateConstraints(function () {
                                    La(function (t) {
                                        if (bi(t, n, null)) {
                                            var a = (function (e, t, n) {
                                                    var r = e.max - e.min,
                                                        a = Gt(
                                                            t.min,
                                                            t.max - r,
                                                            n
                                                        );
                                                    return {
                                                        min: a,
                                                        max: a + r,
                                                    };
                                                })(
                                                    e.visualElement.projection
                                                        .target[t],
                                                    e.constraintsBox[t],
                                                    r[t]
                                                ),
                                                i = a.min,
                                                o = a.max;
                                            e.visualElement.setProjectionTargetAxis(
                                                t,
                                                i,
                                                o
                                            );
                                        }
                                    });
                                }),
                                setTimeout(mi, 1);
                        }
                    }),
                    (e.prototype.updateConstraints = function (e) {
                        var t = this;
                        this.cancelLayout = pi(function (n, r) {
                            var a = Xa(t.visualElement);
                            r(function () {
                                return a.forEach(function (e) {
                                    return e.resetTransform();
                                });
                            }),
                                n(function () {
                                    return Ka(t.visualElement);
                                }),
                                r(function () {
                                    return a.forEach(function (e) {
                                        return e.restoreTransform();
                                    });
                                }),
                                n(function () {
                                    t.resolveDragConstraints();
                                }),
                                e && r(e);
                        });
                    }),
                    (e.prototype.mount = function (e) {
                        var t = this,
                            n = jt(
                                e.getInstance(),
                                "pointerdown",
                                function (e) {
                                    var n = t.props,
                                        r = n.drag,
                                        a = n.dragListener;
                                    r && (void 0 === a || a) && t.start(e);
                                }
                            ),
                            r = mt(window, "resize", function () {
                                t.scalePoint();
                            }),
                            a = e.onLayoutUpdate(function () {
                                t.isDragging && t.resolveDragConstraints();
                            }),
                            i = e.prevDragCursor;
                        return (
                            i && this.start(hi, { cursorProgress: i }),
                            function () {
                                null === n || void 0 === n || n(),
                                    null === r || void 0 === r || r(),
                                    null === a || void 0 === a || a(),
                                    t.cancelDrag();
                            }
                        );
                    }),
                    e
                );
            })();
        function bi(e, t, n) {
            return (!0 === t || t === e) && (null === n || n === e);
        }
        var wi,
            xi,
            ki = {
                pan: Dt(function (e) {
                    var t = e.onPan,
                        n = e.onPanStart,
                        a = e.onPanEnd,
                        i = e.onPanSessionStart,
                        o = e.visualElement,
                        l = t || n || a || i,
                        u = Object(r.useRef)(null),
                        s = Object(r.useContext)(L).transformPagePoint,
                        c = {
                            onSessionStart: i,
                            onStart: n,
                            onMove: t,
                            onEnd: function (e, t) {
                                (u.current = null), a && a(e, t);
                            },
                        };
                    Object(r.useEffect)(function () {
                        null !== u.current && u.current.updateHandlers(c);
                    }),
                        Et(
                            o,
                            "pointerdown",
                            l &&
                                function (e) {
                                    u.current = new wa(e, c, {
                                        transformPagePoint: s,
                                    });
                                }
                        ),
                        Mt(function () {
                            return u.current && u.current.end();
                        });
                }),
                drag: Dt(function (e) {
                    var t = e.dragControls,
                        n = e.visualElement,
                        a = Object(r.useContext)(L).transformPagePoint,
                        i = R(function () {
                            return new yi({ visualElement: n });
                        });
                    i.setProps(k(k({}, e), { transformPagePoint: a })),
                        Object(r.useEffect)(
                            function () {
                                return t && t.subscribe(i);
                            },
                            [i]
                        ),
                        Object(r.useEffect)(function () {
                            return i.mount(n);
                        }, []);
                }),
            };
        function Si(e) {
            return "string" === typeof e && e.startsWith("var(--");
        }
        !(function (e) {
            (e[(e.Entering = 0)] = "Entering"),
                (e[(e.Present = 1)] = "Present"),
                (e[(e.Exiting = 2)] = "Exiting");
        })(wi || (wi = {})),
            (function (e) {
                (e[(e.Hide = 0)] = "Hide"), (e[(e.Show = 1)] = "Show");
            })(xi || (xi = {}));
        var Oi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function Ci(e, t, n) {
            void 0 === n && (n = 1);
            var r = O(
                    (function (e) {
                        var t = Oi.exec(e);
                        if (!t) return [,];
                        var n = O(t, 3);
                        return [n[1], n[2]];
                    })(e),
                    2
                ),
                a = r[0],
                i = r[1];
            if (a) {
                var o = window.getComputedStyle(t).getPropertyValue(a);
                return o ? o.trim() : Si(i) ? Ci(i, t, n + 1) : i;
            }
        }
        function ji(e, t) {
            return (e / (t.max - t.min)) * 100;
        }
        var Ei = "_$css";
        var Pi = {
                process: function (e, t, n) {
                    var r = n.target;
                    if ("string" === typeof e) {
                        if (!Ce.test(e)) return e;
                        e = parseFloat(e);
                    }
                    return ji(e, r.x) + "% " + ji(e, r.y) + "%";
                },
            },
            _i = {
                borderRadius: k(k({}, Pi), {
                    applyTo: [
                        "borderTopLeftRadius",
                        "borderTopRightRadius",
                        "borderBottomLeftRadius",
                        "borderBottomRightRadius",
                    ],
                }),
                borderTopLeftRadius: Pi,
                borderTopRightRadius: Pi,
                borderBottomLeftRadius: Pi,
                borderBottomRightRadius: Pi,
                boxShadow: {
                    process: function (e, t) {
                        var n = t.delta,
                            r = t.treeScale,
                            a = e,
                            i = e.includes("var("),
                            o = [];
                        i &&
                            (e = e.replace(Oi, function (e) {
                                return o.push(e), Ei;
                            }));
                        var l = yn.parse(e);
                        if (l.length > 5) return a;
                        var u = yn.createTransformer(e),
                            s = "number" !== typeof l[0] ? 1 : 0,
                            c = n.x.scale * r.x,
                            f = n.y.scale * r.y;
                        (l[0 + s] /= c), (l[1 + s] /= f);
                        var d = Gt(c, f, 0.5);
                        "number" === typeof l[2 + s] && (l[2 + s] /= d),
                            "number" === typeof l[3 + s] && (l[3 + s] /= d);
                        var p = u(l);
                        if (i) {
                            var m = 0;
                            p = p.replace(Ei, function () {
                                var e = o[m];
                                return m++, e;
                            });
                        }
                        return p;
                    },
                },
            },
            Ti = (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t.frameTarget = {
                            x: { min: 0, max: 1 },
                            y: { min: 0, max: 1 },
                        }),
                        (t.currentAnimationTarget = {
                            x: { min: 0, max: 1 },
                            y: { min: 0, max: 1 },
                        }),
                        (t.isAnimating = { x: !1, y: !1 }),
                        (t.stopAxisAnimation = { x: void 0, y: void 0 }),
                        (t.isAnimatingTree = !1),
                        (t.animate = function (e, n, r) {
                            void 0 === r && (r = {});
                            var a = r.originBox,
                                i = r.targetBox,
                                o = r.visibilityAction,
                                l = r.shouldStackAnimate,
                                u = r.onComplete,
                                s = r.prevParent,
                                c = S(r, [
                                    "originBox",
                                    "targetBox",
                                    "visibilityAction",
                                    "shouldStackAnimate",
                                    "onComplete",
                                    "prevParent",
                                ]),
                                f = t.props,
                                d = f.visualElement,
                                p = f.layout;
                            if (!1 === l)
                                return (
                                    (t.isAnimatingTree = !1), t.safeToRemove()
                                );
                            if (!t.isAnimatingTree || !0 === l) {
                                l && (t.isAnimatingTree = !0),
                                    (n = a || n),
                                    (e = i || e);
                                var m = !1,
                                    h = d.getProjectionParent();
                                if (h) {
                                    var v = h.prevViewportBox,
                                        g = h.getLayoutState().layout;
                                    s &&
                                        (i && (g = s.getLayoutState().layout),
                                        a &&
                                            !Ga(s, h) &&
                                            s.prevViewportBox &&
                                            (v = s.prevViewportBox)),
                                        v &&
                                            zi(s, a, i) &&
                                            ((m = !0),
                                            (n = Qa(v, n)),
                                            (e = Qa(g, e)));
                                }
                                var y = Li(n, e),
                                    b = La(function (r) {
                                        var a, i;
                                        if ("position" === p) {
                                            var l = e[r].max - e[r].min;
                                            n[r].max = n[r].min + l;
                                        }
                                        if (!d.projection.isTargetLocked)
                                            return void 0 === o
                                                ? y
                                                    ? t.animateAxis(
                                                          r,
                                                          e[r],
                                                          n[r],
                                                          k(k({}, c), {
                                                              isRelative: m,
                                                          })
                                                      )
                                                    : (null ===
                                                          (i = (a =
                                                              t.stopAxisAnimation)[
                                                              r
                                                          ]) ||
                                                          void 0 === i ||
                                                          i.call(a),
                                                      d.setProjectionTargetAxis(
                                                          r,
                                                          e[r].min,
                                                          e[r].max,
                                                          m
                                                      ))
                                                : void d.setVisibility(
                                                      o === xi.Show
                                                  );
                                    });
                                return (
                                    d.syncRender(),
                                    Promise.all(b).then(function () {
                                        (t.isAnimatingTree = !1),
                                            u && u(),
                                            d.notifyLayoutAnimationComplete();
                                    })
                                );
                            }
                        }),
                        t
                    );
                }
                return (
                    x(t, e),
                    (t.prototype.componentDidMount = function () {
                        var e = this,
                            t = this.props.visualElement;
                        (t.animateMotionValue = Ur),
                            t.enableLayoutProjection(),
                            (this.unsubLayoutReady = t.onLayoutUpdate(
                                this.animate
                            )),
                            (t.layoutSafeToRemove = function () {
                                return e.safeToRemove();
                            }),
                            (function (e) {
                                for (var t in e) re[t] = e[t];
                            })(_i);
                    }),
                    (t.prototype.componentWillUnmount = function () {
                        var e = this;
                        this.unsubLayoutReady(),
                            La(function (t) {
                                var n, r;
                                return null ===
                                    (r = (n = e.stopAxisAnimation)[t]) ||
                                    void 0 === r
                                    ? void 0
                                    : r.call(n);
                            });
                    }),
                    (t.prototype.animateAxis = function (e, t, n, r) {
                        var a,
                            i,
                            o = this,
                            l = void 0 === r ? {} : r,
                            u = l.transition,
                            s = l.isRelative;
                        if (
                            !this.isAnimating[e] ||
                            !Ri(t, this.currentAnimationTarget[e])
                        ) {
                            null === (i = (a = this.stopAxisAnimation)[e]) ||
                                void 0 === i ||
                                i.call(a),
                                (this.isAnimating[e] = !0);
                            var c = this.props.visualElement,
                                f = this.frameTarget[e],
                                d = c.getProjectionAnimationProgress()[e];
                            d.clearListeners(), d.set(0), d.set(0);
                            var p = function () {
                                var r = d.get() / 1e3;
                                !(function (e, t, n, r) {
                                    (e.min = Gt(t.min, n.min, r)),
                                        (e.max = Gt(t.max, n.max, r));
                                })(f, n, t, r),
                                    c.setProjectionTargetAxis(
                                        e,
                                        f.min,
                                        f.max,
                                        s
                                    );
                            };
                            p();
                            var m = d.onChange(p);
                            (this.stopAxisAnimation[e] = function () {
                                (o.isAnimating[e] = !1), d.stop(), m();
                            }),
                                (this.currentAnimationTarget[e] = t);
                            var h = u || c.getDefaultTransition() || Mi;
                            return Ur(
                                "x" === e ? "layoutX" : "layoutY",
                                d,
                                1e3,
                                h && Wr(h, "layout")
                            ).then(this.stopAxisAnimation[e]);
                        }
                    }),
                    (t.prototype.safeToRemove = function () {
                        var e, t;
                        null === (t = (e = this.props).safeToRemove) ||
                            void 0 === t ||
                            t.call(e);
                    }),
                    (t.prototype.render = function () {
                        return null;
                    }),
                    t
                );
            })(r.Component);
        function Li(e, t) {
            return !Ii(e) && !Ii(t) && (!Ri(e.x, t.x) || !Ri(e.y, t.y));
        }
        var Ai = { min: 0, max: 0 };
        function Ii(e) {
            return Ri(e.x, Ai) && Ri(e.y, Ai);
        }
        function Ri(e, t) {
            return e.min === t.min && e.max === t.max;
        }
        var Mi = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
        function zi(e, t, n) {
            return e || (!e && !(t || n));
        }
        var Ni = {
            layoutReady: function (e) {
                return e.notifyLayoutReady();
            },
        };
        function Di() {
            var e = new Set();
            return {
                add: function (t) {
                    return e.add(t);
                },
                flush: function (t) {
                    var n = void 0 === t ? Ni : t,
                        r = n.layoutReady,
                        a = n.parent;
                    pi(function (t, n) {
                        var i = Array.from(e).sort($a),
                            o = a ? Xa(a) : [];
                        n(function () {
                            C(C([], O(o)), O(i)).forEach(function (e) {
                                return e.resetTransform();
                            });
                        }),
                            t(function () {
                                i.forEach(Ka);
                            }),
                            n(function () {
                                o.forEach(function (e) {
                                    return e.restoreTransform();
                                }),
                                    i.forEach(r);
                            }),
                            t(function () {
                                i.forEach(function (e) {
                                    e.isPresent && (e.presence = wi.Present);
                                });
                            }),
                            n(function () {
                                ir.preRender(), ir.render();
                            }),
                            t(function () {
                                cr.postRender(function () {
                                    return i.forEach(Fi);
                                }),
                                    e.clear();
                            });
                    }),
                        mi();
                },
            };
        }
        function Fi(e) {
            e.prevViewportBox = e.projection.target;
        }
        var Bi = Object(r.createContext)(Di()),
            Vi = Object(r.createContext)(Di());
        function Hi(e) {
            return !!e.forceUpdate;
        }
        var Wi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                x(t, e),
                (t.prototype.componentDidMount = function () {
                    var e = this.props,
                        t = e.syncLayout,
                        n = e.framerSyncLayout,
                        r = e.visualElement;
                    Hi(t) && t.register(r),
                        Hi(n) && n.register(r),
                        r.onUnmount(function () {
                            Hi(t) && t.remove(r), Hi(n) && n.remove(r);
                        });
                }),
                (t.prototype.getSnapshotBeforeUpdate = function () {
                    var e = this.props,
                        t = e.syncLayout,
                        n = e.visualElement;
                    return (
                        Hi(t)
                            ? t.syncUpdate()
                            : (!(function (e) {
                                  e.shouldResetTransform() ||
                                      ((e.prevViewportBox =
                                          e.measureViewportBox(!1)),
                                      e.rebaseProjectionTarget(
                                          !1,
                                          e.prevViewportBox
                                      ));
                              })(n),
                              t.add(n)),
                        null
                    );
                }),
                (t.prototype.componentDidUpdate = function () {
                    var e = this.props.syncLayout;
                    Hi(e) || e.flush();
                }),
                (t.prototype.render = function () {
                    return null;
                }),
                t
            );
        })(a.a.Component);
        var Ui = {
            measureLayout: function (e) {
                var t = Object(r.useContext)(Bi),
                    n = Object(r.useContext)(Vi);
                return a.a.createElement(
                    Wi,
                    k({}, e, { syncLayout: t, framerSyncLayout: n })
                );
            },
            layoutAnimation: function (e) {
                var t = O(M(), 2)[1];
                return r.createElement(Ti, k({}, e, { safeToRemove: t }));
            },
        };
        function $i() {
            return {
                isHydrated: !1,
                layout: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
                layoutCorrected: {
                    x: { min: 0, max: 1 },
                    y: { min: 0, max: 1 },
                },
                treeScale: { x: 1, y: 1 },
                delta: Ta(),
                deltaFinal: Ta(),
                deltaTransform: "",
            };
        }
        var Yi = $i();
        function Xi(e, t, n) {
            var r = e.x,
                a = e.y,
                i =
                    "translate3d(" +
                    r.translate / t.x +
                    "px, " +
                    a.translate / t.y +
                    "px, 0) ";
            if (n) {
                var o = n.rotate,
                    l = n.rotateX,
                    u = n.rotateY;
                o && (i += "rotate(" + o + ") "),
                    l && (i += "rotateX(" + l + ") "),
                    u && (i += "rotateY(" + u + ") ");
            }
            return (
                (i += "scale(" + r.scale + ", " + a.scale + ")"),
                n || i !== qi ? i : ""
            );
        }
        function Ki(e) {
            var t = e.deltaFinal;
            return 100 * t.x.origin + "% " + 100 * t.y.origin + "% 0";
        }
        var qi = Xi(Yi.delta, Yi.treeScale, { x: 1, y: 1 }),
            Qi = [
                "LayoutMeasure",
                "BeforeLayoutMeasure",
                "LayoutUpdate",
                "ViewportBoxUpdate",
                "Update",
                "Render",
                "AnimationComplete",
                "LayoutAnimationComplete",
                "AnimationStart",
                "SetAxisTarget",
                "Unmount",
            ];
        function Gi(e, t, n, r) {
            var a,
                i,
                o = e.delta,
                l = e.layout,
                u = e.layoutCorrected,
                s = e.treeScale,
                c = t.target;
            (i = l),
                Ja((a = u).x, i.x),
                Ja(a.y, i.y),
                (function (e, t, n) {
                    var r = n.length;
                    if (r) {
                        var a, i;
                        t.x = t.y = 1;
                        for (var o = 0; o < r; o++)
                            (i = (a = n[o]).getLayoutState().delta),
                                (t.x *= i.x.scale),
                                (t.y *= i.y.scale),
                                ri(e, i),
                                Za(a) && li(e, e, a.getLatestValues());
                    }
                })(u, s, n),
                Ha(o, u, c, r);
        }
        var Zi = (function () {
            function e() {
                (this.children = []), (this.isDirty = !1);
            }
            return (
                (e.prototype.add = function (e) {
                    $r(this.children, e), (this.isDirty = !0);
                }),
                (e.prototype.remove = function (e) {
                    Yr(this.children, e), (this.isDirty = !0);
                }),
                (e.prototype.forEach = function (e) {
                    this.isDirty && this.children.sort($a),
                        (this.isDirty = !1),
                        this.children.forEach(e);
                }),
                e
            );
        })();
        var Ji = function (e) {
            var t = e.treeType,
                n = void 0 === t ? "" : t,
                r = e.build,
                a = e.getBaseTarget,
                i = e.makeTargetAnimatable,
                o = e.measureViewportBox,
                l = e.render,
                u = e.readValueFromInstance,
                s = e.resetTransform,
                c = e.restoreTransform,
                f = e.removeValueFromRenderState,
                d = e.sortNodePosition,
                p = e.scrapeMotionValuesFromProps;
            return function (e, t) {
                var m = e.parent,
                    h = e.props,
                    v = e.presenceId,
                    g = e.blockInitialAnimation,
                    y = e.visualState;
                void 0 === t && (t = {});
                var b,
                    w,
                    x,
                    S,
                    j,
                    E,
                    P = y.latestValues,
                    _ = y.renderState,
                    T = (function () {
                        var e = Qi.map(function () {
                                return new Xr();
                            }),
                            t = {},
                            n = {
                                clearAllListeners: function () {
                                    return e.forEach(function (e) {
                                        return e.clear();
                                    });
                                },
                                updatePropListeners: function (e) {
                                    return Qi.forEach(function (r) {
                                        var a;
                                        null === (a = t[r]) ||
                                            void 0 === a ||
                                            a.call(t);
                                        var i = "on" + r,
                                            o = e[i];
                                        o && (t[r] = n[i](o));
                                    });
                                },
                            };
                        return (
                            e.forEach(function (e, t) {
                                (n["on" + Qi[t]] = function (t) {
                                    return e.add(t);
                                }),
                                    (n["notify" + Qi[t]] = function () {
                                        for (
                                            var t = [], n = 0;
                                            n < arguments.length;
                                            n++
                                        )
                                            t[n] = arguments[n];
                                        return e.notify.apply(e, C([], O(t)));
                                    });
                            }),
                            n
                        );
                    })(),
                    L = {
                        isEnabled: !1,
                        isHydrated: !1,
                        isTargetLocked: !1,
                        target: {
                            x: { min: 0, max: 1 },
                            y: { min: 0, max: 1 },
                        },
                        targetFinal: {
                            x: { min: 0, max: 1 },
                            y: { min: 0, max: 1 },
                        },
                    },
                    A = L,
                    I = P,
                    R = $i(),
                    M = !1,
                    z = new Map(),
                    N = new Map(),
                    D = {},
                    F = k({}, P);
                function B() {
                    b &&
                        (Z.isProjectionReady() &&
                            (li(A.targetFinal, A.target, I),
                            Ha(
                                R.deltaFinal,
                                R.layoutCorrected,
                                A.targetFinal,
                                P
                            )),
                        V(),
                        l(b, _));
                }
                function V() {
                    var e = P;
                    if (S && S.isActive()) {
                        var n = S.getCrossfadeState(Z);
                        n && (e = n);
                    }
                    r(Z, _, e, A, R, t, h);
                }
                function H() {
                    T.notifyUpdate(P);
                }
                function W() {
                    Z.layoutTree.forEach(to);
                }
                var U = p(h);
                for (var $ in U) {
                    var X = U[$];
                    void 0 !== P[$] && de(X) && X.set(P[$], !1);
                }
                var K = q(h),
                    G = Q(h),
                    Z = k(
                        k(
                            {
                                treeType: n,
                                current: null,
                                depth: m ? m.depth + 1 : 0,
                                parent: m,
                                children: new Set(),
                                path: m ? C(C([], O(m.path)), [m]) : [],
                                layoutTree: m ? m.layoutTree : new Zi(),
                                presenceId: v,
                                projection: L,
                                variantChildren: G ? new Set() : void 0,
                                isVisible: void 0,
                                manuallyAnimateOnMount: Boolean(
                                    null === m || void 0 === m
                                        ? void 0
                                        : m.isMounted()
                                ),
                                blockInitialAnimation: g,
                                isMounted: function () {
                                    return Boolean(b);
                                },
                                mount: function (e) {
                                    (b = Z.current = e),
                                        Z.pointTo(Z),
                                        G &&
                                            m &&
                                            !K &&
                                            (E =
                                                null === m || void 0 === m
                                                    ? void 0
                                                    : m.addVariantChild(Z)),
                                        null === m ||
                                            void 0 === m ||
                                            m.children.add(Z);
                                },
                                unmount: function () {
                                    ar.update(H),
                                        ar.render(B),
                                        ar.preRender(Z.updateLayoutProjection),
                                        N.forEach(function (e) {
                                            return e();
                                        }),
                                        Z.stopLayoutAnimation(),
                                        Z.layoutTree.remove(Z),
                                        null === E || void 0 === E || E(),
                                        null === m ||
                                            void 0 === m ||
                                            m.children.delete(Z),
                                        null === x || void 0 === x || x(),
                                        T.clearAllListeners();
                                },
                                addVariantChild: function (e) {
                                    var t,
                                        n = Z.getClosestVariantNode();
                                    if (n)
                                        return (
                                            null === (t = n.variantChildren) ||
                                                void 0 === t ||
                                                t.add(e),
                                            function () {
                                                return n.variantChildren.delete(
                                                    e
                                                );
                                            }
                                        );
                                },
                                sortNodePosition: function (e) {
                                    return d && n === e.treeType
                                        ? d(Z.getInstance(), e.getInstance())
                                        : 0;
                                },
                                getClosestVariantNode: function () {
                                    return G
                                        ? Z
                                        : null === m || void 0 === m
                                        ? void 0
                                        : m.getClosestVariantNode();
                                },
                                scheduleUpdateLayoutProjection: m
                                    ? m.scheduleUpdateLayoutProjection
                                    : function () {
                                          return cr.preRender(
                                              Z.updateTreeLayoutProjection,
                                              !1,
                                              !0
                                          );
                                      },
                                getLayoutId: function () {
                                    return h.layoutId;
                                },
                                getInstance: function () {
                                    return b;
                                },
                                getStaticValue: function (e) {
                                    return P[e];
                                },
                                setStaticValue: function (e, t) {
                                    return (P[e] = t);
                                },
                                getLatestValues: function () {
                                    return P;
                                },
                                setVisibility: function (e) {
                                    Z.isVisible !== e &&
                                        ((Z.isVisible = e), Z.scheduleRender());
                                },
                                makeTargetAnimatable: function (e, t) {
                                    return (
                                        void 0 === t && (t = !0), i(Z, e, h, t)
                                    );
                                },
                                addValue: function (e, t) {
                                    Z.hasValue(e) && Z.removeValue(e),
                                        z.set(e, t),
                                        (P[e] = t.get()),
                                        (function (e, t) {
                                            var n = t.onChange(function (t) {
                                                    (P[e] = t),
                                                        h.onUpdate &&
                                                            cr.update(
                                                                H,
                                                                !1,
                                                                !0
                                                            );
                                                }),
                                                r = t.onRenderRequest(
                                                    Z.scheduleRender
                                                );
                                            N.set(e, function () {
                                                n(), r();
                                            });
                                        })(e, t);
                                },
                                removeValue: function (e) {
                                    var t;
                                    z.delete(e),
                                        null === (t = N.get(e)) ||
                                            void 0 === t ||
                                            t(),
                                        N.delete(e),
                                        delete P[e],
                                        f(e, _);
                                },
                                hasValue: function (e) {
                                    return z.has(e);
                                },
                                getValue: function (e, t) {
                                    var n = z.get(e);
                                    return (
                                        void 0 === n &&
                                            void 0 !== t &&
                                            ((n = qr(t)), Z.addValue(e, n)),
                                        n
                                    );
                                },
                                forEachValue: function (e) {
                                    return z.forEach(e);
                                },
                                readValue: function (e) {
                                    var n;
                                    return null !== (n = P[e]) && void 0 !== n
                                        ? n
                                        : u(b, e, t);
                                },
                                setBaseTarget: function (e, t) {
                                    F[e] = t;
                                },
                                getBaseTarget: function (e) {
                                    if (a) {
                                        var t = a(h, e);
                                        if (void 0 !== t && !de(t)) return t;
                                    }
                                    return F[e];
                                },
                            },
                            T
                        ),
                        {
                            build: function () {
                                return V(), _;
                            },
                            scheduleRender: function () {
                                cr.render(B, !1, !0);
                            },
                            syncRender: B,
                            setProps: function (e) {
                                (h = e),
                                    T.updatePropListeners(e),
                                    (D = (function (e, t, n) {
                                        var r;
                                        for (var a in t) {
                                            var i = t[a],
                                                o = n[a];
                                            if (de(i)) e.addValue(a, i);
                                            else if (de(o))
                                                e.addValue(a, qr(i));
                                            else if (o !== i)
                                                if (e.hasValue(a)) {
                                                    var l = e.getValue(a);
                                                    !l.hasAnimated && l.set(i);
                                                } else
                                                    e.addValue(
                                                        a,
                                                        qr(
                                                            null !==
                                                                (r =
                                                                    e.getStaticValue(
                                                                        a
                                                                    )) &&
                                                                void 0 !== r
                                                                ? r
                                                                : i
                                                        )
                                                    );
                                        }
                                        for (var a in n)
                                            void 0 === t[a] && e.removeValue(a);
                                        return t;
                                    })(Z, p(h), D));
                            },
                            getProps: function () {
                                return h;
                            },
                            getVariant: function (e) {
                                var t;
                                return null === (t = h.variants) || void 0 === t
                                    ? void 0
                                    : t[e];
                            },
                            getDefaultTransition: function () {
                                return h.transition;
                            },
                            getVariantContext: function (e) {
                                if ((void 0 === e && (e = !1), e))
                                    return null === m || void 0 === m
                                        ? void 0
                                        : m.getVariantContext();
                                if (!K) {
                                    var t =
                                        (null === m || void 0 === m
                                            ? void 0
                                            : m.getVariantContext()) || {};
                                    return (
                                        void 0 !== h.initial &&
                                            (t.initial = h.initial),
                                        t
                                    );
                                }
                                for (var n = {}, r = 0; r < ao; r++) {
                                    var a = ro[r],
                                        i = h[a];
                                    (Y(i) || !1 === i) && (n[a] = i);
                                }
                                return n;
                            },
                            enableLayoutProjection: function () {
                                (L.isEnabled = !0), Z.layoutTree.add(Z);
                            },
                            lockProjectionTarget: function () {
                                L.isTargetLocked = !0;
                            },
                            unlockProjectionTarget: function () {
                                Z.stopLayoutAnimation(),
                                    (L.isTargetLocked = !1);
                            },
                            getLayoutState: function () {
                                return R;
                            },
                            setCrossfader: function (e) {
                                S = e;
                            },
                            isProjectionReady: function () {
                                return (
                                    L.isEnabled && L.isHydrated && R.isHydrated
                                );
                            },
                            startLayoutAnimation: function (e, t, n) {
                                void 0 === n && (n = !1);
                                var r = Z.getProjectionAnimationProgress()[e],
                                    a = n ? L.relativeTarget[e] : L.target[e],
                                    i = a.min,
                                    o = a.max - i;
                                return (
                                    r.clearListeners(),
                                    r.set(i),
                                    r.set(i),
                                    r.onChange(function (t) {
                                        Z.setProjectionTargetAxis(
                                            e,
                                            t,
                                            t + o,
                                            n
                                        );
                                    }),
                                    Z.animateMotionValue(e, r, 0, t)
                                );
                            },
                            stopLayoutAnimation: function () {
                                La(function (e) {
                                    return Z.getProjectionAnimationProgress()[
                                        e
                                    ].stop();
                                });
                            },
                            measureViewportBox: function (e) {
                                void 0 === e && (e = !0);
                                var n = o(b, t);
                                return e || ci(n, P), n;
                            },
                            getProjectionAnimationProgress: function () {
                                return j || (j = { x: qr(0), y: qr(0) }), j;
                            },
                            setProjectionTargetAxis: function (e, t, n, r) {
                                var a;
                                void 0 === r && (r = !1),
                                    r
                                        ? (L.relativeTarget ||
                                              (L.relativeTarget = {
                                                  x: { min: 0, max: 1 },
                                                  y: { min: 0, max: 1 },
                                              }),
                                          (a = L.relativeTarget[e]))
                                        : ((L.relativeTarget = void 0),
                                          (a = L.target[e])),
                                    (L.isHydrated = !0),
                                    (a.min = t),
                                    (a.max = n),
                                    (M = !0),
                                    T.notifySetAxisTarget();
                            },
                            rebaseProjectionTarget: function (e, t) {
                                void 0 === t && (t = R.layout);
                                var n = Z.getProjectionAnimationProgress(),
                                    r = n.x,
                                    a = n.y,
                                    i =
                                        !L.relativeTarget &&
                                        !L.isTargetLocked &&
                                        !r.isAnimating() &&
                                        !a.isAnimating();
                                (e || i) &&
                                    La(function (e) {
                                        var n = t[e],
                                            r = n.min,
                                            a = n.max;
                                        Z.setProjectionTargetAxis(e, r, a);
                                    });
                            },
                            notifyLayoutReady: function (e) {
                                !(function (e) {
                                    var t = e.getProjectionParent();
                                    if (t) {
                                        var n = Qa(
                                            t.getLayoutState().layout,
                                            e.getLayoutState().layout
                                        );
                                        La(function (t) {
                                            e.setProjectionTargetAxis(
                                                t,
                                                n[t].min,
                                                n[t].max,
                                                !0
                                            );
                                        });
                                    } else e.rebaseProjectionTarget();
                                })(Z),
                                    Z.notifyLayoutUpdate(
                                        R.layout,
                                        Z.prevViewportBox || R.layout,
                                        e
                                    );
                            },
                            resetTransform: function () {
                                return s(Z, b, h);
                            },
                            restoreTransform: function () {
                                return c(b, _);
                            },
                            updateLayoutProjection: function () {
                                if (Z.isProjectionReady()) {
                                    var e = R.delta,
                                        t = R.treeScale,
                                        n = t.x,
                                        r = t.y,
                                        a = R.deltaTransform;
                                    Gi(R, A, Z.path, P),
                                        M &&
                                            Z.notifyViewportBoxUpdate(
                                                A.target,
                                                e
                                            ),
                                        (M = !1);
                                    var i = Xi(e, t);
                                    (i === a && n === t.x && r === t.y) ||
                                        Z.scheduleRender(),
                                        (R.deltaTransform = i);
                                }
                            },
                            updateTreeLayoutProjection: function () {
                                Z.layoutTree.forEach(eo),
                                    cr.preRender(W, !1, !0);
                            },
                            getProjectionParent: function () {
                                if (void 0 === w) {
                                    for (
                                        var e = !1, t = Z.path.length - 1;
                                        t >= 0;
                                        t--
                                    ) {
                                        var n = Z.path[t];
                                        if (n.projection.isEnabled) {
                                            e = n;
                                            break;
                                        }
                                    }
                                    w = e;
                                }
                                return w;
                            },
                            resolveRelativeTargetBox: function () {
                                var e = Z.getProjectionParent();
                                if (
                                    L.relativeTarget &&
                                    e &&
                                    ((function (e, t) {
                                        Ua(
                                            e.target.x,
                                            e.relativeTarget.x,
                                            t.target.x
                                        ),
                                            Ua(
                                                e.target.y,
                                                e.relativeTarget.y,
                                                t.target.y
                                            );
                                    })(L, e.projection),
                                    Za(e))
                                ) {
                                    var t = L.target;
                                    li(t, t, e.getLatestValues());
                                }
                            },
                            shouldResetTransform: function () {
                                return Boolean(h._layoutResetTransform);
                            },
                            pointTo: function (e) {
                                (A = e.projection),
                                    (I = e.getLatestValues()),
                                    null === x || void 0 === x || x(),
                                    (x = Nt(
                                        e.onSetAxisTarget(
                                            Z.scheduleUpdateLayoutProjection
                                        ),
                                        e.onLayoutAnimationComplete(
                                            function () {
                                                var e;
                                                Z.isPresent
                                                    ? (Z.presence = wi.Present)
                                                    : null ===
                                                          (e =
                                                              Z.layoutSafeToRemove) ||
                                                      void 0 === e ||
                                                      e.call(Z);
                                            }
                                        )
                                    ));
                            },
                            isPresent: !0,
                            presence: wi.Entering,
                        }
                    );
                return Z;
            };
        };
        function eo(e) {
            e.resolveRelativeTargetBox();
        }
        function to(e) {
            e.updateLayoutProjection();
        }
        var no,
            ro = C(["initial"], O(ca)),
            ao = ro.length,
            io = new Set([
                "width",
                "height",
                "top",
                "left",
                "right",
                "bottom",
                "x",
                "y",
            ]),
            oo = function (e) {
                return io.has(e);
            },
            lo = function (e, t) {
                e.set(t, !1), e.set(t);
            },
            uo = function (e) {
                return e === _e || e === Ce;
            };
        !(function (e) {
            (e.width = "width"),
                (e.height = "height"),
                (e.left = "left"),
                (e.right = "right"),
                (e.top = "top"),
                (e.bottom = "bottom");
        })(no || (no = {}));
        var so = function (e, t) {
                return parseFloat(e.split(", ")[t]);
            },
            co = function (e, t) {
                return function (n, r) {
                    var a = r.transform;
                    if ("none" === a || !a) return 0;
                    var i = a.match(/^matrix3d\((.+)\)$/);
                    if (i) return so(i[1], t);
                    var o = a.match(/^matrix\((.+)\)$/);
                    return o ? so(o[1], e) : 0;
                };
            },
            fo = new Set(["x", "y", "z"]),
            po = ie.filter(function (e) {
                return !fo.has(e);
            });
        var mo = {
                width: function (e) {
                    var t = e.x;
                    return t.max - t.min;
                },
                height: function (e) {
                    var t = e.y;
                    return t.max - t.min;
                },
                top: function (e, t) {
                    var n = t.top;
                    return parseFloat(n);
                },
                left: function (e, t) {
                    var n = t.left;
                    return parseFloat(n);
                },
                bottom: function (e, t) {
                    var n = e.y,
                        r = t.top;
                    return parseFloat(r) + (n.max - n.min);
                },
                right: function (e, t) {
                    var n = e.x,
                        r = t.left;
                    return parseFloat(r) + (n.max - n.min);
                },
                x: co(4, 13),
                y: co(5, 14),
            },
            ho = function (e, t, n, r) {
                void 0 === n && (n = {}),
                    void 0 === r && (r = {}),
                    (t = k({}, t)),
                    (r = k({}, r));
                var a = Object.keys(t).filter(oo),
                    i = [],
                    o = !1,
                    l = [];
                if (
                    (a.forEach(function (a) {
                        var u = e.getValue(a);
                        if (e.hasValue(a)) {
                            var s,
                                c = n[a],
                                f = t[a],
                                d = Zr(c);
                            if (it(f))
                                for (
                                    var p = f.length, m = null === f[0] ? 1 : 0;
                                    m < p;
                                    m++
                                )
                                    s
                                        ? Zr(f[m])
                                        : (s = Zr(f[m])) === d ||
                                          (uo(d) && uo(s));
                            else s = Zr(f);
                            if (d !== s)
                                if (uo(d) && uo(s)) {
                                    var h = u.get();
                                    "string" === typeof h &&
                                        u.set(parseFloat(h)),
                                        "string" === typeof f
                                            ? (t[a] = parseFloat(f))
                                            : Array.isArray(f) &&
                                              s === Ce &&
                                              (t[a] = f.map(parseFloat));
                                } else
                                    (null === d || void 0 === d
                                        ? void 0
                                        : d.transform) &&
                                    (null === s || void 0 === s
                                        ? void 0
                                        : s.transform) &&
                                    (0 === c || 0 === f)
                                        ? 0 === c
                                            ? u.set(s.transform(c))
                                            : (t[a] = d.transform(f))
                                        : (o ||
                                              ((i = (function (e) {
                                                  var t = [];
                                                  return (
                                                      po.forEach(function (n) {
                                                          var r = e.getValue(n);
                                                          void 0 !== r &&
                                                              (t.push([
                                                                  n,
                                                                  r.get(),
                                                              ]),
                                                              r.set(
                                                                  n.startsWith(
                                                                      "scale"
                                                                  )
                                                                      ? 1
                                                                      : 0
                                                              ));
                                                      }),
                                                      t.length &&
                                                          e.syncRender(),
                                                      t
                                                  );
                                              })(e)),
                                              (o = !0)),
                                          l.push(a),
                                          (r[a] =
                                              void 0 !== r[a] ? r[a] : t[a]),
                                          lo(u, f));
                        }
                    }),
                    l.length)
                ) {
                    var u = (function (e, t, n) {
                        var r = t.measureViewportBox(),
                            a = t.getInstance(),
                            i = getComputedStyle(a),
                            o = i.display,
                            l = {
                                top: i.top,
                                left: i.left,
                                bottom: i.bottom,
                                right: i.right,
                                transform: i.transform,
                            };
                        "none" === o &&
                            t.setStaticValue("display", e.display || "block"),
                            t.syncRender();
                        var u = t.measureViewportBox();
                        return (
                            n.forEach(function (n) {
                                var a = t.getValue(n);
                                lo(a, mo[n](r, l)), (e[n] = mo[n](u, i));
                            }),
                            e
                        );
                    })(t, e, l);
                    return (
                        i.length &&
                            i.forEach(function (t) {
                                var n = O(t, 2),
                                    r = n[0],
                                    a = n[1];
                                e.getValue(r).set(a);
                            }),
                        e.syncRender(),
                        { target: u, transitionEnd: r }
                    );
                }
                return { target: t, transitionEnd: r };
            };
        function vo(e, t, n, r) {
            return (function (e) {
                return Object.keys(e).some(oo);
            })(t)
                ? ho(e, t, n, r)
                : { target: t, transitionEnd: r };
        }
        var go = function (e, t, n, r) {
            var a = (function (e, t, n) {
                var r,
                    a = S(t, []),
                    i = e.getInstance();
                if (!(i instanceof HTMLElement))
                    return { target: a, transitionEnd: n };
                for (var o in (n && (n = k({}, n)),
                e.forEachValue(function (e) {
                    var t = e.get();
                    if (Si(t)) {
                        var n = Ci(t, i);
                        n && e.set(n);
                    }
                }),
                a)) {
                    var l = a[o];
                    if (Si(l)) {
                        var u = Ci(l, i);
                        u &&
                            ((a[o] = u),
                            n &&
                                ((null !== (r = n[o]) && void 0 !== r) ||
                                    (n[o] = l)));
                    }
                }
                return { target: a, transitionEnd: n };
            })(e, t, r);
            return vo(e, (t = a.target), n, (r = a.transitionEnd));
        };
        var yo = {
                treeType: "dom",
                readValueFromInstance: function (e, t) {
                    if (ue(t)) {
                        var n = zr(t);
                        return (n && n.default) || 0;
                    }
                    var r,
                        a = ((r = e), window.getComputedStyle(r));
                    return (me(t) ? a.getPropertyValue(t) : a[t]) || 0;
                },
                sortNodePosition: function (e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                },
                getBaseTarget: function (e, t) {
                    var n;
                    return null === (n = e.style) || void 0 === n
                        ? void 0
                        : n[t];
                },
                measureViewportBox: function (e, t) {
                    return Na(e, t.transformPagePoint);
                },
                resetTransform: function (e, t, n) {
                    var r = n.transformTemplate;
                    (t.style.transform = r ? r({}, "") : "none"),
                        e.scheduleRender();
                },
                restoreTransform: function (e, t) {
                    e.style.transform = t.style.transform;
                },
                removeValueFromRenderState: function (e, t) {
                    var n = t.vars,
                        r = t.style;
                    delete n[e], delete r[e];
                },
                makeTargetAnimatable: function (e, t, n, r) {
                    var a = n.transformValues;
                    void 0 === r && (r = !0);
                    var i = t.transition,
                        o = t.transitionEnd,
                        l = S(t, ["transition", "transitionEnd"]),
                        u = (function (e, t, n) {
                            var r,
                                a,
                                i = {};
                            for (var o in e)
                                i[o] =
                                    null !== (r = aa(o, t)) && void 0 !== r
                                        ? r
                                        : null === (a = n.getValue(o)) ||
                                          void 0 === a
                                        ? void 0
                                        : a.get();
                            return i;
                        })(l, i || {}, e);
                    if (
                        (a &&
                            (o && (o = a(o)), l && (l = a(l)), u && (u = a(u))),
                        r)
                    ) {
                        !(function (e, t, n) {
                            var r,
                                a,
                                i,
                                o,
                                l = Object.keys(t).filter(function (t) {
                                    return !e.hasValue(t);
                                }),
                                u = l.length;
                            if (u)
                                for (var s = 0; s < u; s++) {
                                    var c = l[s],
                                        f = t[c],
                                        d = null;
                                    Array.isArray(f) && (d = f[0]),
                                        null === d &&
                                            (d =
                                                null !==
                                                    (a =
                                                        null !== (r = n[c]) &&
                                                        void 0 !== r
                                                            ? r
                                                            : e.readValue(c)) &&
                                                void 0 !== a
                                                    ? a
                                                    : t[c]),
                                        void 0 !== d &&
                                            null !== d &&
                                            ("string" === typeof d &&
                                            /^\-?\d*\.?\d+$/.test(d)
                                                ? (d = parseFloat(d))
                                                : !ea(d) &&
                                                  yn.test(f) &&
                                                  (d = Nr(c, f)),
                                            e.addValue(c, qr(d)),
                                            (null !== (i = (o = n)[c]) &&
                                                void 0 !== i) ||
                                                (o[c] = d),
                                            e.setBaseTarget(c, d));
                                }
                        })(e, l, u);
                        var s = go(e, l, u, o);
                        (o = s.transitionEnd), (l = s.target);
                    }
                    return k({ transition: i, transitionEnd: o }, l);
                },
                scrapeMotionValuesFromProps: nt,
                build: function (e, t, n, r, a, i, o) {
                    void 0 !== e.isVisible &&
                        (t.style.visibility = e.isVisible
                            ? "visible"
                            : "hidden");
                    var l = r.isEnabled && a.isHydrated;
                    Re(
                        t,
                        n,
                        r,
                        a,
                        i,
                        o.transformTemplate,
                        l ? Xi : void 0,
                        l ? Ki : void 0
                    );
                },
                render: Je,
            },
            bo = Ji(yo),
            wo = Ji(
                k(k({}, yo), {
                    getBaseTarget: function (e, t) {
                        return e[t];
                    },
                    readValueFromInstance: function (e, t) {
                        var n;
                        return ue(t)
                            ? (null === (n = zr(t)) || void 0 === n
                                  ? void 0
                                  : n.default) || 0
                            : ((t = et.has(t) ? t : Ze(t)), e.getAttribute(t));
                    },
                    scrapeMotionValuesFromProps: rt,
                    build: function (e, t, n, r, a, i, o) {
                        var l = r.isEnabled && a.isHydrated;
                        Xe(
                            t,
                            n,
                            r,
                            a,
                            i,
                            o.transformTemplate,
                            l ? Xi : void 0,
                            l ? Ki : void 0
                        );
                    },
                    render: tt,
                })
            ),
            xo = function (e, t) {
                return ne(e)
                    ? wo(t, { enableHardwareAcceleration: !1 })
                    : bo(t, { enableHardwareAcceleration: !0 });
            },
            ko = k(k(k(k({}, ha), Ft), ki), Ui),
            So = ee(function (e, t) {
                return pt(e, t, ko, xo);
            });
        var Oo = n(11),
            Co = n.n(Oo),
            jo = function () {
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                    t = Object(r.useState)(null),
                    n = y(t, 2),
                    a = n[0],
                    i = n[1],
                    o = Object(r.useState)(!1),
                    l = y(o, 2),
                    u = l[0],
                    s = l[1];
                return (
                    Object(r.useEffect)(
                        function () {
                            if (a) {
                                var t = Co()(function () {
                                    a &&
                                        window.pageYOffset >=
                                            a.getBoundingClientRect().top +
                                                window.pageYOffset -
                                                window.innerHeight +
                                                e &&
                                        (window.removeEventListener(
                                            "scroll",
                                            t
                                        ),
                                        s(!0));
                                }, 200);
                                return (
                                    window.addEventListener("scroll", t, {
                                        passive: !0,
                                    }),
                                    t(),
                                    function () {
                                        return window.removeEventListener(
                                            "scroll",
                                            t
                                        );
                                    }
                                );
                            }
                        },
                        [a, e]
                    ),
                    [i, u]
                );
            },
            Eo = b.a.div({
                fontFamily: "Archivo, Inter, system-ui",
                minHeight: "100vh",
                "--tw-text-opacity": "1",
                color: "rgba(107, 195, 197, var(--tw-text-opacity))",
                padding: "2rem",
                overflow: "hidden",
            });
        function Po(e) {
            var t = e.disabled,
                n = e.children;
            if (t) return Object(c.jsx)(c.Fragment, { children: n });
            Array.isArray(n) || (n = [n]);
            var r = ["left", "right"],
                a = n.map(function (e, t) {
                    return Object(c.jsx)(
                        _o,
                        { direction: r[t % r.length], children: e },
                        t
                    );
                });
            return Object(c.jsx)(c.Fragment, { children: a });
        }
        function _o(e) {
            var t = e.direction,
                n = void 0 === t ? "left" : t,
                r = (e.offset, e.children),
                a = y(jo(30), 2),
                i = a[0],
                o = a[1],
                l = { target: "0%" };
            return (
                (l.initial = "left" === n ? "-150%" : "150%"),
                Object(c.jsx)(So.section, {
                    initial: { x: l.initial },
                    animate: { x: o && l.target, transitionEnd: { x: o && 0 } },
                    transition: { type: "spring", damping: 19 },
                    ref: i,
                    children: r,
                })
            );
        }
        var To,
            Lo = function (e) {
                return Object(c.jsx)(Eo, {
                    className: "App",
                    children: Object(c.jsx)(Po, v({}, e)),
                });
            },
            Ao =
                (n(25),
                b.a.h2({
                    fontSize: "2.25rem",
                    fontWeight: "900",
                    letterSpacing: "0.025em",
                    textAlign: "center",
                    "--tw-text-opacity": "1",
                    color: "rgba(49, 130, 206, var(--tw-text-opacity))",
                    "@media (min-width: 640px)": { fontSize: "3rem" },
                })),
            Io = b.a.h5({
                fontWeight: "700",
                "--tw-text-opacity": "1",
                color: "rgba(49, 130, 206, var(--tw-text-opacity))",
            }),
            Ro = b.a.p({
                marginTop: "1rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                lineHeight: "1.625",
                "--tw-text-opacity": "1",
                color: "rgba(43, 107, 108, var(--tw-text-opacity))",
                maxWidth: "36rem",
                "@media (min-width: 768px)": { fontSize: "1rem" },
                "@media (min-width: 1024px)": { fontSize: "1.125rem" },
            }),
            Mo = b.a.button({
                transitionProperty:
                    "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                fontWeight: "700",
                borderRadius: "0.25rem",
                "--tw-bg-opacity": "1",
                backgroundColor: "rgba(221, 107, 32, var(--tw-bg-opacity))",
                "--tw-text-opacity": "1",
                color: "rgba(247, 250, 252, var(--tw-text-opacity))",
                ":hover, :focus": {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgba(156, 66, 33, var(--tw-bg-opacity))",
                    "--tw-text-opacity": "1",
                    color: "rgba(237, 242, 247, var(--tw-text-opacity))",
                },
                ":focus": {
                    "--tw-shadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
                    boxShadow:
                        "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                },
                transitionDuration: "300ms",
            }),
            zo = b.a.div({ position: "relative" }),
            No = b.a.div({
                maxWidth: "1280px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "5rem",
                paddingBottom: "5rem",
                "@media (min-width: 1024px)": {
                    paddingTop: "6rem",
                    paddingBottom: "6rem",
                },
            }),
            Do =
                (b.a.div({
                    maxWidth: "1024px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    "@media (min-width: 1024px)": {
                        paddingTop: "6rem",
                        paddingBottom: "6rem",
                    },
                }),
                b.a.div({
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    "@media (min-width: 1024px)": {
                        paddingTop: "6rem",
                        paddingBottom: "6rem",
                    },
                })),
            Fo =
                (b.a.div({
                    maxWidth: "1440px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }),
                ["title", "titleId"]);
        function Bo() {
            return (Bo = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function Vo(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function Ho(e, t) {
            var n = e.title,
                a = e.titleId,
                i = Vo(e, Fo);
            return r.createElement(
                "svg",
                Bo(
                    { viewBox: "0 0 1280 1280", ref: t, "aria-labelledby": a },
                    i
                ),
                n ? r.createElement("title", { id: a }, n) : null,
                To ||
                    (To = r.createElement("path", {
                        d: "M55 33.5C44.5 37 35 47.6 32.8 58.3c-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 33.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.4 25.5 19.4 4.1 39.5-14.2 37.5-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 33.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM1207 33.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM55 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 161.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.4 25.5 19.4 4.1 39.5-14.2 37.5-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 161.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM1207 161.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM55 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 801.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 801.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 801.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM439 801.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM567 801.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 801.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 801.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 801.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 801.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 801.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 929.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 929.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 929.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM439 929.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM567 929.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 929.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 929.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 929.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 929.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 929.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 1057.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM439 1057.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM567 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6z",
                    }))
            );
        }
        var Wo,
            Uo,
            $o,
            Yo = r.forwardRef(Ho),
            Xo = (n.p, ["title", "titleId"]);
        function Ko() {
            return (Ko = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function qo(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function Qo(e, t) {
            var n = e.title,
                a = e.titleId,
                i = qo(e, Xo);
            return r.createElement(
                "svg",
                Ko(
                    {
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        width: "100px",
                        height: "100px",
                        viewBox: "0 0 100 100",
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                void 0 === n
                    ? r.createElement("title", { id: a }, "bubbles")
                    : n
                    ? r.createElement("title", { id: a }, n)
                    : null,
                Wo ||
                    (Wo = r.createElement(
                        "desc",
                        null,
                        "Created with Sketch."
                    )),
                Uo || (Uo = r.createElement("defs", null)),
                $o ||
                    ($o = r.createElement(
                        "g",
                        {
                            id: "Page-1",
                            stroke: "none",
                            strokeWidth: 1,
                            fill: "none",
                            fillRule: "evenodd",
                        },
                        r.createElement(
                            "g",
                            { id: "bubbles", fill: "currentColor" },
                            r.createElement("path", {
                                d: "M11,18 C14.8659932,18 18,14.8659932 18,11 C18,7.13400675 14.8659932,4 11,4 C7.13400675,4 4,7.13400675 4,11 C4,14.8659932 7.13400675,18 11,18 Z M59,43 C62.8659932,43 66,39.8659932 66,36 C66,32.1340068 62.8659932,29 59,29 C55.1340068,29 52,32.1340068 52,36 C52,39.8659932 55.1340068,43 59,43 Z M16,36 C17.6568542,36 19,34.6568542 19,33 C19,31.3431458 17.6568542,30 16,30 C14.3431458,30 13,31.3431458 13,33 C13,34.6568542 14.3431458,36 16,36 Z M79,67 C80.6568542,67 82,65.6568542 82,64 C82,62.3431458 80.6568542,61 79,61 C77.3431458,61 76,62.3431458 76,64 C76,65.6568542 77.3431458,67 79,67 Z M34,90 C35.6568542,90 37,88.6568542 37,87 C37,85.3431458 35.6568542,84 34,84 C32.3431458,84 31,85.3431458 31,87 C31,88.6568542 32.3431458,90 34,90 Z M90,14 C91.6568542,14 93,12.6568542 93,11 C93,9.34314575 91.6568542,8 90,8 C88.3431458,8 87,9.34314575 87,11 C87,12.6568542 88.3431458,14 90,14 Z M12,86 C14.209139,86 16,84.209139 16,82 C16,79.790861 14.209139,78 12,78 C9.790861,78 8,79.790861 8,82 C8,84.209139 9.790861,86 12,86 Z M40,21 C42.209139,21 44,19.209139 44,17 C44,14.790861 42.209139,13 40,13 C37.790861,13 36,14.790861 36,17 C36,19.209139 37.790861,21 40,21 Z M63,10 C65.7614237,10 68,7.76142375 68,5 C68,2.23857625 65.7614237,0 63,0 C60.2385763,0 58,2.23857625 58,5 C58,7.76142375 60.2385763,10 63,10 Z M57,70 C59.209139,70 61,68.209139 61,66 C61,63.790861 59.209139,62 57,62 C54.790861,62 53,63.790861 53,66 C53,68.209139 54.790861,70 57,70 Z M86,92 C88.7614237,92 91,89.7614237 91,87 C91,84.2385763 88.7614237,82 86,82 C83.2385763,82 81,84.2385763 81,87 C81,89.7614237 83.2385763,92 86,92 Z M32,63 C34.7614237,63 37,60.7614237 37,58 C37,55.2385763 34.7614237,53 32,53 C29.2385763,53 27,55.2385763 27,58 C27,60.7614237 29.2385763,63 32,63 Z M89,50 C91.7614237,50 94,47.7614237 94,45 C94,42.2385763 91.7614237,40 89,40 C86.2385763,40 84,42.2385763 84,45 C84,47.7614237 86.2385763,50 89,50 Z M80,29 C81.1045695,29 82,28.1045695 82,27 C82,25.8954305 81.1045695,25 80,25 C78.8954305,25 78,25.8954305 78,27 C78,28.1045695 78.8954305,29 80,29 Z M60,91 C61.1045695,91 62,90.1045695 62,89 C62,87.8954305 61.1045695,87 60,87 C58.8954305,87 58,87.8954305 58,89 C58,90.1045695 58.8954305,91 60,91 Z M35,41 C36.1045695,41 37,40.1045695 37,39 C37,37.8954305 36.1045695,37 35,37 C33.8954305,37 33,37.8954305 33,39 C33,40.1045695 33.8954305,41 35,41 Z M12,60 C13.1045695,60 14,59.1045695 14,58 C14,56.8954305 13.1045695,56 12,56 C10.8954305,56 10,56.8954305 10,58 C10,59.1045695 10.8954305,60 12,60 Z",
                                id: "Combined-Shape",
                            })
                        )
                    ))
            );
        }
        var Go,
            Zo = r.forwardRef(Qo),
            Jo =
                (n.p,
                b.a.div.withConfig({
                    displayName: "Hero__Column",
                    componentId: "sc-1u0fypn-0",
                })({})),
            el = b.a.div.withConfig({
                displayName: "Hero__Row",
                componentId: "sc-1u0fypn-1",
            })({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "1440px",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width: 640px)": {
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                },
                "@media (min-width: 1024px)": {
                    flexDirection: "row",
                    paddingTop: "4rem",
                },
            }),
            tl = Object(b.a)(Jo).withConfig({
                displayName: "Hero__TextColumn",
                componentId: "sc-1u0fypn-2",
            })({
                marginRight: "auto",
                maxWidth: "32rem",
                "@media (min-width: 1024px)": {
                    marginRight: "0",
                    maxWidth: "36rem",
                },
                "@media (min-width: 1280px)": { maxWidth: "42rem" },
            }),
            nl = Object(b.a)(Ao).withConfig({
                displayName: "Hero__Heading",
                componentId: "sc-1u0fypn-3",
            })({
                textAlign: "left",
                lineHeight: "1.375",
                "@media (min-width: 1280px)": { fontSize: "4rem" },
            }),
            rl = Object(b.a)(Ro).withConfig({
                displayName: "Hero__Description",
                componentId: "sc-1u0fypn-4",
            })({
                marginTop: "1rem",
                "--tw-text-opacity": "1",
                color: "rgba(74, 85, 104, var(--tw-text-opacity))",
                maxWidth: "32rem",
                "@media (min-width: 1024px)": { fontSize: "1rem" },
            }),
            al = Object(b.a)(Mo).withConfig({
                displayName: "Hero__PrimaryButton",
                componentId: "sc-1u0fypn-5",
            })({
                marginTop: "2rem",
                display: "inline-block",
                width: "8rem",
                letterSpacing: "0.025em",
                textAlign: "center",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
            }),
            il = Object(b.a)(Jo).withConfig({
                displayName: "Hero__ImageColumn",
                componentId: "sc-1u0fypn-6",
            })({
                marginLeft: "auto",
                position: "relative",
                marginTop: "4rem",
                "@media (min-width: 1024px)": {
                    marginRight: "0",
                    marginTop: "0",
                    marginLeft: "8rem",
                },
            }),
            ol = b.a.div.withConfig({
                displayName: "Hero__ImageContainer",
                componentId: "sc-1u0fypn-7",
            })({
                "--tw-translate-x": "0",
                "--tw-translate-y": "0",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                position: "relative",
                zIndex: "40",
                "@media (min-width: 1280px)": {
                    "--tw-translate-x": "-6rem",
                    "--tw-translate-y": "-4rem",
                },
            }),
            ll = b.a.img.withConfig({
                displayName: "Hero__Image",
                componentId: "sc-1u0fypn-8",
            })({
                maxWidth: "100%",
                width: "24rem",
                borderTopLeftRadius: "0.25rem",
                borderTopRightRadius: "0.25rem",
                position: "relative",
                zIndex: "20",
                "@media (min-width: 640px)": { borderRadius: "0.25rem" },
            }),
            ul = b.a.div.withConfig({
                displayName: "Hero__Offsetbackground",
                componentId: "sc-1u0fypn-9",
            })({
                position: "absolute",
                display: "none",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                "--tw-bg-opacity": "1",
                backgroundColor: "rgba(226, 232, 240, var(--tw-bg-opacity))",
                borderRadius: "0.25rem",
                "@media (min-width: 1280px)": {
                    display: "block",
                    marginBottom: "-2rem",
                },
            }),
            sl = Object(b.a)(Yo).withConfig({
                displayName: "Hero__ImageDecoratorBlob",
                componentId: "sc-1u0fypn-10",
            })(["", ""], {
                "--tw-translate-x": "2.5rem",
                "--tw-translate-y": "2.5rem",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                pointerEvents: "none",
                zIndex: "10",
                position: "absolute",
                right: "0",
                bottom: "0",
                height: "8rem",
                width: "8rem",
                opacity: "0.25",
                "--tw-text-opacity": "1",
                color: "rgba(26, 32, 44, var(--tw-text-opacity))",
                fill: "currentColor",
            }),
            cl = Object(b.a)(Zo).withConfig({
                displayName: "Hero__DecoratorBlob",
                componentId: "sc-1u0fypn-11",
            })(["", ""], {
                "--tw-translate-x": "66.67%",
                "--tw-translate-y": "-3rem",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                pointerEvents: "none",
                zIndex: "-20",
                position: "absolute",
                left: "1000",
                bottom: "0",
                height: "24rem",
                width: "24rem",
                "--tw-text-opacity": "1",
                color: "rgba(251, 211, 141, var(--tw-text-opacity))",
            }),
            fl = Object(b.a)("span").withConfig({
                displayName: "Hero___StyledSpan",
                componentId: "sc-1u0fypn-12",
            })({
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            dl = function () {
                return Object(c.jsx)(c.Fragment, {
                    children: Object(c.jsxs)(zo, {
                        children: [
                            Object(c.jsx)(Do, {
                                children: Object(c.jsxs)(el, {
                                    children: [
                                        Object(c.jsxs)(il, {
                                            children: [
                                                Object(c.jsxs)(ol, {
                                                    children: [
                                                        Object(c.jsx)(ll, {
                                                            src: "/img/maskot.png",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        Object(c.jsxs)(tl, {
                                            children: [
                                                Object(c.jsxs)(nl, {
                                                    children: [
                                                        "EPSILON ",
                                                        Object(c.jsx)(
                                                            "wbr",
                                                            {}
                                                        ),
                                                        Object(c.jsx)(fl, {
                                                            children: "2022",
                                                        }),
                                                    ],
                                                }),
                                                Object(c.jsx)(rl, {
                                                    children:
                                                        "ExPose StatistIc chalLenge On National (Epsilon) merupakan kegiatan perlombaan yang membahas mengenai isu terkini yang erat kaitannya dengan bidang statistika dan perlombaan yang diselenggarakan untuk mahassiswaa D3/S1 bertujuan untuk mengembangkan potensi akademik  mahasiswa serta dapat memecahkan permasalahan dan mencari solusi terkait permasalahan yang berhubungan dengan statistika.",
                                                }),
                                                Object(c.jsx)(al, {
                                                    as: "a",
                                                    href: "/login",
                                                    children: "Daftar",
                                                }),
                                            ],
                                        }),
                                        Object(c.jsxs)(il, {
                                            children: [
                                                Object(c.jsxs)(ol, {
                                                    children: [
                                                        Object(c.jsx)(ll, {
                                                            src: "/img/logo.png",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            Object(c.jsx)(cl, {}),
                        ],
                    }),
                });
            };
        function pl(e, t) {
            return (
                t || (t = e.slice(0)),
                Object.freeze(
                    Object.defineProperties(e, {
                        raw: { value: Object.freeze(t) },
                    })
                )
            );
        }
        var ml = ["title", "titleId"];
        function hl() {
            return (hl = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function vl(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function gl(e, t) {
            var n = e.title,
                a = e.titleId,
                i = vl(e, ml);
            return r.createElement(
                "svg",
                hl(
                    {
                        width: 600,
                        height: 600,
                        viewBox: "0 0 600 600",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                n ? r.createElement("title", { id: a }, n) : null,
                Go ||
                    (Go = r.createElement(
                        "g",
                        { transform: "translate(300,300)" },
                        r.createElement("path", {
                            d: "M125,-160.4C159.9,-146.7,184.6,-107.3,178.8,-70.9C173.1,-34.4,137,-0.8,128.8,47.3C120.7,95.5,140.6,158.2,123.8,198.4C107,238.6,53.5,256.3,5.4,248.9C-42.7,241.5,-85.4,208.9,-112.7,172.1C-140,135.3,-151.8,94.2,-146.3,59.7C-140.8,25.1,-117.9,-2.9,-104,-30.1C-90.1,-57.3,-85,-83.7,-69.1,-103.5C-53.3,-123.4,-26.6,-136.7,9.2,-149.4C45.1,-162,90.1,-174,125,-160.4Z",
                            fill: "currentColor",
                        })
                    ))
            );
        }
        var yl,
            bl,
            wl = r.forwardRef(gl),
            xl = (n.p, b.a.div({ position: "relative" })),
            kl = b.a.div({
                maxWidth: "1280px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "5rem",
                paddingBottom: "5rem",
                "@media (min-width: 1024px)": {
                    paddingTop: "6rem",
                    paddingBottom: "6rem",
                },
            }),
            Sl = b.a.div({ display: "flex", flexWrap: "wrap" }),
            Ol = b.a.div({}),
            Cl = Object(b.a)(Ol)({
                width: "100%",
                "@media (min-width: 1280px)": { width: "33.333333%" },
            }),
            jl = Object(b.a)(Ol)({
                width: "100%",
                marginTop: "4rem",
                "@media (min-width: 768px)": { width: "50%" },
                "@media (min-width: 1280px)": {
                    width: "33.333333%",
                    marginTop: "0",
                },
            }),
            El = b.a.div({
                textAlign: "center",
                maxWidth: "32rem",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width: 1280px)": {
                    textAlign: "left",
                    maxWidth: "none",
                    marginLeft: "0",
                    marginRight: "0",
                },
            }),
            Pl = Object(b.a)(Ao)({
                lineHeight: "1.25",
                "@media (min-width: 1280px)": { textAlign: "left" },
            }),
            _l = b.a.p({
                fontSize: "0.875rem",
                fontWeight: "500",
                lineHeight: "1.625",
                "--tw-text-opacity": "1",
                color: "rgba(43, 107, 108, var(--tw-text-opacity))",
                marginTop: "2rem",
                "@media (min-width: 768px)": { fontSize: "1rem" },
                "@media (min-width: 1024px)": { fontSize: "1.125rem" },
            }),
            Tl = b.a.div({
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "24rem",
                "@media (min-width: 768px)": { maxWidth: "20rem" },
                "@media (min-width: 1024px)": { maxWidth: "24rem" },
                "@media (min-width: 1280px)": {
                    marginLeft: "auto",
                    marginRight: "0",
                    maxWidth: "20rem",
                },
            }),
            Ll = b.a.div(function (e) {
                return [
                    'background-image: url("'.concat(e.imageSrc, '");'),
                    {
                        height: "20rem",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "0.25rem",
                    },
                ];
            }),
            Al = b.a.div({ marginTop: "1rem" }),
            Il = b.a.h5({
                fontSize: "1.25rem",
                marginTop: "1rem",
                fontWeight: "700",
            }),
            Rl = Object(b.a)(Yo)(function () {
                return [
                    {
                        "--tw-translate-x": "50%",
                        "--tw-translate-y": "50%",
                        "--tw-rotate": "0",
                        "--tw-skew-x": "0",
                        "--tw-skew-y": "0",
                        "--tw-scale-x": "1",
                        "--tw-scale-y": "1",
                        transform:
                            "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                        width: "5rem",
                        height: "5rem",
                        position: "absolute",
                        right: "0",
                        bottom: "0",
                        fill: "currentColor",
                        "--tw-text-opacity": "1",
                        color: "rgba(221, 107, 32, var(--tw-text-opacity))",
                        zIndex: "-10",
                    },
                ];
            }),
            Ml = Object(b.a)(wl)(yl || (yl = pl(["\n  ", "\n"])), {
                "--tw-translate-x": "66.67%",
                "--tw-translate-y": "-3rem",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                pointerEvents: "none",
                zIndex: "-20",
                position: "absolute",
                right: "0",
                top: "0",
                height: "24rem",
                width: "24rem",
                "--tw-text-opacity": "1",
                color: "rgba(237, 137, 54, var(--tw-text-opacity))",
            }),
            zl = function () {
                var e = Object(r.useContext)(p).lomba;
                return Object(c.jsxs)(xl, {
                    id: "lomba",
                    children: [
                        Object(c.jsx)(kl, {
                            children: Object(c.jsxs)(Sl, {
                                children: [
                                    Object(c.jsx)(Cl, {
                                        children: Object(c.jsxs)(El, {
                                            children: [
                                                Object(c.jsx)(Pl, {
                                                    children: "Lomba",
                                                }),
                                                Object(c.jsx)(_l, {
                                                    children:
                                                        "Rangkaian kegiatan EPSILON 2022 terdiri dari 2 jenis perlombaan, yaitu Olimpiade Statistika dan Lomba Infografis Statistika. Olimpiade Statistika akan dilaksanakan dalam tiga tahap, sedangkan Lomba Infografis Statistika akan dilaksanakan dalam dua tahap.",
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.map(function (e, t) {
                                        return Object(c.jsx)(
                                            jl,
                                            {
                                                children: Object(c.jsxs)(Tl, {
                                                    children: [
                                                        Object(c.jsxs)("div", {
                                                            style: {
                                                                position:
                                                                    "relative",
                                                            },
                                                            children: [
                                                                Object(c.jsx)(
                                                                    Ll,
                                                                    {
                                                                        imageSrc:
                                                                            e.imageSrc,
                                                                    }
                                                                ),
                                                                Object(c.jsx)(
                                                                    Rl,
                                                                    {}
                                                                ),
                                                            ],
                                                        }),
                                                        Object(c.jsx)(Al, {
                                                            children: Object(
                                                                c.jsx
                                                            )(Il, {
                                                                children:
                                                                    e.title,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            },
                                            t
                                        );
                                    }),
                                ],
                            }),
                        }),
                        Object(c.jsx)(Ml, {}),
                    ],
                });
            },
            Nl = ["title", "titleId"];
        function Dl() {
            return (Dl = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function Fl(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function Bl(e, t) {
            var n = e.title,
                a = e.titleId,
                i = Fl(e, Nl);
            return r.createElement(
                "svg",
                Dl({ viewBox: "0 0 600 600", ref: t, "aria-labelledby": a }, i),
                n ? r.createElement("title", { id: a }, n) : null,
                bl ||
                    (bl = r.createElement(
                        "g",
                        { transform: "translate(300,300)" },
                        r.createElement("path", {
                            d: "M103.9,-95.2C140.4,-67.4,179.7,-33.7,191.6,11.9C203.5,57.5,188,115,151.5,150.2C115,185.4,57.5,198.2,-5.4,203.6C-68.4,209,-136.7,207,-183.4,171.9C-230,136.7,-255,68.4,-233.5,21.6C-211.9,-25.2,-143.8,-50.4,-97.1,-78.3C-50.4,-106.1,-25.2,-136.6,4.2,-140.8C33.7,-145,67.4,-123.1,103.9,-95.2Z",
                            fill: "currentColor",
                        })
                    ))
            );
        }
        var Vl,
            Hl = r.forwardRef(Bl),
            Wl =
                (n.p,
                b.a.div.withConfig({
                    displayName: "LombaOlimpiade__Container",
                    componentId: "sc-170vlhn-0",
                })({ position: "relative" })),
            Ul = b.a.div.withConfig({
                displayName: "LombaOlimpiade__TwoColumn",
                componentId: "sc-170vlhn-1",
            })({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: "1280px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "5rem",
                paddingBottom: "5rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                "@media (min-width: 768px)": {
                    flexDirection: "row",
                    paddingTop: "6rem",
                    paddingBottom: "6rem",
                },
            }),
            $l = b.a.div.withConfig({
                displayName: "LombaOlimpiade__Column",
                componentId: "sc-170vlhn-2",
            })({
                width: "100%",
                maxWidth: "28rem",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width: 768px)": {
                    maxWidth: "none",
                    marginLeft: "0",
                    marginRight: "0",
                },
            }),
            Yl = Object(b.a)($l).withConfig({
                displayName: "LombaOlimpiade__ImageColumn",
                componentId: "sc-170vlhn-3",
            })({
                position: "relative",
                flexShrink: "0",
                height: "20rem",
                "@media (min-width: 768px)": {
                    width: "41.666667%",
                    height: "auto",
                },
            }),
            Xl = Object(b.a)($l).withConfig({
                displayName: "LombaOlimpiade__TextColumn",
                componentId: "sc-170vlhn-4",
            })({
                marginTop: "2rem",
                "@media (min-width: 768px)": {
                    width: "58.333333%",
                    marginTop: "0",
                    marginLeft: "3rem",
                    order: "9999",
                },
                "@media (min-width: 1024px)": { marginLeft: "4rem" },
            }),
            Kl = b.a.div.withConfig({
                displayName: "LombaOlimpiade__Image",
                componentId: "sc-170vlhn-5",
            })(function (e) {
                return [
                    'background-image: url("'.concat(e.imageSrc, '");'),
                    {
                        borderRadius: "0.25rem",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "100%",
                    },
                ];
            }),
            ql = Object(b.a)(Yo).withConfig({
                displayName: "LombaOlimpiade__DotPattern",
                componentId: "sc-170vlhn-6",
            })(function () {
                return [
                    {
                        "--tw-translate-x": "50%",
                        "--tw-translate-y": "50%",
                        "--tw-rotate": "0",
                        "--tw-skew-x": "0",
                        "--tw-skew-y": "0",
                        "--tw-scale-x": "1",
                        "--tw-scale-y": "1",
                        transform:
                            "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                        width: "5rem",
                        height: "5rem",
                        position: "absolute",
                        right: "0",
                        bottom: "0",
                        fill: "currentColor",
                        "--tw-text-opacity": "1",
                        color: "rgba(221, 107, 32, var(--tw-text-opacity))",
                        zIndex: "-10",
                    },
                ];
            }),
            Ql = b.a.div.withConfig({
                displayName: "LombaOlimpiade__TextContent",
                componentId: "sc-170vlhn-7",
            })({
                textAlign: "center",
                "@media (min-width: 768px)": { textAlign: "left" },
                "@media (min-width: 1024px)": {
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                },
            }),
            Gl = Object(b.a)(Ao).withConfig({
                displayName: "LombaOlimpiade__Heading",
                componentId: "sc-170vlhn-8",
            })({
                marginTop: "1rem",
                fontWeight: "900",
                textAlign: "left",
                fontSize: "1.875rem",
                lineHeight: "1.25",
                "@media (min-width: 640px)": { fontSize: "2.25rem" },
                "@media (min-width: 1024px)": { fontSize: "3rem" },
            }),
            Zl = b.a.p.withConfig({
                displayName: "LombaOlimpiade__Description",
                componentId: "sc-170vlhn-9",
            })({
                marginTop: "1rem",
                textAlign: "left",
                fontSize: "0.875rem",
                fontWeight: "500",
                lineHeight: "1.625",
                "--tw-text-opacity": "1",
                color: "rgba(43, 107, 108, var(--tw-text-opacity))",
                "@media (min-width: 768px)": { fontSize: "1rem" },
                "@media (min-width: 1024px)": { fontSize: "1.125rem" },
            }),
            Jl = b.a.div.withConfig({
                displayName: "LombaOlimpiade__Prizes",
                componentId: "sc-170vlhn-10",
            })({
                marginTop: "2rem",
                maxWidth: "24rem",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width: 768px)": {
                    marginLeft: "0",
                    marginRight: "0",
                },
            }),
            eu = b.a.div.withConfig({
                displayName: "LombaOlimpiade__Prize",
                componentId: "sc-170vlhn-11",
            })({
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
            }),
            tu = b.a.div.withConfig({
                displayName: "LombaOlimpiade__PrizeText",
                componentId: "sc-170vlhn-12",
            })({
                marginTop: "0",
                marginLeft: "1rem",
                textAlign: "left",
                flex: "1 1 0%",
            }),
            nu = b.a.div.withConfig({
                displayName: "LombaOlimpiade__PrizeHeading",
                componentId: "sc-170vlhn-13",
            })({
                fontWeight: "700",
                fontSize: "1.125rem",
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            ru = Object(b.a)(Mo).withConfig({
                displayName: "LombaOlimpiade__PrimaryButton",
                componentId: "sc-170vlhn-14",
            })({
                marginTop: "2rem",
                fontSize: "0.875rem",
                display: "inline-block",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width: 768px)": {
                    marginTop: "2.5rem",
                    marginLeft: "0",
                    marginRight: "0",
                },
            }),
            au = Object(b.a)(Hl).withConfig({
                displayName: "LombaOlimpiade__DecoratorBlob",
                componentId: "sc-170vlhn-15",
            })(["", ""], {
                "--tw-translate-x": "-66.67%",
                "--tw-translate-y": "0",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                pointerEvents: "none",
                zIndex: "-20",
                position: "absolute",
                left: "0",
                top: "0",
                height: "24rem",
                width: "24rem",
                "--tw-text-opacity": "1",
                color: "rgba(107, 195, 197, var(--tw-text-opacity))",
            }),
            iu = Object(b.a)("span").withConfig({
                displayName: "LombaOlimpiade___StyledSpan",
                componentId: "sc-170vlhn-16",
            })({
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            ou = function () {
                return Object(c.jsxs)(Wl, {
                    children: [
                        Object(c.jsxs)(Ul, {
                            children: [
                                Object(c.jsxs)(Yl, {
                                    children: [
                                        Object(c.jsx)(Kl, { imageSrc: l }),
                                        Object(c.jsx)(ql, {}),
                                    ],
                                }),
                                Object(c.jsx)(Xl, {
                                    children: Object(c.jsxs)(Ql, {
                                        children: [
                                            Object(c.jsxs)(Gl, {
                                                children: [
                                                    "Olimpiade ",
                                                    Object(c.jsx)(iu, {
                                                        children: "Statistika",
                                                    }),
                                                ],
                                            }),
                                            Object(c.jsx)(Zl, {
                                                children:
                                                    "Pada kompetisi ini, peserta akan menunjukkan kemampuannya dalam mengerjakan soal-soal statistika, menggunakan teori statistika dalam memecahkan suatu masalah, menganalisis data, dan menyelesaikan suatu kasus dengan bantuan statistika.",
                                            }),
                                            Object(c.jsx)(Jl, {
                                                children: [].map(function (
                                                    e,
                                                    t
                                                ) {
                                                    return Object(c.jsxs)(
                                                        eu,
                                                        {
                                                            children: [
                                                                Object(c.jsx)(
                                                                    e.Icon,
                                                                    {}
                                                                ),
                                                                Object(c.jsx)(
                                                                    tu,
                                                                    {
                                                                        children:
                                                                            Object(
                                                                                c.jsx
                                                                            )(
                                                                                nu,
                                                                                {
                                                                                    children:
                                                                                        e.title,
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        },
                                                        t
                                                    );
                                                }),
                                            }),
                                            Object(c.jsx)(ru, {
                                                as: "a",
                                                href: "https://s.stis.ac.id/GuidelineLombaOlimpiadeStatistika2022",
                                                children: "DOWNLOAD GUIDEBOOK",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        Object(c.jsx)(au, {}),
                    ],
                });
            },
            lu = ["title", "titleId"];
        function uu() {
            return (uu = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function su(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function cu(e, t) {
            var n = e.title,
                a = e.titleId,
                i = su(e, lu);
            return r.createElement(
                "svg",
                uu(
                    {
                        width: 600,
                        height: 600,
                        viewBox: "0 0 600 600",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                n ? r.createElement("title", { id: a }, n) : null,
                Vl ||
                    (Vl = r.createElement(
                        "g",
                        { transform: "translate(300,300)" },
                        r.createElement("path", {
                            d: "M176.2,-106.9C208.7,-45.5,201.8,33.5,165.8,99.4C129.9,165.3,65,218.2,-9.2,223.5C-83.4,228.8,-166.9,186.7,-201.6,121.4C-236.4,56.2,-222.6,-32.2,-180.9,-98.9C-139.1,-165.7,-69.6,-210.8,1.2,-211.5C71.9,-212.2,143.8,-168.3,176.2,-106.9Z",
                            fill: "currentColor",
                        })
                    ))
            );
        }
        var fu,
            du = r.forwardRef(cu),
            pu =
                (n.p,
                b.a.div.withConfig({
                    displayName: "LombaInfografis__Container",
                    componentId: "sc-1063elg-0",
                })({ position: "relative" })),
            mu = b.a.div.withConfig({
                displayName: "LombaInfografis__TwoColumn",
                componentId: "sc-1063elg-1",
            })({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: "1280px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "5rem",
                paddingBottom: "5rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                "@media (min-width: 768px)": {
                    flexDirection: "row",
                    paddingTop: "6rem",
                    paddingBottom: "6rem",
                },
            }),
            hu = b.a.div.withConfig({
                displayName: "LombaInfografis__Column",
                componentId: "sc-1063elg-2",
            })({
                width: "100%",
                maxWidth: "28rem",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width: 768px)": {
                    maxWidth: "none",
                    marginLeft: "0",
                    marginRight: "0",
                },
            }),
            vu = Object(b.a)(hu).withConfig({
                displayName: "LombaInfografis__ImageColumn",
                componentId: "sc-1063elg-3",
            })({
                position: "relative",
                flexShrink: "0",
                height: "20rem",
                "@media (min-width: 768px)": {
                    width: "41.666667%",
                    height: "auto",
                },
            }),
            gu = Object(b.a)(hu).withConfig({
                displayName: "LombaInfografis__TextColumn",
                componentId: "sc-1063elg-4",
            })({
                marginTop: "2rem",
                "@media (min-width: 768px)": {
                    width: "58.333333%",
                    marginTop: "0",
                    marginRight: "3rem",
                    order: "-9999",
                },
                "@media (min-width: 1024px)": { marginRight: "4rem" },
            }),
            yu = b.a.div.withConfig({
                displayName: "LombaInfografis__Image",
                componentId: "sc-1063elg-5",
            })(function (e) {
                return [
                    'background-image: url("'.concat(e.imageSrc, '");'),
                    {
                        borderRadius: "0.25rem",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "100%",
                    },
                ];
            }),
            bu = Object(b.a)(Yo).withConfig({
                displayName: "LombaInfografis__DotPattern",
                componentId: "sc-1063elg-6",
            })(function () {
                return [
                    {
                        "--tw-translate-x": "50%",
                        "--tw-translate-y": "50%",
                        "--tw-rotate": "0",
                        "--tw-skew-x": "0",
                        "--tw-skew-y": "0",
                        "--tw-scale-x": "1",
                        "--tw-scale-y": "1",
                        transform:
                            "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                        width: "5rem",
                        height: "5rem",
                        position: "absolute",
                        right: "0",
                        bottom: "0",
                        fill: "currentColor",
                        "--tw-text-opacity": "1",
                        color: "rgba(221, 107, 32, var(--tw-text-opacity))",
                        zIndex: "-10",
                    },
                ];
            }),
            wu = b.a.div.withConfig({
                displayName: "LombaInfografis__TextContent",
                componentId: "sc-1063elg-7",
            })({
                textAlign: "center",
                "@media (min-width: 768px)": { textAlign: "left" },
                "@media (min-width: 1024px)": {
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                },
            }),
            xu = Object(b.a)(Ao).withConfig({
                displayName: "LombaInfografis__Heading",
                componentId: "sc-1063elg-8",
            })({
                marginTop: "1rem",
                fontWeight: "900",
                textAlign: "left",
                fontSize: "1.875rem",
                lineHeight: "1.25",
                "@media (min-width: 640px)": { fontSize: "2.25rem" },
                "@media (min-width: 1024px)": { fontSize: "3rem" },
            }),
            ku = b.a.p.withConfig({
                displayName: "LombaInfografis__Description",
                componentId: "sc-1063elg-9",
            })({
                marginTop: "1rem",
                textAlign: "left",
                fontSize: "0.875rem",
                fontWeight: "500",
                lineHeight: "1.625",
                "--tw-text-opacity": "1",
                color: "rgba(43, 107, 108, var(--tw-text-opacity))",
                "@media (min-width: 768px)": { fontSize: "1rem" },
                "@media (min-width: 1024px)": { fontSize: "1.125rem" },
            }),
            Su = b.a.div.withConfig({
                displayName: "LombaInfografis__Prizes",
                componentId: "sc-1063elg-10",
            })({
                marginTop: "2rem",
                maxWidth: "24rem",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width: 768px)": {
                    marginLeft: "0",
                    marginRight: "0",
                },
            }),
            Ou = b.a.div.withConfig({
                displayName: "LombaInfografis__Prize",
                componentId: "sc-1063elg-11",
            })({
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
            }),
            Cu = b.a.div.withConfig({
                displayName: "LombaInfografis__PrizeText",
                componentId: "sc-1063elg-12",
            })({
                marginTop: "0",
                marginLeft: "1rem",
                textAlign: "left",
                flex: "1 1 0%",
            }),
            ju = b.a.div.withConfig({
                displayName: "LombaInfografis__PrizeHeading",
                componentId: "sc-1063elg-13",
            })({
                fontWeight: "700",
                fontSize: "1.125rem",
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            Eu = Object(b.a)(Mo).withConfig({
                displayName: "LombaInfografis__PrimaryButton",
                componentId: "sc-1063elg-14",
            })({
                marginTop: "2rem",
                fontSize: "0.875rem",
                display: "inline-block",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width: 768px)": {
                    marginTop: "2.5rem",
                    marginLeft: "0",
                    marginRight: "0",
                },
            }),
            Pu = Object(b.a)(du).withConfig({
                displayName: "LombaInfografis__DecoratorBlob",
                componentId: "sc-1063elg-15",
            })(["", ""], {
                "--tw-translate-x": "66.67%",
                "--tw-translate-y": "-3rem",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                pointerEvents: "none",
                zIndex: "-20",
                position: "absolute",
                right: "0",
                bottom: "0",
                height: "24rem",
                width: "24rem",
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            _u = Object(b.a)("span").withConfig({
                displayName: "LombaInfografis___StyledSpan",
                componentId: "sc-1063elg-16",
            })({
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            Tu = function () {
                return Object(c.jsxs)(pu, {
                    children: [
                        Object(c.jsxs)(mu, {
                            children: [
                                Object(c.jsxs)(vu, {
                                    children: [
                                        Object(c.jsx)(yu, { imageSrc: u }),
                                        Object(c.jsx)(bu, {}),
                                    ],
                                }),
                                Object(c.jsx)(gu, {
                                    children: Object(c.jsxs)(wu, {
                                        children: [
                                            Object(c.jsxs)(xu, {
                                                children: [
                                                    "Lomba ",
                                                    Object(c.jsx)(_u, {
                                                        children:
                                                            "Infografis Statistika",
                                                    }),
                                                ],
                                            }),
                                            Object(c.jsx)(ku, {
                                                children:
                                                    "Pada kompetisi ini, peserta akan menyajikan informasi mengenai suatu topik yang sesuai dengan tema yang telah ditentukan ke dalam sebuah infografis yang menarik, akurat, dan relevan sehingga pembaca dapat dengan mudah memahami informasi tersebut.",
                                            }),
                                            Object(c.jsx)(Su, {
                                                children: [].map(function (
                                                    e,
                                                    t
                                                ) {
                                                    return Object(c.jsxs)(
                                                        Ou,
                                                        {
                                                            children: [
                                                                Object(c.jsx)(
                                                                    e.Icon,
                                                                    {}
                                                                ),
                                                                Object(c.jsx)(
                                                                    Cu,
                                                                    {
                                                                        children:
                                                                            Object(
                                                                                c.jsx
                                                                            )(
                                                                                ju,
                                                                                {
                                                                                    children:
                                                                                        e.title,
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        },
                                                        t
                                                    );
                                                }),
                                            }),
                                            Object(c.jsx)(Eu, {
                                                as: "a",
                                                href: "https://drive.google.com/file/d/1pSl6Emup0hEMGWC57GQeEOpPFU2Gbai6/view?usp=sharing",
                                                children: "DOWNLOAD GUIDEBOOK",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        Object(c.jsx)(Pu, {}),
                    ],
                });
            },
            Lu = n.p + "static/media/semnas.4be5448f.png",
            Au = b.a.div.withConfig({
                displayName: "Semnas__Container",
                componentId: "sc-1s8m1ru-0",
            })({ position: "relative" }),
            Iu = b.a.div.withConfig({
                displayName: "Semnas__Column",
                componentId: "sc-1s8m1ru-1",
            })({
                width: "100%",
                maxWidth: "28rem",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width: 768px)": {
                    maxWidth: "none",
                    marginLeft: "0",
                    marginRight: "0",
                },
            }),
            Ru = b.a.div.withConfig({
                displayName: "Semnas__TwoColumn",
                componentId: "sc-1s8m1ru-2",
            })({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: "1280px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "5rem",
                paddingBottom: "5rem",
                "@media (min-width: 768px)": {
                    flexDirection: "row",
                    paddingTop: "6rem",
                    paddingBottom: "6rem",
                },
            }),
            Mu = Object(b.a)(Iu).withConfig({
                displayName: "Semnas__ImageColumn",
                componentId: "sc-1s8m1ru-3",
            })({
                flexShrink: "0",
                height: "20rem",
                position: "relative",
                "@media (min-width: 768px)": {
                    width: "41.666667%",
                    height: "auto",
                },
            }),
            zu = b.a.div.withConfig({
                displayName: "Semnas__Image",
                componentId: "sc-1s8m1ru-4",
            })(function (e) {
                return [
                    'background-image: url("'.concat(e.imageSrc, '");'),
                    {
                        borderRadius: "0.25rem",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "100%",
                    },
                ];
            }),
            Nu = Object(b.a)(Yo).withConfig({
                displayName: "Semnas__DecoratorBlob",
                componentId: "sc-1s8m1ru-5",
            })(function () {
                return [
                    {
                        "--tw-translate-x": "50%",
                        "--tw-translate-y": "50%",
                        "--tw-rotate": "0",
                        "--tw-skew-x": "0",
                        "--tw-skew-y": "0",
                        "--tw-scale-x": "1",
                        "--tw-scale-y": "1",
                        transform:
                            "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                        width: "5rem",
                        height: "5rem",
                        position: "absolute",
                        right: "0",
                        bottom: "0",
                        fill: "currentColor",
                        "--tw-text-opacity": "1",
                        color: "rgba(221, 107, 32, var(--tw-text-opacity))",
                        zIndex: "-10",
                    },
                ];
            }),
            Du = Object(b.a)(Iu).withConfig({
                displayName: "Semnas__TextColumn",
                componentId: "sc-1s8m1ru-6",
            })({
                marginTop: "4rem",
                "@media (min-width: 768px)": {
                    width: "58.333333%",
                    marginTop: "0",
                    marginLeft: "3rem",
                    order: "9999",
                },
                "@media (min-width: 1024px)": { marginLeft: "4rem" },
            }),
            Fu = b.a.div.withConfig({
                displayName: "Semnas__TextContent",
                componentId: "sc-1s8m1ru-7",
            })({
                textAlign: "center",
                "@media (min-width: 768px)": { textAlign: "left" },
                "@media (min-width: 1024px)": {
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                },
            }),
            Bu = Object(b.a)(Io).withConfig({
                displayName: "Semnas__Subheading",
                componentId: "sc-1s8m1ru-8",
            })({
                textAlign: "center",
                "@media (min-width: 768px)": { textAlign: "left" },
            }),
            Vu = Object(b.a)(Ao).withConfig({
                displayName: "Semnas__Heading",
                componentId: "sc-1s8m1ru-9",
            })({
                marginTop: "1rem",
                fontWeight: "900",
                textAlign: "center",
                fontSize: "1.875rem",
                lineHeight: "1.25",
                "@media (min-width: 640px)": { fontSize: "2.25rem" },
                "@media (min-width: 768px)": { textAlign: "left" },
                "@media (min-width: 1024px)": { fontSize: "3rem" },
            }),
            Hu = b.a.p.withConfig({
                displayName: "Semnas__Description",
                componentId: "sc-1s8m1ru-10",
            })({
                marginTop: "1rem",
                textAlign: "center",
                fontSize: "0.875rem",
                fontWeight: "500",
                lineHeight: "1.625",
                "--tw-text-opacity": "1",
                color: "rgba(43, 107, 108, var(--tw-text-opacity))",
                "@media (min-width: 768px)": {
                    textAlign: "left",
                    fontSize: "1rem",
                },
                "@media (min-width: 1024px)": { fontSize: "1.125rem" },
            }),
            Wu = Object(b.a)("span").withConfig({
                displayName: "Semnas___StyledSpan",
                componentId: "sc-1s8m1ru-11",
            })({
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            Uu = function () {
                return Object(c.jsx)(Au, {
                    id: "semnas",
                    children: Object(c.jsxs)(Ru, {
                        children: [
                            Object(c.jsxs)(Mu, {
                                children: [
                                    Object(c.jsx)(zu, { imageSrc: Lu }),
                                    Object(c.jsx)(Nu, {}),
                                ],
                            }),
                            Object(c.jsx)(Du, {
                                children: Object(c.jsxs)(Fu, {
                                    children: [
                                        Object(c.jsx)(Bu, {
                                            children: "Semnas",
                                        }),
                                        Object(c.jsxs)(Vu, {
                                            children: [
                                                "Seminar ",
                                                Object(c.jsx)("wbr", {}),
                                                Object(c.jsx)(Wu, {
                                                    children: "Nasional.",
                                                }),
                                            ],
                                        }),
                                        Object(c.jsx)(Hu, {
                                            children:
                                                "Seminar Nasional (Semnas) merupakan acara besar di Politeknik Statistika STIS yang diadakan setiap tahun dalam rangka memperingati Hari Statistik Nasional. Pada tahun ini, EPSILON mendapatkan kesempatan untuk berkolaborasi dengan Semnas dalam salah satu kegiatannya. Tema yang diangkat dalam Semnas tahun ini adalah \u201cEra baru Official Statistics: Implementasi Big Data, Small Area Estimation, dan Geospatial dalam Mendukung SDG\u2019s\u201d. Seminar ini bertujuan untuk menghasilkan berbagai pemikiran solutif, inovatif, dan adaptif terkait isu, strategi, dan metode yang memanfaatkan Official Statistics guna mendukung SDG\u2019s. Terdapat tiga sub tema yang diangkat, yaitu Official Statistics, Sains Data, dan Aplikasi Statistika.",
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                });
            },
            $u = ["title", "titleId"];
        function Yu() {
            return (Yu = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function Xu(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function Ku(e, t) {
            var n = e.title,
                a = e.titleId,
                i = Xu(e, $u);
            return r.createElement(
                "svg",
                Yu({ viewBox: "0 0 600 600", ref: t, "aria-labelledby": a }, i),
                n ? r.createElement("title", { id: a }, n) : null,
                fu ||
                    (fu = r.createElement(
                        "g",
                        { transform: "translate(300,300)" },
                        r.createElement("path", {
                            d: "M86.4,-125.7C108.9,-102.5,122,-73.2,149.6,-37.1C177.2,-0.9,219.4,42,223.6,86.1C227.8,130.3,194.2,175.6,150.6,200.7C107,225.9,53.5,231,5.2,223.8C-43.1,216.7,-86.2,197.3,-109.5,165.6C-132.8,133.8,-136.3,89.6,-138.8,52.1C-141.4,14.6,-143,-16.2,-147,-61.4C-151,-106.6,-157.5,-166.1,-133.4,-188.8C-109.3,-211.5,-54.7,-197.2,-11.4,-181.6C31.9,-166,63.9,-148.9,86.4,-125.7Z",
                            fill: "currentColor",
                        })
                    ))
            );
        }
        var qu,
            Qu = r.forwardRef(Ku),
            Gu = (n.p, ["title", "titleId"]);
        function Zu() {
            return (Zu = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function Ju(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function es(e, t) {
            var n = e.title,
                a = e.titleId,
                i = Ju(e, Gu);
            return r.createElement(
                "svg",
                Zu({ viewBox: "0 0 600 600", ref: t, "aria-labelledby": a }, i),
                n ? r.createElement("title", { id: a }, n) : null,
                qu ||
                    (qu = r.createElement(
                        "g",
                        { transform: "translate(300,300)" },
                        r.createElement("path", {
                            d: "M134.6,-126.1C171.1,-98.1,195,-49,182.7,-12.4C170.3,24.3,121.6,48.6,85.1,84.6C48.6,120.6,24.3,168.3,-21.9,190.2C-68.1,212.1,-136.2,208.2,-181.1,172.2C-225.9,136.2,-247.5,68.1,-229.7,17.8C-211.9,-32.5,-154.7,-65.1,-109.9,-93.1C-65.1,-121.1,-32.5,-144.5,8.2,-152.8C49,-161,98.1,-154.1,134.6,-126.1Z",
                            fill: "currentColor",
                        })
                    ))
            );
        }
        var ts,
            ns,
            rs,
            as = r.forwardRef(es),
            is = (n.p, Object(b.a)(Ao)({ width: "100%" })),
            os = Object(b.a)(Ro)({ width: "100%", textAlign: "center" }),
            ls = b.a.span({
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            us = b.a.div({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }),
            ss = b.a.div({
                marginTop: "3rem",
                maxWidth: "56rem",
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
            }),
            cs = b.a.div({
                display: "flex",
                flexDirection: "column",
                gridTemplateColumns: "repeat(9, minmax(0, 1fr))",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "0.5rem",
                "@media (min-width: 768px)": { display: "grid" },
            }),
            fs = b.a.div({
                gridColumnStart: "5",
                gridColumnEnd: "6",
                position: "relative",
                marginRight: "2.5rem",
                display: "flex",
                alignItems: "center",
                "@media (min-width: 768px)": {
                    marginLeft: "auto",
                    marginRight: "auto",
                },
            }),
            ds = b.a.div({
                height: "100%",
                width: "0.25rem",
                marginLeft: "auto",
                marginRight: "auto",
                "--tw-bg-opacity": "1",
                backgroundColor: "rgba(221, 107, 32, var(--tw-bg-opacity))",
            }),
            ps = b.a.div({
                width: "2rem",
                height: "2rem",
                position: "absolute",
                marginLeft: "-0.75rem",
                marginTop: "-0.75rem",
                borderRadius: "9999px",
                "--tw-shadow":
                    "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                boxShadow:
                    "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                "--tw-bg-opacity": "1",
                backgroundColor: "rgba(49, 130, 206, var(--tw-bg-opacity))",
                display: "flex",
                "--tw-text-opacity": "1",
                color: "rgba(255, 255, 255, var(--tw-text-opacity))",
                fontWeight: "700",
                alignItems: "center",
                justifyContent: "center",
            }),
            ms = b.a.div(function (e) {
                return [
                    e.isLeft
                        ? {
                              display: "flex",
                              flexDirection: "row-reverse",
                              "@media (min-width: 768px)": {
                                  display: "contents",
                              },
                          }
                        : {
                              display: "flex",
                              "@media (min-width: 768px)": {
                                  display: "contents",
                              },
                          },
                ];
            }),
            hs = b.a.div(function (e) {
                return [
                    {
                        borderRadius: "0.375rem",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        padding: "1rem",
                        "--tw-shadow":
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        boxShadow:
                            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                        width: "100%",
                        marginRight: "auto",
                        borderWidth: "1px",
                    },
                    e.isLeft
                        ? {
                              gridColumnStart: "1",
                              gridColumnEnd: "5",
                              "--tw-bg-opacity": "1",
                              backgroundColor:
                                  "rgba(221, 107, 32, var(--tw-bg-opacity))",
                              "@media (min-width: 768px)": {
                                  marginLeft: "auto",
                                  marginRight: "0",
                                  textAlign: "right",
                              },
                          }
                        : {
                              gridColumnStart: "6",
                              gridColumnEnd: "10",
                              "--tw-bg-opacity": "1",
                              backgroundColor:
                                  "rgba(49, 130, 206, var(--tw-bg-opacity))",
                          },
                ];
            }),
            vs = b.a.h3({
                fontWeight: "700",
                "--tw-text-opacity": "1",
                color: "rgba(255, 255, 255, var(--tw-text-opacity))",
                fontSize: "1.25rem",
                marginBottom: "0.25rem",
            }),
            gs = b.a.p({
                fontSize: "0.875rem",
                lineHeight: "1.375",
                letterSpacing: "0.025em",
                "--tw-text-opacity": "1",
                color: "rgba(255, 255, 255, var(--tw-text-opacity))",
            }),
            ys = Object(b.a)(Qu)(ts || (ts = pl(["\n  ", "\n"])), {
                "--tw-translate-x": "66.67%",
                "--tw-translate-y": "-3rem",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                pointerEvents: "none",
                zIndex: "-20",
                position: "absolute",
                right: "0",
                bottom: "0",
                height: "24rem",
                width: "24rem",
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            bs = Object(b.a)(as)(ns || (ns = pl(["\n  ", "\n"])), {
                "--tw-translate-x": "-66.67%",
                "--tw-translate-y": "0",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                pointerEvents: "none",
                zIndex: "-20",
                position: "absolute",
                left: "0",
                top: "0",
                height: "24rem",
                width: "24rem",
                "--tw-text-opacity": "1",
                color: "rgba(49, 130, 206, var(--tw-text-opacity))",
            }),
            ws = function (e) {
                var t = e.index;
                return Object(c.jsxs)(fs, {
                    children: [
                        Object(c.jsx)(ps, { children: t }),
                        Object(c.jsx)(ds, {}),
                    ],
                });
            },
            xs = function (e) {
                var t = e.isLeft,
                    n = void 0 !== t && t,
                    r = e.title,
                    a = e.date,
                    i = e.index;
                return Object(c.jsxs)(ms, {
                    isLeft: n,
                    children: [
                        !n && Object(c.jsx)(ws, { index: i }),
                        Object(c.jsxs)(hs, {
                            isLeft: n,
                            children: [
                                Object(c.jsx)(vs, { children: r }),
                                Object(c.jsx)(gs, { children: a }),
                            ],
                        }),
                        n && Object(c.jsx)(ws, { index: i }),
                    ],
                });
            },
            ks = function () {
                var e = Object(r.useContext)(p).timeline;
                return Object(c.jsx)("div", {
                    children: Object(c.jsxs)(zo, {
                        children: [
                            Object(c.jsxs)(No, {
                                children: [
                                    Object(c.jsx)(us, {
                                        children: Object(c.jsxs)(is, {
                                            children: [
                                                "Timeline ",
                                                Object(c.jsx)(ls, {
                                                    children: "EPSILON 2022",
                                                }),
                                            ],
                                        }),
                                    }),
                                    Object(c.jsxs)(ss, {
                                        children: [
                                            Object(c.jsx)(cs, {
                                                children: e.map(function (
                                                    e,
                                                    t
                                                ) {
                                                    return Object(c.jsx)(
                                                        xs,
                                                        {
                                                            isLeft: t % 2 === 0,
                                                            title: e.title,
                                                            date: e.date,
                                                            index: t + 1,
                                                        },
                                                        t
                                                    );
                                                }),
                                            }),
                                            Object(c.jsx)(os, {
                                                children: "*) Jadwal Tentatif",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(c.jsx)(ys, {}),
                            Object(c.jsx)(bs, {}),
                        ],
                    }),
                });
            },
            Ss = ["title", "titleId"];
        function Os() {
            return (Os = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function Cs(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function js(e, t) {
            var n = e.title,
                a = e.titleId,
                i = Cs(e, Ss);
            return r.createElement(
                "svg",
                Os({ viewBox: "0 0 600 600", ref: t, "aria-labelledby": a }, i),
                n ? r.createElement("title", { id: a }, n) : null,
                rs ||
                    (rs = r.createElement(
                        "g",
                        { transform: "translate(300,300)" },
                        r.createElement("path", {
                            d: "M153.6,-239C199.1,-209.8,236,-167.2,258.4,-118C280.9,-68.9,288.9,-13.1,281.2,40.4C273.5,93.9,250.1,145.2,214.7,186.1C179.3,226.9,131.9,257.4,80,272.6C28.2,287.8,-28.2,287.8,-80,272.6C-131.9,257.4,-179.3,226.9,-214.7,186.1C-250.1,145.2,-273.5,93.9,-281.2,40.4C-288.9,-13.1,-280.9,-68.9,-258.4,-118C-236,-167.2,-199.1,-209.8,-153.6,-239C-108.1,-268.3,-54.1,-284.1,0,-284.1C54.1,-284.1,108.1,-268.3,153.6,-239Z",
                            fill: "currentColor",
                        })
                    ))
            );
        }
        var Es,
            Ps = r.forwardRef(js),
            _s =
                (n.p,
                b.a.div({
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgba(237, 137, 54, var(--tw-bg-opacity))",
                    borderRadius: "0.5rem",
                    position: "relative",
                    "@media (min-width: 1024px)": {
                        paddingTop: "6rem",
                        paddingBottom: "6rem",
                    },
                })),
            Ts = b.a.div({
                paddingLeft: "2rem",
                paddingRight: "2rem",
                maxWidth: "1024px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                alignItems: "center",
                position: "relative",
                zIndex: "10",
                flexDirection: "column",
                textAlign: "center",
                "@media (min-width: 1024px)": {
                    flexDirection: "row",
                    textAlign: "left",
                },
            }),
            Ls = b.a.div({
                maxWidth: "32rem",
                "@media (min-width: 1024px)": { width: "50%" },
            }),
            As = Object(b.a)(Ls)({}),
            Is = b.a.h5({
                "--tw-text-opacity": "1",
                color: "rgba(247, 250, 252, var(--tw-text-opacity))",
                fontSize: "1.5rem",
                fontWeight: "700",
                "@media (min-width: 640px)": { fontSize: "1.875rem" },
            }),
            Rs = Object(b.a)(Ls)({
                display: "flex",
                justifyContent: "center",
                marginTop: "1.5rem",
                flexDirection: "column",
                "@media (min-width: 640px)": { flexDirection: "row" },
                "@media (min-width: 1024px)": {
                    justifyContent: "flex-end",
                    marginTop: "0",
                },
            }),
            Ms = b.a.a({
                transitionProperty:
                    "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                width: "100%",
                fontSize: "0.875rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                marginTop: "1rem",
                ":first-child": { marginTop: "0" },
                borderRadius: "9999px",
                fontWeight: "700",
                borderWidth: "1px",
                borderColor: "transparent",
                letterSpacing: "0.025em",
                transitionDuration: "300ms",
                ":focus": {
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                    "--tw-shadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
                    boxShadow:
                        "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                },
                "@media (min-width: 640px)": {
                    width: "auto",
                    fontSize: "1rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    marginTop: "0",
                    marginRight: "2rem",
                    ":last-child": { marginRight: "0" },
                },
                "@media (min-width: 1024px)": {
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                },
            }),
            zs = Object(b.a)(Ms)({
                "--tw-bg-opacity": "1",
                backgroundColor: "rgba(49, 130, 206, var(--tw-bg-opacity))",
                "--tw-text-opacity": "1",
                color: "rgba(247, 250, 252, var(--tw-text-opacity))",
                "--tw-shadow":
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                boxShadow:
                    "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                ":hover, :focus": {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgba(229, 62, 62, var(--tw-bg-opacity))",
                    "--tw-text-opacity": "1",
                    color: "rgba(237, 242, 247, var(--tw-text-opacity))",
                },
            }),
            Ns = b.a.div({
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                overflow: "hidden",
                borderRadius: "0.5rem",
            }),
            Ds = Object(b.a)(Ps)({
                "--tw-translate-x": "-5rem",
                "--tw-translate-y": "8rem",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "20rem",
                height: "20rem",
                "--tw-text-opacity": "1",
                color: "rgba(246, 224, 94, var(--tw-text-opacity))",
                opacity: "0.5",
            }),
            Fs = Object(b.a)(Ps)({
                "--tw-translate-x": "5rem",
                "--tw-translate-y": "-16rem",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                position: "absolute",
                top: "0",
                right: "0",
                width: "20rem",
                height: "20rem",
                "--tw-text-opacity": "1",
                color: "rgba(246, 224, 94, var(--tw-text-opacity))",
                opacity: "0.5",
            }),
            Bs = function () {
                return Object(c.jsx)(zo, {
                    children: Object(c.jsx)(No, {
                        children: Object(c.jsxs)(_s, {
                            children: [
                                Object(c.jsxs)(Ts, {
                                    children: [
                                        Object(c.jsx)(As, {
                                            children: Object(c.jsx)(Is, {
                                                children:
                                                    "Raih Kesempatan untuk Berkompetisi di bidang Statistika Nasional!",
                                            }),
                                        }),
                                        Object(c.jsx)(Rs, {
                                            children: Object(c.jsx)(zs, {
                                                href: "/register",
                                                children: "Daftar",
                                            }),
                                        }),
                                    ],
                                }),
                                Object(c.jsxs)(Ns, {
                                    children: [
                                        Object(c.jsx)(Ds, {}),
                                        Object(c.jsx)(Fs, {}),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            },
            Vs = ["title", "titleId"];
        function Hs() {
            return (Hs = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function Ws(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function Us(e, t) {
            var n = e.title,
                a = e.titleId,
                i = Ws(e, Vs);
            return r.createElement(
                "svg",
                Hs(
                    {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-chevron-down",
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                n ? r.createElement("title", { id: a }, n) : null,
                Es ||
                    (Es = r.createElement("polyline", {
                        points: "6 9 12 15 18 9",
                    }))
            );
        }
        var $s,
            Ys = r.forwardRef(Us),
            Xs = (n.p, ["title", "titleId"]);
        function Ks() {
            return (Ks = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function qs(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function Qs(e, t) {
            var n = e.title,
                a = e.titleId,
                i = qs(e, Xs);
            return r.createElement(
                "svg",
                Ks(
                    {
                        width: 600,
                        height: 600,
                        viewBox: "0 0 600 600",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                n ? r.createElement("title", { id: a }, n) : null,
                $s ||
                    ($s = r.createElement(
                        "g",
                        { transform: "translate(300,300)" },
                        r.createElement("path", {
                            d: "M82,-98.3C129.8,-57.7,208.2,-54.1,229.6,-26.6C251.1,1,215.6,52.5,172.9,74.9C130.2,97.2,80.3,90.4,37.8,107.5C-4.8,124.7,-40,165.7,-63.3,162.3C-86.5,158.8,-97.8,110.9,-109.3,72.2C-120.7,33.5,-132.2,4.1,-140.1,-37.4C-147.9,-79,-152.1,-132.6,-128.1,-177.3C-104.1,-222.1,-52.1,-258,-17.5,-237.2C17.1,-216.4,34.3,-138.9,82,-98.3Z",
                            fill: "currentColor",
                        })
                    ))
            );
        }
        var Gs,
            Zs,
            Js,
            ec,
            tc,
            nc,
            rc = r.forwardRef(Qs),
            ac =
                (n.p,
                Object(b.a)(Io)({ marginBottom: "1rem", textAlign: "center" })),
            ic = Object(b.a)(Ao)({ width: "100%" }),
            oc = Object(b.a)(Ro)({ width: "100%", textAlign: "center" }),
            lc = b.a.span({
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            uc = b.a.div({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }),
            sc = b.a.dl({
                marginTop: "3rem",
                maxWidth: "56rem",
                position: "relative",
            }),
            cc = b.a.div({
                transitionProperty:
                    "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                cursor: "pointer",
                userSelect: "none",
                marginTop: "1.25rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem",
                borderRadius: "0.5rem",
                "--tw-text-opacity": "1",
                color: "rgba(45, 55, 72, var(--tw-text-opacity))",
                ":hover": {
                    "--tw-text-opacity": "1",
                    color: "rgba(26, 32, 44, var(--tw-text-opacity))",
                    "--tw-bg-opacity": "1",
                    backgroundColor:
                        "rgba(226, 232, 240, var(--tw-bg-opacity))",
                },
                "--tw-bg-opacity": "1",
                backgroundColor: "rgba(237, 242, 247, var(--tw-bg-opacity))",
                transitionDuration: "300ms",
                "@media (min-width: 640px)": {
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                },
            }),
            fc = b.a.dt({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }),
            dc = b.a.span({
                fontSize: "1.125rem",
                fontWeight: "600",
                "@media (min-width: 1024px)": { fontSize: "1.25rem" },
            }),
            pc = So(
                b.a.span(
                    Gs || (Gs = pl(["\n  ", "\n  svg {\n    ", "\n  }\n"])),
                    {
                        transitionProperty:
                            "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                        marginLeft: "0.5rem",
                        transitionDuration: "300ms",
                    },
                    { width: "1.5rem", height: "1.5rem" }
                )
            ),
            mc = So(
                b.a.dd({
                    pointerEvents: "none",
                    fontSize: "0.875rem",
                    lineHeight: "1.625",
                    "@media (min-width: 640px)": { fontSize: "1rem" },
                })
            ),
            hc = Object(b.a)(rc)(Zs || (Zs = pl(["\n  ", "\n"])), {
                "--tw-translate-x": "66.67%",
                "--tw-translate-y": "-3rem",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                pointerEvents: "none",
                zIndex: "-20",
                position: "absolute",
                right: "0",
                top: "0",
                height: "24rem",
                width: "24rem",
                "--tw-text-opacity": "1",
                color: "rgba(49, 130, 206, var(--tw-text-opacity))",
            }),
            vc = Object(b.a)(Ps)(Js || (Js = pl(["\n  ", "\n"])), {
                "--tw-translate-x": "-66.67%",
                "--tw-translate-y": "0",
                "--tw-rotate": "0",
                "--tw-skew-x": "0",
                "--tw-skew-y": "0",
                "--tw-scale-x": "1",
                "--tw-scale-y": "1",
                transform:
                    "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                pointerEvents: "none",
                zIndex: "-20",
                position: "absolute",
                left: "0",
                bottom: "0",
                height: "24rem",
                width: "24rem",
                "--tw-text-opacity": "1",
                color: "rgba(221, 107, 32, var(--tw-text-opacity))",
            }),
            gc = function () {
                var e = Object(r.useContext)(p).faqs,
                    t = y(Object(r.useState)(null), 2),
                    n = t[0],
                    a = t[1];
                return Object(c.jsxs)(zo, {
                    id: "faq",
                    children: [
                        Object(c.jsx)(No, {
                            children: Object(c.jsxs)(uc, {
                                children: [
                                    Object(c.jsxs)("div", {
                                        children: [
                                            Object(c.jsx)(ac, {
                                                children: "FAQS",
                                            }),
                                            Object(c.jsxs)(ic, {
                                                children: [
                                                    "Any ",
                                                    Object(c.jsx)(lc, {
                                                        children: "Questions ?",
                                                    }),
                                                ],
                                            }),
                                            Object(c.jsx)(oc, {}),
                                        ],
                                    }),
                                    Object(c.jsx)(sc, {
                                        children: e.map(function (e, t) {
                                            return Object(c.jsxs)(
                                                cc,
                                                {
                                                    onClick: function () {
                                                        var e;
                                                        a(
                                                            n === (e = t)
                                                                ? null
                                                                : e
                                                        );
                                                    },
                                                    className: "group",
                                                    children: [
                                                        Object(c.jsxs)(fc, {
                                                            children: [
                                                                Object(c.jsx)(
                                                                    dc,
                                                                    {
                                                                        children:
                                                                            e.question,
                                                                    }
                                                                ),
                                                                Object(c.jsx)(
                                                                    pc,
                                                                    {
                                                                        variants:
                                                                            {
                                                                                collapsed:
                                                                                    {
                                                                                        rotate: 0,
                                                                                    },
                                                                                open: {
                                                                                    rotate: -180,
                                                                                },
                                                                            },
                                                                        initial:
                                                                            "collapsed",
                                                                        animate:
                                                                            n ===
                                                                            t
                                                                                ? "open"
                                                                                : "collapsed",
                                                                        transition:
                                                                            {
                                                                                duration: 0.02,
                                                                                ease: [
                                                                                    0.04,
                                                                                    0.62,
                                                                                    0.23,
                                                                                    0.98,
                                                                                ],
                                                                            },
                                                                        children:
                                                                            Object(
                                                                                c.jsx
                                                                            )(
                                                                                Ys,
                                                                                {}
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        Object(c.jsx)(mc, {
                                                            variants: {
                                                                open: {
                                                                    opacity: 1,
                                                                    height: "auto",
                                                                    marginTop:
                                                                        "16px",
                                                                },
                                                                collapsed: {
                                                                    opacity: 0,
                                                                    height: 0,
                                                                    marginTop:
                                                                        "0px",
                                                                },
                                                            },
                                                            initial:
                                                                "collapsed",
                                                            animate:
                                                                n === t
                                                                    ? "open"
                                                                    : "collapsed",
                                                            transition: {
                                                                duration: 0.3,
                                                                ease: [
                                                                    0.04, 0.62,
                                                                    0.23, 0.98,
                                                                ],
                                                            },
                                                            children: e.answer,
                                                        }),
                                                    ],
                                                },
                                                t
                                            );
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        Object(c.jsx)(hc, {}),
                        Object(c.jsx)(vc, {}),
                    ],
                });
            },
            yc = n.p + "static/media/logo.1b417422.svg",
            bc = ["title", "titleId"];
        function wc() {
            return (wc = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function xc(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function kc(e, t) {
            var n = e.title,
                a = e.titleId,
                i = xc(e, bc);
            return r.createElement(
                "svg",
                wc(
                    {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-instagram",
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                n ? r.createElement("title", { id: a }, n) : null,
                ec ||
                    (ec = r.createElement("rect", {
                        x: 2,
                        y: 2,
                        width: 20,
                        height: 20,
                        rx: 5,
                        ry: 5,
                    })),
                tc ||
                    (tc = r.createElement("path", {
                        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                    })),
                nc ||
                    (nc = r.createElement("line", {
                        x1: 17.5,
                        y1: 6.5,
                        x2: 17.51,
                        y2: 6.5,
                    }))
            );
        }
        var Sc,
            Oc = r.forwardRef(kc),
            Cc = (n.p, ["title", "titleId"]);
        function jc() {
            return (jc = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function Ec(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function Pc(e, t) {
            var n = e.title,
                a = e.titleId,
                i = Ec(e, Cc);
            return r.createElement(
                "svg",
                jc(
                    {
                        width: "256px",
                        height: "256px",
                        fill: "none",
                        viewBox: "0 0 256 256",
                        xmlns: "http://www.w3.org/2000/svg",
                        stroke: "currentColor",
                        strokeWidth: 15,
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                n ? r.createElement("title", { id: a }, n) : null,
                Sc ||
                    (Sc = r.createElement("path", {
                        d: "M232,84v40a7.99977,7.99977,0,0,1-8,8,103.32406,103.32406,0,0,1-48.00049-11.70752L176,156A76,76,0,1,1,86.59766,81.17971,7.99952,7.99952,0,0,1,96,89.05569l-.00049,41.63916a7.99971,7.99971,0,0,1-4.56689,7.22607A20.00272,20.00272,0,1,0,120,156V28a7.99977,7.99977,0,0,1,8-8h40a7.99977,7.99977,0,0,1,8,8,48.05436,48.05436,0,0,0,48,48A7.99977,7.99977,0,0,1,232,84Z",
                    }))
            );
        }
        var _c,
            Tc = r.forwardRef(Pc),
            Lc = (n.p, ["title", "titleId"]);
        function Ac() {
            return (Ac = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function Ic(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function Rc(e, t) {
            var n = e.title,
                a = e.titleId,
                i = Ic(e, Lc);
            return r.createElement(
                "svg",
                Ac(
                    {
                        width: "24px",
                        height: "24px",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        stroke: "currentColor",
                        strokeWidth: 1,
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                void 0 === n
                    ? r.createElement("title", { id: a }, "Gmail icon")
                    : n
                    ? r.createElement("title", { id: a }, n)
                    : null,
                _c ||
                    (_c = r.createElement("path", {
                        d: "M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z",
                    }))
            );
        }
        var Mc,
            zc,
            Nc,
            Dc,
            Fc = r.forwardRef(Rc),
            Bc =
                (n.p,
                Object(b.a)(zo)({
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgba(26, 32, 44, var(--tw-bg-opacity))",
                    "--tw-text-opacity": "1",
                    color: "rgba(247, 250, 252, var(--tw-text-opacity))",
                    marginLeft: "-2rem",
                    marginRight: "-2rem",
                    marginBottom: "-2rem",
                })),
            Vc = b.a.div({
                maxWidth: "1280px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "5rem",
                paddingBottom: "5rem",
                "@media (min-width: 1024px)": {
                    paddingTop: "6rem",
                    paddingBottom: "6rem",
                },
            }),
            Hc = b.a.div({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingLeft: "2rem",
                paddingRight: "2rem",
            }),
            Wc = b.a.div({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "@media (min-width: 768px)": { justifyContent: "flex-start" },
            }),
            Uc = b.a.img({ width: "2rem" }),
            $c = b.a.h5({
                marginLeft: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "900",
                letterSpacing: "0.05em",
            }),
            Yc = b.a.div({
                marginTop: "2rem",
                fontWeight: "500",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                "@media (min-width: 640px)": { flexDirection: "row" },
            }),
            Xc = b.a.a({
                transitionProperty:
                    "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                borderBottomWidth: "2px",
                borderColor: "transparent",
                ":hover, :focus": {
                    "--tw-text-opacity": "1",
                    color: "rgba(226, 232, 240, var(--tw-text-opacity))",
                    "--tw-border-opacity": "1",
                    borderColor:
                        "rgba(226, 232, 240, var(--tw-border-opacity))",
                },
                paddingBottom: "0.25rem",
                transitionDuration: "300ms",
                marginTop: "0.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
            }),
            Kc = b.a.p({
                textAlign: "center",
                marginTop: "2.5rem",
                fontWeight: "500",
                letterSpacing: "0.025em",
                fontSize: "0.875rem",
                "--tw-text-opacity": "1",
                color: "rgba(113, 128, 150, var(--tw-text-opacity))",
            }),
            qc = b.a.div({ marginTop: "2.5rem" }),
            Qc = b.a.div({ marginTop: "1.25rem", fontSize: "0.875rem" }),
            Gc = b.a.a(
                Mc || (Mc = pl(["\n  ", "\n  svg {\n    ", "\n  }\n"])),
                {
                    transitionProperty:
                        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                    cursor: "pointer",
                    display: "inline-block",
                    "--tw-text-opacity": "1",
                    color: "rgba(247, 250, 252, var(--tw-text-opacity))",
                    ":hover": {
                        "--tw-text-opacity": "1",
                        color: "rgba(160, 174, 192, var(--tw-text-opacity))",
                    },
                    transitionDuration: "300ms",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                },
                { width: "1.25rem", height: "1.25rem" }
            ),
            Zc = function () {
                var e = Object(r.useContext)(p).link;
                return Object(c.jsx)(Bc, {
                    children: Object(c.jsx)(Vc, {
                        children: Object(c.jsxs)(Hc, {
                            children: [
                                Object(c.jsxs)(Wc, {
                                    children: [
                                        Object(c.jsx)(Uc, { src: yc }),
                                        Object(c.jsx)($c, {
                                            children: "EPSILON",
                                        }),
                                    ],
                                }),
                                Object(c.jsx)(Yc, {
                                    children: e.map(function (e, t) {
                                        return Object(c.jsx)(
                                            Xc,
                                            { href: e.url, children: e.name },
                                            t
                                        );
                                    }),
                                }),
                                Object(c.jsx)(Qc, {
                                    children: Object(c.jsx)(Gc, {
                                        href: "https://wa.me/081517454755",
                                        children:
                                            "Contact Person 1 (WA) : +62 815-1745-4755 (Daffa)",
                                    }),
                                }),
                                Object(c.jsx)(Qc, {
                                    children: Object(c.jsx)(Gc, {
                                        href: "https://wa.me/082175546113",
                                        children:
                                            "Contact Person 2 (WA) : +62 821-7554-6113 (Rara)",
                                    }),
                                }),
                                Object(c.jsxs)(qc, {
                                    children: [
                                        Object(c.jsx)(Gc, {
                                            href: "https://www.instagram.com/EPSILON_stis/",
                                            children: Object(c.jsx)(Oc, {}),
                                        }),
                                        Object(c.jsx)(Gc, {
                                            href: "https://vt.tiktok.com/ZSRFJwULF/",
                                            children: Object(c.jsx)(Tc, {}),
                                        }),
                                        Object(c.jsx)(Gc, {
                                            href: "mailto:EPSILON@stis.ac.id?Subject={{Type%20Here..}}",
                                            children: Object(c.jsx)(Fc, {}),
                                        }),
                                    ],
                                }),
                                Object(c.jsx)(Kc, {
                                    children:
                                        "\xa9 Copyright 2022, EPSILON All Rights Reserved.",
                                }),
                            ],
                        }),
                    }),
                });
            },
            Jc = function (e, t, n) {
                var r = t - e;
                return ((((n - e) % r) + r) % r) + e;
            };
        function ef() {
            var e = !1,
                t = [],
                n = new Set(),
                r = {
                    subscribe: function (e) {
                        return (
                            n.add(e),
                            function () {
                                n.delete(e);
                            }
                        );
                    },
                    start: function (r, a) {
                        if (e) {
                            var i = [];
                            return (
                                n.forEach(function (e) {
                                    i.push(ia(e, r, { transitionOverride: a }));
                                }),
                                Promise.all(i)
                            );
                        }
                        return new Promise(function (e) {
                            t.push({ animation: [r, a], resolve: e });
                        });
                    },
                    set: function (e) {
                        return n.forEach(function (t) {
                            !(function (e, t) {
                                Array.isArray(t)
                                    ? ra(e, t)
                                    : "string" === typeof t
                                    ? ra(e, [t])
                                    : na(e, t);
                            })(t, e);
                        });
                    },
                    stop: function () {
                        n.forEach(function (e) {
                            !(function (e) {
                                e.forEachValue(function (e) {
                                    return e.stop();
                                });
                            })(e);
                        });
                    },
                    mount: function () {
                        return (
                            (e = !0),
                            t.forEach(function (e) {
                                var t = e.animation,
                                    n = e.resolve;
                                r.start.apply(r, C([], O(t))).then(n);
                            }),
                            function () {
                                (e = !1), r.stop();
                            }
                        );
                    },
                };
            return r;
        }
        function tf() {
            var e = y(Object(r.useState)(!1), 2),
                t = e[0],
                n = e[1],
                a = y(
                    (function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        var n = Object(r.useRef)(0),
                            a = O(Object(r.useState)(e[n.current]), 2),
                            i = a[0],
                            o = a[1];
                        return [
                            i,
                            function (t) {
                                (n.current =
                                    "number" !== typeof t
                                        ? Jc(0, e.length, n.current + 1)
                                        : t),
                                    o(e[n.current]);
                            },
                        ];
                    })("0%", "150%"),
                    2
                ),
                i = a[0],
                o = a[1],
                l = (function () {
                    var e = R(ef);
                    return Object(r.useEffect)(e.mount, []), e;
                })();
            return {
                showNavLinks: t,
                animation: l,
                toggleNavbar: function () {
                    n(!t), l.start({ x: i, display: "block" }), o();
                },
            };
        }
        var nf = ["title", "titleId"];
        function rf() {
            return (rf = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function af(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function of(e, t) {
            var n = e.title,
                a = e.titleId,
                i = af(e, nf);
            return r.createElement(
                "svg",
                rf(
                    {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-menu",
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                n ? r.createElement("title", { id: a }, n) : null,
                zc ||
                    (zc = r.createElement("line", {
                        x1: 3,
                        y1: 12,
                        x2: 21,
                        y2: 12,
                    })),
                Nc ||
                    (Nc = r.createElement("line", {
                        x1: 3,
                        y1: 6,
                        x2: 21,
                        y2: 6,
                    })),
                Dc ||
                    (Dc = r.createElement("line", {
                        x1: 3,
                        y1: 18,
                        x2: 21,
                        y2: 18,
                    }))
            );
        }
        var lf,
            uf,
            sf = r.forwardRef(of),
            cf = (n.p, ["title", "titleId"]);
        function ff() {
            return (ff = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                  (e[r] = n[r]);
                      }
                      return e;
                  }).apply(this, arguments);
        }
        function df(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function pf(e, t) {
            var n = e.title,
                a = e.titleId,
                i = df(e, cf);
            return r.createElement(
                "svg",
                ff(
                    {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-x",
                        ref: t,
                        "aria-labelledby": a,
                    },
                    i
                ),
                n ? r.createElement("title", { id: a }, n) : null,
                lf ||
                    (lf = r.createElement("line", {
                        x1: 18,
                        y1: 6,
                        x2: 6,
                        y2: 18,
                    })),
                uf ||
                    (uf = r.createElement("line", {
                        x1: 6,
                        y1: 6,
                        x2: 18,
                        y2: 18,
                    }))
            );
        }
        var mf = r.forwardRef(pf),
            hf =
                (n.p,
                b.a.header.withConfig({
                    displayName: "Header__HeaderBase",
                    componentId: "sc-1mvtkxz-0",
                })({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "none",
                    marginLeft: "auto",
                    marginRight: "auto",
                })),
            vf = b.a.div.withConfig({
                displayName: "Header__NavLinks",
                componentId: "sc-1mvtkxz-1",
            })({ display: "inline-block" }),
            gf = b.a.a.withConfig({
                displayName: "Header__NavLink",
                componentId: "sc-1mvtkxz-2",
            })({
                transitionProperty:
                    "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                fontSize: "1.125rem",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                "--tw-text-opacity": "1",
                color: "rgba(49, 130, 206, var(--tw-text-opacity))",
                fontWeight: "600",
                letterSpacing: "0.025em",
                transitionDuration: "300ms",
                paddingBottom: "0.25rem",
                borderBottomWidth: "2px",
                borderColor: "transparent",
                ":hover": {
                    "--tw-border-opacity": "1",
                    borderColor: "rgba(221, 107, 32, var(--tw-border-opacity))",
                },
                ":hover, :focus": {
                    "--tw-text-opacity": "1",
                    color: "rgba(221, 107, 32, var(--tw-text-opacity))",
                },
                "@media (min-width: 1024px)": {
                    fontSize: "0.875rem",
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                    marginTop: "0",
                    marginBottom: "0",
                },
            }),
            yf = Object(b.a)(gf).withConfig({
                displayName: "Header___StyledNavLink",
                componentId: "sc-1mvtkxz-3",
            })({
                "@media (min-width: 1024px)": { marginLeft: "3rem !important" },
            }),
            bf = Object(b.a)(gf).withConfig({
                displayName: "Header__PrimaryLink",
                componentId: "sc-1mvtkxz-4",
            })({
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                borderRadius: "0.25rem",
                "--tw-bg-opacity": "1",
                backgroundColor: "rgba(221, 107, 32, var(--tw-bg-opacity))",
                "--tw-text-opacity": "1",
                color: "rgba(247, 250, 252, var(--tw-text-opacity))",
                ":hover, :focus": {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgba(156, 66, 33, var(--tw-bg-opacity))",
                    "--tw-text-opacity": "1",
                    color: "rgba(237, 242, 247, var(--tw-text-opacity))",
                },
                ":focus": {
                    "--tw-shadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
                    boxShadow:
                        "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                },
                borderBottomWidth: "0",
                "@media (min-width: 1024px)": {
                    marginLeft: "0",
                    marginRight: "0",
                },
            }),
            wf = Object(b.a)(gf).withConfig({
                displayName: "Header__LogoLink",
                componentId: "sc-1mvtkxz-5",
            })(
                ["", ";img{", "}"],
                {
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "900",
                    borderBottomWidth: "0",
                    fontSize: "1.5rem !important",
                    marginLeft: "0 !important",
                },
                { width: "2.5rem", marginRight: "0.75rem" }
            ),
            xf = b.a.nav.withConfig({
                displayName: "Header__MobileNavLinksContainer",
                componentId: "sc-1mvtkxz-6",
            })({
                display: "flex",
                flex: "1 1 0%",
                alignItems: "center",
                justifyContent: "space-between",
            }),
            kf = Object(b.a)(xf).withConfig({
                displayName: "Header___StyledMobileNavLinksContainer",
                componentId: "sc-1mvtkxz-7",
            })(["", ""], function (e) {
                return e._css2;
            }),
            Sf = b.a.button.withConfig({
                displayName: "Header__NavToggle",
                componentId: "sc-1mvtkxz-8",
            })({
                transitionProperty:
                    "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                zIndex: "20",
                ":focus": {
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                },
                ":hover, :focus": {
                    "--tw-text-opacity": "1",
                    color: "rgba(255, 203, 1, var(--tw-text-opacity))",
                },
                transitionDuration: "300ms",
                "@media (min-width: 1024px)": { display: "none" },
            }),
            Of = So(
                b.a.div.withConfig({
                    displayName: "Header__MobileNavLinks",
                    componentId: "sc-1mvtkxz-9",
                })(
                    ["", " ", "{", "}"],
                    {
                        zIndex: "10",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        right: "0",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem",
                        padding: "2rem",
                        borderWidth: "1px",
                        textAlign: "center",
                        borderRadius: "0.5rem",
                        "--tw-text-opacity": "1",
                        color: "rgba(26, 32, 44, var(--tw-text-opacity))",
                        "--tw-bg-opacity": "1",
                        backgroundColor:
                            "rgba(255, 255, 255, var(--tw-bg-opacity))",
                        "@media (min-width: 1024px)": { display: "none" },
                    },
                    vf,
                    {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }
                )
            ),
            Cf = Object(b.a)(Of).withConfig({
                displayName: "Header___StyledMobileNavLinks",
                componentId: "sc-1mvtkxz-10",
            })(["", ""], function (e) {
                return e._css3;
            }),
            jf = b.a.nav.withConfig({
                displayName: "Header__DesktopNavLinks",
                componentId: "sc-1mvtkxz-11",
            })({
                display: "none",
                flex: "1 1 0%",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (min-width: 1024px)": { display: "flex" },
            }),
            Ef = Object(b.a)(jf).withConfig({
                displayName: "Header___StyledDesktopNavLinks",
                componentId: "sc-1mvtkxz-12",
            })(["", ""], function (e) {
                return e._css;
            }),
            Pf = {
                sm: {
                    mobileNavLinks: {
                        "@media (min-width: 640px)": { display: "none" },
                    },
                    desktopNavLinks: {
                        "@media (min-width: 640px)": { display: "flex" },
                    },
                    mobileNavLinksContainer: {
                        "@media (min-width: 640px)": { display: "none" },
                    },
                },
                md: {
                    mobileNavLinks: {
                        "@media (min-width: 768px)": { display: "none" },
                    },
                    desktopNavLinks: {
                        "@media (min-width: 768px)": { display: "flex" },
                    },
                    mobileNavLinksContainer: {
                        "@media (min-width: 768px)": { display: "none" },
                    },
                },
                lg: {
                    mobileNavLinks: {
                        "@media (min-width: 1024px)": { display: "none" },
                    },
                    desktopNavLinks: {
                        "@media (min-width: 1024px)": { display: "flex" },
                    },
                    mobileNavLinksContainer: {
                        "@media (min-width: 1024px)": { display: "none" },
                    },
                },
                xl: {
                    mobileNavLinks: {
                        "@media (min-width: 1024px)": { display: "none" },
                    },
                    desktopNavLinks: {
                        "@media (min-width: 1024px)": { display: "flex" },
                    },
                    mobileNavLinksContainer: {
                        "@media (min-width: 1024px)": { display: "none" },
                    },
                },
            },
            _f = function () {
                return Object(c.jsxs)(wf, {
                    href: "/",
                    children: [
                        Object(c.jsx)("img", { src: yc, alt: "logo" }),
                        "EPSILON",
                    ],
                });
            },
            Tf = function () {
                var e = Object(r.useContext)(p).link;
                return Object(c.jsxs)(c.Fragment, {
                    children: [
                        Object(c.jsx)(vf, {
                            children: e.map(function (e, t) {
                                return Object(c.jsx)(
                                    gf,
                                    { href: e.url, children: e.name },
                                    t
                                );
                            }),
                        }),
                        Object(c.jsxs)(vf, {
                            children: [
                                Object(c.jsx)(yf, {
                                    href: "/login",
                                    children: "Login",
                                }),
                                Object(c.jsx)(bf, {
                                    href: "/register",
                                    children: "Daftar",
                                }),
                            ],
                        }),
                    ],
                });
            },
            Lf = Object(b.a)(mf).withConfig({
                displayName: "Header___StyledCloseIcon",
                componentId: "sc-1mvtkxz-13",
            })({ width: "1.5rem", height: "1.5rem" }),
            Af = Object(b.a)(sf).withConfig({
                displayName: "Header___StyledMenuIcon",
                componentId: "sc-1mvtkxz-14",
            })({ width: "1.5rem", height: "1.5rem" }),
            If = function (e) {
                var t = e.className,
                    n = e.collapse,
                    r = void 0 === n ? "lg" : n,
                    a = tf(),
                    i = a.showNavLinks,
                    o = a.animation,
                    l = a.toggleNavbar,
                    u = Pf[r];
                return Object(c.jsxs)(hf, {
                    className: t || "header-light",
                    children: [
                        Object(c.jsxs)(Ef, {
                            _css: u.desktopNavLinks,
                            children: [
                                Object(c.jsx)(_f, {}),
                                Object(c.jsx)(Tf, {}),
                            ],
                        }),
                        Object(c.jsxs)(kf, {
                            _css2: u.mobileNavLinksContainer,
                            children: [
                                Object(c.jsx)(_f, {}),
                                Object(c.jsx)(Cf, {
                                    initial: { x: "150%", display: "none" },
                                    animate: o,
                                    _css3: u.mobileNavLinks,
                                    children: Object(c.jsx)(Tf, {}),
                                }),
                                Object(c.jsx)(Sf, {
                                    onClick: l,
                                    className: i ? "open" : "closed",
                                    children: i
                                        ? Object(c.jsx)(Lf, {})
                                        : Object(c.jsx)(Af, {}),
                                }),
                            ],
                        }),
                    ],
                });
            },
            Rf = function () {
                return Object(c.jsx)(d, {
                    children: Object(c.jsxs)(Lo, {
                        children: [
                            Object(c.jsx)(If, {}),
                            Object(c.jsx)(dl, {}),
                            Object(c.jsx)(zl, {}),
                            Object(c.jsx)(ou, {}),
                            Object(c.jsx)(Tu, {}),
                            Object(c.jsx)(Uu, {}),
                            Object(c.jsx)(ks, {}),
                            Object(c.jsx)(Bs, {}),
                            Object(c.jsx)(gc, {}),
                            Object(c.jsx)(Zc, {}),
                        ],
                    }),
                });
            };
        n(26);
        o.a.render(Object(c.jsx)(Rf, {}), document.getElementById("root"));
    },
]);
//# sourceMappingURL=main.js.map
