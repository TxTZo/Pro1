(window.webpackJsonp = window.webpackJsonp || []).push([
    [2, 8, 21, 22], {
        384: function (t, e, n) {
            var content = n(543);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(33).default)("06b87900", content, !0, {
                sourceMap: !1
            })
        },
        385: function (t, e, n) {
            var content = n(545);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(33).default)("c262030e", content, !0, {
                sourceMap: !1
            })
        },
        386: function (t, e, n) {
            var content = n(549);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(33).default)("a1a0c086", content, !0, {
                sourceMap: !1
            })
        },
        538: function (t, e, n) {
            var r = n(6),
                o = n(42),
                c = n(18),
                l = n(539),
                d = r("".replace),
                f = RegExp("^[" + l + "]+"),
                m = RegExp("(^|[^" + l + "])[" + l + "]+$"),
                h = function (t) {
                    return function (e) {
                        var n = c(o(e));
                        return 1 & t && (n = d(n, f, "")), 2 & t && (n = d(n, m, "$1")), n
                    }
                };
            t.exports = {
                start: h(1),
                end: h(2),
                trim: h(3)
            }
        },
        539: function (t, e) {
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        542: function (t, e, n) {
            "use strict";
            n(384)
        },
        543: function (t, e, n) {
            var r = n(32)((function (i) {
                return i[1]
            }));
            r.push([t.i, ".modal-body[data-v-7503f493]{max-height:calc(100vh - 50px);overflow-y:auto}", ""]), r.locals = {}, t.exports = r
        },
        544: function (t, e, n) {
            "use strict";
            n(385)
        },
        545: function (t, e, n) {
            var r = n(32)((function (i) {
                return i[1]
            }));
            r.push([t.i, ".perks-hat[data-v-c11d4588]{position:absolute;height:45px;top:-16px;left:calc(50% - 16px)}@media only screen and (max-width:1024px){.perks-hat[data-v-c11d4588]{height:42px;top:-18px}}", ""]), r.locals = {}, t.exports = r
        },
        546: function (t, e, n) {
            "use strict";
            var r = n(4),
                o = n(30),
                c = n(13),
                l = n(9),
                path = n(261),
                d = n(6),
                f = n(131),
                m = n(16),
                h = n(262),
                v = n(58),
                x = n(98),
                y = n(260),
                k = n(7),
                C = n(99).f,
                w = n(53).f,
                _ = n(34).f,
                j = n(547),
                I = n(538).trim,
                O = "Number",
                N = l[O],
                R = path[O],
                M = N.prototype,
                P = l.TypeError,
                L = d("".slice),
                $ = d("".charCodeAt),
                T = function (t) {
                    var e, n, r, o, c, l, d, code, f = y(t, "number");
                    if (x(f)) throw P("Cannot convert a Symbol value to a number");
                    if ("string" == typeof f && f.length > 2)
                        if (f = I(f), 43 === (e = $(f, 0)) || 45 === e) {
                            if (88 === (n = $(f, 2)) || 120 === n) return NaN
                        } else if (48 === e) {
                        switch ($(f, 1)) {
                            case 66:
                            case 98:
                                r = 2, o = 49;
                                break;
                            case 79:
                            case 111:
                                r = 8, o = 55;
                                break;
                            default:
                                return +f
                        }
                        for (l = (c = L(f, 2)).length, d = 0; d < l; d++)
                            if ((code = $(c, d)) < 48 || code > o) return NaN;
                        return parseInt(c, r)
                    }
                    return +f
                },
                E = f(O, !N(" 0o1") || !N("0b1") || N("+0x1")),
                U = function (t) {
                    var e, n = arguments.length < 1 ? 0 : N(function (t) {
                        var e = y(t, "number");
                        return "bigint" == typeof e ? e : T(e)
                    }(t));
                    return v(M, e = this) && k((function () {
                        j(e)
                    })) ? h(Object(n), this, U) : n
                };
            U.prototype = M, E && !o && (M.constructor = U), r({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: E
            }, {
                Number: U
            });
            var B = function (t, source) {
                for (var e, n = c ? C(source) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), r = 0; n.length > r; r++) m(source, e = n[r]) && !m(t, e) && _(t, e, w(source, e))
            };
            o && R && B(path[O], R), (E || o) && B(path[O], N)
        },
        547: function (t, e, n) {
            var r = n(6);
            t.exports = r(1..valueOf)
        },
        548: function (t, e, n) {
            "use strict";
            n(386)
        },
        549: function (t, e, n) {
            var r = n(32)((function (i) {
                return i[1]
            }));
            r.push([t.i, ".drink[data-v-65001904]{position:absolute;z-index:20;width:3rem;right:-10px;bottom:6px}.hat[data-v-65001904]{position:absolute;width:4rem;top:-15px;left:9px}.necklace[data-v-65001904]{position:absolute;width:4rem;--tw-scale-x:-1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(-1) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));top:36px;left:-4px}.shirt[data-v-65001904]{position:absolute;width:60px;top:38px;left:10px}", ""]), r.locals = {}, t.exports = r
        },
        566: function (t, e, n) {
            var content = n(591);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(33).default)("98d77452", content, !0, {
                sourceMap: !1
            })
        },
        575: function (t, e, n) {
            "use strict";
            n.r(e);
            n(57), n(22), n(65);
            var r = [function () {
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
                        staticClass: "flex justify-center"
                    }, [t("p", [this._v("หรือ")])])
                }, function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "hidden lg:flex lg:justify-end w-[356px] pr-4",
                        attrs: {
                            "data-testid": "rec-msg"
                        }
                    }, [e("div", {
                        staticClass: "text-center text-paragraph-gray"
                    }, [e("p", {
                        staticClass: "text-sm"
                    }, [t._v("\n              *มือถืออาจมีข้อจำกัดทาง Browser แนะนำให้เล่นในคอม\n            ")]), t._v(" "), e("p", {
                        staticClass: "text-sm flex justify-center"
                    }, [t._v("\n              แจ้งปัญหาหรือตามหาเพื่อนที่หายไปได้ที่ "), e("a", {
                        staticClass: "cursor-pointer px-1 inline-block",
                        attrs: {
                            target: "_blank",
                            href: "https://discord.gg/EJeRUY4WBn"
                        }
                    }, [e("img", {
                        staticClass: "h-5",
                        attrs: {
                            src: n(129)
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
                            src: n(129)
                        }
                    })])])])])
                }],
                o = (n(28), n(27), n(37), n(23), n(38), n(14)),
                c = n(5),
                l = (n(45), n(52), n(587), n(564), n(15), n(41), n(565)),
                d = n(29),
                f = n(174),
                m = n(96),
                h = n(576),
                v = n(577);

            function x(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function y(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? x(Object(source), !0).forEach((function (e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : x(Object(source)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var k = {
                    components: {
                        Avatar: n(578).default,
                        ConvoPrefModal: h.default,
                        ConvinceLoginModal: v.default
                    },
                    mixins: [m.a],
                    data: function () {
                        return {
                            message: "",
                            mouseHover: {},
                            counterId: "",
                            drinkIndex: 0,
                            nickName: this.user ? this.user.nickName : "",
                            showConvoPrefModal: !1,
                            showGangNameModal: !1,
                            showConvinceLoginModal: !1,
                            counterTypeClicked: null,
                            onlineUsersCount: null
                        }
                    },
                    computed: {
                        drinks: function () {
                            return this.$store.state.drinks
                        },
                        selectedDrinkImageURL: function () {
                            return this.drinks[this.drinkIndex].imageURL || ""
                        },
                        enterContext: function () {
                            return this.$store.state.enterContext
                        },
                        background: function () {
                            return 'url("https://ikuzbipnfkbymlctljcv.supabase.co/storage/v1/object/public/public-web-app/images/counter-background.gif") no-repeat'
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
                        trimNickName: function () {
                            return this.nickName.trim()
                        }
                    },
                    watch: {
                        storeNotificationVol: function (t) {
                            this.setNotifcationPlayer(t)
                        },
                        user: function (t) {
                            t && (this.nickName = t.nickName, this.isLoggedInButHasNotClaimedLoginReward(t) && this.claimReward())
                        }
                    },
                    mounted: function () {
                        var t = this;
                        return Object(c.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.verifyVersion();
                                    case 2:
                                        return e.next = 4, t.fetchOnlineUsers();
                                    case 4:
                                        t.user && t.$nuxt.$emit("fetch-user-profile"), t.isLoggedInButHasNotClaimedLoginReward(t.user) && t.claimReward();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    methods: y(y({}, Object(d.b)(["setUser", "setCounterEnv", "setPageLoading", "setDrinks", "setEnterContext"])), {}, {
                        isLoggedInButHasNotClaimedLoginReward: function (t) {
                            return t && t.authId && t.rewardInventory && void 0 === t.rewardInventory.find((function (t) {
                                return "first-time-discord-login" === t.rewardName
                            }))
                        },
                        editNameClicked: function () {
                            document.getElementById("nickName").focus()
                        },
                        unsubscribeCounter: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$supabase.removeAllChannels();
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
                        fetchOnlineUsers: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, t.$axios.get("/api/status/live");
                                        case 3:
                                            n = e.sent, r = n.data.onlineUsersCount, t.onlineUsersCount = r, e.next = 10;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        claimReward: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                var n, data;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, t.$axios.post("/api/rewards/first-time-discord-login", {}, {
                                                headers: t.headers
                                            });
                                        case 3:
                                            n = e.sent, data = n.data, t.setUser(data), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), console.error(e.t0.response.data);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        validateNickname: function () {
                            return this.trimNickName && "" !== this.trimNickName ? !(this.trimNickName.length > 20) || (this.$notify({
                                type: "info",
                                text: "ชื่อห้ามเกิน 20 ตัวอักษรค่ะ"
                            }), !1) : (this.$notify({
                                type: "info",
                                text: "ใส่ชื่อเล่นก่อนเข้าร้านหน่อยค้าบ"
                            }), !1)
                        },
                        createUser: function () {
                            var t = this;
                            return Object(c.a)(regeneratorRuntime.mark((function e() {
                                var n, data;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$axios.post("/api/user", {}, {
                                                headers: t.headers
                                            });
                                        case 2:
                                            return n = e.sent, data = n.data, t.setUser(data), e.abrupt("return", data);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        enterBar: function (t) {
                            var e = this;
                            return Object(c.a)(regeneratorRuntime.mark((function n() {
                                var r, o, c, data;
                                return regeneratorRuntime.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, e.showConvoPrefModal = !1, e.setPageLoading(!0), n.next = 5, e.verifyVersion();
                                        case 5:
                                            if (n.sent) {
                                                n.next = 8;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 8:
                                            if (e.user) {
                                                n.next = 14;
                                                break
                                            }
                                            return n.next = 11, e.createUser();
                                        case 11:
                                            r = n.sent, n.next = 15;
                                            break;
                                        case 14:
                                            r = e.user;
                                        case 15:
                                            return o = e.accessToken ? {
                                                Authorization: "Bearer ".concat(e.accessToken)
                                            } : {
                                                Basic: "".concat(r.id, ":").concat(r.secret)
                                            }, n.next = 18, e.$axios.post(t, e.enterContext, {
                                                headers: o
                                            });
                                        case 18:
                                            c = n.sent, data = c.data, e.setCounterEnv(data), n.next = 39;
                                            break;
                                        case 23:
                                            n.prev = 23, n.t0 = n.catch(0), n.t1 = n.t0.response.data.message, n.next = "bar-closed" === n.t1 ? 28 : "bar-full" === n.t1 ? 30 : "not-found" === n.t1 ? 32 : "counter-full" === n.t1 ? 35 : 38;
                                            break;
                                        case 28:
                                            return e.$notify({
                                                type: "info",
                                                text: "บาร์ปิดตอนตี่สี่ถึงตีสี่สิบห้านะทีทุกคืนนะคะ กลับมาใหม่นะ"
                                            }), n.abrupt("break", 39);
                                        case 30:
                                            return e.$nuxt.$emit("show-bar-full"), n.abrupt("break", 39);
                                        case 32:
                                            return e.counterToJoin = "", e.$notify({
                                                type: "error",
                                                text: "ไม่มีห้องนี้อยู่นะคะ กรุณาลองเลขห้องอื่นค่ะ"
                                            }), n.abrupt("break", 39);
                                        case 35:
                                            return e.counterToJoin = "", e.$notify({
                                                type: "error",
                                                text: "ห้องนี้เต็มอยู่ค่ะ ไว้ลองใหม่นะคะ"
                                            }), n.abrupt("break", 39);
                                        case 38:
                                            e.$notify({
                                                type: "error",
                                                text: "เกิดข้อผิดพลาดบางอย่าง ลองกดหาห้องใหม่อีกทีน้า"
                                            });
                                        case 39:
                                            e.setPageLoading(!1);
                                        case 40:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 23]
                                ])
                            })))()
                        },
                        meetNewFriendsClicked: function () {
                            this.validateNickname() && (this.isLoggedIn ? this.showConvoPrefModal = !0 : (this.counterTypeClicked = "chit-chat", this.showConvinceLoginModal = !0))
                        },
                        createPrivateClicked: function () {
                            this.validateNickname() && (this.isLoggedIn ? this.enterPrivateClicked() : (this.counterTypeClicked = "private", this.showConvinceLoginModal = !0))
                        },
                        confirmJoinAnonymously: function () {
                            "chit-chat" === this.counterTypeClicked && (this.showConvinceLoginModal = !1, this.showConvoPrefModal = !0), "private" === this.counterTypeClicked && (this.showConvinceLoginModal = !1, this.enterPrivateClicked()), "take-me-there" === this.counterTypeClicked && (this.showConvinceLoginModal = !1, this.takeMeThere())
                        },
                        takeMeThereClicked: function () {
                            this.validateNickname() && (this.isLoggedIn ? this.takeMeThere() : (this.counterTypeClicked = "take-me-there", this.showConvinceLoginModal = !0))
                        },
                        takeMeThere: function () {
                            var t = this;
                            this.setEnterContext({
                                nickName: this.trimNickName,
                                counterId: this.counterId,
                                drinkId: this.drinks[this.drinkIndex].id
                            }), "" !== this.counterId ? (Object(l.debounce)((function () {
                                return t.enterBar("/api/counters/".concat(t.counterId, "/join/"))
                            }), 1e3, {
                                leading: !0,
                                trailing: !0
                            })(), Object(f.b)(this.$analytics, "enter", y({
                                type: "take-me-there"
                            }, this.enterContext))) : this.$notify({
                                type: "info",
                                text: "ใส่เลขห้องก่อนเข้าร้านหน่อยค่ะ"
                            })
                        },
                        enterChitChatOneOneClicked: function (t) {
                            var e = this;
                            this.setEnterContext(y({
                                nickName: this.trimNickName,
                                counterId: this.counterId,
                                drinkId: this.drinks[this.drinkIndex].id
                            }, t)), Object(l.debounce)((function () {
                                return e.enterBar("/api/counters/chit-chat/enter/")
                            }), 1e3, {
                                leading: !0,
                                trailing: !0
                            })(), Object(f.b)(this.$analytics, "enter", y({
                                type: "chit-chat"
                            }, this.enterContext))
                        },
                        enterChitChatGroupClicked: function (t) {
                            var e = this;
                            this.setEnterContext(y({
                                nickName: this.trimNickName,
                                counterId: this.counterId,
                                drinkId: this.drinks[this.drinkIndex].id
                            }, t)), Object(l.debounce)((function () {
                                return e.enterBar("/api/counters/chit-chat-group/enter")
                            }), 1e3, {
                                leading: !0,
                                trailing: !0
                            })(), Object(f.b)(this.$analytics, "enter", y({
                                type: "chit-chat-group"
                            }, this.enterContext))
                        },
                        enterPrivateClicked: function () {
                            var t = this;
                            this.setEnterContext({
                                nickName: this.trimNickName,
                                counterId: this.counterId,
                                drinkId: this.drinks[this.drinkIndex].id
                            }), this.showGangNameModal = !1, Object(l.debounce)((function () {
                                return t.enterBar("/api/counters/private")
                            }), 1e3, {
                                leading: !0,
                                trailing: !0
                            })(), Object(f.b)(this.$analytics, "enter", y({
                                type: "private"
                            }, this.enterContext))
                        }
                    })
                },
                C = (n(590), n(3)),
                component = Object(C.a)(k, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t.showConvoPrefModal ? e("convo-pref-modal", {
                        on: {
                            close: function (e) {
                                t.showConvoPrefModal = !1
                            },
                            "one-on-one": t.enterChitChatOneOneClicked,
                            group: t.enterChitChatGroupClicked
                        }
                    }) : t._e(), t._v(" "), t.showConvinceLoginModal && !t.isLoggedIn ? e("convince-login-modal", {
                        on: {
                            close: function (e) {
                                t.showConvinceLoginModal = !1
                            },
                            "join-anonymously": t.confirmJoinAnonymously
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "max-w-7xl w-full counter-and-chat mt-7"
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "flex max-w-5xl flex-col lg:flex-row w-full mt-12 lg:mt-0 items-center counter-wrapper",
                        style: {
                            background: t.background,
                            backgroundSize: "contain"
                        }
                    }, [e("div", {
                        staticClass: "w-full flex flex-col justify-end px-0 sm:px-10 relative"
                    }, [e("div", {
                        staticClass: "max-w-[450px] mx-auto"
                    }, [e("div", {
                        staticClass: "flex w-full justify-center lg:justify-start items-center",
                        attrs: {
                            "data-testid": "name-setup"
                        }
                    }, [e("p", {
                        staticClass: "text-3xl mr-2"
                    }, [t._v("\n              สวัสดี...\n            ")]), t._v(" "), e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.nickName,
                            expression: "nickName"
                        }],
                        staticClass: "bg-transparent max-w-[200px] text-3xl",
                        attrs: {
                            id: "nickName",
                            placeholder: "บอกชื่อเราหน่อย",
                            type: "text",
                            autocomplete: "off",
                            maxlength: "20"
                        },
                        domProps: {
                            value: t.nickName
                        },
                        on: {
                            input: function (e) {
                                e.target.composing || (t.nickName = e.target.value)
                            }
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "w-[38px] h-[38px] cursor-pointer",
                        attrs: {
                            src: "/pencil.png"
                        },
                        on: {
                            click: t.editNameClicked
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "rounded-2xl shadow-lg py-4 px-6 bg-cream text-center mt-6",
                        attrs: {
                            "data-testid": "drink-selection"
                        }
                    }, [e("p", {
                        staticClass: "text-xl"
                    }, [t._v("\n              เลือกเครื่องดื่มที่บ่งบอกตัวคุณ\n            ")]), t._v(" "), e("div", {
                        staticClass: "grid grid-rows-1 grid-flow-col w-80 sm:w-96 lg:w-[400px] overflow-x-scroll"
                    }, t._l(t.drinks, (function (n, i) {
                        return e("div", {
                            key: n.name,
                            staticClass: "relative cursor-pointer w-12 self-center justify-self-center",
                            on: {
                                click: function (e) {
                                    t.drinkIndex = i
                                }
                            }
                        }, [e("img", {
                            attrs: {
                                src: n.imageURL
                            }
                        }), t._v(" "), t.drinkIndex === i ? e("img", {
                            staticClass: "absolute top-3 bottom-0 left-0",
                            attrs: {
                                src: "/circle.png"
                            }
                        }) : t._e()])
                    })), 0)]), t._v(" "), t.drinks.length > 0 ? e("div", {
                        staticClass: "px-3 py-3",
                        attrs: {
                            "data-testid": "drink-detail"
                        }
                    }, [e("p", {
                        staticClass: "text-xl underline"
                    }, [t._v("\n              " + t._s(t.drinks[t.drinkIndex].name) + "\n            ")]), t._v(" "), e("p", {
                        staticClass: "text-paragraph-gray mt-2"
                    }, [t._v("\n              " + t._s(t.drinks[t.drinkIndex].description) + "\n            ")])]) : t._e()]), t._v(" "), e("div", {
                        staticClass: "counter relative",
                        attrs: {
                            "data-testid": "avatar-detail"
                        }
                    }, [e("img", {
                        staticClass: "counter-line",
                        attrs: {
                            src: "/counter-page/counter.png"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "members"
                    }, [t.drinks.length > 0 ? e("avatar", {
                        attrs: {
                            user: t.user,
                            "drink-image-url": t.selectedDrinkImageURL
                        }
                    }) : t._e()], 1), t._v(" "), e("n-link", {
                        staticClass: "absolute bottom-5 right-4",
                        attrs: {
                            to: "/shop"
                        }
                    }, [e("img", {
                        staticClass: "w-28",
                        attrs: {
                            src: "/shop/go-to-shop.png"
                        }
                    })])], 1)]), t._v(" "), e("div", {
                        staticClass: "mx-auto relative"
                    }, [e("div", {
                        staticClass: "flex justify-center mt-0 lg:mt-8",
                        attrs: {
                            "data-testid": "msg-top"
                        }
                    }, [e("p", {
                        staticClass: "text-xl text-paragraph-gray"
                    }, [t._v("\n            " + t._s(t.onlineUsersCount ? "".concat(t.onlineUsersCount, " Users are Online") : "ยินดีต้อนรับสู่ร้านบาร์ DrinksOnMe") + "\n          ")])]), t._v(" "), e("div", {
                        staticClass: "chat-box",
                        attrs: {
                            "data-testid": "chat-setup"
                        }
                    }, [e("p", {
                        staticClass: "text-xl mt-3"
                    }, [t._v("\n            อยากทำอะไร\n          ")]), t._v(" "), e("img", {
                        staticClass: "my-2 mx-auto w-64",
                        attrs: {
                            src: "https://ikuzbipnfkbymlctljcv.supabase.co/storage/v1/object/public/public-web-app/images/lobby/chatbox-greet.png"
                        }
                    }), t._v(" "), e("dom-button", {
                        staticClass: "w-full py-6 px-4",
                        attrs: {
                            "data-testid": "random-join-room-btn"
                        },
                        nativeOn: {
                            click: function (e) {
                                return t.meetNewFriendsClicked.apply(null, arguments)
                            }
                        }
                    }, [e("p", {
                        staticClass: "font-semibold text-lg"
                    }, [t._v("\n              แรนด้อมไปคุยกับเพื่อนใหม่\n            ")])]), t._v(" "), e("dom-button", {
                        staticClass: "w-full py-6 px-3",
                        attrs: {
                            "data-testid": "create-new-room-btn"
                        },
                        nativeOn: {
                            click: function (e) {
                                return t.createPrivateClicked.apply(null, arguments)
                            }
                        }
                    }, [e("p", {
                        staticClass: "font-semibold text-lg"
                    }, [t._v("\n              สร้างห้องใหม่คุยกับเพื่อน\n            ")])]), t._v(" "), t._m(1), t._v(" "), e("div", {
                        staticClass: "flex mt-5 mr-2"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.counterId,
                            expression: "counterId"
                        }],
                        staticClass: "w-full bg-cream font-readable",
                        attrs: {
                            type: "text",
                            placeholder: "ใส่รหัสโต๊ะ ...",
                            autocomplete: "off",
                            "data-testid": "table-code-txt-field"
                        },
                        domProps: {
                            value: t.counterId
                        },
                        on: {
                            input: function (e) {
                                e.target.composing || (t.counterId = e.target.value)
                            }
                        }
                    }), t._v(" "), e("button", {
                        staticClass: "border-2 border-black w-16 rounded-md",
                        attrs: {
                            "data-testid": "join-room-btn"
                        },
                        on: {
                            click: t.takeMeThereClicked
                        }
                    }, [t._v("\n              จอย\n            ")])])], 1), t._v(" "), t._m(2)])])]), t._v(" "), t._m(3), t._v(" "), e("div", {
                        staticClass: "mt-6 lg:mt-2 mb-6"
                    })], 1)
                }), r, !1, null, "8609c000", null);
            e.default = component.exports;
            installComponents(component, {
                DomButton: n(56).default
            })
        },
        576: function (t, e, n) {
            "use strict";
            n.r(e);
            var r = n(24),
                o = {
                    components: {
                        DomButton: n(56).default,
                        Modal: r.default
                    },
                    data: function () {
                        return {
                            counterType: null,
                            ageRange: this.user ? this.user.ageRange : null,
                            language: this.user ? this.user.language : "TH"
                        }
                    },
                    computed: {
                        convoPref: function () {
                            return {
                                ageRange: this.ageRange,
                                language: this.language
                            }
                        },
                        user: function () {
                            return this.$store.state.user
                        }
                    },
                    watch: {
                        user: function (t) {
                            t && (this.ageRange = t.ageRange, this.language = t.language)
                        }
                    },
                    mounted: function () {
                        this.ageRange = this.user ? this.user.ageRange : null, this.language = this.user ? this.user.language : "TH"
                    }
                },
                c = (n(542), n(3)),
                component = Object(c.a)(o, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("modal", {
                        on: {
                            close: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [e("div", {
                        staticClass: "max-w-xl"
                    }, [e("div", {
                        staticClass: "w-full p-5 pt-8"
                    }, [e("p", {
                        staticClass: "text-3xl mb-4 font-semibold"
                    }, [t._v("\n        อยากนั่งโต๊ะแบบไหนดี\n      ")]), t._v(" "), e("div", {
                        staticClass: "grid grid-cols-2 mt-6"
                    }, [e("img", {
                        staticClass: "cursor-pointer",
                        class: "one-on-one" === t.counterType ? "scale-110" : "scale-100",
                        attrs: {
                            src: "/chitchat-modal/one-on-one.png",
                            "data-testid": "one-on-one-chat"
                        },
                        on: {
                            click: function (e) {
                                t.counterType = "one-on-one"
                            }
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "cursor-pointer",
                        class: "group" === t.counterType ? "scale-110" : "scale-100",
                        attrs: {
                            src: "/chitchat-modal/group.png",
                            "data-testid": "group-chat"
                        },
                        on: {
                            click: function (e) {
                                t.counterType = "group"
                            }
                        }
                    })])]), t._v(" "), e("img", {
                        attrs: {
                            src: "/zigzag-line.png"
                        }
                    }), t._v(" "), "group" !== t.counterType ? e("div", {
                        staticClass: "w-full p-5"
                    }, [e("p", {
                        staticClass: "text-3xl mb-4 font-semibold"
                    }, [t._v("\n        อยากคุยแบบไหน\n      ")]), t._v(" "), e("p", {
                        staticClass: "text-left text-lg mb-4 text-paragraph-gray"
                    }, [t._v("\n        ข้ามส่วนนี้ไป ถ้าอยากคุยแบบไหนก็ได้\n      ")]), t._v(" "), e("div", {
                        staticClass: "mb-2",
                        attrs: {
                            "data-testid": "age-range-select"
                        }
                    }, [e("p", {
                        staticClass: "text-left text-lg mb-2"
                    }, [t._v("\n          อยากเจอคนวัยใกล้ ๆ กัน ? บอกช่วงวัยของคุณมาได้เลย...\n        ")]), t._v(" "), e("div", {
                        staticClass: "grid grid-cols-3 sm:grid-cols-4 text-center"
                    }, t._l(t.$config.ageRanges, (function (n) {
                        return e("dom-button", {
                            key: n.value,
                            staticClass: "p-2",
                            class: t.ageRange === n.value ? "opacity-100" : "opacity-50",
                            nativeOn: {
                                click: function (e) {
                                    t.ageRange === n.value ? t.ageRange = null : t.ageRange = n.value
                                }
                            }
                        }, [e("p", {}, [t._v("\n              " + t._s(n.display) + "\n            ")])])
                    })), 1)]), t._v(" "), e("div", {
                        staticClass: "mb-2",
                        attrs: {
                            "data-testid": "lang-select"
                        }
                    }, [e("p", {
                        staticClass: "text-left text-lg mb-2"
                    }, [t._v("\n          คุยภาษาอะไรดี ?\n        ")]), t._v(" "), e("div", {
                        staticClass: "grid grid-cols-3 sm:grid-cols-4 text-center"
                    }, t._l(t.$config.languages, (function (n) {
                        return e("dom-button", {
                            key: n.value,
                            staticClass: "p-2",
                            class: t.language === n.value ? "opacity-100" : "opacity-50",
                            nativeOn: {
                                click: function (e) {
                                    t.language === n.value ? t.language = null : t.language = n.value
                                }
                            }
                        }, [e("p", {}, [t._v("\n              " + t._s(n.display) + "\n            ")])])
                    })), 1)])]) : e("div", {
                        staticClass: "w-full p-5"
                    }, [e("p", {
                        staticClass: "mt-2 text-left text-lg"
                    }, [t._v("\n        อายุและภาษาเลือกได้เฉพาะโต๊ะแบบสองคนเท่านั้นน้า\n      ")])]), t._v(" "), e("div", {
                        staticClass: "flex justify-end mb-4"
                    }, [e("dom-button", {
                        staticClass: "py-3 px-5",
                        attrs: {
                            "data-testid": "join-table-btn-modal",
                            disabled: !t.counterType
                        },
                        nativeOn: {
                            click: function (e) {
                                return t.$emit(t.counterType, t.convoPref)
                            }
                        }
                    }, [e("p", {
                        staticClass: "text-lg"
                    }, [t._v("\n          จอยโต๊ะ\n        ")])])], 1)])])
                }), [], !1, null, "7503f493", null);
            e.default = component.exports;
            installComponents(component, {
                DomButton: n(56).default
            })
        },
        577: function (t, e, n) {
            "use strict";
            n.r(e);
            n(28), n(22), n(27), n(15), n(37), n(23), n(38);
            var r = n(14),
                o = n(29),
                c = n(174);

            function l(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function d(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? l(Object(source), !0).forEach((function (e) {
                        Object(r.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var f = {
                    components: {
                        Modal: n(24).default
                    },
                    methods: d(d({}, Object(o.b)(["setPageLoading", "setShowLoginModal"])), {}, {
                        loginClicked: function () {
                            this.setShowLoginModal(!0), this.$emit("close"), Object(c.b)(this.$analytics, "login_clicked", {
                                from: "convince-login-modal"
                            })
                        }
                    })
                },
                m = (n(544), n(3)),
                component = Object(m.a)(f, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("modal", {
                        on: {
                            close: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [e("div", {
                        staticClass: "max-w-xl text-center",
                        attrs: {
                            "data-testid": "convince-login-modal"
                        }
                    }, [e("div", {
                        staticClass: "max-w-sm mx-auto"
                    }, [e("p", {
                        staticClass: "my-4 text-3xl"
                    }, [t._v("\n        ล็อกอินแล้วดีขึ้นเยอะ !\n      ")]), t._v(" "), e("div", {
                        staticClass: "mt-3 lg:mt-0 max-w-md text-left mx-auto"
                    }, [e("div", {
                        staticClass: "flex items-center py-1"
                    }, [e("img", {
                        staticClass: "h-7 mr-2",
                        attrs: {
                            draggable: "false",
                            src: "/landing/tick.png"
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "text-lg"
                    }, [t._v("\n            ได้หมวกที่เปลี่ยนไปตามเทศกาล\n          ")])]), t._v(" "), e("div", {
                        staticClass: "flex items-center py-1"
                    }, [e("img", {
                        staticClass: "h-7 mr-2",
                        attrs: {
                            draggable: "false",
                            src: "/landing/tick.png"
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "text-lg"
                    }, [t._v("\n            ไม่หลุดออกจากห้อง เวลาเผลอรีเฟรช\n          ")])])]), t._v(" "), e("div", {
                        staticClass: "relative my-5"
                    }, [e("img", {
                        staticClass: "perks-hat",
                        attrs: {
                            draggable: "false",
                            src: "https://ikuzbipnfkbymlctljcv.supabase.co/storage/v1/object/public/accessories/hats/discord-1.png"
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "max-w-md mx-auto w-full",
                        attrs: {
                            draggable: "false",
                            src: "/landing/discord-perks.png",
                            alt: "discord-perks"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "my-6"
                    }, [e("button", {
                        staticClass: "mx-auto w-44",
                        attrs: {
                            "data-testid": "login-btn"
                        }
                    }, [e("img", {
                        attrs: {
                            draggable: "false",
                            src: "/nav/log-in.png"
                        },
                        on: {
                            click: t.loginClicked
                        }
                    })])])]), t._v(" "), e("div", {
                        staticClass: "text-paragraph-gray"
                    }, [e("p", [t._v("ยังไม่สะดวกล็อกอิน")]), t._v(" "), e("p", {
                        staticClass: "underline cursor-pointer",
                        attrs: {
                            "data-testid": "non-login-join"
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("join-anonymously")
                            }
                        }
                    }, [t._v("\n        เล่นแบบไม่ระบุตัวตน\n      ")])])])])
                }), [], !1, null, "c11d4588", null);
            e.default = component.exports
        },
        578: function (t, e, n) {
            "use strict";
            n.r(e);
            n(546), n(27), n(15);
            var r = {
                    props: {
                        user: {
                            type: Object,
                            required: !1,
                            default: null
                        },
                        index: {
                            type: Number,
                            default: 1
                        },
                        drinkImageUrl: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        loggedIn: function () {
                            return this.user && this.user.authId
                        },
                        hat: function () {
                            return this.loggedIn && this.user.accessoryInventory.filter((function (t) {
                                return "hat" === t.accessory.type
                            })).length > 0 ? this.user.accessoryInventory.filter((function (t) {
                                return "hat" === t.accessory.type
                            })).pop().accessory : null
                        },
                        skin: function () {
                            return this.loggedIn && this.user.accessoryInventory.filter((function (t) {
                                return "skin" === t.accessory.type
                            })).length > 0 ? this.user.accessoryInventory.filter((function (t) {
                                return "skin" === t.accessory.type
                            })).pop().accessory : null
                        },
                        necklace: function () {
                            return this.loggedIn && this.user.accessoryInventory.filter((function (t) {
                                return "necklace" === t.accessory.type
                            })).length > 0 ? this.user.accessoryInventory.filter((function (t) {
                                return "necklace" === t.accessory.type
                            })).pop().accessory : null
                        },
                        shirt: function () {
                            return this.loggedIn && this.user.accessoryInventory.filter((function (t) {
                                return "shirt" === t.accessory.type
                            })).length > 0 ? this.user.accessoryInventory.filter((function (t) {
                                return "shirt" === t.accessory.type
                            })).pop().accessory : null
                        }
                    }
                },
                o = (n(548), n(3)),
                component = Object(o.a)(r, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "relative w-24 self-end"
                    }, [e("div", [t.skin ? e("img", {
                        staticClass: "w-24",
                        attrs: {
                            src: t.skin.imageURL
                        }
                    }) : e("img", {
                        staticClass: "w-24",
                        attrs: {
                            src: "/counter-page/member-".concat(t.index, ".png")
                        }
                    })]), t._v(" "), e("img", {
                        staticClass: "drink",
                        attrs: {
                            src: t.drinkImageUrl
                        }
                    }), t._v(" "), t.hat ? e("img", {
                        staticClass: "hat",
                        attrs: {
                            src: t.hat.imageURL
                        }
                    }) : t._e(), t._v(" "), t.shirt && !t.skin ? e("img", {
                        staticClass: "shirt",
                        attrs: {
                            src: t.shirt.imageURL
                        }
                    }) : t._e(), t._v(" "), t.necklace ? e("img", {
                        staticClass: "necklace",
                        attrs: {
                            src: t.necklace.imageURL
                        }
                    }) : t._e(), t._v(" "), e("img", {
                        staticClass: "w-14 absolute left-3",
                        attrs: {
                            src: "/counter-page/counter-seat.png"
                        }
                    })])
                }), [], !1, null, "65001904", null);
            e.default = component.exports
        },
        587: function (t, e, n) {
            "use strict";
            var r = n(4),
                o = n(538).trim;
            r({
                target: "String",
                proto: !0,
                forced: n(588)("trim")
            }, {
                trim: function () {
                    return o(this)
                }
            })
        },
        588: function (t, e, n) {
            var r = n(100).PROPER,
                o = n(7),
                c = n(539);
            t.exports = function (t) {
                return o((function () {
                    return !!c[t]() || "​᠎" !== "​᠎" [t]() || r && c[t].name !== t
                }))
            }
        },
        590: function (t, e, n) {
            "use strict";
            n(566)
        },
        591: function (t, e, n) {
            var r = n(32),
                o = n(170),
                c = n(550),
                l = r((function (i) {
                    return i[1]
                })),
                d = o(c);
            l.push([t.i, ".counter-and-chat .counter-wrapper[data-v-8609c000]{background-size:contain;background-position-y:15px!important}@media only screen and (max-width:1024px){.counter-and-chat .counter-wrapper[data-v-8609c000]{background-size:800px 350px!important;background-position-y:150px!important}}.counter-and-chat .counter[data-v-8609c000]{position:relative;margin-left:auto;margin-right:auto;display:flex;align-items:flex-end;justify-content:center;overflow-x:scroll;height:8rem;width:512px}@media only screen and (max-width:600px){.counter-and-chat .counter[data-v-8609c000]{width:375px}}.counter-and-chat .counter .counter-line[data-v-8609c000]{position:absolute;bottom:7px}@media only screen and (max-width:600px){.counter-and-chat .counter.full-group[data-v-8609c000]{justify-content:flex-start}}.counter-and-chat .members[data-v-8609c000]{position:absolute;display:grid;grid-auto-flow:column;grid-template-rows:repeat(1, minmax(0, 1fr));justify-content:center;justify-items:center;padding-right:1rem;padding-left:1.25rem;padding-bottom:1rem;width:512px;height:150px}.counter-and-chat .members .ghost[data-v-8609c000]{top:-75px;left:25px}.counter-and-chat .members .banish[data-v-8609c000]{top:-105px}.counter-and-chat .members .message-cloud[data-v-8609c000]{bottom:70px;right:-5px}.counter-and-chat .members .drink-bubble[data-v-8609c000]{bottom:70px}.counter-and-chat .counter-seats[data-v-8609c000]{position:absolute;display:flex;justify-content:space-between;padding-right:5px}.counter-and-chat .counter-seats img[data-v-8609c000]{margin-right:40px}.counter-and-chat .counter-seats img[data-v-8609c000]:last-of-type{margin-right:0}.counter-and-chat .chat-box[data-v-8609c000]{position:relative;margin-left:auto;margin-right:auto;padding-left:3rem;padding-right:2.5rem;padding-bottom:1.5rem;padding-top:1.75rem;width:358px;height:482px;background:url(" + d + ");background-size:cover}.counter-and-chat .chat-box .chat-messages[data-v-8609c000]{height:328px}", ""]), l.locals = {}, t.exports = l
        }
    }
]);