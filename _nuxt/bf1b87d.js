(window.webpackJsonp = window.webpackJsonp || []).push([
    [41], {
        608: function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, "AppWeb", (function () {
                return d
            }));
            var o = t(120);
            class d extends o.a {
                constructor() {
                    super(), this.handleVisibilityChange = () => {
                        const data = {
                            isActive: !0 !== document.hidden
                        };
                        this.notifyListeners("appStateChange", data), document.hidden ? this.notifyListeners("pause", null) : this.notifyListeners("resume", null)
                    }, document.addEventListener("visibilitychange", this.handleVisibilityChange, !1)
                }
                exitApp() {
                    throw this.unimplemented("Not implemented on web.")
                }
                async getInfo() {
                    throw this.unimplemented("Not implemented on web.")
                }
                async getLaunchUrl() {
                    return {
                        url: ""
                    }
                }
                async getState() {
                    return {
                        isActive: !0 !== document.hidden
                    }
                }
                async minimizeApp() {
                    throw this.unimplemented("Not implemented on web.")
                }
            }
        }
    }
]);