(window.webpackJsonp = window.webpackJsonp || []).push([
    [1, 11, 12, 23, 26, 27, 28, 29], {
        382: function (t, e, r) {
            t.exports = r.p + "img/sponsor-bg.6161664.png"
        },
        387: function (t, e, r) {
            var content = r(552);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(33).default)("17039896", content, !0, {
                sourceMap: !1
            })
        },
        550: function (t, e, r) {
            t.exports = r.p + "img/chatbox.2fb8554.png"
        },
        551: function (t, e, r) {
            "use strict";
            r(387)
        },
        552: function (t, e, r) {
            var n = r(32),
                o = r(170),
                c = r(382),
                l = n((function (i) {
                    return i[1]
                })),
                d = o(c);
            l.push([t.i, ".sponsor[data-v-8cb9d0bc]{background:url(" + d + ") no-repeat;background-size:contain;background-position-x:center;padding:.5rem 1rem .9rem .75rem}", ""]), l.locals = {}, t.exports = l
        },
        557: function (t, e, r) {
            "use strict";
            r.r(e);
            r(22), r(65);
            var n = r(171),
                o = {
                    props: {
                        displayName: {
                            type: String,
                            required: !0
                        },
                        campaignName: {
                            type: String,
                            required: !0
                        },
                        description: {
                            type: String,
                            required: !0
                        },
                        thumbnailUrl: {
                            type: String,
                            required: !0
                        },
                        srcUrl: {
                            type: String,
                            required: !0
                        }
                    },
                    methods: {
                        featuredBarClicked: function () {
                            Object(n.b)(this.$analytics, "featured_bar_clicked", {
                                campaignName: this.campaignName
                            })
                        }
                    }
                },
                c = r(3),
                component = Object(c.a)(o, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "max-w-sm mx-auto"
                    }, [e("img", {
                        staticClass: "w-48 px-4",
                        attrs: {
                            src: "/featured-bar/title.png",
                            draggable: "false"
                        }
                    }), t._v(" "), e("a", {
                        attrs: {
                            href: t.srcUrl,
                            target: "_blank"
                        }
                    }, [e("div", {
                        staticClass: "grid grid-cols-2 gap-2 relative pt-6 pl-6 pb-7 pr-7 items-center cursor-pointer",
                        on: {
                            click: t.featuredBarClicked
                        }
                    }, [e("img", {
                        staticClass: "w-full absolute h-full",
                        attrs: {
                            src: "/featured-bar/bar-box.png",
                            draggable: "false"
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "w-36 z-20 rounded-md",
                        attrs: {
                            src: t.thumbnailUrl,
                            draggable: "false"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "z-10"
                    }, [e("h2", {
                        staticClass: "text-lg font-semibold mb-1"
                    }, [t._v("\n          " + t._s(t.displayName) + "\n        ")]), t._v(" "), e("p", {
                        staticClass: "text-xs text-paragraph-gray"
                    }, [t._v("\n          " + t._s(t.description) + "\n        ")]), t._v(" "), e("p", {
                        staticClass: "text-xs my-1"
                    }, [t._v("คลิกเลย !")])])])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        558: function (t, e, r) {
            "use strict";
            r.r(e);
            var n = {
                    components: {
                        Modal: r(24).default
                    }
                },
                o = r(3),
                component = Object(o.a)(n, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("modal", {
                        on: {
                            close: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [e("div", {
                        staticClass: "flex flex-col items-center pt-5"
                    }, [e("p", {
                        staticClass: "text-3xl font-semibold"
                    }, [t._v("\n      จะเปลี่ยนโต๊ะหรอ ?\n    ")]), t._v(" "), e("p", {
                        staticClass: "text-lg mt-3"
                    }, [t._v("\n      อย่าลืมบอกลาเพื่อนร่วมโต๊ะก่อนนะ\n    ")]), t._v(" "), e("img", {
                        staticClass: "mt-5 w-24",
                        attrs: {
                            src: "https://ikuzbipnfkbymlctljcv.supabase.co/storage/v1/object/public/public-web-app/images/counter/wanna-switch-avatar.png"
                        }
                    })]), t._v(" "), e("img", {
                        staticClass: "cursor-pointer w-28 pt-5 mx-auto",
                        attrs: {
                            src: "https://ikuzbipnfkbymlctljcv.supabase.co/storage/v1/object/public/public-web-app/images/counter/switch-counter.png"
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("confirm")
                            }
                        }
                    })])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        559: function (t, e, r) {
            "use strict";
            r.r(e);
            r(57);
            var n = r(171),
                o = {
                    props: {
                        sponsor: {
                            type: Object,
                            default: function () {}
                        }
                    },
                    computed: {
                        isBlank: function () {
                            return !this.sponsor || !this.sponsor.name
                        }
                    },
                    mounted: function () {
                        this.isBlank || Object(n.b)(this.$analytics, "sponsor_viewed", {
                            campaignName: this.sponsor.name
                        })
                    },
                    methods: {
                        sponsorClicked: function () {
                            Object(n.b)(this.$analytics, "sponsor_clicked", {
                                campaignName: this.sponsor.name
                            })
                        }
                    }
                },
                c = (r(551), r(3)),
                component = Object(c.a)(o, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t.isBlank ? e("a", {
                        attrs: {
                            href: "https://page.line.me/?accountId=drinksonme",
                            target: "_blank"
                        }
                    }, [t._m(0)]) : e("a", {
                        attrs: {
                            href: t.sponsor.srcURL,
                            target: "_blank"
                        }
                    }, [e("div", {
                        staticClass: "relative cursor-pointer mx-auto sponsor w-[335px] h-[138px]",
                        on: {
                            click: function (e) {
                                return t.sponsorClicked(t.sponsor.name)
                            }
                        }
                    }, [e("img", {
                        staticClass: "w-[310px] z-30 mt-1",
                        attrs: {
                            src: t.sponsor.imageURL,
                            draggable: "false"
                        }
                    })])])])
                }), [function () {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "relative cursor-pointer mx-auto sponsor w-[335px] h-[138px]"
                    }, [t("img", {
                        staticClass: "w-[310px] z-30 mt-1",
                        attrs: {
                            src: "/sponsor/line-add-sponsor.jpeg",
                            draggable: "false"
                        }
                    })])
                }], !1, null, "8cb9d0bc", null);
            e.default = component.exports
        },
        560: function (t, e, r) {
            "use strict";
            r.r(e);
            var n = r(96),
                o = r(56),
                c = r(24),
                l = {
                    components: {
                        DomButton: o.default,
                        Modal: c.default
                    },
                    mixins: [n.a],
                    methods: {}
                },
                d = r(3),
                component = Object(d.a)(l, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("modal", {
                        on: {
                            close: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [e("div", {
                        staticClass: "max-w-xl w-full text-center"
                    }, [e("div", [e("div", {
                        staticClass: "flex items-center justify-center gap-1"
                    }, [e("p", {
                        staticClass: "text-2xl font-semibold"
                    }, [t._v("\n          รีพอร์ต\n        ")]), t._v(" "), e("img", {
                        staticClass: "h-9",
                        attrs: {
                            src: "/report/report-flag.png"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [e("p", [t._v("เราต้องการให้เว็บเป็น"), e("span", {
                        staticClass: "underline"
                    }, [t._v("พื้นที่ปลอดภัย")]), t._v("สำหรับการพูดคุยหากพบยูสเซอร์ที่ไม่เป็นพื้นที่ปลอดภัย")]), t._v(" "), e("p", {
                        staticClass: "text-report-purple"
                    }, [t._v("\n          สามารถกดปุ่มรีพอร์ตที่ข้างชื่อได้เลย\n        ")])]), t._v(" "), e("img", {
                        staticClass: "w-36 mx-auto",
                        attrs: {
                            src: "/report/report-example.png"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [e("p", [t._v("\n          โดยยูสเซอร์ที่ล็อกอินมีสิทธิ์รีพอร์ต 1 ครั้ง/วัน\n        ")]), t._v(" "), e("p", [t._v("\n          ยูสเซอร์บูสต์มีสิทธิ์รีพอร์ต 3 ครั้ง/วัน\n        ")])]), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [e("p", [t._v("เมื่อยูสเซอร์ถูกรีพอร์ตจากยูสเซอร์จำนวนหนึ่ง")]), t._v(" "), e("p", [t._v("ระบบจะทำการแบนตามหลักการข้างล่างนี้")])]), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [e("p", [t._v("โดนแบนครั้งที่ 1 : 3 วัน")]), t._v(" "), e("p", [t._v("โดนแบนครั้งที่ 2 : 7 วัน")]), t._v(" "), e("p", [t._v("โดนแบนครั้งที่ 3 : 1 เดือน")]), t._v(" "), e("p", [t._v("โดนแบนครั้งที่ 4 : ตลอดไป")])]), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [e("p", [t._v("ซึ่งการโดนแบนจากระบบนี้ ถือเป็นการตัดสินใจของยูสเซอร์ในระบบ")]), t._v(" "), e("p", {
                        staticClass: "underline"
                    }, [t._v("\n          ทางเว็บจะไม่เข้าไปตรวจสอบเพื่อปลดแบนเป็นรายกรณีแต่อย่างใด\n        ")])]), t._v(" "), e("div", {
                        staticClass: "text-report-purple my-5"
                    }, [t._v("\n        การรีพอร์ตนี้ส่งผลกระทบต่อยูสเซอร์คนอื่น ขอให้ใช้วิจารณญาณในการรีพอร์ต\n      ")]), t._v(" "), e("div", {
                        staticClass: "flex justify-center"
                    }, [e("dom-button", {
                        staticClass: "py-3 px-5 w-48 font-semibold",
                        nativeOn: {
                            click: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [t._v("\n          รับทราบ\n        ")])], 1)])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                DomButton: r(56).default
            })
        },
        561: function (t, e, r) {
            "use strict";
            r.r(e);
            r(28), r(22), r(27), r(15), r(37), r(23), r(38);
            var n = r(5),
                o = r(14),
                c = (r(45), r(29)),
                l = r(96),
                d = r(56),
                m = r(24);

            function f(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function v(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function (e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var h = {
                    components: {
                        DomButton: d.default,
                        Modal: m.default
                    },
                    mixins: [l.a],
                    props: {
                        memberToReport: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        }
                    },
                    data: function () {
                        return {
                            error: null
                        }
                    },
                    methods: v(v({}, Object(c.b)(["setPageLoading"])), {}, {
                        confirmReport: function () {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.setPageLoading(!0), e.next = 4, t.$axios.$post("/api/reports", {
                                                reportedUserId: t.memberToReport.userId
                                            }, {
                                                headers: t.headers
                                            });
                                        case 4:
                                            t.$notify({
                                                type: "success",
                                                text: "ส่งรีพอร์ตเรียบร้อย ขอบคุณที่ร่วมกันทำให้เว็บไซต์เป็นพื้นที่ปลอดภัย"
                                            }), t.$emit("close"), e.next = 23;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), e.t1 = e.t0.response.data.message, e.next = "bar-closed" === e.t1 ? 13 : "daily-report-limit-reached" === e.t1 ? 15 : "duplicate-report" === e.t1 ? 17 : "user-is-currently-banned" === e.t1 ? 19 : 22;
                                            break;
                                        case 13:
                                            return t.$notify({
                                                type: "info",
                                                text: "Bar is currently closed. We close from 04:00 - 04:15 GMT+7 everyday. Please come later :)"
                                            }), e.abrupt("break", 23);
                                        case 15:
                                            return t.error = "daily-report-limit-reached", e.abrupt("break", 23);
                                        case 17:
                                            return t.error = "duplicate-report", e.abrupt("break", 23);
                                        case 19:
                                            return t.$notify({
                                                type: "info",
                                                text: "ยูสเซอร์นี้ถูกแบนอยู่แล้วในขณะนี้ เก็บไว้รีพอร์ตใหม่ในภายหลังนะคะ"
                                            }), t.$emit("close"), e.abrupt("break", 23);
                                        case 22:
                                            t.$notify({
                                                type: "error",
                                                text: "เกิดปัญหาระหว่างการส่งรีพอร์ต กรุณาลองอีกครั้ง"
                                            });
                                        case 23:
                                            t.setPageLoading(!1);
                                        case 24:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        }
                    })
                },
                y = r(3),
                component = Object(y.a)(h, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("modal", {
                        on: {
                            close: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [e("div", {
                        staticClass: "max-w-xl w-full text-center"
                    }, [e("div", {
                        staticClass: "flex items-center justify-center gap-1"
                    }, [e("p", {
                        staticClass: "text-2xl font-semibold"
                    }, [t._v("\n        รีพอร์ต\n      ")]), t._v(" "), e("img", {
                        staticClass: "h-9",
                        attrs: {
                            src: "/report/report-flag.png"
                        }
                    })]), t._v(" "), "daily-report-limit-reached" === t.error ? e("div", [e("div", {
                        staticClass: "my-5 text-report-purple"
                    }, [e("p", [t._v("คุณได้ใช้สิทธิ์ในการรีพอร์ตของวันนี้หมดแล้ว")]), t._v(" "), e("p", [t._v("(สามารถเพิ่มสิทธิ์ผ่านการเป็นสมาชิกบูสต์ได้)")])]), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [e("p", [t._v("ยูสเซอร์ที่ล็อกอินมีสิทธิ์รีพอร์ต 1 ครั้ง/วัน")]), t._v(" "), e("p", [t._v("ยูสเซอร์บูสต์มีสิทธิ์รีพอร์ต 3 ครั้ง/วัน")])]), t._v(" "), e("n-link", {
                        staticClass: "flex justify-center",
                        attrs: {
                            to: "/boost"
                        }
                    }, [e("dom-button", {
                        staticClass: "py-3 px-5 w-48 font-semibold gap-1 text-xl",
                        nativeOn: {
                            click: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [e("p", [t._v("ซื้อบูสต์")]), t._v(" "), e("img", {
                        staticClass: "w-8",
                        attrs: {
                            src: "/boost/boost-logo.png"
                        }
                    })])], 1)], 1) : "duplicate-report" === t.error ? e("div", [e("div", {
                        staticClass: "my-5 text-report-purple"
                    }, [e("p", [t._v("คุณได้ทำการรีพอร์ต")]), t._v(" "), e("p", {
                        staticClass: "text-xl font-semibold"
                    }, [t._v('\n          "' + t._s(t.memberToReport.nickName) + '"\n        ')])]), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [e("p", [t._v("ว่าทำตัว"), e("span", {
                        staticClass: "underline"
                    }, [t._v("ไม่เป็นพื้นที่ปลอดภัย")]), t._v("ในเว็ปไซต์นี้ไปแล้ว")])]), t._v(" "), e("p", {
                        staticClass: "my-5"
                    }, [t._v("\n        ไม่สามารถทำการรีพอร์ตยูเซอร์เดิมซ้ำได้ใน 3 วัน\n      ")]), t._v(" "), e("div", {
                        staticClass: "flex justify-center"
                    }, [e("dom-button", {
                        staticClass: "py-3 px-5 w-48 font-semibold text-xl",
                        nativeOn: {
                            click: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [t._v("\n          โอเค\n        ")])], 1)]) : e("div", [e("div", {
                        staticClass: "my-5 text-report-purple"
                    }, [e("p", [t._v("คุณกำลังรีพอร์ต")]), t._v(" "), e("p", {
                        staticClass: "text-xl font-semibold"
                    }, [t._v('\n          "' + t._s(t.memberToReport.nickName) + '"\n        ')])]), t._v(" "), e("div", {
                        staticClass: "my-5 font-semibold"
                    }, [e("p", [t._v("ว่าทำตัว"), e("span", {
                        staticClass: "underline"
                    }, [t._v("ไม่เป็นพื้นที่ปลอดภัย")]), t._v("ในเว็ปไซต์นี้")])]), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [e("p", [t._v("เมื่อยูสเซอร์ถูกรีพอร์ตจากยูสเซอร์จำนวนหนึ่ง")]), t._v(" "), e("p", [t._v("ระบบจะทำการแบนตามหลักการข้างล่างนี้")])]), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [e("p", [t._v("โดนแบนครั้งที่ 1 : 3 วัน")]), t._v(" "), e("p", [t._v("โดนแบนครั้งที่ 2 : 7 วัน")]), t._v(" "), e("p", [t._v("โดนแบนครั้งที่ 3 : 1 เดือน")]), t._v(" "), e("p", [t._v("โดนแบนครั้งที่ 4 : ตลอดไป")])]), t._v(" "), e("div", {
                        staticClass: "my-5"
                    }, [t._v("\n        การรีพอร์ตนี้ส่งผลกระทบต่อยูสเซอร์คนอื่น ขอให้ใช้วิจารณญาณในการรีพอร์ต\n      ")]), t._v(" "), e("div", {
                        staticClass: "text-report-purple my-5"
                    }, [t._v("\n        คุณมีสิทธิ์ในการรีพอร์ตเพียง " + t._s(t.isBoosted ? 3 : 1) + " ครั้งต่อวันเท่านั้น\n      ")]), t._v(" "), e("div", {
                        staticClass: "flex justify-center"
                    }, [e("dom-button", {
                        staticClass: "py-3 px-5 w-48 font-semibold text-xl",
                        nativeOn: {
                            click: function (e) {
                                return t.confirmReport.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n          รีพอร์ต\n        ")])], 1)])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                DomButton: r(56).default
            })
        },
        567: function (t, e, r) {
            var content = r(593);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(33).default)("862fae74", content, !0, {
                sourceMap: !1
            })
        },
        568: function (t, e, r) {
            var content = r(595);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(33).default)("008560ca", content, !0, {
                sourceMap: !1
            })
        },
        574: function (t, e, r) {
            "use strict";
            r.r(e);
            var n = r(14),
                o = (r(57), r(22), r(65), r(82), r(97), r(59), r(28), r(132), [function () {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "flex justify-center mb-3 relative",
                        attrs: {
                            "data-testid": "banner-top"
                        }
                    }, [t("img", {
                        staticClass: "w-52",
                        attrs: {
                            src: "/logo.png"
                        }
                    })])
                }, function () {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "hidden lg:block mb-4 mt-2 text-center"
                    }, [t("p", {
                        staticClass: "text-paragraph-gray text-sm"
                    }, [this._v("\n            👋หากไม่มีการส่งข้อความนานเกิน 5 นาที อาจโดนผู้เล่นคนอื่นเตะออกได้\n          ")])])
                }, function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "text-paragraph-gray text-sm"
                    }, [e("p", [t._v("👋หากไม่มีการส่งข้อความนานเกิน 5 นาที")]), t._v(" "), e("p", [t._v("อาจโดนผู้เล่นคนอื่นเตะออกได้")])])
                }, function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "hidden lg:flex lg:justify-end w-[356px] pr-4"
                    }, [e("div", {
                        staticClass: "text-center text-paragraph-gray"
                    }, [e("p", {
                        staticClass: "text-sm"
                    }, [t._v("\n              *มือถืออาจมีข้อจำกัดทาง Browser แนะนำให้เล่นในคอม\n            ")]), t._v(" "), e("p", {
                        staticClass: "text-sm flex"
                    }, [t._v("\n              แจ้งปัญหาหรือตามหาเพื่อนที่หายไปได้ที่ "), e("a", {
                        staticClass: "cursor-pointer px-1 inline-block",
                        attrs: {
                            target: "_blank",
                            href: "https://discord.gg/EJeRUY4WBn"
                        }
                    }, [e("img", {
                        staticClass: "h-5",
                        attrs: {
                            src: r(129)
                        }
                    })])])])])
                }, function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "visible lg:hidden flex justify-center"
                    }, [e("div", {
                        staticClass: "text-center text-paragraph-gray"
                    }, [e("p", {
                        staticClass: "text-sm"
                    }, [t._v("\n        *มือถืออาจมีข้อจำกัดทาง Browser แนะนำให้เล่นในคอม\n      ")]), t._v(" "), e("p", {
                        staticClass: "text-sm flex justify-center"
                    }, [t._v("\n        แจ้งปัญหาหรือตามหาเพื่อนที่หายไปได้ที่ "), e("a", {
                        staticClass: "cursor-pointer px-1 inline-block",
                        attrs: {
                            target: "_blank",
                            href: "https://discord.gg/EJeRUY4WBn"
                        }
                    }, [e("img", {
                        staticClass: "h-5",
                        attrs: {
                            src: r(129)
                        }
                    })])])])])
                }, function () {
                    var t = this,
                        e = t._self._c;
                    return e("p", {
                        staticClass: "text-center lg:text-right text-paragraph-gray",
                        attrs: {
                            "data-testid": "line-contact"
                        }
                    }, [t._v("\n      สนใจเป็น sponsor ? "), e("a", {
                        staticClass: "font-semibold underline",
                        attrs: {
                            href: "https://page.line.me/?accountId=drinksonme",
                            target: "_blank"
                        }
                    }, [t._v("คุยกับเรา !")])])
                }]),
                c = (r(37), r(38), r(5)),
                l = (r(45), r(52), r(564), r(15), r(27), r(41), r(130), r(23), r(565)),
                d = r(64),
                m = r(29),
                f = r(125),
                v = r.n(f),
                h = r(235),
                y = r.n(h),
                x = {
                    name: "MoonLoader",
                    props: {
                        loading: {
                            type: Boolean,
                            default: !0
                        },
                        color: {
                            type: String,
                            default: "#5dc596"
                        },
                        size: {
                            type: String,
                            default: "60px"
                        },
                        margin: {
                            type: String,
                            default: "2px"
                        },
                        radius: {
                            type: String,
                            default: "100%"
                        }
                    },
                    data: function () {
                        return {
                            spinnerStyle: {
                                height: this.size,
                                width: this.size,
                                borderRadius: this.radius
                            }
                        }
                    },
                    computed: {
                        moonSize: function () {
                            return parseFloat(this.size) / 7
                        },
                        spinnerMoonStyle: function () {
                            return {
                                height: this.moonSize + "px",
                                width: this.moonSize + "px",
                                borderRadius: this.radius
                            }
                        },
                        animationStyle2: function () {
                            return {
                                top: parseFloat(this.size) / 2 - this.moonSize / 2 + "px",
                                backgroundColor: this.color
                            }
                        },
                        animationStyle3: function () {
                            return {
                                border: this.moonSize + "px solid " + this.color
                            }
                        }
                    }
                },
                _ = (r(592), r(3)),
                w = Object(_.a)(x, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loading,
                            expression: "loading"
                        }],
                        staticClass: "v-spinner"
                    }, [e("div", {
                        staticClass: "v-moon v-moon1",
                        style: t.spinnerStyle
                    }, [e("div", {
                        staticClass: "v-moon v-moon2",
                        style: [t.spinnerMoonStyle, t.animationStyle2]
                    }), e("div", {
                        staticClass: "v-moon v-moon3",
                        style: [t.spinnerStyle, t.animationStyle3]
                    })])])
                }), [], !1, null, null, null).exports,
                C = r(96),
                k = r(557),
                j = r(558),
                O = r(559),
                M = r(56),
                R = r(560),
                B = r(561),
                S = r(579),
                $ = r(245);

            function N(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function T(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? N(Object(source), !0).forEach((function (e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : N(Object(source)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            v.a.extend(y.a);
            var D = {
                    components: {
                        SwitchCounterModal: j.default,
                        FeaturedBar: k.default,
                        Sponsor: O.default,
                        DomButton: M.default,
                        ReportDetailModal: R.default,
                        ReportConfirmationModal: B.default,
                        MoonLoader: w,
                        BoostShoutOutModal: S.default,
                        Tooltip: $.default
                    },
                    mixins: [C.a],
                    data: function () {
                        return {
                            message: "",
                            mouseHover: {},
                            chatFocus: !1,
                            lastMessageSynced: Date.now(),
                            lastGhostSynced: v.a.utc().toDate(),
                            lastActives: {},
                            memberChatting: {},
                            typingUserNames: [],
                            showSwitchModal: !1,
                            messages: [{
                                message: "🤟 เพื่อความปลอดภัยในการใช้งาน เราขอแนะนำให้งดส่งข้อมูลส่วนตัวให้กับคนแปลกหน้า ทางเว็บขอสงวนสิทธิ์ในการรับผิดชอบใด ๆ อันเกิดจากการเปิดเผยข้อมูลส่วนตัว",
                                server: "join"
                            }, {
                                message: "👻 หากพบตัวละครที่กลายเป็นผี จะหมายถึงยูสเซอร์ที่ไม่แอคทีฟแล้ว สามารถกดปุ่มไล่ผีได้เลย !",
                                server: "join"
                            }],
                            messageKeys: {},
                            members: [],
                            counterChannel: null,
                            chatListener: function () {},
                            allowSwitch: !1,
                            allowSync: !0,
                            allowBartenderAsk: !0,
                            typingRef: null,
                            messageRef: null,
                            memberToReport: null,
                            showReportDetailModal: !1,
                            showReportConfirmationModal: !1,
                            lastNotifiedOfDelay: null,
                            sendingChatMessage: !1,
                            showBoostShoutOutModal: !1,
                            showBoostTooltip: !1
                        }
                    },
                    computed: {
                        drinks: function () {
                            return this.$store.state.drinks
                        },
                        counter: function () {
                            return this.$store.state.counter
                        },
                        featuredBar: function () {
                            return this.counter.storeSubscription || null
                        },
                        background: function () {
                            return "url(".concat(this.counter.storeSubscription ? this.counter.storeSubscription.backgroundURL : "https://ikuzbipnfkbymlctljcv.supabase.co/storage/v1/object/public/public-web-app/images/counter-background.gif", ") no-repeat")
                        },
                        sponsors: function () {
                            return this.$store.state.sponsors
                        },
                        blankSponsors: function () {
                            return [1, 2, 3].slice(0, 3 - this.sponsors.length)
                        },
                        storeNotificationVol: function () {
                            return this.$store.state.sound.volume.notification
                        },
                        isMuted: function () {
                            return this.$store.state.sound.volume.isMuted
                        },
                        countersToAvoid: function () {
                            return this.$store.state.countersToAvoid
                        },
                        triggerShareMoment: function () {
                            return this.$store.state.triggerShareMoment
                        },
                        languageForDisplay: function () {
                            var t = this;
                            return this.$config.languages.find((function (e) {
                                return e.value === t.counter.language
                            })).display
                        },
                        ageRangeForDisplay: function () {
                            var t = this;
                            return this.$config.ageRanges.find((function (e) {
                                return e.value === t.counter.ageRange
                            })).display
                        },
                        counterBoosted: function () {
                            return this.members.filter((function (t) {
                                var e = t.boostEndsAt;
                                return e && new Date(e).valueOf() > Date.now()
                            })).length > 0
                        }
                    },
                    watch: {
                        storeNotificationVol: function (t) {
                            this.setNotifcationPlayer(t)
                        },
                        isMuted: function (t) {
                            document.getElementById("noti").muted = t
                        },
                        message: function (t, e) {
                            var r = this;
                            "" === e && "" !== t ? Object(l.debounce)((function () {
                                Object(d.j)(Object(d.h)(r.$firebaseDB, "counters/".concat(r.counter.id, "/typings/").concat(r.user.id)), !0)
                            }), 1e3, {
                                leading: !0,
                                trailing: !0
                            })() : "" === t && "" !== e && Object(l.debounce)((function () {
                                return Object(d.i)(Object(d.h)(r.$firebaseDB, "counters/".concat(r.counter.id, "/typings/").concat(r.user.id)))
                            }), 1e3, {
                                leading: !0,
                                trailing: !0
                            })()
                        },
                        counter: function (t) {
                            var e = this;
                            return Object(c.a)(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function (r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (!t) {
                                                r.next = 4;
                                                break
                                            }
                                            return r.next = 3, e.onLandingNewCounter();
                                        case 3:
                                            e.counterBoosted && !e.isBoosted && (e.showBoostShoutOutModal = !0);
                                        case 4:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        }
                    },
                    mounted: function () {
                        var t = this;
                        return Object(c.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.onLandingNewCounter();
                                    case 2:
                                        t.counterBoosted && !t.isBoosted && (t.showBoostShoutOutModal = !0), t.setNotifcationPlayer(t.storeNotificationVol), setTimeout((function () {
                                            t.allowSwitch = !0
                                        }), 1e4);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    methods: T(T({}, Object(m.b)(["setUser", "setCounterEnv", "setPageLoading", "appendCounterToAvoid", "setTriggerShareMoment"])), {}, {
                        toggleMeat: function (i) {
                            document.getElementById("grill-sound").play(), this.meatToggle[i] = 1 === this.meatToggle[i] ? 2 : 1
                        },
                        onLandingNewCounter: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.allowSwitch = !1, e.next = 3, t.fetchMembersAndCheckGhost();
                                        case 3:
                                            return e.next = 5, t.listenToCounterMembersAndMessages();
                                        case 5:
                                            t.listenToMembersTyping(), setTimeout((function () {
                                                t.allowSwitch = !0
                                            }), 1e4);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        isGhost: function (t) {
                            return this.lastGhostSynced.valueOf() - new Date(t).valueOf() > 3e5
                        },
                        drinkById: function (t) {
                            return this.drinks.find((function (e) {
                                return e.id === t
                            }))
                        },
                        messageTime: function (t) {
                            var e = new Date(t);
                            return "".concat(e.getHours(), ":").concat(e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes())
                        },
                        copyCounterIdClicked: function () {
                            navigator.clipboard.writeText(this.counter.id)
                        },
                        switchCounter: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                var r, n, o, data;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.setPageLoading(!0), e.next = 3, t.unsubscribeCounter();
                                        case 3:
                                            return t.showSwitchModal = !1, t.members = [], t.messages = [{
                                                message: "🤟เพื่อความปลอดภัยในการใช้งาน เราขอแนะนำให้งดส่งข้อมูลส่วนตัวให้กับคนแปลกหน้า ทางเว็บขอสงวนสิทธิ์ในการรับผิดชอบใด ๆ อันเกิดจากการเปิดเผยข้อมูลส่วนตัว",
                                                server: "join"
                                            }], t.messageKeys = {}, t.messageRef = null, t.typingRef = null, e.prev = 9, t.soundBoxOpen = !1, e.next = 13, t.verifyVersion();
                                        case 13:
                                            if (e.sent) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 16:
                                            return r = t.countersToAvoid.concat([t.counter.id]), t.appendCounterToAvoid(t.counter.id), n = 5 === t.counter.size ? "chit-chat-group" : "chit-chat", e.next = 21, t.$axios.post("/api/counters/switch", T(T({}, t.enterContext), {}, {
                                                counterId: t.counter.id,
                                                countersToAvoid: r,
                                                type: n
                                            }), {
                                                headers: t.headers
                                            });
                                        case 21:
                                            o = e.sent, data = o.data, t.setCounterEnv(data), e.next = 36;
                                            break;
                                        case 26:
                                            e.prev = 26, e.t0 = e.catch(9), e.t1 = e.t0.response.data.message, e.next = "bar-closed" === e.t1 ? 31 : 35;
                                            break;
                                        case 31:
                                            return t.$notify({
                                                type: "info",
                                                text: "บาร์ปิดตอนตี่สี่ถึงตีสี่สิบห้านะทีทุกคืนนะคะ กลับมาใหม่นะ"
                                            }), t.$axios.post("/api/counters/leave", {}, {
                                                headers: t.headers
                                            }), t.unsubscribeCounterAndLeave(), e.abrupt("break", 36);
                                        case 35:
                                            t.$notify({
                                                type: "info",
                                                text: "ระบบเกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้งนะคะ"
                                            });
                                        case 36:
                                            t.setPageLoading(!1);
                                        case 37:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [9, 26]
                                ])
                            })))()
                        },
                        setNotifcationPlayer: function (t) {
                            document.getElementById("noti").volume = t / 100
                        },
                        listenToMembersTyping: function () {
                            var t = this;
                            this.typingRef = Object(d.h)(this.$firebaseDB, "counters/".concat(this.counter.id, "/typings")), this.typingListener = Object(d.e)(this.typingRef, (function (e) {
                                var r = [];
                                e.exists() && e.val() ? (r = Object.keys(e.val()).filter((function (e) {
                                    return e !== t.user.id
                                })).filter((function (e) {
                                    return t.getMemberById(e)
                                })), t.typingUserNames = r.map((function (e) {
                                    return t.getMemberById(e).nickName
                                }))) : t.typingUserNames = []
                            }))
                        },
                        listenToCounterMembersAndMessages: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                var r;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.unsubscribeCounter();
                                        case 2:
                                            t.counterChannel = t.$supabase.channel("counter-".concat(t.counter.id)), t.counterChannel.on("presence", {
                                                event: "join"
                                            }, function () {
                                                var e = Object(c.a)(regeneratorRuntime.mark((function e(r) {
                                                    var n;
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (1 !== (n = r.newPresences).length || n[0].userId !== t.user.id) {
                                                                    e.next = 3;
                                                                    break
                                                                }
                                                                return e.abrupt("return");
                                                            case 3:
                                                                return e.next = 5, t.fetchMembersAndCheckGhost();
                                                            case 5:
                                                                setTimeout((function () {
                                                                    return t.scrollChatBoxToBottom()
                                                                }), 100);
                                                            case 6:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).on("presence", {
                                                event: "leave"
                                            }, (function (e) {
                                                e.leftPresences;
                                                setTimeout(Object(c.a)(regeneratorRuntime.mark((function e() {
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, t.fetchMembersAndCheckGhost();
                                                            case 2:
                                                                setTimeout((function () {
                                                                    return t.scrollChatBoxToBottom()
                                                                }), 100);
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                }))), 2e3)
                                            })).on("broadcast", {
                                                event: "banish"
                                            }, (function (e) {
                                                var r = e.payload.userId;
                                                if (r === t.user.id) return t.unsubscribeCounterAndLeave(), void location.reload();
                                                var n = t.getMemberById(r);
                                                n && (t.messages = t.messages.concat([{
                                                    message: "".concat(n.nickName, " ออกจากโต๊ะ 🤟"),
                                                    server: "leave"
                                                }])), t.removeUserFromMembers(r)
                                            })).subscribe(function () {
                                                var e = Object(c.a)(regeneratorRuntime.mark((function e(r, n) {
                                                    var o;
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (console.log(r), "SUBSCRIBED" !== r) {
                                                                    e.next = 5;
                                                                    break
                                                                }
                                                                return o = t.members.find((function (e) {
                                                                    return e.id === t.user.id
                                                                })), e.next = 5, t.counterChannel.track({
                                                                    userId: o.id,
                                                                    nickName: o.nickName,
                                                                    online_at: (new Date).toISOString()
                                                                });
                                                            case 5:
                                                                "CHANNEL_ERROR" === r && console.error("There was an error subscribing to channel: ".concat(n.message));
                                                            case 6:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t, r) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), t.messageRef = Object(d.h)(t.$firebaseDB, "counters/".concat(t.counter.id, "/messages")), r = Object(d.g)(t.messageRef, Object(d.f)("insertedAt"), Object(d.k)(Date.now()), Object(d.b)(1)), t.chatListener = Object(d.d)(r, (function (e) {
                                                var r = e.val();
                                                if (r) {
                                                    var o = e.key;
                                                    if (!t.messageKeys[o]) {
                                                        var c = t.members.find((function (t) {
                                                            return t.id === r.userId
                                                        }));
                                                        c && (t.memberChatting[c.id] = !0, setTimeout((function () {
                                                            t.memberChatting[c.id] = !1
                                                        }), 2e3)), r.userId === t.user.id || t.chatFocus || document.getElementById("noti").play(), t.messages = t.messages.concat([r]), t.messageKeys = T(T({}, t.messageKeys), {}, Object(n.a)({}, o, !0)), t.lastMessageSynced = r.insertedAt, setTimeout((function () {
                                                            return t.scrollChatBoxToBottom()
                                                        }), 100)
                                                    }
                                                }
                                            }));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        notifyUsersOnMembershipChanges: function (t, e) {
                            var r = this;
                            0 !== t.length && (this.membersDiff(t, e).forEach((function (t) {
                                r.messages = r.messages.concat([{
                                    message: "".concat(t.nickName, " ออกจากโต๊ะ 🤟"),
                                    server: "leave"
                                }])
                            })), this.membersDiff(e, t).forEach((function (t) {
                                r.messages = r.messages.concat([{
                                    message: "".concat(t.nickName, " เข้าร่วมโต๊ะ 👋"),
                                    server: "join"
                                }])
                            })), this.membersDiff(e, t).length > 0 && document.getElementById("noti").play())
                        },
                        fetchMembersAndCheckGhost: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                var r, data;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, t.$axios.get("/api/counters/".concat(t.counter.id, "/members"), {
                                                headers: t.headers
                                            });
                                        case 3:
                                            r = e.sent, data = r.data, t.notifyUsersOnMembershipChanges(t.members, data), t.members = data, t.members.find((function (e) {
                                                return e.id === t.user.id
                                            })) || (t.$notify({
                                                type: "info",
                                                text: "คุณถูกเตะออกจากห้องแล้ว กรุณาหาห้องใหม่ค่ะ"
                                            }), t.unsubscribeCounterAndLeave(), location.reload()), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), (!t.lastNotifiedOfDelay || Date.now() - t.lastNotifiedOfDelay > 6e4) && (t.$notify({
                                                type: "info",
                                                text: "การดึงข้อมูลอาจมีการล่าช้า ขออภัยด้วยค่ะ :("
                                            }), t.lastNotifiedOfDelay = Date.now());
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10]
                                ])
                            })))()
                        },
                        removeUserFromMembers: function (t) {
                            this.members = this.members.filter((function (e) {
                                return e.id !== t
                            }))
                        },
                        membersDiff: function (t, e) {
                            var r = t.map((function (t) {
                                    return t.id
                                })),
                                n = e.map((function (t) {
                                    return t.id
                                }));
                            return Object(l.difference)(r, n).map((function (e) {
                                return t.find((function (t) {
                                    return t.id === e
                                }))
                            }))
                        },
                        sync: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.allowSync = !1, t.lastGhostSynced = v.a.utc().toDate(), setTimeout((function () {
                                                t.allowSync = !0
                                            }), 1e4), e.next = 5, t.fetchMembersAndCheckGhost();
                                        case 5:
                                            return e.next = 7, t.syncMessages();
                                        case 7:
                                            t.listenToCounterMembersAndMessages();
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        handleError: function (t) {
                            if (429 !== t.response.status) switch (t.response.data.message) {
                                case "bar-closed":
                                    this.$notify({
                                        type: "info",
                                        text: "บาร์ปิดตอนตี่สี่ถึงตีสี่สิบห้านะทีทุกคืนนะคะ กลับมาใหม่นะ"
                                    }), this.$axios.post("/api/counters/leave", {}, {
                                        headers: this.headers
                                    }), this.unsubscribeCounterAndLeave(), location.reload();
                                    break;
                                case "unauthorized":
                                    this.$notify({
                                        type: "error",
                                        text: "เกิดข้อผิดพลาดขึ้น กรุณาหาห้องใหม่ค่ะ"
                                    }), this.$axios.post("/api/counters/leave", {}, {
                                        headers: this.headers
                                    }), this.unsubscribeCounterAndLeave(), location.reload();
                                    break;
                                case "too-many-messages":
                                    this.$notify({
                                        type: "error",
                                        text: "ส่งข้อความติดกันเร็วไปน้า รอนิดนึงค่อยส่งใหม่น้า"
                                    });
                                    break;
                                case "not-a-member":
                                    this.$notify({
                                        type: "info",
                                        text: "คุณถูกเตะออกจากห้องแล้ว กรุณาหาห้องใหม่ค่ะ"
                                    }), this.$axios.post("/api/counters/leave", {}, {
                                        headers: this.headers
                                    }), this.unsubscribeCounterAndLeave(), location.reload();
                                    break;
                                default:
                                    this.$notify({
                                        type: "error",
                                        text: "ระบบเกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้งนะคะ"
                                    })
                            } else this.$notify({
                                type: "error",
                                text: "ใช้งานเว็ปเร็วไปน้า รอนาทีนึงแล้วค่อยลองใหม่นะคะ"
                            })
                        },
                        syncMessages: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                var r, n, o;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, t.$axios.get("/api/counters/".concat(t.counter.id, "/messages?from=").concat(t.lastMessageSynced), {
                                                headers: t.headers
                                            });
                                        case 3:
                                            r = e.sent, n = r.data.messages, (o = n.filter((function (e) {
                                                return !t.messageKeys[e.id]
                                            }))).length > 0 && (t.lastMessageSynced = o[o.length - 1].insertedAt), t.messages = t.messages.concat(o), o.forEach((function (e) {
                                                t.messageKeys[e.id] = !0
                                            })), setTimeout((function () {
                                                return t.scrollChatBoxToBottom()
                                            }), 100), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), t.handleError(e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 12]
                                ])
                            })))()
                        },
                        getMemberById: function (t) {
                            return this.members.find((function (e) {
                                return e.id === t
                            }))
                        },
                        unsubscribeCounter: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$supabase.removeAllChannels();
                                        case 2:
                                            if (!t.messageRef) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 5, Object(d.c)(t.messageRef);
                                        case 5:
                                            if (!t.typingRef) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 8, Object(d.c)(t.typingRef);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        unsubscribeCounterAndLeave: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.unsubscribeCounter();
                                        case 2:
                                            t.setCounterEnv({
                                                counter: null,
                                                sponsors: []
                                            });
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        banish: function (t) {
                            var e = this;
                            return Object(c.a)(regeneratorRuntime.mark((function r() {
                                var n;
                                return regeneratorRuntime.wrap((function (r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, r.next = 3, e.$axios.post("/api/counters/".concat(t, "/banish"), {}, {
                                                headers: e.headers
                                            });
                                        case 3:
                                            n = e.members.find((function (e) {
                                                return e.id === t
                                            })), e.messages = e.messages.concat([{
                                                message: "".concat(n.nickName, " ออกจากโต๊ะ 🤟"),
                                                server: "leave"
                                            }]), e.counterChannel.send({
                                                type: "broadcast",
                                                event: "banish",
                                                payload: {
                                                    userId: t
                                                }
                                            }), e.removeUserFromMembers(t), r.next = 18;
                                            break;
                                        case 9:
                                            r.prev = 9, r.t0 = r.catch(0), r.t1 = r.t0.response.data.message, r.next = "ghost-awaken" === r.t1 ? 14 : 17;
                                            break;
                                        case 14:
                                            return e.$notify({
                                                type: "info",
                                                text: "ผีตนนี้ตื่นแล้วค่ะ! ไม่สามารถเตะออกได้นะคะ"
                                            }), e.fetchMembersAndCheckGhost(), r.abrupt("break", 18);
                                        case 17:
                                            e.$notify({
                                                type: "error",
                                                text: "ระบบเกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้งนะคะ"
                                            });
                                        case 18:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [0, 9]
                                ])
                            })))()
                        },
                        sendMessage: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, t.message && "" !== t.message) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.sendingChatMessage = !0, e.next = 6, t.$axios.post("/api/counters/".concat(t.counter.id, "/messages"), {
                                                message: t.message
                                            }, {
                                                headers: t.headers
                                            });
                                        case 6:
                                            t.message = "", t.sendingChatMessage = !1, setTimeout((function () {
                                                return document.getElementById("message-input").focus()
                                            }), 300), e.next = 15;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(0), t.handleError(e.t0), t.sendingChatMessage = !1;
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 11]
                                ])
                            })))()
                        },
                        bartenderAsk: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.allowBartenderAsk = !1, setTimeout((function () {
                                                t.allowBartenderAsk = !0
                                            }), 1e4), e.next = 5, t.$axios.post("/api/counters/".concat(t.counter.id, "/ask-bartender"), {}, {
                                                headers: t.headers
                                            });
                                        case 5:
                                            e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), t.handleError(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        scrollScreenToTop: function () {
                            document.documentElement.scrollTop = 0
                        },
                        scrollChatBoxToBottom: function () {
                            var t = document.getElementById("chat-messages");
                            t && (t.scrollTop = t.scrollHeight)
                        },
                        getMemberHat: function (t) {
                            return t.accessoryInventory.filter((function (t) {
                                return "hat" === t.accessory.type
                            })).length > 0 ? t.accessoryInventory.filter((function (t) {
                                return "hat" === t.accessory.type
                            })).pop().accessory : null
                        },
                        getMemberSkin: function (t) {
                            return t.accessoryInventory.filter((function (t) {
                                return "skin" === t.accessory.type
                            })).length > 0 ? t.accessoryInventory.filter((function (t) {
                                return "skin" === t.accessory.type
                            })).pop().accessory : null
                        },
                        getMemberNecklace: function (t) {
                            return t.accessoryInventory.filter((function (t) {
                                return "necklace" === t.accessory.type
                            })).length > 0 ? t.accessoryInventory.filter((function (t) {
                                return "necklace" === t.accessory.type
                            })).pop().accessory : null
                        },
                        getMemberShirt: function (t) {
                            return t.accessoryInventory.filter((function (t) {
                                return "shirt" === t.accessory.type
                            })).length > 0 ? t.accessoryInventory.filter((function (t) {
                                return "shirt" === t.accessory.type
                            })).pop().accessory : null
                        },
                        memberReportClicked: function (t) {
                            this.memberToReport = t, this.showReportConfirmationModal = !0
                        }
                    })
                },
                I = D,
                A = (r(594), Object(_.a)(I, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        attrs: {
                            id: "counter-page"
                        }
                    }, [t.showBoostShoutOutModal ? e("boost-shout-out-modal", {
                        on: {
                            close: function (e) {
                                t.showBoostShoutOutModal = !1
                            }
                        }
                    }) : t._e(), t._v(" "), t.showReportDetailModal ? e("report-detail-modal", {
                        on: {
                            close: function (e) {
                                t.showReportDetailModal = !1
                            }
                        }
                    }) : t._e(), t._v(" "), t.showReportConfirmationModal ? e("report-confirmation-modal", {
                        attrs: {
                            "member-to-report": t.memberToReport
                        },
                        on: {
                            close: function (e) {
                                t.showReportConfirmationModal = !1
                            }
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "max-w-7xl w-full counter-and-chat mt-7"
                    }, [e("audio", {
                        ref: "noti",
                        staticStyle: {
                            margin: "0 auto"
                        },
                        attrs: {
                            id: "noti",
                            autoplay: "",
                            src: "/sound/noti-min-2.mp3"
                        }
                    }), t._v(" "), t._m(0), t._v(" "), e("div", {
                        staticClass: "flex max-w-5xl flex-col lg:flex-row w-full counter-wrapper",
                        style: {
                            background: t.background,
                            backgroundSize: "contain"
                        }
                    }, [e("div", {
                        staticClass: "w-full flex flex-col justify-center px-0 sm:px-10 relative"
                    }, [t.featuredBar ? e("featured-bar", {
                        staticClass: "hidden lg:block absolute top-0 right-0 mt-8",
                        attrs: {
                            "display-name": t.featuredBar.displayName,
                            "campaign-name": t.featuredBar.name,
                            description: t.featuredBar.description,
                            "thumbnail-url": t.featuredBar.thumbnailURL,
                            "src-url": t.featuredBar.srcURL
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "hidden lg:block absolute top-0"
                    }, [e("div", {
                        staticClass: "flex items-center"
                    }, [e("p", {
                        staticClass: "text-paragraph-gray mr-1",
                        attrs: {
                            "data-testid": "table-code"
                        }
                    }, [t._v("\n              รหัสโต๊ะ : " + t._s(t.counter.id) + "\n            ")]), t._v(" "), e("img", {
                        staticClass: "h-4 cursor-pointer",
                        attrs: {
                            src: r(265)
                        },
                        on: {
                            click: t.copyCounterIdClicked
                        }
                    })])]), t._v(" "), t.counterBoosted ? e("div", {
                        staticClass: "relative p-2 mt-2 bg-gray-200 rounded-lg w-32 flex items-center justify-center gap-x-2 cursor-pointer",
                        on: {
                            mouseenter: function (e) {
                                t.showBoostTooltip = !0
                            },
                            mouseleave: function (e) {
                                t.showBoostTooltip = !1
                            }
                        }
                    }, [e("img", {
                        staticClass: "w-6 h-6",
                        attrs: {
                            src: "/boost/boost-logo.png"
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "font-semibold"
                    }, [t._v("\n            ห้องนี้มีบูสต์\n          ")]), t._v(" "), e("tooltip", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showBoostTooltip,
                            expression: "showBoostTooltip"
                        }],
                        staticClass: "w-56 text-sm -right-[232px]",
                        attrs: {
                            position: "right"
                        }
                    }, [t._v("\n            ห้องนี้ไม่มีดีเลย์ในการส่งข้อความ !\n          ")])], 1) : t._e(), t._v(" "), e("n-link", {
                        staticClass: "mt-3",
                        attrs: {
                            to: "/shop"
                        }
                    }, [e("img", {
                        staticClass: "w-24",
                        attrs: {
                            src: "/shop/go-to-shop.png"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "counter",
                        class: 5 === t.members.length ? "full-group" : ""
                    }, [e("img", {
                        staticClass: "counter-line",
                        attrs: {
                            src: "/counter-page/counter.png"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "absolute flex bottom-20 z-20"
                    }, [e("div", {
                        staticClass: "relative w-full flex justify-center"
                    }, [e("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: Object.keys(t.mouseHover).map((function (e) {
                                return t.mouseHover[e]
                            })).includes(!0),
                            expression: "Object.keys(mouseHover).map(k => mouseHover[k]).includes(true)"
                        }],
                        staticClass: "w-96",
                        attrs: {
                            src: "/counter-page/drink-bubble.png"
                        }
                    }), t._v(" "), t._l(t.members, (function (r, i) {
                        return e("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.mouseHover[r.id],
                                expression: "mouseHover[member.id]"
                            }],
                            key: i,
                            staticClass: "absolute h-full px-10 top-7 flex flex-col items-center"
                        }, [e("p", [e("span", {}, [t._v(t._s(r.nickName))]), t._v(" is drinking ...")]), t._v(" "), e("p", [t._v(t._s(t.drinkById(r.drinkId).name))]), t._v(" "), e("p", {
                            staticClass: "text-sm text-paragraph-gray mt-1"
                        }, [t._v("\n                  " + t._s(t.drinkById(r.drinkId).description) + "\n                ")])])
                    }))], 2)]), t._v(" "), e("div", {
                        staticClass: "members"
                    }, t._l(t.members, (function (r, i) {
                        return e("div", {
                            key: i,
                            staticClass: "relative w-24 self-end"
                        }, [e("div", [t.getMemberSkin(r) ? e("img", {
                            staticClass: "w-24",
                            attrs: {
                                src: t.getMemberSkin(r).imageURL
                            }
                        }) : e("img", {
                            staticClass: "w-24",
                            attrs: {
                                src: "/counter-page/member-".concat(i >= 5 ? 1 : i + 1, ".png")
                            }
                        })]), t._v(" "), e("img", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.isGhost(r.lastActive) && "public" === t.counter.privacy && r.id !== t.user.id,
                                expression: "isGhost(member.lastActive) && counter.privacy === 'public' && member.id !== user.id"
                            }],
                            staticClass: "w-12 absolute ghost z-20",
                            attrs: {
                                src: "/counter-page/ghost.png"
                            }
                        }), t._v(" "), e("img", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.isGhost(r.lastActive) && "public" === t.counter.privacy && r.id !== t.user.id,
                                expression: "isGhost(member.lastActive) && counter.privacy === 'public' && member.id !== user.id"
                            }],
                            staticClass: "w-18 absolute banish cursor-pointer",
                            attrs: {
                                src: "/counter-page/banish.png"
                            },
                            on: {
                                click: function (e) {
                                    return t.banish(r.id)
                                }
                            }
                        }), t._v(" "), e("img", {
                            staticClass: "w-12 absolute drink z-20",
                            attrs: {
                                src: t.drinkById(r.drinkId).imageURL
                            },
                            on: {
                                mouseenter: function (e) {
                                    t.mouseHover = Object(n.a)({}, r.id, !0)
                                },
                                mouseleave: function (e) {
                                    t.mouseHover = {}
                                }
                            }
                        }), t._v(" "), t.getMemberHat(r) ? e("img", {
                            staticClass: "hat",
                            attrs: {
                                src: t.getMemberHat(r).imageURL
                            }
                        }) : t._e(), t._v(" "), t.getMemberShirt(r) && !t.getMemberSkin(r) ? e("img", {
                            staticClass: "shirt",
                            attrs: {
                                src: t.getMemberShirt(r).imageURL
                            }
                        }) : t._e(), t._v(" "), t.getMemberNecklace(r) ? e("img", {
                            staticClass: "necklace",
                            attrs: {
                                src: t.getMemberNecklace(r).imageURL
                            }
                        }) : t._e(), t._v(" "), e("img", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.memberChatting[r.id],
                                expression: "memberChatting[member.id]"
                            }],
                            staticClass: "w-14 absolute message-cloud z-10",
                            attrs: {
                                src: "/counter-page/message-cloud.png"
                            }
                        }), t._v(" "), e("img", {
                            staticClass: "w-14 absolute left-3",
                            attrs: {
                                src: "/counter-page/counter-seat.png"
                            }
                        })])
                    })), 0)]), t._v(" "), t._m(1)], 1), t._v(" "), t.featuredBar ? e("featured-bar", {
                        staticClass: "block lg:hidden",
                        attrs: {
                            "display-name": t.featuredBar.displayName,
                            "campaign-name": t.featuredBar.name,
                            description: t.featuredBar.description,
                            "thumbnail-url": t.featuredBar.thumbnailURL,
                            "src-url": t.featuredBar.srcURL
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "block lg:hidden mb-4 mt-2 text-center"
                    }, [e("div", {
                        staticClass: "flex justify-center mb-2 items-center"
                    }, [e("p", {
                        staticClass: "text-paragraph-gray"
                    }, [t._v("\n            รหัสโต๊ะ : " + t._s(t.counter.id) + "\n          ")]), t._v(" "), e("img", {
                        staticClass: "h-4 cursor-pointer",
                        attrs: {
                            src: r(265)
                        },
                        on: {
                            click: t.copyCounterIdClicked
                        }
                    })]), t._v(" "), t._m(2)]), t._v(" "), e("div", {
                        staticClass: "mx-auto relative"
                    }, [e("div", {
                        staticClass: "flex justify-between items-center mx-6 mt-0"
                    }, [e("div", {
                        staticClass: "flex justify-center my-1",
                        attrs: {
                            "data-testid": "table-preset"
                        }
                    }, [t.counter.language ? e("dom-button", {
                        staticClass: "w-24 p-3"
                    }, [e("p", {
                        staticClass: "text-center text-sm"
                    }, [t._v("\n                " + t._s(t.languageForDisplay) + "\n              ")])]) : t._e(), t._v(" "), t.counter.ageRange ? e("dom-button", {
                        staticClass: "w-24 p-3"
                    }, [e("p", {
                        staticClass: "text-center text-sm"
                    }, [t._v("\n                " + t._s(t.ageRangeForDisplay) + "\n              ")])]) : t._e()], 1), t._v(" "), e("div", {
                        staticClass: "flex items-center"
                    }, [e("img", {
                        staticClass: "h-9 cursor-pointer",
                        attrs: {
                            src: "/report/report-flag.png",
                            "data-testid": "report-icon"
                        },
                        on: {
                            click: function (e) {
                                t.showReportDetailModal = !0
                            }
                        }
                    }), t._v(" "), e("button", {
                        class: t.allowBartenderAsk ? "opacity-100" : "opacity-50",
                        attrs: {
                            disabled: !t.allowBartenderAsk
                        },
                        on: {
                            click: t.bartenderAsk
                        }
                    }, [e("img", {
                        staticClass: "h-12 cursor-pointer mr-2",
                        attrs: {
                            src: "/counter-page/bartender-question.png",
                            "data-testid": "bartender-icon"
                        }
                    })])])]), t._v(" "), e("div", {
                        staticClass: "chat-box"
                    }, [e("div", {
                        staticClass: "chat-messages overflow-y-scroll",
                        attrs: {
                            id: "chat-messages"
                        }
                    }, t._l(t.messages, (function (r, i) {
                        return e("div", {
                            key: i
                        }, [r.server ? e("div", {
                            staticClass: "text-center my-1 px-2"
                        }, [e("p", {
                            staticClass: "text-sm border rounded-lg shadow-sm bg-gray-200"
                        }, [t._v("\n                  " + t._s(r.message) + "\n                ")])]) : e("div", ["bartender" === r.type ? e("p", {
                            staticClass: "underline text-yellow-600",
                            attrs: {
                                "data-testid": "bartender-chatname"
                            }
                        }, [t._v("\n                  Bartender\n                ")]) : 0 === i || "bartender" === t.messages[i - 1].type || r.userId !== t.messages[i - 1].userId ? e("div", [r.userId !== t.user.id ? e("div", {
                            staticClass: "flex gap-1 items-center"
                        }, [e("p", {
                            staticClass: "underline text-left",
                            class: r.boosted ? "text-secondary" : "text-paragraph-gray",
                            attrs: {
                                "data-testid": "nickname-others"
                            }
                        }, [t._v("\n                      " + t._s(r.nickName) + "\n                    ")]), t._v(" "), r.boosted ? e("img", {
                            staticClass: "h-5 w-5",
                            attrs: {
                                src: "/boost/boost-logo.png"
                            }
                        }) : t._e(), t._v(" "), t.isLoggedIn ? e("img", {
                            staticClass: "h-5 cursor-pointer",
                            attrs: {
                                src: "/report/report-flag.png"
                            },
                            on: {
                                click: function (e) {
                                    return t.memberReportClicked({
                                        userId: r.userId,
                                        nickName: r.nickName
                                    })
                                }
                            }
                        }) : t._e()]) : e("div", {
                            staticClass: "flex gap-1 items-center justify-end"
                        }, [r.boosted ? e("img", {
                            staticClass: "h-5 w-5",
                            attrs: {
                                src: "/boost/boost-logo.png"
                            }
                        }) : t._e(), t._v(" "), e("p", {
                            staticClass: "underline",
                            class: r.boosted ? "text-secondary" : "text-paragraph-gray",
                            attrs: {
                                "data-testid": "nickname-self"
                            }
                        }, [t._v("\n                      " + t._s(r.nickName) + "\n                    ")])])]) : t._e(), t._v(" "), e("div", {
                            staticClass: "flex my-1 w-full",
                            class: r.userId === t.user.id && "bartender" !== r.type ? "flex-row-reverse" : "justify-start"
                        }, [e("p", {
                            staticClass: "border rounded-md px-1 text-sm font-readable border-black break-words max-w-[240px]",
                            attrs: {
                                "data-testid": "chat-msg"
                            },
                            domProps: {
                                innerHTML: t._s(r.message)
                            }
                        }), t._v(" "), e("p", {
                            staticClass: "text-xs m-1 text-paragraph-gray"
                        }, [t._v("\n                    " + t._s(t.messageTime(r.insertedAt)) + "\n                  ")])])])])
                    })), 0), t._v(" "), e("div", {
                        staticClass: "h-4 mt-2"
                    }, [e("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.typingUserNames.length > 0,
                            expression: "typingUserNames.length > 0"
                        }],
                        staticClass: "text-sm italic"
                    }, [t._v("\n              " + t._s(t.typingUserNames.join(",")) + " is typing ...\n            ")])]), t._v(" "), e("div", {
                        staticClass: "flex mt-5 mr-2 items-center"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.message,
                            expression: "message"
                        }],
                        staticClass: "w-full bg-cream font-readable",
                        attrs: {
                            id: "message-input",
                            type: "text",
                            placeholder: "คุยเลย ...",
                            autocomplete: "off",
                            disabled: t.sendingChatMessage
                        },
                        domProps: {
                            value: t.message
                        },
                        on: {
                            keyup: function (e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.sendMessage.apply(null, arguments)
                            },
                            focus: function (e) {
                                t.chatFocus = !0
                            },
                            blur: function (e) {
                                t.chatFocus = !1
                            },
                            input: function (e) {
                                e.target.composing || (t.message = e.target.value)
                            }
                        }
                    }), t._v(" "), t.sendingChatMessage ? e("div", {
                        staticClass: "h-7 w-7 mr-2"
                    }, [e("moon-loader", {
                        attrs: {
                            size: "28px",
                            height: "24px",
                            color: "rgb(126, 1, 145)"
                        }
                    })], 1) : e("button", {
                        staticClass: "border-2 border-black w-16 rounded-md",
                        attrs: {
                            id: "message-btn"
                        },
                        on: {
                            click: t.sendMessage
                        }
                    }, [t._v("\n              ส่ง\n            ")])])]), t._v(" "), t._m(3)])], 1), t._v(" "), e("div", {
                        staticClass: "flex justify-center"
                    }, ["public" === t.counter.privacy ? e("button", {
                        class: t.allowSwitch ? "opacity-100" : "opacity-50",
                        attrs: {
                            disabled: !t.allowSwitch
                        },
                        on: {
                            click: function (e) {
                                t.showSwitchModal = !0
                            }
                        }
                    }, [e("img", {
                        staticClass: "w-28",
                        attrs: {
                            src: "https://ikuzbipnfkbymlctljcv.supabase.co/storage/v1/object/public/public-web-app/images/counter/switch-counter.png",
                            "data-testid": "change-table-btn"
                        }
                    })]) : t._e()]), t._v(" "), e("div", {
                        staticClass: "flex flex-col items-center mt-3"
                    }, [e("p", {
                        staticClass: "text-sm text-paragraph-gray mb-1"
                    }, [t._v("\n        หากระบบก่งก๊ง กดปุ่ม Sync เล้ย\n      ")]), t._v(" "), e("dom-button", {
                        staticClass: "p-3 w-32",
                        class: t.allowSync ? "opacity-100" : "opacity-50",
                        attrs: {
                            disabled: !t.allowSync
                        },
                        nativeOn: {
                            click: function (e) {
                                return t.sync.apply(null, arguments)
                            }
                        }
                    }, [e("p", {
                        staticClass: "font-semibold"
                    }, [t._v("\n          Sync\n        ")])])], 1), t._v(" "), t.showSwitchModal ? e("div", {
                        staticClass: "fixed top-12 left-0 w-screen flex h-full justify-center z-40 overflow-y-scroll"
                    }, [e("switch-counter-modal", {
                        on: {
                            close: function (e) {
                                t.showSwitchModal = !1
                            },
                            confirm: t.switchCounter
                        }
                    })], 1) : t._e()]), t._v(" "), t._m(4), t._v(" "), e("div", {
                        staticClass: "mt-6 lg:mt-0 mb-6"
                    }, [e("p", {
                        staticClass: "font-semibold text-2xl mb-2 text-center lg:text-left"
                    }, [t._v("\n      Sponsors\n    ")]), t._v(" "), e("div", {
                        staticClass: "flex flex-col lg:flex-row justify-evenly",
                        attrs: {
                            "data-testid": "sponsors-list"
                        }
                    }, [t._l(t.sponsors, (function (t) {
                        return e("sponsor", {
                            key: t.name,
                            attrs: {
                                sponsor: t
                            }
                        })
                    })), t._v(" "), t._l(t.blankSponsors, (function (t) {
                        return e("sponsor", {
                            key: t
                        })
                    }))], 2), t._v(" "), t._m(5)])], 1)
                }), o, !1, null, "ae0b9a4a", null));
            e.default = A.exports;
            installComponents(A, {
                ReportDetailModal: r(560).default,
                ReportConfirmationModal: r(561).default,
                FeaturedBar: r(557).default,
                DomButton: r(56).default,
                SwitchCounterModal: r(558).default,
                Sponsor: r(559).default
            })
        },
        579: function (t, e, r) {
            "use strict";
            r.r(e);
            var n = r(24),
                o = r(56),
                c = {
                    components: {
                        Modal: n.default,
                        DomButton: o.default
                    }
                },
                l = r(3),
                component = Object(l.a)(c, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("modal", {
                        attrs: {
                            "data-testid": "boost-shout-out-us-popup"
                        },
                        on: {
                            close: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [e("div", {
                        staticClass: "max-w-md mx-auto px-4 text-center text-2xl font-semibold"
                    }, [e("img", {
                        staticClass: "w-12 h-12 mx-auto mb-6",
                        attrs: {
                            src: "/boost/boost-logo.png"
                        }
                    }), t._v(" "), e("p", [t._v("ยินดีด้วย !")]), t._v(" "), e("p", [t._v("มียูสเซอร์บูสอยู่ในห้องนี้")]), t._v(" "), e("img", {
                        staticClass: "mx-auto my-8",
                        attrs: {
                            src: "/boost/boost-in-counter.png"
                        }
                    }), t._v(" "), e("p", [t._v("เค้ามีพลังลดการดีเลย์การส่งข้อความ ทำให้แชทกันได้เร็วขึ้น แถมเพื่อน ๆ ในห้องได้ผลพลอยได้ไปด้วย")]), t._v(" "), e("dom-button", {
                        staticClass: "mx-auto py-4 w-48 mt-8",
                        nativeOn: {
                            click: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [t._v("\n      โอเค\n    ")])], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                DomButton: r(56).default
            })
        },
        592: function (t, e, r) {
            "use strict";
            r(567)
        },
        593: function (t, e, r) {
            var n = r(32)((function (i) {
                return i[1]
            }));
            n.push([t.i, ".v-spinner .v-moon1{position:relative}.v-spinner .v-moon1,.v-spinner .v-moon2{animation:v-moonStretchDelay .6s linear 0s infinite;animation-fill-mode:forwards}.v-spinner .v-moon2{opacity:.8;position:absolute}.v-spinner .v-moon3{opacity:.1}@keyframes v-moonStretchDelay{to{transform:rotate(1turn)}}", ""]), n.locals = {}, t.exports = n
        },
        594: function (t, e, r) {
            "use strict";
            r(568)
        },
        595: function (t, e, r) {
            var n = r(32),
                o = r(170),
                c = r(550),
                l = n((function (i) {
                    return i[1]
                })),
                d = o(c);
            l.push([t.i, ".counter-and-chat .counter-wrapper[data-v-ae0b9a4a]{background-size:contain;background-position-y:25px!important}@media only screen and (max-width:1024px){.counter-and-chat .counter-wrapper[data-v-ae0b9a4a]{background-size:800px 350px!important}}.counter-and-chat .counter[data-v-ae0b9a4a]{position:relative;display:flex;align-items:flex-end;justify-content:center;overflow-x:scroll;padding-bottom:2rem;width:512px;height:380px}@media only screen and (max-width:600px){.counter-and-chat .counter[data-v-ae0b9a4a]{width:375px}}.counter-and-chat .counter .counter-line[data-v-ae0b9a4a]{position:absolute;bottom:22px}@media only screen and (max-width:600px){.counter-and-chat .counter.full-group[data-v-ae0b9a4a]{justify-content:flex-start}}.counter-and-chat .members[data-v-ae0b9a4a]{position:absolute;display:grid;grid-auto-flow:column;grid-template-rows:repeat(1, minmax(0, 1fr));justify-content:center;justify-items:center;padding-right:1rem;padding-left:1.25rem;width:512px;height:150px}.counter-and-chat .members .drink[data-v-ae0b9a4a]{right:-8px;bottom:6px}.counter-and-chat .members .hat[data-v-ae0b9a4a]{position:absolute;width:4rem;top:-15px;left:9px}.counter-and-chat .members .necklace[data-v-ae0b9a4a]{position:absolute;width:4rem;--tw-scale-x:-1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(-1) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));top:36px;left:-4px}.counter-and-chat .members .shirt[data-v-ae0b9a4a]{position:absolute;width:60px;top:38px;left:10px}.counter-and-chat .members .ghost[data-v-ae0b9a4a]{top:-75px;left:25px}.counter-and-chat .members .banish[data-v-ae0b9a4a]{top:-105px}.counter-and-chat .members .message-cloud[data-v-ae0b9a4a]{bottom:70px;right:-5px}.counter-and-chat .members .drink-bubble[data-v-ae0b9a4a]{bottom:70px}.counter-and-chat .counter-seats[data-v-ae0b9a4a]{position:absolute;display:flex;justify-content:space-between;padding-right:5px}.counter-and-chat .counter-seats img[data-v-ae0b9a4a]{margin-right:40px}.counter-and-chat .counter-seats img[data-v-ae0b9a4a]:last-of-type{margin-right:0}.counter-and-chat .chat-box[data-v-ae0b9a4a]{position:relative;margin-left:auto;margin-right:auto;padding-left:3rem;padding-right:2.5rem;padding-bottom:1.5rem;padding-top:1.75rem;width:358px;height:482px;background:url(" + d + ");background-size:cover}.counter-and-chat .chat-box .chat-messages[data-v-ae0b9a4a]{height:328px}", ""]), l.locals = {}, t.exports = l
        }
    }
]);