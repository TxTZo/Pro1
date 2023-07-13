(window.webpackJsonp = window.webpackJsonp || []).push([
    [38], {
        600: function (t, e, r) {
            var n = r(4),
                o = r(601),
                c = r(172);
            n({
                target: "Array",
                proto: !0
            }, {
                fill: o
            }), c("fill")
        },
        601: function (t, e, r) {
            "use strict";
            var n = r(43),
                o = r(101),
                c = r(54);
            t.exports = function (t) {
                for (var e = n(this), r = c(e), d = arguments.length, l = o(d > 1 ? arguments[1] : void 0, r), f = d > 2 ? arguments[2] : void 0, v = void 0 === f ? r : o(f, r); v > l;) e[l++] = t;
                return e
            }
        },
        614: function (t, e, r) {
            "use strict";
            r.r(e);
            r(82), r(97), r(57), r(22), r(65);
            var n = r(14),
                o = r(5),
                c = (r(45), r(600), r(130), r(28), r(27), r(15), r(37), r(23), r(38), r(29));

            function d(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var l = {
                    mixins: [r(96).a],
                    data: function () {
                        return {
                            products: []
                        }
                    },
                    computed: {
                        emptyProducts: function () {
                            return this.products.length >= 4 ? [] : Array(4 - this.products.length).fill(0)
                        }
                    },
                    mounted: function () {
                        var t = this;
                        this.setWhitePageLoading(!0), setTimeout(Object(o.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.isLoggedIn) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, t.getShopProducts();
                                    case 3:
                                        t.setWhitePageLoading(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 2500)
                    },
                    methods: function (t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? d(Object(source), !0).forEach((function (e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({
                        getShopProducts: function () {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var r, data;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.setPageLoading(!0), e.next = 4, t.$axios.get("/api/products", {
                                                headers: t.headers
                                            });
                                        case 4:
                                            r = e.sent, data = r.data, t.products = data.products, t.ownAccessories = data.accessories, e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), t.$notify({
                                                type: "error",
                                                text: "เกิดข้อผิดพลาดระหว่างโหลดข้อมูลสินค้า กรุณาลองใหม่อีกครั้ง"
                                            });
                                        case 13:
                                            t.setPageLoading(!1);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10]
                                ])
                            })))()
                        },
                        buy: function (t) {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function r() {
                                var n, data;
                                return regeneratorRuntime.wrap((function (r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, e.setPageLoading(!0), r.next = 4, e.$axios.post("/api/payments/checkout", {
                                                productCode: t
                                            }, {
                                                headers: e.headers
                                            });
                                        case 4:
                                            n = r.sent, data = n.data, window.location = data.url, r.next = 12;
                                            break;
                                        case 9:
                                            r.prev = 9, r.t0 = r.catch(0), e.$notify({
                                                type: "error",
                                                message: "เกิดข้อผิดพลาดขณะซื้อ Boost กรุณาลองใหม่อีกครั้งค่ะ"
                                            });
                                        case 12:
                                            e.setPageLoading(!1);
                                        case 13:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [0, 9]
                                ])
                            })))()
                        }
                    }, Object(c.b)(["setPageLoading", "setWhitePageLoading"]))
                },
                f = l,
                v = r(3),
                component = Object(v.a)(f, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("h1", {
                        staticClass: "text-3xl text-secondary font-semibold text-center mx-auto my-8"
                    }, [t._v("\n    DrinksOnMe Shop\n  ")]), t._v(" "), t.isLoggedIn ? e("div", {
                        staticClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-x-2 gap-y-4"
                    }, [t._l(t.products, (function (r, n) {
                        return e("div", {
                            key: n,
                            staticClass: "w-44 text-xl flex flex-col items-center gap-y-1 mx-auto relative"
                        }, [t.ownAccessories.includes(r.accessoryId) ? e("p", {
                            staticClass: "absolute text-secondary text-md top-[108px]"
                        }, [t._v("\n        มีแล้วจ้า\n      ")]) : t._e(), t._v(" "), e("img", {
                            attrs: {
                                src: r.imageURL
                            }
                        }), t._v(" "), e("p", {
                            staticClass: "font-semibold"
                        }, [t._v("\n        " + t._s(r.name) + "\n      ")]), t._v(" "), r.description ? e("p", {
                            staticClass: "text-sm text-paragraph-gray"
                        }, [t._v("\n        " + t._s(r.description) + "\n      ")]) : t._e(), t._v(" "), e("p", {
                            staticClass: "font-semibold text-secondary"
                        }, [t._v("\n        " + t._s(r.price) + " บาท\n      ")]), t._v(" "), e("button", {
                            staticClass: "px-4 py-1 rounded-md border-2 border-black disabled:cursor-not-allowed disabled:opacity-50",
                            attrs: {
                                disabled: t.ownAccessories.includes(r.accessoryId)
                            },
                            on: {
                                click: function (e) {
                                    return t.buy(r.code)
                                }
                            }
                        }, [t._v("\n        ซื้อ\n      ")])])
                    })), t._v(" "), t._l(t.emptyProducts, (function (p, r) {
                        return e("div", {
                            key: "empty" + r,
                            staticClass: "w-44 relative mx-auto"
                        }, [e("img", {
                            attrs: {
                                src: "/shop/empty-box.png"
                            }
                        }), t._v(" "), e("p", {
                            staticClass: "font-semibold text-gray-400 absolute top-14 left-7 text-xl"
                        }, [t._v("\n        Coming Soon\n      ")])])
                    }))], 2) : e("div", [e("p", {
                        staticClass: "text-center text-xl"
                    }, [t._v("\n      กรุณา Log in ก่อนเข้าชมร้านค้า\n    ")])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        }
    }
]);