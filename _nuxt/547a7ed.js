/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [40], {
        0: function (e, t, n) {
            "use strict";
            (function (e, r) {
                n.d(t, "a", (function () {
                    return k
                })), n.d(t, "b", (function () {
                    return L
                })), n.d(t, "c", (function () {
                    return $
                })), n.d(t, "d", (function () {
                    return Q
                })), n.d(t, "e", (function () {
                    return D
                })), n.d(t, "f", (function () {
                    return c
                })), n.d(t, "g", (function () {
                    return l
                })), n.d(t, "h", (function () {
                    return d
                })), n.d(t, "i", (function () {
                    return m
                })), n.d(t, "j", (function () {
                    return y
                })), n.d(t, "k", (function () {
                    return se
                })), n.d(t, "l", (function () {
                    return W
                })), n.d(t, "m", (function () {
                    return S
                })), n.d(t, "n", (function () {
                    return v
                })), n.d(t, "o", (function () {
                    return K
                })), n.d(t, "p", (function () {
                    return X
                })), n.d(t, "q", (function () {
                    return E
                })), n.d(t, "r", (function () {
                    return T
                })), n.d(t, "s", (function () {
                    return oe
                })), n.d(t, "t", (function () {
                    return H
                })), n.d(t, "u", (function () {
                    return P
                })), n.d(t, "v", (function () {
                    return V
                })), n.d(t, "w", (function () {
                    return A
                })), n.d(t, "x", (function () {
                    return O
                })), n.d(t, "y", (function () {
                    return R
                })), n.d(t, "z", (function () {
                    return j
                })), n.d(t, "A", (function () {
                    return z
                })), n.d(t, "B", (function () {
                    return U
                })), n.d(t, "C", (function () {
                    return map
                })), n.d(t, "D", (function () {
                    return J
                })), n.d(t, "E", (function () {
                    return Y
                })), n.d(t, "F", (function () {
                    return ee
                })), n.d(t, "G", (function () {
                    return Z
                })), n.d(t, "H", (function () {
                    return F
                })), n.d(t, "I", (function () {
                    return N
                }));
                const o = {
                        NODE_CLIENT: !1,
                        NODE_ADMIN: !1,
                        SDK_VERSION: "${JSCORE_VERSION}"
                    },
                    c = function (e, t) {
                        if (!e) throw l(t)
                    },
                    l = function (e) {
                        return new Error("Firebase Database (" + o.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
                    },
                    h = function (e) {
                        const t = [];
                        let p = 0;
                        for (let i = 0; i < e.length; i++) {
                            let n = e.charCodeAt(i);
                            n < 128 ? t[p++] = n : n < 2048 ? (t[p++] = n >> 6 | 192, t[p++] = 63 & n | 128) : 55296 == (64512 & n) && i + 1 < e.length && 56320 == (64512 & e.charCodeAt(i + 1)) ? (n = 65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++i)), t[p++] = n >> 18 | 240, t[p++] = n >> 12 & 63 | 128, t[p++] = n >> 6 & 63 | 128, t[p++] = 63 & n | 128) : (t[p++] = n >> 12 | 224, t[p++] = n >> 6 & 63 | 128, t[p++] = 63 & n | 128)
                        }
                        return t
                    },
                    d = {
                        byteToCharMap_: null,
                        charToByteMap_: null,
                        byteToCharMapWebSafe_: null,
                        charToByteMapWebSafe_: null,
                        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        get ENCODED_VALS() {
                            return this.ENCODED_VALS_BASE + "+/="
                        },
                        get ENCODED_VALS_WEBSAFE() {
                            return this.ENCODED_VALS_BASE + "-_."
                        },
                        HAS_NATIVE_SUPPORT: "function" == typeof atob,
                        encodeByteArray(input, e) {
                            if (!Array.isArray(input)) throw Error("encodeByteArray takes an array as a parameter");
                            this.init_();
                            const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                                output = [];
                            for (let i = 0; i < input.length; i += 3) {
                                const e = input[i],
                                    n = i + 1 < input.length,
                                    r = n ? input[i + 1] : 0,
                                    o = i + 2 < input.length,
                                    c = o ? input[i + 2] : 0,
                                    l = e >> 2,
                                    h = (3 & e) << 4 | r >> 4;
                                let d = (15 & r) << 2 | c >> 6,
                                    f = 63 & c;
                                o || (f = 64, n || (d = 64)), output.push(t[l], t[h], t[d], t[f])
                            }
                            return output.join("")
                        },
                        encodeString(input, e) {
                            return this.HAS_NATIVE_SUPPORT && !e ? btoa(input) : this.encodeByteArray(h(input), e)
                        },
                        decodeString(input, e) {
                            return this.HAS_NATIVE_SUPPORT && !e ? atob(input) : function (e) {
                                const t = [];
                                let n = 0,
                                    r = 0;
                                for (; n < e.length;) {
                                    const o = e[n++];
                                    if (o < 128) t[r++] = String.fromCharCode(o);
                                    else if (o > 191 && o < 224) {
                                        const c = e[n++];
                                        t[r++] = String.fromCharCode((31 & o) << 6 | 63 & c)
                                    } else if (o > 239 && o < 365) {
                                        const u = ((7 & o) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                                        t[r++] = String.fromCharCode(55296 + (u >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & u))
                                    } else {
                                        const c = e[n++],
                                            l = e[n++];
                                        t[r++] = String.fromCharCode((15 & o) << 12 | (63 & c) << 6 | 63 & l)
                                    }
                                }
                                return t.join("")
                            }(this.decodeStringToByteArray(input, e))
                        },
                        decodeStringToByteArray(input, e) {
                            this.init_();
                            const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                                output = [];
                            for (let i = 0; i < input.length;) {
                                const e = t[input.charAt(i++)],
                                    n = i < input.length ? t[input.charAt(i)] : 0;
                                ++i;
                                const r = i < input.length ? t[input.charAt(i)] : 64;
                                ++i;
                                const o = i < input.length ? t[input.charAt(i)] : 64;
                                if (++i, null == e || null == n || null == r || null == o) throw new f;
                                const c = e << 2 | n >> 4;
                                if (output.push(c), 64 !== r) {
                                    const e = n << 4 & 240 | r >> 2;
                                    if (output.push(e), 64 !== o) {
                                        const e = r << 6 & 192 | o;
                                        output.push(e)
                                    }
                                }
                            }
                            return output
                        },
                        init_() {
                            if (!this.byteToCharMap_) {
                                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                                for (let i = 0; i < this.ENCODED_VALS.length; i++) this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i), this.charToByteMap_[this.byteToCharMap_[i]] = i, this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i, i >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i)
                            }
                        }
                    };
                class f extends Error {
                    constructor() {
                        super(...arguments), this.name = "DecodeBase64StringError"
                    }
                }
                const m = function (e) {
                        const t = h(e);
                        return d.encodeByteArray(t, !0)
                    },
                    y = function (e) {
                        return m(e).replace(/\./g, "")
                    },
                    _ = function (e) {
                        try {
                            return d.decodeString(e, !0)
                        } catch (e) {
                            console.error("base64Decode failed: ", e)
                        }
                        return null
                    };

                function v(e) {
                    return w(void 0, e)
                }

                function w(e, source) {
                    if (!(source instanceof Object)) return source;
                    switch (source.constructor) {
                        case Date:
                            return new Date(source.getTime());
                        case Object:
                            void 0 === e && (e = {});
                            break;
                        case Array:
                            e = [];
                            break;
                        default:
                            return source
                    }
                    for (const t in source) source.hasOwnProperty(t) && "__proto__" !== t && (e[t] = w(e[t], source[t]));
                    return e
                }
                const C = () => function () {
                        if ("undefined" != typeof self) return self;
                        if ("undefined" != typeof window) return window;
                        if (void 0 !== e) return e;
                        throw new Error("Unable to locate global object.")
                    }().__FIREBASE_DEFAULTS__,
                    x = () => {
                        try {
                            return C() || (() => {
                                if (void 0 === r || void 0 === r.env) return;
                                const e = r.env.__FIREBASE_DEFAULTS__;
                                return e ? JSON.parse(e) : void 0
                            })() || (() => {
                                if ("undefined" == typeof document) return;
                                let e;
                                try {
                                    e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                                } catch (e) {
                                    return
                                }
                                const t = e && _(e[1]);
                                return t && JSON.parse(t)
                            })()
                        } catch (e) {
                            return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)
                        }
                    },
                    T = e => {
                        const t = (e => {
                            var t, n;
                            return null === (n = null === (t = x()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === n ? void 0 : n[e]
                        })(e);
                        if (!t) return;
                        const n = t.lastIndexOf(":");
                        if (n <= 0 || n + 1 === t.length) throw new Error(`Invalid host ${t} with no separate hostname and port!`);
                        const r = parseInt(t.substring(n + 1), 10);
                        return "[" === t[0] ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]
                    },
                    E = () => {
                        var e;
                        return null === (e = x()) || void 0 === e ? void 0 : e.config
                    };
                class k {
                    constructor() {
                        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((e, t) => {
                            this.resolve = e, this.reject = t
                        }))
                    }
                    wrapCallback(e) {
                        return (t, n) => {
                            t ? this.reject(t) : this.resolve(n), "function" == typeof e && (this.promise.catch((() => {})), 1 === e.length ? e(t) : e(t, n))
                        }
                    }
                }

                function S(e, t) {
                    if (e.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                    const n = t || "demo-project",
                        r = e.iat || 0,
                        sub = e.sub || e.user_id;
                    if (!sub) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
                    const o = Object.assign({
                        iss: `https://securetoken.google.com/${n}`,
                        aud: n,
                        iat: r,
                        exp: r + 3600,
                        auth_time: r,
                        sub: sub,
                        user_id: sub,
                        firebase: {
                            sign_in_provider: "custom",
                            identities: {}
                        }
                    }, e);
                    return [y(JSON.stringify({
                        alg: "none",
                        type: "JWT"
                    })), y(JSON.stringify(o)), ""].join(".")
                }

                function I() {
                    return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
                }

                function O() {
                    return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())
                }

                function P() {
                    const e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
                    return "object" == typeof e && void 0 !== e.id
                }

                function j() {
                    return "object" == typeof navigator && "ReactNative" === navigator.product
                }

                function R() {
                    return !0 === o.NODE_CLIENT || !0 === o.NODE_ADMIN
                }

                function A() {
                    try {
                        return "object" == typeof indexedDB
                    } catch (e) {
                        return !1
                    }
                }

                function N() {
                    return new Promise(((e, t) => {
                        try {
                            let n = !0;
                            const r = "validate-browser-context-for-indexeddb-analytics-module",
                                o = self.indexedDB.open(r);
                            o.onsuccess = () => {
                                o.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                            }, o.onupgradeneeded = () => {
                                n = !1
                            }, o.onerror = () => {
                                var e;
                                t((null === (e = o.error) || void 0 === e ? void 0 : e.message) || "")
                            }
                        } catch (e) {
                            t(e)
                        }
                    }))
                }

                function D() {
                    return !("undefined" == typeof navigator || !navigator.cookieEnabled)
                }
                class $ extends Error {
                    constructor(code, e, t) {
                        super(e), this.code = code, this.customData = t, this.name = "FirebaseError", Object.setPrototypeOf(this, $.prototype), Error.captureStackTrace && Error.captureStackTrace(this, L.prototype.create)
                    }
                }
                class L {
                    constructor(e, t, n) {
                        this.service = e, this.serviceName = t, this.errors = n
                    }
                    create(code, ...data) {
                        const e = data[0] || {},
                            t = `${this.service}/${code}`,
                            template = this.errors[code],
                            n = template ? function (template, data) {
                                return template.replace(M, ((e, t) => {
                                    const n = data[t];
                                    return null != n ? String(n) : `<${t}?>`
                                }))
                            }(template, e) : "Error",
                            r = `${this.serviceName}: ${n} (${t}).`;
                        return new $(t, r, e)
                    }
                }
                const M = /\{\$([^}]+)}/g;

                function U(e) {
                    return JSON.parse(e)
                }

                function F(data) {
                    return JSON.stringify(data)
                }
                const B = function (e) {
                        let header = {},
                            t = {},
                            data = {},
                            n = "";
                        try {
                            const r = e.split(".");
                            header = U(_(r[0]) || ""), t = U(_(r[1]) || ""), n = r[2], data = t.d || {}, delete t.d
                        } catch (e) {}
                        return {
                            header: header,
                            claims: t,
                            data: data,
                            signature: n
                        }
                    },
                    z = function (e) {
                        const t = B(e).claims;
                        return !!t && "object" == typeof t && t.hasOwnProperty("iat")
                    },
                    H = function (e) {
                        const t = B(e).claims;
                        return "object" == typeof t && !0 === t.admin
                    };

                function W(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function Y(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
                }

                function V(e) {
                    for (const t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                    return !0
                }

                function map(e, t, n) {
                    const r = {};
                    for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = t.call(n, e[o], o, e));
                    return r
                }

                function K(a, b) {
                    if (a === b) return !0;
                    const e = Object.keys(a),
                        t = Object.keys(b);
                    for (const n of e) {
                        if (!t.includes(n)) return !1;
                        const e = a[n],
                            r = b[n];
                        if (G(e) && G(r)) {
                            if (!K(e, r)) return !1
                        } else if (e !== r) return !1
                    }
                    for (const n of t)
                        if (!e.includes(n)) return !1;
                    return !0
                }

                function G(e) {
                    return null !== e && "object" == typeof e
                }

                function J(e) {
                    const t = [];
                    for (const [n, r] of Object.entries(e)) Array.isArray(r) ? r.forEach((e => {
                        t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
                    })) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
                    return t.length ? "&" + t.join("&") : ""
                }
                class Q {
                    constructor() {
                        this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
                        for (let i = 1; i < this.blockSize; ++i) this.pad_[i] = 0;
                        this.reset()
                    }
                    reset() {
                        this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
                    }
                    compress_(e, t) {
                        t || (t = 0);
                        const n = this.W_;
                        if ("string" == typeof e)
                            for (let i = 0; i < 16; i++) n[i] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
                        else
                            for (let i = 0; i < 16; i++) n[i] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
                        for (let i = 16; i < 80; i++) {
                            const e = n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16];
                            n[i] = 4294967295 & (e << 1 | e >>> 31)
                        }
                        let r, o, a = this.chain_[0],
                            b = this.chain_[1],
                            c = this.chain_[2],
                            l = this.chain_[3],
                            h = this.chain_[4];
                        for (let i = 0; i < 80; i++) {
                            i < 40 ? i < 20 ? (r = l ^ b & (c ^ l), o = 1518500249) : (r = b ^ c ^ l, o = 1859775393) : i < 60 ? (r = b & c | l & (b | c), o = 2400959708) : (r = b ^ c ^ l, o = 3395469782);
                            const e = (a << 5 | a >>> 27) + r + h + o + n[i] & 4294967295;
                            h = l, l = c, c = 4294967295 & (b << 30 | b >>> 2), b = a, a = e
                        }
                        this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + b & 4294967295, this.chain_[2] = this.chain_[2] + c & 4294967295, this.chain_[3] = this.chain_[3] + l & 4294967295, this.chain_[4] = this.chain_[4] + h & 4294967295
                    }
                    update(e, t) {
                        if (null == e) return;
                        void 0 === t && (t = e.length);
                        const n = t - this.blockSize;
                        let r = 0;
                        const o = this.buf_;
                        let c = this.inbuf_;
                        for (; r < t;) {
                            if (0 === c)
                                for (; r <= n;) this.compress_(e, r), r += this.blockSize;
                            if ("string" == typeof e) {
                                for (; r < t;)
                                    if (o[c] = e.charCodeAt(r), ++c, ++r, c === this.blockSize) {
                                        this.compress_(o), c = 0;
                                        break
                                    }
                            } else
                                for (; r < t;)
                                    if (o[c] = e[r], ++c, ++r, c === this.blockSize) {
                                        this.compress_(o), c = 0;
                                        break
                                    }
                        }
                        this.inbuf_ = c, this.total_ += t
                    }
                    digest() {
                        const e = [];
                        let t = 8 * this.total_;
                        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                        for (let i = this.blockSize - 1; i >= 56; i--) this.buf_[i] = 255 & t, t /= 256;
                        this.compress_(this.buf_);
                        let n = 0;
                        for (let i = 0; i < 5; i++)
                            for (let t = 24; t >= 0; t -= 8) e[n] = this.chain_[i] >> t & 255, ++n;
                        return e
                    }
                }

                function X(e, t) {
                    return `${e} failed: ${t} argument `
                }
                const Z = function (e) {
                        const t = [];
                        let p = 0;
                        for (let i = 0; i < e.length; i++) {
                            let n = e.charCodeAt(i);
                            if (n >= 55296 && n <= 56319) {
                                const t = n - 55296;
                                i++, c(i < e.length, "Surrogate pair missing trail surrogate.");
                                n = 65536 + (t << 10) + (e.charCodeAt(i) - 56320)
                            }
                            n < 128 ? t[p++] = n : n < 2048 ? (t[p++] = n >> 6 | 192, t[p++] = 63 & n | 128) : n < 65536 ? (t[p++] = n >> 12 | 224, t[p++] = n >> 6 & 63 | 128, t[p++] = 63 & n | 128) : (t[p++] = n >> 18 | 240, t[p++] = n >> 12 & 63 | 128, t[p++] = n >> 6 & 63 | 128, t[p++] = 63 & n | 128)
                        }
                        return t
                    },
                    ee = function (e) {
                        let p = 0;
                        for (let i = 0; i < e.length; i++) {
                            const t = e.charCodeAt(i);
                            t < 128 ? p++ : t < 2048 ? p += 2 : t >= 55296 && t <= 56319 ? (p += 4, i++) : p += 3
                        }
                        return p
                    },
                    te = 1e3,
                    ne = 2,
                    re = 144e5,
                    ie = .5;

                function se(e, t = te, n = ne) {
                    const r = t * Math.pow(n, e),
                        o = Math.round(ie * r * (Math.random() - .5) * 2);
                    return Math.min(re, r + o)
                }

                function oe(e) {
                    return e && e._delegate ? e._delegate : e
                }
            }).call(this, n(39), n(90))
        },
        11: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return I
            })), n.d(t, "b", (function () {
                return T
            })), n.d(t, "c", (function () {
                return x
            })), n.d(t, "d", (function () {
                return P
            })), n.d(t, "e", (function () {
                return O
            })), n.d(t, "f", (function () {
                return j
            }));
            var r = n(26),
                o = n(49),
                c = n(0),
                l = n(127);
            class h {
                constructor(e) {
                    this.container = e
                }
                getPlatformInfoString() {
                    return this.container.getProviders().map((e => {
                        if (function (e) {
                                const component = e.getComponent();
                                return "VERSION" === (null == component ? void 0 : component.type)
                            }(e)) {
                            const t = e.getImmediate();
                            return `${t.library}/${t.version}`
                        }
                        return null
                    })).filter((e => e)).join(" ")
                }
            }
            const d = "@firebase/app",
                f = "0.9.8",
                m = new o.b("@firebase/app"),
                y = "[DEFAULT]",
                _ = {
                    [d]: "fire-core",
                    "@firebase/app-compat": "fire-core-compat",
                    "@firebase/analytics": "fire-analytics",
                    "@firebase/analytics-compat": "fire-analytics-compat",
                    "@firebase/app-check": "fire-app-check",
                    "@firebase/app-check-compat": "fire-app-check-compat",
                    "@firebase/auth": "fire-auth",
                    "@firebase/auth-compat": "fire-auth-compat",
                    "@firebase/database": "fire-rtdb",
                    "@firebase/database-compat": "fire-rtdb-compat",
                    "@firebase/functions": "fire-fn",
                    "@firebase/functions-compat": "fire-fn-compat",
                    "@firebase/installations": "fire-iid",
                    "@firebase/installations-compat": "fire-iid-compat",
                    "@firebase/messaging": "fire-fcm",
                    "@firebase/messaging-compat": "fire-fcm-compat",
                    "@firebase/performance": "fire-perf",
                    "@firebase/performance-compat": "fire-perf-compat",
                    "@firebase/remote-config": "fire-rc",
                    "@firebase/remote-config-compat": "fire-rc-compat",
                    "@firebase/storage": "fire-gcs",
                    "@firebase/storage-compat": "fire-gcs-compat",
                    "@firebase/firestore": "fire-fst",
                    "@firebase/firestore-compat": "fire-fst-compat",
                    "fire-js": "fire-js",
                    firebase: "fire-js-all"
                },
                v = new Map,
                w = new Map;

            function C(e, component) {
                try {
                    e.container.addComponent(component)
                } catch (t) {
                    m.debug(`Component ${component.name} failed to register with FirebaseApp ${e.name}`, t)
                }
            }

            function x(component) {
                const e = component.name;
                if (w.has(e)) return m.debug(`There were multiple attempts to register component ${e}.`), !1;
                w.set(e, component);
                for (const e of v.values()) C(e, component);
                return !0
            }

            function T(e, t) {
                const n = e.container.getProvider("heartbeat").getImmediate({
                    optional: !0
                });
                return n && n.triggerHeartbeat(), e.container.getProvider(t)
            }
            const E = {
                    "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
                    "bad-app-name": "Illegal App name: '{$appName}",
                    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
                    "app-deleted": "Firebase App named '{$appName}' already deleted",
                    "no-options": "Need to provide options, when not being deployed to hosting via source.",
                    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
                    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
                    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
                    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
                    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
                    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
                },
                k = new c.b("app", "Firebase", E);
            class S {
                constructor(e, t, n) {
                    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new r.a("app", (() => this), "PUBLIC"))
                }
                get automaticDataCollectionEnabled() {
                    return this.checkDestroyed(), this._automaticDataCollectionEnabled
                }
                set automaticDataCollectionEnabled(e) {
                    this.checkDestroyed(), this._automaticDataCollectionEnabled = e
                }
                get name() {
                    return this.checkDestroyed(), this._name
                }
                get options() {
                    return this.checkDestroyed(), this._options
                }
                get config() {
                    return this.checkDestroyed(), this._config
                }
                get container() {
                    return this._container
                }
                get isDeleted() {
                    return this._isDeleted
                }
                set isDeleted(e) {
                    this._isDeleted = e
                }
                checkDestroyed() {
                    if (this.isDeleted) throw k.create("app-deleted", {
                        appName: this._name
                    })
                }
            }
            const I = "9.20.0";

            function O(e, t = {}) {
                let n = e;
                if ("object" != typeof t) {
                    t = {
                        name: t
                    }
                }
                const o = Object.assign({
                        name: y,
                        automaticDataCollectionEnabled: !1
                    }, t),
                    l = o.name;
                if ("string" != typeof l || !l) throw k.create("bad-app-name", {
                    appName: String(l)
                });
                if (n || (n = Object(c.q)()), !n) throw k.create("no-options");
                const h = v.get(l);
                if (h) {
                    if (Object(c.o)(n, h.options) && Object(c.o)(o, h.config)) return h;
                    throw k.create("duplicate-app", {
                        appName: l
                    })
                }
                const d = new r.b(l);
                for (const component of w.values()) d.addComponent(component);
                const f = new S(n, o, d);
                return v.set(l, f), f
            }

            function P(e = y) {
                const t = v.get(e);
                if (!t && e === y) return O();
                if (!t) throw k.create("no-app", {
                    appName: e
                });
                return t
            }

            function j(e, t, n) {
                var o;
                let c = null !== (o = _[e]) && void 0 !== o ? o : e;
                n && (c += `-${n}`);
                const l = c.match(/\s|\//),
                    h = t.match(/\s|\//);
                if (l || h) {
                    const e = [`Unable to register library "${c}" with version "${t}":`];
                    return l && e.push(`library name "${c}" contains illegal characters (whitespace or "/")`), l && h && e.push("and"), h && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), void m.warn(e.join(" "))
                }
                x(new r.a(`${c}-version`, (() => ({
                    library: c,
                    version: t
                })), "VERSION"))
            }
            const R = "firebase-heartbeat-database",
                A = 1,
                N = "firebase-heartbeat-store";
            let D = null;

            function $() {
                return D || (D = Object(l.a)(R, A, {
                    upgrade: (e, t) => {
                        if (0 === t) e.createObjectStore(N)
                    }
                }).catch((e => {
                    throw k.create("idb-open", {
                        originalErrorMessage: e.message
                    })
                }))), D
            }
            async function L(e, t) {
                try {
                    const n = (await $()).transaction(N, "readwrite"),
                        r = n.objectStore(N);
                    return await r.put(t, M(e)), n.done
                } catch (e) {
                    if (e instanceof c.c) m.warn(e.message);
                    else {
                        const t = k.create("idb-set", {
                            originalErrorMessage: null == e ? void 0 : e.message
                        });
                        m.warn(t.message)
                    }
                }
            }

            function M(e) {
                return `${e.name}!${e.options.appId}`
            }
            class U {
                constructor(e) {
                    this.container = e, this._heartbeatsCache = null;
                    const t = this.container.getProvider("app").getImmediate();
                    this._storage = new B(t), this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e, e)))
                }
                async triggerHeartbeat() {
                    const e = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                        t = F();
                    if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== t && !this._heartbeatsCache.heartbeats.some((e => e.date === t))) return this._heartbeatsCache.heartbeats.push({
                        date: t,
                        agent: e
                    }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => {
                        const t = new Date(e.date).valueOf();
                        return Date.now() - t <= 2592e6
                    })), this._storage.overwrite(this._heartbeatsCache)
                }
                async getHeartbeatsHeader() {
                    if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
                    const e = F(),
                        {
                            heartbeatsToSend: t,
                            unsentEntries: n
                        } = function (e, t = 1024) {
                            const n = [];
                            let r = e.slice();
                            for (const o of e) {
                                const e = n.find((e => e.agent === o.agent));
                                if (e) {
                                    if (e.dates.push(o.date), z(n) > t) {
                                        e.dates.pop();
                                        break
                                    }
                                } else if (n.push({
                                        agent: o.agent,
                                        dates: [o.date]
                                    }), z(n) > t) {
                                    n.pop();
                                    break
                                }
                                r = r.slice(1)
                            }
                            return {
                                heartbeatsToSend: n,
                                unsentEntries: r
                            }
                        }(this._heartbeatsCache.heartbeats),
                        r = Object(c.j)(JSON.stringify({
                            version: 2,
                            heartbeats: t
                        }));
                    return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r
                }
            }

            function F() {
                return (new Date).toISOString().substring(0, 10)
            }
            class B {
                constructor(e) {
                    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
                }
                async runIndexedDBEnvironmentCheck() {
                    return !!Object(c.w)() && Object(c.I)().then((() => !0)).catch((() => !1))
                }
                async read() {
                    if (await this._canUseIndexedDBPromise) {
                        return await async function (e) {
                            try {
                                return (await $()).transaction(N).objectStore(N).get(M(e))
                            } catch (e) {
                                if (e instanceof c.c) m.warn(e.message);
                                else {
                                    const t = k.create("idb-get", {
                                        originalErrorMessage: null == e ? void 0 : e.message
                                    });
                                    m.warn(t.message)
                                }
                            }
                        }(this.app) || {
                            heartbeats: []
                        }
                    }
                    return {
                        heartbeats: []
                    }
                }
                async overwrite(e) {
                    var t;
                    if (await this._canUseIndexedDBPromise) {
                        const n = await this.read();
                        return L(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                            heartbeats: e.heartbeats
                        })
                    }
                }
                async add(e) {
                    var t;
                    if (await this._canUseIndexedDBPromise) {
                        const n = await this.read();
                        return L(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                            heartbeats: [...n.heartbeats, ...e.heartbeats]
                        })
                    }
                }
            }

            function z(e) {
                return Object(c.j)(JSON.stringify({
                    version: 2,
                    heartbeats: e
                })).length
            }
            var H;
            H = "", x(new r.a("platform-logger", (e => new h(e)), "PRIVATE")), x(new r.a("heartbeat", (e => new U(e)), "PRIVATE")), j(d, f, H), j(d, f, "esm2017"), j("fire-js", "")
        },
        120: function (e, t, n) {
            "use strict";
            (function (e) {
                n.d(t, "a", (function () {
                    return f
                })), n.d(t, "b", (function () {
                    return d
                }));
                const r = (e => e.CapacitorPlatforms = (e => {
                    const t = new Map;
                    t.set("web", {
                        name: "web"
                    });
                    const n = e.CapacitorPlatforms || {
                        currentPlatform: {
                            name: "web"
                        },
                        platforms: t
                    };
                    return n.addPlatform = (e, t) => {
                        n.platforms.set(e, t)
                    }, n.setPlatform = e => {
                        n.platforms.has(e) && (n.currentPlatform = n.platforms.get(e))
                    }, n
                })(e))("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {});
                r.addPlatform, r.setPlatform;
                var o;
                ! function (e) {
                    e.Unimplemented = "UNIMPLEMENTED", e.Unavailable = "UNAVAILABLE"
                }(o || (o = {}));
                class c extends Error {
                    constructor(e, code, data) {
                        super(e), this.message = e, this.code = code, this.data = data
                    }
                }
                const l = e => {
                        var t, n, r, l, h;
                        const d = e.CapacitorCustomPlatform || null,
                            f = e.Capacitor || {},
                            m = f.Plugins = f.Plugins || {},
                            y = e.CapacitorPlatforms,
                            _ = (null === (t = null == y ? void 0 : y.currentPlatform) || void 0 === t ? void 0 : t.getPlatform) || (() => null !== d ? d.name : (e => {
                                var t, n;
                                return (null == e ? void 0 : e.androidBridge) ? "android" : (null === (n = null === (t = null == e ? void 0 : e.webkit) || void 0 === t ? void 0 : t.messageHandlers) || void 0 === n ? void 0 : n.bridge) ? "ios" : "web"
                            })(e)),
                            v = (null === (n = null == y ? void 0 : y.currentPlatform) || void 0 === n ? void 0 : n.isNativePlatform) || (() => "web" !== _()),
                            w = (null === (r = null == y ? void 0 : y.currentPlatform) || void 0 === r ? void 0 : r.isPluginAvailable) || (e => {
                                const t = x.get(e);
                                return !!(null == t ? void 0 : t.platforms.has(_())) || !!C(e)
                            }),
                            C = (null === (l = null == y ? void 0 : y.currentPlatform) || void 0 === l ? void 0 : l.getPluginHeader) || (e => {
                                var t;
                                return null === (t = f.PluginHeaders) || void 0 === t ? void 0 : t.find((t => t.name === e))
                            }),
                            x = new Map,
                            T = (null === (h = null == y ? void 0 : y.currentPlatform) || void 0 === h ? void 0 : h.registerPlugin) || ((e, t = {}) => {
                                const n = x.get(e);
                                if (n) return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`), n.proxy;
                                const r = _(),
                                    l = C(e);
                                let h;
                                const y = n => {
                                        let m;
                                        const y = (...y) => {
                                            const p = (async () => (!h && r in t ? h = h = "function" == typeof t[r] ? await t[r]() : t[r] : null !== d && !h && "web" in t && (h = h = "function" == typeof t.web ? await t.web() : t.web), h))().then((t => {
                                                const h = ((t, n) => {
                                                    var h, d;
                                                    if (!l) {
                                                        if (t) return null === (d = t[n]) || void 0 === d ? void 0 : d.bind(t);
                                                        throw new c(`"${e}" plugin is not implemented on ${r}`, o.Unimplemented)
                                                    } {
                                                        const r = null == l ? void 0 : l.methods.find((e => n === e.name));
                                                        if (r) return "promise" === r.rtype ? t => f.nativePromise(e, n.toString(), t) : (t, r) => f.nativeCallback(e, n.toString(), t, r);
                                                        if (t) return null === (h = t[n]) || void 0 === h ? void 0 : h.bind(t)
                                                    }
                                                })(t, n);
                                                if (h) {
                                                    const p = h(...y);
                                                    return m = null == p ? void 0 : p.remove, p
                                                }
                                                throw new c(`"${e}.${n}()" is not implemented on ${r}`, o.Unimplemented)
                                            }));
                                            return "addListener" === n && (p.remove = async () => m()), p
                                        };
                                        return y.toString = () => `${n.toString()}() { [capacitor code] }`, Object.defineProperty(y, "name", {
                                            value: n,
                                            writable: !1,
                                            configurable: !1
                                        }), y
                                    },
                                    v = y("addListener"),
                                    w = y("removeListener"),
                                    T = (e, t) => {
                                        const n = v({
                                                eventName: e
                                            }, t),
                                            r = async () => {
                                                const r = await n;
                                                w({
                                                    eventName: e,
                                                    callbackId: r
                                                }, t)
                                            }, p = new Promise((e => n.then((() => e({
                                                remove: r
                                            })))));
                                        return p.remove = async () => {
                                            console.warn("Using addListener() without 'await' is deprecated."), await r()
                                        }, p
                                    },
                                    E = new Proxy({}, {
                                        get(e, t) {
                                            switch (t) {
                                                case "$$typeof":
                                                    return;
                                                case "toJSON":
                                                    return () => ({});
                                                case "addListener":
                                                    return l ? T : v;
                                                case "removeListener":
                                                    return w;
                                                default:
                                                    return y(t)
                                            }
                                        }
                                    });
                                return m[e] = E, x.set(e, {
                                    name: e,
                                    proxy: E,
                                    platforms: new Set([...Object.keys(t), ...l ? [r] : []])
                                }), E
                            });
                        return f.convertFileSrc || (f.convertFileSrc = e => e), f.getPlatform = _, f.handleError = t => e.console.error(t), f.isNativePlatform = v, f.isPluginAvailable = w, f.pluginMethodNoop = (e, t, n) => Promise.reject(`${n} does not have an implementation of "${t}".`), f.registerPlugin = T, f.Exception = c, f.DEBUG = !!f.DEBUG, f.isLoggingEnabled = !!f.isLoggingEnabled, f.platform = f.getPlatform(), f.isNative = f.isNativePlatform(), f
                    },
                    h = (e => e.Capacitor = l(e))("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {}),
                    d = h.registerPlugin;
                h.Plugins;
                class f {
                    constructor(e) {
                        this.listeners = {}, this.windowListeners = {}, e && (console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`), this.config = e)
                    }
                    addListener(e, t) {
                        this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
                        const n = this.windowListeners[e];
                        n && !n.registered && this.addWindowListener(n);
                        const r = async () => this.removeListener(e, t), p = Promise.resolve({
                            remove: r
                        });
                        return Object.defineProperty(p, "remove", {
                            value: async () => {
                                console.warn("Using addListener() without 'await' is deprecated."), await r()
                            }
                        }), p
                    }
                    async removeAllListeners() {
                        this.listeners = {};
                        for (const e in this.windowListeners) this.removeWindowListener(this.windowListeners[e]);
                        this.windowListeners = {}
                    }
                    notifyListeners(e, data) {
                        const t = this.listeners[e];
                        t && t.forEach((e => e(data)))
                    }
                    hasListeners(e) {
                        return !!this.listeners[e].length
                    }
                    registerWindowListener(e, t) {
                        this.windowListeners[t] = {
                            registered: !1,
                            windowEventName: e,
                            pluginEventName: t,
                            handler: e => {
                                this.notifyListeners(t, e)
                            }
                        }
                    }
                    unimplemented(e = "not implemented") {
                        return new h.Exception(e, o.Unimplemented)
                    }
                    unavailable(e = "not available") {
                        return new h.Exception(e, o.Unavailable)
                    }
                    async removeListener(e, t) {
                        const n = this.listeners[e];
                        if (!n) return;
                        const r = n.indexOf(t);
                        this.listeners[e].splice(r, 1), this.listeners[e].length || this.removeWindowListener(this.windowListeners[e])
                    }
                    addWindowListener(e) {
                        window.addEventListener(e.windowEventName, e.handler), e.registered = !0
                    }
                    removeWindowListener(e) {
                        e && (window.removeEventListener(e.windowEventName, e.handler), e.registered = !1)
                    }
                }
                const m = e => encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape),
                    y = e => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                class _ extends f {
                    async getCookies() {
                        const e = document.cookie,
                            t = {};
                        return e.split(";").forEach((e => {
                            if (e.length <= 0) return;
                            let [n, r] = e.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
                            n = y(n).trim(), r = y(r).trim(), t[n] = r
                        })), t
                    }
                    async setCookie(e) {
                        try {
                            const t = m(e.key),
                                n = m(e.value),
                                r = `; expires=${(e.expires||"").replace("expires=","")}`,
                                path = (e.path || "/").replace("path=", ""),
                                o = null != e.url && e.url.length > 0 ? `domain=${e.url}` : "";
                            document.cookie = `${t}=${n||""}${r}; path=${path}; ${o};`
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }
                    async deleteCookie(e) {
                        try {
                            document.cookie = `${e.key}=; Max-Age=0`
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }
                    async clearCookies() {
                        try {
                            const e = document.cookie.split(";") || [];
                            for (const t of e) document.cookie = t.replace(/^ +/, "").replace(/=.*/, `=;expires=${(new Date).toUTCString()};path=/`)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }
                    async clearAllCookies() {
                        try {
                            await this.clearCookies()
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }
                }
                d("CapacitorCookies", {
                    web: () => new _
                });
                const v = (e, t = {}) => {
                    const output = Object.assign({
                            method: e.method || "GET",
                            headers: e.headers
                        }, t),
                        n = ((e = {}) => {
                            const t = Object.keys(e);
                            return Object.keys(e).map((e => e.toLocaleLowerCase())).reduce(((n, r, o) => (n[r] = e[t[o]], n)), {})
                        })(e.headers)["content-type"] || "";
                    if ("string" == typeof e.data) output.body = e.data;
                    else if (n.includes("application/x-www-form-urlencoded")) {
                        const t = new URLSearchParams;
                        for (const [n, r] of Object.entries(e.data || {})) t.set(n, r);
                        output.body = t.toString()
                    } else if (n.includes("multipart/form-data")) {
                        const form = new FormData;
                        if (e.data instanceof FormData) e.data.forEach(((e, t) => {
                            form.append(t, e)
                        }));
                        else
                            for (const t of Object.keys(e.data)) form.append(t, e.data[t]);
                        output.body = form;
                        const t = new Headers(output.headers);
                        t.delete("content-type"), output.headers = t
                    } else(n.includes("application/json") || "object" == typeof e.data) && (output.body = JSON.stringify(e.data));
                    return output
                };
                class w extends f {
                    async request(e) {
                        const t = v(e, e.webFetchExtra),
                            n = ((e, t = !0) => e ? Object.entries(e).reduce(((e, n) => {
                                const [r, o] = n;
                                let c, l;
                                return Array.isArray(o) ? (l = "", o.forEach((e => {
                                    c = t ? encodeURIComponent(e) : e, l += `${r}=${c}&`
                                })), l.slice(0, -1)) : (c = t ? encodeURIComponent(o) : o, l = `${r}=${c}`), `${e}&${l}`
                            }), "").substr(1) : null)(e.params, e.shouldEncodeUrlParams),
                            r = n ? `${e.url}?${n}` : e.url,
                            o = await fetch(r, t),
                            c = o.headers.get("content-type") || "";
                        let data, l, {
                            responseType: h = "text"
                        } = o.ok ? e : {};
                        switch (c.includes("application/json") && (h = "json"), h) {
                            case "arraybuffer":
                            case "blob":
                                l = await o.blob(), data = await (async e => new Promise(((t, n) => {
                                    const r = new FileReader;
                                    r.onload = () => {
                                        const e = r.result;
                                        t(e.indexOf(",") >= 0 ? e.split(",")[1] : e)
                                    }, r.onerror = e => n(e), r.readAsDataURL(e)
                                })))(l);
                                break;
                            case "json":
                                data = await o.json();
                                break;
                            default:
                                data = await o.text()
                        }
                        const d = {};
                        return o.headers.forEach(((e, t) => {
                            d[t] = e
                        })), {
                            data: data,
                            headers: d,
                            status: o.status,
                            url: o.url
                        }
                    }
                    async get(e) {
                        return this.request(Object.assign(Object.assign({}, e), {
                            method: "GET"
                        }))
                    }
                    async post(e) {
                        return this.request(Object.assign(Object.assign({}, e), {
                            method: "POST"
                        }))
                    }
                    async put(e) {
                        return this.request(Object.assign(Object.assign({}, e), {
                            method: "PUT"
                        }))
                    }
                    async patch(e) {
                        return this.request(Object.assign(Object.assign({}, e), {
                            method: "PATCH"
                        }))
                    }
                    async delete(e) {
                        return this.request(Object.assign(Object.assign({}, e), {
                            method: "DELETE"
                        }))
                    }
                }
                d("CapacitorHttp", {
                    web: () => new w
                })
            }).call(this, n(39))
        },
        125: function (e, t, n) {
            e.exports = function () {
                "use strict";
                var e = 1e3,
                    t = 6e4,
                    n = 36e5,
                    r = "millisecond",
                    i = "second",
                    s = "minute",
                    u = "hour",
                    a = "day",
                    o = "week",
                    c = "month",
                    l = "quarter",
                    h = "year",
                    d = "date",
                    f = "Invalid Date",
                    m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    _ = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ordinal: function (e) {
                            var t = ["th", "st", "nd", "rd"],
                                n = e % 100;
                            return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]"
                        }
                    },
                    v = function (e, t, n) {
                        var r = String(e);
                        return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e
                    },
                    w = {
                        s: v,
                        z: function (e) {
                            var t = -e.utcOffset(),
                                n = Math.abs(t),
                                r = Math.floor(n / 60),
                                i = n % 60;
                            return (t <= 0 ? "+" : "-") + v(r, 2, "0") + ":" + v(i, 2, "0")
                        },
                        m: function e(t, n) {
                            if (t.date() < n.date()) return -e(n, t);
                            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                i = t.clone().add(r, c),
                                s = n - i < 0,
                                u = t.clone().add(r + (s ? -1 : 1), c);
                            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0)
                        },
                        a: function (e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function (e) {
                            return {
                                M: c,
                                y: h,
                                w: o,
                                d: a,
                                D: d,
                                h: u,
                                m: s,
                                s: i,
                                ms: r,
                                Q: l
                            } [e] || String(e || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function (e) {
                            return void 0 === e
                        }
                    },
                    g = "en",
                    C = {};
                C[g] = _;
                var p = function (e) {
                        return e instanceof k
                    },
                    x = function e(t, n, r) {
                        var i;
                        if (!t) return g;
                        if ("string" == typeof t) {
                            var s = t.toLowerCase();
                            C[s] && (i = s), n && (C[s] = n, i = s);
                            var u = t.split("-");
                            if (!i && u.length > 1) return e(u[0])
                        } else {
                            var a = t.name;
                            C[a] = t, i = a
                        }
                        return !r && i && (g = i), i || !r && g
                    },
                    T = function (e, t) {
                        if (p(e)) return e.clone();
                        var n = "object" == typeof t ? t : {};
                        return n.date = e, n.args = arguments, new k(n)
                    },
                    E = w;
                E.l = x, E.i = p, E.w = function (e, t) {
                    return T(e, {
                        locale: t.$L,
                        utc: t.$u,
                        x: t.$x,
                        $offset: t.$offset
                    })
                };
                var k = function () {
                        function _(e) {
                            this.$L = x(e.locale, null, !0), this.parse(e)
                        }
                        var v = _.prototype;
                        return v.parse = function (e) {
                            this.$d = function (e) {
                                var t = e.date,
                                    n = e.utc;
                                if (null === t) return new Date(NaN);
                                if (E.u(t)) return new Date;
                                if (t instanceof Date) return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var r = t.match(m);
                                    if (r) {
                                        var i = r[2] - 1 || 0,
                                            s = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)
                                    }
                                }
                                return new Date(t)
                            }(e), this.$x = e.x || {}, this.init()
                        }, v.init = function () {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, v.$utils = function () {
                            return E
                        }, v.isValid = function () {
                            return !(this.$d.toString() === f)
                        }, v.isSame = function (e, t) {
                            var n = T(e);
                            return this.startOf(t) <= n && n <= this.endOf(t)
                        }, v.isAfter = function (e, t) {
                            return T(e) < this.startOf(t)
                        }, v.isBefore = function (e, t) {
                            return this.endOf(t) < T(e)
                        }, v.$g = function (e, t, n) {
                            return E.u(e) ? this[t] : this.set(n, e)
                        }, v.unix = function () {
                            return Math.floor(this.valueOf() / 1e3)
                        }, v.valueOf = function () {
                            return this.$d.getTime()
                        }, v.startOf = function (e, t) {
                            var n = this,
                                r = !!E.u(t) || t,
                                l = E.p(e),
                                f = function (e, t) {
                                    var i = E.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                                    return r ? i : i.endOf(a)
                                },
                                m = function (e, t) {
                                    return E.w(n.toDate()[e].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
                                },
                                y = this.$W,
                                _ = this.$M,
                                v = this.$D,
                                w = "set" + (this.$u ? "UTC" : "");
                            switch (l) {
                                case h:
                                    return r ? f(1, 0) : f(31, 11);
                                case c:
                                    return r ? f(1, _) : f(0, _ + 1);
                                case o:
                                    var g = this.$locale().weekStart || 0,
                                        C = (y < g ? y + 7 : y) - g;
                                    return f(r ? v - C : v + (6 - C), _);
                                case a:
                                case d:
                                    return m(w + "Hours", 0);
                                case u:
                                    return m(w + "Minutes", 1);
                                case s:
                                    return m(w + "Seconds", 2);
                                case i:
                                    return m(w + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, v.endOf = function (e) {
                            return this.startOf(e, !1)
                        }, v.$set = function (e, t) {
                            var n, o = E.p(e),
                                l = "set" + (this.$u ? "UTC" : ""),
                                f = (n = {}, n[a] = l + "Date", n[d] = l + "Date", n[c] = l + "Month", n[h] = l + "FullYear", n[u] = l + "Hours", n[s] = l + "Minutes", n[i] = l + "Seconds", n[r] = l + "Milliseconds", n)[o],
                                m = o === a ? this.$D + (t - this.$W) : t;
                            if (o === c || o === h) {
                                var y = this.clone().set(d, 1);
                                y.$d[f](m), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d
                            } else f && this.$d[f](m);
                            return this.init(), this
                        }, v.set = function (e, t) {
                            return this.clone().$set(e, t)
                        }, v.get = function (e) {
                            return this[E.p(e)]()
                        }, v.add = function (r, l) {
                            var d, f = this;
                            r = Number(r);
                            var m = E.p(l),
                                y = function (e) {
                                    var t = T(f);
                                    return E.w(t.date(t.date() + Math.round(e * r)), f)
                                };
                            if (m === c) return this.set(c, this.$M + r);
                            if (m === h) return this.set(h, this.$y + r);
                            if (m === a) return y(1);
                            if (m === o) return y(7);
                            var _ = (d = {}, d[s] = t, d[u] = n, d[i] = e, d)[m] || 1,
                                v = this.$d.getTime() + r * _;
                            return E.w(v, this)
                        }, v.subtract = function (e, t) {
                            return this.add(-1 * e, t)
                        }, v.format = function (e) {
                            var t = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || f;
                            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                                i = E.z(this),
                                s = this.$H,
                                u = this.$m,
                                a = this.$M,
                                o = n.weekdays,
                                c = n.months,
                                l = function (e, n, i, s) {
                                    return e && (e[n] || e(t, r)) || i[n].slice(0, s)
                                },
                                h = function (e) {
                                    return E.s(s % 12 || 12, e, "0")
                                },
                                d = n.meridiem || function (e, t, n) {
                                    var r = e < 12 ? "AM" : "PM";
                                    return n ? r.toLowerCase() : r
                                },
                                m = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: a + 1,
                                    MM: E.s(a + 1, 2, "0"),
                                    MMM: l(n.monthsShort, a, c, 3),
                                    MMMM: l(c, a),
                                    D: this.$D,
                                    DD: E.s(this.$D, 2, "0"),
                                    d: String(this.$W),
                                    dd: l(n.weekdaysMin, this.$W, o, 2),
                                    ddd: l(n.weekdaysShort, this.$W, o, 3),
                                    dddd: o[this.$W],
                                    H: String(s),
                                    HH: E.s(s, 2, "0"),
                                    h: h(1),
                                    hh: h(2),
                                    a: d(s, u, !0),
                                    A: d(s, u, !1),
                                    m: String(u),
                                    mm: E.s(u, 2, "0"),
                                    s: String(this.$s),
                                    ss: E.s(this.$s, 2, "0"),
                                    SSS: E.s(this.$ms, 3, "0"),
                                    Z: i
                                };
                            return r.replace(y, (function (e, t) {
                                return t || m[e] || i.replace(":", "")
                            }))
                        }, v.utcOffset = function () {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, v.diff = function (r, d, f) {
                            var m, y = E.p(d),
                                _ = T(r),
                                v = (_.utcOffset() - this.utcOffset()) * t,
                                w = this - _,
                                g = E.m(this, _);
                            return g = (m = {}, m[h] = g / 12, m[c] = g, m[l] = g / 3, m[o] = (w - v) / 6048e5, m[a] = (w - v) / 864e5, m[u] = w / n, m[s] = w / t, m[i] = w / e, m)[y] || w, f ? g : E.a(g)
                        }, v.daysInMonth = function () {
                            return this.endOf(c).$D
                        }, v.$locale = function () {
                            return C[this.$L]
                        }, v.locale = function (e, t) {
                            if (!e) return this.$L;
                            var n = this.clone(),
                                r = x(e, t, !0);
                            return r && (n.$L = r), n
                        }, v.clone = function () {
                            return E.w(this.$d, this)
                        }, v.toDate = function () {
                            return new Date(this.valueOf())
                        }, v.toJSON = function () {
                            return this.isValid() ? this.toISOString() : null
                        }, v.toISOString = function () {
                            return this.$d.toISOString()
                        }, v.toString = function () {
                            return this.$d.toUTCString()
                        }, _
                    }(),
                    S = k.prototype;
                return T.prototype = S, [
                    ["$ms", r],
                    ["$s", i],
                    ["$m", s],
                    ["$H", u],
                    ["$W", a],
                    ["$M", c],
                    ["$y", h],
                    ["$D", d]
                ].forEach((function (e) {
                    S[e[1]] = function (t) {
                        return this.$g(t, e[0], e[1])
                    }
                })), T.extend = function (e, t) {
                    return e.$i || (e(t, k, T), e.$i = !0), T
                }, T.locale = x, T.isDayjs = p, T.unix = function (e) {
                    return T(1e3 * e)
                }, T.en = C[g], T.Ls = C, T.p = {}, T
            }()
        },
        127: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return x
            }));
            const r = (object, e) => e.some((e => object instanceof e));
            let o, c;
            const l = new WeakMap,
                h = new WeakMap,
                d = new WeakMap,
                f = new WeakMap,
                m = new WeakMap;
            let y = {
                get(e, t, n) {
                    if (e instanceof IDBTransaction) {
                        if ("done" === t) return h.get(e);
                        if ("objectStoreNames" === t) return e.objectStoreNames || d.get(e);
                        if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                    }
                    return w(e[t])
                },
                set: (e, t, n) => (e[t] = n, !0),
                has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
            };

            function _(e) {
                return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (c || (c = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function (...t) {
                    return e.apply(C(this), t), w(l.get(this))
                } : function (...t) {
                    return w(e.apply(C(this), t))
                } : function (t, ...n) {
                    const r = e.call(C(this), t, ...n);
                    return d.set(r, t.sort ? t.sort() : [t]), w(r)
                }
            }

            function v(e) {
                return "function" == typeof e ? _(e) : (e instanceof IDBTransaction && function (e) {
                    if (h.has(e)) return;
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("complete", o), e.removeEventListener("error", c), e.removeEventListener("abort", c)
                            },
                            o = () => {
                                t(), r()
                            },
                            c = () => {
                                n(e.error || new DOMException("AbortError", "AbortError")), r()
                            };
                        e.addEventListener("complete", o), e.addEventListener("error", c), e.addEventListener("abort", c)
                    }));
                    h.set(e, t)
                }(e), r(e, o || (o = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e, y) : e)
            }

            function w(e) {
                if (e instanceof IDBRequest) return function (e) {
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("success", o), e.removeEventListener("error", c)
                            },
                            o = () => {
                                t(w(e.result)), r()
                            },
                            c = () => {
                                n(e.error), r()
                            };
                        e.addEventListener("success", o), e.addEventListener("error", c)
                    }));
                    return t.then((t => {
                        t instanceof IDBCursor && l.set(t, e)
                    })).catch((() => {})), m.set(t, e), t
                }(e);
                if (f.has(e)) return f.get(e);
                const t = v(e);
                return t !== e && (f.set(e, t), m.set(t, e)), t
            }
            const C = e => m.get(e);

            function x(e, t, {
                blocked: n,
                upgrade: r,
                blocking: o,
                terminated: c
            } = {}) {
                const l = indexedDB.open(e, t),
                    h = w(l);
                return r && l.addEventListener("upgradeneeded", (e => {
                    r(w(l.result), e.oldVersion, e.newVersion, w(l.transaction))
                })), n && l.addEventListener("blocked", (() => n())), h.then((e => {
                    c && e.addEventListener("close", (() => c())), o && e.addEventListener("versionchange", (() => o()))
                })).catch((() => {})), h
            }
            const T = ["get", "getKey", "getAll", "getAllKeys", "count"],
                E = ["put", "add", "delete", "clear"],
                k = new Map;

            function S(e, t) {
                if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
                if (k.get(t)) return k.get(t);
                const n = t.replace(/FromIndex$/, ""),
                    r = t !== n,
                    o = E.includes(n);
                if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !o && !T.includes(n)) return;
                const c = async function (e, ...t) {
                    const c = this.transaction(e, o ? "readwrite" : "readonly");
                    let l = c.store;
                    return r && (l = l.index(t.shift())), (await Promise.all([l[n](...t), o && c.done]))[0]
                };
                return k.set(t, c), c
            }
            y = (e => ({
                ...e,
                get: (t, n, r) => S(t, n) || e.get(t, n, r),
                has: (t, n) => !!S(t, n) || e.has(t, n)
            }))(y)
        },
        167: function (e, t, n) {
            "use strict";
            var r = {
                name: "ClientOnly",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function (e, t) {
                    var n = t.parent,
                        r = t.slots,
                        o = t.props,
                        c = r(),
                        l = c.default;
                    void 0 === l && (l = []);
                    var h = c.placeholder;
                    return n._isMounted ? l : (n.$once("hook:mounted", (function () {
                        n.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || h) ? e(o.placeholderTag, {
                        class: ["client-only-placeholder"]
                    }, o.placeholder || h) : l.length > 0 ? l.map((function () {
                        return e(!1)
                    })) : e(!1))
                }
            };
            e.exports = r
        },
        170: function (e, t, n) {
            "use strict";
            n(31), n(52), n(63), e.exports = function (e, t) {
                return t || (t = {}), "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            }
        },
        171: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return He
            })), n.d(t, "b", (function () {
                return We
            }));
            var r = n(11),
                o = n(49),
                c = n(0),
                l = n(26),
                h = n(127);
            const d = "@firebase/installations",
                f = "0.6.4",
                m = 1e4,
                y = `w:${f}`,
                _ = "FIS_v2",
                v = "https://firebaseinstallations.googleapis.com/v1",
                w = 36e5,
                C = {
                    "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
                    "not-registered": "Firebase Installation is not registered.",
                    "installation-not-found": "Firebase Installation not found.",
                    "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
                    "app-offline": "Could not process request. Application offline.",
                    "delete-pending-registration": "Can't delete installation while there is a pending registration request."
                },
                x = new c.b("installations", "Installations", C);

            function T(e) {
                return e instanceof c.c && e.code.includes("request-failed")
            }

            function E({
                projectId: e
            }) {
                return `${v}/projects/${e}/installations`
            }

            function k(e) {
                return {
                    token: e.token,
                    requestStatus: 2,
                    expiresIn: (t = e.expiresIn, Number(t.replace("s", "000"))),
                    creationTime: Date.now()
                };
                var t
            }
            async function S(e, t) {
                const n = (await t.json()).error;
                return x.create("request-failed", {
                    requestName: e,
                    serverCode: n.code,
                    serverMessage: n.message,
                    serverStatus: n.status
                })
            }

            function I({
                apiKey: e
            }) {
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }

            function O(e, {
                refreshToken: t
            }) {
                const n = I(e);
                return n.append("Authorization", function (e) {
                    return `${_} ${e}`
                }(t)), n
            }
            async function P(e) {
                const t = await e();
                return t.status >= 500 && t.status < 600 ? e() : t
            }

            function j(e) {
                return new Promise((t => {
                    setTimeout(t, e)
                }))
            }
            const R = /^[cdef][\w-]{21}$/,
                A = "";

            function N() {
                try {
                    const e = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
                    const t = function (e) {
                        const t = (n = e, btoa(String.fromCharCode(...n)).replace(/\+/g, "-").replace(/\//g, "_"));
                        var n;
                        return t.substr(0, 22)
                    }(e);
                    return R.test(t) ? t : A
                } catch (e) {
                    return A
                }
            }

            function D(e) {
                return `${e.appName}!${e.appId}`
            }
            const $ = new Map;

            function L(e, t) {
                const n = D(e);
                M(n, t),
                    function (e, t) {
                        const n = F();
                        n && n.postMessage({
                            key: e,
                            fid: t
                        });
                        B()
                    }(n, t)
            }

            function M(e, t) {
                const n = $.get(e);
                if (n)
                    for (const e of n) e(t)
            }
            let U = null;

            function F() {
                return !U && "BroadcastChannel" in self && (U = new BroadcastChannel("[Firebase] FID Change"), U.onmessage = e => {
                    M(e.data.key, e.data.fid)
                }), U
            }

            function B() {
                0 === $.size && U && (U.close(), U = null)
            }
            const z = "firebase-installations-database",
                H = 1,
                W = "firebase-installations-store";
            let Y = null;

            function V() {
                return Y || (Y = Object(h.a)(z, H, {
                    upgrade: (e, t) => {
                        if (0 === t) e.createObjectStore(W)
                    }
                })), Y
            }
            async function K(e, t) {
                const n = D(e),
                    r = (await V()).transaction(W, "readwrite"),
                    o = r.objectStore(W),
                    c = await o.get(n);
                return await o.put(t, n), await r.done, c && c.fid === t.fid || L(e, t.fid), t
            }
            async function G(e) {
                const t = D(e),
                    n = (await V()).transaction(W, "readwrite");
                await n.objectStore(W).delete(t), await n.done
            }
            async function J(e, t) {
                const n = D(e),
                    r = (await V()).transaction(W, "readwrite"),
                    o = r.objectStore(W),
                    c = await o.get(n),
                    l = t(c);
                return void 0 === l ? await o.delete(n) : await o.put(l, n), await r.done, !l || c && c.fid === l.fid || L(e, l.fid), l
            }
            async function Q(e) {
                let t;
                const n = await J(e.appConfig, (n => {
                    const r = function (e) {
                            const t = e || {
                                fid: N(),
                                registrationStatus: 0
                            };
                            return ee(t)
                        }(n),
                        o = function (e, t) {
                            if (0 === t.registrationStatus) {
                                if (!navigator.onLine) {
                                    return {
                                        installationEntry: t,
                                        registrationPromise: Promise.reject(x.create("app-offline"))
                                    }
                                }
                                const n = {
                                        fid: t.fid,
                                        registrationStatus: 1,
                                        registrationTime: Date.now()
                                    },
                                    r = async function (e, t) {
                                        try {
                                            const n = await async function ({
                                                appConfig: e,
                                                heartbeatServiceProvider: t
                                            }, {
                                                fid: n
                                            }) {
                                                const r = E(e),
                                                    o = I(e),
                                                    c = t.getImmediate({
                                                        optional: !0
                                                    });
                                                if (c) {
                                                    const e = await c.getHeartbeatsHeader();
                                                    e && o.append("x-firebase-client", e)
                                                }
                                                const body = {
                                                        fid: n,
                                                        authVersion: _,
                                                        appId: e.appId,
                                                        sdkVersion: y
                                                    },
                                                    l = {
                                                        method: "POST",
                                                        headers: o,
                                                        body: JSON.stringify(body)
                                                    },
                                                    h = await P((() => fetch(r, l)));
                                                if (h.ok) {
                                                    const e = await h.json();
                                                    return {
                                                        fid: e.fid || n,
                                                        registrationStatus: 2,
                                                        refreshToken: e.refreshToken,
                                                        authToken: k(e.authToken)
                                                    }
                                                }
                                                throw await S("Create Installation", h)
                                            }(e, t);
                                            return K(e.appConfig, n)
                                        } catch (n) {
                                            throw T(n) && 409 === n.customData.serverCode ? await G(e.appConfig) : await K(e.appConfig, {
                                                fid: t.fid,
                                                registrationStatus: 0
                                            }), n
                                        }
                                    }(e, n);
                                return {
                                    installationEntry: n,
                                    registrationPromise: r
                                }
                            }
                            return 1 === t.registrationStatus ? {
                                installationEntry: t,
                                registrationPromise: X(e)
                            } : {
                                installationEntry: t
                            }
                        }(e, r);
                    return t = o.registrationPromise, o.installationEntry
                }));
                return n.fid === A ? {
                    installationEntry: await t
                } : {
                    installationEntry: n,
                    registrationPromise: t
                }
            }
            async function X(e) {
                let t = await Z(e.appConfig);
                for (; 1 === t.registrationStatus;) await j(100), t = await Z(e.appConfig);
                if (0 === t.registrationStatus) {
                    const {
                        installationEntry: t,
                        registrationPromise: n
                    } = await Q(e);
                    return n || t
                }
                return t
            }

            function Z(e) {
                return J(e, (e => {
                    if (!e) throw x.create("installation-not-found");
                    return ee(e)
                }))
            }

            function ee(e) {
                return 1 === (t = e).registrationStatus && t.registrationTime + m < Date.now() ? {
                    fid: e.fid,
                    registrationStatus: 0
                } : e;
                var t
            }
            async function te({
                appConfig: e,
                heartbeatServiceProvider: t
            }, n) {
                const r = function (e, {
                        fid: t
                    }) {
                        return `${E(e)}/${t}/authTokens:generate`
                    }(e, n),
                    o = O(e, n),
                    c = t.getImmediate({
                        optional: !0
                    });
                if (c) {
                    const e = await c.getHeartbeatsHeader();
                    e && o.append("x-firebase-client", e)
                }
                const body = {
                        installation: {
                            sdkVersion: y,
                            appId: e.appId
                        }
                    },
                    l = {
                        method: "POST",
                        headers: o,
                        body: JSON.stringify(body)
                    },
                    h = await P((() => fetch(r, l)));
                if (h.ok) {
                    return k(await h.json())
                }
                throw await S("Generate Auth Token", h)
            }
            async function ne(e, t = !1) {
                let n;
                const r = await J(e.appConfig, (r => {
                    if (!ie(r)) throw x.create("not-registered");
                    const o = r.authToken;
                    if (!t && function (e) {
                            return 2 === e.requestStatus && ! function (e) {
                                const t = Date.now();
                                return t < e.creationTime || e.creationTime + e.expiresIn < t + w
                            }(e)
                        }(o)) return r;
                    if (1 === o.requestStatus) return n = async function (e, t) {
                        let n = await re(e.appConfig);
                        for (; 1 === n.authToken.requestStatus;) await j(100), n = await re(e.appConfig);
                        const r = n.authToken;
                        return 0 === r.requestStatus ? ne(e, t) : r
                    }(e, t), r; {
                        if (!navigator.onLine) throw x.create("app-offline");
                        const t = function (e) {
                            const t = {
                                requestStatus: 1,
                                requestTime: Date.now()
                            };
                            return Object.assign(Object.assign({}, e), {
                                authToken: t
                            })
                        }(r);
                        return n = async function (e, t) {
                            try {
                                const n = await te(e, t),
                                    r = Object.assign(Object.assign({}, t), {
                                        authToken: n
                                    });
                                return await K(e.appConfig, r), n
                            } catch (n) {
                                if (!T(n) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode) {
                                    const n = Object.assign(Object.assign({}, t), {
                                        authToken: {
                                            requestStatus: 0
                                        }
                                    });
                                    await K(e.appConfig, n)
                                } else await G(e.appConfig);
                                throw n
                            }
                        }(e, t), t
                    }
                }));
                return n ? await n : r.authToken
            }

            function re(e) {
                return J(e, (e => {
                    if (!ie(e)) throw x.create("not-registered");
                    const t = e.authToken;
                    return 1 === (n = t).requestStatus && n.requestTime + m < Date.now() ? Object.assign(Object.assign({}, e), {
                        authToken: {
                            requestStatus: 0
                        }
                    }) : e;
                    var n
                }))
            }

            function ie(e) {
                return void 0 !== e && 2 === e.registrationStatus
            }
            async function se(e, t = !1) {
                const n = e;
                await async function (e) {
                    const {
                        registrationPromise: t
                    } = await Q(e);
                    t && await t
                }(n);
                return (await ne(n, t)).token
            }

            function oe(e) {
                return x.create("missing-app-config-values", {
                    valueName: e
                })
            }
            const ae = "installations",
                ce = e => {
                    const t = e.getProvider("app").getImmediate(),
                        n = function (e) {
                            if (!e || !e.options) throw oe("App Configuration");
                            if (!e.name) throw oe("App Name");
                            const t = ["projectId", "apiKey", "appId"];
                            for (const n of t)
                                if (!e.options[n]) throw oe(n);
                            return {
                                appName: e.name,
                                projectId: e.options.projectId,
                                apiKey: e.options.apiKey,
                                appId: e.options.appId
                            }
                        }(t);
                    return {
                        app: t,
                        appConfig: n,
                        heartbeatServiceProvider: Object(r.b)(t, "heartbeat"),
                        _delete: () => Promise.resolve()
                    }
                },
                le = e => {
                    const t = e.getProvider("app").getImmediate(),
                        n = Object(r.b)(t, ae).getImmediate();
                    return {
                        getId: () => async function (e) {
                            const t = e,
                                {
                                    installationEntry: n,
                                    registrationPromise: r
                                } = await Q(t);
                            return r ? r.catch(console.error) : ne(t).catch(console.error), n.fid
                        }(n),
                        getToken: e => se(n, e)
                    }
                };
            Object(r.c)(new l.a(ae, ce, "PUBLIC")), Object(r.c)(new l.a("installations-internal", le, "PRIVATE")), Object(r.f)(d, f), Object(r.f)(d, f, "esm2017");
            const he = "analytics",
                ue = "firebase_id",
                de = "origin",
                fe = 6e4,
                pe = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
                ge = "https://www.googletagmanager.com/gtag/js",
                me = new o.b("@firebase/analytics"),
                ye = {
                    "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
                    "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
                    "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
                    "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
                    "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
                    "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
                    "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
                    "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
                    "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
                    "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
                    "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
                },
                _e = new c.b("analytics", "Analytics", ye);

            function ve(e) {
                if (!e.startsWith(ge)) {
                    const t = _e.create("invalid-gtag-resource", {
                        gtagURL: e
                    });
                    return me.warn(t.message), ""
                }
                return e
            }

            function be(e) {
                return Promise.all(e.map((e => e.catch((e => e)))))
            }

            function we(e, t) {
                const n = function (e, t) {
                        let n;
                        return window.trustedTypes && (n = window.trustedTypes.createPolicy(e, t)), n
                    }("firebase-js-sdk-policy", {
                        createScriptURL: ve
                    }),
                    script = document.createElement("script"),
                    r = `${ge}?l=${e}&id=${t}`;
                script.src = n ? null == n ? void 0 : n.createScriptURL(r) : r, script.async = !0, document.head.appendChild(script)
            }

            function Ce(e, t, n, r) {
                return async function (o, c, l) {
                    try {
                        "event" === o ? await async function (e, t, n, r, o) {
                            try {
                                let c = [];
                                if (o && o.send_to) {
                                    let e = o.send_to;
                                    Array.isArray(e) || (e = [e]);
                                    const r = await be(n);
                                    for (const n of e) {
                                        const e = r.find((e => e.measurementId === n)),
                                            o = e && t[e.appId];
                                        if (!o) {
                                            c = [];
                                            break
                                        }
                                        c.push(o)
                                    }
                                }
                                0 === c.length && (c = Object.values(t)), await Promise.all(c), e("event", r, o || {})
                            } catch (e) {
                                me.error(e)
                            }
                        }(e, t, n, c, l): "config" === o ? await async function (e, t, n, r, o, c) {
                            const l = r[o];
                            try {
                                if (l) await t[l];
                                else {
                                    const e = (await be(n)).find((e => e.measurementId === o));
                                    e && await t[e.appId]
                                }
                            } catch (e) {
                                me.error(e)
                            }
                            e("config", o, c)
                        }(e, t, n, r, c, l): "consent" === o ? e("consent", "update", l) : e("set", c)
                    } catch (e) {
                        me.error(e)
                    }
                }
            }
            const xe = 30;
            const Te = new class {
                constructor(e = {}, t = 1e3) {
                    this.throttleMetadata = e, this.intervalMillis = t
                }
                getThrottleMetadata(e) {
                    return this.throttleMetadata[e]
                }
                setThrottleMetadata(e, t) {
                    this.throttleMetadata[e] = t
                }
                deleteThrottleMetadata(e) {
                    delete this.throttleMetadata[e]
                }
            };

            function Ee(e) {
                return new Headers({
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }
            async function ke(e, t = Te, n) {
                const {
                    appId: r,
                    apiKey: o,
                    measurementId: c
                } = e.options;
                if (!r) throw _e.create("no-app-id");
                if (!o) {
                    if (c) return {
                        measurementId: c,
                        appId: r
                    };
                    throw _e.create("no-api-key")
                }
                const l = t.getThrottleMetadata(r) || {
                        backoffCount: 0,
                        throttleEndTimeMillis: Date.now()
                    },
                    h = new Ie;
                return setTimeout((async () => {
                    h.abort()
                }), void 0 !== n ? n : fe), Se({
                    appId: r,
                    apiKey: o,
                    measurementId: c
                }, l, h, t)
            }
            async function Se(e, {
                throttleEndTimeMillis: t,
                backoffCount: n
            }, r, o = Te) {
                var l;
                const {
                    appId: h,
                    measurementId: d
                } = e;
                try {
                    await
                    function (e, t) {
                        return new Promise(((n, r) => {
                            const o = Math.max(t - Date.now(), 0),
                                c = setTimeout(n, o);
                            e.addEventListener((() => {
                                clearTimeout(c), r(_e.create("fetch-throttle", {
                                    throttleEndTimeMillis: t
                                }))
                            }))
                        }))
                    }(r, t)
                } catch (e) {
                    if (d) return me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`), {
                        appId: h,
                        measurementId: d
                    };
                    throw e
                }
                try {
                    const t = await async function (e) {
                        var t;
                        const {
                            appId: n,
                            apiKey: r
                        } = e, o = {
                            method: "GET",
                            headers: Ee(r)
                        }, c = pe.replace("{app-id}", n), l = await fetch(c, o);
                        if (200 !== l.status && 304 !== l.status) {
                            let e = "";
                            try {
                                const n = await l.json();
                                (null === (t = n.error) || void 0 === t ? void 0 : t.message) && (e = n.error.message)
                            } catch (e) {}
                            throw _e.create("config-fetch-failed", {
                                httpStatus: l.status,
                                responseMessage: e
                            })
                        }
                        return l.json()
                    }(e);
                    return o.deleteThrottleMetadata(h), t
                } catch (t) {
                    const f = t;
                    if (! function (e) {
                            if (!(e instanceof c.c && e.customData)) return !1;
                            const t = Number(e.customData.httpStatus);
                            return 429 === t || 500 === t || 503 === t || 504 === t
                        }(f)) {
                        if (o.deleteThrottleMetadata(h), d) return me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${null==f?void 0:f.message}]`), {
                            appId: h,
                            measurementId: d
                        };
                        throw t
                    }
                    const m = 503 === Number(null === (l = null == f ? void 0 : f.customData) || void 0 === l ? void 0 : l.httpStatus) ? Object(c.k)(n, o.intervalMillis, xe) : Object(c.k)(n, o.intervalMillis),
                        y = {
                            throttleEndTimeMillis: Date.now() + m,
                            backoffCount: n + 1
                        };
                    return o.setThrottleMetadata(h, y), me.debug(`Calling attemptFetch again in ${m} millis`), Se(e, y, r, o)
                }
            }
            class Ie {
                constructor() {
                    this.listeners = []
                }
                addEventListener(e) {
                    this.listeners.push(e)
                }
                abort() {
                    this.listeners.forEach((e => e()))
                }
            }
            let Oe, Pe;

            function je(e) {
                Pe = e
            }

            function Re(e) {
                Oe = e
            }
            async function Ae(e, t, n, r, o, l, h) {
                var d;
                const f = ke(e);
                f.then((t => {
                    n[t.measurementId] = t.appId, e.options.measurementId && t.measurementId !== e.options.measurementId && me.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
                })).catch((e => me.error(e))), t.push(f);
                const m = async function () {
                    if (!Object(c.w)()) return me.warn(_e.create("indexeddb-unavailable", {
                        errorInfo: "IndexedDB is not available in this environment."
                    }).message), !1;
                    try {
                        await Object(c.I)()
                    } catch (e) {
                        return me.warn(_e.create("indexeddb-unavailable", {
                            errorInfo: null == e ? void 0 : e.toString()
                        }).message), !1
                    }
                    return !0
                }().then((e => e ? r.getId() : void 0)), [y, _] = await Promise.all([f, m]);
                (function (e) {
                    const t = window.document.getElementsByTagName("script");
                    for (const n of Object.values(t))
                        if (n.src && n.src.includes(ge) && n.src.includes(e)) return n;
                    return null
                })(l) || we(l, y.measurementId), Pe && (o("consent", "default", Pe), je(void 0)), o("js", new Date);
                const v = null !== (d = null == h ? void 0 : h.config) && void 0 !== d ? d : {};
                return v[de] = "firebase", v.update = !0, null != _ && (v[ue] = _), o("config", y.measurementId, v), Oe && (o("set", Oe), Re(void 0)), y.measurementId
            }
            class Ne {
                constructor(e) {
                    this.app = e
                }
                _delete() {
                    return delete De[this.app.options.appId], Promise.resolve()
                }
            }
            let De = {},
                $e = [];
            const Le = {};
            let Me, Ue, Fe = "dataLayer",
                Be = "gtag",
                qe = !1;

            function ze(e, t, n) {
                ! function () {
                    const e = [];
                    if (Object(c.u)() && e.push("This is a browser extension environment."), Object(c.e)() || e.push("Cookies are not available."), e.length > 0) {
                        const details = e.map(((e, t) => `(${t+1}) ${e}`)).join(" "),
                            t = _e.create("invalid-analytics-context", {
                                errorInfo: details
                            });
                        me.warn(t.message)
                    }
                }();
                const r = e.options.appId;
                if (!r) throw _e.create("no-app-id");
                if (!e.options.apiKey) {
                    if (!e.options.measurementId) throw _e.create("no-api-key");
                    me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
                }
                if (null != De[r]) throw _e.create("already-exists", {
                    id: r
                });
                if (!qe) {
                    ! function (e) {
                        let t = [];
                        Array.isArray(window[e]) ? t = window[e] : window[e] = t
                    }(Fe);
                    const {
                        wrappedGtag: e,
                        gtagCore: t
                    } = function (e, t, n, r, o) {
                        let c = function (...e) {
                            window[r].push(arguments)
                        };
                        return window[o] && "function" == typeof window[o] && (c = window[o]), window[o] = Ce(c, e, t, n), {
                            gtagCore: c,
                            wrappedGtag: window[o]
                        }
                    }(De, $e, Le, Fe, Be);
                    Ue = e, Me = t, qe = !0
                }
                De[r] = Ae(e, $e, Le, t, Me, Fe, n);
                return new Ne(e)
            }

            function He(e = Object(r.d)()) {
                e = Object(c.s)(e);
                const t = Object(r.b)(e, he);
                return t.isInitialized() ? t.getImmediate() : function (e, t = {}) {
                    const n = Object(r.b)(e, he);
                    if (n.isInitialized()) {
                        const e = n.getImmediate();
                        if (Object(c.o)(t, n.getOptions())) return e;
                        throw _e.create("already-initialized")
                    }
                    const o = n.initialize({
                        options: t
                    });
                    return o
                }(e)
            }

            function We(e, t, n, r) {
                e = Object(c.s)(e), async function (e, t, n, r, o) {
                    if (o && o.global) e("event", n, r);
                    else {
                        const o = await t;
                        e("event", n, Object.assign(Object.assign({}, r), {
                            send_to: o
                        }))
                    }
                }(Ue, De[e.app.options.appId], t, n, r).catch((e => me.error(e)))
            }
            const Ye = "@firebase/analytics",
                Ve = "0.9.5";
            Object(r.c)(new l.a(he, ((e, {
                options: t
            }) => ze(e.getProvider("app").getImmediate(), e.getProvider("installations-internal").getImmediate(), t)), "PUBLIC")), Object(r.c)(new l.a("analytics-internal", (function (e) {
                try {
                    const t = e.getProvider(he).getImmediate();
                    return {
                        logEvent: (e, n, r) => We(t, e, n, r)
                    }
                } catch (e) {
                    throw _e.create("interop-component-reg-failed", {
                        reason: e
                    })
                }
            }), "PRIVATE")), Object(r.f)(Ye, Ve), Object(r.f)(Ye, Ve, "esm2017")
        },
        174: function (e, t, n) {
            "use strict";
            var r = n(171);
            n.d(t, "a", (function () {
                return r.a
            })), n.d(t, "b", (function () {
                return r.b
            }))
        },
        230: function (e, t, n) {
            "use strict";
            (function (e) {
                n.d(t, "a", (function () {
                    return fs
                })), n.d(t, "b", (function () {
                    return is
                })), n.d(t, "c", (function () {
                    return Zi
                })), n.d(t, "d", (function () {
                    return Xi
                })), n.d(t, "e", (function () {
                    return Qi
                })), n.d(t, "f", (function () {
                    return os
                })), n.d(t, "g", (function () {
                    return as
                })), n.d(t, "h", (function () {
                    return Hi
                })), n.d(t, "i", (function () {
                    return Yi
                })), n.d(t, "j", (function () {
                    return Vi
                })), n.d(t, "k", (function () {
                    return ns
                }));
                var r = n(11),
                    o = n(26),
                    c = n(0),
                    l = n(49);
                const h = "@firebase/database",
                    d = "0.14.4";
                let f = "";
                class m {
                    constructor(e) {
                        this.domStorage_ = e, this.prefix_ = "firebase:"
                    }
                    set(e, t) {
                        null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), Object(c.H)(t))
                    }
                    get(e) {
                        const t = this.domStorage_.getItem(this.prefixedName_(e));
                        return null == t ? null : Object(c.B)(t)
                    }
                    remove(e) {
                        this.domStorage_.removeItem(this.prefixedName_(e))
                    }
                    prefixedName_(e) {
                        return this.prefix_ + e
                    }
                    toString() {
                        return this.domStorage_.toString()
                    }
                }
                class y {
                    constructor() {
                        this.cache_ = {}, this.isInMemoryStorage = !0
                    }
                    set(e, t) {
                        null == t ? delete this.cache_[e] : this.cache_[e] = t
                    }
                    get(e) {
                        return Object(c.l)(this.cache_, e) ? this.cache_[e] : null
                    }
                    remove(e) {
                        delete this.cache_[e]
                    }
                }
                const _ = function (e) {
                        try {
                            if ("undefined" != typeof window && void 0 !== window[e]) {
                                const t = window[e];
                                return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new m(t)
                            }
                        } catch (e) {}
                        return new y
                    },
                    v = _("localStorage"),
                    w = _("sessionStorage"),
                    C = new l.b("@firebase/database"),
                    x = function () {
                        let e = 1;
                        return function () {
                            return e++
                        }
                    }(),
                    T = function (e) {
                        const t = Object(c.G)(e),
                            n = new c.d;
                        n.update(t);
                        const r = n.digest();
                        return c.h.encodeByteArray(r)
                    },
                    E = function (...e) {
                        let t = "";
                        for (let i = 0; i < e.length; i++) {
                            const n = e[i];
                            Array.isArray(n) || n && "object" == typeof n && "number" == typeof n.length ? t += E.apply(null, n) : t += "object" == typeof n ? Object(c.H)(n) : n, t += " "
                        }
                        return t
                    };
                let k = null,
                    S = !0;
                const I = function (e, t) {
                        Object(c.f)(!t || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? (C.logLevel = l.a.VERBOSE, k = C.log.bind(C), t && w.set("logging_enabled", !0)) : "function" == typeof e ? k = e : (k = null, w.remove("logging_enabled"))
                    },
                    O = function (...e) {
                        if (!0 === S && (S = !1, null === k && !0 === w.get("logging_enabled") && I(!0)), k) {
                            const t = E.apply(null, e);
                            k(t)
                        }
                    },
                    P = function (e) {
                        return function (...t) {
                            O(e, ...t)
                        }
                    },
                    j = function (...e) {
                        const t = "FIREBASE INTERNAL ERROR: " + E(...e);
                        C.error(t)
                    },
                    R = function (...e) {
                        const t = `FIREBASE FATAL ERROR: ${E(...e)}`;
                        throw C.error(t), new Error(t)
                    },
                    A = function (...e) {
                        const t = "FIREBASE WARNING: " + E(...e);
                        C.warn(t)
                    },
                    N = function (data) {
                        return "number" == typeof data && (data != data || data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY)
                    },
                    D = "[MIN_NAME]",
                    $ = "[MAX_NAME]",
                    L = function (a, b) {
                        if (a === b) return 0;
                        if (a === D || b === $) return -1;
                        if (b === D || a === $) return 1; {
                            const e = Y(a),
                                t = Y(b);
                            return null !== e ? null !== t ? e - t == 0 ? a.length - b.length : e - t : -1 : null !== t ? 1 : a < b ? -1 : 1
                        }
                    },
                    M = function (a, b) {
                        return a === b ? 0 : a < b ? -1 : 1
                    },
                    U = function (e, t) {
                        if (t && e in t) return t[e];
                        throw new Error("Missing required key (" + e + ") in object: " + Object(c.H)(t))
                    },
                    F = function (e) {
                        if ("object" != typeof e || null === e) return Object(c.H)(e);
                        const t = [];
                        for (const n in e) t.push(n);
                        t.sort();
                        let n = "{";
                        for (let i = 0; i < t.length; i++) 0 !== i && (n += ","), n += Object(c.H)(t[i]), n += ":", n += F(e[t[i]]);
                        return n += "}", n
                    },
                    B = function (e, t) {
                        const n = e.length;
                        if (n <= t) return [e];
                        const r = [];
                        for (let o = 0; o < n; o += t) o + t > n ? r.push(e.substring(o, n)) : r.push(e.substring(o, o + t));
                        return r
                    };

                function z(e, t) {
                    for (const n in e) e.hasOwnProperty(n) && t(n, e[n])
                }
                const H = function (e) {
                    Object(c.f)(!N(e), "Invalid JSON number");
                    const t = 1023;
                    let s, n, r, o, i;
                    0 === e ? (n = 0, r = 0, s = 1 / e == -1 / 0 ? 1 : 0) : (s = e < 0, (e = Math.abs(e)) >= Math.pow(2, -1022) ? (o = Math.min(Math.floor(Math.log(e) / Math.LN2), t), n = o + t, r = Math.round(e * Math.pow(2, 52 - o) - Math.pow(2, 52))) : (n = 0, r = Math.round(e / Math.pow(2, -1074))));
                    const l = [];
                    for (i = 52; i; i -= 1) l.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
                    for (i = 11; i; i -= 1) l.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
                    l.push(s ? 1 : 0), l.reverse();
                    const h = l.join("");
                    let d = "";
                    for (i = 0; i < 64; i += 8) {
                        let e = parseInt(h.substr(i, 8), 2).toString(16);
                        1 === e.length && (e = "0" + e), d += e
                    }
                    return d.toLowerCase()
                };
                const W = new RegExp("^-?(0*)\\d{1,10}$"),
                    Y = function (e) {
                        if (W.test(e)) {
                            const t = Number(e);
                            if (t >= -2147483648 && t <= 2147483647) return t
                        }
                        return null
                    },
                    V = function (e) {
                        try {
                            e()
                        } catch (e) {
                            setTimeout((() => {
                                const t = e.stack || "";
                                throw A("Exception was thrown by user callback.", t), e
                            }), Math.floor(0))
                        }
                    },
                    K = function (e, time) {
                        const t = setTimeout(e, time);
                        return "number" == typeof t && "undefined" != typeof Deno && Deno.unrefTimer ? Deno.unrefTimer(t) : "object" == typeof t && t.unref && t.unref(), t
                    };
                class G {
                    constructor(e, t) {
                        this.appName_ = e, this.appCheckProvider = t, this.appCheck = null == t ? void 0 : t.getImmediate({
                            optional: !0
                        }), this.appCheck || null == t || t.get().then((e => this.appCheck = e))
                    }
                    getToken(e) {
                        return this.appCheck ? this.appCheck.getToken(e) : new Promise(((t, n) => {
                            setTimeout((() => {
                                this.appCheck ? this.getToken(e).then(t, n) : t(null)
                            }), 0)
                        }))
                    }
                    addTokenChangeListener(e) {
                        var t;
                        null === (t = this.appCheckProvider) || void 0 === t || t.get().then((t => t.addTokenListener(e)))
                    }
                    notifyForInvalidToken() {
                        A(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)
                    }
                }
                class J {
                    constructor(e, t, n) {
                        this.appName_ = e, this.firebaseOptions_ = t, this.authProvider_ = n, this.auth_ = null, this.auth_ = n.getImmediate({
                            optional: !0
                        }), this.auth_ || n.onInit((e => this.auth_ = e))
                    }
                    getToken(e) {
                        return this.auth_ ? this.auth_.getToken(e).catch((e => e && "auth/token-not-initialized" === e.code ? (O("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e))) : new Promise(((t, n) => {
                            setTimeout((() => {
                                this.auth_ ? this.getToken(e).then(t, n) : t(null)
                            }), 0)
                        }))
                    }
                    addTokenChangeListener(e) {
                        this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then((t => t.addAuthTokenListener(e)))
                    }
                    removeTokenChangeListener(e) {
                        this.authProvider_.get().then((t => t.removeAuthTokenListener(e)))
                    }
                    notifyForInvalidToken() {
                        let e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
                        "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', A(e)
                    }
                }
                class Q {
                    constructor(e) {
                        this.accessToken = e
                    }
                    getToken(e) {
                        return Promise.resolve({
                            accessToken: this.accessToken
                        })
                    }
                    addTokenChangeListener(e) {
                        e(this.accessToken)
                    }
                    removeTokenChangeListener(e) {}
                    notifyForInvalidToken() {}
                }
                Q.OWNER = "owner";
                const X = "5",
                    Z = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
                    ee = "ac",
                    te = "websocket",
                    ne = "long_polling";
                class re {
                    constructor(e, t, n, r, o = !1, c = "", l = !1, h = !1) {
                        this.secure = t, this.namespace = n, this.webSocketOnly = r, this.nodeAdmin = o, this.persistenceKey = c, this.includeNamespaceInQueryParams = l, this.isUsingEmulator = h, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = v.get("host:" + e) || this._host
                    }
                    isCacheableHost() {
                        return "s-" === this.internalHost.substr(0, 2)
                    }
                    isCustomHost() {
                        return "firebaseio.com" !== this._domain && "firebaseio-demo.com" !== this._domain
                    }
                    get host() {
                        return this._host
                    }
                    set host(e) {
                        e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && v.set("host:" + this._host, this.internalHost))
                    }
                    toString() {
                        let e = this.toURLString();
                        return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
                    }
                    toURLString() {
                        const e = this.secure ? "https://" : "http://",
                            t = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
                        return `${e}${this.host}/${t}`
                    }
                }

                function ie(e, t, n) {
                    let r;
                    if (Object(c.f)("string" == typeof t, "typeof type must == string"), Object(c.f)("object" == typeof n, "typeof params must == object"), t === te) r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
                    else {
                        if (t !== ne) throw new Error("Unknown connection type: " + t);
                        r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?"
                    }(function (e) {
                        return e.host !== e.internalHost || e.isCustomHost() || e.includeNamespaceInQueryParams
                    })(e) && (n.ns = e.namespace);
                    const o = [];
                    return z(n, ((e, t) => {
                        o.push(e + "=" + t)
                    })), r + o.join("&")
                }
                class se {
                    constructor() {
                        this.counters_ = {}
                    }
                    incrementCounter(e, t = 1) {
                        Object(c.l)(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t
                    }
                    get() {
                        return Object(c.n)(this.counters_)
                    }
                }
                const oe = {},
                    ae = {};

                function ce(e) {
                    const t = e.toString();
                    return oe[t] || (oe[t] = new se), oe[t]
                }
                class le {
                    constructor(e) {
                        this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
                    }
                    closeAfter(e, t) {
                        this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
                    }
                    handleResponse(e, data) {
                        for (this.pendingResponses[e] = data; this.pendingResponses[this.currentResponseNum];) {
                            const e = this.pendingResponses[this.currentResponseNum];
                            delete this.pendingResponses[this.currentResponseNum];
                            for (let i = 0; i < e.length; ++i) e[i] && V((() => {
                                this.onMessage_(e[i])
                            }));
                            if (this.currentResponseNum === this.closeAfterResponse) {
                                this.onClose && (this.onClose(), this.onClose = null);
                                break
                            }
                            this.currentResponseNum++
                        }
                    }
                }
                const he = "start";
                class ue {
                    constructor(e, t, n, r, o, c, l) {
                        this.connId = e, this.repoInfo = t, this.applicationId = n, this.appCheckToken = r, this.authToken = o, this.transportSessionId = c, this.lastSessionId = l, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = P(e), this.stats_ = ce(t), this.urlFn = e => (this.appCheckToken && (e[ee] = this.appCheckToken), ie(t, ne, e))
                    }
                    open(e, t) {
                        this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new le(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout((() => {
                                this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null
                            }), Math.floor(3e4)),
                            function (e) {
                                if (Object(c.y)() || "complete" === document.readyState) e();
                                else {
                                    let t = !1;
                                    const n = function () {
                                        document.body ? t || (t = !0, e()) : setTimeout(n, Math.floor(10))
                                    };
                                    document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", (() => {
                                        "complete" === document.readyState && n()
                                    })), window.attachEvent("onload", n))
                                }
                            }((() => {
                                if (this.isClosed_) return;
                                this.scriptTagHolder = new de(((...e) => {
                                    const [t, n, r, o, c] = e;
                                    if (this.incrementIncomingBytes_(e), this.scriptTagHolder)
                                        if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, t === he) this.id = n, this.password = r;
                                        else {
                                            if ("close" !== t) throw new Error("Unrecognized command received: " + t);
                                            n ? (this.scriptTagHolder.sendNewPolls = !1, this.myPacketOrderer.closeAfter(n, (() => {
                                                this.onClosed_()
                                            }))) : this.onClosed_()
                                        }
                                }), ((...e) => {
                                    const [t, data] = e;
                                    this.incrementIncomingBytes_(e), this.myPacketOrderer.handleResponse(t, data)
                                }), (() => {
                                    this.onClosed_()
                                }), this.urlFn);
                                const e = {};
                                e[he] = "t", e.ser = Math.floor(1e8 * Math.random()), this.scriptTagHolder.uniqueCallbackIdentifier && (e.cb = this.scriptTagHolder.uniqueCallbackIdentifier), e.v = X, this.transportSessionId && (e.s = this.transportSessionId), this.lastSessionId && (e.ls = this.lastSessionId), this.applicationId && (e.p = this.applicationId), this.appCheckToken && (e[ee] = this.appCheckToken), "undefined" != typeof location && location.hostname && Z.test(location.hostname) && (e.r = "f");
                                const t = this.urlFn(e);
                                this.log_("Connecting via long-poll to " + t), this.scriptTagHolder.addTag(t, (() => {}))
                            }))
                    }
                    start() {
                        this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
                    }
                    static forceAllow() {
                        ue.forceAllow_ = !0
                    }
                    static forceDisallow() {
                        ue.forceDisallow_ = !0
                    }
                    static isAvailable() {
                        return !Object(c.y)() && (!!ue.forceAllow_ || !(ue.forceDisallow_ || "undefined" == typeof document || null == document.createElement || "object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" == typeof Windows && "object" == typeof Windows.UI))
                    }
                    markConnectionHealthy() {}
                    shutdown_() {
                        this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
                    }
                    onClosed_() {
                        this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
                    }
                    close() {
                        this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
                    }
                    send(data) {
                        const e = Object(c.H)(data);
                        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                        const t = Object(c.i)(e),
                            n = B(t, 1840);
                        for (let i = 0; i < n.length; i++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, n.length, n[i]), this.curSegmentNum++
                    }
                    addDisconnectPingFrame(e, t) {
                        if (Object(c.y)()) return;
                        this.myDisconnFrame = document.createElement("iframe");
                        const n = {
                            dframe: "t"
                        };
                        n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
                    }
                    incrementIncomingBytes_(e) {
                        const t = Object(c.H)(e).length;
                        this.bytesReceived += t, this.stats_.incrementCounter("bytes_received", t)
                    }
                }
                class de {
                    constructor(e, t, n, r) {
                        if (this.onDisconnect = n, this.urlFn = r, this.outstandingRequests = new Set, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, Object(c.y)()) this.commandCB = e, this.onMessageCB = t;
                        else {
                            this.uniqueCallbackIdentifier = x(), window["pLPCommand" + this.uniqueCallbackIdentifier] = e, window["pRTLPCB" + this.uniqueCallbackIdentifier] = t, this.myIFrame = de.createIFrame_();
                            let script = "";
                            if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, 11)) {
                                script = '<script>document.domain="' + document.domain + '";<\/script>'
                            }
                            const n = "<html><body>" + script + "</body></html>";
                            try {
                                this.myIFrame.doc.open(), this.myIFrame.doc.write(n), this.myIFrame.doc.close()
                            } catch (e) {
                                O("frame writing exception"), e.stack && O(e.stack), O(e)
                            }
                        }
                    }
                    static createIFrame_() {
                        const iframe = document.createElement("iframe");
                        if (iframe.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                        document.body.appendChild(iframe);
                        try {
                            iframe.contentWindow.document || O("No IE domain setting required")
                        } catch (e) {
                            const t = document.domain;
                            iframe.src = "javascript:void((function(){document.open();document.domain='" + t + "';document.close();})())"
                        }
                        return iframe.contentDocument ? iframe.doc = iframe.contentDocument : iframe.contentWindow ? iframe.doc = iframe.contentWindow.document : iframe.document && (iframe.doc = iframe.document), iframe
                    }
                    close() {
                        this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.textContent = "", setTimeout((() => {
                            null !== this.myIFrame && (document.body.removeChild(this.myIFrame), this.myIFrame = null)
                        }), Math.floor(0)));
                        const e = this.onDisconnect;
                        e && (this.onDisconnect = null, e())
                    }
                    startLongPoll(e, t) {
                        for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(););
                    }
                    newRequest_() {
                        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
                            this.currentSerial++;
                            const e = {};
                            e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;
                            let t = this.urlFn(e),
                                n = "",
                                i = 0;
                            for (; this.pendingSegs.length > 0;) {
                                if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break; {
                                    const e = this.pendingSegs.shift();
                                    n = n + "&seg" + i + "=" + e.seg + "&ts" + i + "=" + e.ts + "&d" + i + "=" + e.d, i++
                                }
                            }
                            return t += n, this.addLongPollTag_(t, this.currentSerial), !0
                        }
                        return !1
                    }
                    enqueueSegment(e, t, data) {
                        this.pendingSegs.push({
                            seg: e,
                            ts: t,
                            d: data
                        }), this.alive && this.newRequest_()
                    }
                    addLongPollTag_(e, t) {
                        this.outstandingRequests.add(t);
                        const n = () => {
                                this.outstandingRequests.delete(t), this.newRequest_()
                            },
                            r = setTimeout(n, Math.floor(25e3));
                        this.addTag(e, (() => {
                            clearTimeout(r), n()
                        }))
                    }
                    addTag(e, t) {
                        Object(c.y)() ? this.doNodeLongPoll(e, t) : setTimeout((() => {
                            try {
                                if (!this.sendNewPolls) return;
                                const n = this.myIFrame.doc.createElement("script");
                                n.type = "text/javascript", n.async = !0, n.src = e, n.onload = n.onreadystatechange = function () {
                                    const e = n.readyState;
                                    e && "loaded" !== e && "complete" !== e || (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), t())
                                }, n.onerror = () => {
                                    O("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close()
                                }, this.myIFrame.doc.body.appendChild(n)
                            } catch (e) {}
                        }), Math.floor(1))
                    }
                }
                let fe = null;
                "undefined" != typeof MozWebSocket ? fe = MozWebSocket : "undefined" != typeof WebSocket && (fe = WebSocket);
                class pe {
                    constructor(e, t, n, r, o, c, l) {
                        this.connId = e, this.applicationId = n, this.appCheckToken = r, this.authToken = o, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = P(this.connId), this.stats_ = ce(t), this.connURL = pe.connectionURL_(t, c, l, r, n), this.nodeAdmin = t.nodeAdmin
                    }
                    static connectionURL_(e, t, n, r, o) {
                        const l = {};
                        return l.v = X, !Object(c.y)() && "undefined" != typeof location && location.hostname && Z.test(location.hostname) && (l.r = "f"), t && (l.s = t), n && (l.ls = n), r && (l[ee] = r), o && (l.p = o), ie(e, te, l)
                    }
                    open(t, n) {
                        this.onDisconnect = n, this.onMessage = t, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, v.set("previous_websocket_failure", !0);
                        try {
                            let t;
                            if (Object(c.y)()) {
                                const n = this.nodeAdmin ? "AdminNode" : "Node";
                                t = {
                                    headers: {
                                        "User-Agent": `Firebase/${X}/${f}/${e.platform}/${n}`,
                                        "X-Firebase-GMPID": this.applicationId || ""
                                    }
                                }, this.authToken && (t.headers.Authorization = `Bearer ${this.authToken}`), this.appCheckToken && (t.headers["X-Firebase-AppCheck"] = this.appCheckToken);
                                const r = e.env,
                                    o = 0 === this.connURL.indexOf("wss://") ? r.HTTPS_PROXY || r.https_proxy : r.HTTP_PROXY || r.http_proxy;
                                o && (t.proxy = {
                                    origin: o
                                })
                            }
                            this.mySock = new fe(this.connURL, [], t)
                        } catch (e) {
                            this.log_("Error instantiating WebSocket.");
                            const t = e.message || e.data;
                            return t && this.log_(t), void this.onClosed_()
                        }
                        this.mySock.onopen = () => {
                            this.log_("Websocket connected."), this.everConnected_ = !0
                        }, this.mySock.onclose = () => {
                            this.log_("Websocket connection was disconnected."), this.mySock = null, this.onClosed_()
                        }, this.mySock.onmessage = e => {
                            this.handleIncomingFrame(e)
                        }, this.mySock.onerror = e => {
                            this.log_("WebSocket error.  Closing connection.");
                            const t = e.message || e.data;
                            t && this.log_(t), this.onClosed_()
                        }
                    }
                    start() {}
                    static forceDisallow() {
                        pe.forceDisallow_ = !0
                    }
                    static isAvailable() {
                        let e = !1;
                        if ("undefined" != typeof navigator && navigator.userAgent) {
                            const t = /Android ([0-9]{0,}\.[0-9]{0,})/,
                                n = navigator.userAgent.match(t);
                            n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0)
                        }
                        return !e && null !== fe && !pe.forceDisallow_
                    }
                    static previouslyFailed() {
                        return v.isInMemoryStorage || !0 === v.get("previous_websocket_failure")
                    }
                    markConnectionHealthy() {
                        v.remove("previous_websocket_failure")
                    }
                    appendFrame_(data) {
                        if (this.frames.push(data), this.frames.length === this.totalFrames) {
                            const e = this.frames.join("");
                            this.frames = null;
                            const t = Object(c.B)(e);
                            this.onMessage(t)
                        }
                    }
                    handleNewFrameCount_(e) {
                        this.totalFrames = e, this.frames = []
                    }
                    extractFrameCount_(data) {
                        if (Object(c.f)(null === this.frames, "We already have a frame buffer"), data.length <= 6) {
                            const e = Number(data);
                            if (!isNaN(e)) return this.handleNewFrameCount_(e), null
                        }
                        return this.handleNewFrameCount_(1), data
                    }
                    handleIncomingFrame(e) {
                        if (null === this.mySock) return;
                        const data = e.data;
                        if (this.bytesReceived += data.length, this.stats_.incrementCounter("bytes_received", data.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(data);
                        else {
                            const e = this.extractFrameCount_(data);
                            null !== e && this.appendFrame_(e)
                        }
                    }
                    send(data) {
                        this.resetKeepAlive();
                        const e = Object(c.H)(data);
                        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                        const t = B(e, 16384);
                        t.length > 1 && this.sendString_(String(t.length));
                        for (let i = 0; i < t.length; i++) this.sendString_(t[i])
                    }
                    shutdown_() {
                        this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
                    }
                    onClosed_() {
                        this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
                    }
                    close() {
                        this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
                    }
                    resetKeepAlive() {
                        clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval((() => {
                            this.mySock && this.sendString_("0"), this.resetKeepAlive()
                        }), Math.floor(45e3))
                    }
                    sendString_(e) {
                        try {
                            this.mySock.send(e)
                        } catch (e) {
                            this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
                        }
                    }
                }
                pe.responsesRequiredToBeHealthy = 2, pe.healthyTimeout = 3e4;
                class ge {
                    constructor(e) {
                        this.initTransports_(e)
                    }
                    static get ALL_TRANSPORTS() {
                        return [ue, pe]
                    }
                    static get IS_TRANSPORT_INITIALIZED() {
                        return this.globalTransportInitialized_
                    }
                    initTransports_(e) {
                        const t = pe && pe.isAvailable();
                        let n = t && !pe.previouslyFailed();
                        if (e.webSocketOnly && (t || A("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), n = !0), n) this.transports_ = [pe];
                        else {
                            const e = this.transports_ = [];
                            for (const t of ge.ALL_TRANSPORTS) t && t.isAvailable() && e.push(t);
                            ge.globalTransportInitialized_ = !0
                        }
                    }
                    initialTransport() {
                        if (this.transports_.length > 0) return this.transports_[0];
                        throw new Error("No transports available")
                    }
                    upgradeTransport() {
                        return this.transports_.length > 1 ? this.transports_[1] : null
                    }
                }
                ge.globalTransportInitialized_ = !1;
                class me {
                    constructor(e, t, n, r, o, c, l, h, d, f) {
                        this.id = e, this.repoInfo_ = t, this.applicationId_ = n, this.appCheckToken_ = r, this.authToken_ = o, this.onMessage_ = c, this.onReady_ = l, this.onDisconnect_ = h, this.onKill_ = d, this.lastSessionId = f, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = P("c:" + this.id + ":"), this.transportManager_ = new ge(t), this.log_("Connection created"), this.start_()
                    }
                    start_() {
                        const e = this.transportManager_.initialTransport();
                        this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                        const t = this.connReceiver_(this.conn_),
                            n = this.disconnReceiver_(this.conn_);
                        this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout((() => {
                            this.conn_ && this.conn_.open(t, n)
                        }), Math.floor(0));
                        const r = e.healthyTimeout || 0;
                        r > 0 && (this.healthyTimeout_ = K((() => {
                            this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > 102400 ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > 10240 ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()))
                        }), Math.floor(r)))
                    }
                    nextTransportId_() {
                        return "c:" + this.id + ":" + this.connectionCount++
                    }
                    disconnReceiver_(e) {
                        return t => {
                            e === this.conn_ ? this.onConnectionLost_(t) : e === this.secondaryConn_ ? (this.log_("Secondary connection lost."), this.onSecondaryConnectionLost_()) : this.log_("closing an old connection")
                        }
                    }
                    connReceiver_(e) {
                        return t => {
                            2 !== this.state_ && (e === this.rx_ ? this.onPrimaryMessageReceived_(t) : e === this.secondaryConn_ ? this.onSecondaryMessageReceived_(t) : this.log_("message on old connection"))
                        }
                    }
                    sendRequest(e) {
                        const t = {
                            t: "d",
                            d: e
                        };
                        this.sendData_(t)
                    }
                    tryCleanupConnection() {
                        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
                    }
                    onSecondaryControl_(e) {
                        if ("t" in e) {
                            const t = e.t;
                            "a" === t ? this.upgradeIfSecondaryHealthy_() : "r" === t ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === t && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_())
                        }
                    }
                    onSecondaryMessageReceived_(e) {
                        const t = U("t", e),
                            data = U("d", e);
                        if ("c" === t) this.onSecondaryControl_(data);
                        else {
                            if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
                            this.pendingDataMessages.push(data)
                        }
                    }
                    upgradeIfSecondaryHealthy_() {
                        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                            t: "c",
                            d: {
                                t: "p",
                                d: {}
                            }
                        }))
                    }
                    proceedWithUpgrade_() {
                        this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                            t: "c",
                            d: {
                                t: "a",
                                d: {}
                            }
                        }), this.log_("Ending transmission on primary"), this.conn_.send({
                            t: "c",
                            d: {
                                t: "n",
                                d: {}
                            }
                        }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
                    }
                    onPrimaryMessageReceived_(e) {
                        const t = U("t", e),
                            data = U("d", e);
                        "c" === t ? this.onControl_(data) : "d" === t && this.onDataMessage_(data)
                    }
                    onDataMessage_(e) {
                        this.onPrimaryResponse_(), this.onMessage_(e)
                    }
                    onPrimaryResponse_() {
                        this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
                    }
                    onControl_(e) {
                        const t = U("t", e);
                        if ("d" in e) {
                            const n = e.d;
                            if ("h" === t) {
                                const e = Object.assign({}, n);
                                this.repoInfo_.isUsingEmulator && (e.h = this.repoInfo_.host), this.onHandshake_(e)
                            } else if ("n" === t) {
                                this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                                for (let i = 0; i < this.pendingDataMessages.length; ++i) this.onDataMessage_(this.pendingDataMessages[i]);
                                this.pendingDataMessages = [], this.tryCleanupConnection()
                            } else "s" === t ? this.onConnectionShutdown_(n) : "r" === t ? this.onReset_(n) : "e" === t ? j("Server Error: " + n) : "o" === t ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : j("Unknown control packet command: " + t)
                        }
                    }
                    onHandshake_(e) {
                        const t = e.ts,
                            n = e.v,
                            r = e.h;
                        this.sessionId = e.s, this.repoInfo_.host = r, 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), X !== n && A("Protocol version mismatch detected"), this.tryStartUpgrade_())
                    }
                    tryStartUpgrade_() {
                        const e = this.transportManager_.upgradeTransport();
                        e && this.startUpgrade_(e)
                    }
                    startUpgrade_(e) {
                        this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                        const t = this.connReceiver_(this.secondaryConn_),
                            n = this.disconnReceiver_(this.secondaryConn_);
                        this.secondaryConn_.open(t, n), K((() => {
                            this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close())
                        }), Math.floor(6e4))
                    }
                    onReset_(e) {
                        this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
                    }
                    onConnectionEstablished_(e, t) {
                        this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : K((() => {
                            this.sendPingOnPrimaryIfNecessary_()
                        }), Math.floor(5e3))
                    }
                    sendPingOnPrimaryIfNecessary_() {
                        this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                            t: "c",
                            d: {
                                t: "p",
                                d: {}
                            }
                        }))
                    }
                    onSecondaryConnectionLost_() {
                        const e = this.secondaryConn_;
                        this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close()
                    }
                    onConnectionLost_(e) {
                        this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (v.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
                    }
                    onConnectionShutdown_(e) {
                        this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close()
                    }
                    sendData_(data) {
                        if (1 !== this.state_) throw "Connection is not connected";
                        this.tx_.send(data)
                    }
                    close() {
                        2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
                    }
                    closeConnections_() {
                        this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
                    }
                }
                class ye {
                    put(e, data, t, n) {}
                    merge(e, data, t, n) {}
                    refreshAuthToken(e) {}
                    refreshAppCheckToken(e) {}
                    onDisconnectPut(e, data, t) {}
                    onDisconnectMerge(e, data, t) {}
                    onDisconnectCancel(e, t) {}
                    reportStats(e) {}
                }
                class _e {
                    constructor(e) {
                        this.allowedEvents_ = e, this.listeners_ = {}, Object(c.f)(Array.isArray(e) && e.length > 0, "Requires a non-empty array")
                    }
                    trigger(e, ...t) {
                        if (Array.isArray(this.listeners_[e])) {
                            const n = [...this.listeners_[e]];
                            for (let i = 0; i < n.length; i++) n[i].callback.apply(n[i].context, t)
                        }
                    }
                    on(e, t, n) {
                        this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
                            callback: t,
                            context: n
                        });
                        const r = this.getInitialEvent(e);
                        r && t.apply(n, r)
                    }
                    off(e, t, n) {
                        this.validateEventType_(e);
                        const r = this.listeners_[e] || [];
                        for (let i = 0; i < r.length; i++)
                            if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1)
                    }
                    validateEventType_(e) {
                        Object(c.f)(this.allowedEvents_.find((t => t === e)), "Unknown event: " + e)
                    }
                }
                class ve extends _e {
                    constructor() {
                        super(["online"]), this.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || Object(c.x)() || (window.addEventListener("online", (() => {
                            this.online_ || (this.online_ = !0, this.trigger("online", !0))
                        }), !1), window.addEventListener("offline", (() => {
                            this.online_ && (this.online_ = !1, this.trigger("online", !1))
                        }), !1))
                    }
                    static getInstance() {
                        return new ve
                    }
                    getInitialEvent(e) {
                        return Object(c.f)("online" === e, "Unknown event type: " + e), [this.online_]
                    }
                    currentlyOnline() {
                        return this.online_
                    }
                }
                const be = 32,
                    we = 768;
                class Ce {
                    constructor(e, t) {
                        if (void 0 === t) {
                            this.pieces_ = e.split("/");
                            let t = 0;
                            for (let i = 0; i < this.pieces_.length; i++) this.pieces_[i].length > 0 && (this.pieces_[t] = this.pieces_[i], t++);
                            this.pieces_.length = t, this.pieceNum_ = 0
                        } else this.pieces_ = e, this.pieceNum_ = t
                    }
                    toString() {
                        let e = "";
                        for (let i = this.pieceNum_; i < this.pieces_.length; i++) "" !== this.pieces_[i] && (e += "/" + this.pieces_[i]);
                        return e || "/"
                    }
                }

                function xe() {
                    return new Ce("")
                }

                function Te(path) {
                    return path.pieceNum_ >= path.pieces_.length ? null : path.pieces_[path.pieceNum_]
                }

                function Ee(path) {
                    return path.pieces_.length - path.pieceNum_
                }

                function ke(path) {
                    let e = path.pieceNum_;
                    return e < path.pieces_.length && e++, new Ce(path.pieces_, e)
                }

                function Se(path) {
                    return path.pieceNum_ < path.pieces_.length ? path.pieces_[path.pieces_.length - 1] : null
                }

                function Ie(path, e = 0) {
                    return path.pieces_.slice(path.pieceNum_ + e)
                }

                function Oe(path) {
                    if (path.pieceNum_ >= path.pieces_.length) return null;
                    const e = [];
                    for (let i = path.pieceNum_; i < path.pieces_.length - 1; i++) e.push(path.pieces_[i]);
                    return new Ce(e, 0)
                }

                function Pe(path, e) {
                    const t = [];
                    for (let i = path.pieceNum_; i < path.pieces_.length; i++) t.push(path.pieces_[i]);
                    if (e instanceof Ce)
                        for (let i = e.pieceNum_; i < e.pieces_.length; i++) t.push(e.pieces_[i]);
                    else {
                        const n = e.split("/");
                        for (let i = 0; i < n.length; i++) n[i].length > 0 && t.push(n[i])
                    }
                    return new Ce(t, 0)
                }

                function je(path) {
                    return path.pieceNum_ >= path.pieces_.length
                }

                function Re(e, t) {
                    const n = Te(e),
                        r = Te(t);
                    if (null === n) return t;
                    if (n === r) return Re(ke(e), ke(t));
                    throw new Error("INTERNAL ERROR: innerPath (" + t + ") is not within outerPath (" + e + ")")
                }

                function Ae(path, e) {
                    if (Ee(path) !== Ee(e)) return !1;
                    for (let i = path.pieceNum_, t = e.pieceNum_; i <= path.pieces_.length; i++, t++)
                        if (path.pieces_[i] !== e.pieces_[t]) return !1;
                    return !0
                }

                function Ne(path, e) {
                    let i = path.pieceNum_,
                        t = e.pieceNum_;
                    if (Ee(path) > Ee(e)) return !1;
                    for (; i < path.pieces_.length;) {
                        if (path.pieces_[i] !== e.pieces_[t]) return !1;
                        ++i, ++t
                    }
                    return !0
                }
                class De {
                    constructor(path, e) {
                        this.errorPrefix_ = e, this.parts_ = Ie(path, 0), this.byteLength_ = Math.max(1, this.parts_.length);
                        for (let i = 0; i < this.parts_.length; i++) this.byteLength_ += Object(c.F)(this.parts_[i]);
                        $e(this)
                    }
                }

                function $e(e) {
                    if (e.byteLength_ > we) throw new Error(e.errorPrefix_ + "has a key path longer than " + we + " bytes (" + e.byteLength_ + ").");
                    if (e.parts_.length > be) throw new Error(e.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + be + ") or object contains a cycle " + Le(e))
                }

                function Le(e) {
                    return 0 === e.parts_.length ? "" : "in property '" + e.parts_.join(".") + "'"
                }
                class Me extends _e {
                    constructor() {
                        let e, t;
                        super(["visible"]), "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (t = "visibilitychange", e = "hidden") : void 0 !== document.mozHidden ? (t = "mozvisibilitychange", e = "mozHidden") : void 0 !== document.msHidden ? (t = "msvisibilitychange", e = "msHidden") : void 0 !== document.webkitHidden && (t = "webkitvisibilitychange", e = "webkitHidden")), this.visible_ = !0, t && document.addEventListener(t, (() => {
                            const t = !document[e];
                            t !== this.visible_ && (this.visible_ = t, this.trigger("visible", t))
                        }), !1)
                    }
                    static getInstance() {
                        return new Me
                    }
                    getInitialEvent(e) {
                        return Object(c.f)("visible" === e, "Unknown event type: " + e), [this.visible_]
                    }
                }
                const Ue = 1e3;
                class Fe extends ye {
                    constructor(e, t, n, r, o, l, h, d) {
                        if (super(), this.repoInfo_ = e, this.applicationId_ = t, this.onDataUpdate_ = n, this.onConnectStatus_ = r, this.onServerInfoUpdate_ = o, this.authTokenProvider_ = l, this.appCheckTokenProvider_ = h, this.authOverride_ = d, this.id = Fe.nextPersistentConnectionId_++, this.log_ = P("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = new Map, this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = Ue, this.maxReconnectDelay_ = 3e5, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, d && !Object(c.y)()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                        Me.getInstance().on("visible", this.onVisible_, this), -1 === e.host.indexOf("fblocal") && ve.getInstance().on("online", this.onOnline_, this)
                    }
                    sendRequest(e, body, t) {
                        const n = ++this.requestNumber_,
                            r = {
                                r: n,
                                a: e,
                                b: body
                            };
                        this.log_(Object(c.H)(r)), Object(c.f)(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(r), t && (this.requestCBHash_[n] = t)
                    }
                    get(e) {
                        this.initConnection_();
                        const t = new c.a,
                            n = {
                                action: "g",
                                request: {
                                    p: e._path.toString(),
                                    q: e._queryObject
                                },
                                onComplete: e => {
                                    const n = e.d;
                                    "ok" === e.s ? t.resolve(n) : t.reject(n)
                                }
                            };
                        this.outstandingGets_.push(n), this.outstandingGetCount_++;
                        const r = this.outstandingGets_.length - 1;
                        return this.connected_ && this.sendGet_(r), t.promise
                    }
                    listen(e, t, n, r) {
                        this.initConnection_();
                        const o = e._queryIdentifier,
                            l = e._path.toString();
                        this.log_("Listen called for " + l + " " + o), this.listens.has(l) || this.listens.set(l, new Map), Object(c.f)(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), Object(c.f)(!this.listens.get(l).has(o), "listen() called twice for same path/queryId.");
                        const h = {
                            onComplete: r,
                            hashFn: t,
                            query: e,
                            tag: n
                        };
                        this.listens.get(l).set(o, h), this.connected_ && this.sendListen_(h)
                    }
                    sendGet_(e) {
                        const t = this.outstandingGets_[e];
                        this.sendRequest("g", t.request, (n => {
                            delete this.outstandingGets_[e], this.outstandingGetCount_--, 0 === this.outstandingGetCount_ && (this.outstandingGets_ = []), t.onComplete && t.onComplete(n)
                        }))
                    }
                    sendListen_(e) {
                        const t = e.query,
                            n = t._path.toString(),
                            r = t._queryIdentifier;
                        this.log_("Listen on " + n + " for " + r);
                        const o = {
                            p: n
                        };
                        e.tag && (o.q = t._queryObject, o.t = e.tag), o.h = e.hashFn(), this.sendRequest("q", o, (o => {
                            const c = o.d,
                                l = o.s;
                            Fe.warnOnListenWarnings_(c, t);
                            (this.listens.get(n) && this.listens.get(n).get(r)) === e && (this.log_("listen response", o), "ok" !== l && this.removeListen_(n, r), e.onComplete && e.onComplete(l, c))
                        }))
                    }
                    static warnOnListenWarnings_(e, t) {
                        if (e && "object" == typeof e && Object(c.l)(e, "w")) {
                            const n = Object(c.E)(e, "w");
                            if (Array.isArray(n) && ~n.indexOf("no_index")) {
                                const e = '".indexOn": "' + t._queryParams.getIndex().toString() + '"',
                                    n = t._path.toString();
                                A(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)
                            }
                        }
                    }
                    refreshAuthToken(e) {
                        this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, (() => {})), this.reduceReconnectDelayIfAdminCredential_(e)
                    }
                    reduceReconnectDelayIfAdminCredential_(e) {
                        (e && 40 === e.length || Object(c.t)(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
                    }
                    refreshAppCheckToken(e) {
                        this.appCheckToken_ = e, this.log_("App check token refreshed"), this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, (() => {}))
                    }
                    tryAuth() {
                        if (this.connected_ && this.authToken_) {
                            const e = this.authToken_,
                                t = Object(c.A)(e) ? "auth" : "gauth",
                                n = {
                                    cred: e
                                };
                            null === this.authOverride_ ? n.noauth = !0 : "object" == typeof this.authOverride_ && (n.authvar = this.authOverride_), this.sendRequest(t, n, (t => {
                                const n = t.s,
                                    data = t.d || "error";
                                this.authToken_ === e && ("ok" === n ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(n, data))
                            }))
                        }
                    }
                    tryAppCheck() {
                        this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
                            token: this.appCheckToken_
                        }, (e => {
                            const t = e.s,
                                data = e.d || "error";
                            "ok" === t ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(t, data)
                        }))
                    }
                    unlisten(e, t) {
                        const n = e._path.toString(),
                            r = e._queryIdentifier;
                        this.log_("Unlisten called for " + n + " " + r), Object(c.f)(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query");
                        this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, e._queryObject, t)
                    }
                    sendUnlisten_(e, t, n, r) {
                        this.log_("Unlisten on " + e + " for " + t);
                        const o = {
                            p: e
                        };
                        r && (o.q = n, o.t = r), this.sendRequest("n", o)
                    }
                    onDisconnectPut(e, data, t) {
                        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, data, t) : this.onDisconnectRequestQueue_.push({
                            pathString: e,
                            action: "o",
                            data: data,
                            onComplete: t
                        })
                    }
                    onDisconnectMerge(e, data, t) {
                        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, data, t) : this.onDisconnectRequestQueue_.push({
                            pathString: e,
                            action: "om",
                            data: data,
                            onComplete: t
                        })
                    }
                    onDisconnectCancel(e, t) {
                        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
                            pathString: e,
                            action: "oc",
                            data: null,
                            onComplete: t
                        })
                    }
                    sendOnDisconnect_(e, t, data, n) {
                        const r = {
                            p: t,
                            d: data
                        };
                        this.log_("onDisconnect " + e, r), this.sendRequest(e, r, (e => {
                            n && setTimeout((() => {
                                n(e.s, e.d)
                            }), Math.floor(0))
                        }))
                    }
                    put(e, data, t, n) {
                        this.putInternal("p", e, data, t, n)
                    }
                    merge(e, data, t, n) {
                        this.putInternal("m", e, data, t, n)
                    }
                    putInternal(e, t, data, n, r) {
                        this.initConnection_();
                        const o = {
                            p: t,
                            d: data
                        };
                        void 0 !== r && (o.h = r), this.outstandingPuts_.push({
                            action: e,
                            request: o,
                            onComplete: n
                        }), this.outstandingPutCount_++;
                        const c = this.outstandingPuts_.length - 1;
                        this.connected_ ? this.sendPut_(c) : this.log_("Buffering put: " + t)
                    }
                    sendPut_(e) {
                        const t = this.outstandingPuts_[e].action,
                            n = this.outstandingPuts_[e].request,
                            r = this.outstandingPuts_[e].onComplete;
                        this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(t, n, (n => {
                            this.log_(t + " response", n), delete this.outstandingPuts_[e], this.outstandingPutCount_--, 0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []), r && r(n.s, n.d)
                        }))
                    }
                    reportStats(e) {
                        if (this.connected_) {
                            const t = {
                                c: e
                            };
                            this.log_("reportStats", t), this.sendRequest("s", t, (e => {
                                if ("ok" !== e.s) {
                                    const t = e.d;
                                    this.log_("reportStats", "Error sending stats: " + t)
                                }
                            }))
                        }
                    }
                    onDataMessage_(e) {
                        if ("r" in e) {
                            this.log_("from server: " + Object(c.H)(e));
                            const t = e.r,
                                n = this.requestCBHash_[t];
                            n && (delete this.requestCBHash_[t], n(e.b))
                        } else {
                            if ("error" in e) throw "A server-side error has occurred: " + e.error;
                            "a" in e && this.onDataPush_(e.a, e.b)
                        }
                    }
                    onDataPush_(e, body) {
                        this.log_("handleServerMessage", e, body), "d" === e ? this.onDataUpdate_(body.p, body.d, !1, body.t) : "m" === e ? this.onDataUpdate_(body.p, body.d, !0, body.t) : "c" === e ? this.onListenRevoked_(body.p, body.q) : "ac" === e ? this.onAuthRevoked_(body.s, body.d) : "apc" === e ? this.onAppCheckRevoked_(body.s, body.d) : "sd" === e ? this.onSecurityDebugPacket_(body) : j("Unrecognized action received from server: " + Object(c.H)(e) + "\nAre you using the latest client?")
                    }
                    onReady_(e, t) {
                        this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
                    }
                    scheduleConnect_(e) {
                        Object(c.f)(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout((() => {
                            this.establishConnectionTimer_ = null, this.establishConnection_()
                        }), Math.floor(e))
                    }
                    initConnection_() {
                        !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
                    }
                    onVisible_(e) {
                        e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = Ue, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e
                    }
                    onOnline_(e) {
                        e ? (this.log_("Browser went online."), this.reconnectDelay_ = Ue, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
                    }
                    onRealtimeDisconnect_() {
                        if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
                            if (this.visible_) {
                                if (this.lastConnectionEstablishedTime_) {
                                    (new Date).getTime() - this.lastConnectionEstablishedTime_ > 3e4 && (this.reconnectDelay_ = Ue), this.lastConnectionEstablishedTime_ = null
                                }
                            } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime();
                            const e = (new Date).getTime() - this.lastConnectionAttemptTime_;
                            let t = Math.max(0, this.reconnectDelay_ - e);
                            t = Math.random() * t, this.log_("Trying to reconnect in " + t + "ms"), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)
                        }
                        this.onConnectStatus_(!1)
                    }
                    async establishConnection_() {
                        if (this.shouldReconnect_()) {
                            this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null;
                            const e = this.onDataMessage_.bind(this),
                                t = this.onReady_.bind(this),
                                n = this.onRealtimeDisconnect_.bind(this),
                                r = this.id + ":" + Fe.nextConnectionId_++,
                                o = this.lastSessionId;
                            let l = !1,
                                h = null;
                            const d = function () {
                                    h ? h.close() : (l = !0, n())
                                },
                                f = function (e) {
                                    Object(c.f)(h, "sendRequest call when we're not connected not allowed."), h.sendRequest(e)
                                };
                            this.realtime_ = {
                                close: d,
                                sendRequest: f
                            };
                            const m = this.forceTokenRefresh_;
                            this.forceTokenRefresh_ = !1;
                            try {
                                const [c, d] = await Promise.all([this.authTokenProvider_.getToken(m), this.appCheckTokenProvider_.getToken(m)]);
                                l ? O("getToken() completed but was canceled") : (O("getToken() completed. Creating connection."), this.authToken_ = c && c.accessToken, this.appCheckToken_ = d && d.token, h = new me(r, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, e, t, n, (e => {
                                    A(e + " (" + this.repoInfo_.toString() + ")"), this.interrupt("server_kill")
                                }), o))
                            } catch (e) {
                                this.log_("Failed to get token: " + e), l || (this.repoInfo_.nodeAdmin && A(e), d())
                            }
                        }
                    }
                    interrupt(e) {
                        O("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
                    }
                    resume(e) {
                        O("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Object(c.v)(this.interruptReasons_) && (this.reconnectDelay_ = Ue, this.realtime_ || this.scheduleConnect_(0))
                    }
                    handleTimestamp_(e) {
                        const t = e - (new Date).getTime();
                        this.onServerInfoUpdate_({
                            serverTimeOffset: t
                        })
                    }
                    cancelSentTransactions_() {
                        for (let i = 0; i < this.outstandingPuts_.length; i++) {
                            const e = this.outstandingPuts_[i];
                            e && "h" in e.request && e.queued && (e.onComplete && e.onComplete("disconnect"), delete this.outstandingPuts_[i], this.outstandingPutCount_--)
                        }
                        0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
                    }
                    onListenRevoked_(e, t) {
                        let n;
                        n = t ? t.map((q => F(q))).join("$") : "default";
                        const r = this.removeListen_(e, n);
                        r && r.onComplete && r.onComplete("permission_denied")
                    }
                    removeListen_(e, t) {
                        const n = new Ce(e).toString();
                        let r;
                        if (this.listens.has(n)) {
                            const map = this.listens.get(n);
                            r = map.get(t), map.delete(t), 0 === map.size && this.listens.delete(n)
                        } else r = void 0;
                        return r
                    }
                    onAuthRevoked_(e, t) {
                        O("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= 3 && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
                    }
                    onAppCheckRevoked_(e, t) {
                        O("App check token revoked: " + e + "/" + t), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, "invalid_token" !== e && "permission_denied" !== e || (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= 3 && this.appCheckTokenProvider_.notifyForInvalidToken())
                    }
                    onSecurityDebugPacket_(body) {
                        this.securityDebugCallback_ ? this.securityDebugCallback_(body) : "msg" in body && console.log("FIREBASE: " + body.msg.replace("\n", "\nFIREBASE: "))
                    }
                    restoreState_() {
                        this.tryAuth(), this.tryAppCheck();
                        for (const e of this.listens.values())
                            for (const t of e.values()) this.sendListen_(t);
                        for (let i = 0; i < this.outstandingPuts_.length; i++) this.outstandingPuts_[i] && this.sendPut_(i);
                        for (; this.onDisconnectRequestQueue_.length;) {
                            const e = this.onDisconnectRequestQueue_.shift();
                            this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete)
                        }
                        for (let i = 0; i < this.outstandingGets_.length; i++) this.outstandingGets_[i] && this.sendGet_(i)
                    }
                    sendConnectStats_() {
                        const e = {};
                        let t = "js";
                        Object(c.y)() && (t = this.repoInfo_.nodeAdmin ? "admin_node" : "node"), e["sdk." + t + "." + f.replace(/\./g, "-")] = 1, Object(c.x)() ? e["framework.cordova"] = 1 : Object(c.z)() && (e["framework.reactnative"] = 1), this.reportStats(e)
                    }
                    shouldReconnect_() {
                        const e = ve.getInstance().currentlyOnline();
                        return Object(c.v)(this.interruptReasons_) && e
                    }
                }
                Fe.nextPersistentConnectionId_ = 0, Fe.nextConnectionId_ = 0;
                class Be {
                    constructor(e, t) {
                        this.name = e, this.node = t
                    }
                    static Wrap(e, t) {
                        return new Be(e, t)
                    }
                }
                class qe {
                    getCompare() {
                        return this.compare.bind(this)
                    }
                    indexedValueChanged(e, t) {
                        const n = new Be(D, e),
                            r = new Be(D, t);
                        return 0 !== this.compare(n, r)
                    }
                    minPost() {
                        return Be.MIN
                    }
                }
                let ze;
                class He extends qe {
                    static get __EMPTY_NODE() {
                        return ze
                    }
                    static set __EMPTY_NODE(e) {
                        ze = e
                    }
                    compare(a, b) {
                        return L(a.name, b.name)
                    }
                    isDefinedOn(e) {
                        throw Object(c.g)("KeyIndex.isDefinedOn not expected to be called.")
                    }
                    indexedValueChanged(e, t) {
                        return !1
                    }
                    minPost() {
                        return Be.MIN
                    }
                    maxPost() {
                        return new Be($, ze)
                    }
                    makePost(e, t) {
                        return Object(c.f)("string" == typeof e, "KeyIndex indexValue must always be a string."), new Be(e, ze)
                    }
                    toString() {
                        return ".key"
                    }
                }
                const We = new He;
                class Ye {
                    constructor(e, t, n, r, o = null) {
                        this.isReverse_ = r, this.resultGenerator_ = o, this.nodeStack_ = [];
                        let c = 1;
                        for (; !e.isEmpty();)
                            if (c = t ? n(e.key, t) : 1, r && (c *= -1), c < 0) e = this.isReverse_ ? e.left : e.right;
                            else {
                                if (0 === c) {
                                    this.nodeStack_.push(e);
                                    break
                                }
                                this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left
                            }
                    }
                    getNext() {
                        if (0 === this.nodeStack_.length) return null;
                        let e, t = this.nodeStack_.pop();
                        if (e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                                key: t.key,
                                value: t.value
                            }, this.isReverse_)
                            for (t = t.left; !t.isEmpty();) this.nodeStack_.push(t), t = t.right;
                        else
                            for (t = t.right; !t.isEmpty();) this.nodeStack_.push(t), t = t.left;
                        return e
                    }
                    hasNext() {
                        return this.nodeStack_.length > 0
                    }
                    peek() {
                        if (0 === this.nodeStack_.length) return null;
                        const e = this.nodeStack_[this.nodeStack_.length - 1];
                        return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                            key: e.key,
                            value: e.value
                        }
                    }
                }
                class Ve {
                    constructor(e, t, n, r, o) {
                        this.key = e, this.value = t, this.color = null != n ? n : Ve.RED, this.left = null != r ? r : Ke.EMPTY_NODE, this.right = null != o ? o : Ke.EMPTY_NODE
                    }
                    copy(e, t, n, r, o) {
                        return new Ve(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != o ? o : this.right)
                    }
                    count() {
                        return this.left.count() + 1 + this.right.count()
                    }
                    isEmpty() {
                        return !1
                    }
                    inorderTraversal(e) {
                        return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e)
                    }
                    reverseTraversal(e) {
                        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
                    }
                    min_() {
                        return this.left.isEmpty() ? this : this.left.min_()
                    }
                    minKey() {
                        return this.min_().key
                    }
                    maxKey() {
                        return this.right.isEmpty() ? this.key : this.right.maxKey()
                    }
                    insert(e, t, n) {
                        let r = this;
                        const o = n(e, r.key);
                        return r = o < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === o ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp_()
                    }
                    removeMin_() {
                        if (this.left.isEmpty()) return Ke.EMPTY_NODE;
                        let e = this;
                        return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), e = e.copy(null, null, null, e.left.removeMin_(), null), e.fixUp_()
                    }
                    remove(e, t) {
                        let n, r;
                        if (n = this, t(e, n.key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(e, t), null);
                        else {
                            if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === t(e, n.key)) {
                                if (n.right.isEmpty()) return Ke.EMPTY_NODE;
                                r = n.right.min_(), n = n.copy(r.key, r.value, null, null, n.right.removeMin_())
                            }
                            n = n.copy(null, null, null, null, n.right.remove(e, t))
                        }
                        return n.fixUp_()
                    }
                    isRed_() {
                        return this.color
                    }
                    fixUp_() {
                        let e = this;
                        return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e
                    }
                    moveRedLeft_() {
                        let e = this.colorFlip_();
                        return e.right.left.isRed_() && (e = e.copy(null, null, null, null, e.right.rotateRight_()), e = e.rotateLeft_(), e = e.colorFlip_()), e
                    }
                    moveRedRight_() {
                        let e = this.colorFlip_();
                        return e.left.left.isRed_() && (e = e.rotateRight_(), e = e.colorFlip_()), e
                    }
                    rotateLeft_() {
                        const e = this.copy(null, null, Ve.RED, null, this.right.left);
                        return this.right.copy(null, null, this.color, e, null)
                    }
                    rotateRight_() {
                        const e = this.copy(null, null, Ve.RED, this.left.right, null);
                        return this.left.copy(null, null, this.color, null, e)
                    }
                    colorFlip_() {
                        const e = this.left.copy(null, null, !this.left.color, null, null),
                            t = this.right.copy(null, null, !this.right.color, null, null);
                        return this.copy(null, null, !this.color, e, t)
                    }
                    checkMaxDepth_() {
                        const e = this.check_();
                        return Math.pow(2, e) <= this.count() + 1
                    }
                    check_() {
                        if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
                        if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
                        const e = this.left.check_();
                        if (e !== this.right.check_()) throw new Error("Black depths differ");
                        return e + (this.isRed_() ? 0 : 1)
                    }
                }
                Ve.RED = !0, Ve.BLACK = !1;
                class Ke {
                    constructor(e, t = Ke.EMPTY_NODE) {
                        this.comparator_ = e, this.root_ = t
                    }
                    insert(e, t) {
                        return new Ke(this.comparator_, this.root_.insert(e, t, this.comparator_).copy(null, null, Ve.BLACK, null, null))
                    }
                    remove(e) {
                        return new Ke(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, Ve.BLACK, null, null))
                    }
                    get(e) {
                        let t, n = this.root_;
                        for (; !n.isEmpty();) {
                            if (t = this.comparator_(e, n.key), 0 === t) return n.value;
                            t < 0 ? n = n.left : t > 0 && (n = n.right)
                        }
                        return null
                    }
                    getPredecessorKey(e) {
                        let t, n = this.root_,
                            r = null;
                        for (; !n.isEmpty();) {
                            if (t = this.comparator_(e, n.key), 0 === t) {
                                if (n.left.isEmpty()) return r ? r.key : null;
                                for (n = n.left; !n.right.isEmpty();) n = n.right;
                                return n.key
                            }
                            t < 0 ? n = n.left : t > 0 && (r = n, n = n.right)
                        }
                        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
                    }
                    isEmpty() {
                        return this.root_.isEmpty()
                    }
                    count() {
                        return this.root_.count()
                    }
                    minKey() {
                        return this.root_.minKey()
                    }
                    maxKey() {
                        return this.root_.maxKey()
                    }
                    inorderTraversal(e) {
                        return this.root_.inorderTraversal(e)
                    }
                    reverseTraversal(e) {
                        return this.root_.reverseTraversal(e)
                    }
                    getIterator(e) {
                        return new Ye(this.root_, null, this.comparator_, !1, e)
                    }
                    getIteratorFrom(e, t) {
                        return new Ye(this.root_, e, this.comparator_, !1, t)
                    }
                    getReverseIteratorFrom(e, t) {
                        return new Ye(this.root_, e, this.comparator_, !0, t)
                    }
                    getReverseIterator(e) {
                        return new Ye(this.root_, null, this.comparator_, !0, e)
                    }
                }

                function Ge(e, t) {
                    return L(e.name, t.name)
                }

                function Je(e, t) {
                    return L(e, t)
                }
                let Qe;
                Ke.EMPTY_NODE = new class {
                    copy(e, t, n, r, o) {
                        return this
                    }
                    insert(e, t, n) {
                        return new Ve(e, t, null)
                    }
                    remove(e, t) {
                        return this
                    }
                    count() {
                        return 0
                    }
                    isEmpty() {
                        return !0
                    }
                    inorderTraversal(e) {
                        return !1
                    }
                    reverseTraversal(e) {
                        return !1
                    }
                    minKey() {
                        return null
                    }
                    maxKey() {
                        return null
                    }
                    check_() {
                        return 0
                    }
                    isRed_() {
                        return !1
                    }
                };
                const Xe = function (e) {
                        return "number" == typeof e ? "number:" + H(e) : "string:" + e
                    },
                    Ze = function (e) {
                        if (e.isLeafNode()) {
                            const t = e.val();
                            Object(c.f)("string" == typeof t || "number" == typeof t || "object" == typeof t && Object(c.l)(t, ".sv"), "Priority must be a string or number.")
                        } else Object(c.f)(e === Qe || e.isEmpty(), "priority of unexpected type.");
                        Object(c.f)(e === Qe || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
                    };
                let et, tt, nt;
                class it {
                    constructor(e, t = it.__childrenNodeConstructor.EMPTY_NODE) {
                        this.value_ = e, this.priorityNode_ = t, this.lazyHash_ = null, Object(c.f)(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), Ze(this.priorityNode_)
                    }
                    static set __childrenNodeConstructor(e) {
                        et = e
                    }
                    static get __childrenNodeConstructor() {
                        return et
                    }
                    isLeafNode() {
                        return !0
                    }
                    getPriority() {
                        return this.priorityNode_
                    }
                    updatePriority(e) {
                        return new it(this.value_, e)
                    }
                    getImmediateChild(e) {
                        return ".priority" === e ? this.priorityNode_ : it.__childrenNodeConstructor.EMPTY_NODE
                    }
                    getChild(path) {
                        return je(path) ? this : ".priority" === Te(path) ? this.priorityNode_ : it.__childrenNodeConstructor.EMPTY_NODE
                    }
                    hasChild() {
                        return !1
                    }
                    getPredecessorChildName(e, t) {
                        return null
                    }
                    updateImmediateChild(e, t) {
                        return ".priority" === e ? this.updatePriority(t) : t.isEmpty() && ".priority" !== e ? this : it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, t).updatePriority(this.priorityNode_)
                    }
                    updateChild(path, e) {
                        const t = Te(path);
                        return null === t ? e : e.isEmpty() && ".priority" !== t ? this : (Object(c.f)(".priority" !== t || 1 === Ee(path), ".priority must be the last token in a path"), this.updateImmediateChild(t, it.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(path), e)))
                    }
                    isEmpty() {
                        return !1
                    }
                    numChildren() {
                        return 0
                    }
                    forEachChild(e, t) {
                        return !1
                    }
                    val(e) {
                        return e && !this.getPriority().isEmpty() ? {
                            ".value": this.getValue(),
                            ".priority": this.getPriority().val()
                        } : this.getValue()
                    }
                    hash() {
                        if (null === this.lazyHash_) {
                            let e = "";
                            this.priorityNode_.isEmpty() || (e += "priority:" + Xe(this.priorityNode_.val()) + ":");
                            const t = typeof this.value_;
                            e += t + ":", e += "number" === t ? H(this.value_) : this.value_, this.lazyHash_ = T(e)
                        }
                        return this.lazyHash_
                    }
                    getValue() {
                        return this.value_
                    }
                    compareTo(e) {
                        return e === it.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof it.__childrenNodeConstructor ? -1 : (Object(c.f)(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e))
                    }
                    compareToLeafNode_(e) {
                        const t = typeof e.value_,
                            n = typeof this.value_,
                            r = it.VALUE_TYPE_ORDER.indexOf(t),
                            o = it.VALUE_TYPE_ORDER.indexOf(n);
                        return Object(c.f)(r >= 0, "Unknown leaf type: " + t), Object(c.f)(o >= 0, "Unknown leaf type: " + n), r === o ? "object" === n ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : o - r
                    }
                    withIndex() {
                        return this
                    }
                    isIndexed() {
                        return !0
                    }
                    equals(e) {
                        if (e === this) return !0;
                        if (e.isLeafNode()) {
                            const t = e;
                            return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
                        }
                        return !1
                    }
                }
                it.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
                const st = new class extends qe {
                        compare(a, b) {
                            const e = a.node.getPriority(),
                                t = b.node.getPriority(),
                                n = e.compareTo(t);
                            return 0 === n ? L(a.name, b.name) : n
                        }
                        isDefinedOn(e) {
                            return !e.getPriority().isEmpty()
                        }
                        indexedValueChanged(e, t) {
                            return !e.getPriority().equals(t.getPriority())
                        }
                        minPost() {
                            return Be.MIN
                        }
                        maxPost() {
                            return new Be($, new it("[PRIORITY-POST]", nt))
                        }
                        makePost(e, t) {
                            const n = tt(e);
                            return new Be(t, new it("[PRIORITY-POST]", n))
                        }
                        toString() {
                            return ".priority"
                        }
                    },
                    ot = Math.log(2);
                class at {
                    constructor(e) {
                        var t;
                        this.count = (t = e + 1, parseInt(Math.log(t) / ot, 10)), this.current_ = this.count - 1;
                        const mask = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
                        var n;
                        this.bits_ = e + 1 & mask
                    }
                    nextBitIsOne() {
                        const e = !(this.bits_ & 1 << this.current_);
                        return this.current_--, e
                    }
                }
                const ct = function (e, t, n, r) {
                    e.sort(t);
                    const o = function (t, r) {
                            const c = r - t;
                            let l, h;
                            if (0 === c) return null;
                            if (1 === c) return l = e[t], h = n ? n(l) : l, new Ve(h, l.node, Ve.BLACK, null, null); {
                                const d = parseInt(c / 2, 10) + t,
                                    f = o(t, d),
                                    m = o(d + 1, r);
                                return l = e[d], h = n ? n(l) : l, new Ve(h, l.node, Ve.BLACK, f, m)
                            }
                        },
                        c = function (t) {
                            let r = null,
                                c = null,
                                l = e.length;
                            const h = function (t, r) {
                                    const c = l - t,
                                        h = l;
                                    l -= t;
                                    const f = o(c + 1, h),
                                        m = e[c],
                                        y = n ? n(m) : m;
                                    d(new Ve(y, m.node, r, null, f))
                                },
                                d = function (e) {
                                    r ? (r.left = e, r = e) : (c = e, r = e)
                                };
                            for (let i = 0; i < t.count; ++i) {
                                const e = t.nextBitIsOne(),
                                    n = Math.pow(2, t.count - (i + 1));
                                e ? h(n, Ve.BLACK) : (h(n, Ve.BLACK), h(n, Ve.RED))
                            }
                            return c
                        }(new at(e.length));
                    return new Ke(r || t, c)
                };
                let lt;
                const ht = {};
                class ut {
                    constructor(e, t) {
                        this.indexes_ = e, this.indexSet_ = t
                    }
                    static get Default() {
                        return Object(c.f)(ht && st, "ChildrenNode.ts has not been loaded"), lt = lt || new ut({
                            ".priority": ht
                        }, {
                            ".priority": st
                        }), lt
                    }
                    get(e) {
                        const t = Object(c.E)(this.indexes_, e);
                        if (!t) throw new Error("No index defined for " + e);
                        return t instanceof Ke ? t : null
                    }
                    hasIndex(e) {
                        return Object(c.l)(this.indexSet_, e.toString())
                    }
                    addIndex(e, t) {
                        Object(c.f)(e !== We, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                        const n = [];
                        let r = !1;
                        const o = t.getIterator(Be.Wrap);
                        let l, h = o.getNext();
                        for (; h;) r = r || e.isDefinedOn(h.node), n.push(h), h = o.getNext();
                        l = r ? ct(n, e.getCompare()) : ht;
                        const d = e.toString(),
                            f = Object.assign({}, this.indexSet_);
                        f[d] = e;
                        const m = Object.assign({}, this.indexes_);
                        return m[d] = l, new ut(m, f)
                    }
                    addToIndexes(e, t) {
                        const n = Object(c.C)(this.indexes_, ((n, r) => {
                            const o = Object(c.E)(this.indexSet_, r);
                            if (Object(c.f)(o, "Missing index implementation for " + r), n === ht) {
                                if (o.isDefinedOn(e.node)) {
                                    const n = [],
                                        r = t.getIterator(Be.Wrap);
                                    let c = r.getNext();
                                    for (; c;) c.name !== e.name && n.push(c), c = r.getNext();
                                    return n.push(e), ct(n, o.getCompare())
                                }
                                return ht
                            } {
                                const r = t.get(e.name);
                                let o = n;
                                return r && (o = o.remove(new Be(e.name, r))), o.insert(e, e.node)
                            }
                        }));
                        return new ut(n, this.indexSet_)
                    }
                    removeFromIndexes(e, t) {
                        const n = Object(c.C)(this.indexes_, (n => {
                            if (n === ht) return n; {
                                const r = t.get(e.name);
                                return r ? n.remove(new Be(e.name, r)) : n
                            }
                        }));
                        return new ut(n, this.indexSet_)
                    }
                }
                let ft;
                class pt {
                    constructor(e, t, n) {
                        this.children_ = e, this.priorityNode_ = t, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && Ze(this.priorityNode_), this.children_.isEmpty() && Object(c.f)(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
                    }
                    static get EMPTY_NODE() {
                        return ft || (ft = new pt(new Ke(Je), null, ut.Default))
                    }
                    isLeafNode() {
                        return !1
                    }
                    getPriority() {
                        return this.priorityNode_ || ft
                    }
                    updatePriority(e) {
                        return this.children_.isEmpty() ? this : new pt(this.children_, e, this.indexMap_)
                    }
                    getImmediateChild(e) {
                        if (".priority" === e) return this.getPriority(); {
                            const t = this.children_.get(e);
                            return null === t ? ft : t
                        }
                    }
                    getChild(path) {
                        const e = Te(path);
                        return null === e ? this : this.getImmediateChild(e).getChild(ke(path))
                    }
                    hasChild(e) {
                        return null !== this.children_.get(e)
                    }
                    updateImmediateChild(e, t) {
                        if (Object(c.f)(t, "We should always be passing snapshot nodes"), ".priority" === e) return this.updatePriority(t); {
                            const n = new Be(e, t);
                            let r, o;
                            t.isEmpty() ? (r = this.children_.remove(e), o = this.indexMap_.removeFromIndexes(n, this.children_)) : (r = this.children_.insert(e, t), o = this.indexMap_.addToIndexes(n, this.children_));
                            const c = r.isEmpty() ? ft : this.priorityNode_;
                            return new pt(r, c, o)
                        }
                    }
                    updateChild(path, e) {
                        const t = Te(path);
                        if (null === t) return e; {
                            Object(c.f)(".priority" !== Te(path) || 1 === Ee(path), ".priority must be the last token in a path");
                            const n = this.getImmediateChild(t).updateChild(ke(path), e);
                            return this.updateImmediateChild(t, n)
                        }
                    }
                    isEmpty() {
                        return this.children_.isEmpty()
                    }
                    numChildren() {
                        return this.children_.count()
                    }
                    val(e) {
                        if (this.isEmpty()) return null;
                        const t = {};
                        let n = 0,
                            r = 0,
                            o = !0;
                        if (this.forEachChild(st, ((c, l) => {
                                t[c] = l.val(e), n++, o && pt.INTEGER_REGEXP_.test(c) ? r = Math.max(r, Number(c)) : o = !1
                            })), !e && o && r < 2 * n) {
                            const e = [];
                            for (const n in t) e[n] = t[n];
                            return e
                        }
                        return e && !this.getPriority().isEmpty() && (t[".priority"] = this.getPriority().val()), t
                    }
                    hash() {
                        if (null === this.lazyHash_) {
                            let e = "";
                            this.getPriority().isEmpty() || (e += "priority:" + Xe(this.getPriority().val()) + ":"), this.forEachChild(st, ((t, n) => {
                                const r = n.hash();
                                "" !== r && (e += ":" + t + ":" + r)
                            })), this.lazyHash_ = "" === e ? "" : T(e)
                        }
                        return this.lazyHash_
                    }
                    getPredecessorChildName(e, t, n) {
                        const r = this.resolveIndex_(n);
                        if (r) {
                            const n = r.getPredecessorKey(new Be(e, t));
                            return n ? n.name : null
                        }
                        return this.children_.getPredecessorKey(e)
                    }
                    getFirstChildName(e) {
                        const t = this.resolveIndex_(e);
                        if (t) {
                            const e = t.minKey();
                            return e && e.name
                        }
                        return this.children_.minKey()
                    }
                    getFirstChild(e) {
                        const t = this.getFirstChildName(e);
                        return t ? new Be(t, this.children_.get(t)) : null
                    }
                    getLastChildName(e) {
                        const t = this.resolveIndex_(e);
                        if (t) {
                            const e = t.maxKey();
                            return e && e.name
                        }
                        return this.children_.maxKey()
                    }
                    getLastChild(e) {
                        const t = this.getLastChildName(e);
                        return t ? new Be(t, this.children_.get(t)) : null
                    }
                    forEachChild(e, t) {
                        const n = this.resolveIndex_(e);
                        return n ? n.inorderTraversal((e => t(e.name, e.node))) : this.children_.inorderTraversal(t)
                    }
                    getIterator(e) {
                        return this.getIteratorFrom(e.minPost(), e)
                    }
                    getIteratorFrom(e, t) {
                        const n = this.resolveIndex_(t);
                        if (n) return n.getIteratorFrom(e, (e => e)); {
                            const n = this.children_.getIteratorFrom(e.name, Be.Wrap);
                            let r = n.peek();
                            for (; null != r && t.compare(r, e) < 0;) n.getNext(), r = n.peek();
                            return n
                        }
                    }
                    getReverseIterator(e) {
                        return this.getReverseIteratorFrom(e.maxPost(), e)
                    }
                    getReverseIteratorFrom(e, t) {
                        const n = this.resolveIndex_(t);
                        if (n) return n.getReverseIteratorFrom(e, (e => e)); {
                            const n = this.children_.getReverseIteratorFrom(e.name, Be.Wrap);
                            let r = n.peek();
                            for (; null != r && t.compare(r, e) > 0;) n.getNext(), r = n.peek();
                            return n
                        }
                    }
                    compareTo(e) {
                        return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === gt ? -1 : 0
                    }
                    withIndex(e) {
                        if (e === We || this.indexMap_.hasIndex(e)) return this; {
                            const t = this.indexMap_.addIndex(e, this.children_);
                            return new pt(this.children_, this.priorityNode_, t)
                        }
                    }
                    isIndexed(e) {
                        return e === We || this.indexMap_.hasIndex(e)
                    }
                    equals(e) {
                        if (e === this) return !0;
                        if (e.isLeafNode()) return !1; {
                            const t = e;
                            if (this.getPriority().equals(t.getPriority())) {
                                if (this.children_.count() === t.children_.count()) {
                                    const e = this.getIterator(st),
                                        n = t.getIterator(st);
                                    let r = e.getNext(),
                                        o = n.getNext();
                                    for (; r && o;) {
                                        if (r.name !== o.name || !r.node.equals(o.node)) return !1;
                                        r = e.getNext(), o = n.getNext()
                                    }
                                    return null === r && null === o
                                }
                                return !1
                            }
                            return !1
                        }
                    }
                    resolveIndex_(e) {
                        return e === We ? null : this.indexMap_.get(e.toString())
                    }
                }
                pt.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
                const gt = new class extends pt {
                    constructor() {
                        super(new Ke(Je), pt.EMPTY_NODE, ut.Default)
                    }
                    compareTo(e) {
                        return e === this ? 0 : 1
                    }
                    equals(e) {
                        return e === this
                    }
                    getPriority() {
                        return this
                    }
                    getImmediateChild(e) {
                        return pt.EMPTY_NODE
                    }
                    isEmpty() {
                        return !1
                    }
                };
                Object.defineProperties(Be, {
                        MIN: {
                            value: new Be(D, pt.EMPTY_NODE)
                        },
                        MAX: {
                            value: new Be($, gt)
                        }
                    }), He.__EMPTY_NODE = pt.EMPTY_NODE, it.__childrenNodeConstructor = pt, Qe = gt,
                    function (e) {
                        nt = e
                    }(gt);
                const mt = !0;

                function yt(e, t = null) {
                    if (null === e) return pt.EMPTY_NODE;
                    if ("object" == typeof e && ".priority" in e && (t = e[".priority"]), Object(c.f)(null === t || "string" == typeof t || "number" == typeof t || "object" == typeof t && ".sv" in t, "Invalid priority type found: " + typeof t), "object" == typeof e && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" != typeof e || ".sv" in e) {
                        return new it(e, yt(t))
                    }
                    if (e instanceof Array || !mt) {
                        let n = pt.EMPTY_NODE;
                        return z(e, ((t, r) => {
                            if (Object(c.l)(e, t) && "." !== t.substring(0, 1)) {
                                const e = yt(r);
                                !e.isLeafNode() && e.isEmpty() || (n = n.updateImmediateChild(t, e))
                            }
                        })), n.updatePriority(yt(t))
                    } {
                        const n = [];
                        let r = !1;
                        if (z(e, ((e, t) => {
                                if ("." !== e.substring(0, 1)) {
                                    const o = yt(t);
                                    o.isEmpty() || (r = r || !o.getPriority().isEmpty(), n.push(new Be(e, o)))
                                }
                            })), 0 === n.length) return pt.EMPTY_NODE;
                        const o = ct(n, Ge, (e => e.name), Je);
                        if (r) {
                            const e = ct(n, st.getCompare());
                            return new pt(o, yt(t), new ut({
                                ".priority": e
                            }, {
                                ".priority": st
                            }))
                        }
                        return new pt(o, yt(t), ut.Default)
                    }
                }! function (e) {
                    tt = e
                }(yt);
                class _t extends qe {
                    constructor(e) {
                        super(), this.indexPath_ = e, Object(c.f)(!je(e) && ".priority" !== Te(e), "Can't create PathIndex with empty path or .priority key")
                    }
                    extractChild(e) {
                        return e.getChild(this.indexPath_)
                    }
                    isDefinedOn(e) {
                        return !e.getChild(this.indexPath_).isEmpty()
                    }
                    compare(a, b) {
                        const e = this.extractChild(a.node),
                            t = this.extractChild(b.node),
                            n = e.compareTo(t);
                        return 0 === n ? L(a.name, b.name) : n
                    }
                    makePost(e, t) {
                        const n = yt(e),
                            r = pt.EMPTY_NODE.updateChild(this.indexPath_, n);
                        return new Be(t, r)
                    }
                    maxPost() {
                        const e = pt.EMPTY_NODE.updateChild(this.indexPath_, gt);
                        return new Be($, e)
                    }
                    toString() {
                        return Ie(this.indexPath_, 0).join("/")
                    }
                }
                const vt = new class extends qe {
                    compare(a, b) {
                        const e = a.node.compareTo(b.node);
                        return 0 === e ? L(a.name, b.name) : e
                    }
                    isDefinedOn(e) {
                        return !0
                    }
                    indexedValueChanged(e, t) {
                        return !e.equals(t)
                    }
                    minPost() {
                        return Be.MIN
                    }
                    maxPost() {
                        return Be.MAX
                    }
                    makePost(e, t) {
                        const n = yt(e);
                        return new Be(t, n)
                    }
                    toString() {
                        return ".value"
                    }
                };

                function bt(e) {
                    return {
                        type: "value",
                        snapshotNode: e
                    }
                }

                function wt(e, t) {
                    return {
                        type: "child_added",
                        snapshotNode: t,
                        childName: e
                    }
                }

                function Ct(e, t) {
                    return {
                        type: "child_removed",
                        snapshotNode: t,
                        childName: e
                    }
                }

                function xt(e, t, n) {
                    return {
                        type: "child_changed",
                        snapshotNode: t,
                        childName: e,
                        oldSnap: n
                    }
                }
                class Tt {
                    constructor(e) {
                        this.index_ = e
                    }
                    updateChild(e, t, n, r, source, o) {
                        Object(c.f)(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                        const l = e.getImmediateChild(t);
                        return l.getChild(r).equals(n.getChild(r)) && l.isEmpty() === n.isEmpty() ? e : (null != o && (n.isEmpty() ? e.hasChild(t) ? o.trackChildChange(Ct(t, l)) : Object(c.f)(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : l.isEmpty() ? o.trackChildChange(wt(t, n)) : o.trackChildChange(xt(t, n, l))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.index_))
                    }
                    updateFullNode(e, t, n) {
                        return null != n && (e.isLeafNode() || e.forEachChild(st, ((e, r) => {
                            t.hasChild(e) || n.trackChildChange(Ct(e, r))
                        })), t.isLeafNode() || t.forEachChild(st, ((t, r) => {
                            if (e.hasChild(t)) {
                                const o = e.getImmediateChild(t);
                                o.equals(r) || n.trackChildChange(xt(t, r, o))
                            } else n.trackChildChange(wt(t, r))
                        }))), t.withIndex(this.index_)
                    }
                    updatePriority(e, t) {
                        return e.isEmpty() ? pt.EMPTY_NODE : e.updatePriority(t)
                    }
                    filtersNodes() {
                        return !1
                    }
                    getIndexedFilter() {
                        return this
                    }
                    getIndex() {
                        return this.index_
                    }
                }
                class Et {
                    constructor(e) {
                        this.indexedFilter_ = new Tt(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = Et.getStartPost_(e), this.endPost_ = Et.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_
                    }
                    getStartPost() {
                        return this.startPost_
                    }
                    getEndPost() {
                        return this.endPost_
                    }
                    matches(e) {
                        const t = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), e) <= 0 : this.index_.compare(this.getStartPost(), e) < 0,
                            n = this.endIsInclusive_ ? this.index_.compare(e, this.getEndPost()) <= 0 : this.index_.compare(e, this.getEndPost()) < 0;
                        return t && n
                    }
                    updateChild(e, t, n, r, source, o) {
                        return this.matches(new Be(t, n)) || (n = pt.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, r, source, o)
                    }
                    updateFullNode(e, t, n) {
                        t.isLeafNode() && (t = pt.EMPTY_NODE);
                        let r = t.withIndex(this.index_);
                        r = r.updatePriority(pt.EMPTY_NODE);
                        const o = this;
                        return t.forEachChild(st, ((e, t) => {
                            o.matches(new Be(e, t)) || (r = r.updateImmediateChild(e, pt.EMPTY_NODE))
                        })), this.indexedFilter_.updateFullNode(e, r, n)
                    }
                    updatePriority(e, t) {
                        return e
                    }
                    filtersNodes() {
                        return !0
                    }
                    getIndexedFilter() {
                        return this.indexedFilter_
                    }
                    getIndex() {
                        return this.index_
                    }
                    static getStartPost_(e) {
                        if (e.hasStart()) {
                            const t = e.getIndexStartName();
                            return e.getIndex().makePost(e.getIndexStartValue(), t)
                        }
                        return e.getIndex().minPost()
                    }
                    static getEndPost_(e) {
                        if (e.hasEnd()) {
                            const t = e.getIndexEndName();
                            return e.getIndex().makePost(e.getIndexEndValue(), t)
                        }
                        return e.getIndex().maxPost()
                    }
                }
                class kt {
                    constructor(e) {
                        this.withinDirectionalStart = e => this.reverse_ ? this.withinEndPost(e) : this.withinStartPost(e), this.withinDirectionalEnd = e => this.reverse_ ? this.withinStartPost(e) : this.withinEndPost(e), this.withinStartPost = e => {
                            const t = this.index_.compare(this.rangedFilter_.getStartPost(), e);
                            return this.startIsInclusive_ ? t <= 0 : t < 0
                        }, this.withinEndPost = e => {
                            const t = this.index_.compare(e, this.rangedFilter_.getEndPost());
                            return this.endIsInclusive_ ? t <= 0 : t < 0
                        }, this.rangedFilter_ = new Et(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_
                    }
                    updateChild(e, t, n, r, source, o) {
                        return this.rangedFilter_.matches(new Be(t, n)) || (n = pt.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, r, source, o) : this.fullLimitUpdateChild_(e, t, n, source, o)
                    }
                    updateFullNode(e, t, n) {
                        let r;
                        if (t.isLeafNode() || t.isEmpty()) r = pt.EMPTY_NODE.withIndex(this.index_);
                        else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
                            let e;
                            r = pt.EMPTY_NODE.withIndex(this.index_), e = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                            let n = 0;
                            for (; e.hasNext() && n < this.limit_;) {
                                const t = e.getNext();
                                if (this.withinDirectionalStart(t)) {
                                    if (!this.withinDirectionalEnd(t)) break;
                                    r = r.updateImmediateChild(t.name, t.node), n++
                                }
                            }
                        } else {
                            let e;
                            r = t.withIndex(this.index_), r = r.updatePriority(pt.EMPTY_NODE), e = this.reverse_ ? r.getReverseIterator(this.index_) : r.getIterator(this.index_);
                            let n = 0;
                            for (; e.hasNext();) {
                                const t = e.getNext();
                                n < this.limit_ && this.withinDirectionalStart(t) && this.withinDirectionalEnd(t) ? n++ : r = r.updateImmediateChild(t.name, pt.EMPTY_NODE)
                            }
                        }
                        return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n)
                    }
                    updatePriority(e, t) {
                        return e
                    }
                    filtersNodes() {
                        return !0
                    }
                    getIndexedFilter() {
                        return this.rangedFilter_.getIndexedFilter()
                    }
                    getIndex() {
                        return this.index_
                    }
                    fullLimitUpdateChild_(e, t, n, source, r) {
                        let o;
                        if (this.reverse_) {
                            const e = this.index_.getCompare();
                            o = (a, b) => e(b, a)
                        } else o = this.index_.getCompare();
                        const l = e;
                        Object(c.f)(l.numChildren() === this.limit_, "");
                        const h = new Be(t, n),
                            d = this.reverse_ ? l.getFirstChild(this.index_) : l.getLastChild(this.index_),
                            f = this.rangedFilter_.matches(h);
                        if (l.hasChild(t)) {
                            const e = l.getImmediateChild(t);
                            let c = source.getChildAfterChild(this.index_, d, this.reverse_);
                            for (; null != c && (c.name === t || l.hasChild(c.name));) c = source.getChildAfterChild(this.index_, c, this.reverse_);
                            const m = null == c ? 1 : o(c, h);
                            if (f && !n.isEmpty() && m >= 0) return null != r && r.trackChildChange(xt(t, n, e)), l.updateImmediateChild(t, n); {
                                null != r && r.trackChildChange(Ct(t, e));
                                const n = l.updateImmediateChild(t, pt.EMPTY_NODE);
                                return null != c && this.rangedFilter_.matches(c) ? (null != r && r.trackChildChange(wt(c.name, c.node)), n.updateImmediateChild(c.name, c.node)) : n
                            }
                        }
                        return n.isEmpty() ? e : f && o(d, h) >= 0 ? (null != r && (r.trackChildChange(Ct(d.name, d.node)), r.trackChildChange(wt(t, n))), l.updateImmediateChild(t, n).updateImmediateChild(d.name, pt.EMPTY_NODE)) : e
                    }
                }
                class St {
                    constructor() {
                        this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = st
                    }
                    hasStart() {
                        return this.startSet_
                    }
                    isViewFromLeft() {
                        return "" === this.viewFrom_ ? this.startSet_ : "l" === this.viewFrom_
                    }
                    getIndexStartValue() {
                        return Object(c.f)(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
                    }
                    getIndexStartName() {
                        return Object(c.f)(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : D
                    }
                    hasEnd() {
                        return this.endSet_
                    }
                    getIndexEndValue() {
                        return Object(c.f)(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
                    }
                    getIndexEndName() {
                        return Object(c.f)(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : $
                    }
                    hasLimit() {
                        return this.limitSet_
                    }
                    hasAnchoredLimit() {
                        return this.limitSet_ && "" !== this.viewFrom_
                    }
                    getLimit() {
                        return Object(c.f)(this.limitSet_, "Only valid if limit has been set"), this.limit_
                    }
                    getIndex() {
                        return this.index_
                    }
                    loadsAllData() {
                        return !(this.startSet_ || this.endSet_ || this.limitSet_)
                    }
                    isDefault() {
                        return this.loadsAllData() && this.index_ === st
                    }
                    copy() {
                        const e = new St;
                        return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e
                    }
                }

                function It(e, t, n) {
                    const r = e.copy();
                    return r.startSet_ = !0, void 0 === t && (t = null), r.indexStartValue_ = t, null != n ? (r.startNameSet_ = !0, r.indexStartName_ = n) : (r.startNameSet_ = !1, r.indexStartName_ = ""), r
                }

                function Ot(e, t) {
                    const n = e.copy();
                    return n.index_ = t, n
                }

                function Pt(e) {
                    const t = {};
                    if (e.isDefault()) return t;
                    let n;
                    if (e.index_ === st ? n = "$priority" : e.index_ === vt ? n = "$value" : e.index_ === We ? n = "$key" : (Object(c.f)(e.index_ instanceof _t, "Unrecognized index type!"), n = e.index_.toString()), t.orderBy = Object(c.H)(n), e.startSet_) {
                        const n = e.startAfterSet_ ? "startAfter" : "startAt";
                        t[n] = Object(c.H)(e.indexStartValue_), e.startNameSet_ && (t[n] += "," + Object(c.H)(e.indexStartName_))
                    }
                    if (e.endSet_) {
                        const n = e.endBeforeSet_ ? "endBefore" : "endAt";
                        t[n] = Object(c.H)(e.indexEndValue_), e.endNameSet_ && (t[n] += "," + Object(c.H)(e.indexEndName_))
                    }
                    return e.limitSet_ && (e.isViewFromLeft() ? t.limitToFirst = e.limit_ : t.limitToLast = e.limit_), t
                }

                function jt(e) {
                    const t = {};
                    if (e.startSet_ && (t.sp = e.indexStartValue_, e.startNameSet_ && (t.sn = e.indexStartName_), t.sin = !e.startAfterSet_), e.endSet_ && (t.ep = e.indexEndValue_, e.endNameSet_ && (t.en = e.indexEndName_), t.ein = !e.endBeforeSet_), e.limitSet_) {
                        t.l = e.limit_;
                        let n = e.viewFrom_;
                        "" === n && (n = e.isViewFromLeft() ? "l" : "r"), t.vf = n
                    }
                    return e.index_ !== st && (t.i = e.index_.toString()), t
                }
                class Rt extends ye {
                    constructor(e, t, n, r) {
                        super(), this.repoInfo_ = e, this.onDataUpdate_ = t, this.authTokenProvider_ = n, this.appCheckTokenProvider_ = r, this.log_ = P("p:rest:"), this.listens_ = {}
                    }
                    reportStats(e) {
                        throw new Error("Method not implemented.")
                    }
                    static getListenId_(e, t) {
                        return void 0 !== t ? "tag$" + t : (Object(c.f)(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString())
                    }
                    listen(e, t, n, r) {
                        const o = e._path.toString();
                        this.log_("Listen called for " + o + " " + e._queryIdentifier);
                        const l = Rt.getListenId_(e, n),
                            h = {};
                        this.listens_[l] = h;
                        const d = Pt(e._queryParams);
                        this.restRequest_(o + ".json", d, ((e, t) => {
                            let data = t;
                            if (404 === e && (data = null, e = null), null === e && this.onDataUpdate_(o, data, !1, n), Object(c.E)(this.listens_, l) === h) {
                                let t;
                                t = e ? 401 === e ? "permission_denied" : "rest_error:" + e : "ok", r(t, null)
                            }
                        }))
                    }
                    unlisten(e, t) {
                        const n = Rt.getListenId_(e, t);
                        delete this.listens_[n]
                    }
                    get(e) {
                        const t = Pt(e._queryParams),
                            n = e._path.toString(),
                            r = new c.a;
                        return this.restRequest_(n + ".json", t, ((e, t) => {
                            let data = t;
                            404 === e && (data = null, e = null), null === e ? (this.onDataUpdate_(n, data, !1, null), r.resolve(data)) : r.reject(new Error(data))
                        })), r.promise
                    }
                    refreshAuthToken(e) {}
                    restRequest_(e, t = {}, n) {
                        return t.format = "export", Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then((([r, o]) => {
                            r && r.accessToken && (t.auth = r.accessToken), o && o.token && (t.ac = o.token);
                            const l = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + Object(c.D)(t);
                            this.log_("Sending REST request for " + l);
                            const h = new XMLHttpRequest;
                            h.onreadystatechange = () => {
                                if (n && 4 === h.readyState) {
                                    this.log_("REST Response for " + l + " received. status:", h.status, "response:", h.responseText);
                                    let e = null;
                                    if (h.status >= 200 && h.status < 300) {
                                        try {
                                            e = Object(c.B)(h.responseText)
                                        } catch (e) {
                                            A("Failed to parse JSON response for " + l + ": " + h.responseText)
                                        }
                                        n(null, e)
                                    } else 401 !== h.status && 404 !== h.status && A("Got unsuccessful REST response for " + l + " Status: " + h.status), n(h.status);
                                    n = null
                                }
                            }, h.open("GET", l, !0), h.send()
                        }))
                    }
                }
                class At {
                    constructor() {
                        this.rootNode_ = pt.EMPTY_NODE
                    }
                    getNode(path) {
                        return this.rootNode_.getChild(path)
                    }
                    updateSnapshot(path, e) {
                        this.rootNode_ = this.rootNode_.updateChild(path, e)
                    }
                }

                function Nt() {
                    return {
                        value: null,
                        children: new Map
                    }
                }

                function Dt(e, path, data) {
                    if (je(path)) e.value = data, e.children.clear();
                    else if (null !== e.value) e.value = e.value.updateChild(path, data);
                    else {
                        const t = Te(path);
                        e.children.has(t) || e.children.set(t, Nt());
                        Dt(e.children.get(t), path = ke(path), data)
                    }
                }

                function $t(e, t, n) {
                    null !== e.value ? n(t, e.value) : function (e, t) {
                        e.children.forEach(((e, n) => {
                            t(n, e)
                        }))
                    }(e, ((e, r) => {
                        $t(r, new Ce(t.toString() + "/" + e), n)
                    }))
                }
                class Lt {
                    constructor(e) {
                        this.collection_ = e, this.last_ = null
                    }
                    get() {
                        const e = this.collection_.get(),
                            t = Object.assign({}, e);
                        return this.last_ && z(this.last_, ((e, n) => {
                            t[e] = t[e] - n
                        })), this.last_ = e, t
                    }
                }
                class Mt {
                    constructor(e, t) {
                        this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Lt(e);
                        const n = 1e4 + 2e4 * Math.random();
                        K(this.reportStats_.bind(this), Math.floor(n))
                    }
                    reportStats_() {
                        const e = this.statsListener_.get(),
                            t = {};
                        let n = !1;
                        z(e, ((e, r) => {
                            r > 0 && Object(c.l)(this.statsToReport_, e) && (t[e] = r, n = !0)
                        })), n && this.server_.reportStats(t), K(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
                    }
                }
                var Ut;

                function Ft(e) {
                    return {
                        fromUser: !1,
                        fromServer: !0,
                        queryId: e,
                        tagged: !0
                    }
                }! function (e) {
                    e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
                }(Ut || (Ut = {}));
                class Bt {
                    constructor(path, e, t) {
                        this.path = path, this.affectedTree = e, this.revert = t, this.type = Ut.ACK_USER_WRITE, this.source = {
                            fromUser: !0,
                            fromServer: !1,
                            queryId: null,
                            tagged: !1
                        }
                    }
                    operationForChild(e) {
                        if (je(this.path)) {
                            if (null != this.affectedTree.value) return Object(c.f)(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this; {
                                const t = this.affectedTree.subtree(new Ce(e));
                                return new Bt(xe(), t, this.revert)
                            }
                        }
                        return Object(c.f)(Te(this.path) === e, "operationForChild called for unrelated child."), new Bt(ke(this.path), this.affectedTree, this.revert)
                    }
                }
                class qt {
                    constructor(source, path) {
                        this.source = source, this.path = path, this.type = Ut.LISTEN_COMPLETE
                    }
                    operationForChild(e) {
                        return je(this.path) ? new qt(this.source, xe()) : new qt(this.source, ke(this.path))
                    }
                }
                class zt {
                    constructor(source, path, e) {
                        this.source = source, this.path = path, this.snap = e, this.type = Ut.OVERWRITE
                    }
                    operationForChild(e) {
                        return je(this.path) ? new zt(this.source, xe(), this.snap.getImmediateChild(e)) : new zt(this.source, ke(this.path), this.snap)
                    }
                }
                class Ht {
                    constructor(source, path, e) {
                        this.source = source, this.path = path, this.children = e, this.type = Ut.MERGE
                    }
                    operationForChild(e) {
                        if (je(this.path)) {
                            const t = this.children.subtree(new Ce(e));
                            return t.isEmpty() ? null : t.value ? new zt(this.source, xe(), t.value) : new Ht(this.source, xe(), t)
                        }
                        return Object(c.f)(Te(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new Ht(this.source, ke(this.path), this.children)
                    }
                    toString() {
                        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
                    }
                }
                class Wt {
                    constructor(e, t, n) {
                        this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n
                    }
                    isFullyInitialized() {
                        return this.fullyInitialized_
                    }
                    isFiltered() {
                        return this.filtered_
                    }
                    isCompleteForPath(path) {
                        if (je(path)) return this.isFullyInitialized() && !this.filtered_;
                        const e = Te(path);
                        return this.isCompleteForChild(e)
                    }
                    isCompleteForChild(e) {
                        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
                    }
                    getNode() {
                        return this.node_
                    }
                }
                class Yt {
                    constructor(e) {
                        this.query_ = e, this.index_ = this.query_._queryParams.getIndex()
                    }
                }

                function Vt(e, t, n, r, o, l) {
                    const h = r.filter((e => e.type === n));
                    h.sort(((a, b) => function (e, a, b) {
                        if (null == a.childName || null == b.childName) throw Object(c.g)("Should only compare child_ events.");
                        const t = new Be(a.childName, a.snapshotNode),
                            n = new Be(b.childName, b.snapshotNode);
                        return e.index_.compare(t, n)
                    }(e, a, b))), h.forEach((n => {
                        const r = function (e, t, n) {
                            return "value" === t.type || "child_removed" === t.type || (t.prevName = n.getPredecessorChildName(t.childName, t.snapshotNode, e.index_)), t
                        }(e, n, l);
                        o.forEach((o => {
                            o.respondsTo(n.type) && t.push(o.createEvent(r, e.query_))
                        }))
                    }))
                }

                function Kt(e, t) {
                    return {
                        eventCache: e,
                        serverCache: t
                    }
                }

                function Gt(e, t, n, r) {
                    return Kt(new Wt(t, n, r), e.serverCache)
                }

                function Jt(e, t, n, r) {
                    return Kt(e.eventCache, new Wt(t, n, r))
                }

                function Qt(e) {
                    return e.eventCache.isFullyInitialized() ? e.eventCache.getNode() : null
                }

                function Xt(e) {
                    return e.serverCache.isFullyInitialized() ? e.serverCache.getNode() : null
                }
                let Zt;
                class en {
                    constructor(e, t = (() => (Zt || (Zt = new Ke(M)), Zt))()) {
                        this.value = e, this.children = t
                    }
                    static fromObject(e) {
                        let t = new en(null);
                        return z(e, ((e, n) => {
                            t = t.set(new Ce(e), n)
                        })), t
                    }
                    isEmpty() {
                        return null === this.value && this.children.isEmpty()
                    }
                    findRootMostMatchingPathAndValue(e, t) {
                        if (null != this.value && t(this.value)) return {
                            path: xe(),
                            value: this.value
                        };
                        if (je(e)) return null; {
                            const n = Te(e),
                                r = this.children.get(n);
                            if (null !== r) {
                                const o = r.findRootMostMatchingPathAndValue(ke(e), t);
                                if (null != o) {
                                    return {
                                        path: Pe(new Ce(n), o.path),
                                        value: o.value
                                    }
                                }
                                return null
                            }
                            return null
                        }
                    }
                    findRootMostValueAndPath(e) {
                        return this.findRootMostMatchingPathAndValue(e, (() => !0))
                    }
                    subtree(e) {
                        if (je(e)) return this; {
                            const t = Te(e),
                                n = this.children.get(t);
                            return null !== n ? n.subtree(ke(e)) : new en(null)
                        }
                    }
                    set(e, t) {
                        if (je(e)) return new en(t, this.children); {
                            const n = Te(e),
                                r = (this.children.get(n) || new en(null)).set(ke(e), t),
                                o = this.children.insert(n, r);
                            return new en(this.value, o)
                        }
                    }
                    remove(e) {
                        if (je(e)) return this.children.isEmpty() ? new en(null) : new en(null, this.children); {
                            const t = Te(e),
                                n = this.children.get(t);
                            if (n) {
                                const r = n.remove(ke(e));
                                let o;
                                return o = r.isEmpty() ? this.children.remove(t) : this.children.insert(t, r), null === this.value && o.isEmpty() ? new en(null) : new en(this.value, o)
                            }
                            return this
                        }
                    }
                    get(e) {
                        if (je(e)) return this.value; {
                            const t = Te(e),
                                n = this.children.get(t);
                            return n ? n.get(ke(e)) : null
                        }
                    }
                    setTree(e, t) {
                        if (je(e)) return t; {
                            const n = Te(e),
                                r = (this.children.get(n) || new en(null)).setTree(ke(e), t);
                            let o;
                            return o = r.isEmpty() ? this.children.remove(n) : this.children.insert(n, r), new en(this.value, o)
                        }
                    }
                    fold(e) {
                        return this.fold_(xe(), e)
                    }
                    fold_(e, t) {
                        const n = {};
                        return this.children.inorderTraversal(((r, o) => {
                            n[r] = o.fold_(Pe(e, r), t)
                        })), t(e, this.value, n)
                    }
                    findOnPath(path, e) {
                        return this.findOnPath_(path, xe(), e)
                    }
                    findOnPath_(e, t, n) {
                        const r = !!this.value && n(t, this.value);
                        if (r) return r;
                        if (je(e)) return null; {
                            const r = Te(e),
                                o = this.children.get(r);
                            return o ? o.findOnPath_(ke(e), Pe(t, r), n) : null
                        }
                    }
                    foreachOnPath(path, e) {
                        return this.foreachOnPath_(path, xe(), e)
                    }
                    foreachOnPath_(e, t, n) {
                        if (je(e)) return this; {
                            this.value && n(t, this.value);
                            const r = Te(e),
                                o = this.children.get(r);
                            return o ? o.foreachOnPath_(ke(e), Pe(t, r), n) : new en(null)
                        }
                    }
                    foreach(e) {
                        this.foreach_(xe(), e)
                    }
                    foreach_(e, t) {
                        this.children.inorderTraversal(((n, r) => {
                            r.foreach_(Pe(e, n), t)
                        })), this.value && t(e, this.value)
                    }
                    foreachChild(e) {
                        this.children.inorderTraversal(((t, n) => {
                            n.value && e(t, n.value)
                        }))
                    }
                }
                class tn {
                    constructor(e) {
                        this.writeTree_ = e
                    }
                    static empty() {
                        return new tn(new en(null))
                    }
                }

                function nn(e, path, t) {
                    if (je(path)) return new tn(new en(t)); {
                        const n = e.writeTree_.findRootMostValueAndPath(path);
                        if (null != n) {
                            const r = n.path;
                            let o = n.value;
                            const c = Re(r, path);
                            return o = o.updateChild(c, t), new tn(e.writeTree_.set(r, o))
                        } {
                            const n = new en(t),
                                r = e.writeTree_.setTree(path, n);
                            return new tn(r)
                        }
                    }
                }

                function rn(e, path, t) {
                    let n = e;
                    return z(t, ((e, t) => {
                        n = nn(n, Pe(path, e), t)
                    })), n
                }

                function sn(e, path) {
                    if (je(path)) return tn.empty(); {
                        const t = e.writeTree_.setTree(path, new en(null));
                        return new tn(t)
                    }
                }

                function on(e, path) {
                    return null != an(e, path)
                }

                function an(e, path) {
                    const t = e.writeTree_.findRootMostValueAndPath(path);
                    return null != t ? e.writeTree_.get(t.path).getChild(Re(t.path, path)) : null
                }

                function cn(e) {
                    const t = [],
                        n = e.writeTree_.value;
                    return null != n ? n.isLeafNode() || n.forEachChild(st, ((e, n) => {
                        t.push(new Be(e, n))
                    })) : e.writeTree_.children.inorderTraversal(((e, n) => {
                        null != n.value && t.push(new Be(e, n.value))
                    })), t
                }

                function ln(e, path) {
                    if (je(path)) return e; {
                        const t = an(e, path);
                        return new tn(null != t ? new en(t) : e.writeTree_.subtree(path))
                    }
                }

                function hn(e) {
                    return e.writeTree_.isEmpty()
                }

                function un(e, t) {
                    return dn(xe(), e.writeTree_, t)
                }

                function dn(e, t, n) {
                    if (null != t.value) return n.updateChild(e, t.value); {
                        let r = null;
                        return t.children.inorderTraversal(((t, o) => {
                            ".priority" === t ? (Object(c.f)(null !== o.value, "Priority writes must always be leaf nodes"), r = o.value) : n = dn(Pe(e, t), o, n)
                        })), n.getChild(e).isEmpty() || null === r || (n = n.updateChild(Pe(e, ".priority"), r)), n
                    }
                }

                function fn(e, path) {
                    return kn(path, e)
                }

                function pn(e, t) {
                    const n = e.allWrites.findIndex((s => s.writeId === t));
                    Object(c.f)(n >= 0, "removeWrite called with nonexistent writeId.");
                    const r = e.allWrites[n];
                    e.allWrites.splice(n, 1);
                    let o = r.visible,
                        l = !1,
                        i = e.allWrites.length - 1;
                    for (; o && i >= 0;) {
                        const t = e.allWrites[i];
                        t.visible && (i >= n && gn(t, r.path) ? o = !1 : Ne(r.path, t.path) && (l = !0)), i--
                    }
                    if (o) {
                        if (l) return function (e) {
                            e.visibleWrites = yn(e.allWrites, mn, xe()), e.allWrites.length > 0 ? e.lastWriteId = e.allWrites[e.allWrites.length - 1].writeId : e.lastWriteId = -1
                        }(e), !0;
                        if (r.snap) e.visibleWrites = sn(e.visibleWrites, r.path);
                        else {
                            z(r.children, (t => {
                                e.visibleWrites = sn(e.visibleWrites, Pe(r.path, t))
                            }))
                        }
                        return !0
                    }
                    return !1
                }

                function gn(e, path) {
                    if (e.snap) return Ne(e.path, path);
                    for (const t in e.children)
                        if (e.children.hasOwnProperty(t) && Ne(Pe(e.path, t), path)) return !0;
                    return !1
                }

                function mn(e) {
                    return e.visible
                }

                function yn(e, filter, t) {
                    let n = tn.empty();
                    for (let i = 0; i < e.length; ++i) {
                        const r = e[i];
                        if (filter(r)) {
                            const e = r.path;
                            let o;
                            if (r.snap) Ne(t, e) ? (o = Re(t, e), n = nn(n, o, r.snap)) : Ne(e, t) && (o = Re(e, t), n = nn(n, xe(), r.snap.getChild(o)));
                            else {
                                if (!r.children) throw Object(c.g)("WriteRecord should have .snap or .children");
                                if (Ne(t, e)) o = Re(t, e), n = rn(n, o, r.children);
                                else if (Ne(e, t))
                                    if (o = Re(e, t), je(o)) n = rn(n, xe(), r.children);
                                    else {
                                        const e = Object(c.E)(r.children, Te(o));
                                        if (e) {
                                            const t = e.getChild(ke(o));
                                            n = nn(n, xe(), t)
                                        }
                                    }
                            }
                        }
                    }
                    return n
                }

                function _n(e, t, n, r, o) {
                    if (r || o) {
                        const c = ln(e.visibleWrites, t);
                        if (!o && hn(c)) return n;
                        if (o || null != n || on(c, xe())) {
                            const filter = function (e) {
                                return (e.visible || o) && (!r || !~r.indexOf(e.writeId)) && (Ne(e.path, t) || Ne(t, e.path))
                            };
                            return un(yn(e.allWrites, filter, t), n || pt.EMPTY_NODE)
                        }
                        return null
                    } {
                        const r = an(e.visibleWrites, t);
                        if (null != r) return r; {
                            const r = ln(e.visibleWrites, t);
                            if (hn(r)) return n;
                            if (null != n || on(r, xe())) {
                                return un(r, n || pt.EMPTY_NODE)
                            }
                            return null
                        }
                    }
                }

                function vn(e, t, n, r) {
                    return _n(e.writeTree, e.treePath, t, n, r)
                }

                function bn(e, t) {
                    return function (e, t, n) {
                        let r = pt.EMPTY_NODE;
                        const o = an(e.visibleWrites, t);
                        if (o) return o.isLeafNode() || o.forEachChild(st, ((e, t) => {
                            r = r.updateImmediateChild(e, t)
                        })), r;
                        if (n) {
                            const o = ln(e.visibleWrites, t);
                            return n.forEachChild(st, ((e, t) => {
                                const n = un(ln(o, new Ce(e)), t);
                                r = r.updateImmediateChild(e, n)
                            })), cn(o).forEach((e => {
                                r = r.updateImmediateChild(e.name, e.node)
                            })), r
                        }
                        return cn(ln(e.visibleWrites, t)).forEach((e => {
                            r = r.updateImmediateChild(e.name, e.node)
                        })), r
                    }(e.writeTree, e.treePath, t)
                }

                function wn(e, path, t, n) {
                    return function (e, t, n, r, o) {
                        Object(c.f)(r || o, "Either existingEventSnap or existingServerSnap must exist");
                        const path = Pe(t, n);
                        if (on(e.visibleWrites, path)) return null; {
                            const t = ln(e.visibleWrites, path);
                            return hn(t) ? o.getChild(n) : un(t, o.getChild(n))
                        }
                    }(e.writeTree, e.treePath, path, t, n)
                }

                function Cn(e, path) {
                    return function (e, path) {
                        return an(e.visibleWrites, path)
                    }(e.writeTree, Pe(e.treePath, path))
                }

                function xn(e, t, n, r, o, c) {
                    return function (e, t, n, r, o, c, l) {
                        let h;
                        const d = ln(e.visibleWrites, t),
                            f = an(d, xe());
                        if (null != f) h = f;
                        else {
                            if (null == n) return [];
                            h = un(d, n)
                        }
                        if (h = h.withIndex(l), h.isEmpty() || h.isLeafNode()) return []; {
                            const e = [],
                                t = l.getCompare(),
                                n = c ? h.getReverseIteratorFrom(r, l) : h.getIteratorFrom(r, l);
                            let d = n.getNext();
                            for (; d && e.length < o;) 0 !== t(d, r) && e.push(d), d = n.getNext();
                            return e
                        }
                    }(e.writeTree, e.treePath, t, n, r, o, c)
                }

                function Tn(e, t, n) {
                    return function (e, t, n, r) {
                        const path = Pe(t, n),
                            o = an(e.visibleWrites, path);
                        if (null != o) return o;
                        if (r.isCompleteForChild(n)) return un(ln(e.visibleWrites, path), r.getNode().getImmediateChild(n));
                        return null
                    }(e.writeTree, e.treePath, t, n)
                }

                function En(e, t) {
                    return kn(Pe(e.treePath, t), e.writeTree)
                }

                function kn(path, e) {
                    return {
                        treePath: path,
                        writeTree: e
                    }
                }
                class Sn {
                    constructor() {
                        this.changeMap = new Map
                    }
                    trackChildChange(e) {
                        const t = e.type,
                            n = e.childName;
                        Object(c.f)("child_added" === t || "child_changed" === t || "child_removed" === t, "Only child changes supported for tracking"), Object(c.f)(".priority" !== n, "Only non-priority child changes can be tracked.");
                        const r = this.changeMap.get(n);
                        if (r) {
                            const o = r.type;
                            if ("child_added" === t && "child_removed" === o) this.changeMap.set(n, xt(n, e.snapshotNode, r.snapshotNode));
                            else if ("child_removed" === t && "child_added" === o) this.changeMap.delete(n);
                            else if ("child_removed" === t && "child_changed" === o) this.changeMap.set(n, Ct(n, r.oldSnap));
                            else if ("child_changed" === t && "child_added" === o) this.changeMap.set(n, wt(n, e.snapshotNode));
                            else {
                                if ("child_changed" !== t || "child_changed" !== o) throw Object(c.g)("Illegal combination of changes: " + e + " occurred after " + r);
                                this.changeMap.set(n, xt(n, e.snapshotNode, r.oldSnap))
                            }
                        } else this.changeMap.set(n, e)
                    }
                    getChanges() {
                        return Array.from(this.changeMap.values())
                    }
                }
                const In = new class {
                    getCompleteChild(e) {
                        return null
                    }
                    getChildAfterChild(e, t, n) {
                        return null
                    }
                };
                class On {
                    constructor(e, t, n = null) {
                        this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n
                    }
                    getCompleteChild(e) {
                        const t = this.viewCache_.eventCache;
                        if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e); {
                            const t = null != this.optCompleteServerCache_ ? new Wt(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
                            return Tn(this.writes_, e, t)
                        }
                    }
                    getChildAfterChild(e, t, n) {
                        const r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : Xt(this.viewCache_),
                            o = xn(this.writes_, r, t, 1, n, e);
                        return 0 === o.length ? null : o[0]
                    }
                }

                function Pn(e, t, n, r, o) {
                    const l = new Sn;
                    let h, d;
                    if (n.type === Ut.OVERWRITE) {
                        const f = n;
                        f.source.fromUser ? h = An(e, t, f.path, f.snap, r, o, l) : (Object(c.f)(f.source.fromServer, "Unknown source."), d = f.source.tagged || t.serverCache.isFiltered() && !je(f.path), h = Rn(e, t, f.path, f.snap, r, o, d, l))
                    } else if (n.type === Ut.MERGE) {
                        const f = n;
                        f.source.fromUser ? h = function (e, t, path, n, r, o, c) {
                            let l = t;
                            return n.foreach(((n, h) => {
                                const d = Pe(path, n);
                                Nn(t, Te(d)) && (l = An(e, l, d, h, r, o, c))
                            })), n.foreach(((n, h) => {
                                const d = Pe(path, n);
                                Nn(t, Te(d)) || (l = An(e, l, d, h, r, o, c))
                            })), l
                        }(e, t, f.path, f.children, r, o, l) : (Object(c.f)(f.source.fromServer, "Unknown source."), d = f.source.tagged || t.serverCache.isFiltered(), h = $n(e, t, f.path, f.children, r, o, d, l))
                    } else if (n.type === Ut.ACK_USER_WRITE) {
                        const d = n;
                        h = d.revert ? function (e, t, path, n, r, o) {
                            let l;
                            if (null != Cn(n, path)) return t; {
                                const source = new On(n, t, r),
                                    h = t.eventCache.getNode();
                                let d;
                                if (je(path) || ".priority" === Te(path)) {
                                    let r;
                                    if (t.serverCache.isFullyInitialized()) r = vn(n, Xt(t));
                                    else {
                                        const e = t.serverCache.getNode();
                                        Object(c.f)(e instanceof pt, "serverChildren would be complete if leaf node"), r = bn(n, e)
                                    }
                                    d = e.filter.updateFullNode(h, r, o)
                                } else {
                                    const r = Te(path);
                                    let c = Tn(n, r, t.serverCache);
                                    null == c && t.serverCache.isCompleteForChild(r) && (c = h.getImmediateChild(r)), d = null != c ? e.filter.updateChild(h, r, c, ke(path), source, o) : t.eventCache.getNode().hasChild(r) ? e.filter.updateChild(h, r, pt.EMPTY_NODE, ke(path), source, o) : h, d.isEmpty() && t.serverCache.isFullyInitialized() && (l = vn(n, Xt(t)), l.isLeafNode() && (d = e.filter.updateFullNode(d, l, o)))
                                }
                                return l = t.serverCache.isFullyInitialized() || null != Cn(n, xe()), Gt(t, d, l, e.filter.filtersNodes())
                            }
                        }(e, t, d.path, r, o, l) : function (e, t, n, r, o, c, l) {
                            if (null != Cn(o, n)) return t;
                            const h = t.serverCache.isFiltered(),
                                d = t.serverCache;
                            if (null != r.value) {
                                if (je(n) && d.isFullyInitialized() || d.isCompleteForPath(n)) return Rn(e, t, n, d.getNode().getChild(n), o, c, h, l);
                                if (je(n)) {
                                    let r = new en(null);
                                    return d.getNode().forEachChild(We, ((e, t) => {
                                        r = r.set(new Ce(e), t)
                                    })), $n(e, t, n, r, o, c, h, l)
                                }
                                return t
                            } {
                                let f = new en(null);
                                return r.foreach(((e, t) => {
                                    const r = Pe(n, e);
                                    d.isCompleteForPath(r) && (f = f.set(e, d.getNode().getChild(r)))
                                })), $n(e, t, n, f, o, c, h, l)
                            }
                        }(e, t, d.path, d.affectedTree, r, o, l)
                    } else {
                        if (n.type !== Ut.LISTEN_COMPLETE) throw Object(c.g)("Unknown operation type: " + n.type);
                        h = function (e, t, path, n, r) {
                            const o = t.serverCache,
                                c = Jt(t, o.getNode(), o.isFullyInitialized() || je(path), o.isFiltered());
                            return jn(e, c, path, n, In, r)
                        }(e, t, n.path, r, l)
                    }
                    const f = l.getChanges();
                    return function (e, t, n) {
                        const r = t.eventCache;
                        if (r.isFullyInitialized()) {
                            const o = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                                c = Qt(e);
                            (n.length > 0 || !e.eventCache.isFullyInitialized() || o && !r.getNode().equals(c) || !r.getNode().getPriority().equals(c.getPriority())) && n.push(bt(Qt(t)))
                        }
                    }(t, h, f), {
                        viewCache: h,
                        changes: f
                    }
                }

                function jn(e, t, n, r, source, o) {
                    const l = t.eventCache;
                    if (null != Cn(r, n)) return t; {
                        let h, d;
                        if (je(n))
                            if (Object(c.f)(t.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), t.serverCache.isFiltered()) {
                                const n = Xt(t),
                                    c = bn(r, n instanceof pt ? n : pt.EMPTY_NODE);
                                h = e.filter.updateFullNode(t.eventCache.getNode(), c, o)
                            } else {
                                const n = vn(r, Xt(t));
                                h = e.filter.updateFullNode(t.eventCache.getNode(), n, o)
                            }
                        else {
                            const f = Te(n);
                            if (".priority" === f) {
                                Object(c.f)(1 === Ee(n), "Can't have a priority with additional path components");
                                const o = l.getNode();
                                d = t.serverCache.getNode();
                                const f = wn(r, n, o, d);
                                h = null != f ? e.filter.updatePriority(o, f) : l.getNode()
                            } else {
                                const c = ke(n);
                                let m;
                                if (l.isCompleteForChild(f)) {
                                    d = t.serverCache.getNode();
                                    const e = wn(r, n, l.getNode(), d);
                                    m = null != e ? l.getNode().getImmediateChild(f).updateChild(c, e) : l.getNode().getImmediateChild(f)
                                } else m = Tn(r, f, t.serverCache);
                                h = null != m ? e.filter.updateChild(l.getNode(), f, m, c, source, o) : l.getNode()
                            }
                        }
                        return Gt(t, h, l.isFullyInitialized() || je(n), e.filter.filtersNodes())
                    }
                }

                function Rn(e, t, n, r, o, c, l, h) {
                    const d = t.serverCache;
                    let f;
                    const m = l ? e.filter : e.filter.getIndexedFilter();
                    if (je(n)) f = m.updateFullNode(d.getNode(), r, null);
                    else if (m.filtersNodes() && !d.isFiltered()) {
                        const e = d.getNode().updateChild(n, r);
                        f = m.updateFullNode(d.getNode(), e, null)
                    } else {
                        const e = Te(n);
                        if (!d.isCompleteForPath(n) && Ee(n) > 1) return t;
                        const o = ke(n),
                            c = d.getNode().getImmediateChild(e).updateChild(o, r);
                        f = ".priority" === e ? m.updatePriority(d.getNode(), c) : m.updateChild(d.getNode(), e, c, o, In, null)
                    }
                    const y = Jt(t, f, d.isFullyInitialized() || je(n), m.filtersNodes());
                    return jn(e, y, n, o, new On(o, y, c), h)
                }

                function An(e, t, n, r, o, c, l) {
                    const h = t.eventCache;
                    let d, f;
                    const source = new On(o, t, c);
                    if (je(n)) f = e.filter.updateFullNode(t.eventCache.getNode(), r, l), d = Gt(t, f, !0, e.filter.filtersNodes());
                    else {
                        const o = Te(n);
                        if (".priority" === o) f = e.filter.updatePriority(t.eventCache.getNode(), r), d = Gt(t, f, h.isFullyInitialized(), h.isFiltered());
                        else {
                            const c = ke(n),
                                f = h.getNode().getImmediateChild(o);
                            let m;
                            if (je(c)) m = r;
                            else {
                                const e = source.getCompleteChild(o);
                                m = null != e ? ".priority" === Se(c) && e.getChild(Oe(c)).isEmpty() ? e : e.updateChild(c, r) : pt.EMPTY_NODE
                            }
                            if (f.equals(m)) d = t;
                            else {
                                d = Gt(t, e.filter.updateChild(h.getNode(), o, m, c, source, l), h.isFullyInitialized(), e.filter.filtersNodes())
                            }
                        }
                    }
                    return d
                }

                function Nn(e, t) {
                    return e.eventCache.isCompleteForChild(t)
                }

                function Dn(e, t, n) {
                    return n.foreach(((e, n) => {
                        t = t.updateChild(e, n)
                    })), t
                }

                function $n(e, t, path, n, r, o, c, l) {
                    if (t.serverCache.getNode().isEmpty() && !t.serverCache.isFullyInitialized()) return t;
                    let h, d = t;
                    h = je(path) ? n : new en(null).setTree(path, n);
                    const f = t.serverCache.getNode();
                    return h.children.inorderTraversal(((n, h) => {
                        if (f.hasChild(n)) {
                            const f = Dn(0, t.serverCache.getNode().getImmediateChild(n), h);
                            d = Rn(e, d, new Ce(n), f, r, o, c, l)
                        }
                    })), h.children.inorderTraversal(((n, h) => {
                        const m = !t.serverCache.isCompleteForChild(n) && null === h.value;
                        if (!f.hasChild(n) && !m) {
                            const f = Dn(0, t.serverCache.getNode().getImmediateChild(n), h);
                            d = Rn(e, d, new Ce(n), f, r, o, c, l)
                        }
                    })), d
                }
                class Ln {
                    constructor(e, t) {
                        this.query_ = e, this.eventRegistrations_ = [];
                        const n = this.query_._queryParams,
                            r = new Tt(n.getIndex()),
                            filter = (o = n).loadsAllData() ? new Tt(o.getIndex()) : o.hasLimit() ? new kt(o) : new Et(o);
                        var o;
                        this.processor_ = function (filter) {
                            return {
                                filter: filter
                            }
                        }(filter);
                        const c = t.serverCache,
                            l = t.eventCache,
                            h = r.updateFullNode(pt.EMPTY_NODE, c.getNode(), null),
                            d = filter.updateFullNode(pt.EMPTY_NODE, l.getNode(), null),
                            f = new Wt(h, c.isFullyInitialized(), r.filtersNodes()),
                            m = new Wt(d, l.isFullyInitialized(), filter.filtersNodes());
                        this.viewCache_ = Kt(m, f), this.eventGenerator_ = new Yt(this.query_)
                    }
                    get query() {
                        return this.query_
                    }
                }

                function Mn(view, path) {
                    const e = Xt(view.viewCache_);
                    return e && (view.query._queryParams.loadsAllData() || !je(path) && !e.getImmediateChild(Te(path)).isEmpty()) ? e.getChild(path) : null
                }

                function Un(view) {
                    return 0 === view.eventRegistrations_.length
                }

                function Fn(view, e, t) {
                    const n = [];
                    if (t) {
                        Object(c.f)(null == e, "A cancel should cancel all event registrations.");
                        const path = view.query._path;
                        view.eventRegistrations_.forEach((e => {
                            const r = e.createCancelEvent(t, path);
                            r && n.push(r)
                        }))
                    }
                    if (e) {
                        let t = [];
                        for (let i = 0; i < view.eventRegistrations_.length; ++i) {
                            const n = view.eventRegistrations_[i];
                            if (n.matches(e)) {
                                if (e.hasAnyCallback()) {
                                    t = t.concat(view.eventRegistrations_.slice(i + 1));
                                    break
                                }
                            } else t.push(n)
                        }
                        view.eventRegistrations_ = t
                    } else view.eventRegistrations_ = [];
                    return n
                }

                function Bn(view, e, t, n) {
                    e.type === Ut.MERGE && null !== e.source.queryId && (Object(c.f)(Xt(view.viewCache_), "We should always have a full cache before handling merges"), Object(c.f)(Qt(view.viewCache_), "Missing event cache, even though we have a server cache"));
                    const r = view.viewCache_,
                        o = Pn(view.processor_, r, e, t, n);
                    var l, h;
                    return l = view.processor_, h = o.viewCache, Object(c.f)(h.eventCache.getNode().isIndexed(l.filter.getIndex()), "Event snap not indexed"), Object(c.f)(h.serverCache.getNode().isIndexed(l.filter.getIndex()), "Server snap not indexed"), Object(c.f)(o.viewCache.serverCache.isFullyInitialized() || !r.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), view.viewCache_ = o.viewCache, qn(view, o.changes, o.viewCache.eventCache.getNode(), null)
                }

                function qn(view, e, t, n) {
                    const r = n ? [n] : view.eventRegistrations_;
                    return function (e, t, n, r) {
                        const o = [],
                            c = [];
                        return t.forEach((t => {
                            var n;
                            "child_changed" === t.type && e.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && c.push((n = t.childName, {
                                type: "child_moved",
                                snapshotNode: t.snapshotNode,
                                childName: n
                            }))
                        })), Vt(e, o, "child_removed", t, r, n), Vt(e, o, "child_added", t, r, n), Vt(e, o, "child_moved", c, r, n), Vt(e, o, "child_changed", t, r, n), Vt(e, o, "value", t, r, n), o
                    }(view.eventGenerator_, e, t, r)
                }
                let zn, Hn;
                class Wn {
                    constructor() {
                        this.views = new Map
                    }
                }

                function Yn(e, t, n, r) {
                    const o = t.source.queryId;
                    if (null !== o) {
                        const view = e.views.get(o);
                        return Object(c.f)(null != view, "SyncTree gave us an op for an invalid query."), Bn(view, t, n, r)
                    } {
                        let o = [];
                        for (const view of e.views.values()) o = o.concat(Bn(view, t, n, r));
                        return o
                    }
                }

                function Vn(e, t, n, r, o) {
                    const c = t._queryIdentifier,
                        view = e.views.get(c);
                    if (!view) {
                        let e = vn(n, o ? r : null),
                            c = !1;
                        e ? c = !0 : r instanceof pt ? (e = bn(n, r), c = !1) : (e = pt.EMPTY_NODE, c = !1);
                        const l = Kt(new Wt(e, c, !1), new Wt(r, o, !1));
                        return new Ln(t, l)
                    }
                    return view
                }

                function Kn(e, t, n, r, o, c) {
                    const view = Vn(e, t, r, o, c);
                    return e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, view),
                        function (view, e) {
                            view.eventRegistrations_.push(e)
                        }(view, n),
                        function (view, e) {
                            const t = view.viewCache_.eventCache,
                                n = [];
                            t.getNode().isLeafNode() || t.getNode().forEachChild(st, ((e, t) => {
                                n.push(wt(e, t))
                            }));
                            return t.isFullyInitialized() && n.push(bt(t.getNode())), qn(view, n, t.getNode(), e)
                        }(view, n)
                }

                function Gn(e, t, n, r) {
                    const o = t._queryIdentifier,
                        l = [];
                    let h = [];
                    const d = er(e);
                    if ("default" === o)
                        for (const [t, view] of e.views.entries()) h = h.concat(Fn(view, n, r)), Un(view) && (e.views.delete(t), view.query._queryParams.loadsAllData() || l.push(view.query));
                    else {
                        const view = e.views.get(o);
                        view && (h = h.concat(Fn(view, n, r)), Un(view) && (e.views.delete(o), view.query._queryParams.loadsAllData() || l.push(view.query)))
                    }
                    return d && !er(e) && l.push(new(Object(c.f)(zn, "Reference.ts has not been loaded"), zn)(t._repo, t._path)), {
                        removed: l,
                        events: h
                    }
                }

                function Jn(e) {
                    const t = [];
                    for (const view of e.views.values()) view.query._queryParams.loadsAllData() || t.push(view);
                    return t
                }

                function Qn(e, path) {
                    let t = null;
                    for (const view of e.views.values()) t = t || Mn(view, path);
                    return t
                }

                function Xn(e, t) {
                    if (t._queryParams.loadsAllData()) return nr(e); {
                        const n = t._queryIdentifier;
                        return e.views.get(n)
                    }
                }

                function Zn(e, t) {
                    return null != Xn(e, t)
                }

                function er(e) {
                    return null != nr(e)
                }

                function nr(e) {
                    for (const view of e.views.values())
                        if (view.query._queryParams.loadsAllData()) return view;
                    return null
                }
                let rr = 1;
                class ir {
                    constructor(e) {
                        this.listenProvider_ = e, this.syncPointTree_ = new en(null), this.pendingWriteTree_ = {
                            visibleWrites: tn.empty(),
                            allWrites: [],
                            lastWriteId: -1
                        }, this.tagToQueryMap = new Map, this.queryToTagMap = new Map
                    }
                }

                function sr(e, path, t, n, r) {
                    return function (e, path, t, n, r) {
                        Object(c.f)(n > e.lastWriteId, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), e.allWrites.push({
                            path: path,
                            snap: t,
                            writeId: n,
                            visible: r
                        }), r && (e.visibleWrites = nn(e.visibleWrites, path, t)), e.lastWriteId = n
                    }(e.pendingWriteTree_, path, t, n, r), r ? fr(e, new zt({
                        fromUser: !0,
                        fromServer: !1,
                        queryId: null,
                        tagged: !1
                    }, path, t)) : []
                }

                function or(e, t, n = !1) {
                    const r = function (e, t) {
                        for (let i = 0; i < e.allWrites.length; i++) {
                            const n = e.allWrites[i];
                            if (n.writeId === t) return n
                        }
                        return null
                    }(e.pendingWriteTree_, t);
                    if (pn(e.pendingWriteTree_, t)) {
                        let t = new en(null);
                        return null != r.snap ? t = t.set(xe(), !0) : z(r.children, (e => {
                            t = t.set(new Ce(e), !0)
                        })), fr(e, new Bt(r.path, t, n))
                    }
                    return []
                }

                function ar(e, path, t) {
                    return fr(e, new zt({
                        fromUser: !1,
                        fromServer: !0,
                        queryId: null,
                        tagged: !1
                    }, path, t))
                }

                function cr(e, t, n, r, o = !1) {
                    const path = t._path,
                        c = e.syncPointTree_.get(path);
                    let l = [];
                    if (c && ("default" === t._queryIdentifier || Zn(c, t))) {
                        const h = Gn(c, t, n, r);
                        0 === c.views.size && (e.syncPointTree_ = e.syncPointTree_.remove(path));
                        const d = h.removed;
                        if (l = h.events, !o) {
                            const n = -1 !== d.findIndex((e => e._queryParams.loadsAllData())),
                                o = e.syncPointTree_.findOnPath(path, ((e, t) => er(t)));
                            if (n && !o) {
                                const t = e.syncPointTree_.subtree(path);
                                if (!t.isEmpty()) {
                                    const n = function (e) {
                                        return e.fold(((e, t, n) => {
                                            if (t && er(t)) {
                                                return [nr(t)]
                                            } {
                                                let e = [];
                                                return t && (e = Jn(t)), z(n, ((t, n) => {
                                                    e = e.concat(n)
                                                })), e
                                            }
                                        }))
                                    }(t);
                                    for (let i = 0; i < n.length; ++i) {
                                        const view = n[i],
                                            t = view.query,
                                            r = mr(e, view);
                                        e.listenProvider_.startListening(xr(t), yr(e, t), r.hashFn, r.onComplete)
                                    }
                                }
                            }
                            if (!o && d.length > 0 && !r)
                                if (n) {
                                    const n = null;
                                    e.listenProvider_.stopListening(xr(t), n)
                                } else d.forEach((t => {
                                    const n = e.queryToTagMap.get(_r(t));
                                    e.listenProvider_.stopListening(xr(t), n)
                                }))
                        }! function (e, t) {
                            for (let n = 0; n < t.length; ++n) {
                                const r = t[n];
                                if (!r._queryParams.loadsAllData()) {
                                    const t = _r(r),
                                        n = e.queryToTagMap.get(t);
                                    e.queryToTagMap.delete(t), e.tagToQueryMap.delete(n)
                                }
                            }
                        }(e, d)
                    }
                    return l
                }

                function lr(e, path, t, n) {
                    const r = vr(e, n);
                    if (null != r) {
                        const n = wr(r),
                            o = n.path,
                            c = n.queryId,
                            l = Re(o, path);
                        return Cr(e, o, new zt(Ft(c), l, t))
                    }
                    return []
                }

                function ur(e, t, n, r = !1) {
                    const path = t._path;
                    let o = null,
                        l = !1;
                    e.syncPointTree_.foreachOnPath(path, ((e, t) => {
                        const n = Re(e, path);
                        o = o || Qn(t, n), l = l || er(t)
                    }));
                    let h, d = e.syncPointTree_.get(path);
                    if (d ? (l = l || er(d), o = o || Qn(d, xe())) : (d = new Wn, e.syncPointTree_ = e.syncPointTree_.set(path, d)), null != o) h = !0;
                    else {
                        h = !1, o = pt.EMPTY_NODE;
                        e.syncPointTree_.subtree(path).foreachChild(((e, t) => {
                            const n = Qn(t, xe());
                            n && (o = o.updateImmediateChild(e, n))
                        }))
                    }
                    const f = Zn(d, t);
                    if (!f && !t._queryParams.loadsAllData()) {
                        const n = _r(t);
                        Object(c.f)(!e.queryToTagMap.has(n), "View does not exist, but we have a tag");
                        const r = rr++;
                        e.queryToTagMap.set(n, r), e.tagToQueryMap.set(r, n)
                    }
                    let m = Kn(d, t, n, fn(e.pendingWriteTree_, path), o, h);
                    if (!f && !l && !r) {
                        const view = Xn(d, t);
                        m = m.concat(function (e, t, view) {
                            const path = t._path,
                                n = yr(e, t),
                                r = mr(e, view),
                                o = e.listenProvider_.startListening(xr(t), n, r.hashFn, r.onComplete),
                                l = e.syncPointTree_.subtree(path);
                            if (n) Object(c.f)(!er(l.value), "If we're adding a query, it shouldn't be shadowed");
                            else {
                                const t = l.fold(((e, t, n) => {
                                    if (!je(e) && t && er(t)) return [nr(t).query]; {
                                        let e = [];
                                        return t && (e = e.concat(Jn(t).map((view => view.query)))), z(n, ((t, n) => {
                                            e = e.concat(n)
                                        })), e
                                    }
                                }));
                                for (let i = 0; i < t.length; ++i) {
                                    const n = t[i];
                                    e.listenProvider_.stopListening(xr(n), yr(e, n))
                                }
                            }
                            return o
                        }(e, t, view))
                    }
                    return m
                }

                function dr(e, path, t) {
                    const n = e.pendingWriteTree_,
                        r = e.syncPointTree_.findOnPath(path, ((e, t) => {
                            const n = Qn(t, Re(e, path));
                            if (n) return n
                        }));
                    return _n(n, path, r, t, !0)
                }

                function fr(e, t) {
                    return pr(t, e.syncPointTree_, null, fn(e.pendingWriteTree_, xe()))
                }

                function pr(e, t, n, r) {
                    if (je(e.path)) return gr(e, t, n, r); {
                        const o = t.get(xe());
                        null == n && null != o && (n = Qn(o, xe()));
                        let c = [];
                        const l = Te(e.path),
                            h = e.operationForChild(l),
                            d = t.children.get(l);
                        if (d && h) {
                            const e = n ? n.getImmediateChild(l) : null,
                                t = En(r, l);
                            c = c.concat(pr(h, d, e, t))
                        }
                        return o && (c = c.concat(Yn(o, e, r, n))), c
                    }
                }

                function gr(e, t, n, r) {
                    const o = t.get(xe());
                    null == n && null != o && (n = Qn(o, xe()));
                    let c = [];
                    return t.children.inorderTraversal(((t, o) => {
                        const l = n ? n.getImmediateChild(t) : null,
                            h = En(r, t),
                            d = e.operationForChild(t);
                        d && (c = c.concat(gr(d, o, l, h)))
                    })), o && (c = c.concat(Yn(o, e, r, n))), c
                }

                function mr(e, view) {
                    const t = view.query,
                        n = yr(e, t);
                    return {
                        hashFn: () => {
                            const e = function (view) {
                                return view.viewCache_.serverCache.getNode()
                            }(view) || pt.EMPTY_NODE;
                            return e.hash()
                        },
                        onComplete: r => {
                            if ("ok" === r) return n ? function (e, path, t) {
                                const n = vr(e, t);
                                if (n) {
                                    const t = wr(n),
                                        r = t.path,
                                        o = t.queryId,
                                        c = Re(r, path);
                                    return Cr(e, r, new qt(Ft(o), c))
                                }
                                return []
                            }(e, t._path, n) : function (e, path) {
                                return fr(e, new qt({
                                    fromUser: !1,
                                    fromServer: !0,
                                    queryId: null,
                                    tagged: !1
                                }, path))
                            }(e, t._path); {
                                const n = function (code, e) {
                                    let t = "Unknown Error";
                                    "too_big" === code ? t = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === code ? t = "Client doesn't have permission to access the desired data." : "unavailable" === code && (t = "The service is unavailable");
                                    const n = new Error(code + " at " + e._path.toString() + ": " + t);
                                    return n.code = code.toUpperCase(), n
                                }(r, t);
                                return cr(e, t, null, n)
                            }
                        }
                    }
                }

                function yr(e, t) {
                    const n = _r(t);
                    return e.queryToTagMap.get(n)
                }

                function _r(e) {
                    return e._path.toString() + "$" + e._queryIdentifier
                }

                function vr(e, t) {
                    return e.tagToQueryMap.get(t)
                }

                function wr(e) {
                    const t = e.indexOf("$");
                    return Object(c.f)(-1 !== t && t < e.length - 1, "Bad queryKey."), {
                        queryId: e.substr(t + 1),
                        path: new Ce(e.substr(0, t))
                    }
                }

                function Cr(e, t, n) {
                    const r = e.syncPointTree_.get(t);
                    Object(c.f)(r, "Missing sync point for query tag that we're tracking");
                    return Yn(r, n, fn(e.pendingWriteTree_, t), null)
                }

                function xr(e) {
                    return e._queryParams.loadsAllData() && !e._queryParams.isDefault() ? new(Object(c.f)(Hn, "Reference.ts has not been loaded"), Hn)(e._repo, e._path) : e
                }
                class Tr {
                    constructor(e) {
                        this.node_ = e
                    }
                    getImmediateChild(e) {
                        const t = this.node_.getImmediateChild(e);
                        return new Tr(t)
                    }
                    node() {
                        return this.node_
                    }
                }
                class Er {
                    constructor(e, path) {
                        this.syncTree_ = e, this.path_ = path
                    }
                    getImmediateChild(e) {
                        const t = Pe(this.path_, e);
                        return new Er(this.syncTree_, t)
                    }
                    node() {
                        return dr(this.syncTree_, this.path_)
                    }
                }
                const kr = function (e) {
                        return (e = e || {}).timestamp = e.timestamp || (new Date).getTime(), e
                    },
                    Sr = function (e, t, n) {
                        return e && "object" == typeof e ? (Object(c.f)(".sv" in e, "Unexpected leaf node or priority contents"), "string" == typeof e[".sv"] ? Ir(e[".sv"], t, n) : "object" == typeof e[".sv"] ? Or(e[".sv"], t) : void Object(c.f)(!1, "Unexpected server value: " + JSON.stringify(e, null, 2))) : e
                    },
                    Ir = function (e, t, n) {
                        if ("timestamp" === e) return n.timestamp;
                        Object(c.f)(!1, "Unexpected server value: " + e)
                    },
                    Or = function (e, t, n) {
                        e.hasOwnProperty("increment") || Object(c.f)(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
                        const r = e.increment;
                        "number" != typeof r && Object(c.f)(!1, "Unexpected increment value: " + r);
                        const o = t.node();
                        if (Object(c.f)(null != o, "Expected ChildrenNode.EMPTY_NODE for nulls"), !o.isLeafNode()) return r;
                        const l = o.getValue();
                        return "number" != typeof l ? r : l + r
                    },
                    Pr = function (path, e, t, n) {
                        return Rr(e, new Er(t, path), n)
                    },
                    jr = function (e, t, n) {
                        return Rr(e, new Tr(t), n)
                    };

                function Rr(e, t, n) {
                    const r = e.getPriority().val(),
                        o = Sr(r, t.getImmediateChild(".priority"), n);
                    let c;
                    if (e.isLeafNode()) {
                        const r = e,
                            c = Sr(r.getValue(), t, n);
                        return c !== r.getValue() || o !== r.getPriority().val() ? new it(c, yt(o)) : e
                    } {
                        const r = e;
                        return c = r, o !== r.getPriority().val() && (c = c.updatePriority(new it(o))), r.forEachChild(st, ((e, r) => {
                            const o = Rr(r, t.getImmediateChild(e), n);
                            o !== r && (c = c.updateImmediateChild(e, o))
                        })), c
                    }
                }
                class Ar {
                    constructor(e = "", t = null, n = {
                        children: {},
                        childCount: 0
                    }) {
                        this.name = e, this.parent = t, this.node = n
                    }
                }

                function Nr(e, t) {
                    let path = t instanceof Ce ? t : new Ce(t),
                        n = e,
                        r = Te(path);
                    for (; null !== r;) {
                        const e = Object(c.E)(n.node.children, r) || {
                            children: {},
                            childCount: 0
                        };
                        n = new Ar(r, n, e), path = ke(path), r = Te(path)
                    }
                    return n
                }

                function Dr(e) {
                    return e.node.value
                }

                function $r(e, t) {
                    e.node.value = t, Br(e)
                }

                function Lr(e) {
                    return e.node.childCount > 0
                }

                function Mr(e, t) {
                    z(e.node.children, ((n, r) => {
                        t(new Ar(n, e, r))
                    }))
                }

                function Ur(e, t, n, r) {
                    n && !r && t(e), Mr(e, (e => {
                        Ur(e, t, !0, r)
                    })), n && r && t(e)
                }

                function Fr(e) {
                    return new Ce(null === e.parent ? e.name : Fr(e.parent) + "/" + e.name)
                }

                function Br(e) {
                    null !== e.parent && function (e, t, n) {
                        const r = function (e) {
                                return void 0 === Dr(e) && !Lr(e)
                            }(n),
                            o = Object(c.l)(e.node.children, t);
                        r && o ? (delete e.node.children[t], e.node.childCount--, Br(e)) : r || o || (e.node.children[t] = n.node, e.node.childCount++, Br(e))
                    }(e.parent, e.name, e)
                }
                const qr = /[\[\].#$\/\u0000-\u001F\u007F]/,
                    zr = /[\[\].#$\u0000-\u001F\u007F]/,
                    Hr = 10485760,
                    Wr = function (e) {
                        return "string" == typeof e && 0 !== e.length && !qr.test(e)
                    },
                    Yr = function (e) {
                        return "string" == typeof e && 0 !== e.length && !zr.test(e)
                    },
                    Vr = function (e) {
                        return null === e || "string" == typeof e || "number" == typeof e && !N(e) || e && "object" == typeof e && Object(c.l)(e, ".sv")
                    },
                    Kr = function (e, t, path, n) {
                        n && void 0 === t || Gr(Object(c.p)(e, "value"), t, path)
                    },
                    Gr = function (e, data, t) {
                        const path = t instanceof Ce ? new De(t, e) : t;
                        if (void 0 === data) throw new Error(e + "contains undefined " + Le(path));
                        if ("function" == typeof data) throw new Error(e + "contains a function " + Le(path) + " with contents = " + data.toString());
                        if (N(data)) throw new Error(e + "contains " + data.toString() + " " + Le(path));
                        if ("string" == typeof data && data.length > Hr / 3 && Object(c.F)(data) > Hr) throw new Error(e + "contains a string greater than " + Hr + " utf8 bytes " + Le(path) + " ('" + data.substring(0, 50) + "...')");
                        if (data && "object" == typeof data) {
                            let t = !1,
                                n = !1;
                            if (z(data, ((r, o) => {
                                    if (".value" === r) t = !0;
                                    else if (".priority" !== r && ".sv" !== r && (n = !0, !Wr(r))) throw new Error(e + " contains an invalid key (" + r + ") " + Le(path) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                                    ! function (e, t) {
                                        e.parts_.length > 0 && (e.byteLength_ += 1), e.parts_.push(t), e.byteLength_ += Object(c.F)(t), $e(e)
                                    }(path, r), Gr(e, o, path),
                                        function (e) {
                                            const t = e.parts_.pop();
                                            e.byteLength_ -= Object(c.F)(t), e.parts_.length > 0 && (e.byteLength_ -= 1)
                                        }(path)
                                })), t && n) throw new Error(e + ' contains ".value" child ' + Le(path) + " in addition to actual children.")
                        }
                    },
                    Jr = function (e, t, n, r) {
                        if (!(r && void 0 === n || Wr(n))) throw new Error(Object(c.p)(e, t) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
                    },
                    Qr = function (e, t, n, r) {
                        if (!(r && void 0 === n || Yr(n))) throw new Error(Object(c.p)(e, t) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
                    },
                    Xr = function (e, t, n, r) {
                        n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Qr(e, t, n, r)
                    },
                    Zr = function (e, path) {
                        if (".info" === Te(path)) throw new Error(e + " failed = Can't modify data under /.info/")
                    },
                    ei = function (e, t) {
                        const n = t.path.toString();
                        if ("string" != typeof t.repoInfo.host || 0 === t.repoInfo.host.length || !Wr(t.repoInfo.namespace) && "localhost" !== t.repoInfo.host.split(":")[0] || 0 !== n.length && ! function (e) {
                                return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), Yr(e)
                            }(n)) throw new Error(Object(c.p)(e, "url") + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
                    };
                class ti {
                    constructor() {
                        this.eventLists_ = [], this.recursionDepth_ = 0
                    }
                }

                function ni(e, t) {
                    let n = null;
                    for (let i = 0; i < t.length; i++) {
                        const data = t[i],
                            path = data.getPath();
                        null === n || Ae(path, n.path) || (e.eventLists_.push(n), n = null), null === n && (n = {
                            events: [],
                            path: path
                        }), n.events.push(data)
                    }
                    n && e.eventLists_.push(n)
                }

                function ri(e, path, t) {
                    ni(e, t), si(e, (e => Ae(e, path)))
                }

                function ii(e, t, n) {
                    ni(e, n), si(e, (e => Ne(e, t) || Ne(t, e)))
                }

                function si(e, t) {
                    e.recursionDepth_++;
                    let n = !0;
                    for (let i = 0; i < e.eventLists_.length; i++) {
                        const r = e.eventLists_[i];
                        if (r) {
                            t(r.path) ? (oi(e.eventLists_[i]), e.eventLists_[i] = null) : n = !1
                        }
                    }
                    n && (e.eventLists_ = []), e.recursionDepth_--
                }

                function oi(e) {
                    for (let i = 0; i < e.events.length; i++) {
                        const t = e.events[i];
                        if (null !== t) {
                            e.events[i] = null;
                            const n = t.getEventRunner();
                            k && O("event: " + t.toString()), V(n)
                        }
                    }
                }
                const ai = "repo_interrupt",
                    ci = 25;
                class hi {
                    constructor(e, t, n, r) {
                        this.repoInfo_ = e, this.forceRestClient_ = t, this.authTokenProvider_ = n, this.appCheckProvider_ = r, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new ti, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = Nt(), this.transactionQueueTree_ = new Ar, this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString()
                    }
                    toString() {
                        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
                    }
                }

                function ui(e, t, n) {
                    if (e.stats_ = ce(e.repoInfo_), e.forceRestClient_ || ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0) e.server_ = new Rt(e.repoInfo_, ((t, data, n, r) => {
                        pi(e, t, data, n, r)
                    }), e.authTokenProvider_, e.appCheckProvider_), setTimeout((() => gi(e, !0)), 0);
                    else {
                        if (null != n) {
                            if ("object" != typeof n) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                            try {
                                Object(c.H)(n)
                            } catch (e) {
                                throw new Error("Invalid authOverride provided: " + e)
                            }
                        }
                        e.persistentConnection_ = new Fe(e.repoInfo_, t, ((t, data, n, r) => {
                            pi(e, t, data, n, r)
                        }), (t => {
                            gi(e, t)
                        }), (t => {
                            ! function (e, t) {
                                z(t, ((t, n) => {
                                    mi(e, t, n)
                                }))
                            }(e, t)
                        }), e.authTokenProvider_, e.appCheckProvider_, n), e.server_ = e.persistentConnection_
                    }
                    e.authTokenProvider_.addTokenChangeListener((t => {
                        e.server_.refreshAuthToken(t)
                    })), e.appCheckProvider_.addTokenChangeListener((t => {
                        e.server_.refreshAppCheckToken(t.token)
                    })), e.statsReporter_ = function (e, t) {
                        const n = e.toString();
                        return ae[n] || (ae[n] = t()), ae[n]
                    }(e.repoInfo_, (() => new Mt(e.stats_, e.server_))), e.infoData_ = new At, e.infoSyncTree_ = new ir({
                        startListening: (t, n, r, o) => {
                            let c = [];
                            const l = e.infoData_.getNode(t._path);
                            return l.isEmpty() || (c = ar(e.infoSyncTree_, t._path, l), setTimeout((() => {
                                o("ok")
                            }), 0)), c
                        },
                        stopListening: () => {}
                    }), mi(e, "connected", !1), e.serverSyncTree_ = new ir({
                        startListening: (t, n, r, o) => (e.server_.listen(t, r, n, ((n, data) => {
                            const r = o(n, data);
                            ii(e.eventQueue_, t._path, r)
                        })), []),
                        stopListening: (t, n) => {
                            e.server_.unlisten(t, n)
                        }
                    })
                }

                function di(e) {
                    const t = e.infoData_.getNode(new Ce(".info/serverTimeOffset")).val() || 0;
                    return (new Date).getTime() + t
                }

                function fi(e) {
                    return kr({
                        timestamp: di(e)
                    })
                }

                function pi(e, t, data, n, r) {
                    e.dataUpdateCount++;
                    const path = new Ce(t);
                    data = e.interceptServerDataCallback_ ? e.interceptServerDataCallback_(t, data) : data;
                    let o = [];
                    if (r)
                        if (n) {
                            const t = Object(c.C)(data, (e => yt(e)));
                            o = function (e, path, t, n) {
                                const r = vr(e, n);
                                if (r) {
                                    const n = wr(r),
                                        o = n.path,
                                        c = n.queryId,
                                        l = Re(o, path),
                                        h = en.fromObject(t);
                                    return Cr(e, o, new Ht(Ft(c), l, h))
                                }
                                return []
                            }(e.serverSyncTree_, path, t, r)
                        } else {
                            const t = yt(data);
                            o = lr(e.serverSyncTree_, path, t, r)
                        }
                    else if (n) {
                        const t = Object(c.C)(data, (e => yt(e)));
                        o = function (e, path, t) {
                            const n = en.fromObject(t);
                            return fr(e, new Ht({
                                fromUser: !1,
                                fromServer: !0,
                                queryId: null,
                                tagged: !1
                            }, path, n))
                        }(e.serverSyncTree_, path, t)
                    } else {
                        const t = yt(data);
                        o = ar(e.serverSyncTree_, path, t)
                    }
                    let l = path;
                    o.length > 0 && (l = Ei(e, path)), ii(e.eventQueue_, l, o)
                }

                function gi(e, t) {
                    mi(e, "connected", t), !1 === t && function (e) {
                        wi(e, "onDisconnectEvents");
                        const t = fi(e),
                            n = Nt();
                        $t(e.onDisconnect_, xe(), ((path, r) => {
                            const o = Pr(path, r, e.serverSyncTree_, t);
                            Dt(n, path, o)
                        }));
                        let r = [];
                        $t(n, xe(), ((path, t) => {
                            r = r.concat(ar(e.serverSyncTree_, path, t));
                            const n = Pi(e, path);
                            Ei(e, n)
                        })), e.onDisconnect_ = Nt(), ii(e.eventQueue_, xe(), r)
                    }(e)
                }

                function mi(e, t, n) {
                    const path = new Ce("/.info/" + t),
                        r = yt(n);
                    e.infoData_.updateSnapshot(path, r);
                    const o = ar(e.infoSyncTree_, path, r);
                    ii(e.eventQueue_, path, o)
                }

                function yi(e) {
                    return e.nextWriteId_++
                }

                function _i(e, path, t, n, r) {
                    wi(e, "set", {
                        path: path.toString(),
                        value: t,
                        priority: n
                    });
                    const o = fi(e),
                        c = yt(t, n),
                        l = dr(e.serverSyncTree_, path),
                        h = jr(c, l, o),
                        d = yi(e),
                        f = sr(e.serverSyncTree_, path, h, d, !0);
                    ni(e.eventQueue_, f), e.server_.put(path.toString(), c.val(!0), ((t, n) => {
                        const o = "ok" === t;
                        o || A("set at " + path + " failed: " + t);
                        const c = or(e.serverSyncTree_, d, !o);
                        ii(e.eventQueue_, path, c), Ci(e, r, t, n)
                    }));
                    const m = Pi(e, path);
                    Ei(e, m), ii(e.eventQueue_, m, [])
                }

                function vi(e, t, n) {
                    let r;
                    r = ".info" === Te(t._path) ? cr(e.infoSyncTree_, t, n) : cr(e.serverSyncTree_, t, n), ri(e.eventQueue_, t._path, r)
                }

                function bi(e) {
                    e.persistentConnection_ && e.persistentConnection_.interrupt(ai)
                }

                function wi(e, ...t) {
                    let n = "";
                    e.persistentConnection_ && (n = e.persistentConnection_.id + ":"), O(n, ...t)
                }

                function Ci(e, t, n, r) {
                    t && V((() => {
                        if ("ok" === n) t(null);
                        else {
                            const code = (n || "error").toUpperCase();
                            let e = code;
                            r && (e += ": " + r);
                            const o = new Error(e);
                            o.code = code, t(o)
                        }
                    }))
                }

                function xi(e, path, t) {
                    return dr(e.serverSyncTree_, path, t) || pt.EMPTY_NODE
                }

                function Ti(e, t = e.transactionQueueTree_) {
                    if (t || Oi(e, t), Dr(t)) {
                        const n = Si(e, t);
                        Object(c.f)(n.length > 0, "Sending zero length transaction queue");
                        n.every((e => 0 === e.status)) && function (e, path, t) {
                            const n = t.map((e => e.currentWriteId)),
                                r = xi(e, path, n);
                            let o = r;
                            const l = r.hash();
                            for (let i = 0; i < t.length; i++) {
                                const e = t[i];
                                Object(c.f)(0 === e.status, "tryToSendTransactionQueue_: items in queue should all be run."), e.status = 1, e.retryCount++;
                                const n = Re(path, e.path);
                                o = o.updateChild(n, e.currentOutputSnapshotRaw)
                            }
                            const h = o.val(!0),
                                d = path;
                            e.server_.put(d.toString(), h, (n => {
                                wi(e, "transaction put response", {
                                    path: d.toString(),
                                    status: n
                                });
                                let r = [];
                                if ("ok" === n) {
                                    const n = [];
                                    for (let i = 0; i < t.length; i++) t[i].status = 2, r = r.concat(or(e.serverSyncTree_, t[i].currentWriteId)), t[i].onComplete && n.push((() => t[i].onComplete(null, !0, t[i].currentOutputSnapshotResolved))), t[i].unwatcher();
                                    Oi(e, Nr(e.transactionQueueTree_, path)), Ti(e, e.transactionQueueTree_), ii(e.eventQueue_, path, r);
                                    for (let i = 0; i < n.length; i++) V(n[i])
                                } else {
                                    if ("datastale" === n)
                                        for (let i = 0; i < t.length; i++) 3 === t[i].status ? t[i].status = 4 : t[i].status = 0;
                                    else {
                                        A("transaction at " + d.toString() + " failed: " + n);
                                        for (let i = 0; i < t.length; i++) t[i].status = 4, t[i].abortReason = n
                                    }
                                    Ei(e, path)
                                }
                            }), l)
                        }(e, Fr(t), n)
                    } else Lr(t) && Mr(t, (t => {
                        Ti(e, t)
                    }))
                }

                function Ei(e, t) {
                    const n = ki(e, t),
                        path = Fr(n);
                    return function (e, t, path) {
                        if (0 === t.length) return;
                        const n = [];
                        let r = [];
                        const o = t.filter((q => 0 === q.status)),
                            l = o.map((q => q.currentWriteId));
                        for (let i = 0; i < t.length; i++) {
                            const o = t[i],
                                d = Re(path, o.path);
                            let f, m = !1;
                            if (Object(c.f)(null !== d, "rerunTransactionsUnderNode_: relativePath should not be null."), 4 === o.status) m = !0, f = o.abortReason, r = r.concat(or(e.serverSyncTree_, o.currentWriteId, !0));
                            else if (0 === o.status)
                                if (o.retryCount >= ci) m = !0, f = "maxretry", r = r.concat(or(e.serverSyncTree_, o.currentWriteId, !0));
                                else {
                                    const n = xi(e, o.path, l);
                                    o.currentInputSnapshot = n;
                                    const h = t[i].update(n.val());
                                    if (void 0 !== h) {
                                        Gr("transaction failed: Data returned ", h, o.path);
                                        let t = yt(h);
                                        "object" == typeof h && null != h && Object(c.l)(h, ".priority") || (t = t.updatePriority(n.getPriority()));
                                        const d = o.currentWriteId,
                                            f = fi(e),
                                            m = jr(t, n, f);
                                        o.currentOutputSnapshotRaw = t, o.currentOutputSnapshotResolved = m, o.currentWriteId = yi(e), l.splice(l.indexOf(d), 1), r = r.concat(sr(e.serverSyncTree_, o.path, m, o.currentWriteId, o.applyLocally)), r = r.concat(or(e.serverSyncTree_, d, !0))
                                    } else m = !0, f = "nodata", r = r.concat(or(e.serverSyncTree_, o.currentWriteId, !0))
                                } ii(e.eventQueue_, path, r), r = [], m && (t[i].status = 2, h = t[i].unwatcher, setTimeout(h, Math.floor(0)), t[i].onComplete && ("nodata" === f ? n.push((() => t[i].onComplete(null, !1, t[i].currentInputSnapshot))) : n.push((() => t[i].onComplete(new Error(f), !1, null)))))
                        }
                        var h;
                        Oi(e, e.transactionQueueTree_);
                        for (let i = 0; i < n.length; i++) V(n[i]);
                        Ti(e, e.transactionQueueTree_)
                    }(e, Si(e, n), path), path
                }

                function ki(e, path) {
                    let t, n = e.transactionQueueTree_;
                    for (t = Te(path); null !== t && void 0 === Dr(n);) n = Nr(n, t), t = Te(path = ke(path));
                    return n
                }

                function Si(e, t) {
                    const n = [];
                    return Ii(e, t, n), n.sort(((a, b) => a.order - b.order)), n
                }

                function Ii(e, t, n) {
                    const r = Dr(t);
                    if (r)
                        for (let i = 0; i < r.length; i++) n.push(r[i]);
                    Mr(t, (t => {
                        Ii(e, t, n)
                    }))
                }

                function Oi(e, t) {
                    const n = Dr(t);
                    if (n) {
                        let e = 0;
                        for (let t = 0; t < n.length; t++) 2 !== n[t].status && (n[e] = n[t], e++);
                        n.length = e, $r(t, n.length > 0 ? n : void 0)
                    }
                    Mr(t, (t => {
                        Oi(e, t)
                    }))
                }

                function Pi(e, path) {
                    const t = Fr(ki(e, path)),
                        n = Nr(e.transactionQueueTree_, path);
                    return function (e, t, n) {
                        let r = n ? e : e.parent;
                        for (; null !== r;) {
                            if (t(r)) return !0;
                            r = r.parent
                        }
                    }(n, (t => {
                        ji(e, t)
                    })), ji(e, n), Ur(n, (t => {
                        ji(e, t)
                    })), t
                }

                function ji(e, t) {
                    const n = Dr(t);
                    if (n) {
                        const r = [];
                        let o = [],
                            l = -1;
                        for (let i = 0; i < n.length; i++) 3 === n[i].status || (1 === n[i].status ? (Object(c.f)(l === i - 1, "All SENT items should be at beginning of queue."), l = i, n[i].status = 3, n[i].abortReason = "set") : (Object(c.f)(0 === n[i].status, "Unexpected transaction status in abort"), n[i].unwatcher(), o = o.concat(or(e.serverSyncTree_, n[i].currentWriteId, !0)), n[i].onComplete && r.push(n[i].onComplete.bind(null, new Error("set"), !1, null)))); - 1 === l ? $r(t, void 0) : n.length = l + 1, ii(e.eventQueue_, Fr(t), o);
                        for (let i = 0; i < r.length; i++) V(r[i])
                    }
                }
                const Ri = function (e, t) {
                        const n = Ai(e),
                            r = n.namespace;
                        "firebase.com" === n.domain && R(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), r && "undefined" !== r || "localhost" === n.domain || R("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && A("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
                        const o = "ws" === n.scheme || "wss" === n.scheme;
                        return {
                            repoInfo: new re(n.host, n.secure, r, o, t, "", r !== n.subdomain),
                            path: new Ce(n.pathString)
                        }
                    },
                    Ai = function (e) {
                        let t = "",
                            n = "",
                            r = "",
                            o = "",
                            c = "",
                            l = !0,
                            h = "https",
                            d = 443;
                        if ("string" == typeof e) {
                            let f = e.indexOf("//");
                            f >= 0 && (h = e.substring(0, f - 1), e = e.substring(f + 2));
                            let m = e.indexOf("/"); - 1 === m && (m = e.length);
                            let y = e.indexOf("?"); - 1 === y && (y = e.length), t = e.substring(0, Math.min(m, y)), m < y && (o = function (e) {
                                let t = "";
                                const n = e.split("/");
                                for (let i = 0; i < n.length; i++)
                                    if (n[i].length > 0) {
                                        let e = n[i];
                                        try {
                                            e = decodeURIComponent(e.replace(/\+/g, " "))
                                        } catch (e) {}
                                        t += "/" + e
                                    } return t
                            }(e.substring(m, y)));
                            const _ = function (e) {
                                const t = {};
                                "?" === e.charAt(0) && (e = e.substring(1));
                                for (const n of e.split("&")) {
                                    if (0 === n.length) continue;
                                    const r = n.split("=");
                                    2 === r.length ? t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]) : A(`Invalid query segment '${n}' in query '${e}'`)
                                }
                                return t
                            }(e.substring(Math.min(e.length, y)));
                            f = t.indexOf(":"), f >= 0 ? (l = "https" === h || "wss" === h, d = parseInt(t.substring(f + 1), 10)) : f = t.length;
                            const v = t.slice(0, f);
                            if ("localhost" === v.toLowerCase()) n = "localhost";
                            else if (v.split(".").length <= 2) n = v;
                            else {
                                const e = t.indexOf(".");
                                r = t.substring(0, e).toLowerCase(), n = t.substring(e + 1), c = r
                            }
                            "ns" in _ && (c = _.ns)
                        }
                        return {
                            host: t,
                            port: d,
                            domain: n,
                            subdomain: r,
                            secure: l,
                            scheme: h,
                            pathString: o,
                            namespace: c
                        }
                    },
                    Ni = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
                ! function () {
                    let e = 0;
                    const t = []
                }();
                class Di {
                    constructor(e, t, n, r) {
                        this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r
                    }
                    getPath() {
                        const e = this.snapshot.ref;
                        return "value" === this.eventType ? e._path : e.parent._path
                    }
                    getEventType() {
                        return this.eventType
                    }
                    getEventRunner() {
                        return this.eventRegistration.getEventRunner(this)
                    }
                    toString() {
                        return this.getPath().toString() + ":" + this.eventType + ":" + Object(c.H)(this.snapshot.exportVal())
                    }
                }
                class $i {
                    constructor(e, t, path) {
                        this.eventRegistration = e, this.error = t, this.path = path
                    }
                    getPath() {
                        return this.path
                    }
                    getEventType() {
                        return "cancel"
                    }
                    getEventRunner() {
                        return this.eventRegistration.getEventRunner(this)
                    }
                    toString() {
                        return this.path.toString() + ":cancel"
                    }
                }
                class Li {
                    constructor(e, t) {
                        this.snapshotCallback = e, this.cancelCallback = t
                    }
                    onValue(e, t) {
                        this.snapshotCallback.call(null, e, t)
                    }
                    onCancel(e) {
                        return Object(c.f)(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e)
                    }
                    get hasCancelCallback() {
                        return !!this.cancelCallback
                    }
                    matches(e) {
                        return this.snapshotCallback === e.snapshotCallback || void 0 !== this.snapshotCallback.userCallback && this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context
                    }
                }
                class Mi {
                    constructor(e, t, n, r) {
                        this._repo = e, this._path = t, this._queryParams = n, this._orderByCalled = r
                    }
                    get key() {
                        return je(this._path) ? null : Se(this._path)
                    }
                    get ref() {
                        return new qi(this._repo, this._path)
                    }
                    get _queryIdentifier() {
                        const e = jt(this._queryParams),
                            t = F(e);
                        return "{}" === t ? "default" : t
                    }
                    get _queryObject() {
                        return jt(this._queryParams)
                    }
                    isEqual(e) {
                        if (!((e = Object(c.s)(e)) instanceof Mi)) return !1;
                        const t = this._repo === e._repo,
                            n = Ae(this._path, e._path),
                            r = this._queryIdentifier === e._queryIdentifier;
                        return t && n && r
                    }
                    toJSON() {
                        return this.toString()
                    }
                    toString() {
                        return this._repo.toString() + function (path) {
                            let e = "";
                            for (let i = path.pieceNum_; i < path.pieces_.length; i++) "" !== path.pieces_[i] && (e += "/" + encodeURIComponent(String(path.pieces_[i])));
                            return e || "/"
                        }(this._path)
                    }
                }

                function Ui(e, t) {
                    if (!0 === e._orderByCalled) throw new Error(t + ": You can't combine multiple orderBy calls.")
                }

                function Fi(e) {
                    let t = null,
                        n = null;
                    if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === We) {
                        const r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                            o = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
                        if (e.hasStart()) {
                            if (e.getIndexStartName() !== D) throw new Error(r);
                            if ("string" != typeof t) throw new Error(o)
                        }
                        if (e.hasEnd()) {
                            if (e.getIndexEndName() !== $) throw new Error(r);
                            if ("string" != typeof n) throw new Error(o)
                        }
                    } else if (e.getIndex() === st) {
                        if (null != t && !Vr(t) || null != n && !Vr(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")
                    } else if (Object(c.f)(e.getIndex() instanceof _t || e.getIndex() === vt, "unknown index type."), null != t && "object" == typeof t || null != n && "object" == typeof n) throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")
                }

                function Bi(e) {
                    if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")
                }
                class qi extends Mi {
                    constructor(e, path) {
                        super(e, path, new St, !1)
                    }
                    get parent() {
                        const e = Oe(this._path);
                        return null === e ? null : new qi(this._repo, e)
                    }
                    get root() {
                        let e = this;
                        for (; null !== e.parent;) e = e.parent;
                        return e
                    }
                }
                class zi {
                    constructor(e, t, n) {
                        this._node = e, this.ref = t, this._index = n
                    }
                    get priority() {
                        return this._node.getPriority().val()
                    }
                    get key() {
                        return this.ref.key
                    }
                    get size() {
                        return this._node.numChildren()
                    }
                    child(path) {
                        const e = new Ce(path),
                            t = Wi(this.ref, path);
                        return new zi(this._node.getChild(e), t, st)
                    }
                    exists() {
                        return !this._node.isEmpty()
                    }
                    exportVal() {
                        return this._node.val(!0)
                    }
                    forEach(e) {
                        if (this._node.isLeafNode()) return !1;
                        return !!this._node.forEachChild(this._index, ((t, n) => e(new zi(n, Wi(this.ref, t), st))))
                    }
                    hasChild(path) {
                        const e = new Ce(path);
                        return !this._node.getChild(e).isEmpty()
                    }
                    hasChildren() {
                        return !this._node.isLeafNode() && !this._node.isEmpty()
                    }
                    toJSON() {
                        return this.exportVal()
                    }
                    val() {
                        return this._node.val()
                    }
                }

                function Hi(e, path) {
                    return (e = Object(c.s)(e))._checkNotDeleted("ref"), void 0 !== path ? Wi(e._root, path) : e._root
                }

                function Wi(e, path) {
                    return null === Te((e = Object(c.s)(e))._path) ? Xr("child", "path", path, !1) : Qr("child", "path", path, !1), new qi(e._repo, Pe(e._path, path))
                }

                function Yi(e) {
                    return Zr("remove", e._path), Vi(e, null)
                }

                function Vi(e, t) {
                    e = Object(c.s)(e), Zr("set", e._path), Kr("set", t, e._path, !1);
                    const n = new c.a;
                    return _i(e._repo, e._path, t, null, n.wrapCallback((() => {}))), n.promise
                }
                class Ki {
                    constructor(e) {
                        this.callbackContext = e
                    }
                    respondsTo(e) {
                        return "value" === e
                    }
                    createEvent(e, t) {
                        const n = t._queryParams.getIndex();
                        return new Di("value", this, new zi(e.snapshotNode, new qi(t._repo, t._path), n))
                    }
                    getEventRunner(e) {
                        return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null)
                    }
                    createCancelEvent(e, path) {
                        return this.callbackContext.hasCancelCallback ? new $i(this, e, path) : null
                    }
                    matches(e) {
                        return e instanceof Ki && (!e.callbackContext || !this.callbackContext || e.callbackContext.matches(this.callbackContext))
                    }
                    hasAnyCallback() {
                        return null !== this.callbackContext
                    }
                }
                class Gi {
                    constructor(e, t) {
                        this.eventType = e, this.callbackContext = t
                    }
                    respondsTo(e) {
                        let t = "children_added" === e ? "child_added" : e;
                        return t = "children_removed" === t ? "child_removed" : t, this.eventType === t
                    }
                    createCancelEvent(e, path) {
                        return this.callbackContext.hasCancelCallback ? new $i(this, e, path) : null
                    }
                    createEvent(e, t) {
                        Object(c.f)(null != e.childName, "Child events should have a childName.");
                        const n = Wi(new qi(t._repo, t._path), e.childName),
                            r = t._queryParams.getIndex();
                        return new Di(e.type, this, new zi(e.snapshotNode, n, r), e.prevName)
                    }
                    getEventRunner(e) {
                        return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, e.prevName)
                    }
                    matches(e) {
                        return e instanceof Gi && (this.eventType === e.eventType && (!this.callbackContext || !e.callbackContext || this.callbackContext.matches(e.callbackContext)))
                    }
                    hasAnyCallback() {
                        return !!this.callbackContext
                    }
                }

                function Ji(e, t, n, r, o) {
                    let c;
                    if ("object" == typeof r && (c = void 0, o = r), "function" == typeof r && (c = r), o && o.onlyOnce) {
                        const t = n,
                            r = (n, r) => {
                                vi(e._repo, e, h), t(n, r)
                            };
                        r.userCallback = n.userCallback, r.context = n.context, n = r
                    }
                    const l = new Li(n, c || void 0),
                        h = "value" === t ? new Ki(l) : new Gi(t, l);
                    return function (e, t, n) {
                        let r;
                        r = ".info" === Te(t._path) ? ur(e.infoSyncTree_, t, n) : ur(e.serverSyncTree_, t, n), ri(e.eventQueue_, t._path, r)
                    }(e._repo, e, h), () => vi(e._repo, e, h)
                }

                function Qi(e, t, n, r) {
                    return Ji(e, "value", t, n, r)
                }

                function Xi(e, t, n, r) {
                    return Ji(e, "child_added", t, n, r)
                }

                function Zi(e, t, n) {
                    let r = null;
                    const o = n ? new Li(n) : null;
                    "value" === t ? r = new Ki(o) : t && (r = new Gi(t, o)), vi(e._repo, e, r)
                }
                class es {}
                class ts extends es {
                    constructor(e, t) {
                        super(), this._value = e, this._key = t
                    }
                    _apply(e) {
                        Kr("startAt", this._value, e._path, !0);
                        const t = It(e._queryParams, this._value, this._key);
                        if (Bi(t), Fi(t), e._queryParams.hasStart()) throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");
                        return new Mi(e._repo, e._path, t, e._orderByCalled)
                    }
                }

                function ns(e = null, t) {
                    return Jr("startAt", "key", t, !0), new ts(e, t)
                }
                class rs extends es {
                    constructor(e) {
                        super(), this._limit = e
                    }
                    _apply(e) {
                        if (e._queryParams.hasLimit()) throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");
                        return new Mi(e._repo, e._path, function (e, t) {
                            const n = e.copy();
                            return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = "r", n
                        }(e._queryParams, this._limit), e._orderByCalled)
                    }
                }

                function is(e) {
                    if ("number" != typeof e || Math.floor(e) !== e || e <= 0) throw new Error("limitToLast: First argument must be a positive integer.");
                    return new rs(e)
                }
                class ss extends es {
                    constructor(e) {
                        super(), this._path = e
                    }
                    _apply(e) {
                        Ui(e, "orderByChild");
                        const t = new Ce(this._path);
                        if (je(t)) throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");
                        const n = new _t(t),
                            r = Ot(e._queryParams, n);
                        return Fi(r), new Mi(e._repo, e._path, r, !0)
                    }
                }

                function os(path) {
                    if ("$key" === path) throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');
                    if ("$priority" === path) throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');
                    if ("$value" === path) throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');
                    return Qr("orderByChild", "path", path, !1), new ss(path)
                }

                function as(e, ...t) {
                    let n = Object(c.s)(e);
                    for (const e of t) n = e._apply(n);
                    return n
                }! function (e) {
                    Object(c.f)(!zn, "__referenceConstructor has already been defined"), zn = e
                }(qi),
                function (e) {
                    Object(c.f)(!Hn, "__referenceConstructor has already been defined"), Hn = e
                }(qi);
                const cs = "FIREBASE_DATABASE_EMULATOR_HOST",
                    ls = {};
                let hs = !1;

                function us(t, n, r, o, c) {
                    let l = o || t.options.databaseURL;
                    void 0 === l && (t.options.projectId || R("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), O("Using default host for project ", t.options.projectId), l = `${t.options.projectId}-default-rtdb.firebaseio.com`);
                    let h, d, f = Ri(l, c),
                        m = f.repoInfo;
                    void 0 !== e && e.env && (d = e.env[cs]), d ? (h = !0, l = `http://${d}?ns=${m.namespace}`, f = Ri(l, c), m = f.repoInfo) : h = !f.repoInfo.secure;
                    const y = c && h ? new Q(Q.OWNER) : new J(t.name, t.options, n);
                    ei("Invalid Firebase Database URL", f), je(f.path) || R("Database URL must point to the root of a Firebase Database (not including a child path).");
                    const _ = function (e, t, n, r) {
                        let o = ls[t.name];
                        o || (o = {}, ls[t.name] = o);
                        let c = o[e.toURLString()];
                        c && R("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
                        return c = new hi(e, hs, n, r), o[e.toURLString()] = c, c
                    }(m, t, y, new G(t.name, r));
                    return new ds(_, t)
                }
                class ds {
                    constructor(e, t) {
                        this._repoInternal = e, this.app = t, this.type = "database", this._instanceStarted = !1
                    }
                    get _repo() {
                        return this._instanceStarted || (ui(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal
                    }
                    get _root() {
                        return this._rootInternal || (this._rootInternal = new qi(this._repo, xe())), this._rootInternal
                    }
                    _delete() {
                        return null !== this._rootInternal && (! function (e, t) {
                            const n = ls[t];
                            n && n[e.key] === e || R(`Database ${t}(${e.repoInfo_}) has already been deleted.`), bi(e), delete n[e.key]
                        }(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve()
                    }
                    _checkNotDeleted(e) {
                        null === this._rootInternal && R("Cannot call " + e + " on a deleted database.")
                    }
                }

                function fs(e = Object(r.d)(), t) {
                    const n = Object(r.b)(e, "database").getImmediate({
                        identifier: t
                    });
                    if (!n._instanceStarted) {
                        const e = Object(c.r)("database");
                        e && function (e, t, n, r = {}) {
                            e = Object(c.s)(e), e._checkNotDeleted("useEmulator"), e._instanceStarted && R("Cannot call useEmulator() after instance has already been initialized.");
                            const o = e._repoInternal;
                            let l;
                            if (o.repoInfo_.nodeAdmin) r.mockUserToken && R('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), l = new Q(Q.OWNER);
                            else if (r.mockUserToken) {
                                const t = "string" == typeof r.mockUserToken ? r.mockUserToken : Object(c.m)(r.mockUserToken, e.app.options.projectId);
                                l = new Q(t)
                            }! function (e, t, n, r) {
                                e.repoInfo_ = new re(`${t}:${n}`, !1, e.repoInfo_.namespace, e.repoInfo_.webSocketOnly, e.repoInfo_.nodeAdmin, e.repoInfo_.persistenceKey, e.repoInfo_.includeNamespaceInQueryParams, !0), r && (e.authTokenProvider_ = r)
                            }(o, t, n, l)
                        }(n, ...e)
                    }
                    return n
                }
                Fe.prototype.simpleListen = function (e, t) {
                    this.sendRequest("q", {
                        p: e
                    }, t)
                }, Fe.prototype.echo = function (data, e) {
                    this.sendRequest("echo", {
                        d: data
                    }, e)
                };
                var ps;
                ! function (e) {
                    f = e
                }(r.a), Object(r.c)(new o.a("database", ((e, {
                    instanceIdentifier: t
                }) => us(e.getProvider("app").getImmediate(), e.getProvider("auth-internal"), e.getProvider("app-check-internal"), t)), "PUBLIC").setMultipleInstances(!0)), Object(r.f)(h, d, ps), Object(r.f)(h, d, "esm2017")
            }).call(this, n(90))
        },
        235: function (e, t, n) {
            e.exports = function () {
                "use strict";
                var e = "minute",
                    i = /[+-]\d\d(?::?\d\d)?/g,
                    t = /([+-]|\d\d)/g;
                return function (s, n, r) {
                    var u = n.prototype;
                    r.utc = function (e) {
                        return new n({
                            date: e,
                            utc: !0,
                            args: arguments
                        })
                    }, u.utc = function (i) {
                        var t = r(this.toDate(), {
                            locale: this.$L,
                            utc: !0
                        });
                        return i ? t.add(this.utcOffset(), e) : t
                    }, u.local = function () {
                        return r(this.toDate(), {
                            locale: this.$L,
                            utc: !1
                        })
                    };
                    var o = u.parse;
                    u.parse = function (e) {
                        e.utc && (this.$u = !0), this.$utils().u(e.$offset) || (this.$offset = e.$offset), o.call(this, e)
                    };
                    var c = u.init;
                    u.init = function () {
                        if (this.$u) {
                            var e = this.$d;
                            this.$y = e.getUTCFullYear(), this.$M = e.getUTCMonth(), this.$D = e.getUTCDate(), this.$W = e.getUTCDay(), this.$H = e.getUTCHours(), this.$m = e.getUTCMinutes(), this.$s = e.getUTCSeconds(), this.$ms = e.getUTCMilliseconds()
                        } else c.call(this)
                    };
                    var a = u.utcOffset;
                    u.utcOffset = function (s, n) {
                        var r = this.$utils().u;
                        if (r(s)) return this.$u ? 0 : r(this.$offset) ? a.call(this) : this.$offset;
                        if ("string" == typeof s && (s = function (e) {
                                void 0 === e && (e = "");
                                var s = e.match(i);
                                if (!s) return null;
                                var n = ("" + s[0]).match(t) || ["-", 0, 0],
                                    r = n[0],
                                    u = 60 * +n[1] + +n[2];
                                return 0 === u ? 0 : "+" === r ? u : -u
                            }(s), null === s)) return this;
                        var u = Math.abs(s) <= 16 ? 60 * s : s,
                            o = this;
                        if (n) return o.$offset = u, o.$u = 0 === s, o;
                        if (0 !== s) {
                            var c = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                            (o = this.local().add(u + c, e)).$offset = u, o.$x.$localOffset = c
                        } else o = this.utc();
                        return o
                    };
                    var l = u.format;
                    u.format = function (e) {
                        var i = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                        return l.call(this, i)
                    }, u.valueOf = function () {
                        var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                        return this.$d.valueOf() - 6e4 * e
                    }, u.isUTC = function () {
                        return !!this.$u
                    }, u.toISOString = function () {
                        return this.toDate().toISOString()
                    }, u.toString = function () {
                        return this.toDate().toUTCString()
                    };
                    var h = u.toDate;
                    u.toDate = function (e) {
                        return "s" === e && this.$offset ? r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : h.call(this)
                    };
                    var d = u.diff;
                    u.diff = function (e, i, t) {
                        if (e && this.$u === e.$u) return d.call(this, e, i, t);
                        var s = this.local(),
                            n = r(e).local();
                        return d.call(s, n, i, t)
                    }
                }
            }()
        },
        246: function (e, t, n) {
            "use strict";
            t.a = function (e, t) {
                return t = t || {}, new Promise((function (n, r) {
                    var s = new XMLHttpRequest,
                        o = [],
                        u = [],
                        i = {},
                        a = function () {
                            return {
                                ok: 2 == (s.status / 100 | 0),
                                statusText: s.statusText,
                                status: s.status,
                                url: s.responseURL,
                                text: function () {
                                    return Promise.resolve(s.responseText)
                                },
                                json: function () {
                                    return Promise.resolve(s.responseText).then(JSON.parse)
                                },
                                blob: function () {
                                    return Promise.resolve(new Blob([s.response]))
                                },
                                clone: a,
                                headers: {
                                    keys: function () {
                                        return o
                                    },
                                    entries: function () {
                                        return u
                                    },
                                    get: function (e) {
                                        return i[e.toLowerCase()]
                                    },
                                    has: function (e) {
                                        return e.toLowerCase() in i
                                    }
                                }
                            }
                        };
                    for (var c in s.open(t.method || "get", e, !0), s.onload = function () {
                            s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function (e, t, n) {
                                o.push(t = t.toLowerCase()), u.push([t, n]), i[t] = i[t] ? i[t] + "," + n : n
                            })), n(a())
                        }, s.onerror = r, s.withCredentials = "include" == t.credentials, t.headers) s.setRequestHeader(c, t.headers[c]);
                    s.send(t.body || null)
                }))
            }
        },
        248: function (e, t, n) {
            "use strict";
            var r = function (e) {
                return function (e) {
                    return !!e && "object" == typeof e
                }(e) && ! function (e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                        return e.$$typeof === o
                    }(e)
                }(e)
            };
            var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function c(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? m((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }

            function l(e, source, t) {
                return e.concat(source).map((function (element) {
                    return c(element, t)
                }))
            }

            function h(e) {
                return Object.keys(e).concat(function (e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function (symbol) {
                        return Object.propertyIsEnumerable.call(e, symbol)
                    })) : []
                }(e))
            }

            function d(object, e) {
                try {
                    return e in object
                } catch (e) {
                    return !1
                }
            }

            function f(e, source, t) {
                var n = {};
                return t.isMergeableObject(e) && h(e).forEach((function (r) {
                    n[r] = c(e[r], t)
                })), h(source).forEach((function (r) {
                    (function (e, t) {
                        return d(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, r) || (d(e, r) && t.isMergeableObject(source[r]) ? n[r] = function (e, t) {
                        if (!t.customMerge) return m;
                        var n = t.customMerge(e);
                        return "function" == typeof n ? n : m
                    }(r, t)(e[r], source[r], t) : n[r] = c(source[r], t))
                })), n
            }

            function m(e, source, t) {
                (t = t || {}).arrayMerge = t.arrayMerge || l, t.isMergeableObject = t.isMergeableObject || r, t.cloneUnlessOtherwiseSpecified = c;
                var n = Array.isArray(source);
                return n === Array.isArray(e) ? n ? t.arrayMerge(e, source, t) : f(e, source, t) : c(source, t)
            }
            m.all = function (e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function (e, n) {
                    return m(e, n, t)
                }), {})
            };
            var y = m;
            e.exports = y
        },
        249: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return d
            }));
            var r = n(169),
                o = n(21);
            n(41), n(15), n(103);

            function c(e) {
                return null !== e && "object" === Object(o.a)(e)
            }

            function l(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".",
                    o = arguments.length > 3 ? arguments[3] : void 0;
                if (!c(t)) return l(e, {}, n, o);
                var object = Object.assign({}, t);
                for (var h in e)
                    if ("__proto__" !== h && "constructor" !== h) {
                        var d = e[h];
                        null != d && (o && o(object, h, d, n) || (Array.isArray(d) && Array.isArray(object[h]) ? object[h] = [].concat(Object(r.a)(d), Object(r.a)(object[h])) : c(d) && c(object[h]) ? object[h] = l(d, object[h], (n ? "".concat(n, ".") : "") + h.toString(), o) : object[h] = d))
                    } return object
            }

            function h(e) {
                return function () {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return n.reduce((function (p, t) {
                        return l(p, t, "", e)
                    }), {})
                }
            }
            var d = h();
            h((function (object, e, t) {
                if (void 0 !== object[e] && "function" == typeof t) return object[e] = t(object[e]), !0
            })), h((function (object, e, t) {
                if (Array.isArray(object[e]) && "function" == typeof t) return object[e] = t(object[e]), !0
            }))
        },
        250: function (e, t, n) {
            "use strict";
            var r = n(11);
            n.d(t, "a", (function () {
                return r.e
            }));
            Object(r.f)("firebase", "9.20.0", "app")
        },
        251: function (e, t, n) {
            var r;
            if ("object" == typeof globalThis) r = globalThis;
            else try {
                r = n(378)
            } catch (e) {} finally {
                if (r || "undefined" == typeof window || (r = window), !r) throw new Error("Could not determine global this")
            }
            var o = r.WebSocket || r.MozWebSocket,
                c = n(379);

            function l(e, t) {
                return t ? new o(e, t) : new o(e)
            }
            o && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach((function (e) {
                Object.defineProperty(l, e, {
                    get: function () {
                        return o[e]
                    }
                })
            })), e.exports = {
                w3cwebsocket: o ? l : null,
                version: c
            }
        },
        252: function (e, t, n) {
            var r;
            r = function (e) {
                return function (e) {
                    var t = {};

                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var o = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                    }
                    return n.m = e, n.c = t, n.i = function (e) {
                        return e
                    }, n.d = function (e, t, r) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    }, n.n = function (e) {
                        var t = e && e.__esModule ? function () {
                            return e.default
                        } : function () {
                            return e
                        };
                        return n.d(t, "a", t), t
                    }, n.o = function (object, e) {
                        return Object.prototype.hasOwnProperty.call(object, e)
                    }, n.p = "/dist/", n(n.s = 2)
                }([function (e, t) {
                    e.exports = function (e, t, n, r) {
                        var o, c = e = e || {},
                            l = typeof e.default;
                        "object" !== l && "function" !== l || (o = e, c = e.default);
                        var h = "function" == typeof c ? c.options : c;
                        if (t && (h.render = t.render, h.staticRenderFns = t.staticRenderFns), n && (h._scopeId = n), r) {
                            var d = Object.create(h.computed || null);
                            Object.keys(r).forEach((function (e) {
                                var t = r[e];
                                d[e] = function () {
                                    return t
                                }
                            })), h.computed = d
                        }
                        return {
                            esModule: o,
                            exports: c,
                            options: h
                        }
                    }
                }, function (e, t, n) {
                    "use strict";
                    n.d(t, "a", (function () {
                        return o
                    }));
                    var r = n(20),
                        o = new(n.n(r).a)({
                            name: "vue-notification"
                        })
                }, function (e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(3),
                        o = n.n(r),
                        c = n(1),
                        l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        h = {
                            install: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (!this.installed) {
                                    this.installed = !0, this.params = t, e.component(t.componentName || "notifications", o.a);
                                    var n = function (e) {
                                        "string" == typeof e && (e = {
                                            title: "",
                                            text: e
                                        }), "object" === (void 0 === e ? "undefined" : l(e)) && c.a.$emit("add", e)
                                    };
                                    n.close = function (e) {
                                        c.a.$emit("close", e)
                                    };
                                    var r = t.name || "notify";
                                    e.prototype["$" + r] = n, e[r] = n
                                }
                            }
                        };
                    t.default = h
                }, function (e, t, n) {
                    n(17);
                    var r = n(0)(n(5), n(15), null, null);
                    e.exports = r.exports
                }, function (e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = {
                        name: "CssGroup",
                        props: ["name"]
                    }
                }, function (e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(2),
                        o = n(1),
                        c = n(9),
                        l = n(7),
                        h = n(13),
                        d = n.n(h),
                        f = n(12),
                        m = n.n(f),
                        y = n(8),
                        _ = 0,
                        v = 2,
                        w = {
                            name: "Notifications",
                            components: {
                                VelocityGroup: d.a,
                                CssGroup: m.a
                            },
                            props: {
                                group: {
                                    type: String,
                                    default: ""
                                },
                                width: {
                                    type: [Number, String],
                                    default: 300
                                },
                                reverse: {
                                    type: Boolean,
                                    default: !1
                                },
                                position: {
                                    type: [String, Array],
                                    default: function () {
                                        return l.a.position
                                    }
                                },
                                classes: {
                                    type: String,
                                    default: "vue-notification"
                                },
                                animationType: {
                                    type: String,
                                    default: "css",
                                    validator: function (e) {
                                        return "css" === e || "velocity" === e
                                    }
                                },
                                animation: {
                                    type: Object,
                                    default: function () {
                                        return l.a.velocityAnimation
                                    }
                                },
                                animationName: {
                                    type: String,
                                    default: l.a.cssAnimation
                                },
                                speed: {
                                    type: Number,
                                    default: 300
                                },
                                cooldown: {
                                    type: Number,
                                    default: 0
                                },
                                duration: {
                                    type: Number,
                                    default: 3e3
                                },
                                delay: {
                                    type: Number,
                                    default: 0
                                },
                                max: {
                                    type: Number,
                                    default: 1 / 0
                                },
                                ignoreDuplicates: {
                                    type: Boolean,
                                    default: !1
                                },
                                closeOnClick: {
                                    type: Boolean,
                                    default: !0
                                }
                            },
                            data: function () {
                                return {
                                    list: [],
                                    velocity: r.default.params.velocity
                                }
                            },
                            mounted: function () {
                                o.a.$on("add", this.addItem), o.a.$on("close", this.closeItem)
                            },
                            computed: {
                                actualWidth: function () {
                                    return n.i(y.a)(this.width)
                                },
                                isVA: function () {
                                    return "velocity" === this.animationType
                                },
                                componentName: function () {
                                    return this.isVA ? "VelocityGroup" : "CssGroup"
                                },
                                styles: function () {
                                    var e, t, r, o = n.i(c.a)(this.position),
                                        l = o.x,
                                        h = o.y,
                                        d = this.actualWidth.value,
                                        f = this.actualWidth.type,
                                        m = (r = "0px", (t = h) in (e = {
                                            width: d + f
                                        }) ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = r, e);
                                    return "center" === l ? m.left = "calc(50% - " + d / 2 + f + ")" : m[l] = "0px", m
                                },
                                active: function () {
                                    return this.list.filter((function (e) {
                                        return e.state !== v
                                    }))
                                },
                                botToTop: function () {
                                    return this.styles.hasOwnProperty("bottom")
                                }
                            },
                            methods: {
                                destroyIfNecessary: function (e) {
                                    this.closeOnClick && this.destroy(e)
                                },
                                addItem: function (e) {
                                    var t = this;
                                    if (e.group = e.group || "", this.group === e.group)
                                        if (e.clean || e.clear) this.destroyAll();
                                        else {
                                            var r = "number" == typeof e.duration ? e.duration : this.duration,
                                                o = "number" == typeof e.speed ? e.speed : this.speed,
                                                l = "boolean" == typeof e.ignoreDuplicates ? e.ignoreDuplicates : this.ignoreDuplicates,
                                                title = e.title,
                                                text = e.text,
                                                h = e.type,
                                                data = e.data,
                                                d = {
                                                    id: e.id || n.i(c.b)(),
                                                    title: title,
                                                    text: text,
                                                    type: h,
                                                    state: _,
                                                    speed: o,
                                                    length: r + 2 * o,
                                                    data: data
                                                };
                                            r >= 0 && (d.timer = setTimeout((function () {
                                                t.destroy(d)
                                            }), d.length));
                                            var f = this.reverse ? !this.botToTop : this.botToTop,
                                                m = -1,
                                                y = this.active.some((function (t) {
                                                    return t.title === e.title && t.text === e.text
                                                }));
                                            (!l || !y) && (f ? (this.list.push(d), this.active.length > this.max && (m = 0)) : (this.list.unshift(d), this.active.length > this.max && (m = this.active.length - 1)), -1 !== m && this.destroy(this.active[m]))
                                        }
                                },
                                closeItem: function (e) {
                                    this.destroyById(e)
                                },
                                notifyClass: function (e) {
                                    return ["vue-notification-template", this.classes, e.type]
                                },
                                notifyWrapperStyle: function (e) {
                                    return this.isVA ? null : {
                                        transition: "all " + e.speed + "ms"
                                    }
                                },
                                destroy: function (e) {
                                    clearTimeout(e.timer), e.state = v, this.isVA || this.clean()
                                },
                                destroyById: function (e) {
                                    var t = this.list.find((function (t) {
                                        return t.id === e
                                    }));
                                    t && this.destroy(t)
                                },
                                destroyAll: function () {
                                    this.active.forEach(this.destroy)
                                },
                                getAnimation: function (e, t) {
                                    var n = this.animation[e];
                                    return "function" == typeof n ? n.call(this, t) : n
                                },
                                enter: function (e) {
                                    var t = e.el,
                                        n = e.complete,
                                        r = this.getAnimation("enter", t);
                                    this.velocity(t, r, {
                                        duration: this.speed,
                                        complete: n
                                    })
                                },
                                leave: function (e) {
                                    var t = e.el,
                                        n = e.complete,
                                        r = this.getAnimation("leave", t);
                                    this.velocity(t, r, {
                                        duration: this.speed,
                                        complete: n
                                    })
                                },
                                clean: function () {
                                    this.list = this.list.filter((function (e) {
                                        return e.state !== v
                                    }))
                                }
                            }
                        };
                    t.default = w
                }, function (e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = {
                        name: "VelocityGroup",
                        methods: {
                            enter: function (e, t) {
                                this.$emit("enter", {
                                    el: e,
                                    complete: t
                                })
                            },
                            leave: function (e, t) {
                                this.$emit("leave", {
                                    el: e,
                                    complete: t
                                })
                            },
                            afterLeave: function () {
                                this.$emit("afterLeave")
                            }
                        }
                    }
                }, function (e, t, n) {
                    "use strict";
                    t.a = {
                        position: ["top", "right"],
                        cssAnimation: "vn-fade",
                        velocityAnimation: {
                            enter: function (e) {
                                return {
                                    height: [e.clientHeight, 0],
                                    opacity: [1, 0]
                                }
                            },
                            leave: {
                                height: 0,
                                opacity: [0, 1]
                            }
                        }
                    }
                }, function (e, t, n) {
                    "use strict";
                    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        o = "[-+]?[0-9]*.?[0-9]+",
                        c = [{
                            name: "px",
                            regexp: new RegExp("^" + o + "px$")
                        }, {
                            name: "%",
                            regexp: new RegExp("^" + o + "%$")
                        }, {
                            name: "px",
                            regexp: new RegExp("^" + o + "$")
                        }];
                    t.a = function (e) {
                        switch (void 0 === e ? "undefined" : r(e)) {
                            case "number":
                                return {
                                    type: "px", value: e
                                };
                            case "string":
                                return function (e) {
                                    if ("auto" === e) return {
                                        type: e,
                                        value: 0
                                    };
                                    for (var i = 0; i < c.length; i++) {
                                        var t = c[i];
                                        if (t.regexp.test(e)) return {
                                            type: t.name,
                                            value: parseFloat(e)
                                        }
                                    }
                                    return {
                                        type: "",
                                        value: e
                                    }
                                }(e);
                            default:
                                return {
                                    type: "", value: e
                                }
                        }
                    }
                }, function (e, t, n) {
                    "use strict";
                    n.d(t, "b", (function () {
                        return o
                    })), n.d(t, "a", (function () {
                        return c
                    }));
                    var i, r = {
                            x: ["left", "center", "right"],
                            y: ["top", "bottom"]
                        },
                        o = (i = 0, function () {
                            return i++
                        }),
                        c = function (e) {
                            "string" == typeof e && (e = function (e) {
                                return "string" != typeof e ? [] : e.split(/\s+/gi).filter((function (e) {
                                    return e
                                }))
                            }(e));
                            var t = null,
                                n = null;
                            return e.forEach((function (e) {
                                -1 !== r.y.indexOf(e) && (n = e), -1 !== r.x.indexOf(e) && (t = e)
                            })), {
                                x: t,
                                y: n
                            }
                        }
                }, function (e, t, n) {
                    (e.exports = n(11)()).push([e.i, ".vue-notification-group{display:block;position:fixed;z-index:5000}.vue-notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification-title{font-weight:600}.vue-notification-template{background:#fff}.vue-notification,.vue-notification-template{display:block;box-sizing:border-box;text-align:left}.vue-notification{font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44a4fc;border-left:5px solid #187fe7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#e54d42;border-left-color:#b82e24}.vue-notification.success{background:#68cd86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter,.vn-fade-leave-to{opacity:0}", ""])
                }, function (e, t) {
                    e.exports = function () {
                        var e = [];
                        return e.toString = function () {
                            for (var e = [], i = 0; i < this.length; i++) {
                                var t = this[i];
                                t[2] ? e.push("@media " + t[2] + "{" + t[1] + "}") : e.push(t[1])
                            }
                            return e.join("")
                        }, e.i = function (t, n) {
                            "string" == typeof t && (t = [
                                [null, t, ""]
                            ]);
                            for (var r = {}, i = 0; i < this.length; i++) {
                                var o = this[i][0];
                                "number" == typeof o && (r[o] = !0)
                            }
                            for (i = 0; i < t.length; i++) {
                                var c = t[i];
                                "number" == typeof c[0] && r[c[0]] || (n && !c[2] ? c[2] = n : n && (c[2] = "(" + c[2] + ") and (" + n + ")"), e.push(c))
                            }
                        }, e
                    }
                }, function (e, t, n) {
                    var r = n(0)(n(4), n(16), null, null);
                    e.exports = r.exports
                }, function (e, t, n) {
                    var r = n(0)(n(6), n(14), null, null);
                    e.exports = r.exports
                }, function (e, t) {
                    e.exports = {
                        render: function () {
                            var e = this,
                                t = e.$createElement;
                            return (e._self._c || t)("transition-group", {
                                attrs: {
                                    css: !1
                                },
                                on: {
                                    enter: e.enter,
                                    leave: e.leave,
                                    "after-leave": e.afterLeave
                                }
                            }, [e._t("default")], 2)
                        },
                        staticRenderFns: []
                    }
                }, function (e, t) {
                    e.exports = {
                        render: function () {
                            var e = this,
                                t = e.$createElement,
                                n = e._self._c || t;
                            return n("div", {
                                staticClass: "vue-notification-group",
                                style: e.styles
                            }, [n(e.componentName, {
                                tag: "component",
                                attrs: {
                                    name: e.animationName
                                },
                                on: {
                                    enter: e.enter,
                                    leave: e.leave,
                                    "after-leave": e.clean
                                }
                            }, e._l(e.active, (function (t) {
                                return n("div", {
                                    key: t.id,
                                    staticClass: "vue-notification-wrapper",
                                    style: e.notifyWrapperStyle(t),
                                    attrs: {
                                        "data-id": t.id
                                    }
                                }, [e._t("body", [n("div", {
                                    class: e.notifyClass(t),
                                    on: {
                                        click: function (n) {
                                            return e.destroyIfNecessary(t)
                                        }
                                    }
                                }, [t.title ? n("div", {
                                    staticClass: "notification-title",
                                    domProps: {
                                        innerHTML: e._s(t.title)
                                    }
                                }) : e._e(), e._v(" "), n("div", {
                                    staticClass: "notification-content",
                                    domProps: {
                                        innerHTML: e._s(t.text)
                                    }
                                })])], {
                                    item: t,
                                    close: function () {
                                        return e.destroy(t)
                                    }
                                })], 2)
                            })), 0)], 1)
                        },
                        staticRenderFns: []
                    }
                }, function (e, t) {
                    e.exports = {
                        render: function () {
                            var e = this,
                                t = e.$createElement;
                            return (e._self._c || t)("transition-group", {
                                attrs: {
                                    name: e.name
                                }
                            }, [e._t("default")], 2)
                        },
                        staticRenderFns: []
                    }
                }, function (e, t, n) {
                    var content = n(10);
                    "string" == typeof content && (content = [
                        [e.i, content, ""]
                    ]), content.locals && (e.exports = content.locals), n(18)("2901aeae", content, !0)
                }, function (e, t, n) {
                    var r = "undefined" != typeof document;
                    if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                    var o = n(19),
                        c = {},
                        head = r && (document.head || document.getElementsByTagName("head")[0]),
                        l = null,
                        h = 0,
                        d = !1,
                        f = function () {},
                        m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                    function y(e) {
                        for (var i = 0; i < e.length; i++) {
                            var t = e[i],
                                n = c[t.id];
                            if (n) {
                                n.refs++;
                                for (var r = 0; r < n.parts.length; r++) n.parts[r](t.parts[r]);
                                for (; r < t.parts.length; r++) n.parts.push(v(t.parts[r]));
                                n.parts.length > t.parts.length && (n.parts.length = t.parts.length)
                            } else {
                                var o = [];
                                for (r = 0; r < t.parts.length; r++) o.push(v(t.parts[r]));
                                c[t.id] = {
                                    id: t.id,
                                    refs: 1,
                                    parts: o
                                }
                            }
                        }
                    }

                    function _() {
                        var e = document.createElement("style");
                        return e.type = "text/css", head.appendChild(e), e
                    }

                    function v(e) {
                        var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                        if (r) {
                            if (d) return f;
                            r.parentNode.removeChild(r)
                        }
                        if (m) {
                            var o = h++;
                            r = l || (l = _()), t = x.bind(null, r, o, !1), n = x.bind(null, r, o, !0)
                        } else r = _(), t = T.bind(null, r), n = function () {
                            r.parentNode.removeChild(r)
                        };
                        return t(e),
                            function (r) {
                                if (r) {
                                    if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                                    t(e = r)
                                } else n()
                            }
                    }
                    e.exports = function (e, t, n) {
                        d = n;
                        var r = o(e, t);
                        return y(r),
                            function (t) {
                                for (var n = [], i = 0; i < r.length; i++) {
                                    var l = r[i];
                                    (h = c[l.id]).refs--, n.push(h)
                                }
                                for (t ? y(r = o(e, t)) : r = [], i = 0; i < n.length; i++) {
                                    var h;
                                    if (0 === (h = n[i]).refs) {
                                        for (var d = 0; d < h.parts.length; d++) h.parts[d]();
                                        delete c[h.id]
                                    }
                                }
                            }
                    };
                    var w, C = (w = [], function (e, t) {
                        return w[e] = t, w.filter(Boolean).join("\n")
                    });

                    function x(e, t, n, r) {
                        var o = n ? "" : r.css;
                        if (e.styleSheet) e.styleSheet.cssText = C(t, o);
                        else {
                            var c = document.createTextNode(o),
                                l = e.childNodes;
                            l[t] && e.removeChild(l[t]), l.length ? e.insertBefore(c, l[t]) : e.appendChild(c)
                        }
                    }

                    function T(e, t) {
                        var n = t.css,
                            r = t.media,
                            o = t.sourceMap;
                        if (r && e.setAttribute("media", r), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
                        else {
                            for (; e.firstChild;) e.removeChild(e.firstChild);
                            e.appendChild(document.createTextNode(n))
                        }
                    }
                }, function (e, t) {
                    e.exports = function (e, t) {
                        for (var n = [], r = {}, i = 0; i < t.length; i++) {
                            var o = t[i],
                                c = o[0],
                                l = {
                                    id: e + ":" + i,
                                    css: o[1],
                                    media: o[2],
                                    sourceMap: o[3]
                                };
                            r[c] ? r[c].parts.push(l) : n.push(r[c] = {
                                id: c,
                                parts: [l]
                            })
                        }
                        return n
                    }
                }, function (t, n) {
                    t.exports = e
                }])
            }, e.exports = r(n(2))
        },
        254: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return St
            }));
            var r = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            class o extends Error {
                constructor(e, t = "FunctionsError", n) {
                    super(e), super.name = t, this.context = n
                }
            }
            class c extends o {
                constructor(e) {
                    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
                }
            }
            class l extends o {
                constructor(e) {
                    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
                }
            }
            class h extends o {
                constructor(e) {
                    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
                }
            }
            var d = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            class f {
                constructor(e, {
                    headers: t = {},
                    customFetch: o
                } = {}) {
                    this.url = e, this.headers = t, this.fetch = (e => {
                        let t;
                        return t = e || ("undefined" == typeof fetch ? (...e) => r(void 0, void 0, void 0, (function* () {
                            return yield(yield Promise.resolve().then(n.t.bind(null, 94, 7))).fetch(...e)
                        })) : fetch), (...e) => t(...e)
                    })(o)
                }
                setAuth(e) {
                    this.headers.Authorization = `Bearer ${e}`
                }
                invoke(e, t = {}) {
                    var n;
                    return d(this, void 0, void 0, (function* () {
                        try {
                            const {
                                headers: r,
                                method: o,
                                body: d
                            } = t;
                            let body, f = {};
                            d && (r && !Object.prototype.hasOwnProperty.call(r, "Content-Type") || !r) && ("undefined" != typeof Blob && d instanceof Blob || d instanceof ArrayBuffer ? (f["Content-Type"] = "application/octet-stream", body = d) : "string" == typeof d ? (f["Content-Type"] = "text/plain", body = d) : "undefined" != typeof FormData && d instanceof FormData ? body = d : (f["Content-Type"] = "application/json", body = JSON.stringify(d)));
                            const m = yield this.fetch(`${this.url}/${e}`, {
                                method: o || "POST",
                                headers: Object.assign(Object.assign(Object.assign({}, f), this.headers), r),
                                body: body
                            }).catch((e => {
                                throw new c(e)
                            })), y = m.headers.get("x-relay-error");
                            if (y && "true" === y) throw new l(m);
                            if (!m.ok) throw new h(m);
                            let data, _ = (null !== (n = m.headers.get("Content-Type")) && void 0 !== n ? n : "text/plain").split(";")[0].trim();
                            return data = "application/json" === _ ? yield m.json(): "application/octet-stream" === _ ? yield m.blob(): "multipart/form-data" === _ ? yield m.formData(): yield m.text(), {
                                data: data,
                                error: null
                            }
                        } catch (e) {
                            return {
                                data: null,
                                error: e
                            }
                        }
                    }))
                }
            }
            var m = n(94),
                y = n.n(m);
            class _ {
                constructor(e) {
                    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.allowEmpty = e.allowEmpty, e.fetch ? this.fetch = e.fetch : "undefined" == typeof fetch ? this.fetch = y.a : this.fetch = fetch
                }
                throwOnError() {
                    return this.shouldThrowOnError = !0, this
                }
                then(e, t) {
                    void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), "GET" !== this.method && "HEAD" !== this.method && (this.headers["Content-Type"] = "application/json");
                    let n = (0, this.fetch)(this.url.toString(), {
                        method: this.method,
                        headers: this.headers,
                        body: JSON.stringify(this.body),
                        signal: this.signal
                    }).then((async e => {
                        var t, n, r;
                        let o = null,
                            data = null,
                            c = null,
                            l = e.status,
                            h = e.statusText;
                        if (e.ok) {
                            if ("HEAD" !== this.method) {
                                const body = await e.text();
                                "" === body || (data = "text/csv" === this.headers.Accept || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? body : JSON.parse(body))
                            }
                            const r = null === (t = this.headers.Prefer) || void 0 === t ? void 0 : t.match(/count=(exact|planned|estimated)/),
                                o = null === (n = e.headers.get("content-range")) || void 0 === n ? void 0 : n.split("/");
                            r && o && o.length > 1 && (c = parseInt(o[1]))
                        } else {
                            const body = await e.text();
                            try {
                                o = JSON.parse(body), Array.isArray(o) && 404 === e.status && (data = [], o = null, l = 200, h = "OK")
                            } catch (t) {
                                404 === e.status && "" === body ? (l = 204, h = "No Content") : o = {
                                    message: body
                                }
                            }
                            if (o && this.allowEmpty && (null === (r = null == o ? void 0 : o.details) || void 0 === r ? void 0 : r.includes("Results contain 0 rows")) && (o = null, l = 200, h = "OK"), o && this.shouldThrowOnError) throw o
                        }
                        return {
                            error: o,
                            data: data,
                            count: c,
                            status: l,
                            statusText: h
                        }
                    }));
                    return this.shouldThrowOnError || (n = n.catch((e => {
                        var t, n, r;
                        return {
                            error: {
                                message: `${null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"FetchError"}: ${null==e?void 0:e.message}`,
                                details: `${null!==(n=null==e?void 0:e.stack)&&void 0!==n?n:""}`,
                                hint: "",
                                code: `${null!==(r=null==e?void 0:e.code)&&void 0!==r?r:""}`
                            },
                            data: null,
                            count: null,
                            status: 0,
                            statusText: ""
                        }
                    }))), n.then(e, t)
                }
            }
            class v extends _ {
                select(e) {
                    let t = !1;
                    const n = (null != e ? e : "*").split("").map((e => /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e))).join("");
                    return this.url.searchParams.set("select", n), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this
                }
                order(e, {
                    ascending: t = !0,
                    nullsFirst: n,
                    foreignTable: r
                } = {}) {
                    const o = r ? `${r}.order` : "order",
                        c = this.url.searchParams.get(o);
                    return this.url.searchParams.set(o, `${c?`${c},`:""}${e}.${t?"asc":"desc"}${void 0===n?"":n?".nullsfirst":".nullslast"}`), this
                }
                limit(e, {
                    foreignTable: t
                } = {}) {
                    const n = void 0 === t ? "limit" : `${t}.limit`;
                    return this.url.searchParams.set(n, `${e}`), this
                }
                range(e, t, {
                    foreignTable: n
                } = {}) {
                    const r = void 0 === n ? "offset" : `${n}.offset`,
                        o = void 0 === n ? "limit" : `${n}.limit`;
                    return this.url.searchParams.set(r, `${e}`), this.url.searchParams.set(o, "" + (t - e + 1)), this
                }
                abortSignal(e) {
                    return this.signal = e, this
                }
                single() {
                    return this.headers.Accept = "application/vnd.pgrst.object+json", this
                }
                maybeSingle() {
                    return this.headers.Accept = "application/vnd.pgrst.object+json", this.allowEmpty = !0, this
                }
                csv() {
                    return this.headers.Accept = "text/csv", this
                }
                geojson() {
                    return this.headers.Accept = "application/geo+json", this
                }
                explain({
                    analyze: e = !1,
                    verbose: t = !1,
                    settings: n = !1,
                    buffers: r = !1,
                    wal: o = !1,
                    format: c = "text"
                } = {}) {
                    const l = [e ? "analyze" : null, t ? "verbose" : null, n ? "settings" : null, r ? "buffers" : null, o ? "wal" : null].filter(Boolean).join("|"),
                        h = this.headers.Accept;
                    return this.headers.Accept = `application/vnd.pgrst.plan+${c}; for="${h}"; options=${l};`, this
                }
                rollback() {
                    var e;
                    return (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this
                }
                returns() {
                    return this
                }
            }
            class w extends v {
                eq(e, t) {
                    return this.url.searchParams.append(e, `eq.${t}`), this
                }
                neq(e, t) {
                    return this.url.searchParams.append(e, `neq.${t}`), this
                }
                gt(e, t) {
                    return this.url.searchParams.append(e, `gt.${t}`), this
                }
                gte(e, t) {
                    return this.url.searchParams.append(e, `gte.${t}`), this
                }
                lt(e, t) {
                    return this.url.searchParams.append(e, `lt.${t}`), this
                }
                lte(e, t) {
                    return this.url.searchParams.append(e, `lte.${t}`), this
                }
                like(e, pattern) {
                    return this.url.searchParams.append(e, `like.${pattern}`), this
                }
                likeAllOf(e, t) {
                    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
                }
                likeAnyOf(e, t) {
                    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
                }
                ilike(e, pattern) {
                    return this.url.searchParams.append(e, `ilike.${pattern}`), this
                }
                ilikeAllOf(e, t) {
                    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
                }
                ilikeAnyOf(e, t) {
                    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
                }
                is(e, t) {
                    return this.url.searchParams.append(e, `is.${t}`), this
                } in (e, t) {
                    const n = t.map((s => "string" == typeof s && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`)).join(",");
                    return this.url.searchParams.append(e, `in.(${n})`), this
                }
                contains(e, t) {
                    return "string" == typeof t ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this
                }
                containedBy(e, t) {
                    return "string" == typeof t ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this
                }
                rangeGt(e, t) {
                    return this.url.searchParams.append(e, `sr.${t}`), this
                }
                rangeGte(e, t) {
                    return this.url.searchParams.append(e, `nxl.${t}`), this
                }
                rangeLt(e, t) {
                    return this.url.searchParams.append(e, `sl.${t}`), this
                }
                rangeLte(e, t) {
                    return this.url.searchParams.append(e, `nxr.${t}`), this
                }
                rangeAdjacent(e, t) {
                    return this.url.searchParams.append(e, `adj.${t}`), this
                }
                overlaps(e, t) {
                    return "string" == typeof t ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this
                }
                textSearch(e, t, {
                    config: n,
                    type: r
                } = {}) {
                    let o = "";
                    "plain" === r ? o = "pl" : "phrase" === r ? o = "ph" : "websearch" === r && (o = "w");
                    const c = void 0 === n ? "" : `(${n})`;
                    return this.url.searchParams.append(e, `${o}fts${c}.${t}`), this
                }
                match(e) {
                    return Object.entries(e).forEach((([e, t]) => {
                        this.url.searchParams.append(e, `eq.${t}`)
                    })), this
                }
                not(e, t, n) {
                    return this.url.searchParams.append(e, `not.${t}.${n}`), this
                }
                or(e, {
                    foreignTable: t
                } = {}) {
                    const n = t ? `${t}.or` : "or";
                    return this.url.searchParams.append(n, `(${e})`), this
                }
                filter(e, t, n) {
                    return this.url.searchParams.append(e, `${t}.${n}`), this
                }
            }
            class C {
                constructor(e, {
                    headers: t = {},
                    schema: n,
                    fetch: r
                }) {
                    this.url = e, this.headers = t, this.schema = n, this.fetch = r
                }
                select(e, {
                    head: head = !1,
                    count: t
                } = {}) {
                    const n = head ? "HEAD" : "GET";
                    let r = !1;
                    const o = (null != e ? e : "*").split("").map((e => /\s/.test(e) && !r ? "" : ('"' === e && (r = !r), e))).join("");
                    return this.url.searchParams.set("select", o), t && (this.headers.Prefer = `count=${t}`), new w({
                        method: n,
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
                insert(e, {
                    count: t,
                    defaultToNull: n = !0
                } = {}) {
                    const r = [];
                    if (this.headers.Prefer && r.push(this.headers.Prefer), t && r.push(`count=${t}`), n || r.push("missing=default"), this.headers.Prefer = r.join(","), Array.isArray(e)) {
                        const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []);
                        if (t.length > 0) {
                            const e = [...new Set(t)].map((e => `"${e}"`));
                            this.url.searchParams.set("columns", e.join(","))
                        }
                    }
                    return new w({
                        method: "POST",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
                upsert(e, {
                    onConflict: t,
                    ignoreDuplicates: n = !1,
                    count: r,
                    defaultToNull: o = !0
                } = {}) {
                    const c = [`resolution=${n?"ignore":"merge"}-duplicates`];
                    if (void 0 !== t && this.url.searchParams.set("on_conflict", t), this.headers.Prefer && c.push(this.headers.Prefer), r && c.push(`count=${r}`), o || c.push("missing=default"), this.headers.Prefer = c.join(","), Array.isArray(e)) {
                        const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []);
                        if (t.length > 0) {
                            const e = [...new Set(t)].map((e => `"${e}"`));
                            this.url.searchParams.set("columns", e.join(","))
                        }
                    }
                    return new w({
                        method: "POST",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
                update(e, {
                    count: t
                } = {}) {
                    const n = [];
                    return this.headers.Prefer && n.push(this.headers.Prefer), t && n.push(`count=${t}`), this.headers.Prefer = n.join(","), new w({
                        method: "PATCH",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
                delete({
                    count: e
                } = {}) {
                    const t = [];
                    return e && t.push(`count=${e}`), this.headers.Prefer && t.unshift(this.headers.Prefer), this.headers.Prefer = t.join(","), new w({
                        method: "DELETE",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
            }
            const x = {
                "X-Client-Info": "postgrest-js/1.6.0"
            };
            class T {
                constructor(e, {
                    headers: t = {},
                    schema: n,
                    fetch: r
                } = {}) {
                    this.url = e, this.headers = Object.assign(Object.assign({}, x), t), this.schema = n, this.fetch = r
                }
                from(e) {
                    const t = new URL(`${this.url}/${e}`);
                    return new C(t, {
                        headers: Object.assign({}, this.headers),
                        schema: this.schema,
                        fetch: this.fetch
                    })
                }
                rpc(e, t = {}, {
                    head: head = !1,
                    count: n
                } = {}) {
                    let r;
                    const o = new URL(`${this.url}/rpc/${e}`);
                    let body;
                    head ? (r = "HEAD", Object.entries(t).forEach((([e, t]) => {
                        o.searchParams.append(e, `${t}`)
                    }))) : (r = "POST", body = t);
                    const c = Object.assign({}, this.headers);
                    return n && (c.Prefer = `count=${n}`), new w({
                        method: r,
                        url: o,
                        headers: c,
                        schema: this.schema,
                        body: body,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
            }
            var E = n(251);
            const k = {
                "X-Client-Info": "realtime-js/2.7.2"
            };
            var S, I, O, P, j, R, A;
            ! function (e) {
                e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed"
            }(S || (S = {})),
            function (e) {
                e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving"
            }(I || (I = {})),
            function (e) {
                e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token"
            }(O || (O = {})),
            function (e) {
                e.websocket = "websocket"
            }(P || (P = {})),
            function (e) {
                e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed"
            }(j || (j = {}));
            class N {
                constructor(e, t) {
                    this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t
                }
                reset() {
                    this.tries = 0, clearTimeout(this.timer)
                }
                scheduleTimeout() {
                    clearTimeout(this.timer), this.timer = setTimeout((() => {
                        this.tries = this.tries + 1, this.callback()
                    }), this.timerCalc(this.tries + 1))
                }
            }
            class D {
                constructor() {
                    this.HEADER_LENGTH = 1
                }
                decode(e, t) {
                    return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t("string" == typeof e ? JSON.parse(e) : {})
                }
                _binaryDecode(e) {
                    const view = new DataView(e),
                        t = new TextDecoder;
                    return this._decodeBroadcast(e, view, t)
                }
                _decodeBroadcast(e, view, t) {
                    const n = view.getUint8(1),
                        r = view.getUint8(2);
                    let o = this.HEADER_LENGTH + 2;
                    const c = t.decode(e.slice(o, o + n));
                    o += n;
                    const l = t.decode(e.slice(o, o + r));
                    o += r;
                    return {
                        ref: null,
                        topic: c,
                        event: l,
                        payload: JSON.parse(t.decode(e.slice(o, e.byteLength)))
                    }
                }
            }
            class $ {
                constructor(e, t, n = {}, r = 1e4) {
                    this.channel = e, this.event = t, this.payload = n, this.timeout = r, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null, this.rateLimited = !1
                }
                resend(e) {
                    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send()
                }
                send() {
                    if (this._hasReceived("timeout")) return;
                    this.startTimeout(), this.sent = !0;
                    "rate limited" === this.channel.socket.push({
                        topic: this.channel.topic,
                        event: this.event,
                        payload: this.payload,
                        ref: this.ref,
                        join_ref: this.channel._joinRef()
                    }) && (this.rateLimited = !0)
                }
                updatePayload(e) {
                    this.payload = Object.assign(Object.assign({}, this.payload), e)
                }
                receive(e, t) {
                    var n;
                    return this._hasReceived(e) && t(null === (n = this.receivedResp) || void 0 === n ? void 0 : n.response), this.recHooks.push({
                        status: e,
                        callback: t
                    }), this
                }
                startTimeout() {
                    if (this.timeoutTimer) return;
                    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
                    this.channel._on(this.refEvent, {}, (e => {
                        this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = e, this._matchReceive(e)
                    })), this.timeoutTimer = setTimeout((() => {
                        this.trigger("timeout", {})
                    }), this.timeout)
                }
                trigger(e, t) {
                    this.refEvent && this.channel._trigger(this.refEvent, {
                        status: e,
                        response: t
                    })
                }
                destroy() {
                    this._cancelRefEvent(), this._cancelTimeout()
                }
                _cancelRefEvent() {
                    this.refEvent && this.channel._off(this.refEvent, {})
                }
                _cancelTimeout() {
                    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0
                }
                _matchReceive({
                    status: e,
                    response: t
                }) {
                    this.recHooks.filter((t => t.status === e)).forEach((e => e.callback(t)))
                }
                _hasReceived(e) {
                    return this.receivedResp && this.receivedResp.status === e
                }
            }! function (e) {
                e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave"
            }(R || (R = {}));
            class L {
                constructor(e, t) {
                    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
                        onJoin: () => {},
                        onLeave: () => {},
                        onSync: () => {}
                    };
                    const n = (null == t ? void 0 : t.events) || {
                        state: "presence_state",
                        diff: "presence_diff"
                    };
                    this.channel._on(n.state, {}, (e => {
                        const {
                            onJoin: t,
                            onLeave: n,
                            onSync: r
                        } = this.caller;
                        this.joinRef = this.channel._joinRef(), this.state = L.syncState(this.state, e, t, n), this.pendingDiffs.forEach((e => {
                            this.state = L.syncDiff(this.state, e, t, n)
                        })), this.pendingDiffs = [], r()
                    })), this.channel._on(n.diff, {}, (e => {
                        const {
                            onJoin: t,
                            onLeave: n,
                            onSync: r
                        } = this.caller;
                        this.inPendingSyncState() ? this.pendingDiffs.push(e) : (this.state = L.syncDiff(this.state, e, t, n), r())
                    })), this.onJoin(((e, t, n) => {
                        this.channel._trigger("presence", {
                            event: "join",
                            key: e,
                            currentPresences: t,
                            newPresences: n
                        })
                    })), this.onLeave(((e, t, n) => {
                        this.channel._trigger("presence", {
                            event: "leave",
                            key: e,
                            currentPresences: t,
                            leftPresences: n
                        })
                    })), this.onSync((() => {
                        this.channel._trigger("presence", {
                            event: "sync"
                        })
                    }))
                }
                static syncState(e, t, n, r) {
                    const o = this.cloneDeep(e),
                        c = this.transformState(t),
                        l = {},
                        h = {};
                    return this.map(o, ((e, t) => {
                        c[e] || (h[e] = t)
                    })), this.map(c, ((e, t) => {
                        const n = o[e];
                        if (n) {
                            const r = t.map((e => e.presence_ref)),
                                o = n.map((e => e.presence_ref)),
                                c = t.filter((e => o.indexOf(e.presence_ref) < 0)),
                                d = n.filter((e => r.indexOf(e.presence_ref) < 0));
                            c.length > 0 && (l[e] = c), d.length > 0 && (h[e] = d)
                        } else l[e] = t
                    })), this.syncDiff(o, {
                        joins: l,
                        leaves: h
                    }, n, r)
                }
                static syncDiff(e, t, n, r) {
                    const {
                        joins: o,
                        leaves: c
                    } = {
                        joins: this.transformState(t.joins),
                        leaves: this.transformState(t.leaves)
                    };
                    return n || (n = () => {}), r || (r = () => {}), this.map(o, ((t, r) => {
                        var o;
                        const c = null !== (o = e[t]) && void 0 !== o ? o : [];
                        if (e[t] = this.cloneDeep(r), c.length > 0) {
                            const n = e[t].map((e => e.presence_ref)),
                                r = c.filter((e => n.indexOf(e.presence_ref) < 0));
                            e[t].unshift(...r)
                        }
                        n(t, c, r)
                    })), this.map(c, ((t, n) => {
                        let o = e[t];
                        if (!o) return;
                        const c = n.map((e => e.presence_ref));
                        o = o.filter((e => c.indexOf(e.presence_ref) < 0)), e[t] = o, r(t, o, n), 0 === o.length && delete e[t]
                    })), e
                }
                static map(e, t) {
                    return Object.getOwnPropertyNames(e).map((n => t(n, e[n])))
                }
                static transformState(e) {
                    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce(((t, n) => {
                        const r = e[n];
                        return t[n] = "metas" in r ? r.metas.map((e => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e))) : r, t
                    }), {})
                }
                static cloneDeep(e) {
                    return JSON.parse(JSON.stringify(e))
                }
                onJoin(e) {
                    this.caller.onJoin = e
                }
                onLeave(e) {
                    this.caller.onLeave = e
                }
                onSync(e) {
                    this.caller.onSync = e
                }
                inPendingSyncState() {
                    return !this.joinRef || this.joinRef !== this.channel._joinRef()
                }
            }! function (e) {
                e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange"
            }(A || (A = {}));
            const M = (e, t, n = {}) => {
                    var r;
                    const o = null !== (r = n.skipTypes) && void 0 !== r ? r : [];
                    return Object.keys(t).reduce(((n, r) => (n[r] = U(r, e, t, o), n)), {})
                },
                U = (e, t, n, r) => {
                    const o = t.find((t => t.name === e)),
                        c = null == o ? void 0 : o.type,
                        l = n[e];
                    return c && !r.includes(c) ? F(c, l) : B(l)
                },
                F = (e, t) => {
                    if ("_" === e.charAt(0)) {
                        const n = e.slice(1, e.length);
                        return Y(t, n)
                    }
                    switch (e) {
                        case A.bool:
                            return z(t);
                        case A.float4:
                        case A.float8:
                        case A.int2:
                        case A.int4:
                        case A.int8:
                        case A.numeric:
                        case A.oid:
                            return H(t);
                        case A.json:
                        case A.jsonb:
                            return W(t);
                        case A.timestamp:
                            return V(t);
                        case A.abstime:
                        case A.date:
                        case A.daterange:
                        case A.int4range:
                        case A.int8range:
                        case A.money:
                        case A.reltime:
                        case A.text:
                        case A.time:
                        case A.timestamptz:
                        case A.timetz:
                        case A.tsrange:
                        case A.tstzrange:
                        default:
                            return B(t)
                    }
                },
                B = e => e,
                z = e => {
                    switch (e) {
                        case "t":
                            return !0;
                        case "f":
                            return !1;
                        default:
                            return e
                    }
                },
                H = e => {
                    if ("string" == typeof e) {
                        const t = parseFloat(e);
                        if (!Number.isNaN(t)) return t
                    }
                    return e
                },
                W = e => {
                    if ("string" == typeof e) try {
                        return JSON.parse(e)
                    } catch (t) {
                        return console.log(`JSON parse error: ${t}`), e
                    }
                    return e
                },
                Y = (e, t) => {
                    if ("string" != typeof e) return e;
                    const n = e.length - 1,
                        r = e[n];
                    if ("{" === e[0] && "}" === r) {
                        let r;
                        const o = e.slice(1, n);
                        try {
                            r = JSON.parse("[" + o + "]")
                        } catch (e) {
                            r = o ? o.split(",") : []
                        }
                        return r.map((e => F(t, e)))
                    }
                    return e
                },
                V = e => "string" == typeof e ? e.replace(" ", "T") : e;
            var K, G, J, Q = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            ! function (e) {
                e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE"
            }(K || (K = {})),
            function (e) {
                e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes"
            }(G || (G = {})),
            function (e) {
                e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR"
            }(J || (J = {}));
            class X {
                constructor(e, t = {
                    config: {}
                }, n) {
                    this.topic = e, this.params = t, this.socket = n, this.bindings = {}, this.state = I.closed, this.joinedOnce = !1, this.pushBuffer = [], this.params.config = Object.assign({
                        broadcast: {
                            ack: !1,
                            self: !1
                        },
                        presence: {
                            key: ""
                        }
                    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new $(this, O.join, this.params, this.timeout), this.rejoinTimer = new N((() => this._rejoinUntilConnected()), this.socket.reconnectAfterMs), this.joinPush.receive("ok", (() => {
                        this.state = I.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e => e.send())), this.pushBuffer = []
                    })), this._onClose((() => {
                        this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = I.closed, this.socket._remove(this)
                    })), this._onError((e => {
                        this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, e), this.state = I.errored, this.rejoinTimer.scheduleTimeout())
                    })), this.joinPush.receive("timeout", (() => {
                        this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = I.errored, this.rejoinTimer.scheduleTimeout())
                    })), this._on(O.reply, {}, ((e, t) => {
                        this._trigger(this._replyEventName(t), e)
                    })), this.presence = new L(this)
                }
                subscribe(e, t = this.timeout) {
                    var n, r;
                    if (this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance"; {
                        const {
                            config: {
                                broadcast: o,
                                presence: c
                            }
                        } = this.params;
                        this._onError((t => e && e("CHANNEL_ERROR", t))), this._onClose((() => e && e("CLOSED")));
                        const l = {},
                            h = {
                                broadcast: o,
                                presence: c,
                                postgres_changes: null !== (r = null === (n = this.bindings.postgres_changes) || void 0 === n ? void 0 : n.map((e => e.filter))) && void 0 !== r ? r : []
                            };
                        this.socket.accessToken && (l.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({
                            config: h
                        }, l)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", (({
                            postgres_changes: t
                        }) => {
                            var n;
                            if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), void 0 !== t) {
                                const r = this.bindings.postgres_changes,
                                    o = null !== (n = null == r ? void 0 : r.length) && void 0 !== n ? n : 0,
                                    c = [];
                                for (let i = 0; i < o; i++) {
                                    const n = r[i],
                                        {
                                            filter: {
                                                event: o,
                                                schema: l,
                                                table: table,
                                                filter: filter
                                            }
                                        } = n,
                                        h = t && t[i];
                                    if (!h || h.event !== o || h.schema !== l || h.table !== table || h.filter !== filter) return this.unsubscribe(), void(e && e("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes")));
                                    c.push(Object.assign(Object.assign({}, n), {
                                        id: h.id
                                    }))
                                }
                                return this.bindings.postgres_changes = c, void(e && e("SUBSCRIBED"))
                            }
                            e && e("SUBSCRIBED")
                        })).receive("error", (t => {
                            e && e("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(t).join(", ") || "error")))
                        })).receive("timeout", (() => {
                            e && e("TIMED_OUT")
                        }))
                    }
                    return this
                }
                presenceState() {
                    return this.presence.state
                }
                track(e, t = {}) {
                    return Q(this, void 0, void 0, (function* () {
                        return yield this.send({
                            type: "presence",
                            event: "track",
                            payload: e
                        }, t.timeout || this.timeout)
                    }))
                }
                untrack(e = {}) {
                    return Q(this, void 0, void 0, (function* () {
                        return yield this.send({
                            type: "presence",
                            event: "untrack"
                        }, e)
                    }))
                }
                on(e, filter, t) {
                    return this._on(e, filter, t)
                }
                send(e, t = {}) {
                    return new Promise((n => {
                        var r, o, c;
                        const l = this._push(e.type, e, t.timeout || this.timeout);
                        l.rateLimited && n("rate limited"), "broadcast" !== e.type || (null === (c = null === (o = null === (r = this.params) || void 0 === r ? void 0 : r.config) || void 0 === o ? void 0 : o.broadcast) || void 0 === c ? void 0 : c.ack) || n("ok"), l.receive("ok", (() => n("ok"))), l.receive("timeout", (() => n("timed out")))
                    }))
                }
                updateJoinPayload(e) {
                    this.joinPush.updatePayload(e)
                }
                unsubscribe(e = this.timeout) {
                    this.state = I.leaving;
                    const t = () => {
                        this.socket.log("channel", `leave ${this.topic}`), this._trigger(O.close, "leave", this._joinRef())
                    };
                    return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((n => {
                        const r = new $(this, O.leave, {}, e);
                        r.receive("ok", (() => {
                            t(), n("ok")
                        })).receive("timeout", (() => {
                            t(), n("timed out")
                        })).receive("error", (() => {
                            n("error")
                        })), r.send(), this._canPush() || r.trigger("ok", {})
                    }))
                }
                _push(e, t, n = this.timeout) {
                    if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
                    let r = new $(this, e, t, n);
                    return this._canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r
                }
                _onMessage(e, t, n) {
                    return t
                }
                _isMember(e) {
                    return this.topic === e
                }
                _joinRef() {
                    return this.joinPush.ref
                }
                _trigger(e, t, n) {
                    var r, o;
                    const c = e.toLocaleLowerCase(),
                        {
                            close: l,
                            error: h,
                            leave: d,
                            join: f
                        } = O;
                    if (n && [l, h, d, f].indexOf(c) >= 0 && n !== this._joinRef()) return;
                    let m = this._onMessage(c, t, n);
                    if (t && !m) throw "channel onMessage callbacks must return the payload, modified or unmodified";
                    ["insert", "update", "delete"].includes(c) ? null === (r = this.bindings.postgres_changes) || void 0 === r || r.filter((e => {
                        var t, n, r;
                        return "*" === (null === (t = e.filter) || void 0 === t ? void 0 : t.event) || (null === (r = null === (n = e.filter) || void 0 === n ? void 0 : n.event) || void 0 === r ? void 0 : r.toLocaleLowerCase()) === c
                    })).map((e => e.callback(m, n))) : null === (o = this.bindings[c]) || void 0 === o || o.filter((e => {
                        var n, r, o, l, h, d;
                        if (["broadcast", "presence", "postgres_changes"].includes(c)) {
                            if ("id" in e) {
                                const c = e.id,
                                    l = null === (n = e.filter) || void 0 === n ? void 0 : n.event;
                                return c && (null === (r = t.ids) || void 0 === r ? void 0 : r.includes(c)) && ("*" === l || (null == l ? void 0 : l.toLocaleLowerCase()) === (null === (o = t.data) || void 0 === o ? void 0 : o.type.toLocaleLowerCase()))
                            } {
                                const n = null === (h = null === (l = null == e ? void 0 : e.filter) || void 0 === l ? void 0 : l.event) || void 0 === h ? void 0 : h.toLocaleLowerCase();
                                return "*" === n || n === (null === (d = null == t ? void 0 : t.event) || void 0 === d ? void 0 : d.toLocaleLowerCase())
                            }
                        }
                        return e.type.toLocaleLowerCase() === c
                    })).map((e => {
                        if ("object" == typeof m && "ids" in m) {
                            const e = m.data,
                                {
                                    schema: t,
                                    table: table,
                                    commit_timestamp: n,
                                    type: r,
                                    errors: o
                                } = e,
                                c = {
                                    schema: t,
                                    table: table,
                                    commit_timestamp: n,
                                    eventType: r,
                                    new: {},
                                    old: {},
                                    errors: o
                                };
                            m = Object.assign(Object.assign({}, c), this._getPayloadRecords(e))
                        }
                        e.callback(m, n)
                    }))
                }
                _isClosed() {
                    return this.state === I.closed
                }
                _isJoined() {
                    return this.state === I.joined
                }
                _isJoining() {
                    return this.state === I.joining
                }
                _isLeaving() {
                    return this.state === I.leaving
                }
                _replyEventName(e) {
                    return `chan_reply_${e}`
                }
                _on(e, filter, t) {
                    const n = e.toLocaleLowerCase(),
                        r = {
                            type: n,
                            filter: filter,
                            callback: t
                        };
                    return this.bindings[n] ? this.bindings[n].push(r) : this.bindings[n] = [r], this
                }
                _off(e, filter) {
                    const t = e.toLocaleLowerCase();
                    return this.bindings[t] = this.bindings[t].filter((e => {
                        var n;
                        return !((null === (n = e.type) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === t && X.isEqual(e.filter, filter))
                    })), this
                }
                static isEqual(e, t) {
                    if (Object.keys(e).length !== Object.keys(t).length) return !1;
                    for (const n in e)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }
                _rejoinUntilConnected() {
                    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin()
                }
                _onClose(e) {
                    this._on(O.close, {}, e)
                }
                _onError(e) {
                    this._on(O.error, {}, (t => e(t)))
                }
                _canPush() {
                    return this.socket.isConnected() && this._isJoined()
                }
                _rejoin(e = this.timeout) {
                    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = I.joining, this.joinPush.resend(e))
                }
                _getPayloadRecords(e) {
                    const t = {
                        new: {},
                        old: {}
                    };
                    return "INSERT" !== e.type && "UPDATE" !== e.type || (t.new = M(e.columns, e.record)), "UPDATE" !== e.type && "DELETE" !== e.type || (t.old = M(e.columns, e.old_record)), t
                }
            }
            var Z = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            const ee = () => {};
            class te {
                constructor(e, t) {
                    var n;
                    this.accessToken = null, this.channels = [], this.endPoint = "", this.headers = k, this.params = {}, this.timeout = 1e4, this.transport = E.w3cwebsocket, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = ee, this.conn = null, this.sendBuffer = [], this.serializer = new D, this.stateChangeCallbacks = {
                        open: [],
                        close: [],
                        error: [],
                        message: []
                    }, this.eventsPerSecondLimitMs = 100, this.inThrottle = !1, this.endPoint = `${e}/${P.websocket}`, (null == t ? void 0 : t.params) && (this.params = t.params), (null == t ? void 0 : t.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout), (null == t ? void 0 : t.logger) && (this.logger = t.logger), (null == t ? void 0 : t.transport) && (this.transport = t.transport), (null == t ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
                    const r = null === (n = null == t ? void 0 : t.params) || void 0 === n ? void 0 : n.eventsPerSecond;
                    r && (this.eventsPerSecondLimitMs = Math.floor(1e3 / r)), this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs) ? t.reconnectAfterMs : e => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4, this.encode = (null == t ? void 0 : t.encode) ? t.encode : (e, t) => t(JSON.stringify(e)), this.decode = (null == t ? void 0 : t.decode) ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new N((() => Z(this, void 0, void 0, (function* () {
                        this.disconnect(), this.connect()
                    }))), this.reconnectAfterMs)
                }
                connect() {
                    this.conn || (this.conn = new this.transport(this._endPointURL(), [], null, this.headers), this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = e => this._onConnError(e), this.conn.onmessage = e => this._onConnMessage(e), this.conn.onclose = e => this._onConnClose(e)))
                }
                disconnect(code, e) {
                    this.conn && (this.conn.onclose = function () {}, code ? this.conn.close(code, null != e ? e : "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset())
                }
                getChannels() {
                    return this.channels
                }
                removeChannel(e) {
                    return Z(this, void 0, void 0, (function* () {
                        const t = yield e.unsubscribe();
                        return 0 === this.channels.length && this.disconnect(), t
                    }))
                }
                removeAllChannels() {
                    return Z(this, void 0, void 0, (function* () {
                        const e = yield Promise.all(this.channels.map((e => e.unsubscribe())));
                        return this.disconnect(), e
                    }))
                }
                log(e, t, data) {
                    this.logger(e, t, data)
                }
                connectionState() {
                    switch (this.conn && this.conn.readyState) {
                        case S.connecting:
                            return j.Connecting;
                        case S.open:
                            return j.Open;
                        case S.closing:
                            return j.Closing;
                        default:
                            return j.Closed
                    }
                }
                isConnected() {
                    return this.connectionState() === j.Open
                }
                channel(e, t = {
                    config: {}
                }) {
                    this.isConnected() || this.connect();
                    const n = new X(`realtime:${e}`, t, this);
                    return this.channels.push(n), n
                }
                push(data) {
                    const {
                        topic: e,
                        event: t,
                        payload: n,
                        ref: r
                    } = data;
                    let o = () => {
                        this.encode(data, (e => {
                            var t;
                            null === (t = this.conn) || void 0 === t || t.send(e)
                        }))
                    };
                    if (this.log("push", `${e} ${t} (${r})`, n), this.isConnected())
                        if (["broadcast", "presence", "postgres_changes"].includes(t)) {
                            if (this._throttle(o)()) return "rate limited"
                        } else o();
                    else this.sendBuffer.push(o)
                }
                setAuth(e) {
                    this.accessToken = e, this.channels.forEach((t => {
                        e && t.updateJoinPayload({
                            access_token: e
                        }), t.joinedOnce && t._isJoined() && t._push(O.access_token, {
                            access_token: e
                        })
                    }))
                }
                _makeRef() {
                    let e = this.ref + 1;
                    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString()
                }
                _leaveOpenTopic(e) {
                    let t = this.channels.find((t => t.topic === e && (t._isJoined() || t._isJoining())));
                    t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe())
                }
                _remove(e) {
                    this.channels = this.channels.filter((t => t._joinRef() !== e._joinRef()))
                }
                _endPointURL() {
                    return this._appendParams(this.endPoint, Object.assign({}, this.params, {
                        vsn: "1.0.0"
                    }))
                }
                _onConnMessage(e) {
                    this.decode(e.data, (e => {
                        let {
                            topic: t,
                            event: n,
                            payload: r,
                            ref: o
                        } = e;
                        (o && o === this.pendingHeartbeatRef || n === (null == r ? void 0 : r.type)) && (this.pendingHeartbeatRef = null), this.log("receive", `${r.status||""} ${t} ${n} ${o&&"("+o+")"||""}`, r), this.channels.filter((e => e._isMember(t))).forEach((e => e._trigger(n, r, o))), this.stateChangeCallbacks.message.forEach((t => t(e)))
                    }))
                }
                _onConnOpen() {
                    this.log("transport", `connected to ${this._endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval((() => this._sendHeartbeat()), this.heartbeatIntervalMs), this.stateChangeCallbacks.open.forEach((e => e()))
                }
                _onConnClose(e) {
                    this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t => t(e)))
                }
                _onConnError(e) {
                    this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t => t(e)))
                }
                _triggerChanError() {
                    this.channels.forEach((e => e._trigger(O.error)))
                }
                _appendParams(e, t) {
                    if (0 === Object.keys(t).length) return e;
                    const n = e.match(/\?/) ? "&" : "?";
                    return `${e}${n}${new URLSearchParams(t)}`
                }
                _flushSendBuffer() {
                    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e => e())), this.sendBuffer = [])
                }
                _sendHeartbeat() {
                    var e;
                    if (this.isConnected()) {
                        if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void(null === (e = this.conn) || void 0 === e || e.close(1e3, "hearbeat timeout"));
                        this.pendingHeartbeatRef = this._makeRef(), this.push({
                            topic: "phoenix",
                            event: "heartbeat",
                            payload: {},
                            ref: this.pendingHeartbeatRef
                        }), this.setAuth(this.accessToken)
                    }
                }
                _throttle(e, t = this.eventsPerSecondLimitMs) {
                    return () => !!this.inThrottle || (e(), t > 0 && (this.inThrottle = !0, setTimeout((() => {
                        this.inThrottle = !1
                    }), t)), !1)
                }
            }
            class ne extends Error {
                constructor(e) {
                    super(e), this.__isStorageError = !0, this.name = "StorageError"
                }
            }

            function re(e) {
                return "object" == typeof e && null !== e && "__isStorageError" in e
            }
            class ie extends ne {
                constructor(e, t) {
                    super(e), this.name = "StorageApiError", this.status = t
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status
                    }
                }
            }
            class se extends ne {
                constructor(e, t) {
                    super(e), this.name = "StorageUnknownError", this.originalError = t
                }
            }
            var oe = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            const ae = e => {
                let t;
                return t = e || ("undefined" == typeof fetch ? (...e) => oe(void 0, void 0, void 0, (function* () {
                    return yield(yield Promise.resolve().then(n.t.bind(null, 94, 7))).fetch(...e)
                })) : fetch), (...e) => t(...e)
            };
            var ce = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            const le = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
                he = (e, t) => ce(void 0, void 0, void 0, (function* () {
                    const r = yield oe(void 0, void 0, void 0, (function* () {
                        return "undefined" == typeof Response ? (yield Promise.resolve().then(n.t.bind(null, 94, 7))).Response : Response
                    }));
                    e instanceof r ? e.json().then((n => {
                        t(new ie(le(n), e.status || 500))
                    })).catch((e => {
                        t(new se(le(e), e))
                    })) : t(new se(le(e), e))
                })),
                ue = (e, t, n, body) => {
                    const r = {
                        method: e,
                        headers: (null == t ? void 0 : t.headers) || {}
                    };
                    return "GET" === e ? r : (r.headers = Object.assign({
                        "Content-Type": "application/json"
                    }, null == t ? void 0 : t.headers), r.body = JSON.stringify(body), Object.assign(Object.assign({}, r), n))
                };

            function de(e, t, n, r, o, body) {
                return ce(this, void 0, void 0, (function* () {
                    return new Promise(((c, l) => {
                        e(n, ue(t, r, o, body)).then((e => {
                            if (!e.ok) throw e;
                            return (null == r ? void 0 : r.noResolveJson) ? e : e.json()
                        })).then((data => c(data))).catch((e => he(e, l)))
                    }))
                }))
            }

            function fe(e, t, n, r) {
                return ce(this, void 0, void 0, (function* () {
                    return de(e, "GET", t, n, r)
                }))
            }

            function pe(e, t, body, n, r) {
                return ce(this, void 0, void 0, (function* () {
                    return de(e, "POST", t, n, r, body)
                }))
            }

            function ge(e, t, body, n, r) {
                return ce(this, void 0, void 0, (function* () {
                    return de(e, "DELETE", t, n, r, body)
                }))
            }
            var me = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            const ye = {
                    limit: 100,
                    offset: 0,
                    sortBy: {
                        column: "name",
                        order: "asc"
                    }
                },
                _e = {
                    cacheControl: "3600",
                    contentType: "text/plain;charset=UTF-8",
                    upsert: !1
                };
            class ve {
                constructor(e, t = {}, n, r) {
                    this.url = e, this.headers = t, this.bucketId = n, this.fetch = ae(r)
                }
                uploadOrUpdate(e, path, t, n) {
                    return me(this, void 0, void 0, (function* () {
                        try {
                            let body;
                            const r = Object.assign(Object.assign({}, _e), n),
                                o = Object.assign(Object.assign({}, this.headers), "POST" === e && {
                                    "x-upsert": String(r.upsert)
                                });
                            "undefined" != typeof Blob && t instanceof Blob ? (body = new FormData, body.append("cacheControl", r.cacheControl), body.append("", t)) : "undefined" != typeof FormData && t instanceof FormData ? (body = t, body.append("cacheControl", r.cacheControl)) : (body = t, o["cache-control"] = `max-age=${r.cacheControl}`, o["content-type"] = r.contentType);
                            const c = this._removeEmptyFolders(path),
                                l = this._getFinalPath(c),
                                h = yield this.fetch(`${this.url}/object/${l}`, Object.assign({
                                    method: e,
                                    body: body,
                                    headers: o
                                }, (null == r ? void 0 : r.duplex) ? {
                                    duplex: r.duplex
                                } : {}));
                            if (h.ok) return {
                                data: {
                                    path: c
                                },
                                error: null
                            };
                            return {
                                data: null,
                                error: yield h.json()
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                upload(path, e, t) {
                    return me(this, void 0, void 0, (function* () {
                        return this.uploadOrUpdate("POST", path, e, t)
                    }))
                }
                uploadToSignedUrl(path, e, t, n) {
                    return me(this, void 0, void 0, (function* () {
                        const r = this._removeEmptyFolders(path),
                            o = this._getFinalPath(r),
                            c = new URL(this.url + `/object/upload/sign/${o}`);
                        c.searchParams.set("token", e);
                        try {
                            let body;
                            const e = Object.assign({
                                    upsert: _e.upsert
                                }, n),
                                o = Object.assign(Object.assign({}, this.headers), {
                                    "x-upsert": String(e.upsert)
                                });
                            "undefined" != typeof Blob && t instanceof Blob ? (body = new FormData, body.append("cacheControl", e.cacheControl), body.append("", t)) : "undefined" != typeof FormData && t instanceof FormData ? (body = t, body.append("cacheControl", e.cacheControl)) : (body = t, o["cache-control"] = `max-age=${e.cacheControl}`, o["content-type"] = e.contentType);
                            const l = yield this.fetch(c.toString(), {
                                method: "PUT",
                                body: body,
                                headers: o
                            });
                            if (l.ok) return {
                                data: {
                                    path: r
                                },
                                error: null
                            };
                            return {
                                data: null,
                                error: yield l.json()
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                createSignedUploadUrl(path) {
                    return me(this, void 0, void 0, (function* () {
                        try {
                            let e = this._getFinalPath(path);
                            const data = yield pe(this.fetch, `${this.url}/object/upload/sign/${e}`, {}, {
                                headers: this.headers
                            }), t = new URL(this.url + data.url), n = t.searchParams.get("token");
                            if (!n) throw new ne("No token returned by API");
                            return {
                                data: {
                                    signedUrl: t.toString(),
                                    path: path,
                                    token: n
                                },
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                update(path, e, t) {
                    return me(this, void 0, void 0, (function* () {
                        return this.uploadOrUpdate("PUT", path, e, t)
                    }))
                }
                move(e, t) {
                    return me(this, void 0, void 0, (function* () {
                        try {
                            return {
                                data: yield pe(this.fetch, `${this.url}/object/move`, {
                                    bucketId: this.bucketId,
                                    sourceKey: e,
                                    destinationKey: t
                                }, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                copy(e, t) {
                    return me(this, void 0, void 0, (function* () {
                        try {
                            return {
                                data: {
                                    path: (yield pe(this.fetch, `${this.url}/object/copy`, {
                                        bucketId: this.bucketId,
                                        sourceKey: e,
                                        destinationKey: t
                                    }, {
                                        headers: this.headers
                                    })).Key
                                },
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                createSignedUrl(path, e, t) {
                    return me(this, void 0, void 0, (function* () {
                        try {
                            let n = this._getFinalPath(path),
                                data = yield pe(this.fetch, `${this.url}/object/sign/${n}`, Object.assign({
                                    expiresIn: e
                                }, (null == t ? void 0 : t.transform) ? {
                                    transform: t.transform
                                } : {}), {
                                    headers: this.headers
                                });
                            const r = (null == t ? void 0 : t.download) ? `&download=${!0===t.download?"":t.download}` : "";
                            return data = {
                                signedUrl: encodeURI(`${this.url}${data.signedURL}${r}`)
                            }, {
                                data: data,
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                createSignedUrls(e, t, n) {
                    return me(this, void 0, void 0, (function* () {
                        try {
                            const data = yield pe(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                                expiresIn: t,
                                paths: e
                            }, {
                                headers: this.headers
                            }), r = (null == n ? void 0 : n.download) ? `&download=${!0===n.download?"":n.download}` : "";
                            return {
                                data: data.map((e => Object.assign(Object.assign({}, e), {
                                    signedUrl: e.signedURL ? encodeURI(`${this.url}${e.signedURL}${r}`) : null
                                }))),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                download(path, e) {
                    return me(this, void 0, void 0, (function* () {
                        const t = void 0 !== (null == e ? void 0 : e.transform) ? "render/image/authenticated" : "object",
                            n = this.transformOptsToQueryString((null == e ? void 0 : e.transform) || {}),
                            r = n ? `?${n}` : "";
                        try {
                            const e = this._getFinalPath(path),
                                n = yield fe(this.fetch, `${this.url}/${t}/${e}${r}`, {
                                    headers: this.headers,
                                    noResolveJson: !0
                                });
                            return {
                                data: yield n.blob(),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                getPublicUrl(path, e) {
                    const t = this._getFinalPath(path),
                        n = [],
                        r = (null == e ? void 0 : e.download) ? `download=${!0===e.download?"":e.download}` : "";
                    "" !== r && n.push(r);
                    const o = void 0 !== (null == e ? void 0 : e.transform) ? "render/image" : "object",
                        c = this.transformOptsToQueryString((null == e ? void 0 : e.transform) || {});
                    "" !== c && n.push(c);
                    let l = n.join("&");
                    return "" !== l && (l = `?${l}`), {
                        data: {
                            publicUrl: encodeURI(`${this.url}/${o}/public/${t}${l}`)
                        }
                    }
                }
                remove(e) {
                    return me(this, void 0, void 0, (function* () {
                        try {
                            return {
                                data: yield ge(this.fetch, `${this.url}/object/${this.bucketId}`, {
                                    prefixes: e
                                }, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                list(path, e, t) {
                    return me(this, void 0, void 0, (function* () {
                        try {
                            const body = Object.assign(Object.assign(Object.assign({}, ye), e), {
                                prefix: path || ""
                            });
                            return {
                                data: yield pe(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, {
                                    headers: this.headers
                                }, t),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _getFinalPath(path) {
                    return `${this.bucketId}/${path}`
                }
                _removeEmptyFolders(path) {
                    return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
                }
                transformOptsToQueryString(e) {
                    const t = [];
                    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&")
                }
            }
            const be = {
                "X-Client-Info": "storage-js/2.5.1"
            };
            var we = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            class Ce {
                constructor(e, t = {}, n) {
                    this.url = e, this.headers = Object.assign(Object.assign({}, be), t), this.fetch = ae(n)
                }
                listBuckets() {
                    return we(this, void 0, void 0, (function* () {
                        try {
                            return {
                                data: yield fe(this.fetch, `${this.url}/bucket`, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                getBucket(e) {
                    return we(this, void 0, void 0, (function* () {
                        try {
                            return {
                                data: yield fe(this.fetch, `${this.url}/bucket/${e}`, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                createBucket(e, t = {
                    public: !1
                }) {
                    return we(this, void 0, void 0, (function* () {
                        try {
                            return {
                                data: yield pe(this.fetch, `${this.url}/bucket`, {
                                    id: e,
                                    name: e,
                                    public: t.public,
                                    file_size_limit: t.fileSizeLimit,
                                    allowed_mime_types: t.allowedMimeTypes
                                }, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                updateBucket(e, t) {
                    return we(this, void 0, void 0, (function* () {
                        try {
                            const data = yield function (e, t, body, n, r) {
                                return ce(this, void 0, void 0, (function* () {
                                    return de(e, "PUT", t, n, r, body)
                                }))
                            }(this.fetch, `${this.url}/bucket/${e}`, {
                                id: e,
                                name: e,
                                public: t.public,
                                file_size_limit: t.fileSizeLimit,
                                allowed_mime_types: t.allowedMimeTypes
                            }, {
                                headers: this.headers
                            });
                            return {
                                data: data,
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                emptyBucket(e) {
                    return we(this, void 0, void 0, (function* () {
                        try {
                            return {
                                data: yield pe(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                deleteBucket(e) {
                    return we(this, void 0, void 0, (function* () {
                        try {
                            return {
                                data: yield ge(this.fetch, `${this.url}/bucket/${e}`, {}, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (re(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
            }
            class xe extends Ce {
                constructor(e, t = {}, n) {
                    super(e, t, n)
                }
                from(e) {
                    return new ve(this.url, this.headers, e, this.fetch)
                }
            }
            const Te = {
                "X-Client-Info": "supabase-js/2.21.0"
            };
            var Ee = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            const ke = e => {
                    let t;
                    return t = e || ("undefined" == typeof fetch ? y.a : fetch), (...e) => t(...e)
                },
                Se = (e, t, n) => {
                    const r = ke(n),
                        o = "undefined" == typeof Headers ? m.Headers : Headers;
                    return (input, n) => Ee(void 0, void 0, void 0, (function* () {
                        var c;
                        const l = null !== (c = yield t()) && void 0 !== c ? c : e;
                        let h = new o(null == n ? void 0 : n.headers);
                        return h.has("apikey") || h.set("apikey", e), h.has("Authorization") || h.set("Authorization", `Bearer ${l}`), r(input, Object.assign(Object.assign({}, n), {
                            headers: h
                        }))
                    }))
                };
            var Ie = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            const Oe = () => "undefined" != typeof document,
                Pe = {
                    tested: !1,
                    writable: !1
                },
                je = () => {
                    if (!Oe()) return !1;
                    try {
                        if ("object" != typeof globalThis.localStorage) return !1
                    } catch (e) {
                        return !1
                    }
                    if (Pe.tested) return Pe.writable;
                    const e = `lswt-${Math.random()}${Math.random()}`;
                    try {
                        globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), Pe.tested = !0, Pe.writable = !0
                    } catch (e) {
                        Pe.tested = !0, Pe.writable = !1
                    }
                    return Pe.writable
                };

            function Re(e, t) {
                var n;
                t || (t = (null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.href) || ""), e = e.replace(/[\[\]]/g, "\\$&");
                const r = new RegExp("[?&#]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
            }
            const Ae = e => {
                    let t;
                    return t = e || ("undefined" == typeof fetch ? (...e) => Ie(void 0, void 0, void 0, (function* () {
                        return yield(yield Promise.resolve().then(n.t.bind(null, 94, 7))).fetch(...e)
                    })) : fetch), (...e) => t(...e)
                },
                Ne = (e, t, data) => Ie(void 0, void 0, void 0, (function* () {
                    yield e.setItem(t, JSON.stringify(data))
                })),
                De = (e, t) => Ie(void 0, void 0, void 0, (function* () {
                    const n = yield e.getItem(t);
                    if (!n) return null;
                    try {
                        return JSON.parse(n)
                    } catch (e) {
                        return n
                    }
                })),
                $e = (e, t) => Ie(void 0, void 0, void 0, (function* () {
                    yield e.removeItem(t)
                }));
            class Le {
                constructor() {
                    this.promise = new Le.promiseConstructor(((e, t) => {
                        this.resolve = e, this.reject = t
                    }))
                }
            }

            function Me(e) {
                const t = e.split(".");
                if (3 !== t.length) throw new Error("JWT is not valid: not a JWT structure");
                if (!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(t[1])) throw new Error("JWT is not valid: payload is not in base64url format");
                const n = t[1];
                return JSON.parse(function (e) {
                    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    let n, r, o, c, l, h, d, f = "",
                        i = 0;
                    for (e = e.replace("-", "+").replace("_", "/"); i < e.length;) c = t.indexOf(e.charAt(i++)), l = t.indexOf(e.charAt(i++)), h = t.indexOf(e.charAt(i++)), d = t.indexOf(e.charAt(i++)), n = c << 2 | l >> 4, r = (15 & l) << 4 | h >> 2, o = (3 & h) << 6 | d, f += String.fromCharCode(n), 64 != h && 0 != r && (f += String.fromCharCode(r)), 64 != d && 0 != o && (f += String.fromCharCode(o));
                    return f
                }(n))
            }

            function Ue(e) {
                return ("0" + e.toString(16)).substr(-2)
            }

            function Fe() {
                const e = new Uint32Array(56);
                if ("undefined" == typeof crypto) {
                    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
                        t = e.length;
                    let n = "";
                    for (let i = 0; i < 56; i++) n += e.charAt(Math.floor(Math.random() * t));
                    return n
                }
                return crypto.getRandomValues(e), Array.from(e, Ue).join("")
            }

            function Be(e) {
                return Ie(this, void 0, void 0, (function* () {
                    if ("undefined" == typeof crypto) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
                    const t = yield function (e) {
                        return Ie(this, void 0, void 0, (function* () {
                            const t = (new TextEncoder).encode(e),
                                n = yield crypto.subtle.digest("SHA-256", t), r = new Uint8Array(n);
                            return Array.from(r).map((e => String.fromCharCode(e))).join("")
                        }))
                    }(e);
                    return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }))
            }
            Le.promiseConstructor = Promise;
            class qe extends Error {
                constructor(e, t) {
                    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t
                }
            }

            function ze(e) {
                return "object" == typeof e && null !== e && "__isAuthError" in e
            }
            class He extends qe {
                constructor(e, t) {
                    super(e, t), this.name = "AuthApiError", this.status = t
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status
                    }
                }
            }
            class We extends qe {
                constructor(e, t) {
                    super(e), this.name = "AuthUnknownError", this.originalError = t
                }
            }
            class Ye extends qe {
                constructor(e, t, n) {
                    super(e), this.name = t, this.status = n
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status
                    }
                }
            }
            class Ve extends Ye {
                constructor() {
                    super("Auth session missing!", "AuthSessionMissingError", 400)
                }
            }
            class Ke extends Ye {
                constructor(e) {
                    super(e, "AuthInvalidCredentialsError", 400)
                }
            }
            class Ge extends Ye {
                constructor(e, details = null) {
                    super(e, "AuthImplicitGrantRedirectError", 500), this.details = null, this.details = details
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status,
                        details: this.details
                    }
                }
            }
            class Je extends Ye {
                constructor(e, details = null) {
                    super(e, "AuthPKCEGrantCodeExchangeError", 500), this.details = null, this.details = details
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status,
                        details: this.details
                    }
                }
            }
            class Qe extends Ye {
                constructor(e, t) {
                    super(e, "AuthRetryableFetchError", t)
                }
            }
            var Xe = function (e, t, n, r) {
                    return new(n || (n = Promise))((function (o, c) {
                        function l(e) {
                            try {
                                d(r.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function h(e) {
                            try {
                                d(r.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function d(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                e(t)
                            }))).then(l, h)
                        }
                        d((r = r.apply(e, t || [])).next())
                    }))
                },
                Ze = function (s, e) {
                    var t = {};
                    for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
                    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]])
                    }
                    return t
                };
            const et = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
                tt = (e, t) => Xe(void 0, void 0, void 0, (function* () {
                    var n;
                    "object" == typeof (n = e) && null !== n && "status" in n && "ok" in n && "json" in n && "function" == typeof n.json ? [502, 503, 504].includes(e.status) ? t(new Qe(et(e), e.status)) : e.json().then((n => {
                        t(new He(et(n), e.status || 500))
                    })).catch((e => {
                        t(new We(et(e), e))
                    })) : t(new Qe(et(e), 0))
                })),
                nt = (e, t, n, body) => {
                    const r = {
                        method: e,
                        headers: (null == t ? void 0 : t.headers) || {}
                    };
                    return "GET" === e ? r : (r.headers = Object.assign({
                        "Content-Type": "application/json;charset=UTF-8"
                    }, null == t ? void 0 : t.headers), r.body = JSON.stringify(body), Object.assign(Object.assign({}, r), n))
                };

            function it(e, t, n, r) {
                var o;
                return Xe(this, void 0, void 0, (function* () {
                    const c = Object.assign({}, null == r ? void 0 : r.headers);
                    (null == r ? void 0 : r.jwt) && (c.Authorization = `Bearer ${r.jwt}`);
                    const l = null !== (o = null == r ? void 0 : r.query) && void 0 !== o ? o : {};
                    (null == r ? void 0 : r.redirectTo) && (l.redirect_to = r.redirectTo);
                    const h = Object.keys(l).length ? "?" + new URLSearchParams(l).toString() : "",
                        data = yield function (e, t, n, r, o, body) {
                            return Xe(this, void 0, void 0, (function* () {
                                return new Promise(((c, l) => {
                                    e(n, nt(t, r, o, body)).then((e => {
                                        if (!e.ok) throw e;
                                        return (null == r ? void 0 : r.noResolveJson) ? e : e.json()
                                    })).then((data => c(data))).catch((e => tt(e, l)))
                                }))
                            }))
                        }(e, t, n + h, {
                            headers: c,
                            noResolveJson: null == r ? void 0 : r.noResolveJson
                        }, {}, null == r ? void 0 : r.body);
                    return (null == r ? void 0 : r.xform) ? null == r ? void 0 : r.xform(data) : {
                        data: Object.assign({}, data),
                        error: null
                    }
                }))
            }

            function st(data) {
                var e;
                let t = null;
                var n;
                (function (data) {
                    return data.access_token && data.refresh_token && data.expires_in
                })(data) && (t = Object.assign({}, data), t.expires_at = (n = data.expires_in, Math.round(Date.now() / 1e3) + n));
                return {
                    data: {
                        session: t,
                        user: null !== (e = data.user) && void 0 !== e ? e : data
                    },
                    error: null
                }
            }

            function ot(data) {
                var e;
                return {
                    data: {
                        user: null !== (e = data.user) && void 0 !== e ? e : data
                    },
                    error: null
                }
            }

            function at(data) {
                return {
                    data: data,
                    error: null
                }
            }

            function ct(data) {
                const {
                    action_link: e,
                    email_otp: t,
                    hashed_token: n,
                    redirect_to: r,
                    verification_type: o
                } = data, c = Ze(data, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
                return {
                    data: {
                        properties: {
                            action_link: e,
                            email_otp: t,
                            hashed_token: n,
                            redirect_to: r,
                            verification_type: o
                        },
                        user: Object.assign({}, c)
                    },
                    error: null
                }
            }

            function lt(data) {
                return data
            }
            var ht = function (e, t, n, r) {
                    return new(n || (n = Promise))((function (o, c) {
                        function l(e) {
                            try {
                                d(r.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function h(e) {
                            try {
                                d(r.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function d(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                e(t)
                            }))).then(l, h)
                        }
                        d((r = r.apply(e, t || [])).next())
                    }))
                },
                ut = function (s, e) {
                    var t = {};
                    for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
                    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]])
                    }
                    return t
                };
            class ft {
                constructor({
                    url: e = "",
                    headers: t = {},
                    fetch: n
                }) {
                    this.url = e, this.headers = t, this.fetch = Ae(n), this.mfa = {
                        listFactors: this._listFactors.bind(this),
                        deleteFactor: this._deleteFactor.bind(this)
                    }
                }
                signOut(e) {
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            return yield it(this.fetch, "POST", `${this.url}/logout`, {
                                headers: this.headers,
                                jwt: e,
                                noResolveJson: !0
                            }), {
                                data: null,
                                error: null
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                inviteUserByEmail(e, t = {}) {
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            return yield it(this.fetch, "POST", `${this.url}/invite`, {
                                body: {
                                    email: e,
                                    data: t.data
                                },
                                headers: this.headers,
                                redirectTo: t.redirectTo,
                                xform: ot
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                generateLink(e) {
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            const {
                                options: t
                            } = e, n = ut(e, ["options"]), body = Object.assign(Object.assign({}, n), t);
                            return "newEmail" in n && (body.new_email = null == n ? void 0 : n.newEmail, delete body.newEmail), yield it(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                                body: body,
                                headers: this.headers,
                                xform: ct,
                                redirectTo: null == t ? void 0 : t.redirectTo
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    properties: null,
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                createUser(e) {
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            return yield it(this.fetch, "POST", `${this.url}/admin/users`, {
                                body: e,
                                headers: this.headers,
                                xform: ot
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                listUsers(e) {
                    var t, n, r, o, c, l, h;
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            const d = {
                                    nextPage: null,
                                    lastPage: 0,
                                    total: 0
                                },
                                f = yield it(this.fetch, "GET", `${this.url}/admin/users`, {
                                    headers: this.headers,
                                    noResolveJson: !0,
                                    query: {
                                        page: null !== (n = null === (t = null == e ? void 0 : e.page) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "",
                                        per_page: null !== (o = null === (r = null == e ? void 0 : e.perPage) || void 0 === r ? void 0 : r.toString()) && void 0 !== o ? o : ""
                                    },
                                    xform: lt
                                });
                            if (f.error) throw f.error;
                            const m = yield f.json(), y = null !== (c = f.headers.get("x-total-count")) && void 0 !== c ? c : 0, _ = null !== (h = null === (l = f.headers.get("link")) || void 0 === l ? void 0 : l.split(",")) && void 0 !== h ? h : [];
                            return _.length > 0 && (_.forEach((link => {
                                const e = parseInt(link.split(";")[0].split("=")[1].substring(0, 1)),
                                    t = JSON.parse(link.split(";")[1].split("=")[1]);
                                d[`${t}Page`] = e
                            })), d.total = parseInt(y)), {
                                data: Object.assign(Object.assign({}, m), d),
                                error: null
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    users: []
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                getUserById(e) {
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            return yield it(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                                headers: this.headers,
                                xform: ot
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                updateUserById(e, t) {
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            return yield it(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                                body: t,
                                headers: this.headers,
                                xform: ot
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                deleteUser(e, t = !1) {
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            return yield it(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                                headers: this.headers,
                                body: {
                                    should_soft_delete: t
                                },
                                xform: ot
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _listFactors(e) {
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            const {
                                data: data,
                                error: t
                            } = yield it(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                                headers: this.headers,
                                xform: e => ({
                                    data: {
                                        factors: e
                                    },
                                    error: null
                                })
                            });
                            return {
                                data: data,
                                error: t
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _deleteFactor(e) {
                    return ht(this, void 0, void 0, (function* () {
                        try {
                            return {
                                data: yield it(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
            }
            const pt = {
                "X-Client-Info": "gotrue-js/2.23.0"
            };
            var gt = {
                getItem: e => je() ? globalThis.localStorage.getItem(e) : null,
                setItem: (e, t) => {
                    je() && globalThis.localStorage.setItem(e, t)
                },
                removeItem: e => {
                    je() && globalThis.localStorage.removeItem(e)
                }
            };
            var mt = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            ! function () {
                if ("object" != typeof globalThis) try {
                    Object.defineProperty(Object.prototype, "__magic__", {
                        get: function () {
                            return this
                        },
                        configurable: !0
                    }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__
                } catch (e) {
                    "undefined" != typeof self && (self.globalThis = self)
                }
            }();
            const yt = {
                    url: "http://localhost:9999",
                    storageKey: "supabase.auth.token",
                    autoRefreshToken: !0,
                    persistSession: !0,
                    detectSessionInUrl: !0,
                    headers: pt,
                    flowType: "implicit"
                },
                _t = 1e4;
            class vt {
                constructor(e) {
                    var t;
                    this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.broadcastChannel = null;
                    const n = Object.assign(Object.assign({}, yt), e);
                    if (this.inMemorySession = null, this.storageKey = n.storageKey, this.autoRefreshToken = n.autoRefreshToken, this.persistSession = n.persistSession, this.storage = n.storage || gt, this.admin = new ft({
                            url: n.url,
                            headers: n.headers,
                            fetch: n.fetch
                        }), this.url = n.url, this.headers = n.headers, this.fetch = Ae(n.fetch), this.detectSessionInUrl = n.detectSessionInUrl, this.flowType = n.flowType, this.mfa = {
                            verify: this._verify.bind(this),
                            enroll: this._enroll.bind(this),
                            unenroll: this._unenroll.bind(this),
                            challenge: this._challenge.bind(this),
                            listFactors: this._listFactors.bind(this),
                            challengeAndVerify: this._challengeAndVerify.bind(this),
                            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
                        }, Oe() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
                        try {
                            this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
                        } catch (e) {
                            console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e)
                        }
                        null === (t = this.broadcastChannel) || void 0 === t || t.addEventListener("message", (e => {
                            this._notifyAllSubscribers(e.data.event, e.data.session, !1)
                        }))
                    }
                    this.initialize()
                }
                initialize() {
                    return this.initializePromise || (this.initializePromise = this._initialize()), this.initializePromise
                }
                _initialize() {
                    return mt(this, void 0, void 0, (function* () {
                        if (this.initializePromise) return this.initializePromise;
                        try {
                            const e = yield this._isPKCEFlow();
                            if (this.detectSessionInUrl && this._isImplicitGrantFlow() || e) {
                                const {
                                    data: data,
                                    error: t
                                } = yield this._getSessionFromUrl(e);
                                if (t) return yield this._removeSession(), {
                                    error: t
                                };
                                const {
                                    session: n,
                                    redirectType: r
                                } = data;
                                return yield this._saveSession(n), setTimeout((() => {
                                    "recovery" === r ? this._notifyAllSubscribers("PASSWORD_RECOVERY", n) : this._notifyAllSubscribers("SIGNED_IN", n)
                                }), 0), {
                                    error: null
                                }
                            }
                            return yield this._recoverAndRefresh(), {
                                error: null
                            }
                        } catch (e) {
                            return ze(e) ? {
                                error: e
                            } : {
                                error: new We("Unexpected error during initialization", e)
                            }
                        } finally {
                            yield this._handleVisibilityChange()
                        }
                    }))
                }
                signUp(e) {
                    var t, n, r;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            let o;
                            if (yield this._removeSession(), "email" in e) {
                                const {
                                    email: n,
                                    password: r,
                                    options: c
                                } = e;
                                let l = null,
                                    h = null;
                                if ("pkce" === this.flowType) {
                                    const e = Fe();
                                    yield Ne(this.storage, `${this.storageKey}-code-verifier`, e), l = yield Be(e), h = e === l ? "plain" : "s256"
                                }
                                o = yield it(this.fetch, "POST", `${this.url}/signup`, {
                                    headers: this.headers,
                                    redirectTo: null == c ? void 0 : c.emailRedirectTo,
                                    body: {
                                        email: n,
                                        password: r,
                                        data: null !== (t = null == c ? void 0 : c.data) && void 0 !== t ? t : {},
                                        gotrue_meta_security: {
                                            captcha_token: null == c ? void 0 : c.captchaToken
                                        },
                                        code_challenge: l,
                                        code_challenge_method: h
                                    },
                                    xform: st
                                })
                            } else {
                                if (!("phone" in e)) throw new Ke("You must provide either an email or phone number and a password"); {
                                    const {
                                        phone: t,
                                        password: c,
                                        options: l
                                    } = e;
                                    o = yield it(this.fetch, "POST", `${this.url}/signup`, {
                                        headers: this.headers,
                                        body: {
                                            phone: t,
                                            password: c,
                                            data: null !== (n = null == l ? void 0 : l.data) && void 0 !== n ? n : {},
                                            channel: null !== (r = null == l ? void 0 : l.channel) && void 0 !== r ? r : "sms",
                                            gotrue_meta_security: {
                                                captcha_token: null == l ? void 0 : l.captchaToken
                                            }
                                        },
                                        xform: st
                                    })
                                }
                            }
                            const {
                                data: data,
                                error: c
                            } = o;
                            if (c || !data) return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: c
                            };
                            const l = data.session,
                                h = data.user;
                            return data.session && (yield this._saveSession(data.session), this._notifyAllSubscribers("SIGNED_IN", l)), {
                                data: {
                                    user: h,
                                    session: l
                                },
                                error: null
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                signInWithPassword(e) {
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            let t;
                            if (yield this._removeSession(), "email" in e) {
                                const {
                                    email: n,
                                    password: r,
                                    options: o
                                } = e;
                                t = yield it(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                                    headers: this.headers,
                                    body: {
                                        email: n,
                                        password: r,
                                        gotrue_meta_security: {
                                            captcha_token: null == o ? void 0 : o.captchaToken
                                        }
                                    },
                                    xform: st
                                })
                            } else {
                                if (!("phone" in e)) throw new Ke("You must provide either an email or phone number and a password"); {
                                    const {
                                        phone: n,
                                        password: r,
                                        options: o
                                    } = e;
                                    t = yield it(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                                        headers: this.headers,
                                        body: {
                                            phone: n,
                                            password: r,
                                            gotrue_meta_security: {
                                                captcha_token: null == o ? void 0 : o.captchaToken
                                            }
                                        },
                                        xform: st
                                    })
                                }
                            }
                            const {
                                data: data,
                                error: n
                            } = t;
                            return n || !data ? {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: n
                            } : (data.session && (yield this._saveSession(data.session), this._notifyAllSubscribers("SIGNED_IN", data.session)), {
                                data: data,
                                error: n
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                signInWithOAuth(e) {
                    var t, n, r, o;
                    return mt(this, void 0, void 0, (function* () {
                        return yield this._removeSession(), yield this._handleProviderSignIn(e.provider, {
                            redirectTo: null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
                            scopes: null === (n = e.options) || void 0 === n ? void 0 : n.scopes,
                            queryParams: null === (r = e.options) || void 0 === r ? void 0 : r.queryParams,
                            skipBrowserRedirect: null === (o = e.options) || void 0 === o ? void 0 : o.skipBrowserRedirect
                        })
                    }))
                }
                exchangeCodeForSession(e) {
                    return mt(this, void 0, void 0, (function* () {
                        const t = yield De(this.storage, `${this.storageKey}-code-verifier`), {
                            data: data,
                            error: n
                        } = yield it(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                            headers: this.headers,
                            body: {
                                auth_code: e,
                                code_verifier: t
                            },
                            xform: st
                        });
                        return yield $e(this.storage, `${this.storageKey}-code-verifier`), n || !data ? {
                            data: {
                                user: null,
                                session: null
                            },
                            error: n
                        } : (data.session && (yield this._saveSession(data.session), this._notifyAllSubscribers("SIGNED_IN", data.session)), {
                            data: data,
                            error: n
                        })
                    }))
                }
                signInWithIdToken(e) {
                    return mt(this, void 0, void 0, (function* () {
                        yield this._removeSession();
                        try {
                            const {
                                options: t,
                                provider: n,
                                token: r,
                                nonce: o
                            } = e, c = yield it(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                                headers: this.headers,
                                body: {
                                    provider: n,
                                    id_token: r,
                                    nonce: o,
                                    gotrue_meta_security: {
                                        captcha_token: null == t ? void 0 : t.captchaToken
                                    }
                                },
                                xform: st
                            }), {
                                data: data,
                                error: l
                            } = c;
                            return l || !data ? {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: l
                            } : (data.session && (yield this._saveSession(data.session), this._notifyAllSubscribers("SIGNED_IN", data.session)), {
                                data: data,
                                error: l
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                signInWithOtp(e) {
                    var t, n, r, o, c;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            if (yield this._removeSession(), "email" in e) {
                                const {
                                    email: r,
                                    options: o
                                } = e;
                                let c = null,
                                    l = null;
                                if ("pkce" === this.flowType) {
                                    const e = Fe();
                                    yield Ne(this.storage, `${this.storageKey}-code-verifier`, e), c = yield Be(e), l = e === c ? "plain" : "s256"
                                }
                                const {
                                    error: h
                                } = yield it(this.fetch, "POST", `${this.url}/otp`, {
                                    headers: this.headers,
                                    body: {
                                        email: r,
                                        data: null !== (t = null == o ? void 0 : o.data) && void 0 !== t ? t : {},
                                        create_user: null === (n = null == o ? void 0 : o.shouldCreateUser) || void 0 === n || n,
                                        gotrue_meta_security: {
                                            captcha_token: null == o ? void 0 : o.captchaToken
                                        },
                                        code_challenge: c,
                                        code_challenge_method: l
                                    },
                                    redirectTo: null == o ? void 0 : o.emailRedirectTo
                                });
                                return {
                                    data: {
                                        user: null,
                                        session: null
                                    },
                                    error: h
                                }
                            }
                            if ("phone" in e) {
                                const {
                                    phone: t,
                                    options: n
                                } = e, {
                                    error: l
                                } = yield it(this.fetch, "POST", `${this.url}/otp`, {
                                    headers: this.headers,
                                    body: {
                                        phone: t,
                                        data: null !== (r = null == n ? void 0 : n.data) && void 0 !== r ? r : {},
                                        create_user: null === (o = null == n ? void 0 : n.shouldCreateUser) || void 0 === o || o,
                                        gotrue_meta_security: {
                                            captcha_token: null == n ? void 0 : n.captchaToken
                                        },
                                        channel: null !== (c = null == n ? void 0 : n.channel) && void 0 !== c ? c : "sms"
                                    }
                                });
                                return {
                                    data: {
                                        user: null,
                                        session: null
                                    },
                                    error: l
                                }
                            }
                            throw new Ke("You must provide either an email or phone number.")
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                verifyOtp(e) {
                    var t, n;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            yield this._removeSession();
                            const {
                                data: data,
                                error: r
                            } = yield it(this.fetch, "POST", `${this.url}/verify`, {
                                headers: this.headers,
                                body: Object.assign(Object.assign({}, e), {
                                    gotrue_meta_security: {
                                        captcha_token: null === (t = e.options) || void 0 === t ? void 0 : t.captchaToken
                                    }
                                }),
                                redirectTo: null === (n = e.options) || void 0 === n ? void 0 : n.redirectTo,
                                xform: st
                            });
                            if (r) throw r;
                            if (!data) throw new Error("An error occurred on token verification.");
                            const o = data.session,
                                c = data.user;
                            return (null == o ? void 0 : o.access_token) && (yield this._saveSession(o), this._notifyAllSubscribers("SIGNED_IN", o)), {
                                data: {
                                    user: c,
                                    session: o
                                },
                                error: null
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                signInWithSSO(e) {
                    var t, n, r;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            return yield this._removeSession(), yield it(this.fetch, "POST", `${this.url}/sso`, {
                                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
                                    provider_id: e.providerId
                                } : null), "domain" in e ? {
                                    domain: e.domain
                                } : null), {
                                    redirect_to: null !== (n = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo) && void 0 !== n ? n : void 0
                                }), (null === (r = null == e ? void 0 : e.options) || void 0 === r ? void 0 : r.captchaToken) ? {
                                    gotrue_meta_security: {
                                        captcha_token: e.options.captchaToken
                                    }
                                } : null), {
                                    skip_http_redirect: !0
                                }),
                                headers: this.headers,
                                xform: at
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                getSession() {
                    return mt(this, void 0, void 0, (function* () {
                        yield this.initializePromise;
                        let e = null;
                        if (this.persistSession) {
                            const t = yield De(this.storage, this.storageKey);
                            null !== t && (this._isValidSession(t) ? e = t : yield this._removeSession())
                        } else e = this.inMemorySession;
                        if (!e) return {
                            data: {
                                session: null
                            },
                            error: null
                        };
                        if (!(!!e.expires_at && e.expires_at <= Date.now() / 1e3)) return {
                            data: {
                                session: e
                            },
                            error: null
                        };
                        const {
                            session: t,
                            error: n
                        } = yield this._callRefreshToken(e.refresh_token);
                        return n ? {
                            data: {
                                session: null
                            },
                            error: n
                        } : {
                            data: {
                                session: t
                            },
                            error: null
                        }
                    }))
                }
                getUser(e) {
                    var t, n;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            if (!e) {
                                const {
                                    data: data,
                                    error: r
                                } = yield this.getSession();
                                if (r) throw r;
                                e = null !== (n = null === (t = data.session) || void 0 === t ? void 0 : t.access_token) && void 0 !== n ? n : void 0
                            }
                            return yield it(this.fetch, "GET", `${this.url}/user`, {
                                headers: this.headers,
                                jwt: e,
                                xform: ot
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                updateUser(e, t = {}) {
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            const {
                                data: n,
                                error: r
                            } = yield this.getSession();
                            if (r) throw r;
                            if (!n.session) throw new Ve;
                            const o = n.session,
                                {
                                    data: data,
                                    error: c
                                } = yield it(this.fetch, "PUT", `${this.url}/user`, {
                                    headers: this.headers,
                                    redirectTo: null == t ? void 0 : t.emailRedirectTo,
                                    body: e,
                                    jwt: o.access_token,
                                    xform: ot
                                });
                            if (c) throw c;
                            return o.user = data.user, yield this._saveSession(o), this._notifyAllSubscribers("USER_UPDATED", o), {
                                data: {
                                    user: o.user
                                },
                                error: null
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _decodeJWT(e) {
                    return Me(e)
                }
                setSession(e) {
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            if (!e.access_token || !e.refresh_token) throw new Ve;
                            const t = Date.now() / 1e3;
                            let n = t,
                                r = !0,
                                o = null;
                            const c = Me(e.access_token);
                            if (c.exp && (n = c.exp, r = n <= t), r) {
                                const {
                                    session: t,
                                    error: n
                                } = yield this._callRefreshToken(e.refresh_token);
                                if (n) return {
                                    data: {
                                        user: null,
                                        session: null
                                    },
                                    error: n
                                };
                                if (!t) return {
                                    data: {
                                        user: null,
                                        session: null
                                    },
                                    error: null
                                };
                                o = t
                            } else {
                                const {
                                    data: data,
                                    error: r
                                } = yield this.getUser(e.access_token);
                                if (r) throw r;
                                o = {
                                    access_token: e.access_token,
                                    refresh_token: e.refresh_token,
                                    user: data.user,
                                    token_type: "bearer",
                                    expires_in: n - t,
                                    expires_at: n
                                }, yield this._saveSession(o), this._notifyAllSubscribers("SIGNED_IN", o)
                            }
                            return {
                                data: {
                                    user: o.user,
                                    session: o
                                },
                                error: null
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    session: null,
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                refreshSession(e) {
                    var t;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            if (!e) {
                                const {
                                    data: data,
                                    error: n
                                } = yield this.getSession();
                                if (n) throw n;
                                e = null !== (t = data.session) && void 0 !== t ? t : void 0
                            }
                            if (!(null == e ? void 0 : e.refresh_token)) throw new Ve;
                            const {
                                session: n,
                                error: r
                            } = yield this._callRefreshToken(e.refresh_token);
                            return r ? {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: r
                            } : n ? {
                                data: {
                                    user: n.user,
                                    session: n
                                },
                                error: null
                            } : {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: null
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _getSessionFromUrl(e) {
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            if (!Oe()) throw new Ge("No browser detected.");
                            if ("implicit" === this.flowType && !this._isImplicitGrantFlow()) throw new Ge("Not a valid implicit grant flow url.");
                            if ("pkce" == this.flowType && !e) throw new Je("Not a valid PKCE flow url.");
                            if (e) {
                                const e = Re("code");
                                if (!e) throw new Je("No code detected.");
                                const {
                                    data: data,
                                    error: t
                                } = yield this.exchangeCodeForSession(e);
                                if (t) throw t;
                                if (!data.session) throw new Je("No session detected.");
                                return {
                                    data: {
                                        session: data.session,
                                        redirectType: null
                                    },
                                    error: null
                                }
                            }
                            const t = Re("error_description");
                            if (t) {
                                const e = Re("error_code");
                                if (!e) throw new Ge("No error_code detected.");
                                const n = Re("error");
                                if (!n) throw new Ge("No error detected.");
                                throw new Ge(t, {
                                    error: n,
                                    code: e
                                })
                            }
                            const n = Re("provider_token"),
                                r = Re("provider_refresh_token"),
                                o = Re("access_token");
                            if (!o) throw new Ge("No access_token detected.");
                            const c = Re("expires_in");
                            if (!c) throw new Ge("No expires_in detected.");
                            const l = Re("refresh_token");
                            if (!l) throw new Ge("No refresh_token detected.");
                            const h = Re("token_type");
                            if (!h) throw new Ge("No token_type detected.");
                            const d = Math.round(Date.now() / 1e3) + parseInt(c),
                                {
                                    data: data,
                                    error: f
                                } = yield this.getUser(o);
                            if (f) throw f;
                            const m = data.user,
                                y = {
                                    provider_token: n,
                                    provider_refresh_token: r,
                                    access_token: o,
                                    expires_in: parseInt(c),
                                    expires_at: d,
                                    refresh_token: l,
                                    token_type: h,
                                    user: m
                                },
                                _ = Re("type");
                            return window.location.hash = "", {
                                data: {
                                    session: y,
                                    redirectType: _
                                },
                                error: null
                            }
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    session: null,
                                    redirectType: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _isImplicitGrantFlow() {
                    return Oe() && (Boolean(Re("access_token")) || Boolean(Re("error_description")))
                }
                _isPKCEFlow() {
                    return mt(this, void 0, void 0, (function* () {
                        const e = yield De(this.storage, `${this.storageKey}-code-verifier`);
                        return Oe() && Boolean(Re("code")) && Boolean(e)
                    }))
                }
                signOut() {
                    var e;
                    return mt(this, void 0, void 0, (function* () {
                        const {
                            data: data,
                            error: t
                        } = yield this.getSession();
                        if (t) return {
                            error: t
                        };
                        const n = null === (e = data.session) || void 0 === e ? void 0 : e.access_token;
                        if (n) {
                            const {
                                error: e
                            } = yield this.admin.signOut(n);
                            if (e && (! function (e) {
                                    return ze(e) && "AuthApiError" === e.name
                                }(e) || 404 !== e.status && 401 !== e.status)) return {
                                error: e
                            }
                        }
                        return yield this._removeSession(), yield $e(this.storage, `${this.storageKey}-code-verifier`), this._notifyAllSubscribers("SIGNED_OUT", null), {
                            error: null
                        }
                    }))
                }
                onAuthStateChange(e) {
                    const t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
                            const t = 16 * Math.random() | 0;
                            return ("x" == e ? t : 3 & t | 8).toString(16)
                        })),
                        n = {
                            id: t,
                            callback: e,
                            unsubscribe: () => {
                                this.stateChangeEmitters.delete(t)
                            }
                        };
                    return this.stateChangeEmitters.set(t, n), this.emitInitialSession(t), {
                        data: {
                            subscription: n
                        }
                    }
                }
                emitInitialSession(e) {
                    var t, n;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            const {
                                data: {
                                    session: n
                                },
                                error: r
                            } = yield this.getSession();
                            if (r) throw r;
                            null === (t = this.stateChangeEmitters.get(e)) || void 0 === t || t.callback("INITIAL_SESSION", n)
                        } catch (t) {
                            null === (n = this.stateChangeEmitters.get(e)) || void 0 === n || n.callback("INITIAL_SESSION", null), console.error(t)
                        }
                    }))
                }
                resetPasswordForEmail(e, t = {}) {
                    return mt(this, void 0, void 0, (function* () {
                        let n = null,
                            r = null;
                        if ("pkce" === this.flowType) {
                            const e = Fe();
                            yield Ne(this.storage, `${this.storageKey}-code-verifier`, e), n = yield Be(e), r = e === n ? "plain" : "s256"
                        }
                        try {
                            return yield it(this.fetch, "POST", `${this.url}/recover`, {
                                body: {
                                    email: e,
                                    code_challenge: n,
                                    code_challenge_method: r,
                                    gotrue_meta_security: {
                                        captcha_token: t.captchaToken
                                    }
                                },
                                headers: this.headers,
                                redirectTo: t.redirectTo
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _refreshAccessToken(e) {
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            const t = Date.now();
                            return yield function (e, t) {
                                return new Promise(((n, r) => {
                                    (() => {
                                        Ie(this, void 0, void 0, (function* () {
                                            for (let o = 0; o < 1 / 0; o++) try {
                                                const r = yield e(o);
                                                if (!t(o, null, r)) return void n(r)
                                            } catch (e) {
                                                if (!t(o, e)) return void r(e)
                                            }
                                        }))
                                    })()
                                }))
                            }((t => mt(this, void 0, void 0, (function* () {
                                var time;
                                return yield(time = 200 * t, new Promise((e => {
                                    setTimeout((() => e(null)), time)
                                }))), yield it(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                                    body: {
                                        refresh_token: e
                                    },
                                    headers: this.headers,
                                    xform: st
                                })
                            }))), ((e, n, r) => r && r.error && r.error instanceof Qe && Date.now() + 200 * (e + 1) - t < _t))
                        } catch (e) {
                            if (ze(e)) return {
                                data: {
                                    session: null,
                                    user: null
                                },
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _isValidSession(e) {
                    return "object" == typeof e && null !== e && "access_token" in e && "refresh_token" in e && "expires_at" in e
                }
                _handleProviderSignIn(e, t) {
                    return mt(this, void 0, void 0, (function* () {
                        const n = yield this._getUrlForProvider(e, {
                            redirectTo: t.redirectTo,
                            scopes: t.scopes,
                            queryParams: t.queryParams
                        });
                        return Oe() && !t.skipBrowserRedirect && window.location.assign(n), {
                            data: {
                                provider: e,
                                url: n
                            },
                            error: null
                        }
                    }))
                }
                _recoverAndRefresh() {
                    var e;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            const t = yield De(this.storage, this.storageKey);
                            if (!this._isValidSession(t)) return void(null !== t && (yield this._removeSession()));
                            const n = Math.round(Date.now() / 1e3);
                            if ((null !== (e = t.expires_at) && void 0 !== e ? e : 1 / 0) < n + 10)
                                if (this.autoRefreshToken && t.refresh_token) {
                                    const {
                                        error: e
                                    } = yield this._callRefreshToken(t.refresh_token);
                                    e && (console.log(e.message), yield this._removeSession())
                                } else yield this._removeSession();
                            else this.persistSession && (yield this._saveSession(t)), this._notifyAllSubscribers("SIGNED_IN", t)
                        } catch (e) {
                            return void console.error(e)
                        }
                    }))
                }
                _callRefreshToken(e) {
                    var t, n;
                    return mt(this, void 0, void 0, (function* () {
                        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
                        try {
                            if (this.refreshingDeferred = new Le, !e) throw new Ve;
                            const {
                                data: data,
                                error: t
                            } = yield this._refreshAccessToken(e);
                            if (t) throw t;
                            if (!data.session) throw new Ve;
                            yield this._saveSession(data.session), this._notifyAllSubscribers("TOKEN_REFRESHED", data.session);
                            const n = {
                                session: data.session,
                                error: null
                            };
                            return this.refreshingDeferred.resolve(n), n
                        } catch (e) {
                            if (ze(e)) {
                                const n = {
                                    session: null,
                                    error: e
                                };
                                return null === (t = this.refreshingDeferred) || void 0 === t || t.resolve(n), n
                            }
                            throw null === (n = this.refreshingDeferred) || void 0 === n || n.reject(e), e
                        } finally {
                            this.refreshingDeferred = null
                        }
                    }))
                }
                _notifyAllSubscribers(e, t, n = !0) {
                    this.broadcastChannel && n && this.broadcastChannel.postMessage({
                        event: e,
                        session: t
                    }), this.stateChangeEmitters.forEach((n => n.callback(e, t)))
                }
                _saveSession(e) {
                    return mt(this, void 0, void 0, (function* () {
                        this.persistSession || (this.inMemorySession = e), this.persistSession && e.expires_at && (yield this._persistSession(e))
                    }))
                }
                _persistSession(e) {
                    return Ne(this.storage, this.storageKey, e)
                }
                _removeSession() {
                    return mt(this, void 0, void 0, (function* () {
                        this.persistSession ? yield $e(this.storage, this.storageKey): this.inMemorySession = null
                    }))
                }
                _removeVisibilityChangedCallback() {
                    const e = this.visibilityChangedCallback;
                    this.visibilityChangedCallback = null;
                    try {
                        e && Oe() && (null === window || void 0 === window ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange", e)
                    } catch (e) {
                        console.error("removing visibilitychange callback failed", e)
                    }
                }
                _startAutoRefresh() {
                    return mt(this, void 0, void 0, (function* () {
                        yield this._stopAutoRefresh();
                        const e = setInterval((() => this._autoRefreshTokenTick()), _t);
                        this.autoRefreshTicker = e, e && "object" == typeof e && "function" == typeof e.unref ? e.unref() : "undefined" != typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(e), yield this._autoRefreshTokenTick()
                    }))
                }
                _stopAutoRefresh() {
                    return mt(this, void 0, void 0, (function* () {
                        const e = this.autoRefreshTicker;
                        this.autoRefreshTicker = null, e && clearInterval(e)
                    }))
                }
                startAutoRefresh() {
                    return mt(this, void 0, void 0, (function* () {
                        this._removeVisibilityChangedCallback(), yield this._startAutoRefresh()
                    }))
                }
                stopAutoRefresh() {
                    return mt(this, void 0, void 0, (function* () {
                        this._removeVisibilityChangedCallback(), yield this._stopAutoRefresh()
                    }))
                }
                _autoRefreshTokenTick() {
                    return mt(this, void 0, void 0, (function* () {
                        const e = Date.now();
                        try {
                            const {
                                data: {
                                    session: t
                                }
                            } = yield this.getSession();
                            if (!t || !t.refresh_token || !t.expires_at) return;
                            Math.floor((1e3 * t.expires_at - e) / _t) < 3 && (yield this._callRefreshToken(t.refresh_token))
                        } catch (e) {
                            console.error("Auto refresh tick failed with error. This is likely a transient error.", e)
                        }
                    }))
                }
                _handleVisibilityChange() {
                    return mt(this, void 0, void 0, (function* () {
                        if (!Oe() || !(null === window || void 0 === window ? void 0 : window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
                        try {
                            this.visibilityChangedCallback = () => mt(this, void 0, void 0, (function* () {
                                return yield this._onVisibilityChanged(!1)
                            })), null === window || void 0 === window || window.addEventListener("visibilitychange", this.visibilityChangedCallback), yield this._onVisibilityChanged(!0)
                        } catch (e) {
                            console.error("_handleVisibilityChange", e)
                        }
                    }))
                }
                _onVisibilityChanged(e) {
                    return mt(this, void 0, void 0, (function* () {
                        "visible" === document.visibilityState ? (e || (yield this.initializePromise, yield this._recoverAndRefresh()), this.autoRefreshToken && this._startAutoRefresh()) : "hidden" === document.visibilityState && this.autoRefreshToken && this._stopAutoRefresh()
                    }))
                }
                _getUrlForProvider(e, t) {
                    return mt(this, void 0, void 0, (function* () {
                        const n = [`provider=${encodeURIComponent(e)}`];
                        if ((null == t ? void 0 : t.redirectTo) && n.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`), (null == t ? void 0 : t.scopes) && n.push(`scopes=${encodeURIComponent(t.scopes)}`), "pkce" === this.flowType) {
                            const e = Fe();
                            yield Ne(this.storage, `${this.storageKey}-code-verifier`, e);
                            const t = yield Be(e), r = e === t ? "plain" : "s256", o = new URLSearchParams({
                                code_challenge: `${encodeURIComponent(t)}`,
                                code_challenge_method: `${encodeURIComponent(r)}`
                            });
                            n.push(o.toString())
                        }
                        if (null == t ? void 0 : t.queryParams) {
                            const e = new URLSearchParams(t.queryParams);
                            n.push(e.toString())
                        }
                        return `${this.url}/authorize?${n.join("&")}`
                    }))
                }
                _unenroll(e) {
                    var t;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            const {
                                data: n,
                                error: r
                            } = yield this.getSession();
                            return r ? {
                                data: null,
                                error: r
                            } : yield it(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                                headers: this.headers,
                                jwt: null === (t = null == n ? void 0 : n.session) || void 0 === t ? void 0 : t.access_token
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _enroll(e) {
                    var t, n;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            const {
                                data: r,
                                error: o
                            } = yield this.getSession();
                            if (o) return {
                                data: null,
                                error: o
                            };
                            const {
                                data: data,
                                error: c
                            } = yield it(this.fetch, "POST", `${this.url}/factors`, {
                                body: {
                                    friendly_name: e.friendlyName,
                                    factor_type: e.factorType,
                                    issuer: e.issuer
                                },
                                headers: this.headers,
                                jwt: null === (t = null == r ? void 0 : r.session) || void 0 === t ? void 0 : t.access_token
                            });
                            return c ? {
                                data: null,
                                error: c
                            } : ((null === (n = null == data ? void 0 : data.totp) || void 0 === n ? void 0 : n.qr_code) && (data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`), {
                                data: data,
                                error: null
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _verify(e) {
                    var t;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            const {
                                data: n,
                                error: r
                            } = yield this.getSession();
                            if (r) return {
                                data: null,
                                error: r
                            };
                            const {
                                data: data,
                                error: o
                            } = yield it(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                                body: {
                                    code: e.code,
                                    challenge_id: e.challengeId
                                },
                                headers: this.headers,
                                jwt: null === (t = null == n ? void 0 : n.session) || void 0 === t ? void 0 : t.access_token
                            });
                            return o ? {
                                data: null,
                                error: o
                            } : (yield this._saveSession(Object.assign({
                                expires_at: Math.round(Date.now() / 1e3) + data.expires_in
                            }, data)), this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data), {
                                data: data,
                                error: o
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _challenge(e) {
                    var t;
                    return mt(this, void 0, void 0, (function* () {
                        try {
                            const {
                                data: n,
                                error: r
                            } = yield this.getSession();
                            return r ? {
                                data: null,
                                error: r
                            } : yield it(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                                headers: this.headers,
                                jwt: null === (t = null == n ? void 0 : n.session) || void 0 === t ? void 0 : t.access_token
                            })
                        } catch (e) {
                            if (ze(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    }))
                }
                _challengeAndVerify(e) {
                    return mt(this, void 0, void 0, (function* () {
                        const {
                            data: t,
                            error: n
                        } = yield this._challenge({
                            factorId: e.factorId
                        });
                        return n ? {
                            data: null,
                            error: n
                        } : yield this._verify({
                            factorId: e.factorId,
                            challengeId: t.id,
                            code: e.code
                        })
                    }))
                }
                _listFactors() {
                    return mt(this, void 0, void 0, (function* () {
                        const {
                            data: {
                                user: e
                            },
                            error: t
                        } = yield this.getUser();
                        if (t) return {
                            data: null,
                            error: t
                        };
                        const n = (null == e ? void 0 : e.factors) || [],
                            r = n.filter((e => "totp" === e.factor_type && "verified" === e.status));
                        return {
                            data: {
                                all: n,
                                totp: r
                            },
                            error: null
                        }
                    }))
                }
                _getAuthenticatorAssuranceLevel() {
                    var e, t;
                    return mt(this, void 0, void 0, (function* () {
                        const {
                            data: {
                                session: n
                            },
                            error: r
                        } = yield this.getSession();
                        if (r) return {
                            data: null,
                            error: r
                        };
                        if (!n) return {
                            data: {
                                currentLevel: null,
                                nextLevel: null,
                                currentAuthenticationMethods: []
                            },
                            error: null
                        };
                        const o = this._decodeJWT(n.access_token);
                        let c = null;
                        o.aal && (c = o.aal);
                        let l = c;
                        (null !== (t = null === (e = n.user.factors) || void 0 === e ? void 0 : e.filter((e => "verified" === e.status))) && void 0 !== t ? t : []).length > 0 && (l = "aal2");
                        return {
                            data: {
                                currentLevel: c,
                                nextLevel: l,
                                currentAuthenticationMethods: o.amr || []
                            },
                            error: null
                        }
                    }))
                }
            }
            class bt extends vt {
                constructor(e) {
                    super(e)
                }
            }
            var wt = function (e, t, n, r) {
                return new(n || (n = Promise))((function (o, c) {
                    function l(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(l, h)
                    }
                    d((r = r.apply(e, t || [])).next())
                }))
            };
            const Ct = {
                    headers: Te
                },
                xt = {
                    schema: "public"
                },
                Tt = {
                    autoRefreshToken: !0,
                    persistSession: !0,
                    detectSessionInUrl: !0,
                    flowType: "implicit"
                },
                Et = {};
            class kt {
                constructor(e, t, n) {
                    var r, o, c, l, h, d, f, m;
                    if (this.supabaseUrl = e, this.supabaseKey = t, !e) throw new Error("supabaseUrl is required.");
                    if (!t) throw new Error("supabaseKey is required.");
                    const y = e.replace(/\/$/, "");
                    this.realtimeUrl = `${y}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${y}/auth/v1`, this.storageUrl = `${y}/storage/v1`;
                    if (y.match(/(supabase\.co)|(supabase\.in)/)) {
                        const e = y.split(".");
                        this.functionsUrl = `${e[0]}.functions.${e[1]}.${e[2]}`
                    } else this.functionsUrl = `${y}/functions/v1`;
                    const _ = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
                        v = function (e, t) {
                            const {
                                db: n,
                                auth: r,
                                realtime: o,
                                global: c
                            } = e, {
                                db: l,
                                auth: h,
                                realtime: d,
                                global: f
                            } = t;
                            return {
                                db: Object.assign(Object.assign({}, l), n),
                                auth: Object.assign(Object.assign({}, h), r),
                                realtime: Object.assign(Object.assign({}, d), o),
                                global: Object.assign(Object.assign({}, f), c)
                            }
                        }(null != n ? n : {}, {
                            db: xt,
                            realtime: Et,
                            auth: Object.assign(Object.assign({}, Tt), {
                                storageKey: _
                            }),
                            global: Ct
                        });
                    this.storageKey = null !== (o = null === (r = v.auth) || void 0 === r ? void 0 : r.storageKey) && void 0 !== o ? o : "", this.headers = null !== (l = null === (c = v.global) || void 0 === c ? void 0 : c.headers) && void 0 !== l ? l : {}, this.auth = this._initSupabaseAuthClient(null !== (h = v.auth) && void 0 !== h ? h : {}, this.headers, null === (d = v.global) || void 0 === d ? void 0 : d.fetch), this.fetch = Se(t, this._getAccessToken.bind(this), null === (f = v.global) || void 0 === f ? void 0 : f.fetch), this.realtime = this._initRealtimeClient(Object.assign({
                        headers: this.headers
                    }, v.realtime)), this.rest = new T(`${y}/rest/v1`, {
                        headers: this.headers,
                        schema: null === (m = v.db) || void 0 === m ? void 0 : m.schema,
                        fetch: this.fetch
                    }), this._listenForAuthEvents()
                }
                get functions() {
                    return new f(this.functionsUrl, {
                        headers: this.headers,
                        customFetch: this.fetch
                    })
                }
                get storage() {
                    return new xe(this.storageUrl, this.headers, this.fetch)
                }
                from(e) {
                    return this.rest.from(e)
                }
                rpc(e, t = {}, n) {
                    return this.rest.rpc(e, t, n)
                }
                channel(e, t = {
                    config: {}
                }) {
                    return this.realtime.channel(e, t)
                }
                getChannels() {
                    return this.realtime.getChannels()
                }
                removeChannel(e) {
                    return this.realtime.removeChannel(e)
                }
                removeAllChannels() {
                    return this.realtime.removeAllChannels()
                }
                _getAccessToken() {
                    var e, t;
                    return wt(this, void 0, void 0, (function* () {
                        const {
                            data: data
                        } = yield this.auth.getSession();
                        return null !== (t = null === (e = data.session) || void 0 === e ? void 0 : e.access_token) && void 0 !== t ? t : null
                    }))
                }
                _initSupabaseAuthClient({
                    autoRefreshToken: e,
                    persistSession: t,
                    detectSessionInUrl: n,
                    storage: r,
                    storageKey: o,
                    flowType: c
                }, l, h) {
                    const d = {
                        Authorization: `Bearer ${this.supabaseKey}`,
                        apikey: `${this.supabaseKey}`
                    };
                    return new bt({
                        url: this.authUrl,
                        headers: Object.assign(Object.assign({}, d), l),
                        storageKey: o,
                        autoRefreshToken: e,
                        persistSession: t,
                        detectSessionInUrl: n,
                        storage: r,
                        flowType: c,
                        fetch: h
                    })
                }
                _initRealtimeClient(e) {
                    return new te(this.realtimeUrl, Object.assign(Object.assign({}, e), {
                        params: Object.assign({
                            apikey: this.supabaseKey
                        }, null == e ? void 0 : e.params)
                    }))
                }
                _listenForAuthEvents() {
                    return this.auth.onAuthStateChange(((e, t) => {
                        this._handleTokenChanged(e, null == t ? void 0 : t.access_token, "CLIENT")
                    }))
                }
                _handleTokenChanged(e, t, source) {
                    "TOKEN_REFRESHED" !== e && "SIGNED_IN" !== e || this.changedAccessToken === t ? "SIGNED_OUT" === e && (this.realtime.setAuth(this.supabaseKey), "STORAGE" == source && this.auth.signOut(), this.changedAccessToken = void 0) : (this.realtime.setAuth(null != t ? t : null), this.changedAccessToken = t)
                }
            }
            const St = (e, t, n) => new kt(e, t, n)
        },
        256: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return o
            }));
            var r = n(120);
            const o = Object(r.b)("App", {
                web: () => n.e(41).then(n.bind(null, 608)).then((e => new e.AppWeb))
            })
        },
        257: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return o
            }));
            var r = n(120);
            const o = Object(r.b)("Device", {
                web: () => n.e(42).then(n.bind(null, 609)).then((e => new e.DeviceWeb))
            })
        },
        26: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return o
            })), n.d(t, "b", (function () {
                return h
            }));
            var r = n(0);
            class o {
                constructor(e, t, n) {
                    this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                }
                setInstantiationMode(e) {
                    return this.instantiationMode = e, this
                }
                setMultipleInstances(e) {
                    return this.multipleInstances = e, this
                }
                setServiceProps(e) {
                    return this.serviceProps = e, this
                }
                setInstanceCreatedCallback(e) {
                    return this.onInstanceCreated = e, this
                }
            }
            const c = "[DEFAULT]";
            class l {
                constructor(e, t) {
                    this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
                }
                get(e) {
                    const t = this.normalizeInstanceIdentifier(e);
                    if (!this.instancesDeferred.has(t)) {
                        const e = new r.a;
                        if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                            const n = this.getOrInitializeService({
                                instanceIdentifier: t
                            });
                            n && e.resolve(n)
                        } catch (e) {}
                    }
                    return this.instancesDeferred.get(t).promise
                }
                getImmediate(e) {
                    var t;
                    const n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                        r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                    if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                        if (r) return null;
                        throw Error(`Service ${this.name} is not available`)
                    }
                    try {
                        return this.getOrInitializeService({
                            instanceIdentifier: n
                        })
                    } catch (e) {
                        if (r) return null;
                        throw e
                    }
                }
                getComponent() {
                    return this.component
                }
                setComponent(component) {
                    if (component.name !== this.name) throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
                    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
                    if (this.component = component, this.shouldAutoInitialize()) {
                        if (function (component) {
                                return "EAGER" === component.instantiationMode
                            }(component)) try {
                            this.getOrInitializeService({
                                instanceIdentifier: c
                            })
                        } catch (e) {}
                        for (const [e, t] of this.instancesDeferred.entries()) {
                            const n = this.normalizeInstanceIdentifier(e);
                            try {
                                const e = this.getOrInitializeService({
                                    instanceIdentifier: n
                                });
                                t.resolve(e)
                            } catch (e) {}
                        }
                    }
                }
                clearInstance(e = c) {
                    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
                }
                async delete() {
                    const e = Array.from(this.instances.values());
                    await Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))])
                }
                isComponentSet() {
                    return null != this.component
                }
                isInitialized(e = c) {
                    return this.instances.has(e)
                }
                getOptions(e = c) {
                    return this.instancesOptions.get(e) || {}
                }
                initialize(e = {}) {
                    const {
                        options: t = {}
                    } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                    if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
                    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
                    const r = this.getOrInitializeService({
                        instanceIdentifier: n,
                        options: t
                    });
                    for (const [e, t] of this.instancesDeferred.entries()) {
                        n === this.normalizeInstanceIdentifier(e) && t.resolve(r)
                    }
                    return r
                }
                onInit(e, t) {
                    var n;
                    const r = this.normalizeInstanceIdentifier(t),
                        o = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                    o.add(e), this.onInitCallbacks.set(r, o);
                    const c = this.instances.get(r);
                    return c && e(c, r), () => {
                        o.delete(e)
                    }
                }
                invokeOnInitCallbacks(e, t) {
                    const n = this.onInitCallbacks.get(t);
                    if (n)
                        for (const r of n) try {
                            r(e, t)
                        } catch (e) {}
                }
                getOrInitializeService({
                    instanceIdentifier: e,
                    options: t = {}
                }) {
                    let n = this.instances.get(e);
                    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                            instanceIdentifier: (r = e, r === c ? void 0 : r),
                            options: t
                        }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                        this.component.onInstanceCreated(this.container, e, n)
                    } catch (e) {}
                    var r;
                    return n || null
                }
                normalizeInstanceIdentifier(e = c) {
                    return this.component ? this.component.multipleInstances ? e : c : e
                }
                shouldAutoInitialize() {
                    return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                }
            }
            class h {
                constructor(e) {
                    this.name = e, this.providers = new Map
                }
                addComponent(component) {
                    const e = this.getProvider(component.name);
                    if (e.isComponentSet()) throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
                    e.setComponent(component)
                }
                addOrOverwriteComponent(component) {
                    this.getProvider(component.name).isComponentSet() && this.providers.delete(component.name), this.addComponent(component)
                }
                getProvider(e) {
                    if (this.providers.has(e)) return this.providers.get(e);
                    const t = new l(e, this);
                    return this.providers.set(e, t), t
                }
                getProviders() {
                    return Array.from(this.providers.values())
                }
            }
        },
        268: function (e, t, n) {
            (function (e) {
                e.installComponents = function (component, e) {
                    var n = "function" == typeof component.exports ? component.exports.extendOptions : component.options;
                    for (var i in "function" == typeof component.exports && (n.components = component.exports.options.components), n.components = n.components || {}, e) n.components[i] = n.components[i] || e[i];
                    n.functional && function (component, e) {
                        if (component.exports[t]) return;
                        component.exports[t] = !0;
                        var n = component.exports.render;
                        component.exports.render = function (t, r) {
                            return n(t, Object.assign({}, r, {
                                _c: function (t, a, b) {
                                    return r._c(e[t] || t, a, b)
                                }
                            }))
                        }
                    }(component, n.components)
                };
                var t = "_functionalComponents"
            }).call(this, n(39))
        },
        32: function (e, t, n) {
            "use strict";
            n(15), n(132), n(59), n(41), e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var content = e(t);
                        return t[2] ? "@media ".concat(t[2], " {").concat(content, "}") : content
                    })).join("")
                }, t.i = function (e, n, r) {
                    "string" == typeof e && (e = [
                        [null, e, ""]
                    ]);
                    var o = {};
                    if (r)
                        for (var i = 0; i < this.length; i++) {
                            var c = this[i][0];
                            null != c && (o[c] = !0)
                        }
                    for (var l = 0; l < e.length; l++) {
                        var h = [].concat(e[l]);
                        r && o[h[0]] || (n && (h[2] ? h[2] = "".concat(n, " and ").concat(h[2]) : h[2] = n), t.push(h))
                    }
                }, t
            }
        },
        325: function (e, t, n) {
            var content = n(326);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(33).default)("6859806e", content, !0, {
                sourceMap: !1
            })
        },
        326: function (e, t, n) {
            var r = n(32)((function (i) {
                return i[1]
            }));
            r.push([e.i, '/*! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;}.visible{visibility:visible;}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.-bottom-\\[60px\\]{bottom:-60px;}.-left-full{left:-100%;}.-right-\\[232px\\]{right:-232px;}.bottom-0{bottom:0px;}.bottom-20{bottom:5rem;}.bottom-5{bottom:1.25rem;}.bottom-7{bottom:1.75rem;}.bottom-8{bottom:2rem;}.left-0{left:0px;}.left-20{left:5rem;}.left-3{left:0.75rem;}.left-5{left:1.25rem;}.left-7{left:1.75rem;}.right-0{right:0px;}.right-10{right:2.5rem;}.right-3{right:0.75rem;}.right-4{right:1rem;}.right-5{right:1.25rem;}.right-6{right:1.5rem;}.top-0{top:0px;}.top-12{top:3rem;}.top-14{top:3.5rem;}.top-16{top:4rem;}.top-3{top:0.75rem;}.top-5{top:1.25rem;}.top-6{top:1.5rem;}.top-7{top:1.75rem;}.top-\\[108px\\]{top:108px;}.z-10{z-index:10;}.z-20{z-index:20;}.z-30{z-index:30;}.z-40{z-index:40;}.z-50{z-index:50;}.z-\\[60\\]{z-index:60;}.z-\\[70\\]{z-index:70;}.z-\\[80\\]{z-index:80;}.m-1{margin:0.25rem;}.m-2{margin:0.5rem;}.mx-1{margin-left:0.25rem;margin-right:0.25rem;}.mx-2{margin-left:0.5rem;margin-right:0.5rem;}.mx-3{margin-left:0.75rem;margin-right:0.75rem;}.mx-4{margin-left:1rem;margin-right:1rem;}.mx-6{margin-left:1.5rem;margin-right:1.5rem;}.mx-auto{margin-left:auto;margin-right:auto;}.my-1{margin-top:0.25rem;margin-bottom:0.25rem;}.my-2{margin-top:0.5rem;margin-bottom:0.5rem;}.my-4{margin-top:1rem;margin-bottom:1rem;}.my-5{margin-top:1.25rem;margin-bottom:1.25rem;}.my-6{margin-top:1.5rem;margin-bottom:1.5rem;}.my-8{margin-top:2rem;margin-bottom:2rem;}.mb-1{margin-bottom:0.25rem;}.mb-12{margin-bottom:3rem;}.mb-2{margin-bottom:0.5rem;}.mb-3{margin-bottom:0.75rem;}.mb-4{margin-bottom:1rem;}.mb-5{margin-bottom:1.25rem;}.mb-6{margin-bottom:1.5rem;}.mb-8{margin-bottom:2rem;}.ml-1{margin-left:0.25rem;}.ml-2{margin-left:0.5rem;}.mr-0{margin-right:0px;}.mr-1{margin-right:0.25rem;}.mr-2{margin-right:0.5rem;}.mt-0{margin-top:0px;}.mt-1{margin-top:0.25rem;}.mt-11{margin-top:2.75rem;}.mt-12{margin-top:3rem;}.mt-16{margin-top:4rem;}.mt-2{margin-top:0.5rem;}.mt-3{margin-top:0.75rem;}.mt-4{margin-top:1rem;}.mt-5{margin-top:1.25rem;}.mt-6{margin-top:1.5rem;}.mt-7{margin-top:1.75rem;}.mt-8{margin-top:2rem;}.block{display:block;}.inline-block{display:inline-block;}.flex{display:flex;}.grid{display:grid;}.hidden{display:none;}.h-0{height:0px;}.h-12{height:3rem;}.h-3{height:0.75rem;}.h-4{height:1rem;}.h-5{height:1.25rem;}.h-6{height:1.5rem;}.h-7{height:1.75rem;}.h-8{height:2rem;}.h-9{height:2.25rem;}.h-\\[138px\\]{height:138px;}.h-\\[38px\\]{height:38px;}.h-\\[400px\\]{height:400px;}.h-\\[420px\\]{height:420px;}.h-\\[512px\\]{height:512px;}.h-\\[600px\\]{height:600px;}.h-full{height:100%;}.h-screen{height:100vh;}.max-h-80{max-height:20rem;}.min-h-screen{min-height:100vh;}.w-10{width:2.5rem;}.w-12{width:3rem;}.w-14{width:3.5rem;}.w-16{width:4rem;}.w-24{width:6rem;}.w-28{width:7rem;}.w-3{width:0.75rem;}.w-32{width:8rem;}.w-36{width:9rem;}.w-40{width:10rem;}.w-44{width:11rem;}.w-48{width:12rem;}.w-5{width:1.25rem;}.w-52{width:13rem;}.w-56{width:14rem;}.w-6{width:1.5rem;}.w-64{width:16rem;}.w-7{width:1.75rem;}.w-72{width:18rem;}.w-8{width:2rem;}.w-80{width:20rem;}.w-9{width:2.25rem;}.w-96{width:24rem;}.w-\\[310px\\]{width:310px;}.w-\\[335px\\]{width:335px;}.w-\\[356px\\]{width:356px;}.w-\\[38px\\]{width:38px;}.w-\\[60px\\]{width:60px;}.w-full{width:100%;}.w-screen{width:100vw;}.max-w-2xl{max-width:42rem;}.max-w-4xl{max-width:56rem;}.max-w-5xl{max-width:64rem;}.max-w-7xl{max-width:80rem;}.max-w-\\[200px\\]{max-width:200px;}.max-w-\\[240px\\]{max-width:240px;}.max-w-\\[300px\\]{max-width:300px;}.max-w-\\[450px\\]{max-width:450px;}.max-w-md{max-width:28rem;}.max-w-sm{max-width:24rem;}.max-w-xl{max-width:36rem;}.-rotate-30{--tw-rotate:-30deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-30deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.rotate-30{--tw-rotate:30deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(30deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1) scaleY(1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.scale-110{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}@keyframes pulse{50%{opacity:.5;}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;}.cursor-not-allowed{cursor:not-allowed;}.cursor-pointer{cursor:pointer;}.grid-flow-col{grid-auto-flow:column;}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr));}.grid-rows-2{grid-template-rows:repeat(2, minmax(0, 1fr));}.flex-row-reverse{flex-direction:row-reverse;}.flex-col{flex-direction:column;}.items-end{align-items:flex-end;}.items-center{align-items:center;}.justify-start{justify-content:flex-start;}.justify-end{justify-content:flex-end;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.justify-evenly{justify-content:space-evenly;}.gap-1{gap:0.25rem;}.gap-2{gap:0.5rem;}.gap-3{gap:0.75rem;}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem;}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem;}.gap-x-3{-moz-column-gap:0.75rem;column-gap:0.75rem;}.gap-y-1{row-gap:0.25rem;}.gap-y-4{row-gap:1rem;}.divide-y > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - 0));border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * 0);border-bottom-width:calc(1px * var(--tw-divide-y-reverse));}.self-end{align-self:flex-end;}.self-center{align-self:center;}.justify-self-center{justify-self:center;}.overflow-hidden{overflow:hidden;}.overflow-x-scroll{overflow-x:scroll;}.overflow-y-scroll{overflow-y:scroll;}.break-words{overflow-wrap:break-word;}.rounded-2xl{border-radius:1rem;}.rounded-3xl{border-radius:1.5rem;}.rounded-full{border-radius:9999px;}.rounded-lg{border-radius:0.5rem;}.rounded-md{border-radius:0.375rem;}.border{border-width:1px;}.border-2{border-width:2px;}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0 / 1);border-color:rgb(0 0 0 / var(--tw-border-opacity));}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / 1);background-color:rgb(0 0 0 / var(--tw-bg-opacity));}.bg-cream{--tw-bg-opacity:1;background-color:rgb(245 244 240 / 1);background-color:rgb(245 244 240 / var(--tw-bg-opacity));}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235 / 1);background-color:rgb(229 231 235 / var(--tw-bg-opacity));}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219 / 1);background-color:rgb(209 213 219 / var(--tw-bg-opacity));}.bg-gray-600{--tw-bg-opacity:1;background-color:rgb(75 85 99 / 1);background-color:rgb(75 85 99 / var(--tw-bg-opacity));}.bg-indigo-600{--tw-bg-opacity:1;background-color:rgb(79 70 229 / 1);background-color:rgb(79 70 229 / var(--tw-bg-opacity));}.bg-secondary{--tw-bg-opacity:1;background-color:rgb(217 177 218 / 1);background-color:rgb(217 177 218 / var(--tw-bg-opacity));}.bg-transparent{background-color:transparent;}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / 1);background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-opacity-30{--tw-bg-opacity:0.3;}.p-1{padding:0.25rem;}.p-12{padding:3rem;}.p-2{padding:0.5rem;}.p-3{padding:0.75rem;}.p-5{padding:1.25rem;}.px-0{padding-left:0px;padding-right:0px;}.px-1{padding-left:0.25rem;padding-right:0.25rem;}.px-10{padding-left:2.5rem;padding-right:2.5rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.px-4{padding-left:1rem;padding-right:1rem;}.px-5{padding-left:1.25rem;padding-right:1.25rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.py-14{padding-top:3.5rem;padding-bottom:3.5rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.pb-16{padding-bottom:4rem;}.pb-4{padding-bottom:1rem;}.pb-6{padding-bottom:1.5rem;}.pb-7{padding-bottom:1.75rem;}.pb-8{padding-bottom:2rem;}.pl-12{padding-left:3rem;}.pl-5{padding-left:1.25rem;}.pl-6{padding-left:1.5rem;}.pr-10{padding-right:2.5rem;}.pr-4{padding-right:1rem;}.pr-7{padding-right:1.75rem;}.pt-1{padding-top:0.25rem;}.pt-16{padding-top:4rem;}.pt-20{padding-top:5rem;}.pt-5{padding-top:1.25rem;}.pt-6{padding-top:1.5rem;}.pt-7{padding-top:1.75rem;}.pt-8{padding-top:2rem;}.text-left{text-align:left;}.text-center{text-align:center;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-xs{font-size:0.75rem;line-height:1rem;}.font-bold{font-weight:700;}.font-semibold{font-weight:600;}.italic{font-style:italic;}.leading-5{line-height:1.25rem;}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / 1);color:rgb(0 0 0 / var(--tw-text-opacity));}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / 1);color:rgb(156 163 175 / var(--tw-text-opacity));}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / 1);color:rgb(107 114 128 / var(--tw-text-opacity));}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / 1);color:rgb(75 85 99 / var(--tw-text-opacity));}.text-paragraph-gray{--tw-text-opacity:1;color:rgb(107 114 128 / 1);color:rgb(107 114 128 / var(--tw-text-opacity));}.text-report-purple{--tw-text-opacity:1;color:rgb(95 12 178 / 1);color:rgb(95 12 178 / var(--tw-text-opacity));}.text-secondary{--tw-text-opacity:1;color:rgb(217 177 218 / 1);color:rgb(217 177 218 / var(--tw-text-opacity));}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / 1);color:rgb(255 255 255 / var(--tw-text-opacity));}.text-yellow-600{--tw-text-opacity:1;color:rgb(202 138 4 / 1);color:rgb(202 138 4 / var(--tw-text-opacity));}.underline{text-decoration-line:underline;}.line-through{text-decoration-line:line-through;}.opacity-100{opacity:1;}.opacity-50{opacity:0.5;}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.outline{outline-style:solid;}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}.ring-inset{--tw-ring-inset:inset;}.ring-gray-200{--tw-ring-opacity:1;--tw-ring-color:rgb(229 231 235 / var(--tw-ring-opacity));}.blur{--tw-blur:blur(8px);filter:blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.transition{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.hover\\:cursor-pointer:hover{cursor:pointer;}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235 / 1);background-color:rgb(229 231 235 / var(--tw-bg-opacity));}.hover\\:underline:hover{text-decoration-line:underline;}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed;}.disabled\\:opacity-50:disabled{opacity:0.5;}@media (min-width: 640px){.sm\\:w-96{width:24rem;}.sm\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.sm\\:px-10{padding-left:2.5rem;padding-right:2.5rem;}}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}}@media (min-width: 1024px){.lg\\:mb-0{margin-bottom:0px;}.lg\\:mr-5{margin-right:1.25rem;}.lg\\:mt-0{margin-top:0px;}.lg\\:mt-12{margin-top:3rem;}.lg\\:mt-2{margin-top:0.5rem;}.lg\\:mt-8{margin-top:2rem;}.lg\\:block{display:block;}.lg\\:flex{display:flex;}.lg\\:hidden{display:none;}.lg\\:w-\\[400px\\]{width:400px;}.lg\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.lg\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.lg\\:grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr));}.lg\\:flex-row{flex-direction:row;}.lg\\:items-start{align-items:flex-start;}.lg\\:justify-start{justify-content:flex-start;}.lg\\:justify-end{justify-content:flex-end;}.lg\\:justify-between{justify-content:space-between;}.lg\\:px-16{padding-left:4rem;padding-right:4rem;}.lg\\:py-4{padding-top:1rem;padding-bottom:1rem;}.lg\\:text-left{text-align:left;}.lg\\:text-right{text-align:right;}}', ""]), r.locals = {}, e.exports = r
        },
        33: function (e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = [], r = {}, i = 0; i < t.length; i++) {
                    var o = t[i],
                        c = o[0],
                        l = {
                            id: e + ":" + i,
                            css: o[1],
                            media: o[2],
                            sourceMap: o[3]
                        };
                    r[c] ? r[c].parts.push(l) : n.push(r[c] = {
                        id: c,
                        parts: [l]
                    })
                }
                return n
            }
            n.r(t), n.d(t, "default", (function () {
                return v
            }));
            var o = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var c = {},
                head = o && (document.head || document.getElementsByTagName("head")[0]),
                l = null,
                h = 0,
                d = !1,
                f = function () {},
                m = null,
                y = "data-vue-ssr-id",
                _ = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function v(e, t, n, o) {
                d = n, m = o || {};
                var l = r(e, t);
                return w(l),
                    function (t) {
                        for (var n = [], i = 0; i < l.length; i++) {
                            var o = l[i];
                            (h = c[o.id]).refs--, n.push(h)
                        }
                        t ? w(l = r(e, t)) : l = [];
                        for (i = 0; i < n.length; i++) {
                            var h;
                            if (0 === (h = n[i]).refs) {
                                for (var d = 0; d < h.parts.length; d++) h.parts[d]();
                                delete c[h.id]
                            }
                        }
                    }
            }

            function w(e) {
                for (var i = 0; i < e.length; i++) {
                    var t = e[i],
                        n = c[t.id];
                    if (n) {
                        n.refs++;
                        for (var r = 0; r < n.parts.length; r++) n.parts[r](t.parts[r]);
                        for (; r < t.parts.length; r++) n.parts.push(x(t.parts[r]));
                        n.parts.length > t.parts.length && (n.parts.length = t.parts.length)
                    } else {
                        var o = [];
                        for (r = 0; r < t.parts.length; r++) o.push(x(t.parts[r]));
                        c[t.id] = {
                            id: t.id,
                            refs: 1,
                            parts: o
                        }
                    }
                }
            }

            function C() {
                var e = document.createElement("style");
                return e.type = "text/css", head.appendChild(e), e
            }

            function x(e) {
                var t, n, r = document.querySelector("style[" + y + '~="' + e.id + '"]');
                if (r) {
                    if (d) return f;
                    r.parentNode.removeChild(r)
                }
                if (_) {
                    var o = h++;
                    r = l || (l = C()), t = k.bind(null, r, o, !1), n = k.bind(null, r, o, !0)
                } else r = C(), t = S.bind(null, r), n = function () {
                    r.parentNode.removeChild(r)
                };
                return t(e),
                    function (r) {
                        if (r) {
                            if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                            t(e = r)
                        } else n()
                    }
            }
            var T, E = (T = [], function (e, t) {
                return T[e] = t, T.filter(Boolean).join("\n")
            });

            function k(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = E(t, o);
                else {
                    var c = document.createTextNode(o),
                        l = e.childNodes;
                    l[t] && e.removeChild(l[t]), l.length ? e.insertBefore(c, l[t]) : e.appendChild(c)
                }
            }

            function S(e, t) {
                var n = t.css,
                    r = t.media,
                    o = t.sourceMap;
                if (r && e.setAttribute("media", r), m.ssrId && e.setAttribute(y, t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
        },
        362: function (e, t, n) {
            "use strict";
            (function (e) {
                var r = n(363),
                    o = n(364),
                    c = n(365);

                function l() {
                    return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function h(e, t) {
                    if (l() < t) throw new RangeError("Invalid typed array length");
                    return d.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = d.prototype : (null === e && (e = new d(t)), e.length = t), e
                }

                function d(e, t, n) {
                    if (!(d.TYPED_ARRAY_SUPPORT || this instanceof d)) return new d(e, t, n);
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                        return y(this, e)
                    }
                    return f(this, e, t, n)
                }

                function f(e, t, n, r) {
                    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
                        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                        t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                        d.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = d.prototype : e = _(e, t);
                        return e
                    }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
                        "string" == typeof n && "" !== n || (n = "utf8");
                        if (!d.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                        var r = 0 | w(t, n);
                        e = h(e, r);
                        var o = e.write(t, n);
                        o !== r && (e = e.slice(0, o));
                        return e
                    }(e, t, n) : function (e, t) {
                        if (d.isBuffer(t)) {
                            var n = 0 | v(t.length);
                            return 0 === (e = h(e, n)).length || t.copy(e, 0, 0, n), e
                        }
                        if (t) {
                            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? h(e, 0) : _(e, t);
                            if ("Buffer" === t.type && c(t.data)) return _(e, t.data)
                        }
                        var r;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(e, t)
                }

                function m(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                    if (e < 0) throw new RangeError('"size" argument must not be negative')
                }

                function y(e, t) {
                    if (m(t), e = h(e, t < 0 ? 0 : 0 | v(t)), !d.TYPED_ARRAY_SUPPORT)
                        for (var i = 0; i < t; ++i) e[i] = 0;
                    return e
                }

                function _(e, t) {
                    var n = t.length < 0 ? 0 : 0 | v(t.length);
                    e = h(e, n);
                    for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
                    return e
                }

                function v(e) {
                    if (e >= l()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l().toString(16) + " bytes");
                    return 0 | e
                }

                function w(e, t) {
                    if (d.isBuffer(e)) return e.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                    "string" != typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n) return 0;
                    for (var r = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return G(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return J(e).length;
                        default:
                            if (r) return G(e).length;
                            t = ("" + t).toLowerCase(), r = !0
                    }
                }

                function C(e, t, n) {
                    var r = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return L(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return A(this, t, n);
                        case "ascii":
                            return D(this, t, n);
                        case "latin1":
                        case "binary":
                            return $(this, t, n);
                        case "base64":
                            return R(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return M(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), r = !0
                    }
                }

                function x(b, e, t) {
                    var i = b[e];
                    b[e] = b[t], b[t] = i
                }

                function T(e, t, n, r, o) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                        if (o) return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!o) return -1;
                        n = 0
                    }
                    if ("string" == typeof t && (t = d.from(t, r)), d.isBuffer(t)) return 0 === t.length ? -1 : E(e, t, n, r, o);
                    if ("number" == typeof t) return t &= 255, d.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : E(e, [t], n, r, o);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function E(e, t, n, r, o) {
                    var i, c = 1,
                        l = e.length,
                        h = t.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        c = 2, l /= 2, h /= 2, n /= 2
                    }

                    function d(e, i) {
                        return 1 === c ? e[i] : e.readUInt16BE(i * c)
                    }
                    if (o) {
                        var f = -1;
                        for (i = n; i < l; i++)
                            if (d(e, i) === d(t, -1 === f ? 0 : i - f)) {
                                if (-1 === f && (f = i), i - f + 1 === h) return f * c
                            } else -1 !== f && (i -= i - f), f = -1
                    } else
                        for (n + h > l && (n = l - h), i = n; i >= 0; i--) {
                            for (var m = !0, y = 0; y < h; y++)
                                if (d(e, i + y) !== d(t, y)) {
                                    m = !1;
                                    break
                                } if (m) return i
                        }
                    return -1
                }

                function k(e, t, n, r) {
                    n = Number(n) || 0;
                    var o = e.length - n;
                    r ? (r = Number(r)) > o && (r = o) : r = o;
                    var c = t.length;
                    if (c % 2 != 0) throw new TypeError("Invalid hex string");
                    r > c / 2 && (r = c / 2);
                    for (var i = 0; i < r; ++i) {
                        var l = parseInt(t.substr(2 * i, 2), 16);
                        if (isNaN(l)) return i;
                        e[n + i] = l
                    }
                    return i
                }

                function S(e, t, n, r) {
                    return Q(G(t, e.length - n), e, n, r)
                }

                function I(e, t, n, r) {
                    return Q(function (e) {
                        for (var t = [], i = 0; i < e.length; ++i) t.push(255 & e.charCodeAt(i));
                        return t
                    }(t), e, n, r)
                }

                function O(e, t, n, r) {
                    return I(e, t, n, r)
                }

                function P(e, t, n, r) {
                    return Q(J(t), e, n, r)
                }

                function j(e, t, n, r) {
                    return Q(function (e, t) {
                        for (var n, r, o, c = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) r = (n = e.charCodeAt(i)) >> 8, o = n % 256, c.push(o), c.push(r);
                        return c
                    }(t, e.length - n), e, n, r)
                }

                function R(e, t, n) {
                    return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
                }

                function A(e, t, n) {
                    n = Math.min(e.length, n);
                    for (var r = [], i = t; i < n;) {
                        var o, c, l, h, d = e[i],
                            f = null,
                            m = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1;
                        if (i + m <= n) switch (m) {
                            case 1:
                                d < 128 && (f = d);
                                break;
                            case 2:
                                128 == (192 & (o = e[i + 1])) && (h = (31 & d) << 6 | 63 & o) > 127 && (f = h);
                                break;
                            case 3:
                                o = e[i + 1], c = e[i + 2], 128 == (192 & o) && 128 == (192 & c) && (h = (15 & d) << 12 | (63 & o) << 6 | 63 & c) > 2047 && (h < 55296 || h > 57343) && (f = h);
                                break;
                            case 4:
                                o = e[i + 1], c = e[i + 2], l = e[i + 3], 128 == (192 & o) && 128 == (192 & c) && 128 == (192 & l) && (h = (15 & d) << 18 | (63 & o) << 12 | (63 & c) << 6 | 63 & l) > 65535 && h < 1114112 && (f = h)
                        }
                        null === f ? (f = 65533, m = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), i += m
                    }
                    return function (e) {
                        var t = e.length;
                        if (t <= N) return String.fromCharCode.apply(String, e);
                        var n = "",
                            i = 0;
                        for (; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += N));
                        return n
                    }(r)
                }
                t.Buffer = d, t.SlowBuffer = function (e) {
                    +e != e && (e = 0);
                    return d.alloc(+e)
                }, t.INSPECT_MAX_BYTES = 50, d.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function () {
                                return 42
                            }
                        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (e) {
                        return !1
                    }
                }(), t.kMaxLength = l(), d.poolSize = 8192, d._augment = function (e) {
                    return e.__proto__ = d.prototype, e
                }, d.from = function (e, t, n) {
                    return f(null, e, t, n)
                }, d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, {
                    value: null,
                    configurable: !0
                })), d.alloc = function (e, t, n) {
                    return function (e, t, n, r) {
                        return m(t), t <= 0 ? h(e, t) : void 0 !== n ? "string" == typeof r ? h(e, t).fill(n, r) : h(e, t).fill(n) : h(e, t)
                    }(null, e, t, n)
                }, d.allocUnsafe = function (e) {
                    return y(null, e)
                }, d.allocUnsafeSlow = function (e) {
                    return y(null, e)
                }, d.isBuffer = function (b) {
                    return !(null == b || !b._isBuffer)
                }, d.compare = function (a, b) {
                    if (!d.isBuffer(a) || !d.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
                    if (a === b) return 0;
                    for (var e = a.length, t = b.length, i = 0, n = Math.min(e, t); i < n; ++i)
                        if (a[i] !== b[i]) {
                            e = a[i], t = b[i];
                            break
                        } return e < t ? -1 : t < e ? 1 : 0
                }, d.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, d.concat = function (e, t) {
                    if (!c(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return d.alloc(0);
                    var i;
                    if (void 0 === t)
                        for (t = 0, i = 0; i < e.length; ++i) t += e[i].length;
                    var n = d.allocUnsafe(t),
                        r = 0;
                    for (i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (!d.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                        o.copy(n, r), r += o.length
                    }
                    return n
                }, d.byteLength = w, d.prototype._isBuffer = !0, d.prototype.swap16 = function () {
                    var e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var i = 0; i < e; i += 2) x(this, i, i + 1);
                    return this
                }, d.prototype.swap32 = function () {
                    var e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var i = 0; i < e; i += 4) x(this, i, i + 3), x(this, i + 1, i + 2);
                    return this
                }, d.prototype.swap64 = function () {
                    var e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var i = 0; i < e; i += 8) x(this, i, i + 7), x(this, i + 1, i + 6), x(this, i + 2, i + 5), x(this, i + 3, i + 4);
                    return this
                }, d.prototype.toString = function () {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? A(this, 0, e) : C.apply(this, arguments)
                }, d.prototype.equals = function (b) {
                    if (!d.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                    return this === b || 0 === d.compare(this, b)
                }, d.prototype.inspect = function () {
                    var e = "",
                        n = t.INSPECT_MAX_BYTES;
                    return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
                }, d.prototype.compare = function (e, t, n, r, o) {
                    if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                    if (r >= o && t >= n) return 0;
                    if (r >= o) return -1;
                    if (t >= n) return 1;
                    if (this === e) return 0;
                    for (var c = (o >>>= 0) - (r >>>= 0), l = (n >>>= 0) - (t >>>= 0), h = Math.min(c, l), f = this.slice(r, o), m = e.slice(t, n), i = 0; i < h; ++i)
                        if (f[i] !== m[i]) {
                            c = f[i], l = m[i];
                            break
                        } return c < l ? -1 : l < c ? 1 : 0
                }, d.prototype.includes = function (e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, d.prototype.indexOf = function (e, t, n) {
                    return T(this, e, t, n, !0)
                }, d.prototype.lastIndexOf = function (e, t, n) {
                    return T(this, e, t, n, !1)
                }, d.prototype.write = function (e, t, n, r) {
                    if (void 0 === t) r = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var o = this.length - t;
                    if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var c = !1;;) switch (r) {
                        case "hex":
                            return k(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return S(this, e, t, n);
                        case "ascii":
                            return I(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return O(this, e, t, n);
                        case "base64":
                            return P(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return j(this, e, t, n);
                        default:
                            if (c) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), c = !0
                    }
                }, d.prototype.toJSON = function () {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var N = 4096;

                function D(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                    return r
                }

                function $(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                    return r
                }

                function L(e, t, n) {
                    var r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var o = "", i = t; i < n; ++i) o += K(e[i]);
                    return o
                }

                function M(e, t, n) {
                    for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                    return o
                }

                function U(e, t, n) {
                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function F(e, t, n, r, o, c) {
                    if (!d.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > o || t < c) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > e.length) throw new RangeError("Index out of range")
                }

                function B(e, t, n, r) {
                    t < 0 && (t = 65535 + t + 1);
                    for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
                }

                function z(e, t, n, r) {
                    t < 0 && (t = 4294967295 + t + 1);
                    for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
                }

                function H(e, t, n, r, o, c) {
                    if (n + r > e.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function W(e, t, n, r, c) {
                    return c || H(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4
                }

                function Y(e, t, n, r, c) {
                    return c || H(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8
                }
                d.prototype.slice = function (e, t) {
                    var n, r = this.length;
                    if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), d.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = d.prototype;
                    else {
                        var o = t - e;
                        n = new d(o, void 0);
                        for (var i = 0; i < o; ++i) n[i] = this[i + e]
                    }
                    return n
                }, d.prototype.readUIntLE = function (e, t, n) {
                    e |= 0, t |= 0, n || U(e, t, this.length);
                    for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                    return r
                }, d.prototype.readUIntBE = function (e, t, n) {
                    e |= 0, t |= 0, n || U(e, t, this.length);
                    for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
                    return r
                }, d.prototype.readUInt8 = function (e, t) {
                    return t || U(e, 1, this.length), this[e]
                }, d.prototype.readUInt16LE = function (e, t) {
                    return t || U(e, 2, this.length), this[e] | this[e + 1] << 8
                }, d.prototype.readUInt16BE = function (e, t) {
                    return t || U(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, d.prototype.readUInt32LE = function (e, t) {
                    return t || U(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, d.prototype.readUInt32BE = function (e, t) {
                    return t || U(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, d.prototype.readIntLE = function (e, t, n) {
                    e |= 0, t |= 0, n || U(e, t, this.length);
                    for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                    return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
                }, d.prototype.readIntBE = function (e, t, n) {
                    e |= 0, t |= 0, n || U(e, t, this.length);
                    for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
                    return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)), o
                }, d.prototype.readInt8 = function (e, t) {
                    return t || U(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, d.prototype.readInt16LE = function (e, t) {
                    t || U(e, 2, this.length);
                    var n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, d.prototype.readInt16BE = function (e, t) {
                    t || U(e, 2, this.length);
                    var n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, d.prototype.readInt32LE = function (e, t) {
                    return t || U(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, d.prototype.readInt32BE = function (e, t) {
                    return t || U(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, d.prototype.readFloatLE = function (e, t) {
                    return t || U(e, 4, this.length), o.read(this, e, !0, 23, 4)
                }, d.prototype.readFloatBE = function (e, t) {
                    return t || U(e, 4, this.length), o.read(this, e, !1, 23, 4)
                }, d.prototype.readDoubleLE = function (e, t) {
                    return t || U(e, 8, this.length), o.read(this, e, !0, 52, 8)
                }, d.prototype.readDoubleBE = function (e, t) {
                    return t || U(e, 8, this.length), o.read(this, e, !1, 52, 8)
                }, d.prototype.writeUIntLE = function (e, t, n, r) {
                    (e = +e, t |= 0, n |= 0, r) || F(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = 1,
                        i = 0;
                    for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
                    return t + n
                }, d.prototype.writeUIntBE = function (e, t, n, r) {
                    (e = +e, t |= 0, n |= 0, r) || F(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var i = n - 1,
                        o = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                    return t + n
                }, d.prototype.writeUInt8 = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 1, 255, 0), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                }, d.prototype.writeUInt16LE = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
                }, d.prototype.writeUInt16BE = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
                }, d.prototype.writeUInt32LE = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : z(this, e, t, !0), t + 4
                }, d.prototype.writeUInt32BE = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : z(this, e, t, !1), t + 4
                }, d.prototype.writeIntLE = function (e, t, n, r) {
                    if (e = +e, t |= 0, !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        F(this, e, t, n, o - 1, -o)
                    }
                    var i = 0,
                        c = 1,
                        sub = 0;
                    for (this[t] = 255 & e; ++i < n && (c *= 256);) e < 0 && 0 === sub && 0 !== this[t + i - 1] && (sub = 1), this[t + i] = (e / c >> 0) - sub & 255;
                    return t + n
                }, d.prototype.writeIntBE = function (e, t, n, r) {
                    if (e = +e, t |= 0, !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        F(this, e, t, n, o - 1, -o)
                    }
                    var i = n - 1,
                        c = 1,
                        sub = 0;
                    for (this[t + i] = 255 & e; --i >= 0 && (c *= 256);) e < 0 && 0 === sub && 0 !== this[t + i + 1] && (sub = 1), this[t + i] = (e / c >> 0) - sub & 255;
                    return t + n
                }, d.prototype.writeInt8 = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 1, 127, -128), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, d.prototype.writeInt16LE = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
                }, d.prototype.writeInt16BE = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
                }, d.prototype.writeInt32LE = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 4, 2147483647, -2147483648), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : z(this, e, t, !0), t + 4
                }, d.prototype.writeInt32BE = function (e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : z(this, e, t, !1), t + 4
                }, d.prototype.writeFloatLE = function (e, t, n) {
                    return W(this, e, t, !0, n)
                }, d.prototype.writeFloatBE = function (e, t, n) {
                    return W(this, e, t, !1, n)
                }, d.prototype.writeDoubleLE = function (e, t, n) {
                    return Y(this, e, t, !0, n)
                }, d.prototype.writeDoubleBE = function (e, t, n) {
                    return Y(this, e, t, !1, n)
                }, d.prototype.copy = function (e, t, n, r) {
                    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    var i, o = r - n;
                    if (this === e && n < t && t < r)
                        for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
                    else if (o < 1e3 || !d.TYPED_ARRAY_SUPPORT)
                        for (i = 0; i < o; ++i) e[i + t] = this[i + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                    return o
                }, d.prototype.fill = function (e, t, n, r) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                            var code = e.charCodeAt(0);
                            code < 256 && (e = code)
                        }
                        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !d.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                    } else "number" == typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    var i;
                    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                        for (i = t; i < n; ++i) this[i] = e;
                    else {
                        var o = d.isBuffer(e) ? e : G(new d(e, r).toString()),
                            c = o.length;
                        for (i = 0; i < n - t; ++i) this[i + t] = o[i % c]
                    }
                    return this
                };
                var V = /[^+\/0-9A-Za-z-_]/g;

                function K(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }

                function G(e, t) {
                    var n;
                    t = t || 1 / 0;
                    for (var r = e.length, o = null, c = [], i = 0; i < r; ++i) {
                        if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
                            if (!o) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && c.push(239, 191, 189);
                                    continue
                                }
                                if (i + 1 === r) {
                                    (t -= 3) > -1 && c.push(239, 191, 189);
                                    continue
                                }
                                o = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && c.push(239, 191, 189), o = n;
                                continue
                            }
                            n = 65536 + (o - 55296 << 10 | n - 56320)
                        } else o && (t -= 3) > -1 && c.push(239, 191, 189);
                        if (o = null, n < 128) {
                            if ((t -= 1) < 0) break;
                            c.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            c.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            c.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            c.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return c
                }

                function J(e) {
                    return r.toByteArray(function (e) {
                        if ((e = function (e) {
                                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                            }(e).replace(V, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function Q(e, t, n, r) {
                    for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                    return i
                }
            }).call(this, n(39))
        },
        363: function (e, t, n) {
            "use strict";
            t.byteLength = function (e) {
                var t = l(e),
                    n = t[0],
                    r = t[1];
                return 3 * (n + r) / 4 - r
            }, t.toByteArray = function (e) {
                var t, i, n = l(e),
                    r = n[0],
                    h = n[1],
                    d = new c(function (e, t, n) {
                        return 3 * (t + n) / 4 - n
                    }(0, r, h)),
                    f = 0,
                    m = h > 0 ? r - 4 : r;
                for (i = 0; i < m; i += 4) t = o[e.charCodeAt(i)] << 18 | o[e.charCodeAt(i + 1)] << 12 | o[e.charCodeAt(i + 2)] << 6 | o[e.charCodeAt(i + 3)], d[f++] = t >> 16 & 255, d[f++] = t >> 8 & 255, d[f++] = 255 & t;
                2 === h && (t = o[e.charCodeAt(i)] << 2 | o[e.charCodeAt(i + 1)] >> 4, d[f++] = 255 & t);
                1 === h && (t = o[e.charCodeAt(i)] << 10 | o[e.charCodeAt(i + 1)] << 4 | o[e.charCodeAt(i + 2)] >> 2, d[f++] = t >> 8 & 255, d[f++] = 255 & t);
                return d
            }, t.fromByteArray = function (e) {
                for (var t, n = e.length, o = n % 3, c = [], l = 16383, i = 0, d = n - o; i < d; i += l) c.push(h(e, i, i + l > d ? d : i + l));
                1 === o ? (t = e[n - 1], c.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], c.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
                return c.join("")
            };
            for (var r = [], o = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0; i < 64; ++i) r[i] = code[i], o[code.charCodeAt(i)] = i;

            function l(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
            }

            function h(e, t, n) {
                for (var o, c, output = [], i = t; i < n; i += 3) o = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]), output.push(r[(c = o) >> 18 & 63] + r[c >> 12 & 63] + r[c >> 6 & 63] + r[63 & c]);
                return output.join("")
            }
            o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
        },
        364: function (e, t) {
            t.read = function (e, t, n, r, o) {
                var c, l, h = 8 * o - r - 1,
                    d = (1 << h) - 1,
                    f = d >> 1,
                    m = -7,
                    i = n ? o - 1 : 0,
                    y = n ? -1 : 1,
                    s = e[t + i];
                for (i += y, c = s & (1 << -m) - 1, s >>= -m, m += h; m > 0; c = 256 * c + e[t + i], i += y, m -= 8);
                for (l = c & (1 << -m) - 1, c >>= -m, m += r; m > 0; l = 256 * l + e[t + i], i += y, m -= 8);
                if (0 === c) c = 1 - f;
                else {
                    if (c === d) return l ? NaN : 1 / 0 * (s ? -1 : 1);
                    l += Math.pow(2, r), c -= f
                }
                return (s ? -1 : 1) * l * Math.pow(2, c - r)
            }, t.write = function (e, t, n, r, o, c) {
                var l, h, d, f = 8 * c - o - 1,
                    m = (1 << f) - 1,
                    y = m >> 1,
                    rt = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    i = r ? 0 : c - 1,
                    _ = r ? 1 : -1,
                    s = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (h = isNaN(t) ? 1 : 0, l = m) : (l = Math.floor(Math.log(t) / Math.LN2), t * (d = Math.pow(2, -l)) < 1 && (l--, d *= 2), (t += l + y >= 1 ? rt / d : rt * Math.pow(2, 1 - y)) * d >= 2 && (l++, d /= 2), l + y >= m ? (h = 0, l = m) : l + y >= 1 ? (h = (t * d - 1) * Math.pow(2, o), l += y) : (h = t * Math.pow(2, y - 1) * Math.pow(2, o), l = 0)); o >= 8; e[n + i] = 255 & h, i += _, h /= 256, o -= 8);
                for (l = l << o | h, f += o; f > 0; e[n + i] = 255 & l, i += _, l /= 256, f -= 8);
                e[n + i - _] |= 128 * s
            }
        },
        365: function (e, t) {
            var n = {}.toString;
            e.exports = Array.isArray || function (e) {
                return "[object Array]" == n.call(e)
            }
        },
        378: function (e, t) {
            var n = function () {
                if ("object" == typeof self && self) return self;
                if ("object" == typeof window && window) return window;
                throw new Error("Unable to resolve global `this`")
            };
            e.exports = function () {
                if (this) return this;
                if ("object" == typeof globalThis && globalThis) return globalThis;
                try {
                    Object.defineProperty(Object.prototype, "__global__", {
                        get: function () {
                            return this
                        },
                        configurable: !0
                    })
                } catch (e) {
                    return n()
                }
                try {
                    return __global__ || n()
                } finally {
                    delete Object.prototype.__global__
                }
            }()
        },
        379: function (e, t, n) {
            e.exports = n(380).version
        },
        380: function (e) {
            e.exports = JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.34","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}')
        },
        49: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return o
            })), n.d(t, "b", (function () {
                return f
            })), n.d(t, "c", (function () {
                return m
            })), n.d(t, "d", (function () {
                return y
            }));
            const r = [];
            var o;
            ! function (e) {
                e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
            }(o || (o = {}));
            const c = {
                    debug: o.DEBUG,
                    verbose: o.VERBOSE,
                    info: o.INFO,
                    warn: o.WARN,
                    error: o.ERROR,
                    silent: o.SILENT
                },
                l = o.INFO,
                h = {
                    [o.DEBUG]: "log",
                    [o.VERBOSE]: "log",
                    [o.INFO]: "info",
                    [o.WARN]: "warn",
                    [o.ERROR]: "error"
                },
                d = (e, t, ...n) => {
                    if (t < e.logLevel) return;
                    const r = (new Date).toISOString(),
                        o = h[t];
                    if (!o) throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
                    console[o](`[${r}]  ${e.name}:`, ...n)
                };
            class f {
                constructor(e) {
                    this.name = e, this._logLevel = l, this._logHandler = d, this._userLogHandler = null, r.push(this)
                }
                get logLevel() {
                    return this._logLevel
                }
                set logLevel(e) {
                    if (!(e in o)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                    this._logLevel = e
                }
                setLogLevel(e) {
                    this._logLevel = "string" == typeof e ? c[e] : e
                }
                get logHandler() {
                    return this._logHandler
                }
                set logHandler(e) {
                    if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                }
                get userLogHandler() {
                    return this._userLogHandler
                }
                set userLogHandler(e) {
                    this._userLogHandler = e
                }
                debug(...e) {
                    this._userLogHandler && this._userLogHandler(this, o.DEBUG, ...e), this._logHandler(this, o.DEBUG, ...e)
                }
                log(...e) {
                    this._userLogHandler && this._userLogHandler(this, o.VERBOSE, ...e), this._logHandler(this, o.VERBOSE, ...e)
                }
                info(...e) {
                    this._userLogHandler && this._userLogHandler(this, o.INFO, ...e), this._logHandler(this, o.INFO, ...e)
                }
                warn(...e) {
                    this._userLogHandler && this._userLogHandler(this, o.WARN, ...e), this._logHandler(this, o.WARN, ...e)
                }
                error(...e) {
                    this._userLogHandler && this._userLogHandler(this, o.ERROR, ...e), this._logHandler(this, o.ERROR, ...e)
                }
            }

            function m(e) {
                r.forEach((t => {
                    t.setLogLevel(e)
                }))
            }

            function y(e, t) {
                for (const n of r) {
                    let r = null;
                    t && t.level && (r = c[t.level]), n.userLogHandler = null === e ? null : (t, n, ...c) => {
                        const l = c.map((e => {
                            if (null == e) return null;
                            if ("string" == typeof e) return e;
                            if ("number" == typeof e || "boolean" == typeof e) return e.toString();
                            if (e instanceof Error) return e.message;
                            try {
                                return JSON.stringify(e)
                            } catch (e) {
                                return null
                            }
                        })).filter((e => e)).join(" ");
                        n >= (null != r ? r : t.logLevel) && e({
                            level: o[n].toLowerCase(),
                            message: l,
                            args: c,
                            type: t.name
                        })
                    }
                }
            }
        },
        64: function (e, t, n) {
            "use strict";
            var r = n(230);
            n.d(t, "a", (function () {
                return r.a
            })), n.d(t, "b", (function () {
                return r.b
            })), n.d(t, "c", (function () {
                return r.c
            })), n.d(t, "d", (function () {
                return r.d
            })), n.d(t, "e", (function () {
                return r.e
            })), n.d(t, "f", (function () {
                return r.f
            })), n.d(t, "g", (function () {
                return r.g
            })), n.d(t, "h", (function () {
                return r.h
            })), n.d(t, "i", (function () {
                return r.i
            })), n.d(t, "j", (function () {
                return r.j
            })), n.d(t, "k", (function () {
                return r.k
            }))
        },
        81: function (e, t, n) {
            "use strict";
            var r = {
                name: "NoSsr",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function (e, t) {
                    var n = t.parent,
                        r = t.slots,
                        o = t.props,
                        c = r(),
                        l = c.default;
                    void 0 === l && (l = []);
                    var h = c.placeholder;
                    return n._isMounted ? l : (n.$once("hook:mounted", (function () {
                        n.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || h) ? e(o.placeholderTag, {
                        class: ["no-ssr-placeholder"]
                    }, o.placeholder || h) : l.length > 0 ? l.map((function () {
                        return e(!1)
                    })) : e(!1))
                }
            };
            e.exports = r
        },
        94: function (e, t) {
            var n = "undefined" != typeof self ? self : this,
                r = function () {
                    function e() {
                        this.fetch = !1, this.DOMException = n.DOMException
                    }
                    return e.prototype = n, new e
                }();
            ! function (e) {
                ! function (t) {
                    var n = {
                        searchParams: "URLSearchParams" in e,
                        iterable: "Symbol" in e && "iterator" in Symbol,
                        blob: "FileReader" in e && "Blob" in e && function () {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in e,
                        arrayBuffer: "ArrayBuffer" in e
                    };
                    if (n.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        o = ArrayBuffer.isView || function (e) {
                            return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                        };

                    function c(e) {
                        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                        return e.toLowerCase()
                    }

                    function l(e) {
                        return "string" != typeof e && (e = String(e)), e
                    }

                    function h(e) {
                        var t = {
                            next: function () {
                                var t = e.shift();
                                return {
                                    done: void 0 === t,
                                    value: t
                                }
                            }
                        };
                        return n.iterable && (t[Symbol.iterator] = function () {
                            return t
                        }), t
                    }

                    function d(e) {
                        this.map = {}, e instanceof d ? e.forEach((function (e, t) {
                            this.append(t, e)
                        }), this) : Array.isArray(e) ? e.forEach((function (header) {
                            this.append(header[0], header[1])
                        }), this) : e && Object.getOwnPropertyNames(e).forEach((function (t) {
                            this.append(t, e[t])
                        }), this)
                    }

                    function f(body) {
                        if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        body.bodyUsed = !0
                    }

                    function m(e) {
                        return new Promise((function (t, n) {
                            e.onload = function () {
                                t(e.result)
                            }, e.onerror = function () {
                                n(e.error)
                            }
                        }))
                    }

                    function y(e) {
                        var t = new FileReader,
                            n = m(t);
                        return t.readAsArrayBuffer(e), n
                    }

                    function _(e) {
                        if (e.slice) return e.slice(0);
                        var view = new Uint8Array(e.byteLength);
                        return view.set(new Uint8Array(e)), view.buffer
                    }

                    function v() {
                        return this.bodyUsed = !1, this._initBody = function (body) {
                            var e;
                            this._bodyInit = body, body ? "string" == typeof body ? this._bodyText = body : n.blob && Blob.prototype.isPrototypeOf(body) ? this._bodyBlob = body : n.formData && FormData.prototype.isPrototypeOf(body) ? this._bodyFormData = body : n.searchParams && URLSearchParams.prototype.isPrototypeOf(body) ? this._bodyText = body.toString() : n.arrayBuffer && n.blob && ((e = body) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = _(body.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || o(body)) ? this._bodyArrayBuffer = _(body) : this._bodyText = body = Object.prototype.toString.call(body) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof body ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(body) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, n.blob && (this.blob = function () {
                            var e = f(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function () {
                            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y)
                        }), this.text = function () {
                            var e, t, n, r = f(this);
                            if (r) return r;
                            if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = m(t), t.readAsText(e), n;
                            if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
                                for (var view = new Uint8Array(e), t = new Array(view.length), i = 0; i < view.length; i++) t[i] = String.fromCharCode(view[i]);
                                return t.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, n.formData && (this.formData = function () {
                            return this.text().then(x)
                        }), this.json = function () {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    d.prototype.append = function (e, t) {
                        e = c(e), t = l(t);
                        var n = this.map[e];
                        this.map[e] = n ? n + ", " + t : t
                    }, d.prototype.delete = function (e) {
                        delete this.map[c(e)]
                    }, d.prototype.get = function (e) {
                        return e = c(e), this.has(e) ? this.map[e] : null
                    }, d.prototype.has = function (e) {
                        return this.map.hasOwnProperty(c(e))
                    }, d.prototype.set = function (e, t) {
                        this.map[c(e)] = l(t)
                    }, d.prototype.forEach = function (e, t) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                    }, d.prototype.keys = function () {
                        var e = [];
                        return this.forEach((function (t, n) {
                            e.push(n)
                        })), h(e)
                    }, d.prototype.values = function () {
                        var e = [];
                        return this.forEach((function (t) {
                            e.push(t)
                        })), h(e)
                    }, d.prototype.entries = function () {
                        var e = [];
                        return this.forEach((function (t, n) {
                            e.push([n, t])
                        })), h(e)
                    }, n.iterable && (d.prototype[Symbol.iterator] = d.prototype.entries);
                    var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function C(input, e) {
                        var t, n, body = (e = e || {}).body;
                        if (input instanceof C) {
                            if (input.bodyUsed) throw new TypeError("Already read");
                            this.url = input.url, this.credentials = input.credentials, e.headers || (this.headers = new d(input.headers)), this.method = input.method, this.mode = input.mode, this.signal = input.signal, body || null == input._bodyInit || (body = input._bodyInit, input.bodyUsed = !0)
                        } else this.url = String(input);
                        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new d(e.headers)), this.method = (t = e.method || this.method || "GET", n = t.toUpperCase(), w.indexOf(n) > -1 ? n : t), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && body) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(body)
                    }

                    function x(body) {
                        var form = new FormData;
                        return body.trim().split("&").forEach((function (e) {
                            if (e) {
                                var t = e.split("="),
                                    n = t.shift().replace(/\+/g, " "),
                                    r = t.join("=").replace(/\+/g, " ");
                                form.append(decodeURIComponent(n), decodeURIComponent(r))
                            }
                        })), form
                    }

                    function T(e, t) {
                        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new d(t.headers), this.url = t.url || "", this._initBody(e)
                    }
                    C.prototype.clone = function () {
                        return new C(this, {
                            body: this._bodyInit
                        })
                    }, v.call(C.prototype), v.call(T.prototype), T.prototype.clone = function () {
                        return new T(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new d(this.headers),
                            url: this.url
                        })
                    }, T.error = function () {
                        var e = new T(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var E = [301, 302, 303, 307, 308];
                    T.redirect = function (e, t) {
                        if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
                        return new T(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, t.DOMException = e.DOMException;
                    try {
                        new t.DOMException
                    } catch (e) {
                        t.DOMException = function (e, t) {
                            this.message = e, this.name = t;
                            var n = Error(e);
                            this.stack = n.stack
                        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                    }

                    function k(input, e) {
                        return new Promise((function (r, o) {
                            var c = new C(input, e);
                            if (c.signal && c.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
                            var l = new XMLHttpRequest;

                            function h() {
                                l.abort()
                            }
                            l.onload = function () {
                                var e, t, n = {
                                    status: l.status,
                                    statusText: l.statusText,
                                    headers: (e = l.getAllResponseHeaders() || "", t = new d, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function (line) {
                                        var e = line.split(":"),
                                            n = e.shift().trim();
                                        if (n) {
                                            var r = e.join(":").trim();
                                            t.append(n, r)
                                        }
                                    })), t)
                                };
                                n.url = "responseURL" in l ? l.responseURL : n.headers.get("X-Request-URL");
                                var body = "response" in l ? l.response : l.responseText;
                                r(new T(body, n))
                            }, l.onerror = function () {
                                o(new TypeError("Network request failed"))
                            }, l.ontimeout = function () {
                                o(new TypeError("Network request failed"))
                            }, l.onabort = function () {
                                o(new t.DOMException("Aborted", "AbortError"))
                            }, l.open(c.method, c.url, !0), "include" === c.credentials ? l.withCredentials = !0 : "omit" === c.credentials && (l.withCredentials = !1), "responseType" in l && n.blob && (l.responseType = "blob"), c.headers.forEach((function (e, t) {
                                l.setRequestHeader(t, e)
                            })), c.signal && (c.signal.addEventListener("abort", h), l.onreadystatechange = function () {
                                4 === l.readyState && c.signal.removeEventListener("abort", h)
                            }), l.send(void 0 === c._bodyInit ? null : c._bodyInit)
                        }))
                    }
                    k.polyfill = !0, e.fetch || (e.fetch = k, e.Headers = d, e.Request = C, e.Response = T), t.Headers = d, t.Request = C, t.Response = T, t.fetch = k, Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }({})
            }(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
            var o = r;
            (t = o.fetch).default = o.fetch, t.fetch = o.fetch, t.Headers = o.Headers, t.Request = o.Request, t.Response = o.Response, e.exports = t
        }
    }
]);