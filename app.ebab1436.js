!function (e) {
    function t(t) {
        for (var r, a, u = t[0], c = t[1], s = t[2], l = 0, d = []; l < u.length; l++)
            a = u[l],
                Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]),
                o[a] = 0;
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (m && m(t); d.length;)
            d.shift()();
        return i.push.apply(i, s || []), n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== o[c] && (r = !1)
            }
            r && (i.splice(t--, 1), e = u(u.s = n[0]))
        }
        return e
    }
    var r = {},
        a = {
            app: 0
        },
        o = {
            app: 0
        },
        i = [];
    function u(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports
    }
    u.e = function (e) {
        var t = [];
        a[e] ? t.push(a[e]) : 0 !== a[e] && {
            "albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay": 1,
            albumDetail: 1,
            albumPlay: 1,
            albumRPlay: 1,
            columnDetail: 1,
            columnPlay: 1,
            informationPlay: 1,
            albumPack: 1,
            albumRank: 1,
            anchorDetail: 1,
            cctvRadioIndex: 1,
            cctvRadioPlay: 1,
            columnPack: 1,
            download: 1,
            interactiveLanding: 1,
            liveroomLanding: 1,
            liveroomLandingb: 1,
            login: 1,
            membershipJoin: 1,
            morningPaper: 1,
            orderConfirm1: 1,
            orderConfirm2: 1,
            orderConfirm3: 1,
            payresult: 1,
            protocol: 1,
            radioPack: 1,
            radioPlay: 1,
            singlePack: 1
        }[e] && t.push(a[e] = new Promise((function (t, n) {
            for (var r = "css/" + ({
                "albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay": "albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay",
                albumDetail: "albumDetail",
                albumPlay: "albumPlay",
                albumRPlay: "albumRPlay",
                columnDetail: "columnDetail",
                columnPlay: "columnPlay",
                informationPlay: "informationPlay",
                albumPack: "albumPack",
                albumRank: "albumRank",
                anchorDetail: "anchorDetail",
                cctvRadioIndex: "cctvRadioIndex",
                cctvRadioPlay: "cctvRadioPlay",
                columnPack: "columnPack",
                download: "download",
                interactiveLanding: "interactiveLanding",
                liveroomLanding: "liveroomLanding",
                liveroomLandingb: "liveroomLandingb",
                login: "login",
                membershipJoin: "membershipJoin",
                morningPaper: "morningPaper",
                orderConfirm1: "orderConfirm1",
                orderConfirm2: "orderConfirm2",
                orderConfirm3: "orderConfirm3",
                payresult: "payresult",
                protocol: "protocol",
                radioPack: "radioPack",
                radioPlay: "radioPlay",
                singlePack: "singlePack"
            }[e] || e) + "." + {
                "albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay": "d6e98a9b",
                albumDetail: "132fa3cc",
                albumPlay: "b9eb8bc0",
                albumRPlay: "b3bc8254",
                columnDetail: "49fc42a7",
                columnPlay: "997b2043",
                informationPlay: "640c3f20",
                albumPack: "0c7ed8da",
                albumRank: "e3ffbb1f",
                anchorDetail: "08334789",
                cctvRadioIndex: "c9be74f9",
                cctvRadioPlay: "d128e2db",
                columnPack: "28d5f577",
                download: "32ab49b9",
                interactiveLanding: "a82b2e67",
                liveroomLanding: "157b2138",
                liveroomLandingb: "901d2582",
                login: "0ccf6dd8",
                membershipJoin: "60fbf9f1",
                morningPaper: "1eaff5ee",
                orderConfirm1: "9150e33e",
                orderConfirm2: "dfde1cd9",
                orderConfirm3: "1bc22886",
                payresult: "b9ba6532",
                protocol: "422f7b97",
                radioPack: "696222dd",
                radioPlay: "a89f19b1",
                singlePack: "1d6f7cf9"
            }[e] + ".css", o = u.p + r, i = document.getElementsByTagName("link"), c = 0; c < i.length; c++) {
                var s = (m = i[c]).getAttribute("data-href") || m.getAttribute("href");
                if ("stylesheet" === m.rel && (s === r || s === o))
                    return t()
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
                var m;
                if ((s = (m = l[c]).getAttribute("data-href")) === r || s === o)
                    return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet",
                d.type = "text/css",
                d.onload = t,
                d.onerror = function (t) {
                    var r = t && t.target && t.target.src || o,
                        i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                    i.code = "CSS_CHUNK_LOAD_FAILED",
                        i.request = r,
                        delete a[e],
                        d.parentNode.removeChild(d),
                        n(i)
                },
                d.href = o,
                document.getElementsByTagName("head")[0].appendChild(d)
        })).then((function () {
            a[e] = 0
        })));
        var n = o[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var r = new Promise((function (t, r) {
                    n = o[e] = [t, r]
                }));
                t.push(n[2] = r);
                var i,
                    c = document.createElement("script");
                c.charset = "utf-8",
                    c.timeout = 120,
                    u.nc && c.setAttribute("nonce", u.nc),
                    c.src = function (e) {
                        return u.p + "js/" + ({
                            "albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay": "albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay",
                            albumDetail: "albumDetail",
                            albumPlay: "albumPlay",
                            albumRPlay: "albumRPlay",
                            columnDetail: "columnDetail",
                            columnPlay: "columnPlay",
                            informationPlay: "informationPlay",
                            albumPack: "albumPack",
                            albumRank: "albumRank",
                            anchorDetail: "anchorDetail",
                            cctvRadioIndex: "cctvRadioIndex",
                            cctvRadioPlay: "cctvRadioPlay",
                            columnPack: "columnPack",
                            download: "download",
                            interactiveLanding: "interactiveLanding",
                            liveroomLanding: "liveroomLanding",
                            liveroomLandingb: "liveroomLandingb",
                            login: "login",
                            membershipJoin: "membershipJoin",
                            morningPaper: "morningPaper",
                            orderConfirm1: "orderConfirm1",
                            orderConfirm2: "orderConfirm2",
                            orderConfirm3: "orderConfirm3",
                            payresult: "payresult",
                            protocol: "protocol",
                            radioPack: "radioPack",
                            radioPlay: "radioPlay",
                            singlePack: "singlePack"
                        }[e] || e) + "." + {
                            "albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay": "56ed3d19",
                            albumDetail: "b51cedd4",
                            albumPlay: "c41bcfd5",
                            albumRPlay: "23610ee3",
                            columnDetail: "e3e74e08",
                            columnPlay: "77bb5252",
                            informationPlay: "b95496bf",
                            albumPack: "1982bea9",
                            albumRank: "9f6cf3c4",
                            anchorDetail: "c6caf6b5",
                            cctvRadioIndex: "51f0e335",
                            cctvRadioPlay: "b4a8df1f",
                            columnPack: "daebc01e",
                            download: "3e92c8e3",
                            interactiveLanding: "28440d8d",
                            liveroomLanding: "78aa7064",
                            liveroomLandingb: "eaef6dd9",
                            login: "ca720fa4",
                            membershipJoin: "d37fcdb8",
                            morningPaper: "4e345a7c",
                            orderConfirm1: "e9fecb34",
                            orderConfirm2: "a273a65d",
                            orderConfirm3: "6f379ed7",
                            payresult: "3773938e",
                            protocol: "451d80dd",
                            radioPack: "42c0f928",
                            radioPlay: "a16b7e1c",
                            singlePack: "70759901"
                        }[e] + ".js"
                    }(e);
                var s = new Error;
                i = function (t) {
                    c.onerror = c.onload = null,
                        clearTimeout(l);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")",
                                s.name = "ChunkLoadError",
                                s.type = r,
                                s.request = a,
                                n[1](s)
                        }
                        o[e] = void 0
                    }
                };
                var l = setTimeout((function () {
                    i({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = i,
                    document.head.appendChild(c)
            }
        return Promise.all(t)
    },
        u.m = e,
        u.c = r,
        u.d = function (e, t, n) {
            u.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        },
        u.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        u.t = function (e, t) {
            if (1 & t && (e = u(e)), 8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (u.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var r in e)
                    u.d(n, r, function (t) {
                        return e[t]
                    }.bind(null, r));
            return n
        },
        u.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return u.d(t, "a", t), t
        },
        u.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        u.p = "/share/",
        u.oe = function (e) {
            throw e
        };
    var c = window.webpackJsonp = window.webpackJsonp || [],
        s = c.push.bind(c);
    c.push = t,
        c = c.slice();
    for (var l = 0; l < c.length; l++)
        t(c[l]);
    var m = s;
    i.push([0, "chunk-vendors"]),
        n()
}({
    0: function (e, t, n) {
        e.exports = n("56d7")
    },
    "034f": function (e, t, n) {
        "use strict";
        var r = n("0651");
        n.n(r).a
    },
    "0651": function (e, t, n) { },
    1: function (e, t) { },
    1487: function (e, t, n) { },
    "1e98": function (e, t, n) {
        "use strict";
        var r = n("1487");
        n.n(r).a
    },
    "1f25": function (e, t, n) { },
    2: function (e, t) { },
    2170: function (e, t, n) {
        "use strict";
        n("4917");
        var r = n("cf45"),
            a = window.MobLink,
            o = {
                name: "btnGoApp",
                data: function () {
                    return {
                        appUrl: "",
                        isQQ: "qq" == navigator.userAgent.toLocaleLowerCase().match(/QQ/i)
                    }
                },
                props: {
                    scheme: String,
                    mbsign: String
                },
                methods: {
                    openApp: function () {
                        (!Object(r.d)() || Object(r.d)() && this.isQQ) && Object(r.h)(this.scheme)
                    },
                    setScheme: function () {
                        if (Object(r.d)() && !this.isQQ && this.scheme) {
                            var e = this.scheme,
                                t = this.mbsign ? "#go_".concat(this.mbsign) : ".go-app-page";
                            a({
                                el: t,
                                path: "",
                                params: {
                                    url: e
                                }
                            })
                        }
                    }
                },
                beforeUpdate: function () {
                    "zbj1" !== this.mbsign && "zbj2" !== this.mbsign || this.setScheme("beforeUpdate")
                },
                updated: function () {
                    this.setScheme("up")
                },
                mounted: function () {
                    this.scheme && this.setScheme()
                }
            },
            i = (n("9fba"), n("2877")),
            u = Object(i.a)(o, (function () {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("div", {
                    class: e.mbsign ? "" : "go-app-page",
                    attrs: {
                        id: e.mbsign ? "go_" + e.mbsign : ""
                    },
                    on: {
                        click: function (t) {
                            return t.stopPropagation(), e.openApp(t)
                        }
                    }
                }, [e._t("default")], 2)
            }), [], !1, null, "530db01f", null);
        t.a = u.exports
    },
    "365c": function (e, t, n) {
        "use strict";
        n("1c01"),
            n("58b2"),
            n("8e6e"),
            n("f3e2"),
            n("d25f"),
            n("ac6a"),
            n("456d");
        var r = n("bd86"),
            a = (n("96cf"), n("3b8d")),
            o = (n("a481"), n("6b54"), n("87b3"), n("bc3a")),
            i = n.n(o),
            u = n("4328"),
            c = n.n(u),
            s = n("3452"),
            l = n.n(s),
            m = n("ace7"),
            d = n.n(m),
            p = i.a.CancelToken.source(),
            f = l.a.enc.Hex.parse("07E44219AED9CAC162A6D818872B71433826AD8957EB40C9DFF266C375840359"),
            h = l.a.enc.Hex.parse("0A010B05040F070917030106080C0D5B");
        i.a.defaults.baseURL = d.a.apiUrl,
            i.a.interceptors.request.use((function (e) {
                return e.headers.common["Content-Type"] = "application/x-www-form-urlencoded", e.headers.common.version = "4.0.0", e.headers.common.providerCode = "25010", e.headers.common.equipmentSource = "WEB", d.a.isGateApi && !d.a.isOnline && (e.url += "?copytest=1"), e
            }), (function (e) {
                return Promise.reject(e)
            })),
            i.a.interceptors.response.use((function (e) {
                return e
            }), (function (e) {
                var t = e.response && e.response.status;
                return t ? t >= 400 && t < 500 ? {
                    rt: 999,
                    desc: "您请求的数据，去了外太空！"
                } : t >= 500 ? {
                    rt: 999,
                    desc: "服务器异常，请稍后再试！"
                } : {
                    rt: 999,
                    desc: e.message,
                    error: e
                } : e.message && 888 == e.message.status ? {
                    rt: 999,
                    desc: e.message.message
                } : {
                    rt: 999,
                    desc: "网络异常，请检测您的网络配置！",
                    error: e
                }
            }));
        var g = function (e) {
            return new Promise((function (t, n) {
                var r = Object.assign({}, e);
                r.url = e.apiUrl,
                    r.method = e.method || "GET",
                    ("GET" === r.method ? i.a.get(r.url, {
                        params: r.data,
                        withCredentials: !1,
                        cancelToken: p.token
                    }) : i.a.post(r.url, c.a.stringify(r.data), {
                        cancelToken: p.token
                    })).then((function (e) {
                        var r = e.data,
                            a = "number" == typeof r.rt ? r : r.replace(/[\r\n]/g, "");
                        if (!a)
                            return n({
                                rt: 999,
                                desc: "服务器异常，请稍后再试！"
                            }), !1;
                        var o = "number" == typeof r.rt ? a : function (e) {
                            var t = l.a.AES.decrypt(e, f, {
                                iv: h,
                                mode: l.a.mode.CBC,
                                padding: l.a.pad.Pkcs7
                            }),
                                n = l.a.enc.Utf8.stringify(t).toString();
                            return JSON.parse(n)
                        }(a);
                        1 === o.rt ? t(o) : n(o)
                    }))
            }))
        },
            b = n("b0c3");
        function y(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return new Promise((function (n, r) {
                function a() {
                    var t = Object.assign({}, e);
                    g(t).then(n).catch(r)
                }
                t ? Object(b.c)(a) : a()
            }))
        }
        function P(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                    n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? P(n, !0).forEach((function (t) {
                    Object(r.a)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(n).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var w,
            O,
            R,
            A,
            S,
            C = {
                userLogin: (S = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: v({}, t),
                                        apiUrl: "/phoneUser/login",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return S.apply(this, arguments)
                }),
                otherLogin: (A = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: v({}, t),
                                        apiUrl: "/phoneUser/otherLogin",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return A.apply(this, arguments)
                }),
                weixinLogin: (R = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: v({}, t),
                                        apiUrl: "/weixin/login",
                                        method: "GET"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return R.apply(this, arguments)
                }),
                getUserInfo: (O = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: v({}, t),
                                        apiUrl: "/appUser/getUserInfoH5",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return O.apply(this, arguments)
                }),
                getJSConf: (w = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: v({}, t),
                                        apiUrl: "/weixin/getJSConf",
                                        method: "GET"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return w.apply(this, arguments)
                })
            };
        function x(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                    n.push.apply(n, r)
            }
            return n
        }
        function k(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(n, !0).forEach((function (t) {
                    Object(r.a)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(n).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var T,
            j,
            D,
            I,
            L,
            U,
            E,
            B,
            M,
            N,
            Q,
            V,
            G,
            J,
            F,
            W,
            q,
            z,
            K,
            H,
            X,
            Y,
            _,
            Z,
            $,
            ee,
            te = {
                getSongInfo: (ee = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/songInfo",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return ee.apply(this, arguments)
                }),
                getDemandDetail: ($ = Object(a.a)(regeneratorRuntime.mark((async function e(t) {
                    async function downFile(info) {
                        try {
                            console.log('下载' + info.name + info.playUrlHigh);
                            let res = await fetch(info.playUrlHigh);
                            let blob = await res.blob();
                            const a = document.createElement('a');
                            document.body.appendChild(a)
                            a.style.display = 'none'
                            const url = window.URL.createObjectURL(blob);
                            a.href = url;
                            a.download = info.name + '.mp3';
                            a.click();
                            document.body.removeChild(a)
                            window.URL.revokeObjectURL(url);
                        } catch (e) {
                            console.error('下载' + info.name + '失败');
                        }
                    }
                    async function getMp3(index) {
                        t.pageIndex = index;
                        let result = await y({
                            data: k({}, t),
                            apiUrl: "/wifimusicbox/demand/detail",
                            method: "POST"
                        });
                        for (let n = 0; n < result.con.length; n++) {
                            await downFile(result.con[n]);
                        }
                    }
                    let onePageInfo = await y({
                        data: k({}, t),
                        apiUrl: "/wifimusicbox/demand/detail",
                        method: "POST"
                    });
                    for (let index = 1; index < onePageInfo.totalPage; index++) {
                        getMp3(index);
                    }

                    for (let n = 0; n < onePageInfo.con.length; n++) {
                        await downFile(onePageInfo.con[n]);
                    }

                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/demand/detail",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return $.apply(this, arguments)
                }),
                getInformSongInfo: (Z = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/getIndexNewsInfoById",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return Z.apply(this, arguments)
                }),
                getInformList: (_ = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/getIndexNewsInfoList",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return _.apply(this, arguments)
                }),
                getMorningPaper: (Y = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/getInformationListenById",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return Y.apply(this, arguments)
                }),
                getColumnDetail: (X = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/programeDetail",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return X.apply(this, arguments)
                }),
                getColumnSongInfo: (H = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/programInfo",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return H.apply(this, arguments)
                }),
                getcommentMultiMediaList: (K = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/interactive/commentMultiMediaList",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return K.apply(this, arguments)
                }),
                getAlbumCollection: (z = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/albumCollection/detail",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return z.apply(this, arguments)
                }),
                getColumnCollection: (q = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/programCollectionDetail",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return q.apply(this, arguments)
                }),
                getRecommendInfo: (W = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/commentary/getRecommendInfo",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return W.apply(this, arguments)
                }),
                getProgramCollection: (F = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/broadcastCollectionDetail",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return F.apply(this, arguments)
                }),
                getProgramList: (J = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/interactive/program/list",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return J.apply(this, arguments)
                }),
                getProgramDJInfo: (G = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/djStudio/homeInfoDetails",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return G.apply(this, arguments)
                }),
                getAnchorPersonInfo: (V = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/interactive/getAnchorPersonInfo",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return V.apply(this, arguments)
                }),
                getAnchorProduct: (Q = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/interactive/getAnchorProduct",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return Q.apply(this, arguments)
                }),
                getTurnResourceList: (N = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/interactive/getTurnResourceList",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return N.apply(this, arguments)
                }),
                getSongCollectionDetail: (M = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/wifimusicbox/songCollectionDetail",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return M.apply(this, arguments)
                }),
                getProgramColumnInfo: (B = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/liveInteractive/getProgramColumnInfo",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return B.apply(this, arguments)
                }),
                getLiveBroadcastProgram: (E = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/liveInteractive/getLiveBroadcastProgram",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return E.apply(this, arguments)
                }),
                getLiveRoomInfoByAnchorId: (U = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/liveRoom/getLivingRoomList",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return U.apply(this, arguments)
                }),
                getLiveRoomRankings: (L = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/reward/Rankings",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return L.apply(this, arguments)
                }),
                getChatroomAddresses: (I = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/nim/getAddr",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return I.apply(this, arguments)
                }),
                getAlbumsRank: (D = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/Board/boardRecoment",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return D.apply(this, arguments)
                }),
                getRankPageInfo: (j = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/Board/boardInfo",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return j.apply(this, arguments)
                }),
                countListenNum: (T = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: k({}, t),
                                        apiUrl: "/common/saveListenCount",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return T.apply(this, arguments)
                })
            };
        function ne(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                    n.push.apply(n, r)
            }
            return n
        }
        function re(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ne(n, !0).forEach((function (t) {
                    Object(r.a)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(n).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var ae,
            oe,
            ie,
            ue,
            ce,
            se,
            le,
            me = {
                getMeatList: (le = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: re({}, t),
                                        apiUrl: "/reward/getMeatList",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return le.apply(this, arguments)
                }),
                payRechargeForAndroid: (se = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: re({}, t),
                                        apiUrl: "/reward/rechargeForAndroid",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return se.apply(this, arguments)
                }),
                getVipPackage: (ce = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: re({}, t),
                                        apiUrl: "/vip/getVipPackage",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return ce.apply(this, arguments)
                }),
                rewardBuyVip: (ue = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: re({}, t),
                                        apiUrl: "/reward/buyVip",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return ue.apply(this, arguments)
                }),
                paidAlbumNew: (ie = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: re({}, t),
                                        apiUrl: "/wifimusicbox/paidAlbumNew",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return ie.apply(this, arguments)
                }),
                judgeVipPackageIsPay: (oe = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: re({}, t),
                                        apiUrl: "/vip/judgeVipPackageIsPay",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return oe.apply(this, arguments)
                }),
                getVipIndexList: (ae = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, y({
                                        data: re({}, t),
                                        apiUrl: "/vip/index",
                                        method: "POST"
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }), e)
                }))), function (e) {
                    return ae.apply(this, arguments)
                })
            };
        t.a = {
            Login: C,
            Song: te,
            Pay: me
        }
    },
    "3dfd": function (e, t, n) {
        "use strict";
        n("1c01"),
            n("58b2"),
            n("8e6e"),
            n("f3e2"),
            n("d25f"),
            n("ac6a"),
            n("456d"),
            n("386d"),
            n("4917"),
            n("3b2b");
        var r = n("bd86"),
            a = n("cf45"),
            o = n("2f62");
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                    n.push.apply(n, r)
            }
            return n
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(n, !0).forEach((function (t) {
                    Object(r.a)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var c = {
            data: function () {
                return {
                    isLoading: !0,
                    isRouterAlive: !0,
                    wxReady: !0
                }
            },
            provide: function () {
                return {
                    inWX: Object(a.c)(),
                    reload: this.reload
                }
            },
            beforeCreate: function () {
                this.loader = this.$loading.show({
                    canCancel: !1,
                    color: "#FF0B30",
                    loader: "spinner",
                    width: 64,
                    height: 64,
                    backgroundColor: "#fff",
                    opacity: .5
                })
            },
            computed: u({}, Object(o.c)(["currentTime", "currentSong", "playingStatus"])),
            methods: u({}, Object(o.b)(["updatePlayerState"]), {
                reload: function () {
                    var e = this;
                    this.isRouterAlive = !1,
                        this.$nextTick((function () {
                            return e.isRouterAlive = !0
                        }))
                },
                getQueryString: function (e) {
                    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                        n = window.location.search.substr(1).match(t);
                    return null != n ? unescape(n[2]) : null
                },
                backRefresh: function () {
                    Object(a.c)() && Object(a.d)() ? (window.addEventListener("popstate", (function (e) {
                        self.location.reload()
                    }), !1), window.history.replaceState({
                        title: "",
                        url: "#"
                    }, "", "#")) : window.addEventListener("popstate", (function (e) {
                        self.location.reload()
                    }), !1)
                }
            }),
            mounted: function () {
                var e = this;
                setTimeout((function () {
                    e.loader.hide()
                }), 100),
                    window.vRouter = this.$router,
                    this.backRefresh(),
                    document.addEventListener("visibilitychange", (function () {
                        document.hidden || Object(a.c)() && 1 == e.currentSong.type && !e.$audioRefs.paused && (e.$audioRefs.load(), e.$audioRefs.play())
                    })),
                    Object(a.c)() && this.$wxshare.initWXconfig()
            }
        },
            s = (n("034f"), n("2877")),
            l = Object(s.a)(c, (function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [this.isRouterAlive && this.wxReady ? t("router-view") : this._e(), t("audio-play")], 1)
            }), [], !1, null, null, null);
        t.a = l.exports
    },
    "41cb": function (e, t, n) {
        "use strict";
        var r = n("2b0e"),
            a = n("8c4f"),
            o = n("2170"),
            i = {
                props: {
                    showLegend: Boolean,
                    notheader: Boolean,
                    notfooter: Boolean,
                    scheme: String
                },
                components: {
                    btnGoApp: o.a
                },
                data: function () {
                    return {
                        logo: n("cf05"),
                        footer: n("d9a5")
                    }
                }
            },
            u = (n("ec52"), n("2877")),
            c = Object(u.a)(i, (function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "general-box"
                }, [e.notheader ? e._e() : n("div", {
                    staticClass: "yunting-header-top"
                }, [n("img", {
                    staticClass: "yunting-logo",
                    attrs: {
                        src: e.logo
                    }
                }), n("div", {
                    staticClass: "yunting-name"
                }, [e._v("云听·好听在云听")]), n("btnGoApp", {
                    attrs: {
                        scheme: e.scheme,
                        mbsign: "1"
                    }
                }, [n("div", {
                    staticClass: "yunting-open-app"
                }, [e._v("打开APP")])])], 1), e._t("default"), e.notfooter ? e._e() : n("div", {
                    staticClass: "copyright",
                    class: e.showLegend ? "padi" : ""
                }, [n("img", {
                    attrs: {
                        src: e.footer
                    }
                })])], 2)
            }), [], !1, null, "00721ee6", null).exports,
            s = (n("1c01"), n("58b2"), n("8e6e"), n("f3e2"), n("d25f"), n("ac6a"), n("456d"), n("7f7f"), n("bd86")),
            l = n("2f62"),
            m = n("cf45");
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                    n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(n, !0).forEach((function (t) {
                    Object(s.a)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(n).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var f = {
            props: {},
            data: function () {
                return {
                    show: !1,
                    isCount: !1
                }
            },
            computed: p({}, Object(l.c)(["currentSong", "playingStatus", "audioTotalTime"]), {
                isloaded: function () {
                    return this.$refs.audio.readyState
                }
            }),
            watch: {
                currentSong: function (e) {
                    if (!e || !e.downloadUrl)
                        return this.show = !1, this.updatePlayerState("end"), !1;
                    this.show = !0,
                        this.isCount = !0
                },
                playingStatus: function (e) {
                    this.$refs.audio.ended && this.$refs.audio.pause(),
                        this.currentSong && this.isCount && "ready" == e && (this.currentSong.type ? this.currentSong.id ? this.sendCountListenNum({
                            recordId: this.currentSong.id,
                            recordType: "program"
                        }) : this.sendCountListenNum({
                            recordId: this.currentSong.broadcastId,
                            recordType: "broadcast"
                        }) : this.sendCountListenNum({
                            recordId: this.currentSong.id || this.currentSong.songId,
                            recordType: "song"
                        }), this.isCount = !1)
                }
            },
            mounted: function () {
                r.default.prototype.$audioRefs = this.$refs.audio
            },
            methods: p({}, Object(l.b)(["setCurrentTime", "setAudioTotalTime", "updatePlayerState"]), {
                sendCountListenNum: m.f,
                durationchange: function () {
                    this.setAudioTotalTime(parseInt(this.$refs.audio.duration))
                },
                waiting: function () {
                    this.newSong && this.newSong.downloadUrl && this.updatePlayerState("ready")
                },
                canplay: function () {
                    this.currentSong && this.currentSong.downloadUrl && "ready" === this.playingStatus && this.updatePlayerState("play")
                },
                ready: function () {
                    var e = this;
                    !this.currentSong || !this.currentSong.isVip && !this.currentSong.needPay || this.currentSong.isAudition && 1 != this.currentSong.listenType ? (this.updatePlayerState("ready"), this.$refs.audio.play().then((function () {
                        e.updatePlayerState("play"),
                            e.isCount && (e.currentSong.type ? e.currentSong.id ? e.sendCountListenNum({
                                recordId: e.currentSong.id,
                                recordType: "program"
                            }) : e.sendCountListenNum({
                                recordId: e.currentSong.broadcastId,
                                recordType: "broadcast"
                            }) : e.sendCountListenNum({
                                recordId: e.currentSong.id,
                                recordType: "song"
                            }), e.isCount = !1)
                    })).catch((function (t) {
                        e.updatePlayerState("error")
                    }))) : this.updatePlayerState("error")
                },
                pause: function () {
                    this.$refs.audio.currentTime ? this.updatePlayerState("pause") : this.updatePlayerState("error")
                },
                error: function () {
                    this.updatePlayerState("error")
                },
                stalled: function () { },
                suspend: function () { },
                end: function () {
                    this.updatePlayerState("end"),
                        1 == this.currentSong.isAudition && this.$ytToast.show({
                            title: "".concat(this.currentSong.name),
                            message: "在云听APP中购买后完整收听",
                            param: {
                                banner: this.currentSong.logoUrl,
                                scheme: "cloudsound25010://cloudsound/path?type=1&songId=".concat(this.currentSong.id)
                            }
                        })
                },
                updateTime: function (e) {
                    "ready" === this.playingStatus && this.updatePlayerState("play"),
                        this.setCurrentTime(e.target.currentTime)
                }
            })
        },
            h = Object(u.a)(f, (function () {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("audio", {
                    ref: "audio",
                    attrs: {
                        src: e.show && e.currentSong.downloadUrl,
                        preload: ""
                    },
                    on: {
                        play: e.ready,
                        pause: e.pause,
                        error: e.error,
                        canplay: e.canplay,
                        durationchange: e.durationchange,
                        timeupdate: e.updateTime,
                        ended: e.end,
                        waiting: e.waiting,
                        stalled: e.stalled,
                        suspend: e.suspend
                    }
                })
            }), [], !1, null, "7364889e", null).exports;
        r.default.use(a.a),
            r.default.component("general-view", c),
            r.default.component("audio-play", h),
            t.a = new a.a({
                mode: "history",
                base: "/share/",
                routes: [{
                    path: "/login",
                    name: "login",
                    component: function (e) {
                        return n.e("login").then(function () {
                            return e(n("9ed6"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/download/",
                    name: "download",
                    component: function (e) {
                        return n.e("download").then(function () {
                            return e(n("0ea3"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/albumDetail",
                    name: "albumDetail",
                    component: function (e) {
                        return Promise.all([n.e("albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay"), n.e("albumDetail")]).then(function () {
                            return e(n("74c3"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/albumPlay",
                    name: "albumPlay",
                    component: function (e) {
                        return Promise.all([n.e("albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay"), n.e("albumPlay")]).then(function () {
                            return e(n("1797"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/informationPlay",
                    name: "informationPlay",
                    component: function (e) {
                        return Promise.all([n.e("albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay"), n.e("informationPlay")]).then(function () {
                            return e(n("7f10"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/informationRPlay",
                    name: "informationRPlay",
                    component: function (e) {
                        return Promise.all([n.e("albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay"), n.e("informationPlay")]).then(function () {
                            return e(n("80e0"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/albumReviewPlay",
                    name: "albumRPlay",
                    component: function (e) {
                        return Promise.all([n.e("albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay"), n.e("albumRPlay")]).then(function () {
                            return e(n("f1f7"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/albumPack",
                    name: "albumPack",
                    component: function (e) {
                        return n.e("albumPack").then(function () {
                            return e(n("10b6"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/columnPack",
                    name: "columnPack",
                    component: function (e) {
                        return n.e("columnPack").then(function () {
                            return e(n("8faf"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/columnDetail",
                    name: "columnDetail",
                    component: function (e) {
                        return Promise.all([n.e("albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay"), n.e("columnDetail")]).then(function () {
                            return e(n("e304"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/columnPlay",
                    name: "columnPlay",
                    component: function (e) {
                        return Promise.all([n.e("albumDetail~albumPlay~albumRPlay~columnDetail~columnPlay~informationPlay"), n.e("columnPlay")]).then(function () {
                            return e(n("e1cc"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/radioPlay",
                    name: "radioPlay",
                    component: function (e) {
                        return n.e("radioPlay").then(function () {
                            return e(n("7714"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/radioCPlay",
                    name: "cctvRadioPlay",
                    component: function (e) {
                        return n.e("cctvRadioPlay").then(function () {
                            return e(n("8e44"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/radio",
                    name: "cctvRadioIndex",
                    component: function (e) {
                        return n.e("cctvRadioIndex").then(function () {
                            return e(n("b5ac"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/radioPack",
                    name: "radioPack",
                    component: function (e) {
                        return n.e("radioPack").then(function () {
                            return e(n("f948"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/anchorDetail",
                    name: "anchorDetail",
                    component: function (e) {
                        return n.e("anchorDetail").then(function () {
                            return e(n("0d8a"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/membershipJoin",
                    name: "membershipJoin",
                    component: function (e) {
                        return n.e("membershipJoin").then(function () {
                            return e(n("3f59"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/membershipJoin/protocol",
                    name: "protocol",
                    component: function (e) {
                        return n.e("protocol").then(function () {
                            return e(n("7b82"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/orderConfirm1",
                    name: "orderConfirm1",
                    component: function (e) {
                        return n.e("orderConfirm1").then(function () {
                            return e(n("e2cb"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/orderConfirm2",
                    name: "orderConfirm2",
                    component: function (e) {
                        return n.e("orderConfirm2").then(function () {
                            return e(n("2f23"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/orderConfirm3",
                    name: "orderConfirm3",
                    component: function (e) {
                        return n.e("orderConfirm3").then(function () {
                            return e(n("f363"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/orderConfirm/result",
                    name: "orderConfirmResult",
                    component: function (e) {
                        return n.e("payresult").then(function () {
                            return e(n("ba25"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/liveroomLanding",
                    name: "liveroomLanding",
                    component: function (e) {
                        return n.e("liveroomLanding").then(function () {
                            return e(n("8dd2"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/liveroomLandingb",
                    name: "liveroomLandingb",
                    component: function (e) {
                        return n.e("liveroomLandingb").then(function () {
                            return e(n("1502"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/interactiveLanding",
                    name: "interactiveLanding",
                    component: function (e) {
                        return n.e("interactiveLanding").then(function () {
                            return e(n("e28e"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/singlePack",
                    name: "singlePack",
                    component: function (e) {
                        return n.e("singlePack").then(function () {
                            return e(n("dbe3"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/albumRank",
                    name: "albumRank",
                    component: function (e) {
                        return n.e("albumRank").then(function () {
                            return e(n("c74b"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/morningPaper",
                    name: "morningPaper",
                    component: function (e) {
                        return n.e("morningPaper").then(function () {
                            return e(n("0bfd"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }]
            })
    },
    4360: function (e, t, n) {
        "use strict";
        var r = {
            currentTime: 0,
            audioTotalTime: 0,
            currentSong: null,
            playingStatus: "end"
        },
            a = n("2f62");
        n("2b0e").default.use(a.a),
            t.a = new a.a.Store({
                actions: {
                    setCurrentTime: function (e, t) {
                        return (0, e.commit)("setCurrentTime", t)
                    },
                    setAudioTotalTime: function (e, t) {
                        return (0, e.commit)("setAudioTotalTime", t)
                    },
                    setCurrentSong: function (e, t) {
                        return (0, e.commit)("setCurrentSong", t)
                    },
                    updatePlayerState: function (e, t) {
                        return (0, e.commit)("updatePlayerState", t)
                    }
                },
                getters: {
                    currentSong: function (e) {
                        return e.currentSong
                    },
                    currentTime: function (e) {
                        return e.currentTime
                    },
                    audioTotalTime: function (e) {
                        return e.audioTotalTime
                    },
                    playingStatus: function (e) {
                        return e.playingStatus
                    }
                },
                state: r,
                mutations: {
                    setCurrentTime: function (e, t) {
                        e.currentTime = t
                    },
                    setAudioTotalTime: function (e, t) {
                        e.audioTotalTime = t
                    },
                    setCurrentSong: function (e, t) {
                        e.currentSong = t
                    },
                    updatePlayerState: function (e, t) {
                        if ("error" === t)
                            return e.playingStatus = "error", !1;
                        e.playingStatus = t
                    }
                }
            })
    },
    "51da": function (e, t, n) {
        "use strict";
        var r = n("d225"),
            a = n("b0b4"),
            o = function (e) {
                return localStorage.getItem(e)
            },
            i = function (e, t) {
                return localStorage.setItem(e, t)
            },
            u = function (e) {
                return localStorage.removeItem(e)
            },
            c = function () {
                function e() {
                    Object(r.a)(this, e),
                        this.get()
                }
                return Object(a.a)(e, [{
                    key: "get",
                    value: function () {
                        var e = o("YUNTINGUSERSESSION");
                        return e && "" !== e ? JSON.parse(e) : null
                    }
                }, {
                    key: "set",
                    value: function (e) {
                        return i("YUNTINGUSERSESSION", JSON.stringify(e))
                    }
                }, {
                    key: "clear",
                    value: function () {
                        try {
                            u("YUNTINGUSERSESSION")
                        } catch (e) { }
                    }
                }]), e
            }();
        t.a = new c
    },
    "56d7": function (e, t, n) {
        "use strict";
        n.r(t),
            function (e) {
                n("386d"),
                    n("4917"),
                    n("57e7"),
                    n("cadf"),
                    n("551c"),
                    n("f751"),
                    n("097d");
                var t = n("2b0e"),
                    r = n("3dfd"),
                    a = n("41cb"),
                    o = n("df28"),
                    i = n.n(o),
                    u = n("eae4"),
                    c = n("9062"),
                    s = n.n(c),
                    l = (n("e40d"), n("7212")),
                    m = n.n(l),
                    d = (n("dfa4"), n("d6d3")),
                    p = n.n(d),
                    f = (n("fda2"), n("a151"), n("4360")),
                    h = n("9c78");
                n("451f"),
                    t.default.use(p.a),
                    t.default.use(u.a),
                    t.default.use(m.a, {
                        loop: !1
                    }),
                    t.default.use(i.a),
                    t.default.use(h.a, {
                        isTest: 0
                    }),
                    t.default.use(s.a, {
                        isFullPage: !0
                    }),
                    a.a.beforeEach((function (t, n, r) {
                        var a = navigator.userAgent.toLowerCase(),
                            o = "/share/".substr(0, "/share/".length - 1);
                        a.indexOf("like mac os x") < 0 || "micromessenger" != a.match(/MicroMessenger/i) || "webp" == a.match(/WebP/i) ? r() : o + t.fullPath !== e.location.pathname + e.location.search ? location.assign(o + t.fullPath) : r()
                    })),
                    t.default.config.productionTip = !0,
                    new t.default({
                        store: f.a,
                        router: a.a,
                        methods: {
                            isJiami: function (e) {
                                var t = e.playUrlHigh || e.playUrl;
                                return /c\.mp3$/.test(t)
                            }
                        },
                        render: function (e) {
                            return e(r.a)
                        }
                    }).$mount("#app"),
                    t.default.directive("title", {
                        inserted: function (e) {
                            document.title = e.dataset.title || "好听在云听"
                        },
                        componentUpdated: function (e) {
                            document.title = e.dataset.title || "好听在云听"
                        }
                    })
            }.call(this, n("c8ba"))
    },
    6219: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB3UlEQVRoQ+2Yu1HEMBBAdw9yuvAngwqgABIiAmiAIi6iCBqAgIiEAqACyLDVBTmnZTTjm9Ec9lkryT4k76Veyfv2rVc3QljYDxfGCwKcu3ExLIYzq4C0dGZC/+CIYTGcWQWkpTMTKkNLWlpaOrMKRGtppVSttX5AxBOt9bqu69eQWimlLononoi+V6vVXVEUXyH7bddGA26a5g0AzruNfxDxtizLZ58k27a9JqJHADju1r9XVXXhs9fummjAbdt+ENGp9QIv6B5YQMTPsizP/hWwaUGt9YtlxeTHgu6DNXsQ0VXoJxK9pc2GQwm7tHfIWo75aC29falP4j5rOJB2bHRgruk5YU1ukwC7Qs8NOynwGLR5vnP0sIecT1tPZnjkm950z49CjzEu9OTAe0zbubKOLy7k5EOrL6Hue30CANuqCd0g4o3vvzIu/CyGLcvLAB6Yxnm29ABsnkNr3zmb3bHk8qfCJYY7lMbiJxlaHBBO7BiMy/PowD4APmtc4PpiogKHJB6ylgMfDXhxFwCLu+JZ3CWefU2LiOuiKPK+puUMjkPGRhtah4TgvFuAOdVKMVYMp2iNk7MY5lQrxVgxnKI1Ts5imFOtFGPFcIrWODmLYU61UowVwyla4+T8C5X7d0xXJxQJAAAAAElFTkSuQmCC"
    },
    "9c78": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        })),
            n("b54a"),
            n("a481");
        var r = n("cf45");
        window.$isWXReady = !1;
        var a = "https://ytmedia.radio.cn/CCYT%2F202001%2F02%2F17%2FlBqEZQJK4zRD7NpjX8Q1ktf8TOuwlo88ymGIOu4i2020010217322.png",
            o = window.wx,
            i = "https://nsharewx.radio.cn/share_jsonp.html?s=yunting&url=" + encodeURIComponent(window.location.href),
            u = function (e, t, n) {
                var r = document.createElement("script");
                r.src = i,
                    r.onload = r.onreadystatechange = function () {
                        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (r.onload = r.onreadystatechange = null, setTimeout((function () {
                            !function (e, t, n) {
                                if (!o)
                                    return !1;
                                peopleWXConfig.debug = !1,
                                    peopleWXConfig.jsApiList = ["checkJsApi", "updateAppMessageShareData", "updateTimelineShareData", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice"],
                                    o.config(peopleWXConfig),
                                    o.ready((function () {
                                        e.prototype.$wxReady = !0,
                                            "hide" !== n ? "show" === n && o.showMenuItems({
                                                menuList: ["menuItem:share:appMessage", "menuItem:share:timeline"]
                                            }) : o.hideMenuItems({
                                                menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:copyUrl", "menuItem:originPage", "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email"]
                                            })
                                    })),
                                    o.error((function () { }))
                            }(e, 0, n)
                        }), 200))
                    },
                    document.body.appendChild(r)
            },
            c = {
                install: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.isTest;
                    e.prototype.$wxReady = !1,
                        e.prototype.$wxshare = {
                            initWXconfig: function (t) {
                                Object(r.c)() && u(e, 0, n)
                            },
                            setOpts: function (t) {
                                if (Object(r.c)() && window.wx) {
                                    var o = n ? (t && t.link).replace("ytweb", "yuntingoltest") : t && t.link || location.href,
                                        i = {
                                            imgUrl: t && t.imgUrl || a,
                                            desc: t && t.desc || "好听在云听",
                                            title: t && t.title || "好听在云听",
                                            link: o,
                                            success: function () { },
                                            cancel: function () { }
                                        };
                                    if (e.prototype.$wxReady)
                                        window.wx.updateAppMessageShareData(i),
                                            window.wx.updateTimelineShareData(i),
                                            window.wx.onMenuShareWeibo(i);
                                    else {
                                        var u = setInterval((function () {
                                            e.prototype.$wxReady && (clearInterval(u), window.wx.updateAppMessageShareData(i), window.wx.updateTimelineShareData(i), window.wx.onMenuShareWeibo(i))
                                        }), 200);
                                        setTimeout((function () {
                                            u && clearInterval(u)
                                        }), 1e4)
                                    }
                                }
                            }
                        }
                }
            }
    },
    "9fba": function (e, t, n) {
        "use strict";
        var r = n("f589");
        n.n(r).a
    },
    ace7: function (e, t) {
        var n = {
            isOnline: 1,
            isGateApi: 0,
            dir: "share",
            apiUrl: "https://ytapi.radio.cn/ytsrv/srv/",
            shareUrl: "https://ytweb.radio.cn/"
        };
        e.exports = n
    },
    b0c3: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return a
        })),
            n.d(t, "d", (function () {
                return o
            })),
            n.d(t, "a", (function () {
                return i
            })),
            n.d(t, "c", (function () {
                return u
            })),
            n("d25f");
        var r = n("51da"),
            a = function () {
                return r.a.get() && r.a.get().baseInfo.appUserId
            },
            o = function () {
                return r.a.get() && r.a.get().baseInfo
            },
            i = function () {
                return r.a.get() && r.a.get().accountInfo.filter((function (e) {
                    return 2 == e.accountType
                }))[0]
            },
            u = function (e) {
                r.a.get() && e()
            }
    },
    cd5c: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAQlBMVEVHcEyfn5+ioqKhoaGfn5+fn5+goKChoaGenp6goKCfn5+goKCfn5+fn5+goKCgoKCfn5+goKCioqKfn5+goKCfn587IIvwAAAAFXRSTlMAwClMQPRxV/v+z8n2/PtjvbY34eGmhracAAAAq0lEQVRIx+3Uyw4CIQwFUB4qyLzV/v+vKgOZDGXTdjexd9nkLGhvMEaj0Wg0/xxnk8ez5T04ErYAMbSjxxNgI+EEWGcLKwn7iPRu7y/ao0Ori71RV9Zopm002560wB5aZKueZLZqof3pKdtRZMuuYA5y2/ecbMdZpOuNQhTo474CfeoGWze9YmrUSZZecCeL9iT86Tq560TCQ9/nrC3t693W7r/yyTqj0VwpX/R2Du50+YWmAAAAAElFTkSuQmCC"
    },
    cf05: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABxZJREFUaAXlW2tsVEUU/u7d7W7bbVn6hBIohRQo5Y1AQMFYFBCEUPUHxhCj/BBMKlEkRBAMQeShID5RCL5QIFGEgjwEDRpRRIQgSCyQQlus0jdt2bbbfdzrnNm9S/fZu8tunye5e2fOzJk53zzPmb0jIABdQVIWIOXKkGewbP0BOU0GogOItHmSAJgB4SaruESAcAwQ84eg+rI/RVh+byKgMuzrGdBc79SOz2HA8wVolvsC7gW4AMZnGaT32RPV8aEF1NDKUvOGom57y1xiy8hlGDew+Db2dHawBIswbHNiojgnVw87e5bAdkVaqPQ0B0xzVoLtIkPaFXrWV4dZRWhH0pzmQ5oWqC4MlhogyokRgrN3C3w1S1fjsV4eynpY6pRbT2idIeWKTqMiNPlOJkVYaQ4zC6rbUH8GWE7rNnAZVjakO5ZtHMnGJ6x8W4pkJR2tbG1HU8iXPoJeB22fNAiGWF/JnCc3NsF6vdhvupKgGrCmdyp0gzMVuaDfloIrsFdWBy2X+FIekle/DDEuLqBs/Vf78d+8ZwLmoURVgGNzpqDfsX0QokK3PIsn5PgHTAYum2CeJCYlIHXTWk+2V1yWJNR+9IkX3xdDFWBq5bsB23jyFMxnz3vVb5j5EFJeWwn9iGxYb5SidsdO1Gx6F7BLPK8uc6BLxnz+Amo2vw/Z3OziKYHmS3/DcqVQiQZ8C8xL8tG27jIxkyeyIWVwZ6qMSU1mNP16GrDZ3SQMs6ah3+Gv3XgUqXnnQ1S8sJzzoyeNR8ap73m49LH5MO0/xMN386Oqh5t+YQqHmVJeX8VLtNfXo+7TXYibOY2vEQmLF6F6/Vuwl1e61Sg3NrrFQ420z7ak1UA/PJvrTHOPerTsuSU8LggC9KOGh4qnVbl2AUzrgaB1DC579S2upL3G8aaIGBPTquKhZgg4pPVjR8H41BMQosN3UEmLku1fOmRsH/ILWDT2QPrx/dAkJYZNM6mpCZXLXg2pPG16v5DkPIX8Ao6ZOA6y1QpbWbmnDDsGFqDtleriyzYb7FWBjQrJ1ICqNRsh1d+GEBP8iOm1ZR0MM6a6bUtyQyPM5/5E7We7AAsdUrZOfgE3HDuBwrQhfkvIOPsTou8ZzRukaNR9sFdU+c0bjgTRYECPx+f6LMr49JMomfKwa//2mcnJDGnR0qQmQz9mJC+ifs/eiINVAFj/KYWl8Lrrke2OvT1m0gTEPzpHyRbwHRLguDkzIYgO0dv5hwNWEK7EytXrcS19OK4PGut6isfnuIona00NhQZ47ixeto3NW25F+apJFKAbkglyOsJB5tN/eBXTfP4iaCEkEvR6r3RfjKABk4tmmOZoWdO3R33OG8PsGcgsLcDAy2cx6OZVpP98BFED+vuqP3w8uVULmdcVNGDD9KkQnfuy6cARL4X1I4eh774voU3r7UqLnXIv+h7cA+iC87bI6lJNkQIcn/sI10Fitm3D8RNe+vRctIB7VrSglC9ehrrPd/M8ZEoapt7vlT9cDDkigDUi4maz5Z8RgZWZJ+RJ+mzHVtb02xncem87yl9c4cqiy85yhcMeiARgGpqaxASuq9/V2WkjK36r3HzHf1Xs57CDpQIjATjOuTrTcDUd+i4iercsVO0w5TIRAeycv3SCITm9nJYKtms43IDJR9VlOLYWUxsZG5FoQNXbkjKcSQlf21EklAuqzHD3cOzkSbx+84W/YC2+4VcXbUqyI02lAkpBtM0ppHGWoU1OUliQ2LlzIFI73/16S56Fiwk9OUvsEY/ktSs9k3lcPyzLdXZtLSrxmccf08qcAntdHTRGI1JY+WTAxCuLJHM/my9c8ifq4KtsYNWAb39zADHjxkA3IAPJrywNWDm1dt1OZlkFQ5KMyhVr0PuDzdzXTnx+oUu6et1m7ke7GL4C4QZcs/FtCDodjPPnISojnR8CeNYrWyywFFxF1do3mVPxu2fynbgfk7F268eQauuQuCQPuqxBsFwr4gfsqg7Zww2Y/hmoXvMGf+5o3nqI/vMhr4rmo2F6Dm5t3QHFPCVp8nFbUv3uvaAnaFIJWPUqHbQCLQRMBx1OhuHBBzC49gb6fOH4VozOpBt/PNkiZ/BBOjLi1JEAVyxdhaYz57hegkbD31JDA8oW5MFeVuFQOMTf6g1bmFWpzjWkKlT91RKiLu5iTsdDP3oEA1kO09EfYGP/J4WDdMxhofXDWljUanFtB7hVVdomQ5vM4baBoq4WdvJE3xt3DyKsrIf5x9XdAzHDSkM6OBuwczdNCRvS9Nl89yDCynpYzO8ecAmlmC/SN8R0R6CrgyaMru+l6UIEA6zu77fO2TJWJ0bwfdh5+yOvc2JRpXWeE6MDMInQnQC2T21UJd6JMhEm5b4Dqc3i7tStrvEQdGoNuhDRmRcy0p0wtOxZpVu9elhJoHdXvIr3Py3nVPKkcH5HAAAAAElFTkSuQmCC"
    },
    cf45: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return l
        })),
            n.d(t, "c", (function () {
                return m
            })),
            n.d(t, "d", (function () {
                return d
            })),
            n.d(t, "h", (function () {
                return p
            })),
            n.d(t, "g", (function () {
                return f
            })),
            n.d(t, "f", (function () {
                return h
            })),
            n.d(t, "e", (function () {
                return y
            })),
            n.d(t, "b", (function () {
                return P
            })),
            n("c5f6"),
            n("28a5"),
            n("9865"),
            n("4917"),
            n("57e7"),
            n("6b54"),
            n("87b3");
        var r = n("3452"),
            a = n.n(r),
            o = n("365c"),
            i = n("51da"),
            u = n("b0c3"),
            c = a.a.enc.Hex.parse("07E44219AED9CAC162A6D818872B71433826AD8957EB40C9DFF266C375840359"),
            s = a.a.enc.Hex.parse("0A010B05040F070917030106080C0D5B");
        function l(e) {
            return a.a.AES.encrypt(e, c, {
                iv: s,
                mode: a.a.mode.CBC,
                padding: a.a.pad.Pkcs7
            }).toString()
        }
        function m() {
            return !(-1 == navigator.userAgent.toLowerCase().indexOf("micromessenger"))
        }
        function d() {
            return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }
        function p(e) {
            if (e) {
                var t = navigator.userAgent;
                if (t.match(/AppleWebKit.*Mobile.*/)) {
                    var n = t.indexOf("MicroMessenger") > -1;
                    e.split("?")[1],
                        n || "qq" == t.toLocaleLowerCase().match(/QQ/i) ? (window.location.href = e, setTimeout((function () {
                            var t = encodeURIComponent(e);
                            window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.shinyv.cnr&ios_scheme=" + t + "&android_schema=" + t
                        }), 2e3)) : (window.location.href = e, setTimeout((function () {
                            window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.shinyv.cnr",
                                history.go(-1)
                        }), 2e3)),
                        document.addEventListener("visibilitychange", (function () {
                            document.hidden || location.reload()
                        }))
                }
            } else
                window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.shinyv.cnr"
        }
        function f(e, t) {
            var n = e.appUserId;
            n || (n = Object(u.d)().appUserId);
            var r = {
                appUserId: l(n + ""),
                version: "4.0.0"
            };
            o.a.Login.getUserInfo(r).then((function (e) {
                i.a.set(e.object),
                    "function" == typeof t && t()
            })).catch((function (e) { }))
        }
        function h() {
            var e = arguments.length <= 0 ? void 0 : arguments[0],
                t = e.recordType,
                n = e.recordId;
            o.a.Song.countListenNum({
                recordType: t,
                recordId: n
            }).then((function (e) {
                e.rt
            })).catch((function (e) { }))
        }
        var g = document.createElement("div").style,
            b = function () {
                var e = {
                    webkit: "webkitTransform",
                    Moz: "MozTransform",
                    O: "OTransform",
                    ms: "msTransform",
                    standard: "transform"
                };
                for (var t in e)
                    if (void 0 !== g[e[t]])
                        return t;
                return !1
            }();
        function y(e) {
            return !1 !== b && ("standard" === b ? e : b + e.charAt(0).toUpperCase() + e.substr(1))
        }
        function P(e) {
            var t,
                n = 0;
            return e < 1e4 ? (n = Number(e), t = "") : e >= 1e4 && e < 1e8 ? (n = Number((e / 1e4).toFixed(1)), t = "万") : (n = Number((e / 1e8).toFixed(1)), t = "亿"), n + t
        }
    },
    d9a5: function (e, t, n) {
        e.exports = n.p + "img/footer.be5d6783.png"
    },
    eae4: function (e, t, n) {
        "use strict";
        var r = {
            data: function () {
                return {
                    title: "",
                    message: "",
                    type: 1,
                    param: {},
                    mbsign: ""
                }
            },
            components: {
                btnGoApp: n("2170").a
            },
            methods: {
                toDownload: function () {
                    this.shiftToast()
                },
                shiftToast: function () {
                    this.$ytToast.close()
                }
            },
            mounted: function () { }
        },
            a = (n("1e98"), n("2877")),
            o = Object(a.a)(r, (function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    staticClass: "dialog-view"
                }, [1 == e.type ? r("div", {
                    staticClass: "dialog-tips"
                }, [r("img", {
                    staticClass: "dialog-album-photo",
                    attrs: {
                        src: e.param.banner
                    }
                }), r("div", {
                    staticClass: "dialog-album-name hidden"
                }, [e._v(e._s(e.title))]), r("div", {
                    staticClass: "dialog-album-type"
                }, [e._v(e._s(e.message))]), r("btnGoApp", {
                    attrs: {
                        scheme: e.param.scheme,
                        mbsign: e.param.mbsign || ""
                    }
                }, [r("div", {
                    staticClass: "dialog-album-button",
                    on: {
                        click: e.toDownload
                    }
                }, [e._v("立即打开")])]), r("img", {
                    staticClass: "dialog-close-img",
                    attrs: {
                        src: n("cd5c")
                    },
                    on: {
                        click: function (t) {
                            return t.stopPropagation(), e.shiftToast(t)
                        }
                    }
                })], 1) : 2 == e.type ? r("div", {
                    staticClass: "dialog-tips2"
                }, [r("img", {
                    staticClass: "dialog-top-photo",
                    attrs: {
                        src: e.param.banner
                    }
                }), r("div", {
                    staticClass: "dialog-album-name"
                }, [e._v(e._s(e.title))]), r("div", {
                    staticClass: "dialog-album-type"
                }, [e._v(e._s(e.message))]), r("btnGoApp", {
                    attrs: {
                        scheme: e.param.scheme,
                        mbsign: e.param.mbsign || ""
                    }
                }, [r("div", {
                    staticClass: "dialog-album-button",
                    on: {
                        click: e.toDownload
                    }
                }, [e._v("立即打开")])]), r("img", {
                    staticClass: "dialog-close-img2",
                    attrs: {
                        src: n("6219")
                    },
                    on: {
                        click: function (t) {
                            return t.stopPropagation(), e.shiftToast(t)
                        }
                    }
                })], 1) : 3 == e.type ? r("div", {
                    staticClass: "dialog-tips"
                }, [r("img", {
                    staticClass: "dialog-album-avatar",
                    attrs: {
                        src: e.param.banner || "../assets/vip/avatar.png"
                    }
                }), r("div", {
                    staticClass: "dialog-album-name"
                }, [e._v(e._s(e.title))]), r("div", {
                    staticClass: "dialog-album-type hidden"
                }, [e._v(e._s(e.message))]), r("btnGoApp", {
                    attrs: {
                        scheme: e.param.scheme
                    }
                }, [r("div", {
                    staticClass: "dialog-album-button",
                    on: {
                        click: e.toDownload
                    }
                }, [e._v("立即打开")])]), r("img", {
                    staticClass: "dialog-close-img",
                    attrs: {
                        src: n("cd5c")
                    },
                    on: {
                        click: function (t) {
                            return t.stopPropagation(), e.shiftToast(t)
                        }
                    }
                })], 1) : e._e()])
            }), [], !1, null, "6173e2fe", null).exports,
            i = {
                install: function (e) {
                    var t = new (e.extend({
                        mixins: [o]
                    }));
                    t.$mount(document.createElement("div"));
                    var n = {
                        all_message: function (e, n, r, a) {
                            clearTimeout(void 0),
                                t.title = e,
                                t.message = n,
                                t.type = r,
                                t.param = a
                        },
                        show: function (e) {
                            var n = e.title,
                                r = e.message,
                                a = e.type,
                                o = void 0 === a ? 1 : a,
                                i = e.param,
                                u = void 0 === i ? {} : i;
                            document.body.appendChild(t.$el),
                                this.all_message(n, r, o, u)
                        },
                        close: function () {
                            document.body.removeChild(t.$el)
                        }
                    };
                    e.prototype.$ytToast = n
                }
            };
        t.a = i
    },
    ec52: function (e, t, n) {
        "use strict";
        var r = n("1f25");
        n.n(r).a
    },
    f589: function (e, t, n) { }
});

