(window.webpackJsonp = window.webpackJsonp || []).push([
    [32, 9], {
        389: function (t, e, o) {
            var content = o(556);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(33).default)("c663ae78", content, !0, {
                sourceMap: !1
            })
        },
        555: function (t, e, o) {
            "use strict";
            o(389)
        },
        556: function (t, e, o) {
            var n = o(32)((function (i) {
                return i[1]
            }));
            n.push([t.i, "button[data-v-28c81e5b]:disabled{cursor:not-allowed;opacity:0.5}", ""]), n.locals = {}, t.exports = n
        },
        569: function (t, e, o) {
            var content = o(597);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(33).default)("661caff4", content, !0, {
                sourceMap: !1
            })
        },
        584: function (t, e, o) {
            "use strict";
            o.r(e);
            o(555);
            var n = o(3),
                component = Object(n.a)({}, (function () {
                    var t = this;
                    return (0, t._self._c)("button", t._b({
                        staticClass: "flex justify-center mx-auto text-center rounded-3xl py-3 bg-secondary"
                    }, "button", t.$attrs, !1), [t._t("default")], 2)
                }), [], !1, null, "28c81e5b", null);
            e.default = component.exports
        },
        596: function (t, e, o) {
            "use strict";
            o(569)
        },
        597: function (t, e, o) {
            var n = o(32)((function (i) {
                return i[1]
            }));
            n.push([t.i, ".questions-pair[data-v-73d4f43c]{transition:height .5s ease;-moz-transition:height .5s ease;-ms-transition:height .5s ease;-o-transition:height .5s ease;-webkit-transition:height .5s ease}", ""]), n.locals = {}, t.exports = n
        },
        612: function (t, e, o) {
            "use strict";
            o.r(e);
            o(28), o(22), o(27), o(15), o(37), o(23), o(38);
            var n = o(5),
                r = o(14),
                c = (o(45), o(29)),
                l = o(96);

            function d(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }
            var f = {
                    components: {
                        BanyenButton: o(584).default
                    },
                    mixins: [l.a],
                    data: function () {
                        return {
                            boostPackages: [{
                                value: "dom_boost_1_month",
                                label: "1 เดือน",
                                highlight: ""
                            }, {
                                value: "dom_boost_3_month",
                                label: "3 เดือน",
                                highlight: "ประหยัดกว่า"
                            }],
                            price: {
                                dom_boost_1_month: "49",
                                dom_boost_3_month: "39"
                            },
                            fullPrice: {
                                dom_boost_1_month: "89",
                                dom_boost_3_month: "79"
                            },
                            features: ["ผ้าพันคอ", "หมวกที่เปลี่ยนตามเทศกาล", {
                                text: "ลดดีเลย์ส่งข้อความ",
                                subText: "เพื่อนในห้องได้ผลพลอยไปด้วย"
                            }, {
                                text: "รีพอร์ตได้ 3 ครั้ง/วัน",
                                subText: "(ยูสเซอร์ปกติได้แค่ 1 ครั้งต่อวัน)"
                            }],
                            selectedPackageIndex: 1,
                            showFAQ: !1,
                            faqPairs: [{
                                question: "ถ้าครบเดือนที่ซื้อบูสต์ไว้แล้วจะเกิดอะไรขึ้น",
                                answer: "ไอเทมแต่งตัวต่าง ๆ จะหายอัตโนมัติ สามารถมากดซื้อบูสต์ใหม่ได้"
                            }, {
                                question: "เปลี่ยนหมวก ถอดหมวดได้ไหม",
                                answer: "ตอนนี้ยังทำไม่ได้ เป็น feature ในอนาคต เมื่อมีคนสนับสนุนเว็บมากขึ้น"
                            }, {
                                question: "หมวกเปลี่ยนตามเทศกาลคือยังไง",
                                answer: "ทุก ๆ เดือนเราจะออกหมวกเซ็ตใหม่ หรือมีหมวกพิเศษตาม Theme ในช่วงเทศกาลต่าง ๆ (เมื่อก่อนจะเปลี่ยนให้ทุกคนที่เป็นยูสเซอร์ล๊อกอิน แต่หลังจากนี้จะเปลี่ยนเฉพาะหมวกของยูสเซอร์บูสเท่านั้น พิเศษแน่นอน !)"
                            }, {
                                question: "หากกดรับ qrcode เพื่อโอนแล้ว ต้องโอนภายในเวลาเท่าไร",
                                answer: "ภายใน 60 นาทีหลังจากกดรับ qrcode นะคะ แต่สามารถกดสร้าง qrcode ใหม่ได้ โดยการกลับไปหน้า drinksonme.live/boost แล้วกดซื้ออีกรอบค่ะ"
                            }, {
                                question: "หากโอนจ่ายตังแล้ว แต่ไม่มีอะไรเกิดขึ้นต้องทำอย่างไร",
                                answer: "ไม่ต้องเป็นห่วง สามารถติดต่อมาที่ drinksonme.live@gmail.com เพื่อให้เราเช็คได้เลย อย่าลืมเก็บ receipt การโอนไว้ด้วยนะคะ"
                            }]
                        }
                    },
                    computed: {
                        boostPackage: function () {
                            return this.boostPackages[this.selectedPackageIndex]
                        }
                    },
                    methods: function (t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? d(Object(source), !0).forEach((function (e) {
                                Object(r.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({
                        buyBoost: function () {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                var o, data;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.setPageLoading(!0), e.next = 4, t.$axios.post("/api/payments/checkout", {
                                                productCode: t.boostPackage.value
                                            }, {
                                                headers: t.headers
                                            });
                                        case 4:
                                            o = e.sent, data = o.data, window.location = data.url, e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), t.$notify({
                                                type: "error",
                                                message: "เกิดข้อผิดพลาดขณะซื้อ Boost กรุณาลองใหม่อีกครั้งค่ะ"
                                            });
                                        case 12:
                                            t.setPageLoading(!1);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 9]
                                ])
                            })))()
                        },
                        faqClicked: function () {
                            this.showFAQ = !this.showFAQ
                        }
                    }, Object(c.b)(["setShowLoginModal", "setPageLoading"]))
                },
                v = f,
                _ = (o(596), o(3)),
                component = Object(_.a)(v, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("div", {
                        staticClass: "flex flex-col lg:flex-row justify-center items-center my-8",
                        attrs: {
                            "data-testid": "boost-info"
                        }
                    }, [e("img", {
                        staticClass: "w-40 mb-5 mr-0 lg:mb-0 lg:mr-5 float",
                        attrs: {
                            src: "/boost/boost.png"
                        }
                    }), t._v(" "), e("div", [t.isBoosted ? e("div", {
                        staticClass: "text-lg font-semibold mb-5 text-center"
                    }, [e("p", [t._v("โปรไฟล์ของคุณได้รัับการ Boost แล้ว !")]), t._v(" "), e("p", [t._v("ใช้งานได้จนถึงวันที่ " + t._s(t.formatDate(t.user.boostEndsAt)))]), t._v(" "), e("p", [t._v("ต่ออายุเพิ่มได้ด้านล่างเลย !")])]) : t._e(), t._v(" "), e("div", {
                        staticClass: "mx-auto dom-border max-w-sm flex justify-center py-6 px-8"
                    }, [e("div", [t._m(0), t._v(" "), e("div", {
                        staticClass: "flex justify-center my-4 font-semibold",
                        attrs: {
                            "data-testid": "boost-price"
                        }
                    }, [e("p", {
                        staticClass: "text-2xl text-gray-400 line-through mr-2"
                    }, [t._v("\n              " + t._s(t.fullPrice[t.boostPackage.value]) + "\n            ")]), t._v(" "), e("p", {
                        staticClass: "text-2xl"
                    }, [t._v("\n              " + t._s(t.price[t.boostPackage.value]) + " บาท/เดือน\n            ")])]), t._v(" "), e("hr"), t._v(" "), e("ul", {
                        staticClass: "my-4",
                        attrs: {
                            role: "list"
                        }
                    }, t._l(t.features, (function (o, n) {
                        return e("li", {
                            key: n,
                            staticClass: "flex gap-x-3 my-2"
                        }, [e("img", {
                            staticClass: "h-8",
                            attrs: {
                                src: "/landing/tick.png",
                                alt: "icon"
                            }
                        }), t._v(" "), e("div", [e("p", {
                            staticClass: "text-xl"
                        }, [t._v("\n                  " + t._s(o.text ? o.text : o) + "\n                ")]), t._v(" "), o.subText ? e("p", [t._v("\n                  " + t._s(o.subText) + "\n                ")]) : t._e()])])
                    })), 0), t._v(" "), e("div", {
                        staticClass: "mt-8 mb-5 flex justify-center",
                        attrs: {
                            "data-testid": "boost-period-selection"
                        }
                    }, [e("fieldset", {
                        staticClass: "grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                    }, [e("legend", {
                        staticClass: "sr-only"
                    }, [t._v("\n                Boost period\n              ")]), t._v(" "), t._l(t.boostPackages, (function (o, n) {
                        return e("label", {
                            key: n,
                            staticClass: "cursor-pointer rounded-full py-1 px-2.5 boost-period-radio",
                            class: t.selectedPackageIndex === n ? "text-white bg-black" : "bg-cream text-black"
                        }, [e("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: t.selectedPackageIndex,
                                expression: "selectedPackageIndex"
                            }],
                            staticClass: "sr-only",
                            attrs: {
                                type: "radio",
                                name: "boost-period"
                            },
                            domProps: {
                                value: n,
                                checked: t._q(t.selectedPackageIndex, n)
                            },
                            on: {
                                change: function (e) {
                                    t.selectedPackageIndex = n
                                }
                            }
                        }), t._v(" "), e("p", {
                            staticClass: "font-semibold"
                        }, [t._v(t._s(o.label)), e("span", {
                            staticClass: "text-secondary ml-1"
                        }, [t._v(t._s(o.highlight))])])])
                    }))], 2)]), t._v(" "), t.user && t.user.authId ? e("banyen-button", {
                        staticClass: "text-xl font-semibold w-32",
                        nativeOn: {
                            click: function (e) {
                                return t.buyBoost.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n            ซื้อเลย\n          ")]) : e("banyen-button", {
                        staticClass: "text-xl font-semibold w-32",
                        nativeOn: {
                            click: function (e) {
                                return t.setShowLoginModal(!0)
                            }
                        }
                    }, [t._v("\n            ล็อกอินเพื่อซื้อ\n          ")])], 1)])])]), t._v(" "), e("div", {
                        staticClass: "font-semibold max-w-md mt-8 mx-auto",
                        attrs: {
                            id: "faq"
                        }
                    }, [e("p", {
                        staticClass: "text-3xl text-secondary mx-auto flex justify-center cursor-pointer hover:underline",
                        on: {
                            click: t.faqClicked
                        }
                    }, [t._v("\n      ดูคำถามที่พบบ่อย\n    ")]), t._v(" "), e("div", {
                        staticClass: "mx-4 questions-pair overflow-hidden",
                        class: t.showFAQ ? "h-[600px]" : "h-0"
                    }, t._l(t.faqPairs, (function (o, n) {
                        return e("div", {
                            key: n,
                            staticClass: "my-5"
                        }, [e("p", [t._v("Q: " + t._s(o.question))]), t._v(" "), e("p", [t._v("A: " + t._s(o.answer))])])
                    })), 0)])])
                }), [function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "flex justify-center items-center gap-x-2"
                    }, [e("img", {
                        staticClass: "w-10",
                        attrs: {
                            src: "/boost/boost-logo.png"
                        }
                    }), t._v(" "), e("h2", {
                        staticClass: "font-semibold text-3xl text-secondary"
                    }, [t._v("\n              DrinksOnMe Boost\n            ")])])
                }], !1, null, "73d4f43c", null);
            e.default = component.exports
        }
    }
]);