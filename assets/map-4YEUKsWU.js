var Yf = Object.defineProperty,
    qf = Object.defineProperties;
var $f = Object.getOwnPropertyDescriptors;
var Jp = Object.getOwnPropertySymbols;
var Kf = Object.prototype.hasOwnProperty,
    em = Object.prototype.propertyIsEnumerable;
var dp = Math.pow,
    Zp = (ue, R, y) => R in ue ? Yf(ue, R, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: y
    }) : ue[R] = y,
    Xp = (ue, R) => {
        for (var y in R || (R = {})) Kf.call(R, y) && Zp(ue, y, R[y]);
        if (Jp)
            for (var y of Jp(R)) em.call(R, y) && Zp(ue, y, R[y]);
        return ue
    },
    jp = (ue, R) => qf(ue, $f(R));
var no = (ue, R, y) => new Promise((z, V) => {
    var Y = se => {
            try {
                p(y.next(se))
            } catch (ie) {
                V(ie)
            }
        },
        C = se => {
            try {
                p(y.throw(se))
            } catch (ie) {
                V(ie)
            }
        },
        p = se => se.done ? z(se.value) : Promise.resolve(se.value).then(Y, C);
    p((y = y.apply(ue, R)).next())
});
(function() {
    const R = document.createElement("link").relList;
    if (R && R.supports && R.supports("modulepreload")) return;
    for (const V of document.querySelectorAll('link[rel="modulepreload"]')) z(V);
    new MutationObserver(V => {
        for (const Y of V)
            if (Y.type === "childList")
                for (const C of Y.addedNodes) C.tagName === "LINK" && C.rel === "modulepreload" && z(C)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function y(V) {
        const Y = {};
        return V.integrity && (Y.integrity = V.integrity), V.referrerPolicy && (Y.referrerPolicy = V.referrerPolicy), V.crossOrigin === "use-credentials" ? Y.credentials = "include" : V.crossOrigin === "anonymous" ? Y.credentials = "omit" : Y.credentials = "same-origin", Y
    }

    function z(V) {
        if (V.ep) return;
        V.ep = !0;
        const Y = y(V);
        fetch(V.href, Y)
    }
})();
var uf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function tm(ue) {
    return ue && ue.__esModule && Object.prototype.hasOwnProperty.call(ue, "default") ? ue.default : ue
}
var df = {
    exports: {}
};
/**
 * MapLibre GL JS
 * @license 3-Clause BSD. Full text of license: https://github.com/maplibre/maplibre-gl-js/blob/v4.1.0/LICENSE.txt
 */

var Fp = df.exports,
    ff = {
        exports: {}
    },
    mf = {
        exports: {}
    },
    Qp = {
        exports: {}
    };
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */

var Xa = Qp.exports,
    gf = {
        exports: {}
    },
    yf = {
        exports: {}
    },
    vf = {
        exports: {}
    };
(function(ue, R) {
    const z = .0005555555555555556 * Math.PI,
        V = Math.atan(3 / 4),
        Y = 63710088e-1,
        C = 40075017;
    ue.exports = {
        WORLD_SIZE: 1024e3,
        PROJECTION_WORLD_SIZE: 1024e3 / (Y * Math.PI * 2),
        MERCATOR_A: Y,
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        EARTH_RADIUS: Y,
        EARTH_CIRCUMFERENCE: 2 * Math.PI * Y,
        EARTH_CIRCUMFERENCE_EQUATOR: C,
        FOV_ORTHO: z,
        FOV: V,
        FOV_DEGREES: V * 180 / Math.PI,
        TILE_SIZE: 512
    }
})(vf);
var Op = vf.exports,
    _f = {
        exports: {}
    };
(function(ue, R) {
    function y() {}
    y.prototype = {
        Coords: function(z) {
            if (z.constructor !== Array) {
                console.error("Coords must be an array");
                return
            }
            if (z.length < 2) {
                console.error("Coords length must be at least 2");
                return
            }
            for (const V of z)
                if (V.constructor !== Number) {
                    console.error("Coords values must be numbers");
                    return
                } if (Math.abs(z[1]) > 90) {
                console.error("Latitude must be between -90 and 90");
                return
            }
            return z
        },
        Line: function(z) {
            var V = this;
            if (z.constructor !== Array) {
                console.error("Line must be an array");
                return
            }
            for (const Y of z)
                if (!V.Coords(Y)) {
                    console.error("Each coordinate in a line must be a valid Coords type");
                    return
                } return z
        },
        Rotation: function(z) {
            if (z.constructor === Number) z = {
                z
            };
            else if (z.constructor === Object)
                for (const V of Object.keys(z)) {
                    if (!["x", "y", "z"].includes(V)) {
                        console.error("Rotation parameters must be x, y, or z");
                        return
                    }
                    if (z[V].constructor !== Number) {
                        console.error("Individual rotation values must be numbers");
                        return
                    }
                } else {
                    console.error("Rotation must be an object or a number");
                    return
                }
            return z
        },
        Scale: function(z) {
            if (z.constructor === Number) z = {
                x: z,
                y: z,
                z
            };
            else if (z.constructor === Object)
                for (const V of Object.keys(z)) {
                    if (!["x", "y", "z"].includes(V)) {
                        console.error("Scale parameters must be x, y, or z");
                        return
                    }
                    if (z[V].constructor !== Number) {
                        console.error("Individual scale values must be numbers");
                        return
                    }
                } else {
                    console.error("Scale must be an object or a number");
                    return
                }
            return z
        }
    }, ue.exports = y
})(_f);
var im = _f.exports;
(function(ue, R) {
    var y = Xa,
        z = Op,
        V = im,
        Y = {
            prettyPrintMatrix: function(C) {
                for (var p = 0; p < 4; p++) {
                    var se = [C[p], C[p + 4], C[p + 8], C[p + 12]];
                    console.log(se.map(function(ie) {
                        return ie.toFixed(4)
                    }))
                }
            },
            makePerspectiveMatrix: function(C, p, se, ie) {
                var He = new y.Matrix4,
                    be = 1 / Math.tan(C / 2),
                    Ee = 1 / (se - ie),
                    Lt = [be / p, 0, 0, 0, 0, be, 0, 0, 0, 0, (ie + se) * Ee, -1, 0, 0, 2 * ie * se * Ee, 0];
                return He.elements = Lt, He
            },
            makeOrthographicMatrix: function(C, p, se, ie, He, be) {
                var Ee = new y.Matrix4;
                const Lt = 1 / (p - C),
                    Tt = 1 / (se - ie),
                    Je = 1 / (be - He),
                    wt = (p + C) * Lt,
                    Ke = (se + ie) * Tt,
                    Ye = He * Je;
                var jt = [2 * Lt, 0, 0, 0, 0, 2 * Tt, 0, 0, 0, 0, -1 * Je, 0, -wt, -Ke, -Ye, 1];
                return Ee.elements = jt, Ee
            },
            radify: function(C) {
                function p(se) {
                    return se = se || 0, Math.PI * 2 * se / 360
                }
                return typeof C == "object" ? C.length > 0 ? C.map(function(se) {
                    return p(se)
                }) : [p(C.x), p(C.y), p(C.z)] : p(C)
            },
            degreeify: function(C) {
                function p(se) {
                    return se = se || 0, se * 360 / (Math.PI * 2)
                }
                return typeof C == "object" ? [p(C.x), p(C.y), p(C.z)] : p(C)
            },
            projectToWorld: function(C) {
                var p = [-z.MERCATOR_A * z.DEG2RAD * C[0] * z.PROJECTION_WORLD_SIZE, -z.MERCATOR_A * Math.log(Math.tan(Math.PI * .25 + .5 * z.DEG2RAD * C[1])) * z.PROJECTION_WORLD_SIZE];
                if (!C[2]) p.push(0);
                else {
                    var se = this.projectedUnitsPerMeter(C[1]);
                    p.push(C[2] * se)
                }
                var ie = new y.Vector3(p[0], p[1], p[2]);
                return ie
            },
            projectedUnitsPerMeter: function(C) {
                return Math.abs(z.WORLD_SIZE / Math.cos(z.DEG2RAD * C) / z.EARTH_CIRCUMFERENCE)
            },
            _circumferenceAtLatitude: function(C) {
                return z.EARTH_CIRCUMFERENCE * Math.cos(C * Math.PI / 180)
            },
            mercatorZfromAltitude: function(C, p) {
                return C / this._circumferenceAtLatitude(p)
            },
            _scaleVerticesToMeters: function(C, p) {
                var se = this.projectedUnitsPerMeter(C[1]);
                this.projectToWorld(C);
                for (var ie = 0; ie < p.length; ie++) p[ie].multiplyScalar(se);
                return p
            },
            projectToScreen: function(C) {
                console.log("WARNING: Projecting to screen coordinates is not yet implemented")
            },
            unprojectFromScreen: function(C) {
                console.log("WARNING: unproject is not yet implemented")
            },
            unprojectFromWorld: function(C) {
                var p = [-C.x / (z.MERCATOR_A * z.DEG2RAD * z.PROJECTION_WORLD_SIZE), 2 * (Math.atan(Math.exp(C.y / (z.PROJECTION_WORLD_SIZE * -z.MERCATOR_A))) - Math.PI / 4) / z.DEG2RAD],
                    se = this.projectedUnitsPerMeter(p[1]),
                    ie = C.z || 0;
                return p.push(ie / se), p
            },
            toScreenPosition: function(C, p) {
                var se = new y.Vector3,
                    ie = .5 * renderer.context.canvas.width,
                    He = .5 * renderer.context.canvas.height;
                return C.updateMatrixWorld(), se.setFromMatrixPosition(C.matrixWorld), se.project(p), se.x = se.x * ie + ie, se.y = -(se.y * He) + He, {
                    x: se.x,
                    y: se.y
                }
            },
            getFeatureCenter: function(p, se, ie) {
                let He = [],
                    be = 0,
                    Ee = 0,
                    Lt = 0,
                    Tt = [...p.geometry.coordinates[0]];
                return p.geometry.type === "Point" ? He = [...Tt[0]] : (p.geometry.type === "MultiPolygon" && (Tt = Tt[0]), Tt.splice(-1, 1), Tt.forEach(function(Je) {
                    be += Je[0], Ee += Je[1]
                }), He = [be / Tt.length, Ee / Tt.length]), Lt = this.getObjectHeightOnFloor(p, se, ie), He.length < 3 ? He.push(Lt) : He[2] = Lt, He
            },
            getObjectHeightOnFloor: function(C, p, se = C.properties.level || 0) {
                let ie = se * (C.properties.levelHeight || 0),
                    He = C.properties.base_height || C.properties.min_height || 0,
                    Ee = (p && p.model ? 0 : C.properties.height - He) + He;
                return ie + Ee
            },
            _flipMaterialSides: function(C) {},
            normalizeVertices(C) {
                let p = new y.BufferGeometry,
                    se = [];
                for (var ie = 0; ie < C.length; ie++) {
                    let Ee = C[ie];
                    se.push(Ee.x, Ee.y, Ee.z), se.push(Ee.x, Ee.y, Ee.z)
                }
                p.setAttribute("position", new y.BufferAttribute(new Float32Array(se), 3)), p.computeBoundingSphere();
                var He = p.boundingSphere.center,
                    be = C.map(function(Ee) {
                        var Lt = Ee.sub(He);
                        return Lt
                    });
                return {
                    vertices: be,
                    position: He
                }
            },
            flattenVectors(C) {
                var p = [];
                for (let se of C) p.push(se.x, se.y, se.z);
                return p
            },
            lnglatsToWorld: function(C) {
                var p = C.map(function(se) {
                    var ie = Y.projectToWorld(se),
                        He = new y.Vector3(ie.x, ie.y, ie.z);
                    return He
                });
                return p
            },
            extend: function(C, p) {
                for (let se in p) C[se] = p[se]
            },
            clone: function(C) {
                var p = {};
                for (let se in C) p[se] = C[se];
                return p
            },
            clamp: function(C, p, se) {
                return Math.min(se, Math.max(p, C))
            },
            types: {
                rotation: function(C, p) {
                    C || (C = 0), typeof C == "number" && (C = {
                        z: C
                    });
                    var se = this.applyDefault([C.x, C.y, C.z], p),
                        ie = Y.radify(se);
                    return ie
                },
                scale: function(C, p) {
                    return C || (C = 1), typeof C == "number" ? C = [C, C, C] : this.applyDefault([C.x, C.y, C.z], p)
                },
                applyDefault: function(C, p) {
                    var se = C.map(function(ie, He) {
                        return ie = ie || p[He], ie
                    });
                    return se
                }
            },
            toDecimal: function(C, p) {
                return Number(C.toFixed(p))
            },
            equal: function(C, p) {
                const se = Object.keys(C),
                    ie = Object.keys(p);
                if (se.length !== ie.length || se.length == 0 && ie.length == 0 && se !== ie) return !1;
                for (const He of se) {
                    const be = C[He],
                        Ee = p[He],
                        Lt = this.isObject(be) && this.isObject(Ee);
                    if (Lt && !equal(be, Ee) || !Lt && be !== Ee) return !1
                }
                return !0
            },
            isObject: function(C) {
                return C != null && typeof C == "object"
            },
            curveToLine: (C, p) => {
                let {
                    width: se,
                    color: ie
                } = p, He = new y.BufferGeometry().setFromPoints(C.getPoints(100)), be = new y.LineBasicMaterial({
                    color: ie,
                    linewidth: se
                });
                return new y.Line(He, be)
            },
            curvesToLines: C => {
                var p = [16711680, 2031360, 2490623],
                    se = C.map((ie, He) => {
                        let be = {
                            width: 3,
                            color: p[He] || "purple"
                        };
                        return curveToLine(ie, be)
                    });
                return se
            },
            _validate: function(C, p) {
                C = C || {};
                var se = {};
                Y.extend(se, C);
                for (let ie of Object.keys(p))
                    if (C[ie] === void 0)
                        if (p[ie] === null) {
                            console.error(ie + " is required");
                            return
                        } else se[ie] = p[ie];
                else se[ie] = C[ie];
                return se
            },
            Validator: new V,
            exposedMethods: ["projectToWorld", "projectedUnitsPerMeter", "extend", "unprojectFromWorld"]
        };
    ue.exports = Y
})(yf);
var Ls = yf.exports;
(function(ue, R) {
    const y = Xa,
        z = Ls,
        V = Op;

    function Y(C, p, se) {
        this.map = C, this.camera = p, this.active = !0, this.camera.matrixAutoUpdate = !1, this.world = se || new y.Group, this.world.position.x = this.world.position.y = V.WORLD_SIZE / 2, this.world.matrixAutoUpdate = !1, this.state = {
            translateCenter: new y.Matrix4().makeTranslation(V.WORLD_SIZE / 2, -V.WORLD_SIZE / 2, 0),
            worldSizeRatio: V.TILE_SIZE / V.WORLD_SIZE,
            worldSize: V.TILE_SIZE * this.map.transform.scale
        };
        let ie = this;
        this.map.on("move", function() {
            ie.updateCamera()
        }).on("resize", function() {
            ie.setupCamera()
        }), this.setupCamera()
    }
    Y.prototype = {
        setupCamera: function() {
            this.state.fov = this.map.transform._fov;
            const C = this.map.transform;
            this.camera.aspect = C.width / C.height, this.camera.updateProjectionMatrix(), this.halfFov = this.state.fov / 2;
            const p = {
                    x: C.width / 2,
                    y: C.height / 2
                },
                se = .5 / Math.tan(this.halfFov) * C.height,
                ie = C._maxPitch * Math.PI / 180;
            this.acuteAngle = Math.PI / 2 - ie, this.state.cameraToCenterDistance = se, this.state.offset = p, this.state.cameraTranslateZ = new y.Matrix4().makeTranslation(0, 0, this.state.cameraToCenterDistance), this.state.maxFurthestDistance = this.state.cameraToCenterDistance * .95 * (Math.cos(this.acuteAngle) * Math.sin(this.halfFov) / Math.sin(Math.max(.01, Math.min(Math.PI - .01, this.acuteAngle - this.halfFov))) + 1), this.updateCamera()
        },
        updateCamera: function(C) {
            if (!this.camera) {
                console.log("nocamera");
                return
            }
            const p = this.map.transform;
            let se = 0,
                ie = 0;
            this.state.fov = p._fov, this.halfFov = this.state.fov / 2;
            const He = Math.PI / 2 + p._pitch,
                be = Math.cos(Math.PI / 2 - p._pitch);
            if (this.cameraToCenterDistance = .5 / Math.tan(this.halfFov) * p.height, window.mapboxgl && parseFloat(window.mapboxgl.version) >= 2) {
                const Kt = this.worldSize(p);
                this.mercatorZfromAltitude(1, p.center.lat) * Kt;
                const vi = this.fovAboveCenter(p),
                    Ei = (p._camera.position[2] * Kt - 0) / Math.cos(p._pitch),
                    ct = Math.sin(vi) * Ei / Math.sin(z.clamp(Math.PI - He - vi, .01, Math.PI - .01));
                ie = be * ct + Ei;
                const je = Ei * (1 / p._horizonShift);
                se = Math.min(ie * 1.01, je)
            } else {
                const Kt = Math.sin(this.halfFov) * this.state.cameraToCenterDistance / Math.sin(Math.PI - He - this.halfFov);
                ie = be * Kt + this.state.cameraToCenterDistance, se = ie * 1.01
            }
            this.state.cameraTranslateZ = new y.Matrix4().makeTranslation(0, 0, this.cameraToCenterDistance);
            const Ee = p.height / 50,
                Lt = Math.max(Ee * be, Ee),
                Tt = p.height,
                Je = p.width;
            this.camera instanceof y.OrthographicCamera ? this.camera.projectionMatrix = z.makeOrthographicMatrix(Je / -2, Je / 2, Tt / 2, Tt / -2, Lt, se) : this.camera.projectionMatrix = z.makePerspectiveMatrix(this.state.fov, Je / Tt, Lt, se);
            let wt = this.calcCameraMatrix(p._pitch, p.angle);
            this.camera.matrixWorld.copy(wt);
            let Ke = p.scale * this.state.worldSizeRatio,
                Ye = new y.Matrix4,
                jt = new y.Matrix4,
                di = new y.Matrix4;
            Ye.makeScale(Ke, Ke, Ke);
            let $e = p.x || p.point.x,
                vt = p.y || p.point.y;
            jt.makeTranslation(-$e, vt, 0), di.makeRotationZ(Math.PI), this.world.matrix = new y.Matrix4().premultiply(di).premultiply(this.state.translateCenter).premultiply(Ye).premultiply(jt), this.map.fire("CameraSynced", {
                detail: {
                    nearZ: Lt,
                    farZ: se,
                    pitch: p._pitch,
                    angle: p.angle,
                    furthestDistance: ie,
                    maxFurthestDistance: this.state.maxFurthestDistance,
                    cameraToCenterDistance: this.cameraToCenterDistance,
                    t: this.map.transform,
                    tbProjMatrix: this.camera.projectionMatrix.elements,
                    tbWorldMatrix: this.world.matrix.elements,
                    cameraSyn: Y
                }
            })
        },
        worldSize(C) {
            return C.tileSize * C.scale
        },
        fovAboveCenter(C) {
            return C._fov * (.5 + C.centerOffset.y / C.height)
        },
        mercatorZfromAltitude(C, p) {
            return C / this.circumferenceAtLatitude(p)
        },
        circumferenceAtLatitude(C) {
            return V.EARTH_CIRCUMFERENCE * Math.cos(C * Math.PI / 180)
        },
        calcCameraMatrix(C, p, se) {
            const ie = this.map.transform,
                He = C === void 0 ? ie._pitch : C,
                be = p === void 0 ? ie.angle : p,
                Ee = se === void 0 ? this.state.cameraTranslateZ : se;
            return new y.Matrix4().premultiply(Ee).premultiply(new y.Matrix4().makeRotationX(He)).premultiply(new y.Matrix4().makeRotationZ(be))
        }
    }, ue.exports = Y
})(gf);
var nm = gf.exports,
    xf = {
        exports: {}
    };
(function(ue, R) {
    (function() {
        var y = Math.PI,
            z = Math.sin,
            V = Math.cos,
            Y = Math.tan,
            C = Math.asin,
            p = Math.atan2,
            se = Math.acos,
            ie = y / 180,
            He = 1e3 * 60 * 60 * 24,
            be = 2440588,
            Ee = 2451545;

        function Lt(De) {
            return De.valueOf() / He - .5 + be
        }

        function Tt(De) {
            return new Date((De + .5 - be) * He)
        }

        function Je(De) {
            return Lt(De) - Ee
        }
        var wt = ie * 23.4397;

        function Ke(De, gt) {
            return p(z(De) * V(wt) - Y(gt) * z(wt), V(De))
        }

        function Ye(De, gt) {
            return C(z(gt) * V(wt) + V(gt) * z(wt) * z(De))
        }

        function jt(De, gt, Qt) {
            return p(z(De), V(De) * z(gt) - Y(Qt) * V(gt))
        }

        function di(De, gt, Qt) {
            return C(z(gt) * z(Qt) + V(gt) * V(Qt) * V(De))
        }

        function $e(De, gt) {
            return ie * (280.16 + 360.9856235 * De) - gt
        }

        function vt(De) {
            return De < 0 && (De = 0), 2967e-7 / Math.tan(De + .00312536 / (De + .08901179))
        }

        function Kt(De) {
            return ie * (357.5291 + .98560028 * De)
        }

        function vi(De) {
            var gt = ie * (1.9148 * z(De) + .02 * z(2 * De) + 3e-4 * z(3 * De)),
                Qt = ie * 102.9372;
            return De + gt + Qt + y
        }

        function Li(De) {
            var gt = Kt(De),
                Qt = vi(gt);
            return {
                dec: Ye(Qt, 0),
                ra: Ke(Qt, 0)
            }
        }
        var Ei = {};
        Ei.getPosition = function(De, gt, Qt) {
            var Ve = ie * -Qt,
                Dt = ie * gt,
                ei = Je(De),
                xi = Li(ei),
                oe = $e(ei, Ve) - xi.ra;
            return {
                azimuth: jt(oe, Dt, xi.dec),
                altitude: di(oe, Dt, xi.dec)
            }
        }, Ei.toJulian = function(De) {
            return Lt(De)
        };
        var ct = Ei.times = [
            [-.833, "sunrise", "sunset"],
            [-.3, "sunriseEnd", "sunsetStart"],
            [-6, "dawn", "dusk"],
            [-12, "nauticalDawn", "nauticalDusk"],
            [-18, "nightEnd", "night"],
            [6, "goldenHourEnd", "goldenHour"]
        ];
        Ei.addTime = function(De, gt, Qt) {
            ct.push([De, gt, Qt])
        };
        var je = 9e-4;

        function li(De, gt) {
            return Math.round(De - je - gt / (2 * y))
        }

        function O(De, gt, Qt) {
            return je + (De + gt) / (2 * y) + Qt
        }

        function K(De, gt, Qt) {
            return Ee + De + .0053 * z(gt) - .0069 * z(2 * Qt)
        }

        function ae(De, gt, Qt) {
            return se((z(De) - z(gt) * z(Qt)) / (V(gt) * V(Qt)))
        }

        function _e(De) {
            return -2.076 * Math.sqrt(De) / 60
        }

        function xe(De, gt, Qt, Ve, Dt, ei, xi) {
            var oe = ae(De, Qt, Ve),
                ve = O(oe, gt, Dt);
            return K(ve, ei, xi)
        }
        Ei.getTimes = function(De, gt, Qt, Ve) {
            Ve = Ve || 0;
            var Dt = ie * -Qt,
                ei = ie * gt,
                xi = _e(Ve),
                oe = Je(De),
                ve = li(oe, Dt),
                Ne = O(0, Dt, ve),
                Ue = Kt(Ne),
                Oe = vi(Ue),
                at = Ye(Oe, 0),
                ht = K(Ne, Ue, Oe),
                tt, Bt, Le, Ot, ii, Wt, bi = {
                    solarNoon: Tt(ht),
                    nadir: Tt(ht - .5)
                };
            for (tt = 0, Bt = ct.length; tt < Bt; tt += 1) Le = ct[tt], Ot = (Le[0] + xi) * ie, ii = xe(Ot, Dt, ei, at, ve, Ue, Oe), Wt = ht - (ii - ht), bi[Le[1]] = Tt(Wt), bi[Le[2]] = Tt(ii);
            return bi
        };

        function Ze(De) {
            var gt = ie * (218.316 + 13.176396 * De),
                Qt = ie * (134.963 + 13.064993 * De),
                Ve = ie * (93.272 + 13.22935 * De),
                Dt = gt + ie * 6.289 * z(Qt),
                ei = ie * 5.128 * z(Ve),
                xi = 385001 - 20905 * V(Qt);
            return {
                ra: Ke(Dt, ei),
                dec: Ye(Dt, ei),
                dist: xi
            }
        }
        Ei.getMoonPosition = function(De, gt, Qt) {
            var Ve = ie * -Qt,
                Dt = ie * gt,
                ei = Je(De),
                xi = Ze(ei),
                oe = $e(ei, Ve) - xi.ra,
                ve = di(oe, Dt, xi.dec),
                Ne = p(z(oe), Y(Dt) * V(xi.dec) - z(xi.dec) * V(oe));
            return ve = ve + vt(ve), {
                azimuth: jt(oe, Dt, xi.dec),
                altitude: ve,
                distance: xi.dist,
                parallacticAngle: Ne
            }
        }, Ei.getMoonIllumination = function(De) {
            var gt = Je(De || new Date),
                Qt = Li(gt),
                Ve = Ze(gt),
                Dt = 149598e3,
                ei = se(z(Qt.dec) * z(Ve.dec) + V(Qt.dec) * V(Ve.dec) * V(Qt.ra - Ve.ra)),
                xi = p(Dt * z(ei), Ve.dist - Dt * V(ei)),
                oe = p(V(Qt.dec) * z(Qt.ra - Ve.ra), z(Qt.dec) * V(Ve.dec) - V(Qt.dec) * z(Ve.dec) * V(Qt.ra - Ve.ra));
            return {
                fraction: (1 + V(xi)) / 2,
                phase: .5 + .5 * xi * (oe < 0 ? -1 : 1) / Math.PI,
                angle: oe
            }
        };

        function st(De, gt) {
            return new Date(De.valueOf() + gt * He / 24)
        }
        Ei.getMoonTimes = function(De, gt, Qt, Ve) {
            var Dt = new Date(De);
            Ve ? Dt.setUTCHours(0, 0, 0, 0) : Dt.setHours(0, 0, 0, 0);
            for (var ei = .133 * ie, xi = Ei.getMoonPosition(Dt, gt, Qt).altitude - ei, oe, ve, Ne, Ue, Oe, at, ht, tt, Bt, Le, Ot, ii, Wt, bi = 1; bi <= 24 && (oe = Ei.getMoonPosition(st(Dt, bi), gt, Qt).altitude - ei, ve = Ei.getMoonPosition(st(Dt, bi + 1), gt, Qt).altitude - ei, Oe = (xi + ve) / 2 - oe, at = (ve - xi) / 2, ht = -at / (2 * Oe), tt = (Oe * ht + at) * ht + oe, Bt = at * at - 4 * Oe * oe, Le = 0, Bt >= 0 && (Wt = Math.sqrt(Bt) / (Math.abs(Oe) * 2), Ot = ht - Wt, ii = ht + Wt, Math.abs(Ot) <= 1 && Le++, Math.abs(ii) <= 1 && Le++, Ot < -1 && (Ot = ii)), Le === 1 ? xi < 0 ? Ne = bi + Ot : Ue = bi + Ot : Le === 2 && (Ne = bi + (tt < 0 ? ii : Ot), Ue = bi + (tt < 0 ? Ot : ii)), !(Ne && Ue)); bi += 2) xi = ve;
            var Qi = {};
            return Ne && (Qi.rise = st(Dt, Ne)), Ue && (Qi.set = st(Dt, Ue)), !Ne && !Ue && (Qi[tt > 0 ? "alwaysUp" : "alwaysDown"] = !0), Qi
        }, ue.exports = Ei
    })()
})(xf);
var rm = xf.exports,
    bf = {
        exports: {}
    },
    wf = {
        exports: {}
    };
(function(ue, R) {
    var y = Ls,
        z = Xa,
        V = {
            material: "MeshBasicMaterial",
            color: "black",
            opacity: 1
        };

    function Y(C) {
        var p;
        C ? (C = y._validate(C, V), C.material && C.material.isMaterial ? p = C.material : C.material || C.color || C.opacity ? p = new z[C.material]({
            color: C.color,
            transparent: C.opacity < 1
        }) : p = se(), p.opacity = C.opacity, C.side && (p.side = C.side)) : p = se();

        function se() {
            return new z[V.material]({
                color: V.color
            })
        }
        return p
    }
    ue.exports = Y
})(wf);
var Vp = wf.exports,
    Ef = {
        exports: {}
    };
(function(ue, R) {
    const y = Xa,
        z = Ls;

    function V(C) {
        this.map = C, this.enrolledObjects = [], this.previousFrameTime
    }
    V.prototype = {
        unenroll: function(C) {
            this.enrolledObjects.splice(this.enrolledObjects.indexOf(C), 1)
        },
        enroll: function(C) {
            if (C.clock = new y.Clock, C.hasDefaultAnimation = !1, C.defaultAction, C.actions = [], C.mixer, C.animations && C.animations.length > 0) {
                C.hasDefaultAnimation = !0;
                let ie = C.userData.defaultAnimation ? C.userData.defaultAnimation : 0;
                C.mixer = new y.AnimationMixer(C), p(ie)
            }

            function p(ie) {
                for (let He = 0; He < C.animations.length; He++) {
                    ie > C.animations.length && console.log("The animation index " + ie + " doesn't exist for this object");
                    let be = C.animations[He],
                        Ee = C.mixer.clipAction(be);
                    C.actions.push(Ee), ie === He ? (C.defaultAction = Ee, Ee.setEffectiveWeight(1)) : Ee.setEffectiveWeight(0), Ee.play()
                }
            }
            let se = !1;
            Object.defineProperty(C, "isPlaying", {
                get() {
                    return se
                },
                set(ie) {
                    se != ie && (se = ie, C.dispatchEvent({
                        type: "IsPlayingChanged",
                        detail: C
                    }))
                }
            }), this.enrolledObjects.push(C), C.animationQueue = [], C.set = function(ie) {
                if (ie.duration > 0) {
                    let He = {
                        start: Date.now(),
                        expiration: Date.now() + ie.duration,
                        endState: {}
                    };
                    z.extend(ie, He);
                    let be = ie.coords,
                        Ee = ie.rotation,
                        Lt = ie.scale || ie.scaleX || ie.scaleY || ie.scaleZ;
                    if (Ee) {
                        let Je = C.rotation;
                        ie.startRotation = [Je.x, Je.y, Je.z], ie.endState.rotation = z.types.rotation(ie.rotation, ie.startRotation), ie.rotationPerMs = ie.endState.rotation.map(function(wt, Ke) {
                            return (wt - ie.startRotation[Ke]) / ie.duration
                        })
                    }
                    if (Lt) {
                        let Je = C.scale;
                        ie.startScale = [Je.x, Je.y, Je.z], ie.endState.scale = z.types.scale(ie.scale, ie.startScale), ie.scalePerMs = ie.endState.scale.map(function(wt, Ke) {
                            return (wt - ie.startScale[Ke]) / ie.duration
                        })
                    }
                    be && (ie.pathCurve = new y.CatmullRomCurve3(z.lnglatsToWorld([C.coordinates, ie.coords])));
                    let Tt = {
                        type: "set",
                        parameters: ie
                    };
                    this.animationQueue.push(Tt), tb.map.repaint = !0
                } else this.stop(), ie.rotation = z.radify(ie.rotation), this._setObject(ie);
                return this
            }, C.animationMethod = null, C.stop = function(ie) {
                return C.mixer && (C.isPlaying = !1, cancelAnimationFrame(C.animationMethod)), this.animationQueue = [], this
            }, C.followPath = function(ie, He) {
                let be = {
                    type: "followPath",
                    parameters: z._validate(ie, Y.followPath)
                };
                return z.extend(be.parameters, {
                    pathCurve: new y.CatmullRomCurve3(z.lnglatsToWorld(ie.path)),
                    start: Date.now(),
                    expiration: Date.now() + be.parameters.duration,
                    cb: He
                }), this.animationQueue.push(be), tb.map.repaint = !0, this
            }, C._setObject = function(ie) {
                C.setScale();
                let He = ie.position,
                    be = ie.rotation,
                    Ee = ie.scale,
                    Lt = ie.worldCoordinates,
                    Tt = ie.quaternion,
                    Je = ie.translate,
                    wt = ie.worldTranslate;
                if (He) {
                    this.coordinates = He;
                    let Ye = z.projectToWorld(He);
                    this.position.copy(Ye)
                }
                if (Je) {
                    this.coordinates = [this.coordinates[0] + Je[0], this.coordinates[1] + Je[1], this.coordinates[2] + Je[2]];
                    let Ye = z.projectToWorld(Je);
                    this.position.copy(Ye), ie.position = this.coordinates
                }
                if (wt) {
                    this.translateX(wt.x), this.translateY(wt.y), this.translateZ(wt.z);
                    let Ye = z.unprojectFromWorld(this.position);
                    this.coordinates = ie.position = Ye
                }
                if (be && (this.rotation.set(be[0], be[1], be[2]), ie.rotation = new y.Vector3(be[0], be[1], be[2])), Ee && (this.scale.set(Ee[0], Ee[1], Ee[2]), ie.scale = this.scale), Tt && (this.quaternion.setFromAxisAngle(Tt[0], Tt[1]), ie.rotation = Tt[0].multiplyScalar(Tt[1])), Lt) {
                    this.position.copy(Lt);
                    let Ye = z.unprojectFromWorld(Lt);
                    this.coordinates = ie.position = Ye
                }
                this.setBoundingBoxShadowFloor(), this.setReceiveShadowFloor(), this.updateMatrixWorld(), tb.map.repaint = !0;
                let Ke = {
                    type: "ObjectChanged",
                    detail: {
                        object: this,
                        action: {
                            position: ie.position,
                            rotation: ie.rotation,
                            scale: ie.scale
                        }
                    }
                };
                this.dispatchEvent(Ke)
            }, C.playDefault = function(ie) {
                if (C.mixer && C.hasDefaultAnimation) {
                    let He = {
                        start: Date.now(),
                        expiration: Date.now() + ie.duration,
                        endState: {}
                    };
                    z.extend(ie, He), C.mixer.timeScale = ie.speed || 1;
                    let be = {
                        type: "playDefault",
                        parameters: ie
                    };
                    return this.animationQueue.push(be), tb.map.repaint = !0, this
                }
            }, C.playAnimation = function(ie) {
                C.mixer && (ie.animation && p(ie.animation), C.playDefault(ie))
            }, C.pauseAllActions = function() {
                C.mixer && C.actions.forEach(function(ie) {
                    ie.paused = !0
                })
            }, C.unPauseAllActions = function() {
                C.mixer && C.actions.forEach(function(ie) {
                    ie.paused = !1
                })
            }, C.deactivateAllActions = function() {
                C.mixer && C.actions.forEach(function(ie) {
                    ie.stop()
                })
            }, C.activateAllActions = function() {
                C.mixer && C.actions.forEach(function(ie) {
                    ie.play()
                })
            }, C.idle = function() {
                return C.mixer && C.mixer.update(.01), tb.map.repaint = !0, this
            }
        },
        update: function(C) {
            if (this.previousFrameTime === void 0 && (this.previousFrameTime = C), !this.enrolledObjects) return !1;
            for (let p = this.enrolledObjects.length - 1; p >= 0; p--) {
                let se = this.enrolledObjects[p];
                if (!(!se.animationQueue || se.animationQueue.length === 0))
                    for (let ie = se.animationQueue.length - 1; ie >= 0; ie--) {
                        let He = se.animationQueue[ie];
                        if (!He) continue;
                        let be = He.parameters;
                        if (!be.expiration) {
                            se.animationQueue.splice(ie, 1), se.animationQueue[ie] && (se.animationQueue[ie].parameters.start = C);
                            return
                        }
                        if (C >= be.expiration) be.expiration = !1, He.type === "playDefault" ? se.stop() : (be.endState && se._setObject(be.endState), typeof be.cb != "undefined" && be.cb());
                        else {
                            let Lt = (C - be.start) / be.duration;
                            if (He.type === "set") {
                                let Tt = {};
                                be.pathCurve && (Tt.worldCoordinates = be.pathCurve.getPoint(Lt)), be.rotationPerMs && (Tt.rotation = be.startRotation.map(function(Je, wt) {
                                    return Je + be.rotationPerMs[wt] * Lt * be.duration
                                })), be.scalePerMs && (Tt.scale = be.startScale.map(function(Je, wt) {
                                    return Je + be.scalePerMs[wt] * Lt * be.duration
                                })), se._setObject(Tt)
                            }
                            if (He.type === "followPath") {
                                let Je = {
                                    worldCoordinates: be.pathCurve.getPointAt(Lt)
                                };
                                if (be.trackHeading) {
                                    let wt = be.pathCurve.getTangentAt(Lt).normalize(),
                                        Ke = new y.Vector3(0, 0, 0),
                                        Ye = new y.Vector3(0, 1, 0);
                                    Ke.crossVectors(Ye, wt).normalize();
                                    let jt = Math.acos(Ye.dot(wt));
                                    Je.quaternion = [Ke, jt]
                                }
                                se._setObject(Je)
                            }
                            He.type === "playDefault" && (se.activateAllActions(), se.isPlaying = !0, se.animationMethod = requestAnimationFrame(this.update), se.mixer.update(se.clock.getDelta()), tb.map.repaint = !0)
                        }
                    }
            }
            this.previousFrameTime = C
        }
    };
    const Y = {
        followPath: {
            path: null,
            duration: 1e3,
            trackHeading: !0
        }
    };
    ue.exports = V
})(Ef);
var am = Ef.exports,
    Sf = {
        exports: {}
    };
(function(ue, R) {
    const y = Xa;
    y.CSS2DObject = function(z) {
        y.Object3D.call(this), this.element = z || document.createElement("div"), this.element.style.position = "absolute", this.alwaysVisible = !1, Object.defineProperty(this, "layer", {
            get() {
                return this.parent && this.parent.parent ? this.parent.parent.layer : null
            }
        }), this.dispose = function() {
            this.remove(), this.element = null
        }, this.remove = function() {
            this.element instanceof Element && this.element.parentNode !== null && this.element.parentNode.removeChild(this.element)
        }, this.addEventListener("removed", function() {
            this.remove()
        })
    }, y.CSS2DObject.prototype = Object.assign(Object.create(y.Object3D.prototype), {
        constructor: y.CSS2DObject,
        copy: function(z, V) {
            return y.Object3D.prototype.copy.call(this, z, V), this.element = z.element.cloneNode(!0), this
        }
    }), y.CSS2DRenderer = function() {
        var z = this,
            V, Y, C, p, se = new y.Vector3,
            ie = new y.Matrix4,
            He = new y.Matrix4,
            be = {
                objects: new WeakMap,
                list: new Map
            };
        this.cacheList = be.list;
        var Ee = document.createElement("div");
        Ee.style.overflow = "hidden", this.domElement = Ee, this.getSize = function() {
            return {
                width: V,
                height: Y
            }
        }, this.setSize = function(wt, Ke) {
            V = wt, Y = Ke, C = V / 2, p = Y / 2, Ee.style.width = wt + "px", Ee.style.height = Ke + "px"
        }, this.renderObject = function(wt, Ke, Ye) {
            if (wt instanceof y.CSS2DObject)
                if (!wt.visible) be.objects.delete({
                    key: wt.uuid
                }), be.list.delete(wt.uuid), wt.remove();
                else {
                    wt.onBeforeRender(z, Ke, Ye), se.setFromMatrixPosition(wt.matrixWorld), se.applyMatrix4(He);
                    var jt = wt.element,
                        di = "translate(-50%,-50%) translate(" + (se.x * C + C) + "px," + (-se.y * p + p) + "px)";
                    jt.style.WebkitTransform = di, jt.style.MozTransform = di, jt.style.oTransform = di, jt.style.transform = di, jt.style.display = wt.visible && se.z >= -1 && se.z <= 1 ? "" : "none";
                    var $e = {
                        distanceToCameraSquared: Lt(Ye, wt)
                    };
                    be.objects.set({
                        key: wt.uuid
                    }, $e), be.list.set(wt.uuid, wt), jt.parentNode !== Ee && Ee.appendChild(jt), wt.onAfterRender(z, Ke, Ye)
                } for (var vt = 0, Kt = wt.children.length; vt < Kt; vt++) this.renderObject(wt.children[vt], Ke, Ye)
        };
        var Lt = function() {
                var wt = new y.Vector3,
                    Ke = new y.Vector3;
                return function(Ye, jt) {
                    return wt.setFromMatrixPosition(Ye.matrixWorld), Ke.setFromMatrixPosition(jt.matrixWorld), wt.distanceToSquared(Ke)
                }
            }(),
            Tt = function(wt) {
                var Ke = [];
                return wt.traverse(function(Ye) {
                    Ye instanceof y.CSS2DObject && Ke.push(Ye)
                }), Ke
            },
            Je = function(wt) {
                for (var Ke = Tt(wt).sort(function($e, vt) {
                        let Kt = be.objects.get({
                                key: $e.uuid
                            }),
                            vi = be.objects.get({
                                key: vt.uuid
                            });
                        if (Kt && vi) {
                            var Li = Kt.distanceToCameraSquared,
                                Ei = vi.distanceToCameraSquared;
                            return Li - Ei
                        }
                    }), Ye = Ke.length, jt = 0, di = Ke.length; jt < di; jt++) Ke[jt].element.style.zIndex = Ye - jt
            };
        this.render = function(wt, Ke) {
            wt.autoUpdate === !0 && wt.updateMatrixWorld(), Ke.parent === null && Ke.updateMatrixWorld(), ie.copy(Ke.matrixWorldInverse), He.multiplyMatrices(Ke.projectionMatrix, ie), this.renderObject(wt, wt, Ke), Je(wt)
        }
    }, ue.exports = {
        CSS2DRenderer: y.CSS2DRenderer,
        CSS2DObject: y.CSS2DObject
    }
})(Sf);
var vp = Sf.exports;
(function(ue, R) {
    const y = Ls,
        z = Xa,
        V = am,
        Y = vp;

    function C() {}
    C.prototype = {
        line: function(p) {
            p = y._validate(p, this._defaults.line);
            var se = y.lnglatsToWorld(p.geometry),
                ie = y.normalizeVertices(se),
                He = y.flattenVectors(ie.vertices),
                be = new Float32Array(He),
                Ee = new z.BufferGeometry;
            Ee.setAttribute("position", new z.BufferAttribute(be, 3));
            var Lt = new z.LineBasicMaterial({
                    color: 16711680,
                    linewidth: 21
                }),
                Tt = new z.Line(Ee, Lt);
            return Tt.options = options || {}, Tt.position.copy(ie.position), Tt
        },
        extrusion: function(p) {},
        unenroll: function(p, se) {
            var ie = this;
            se || ie.animationManager.unenroll(p)
        },
        _addMethods: function(p, se) {
            var ie = this;
            const He = "label",
                be = "tooltip",
                Ee = "help",
                Lt = "shadowPlane";
            if (!se) {
                let Ke = function(ct, je, li, O) {
                        let K = y.radify(O);
                        ct.position.sub(je), ct.position.applyAxisAngle(li, K), ct.position.add(je), ct.rotateOnAxis(li, K), tb.map.repaint = !0
                    },
                    Ei = function(ct) {
                        return Math.pow(2, ct)
                    };
                var Je = Ke,
                    wt = Ei;
                p.coordinates || (p.coordinates = [0, 0, 0]), Object.defineProperty(p, "model", {
                    get() {
                        return p.getObjectByName("model")
                    }
                }), Object.defineProperty(p, "animations", {
                    get() {
                        const ct = p.model;
                        return ct ? ct.animations : null
                    }
                }), ie.animationManager.enroll(p), p.setCoords = function(ct) {
                    return p.userData.topMargin && p.userData.feature && (ct[2] += ((p.userData.feature.properties.height || 0) - (p.userData.feature.properties.base_height || p.userData.feature.properties.min_height || 0)) * (p.userData.topMargin || 0)), p.coordinates = ct, p.set({
                        position: ct
                    }), p
                }, p.setTranslate = function(ct) {
                    return p.set({
                        translate: ct
                    }), p
                }, p.setRotation = function(ct) {
                    typeof ct == "number" && (ct = {
                        z: ct
                    });
                    var je = {
                        x: y.radify(ct.x) || p.rotation.x,
                        y: y.radify(ct.y) || p.rotation.y,
                        z: y.radify(ct.z) || p.rotation.z
                    };
                    p._setObject({
                        rotation: [je.x, je.y, je.z]
                    })
                }, p.calculateAdjustedPosition = function(ct, je, li) {
                    let O = ct.slice(),
                        K = y.unprojectFromWorld(p.modelSize);
                    return li ? (O[0] -= je.x != 0 ? K[0] / je.x : 0, O[1] -= je.y != 0 ? K[1] / je.y : 0, O[2] -= je.z != 0 ? K[2] / je.z : 0) : (O[0] += je.x != 0 ? K[0] / je.x : 0, O[1] += je.y != 0 ? K[1] / je.y : 0, O[2] += je.z != 0 ? K[2] / je.z : 0), O
                }, p.setRotationAxis = function(ct) {
                    typeof ct == "number" && (ct = {
                        z: ct
                    });
                    let je = p.modelBox(),
                        li = new z.Vector3(je.max.x, je.max.y, je.min.z);
                    ct.x != 0 && Ke(p, li, new z.Vector3(0, 0, 1), ct.x), ct.y != 0 && Ke(p, li, new z.Vector3(0, 0, 1), ct.y), ct.z != 0 && Ke(p, li, new z.Vector3(0, 0, 1), ct.z)
                }, Object.defineProperty(p, "scaleGroup", {
                    get() {
                        return p.getObjectByName("scaleGroup")
                    }
                }), Object.defineProperty(p, "boxGroup", {
                    get() {
                        return p.getObjectByName("boxGroup")
                    }
                }), Object.defineProperty(p, "boundingBox", {
                    get() {
                        return p.getObjectByName("boxModel")
                    }
                }), Object.defineProperty(p, "boundingBoxShadow", {
                    get() {
                        return p.getObjectByName("boxShadow")
                    }
                }), p.drawBoundingBox = function() {
                    let ct = p.box3(),
                        je = new z.Group;
                    je.name = "boxGroup", je.updateMatrixWorld(!0);
                    let li = new z.Box3Helper(ct, C.prototype._defaults.colors.yellow);
                    li.name = "boxModel", je.add(li), li.layers.disable(0);
                    let O = ct.clone();
                    O.max.z = O.min.z;
                    let K = new z.Box3Helper(O, C.prototype._defaults.colors.black);
                    K.name = "boxShadow", je.add(K), K.layers.disable(0), je.visible = !1, p.scaleGroup.add(je), p.setBoundingBoxShadowFloor()
                }, p.setBoundingBoxShadowFloor = function() {
                    if (p.boundingBoxShadow) {
                        let ct = -p.modelHeight,
                            je = p.rotation,
                            li = p.boundingBoxShadow;
                        li.box.max.z = li.box.min.z = ct, li.rotation.y = je.y, li.rotation.x = -je.x
                    }
                }, p.setAnchor = function(ct) {
                    const je = p.box3(),
                        li = je.getCenter(new z.Vector3);
                    switch (p.none = {
                            x: 0,
                            y: 0,
                            z: 0
                        }, p.center = {
                            x: li.x,
                            y: li.y,
                            z: je.min.z
                        }, p.bottom = {
                            x: li.x,
                            y: je.max.y,
                            z: je.min.z
                        }, p.bottomLeft = {
                            x: je.max.x,
                            y: je.max.y,
                            z: je.min.z
                        }, p.bottomRight = {
                            x: je.min.x,
                            y: je.max.y,
                            z: je.min.z
                        }, p.top = {
                            x: li.x,
                            y: je.min.y,
                            z: je.min.z
                        }, p.topLeft = {
                            x: je.max.x,
                            y: je.min.y,
                            z: je.min.z
                        }, p.topRight = {
                            x: je.min.x,
                            y: je.min.y,
                            z: je.min.z
                        }, p.left = {
                            x: je.max.x,
                            y: li.y,
                            z: je.min.z
                        }, p.right = {
                            x: je.min.x,
                            y: li.y,
                            z: je.min.z
                        }, ct) {
                        case "center":
                            p.anchor = p.center;
                            break;
                        case "top":
                            p.anchor = p.top;
                            break;
                        case "top-left":
                            p.anchor = p.topLeft;
                            break;
                        case "top-right":
                            p.anchor = p.topRight;
                            break;
                        case "left":
                            p.anchor = p.left;
                            break;
                        case "right":
                            p.anchor = p.right;
                            break;
                        case "bottom":
                            p.anchor = p.bottom;
                            break;
                        case "bottom-left":
                        default:
                            p.anchor = p.bottomLeft;
                            break;
                        case "bottom-right":
                            p.anchor = p.bottomRight;
                            break;
                        case "auto":
                        case "none":
                            p.anchor = p.none
                    }
                    p.model.position.set(-p.anchor.x, -p.anchor.y, -p.anchor.z)
                }, p.setCenter = function(ct) {
                    if (ct && (ct.x != 0 || ct.y != 0 || ct.z != 0)) {
                        let je = p.getSize();
                        p.anchor = {
                            x: p.anchor.x - je.x * ct.x,
                            y: p.anchor.y - je.y * ct.y,
                            z: p.anchor.z - je.z * ct.z
                        }, p.model.position.set(-p.anchor.x, -p.anchor.y, -p.anchor.z)
                    }
                }, Object.defineProperty(p, "label", {
                    get() {
                        return p.getObjectByName(He)
                    }
                }), Object.defineProperty(p, "tooltip", {
                    get() {
                        return p.getObjectByName(be)
                    }
                }), Object.defineProperty(p, "help", {
                    get() {
                        return p.getObjectByName(Ee)
                    }
                }), Object.defineProperty(p, "visibility", {
                    get() {
                        return p.visible
                    },
                    set(ct) {
                        let je = ct;
                        if (ct == "visible" || ct == !0) je = !0, p.label && (p.label.visible = je);
                        else if (ct == "none" || ct == !1) je = !1, p.label && p.label.alwaysVisible && (p.label.visible = je), p.tooltip && (p.tooltip.visible = je);
                        else return;
                        p.visible != je && (p.visible = je, p.model && p.model.traverse(function(li) {
                            (li.type == "Mesh" || li.type == "SkinnedMesh") && (je && p.raycasted ? li.layers.enable(0) : li.layers.disable(0)), li.type == "LineSegments" && li.layers.disableAll()
                        }))
                    }
                }), p.addLabel = function(ct, je, li, O) {
                    ct && p.drawLabelHTML(ct, je, li, O)
                }, p.removeLabel = function() {
                    p.removeCSS2D(He)
                }, p.drawLabelHTML = function(ct, je = !1, li = p.anchor, O = .5) {
                    let K = ie.drawLabelHTML(ct, C.prototype._defaults.label.cssClass),
                        ae = p.addCSS2D(K, He, li, O);
                    return ae.alwaysVisible = je, ae.visible = je, ae
                }, p.addTooltip = function(ct, je, li, O = !0, K = 1) {
                    let ae = p.addHelp(ct, be, je, li, K);
                    ae.visible = !1, ae.custom = O
                }, p.removeTooltip = function() {
                    p.removeCSS2D(be)
                }, p.addHelp = function(ct, je = Ee, li = !1, O = p.anchor, K = 0) {
                    let ae = ie.drawTooltip(ct, li),
                        _e = p.addCSS2D(ae, je, O, K);
                    return _e.visible = !0, _e
                }, p.removeHelp = function() {
                    p.removeCSS2D(Ee)
                }, p.addCSS2D = function(ct, je, li = p.anchor, O = 1) {
                    if (ct) {
                        const K = p.box3(),
                            ae = K.getSize(new z.Vector3);
                        let _e = {
                            x: K.max.x,
                            y: K.max.y,
                            z: K.min.z
                        };
                        p.removeCSS2D(je);
                        let xe = new Y.CSS2DObject(ct);
                        return xe.name = je, xe.position.set(-ae.x * .5 - p.model.position.x - li.x + _e.x, -ae.y * .5 - p.model.position.y - li.y + _e.y, ae.z * O), xe.visible = !1, p.scaleGroup.add(xe), xe
                    }
                }, p.removeCSS2D = function(ct) {
                    let je = p.getObjectByName(ct);
                    if (je) {
                        je.dispose();
                        let li = p.scaleGroup.children;
                        li.splice(li.indexOf(je), 1)
                    }
                }, Object.defineProperty(p, "shadowPlane", {
                    get() {
                        return p.getObjectByName(Lt)
                    }
                });
                let Ye = !1;
                Object.defineProperty(p, "castShadow", {
                    get() {
                        return Ye
                    },
                    set(ct) {
                        if (!(!p.model || Ye === ct)) {
                            if (p.model.traverse(function(je) {
                                    je.isMesh && (je.castShadow = !0)
                                }), ct) {
                                const je = p.modelSize,
                                    li = [je.x, je.y, je.z, p.modelHeight],
                                    O = Math.max(...li) * 10,
                                    K = new z.PlaneBufferGeometry(O, O),
                                    ae = new z.ShadowMaterial;
                                ae.opacity = .5;
                                let _e = new z.Mesh(K, ae);
                                _e.name = Lt, _e.layers.enable(1), _e.layers.disable(0), _e.receiveShadow = ct, p.add(_e)
                            } else p.traverse(function(je) {
                                je.isMesh && je.material instanceof z.ShadowMaterial && p.remove(je)
                            });
                            Ye = ct
                        }
                    }
                }), p.setReceiveShadowFloor = function() {
                    if (p.castShadow) {
                        let ct = p.shadowPlane,
                            je = ct.position,
                            li = ct.rotation;
                        if (je.z = -p.modelHeight, li.y = p.rotation.y, li.x = -p.rotation.x, p.userData.units === "meters") {
                            const O = p.modelSize,
                                K = [O.x, O.y, O.z, -je.z],
                                _e = Math.max(...K) * 10 / ct.geometry.parameters.width;
                            ct.scale.set(_e, _e, _e)
                        }
                    }
                };
                let jt = !1;
                Object.defineProperty(p, "receiveShadow", {
                    get() {
                        return jt
                    },
                    set(ct) {
                        !p.model || jt === ct || (p.model.traverse(function(je) {
                            je.isMesh && (je.receiveShadow = !0)
                        }), jt = ct)
                    }
                });
                let di = !1;
                Object.defineProperty(p, "wireframe", {
                    get() {
                        return di
                    },
                    set(ct) {
                        !p.model || di === ct || (p.model.traverse(function(je) {
                            if (je.type == "Mesh" || je.type == "SkinnedMesh") {
                                let li = [];
                                Array.isArray(je.material) ? li = je.material : li.push(je.material);
                                let O = li[0];
                                ct ? (je.userData.materials = O, je.material = O.clone(), je.material.wireframe = je.material.transparent = ct, je.material.opacity = .3) : (je.material.dispose(), je.material = je.userData.materials, je.userData.materials.dispose(), je.userData.materials = null), ct ? (je.layers.disable(0), je.layers.enable(1)) : (je.layers.disable(1), je.layers.enable(0))
                            }
                            je.type == "LineSegments" && je.layers.disableAll()
                        }), di = ct, p.dispatchEvent({
                            type: "Wireframed",
                            detail: p
                        }))
                    }
                });
                let $e = null;
                Object.defineProperty(p, "color", {
                    get() {
                        return $e
                    },
                    set(ct) {
                        !p.model || $e === ct || (p.model.traverse(function(je) {
                            if (je.type == "Mesh" || je.type == "SkinnedMesh") {
                                let li = [];
                                Array.isArray(je.material) ? li = je.material : li.push(je.material);
                                let O = li[0];
                                ct ? (je.userData.materials = O, je.material = new z.MeshStandardMaterial, je.material.color.setHex(ct)) : (je.material.dispose(), je.material = je.userData.materials, je.userData.materials.dispose(), je.userData.materials = null)
                            }
                        }), $e = ct)
                    }
                });
                let vt = !1;
                Object.defineProperty(p, "selected", {
                    get() {
                        return vt
                    },
                    set(ct) {
                        ct ? (p.userData.bbox && !p.boundingBox && p.drawBoundingBox(), p.boxGroup && (p.boundingBox.material = C.prototype._defaults.materials.boxSelectedMaterial, p.boundingBox.parent.visible = !0, p.boundingBox.layers.enable(1), p.boundingBoxShadow.layers.enable(1)), p.label && !p.label.alwaysVisible && (p.label.visible = !0)) : (p.boxGroup && p.remove(p.boxGroup), p.label && !p.label.alwaysVisible && (p.label.visible = !1), p.removeHelp()), p.tooltip && (p.tooltip.visible = ct), vt != ct && (vt = ct, p.dispatchEvent({
                            type: "SelectedChange",
                            detail: p
                        }))
                    }
                });
                let Kt = !0;
                Object.defineProperty(p, "raycasted", {
                    get() {
                        return Kt
                    },
                    set(ct) {
                        !p.model || Kt === ct || (p.model.traverse(function(je) {
                            (je.type == "Mesh" || je.type == "SkinnedMesh") && (ct ? (je.layers.disable(1), je.layers.enable(0)) : (je.layers.disable(0), je.layers.enable(1)))
                        }), Kt = ct)
                    }
                });
                let vi = !1;
                Object.defineProperty(p, "over", {
                    get() {
                        return vi
                    },
                    set(ct) {
                        ct ? (p.selected || (p.userData.bbox && !p.boundingBox && p.drawBoundingBox(), p.userData.tooltip && !p.tooltip && p.addTooltip(p.uuid, !0, p.anchor, !1), p.boxGroup && (p.boundingBox.material = C.prototype._defaults.materials.boxOverMaterial, p.boundingBox.parent.visible = !0, p.boundingBox.layers.enable(1), p.boundingBoxShadow.layers.enable(1))), p.label && !p.label.alwaysVisible && (p.label.visible = !0), p.dispatchEvent({
                            type: "ObjectMouseOver",
                            detail: p
                        })) : (p.selected || (p.boxGroup && (p.remove(p.boxGroup), p.tooltip && !p.tooltip.custom && p.removeTooltip()), p.label && !p.label.alwaysVisible && (p.label.visible = !1)), p.dispatchEvent({
                            type: "ObjectMouseOut",
                            detail: p
                        })), p.tooltip && (p.tooltip.visible = ct || p.selected), vi = ct
                    }
                }), p.box3 = function() {
                    p.updateMatrix(), p.updateMatrixWorld(!0, !0);
                    let ct;
                    if (p.model) {
                        let je = p.clone(!0),
                            li = p.model.clone();
                        if (ct = new z.Box3().setFromObject(li), p.parent) {
                            let O = new z.Matrix4,
                                K = new z.Matrix4;
                            p.matrix.extractRotation(O), K.copy(O).invert(), je.setRotationFromMatrix(K), ct = new z.Box3().setFromObject(li)
                        }
                    }
                    return ct
                }, p.modelBox = function() {
                    return p.box3()
                }, p.getSize = function() {
                    return p.box3().getSize(new z.Vector3(0, 0, 0))
                };
                let Li = !1;
                Object.defineProperty(p, "modelSize", {
                    get() {
                        return Li = p.getSize(), Li
                    },
                    set(ct) {
                        Li != ct && (Li = ct)
                    }
                }), Object.defineProperty(p, "modelHeight", {
                    get() {
                        let ct = p.coordinates[2] || 0;
                        return p.userData.units === "scene" && (ct *= p.unitsPerMeter / p.scale.x), ct
                    }
                }), Object.defineProperty(p, "unitsPerMeter", {
                    get() {
                        return Number(y.projectedUnitsPerMeter(p.coordinates[1]).toFixed(7))
                    }
                }), Object.defineProperty(p, "fixedZoom", {
                    get() {
                        return p.userData.fixedZoom
                    },
                    set(ct) {
                        p.userData.fixedZoom !== ct && (p.userData.fixedZoom = ct, p.userData.units = ct ? "scene" : "meters")
                    }
                }), p.setFixedZoom = function(ct) {
                    if (p.fixedZoom != null) {
                        ct || (ct = p.userData.mapScale);
                        let je = Ei(p.fixedZoom);
                        if (je > ct) {
                            let li = je / ct;
                            p.scale.set(li, li, li)
                        } else p.scale.set(1, 1, 1)
                    }
                }, p.setScale = function(ct) {
                    if (p.userData.units === "meters" && !p.fixedZoom) {
                        let je = p.unitsPerMeter;
                        p.scale.set(je, je, je)
                    } else p.fixedZoom ? (ct && (p.userData.mapScale = ct), p.setFixedZoom(p.userData.mapScale)) : p.scale.set(1, 1, 1)
                }, p.setObjectScale = function(ct) {
                    p.setScale(ct), p.setBoundingBoxShadowFloor(), p.setReceiveShadowFloor()
                }
            }
            p.add = function(Ke) {
                return p.scaleGroup.add(Ke), Ke.position.z = p.coordinates[2] ? -p.coordinates[2] : 0, Ke
            }, p.remove = function(Ke) {
                Ke && (Ke.traverse(Ye => {
                    if (Ye.geometry && Ye.geometry.dispose(), Ye.material)
                        if (Ye.material.isMaterial) Tt(Ye.material);
                        else
                            for (const jt of Ye.material) Tt(jt);
                    Ye.dispose && Ye.dispose()
                }), p.scaleGroup.remove(Ke), tb.map.repaint = !0)
            }, p.duplicate = function(Ke) {
                let Ye = p.clone(!0);
                if (Ye.getObjectByName("model").animations = p.animations, Ye.userData.feature && (Ke && Ke.feature && (Ye.userData.feature = Ke.feature), Ye.userData.feature.properties.uuid = Ye.uuid), ie._addMethods(Ye), !Ke || y.equal(Ke.scale, p.userData.scale)) return Ye.copyAnchor(p), Ye;
                {
                    Ye.userData = Ke, Ye.userData.isGeoGroup = !0, Ye.remove(Ye.boxGroup);
                    const jt = y.types.rotation(Ke.rotation, [0, 0, 0]),
                        di = y.types.scale(Ke.scale, [1, 1, 1]);
                    return Ye.model.position.set(0, 0, 0), Ye.model.rotation.set(jt[0], jt[1], jt[2]), Ye.model.scale.set(di[0], di[1], di[2]), Ye.setAnchor(Ke.anchor), Ye.setCenter(Ke.adjustment), Ye
                }
            }, p.copyAnchor = function(Ke) {
                p.anchor = Ke.anchor, p.none = {
                    x: 0,
                    y: 0,
                    z: 0
                }, p.center = Ke.center, p.bottom = Ke.bottom, p.bottomLeft = Ke.bottomLeft, p.bottomRight = Ke.bottomRight, p.top = Ke.top, p.topLeft = Ke.topLeft, p.topRight = Ke.topRight, p.left = Ke.left, p.right = Ke.right
            }, p.dispose = function() {
                C.prototype.unenroll(p), p.traverse(Ke => {
                    if (!(Ke.parent && Ke.parent.name == "world") && Ke.name !== "threeboxObject") {
                        if (Ke.geometry && Ke.geometry.dispose(), Ke.material)
                            if (Ke.material.isMaterial) Tt(Ke.material);
                            else
                                for (const Ye of Ke.material) Tt(Ye);
                        Ke.dispose && Ke.dispose()
                    }
                }), p.children = []
            };
            const Tt = Ke => {
                Ke.dispose();
                for (const di of Object.keys(Ke)) {
                    const $e = Ke[di];
                    $e && typeof $e == "object" && "minFilter" in $e && $e.dispose()
                }
                let Ye = Ke;
                (Ye.map || Ye.alphaMap || Ye.aoMap || Ye.bumpMap || Ye.displacementMap || Ye.emissiveMap || Ye.envMap || Ye.lightMap || Ye.metalnessMap || Ye.normalMap || Ye.roughnessMap) && (Ye.map && Ye.map.dispose(), Ye.alphaMap && Ye.alphaMap.dispose(), Ye.aoMap && Ye.aoMap.dispose(), Ye.bumpMap && Ye.bumpMap.dispose(), Ye.displacementMap && Ye.displacementMap.dispose(), Ye.emissiveMap && Ye.emissiveMap.dispose(), Ye.envMap && Ye.envMap.dispose(), Ye.lightMap && Ye.lightMap.dispose(), Ye.metalnessMap && Ye.metalnessMap.dispose(), Ye.normalMap && Ye.normalMap.dispose(), Ye.roughnessMap && Ye.roughnessMap.dispose())
            };
            return p
        },
        _makeGroup: function(p, se) {
            let ie = new z.Group;
            ie.name = "scaleGroup", ie.add(p);
            var He = new z.Group;
            He.userData = se || {}, He.userData.isGeoGroup = !0, He.userData.feature && (He.userData.feature.properties.uuid = He.uuid);
            var be = ie.length;
            if (be)
                for (o of ie) He.add(o);
            else He.add(ie);
            return He.name = "threeboxObject", He
        },
        animationManager: new V,
        drawTooltip: function(p, se = !1) {
            if (p) {
                let ie;
                if (se) {
                    let He = document.createElement("div");
                    He.className = "mapboxgl-popup-content";
                    let be = document.createElement("strong");
                    be.innerHTML = p, He.appendChild(be);
                    let Ee = document.createElement("div");
                    Ee.className = "mapboxgl-popup-tip";
                    let Lt = document.createElement("div");
                    Lt.className = "marker mapboxgl-popup-anchor-bottom", Lt.appendChild(Ee), Lt.appendChild(He), ie = document.createElement("div"), ie.className += "label3D", ie.appendChild(Lt)
                } else ie = document.createElement("span"), ie.className = this._defaults.tooltip.cssClass, ie.innerHTML = p;
                return ie
            }
        },
        drawLabelHTML: function(p, se) {
            let ie = document.createElement("div");
            return ie.className += se, typeof p == "string" ? ie.innerHTML = p : ie.innerHTML = p.outerHTML, ie
        },
        _defaults: {
            colors: {
                red: new z.Color(16711680),
                yellow: new z.Color(16776960),
                green: new z.Color(65280),
                black: new z.Color(0)
            },
            materials: {
                boxNormalMaterial: new z.LineBasicMaterial({
                    color: new z.Color(16711680)
                }),
                boxOverMaterial: new z.LineBasicMaterial({
                    color: new z.Color(16776960)
                }),
                boxSelectedMaterial: new z.LineBasicMaterial({
                    color: new z.Color(65280)
                })
            },
            line: {
                geometry: null,
                color: "black",
                width: 1,
                opacity: 1
            },
            label: {
                htmlElement: null,
                cssClass: " label3D",
                alwaysVisible: !1,
                topMargin: -.5
            },
            tooltip: {
                text: "",
                cssClass: "toolTip text-xs",
                mapboxStyle: !1,
                topMargin: 0
            },
            sphere: {
                position: [0, 0, 0],
                radius: 1,
                sides: 20,
                units: "scene",
                material: "MeshBasicMaterial",
                anchor: "bottom-left",
                bbox: !0,
                tooltip: !0,
                raycasted: !0
            },
            tube: {
                geometry: null,
                radius: 1,
                sides: 6,
                units: "scene",
                material: "MeshBasicMaterial",
                anchor: "center",
                bbox: !0,
                tooltip: !0,
                raycasted: !0
            },
            loadObj: {
                type: null,
                obj: null,
                units: "scene",
                scale: 1,
                rotation: 0,
                defaultAnimation: 0,
                anchor: "bottom-left",
                bbox: !0,
                tooltip: !0,
                raycasted: !0
            },
            Object3D: {
                obj: null,
                units: "scene",
                anchor: "bottom-left",
                bbox: !0,
                tooltip: !0,
                raycasted: !0
            },
            extrusion: {
                coordinates: [
                    [
                        []
                    ]
                ],
                geometryOptions: {},
                height: 100,
                materials: null,
                scale: 1,
                rotation: 0,
                units: "scene",
                anchor: "center",
                bbox: !0,
                tooltip: !0,
                raycasted: !0
            }
        },
        geometries: {
            line: ["LineString"],
            tube: ["LineString"],
            sphere: ["Point"]
        }
    }, ue.exports = C
})(bf);
var zl = bf.exports,
    Af = {
        exports: {}
    },
    Tf = {
        exports: {}
    };
(function(ue, R) {
    const y = zl,
        z = Ls;

    function V(Y) {
        Y = z._validate(Y, y.prototype._defaults.Object3D);
        let C = Y.obj;
        const p = z.types.rotation(Y.rotation, [0, 0, 0]),
            se = z.types.scale(Y.scale, [1, 1, 1]);
        C.rotation.set(p[0], p[1], p[2]), C.scale.set(se[0], se[1], se[2]), C.name = "model";
        let ie = y.prototype._makeGroup(C, Y);
        return Y.obj.name = "model", y.prototype._addMethods(ie), ie.setAnchor(Y.anchor), ie.setCenter(Y.adjustment), ie.raycasted = Y.raycasted, ie.visibility = !0, ie
    }
    ue.exports = V
})(Tf);
var _p = Tf.exports;
(function(ue, R) {
    const y = Ls,
        z = Vp,
        V = zl,
        Y = _p;

    function C(p) {
        p = y._validate(p, V.prototype._defaults.sphere);
        let se = new THREE.SphereBufferGeometry(p.radius, p.sides, p.sides),
            ie = z(p),
            He = new THREE.Mesh(se, ie);
        return new Y({
            obj: He,
            units: p.units,
            anchor: p.anchor,
            adjustment: p.adjustment,
            bbox: p.bbox,
            tooltip: p.tooltip,
            raycasted: p.raycasted
        })
    }
    ue.exports = C
})(Af);
var sm = Af.exports,
    Mf = {
        exports: {}
    };
(function(ue, R) {
    const y = zl,
        z = Ls,
        V = Xa,
        Y = _p;

    function C(p) {
        p = z._validate(p, y.prototype._defaults.extrusion);
        let se = C.prototype.buildShape(p.coordinates),
            ie = C.prototype.buildGeometry(se, p.geometryOptions),
            He = new V.Mesh(ie, p.materials);
        return p.obj = He, new Y(p)
    }
    C.prototype = {
        buildShape: function(p) {
            if (p[0] instanceof(V.Vector2 || V.Vector3)) return new V.Shape(p);
            let se = new V.Shape;
            for (let ie = 0; ie < p.length; ie++) ie === 0 ? se = new V.Shape(this.buildPoints(p[0], p[0])) : se.holes.push(new V.Path(this.buildPoints(p[ie], p[0])));
            return se
        },
        buildPoints: function(p, se) {
            const ie = [];
            let He = z.projectToWorld([se[0][0], se[0][1], 0]);
            for (let be = 0; be < p.length; be++) {
                let Ee = z.projectToWorld([p[be][0], p[be][1], 0]);
                ie.push(new V.Vector2(z.toDecimal(Ee.x - He.x, 9), z.toDecimal(Ee.y - He.y, 9)))
            }
            return ie
        },
        buildGeometry: function(p, se) {
            let ie = new V.ExtrudeBufferGeometry(p, se);
            return ie.computeBoundingBox(), ie
        }
    }, ue.exports = C
})(Mf);
var om = Mf.exports,
    Cf = {
        exports: {}
    };
(function(ue, R) {
    const y = Ls,
        z = zl,
        V = vp;

    function Y(C) {
        C = y._validate(C, z.prototype._defaults.label);
        let p = z.prototype.drawLabelHTML(C.htmlElement, C.cssClass),
            se = new V.CSS2DObject(p);
        se.name = "label", se.visible = C.alwaysVisible, se.alwaysVisible = C.alwaysVisible;
        var ie = z.prototype._makeGroup(se, C);
        return z.prototype._addMethods(ie), ie.visibility = C.alwaysVisible, ie
    }
    ue.exports = Y
})(Cf);
var lm = Cf.exports,
    Bf = {
        exports: {}
    };
(function(ue, R) {
    const y = Ls,
        z = zl,
        V = vp;

    function Y(C) {
        if (C = y._validate(C, z.prototype._defaults.tooltip), C.text) {
            let se = z.prototype.drawTooltip(C.text, C.mapboxStyle),
                ie = new V.CSS2DObject(se);
            ie.visible = !1, ie.name = "tooltip";
            var p = z.prototype._makeGroup(ie, C);
            return z.prototype._addMethods(p), p
        }
    }
    ue.exports = Y
})(Bf);
var cm = Bf.exports,
    Rf = {
        exports: {}
    },
    Ff = {
        exports: {}
    };
(function(ue, R) {
    const y = Xa;
    y.OBJLoader = function() {
        var z = /^[og]\s*(.+)?/,
            V = /^mtllib /,
            Y = /^usemtl /,
            C = /^usemap /,
            p = new y.Vector3,
            se = new y.Vector3,
            ie = new y.Vector3,
            He = new y.Vector3,
            be = new y.Vector3;

        function Ee() {
            var Tt = {
                objects: [],
                object: {},
                vertices: [],
                normals: [],
                colors: [],
                uvs: [],
                materials: {},
                materialLibraries: [],
                startObject: function(Je, wt) {
                    if (this.object && this.object.fromDeclaration === !1) {
                        this.object.name = Je, this.object.fromDeclaration = wt !== !1;
                        return
                    }
                    var Ke = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
                    if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
                            name: Je || "",
                            fromDeclaration: wt !== !1,
                            geometry: {
                                vertices: [],
                                normals: [],
                                colors: [],
                                uvs: [],
                                hasUVIndices: !1
                            },
                            materials: [],
                            smooth: !0,
                            startMaterial: function(jt, di) {
                                var $e = this._finalize(!1);
                                $e && ($e.inherited || $e.groupCount <= 0) && this.materials.splice($e.index, 1);
                                var vt = {
                                    index: this.materials.length,
                                    name: jt || "",
                                    mtllib: Array.isArray(di) && di.length > 0 ? di[di.length - 1] : "",
                                    smooth: $e !== void 0 ? $e.smooth : this.smooth,
                                    groupStart: $e !== void 0 ? $e.groupEnd : 0,
                                    groupEnd: -1,
                                    groupCount: -1,
                                    inherited: !1,
                                    clone: function(Kt) {
                                        var vi = {
                                            index: typeof Kt == "number" ? Kt : this.index,
                                            name: this.name,
                                            mtllib: this.mtllib,
                                            smooth: this.smooth,
                                            groupStart: 0,
                                            groupEnd: -1,
                                            groupCount: -1,
                                            inherited: !1
                                        };
                                        return vi.clone = this.clone.bind(vi), vi
                                    }
                                };
                                return this.materials.push(vt), vt
                            },
                            currentMaterial: function() {
                                if (this.materials.length > 0) return this.materials[this.materials.length - 1]
                            },
                            _finalize: function(jt) {
                                var di = this.currentMaterial();
                                if (di && di.groupEnd === -1 && (di.groupEnd = this.geometry.vertices.length / 3, di.groupCount = di.groupEnd - di.groupStart, di.inherited = !1), jt && this.materials.length > 1)
                                    for (var $e = this.materials.length - 1; $e >= 0; $e--) this.materials[$e].groupCount <= 0 && this.materials.splice($e, 1);
                                return jt && this.materials.length === 0 && this.materials.push({
                                    name: "",
                                    smooth: this.smooth
                                }), di
                            }
                        }, Ke && Ke.name && typeof Ke.clone == "function") {
                        var Ye = Ke.clone(0);
                        Ye.inherited = !0, this.object.materials.push(Ye)
                    }
                    this.objects.push(this.object)
                },
                finalize: function() {
                    this.object && typeof this.object._finalize == "function" && this.object._finalize(!0)
                },
                parseVertexIndex: function(Je, wt) {
                    var Ke = parseInt(Je, 10);
                    return (Ke >= 0 ? Ke - 1 : Ke + wt / 3) * 3
                },
                parseNormalIndex: function(Je, wt) {
                    var Ke = parseInt(Je, 10);
                    return (Ke >= 0 ? Ke - 1 : Ke + wt / 3) * 3
                },
                parseUVIndex: function(Je, wt) {
                    var Ke = parseInt(Je, 10);
                    return (Ke >= 0 ? Ke - 1 : Ke + wt / 2) * 2
                },
                addVertex: function(Je, wt, Ke) {
                    var Ye = this.vertices,
                        jt = this.object.geometry.vertices;
                    jt.push(Ye[Je + 0], Ye[Je + 1], Ye[Je + 2]), jt.push(Ye[wt + 0], Ye[wt + 1], Ye[wt + 2]), jt.push(Ye[Ke + 0], Ye[Ke + 1], Ye[Ke + 2])
                },
                addVertexPoint: function(Je) {
                    var wt = this.vertices,
                        Ke = this.object.geometry.vertices;
                    Ke.push(wt[Je + 0], wt[Je + 1], wt[Je + 2])
                },
                addVertexLine: function(Je) {
                    var wt = this.vertices,
                        Ke = this.object.geometry.vertices;
                    Ke.push(wt[Je + 0], wt[Je + 1], wt[Je + 2])
                },
                addNormal: function(Je, wt, Ke) {
                    var Ye = this.normals,
                        jt = this.object.geometry.normals;
                    jt.push(Ye[Je + 0], Ye[Je + 1], Ye[Je + 2]), jt.push(Ye[wt + 0], Ye[wt + 1], Ye[wt + 2]), jt.push(Ye[Ke + 0], Ye[Ke + 1], Ye[Ke + 2])
                },
                addFaceNormal: function(Je, wt, Ke) {
                    var Ye = this.vertices,
                        jt = this.object.geometry.normals;
                    p.fromArray(Ye, Je), se.fromArray(Ye, wt), ie.fromArray(Ye, Ke), be.subVectors(ie, se), He.subVectors(p, se), be.cross(He), be.normalize(), jt.push(be.x, be.y, be.z), jt.push(be.x, be.y, be.z), jt.push(be.x, be.y, be.z)
                },
                addColor: function(Je, wt, Ke) {
                    var Ye = this.colors,
                        jt = this.object.geometry.colors;
                    Ye[Je] !== void 0 && jt.push(Ye[Je + 0], Ye[Je + 1], Ye[Je + 2]), Ye[wt] !== void 0 && jt.push(Ye[wt + 0], Ye[wt + 1], Ye[wt + 2]), Ye[Ke] !== void 0 && jt.push(Ye[Ke + 0], Ye[Ke + 1], Ye[Ke + 2])
                },
                addUV: function(Je, wt, Ke) {
                    var Ye = this.uvs,
                        jt = this.object.geometry.uvs;
                    jt.push(Ye[Je + 0], Ye[Je + 1]), jt.push(Ye[wt + 0], Ye[wt + 1]), jt.push(Ye[Ke + 0], Ye[Ke + 1])
                },
                addDefaultUV: function() {
                    var Je = this.object.geometry.uvs;
                    Je.push(0, 0), Je.push(0, 0), Je.push(0, 0)
                },
                addUVLine: function(Je) {
                    var wt = this.uvs,
                        Ke = this.object.geometry.uvs;
                    Ke.push(wt[Je + 0], wt[Je + 1])
                },
                addFace: function(Je, wt, Ke, Ye, jt, di, $e, vt, Kt) {
                    var vi = this.vertices.length,
                        Li = this.parseVertexIndex(Je, vi),
                        Ei = this.parseVertexIndex(wt, vi),
                        ct = this.parseVertexIndex(Ke, vi);
                    if (this.addVertex(Li, Ei, ct), this.addColor(Li, Ei, ct), $e !== void 0 && $e !== "") {
                        var je = this.normals.length;
                        Li = this.parseNormalIndex($e, je), Ei = this.parseNormalIndex(vt, je), ct = this.parseNormalIndex(Kt, je), this.addNormal(Li, Ei, ct)
                    } else this.addFaceNormal(Li, Ei, ct);
                    if (Ye !== void 0 && Ye !== "") {
                        var li = this.uvs.length;
                        Li = this.parseUVIndex(Ye, li), Ei = this.parseUVIndex(jt, li), ct = this.parseUVIndex(di, li), this.addUV(Li, Ei, ct), this.object.geometry.hasUVIndices = !0
                    } else this.addDefaultUV()
                },
                addPointGeometry: function(Je) {
                    this.object.geometry.type = "Points";
                    for (var wt = this.vertices.length, Ke = 0, Ye = Je.length; Ke < Ye; Ke++) {
                        var jt = this.parseVertexIndex(Je[Ke], wt);
                        this.addVertexPoint(jt), this.addColor(jt)
                    }
                },
                addLineGeometry: function(Je, wt) {
                    this.object.geometry.type = "Line";
                    for (var Ke = this.vertices.length, Ye = this.uvs.length, jt = 0, di = Je.length; jt < di; jt++) this.addVertexLine(this.parseVertexIndex(Je[jt], Ke));
                    for (var $e = 0, di = wt.length; $e < di; $e++) this.addUVLine(this.parseUVIndex(wt[$e], Ye))
                }
            };
            return Tt.startObject("", !1), Tt
        }

        function Lt(Tt) {
            y.Loader.call(this, Tt), this.materials = null
        }
        return Lt.prototype = Object.assign(Object.create(y.Loader.prototype), {
            constructor: Lt,
            load: function(Tt, Je, wt, Ke) {
                var Ye = this,
                    jt = new y.FileLoader(this.manager);
                jt.setPath(this.path), jt.setRequestHeader(this.requestHeader), jt.setWithCredentials(this.withCredentials), jt.load(Tt, function(di) {
                    try {
                        Je(Ye.parse(di))
                    } catch ($e) {
                        Ke ? Ke($e) : console.error($e), Ye.manager.itemError(Tt)
                    }
                }, wt, Ke)
            },
            setMaterials: function(Tt) {
                return this.materials = Tt, this
            },
            parse: function(Tt) {
                var Je = new Ee;
                Tt.indexOf(`\r
`) !== -1 && (Tt = Tt.replace(/\r\n/g, `
`)), Tt.indexOf(`\\
`) !== -1 && (Tt = Tt.replace(/\\\n/g, ""));
                for (var wt = Tt.split(`
`), Ke = "", Ye = "", jt = 0, di = [], $e = typeof "".trimLeft == "function", vt = 0, Kt = wt.length; vt < Kt; vt++)
                    if (Ke = wt[vt], Ke = $e ? Ke.trimLeft() : Ke.trim(), jt = Ke.length, jt !== 0 && (Ye = Ke.charAt(0), Ye !== "#"))
                        if (Ye === "v") {
                            var vi = Ke.split(/\s+/);
                            switch (vi[0]) {
                                case "v":
                                    Je.vertices.push(parseFloat(vi[1]), parseFloat(vi[2]), parseFloat(vi[3])), vi.length >= 7 ? Je.colors.push(parseFloat(vi[4]), parseFloat(vi[5]), parseFloat(vi[6])) : Je.colors.push(void 0, void 0, void 0);
                                    break;
                                case "vn":
                                    Je.normals.push(parseFloat(vi[1]), parseFloat(vi[2]), parseFloat(vi[3]));
                                    break;
                                case "vt":
                                    Je.uvs.push(parseFloat(vi[1]), parseFloat(vi[2]));
                                    break
                            }
                        } else if (Ye === "f") {
                    for (var Li = Ke.substr(1).trim(), Ei = Li.split(/\s+/), ct = [], je = 0, li = Ei.length; je < li; je++) {
                        var O = Ei[je];
                        if (O.length > 0) {
                            var K = O.split("/");
                            ct.push(K)
                        }
                    }
                    for (var ae = ct[0], je = 1, li = ct.length - 1; je < li; je++) {
                        var _e = ct[je],
                            xe = ct[je + 1];
                        Je.addFace(ae[0], _e[0], xe[0], ae[1], _e[1], xe[1], ae[2], _e[2], xe[2])
                    }
                } else if (Ye === "l") {
                    var Ze = Ke.substring(1).trim().split(" "),
                        st = [],
                        De = [];
                    if (Ke.indexOf("/") === -1) st = Ze;
                    else
                        for (var gt = 0, Qt = Ze.length; gt < Qt; gt++) {
                            var Ve = Ze[gt].split("/");
                            Ve[0] !== "" && st.push(Ve[0]), Ve[1] !== "" && De.push(Ve[1])
                        }
                    Je.addLineGeometry(st, De)
                } else if (Ye === "p") {
                    var Li = Ke.substr(1).trim(),
                        Dt = Li.split(" ");
                    Je.addPointGeometry(Dt)
                } else if ((di = z.exec(Ke)) !== null) {
                    var ei = (" " + di[0].substr(1).trim()).substr(1);
                    Je.startObject(ei)
                } else if (Y.test(Ke)) Je.object.startMaterial(Ke.substring(7).trim(), Je.materialLibraries);
                else if (V.test(Ke)) Je.materialLibraries.push(Ke.substring(7).trim());
                else if (C.test(Ke)) console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
                else if (Ye === "s") {
                    if (di = Ke.split(" "), di.length > 1) {
                        var xi = di[1].trim().toLowerCase();
                        Je.object.smooth = xi !== "0" && xi !== "off"
                    } else Je.object.smooth = !0;
                    var oe = Je.object.currentMaterial();
                    oe && (oe.smooth = Je.object.smooth)
                } else {
                    if (Ke === "\0") continue;
                    console.warn('THREE.OBJLoader: Unexpected line: "' + Ke + '"')
                }
                Je.finalize();
                var ve = new y.Group;
                ve.materialLibraries = [].concat(Je.materialLibraries);
                var Ne = !(Je.objects.length === 1 && Je.objects[0].geometry.vertices.length === 0);
                if (Ne === !0)
                    for (var vt = 0, Kt = Je.objects.length; vt < Kt; vt++) {
                        var Ue = Je.objects[vt],
                            Oe = Ue.geometry,
                            at = Ue.materials,
                            ht = Oe.type === "Line",
                            tt = Oe.type === "Points",
                            Bt = !1;
                        if (Oe.vertices.length !== 0) {
                            var Le = new y.BufferGeometry;
                            Le.setAttribute("position", new y.Float32BufferAttribute(Oe.vertices, 3)), Oe.normals.length > 0 && Le.setAttribute("normal", new y.Float32BufferAttribute(Oe.normals, 3)), Oe.colors.length > 0 && (Bt = !0, Le.setAttribute("color", new y.Float32BufferAttribute(Oe.colors, 3))), Oe.hasUVIndices === !0 && Le.setAttribute("uv", new y.Float32BufferAttribute(Oe.uvs, 2));
                            for (var Ot = [], ii = 0, Wt = at.length; ii < Wt; ii++) {
                                var bi = at[ii],
                                    Qi = bi.name + "_" + bi.smooth + "_" + Bt,
                                    oe = Je.materials[Qi];
                                if (this.materials !== null) {
                                    if (oe = this.materials.create(bi.name), ht && oe && !(oe instanceof y.LineBasicMaterial)) {
                                        var sn = new y.LineBasicMaterial;
                                        y.Material.prototype.copy.call(sn, oe), sn.color.copy(oe.color), oe = sn
                                    } else if (tt && oe && !(oe instanceof y.PointsMaterial)) {
                                        var yn = new y.PointsMaterial({
                                            size: 10,
                                            sizeAttenuation: !1
                                        });
                                        y.Material.prototype.copy.call(yn, oe), yn.color.copy(oe.color), yn.map = oe.map, oe = yn
                                    }
                                }
                                oe === void 0 && (ht ? oe = new y.LineBasicMaterial : tt ? oe = new y.PointsMaterial({
                                    size: 1,
                                    sizeAttenuation: !1
                                }) : oe = new y.MeshPhongMaterial, oe.name = bi.name, oe.flatShading = !bi.smooth, oe.vertexColors = Bt, Je.materials[Qi] = oe), Ot.push(oe)
                            }
                            var Yi;
                            if (Ot.length > 1) {
                                for (var ii = 0, Wt = at.length; ii < Wt; ii++) {
                                    var bi = at[ii];
                                    Le.addGroup(bi.groupStart, bi.groupCount, ii)
                                }
                                ht ? Yi = new y.LineSegments(Le, Ot) : tt ? Yi = new y.Points(Le, Ot) : Yi = new y.Mesh(Le, Ot)
                            } else ht ? Yi = new y.LineSegments(Le, Ot[0]) : tt ? Yi = new y.Points(Le, Ot[0]) : Yi = new y.Mesh(Le, Ot[0]);
                            Yi.name = Ue.name, ve.add(Yi)
                        }
                    } else if (Je.vertices.length > 0) {
                        var oe = new y.PointsMaterial({
                                size: 1,
                                sizeAttenuation: !1
                            }),
                            Le = new y.BufferGeometry;
                        Le.setAttribute("position", new y.Float32BufferAttribute(Je.vertices, 3)), Je.colors.length > 0 && Je.colors[0] !== void 0 && (Le.setAttribute("color", new y.Float32BufferAttribute(Je.colors, 3)), oe.vertexColors = !0);
                        var rn = new y.Points(Le, oe);
                        ve.add(rn)
                    } return ve
            }
        }), Lt
    }(), ue.exports = y.OBJLoader
})(Ff);
var hm = Ff.exports,
    Lf = {
        exports: {}
    };
(function(ue, R) {
    const y = Xa;
    y.MTLLoader = function(z) {
        y.Loader.call(this, z)
    }, y.MTLLoader.prototype = Object.assign(Object.create(y.Loader.prototype), {
        constructor: y.MTLLoader,
        load: function(z, V, Y, C) {
            var p = this,
                se = this.path === "" ? y.LoaderUtils.extractUrlBase(z || "") : this.path,
                ie = new y.FileLoader(this.manager);
            ie.setPath(this.path), ie.setRequestHeader(this.requestHeader), ie.setWithCredentials(this.withCredentials), ie.load(z, function(He) {
                try {
                    V(p.parse(He, se))
                } catch (be) {
                    C ? C(be) : console.error(be), p.manager.itemError(z)
                }
            }, Y, C)
        },
        setMaterialOptions: function(z) {
            return this.materialOptions = z, this
        },
        parse: function(z, V) {
            for (var Y = z.split(`
`), C = {}, p = /\s+/, se = {}, ie = 0; ie < Y.length; ie++) {
                var He = Y[ie];
                if (He = He.trim(), !(He.length === 0 || He.charAt(0) === "#")) {
                    var be = He.indexOf(" "),
                        Ee = be >= 0 ? He.substring(0, be) : He;
                    Ee = Ee.toLowerCase();
                    var Lt = be >= 0 ? He.substring(be + 1) : "";
                    if (Lt = Lt.trim(), Ee === "newmtl") C = {
                        name: Lt
                    }, se[Lt] = C;
                    else if (Ee === "ka" || Ee === "kd" || Ee === "ks" || Ee === "ke") {
                        var Tt = Lt.split(p, 3);
                        C[Ee] = [parseFloat(Tt[0]), parseFloat(Tt[1]), parseFloat(Tt[2])]
                    } else C[Ee] = Lt
                }
            }
            var Je = new y.MTLLoader.MaterialCreator(this.resourcePath || V, this.materialOptions);
            return Je.setCrossOrigin(this.crossOrigin), Je.setManager(this.manager), Je.setMaterials(se), Je
        }
    }), y.MTLLoader.MaterialCreator = function(z, V) {
        this.baseUrl = z || "", this.options = V, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.side = this.options && this.options.side ? this.options.side : y.FrontSide, this.wrap = this.options && this.options.wrap ? this.options.wrap : y.RepeatWrapping
    }, y.MTLLoader.MaterialCreator.prototype = {
        constructor: y.MTLLoader.MaterialCreator,
        crossOrigin: "anonymous",
        setCrossOrigin: function(z) {
            return this.crossOrigin = z, this
        },
        setManager: function(z) {
            this.manager = z
        },
        setMaterials: function(z) {
            this.materialsInfo = this.convert(z), this.materials = {}, this.materialsArray = [], this.nameLookup = {}
        },
        convert: function(z) {
            if (!this.options) return z;
            var V = {};
            for (var Y in z) {
                var C = z[Y],
                    p = {};
                V[Y] = p;
                for (var se in C) {
                    var ie = !0,
                        He = C[se],
                        be = se.toLowerCase();
                    switch (be) {
                        case "kd":
                        case "ka":
                        case "ks":
                            this.options && this.options.normalizeRGB && (He = [He[0] / 255, He[1] / 255, He[2] / 255]), this.options && this.options.ignoreZeroRGBs && He[0] === 0 && He[1] === 0 && He[2] === 0 && (ie = !1);
                            break
                    }
                    ie && (p[be] = He)
                }
            }
            return V
        },
        preload: function() {
            for (var z in this.materialsInfo) this.create(z)
        },
        getIndex: function(z) {
            return this.nameLookup[z]
        },
        getAsArray: function() {
            var z = 0;
            for (var V in this.materialsInfo) this.materialsArray[z] = this.create(V), this.nameLookup[V] = z, z++;
            return this.materialsArray
        },
        create: function(z) {
            return this.materials[z] === void 0 && this.createMaterial_(z), this.materials[z]
        },
        createMaterial_: function(z) {
            var V = this,
                Y = this.materialsInfo[z],
                C = {
                    name: z,
                    side: this.side
                };

            function p(Ee, Lt) {
                return typeof Lt != "string" || Lt === "" ? "" : /^https?:\/\//i.test(Lt) ? Lt : Ee + Lt
            }

            function se(Ee, Lt) {
                if (!C[Ee]) {
                    var Tt = V.getTextureParams(Lt, C),
                        Je = V.loadTexture(p(V.baseUrl, Tt.url));
                    Je.repeat.copy(Tt.scale), Je.offset.copy(Tt.offset), Je.wrapS = V.wrap, Je.wrapT = V.wrap, C[Ee] = Je
                }
            }
            for (var ie in Y) {
                var He = Y[ie],
                    be;
                if (He !== "") switch (ie.toLowerCase()) {
                    case "kd":
                        C.color = new y.Color().fromArray(He);
                        break;
                    case "ks":
                        C.specular = new y.Color().fromArray(He);
                        break;
                    case "ke":
                        C.emissive = new y.Color().fromArray(He);
                        break;
                    case "map_kd":
                        se("map", He);
                        break;
                    case "map_ks":
                        se("specularMap", He);
                        break;
                    case "map_ke":
                        se("emissiveMap", He);
                        break;
                    case "norm":
                        se("normalMap", He);
                        break;
                    case "map_bump":
                    case "bump":
                        se("bumpMap", He);
                        break;
                    case "map_d":
                        se("alphaMap", He), C.transparent = !0;
                        break;
                    case "ns":
                        C.shininess = parseFloat(He);
                        break;
                    case "d":
                        be = parseFloat(He), be < 1 && (C.opacity = be, C.transparent = !0);
                        break;
                    case "tr":
                        be = parseFloat(He), this.options && this.options.invertTrProperty && (be = 1 - be), be > 0 && (C.opacity = 1 - be, C.transparent = !0);
                        break
                }
            }
            return this.materials[z] = new y.MeshPhongMaterial(C), this.materials[z]
        },
        getTextureParams: function(z, V) {
            var Y = {
                    scale: new y.Vector2(1, 1),
                    offset: new y.Vector2(0, 0)
                },
                C = z.split(/\s+/),
                p;
            return p = C.indexOf("-bm"), p >= 0 && (V.bumpScale = parseFloat(C[p + 1]), C.splice(p, 2)), p = C.indexOf("-s"), p >= 0 && (Y.scale.set(parseFloat(C[p + 1]), parseFloat(C[p + 2])), C.splice(p, 4)), p = C.indexOf("-o"), p >= 0 && (Y.offset.set(parseFloat(C[p + 1]), parseFloat(C[p + 2])), C.splice(p, 4)), Y.url = C.join(" ").trim(), Y
        },
        loadTexture: function(z, V, Y, C, p) {
            var se, ie = this.manager !== void 0 ? this.manager : y.DefaultLoadingManager,
                He = ie.getHandler(z);
            return He === null && (He = new y.TextureLoader(ie)), He.setCrossOrigin && He.setCrossOrigin(this.crossOrigin), se = He.load(z, Y, C, p), V !== void 0 && (se.mapping = V), se
        }
    }, ue.exports = y.MTLLoader
})(Lf);
var um = Lf.exports,
    Qf = {
        exports: {}
    },
    Pp = {
        exports: {}
    };
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
*/
(function(ue, R) {
    (function(y) {
        ue.exports = y()
    })(function() {
        var y = {};
        y.__esModule = !0;
        var z = function(Z) {
                var q;
                try {
                    q("require('worker_threads')").Worker
                } catch (de) {}
                return R.default = function(de, Pe, Et, Ft, _t) {
                    setImmediate(function() {
                        return _t(Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"), null)
                    });
                    var Yt = function() {};
                    return {
                        terminate: Yt,
                        postMessage: Yt
                    }
                }, Z
            }({}),
            V = Uint8Array,
            Y = Uint16Array,
            C = Uint32Array,
            p = new V([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
            se = new V([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
            ie = new V([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            He = function(Z, q) {
                for (var de = new Y(31), Pe = 0; Pe < 31; ++Pe) de[Pe] = q += 1 << Z[Pe - 1];
                var Et = new C(de[30]);
                for (Pe = 1; Pe < 30; ++Pe)
                    for (var Ft = de[Pe]; Ft < de[Pe + 1]; ++Ft) Et[Ft] = Ft - de[Pe] << 5 | Pe;
                return [de, Et]
            },
            be = He(p, 2),
            Ee = be[0],
            Lt = be[1];
        Ee[28] = 258, Lt[258] = 28;
        for (var Tt = He(se, 0), Je = Tt[0], wt = Tt[1], Ke = new Y(32768), Ye = 0; Ye < 32768; ++Ye) {
            var jt = (43690 & Ye) >>> 1 | (21845 & Ye) << 1;
            Ke[Ye] = ((65280 & (jt = (61680 & (jt = (52428 & jt) >>> 2 | (13107 & jt) << 2)) >>> 4 | (3855 & jt) << 4)) >>> 8 | (255 & jt) << 8) >>> 1
        }
        var di = function(Z, q, de) {
                for (var Pe = Z.length, Et = 0, Ft = new Y(q); Et < Pe; ++Et) ++Ft[Z[Et] - 1];
                var _t, Yt = new Y(q);
                for (Et = 0; Et < q; ++Et) Yt[Et] = Yt[Et - 1] + Ft[Et - 1] << 1;
                if (de) {
                    _t = new Y(1 << q);
                    var J = 15 - q;
                    for (Et = 0; Et < Pe; ++Et)
                        if (Z[Et])
                            for (var W = Et << 4 | Z[Et], re = q - Z[Et], ye = Yt[Z[Et] - 1]++ << re, me = ye | (1 << re) - 1; ye <= me; ++ye) _t[Ke[ye] >>> J] = W
                } else
                    for (_t = new Y(Pe), Et = 0; Et < Pe; ++Et) Z[Et] && (_t[Et] = Ke[Yt[Z[Et] - 1]++] >>> 15 - Z[Et]);
                return _t
            },
            $e = new V(288);
        for (Ye = 0; Ye < 144; ++Ye) $e[Ye] = 8;
        for (Ye = 144; Ye < 256; ++Ye) $e[Ye] = 9;
        for (Ye = 256; Ye < 280; ++Ye) $e[Ye] = 7;
        for (Ye = 280; Ye < 288; ++Ye) $e[Ye] = 8;
        var vt = new V(32);
        for (Ye = 0; Ye < 32; ++Ye) vt[Ye] = 5;
        var Kt = di($e, 9, 0),
            vi = di($e, 9, 1),
            Li = di(vt, 5, 0),
            Ei = di(vt, 5, 1),
            ct = function(Z) {
                for (var q = Z[0], de = 1; de < Z.length; ++de) Z[de] > q && (q = Z[de]);
                return q
            },
            je = function(Z, q, de) {
                var Pe = q / 8 | 0;
                return (Z[Pe] | Z[Pe + 1] << 8) >> (7 & q) & de
            },
            li = function(Z, q) {
                var de = q / 8 | 0;
                return (Z[de] | Z[de + 1] << 8 | Z[de + 2] << 16) >> (7 & q)
            },
            O = function(Z) {
                return (Z / 8 | 0) + (7 & Z && 1)
            },
            K = function(Z, q, de) {
                (q == null || q < 0) && (q = 0), (de == null || de > Z.length) && (de = Z.length);
                var Pe = new(Z instanceof Y ? Y : Z instanceof C ? C : V)(de - q);
                return Pe.set(Z.subarray(q, de)), Pe
            },
            ae = function(Z, q, de) {
                var Pe = Z.length;
                if (!Pe || de && !de.l && Pe < 5) return q || new V(0);
                var Et = !q || de,
                    Ft = !de || de.i;
                de || (de = {}), q || (q = new V(3 * Pe));
                var _t = function(ro) {
                        var Or = q.length;
                        if (ro > Or) {
                            var ls = new V(Math.max(2 * Or, ro));
                            ls.set(q), q = ls
                        }
                    },
                    Yt = de.f || 0,
                    J = de.p || 0,
                    W = de.b || 0,
                    re = de.l,
                    ye = de.d,
                    me = de.m,
                    rt = de.n,
                    At = 8 * Pe;
                do {
                    if (!re) {
                        de.f = Yt = je(Z, J, 1);
                        var Mt = je(Z, J + 1, 3);
                        if (J += 3, !Mt) {
                            var si = Z[(pn = O(J) + 4) - 4] | Z[pn - 3] << 8,
                                ti = pn + si;
                            if (ti > Pe) {
                                if (Ft) throw "unexpected EOF";
                                break
                            }
                            Et && _t(W + si), q.set(Z.subarray(pn, ti), W), de.b = W += si, de.p = J = 8 * ti;
                            continue
                        }
                        if (Mt == 1) re = vi, ye = Ei, me = 9, rt = 5;
                        else {
                            if (Mt != 2) throw "invalid block type";
                            var ni = je(Z, J, 31) + 257,
                                ri = je(Z, J + 10, 15) + 4,
                                Wi = ni + je(Z, J + 5, 31) + 1;
                            J += 14;
                            for (var Ci = new V(Wi), Pi = new V(19), ai = 0; ai < ri; ++ai) Pi[ie[ai]] = je(Z, J + 3 * ai, 7);
                            J += 3 * ri;
                            var Rt = ct(Pi),
                                Gi = (1 << Rt) - 1;
                            if (!Ft && J + Wi * (Rt + 7) > At) break;
                            var ki = di(Pi, Rt, 1);
                            for (ai = 0; ai < Wi;) {
                                var pn, pi = ki[je(Z, J, Gi)];
                                if (J += 15 & pi, (pn = pi >>> 4) < 16) Ci[ai++] = pn;
                                else {
                                    var Hi = 0,
                                        en = 0;
                                    for (pn == 16 ? (en = 3 + je(Z, J, 3), J += 2, Hi = Ci[ai - 1]) : pn == 17 ? (en = 3 + je(Z, J, 7), J += 3) : pn == 18 && (en = 11 + je(Z, J, 127), J += 7); en--;) Ci[ai++] = Hi
                                }
                            }
                            var Bi = Ci.subarray(0, ni),
                                Xi = Ci.subarray(ni);
                            me = ct(Bi), rt = ct(Xi), re = di(Bi, me, 1), ye = di(Xi, rt, 1)
                        }
                        if (J > At) throw "unexpected EOF"
                    }
                    Et && _t(W + 131072);
                    for (var Un = (1 << me) - 1, lr = (1 << rt) - 1, Qr = me + rt + 18; Ft || J + Qr < At;) {
                        var aa = (Hi = re[li(Z, J) & Un]) >>> 4;
                        if ((J += 15 & Hi) > At) throw "unexpected EOF";
                        if (!Hi) throw "invalid length/literal";
                        if (aa < 256) q[W++] = aa;
                        else {
                            if (aa == 256) {
                                re = null;
                                break
                            }
                            var Ai = aa - 254;
                            aa > 264 && (Ai = je(Z, J, (1 << (Kr = p[ai = aa - 257])) - 1) + Ee[ai], J += Kr);
                            var ca = ye[li(Z, J) & lr],
                                Ea = ca >>> 4;
                            if (!ca) throw "invalid distance";
                            if (J += 15 & ca, Xi = Je[Ea], Ea > 3) {
                                var Kr = se[Ea];
                                Xi += li(Z, J) & (1 << Kr) - 1, J += Kr
                            }
                            if (J > At) throw "unexpected EOF";
                            Et && _t(W + 131072);
                            for (var Er = W + Ai; W < Er; W += 4) q[W] = q[W - Xi], q[W + 1] = q[W + 1 - Xi], q[W + 2] = q[W + 2 - Xi], q[W + 3] = q[W + 3 - Xi];
                            W = Er
                        }
                    }
                    de.l = re, de.p = J, de.b = W, re && (Yt = 1, de.m = me, de.d = ye, de.n = rt)
                } while (!Yt);
                return W == q.length ? q : K(q, 0, W)
            },
            _e = function(Z, q, de) {
                var Pe = q / 8 | 0;
                Z[Pe] |= de <<= 7 & q, Z[Pe + 1] |= de >>> 8
            },
            xe = function(Z, q, de) {
                var Pe = q / 8 | 0;
                Z[Pe] |= de <<= 7 & q, Z[Pe + 1] |= de >>> 8, Z[Pe + 2] |= de >>> 16
            },
            Ze = function(Z, q) {
                for (var de = [], Pe = 0; Pe < Z.length; ++Pe) Z[Pe] && de.push({
                    s: Pe,
                    f: Z[Pe]
                });
                var Et = de.length,
                    Ft = de.slice();
                if (!Et) return [ei, 0];
                if (Et == 1) {
                    var _t = new V(de[0].s + 1);
                    return _t[de[0].s] = 1, [_t, 1]
                }
                de.sort(function(Ci, Pi) {
                    return Ci.f - Pi.f
                }), de.push({
                    s: -1,
                    f: 25001
                });
                var Yt = de[0],
                    J = de[1],
                    W = 0,
                    re = 1,
                    ye = 2;
                for (de[0] = {
                        s: -1,
                        f: Yt.f + J.f,
                        l: Yt,
                        r: J
                    }; re != Et - 1;) Yt = de[de[W].f < de[ye].f ? W++ : ye++], J = de[W != re && de[W].f < de[ye].f ? W++ : ye++], de[re++] = {
                    s: -1,
                    f: Yt.f + J.f,
                    l: Yt,
                    r: J
                };
                var me = Ft[0].s;
                for (Pe = 1; Pe < Et; ++Pe) Ft[Pe].s > me && (me = Ft[Pe].s);
                var rt = new Y(me + 1),
                    At = st(de[re - 1], rt, 0);
                if (At > q) {
                    Pe = 0;
                    var Mt = 0,
                        si = At - q,
                        ti = 1 << si;
                    for (Ft.sort(function(Ci, Pi) {
                            return rt[Pi.s] - rt[Ci.s] || Ci.f - Pi.f
                        }); Pe < Et; ++Pe) {
                        var ni = Ft[Pe].s;
                        if (!(rt[ni] > q)) break;
                        Mt += ti - (1 << At - rt[ni]), rt[ni] = q
                    }
                    for (Mt >>>= si; Mt > 0;) {
                        var ri = Ft[Pe].s;
                        rt[ri] < q ? Mt -= 1 << q - rt[ri]++ - 1 : ++Pe
                    }
                    for (; Pe >= 0 && Mt; --Pe) {
                        var Wi = Ft[Pe].s;
                        rt[Wi] == q && (--rt[Wi], ++Mt)
                    }
                    At = q
                }
                return [new V(rt), At]
            },
            st = function(Z, q, de) {
                return Z.s == -1 ? Math.max(st(Z.l, q, de + 1), st(Z.r, q, de + 1)) : q[Z.s] = de
            },
            De = function(Z) {
                for (var q = Z.length; q && !Z[--q];);
                for (var de = new Y(++q), Pe = 0, Et = Z[0], Ft = 1, _t = function(J) {
                        de[Pe++] = J
                    }, Yt = 1; Yt <= q; ++Yt)
                    if (Z[Yt] == Et && Yt != q) ++Ft;
                    else {
                        if (!Et && Ft > 2) {
                            for (; Ft > 138; Ft -= 138) _t(32754);
                            Ft > 2 && (_t(Ft > 10 ? Ft - 11 << 5 | 28690 : Ft - 3 << 5 | 12305), Ft = 0)
                        } else if (Ft > 3) {
                            for (_t(Et), --Ft; Ft > 6; Ft -= 6) _t(8304);
                            Ft > 2 && (_t(Ft - 3 << 5 | 8208), Ft = 0)
                        }
                        for (; Ft--;) _t(Et);
                        Ft = 1, Et = Z[Yt]
                    } return [de.subarray(0, Pe), q]
            },
            gt = function(Z, q) {
                for (var de = 0, Pe = 0; Pe < q.length; ++Pe) de += Z[Pe] * q[Pe];
                return de
            },
            Qt = function(Z, q, de) {
                var Pe = de.length,
                    Et = O(q + 2);
                Z[Et] = 255 & Pe, Z[Et + 1] = Pe >>> 8, Z[Et + 2] = 255 ^ Z[Et], Z[Et + 3] = 255 ^ Z[Et + 1];
                for (var Ft = 0; Ft < Pe; ++Ft) Z[Et + Ft + 4] = de[Ft];
                return 8 * (Et + 4 + Pe)
            },
            Ve = function(Z, q, de, Pe, Et, Ft, _t, Yt, J, W, re) {
                _e(q, re++, de), ++Et[256];
                for (var ye = Ze(Et, 15), me = ye[0], rt = ye[1], At = Ze(Ft, 15), Mt = At[0], si = At[1], ti = De(me), ni = ti[0], ri = ti[1], Wi = De(Mt), Ci = Wi[0], Pi = Wi[1], ai = new Y(19), Rt = 0; Rt < ni.length; ++Rt) ai[31 & ni[Rt]]++;
                for (Rt = 0; Rt < Ci.length; ++Rt) ai[31 & Ci[Rt]]++;
                for (var Gi = Ze(ai, 7), ki = Gi[0], pn = Gi[1], pi = 19; pi > 4 && !ki[ie[pi - 1]]; --pi);
                var Hi, en, Bi, Xi, Un = W + 5 << 3,
                    lr = gt(Et, $e) + gt(Ft, vt) + _t,
                    Qr = gt(Et, me) + gt(Ft, Mt) + _t + 14 + 3 * pi + gt(ai, ki) + (2 * ai[16] + 3 * ai[17] + 7 * ai[18]);
                if (Un <= lr && Un <= Qr) return Qt(q, re, Z.subarray(J, J + W));
                if (_e(q, re, 1 + (Qr < lr)), re += 2, Qr < lr) {
                    Hi = di(me, rt, 0), en = me, Bi = di(Mt, si, 0), Xi = Mt;
                    var aa = di(ki, pn, 0);
                    for (_e(q, re, ri - 257), _e(q, re + 5, Pi - 1), _e(q, re + 10, pi - 4), re += 14, Rt = 0; Rt < pi; ++Rt) _e(q, re + 3 * Rt, ki[ie[Rt]]);
                    re += 3 * pi;
                    for (var Ai = [ni, Ci], ca = 0; ca < 2; ++ca) {
                        var Ea = Ai[ca];
                        for (Rt = 0; Rt < Ea.length; ++Rt) _e(q, re, aa[Kr = 31 & Ea[Rt]]), re += ki[Kr], Kr > 15 && (_e(q, re, Ea[Rt] >>> 5 & 127), re += Ea[Rt] >>> 12)
                    }
                } else Hi = Kt, en = $e, Bi = Li, Xi = vt;
                for (Rt = 0; Rt < Yt; ++Rt)
                    if (Pe[Rt] > 255) {
                        var Kr;
                        xe(q, re, Hi[257 + (Kr = Pe[Rt] >>> 18 & 31)]), re += en[Kr + 257], Kr > 7 && (_e(q, re, Pe[Rt] >>> 23 & 31), re += p[Kr]);
                        var Er = 31 & Pe[Rt];
                        xe(q, re, Bi[Er]), re += Xi[Er], Er > 3 && (xe(q, re, Pe[Rt] >>> 5 & 8191), re += se[Er])
                    } else xe(q, re, Hi[Pe[Rt]]), re += en[Pe[Rt]];
                return xe(q, re, Hi[256]), re + en[256]
            },
            Dt = new C([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
            ei = new V(0),
            xi = function(Z, q, de, Pe, Et, Ft) {
                var _t = Z.length,
                    Yt = new V(Pe + _t + 5 * (1 + Math.ceil(_t / 7e3)) + Et),
                    J = Yt.subarray(Pe, Yt.length - Et),
                    W = 0;
                if (!q || _t < 8)
                    for (var re = 0; re <= _t; re += 65535) {
                        var ye = re + 65535;
                        ye < _t ? W = Qt(J, W, Z.subarray(re, ye)) : (J[re] = Ft, W = Qt(J, W, Z.subarray(re, _t)))
                    } else {
                        for (var me = Dt[q - 1], rt = me >>> 13, At = 8191 & me, Mt = (1 << de) - 1, si = new Y(32768), ti = new Y(Mt + 1), ni = Math.ceil(de / 3), ri = 2 * ni, Wi = function(Pr) {
                                return (Z[Pr] ^ Z[Pr + 1] << ni ^ Z[Pr + 2] << ri) & Mt
                            }, Ci = new C(25e3), Pi = new Y(288), ai = new Y(32), Rt = 0, Gi = 0, ki = (re = 0, 0), pn = 0, pi = 0; re < _t; ++re) {
                            var Hi = Wi(re),
                                en = 32767 & re,
                                Bi = ti[Hi];
                            if (si[en] = Bi, ti[Hi] = en, pn <= re) {
                                var Xi = _t - re;
                                if ((Rt > 7e3 || ki > 24576) && Xi > 423) {
                                    W = Ve(Z, J, 0, Ci, Pi, ai, Gi, ki, pi, re - pi, W), ki = Rt = Gi = 0, pi = re;
                                    for (var Un = 0; Un < 286; ++Un) Pi[Un] = 0;
                                    for (Un = 0; Un < 30; ++Un) ai[Un] = 0
                                }
                                var lr = 2,
                                    Qr = 0,
                                    aa = At,
                                    Ai = en - Bi & 32767;
                                if (Xi > 2 && Hi == Wi(re - Ai))
                                    for (var ca = Math.min(rt, Xi) - 1, Ea = Math.min(32767, re), Kr = Math.min(258, Xi); Ai <= Ea && --aa && en != Bi;) {
                                        if (Z[re + lr] == Z[re + lr - Ai]) {
                                            for (var Er = 0; Er < Kr && Z[re + Er] == Z[re + Er - Ai]; ++Er);
                                            if (Er > lr) {
                                                if (lr = Er, Qr = Ai, Er > ca) break;
                                                var ro = Math.min(Ai, Er - 2),
                                                    Or = 0;
                                                for (Un = 0; Un < ro; ++Un) {
                                                    var ls = re - Ai + Un + 32768 & 32767,
                                                        ms = ls - si[ls] + 32768 & 32767;
                                                    ms > Or && (Or = ms, Bi = ls)
                                                }
                                            }
                                        }
                                        Ai += (en = Bi) - (Bi = si[en]) + 32768 & 32767
                                    }
                                if (Qr) {
                                    Ci[ki++] = 268435456 | Lt[lr] << 18 | wt[Qr];
                                    var _a = 31 & Lt[lr],
                                        ks = 31 & wt[Qr];
                                    Gi += p[_a] + se[ks], ++Pi[257 + _a], ++ai[ks], pn = re + lr, ++Rt
                                } else Ci[ki++] = Z[re], ++Pi[Z[re]]
                            }
                        }
                        W = Ve(Z, J, Ft, Ci, Pi, ai, Gi, ki, pi, re - pi, W), !Ft && 7 & W && (W = Qt(J, W + 1, ei))
                    }
                return K(Yt, 0, Pe + O(W) + Et)
            },
            oe = function() {
                for (var Z = new C(256), q = 0; q < 256; ++q) {
                    for (var de = q, Pe = 9; --Pe;) de = (1 & de && 3988292384) ^ de >>> 1;
                    Z[q] = de
                }
                return Z
            }(),
            ve = function() {
                var Z = -1;
                return {
                    p: function(q) {
                        for (var de = Z, Pe = 0; Pe < q.length; ++Pe) de = oe[255 & de ^ q[Pe]] ^ de >>> 8;
                        Z = de
                    },
                    d: function() {
                        return ~Z
                    }
                }
            },
            Ne = function() {
                var Z = 1,
                    q = 0;
                return {
                    p: function(de) {
                        for (var Pe = Z, Et = q, Ft = de.length, _t = 0; _t != Ft;) {
                            for (var Yt = Math.min(_t + 2655, Ft); _t < Yt; ++_t) Et += Pe += de[_t];
                            Pe = (65535 & Pe) + 15 * (Pe >> 16), Et = (65535 & Et) + 15 * (Et >> 16)
                        }
                        Z = Pe, q = Et
                    },
                    d: function() {
                        return ((Z %= 65521) >>> 8 << 16 | (255 & (q %= 65521)) << 8 | q >>> 8) + 2 * ((255 & Z) << 23)
                    }
                }
            },
            Ue = function(Z, q, de, Pe, Et) {
                return xi(Z, q.level == null ? 6 : q.level, q.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(Z.length)))) : 12 + q.mem, de, Pe, !Et)
            },
            Oe = function(Z, q) {
                var de = {};
                for (var Pe in Z) de[Pe] = Z[Pe];
                for (var Pe in q) de[Pe] = q[Pe];
                return de
            },
            at = function(Z, q, de) {
                for (var Pe = Z(), Et = "" + Z, Ft = Et.slice(Et.indexOf("[") + 1, Et.lastIndexOf("]")).replace(/ /g, "").split(","), _t = 0; _t < Pe.length; ++_t) {
                    var Yt = Pe[_t],
                        J = Ft[_t];
                    if (typeof Yt == "function") {
                        q += ";" + J + "=";
                        var W = "" + Yt;
                        if (Yt.prototype)
                            if (W.indexOf("[native code]") != -1) {
                                var re = W.indexOf(" ", 8) + 1;
                                q += W.slice(re, W.indexOf("(", re))
                            } else
                                for (var ye in q += W, Yt.prototype) q += ";" + J + ".prototype." + ye + "=" + Yt.prototype[ye];
                        else q += W
                    } else de[J] = Yt
                }
                return [q, de]
            },
            ht = [],
            tt = function(Z) {
                var q = [];
                for (var de in Z)(Z[de] instanceof V || Z[de] instanceof Y || Z[de] instanceof C) && q.push((Z[de] = new Z[de].constructor(Z[de])).buffer);
                return q
            },
            Bt = function(Z, q, de, Pe) {
                var Et;
                if (!ht[de]) {
                    for (var Ft = "", _t = {}, Yt = Z.length - 1, J = 0; J < Yt; ++J) Ft = (Et = at(Z[J], Ft, _t))[0], _t = Et[1];
                    ht[de] = at(Z[Yt], Ft, _t)
                }
                var W = Oe({}, ht[de][1]);
                return z.default(ht[de][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + q + "}", de, W, tt(W), Pe)
            },
            Le = function() {
                return [V, Y, C, p, se, ie, Ee, Je, vi, Ei, Ke, di, ct, je, li, O, K, ae, Ae, sn, yn]
            },
            Ot = function() {
                return [V, Y, C, p, se, ie, Lt, wt, Kt, $e, Li, vt, Ke, Dt, ei, di, _e, xe, Ze, st, De, gt, Qt, Ve, O, K, xi, Ue, Te, sn]
            },
            ii = function() {
                return [na, Si, ji, ve, oe]
            },
            Wt = function() {
                return [cn, yi]
            },
            bi = function() {
                return [qi, ji, Ne]
            },
            Qi = function() {
                return [Nn]
            },
            sn = function(Z) {
                return postMessage(Z, [Z.buffer])
            },
            yn = function(Z) {
                return Z && Z.size && new V(Z.size)
            },
            Yi = function(Z, q, de, Pe, Et, Ft) {
                var _t = Bt(de, Pe, Et, function(Yt, J) {
                    _t.terminate(), Ft(Yt, J)
                });
                return _t.postMessage([Z, q], q.consume ? [Z.buffer] : []),
                    function() {
                        _t.terminate()
                    }
            },
            rn = function(Z) {
                return Z.ondata = function(q, de) {
                        return postMessage([q, de], [q.buffer])
                    },
                    function(q) {
                        return Z.push(q.data[0], q.data[1])
                    }
            },
            Mi = function(Z, q, de, Pe, Et) {
                var Ft, _t = Bt(Z, Pe, Et, function(Yt, J) {
                    Yt ? (_t.terminate(), q.ondata.call(q, Yt)) : (J[1] && _t.terminate(), q.ondata.call(q, Yt, J[0], J[1]))
                });
                _t.postMessage(de), q.push = function(Yt, J) {
                    if (Ft) throw "stream finished";
                    if (!q.ondata) throw "no stream handler";
                    _t.postMessage([Yt, Ft = J], [Yt.buffer])
                }, q.terminate = function() {
                    _t.terminate()
                }
            },
            Ht = function(Z, q) {
                return Z[q] | Z[q + 1] << 8
            },
            Pt = function(Z, q) {
                return (Z[q] | Z[q + 1] << 8 | Z[q + 2] << 16) + 2 * (Z[q + 3] << 23)
            },
            qn = function(Z, q) {
                return Pt(Z, q) | 4294967296 * Pt(Z, q)
            },
            ji = function(Z, q, de) {
                for (; de; ++q) Z[q] = de, de >>>= 8
            },
            na = function(Z, q) {
                var de = q.filename;
                if (Z[0] = 31, Z[1] = 139, Z[2] = 8, Z[8] = q.level < 2 ? 4 : q.level == 9 ? 2 : 0, Z[9] = 3, q.mtime != 0 && ji(Z, 4, Math.floor(new Date(q.mtime || Date.now()) / 1e3)), de) {
                    Z[3] = 8;
                    for (var Pe = 0; Pe <= de.length; ++Pe) Z[Pe + 10] = de.charCodeAt(Pe)
                }
            },
            cn = function(Z) {
                if (Z[0] != 31 || Z[1] != 139 || Z[2] != 8) throw "invalid gzip data";
                var q = Z[3],
                    de = 10;
                4 & q && (de += Z[10] | 2 + (Z[11] << 8));
                for (var Pe = (q >> 3 & 1) + (q >> 4 & 1); Pe > 0; Pe -= !Z[de++]);
                return de + (2 & q)
            },
            yi = function(Z) {
                var q = Z.length;
                return (Z[q - 4] | Z[q - 3] << 8 | Z[q - 2] << 16) + 2 * (Z[q - 1] << 23)
            },
            Si = function(Z) {
                return 10 + (Z.filename && Z.filename.length + 1 || 0)
            },
            qi = function(Z, q) {
                var de = q.level,
                    Pe = de == 0 ? 0 : de < 6 ? 1 : de == 9 ? 3 : 2;
                Z[0] = 120, Z[1] = Pe << 6 | (Pe ? 32 - 2 * Pe : 1)
            },
            Nn = function(Z) {
                if ((15 & Z[0]) != 8 || Z[0] >>> 4 > 7 || (Z[0] << 8 | Z[1]) % 31) throw "invalid zlib data";
                if (32 & Z[1]) throw "invalid zlib data: preset dictionaries not supported"
            };

        function Bn(Z, q) {
            return q || typeof Z != "function" || (q = Z, Z = {}), this.ondata = q, Z
        }
        var ge = function() {
            function Z(q, de) {
                de || typeof q != "function" || (de = q, q = {}), this.ondata = de, this.o = q || {}
            }
            return Z.prototype.p = function(q, de) {
                this.ondata(Ue(q, this.o, 0, 0, !de), de)
            }, Z.prototype.push = function(q, de) {
                if (this.d) throw "stream finished";
                if (!this.ondata) throw "no stream handler";
                this.d = de, this.p(q, de || !1)
            }, Z
        }();
        y.Deflate = ge;
        var ga = function() {
            return function(Z, q) {
                Mi([Ot, function() {
                    return [rn, ge]
                }], this, Bn.call(this, Z, q), function(de) {
                    var Pe = new ge(de.data);
                    onmessage = rn(Pe)
                }, 6)
            }
        }();

        function On(Z, q, de) {
            if (de || (de = q, q = {}), typeof de != "function") throw "no callback";
            return Yi(Z, q, [Ot], function(Pe) {
                return sn(Te(Pe.data[0], Pe.data[1]))
            }, 0, de)
        }

        function Te(Z, q) {
            return Ue(Z, q || {}, 0, 0)
        }
        y.AsyncDeflate = ga, y.deflate = On, y.deflateSync = Te;
        var te = function() {
            function Z(q) {
                this.s = {}, this.p = new V(0), this.ondata = q
            }
            return Z.prototype.e = function(q) {
                if (this.d) throw "stream finished";
                if (!this.ondata) throw "no stream handler";
                var de = this.p.length,
                    Pe = new V(de + q.length);
                Pe.set(this.p), Pe.set(q, de), this.p = Pe
            }, Z.prototype.c = function(q) {
                this.d = this.s.i = q || !1;
                var de = this.s.b,
                    Pe = ae(this.p, this.o, this.s);
                this.ondata(K(Pe, de, this.s.b), this.d), this.o = K(Pe, this.s.b - 32768), this.s.b = this.o.length, this.p = K(this.p, this.s.p / 8 | 0), this.s.p &= 7
            }, Z.prototype.push = function(q, de) {
                this.e(q), this.c(de)
            }, Z
        }();
        y.Inflate = te;
        var he = function() {
            return function(Z) {
                this.ondata = Z, Mi([Le, function() {
                    return [rn, te]
                }], this, 0, function() {
                    var q = new te;
                    onmessage = rn(q)
                }, 7)
            }
        }();

        function fe(Z, q, de) {
            if (de || (de = q, q = {}), typeof de != "function") throw "no callback";
            return Yi(Z, q, [Le], function(Pe) {
                return sn(Ae(Pe.data[0], yn(Pe.data[1])))
            }, 1, de)
        }

        function Ae(Z, q) {
            return ae(Z, q)
        }
        y.AsyncInflate = he, y.inflate = fe, y.inflateSync = Ae;
        var qe = function() {
            function Z(q, de) {
                this.c = ve(), this.l = 0, this.v = 1, ge.call(this, q, de)
            }
            return Z.prototype.push = function(q, de) {
                ge.prototype.push.call(this, q, de)
            }, Z.prototype.p = function(q, de) {
                this.c.p(q), this.l += q.length;
                var Pe = Ue(q, this.o, this.v && Si(this.o), de && 8, !de);
                this.v && (na(Pe, this.o), this.v = 0), de && (ji(Pe, Pe.length - 8, this.c.d()), ji(Pe, Pe.length - 4, this.l)), this.ondata(Pe, de)
            }, Z
        }();
        y.Gzip = qe, y.Compress = qe;
        var et = function() {
            return function(Z, q) {
                Mi([Ot, ii, function() {
                    return [rn, ge, qe]
                }], this, Bn.call(this, Z, q), function(de) {
                    var Pe = new qe(de.data);
                    onmessage = rn(Pe)
                }, 8)
            }
        }();

        function it(Z, q, de) {
            if (de || (de = q, q = {}), typeof de != "function") throw "no callback";
            return Yi(Z, q, [Ot, ii, function() {
                return [We]
            }], function(Pe) {
                return sn(We(Pe.data[0], Pe.data[1]))
            }, 2, de)
        }

        function We(Z, q) {
            q || (q = {});
            var de = ve(),
                Pe = Z.length;
            de.p(Z);
            var Et = Ue(Z, q, Si(q), 8),
                Ft = Et.length;
            return na(Et, q), ji(Et, Ft - 8, de.d()), ji(Et, Ft - 4, Pe), Et
        }
        y.AsyncGzip = et, y.AsyncCompress = et, y.gzip = it, y.compress = it, y.gzipSync = We, y.compressSync = We;
        var ft = function() {
            function Z(q) {
                this.v = 1, te.call(this, q)
            }
            return Z.prototype.push = function(q, de) {
                if (te.prototype.e.call(this, q), this.v) {
                    var Pe = this.p.length > 3 ? cn(this.p) : 4;
                    if (Pe >= this.p.length && !de) return;
                    this.p = this.p.subarray(Pe), this.v = 0
                }
                if (de) {
                    if (this.p.length < 8) throw "invalid gzip stream";
                    this.p = this.p.subarray(0, -8)
                }
                te.prototype.c.call(this, de)
            }, Z
        }();
        y.Gunzip = ft;
        var Jt = function() {
            return function(Z) {
                this.ondata = Z, Mi([Le, Wt, function() {
                    return [rn, te, ft]
                }], this, 0, function() {
                    var q = new ft;
                    onmessage = rn(q)
                }, 9)
            }
        }();

        function zt(Z, q, de) {
            if (de || (de = q, q = {}), typeof de != "function") throw "no callback";
            return Yi(Z, q, [Le, Wt, function() {
                return [It]
            }], function(Pe) {
                return sn(It(Pe.data[0]))
            }, 3, de)
        }

        function It(Z, q) {
            return ae(Z.subarray(cn(Z), -8), q || new V(yi(Z)))
        }
        y.AsyncGunzip = Jt, y.gunzip = zt, y.gunzipSync = It;
        var zi = function() {
            function Z(q, de) {
                this.c = Ne(), this.v = 1, ge.call(this, q, de)
            }
            return Z.prototype.push = function(q, de) {
                ge.prototype.push.call(this, q, de)
            }, Z.prototype.p = function(q, de) {
                this.c.p(q);
                var Pe = Ue(q, this.o, this.v && 2, de && 4, !de);
                this.v && (qi(Pe, this.o), this.v = 0), de && ji(Pe, Pe.length - 4, this.c.d()), this.ondata(Pe, de)
            }, Z
        }();
        y.Zlib = zi;
        var Zi = function() {
            return function(Z, q) {
                Mi([Ot, bi, function() {
                    return [rn, ge, zi]
                }], this, Bn.call(this, Z, q), function(de) {
                    var Pe = new zi(de.data);
                    onmessage = rn(Pe)
                }, 10)
            }
        }();

        function dn(Z, q, de) {
            if (de || (de = q, q = {}), typeof de != "function") throw "no callback";
            return Yi(Z, q, [Ot, bi, function() {
                return [on]
            }], function(Pe) {
                return sn(on(Pe.data[0], Pe.data[1]))
            }, 4, de)
        }

        function on(Z, q) {
            q || (q = {});
            var de = Ne();
            de.p(Z);
            var Pe = Ue(Z, q, 2, 4);
            return qi(Pe, q), ji(Pe, Pe.length - 4, de.d()), Pe
        }
        y.AsyncZlib = Zi, y.zlib = dn, y.zlibSync = on;
        var vn = function() {
            function Z(q) {
                this.v = 1, te.call(this, q)
            }
            return Z.prototype.push = function(q, de) {
                if (te.prototype.e.call(this, q), this.v) {
                    if (this.p.length < 2 && !de) return;
                    this.p = this.p.subarray(2), this.v = 0
                }
                if (de) {
                    if (this.p.length < 4) throw "invalid zlib stream";
                    this.p = this.p.subarray(0, -4)
                }
                te.prototype.c.call(this, de)
            }, Z
        }();
        y.Unzlib = vn;
        var Pn = function() {
            return function(Z) {
                this.ondata = Z, Mi([Le, Qi, function() {
                    return [rn, te, vn]
                }], this, 0, function() {
                    var q = new vn;
                    onmessage = rn(q)
                }, 11)
            }
        }();

        function Fn(Z, q, de) {
            if (de || (de = q, q = {}), typeof de != "function") throw "no callback";
            return Yi(Z, q, [Le, Qi, function() {
                return [kn]
            }], function(Pe) {
                return sn(kn(Pe.data[0], yn(Pe.data[1])))
            }, 5, de)
        }

        function kn(Z, q) {
            return ae((Nn(Z), Z.subarray(2, -4)), q)
        }
        y.AsyncUnzlib = Pn, y.unzlib = Fn, y.unzlibSync = kn;
        var hn = function() {
            function Z(q) {
                this.G = ft, this.I = te, this.Z = vn, this.ondata = q
            }
            return Z.prototype.push = function(q, de) {
                if (!this.ondata) throw "no stream handler";
                if (this.s) this.s.push(q, de);
                else {
                    if (this.p && this.p.length) {
                        var Pe = new V(this.p.length + q.length);
                        Pe.set(this.p), Pe.set(q, this.p.length)
                    } else this.p = q;
                    if (this.p.length > 2) {
                        var Et = this,
                            Ft = function() {
                                Et.ondata.apply(Et, arguments)
                            };
                        this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(Ft) : (15 & this.p[0]) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(Ft) : new this.Z(Ft), this.s.push(this.p, de), this.p = null
                    }
                }
            }, Z
        }();
        y.Decompress = hn;
        var Vn = function() {
            function Z(q) {
                this.G = Jt, this.I = he, this.Z = Pn, this.ondata = q
            }
            return Z.prototype.push = function(q, de) {
                hn.prototype.push.call(this, q, de)
            }, Z
        }();

        function Gn(Z, q, de) {
            if (de || (de = q, q = {}), typeof de != "function") throw "no callback";
            return Z[0] == 31 && Z[1] == 139 && Z[2] == 8 ? zt(Z, q, de) : (15 & Z[0]) != 8 || Z[0] >> 4 > 7 || (Z[0] << 8 | Z[1]) % 31 ? fe(Z, q, de) : Fn(Z, q, de)
        }

        function zr(Z, q) {
            return Z[0] == 31 && Z[1] == 139 && Z[2] == 8 ? It(Z, q) : (15 & Z[0]) != 8 || Z[0] >> 4 > 7 || (Z[0] << 8 | Z[1]) % 31 ? Ae(Z, q) : kn(Z, q)
        }
        y.AsyncDecompress = Vn, y.decompress = Gn, y.decompressSync = zr;
        var br = function(Z, q, de, Pe) {
                for (var Et in Z) {
                    var Ft = Z[Et],
                        _t = q + Et;
                    Ft instanceof V ? de[_t] = [Ft, Pe] : Array.isArray(Ft) ? de[_t] = [Ft[0], Oe(Pe, Ft[1])] : br(Ft, _t + "/", de, Pe)
                }
            },
            ur = typeof TextEncoder != "undefined" && new TextEncoder,
            wr = typeof TextDecoder != "undefined" && new TextDecoder,
            Ui = 0;
        try {
            wr.decode(ei, {
                stream: !0
            }), Ui = 1
        } catch (Z) {}
        var ya = function(Z) {
                for (var q = "", de = 0;;) {
                    var Pe = Z[de++],
                        Et = (Pe > 127) + (Pe > 223) + (Pe > 239);
                    if (de + Et > Z.length) return [q, K(Z, de - 1)];
                    Et ? Et == 3 ? (Pe = ((15 & Pe) << 18 | (63 & Z[de++]) << 12 | (63 & Z[de++]) << 6 | 63 & Z[de++]) - 65536, q += String.fromCharCode(55296 | Pe >> 10, 56320 | 1023 & Pe)) : q += String.fromCharCode(1 & Et ? (31 & Pe) << 6 | 63 & Z[de++] : (15 & Pe) << 12 | (63 & Z[de++]) << 6 | 63 & Z[de++]) : q += String.fromCharCode(Pe)
                }
            },
            _n = function() {
                function Z(q) {
                    this.ondata = q, Ui ? this.t = new TextDecoder : this.p = ei
                }
                return Z.prototype.push = function(q, de) {
                    if (!this.ondata) throw "no callback";
                    if (de || (de = !1), this.t) return this.ondata(this.t.decode(q, {
                        stream: !de
                    }), de);
                    var Pe = new V(this.p.length + q.length);
                    Pe.set(this.p), Pe.set(q, this.p.length);
                    var Et = ya(Pe),
                        Ft = Et[0],
                        _t = Et[1];
                    if (de && _t.length) throw "invalid utf-8 data";
                    this.p = _t, this.ondata(Ft, de)
                }, Z
            }();
        y.DecodeUTF8 = _n;
        var Qs = function() {
            function Z(q) {
                this.ondata = q
            }
            return Z.prototype.push = function(q, de) {
                if (!this.ondata) throw "no callback";
                this.ondata(Ra(q), de || !1)
            }, Z
        }();

        function Ra(Z, q) {
            if (q) {
                for (var de = new V(Z.length), Pe = 0; Pe < Z.length; ++Pe) de[Pe] = Z.charCodeAt(Pe);
                return de
            }
            if (ur) return ur.encode(Z);
            var Et = Z.length,
                Ft = new V(Z.length + (Z.length >> 1)),
                _t = 0,
                Yt = function(re) {
                    Ft[_t++] = re
                };
            for (Pe = 0; Pe < Et; ++Pe) {
                if (_t + 5 > Ft.length) {
                    var J = new V(_t + 8 + (Et - Pe << 1));
                    J.set(Ft), Ft = J
                }
                var W = Z.charCodeAt(Pe);
                W < 128 || q ? Yt(W) : W < 2048 ? (Yt(192 | W >>> 6), Yt(128 | 63 & W)) : W > 55295 && W < 57344 ? (Yt(240 | (W = 65536 + (1047552 & W) | 1023 & Z.charCodeAt(++Pe)) >>> 18), Yt(128 | W >>> 12 & 63), Yt(128 | W >>> 6 & 63), Yt(128 | 63 & W)) : (Yt(224 | W >>> 12), Yt(128 | W >>> 6 & 63), Yt(128 | 63 & W))
            }
            return K(Ft, 0, _t)
        }

        function rr(Z, q) {
            if (q) {
                for (var de = "", Pe = 0; Pe < Z.length; Pe += 16384) de += String.fromCharCode.apply(null, Z.subarray(Pe, Pe + 16384));
                return de
            }
            if (wr) return wr.decode(Z);
            var Et = ya(Z);
            if (Et[1].length) throw "invalid utf-8 data";
            return Et[0]
        }
        y.EncodeUTF8 = Qs, y.strToU8 = Ra, y.strFromU8 = rr;
        var Fr = function(Z) {
                return Z == 1 ? 3 : Z < 6 ? 2 : Z == 9 ? 1 : 0
            },
            Lr = function(Z, q) {
                return q + 30 + Ht(Z, q + 26) + Ht(Z, q + 28)
            },
            ra = function(Z, q, de) {
                var Pe = Ht(Z, q + 28),
                    Et = rr(Z.subarray(q + 46, q + 46 + Pe), !(2048 & Ht(Z, q + 8))),
                    Ft = q + 46 + Pe,
                    _t = Pt(Z, q + 20),
                    Yt = de && _t == 4294967295 ? $r(Z, Ft) : [_t, Pt(Z, q + 24), Pt(Z, q + 42)],
                    J = Yt[0],
                    W = Yt[1],
                    re = Yt[2];
                return [Ht(Z, q + 10), J, W, Et, Ft + Ht(Z, q + 30) + Ht(Z, q + 32), re]
            },
            $r = function(Z, q) {
                for (; Ht(Z, q) != 1; q += 4 + Ht(Z, q + 2));
                return [qn(Z, q + 12), qn(Z, q + 4), qn(Z, q + 20)]
            },
            gr = function(Z) {
                var q = 0;
                if (Z)
                    for (var de in Z) {
                        var Pe = Z[de].length;
                        if (Pe > 65535) throw "extra field too long";
                        q += Pe + 4
                    }
                return q
            },
            Jr = function(Z, q, de, Pe, Et, Ft, _t, Yt) {
                var J = Pe.length,
                    W = de.extra,
                    re = Yt && Yt.length,
                    ye = gr(W);
                ji(Z, q, _t != null ? 33639248 : 67324752), q += 4, _t != null && (Z[q++] = 20, Z[q++] = de.os), Z[q] = 20, q += 2, Z[q++] = de.flag << 1 | (Ft == null && 8), Z[q++] = Et && 8, Z[q++] = 255 & de.compression, Z[q++] = de.compression >> 8;
                var me = new Date(de.mtime == null ? Date.now() : de.mtime),
                    rt = me.getFullYear() - 1980;
                if (rt < 0 || rt > 119) throw "date not in range 1980-2099";
                if (ji(Z, q, 2 * (rt << 24) | me.getMonth() + 1 << 21 | me.getDate() << 16 | me.getHours() << 11 | me.getMinutes() << 5 | me.getSeconds() >>> 1), q += 4, Ft != null && (ji(Z, q, de.crc), ji(Z, q + 4, Ft), ji(Z, q + 8, de.size)), ji(Z, q + 12, J), ji(Z, q + 14, ye), q += 16, _t != null && (ji(Z, q, re), ji(Z, q + 6, de.attrs), ji(Z, q + 10, _t), q += 14), Z.set(Pe, q), q += J, ye)
                    for (var At in W) {
                        var Mt = W[At],
                            si = Mt.length;
                        ji(Z, q, +At), ji(Z, q + 2, si), Z.set(Mt, q + 4), q += 4 + si
                    }
                return re && (Z.set(Yt, q), q += re), q
            },
            or = function(Z, q, de, Pe, Et) {
                ji(Z, q, 101010256), ji(Z, q + 8, de), ji(Z, q + 10, de), ji(Z, q + 12, Pe), ji(Z, q + 16, Et)
            },
            wa = function() {
                function Z(q) {
                    this.filename = q, this.c = ve(), this.size = 0, this.compression = 0
                }
                return Z.prototype.process = function(q, de) {
                    this.ondata(null, q, de)
                }, Z.prototype.push = function(q, de) {
                    if (!this.ondata) throw "no callback - add to ZIP archive before pushing";
                    this.c.p(q), this.size += q.length, de && (this.crc = this.c.d()), this.process(q, de || !1)
                }, Z
            }();
        y.ZipPassThrough = wa;
        var la = function() {
            function Z(q, de) {
                var Pe = this;
                de || (de = {}), wa.call(this, q), this.d = new ge(de, function(Et, Ft) {
                    Pe.ondata(null, Et, Ft)
                }), this.compression = 8, this.flag = Fr(de.level)
            }
            return Z.prototype.process = function(q, de) {
                try {
                    this.d.push(q, de)
                } catch (Pe) {
                    this.ondata(Pe, null, de)
                }
            }, Z.prototype.push = function(q, de) {
                wa.prototype.push.call(this, q, de)
            }, Z
        }();
        y.ZipDeflate = la;
        var Ln = function() {
            function Z(q, de) {
                var Pe = this;
                de || (de = {}), wa.call(this, q), this.d = new ga(de, function(Et, Ft, _t) {
                    Pe.ondata(Et, Ft, _t)
                }), this.compression = 8, this.flag = Fr(de.level), this.terminate = this.d.terminate
            }
            return Z.prototype.process = function(q, de) {
                this.d.push(q, de)
            }, Z.prototype.push = function(q, de) {
                wa.prototype.push.call(this, q, de)
            }, Z
        }();
        y.AsyncZipDeflate = Ln;
        var ja = function() {
            function Z(q) {
                this.ondata = q, this.u = [], this.d = 1
            }
            return Z.prototype.add = function(q) {
                var de = this;
                if (2 & this.d) throw "stream finished";
                var Pe = Ra(q.filename),
                    Et = Pe.length,
                    Ft = q.comment,
                    _t = Ft && Ra(Ft),
                    Yt = Et != q.filename.length || _t && Ft.length != _t.length,
                    J = Et + gr(q.extra) + 30;
                if (Et > 65535) throw "filename too long";
                var W = new V(J);
                Jr(W, 0, q, Pe, Yt);
                var re = [W],
                    ye = function() {
                        for (var si = 0, ti = re; si < ti.length; si++) de.ondata(null, ti[si], !1);
                        re = []
                    },
                    me = this.d;
                this.d = 0;
                var rt = this.u.length,
                    At = Oe(q, {
                        f: Pe,
                        u: Yt,
                        o: _t,
                        t: function() {
                            q.terminate && q.terminate()
                        },
                        r: function() {
                            if (ye(), me) {
                                var si = de.u[rt + 1];
                                si ? si.r() : de.d = 1
                            }
                            me = 1
                        }
                    }),
                    Mt = 0;
                q.ondata = function(si, ti, ni) {
                    if (si) de.ondata(si, ti, ni), de.terminate();
                    else if (Mt += ti.length, re.push(ti), ni) {
                        var ri = new V(16);
                        ji(ri, 0, 134695760), ji(ri, 4, q.crc), ji(ri, 8, Mt), ji(ri, 12, q.size), re.push(ri), At.c = Mt, At.b = J + Mt + 16, At.crc = q.crc, At.size = q.size, me && At.r(), me = 1
                    } else me && ye()
                }, this.u.push(At)
            }, Z.prototype.end = function() {
                var q = this;
                if (2 & this.d) throw 1 & this.d ? "stream finishing" : "stream finished";
                this.d ? this.e() : this.u.push({
                    r: function() {
                        1 & q.d && (q.u.splice(-1, 1), q.e())
                    },
                    t: function() {}
                }), this.d = 3
            }, Z.prototype.e = function() {
                for (var q = 0, de = 0, Pe = 0, Et = 0, Ft = this.u; Et < Ft.length; Et++) Pe += 46 + (W = Ft[Et]).f.length + gr(W.extra) + (W.o ? W.o.length : 0);
                for (var _t = new V(Pe + 22), Yt = 0, J = this.u; Yt < J.length; Yt++) {
                    var W;
                    Jr(_t, q, W = J[Yt], W.f, W.u, W.c, de, W.o), q += 46 + W.f.length + gr(W.extra) + (W.o ? W.o.length : 0), de += W.b
                }
                or(_t, q, this.u.length, Pe, de), this.ondata(null, _t, !0), this.d = 2
            }, Z.prototype.terminate = function() {
                for (var q = 0, de = this.u; q < de.length; q++) de[q].t();
                this.d = 2
            }, Z
        }();

        function Nr(Z, q, de) {
            if (de || (de = q, q = {}), typeof de != "function") throw "no callback";
            var Pe = {};
            br(Z, "", Pe, q);
            var Et = Object.keys(Pe),
                Ft = Et.length,
                _t = 0,
                Yt = 0,
                J = Ft,
                W = Array(Ft),
                re = [],
                ye = function() {
                    for (var Mt = 0; Mt < re.length; ++Mt) re[Mt]()
                },
                me = function() {
                    var Mt = new V(Yt + 22),
                        si = _t,
                        ti = Yt - _t;
                    Yt = 0;
                    for (var ni = 0; ni < J; ++ni) {
                        var ri = W[ni];
                        try {
                            var Wi = ri.c.length;
                            Jr(Mt, Yt, ri, ri.f, ri.u, Wi);
                            var Ci = 30 + ri.f.length + gr(ri.extra),
                                Pi = Yt + Ci;
                            Mt.set(ri.c, Pi), Jr(Mt, _t, ri, ri.f, ri.u, Wi, Yt, ri.m), _t += 16 + Ci + (ri.m ? ri.m.length : 0), Yt = Pi + Wi
                        } catch (ai) {
                            return de(ai, null)
                        }
                    }
                    or(Mt, _t, W.length, ti, si), de(null, Mt)
                };
            Ft || me();
            for (var rt = function(Mt) {
                    var si = Et[Mt],
                        ti = Pe[si],
                        ni = ti[0],
                        ri = ti[1],
                        Wi = ve(),
                        Ci = ni.length;
                    Wi.p(ni);
                    var Pi = Ra(si),
                        ai = Pi.length,
                        Rt = ri.comment,
                        Gi = Rt && Ra(Rt),
                        ki = Gi && Gi.length,
                        pn = gr(ri.extra),
                        pi = ri.level == 0 ? 0 : 8,
                        Hi = function(en, Bi) {
                            if (en) ye(), de(en, null);
                            else {
                                var Xi = Bi.length;
                                W[Mt] = Oe(ri, {
                                    size: Ci,
                                    crc: Wi.d(),
                                    c: Bi,
                                    f: Pi,
                                    m: Gi,
                                    u: ai != si.length || Gi && Rt.length != ki,
                                    compression: pi
                                }), _t += 30 + ai + pn + Xi, Yt += 76 + 2 * (ai + pn) + (ki || 0) + Xi, --Ft || me()
                            }
                        };
                    if (ai > 65535 && Hi("filename too long", null), pi)
                        if (Ci < 16e4) try {
                            Hi(null, Te(ni, ri))
                        } catch (en) {
                            Hi(en, null)
                        } else re.push(On(ni, ri, Hi));
                        else Hi(null, ni)
                }, At = 0; At < J; ++At) rt(At);
            return ye
        }

        function Ps(Z, q) {
            q || (q = {});
            var de = {},
                Pe = [];
            br(Z, "", de, q);
            var Et = 0,
                Ft = 0;
            for (var _t in de) {
                var Yt = de[_t],
                    J = Yt[0],
                    W = Yt[1],
                    re = W.level == 0 ? 0 : 8,
                    ye = (ai = Ra(_t)).length,
                    me = W.comment,
                    rt = me && Ra(me),
                    At = rt && rt.length,
                    Mt = gr(W.extra);
                if (ye > 65535) throw "filename too long";
                var si = re ? Te(J, W) : J,
                    ti = si.length,
                    ni = ve();
                ni.p(J), Pe.push(Oe(W, {
                    size: J.length,
                    crc: ni.d(),
                    c: si,
                    f: ai,
                    m: rt,
                    u: ye != _t.length || rt && me.length != At,
                    o: Et,
                    compression: re
                })), Et += 30 + ye + Mt + ti, Ft += 76 + 2 * (ye + Mt) + (At || 0) + ti
            }
            for (var ri = new V(Ft + 22), Wi = Et, Ci = Ft - Et, Pi = 0; Pi < Pe.length; ++Pi) {
                var ai;
                Jr(ri, (ai = Pe[Pi]).o, ai, ai.f, ai.u, ai.c.length);
                var Rt = 30 + ai.f.length + gr(ai.extra);
                ri.set(ai.c, ai.o + Rt), Jr(ri, Et, ai, ai.f, ai.u, ai.c.length, ai.o, ai.m), Et += 16 + Rt + (ai.m ? ai.m.length : 0)
            }
            return or(ri, Et, Pe.length, Ci, Wi), ri
        }
        y.Zip = ja, y.zip = Nr, y.zipSync = Ps;
        var va = function() {
            function Z() {}
            return Z.prototype.push = function(q, de) {
                this.ondata(null, q, de)
            }, Z.compression = 0, Z
        }();
        y.UnzipPassThrough = va;
        var $n = function() {
            function Z() {
                var q = this;
                this.i = new te(function(de, Pe) {
                    q.ondata(null, de, Pe)
                })
            }
            return Z.prototype.push = function(q, de) {
                try {
                    this.i.push(q, de)
                } catch (Pe) {
                    this.ondata(Pe, q, de)
                }
            }, Z.compression = 8, Z
        }();
        y.UnzipInflate = $n;
        var Qn = function() {
            function Z(q, de) {
                var Pe = this;
                de < 32e4 ? this.i = new te(function(Et, Ft) {
                    Pe.ondata(null, Et, Ft)
                }) : (this.i = new he(function(Et, Ft, _t) {
                    Pe.ondata(Et, Ft, _t)
                }), this.terminate = this.i.terminate)
            }
            return Z.prototype.push = function(q, de) {
                this.i.terminate && (q = K(q, 0)), this.i.push(q, de)
            }, Z.compression = 8, Z
        }();
        y.AsyncUnzipInflate = Qn;
        var os = function() {
            function Z(q) {
                this.onfile = q, this.k = [], this.o = {
                    0: va
                }, this.p = ei
            }
            return Z.prototype.push = function(q, de) {
                var Pe = this;
                if (!this.onfile) throw "no callback";
                if (this.c > 0) {
                    var Et = Math.min(this.c, q.length),
                        Ft = q.subarray(0, Et);
                    if (this.c -= Et, this.d ? this.d.push(Ft, !this.c) : this.k[0].push(Ft), (q = q.subarray(Et)).length) return this.push(q, de)
                } else {
                    var _t = 0,
                        Yt = 0,
                        J = void 0,
                        W = void 0;
                    this.p.length ? q.length ? ((W = new V(this.p.length + q.length)).set(this.p), W.set(q, this.p.length)) : W = this.p : W = q;
                    for (var re = W.length, ye = this.c, me = ye && this.d, rt = function() {
                            var si, ti = Pt(W, Yt);
                            if (ti == 67324752) {
                                _t = 1, J = Yt, At.d = null, At.c = 0;
                                var ni = Ht(W, Yt + 6),
                                    ri = Ht(W, Yt + 8),
                                    Wi = 2048 & ni,
                                    Ci = 8 & ni,
                                    Pi = Ht(W, Yt + 26),
                                    ai = Ht(W, Yt + 28);
                                if (re > Yt + 30 + Pi + ai) {
                                    var Rt = [];
                                    At.k.unshift(Rt), _t = 2;
                                    var Gi = Pt(W, Yt + 18),
                                        ki = Pt(W, Yt + 22),
                                        pn = rr(W.subarray(Yt + 30, Yt += 30 + Pi), !Wi);
                                    Gi == 4294967295 ? (si = Ci ? [-2] : $r(W, Yt), Gi = si[0], ki = si[1]) : Ci && (Gi = -1), Yt += ai, At.c = Gi;
                                    var pi = {
                                        name: pn,
                                        compression: ri,
                                        start: function() {
                                            if (!pi.ondata) throw "no callback";
                                            if (Gi) {
                                                var Hi = Pe.o[ri];
                                                if (!Hi) throw "unknown compression type " + ri;
                                                var en = Gi < 0 ? new Hi(pn) : new Hi(pn, Gi, ki);
                                                en.ondata = function(Un, lr, Qr) {
                                                    pi.ondata(Un, lr, Qr)
                                                };
                                                for (var Bi = 0, Xi = Rt; Bi < Xi.length; Bi++) en.push(Xi[Bi], !1);
                                                Pe.k[0] == Rt ? Pe.d = en : en.push(ei, !0)
                                            } else pi.ondata(null, ei, !0)
                                        },
                                        terminate: function() {
                                            Pe.k[0] == Rt && Pe.d.terminate && Pe.d.terminate()
                                        }
                                    };
                                    Gi >= 0 && (pi.size = Gi, pi.originalSize = ki), At.onfile(pi)
                                }
                                return "break"
                            }
                            if (ye) {
                                if (ti == 134695760) return J = Yt += 12 + (ye == -2 && 8), _t = 2, At.c = 0, "break";
                                if (ti == 33639248) return J = Yt -= 4, _t = 2, At.c = 0, "break"
                            }
                        }, At = this; Yt < re - 4 && rt() !== "break"; ++Yt);
                    if (this.p = ei, ye < 0) {
                        var Mt = W.subarray(0, _t ? J - 12 - (ye == -2 && 8) - (Pt(W, J - 16) == 134695760 && 4) : Yt);
                        me ? me.push(Mt, !!_t) : this.k[+(_t == 2)].push(Mt)
                    }
                    if (2 & _t) return this.push(W.subarray(Yt), de);
                    this.p = W.subarray(Yt)
                }
                if (de && this.c) throw "invalid zip file"
            }, Z.prototype.register = function(q) {
                this.o[q.compression] = q
            }, Z
        }();

        function Va(Z, q) {
            if (typeof q != "function") throw "no callback";
            for (var de = [], Pe = function() {
                    for (var me = 0; me < de.length; ++me) de[me]()
                }, Et = {}, Ft = Z.length - 22; Pt(Z, Ft) != 101010256; --Ft)
                if (!Ft || Z.length - Ft > 65558) return void q("invalid zip file", null);
            var _t = Ht(Z, Ft + 8);
            _t || q(null, {});
            var Yt = _t,
                J = Pt(Z, Ft + 16),
                W = J == 4294967295;
            if (W) {
                if (Ft = Pt(Z, Ft - 12), Pt(Z, Ft) != 101075792) return void q("invalid zip file", null);
                Yt = _t = Pt(Z, Ft + 32), J = Pt(Z, Ft + 48)
            }
            for (var re = function(me) {
                    var rt = ra(Z, J, W),
                        At = rt[0],
                        Mt = rt[1],
                        si = rt[2],
                        ti = rt[3],
                        ni = rt[4],
                        ri = Lr(Z, rt[5]);
                    J = ni;
                    var Wi = function(Pi, ai) {
                        Pi ? (Pe(), q(Pi, null)) : (Et[ti] = ai, --_t || q(null, Et))
                    };
                    if (At)
                        if (At == 8) {
                            var Ci = Z.subarray(ri, ri + Mt);
                            if (Mt < 32e4) try {
                                Wi(null, Ae(Ci, new V(si)))
                            } catch (Pi) {
                                Wi(Pi, null)
                            } else de.push(fe(Ci, {
                                size: si
                            }, Wi))
                        } else Wi("unknown compression type " + At, null);
                    else Wi(null, K(Z, ri, ri + Mt))
                }, ye = 0; ye < Yt; ++ye) re();
            return Pe
        }

        function Da(Z) {
            for (var q = {}, de = Z.length - 22; Pt(Z, de) != 101010256; --de)
                if (!de || Z.length - de > 65558) throw "invalid zip file";
            var Pe = Ht(Z, de + 8);
            if (!Pe) return {};
            var Et = Pt(Z, de + 16),
                Ft = Et == 4294967295;
            if (Ft) {
                if (de = Pt(Z, de - 12), Pt(Z, de) != 101075792) throw "invalid zip file";
                Pe = Pt(Z, de + 32), Et = Pt(Z, de + 48)
            }
            for (var _t = 0; _t < Pe; ++_t) {
                var Yt = ra(Z, Et, Ft),
                    J = Yt[0],
                    W = Yt[1],
                    re = Yt[2],
                    ye = Yt[3],
                    me = Yt[4],
                    rt = Lr(Z, Yt[5]);
                if (Et = me, J) {
                    if (J != 8) throw "unknown compression type " + J;
                    q[ye] = Ae(Z.subarray(rt, rt + W), new V(re))
                } else q[ye] = K(Z, rt, rt + W)
            }
            return q
        }
        return y.Unzip = os, y.unzip = Va, y.unzipSync = Da, y
    })
})(Pp, Pp.exports);
var dm = Pp.exports;
(function(ue, R) {
    const y = Xa,
        z = dm;
    y.FBXLoader = function() {
        var V, Y, C;

        function p(O) {
            y.Loader.call(this, O)
        }
        p.prototype = Object.assign(Object.create(y.Loader.prototype), {
            constructor: p,
            load: function(O, K, ae, _e) {
                var xe = this,
                    Ze = xe.path === "" ? y.LoaderUtils.extractUrlBase(O) : xe.path,
                    st = new y.FileLoader(this.manager);
                st.setPath(xe.path), st.setResponseType("arraybuffer"), st.setRequestHeader(xe.requestHeader), st.setWithCredentials(xe.withCredentials), st.load(O, function(De) {
                    try {
                        K(xe.parse(De, Ze))
                    } catch (gt) {
                        _e ? _e(gt) : console.error(gt), xe.manager.itemError(O)
                    }
                }, ae, _e)
            },
            parse: function(O, K) {
                if (Je(O)) V = new Ee().parse(O);
                else {
                    var ae = Ei(O);
                    if (!wt(ae)) throw new Error("THREE.FBXLoader: Unknown format.");
                    if (Ke(ae) < 7e3) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Ke(ae));
                    V = new be().parse(ae)
                }
                var _e = new y.TextureLoader(this.manager).setPath(this.resourcePath || K).setCrossOrigin(this.crossOrigin);
                return new se(_e, this.manager).parse(V)
            }
        });

        function se(O, K) {
            this.textureLoader = O, this.manager = K
        }
        se.prototype = {
            constructor: se,
            parse: function() {
                Y = this.parseConnections();
                var O = this.parseImages(),
                    K = this.parseTextures(O),
                    ae = this.parseMaterials(K),
                    _e = this.parseDeformers(),
                    xe = new ie().parse(_e);
                return this.parseScene(_e, xe, ae), C
            },
            parseConnections: function() {
                var O = new Map;
                if ("Connections" in V) {
                    var K = V.Connections.connections;
                    K.forEach(function(ae) {
                        var _e = ae[0],
                            xe = ae[1],
                            Ze = ae[2];
                        O.has(_e) || O.set(_e, {
                            parents: [],
                            children: []
                        });
                        var st = {
                            ID: xe,
                            relationship: Ze
                        };
                        O.get(_e).parents.push(st), O.has(xe) || O.set(xe, {
                            parents: [],
                            children: []
                        });
                        var De = {
                            ID: _e,
                            relationship: Ze
                        };
                        O.get(xe).children.push(De)
                    })
                }
                return O
            },
            parseImages: function() {
                var O = {},
                    K = {};
                if ("Video" in V.Objects) {
                    var ae = V.Objects.Video;
                    for (var _e in ae) {
                        var xe = ae[_e],
                            Ze = parseInt(_e);
                        if (O[Ze] = xe.RelativeFilename || xe.Filename, "Content" in xe) {
                            var st = xe.Content instanceof ArrayBuffer && xe.Content.byteLength > 0,
                                De = typeof xe.Content == "string" && xe.Content !== "";
                            if (st || De) {
                                var gt = this.parseImage(ae[_e]);
                                K[xe.RelativeFilename || xe.Filename] = gt
                            }
                        }
                    }
                }
                for (var Ze in O) {
                    var Qt = O[Ze];
                    K[Qt] !== void 0 ? O[Ze] = K[Qt] : O[Ze] = O[Ze].split("\\").pop()
                }
                return O
            },
            parseImage: function(O) {
                var K = O.Content,
                    ae = O.RelativeFilename || O.Filename,
                    _e = ae.slice(ae.lastIndexOf(".") + 1).toLowerCase(),
                    xe;
                switch (_e) {
                    case "bmp":
                        xe = "image/bmp";
                        break;
                    case "jpg":
                    case "jpeg":
                        xe = "image/jpeg";
                        break;
                    case "png":
                        xe = "image/png";
                        break;
                    case "tif":
                        xe = "image/tiff";
                        break;
                    case "tga":
                        this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", ae), xe = "image/tga";
                        break;
                    default:
                        console.warn('FBXLoader: Image type "' + _e + '" is not supported.');
                        return
                }
                if (typeof K == "string") return "data:" + xe + ";base64," + K;
                var Ze = new Uint8Array(K);
                return window.URL.createObjectURL(new Blob([Ze], {
                    type: xe
                }))
            },
            parseTextures: function(O) {
                var K = new Map;
                if ("Texture" in V.Objects) {
                    var ae = V.Objects.Texture;
                    for (var _e in ae) {
                        var xe = this.parseTexture(ae[_e], O);
                        K.set(parseInt(_e), xe)
                    }
                }
                return K
            },
            parseTexture: function(O, K) {
                var ae = this.loadTexture(O, K);
                ae.ID = O.id, ae.name = O.attrName;
                var _e = O.WrapModeU,
                    xe = O.WrapModeV,
                    Ze = _e !== void 0 ? _e.value : 0,
                    st = xe !== void 0 ? xe.value : 0;
                if (ae.wrapS = Ze === 0 ? y.RepeatWrapping : y.ClampToEdgeWrapping, ae.wrapT = st === 0 ? y.RepeatWrapping : y.ClampToEdgeWrapping, "Scaling" in O) {
                    var De = O.Scaling.value;
                    ae.repeat.x = De[0], ae.repeat.y = De[1]
                }
                return ae
            },
            loadTexture: function(O, K) {
                var ae, _e = this.textureLoader.path,
                    xe = Y.get(O.id).children;
                xe !== void 0 && xe.length > 0 && K[xe[0].ID] !== void 0 && (ae = K[xe[0].ID], (ae.indexOf("blob:") === 0 || ae.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
                var Ze, st = O.FileName.slice(-3).toLowerCase();
                if (st === "tga") {
                    var De = this.manager.getHandler(".tga");
                    De === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", O.RelativeFilename), Ze = new y.Texture) : Ze = De.load(ae)
                } else st === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", O.RelativeFilename), Ze = new y.Texture) : Ze = this.textureLoader.load(ae);
                return this.textureLoader.setPath(_e), Ze
            },
            parseMaterials: function(O) {
                var K = new Map;
                if ("Material" in V.Objects) {
                    var ae = V.Objects.Material;
                    for (var _e in ae) {
                        var xe = this.parseMaterial(ae[_e], O);
                        xe !== null && K.set(parseInt(_e), xe)
                    }
                }
                return K
            },
            parseMaterial: function(O, K) {
                var ae = O.id,
                    _e = O.attrName,
                    xe = O.ShadingModel;
                if (typeof xe == "object" && (xe = xe.value), !Y.has(ae)) return null;
                var Ze = this.parseParameters(O, K, ae),
                    st;
                switch (xe.toLowerCase()) {
                    case "phong":
                        st = new y.MeshPhongMaterial;
                        break;
                    case "lambert":
                        st = new y.MeshLambertMaterial;
                        break;
                    default:
                        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', xe), st = new y.MeshPhongMaterial;
                        break
                }
                return st.setValues(Ze), st.name = _e, st
            },
            parseParameters: function(O, K, ae) {
                var _e = {};
                O.BumpFactor && (_e.bumpScale = O.BumpFactor.value), O.Diffuse ? _e.color = new y.Color().fromArray(O.Diffuse.value) : O.DiffuseColor && (O.DiffuseColor.type === "Color" || O.DiffuseColor.type === "ColorRGB") && (_e.color = new y.Color().fromArray(O.DiffuseColor.value)), O.DisplacementFactor && (_e.displacementScale = O.DisplacementFactor.value), O.Emissive ? _e.emissive = new y.Color().fromArray(O.Emissive.value) : O.EmissiveColor && (O.EmissiveColor.type === "Color" || O.EmissiveColor.type === "ColorRGB") && (_e.emissive = new y.Color().fromArray(O.EmissiveColor.value)), O.EmissiveFactor && (_e.emissiveIntensity = parseFloat(O.EmissiveFactor.value)), O.Opacity && (_e.opacity = parseFloat(O.Opacity.value)), _e.opacity < 1 && (_e.transparent = !0), O.ReflectionFactor && (_e.reflectivity = O.ReflectionFactor.value), O.Shininess && (_e.shininess = O.Shininess.value), O.Specular ? _e.specular = new y.Color().fromArray(O.Specular.value) : O.SpecularColor && O.SpecularColor.type === "Color" && (_e.specular = new y.Color().fromArray(O.SpecularColor.value));
                var xe = this;
                return Y.get(ae).children.forEach(function(Ze) {
                    var st = Ze.relationship;
                    switch (st) {
                        case "Bump":
                            _e.bumpMap = xe.getTexture(K, Ze.ID);
                            break;
                        case "Maya|TEX_ao_map":
                            _e.aoMap = xe.getTexture(K, Ze.ID);
                            break;
                        case "DiffuseColor":
                        case "Maya|TEX_color_map":
                            _e.map = xe.getTexture(K, Ze.ID), _e.map.encoding = y.sRGBEncoding;
                            break;
                        case "DisplacementColor":
                            _e.displacementMap = xe.getTexture(K, Ze.ID);
                            break;
                        case "EmissiveColor":
                            _e.emissiveMap = xe.getTexture(K, Ze.ID), _e.emissiveMap.encoding = y.sRGBEncoding;
                            break;
                        case "NormalMap":
                        case "Maya|TEX_normal_map":
                            _e.normalMap = xe.getTexture(K, Ze.ID);
                            break;
                        case "ReflectionColor":
                            _e.envMap = xe.getTexture(K, Ze.ID), _e.envMap.mapping = y.EquirectangularReflectionMapping, _e.envMap.encoding = y.sRGBEncoding;
                            break;
                        case "SpecularColor":
                            _e.specularMap = xe.getTexture(K, Ze.ID), _e.specularMap.encoding = y.sRGBEncoding;
                            break;
                        case "TransparentColor":
                        case "TransparencyFactor":
                            _e.alphaMap = xe.getTexture(K, Ze.ID), _e.transparent = !0;
                            break;
                        case "AmbientColor":
                        case "ShininessExponent":
                        case "SpecularFactor":
                        case "VectorDisplacementColor":
                        default:
                            console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", st);
                            break
                    }
                }), _e
            },
            getTexture: function(O, K) {
                return "LayeredTexture" in V.Objects && K in V.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), K = Y.get(K).children[0].ID), O.get(K)
            },
            parseDeformers: function() {
                var O = {},
                    K = {};
                if ("Deformer" in V.Objects) {
                    var ae = V.Objects.Deformer;
                    for (var _e in ae) {
                        var xe = ae[_e],
                            Ze = Y.get(parseInt(_e));
                        if (xe.attrType === "Skin") {
                            var st = this.parseSkeleton(Ze, ae);
                            st.ID = _e, Ze.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), st.geometryID = Ze.parents[0].ID, O[_e] = st
                        } else if (xe.attrType === "BlendShape") {
                            var De = {
                                id: _e
                            };
                            De.rawTargets = this.parseMorphTargets(Ze, ae), De.id = _e, Ze.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), K[_e] = De
                        }
                    }
                }
                return {
                    skeletons: O,
                    morphTargets: K
                }
            },
            parseSkeleton: function(O, K) {
                var ae = [];
                return O.children.forEach(function(_e) {
                    var xe = K[_e.ID];
                    if (xe.attrType === "Cluster") {
                        var Ze = {
                            ID: _e.ID,
                            indices: [],
                            weights: [],
                            transformLink: new y.Matrix4().fromArray(xe.TransformLink.a)
                        };
                        "Indexes" in xe && (Ze.indices = xe.Indexes.a, Ze.weights = xe.Weights.a), ae.push(Ze)
                    }
                }), {
                    rawBones: ae,
                    bones: []
                }
            },
            parseMorphTargets: function(O, K) {
                for (var ae = [], _e = 0; _e < O.children.length; _e++) {
                    var xe = O.children[_e],
                        Ze = K[xe.ID],
                        st = {
                            name: Ze.attrName,
                            initialWeight: Ze.DeformPercent,
                            id: Ze.id,
                            fullWeights: Ze.FullWeights.a
                        };
                    if (Ze.attrType !== "BlendShapeChannel") return;
                    st.geoID = Y.get(parseInt(xe.ID)).children.filter(function(De) {
                        return De.relationship === void 0
                    })[0].ID, ae.push(st)
                }
                return ae
            },
            parseScene: function(O, K, ae) {
                C = new y.Group;
                var _e = this.parseModels(O.skeletons, K, ae),
                    xe = V.Objects.Model,
                    Ze = this;
                _e.forEach(function(De) {
                    var gt = xe[De.ID];
                    Ze.setLookAtProperties(De, gt);
                    var Qt = Y.get(De.ID).parents;
                    Qt.forEach(function(Ve) {
                        var Dt = _e.get(Ve.ID);
                        Dt !== void 0 && Dt.add(De)
                    }), De.parent === null && C.add(De)
                }), this.bindSkeleton(O.skeletons, K, _e), this.createAmbientLight(), this.setupMorphMaterials(), C.traverse(function(De) {
                    if (De.userData.transformData) {
                        De.parent && (De.userData.transformData.parentMatrix = De.parent.matrix, De.userData.transformData.parentMatrixWorld = De.parent.matrixWorld);
                        var gt = Kt(De.userData.transformData);
                        De.applyMatrix4(gt), De.updateWorldMatrix()
                    }
                });
                var st = new He().parse();
                C.children.length === 1 && C.children[0].isGroup && (C.children[0].animations = st, C = C.children[0]), C.animations = st
            },
            parseModels: function(O, K, ae) {
                var _e = new Map,
                    xe = V.Objects.Model;
                for (var Ze in xe) {
                    var st = parseInt(Ze),
                        De = xe[Ze],
                        gt = Y.get(st),
                        Qt = this.buildSkeleton(gt, O, st, De.attrName);
                    if (!Qt) {
                        switch (De.attrType) {
                            case "Camera":
                                Qt = this.createCamera(gt);
                                break;
                            case "Light":
                                Qt = this.createLight(gt);
                                break;
                            case "Mesh":
                                Qt = this.createMesh(gt, K, ae);
                                break;
                            case "NurbsCurve":
                                Qt = this.createCurve(gt, K);
                                break;
                            case "LimbNode":
                            case "Root":
                                Qt = new y.Bone;
                                break;
                            case "Null":
                            default:
                                Qt = new y.Group;
                                break
                        }
                        Qt.name = De.attrName ? y.PropertyBinding.sanitizeNodeName(De.attrName) : "", Qt.ID = st
                    }
                    this.getTransformData(Qt, De), _e.set(st, Qt)
                }
                return _e
            },
            buildSkeleton: function(O, K, ae, _e) {
                var xe = null;
                return O.parents.forEach(function(Ze) {
                    for (var st in K) {
                        var De = K[st];
                        De.rawBones.forEach(function(gt, Qt) {
                            if (gt.ID === Ze.ID) {
                                var Ve = xe;
                                xe = new y.Bone, xe.matrixWorld.copy(gt.transformLink), xe.name = _e ? y.PropertyBinding.sanitizeNodeName(_e) : "", xe.ID = ae, De.bones[Qt] = xe, Ve !== null && xe.add(Ve)
                            }
                        })
                    }
                }), xe
            },
            createCamera: function(O) {
                var K, ae;
                if (O.children.forEach(function(Dt) {
                        var ei = V.Objects.NodeAttribute[Dt.ID];
                        ei !== void 0 && (ae = ei)
                    }), ae === void 0) K = new y.Object3D;
                else {
                    var _e = 0;
                    ae.CameraProjectionType !== void 0 && ae.CameraProjectionType.value === 1 && (_e = 1);
                    var xe = 1;
                    ae.NearPlane !== void 0 && (xe = ae.NearPlane.value / 1e3);
                    var Ze = 1e3;
                    ae.FarPlane !== void 0 && (Ze = ae.FarPlane.value / 1e3);
                    var st = window.innerWidth,
                        De = window.innerHeight;
                    ae.AspectWidth !== void 0 && ae.AspectHeight !== void 0 && (st = ae.AspectWidth.value, De = ae.AspectHeight.value);
                    var gt = st / De,
                        Qt = 45;
                    ae.FieldOfView !== void 0 && (Qt = ae.FieldOfView.value);
                    var Ve = ae.FocalLength ? ae.FocalLength.value : null;
                    switch (_e) {
                        case 0:
                            K = new y.PerspectiveCamera(Qt, gt, xe, Ze), Ve !== null && K.setFocalLength(Ve);
                            break;
                        case 1:
                            K = new y.OrthographicCamera(-st / 2, st / 2, De / 2, -De / 2, xe, Ze);
                            break;
                        default:
                            console.warn("THREE.FBXLoader: Unknown camera type " + _e + "."), K = new y.Object3D;
                            break
                    }
                }
                return K
            },
            createLight: function(O) {
                var K, ae;
                if (O.children.forEach(function(Ve) {
                        var Dt = V.Objects.NodeAttribute[Ve.ID];
                        Dt !== void 0 && (ae = Dt)
                    }), ae === void 0) K = new y.Object3D;
                else {
                    var _e;
                    ae.LightType === void 0 ? _e = 0 : _e = ae.LightType.value;
                    var xe = 16777215;
                    ae.Color !== void 0 && (xe = new y.Color().fromArray(ae.Color.value));
                    var Ze = ae.Intensity === void 0 ? 1 : ae.Intensity.value / 100;
                    ae.CastLightOnObject !== void 0 && ae.CastLightOnObject.value === 0 && (Ze = 0);
                    var st = 0;
                    ae.FarAttenuationEnd !== void 0 && (ae.EnableFarAttenuation !== void 0 && ae.EnableFarAttenuation.value === 0 ? st = 0 : st = ae.FarAttenuationEnd.value);
                    var De = 1;
                    switch (_e) {
                        case 0:
                            K = new y.PointLight(xe, Ze, st, De);
                            break;
                        case 1:
                            K = new y.DirectionalLight(xe, Ze);
                            break;
                        case 2:
                            var gt = Math.PI / 3;
                            ae.InnerAngle !== void 0 && (gt = y.MathUtils.degToRad(ae.InnerAngle.value));
                            var Qt = 0;
                            ae.OuterAngle !== void 0 && (Qt = y.MathUtils.degToRad(ae.OuterAngle.value), Qt = Math.max(Qt, 1)), K = new y.SpotLight(xe, Ze, st, gt, Qt, De);
                            break;
                        default:
                            console.warn("THREE.FBXLoader: Unknown light type " + ae.LightType.value + ", defaulting to a THREE.PointLight."), K = new y.PointLight(xe, Ze);
                            break
                    }
                    ae.CastShadows !== void 0 && ae.CastShadows.value === 1 && (K.castShadow = !0)
                }
                return K
            },
            createMesh: function(O, K, ae) {
                var _e, xe = null,
                    Ze = null,
                    st = [];
                return O.children.forEach(function(De) {
                    K.has(De.ID) && (xe = K.get(De.ID)), ae.has(De.ID) && st.push(ae.get(De.ID))
                }), st.length > 1 ? Ze = st : st.length > 0 ? Ze = st[0] : (Ze = new y.MeshPhongMaterial({
                    color: 13421772
                }), st.push(Ze)), "color" in xe.attributes && st.forEach(function(De) {
                    De.vertexColors = !0
                }), xe.FBX_Deformer ? (st.forEach(function(De) {
                    De.skinning = !0
                }), _e = new y.SkinnedMesh(xe, Ze), _e.normalizeSkinWeights()) : _e = new y.Mesh(xe, Ze), _e
            },
            createCurve: function(O, K) {
                var ae = O.children.reduce(function(xe, Ze) {
                        return K.has(Ze.ID) && (xe = K.get(Ze.ID)), xe
                    }, null),
                    _e = new y.LineBasicMaterial({
                        color: 3342591,
                        linewidth: 1
                    });
                return new y.Line(ae, _e)
            },
            getTransformData: function(O, K) {
                var ae = {};
                "InheritType" in K && (ae.inheritType = parseInt(K.InheritType.value)), "RotationOrder" in K ? ae.eulerOrder = vi(K.RotationOrder.value) : ae.eulerOrder = "ZYX", "Lcl_Translation" in K && (ae.translation = K.Lcl_Translation.value), "PreRotation" in K && (ae.preRotation = K.PreRotation.value), "Lcl_Rotation" in K && (ae.rotation = K.Lcl_Rotation.value), "PostRotation" in K && (ae.postRotation = K.PostRotation.value), "Lcl_Scaling" in K && (ae.scale = K.Lcl_Scaling.value), "ScalingOffset" in K && (ae.scalingOffset = K.ScalingOffset.value), "ScalingPivot" in K && (ae.scalingPivot = K.ScalingPivot.value), "RotationOffset" in K && (ae.rotationOffset = K.RotationOffset.value), "RotationPivot" in K && (ae.rotationPivot = K.RotationPivot.value), O.userData.transformData = ae
            },
            setLookAtProperties: function(O, K) {
                if ("LookAtProperty" in K) {
                    var ae = Y.get(O.ID).children;
                    ae.forEach(function(_e) {
                        if (_e.relationship === "LookAtProperty") {
                            var xe = V.Objects.Model[_e.ID];
                            if ("Lcl_Translation" in xe) {
                                var Ze = xe.Lcl_Translation.value;
                                O.target !== void 0 ? (O.target.position.fromArray(Ze), C.add(O.target)) : O.lookAt(new y.Vector3().fromArray(Ze))
                            }
                        }
                    })
                }
            },
            bindSkeleton: function(O, K, ae) {
                var _e = this.parsePoseNodes();
                for (var xe in O) {
                    var Ze = O[xe],
                        st = Y.get(parseInt(Ze.ID)).parents;
                    st.forEach(function(De) {
                        if (K.has(De.ID)) {
                            var gt = De.ID,
                                Qt = Y.get(gt);
                            Qt.parents.forEach(function(Ve) {
                                if (ae.has(Ve.ID)) {
                                    var Dt = ae.get(Ve.ID);
                                    Dt.bind(new y.Skeleton(Ze.bones), _e[Ve.ID])
                                }
                            })
                        }
                    })
                }
            },
            parsePoseNodes: function() {
                var O = {};
                if ("Pose" in V.Objects) {
                    var K = V.Objects.Pose;
                    for (var ae in K)
                        if (K[ae].attrType === "BindPose") {
                            var _e = K[ae].PoseNode;
                            Array.isArray(_e) ? _e.forEach(function(xe) {
                                O[xe.Node] = new y.Matrix4().fromArray(xe.Matrix.a)
                            }) : O[_e.Node] = new y.Matrix4().fromArray(_e.Matrix.a)
                        }
                }
                return O
            },
            createAmbientLight: function() {
                if ("GlobalSettings" in V && "AmbientColor" in V.GlobalSettings) {
                    var O = V.GlobalSettings.AmbientColor.value,
                        K = O[0],
                        ae = O[1],
                        _e = O[2];
                    if (K !== 0 || ae !== 0 || _e !== 0) {
                        var xe = new y.Color(K, ae, _e);
                        C.add(new y.AmbientLight(xe, 1))
                    }
                }
            },
            setupMorphMaterials: function() {
                var O = this;
                C.traverse(function(K) {
                    K.isMesh && K.geometry.morphAttributes.position && K.geometry.morphAttributes.position.length && (Array.isArray(K.material) ? K.material.forEach(function(ae, _e) {
                        O.setupMorphMaterial(K, ae, _e)
                    }) : O.setupMorphMaterial(K, K.material))
                })
            },
            setupMorphMaterial: function(O, K, ae) {
                var _e = O.uuid,
                    xe = K.uuid,
                    Ze = !1;
                if (C.traverse(function(De) {
                        De.isMesh && (Array.isArray(De.material) ? De.material.forEach(function(gt) {
                            gt.uuid === xe && De.uuid !== _e && (Ze = !0)
                        }) : De.material.uuid === xe && De.uuid !== _e && (Ze = !0))
                    }), Ze === !0) {
                    var st = K.clone();
                    st.morphTargets = !0, ae === void 0 ? O.material = st : O.material[ae] = st
                } else K.morphTargets = !0
            }
        };

        function ie() {}
        ie.prototype = {
            constructor: ie,
            parse: function(O) {
                var K = new Map;
                if ("Geometry" in V.Objects) {
                    var ae = V.Objects.Geometry;
                    for (var _e in ae) {
                        var xe = Y.get(parseInt(_e)),
                            Ze = this.parseGeometry(xe, ae[_e], O);
                        K.set(parseInt(_e), Ze)
                    }
                }
                return K
            },
            parseGeometry: function(O, K, ae) {
                switch (K.attrType) {
                    case "Mesh":
                        return this.parseMeshGeometry(O, K, ae);
                    case "NurbsCurve":
                        return this.parseNurbsGeometry(K)
                }
            },
            parseMeshGeometry: function(O, K, ae) {
                var _e = ae.skeletons,
                    xe = [],
                    Ze = O.parents.map(function(Ve) {
                        return V.Objects.Model[Ve.ID]
                    });
                if (Ze.length !== 0) {
                    var st = O.children.reduce(function(Ve, Dt) {
                        return _e[Dt.ID] !== void 0 && (Ve = _e[Dt.ID]), Ve
                    }, null);
                    O.children.forEach(function(Ve) {
                        ae.morphTargets[Ve.ID] !== void 0 && xe.push(ae.morphTargets[Ve.ID])
                    });
                    var De = Ze[0],
                        gt = {};
                    "RotationOrder" in De && (gt.eulerOrder = vi(De.RotationOrder.value)), "InheritType" in De && (gt.inheritType = parseInt(De.InheritType.value)), "GeometricTranslation" in De && (gt.translation = De.GeometricTranslation.value), "GeometricRotation" in De && (gt.rotation = De.GeometricRotation.value), "GeometricScaling" in De && (gt.scale = De.GeometricScaling.value);
                    var Qt = Kt(gt);
                    return this.genGeometry(K, st, xe, Qt)
                }
            },
            genGeometry: function(O, K, ae, _e) {
                var xe = new y.BufferGeometry;
                O.attrName && (xe.name = O.attrName);
                var Ze = this.parseGeoNode(O, K),
                    st = this.genBuffers(Ze),
                    De = new y.Float32BufferAttribute(st.vertex, 3);
                if (De.applyMatrix4(_e), xe.setAttribute("position", De), st.colors.length > 0 && xe.setAttribute("color", new y.Float32BufferAttribute(st.colors, 3)), K && (xe.setAttribute("skinIndex", new y.Uint16BufferAttribute(st.weightsIndices, 4)), xe.setAttribute("skinWeight", new y.Float32BufferAttribute(st.vertexWeights, 4)), xe.FBX_Deformer = K), st.normal.length > 0) {
                    var gt = new y.Matrix3().getNormalMatrix(_e),
                        Qt = new y.Float32BufferAttribute(st.normal, 3);
                    Qt.applyNormalMatrix(gt), xe.setAttribute("normal", Qt)
                }
                if (st.uvs.forEach(function(oe, ve) {
                        var Ne = "uv" + (ve + 1).toString();
                        ve === 0 && (Ne = "uv"), xe.setAttribute(Ne, new y.Float32BufferAttribute(st.uvs[ve], 2))
                    }), Ze.material && Ze.material.mappingType !== "AllSame") {
                    var Ve = st.materialIndex[0],
                        Dt = 0;
                    if (st.materialIndex.forEach(function(oe, ve) {
                            oe !== Ve && (xe.addGroup(Dt, ve - Dt, Ve), Ve = oe, Dt = ve)
                        }), xe.groups.length > 0) {
                        var ei = xe.groups[xe.groups.length - 1],
                            xi = ei.start + ei.count;
                        xi !== st.materialIndex.length && xe.addGroup(xi, st.materialIndex.length - xi, Ve)
                    }
                    xe.groups.length === 0 && xe.addGroup(0, st.materialIndex.length, st.materialIndex[0])
                }
                return this.addMorphTargets(xe, O, ae, _e), xe
            },
            parseGeoNode: function(O, K) {
                var ae = {};
                if (ae.vertexPositions = O.Vertices !== void 0 ? O.Vertices.a : [], ae.vertexIndices = O.PolygonVertexIndex !== void 0 ? O.PolygonVertexIndex.a : [], O.LayerElementColor && (ae.color = this.parseVertexColors(O.LayerElementColor[0])), O.LayerElementMaterial && (ae.material = this.parseMaterialIndices(O.LayerElementMaterial[0])), O.LayerElementNormal && (ae.normal = this.parseNormals(O.LayerElementNormal[0])), O.LayerElementUV) {
                    ae.uv = [];
                    for (var _e = 0; O.LayerElementUV[_e];) O.LayerElementUV[_e].UV && ae.uv.push(this.parseUVs(O.LayerElementUV[_e])), _e++
                }
                return ae.weightTable = {}, K !== null && (ae.skeleton = K, K.rawBones.forEach(function(xe, Ze) {
                    xe.indices.forEach(function(st, De) {
                        ae.weightTable[st] === void 0 && (ae.weightTable[st] = []), ae.weightTable[st].push({
                            id: Ze,
                            weight: xe.weights[De]
                        })
                    })
                })), ae
            },
            genBuffers: function(O) {
                var K = {
                        vertex: [],
                        normal: [],
                        colors: [],
                        uvs: [],
                        materialIndex: [],
                        vertexWeights: [],
                        weightsIndices: []
                    },
                    ae = 0,
                    _e = 0,
                    xe = !1,
                    Ze = [],
                    st = [],
                    De = [],
                    gt = [],
                    Qt = [],
                    Ve = [],
                    Dt = this;
                return O.vertexIndices.forEach(function(ei, xi) {
                    var oe = !1;
                    ei < 0 && (ei = ei ^ -1, oe = !0);
                    var ve = [],
                        Ne = [];
                    if (Ze.push(ei * 3, ei * 3 + 1, ei * 3 + 2), O.color) {
                        var Ue = di(xi, ae, ei, O.color);
                        De.push(Ue[0], Ue[1], Ue[2])
                    }
                    if (O.skeleton) {
                        if (O.weightTable[ei] !== void 0 && O.weightTable[ei].forEach(function(Bt) {
                                Ne.push(Bt.weight), ve.push(Bt.id)
                            }), Ne.length > 4) {
                            xe || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), xe = !0);
                            var Oe = [0, 0, 0, 0],
                                at = [0, 0, 0, 0];
                            Ne.forEach(function(Bt, Le) {
                                var Ot = Bt,
                                    ii = ve[Le];
                                at.forEach(function(Wt, bi, Qi) {
                                    if (Ot > Wt) {
                                        Qi[bi] = Ot, Ot = Wt;
                                        var sn = Oe[bi];
                                        Oe[bi] = ii, ii = sn
                                    }
                                })
                            }), ve = Oe, Ne = at
                        }
                        for (; Ne.length < 4;) Ne.push(0), ve.push(0);
                        for (var ht = 0; ht < 4; ++ht) Qt.push(Ne[ht]), Ve.push(ve[ht])
                    }
                    if (O.normal) {
                        var Ue = di(xi, ae, ei, O.normal);
                        st.push(Ue[0], Ue[1], Ue[2])
                    }
                    if (O.material && O.material.mappingType !== "AllSame") var tt = di(xi, ae, ei, O.material)[0];
                    O.uv && O.uv.forEach(function(Bt, Le) {
                        var Ot = di(xi, ae, ei, Bt);
                        gt[Le] === void 0 && (gt[Le] = []), gt[Le].push(Ot[0]), gt[Le].push(Ot[1])
                    }), _e++, oe && (Dt.genFace(K, O, Ze, tt, st, De, gt, Qt, Ve, _e), ae++, _e = 0, Ze = [], st = [], De = [], gt = [], Qt = [], Ve = [])
                }), K
            },
            genFace: function(O, K, ae, _e, xe, Ze, st, De, gt, Qt) {
                for (var Ve = 2; Ve < Qt; Ve++) O.vertex.push(K.vertexPositions[ae[0]]), O.vertex.push(K.vertexPositions[ae[1]]), O.vertex.push(K.vertexPositions[ae[2]]), O.vertex.push(K.vertexPositions[ae[(Ve - 1) * 3]]), O.vertex.push(K.vertexPositions[ae[(Ve - 1) * 3 + 1]]), O.vertex.push(K.vertexPositions[ae[(Ve - 1) * 3 + 2]]), O.vertex.push(K.vertexPositions[ae[Ve * 3]]), O.vertex.push(K.vertexPositions[ae[Ve * 3 + 1]]), O.vertex.push(K.vertexPositions[ae[Ve * 3 + 2]]), K.skeleton && (O.vertexWeights.push(De[0]), O.vertexWeights.push(De[1]), O.vertexWeights.push(De[2]), O.vertexWeights.push(De[3]), O.vertexWeights.push(De[(Ve - 1) * 4]), O.vertexWeights.push(De[(Ve - 1) * 4 + 1]), O.vertexWeights.push(De[(Ve - 1) * 4 + 2]), O.vertexWeights.push(De[(Ve - 1) * 4 + 3]), O.vertexWeights.push(De[Ve * 4]), O.vertexWeights.push(De[Ve * 4 + 1]), O.vertexWeights.push(De[Ve * 4 + 2]), O.vertexWeights.push(De[Ve * 4 + 3]), O.weightsIndices.push(gt[0]), O.weightsIndices.push(gt[1]), O.weightsIndices.push(gt[2]), O.weightsIndices.push(gt[3]), O.weightsIndices.push(gt[(Ve - 1) * 4]), O.weightsIndices.push(gt[(Ve - 1) * 4 + 1]), O.weightsIndices.push(gt[(Ve - 1) * 4 + 2]), O.weightsIndices.push(gt[(Ve - 1) * 4 + 3]), O.weightsIndices.push(gt[Ve * 4]), O.weightsIndices.push(gt[Ve * 4 + 1]), O.weightsIndices.push(gt[Ve * 4 + 2]), O.weightsIndices.push(gt[Ve * 4 + 3])), K.color && (O.colors.push(Ze[0]), O.colors.push(Ze[1]), O.colors.push(Ze[2]), O.colors.push(Ze[(Ve - 1) * 3]), O.colors.push(Ze[(Ve - 1) * 3 + 1]), O.colors.push(Ze[(Ve - 1) * 3 + 2]), O.colors.push(Ze[Ve * 3]), O.colors.push(Ze[Ve * 3 + 1]), O.colors.push(Ze[Ve * 3 + 2])), K.material && K.material.mappingType !== "AllSame" && (O.materialIndex.push(_e), O.materialIndex.push(_e), O.materialIndex.push(_e)), K.normal && (O.normal.push(xe[0]), O.normal.push(xe[1]), O.normal.push(xe[2]), O.normal.push(xe[(Ve - 1) * 3]), O.normal.push(xe[(Ve - 1) * 3 + 1]), O.normal.push(xe[(Ve - 1) * 3 + 2]), O.normal.push(xe[Ve * 3]), O.normal.push(xe[Ve * 3 + 1]), O.normal.push(xe[Ve * 3 + 2])), K.uv && K.uv.forEach(function(Dt, ei) {
                    O.uvs[ei] === void 0 && (O.uvs[ei] = []), O.uvs[ei].push(st[ei][0]), O.uvs[ei].push(st[ei][1]), O.uvs[ei].push(st[ei][(Ve - 1) * 2]), O.uvs[ei].push(st[ei][(Ve - 1) * 2 + 1]), O.uvs[ei].push(st[ei][Ve * 2]), O.uvs[ei].push(st[ei][Ve * 2 + 1])
                })
            },
            addMorphTargets: function(O, K, ae, _e) {
                if (ae.length !== 0) {
                    O.morphTargetsRelative = !0, O.morphAttributes.position = [];
                    var xe = this;
                    ae.forEach(function(Ze) {
                        Ze.rawTargets.forEach(function(st) {
                            var De = V.Objects.Geometry[st.geoID];
                            De !== void 0 && xe.genMorphGeometry(O, K, De, _e, st.name)
                        })
                    })
                }
            },
            genMorphGeometry: function(O, K, ae, _e, xe) {
                for (var Ze = K.PolygonVertexIndex !== void 0 ? K.PolygonVertexIndex.a : [], st = ae.Vertices !== void 0 ? ae.Vertices.a : [], De = ae.Indexes !== void 0 ? ae.Indexes.a : [], gt = O.attributes.position.count * 3, Qt = new Float32Array(gt), Ve = 0; Ve < De.length; Ve++) {
                    var Dt = De[Ve] * 3;
                    Qt[Dt] = st[Ve * 3], Qt[Dt + 1] = st[Ve * 3 + 1], Qt[Dt + 2] = st[Ve * 3 + 2]
                }
                var ei = {
                        vertexIndices: Ze,
                        vertexPositions: Qt
                    },
                    xi = this.genBuffers(ei),
                    oe = new y.Float32BufferAttribute(xi.vertex, 3);
                oe.name = xe || ae.attrName, oe.applyMatrix4(_e), O.morphAttributes.position.push(oe)
            },
            parseNormals: function(O) {
                var K = O.MappingInformationType,
                    ae = O.ReferenceInformationType,
                    _e = O.Normals.a,
                    xe = [];
                return ae === "IndexToDirect" && ("NormalIndex" in O ? xe = O.NormalIndex.a : "NormalsIndex" in O && (xe = O.NormalsIndex.a)), {
                    dataSize: 3,
                    buffer: _e,
                    indices: xe,
                    mappingType: K,
                    referenceType: ae
                }
            },
            parseUVs: function(O) {
                var K = O.MappingInformationType,
                    ae = O.ReferenceInformationType,
                    _e = O.UV.a,
                    xe = [];
                return ae === "IndexToDirect" && (xe = O.UVIndex.a), {
                    dataSize: 2,
                    buffer: _e,
                    indices: xe,
                    mappingType: K,
                    referenceType: ae
                }
            },
            parseVertexColors: function(O) {
                var K = O.MappingInformationType,
                    ae = O.ReferenceInformationType,
                    _e = O.Colors.a,
                    xe = [];
                return ae === "IndexToDirect" && (xe = O.ColorIndex.a), {
                    dataSize: 4,
                    buffer: _e,
                    indices: xe,
                    mappingType: K,
                    referenceType: ae
                }
            },
            parseMaterialIndices: function(O) {
                var K = O.MappingInformationType,
                    ae = O.ReferenceInformationType;
                if (K === "NoMappingInformation") return {
                    dataSize: 1,
                    buffer: [0],
                    indices: [0],
                    mappingType: "AllSame",
                    referenceType: ae
                };
                for (var _e = O.Materials.a, xe = [], Ze = 0; Ze < _e.length; ++Ze) xe.push(Ze);
                return {
                    dataSize: 1,
                    buffer: _e,
                    indices: xe,
                    mappingType: K,
                    referenceType: ae
                }
            },
            parseNurbsGeometry: function(O) {
                if (y.NURBSCurve === void 0) return console.error("THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."), new y.BufferGeometry;
                var K = parseInt(O.Order);
                if (isNaN(K)) return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", O.Order, O.id), new y.BufferGeometry;
                for (var ae = K - 1, _e = O.KnotVector.a, xe = [], Ze = O.Points.a, st = 0, De = Ze.length; st < De; st += 4) xe.push(new y.Vector4().fromArray(Ze, st));
                var gt, Qt;
                if (O.Form === "Closed") xe.push(xe[0]);
                else if (O.Form === "Periodic") {
                    gt = ae, Qt = _e.length - 1 - gt;
                    for (var st = 0; st < ae; ++st) xe.push(xe[st])
                }
                var Ve = new y.NURBSCurve(ae, _e, xe, gt, Qt),
                    Dt = Ve.getPoints(xe.length * 7),
                    ei = new Float32Array(Dt.length * 3);
                Dt.forEach(function(oe, ve) {
                    oe.toArray(ei, ve * 3)
                });
                var xi = new y.BufferGeometry;
                return xi.setAttribute("position", new y.BufferAttribute(ei, 3)), xi
            }
        };

        function He() {}
        He.prototype = {
            constructor: He,
            parse: function() {
                var O = [],
                    K = this.parseClips();
                if (K !== void 0)
                    for (var ae in K) {
                        var _e = K[ae],
                            xe = this.addClip(_e);
                        O.push(xe)
                    }
                return O
            },
            parseClips: function() {
                if (V.Objects.AnimationCurve !== void 0) {
                    var O = this.parseAnimationCurveNodes();
                    this.parseAnimationCurves(O);
                    var K = this.parseAnimationLayers(O),
                        ae = this.parseAnimStacks(K);
                    return ae
                }
            },
            parseAnimationCurveNodes: function() {
                var O = V.Objects.AnimationCurveNode,
                    K = new Map;
                for (var ae in O) {
                    var _e = O[ae];
                    if (_e.attrName.match(/S|R|T|DeformPercent/) !== null) {
                        var xe = {
                            id: _e.id,
                            attr: _e.attrName,
                            curves: {}
                        };
                        K.set(xe.id, xe)
                    }
                }
                return K
            },
            parseAnimationCurves: function(O) {
                var K = V.Objects.AnimationCurve;
                for (var ae in K) {
                    var _e = {
                            id: K[ae].id,
                            times: K[ae].KeyTime.a.map(Ye),
                            values: K[ae].KeyValueFloat.a
                        },
                        xe = Y.get(_e.id);
                    if (xe !== void 0) {
                        var Ze = xe.parents[0].ID,
                            st = xe.parents[0].relationship;
                        st.match(/X/) ? O.get(Ze).curves.x = _e : st.match(/Y/) ? O.get(Ze).curves.y = _e : st.match(/Z/) ? O.get(Ze).curves.z = _e : st.match(/d|DeformPercent/) && O.has(Ze) && (O.get(Ze).curves.morph = _e)
                    }
                }
            },
            parseAnimationLayers: function(O) {
                var K = V.Objects.AnimationLayer,
                    ae = new Map;
                for (var _e in K) {
                    var xe = [],
                        Ze = Y.get(parseInt(_e));
                    if (Ze !== void 0) {
                        var st = Ze.children;
                        st.forEach(function(De, gt) {
                            if (O.has(De.ID)) {
                                var Qt = O.get(De.ID);
                                if (Qt.curves.x !== void 0 || Qt.curves.y !== void 0 || Qt.curves.z !== void 0) {
                                    if (xe[gt] === void 0) {
                                        var Ve = Y.get(De.ID).parents.filter(function(Ne) {
                                            return Ne.relationship !== void 0
                                        })[0].ID;
                                        if (Ve !== void 0) {
                                            var Dt = V.Objects.Model[Ve.toString()];
                                            if (Dt === void 0) {
                                                console.warn("THREE.FBXLoader: Encountered a unused curve.", De);
                                                return
                                            }
                                            var ei = {
                                                modelName: Dt.attrName ? y.PropertyBinding.sanitizeNodeName(Dt.attrName) : "",
                                                ID: Dt.id,
                                                initialPosition: [0, 0, 0],
                                                initialRotation: [0, 0, 0],
                                                initialScale: [1, 1, 1]
                                            };
                                            C.traverse(function(Ne) {
                                                Ne.ID === Dt.id && (ei.transform = Ne.matrix, Ne.userData.transformData && (ei.eulerOrder = Ne.userData.transformData.eulerOrder))
                                            }), ei.transform || (ei.transform = new y.Matrix4), "PreRotation" in Dt && (ei.preRotation = Dt.PreRotation.value), "PostRotation" in Dt && (ei.postRotation = Dt.PostRotation.value), xe[gt] = ei
                                        }
                                    }
                                    xe[gt] && (xe[gt][Qt.attr] = Qt)
                                } else if (Qt.curves.morph !== void 0) {
                                    if (xe[gt] === void 0) {
                                        var xi = Y.get(De.ID).parents.filter(function(at) {
                                                return at.relationship !== void 0
                                            })[0].ID,
                                            oe = Y.get(xi).parents[0].ID,
                                            ve = Y.get(oe).parents[0].ID,
                                            Ve = Y.get(ve).parents[0].ID,
                                            Dt = V.Objects.Model[Ve],
                                            ei = {
                                                modelName: Dt.attrName ? y.PropertyBinding.sanitizeNodeName(Dt.attrName) : "",
                                                morphName: V.Objects.Deformer[xi].attrName
                                            };
                                        xe[gt] = ei
                                    }
                                    xe[gt][Qt.attr] = Qt
                                }
                            }
                        }), ae.set(parseInt(_e), xe)
                    }
                }
                return ae
            },
            parseAnimStacks: function(O) {
                var K = V.Objects.AnimationStack,
                    ae = {};
                for (var _e in K) {
                    var xe = Y.get(parseInt(_e)).children;
                    xe.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
                    var Ze = O.get(xe[0].ID);
                    ae[_e] = {
                        name: K[_e].attrName,
                        layer: Ze
                    }
                }
                return ae
            },
            addClip: function(O) {
                var K = [],
                    ae = this;
                return O.layer.forEach(function(_e) {
                    K = K.concat(ae.generateTracks(_e))
                }), new y.AnimationClip(O.name, -1, K)
            },
            generateTracks: function(O) {
                var K = [],
                    ae = new y.Vector3,
                    _e = new y.Quaternion,
                    xe = new y.Vector3;
                if (O.transform && O.transform.decompose(ae, _e, xe), ae = ae.toArray(), _e = new y.Euler().setFromQuaternion(_e, O.eulerOrder).toArray(), xe = xe.toArray(), O.T !== void 0 && Object.keys(O.T.curves).length > 0) {
                    var Ze = this.generateVectorTrack(O.modelName, O.T.curves, ae, "position");
                    Ze !== void 0 && K.push(Ze)
                }
                if (O.R !== void 0 && Object.keys(O.R.curves).length > 0) {
                    var st = this.generateRotationTrack(O.modelName, O.R.curves, _e, O.preRotation, O.postRotation, O.eulerOrder);
                    st !== void 0 && K.push(st)
                }
                if (O.S !== void 0 && Object.keys(O.S.curves).length > 0) {
                    var De = this.generateVectorTrack(O.modelName, O.S.curves, xe, "scale");
                    De !== void 0 && K.push(De)
                }
                if (O.DeformPercent !== void 0) {
                    var gt = this.generateMorphTrack(O);
                    gt !== void 0 && K.push(gt)
                }
                return K
            },
            generateVectorTrack: function(O, K, ae, _e) {
                var xe = this.getTimesForAllAxes(K),
                    Ze = this.getKeyframeTrackValues(xe, K, ae);
                return new y.VectorKeyframeTrack(O + "." + _e, xe, Ze)
            },
            generateRotationTrack: function(O, K, ae, _e, xe, Ze) {
                K.x !== void 0 && (this.interpolateRotations(K.x), K.x.values = K.x.values.map(y.MathUtils.degToRad)), K.y !== void 0 && (this.interpolateRotations(K.y), K.y.values = K.y.values.map(y.MathUtils.degToRad)), K.z !== void 0 && (this.interpolateRotations(K.z), K.z.values = K.z.values.map(y.MathUtils.degToRad));
                var st = this.getTimesForAllAxes(K),
                    De = this.getKeyframeTrackValues(st, K, ae);
                _e !== void 0 && (_e = _e.map(y.MathUtils.degToRad), _e.push(Ze), _e = new y.Euler().fromArray(_e), _e = new y.Quaternion().setFromEuler(_e)), xe !== void 0 && (xe = xe.map(y.MathUtils.degToRad), xe.push(Ze), xe = new y.Euler().fromArray(xe), xe = new y.Quaternion().setFromEuler(xe).invert());
                for (var gt = new y.Quaternion, Qt = new y.Euler, Ve = [], Dt = 0; Dt < De.length; Dt += 3) Qt.set(De[Dt], De[Dt + 1], De[Dt + 2], Ze), gt.setFromEuler(Qt), _e !== void 0 && gt.premultiply(_e), xe !== void 0 && gt.multiply(xe), gt.toArray(Ve, Dt / 3 * 4);
                return new y.QuaternionKeyframeTrack(O + ".quaternion", st, Ve)
            },
            generateMorphTrack: function(O) {
                var K = O.DeformPercent.curves.morph,
                    ae = K.values.map(function(xe) {
                        return xe / 100
                    }),
                    _e = C.getObjectByName(O.modelName).morphTargetDictionary[O.morphName];
                return new y.NumberKeyframeTrack(O.modelName + ".morphTargetInfluences[" + _e + "]", K.times, ae)
            },
            getTimesForAllAxes: function(O) {
                var K = [];
                if (O.x !== void 0 && (K = K.concat(O.x.times)), O.y !== void 0 && (K = K.concat(O.y.times)), O.z !== void 0 && (K = K.concat(O.z.times)), K = K.sort(function(st, De) {
                        return st - De
                    }), K.length > 1) {
                    for (var ae = 1, _e = K[0], xe = 1; xe < K.length; xe++) {
                        var Ze = K[xe];
                        Ze !== _e && (K[ae] = Ze, _e = Ze, ae++)
                    }
                    K = K.slice(0, ae)
                }
                return K
            },
            getKeyframeTrackValues: function(O, K, ae) {
                var _e = ae,
                    xe = [],
                    Ze = -1,
                    st = -1,
                    De = -1;
                return O.forEach(function(gt) {
                    if (K.x && (Ze = K.x.times.indexOf(gt)), K.y && (st = K.y.times.indexOf(gt)), K.z && (De = K.z.times.indexOf(gt)), Ze !== -1) {
                        var Qt = K.x.values[Ze];
                        xe.push(Qt), _e[0] = Qt
                    } else xe.push(_e[0]);
                    if (st !== -1) {
                        var Ve = K.y.values[st];
                        xe.push(Ve), _e[1] = Ve
                    } else xe.push(_e[1]);
                    if (De !== -1) {
                        var Dt = K.z.values[De];
                        xe.push(Dt), _e[2] = Dt
                    } else xe.push(_e[2])
                }), xe
            },
            interpolateRotations: function(O) {
                for (var K = 1; K < O.values.length; K++) {
                    var ae = O.values[K - 1],
                        _e = O.values[K] - ae,
                        xe = Math.abs(_e);
                    if (xe >= 180) {
                        for (var Ze = xe / 180, st = _e / Ze, De = ae + st, gt = O.times[K - 1], Qt = O.times[K] - gt, Ve = Qt / Ze, Dt = gt + Ve, ei = [], xi = []; Dt < O.times[K];) ei.push(Dt), Dt += Ve, xi.push(De), De += st;
                        O.times = li(O.times, K, ei), O.values = li(O.values, K, xi)
                    }
                }
            }
        };

        function be() {}
        be.prototype = {
            constructor: be,
            getPrevNode: function() {
                return this.nodeStack[this.currentIndent - 2]
            },
            getCurrentNode: function() {
                return this.nodeStack[this.currentIndent - 1]
            },
            getCurrentProp: function() {
                return this.currentProp
            },
            pushStack: function(O) {
                this.nodeStack.push(O), this.currentIndent += 1
            },
            popStack: function() {
                this.nodeStack.pop(), this.currentIndent -= 1
            },
            setCurrentProp: function(O, K) {
                this.currentProp = O, this.currentPropName = K
            },
            parse: function(O) {
                this.currentIndent = 0, this.allNodes = new Tt, this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
                var K = this,
                    ae = O.split(/[\r\n]+/);
                return ae.forEach(function(_e, xe) {
                    var Ze = _e.match(/^[\s\t]*;/),
                        st = _e.match(/^[\s\t]*$/);
                    if (!(Ze || st)) {
                        var De = _e.match("^\\t{" + K.currentIndent + "}(\\w+):(.*){", ""),
                            gt = _e.match("^\\t{" + K.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"),
                            Qt = _e.match("^\\t{" + (K.currentIndent - 1) + "}}");
                        De ? K.parseNodeBegin(_e, De) : gt ? K.parseNodeProperty(_e, gt, ae[++xe]) : Qt ? K.popStack() : _e.match(/^[^\s\t}]/) && K.parseNodePropertyContinued(_e)
                    }
                }), this.allNodes
            },
            parseNodeBegin: function(O, K) {
                var ae = K[1].trim().replace(/^"/, "").replace(/"$/, ""),
                    _e = K[2].split(",").map(function(De) {
                        return De.trim().replace(/^"/, "").replace(/"$/, "")
                    }),
                    xe = {
                        name: ae
                    },
                    Ze = this.parseNodeAttr(_e),
                    st = this.getCurrentNode();
                this.currentIndent === 0 ? this.allNodes.add(ae, xe) : ae in st ? (ae === "PoseNode" ? st.PoseNode.push(xe) : st[ae].id !== void 0 && (st[ae] = {}, st[ae][st[ae].id] = st[ae]), Ze.id !== "" && (st[ae][Ze.id] = xe)) : typeof Ze.id == "number" ? (st[ae] = {}, st[ae][Ze.id] = xe) : ae !== "Properties70" && (ae === "PoseNode" ? st[ae] = [xe] : st[ae] = xe), typeof Ze.id == "number" && (xe.id = Ze.id), Ze.name !== "" && (xe.attrName = Ze.name), Ze.type !== "" && (xe.attrType = Ze.type), this.pushStack(xe)
            },
            parseNodeAttr: function(O) {
                var K = O[0];
                O[0] !== "" && (K = parseInt(O[0]), isNaN(K) && (K = O[0]));
                var ae = "",
                    _e = "";
                return O.length > 1 && (ae = O[1].replace(/^(\w+)::/, ""), _e = O[2]), {
                    id: K,
                    name: ae,
                    type: _e
                }
            },
            parseNodeProperty: function(O, K, ae) {
                var _e = K[1].replace(/^"/, "").replace(/"$/, "").trim(),
                    xe = K[2].replace(/^"/, "").replace(/"$/, "").trim();
                _e === "Content" && xe === "," && (xe = ae.replace(/"/g, "").replace(/,$/, "").trim());
                var Ze = this.getCurrentNode(),
                    st = Ze.name;
                if (st === "Properties70") {
                    this.parseNodeSpecialProperty(O, _e, xe);
                    return
                }
                if (_e === "C") {
                    var De = xe.split(",").slice(1),
                        gt = parseInt(De[0]),
                        Qt = parseInt(De[1]),
                        Ve = xe.split(",").slice(3);
                    Ve = Ve.map(function(Dt) {
                        return Dt.trim().replace(/^"/, "")
                    }), _e = "connections", xe = [gt, Qt], ct(xe, Ve), Ze[_e] === void 0 && (Ze[_e] = [])
                }
                _e === "Node" && (Ze.id = xe), _e in Ze && Array.isArray(Ze[_e]) ? Ze[_e].push(xe) : _e !== "a" ? Ze[_e] = xe : Ze.a = xe, this.setCurrentProp(Ze, _e), _e === "a" && xe.slice(-1) !== "," && (Ze.a = Li(xe))
            },
            parseNodePropertyContinued: function(O) {
                var K = this.getCurrentNode();
                K.a += O, O.slice(-1) !== "," && (K.a = Li(K.a))
            },
            parseNodeSpecialProperty: function(O, K, ae) {
                var _e = ae.split('",').map(function(Qt) {
                        return Qt.trim().replace(/^\"/, "").replace(/\s/, "_")
                    }),
                    xe = _e[0],
                    Ze = _e[1],
                    st = _e[2],
                    De = _e[3],
                    gt = _e[4];
                switch (Ze) {
                    case "int":
                    case "enum":
                    case "bool":
                    case "ULongLong":
                    case "double":
                    case "Number":
                    case "FieldOfView":
                        gt = parseFloat(gt);
                        break;
                    case "Color":
                    case "ColorRGB":
                    case "Vector3D":
                    case "Lcl_Translation":
                    case "Lcl_Rotation":
                    case "Lcl_Scaling":
                        gt = Li(gt);
                        break
                }
                this.getPrevNode()[xe] = {
                    type: Ze,
                    type2: st,
                    flag: De,
                    value: gt
                }, this.setCurrentProp(this.getPrevNode(), xe)
            }
        };

        function Ee() {}
        Ee.prototype = {
            constructor: Ee,
            parse: function(O) {
                var K = new Lt(O);
                K.skip(23);
                var ae = K.getUint32();
                if (ae < 6400) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + ae);
                for (var _e = new Tt; !this.endOfContent(K);) {
                    var xe = this.parseNode(K, ae);
                    xe !== null && _e.add(xe.name, xe)
                }
                return _e
            },
            endOfContent: function(O) {
                return O.size() % 16 === 0 ? (O.getOffset() + 160 + 16 & -16) >= O.size() : O.getOffset() + 160 + 16 >= O.size()
            },
            parseNode: function(O, K) {
                var ae = {},
                    _e = K >= 7500 ? O.getUint64() : O.getUint32(),
                    xe = K >= 7500 ? O.getUint64() : O.getUint32();
                K >= 7500 ? O.getUint64() : O.getUint32();
                var Ze = O.getUint8(),
                    st = O.getString(Ze);
                if (_e === 0) return null;
                for (var De = [], gt = 0; gt < xe; gt++) De.push(this.parseProperty(O));
                var Qt = De.length > 0 ? De[0] : "",
                    Ve = De.length > 1 ? De[1] : "",
                    Dt = De.length > 2 ? De[2] : "";
                for (ae.singleProperty = xe === 1 && O.getOffset() === _e; _e > O.getOffset();) {
                    var ei = this.parseNode(O, K);
                    ei !== null && this.parseSubNode(st, ae, ei)
                }
                return ae.propertyList = De, typeof Qt == "number" && (ae.id = Qt), Ve !== "" && (ae.attrName = Ve), Dt !== "" && (ae.attrType = Dt), st !== "" && (ae.name = st), ae
            },
            parseSubNode: function(O, K, ae) {
                if (ae.singleProperty === !0) {
                    var _e = ae.propertyList[0];
                    Array.isArray(_e) ? (K[ae.name] = ae, ae.a = _e) : K[ae.name] = _e
                } else if (O === "Connections" && ae.name === "C") {
                    var xe = [];
                    ae.propertyList.forEach(function(Dt, ei) {
                        ei !== 0 && xe.push(Dt)
                    }), K.connections === void 0 && (K.connections = []), K.connections.push(xe)
                } else if (ae.name === "Properties70") {
                    var Ze = Object.keys(ae);
                    Ze.forEach(function(Dt) {
                        K[Dt] = ae[Dt]
                    })
                } else if (O === "Properties70" && ae.name === "P") {
                    var st = ae.propertyList[0],
                        De = ae.propertyList[1],
                        gt = ae.propertyList[2],
                        Qt = ae.propertyList[3],
                        Ve;
                    st.indexOf("Lcl ") === 0 && (st = st.replace("Lcl ", "Lcl_")), De.indexOf("Lcl ") === 0 && (De = De.replace("Lcl ", "Lcl_")), De === "Color" || De === "ColorRGB" || De === "Vector" || De === "Vector3D" || De.indexOf("Lcl_") === 0 ? Ve = [ae.propertyList[4], ae.propertyList[5], ae.propertyList[6]] : Ve = ae.propertyList[4], K[st] = {
                        type: De,
                        type2: gt,
                        flag: Qt,
                        value: Ve
                    }
                } else K[ae.name] === void 0 ? typeof ae.id == "number" ? (K[ae.name] = {}, K[ae.name][ae.id] = ae) : K[ae.name] = ae : ae.name === "PoseNode" ? (Array.isArray(K[ae.name]) || (K[ae.name] = [K[ae.name]]), K[ae.name].push(ae)) : K[ae.name][ae.id] === void 0 && (K[ae.name][ae.id] = ae)
            },
            parseProperty: function(O) {
                var K = O.getString(1);
                switch (K) {
                    case "C":
                        return O.getBoolean();
                    case "D":
                        return O.getFloat64();
                    case "F":
                        return O.getFloat32();
                    case "I":
                        return O.getInt32();
                    case "L":
                        return O.getInt64();
                    case "R":
                        var ae = O.getUint32();
                        return O.getArrayBuffer(ae);
                    case "S":
                        var ae = O.getUint32();
                        return O.getString(ae);
                    case "Y":
                        return O.getInt16();
                    case "b":
                    case "c":
                    case "d":
                    case "f":
                    case "i":
                    case "l":
                        var _e = O.getUint32(),
                            xe = O.getUint32(),
                            Ze = O.getUint32();
                        if (xe === 0) switch (K) {
                            case "b":
                            case "c":
                                return O.getBooleanArray(_e);
                            case "d":
                                return O.getFloat64Array(_e);
                            case "f":
                                return O.getFloat32Array(_e);
                            case "i":
                                return O.getInt32Array(_e);
                            case "l":
                                return O.getInt64Array(_e)
                        }
                        typeof z == "undefined" && console.error("THREE.FBXLoader: External library fflate.min.js required.");
                        var st = z.unzlibSync(new Uint8Array(O.getArrayBuffer(Ze))),
                            De = new Lt(st.buffer);
                        switch (K) {
                            case "b":
                            case "c":
                                return De.getBooleanArray(_e);
                            case "d":
                                return De.getFloat64Array(_e);
                            case "f":
                                return De.getFloat32Array(_e);
                            case "i":
                                return De.getInt32Array(_e);
                            case "l":
                                return De.getInt64Array(_e)
                        }
                    default:
                        throw new Error("THREE.FBXLoader: Unknown property type " + K)
                }
            }
        };

        function Lt(O, K) {
            this.dv = new DataView(O), this.offset = 0, this.littleEndian = K !== void 0 ? K : !0
        }
        Lt.prototype = {
            constructor: Lt,
            getOffset: function() {
                return this.offset
            },
            size: function() {
                return this.dv.buffer.byteLength
            },
            skip: function(O) {
                this.offset += O
            },
            getBoolean: function() {
                return (this.getUint8() & 1) === 1
            },
            getBooleanArray: function(O) {
                for (var K = [], ae = 0; ae < O; ae++) K.push(this.getBoolean());
                return K
            },
            getUint8: function() {
                var O = this.dv.getUint8(this.offset);
                return this.offset += 1, O
            },
            getInt16: function() {
                var O = this.dv.getInt16(this.offset, this.littleEndian);
                return this.offset += 2, O
            },
            getInt32: function() {
                var O = this.dv.getInt32(this.offset, this.littleEndian);
                return this.offset += 4, O
            },
            getInt32Array: function(O) {
                for (var K = [], ae = 0; ae < O; ae++) K.push(this.getInt32());
                return K
            },
            getUint32: function() {
                var O = this.dv.getUint32(this.offset, this.littleEndian);
                return this.offset += 4, O
            },
            getInt64: function() {
                var O, K;
                return this.littleEndian ? (O = this.getUint32(), K = this.getUint32()) : (K = this.getUint32(), O = this.getUint32()), K & 2147483648 ? (K = ~K & 4294967295, O = ~O & 4294967295, O === 4294967295 && (K = K + 1 & 4294967295), O = O + 1 & 4294967295, -(K * 4294967296 + O)) : K * 4294967296 + O
            },
            getInt64Array: function(O) {
                for (var K = [], ae = 0; ae < O; ae++) K.push(this.getInt64());
                return K
            },
            getUint64: function() {
                var O, K;
                return this.littleEndian ? (O = this.getUint32(), K = this.getUint32()) : (K = this.getUint32(), O = this.getUint32()), K * 4294967296 + O
            },
            getFloat32: function() {
                var O = this.dv.getFloat32(this.offset, this.littleEndian);
                return this.offset += 4, O
            },
            getFloat32Array: function(O) {
                for (var K = [], ae = 0; ae < O; ae++) K.push(this.getFloat32());
                return K
            },
            getFloat64: function() {
                var O = this.dv.getFloat64(this.offset, this.littleEndian);
                return this.offset += 8, O
            },
            getFloat64Array: function(O) {
                for (var K = [], ae = 0; ae < O; ae++) K.push(this.getFloat64());
                return K
            },
            getArrayBuffer: function(O) {
                var K = this.dv.buffer.slice(this.offset, this.offset + O);
                return this.offset += O, K
            },
            getString: function(O) {
                for (var K = [], ae = 0; ae < O; ae++) K[ae] = this.getUint8();
                var _e = K.indexOf(0);
                return _e >= 0 && (K = K.slice(0, _e)), y.LoaderUtils.decodeText(new Uint8Array(K))
            }
        };

        function Tt() {}
        Tt.prototype = {
            constructor: Tt,
            add: function(O, K) {
                this[O] = K
            }
        };

        function Je(O) {
            var K = "Kaydara FBX Binary  \0";
            return O.byteLength >= K.length && K === Ei(O, 0, K.length)
        }

        function wt(O) {
            var K = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"],
                ae = 0;

            function _e(st) {
                var De = O[st - 1];
                return O = O.slice(ae + st), ae++, De
            }
            for (var xe = 0; xe < K.length; ++xe) {
                var Ze = _e(1);
                if (Ze === K[xe]) return !1
            }
            return !0
        }

        function Ke(O) {
            var K = /FBXVersion: (\d+)/,
                ae = O.match(K);
            if (ae) {
                var _e = parseInt(ae[1]);
                return _e
            }
            throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")
        }

        function Ye(O) {
            return O / 46186158e3
        }
        var jt = [];

        function di(O, K, ae, _e) {
            var xe;
            switch (_e.mappingType) {
                case "ByPolygonVertex":
                    xe = O;
                    break;
                case "ByPolygon":
                    xe = K;
                    break;
                case "ByVertice":
                    xe = ae;
                    break;
                case "AllSame":
                    xe = _e.indices[0];
                    break;
                default:
                    console.warn("THREE.FBXLoader: unknown attribute mapping type " + _e.mappingType)
            }
            _e.referenceType === "IndexToDirect" && (xe = _e.indices[xe]);
            var Ze = xe * _e.dataSize,
                st = Ze + _e.dataSize;
            return je(jt, _e.buffer, Ze, st)
        }
        var $e = new y.Euler,
            vt = new y.Vector3;

        function Kt(O) {
            var K = new y.Matrix4,
                ae = new y.Matrix4,
                _e = new y.Matrix4,
                xe = new y.Matrix4,
                Ze = new y.Matrix4,
                st = new y.Matrix4,
                De = new y.Matrix4,
                gt = new y.Matrix4,
                Qt = new y.Matrix4,
                Ve = new y.Matrix4,
                Dt = new y.Matrix4,
                ei = new y.Matrix4,
                xi = O.inheritType ? O.inheritType : 0;
            if (O.translation && K.setPosition(vt.fromArray(O.translation)), O.preRotation) {
                var oe = O.preRotation.map(y.MathUtils.degToRad);
                oe.push(O.eulerOrder), ae.makeRotationFromEuler($e.fromArray(oe))
            }
            if (O.rotation) {
                var oe = O.rotation.map(y.MathUtils.degToRad);
                oe.push(O.eulerOrder), _e.makeRotationFromEuler($e.fromArray(oe))
            }
            if (O.postRotation) {
                var oe = O.postRotation.map(y.MathUtils.degToRad);
                oe.push(O.eulerOrder), xe.makeRotationFromEuler($e.fromArray(oe)), xe.invert()
            }
            O.scale && Ze.scale(vt.fromArray(O.scale)), O.scalingOffset && De.setPosition(vt.fromArray(O.scalingOffset)), O.scalingPivot && st.setPosition(vt.fromArray(O.scalingPivot)), O.rotationOffset && gt.setPosition(vt.fromArray(O.rotationOffset)), O.rotationPivot && Qt.setPosition(vt.fromArray(O.rotationPivot)), O.parentMatrixWorld && (Dt.copy(O.parentMatrix), Ve.copy(O.parentMatrixWorld));
            var ve = new y.Matrix4().copy(ae).multiply(_e).multiply(xe),
                Ne = new y.Matrix4;
            Ne.extractRotation(Ve);
            var Ue = new y.Matrix4;
            Ue.copyPosition(Ve);
            var Oe = new y.Matrix4,
                at = new y.Matrix4().copy(Ue).invert().multiply(Ve);
            Oe.copy(Ne).invert().multiply(at);
            var ht = Ze,
                tt = new y.Matrix4;
            if (xi === 0) tt.copy(Ne).multiply(ve).multiply(Oe).multiply(ht);
            else if (xi === 1) tt.copy(Ne).multiply(Oe).multiply(ve).multiply(ht);
            else {
                var Bt = new y.Matrix4().scale(new y.Vector3().setFromMatrixScale(Dt)),
                    Le = new y.Matrix4().copy(Bt).invert(),
                    Ot = new y.Matrix4().copy(Oe).multiply(Le);
                tt.copy(Ne).multiply(ve).multiply(Ot).multiply(ht)
            }
            var ii = new y.Matrix4;
            ii.copy(Qt).invert();
            var Wt = new y.Matrix4;
            Wt.copy(st).invert();
            var bi = new y.Matrix4;
            bi.copy(K).multiply(gt).multiply(Qt).multiply(ae).multiply(_e).multiply(xe).multiply(ii).multiply(De).multiply(st).multiply(Ze).multiply(Wt);
            var Qi = new y.Matrix4().copyPosition(bi),
                sn = new y.Matrix4().copy(Ve).multiply(Qi);
            return ei.copyPosition(sn), bi = new y.Matrix4().copy(ei).multiply(tt), bi.premultiply(Ve.invert()), bi
        }

        function vi(O) {
            O = O || 0;
            var K = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
            return O === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), K[0]) : K[O]
        }

        function Li(O) {
            var K = O.split(",").map(function(ae) {
                return parseFloat(ae)
            });
            return K
        }

        function Ei(O, K, ae) {
            return K === void 0 && (K = 0), ae === void 0 && (ae = O.byteLength), y.LoaderUtils.decodeText(new Uint8Array(O, K, ae))
        }

        function ct(O, K) {
            for (var ae = 0, _e = O.length, xe = K.length; ae < xe; ae++, _e++) O[_e] = K[ae]
        }

        function je(O, K, ae, _e) {
            for (var xe = ae, Ze = 0; xe < _e; xe++, Ze++) O[Ze] = K[xe];
            return O
        }

        function li(O, K, ae) {
            return O.slice(0, K).concat(ae).concat(O.slice(K))
        }
        return p
    }(), ue.exports = y.FBXLoader
})(Qf);
var pm = Qf.exports,
    Pf = {
        exports: {}
    };
(function(ue, R) {
    const y = Xa;
    y.GLTFLoader = function() {
        function z(oe) {
            y.Loader.call(this, oe), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(ve) {
                return new se(ve)
            }), this.register(function(ve) {
                return new He(ve)
            }), this.register(function(ve) {
                return new be(ve)
            }), this.register(function(ve) {
                return new ie(ve)
            }), this.register(function(ve) {
                return new C(ve)
            }), this.register(function(ve) {
                return new Ee(ve)
            })
        }
        z.prototype = Object.assign(Object.create(y.Loader.prototype), {
            constructor: z,
            load: function(oe, ve, Ne, Ue) {
                var Oe = this,
                    at;
                this.resourcePath !== "" ? at = this.resourcePath : this.path !== "" ? at = this.path : at = y.LoaderUtils.extractUrlBase(oe), this.manager.itemStart(oe);
                var ht = function(Bt) {
                        Ue ? Ue(Bt) : console.error(Bt), Oe.manager.itemError(oe), Oe.manager.itemEnd(oe)
                    },
                    tt = new y.FileLoader(this.manager);
                tt.setPath(this.path), tt.setResponseType("arraybuffer"), tt.setRequestHeader(this.requestHeader), tt.setWithCredentials(this.withCredentials), tt.load(oe, function(Bt) {
                    try {
                        Oe.parse(Bt, at, function(Le) {
                            ve(Le), Oe.manager.itemEnd(oe)
                        }, ht)
                    } catch (Le) {
                        ht(Le)
                    }
                }, Ne, ht)
            },
            setDRACOLoader: function(oe) {
                return this.dracoLoader = oe, this
            },
            setDDSLoader: function() {
                throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
            },
            setKTX2Loader: function(oe) {
                return this.ktx2Loader = oe, this
            },
            setMeshoptDecoder: function(oe) {
                return this.meshoptDecoder = oe, this
            },
            register: function(oe) {
                return this.pluginCallbacks.indexOf(oe) === -1 && this.pluginCallbacks.push(oe), this
            },
            unregister: function(oe) {
                return this.pluginCallbacks.indexOf(oe) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(oe), 1), this
            },
            parse: function(oe, ve, Ne, Ue) {
                var Oe, at = {},
                    ht = {};
                if (typeof oe == "string") Oe = oe;
                else {
                    var tt = y.LoaderUtils.decodeText(new Uint8Array(oe, 0, 4));
                    if (tt === Lt) {
                        try {
                            at[Y.KHR_BINARY_GLTF] = new wt(oe)
                        } catch (Qi) {
                            Ue && Ue(Qi);
                            return
                        }
                        Oe = at[Y.KHR_BINARY_GLTF].content
                    } else Oe = y.LoaderUtils.decodeText(new Uint8Array(oe))
                }
                var Bt = JSON.parse(Oe);
                if (Bt.asset === void 0 || Bt.asset.version[0] < 2) {
                    Ue && Ue(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                    return
                }
                var Le = new Ve(Bt, {
                    path: ve || this.resourcePath || "",
                    crossOrigin: this.crossOrigin,
                    requestHeader: this.requestHeader,
                    manager: this.manager,
                    ktx2Loader: this.ktx2Loader,
                    meshoptDecoder: this.meshoptDecoder
                });
                Le.fileLoader.setRequestHeader(this.requestHeader);
                for (var Ot = 0; Ot < this.pluginCallbacks.length; Ot++) {
                    var ii = this.pluginCallbacks[Ot](Le);
                    ht[ii.name] = ii, at[ii.name] = !0
                }
                if (Bt.extensionsUsed)
                    for (var Ot = 0; Ot < Bt.extensionsUsed.length; ++Ot) {
                        var Wt = Bt.extensionsUsed[Ot],
                            bi = Bt.extensionsRequired || [];
                        switch (Wt) {
                            case Y.KHR_MATERIALS_UNLIT:
                                at[Wt] = new p;
                                break;
                            case Y.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                at[Wt] = new di;
                                break;
                            case Y.KHR_DRACO_MESH_COMPRESSION:
                                at[Wt] = new Ke(Bt, this.dracoLoader);
                                break;
                            case Y.KHR_TEXTURE_TRANSFORM:
                                at[Wt] = new Ye;
                                break;
                            case Y.KHR_MESH_QUANTIZATION:
                                at[Wt] = new $e;
                                break;
                            default:
                                bi.indexOf(Wt) >= 0 && ht[Wt] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + Wt + '".')
                        }
                    }
                Le.setExtensions(at), Le.setPlugins(ht), Le.parse(Ne, Ue)
            }
        });

        function V() {
            var oe = {};
            return {
                get: function(ve) {
                    return oe[ve]
                },
                add: function(ve, Ne) {
                    oe[ve] = Ne
                },
                remove: function(ve) {
                    delete oe[ve]
                },
                removeAll: function() {
                    oe = {}
                }
            }
        }
        var Y = {
            KHR_BINARY_GLTF: "KHR_binary_glTF",
            KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
            KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
            KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
            KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
            KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
            KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
            KHR_TEXTURE_BASISU: "KHR_texture_basisu",
            KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
            KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
            EXT_TEXTURE_WEBP: "EXT_texture_webp",
            EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
        };

        function C(oe) {
            this.parser = oe, this.name = Y.KHR_LIGHTS_PUNCTUAL, this.cache = {
                refs: {},
                uses: {}
            }
        }
        C.prototype._markDefs = function() {
            for (var oe = this.parser, ve = this.parser.json.nodes || [], Ne = 0, Ue = ve.length; Ne < Ue; Ne++) {
                var Oe = ve[Ne];
                Oe.extensions && Oe.extensions[this.name] && Oe.extensions[this.name].light !== void 0 && oe._addNodeRef(this.cache, Oe.extensions[this.name].light)
            }
        }, C.prototype._loadLight = function(oe) {
            var ve = this.parser,
                Ne = "light:" + oe,
                Ue = ve.cache.get(Ne);
            if (Ue) return Ue;
            var Oe = ve.json,
                at = Oe.extensions && Oe.extensions[this.name] || {},
                ht = at.lights || [],
                tt = ht[oe],
                Bt, Le = new y.Color(16777215);
            tt.color !== void 0 && Le.fromArray(tt.color);
            var Ot = tt.range !== void 0 ? tt.range : 0;
            switch (tt.type) {
                case "directional":
                    Bt = new y.DirectionalLight(Le), Bt.target.position.set(0, 0, -1), Bt.add(Bt.target);
                    break;
                case "point":
                    Bt = new y.PointLight(Le), Bt.distance = Ot;
                    break;
                case "spot":
                    Bt = new y.SpotLight(Le), Bt.distance = Ot, tt.spot = tt.spot || {}, tt.spot.innerConeAngle = tt.spot.innerConeAngle !== void 0 ? tt.spot.innerConeAngle : 0, tt.spot.outerConeAngle = tt.spot.outerConeAngle !== void 0 ? tt.spot.outerConeAngle : Math.PI / 4, Bt.angle = tt.spot.outerConeAngle, Bt.penumbra = 1 - tt.spot.innerConeAngle / tt.spot.outerConeAngle, Bt.target.position.set(0, 0, -1), Bt.add(Bt.target);
                    break;
                default:
                    throw new Error("THREE.GLTFLoader: Unexpected light type: " + tt.type)
            }
            return Bt.position.set(0, 0, 0), Bt.decay = 2, tt.intensity !== void 0 && (Bt.intensity = tt.intensity), Bt.name = ve.createUniqueName(tt.name || "light_" + oe), Ue = Promise.resolve(Bt), ve.cache.add(Ne, Ue), Ue
        }, C.prototype.createNodeAttachment = function(oe) {
            var ve = this,
                Ne = this.parser,
                Ue = Ne.json,
                Oe = Ue.nodes[oe],
                at = Oe.extensions && Oe.extensions[this.name] || {},
                ht = at.light;
            return ht === void 0 ? null : this._loadLight(ht).then(function(tt) {
                return Ne._getNodeRef(ve.cache, ht, tt)
            })
        };

        function p() {
            this.name = Y.KHR_MATERIALS_UNLIT
        }
        p.prototype.getMaterialType = function() {
            return y.MeshBasicMaterial
        }, p.prototype.extendParams = function(oe, ve, Ne) {
            var Ue = [];
            oe.color = new y.Color(1, 1, 1), oe.opacity = 1;
            var Oe = ve.pbrMetallicRoughness;
            if (Oe) {
                if (Array.isArray(Oe.baseColorFactor)) {
                    var at = Oe.baseColorFactor;
                    oe.color.fromArray(at), oe.opacity = at[3]
                }
                Oe.baseColorTexture !== void 0 && Ue.push(Ne.assignTexture(oe, "map", Oe.baseColorTexture))
            }
            return Promise.all(Ue)
        };

        function se(oe) {
            this.parser = oe, this.name = Y.KHR_MATERIALS_CLEARCOAT
        }
        se.prototype.getMaterialType = function(oe) {
            var ve = this.parser,
                Ne = ve.json.materials[oe];
            return !Ne.extensions || !Ne.extensions[this.name] ? null : y.MeshPhysicalMaterial
        }, se.prototype.extendMaterialParams = function(oe, ve) {
            var Ne = this.parser,
                Ue = Ne.json.materials[oe];
            if (!Ue.extensions || !Ue.extensions[this.name]) return Promise.resolve();
            var Oe = [],
                at = Ue.extensions[this.name];
            if (at.clearcoatFactor !== void 0 && (ve.clearcoat = at.clearcoatFactor), at.clearcoatTexture !== void 0 && Oe.push(Ne.assignTexture(ve, "clearcoatMap", at.clearcoatTexture)), at.clearcoatRoughnessFactor !== void 0 && (ve.clearcoatRoughness = at.clearcoatRoughnessFactor), at.clearcoatRoughnessTexture !== void 0 && Oe.push(Ne.assignTexture(ve, "clearcoatRoughnessMap", at.clearcoatRoughnessTexture)), at.clearcoatNormalTexture !== void 0 && (Oe.push(Ne.assignTexture(ve, "clearcoatNormalMap", at.clearcoatNormalTexture)), at.clearcoatNormalTexture.scale !== void 0)) {
                var ht = at.clearcoatNormalTexture.scale;
                ve.clearcoatNormalScale = new y.Vector2(ht, -ht)
            }
            return Promise.all(Oe)
        };

        function ie(oe) {
            this.parser = oe, this.name = Y.KHR_MATERIALS_TRANSMISSION
        }
        ie.prototype.getMaterialType = function(oe) {
            var ve = this.parser,
                Ne = ve.json.materials[oe];
            return !Ne.extensions || !Ne.extensions[this.name] ? null : y.MeshPhysicalMaterial
        }, ie.prototype.extendMaterialParams = function(oe, ve) {
            var Ne = this.parser,
                Ue = Ne.json.materials[oe];
            if (!Ue.extensions || !Ue.extensions[this.name]) return Promise.resolve();
            var Oe = [],
                at = Ue.extensions[this.name];
            return at.transmissionFactor !== void 0 && (ve.transmission = at.transmissionFactor), at.transmissionTexture !== void 0 && Oe.push(Ne.assignTexture(ve, "transmissionMap", at.transmissionTexture)), Promise.all(Oe)
        };

        function He(oe) {
            this.parser = oe, this.name = Y.KHR_TEXTURE_BASISU
        }
        He.prototype.loadTexture = function(oe) {
            var ve = this.parser,
                Ne = ve.json,
                Ue = Ne.textures[oe];
            if (!Ue.extensions || !Ue.extensions[this.name]) return null;
            var Oe = Ue.extensions[this.name],
                at = Ne.images[Oe.source],
                ht = ve.options.ktx2Loader;
            if (!ht) {
                if (Ne.extensionsRequired && Ne.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
                return null
            }
            return ve.loadTextureImage(oe, at, ht)
        };

        function be(oe) {
            this.parser = oe, this.name = Y.EXT_TEXTURE_WEBP, this.isSupported = null
        }
        be.prototype.loadTexture = function(oe) {
            var ve = this.name,
                Ne = this.parser,
                Ue = Ne.json,
                Oe = Ue.textures[oe];
            if (!Oe.extensions || !Oe.extensions[ve]) return null;
            var at = Oe.extensions[ve],
                ht = Ue.images[at.source],
                tt = Ne.textureLoader;
            if (ht.uri) {
                var Bt = Ne.options.manager.getHandler(ht.uri);
                Bt !== null && (tt = Bt)
            }
            return this.detectSupport().then(function(Le) {
                if (Le) return Ne.loadTextureImage(oe, ht, tt);
                if (Ue.extensionsRequired && Ue.extensionsRequired.indexOf(ve) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                return Ne.loadTexture(oe)
            })
        }, be.prototype.detectSupport = function() {
            return this.isSupported || (this.isSupported = new Promise(function(oe) {
                var ve = new Image;
                ve.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", ve.onload = ve.onerror = function() {
                    oe(ve.height === 1)
                }
            })), this.isSupported
        };

        function Ee(oe) {
            this.name = Y.EXT_MESHOPT_COMPRESSION, this.parser = oe
        }
        Ee.prototype.loadBufferView = function(oe) {
            var ve = this.parser.json,
                Ne = ve.bufferViews[oe];
            if (Ne.extensions && Ne.extensions[this.name]) {
                var Ue = Ne.extensions[this.name],
                    Oe = this.parser.getDependency("buffer", Ue.buffer),
                    at = this.parser.options.meshoptDecoder;
                if (!at || !at.supported) {
                    if (ve.extensionsRequired && ve.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                    return null
                }
                return Promise.all([Oe, at.ready]).then(function(ht) {
                    var tt = Ue.byteOffset || 0,
                        Bt = Ue.byteLength || 0,
                        Le = Ue.count,
                        Ot = Ue.byteStride,
                        ii = new ArrayBuffer(Le * Ot),
                        Wt = new Uint8Array(ht[0], tt, Bt);
                    return at.decodeGltfBuffer(new Uint8Array(ii), Le, Ot, Wt, Ue.mode, Ue.filter), ii
                })
            } else return null
        };
        var Lt = "glTF",
            Tt = 12,
            Je = {
                JSON: 1313821514,
                BIN: 5130562
            };

        function wt(oe) {
            this.name = Y.KHR_BINARY_GLTF, this.content = null, this.body = null;
            var ve = new DataView(oe, 0, Tt);
            if (this.header = {
                    magic: y.LoaderUtils.decodeText(new Uint8Array(oe.slice(0, 4))),
                    version: ve.getUint32(4, !0),
                    length: ve.getUint32(8, !0)
                }, this.header.magic !== Lt) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
            if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
            for (var Ne = this.header.length - Tt, Ue = new DataView(oe, Tt), Oe = 0; Oe < Ne;) {
                var at = Ue.getUint32(Oe, !0);
                Oe += 4;
                var ht = Ue.getUint32(Oe, !0);
                if (Oe += 4, ht === Je.JSON) {
                    var tt = new Uint8Array(oe, Tt + Oe, at);
                    this.content = y.LoaderUtils.decodeText(tt)
                } else if (ht === Je.BIN) {
                    var Bt = Tt + Oe;
                    this.body = oe.slice(Bt, Bt + at)
                }
                Oe += at
            }
            if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.")
        }

        function Ke(oe, ve) {
            if (!ve) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
            this.name = Y.KHR_DRACO_MESH_COMPRESSION, this.json = oe, this.dracoLoader = ve, this.dracoLoader.preload()
        }
        Ke.prototype.decodePrimitive = function(oe, ve) {
            var Ne = this.json,
                Ue = this.dracoLoader,
                Oe = oe.extensions[this.name].bufferView,
                at = oe.extensions[this.name].attributes,
                ht = {},
                tt = {},
                Bt = {};
            for (var Le in at) {
                var Ot = je[Le] || Le.toLowerCase();
                ht[Ot] = at[Le]
            }
            for (Le in oe.attributes) {
                var Ot = je[Le] || Le.toLowerCase();
                if (at[Le] !== void 0) {
                    var ii = Ne.accessors[oe.attributes[Le]],
                        Wt = vi[ii.componentType];
                    Bt[Ot] = Wt, tt[Ot] = ii.normalized === !0
                }
            }
            return ve.getDependency("bufferView", Oe).then(function(bi) {
                return new Promise(function(Qi) {
                    Ue.decodeDracoFile(bi, function(sn) {
                        for (var yn in sn.attributes) {
                            var Yi = sn.attributes[yn],
                                rn = tt[yn];
                            rn !== void 0 && (Yi.normalized = rn)
                        }
                        Qi(sn)
                    }, ht, Bt)
                })
            })
        };

        function Ye() {
            this.name = Y.KHR_TEXTURE_TRANSFORM
        }
        Ye.prototype.extendTexture = function(oe, ve) {
            return oe = oe.clone(), ve.offset !== void 0 && oe.offset.fromArray(ve.offset), ve.rotation !== void 0 && (oe.rotation = ve.rotation), ve.scale !== void 0 && oe.repeat.fromArray(ve.scale), ve.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), oe.needsUpdate = !0, oe
        };

        function jt(oe) {
            y.MeshStandardMaterial.call(this), this.isGLTFSpecularGlossinessMaterial = !0;
            var ve = ["#ifdef USE_SPECULARMAP", "	uniform sampler2D specularMap;", "#endif"].join(`
`),
                Ne = ["#ifdef USE_GLOSSINESSMAP", "	uniform sampler2D glossinessMap;", "#endif"].join(`
`),
                Ue = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "	vec4 texelSpecular = texture2D( specularMap, vUv );", "	texelSpecular = sRGBToLinear( texelSpecular );", "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "	specularFactor *= texelSpecular.rgb;", "#endif"].join(`
`),
                Oe = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );", "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "	glossinessFactor *= texelGlossiness.a;", "#endif"].join(`
`),
                at = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.specularRoughness += geometryRoughness;", "material.specularRoughness = min( material.specularRoughness, 1.0 );", "material.specularColor = specularFactor;"].join(`
`),
                ht = {
                    specular: {
                        value: new y.Color().setHex(16777215)
                    },
                    glossiness: {
                        value: 1
                    },
                    specularMap: {
                        value: null
                    },
                    glossinessMap: {
                        value: null
                    }
                };
            this._extraUniforms = ht, this.onBeforeCompile = function(tt) {
                for (var Bt in ht) tt.uniforms[Bt] = ht[Bt];
                tt.fragmentShader = tt.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", ve).replace("#include <metalnessmap_pars_fragment>", Ne).replace("#include <roughnessmap_fragment>", Ue).replace("#include <metalnessmap_fragment>", Oe).replace("#include <lights_physical_fragment>", at)
            }, Object.defineProperties(this, {
                specular: {
                    get: function() {
                        return ht.specular.value
                    },
                    set: function(tt) {
                        ht.specular.value = tt
                    }
                },
                specularMap: {
                    get: function() {
                        return ht.specularMap.value
                    },
                    set: function(tt) {
                        ht.specularMap.value = tt, tt ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
                    }
                },
                glossiness: {
                    get: function() {
                        return ht.glossiness.value
                    },
                    set: function(tt) {
                        ht.glossiness.value = tt
                    }
                },
                glossinessMap: {
                    get: function() {
                        return ht.glossinessMap.value
                    },
                    set: function(tt) {
                        ht.glossinessMap.value = tt, tt ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
                    }
                }
            }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(oe)
        }
        jt.prototype = Object.create(y.MeshStandardMaterial.prototype), jt.prototype.constructor = jt, jt.prototype.copy = function(oe) {
            return y.MeshStandardMaterial.prototype.copy.call(this, oe), this.specularMap = oe.specularMap, this.specular.copy(oe.specular), this.glossinessMap = oe.glossinessMap, this.glossiness = oe.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
        };

        function di() {
            return {
                name: Y.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
                getMaterialType: function() {
                    return jt
                },
                extendParams: function(oe, ve, Ne) {
                    var Ue = ve.extensions[this.name];
                    oe.color = new y.Color(1, 1, 1), oe.opacity = 1;
                    var Oe = [];
                    if (Array.isArray(Ue.diffuseFactor)) {
                        var at = Ue.diffuseFactor;
                        oe.color.fromArray(at), oe.opacity = at[3]
                    }
                    if (Ue.diffuseTexture !== void 0 && Oe.push(Ne.assignTexture(oe, "map", Ue.diffuseTexture)), oe.emissive = new y.Color(0, 0, 0), oe.glossiness = Ue.glossinessFactor !== void 0 ? Ue.glossinessFactor : 1, oe.specular = new y.Color(1, 1, 1), Array.isArray(Ue.specularFactor) && oe.specular.fromArray(Ue.specularFactor), Ue.specularGlossinessTexture !== void 0) {
                        var ht = Ue.specularGlossinessTexture;
                        Oe.push(Ne.assignTexture(oe, "glossinessMap", ht)), Oe.push(Ne.assignTexture(oe, "specularMap", ht))
                    }
                    return Promise.all(Oe)
                },
                createMaterial: function(oe) {
                    var ve = new jt(oe);
                    return ve.fog = !0, ve.color = oe.color, ve.map = oe.map === void 0 ? null : oe.map, ve.lightMap = null, ve.lightMapIntensity = 1, ve.aoMap = oe.aoMap === void 0 ? null : oe.aoMap, ve.aoMapIntensity = 1, ve.emissive = oe.emissive, ve.emissiveIntensity = 1, ve.emissiveMap = oe.emissiveMap === void 0 ? null : oe.emissiveMap, ve.bumpMap = oe.bumpMap === void 0 ? null : oe.bumpMap, ve.bumpScale = 1, ve.normalMap = oe.normalMap === void 0 ? null : oe.normalMap, ve.normalMapType = y.TangentSpaceNormalMap, oe.normalScale && (ve.normalScale = oe.normalScale), ve.displacementMap = null, ve.displacementScale = 1, ve.displacementBias = 0, ve.specularMap = oe.specularMap === void 0 ? null : oe.specularMap, ve.specular = oe.specular, ve.glossinessMap = oe.glossinessMap === void 0 ? null : oe.glossinessMap, ve.glossiness = oe.glossiness, ve.alphaMap = null, ve.envMap = oe.envMap === void 0 ? null : oe.envMap, ve.envMapIntensity = 1, ve.refractionRatio = .98, ve
                }
            }
        }

        function $e() {
            this.name = Y.KHR_MESH_QUANTIZATION
        }

        function vt(oe, ve, Ne, Ue) {
            y.Interpolant.call(this, oe, ve, Ne, Ue)
        }
        vt.prototype = Object.create(y.Interpolant.prototype), vt.prototype.constructor = vt, vt.prototype.copySampleValue_ = function(oe) {
            for (var ve = this.resultBuffer, Ne = this.sampleValues, Ue = this.valueSize, Oe = oe * Ue * 3 + Ue, at = 0; at !== Ue; at++) ve[at] = Ne[Oe + at];
            return ve
        }, vt.prototype.beforeStart_ = vt.prototype.copySampleValue_, vt.prototype.afterEnd_ = vt.prototype.copySampleValue_, vt.prototype.interpolate_ = function(oe, ve, Ne, Ue) {
            for (var Oe = this.resultBuffer, at = this.sampleValues, ht = this.valueSize, tt = ht * 2, Bt = ht * 3, Le = Ue - ve, Ot = (Ne - ve) / Le, ii = Ot * Ot, Wt = ii * Ot, bi = oe * Bt, Qi = bi - Bt, sn = -2 * Wt + 3 * ii, yn = Wt - ii, Yi = 1 - sn, rn = yn - ii + Ot, Mi = 0; Mi !== ht; Mi++) {
                var Ht = at[Qi + Mi + ht],
                    Pt = at[Qi + Mi + tt] * Le,
                    qn = at[bi + Mi + ht],
                    ji = at[bi + Mi] * Le;
                Oe[Mi] = Yi * Ht + rn * Pt + sn * qn + yn * ji
            }
            return Oe
        };
        var Kt = {
                FLOAT: 5126,
                FLOAT_MAT3: 35675,
                FLOAT_MAT4: 35676,
                FLOAT_VEC2: 35664,
                FLOAT_VEC3: 35665,
                FLOAT_VEC4: 35666,
                LINEAR: 9729,
                REPEAT: 10497,
                SAMPLER_2D: 35678,
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6,
                UNSIGNED_BYTE: 5121,
                UNSIGNED_SHORT: 5123
            },
            vi = {
                5120: Int8Array,
                5121: Uint8Array,
                5122: Int16Array,
                5123: Uint16Array,
                5125: Uint32Array,
                5126: Float32Array
            },
            Li = {
                9728: y.NearestFilter,
                9729: y.LinearFilter,
                9984: y.NearestMipmapNearestFilter,
                9985: y.LinearMipmapNearestFilter,
                9986: y.NearestMipmapLinearFilter,
                9987: y.LinearMipmapLinearFilter
            },
            Ei = {
                33071: y.ClampToEdgeWrapping,
                33648: y.MirroredRepeatWrapping,
                10497: y.RepeatWrapping
            },
            ct = {
                SCALAR: 1,
                VEC2: 2,
                VEC3: 3,
                VEC4: 4,
                MAT2: 4,
                MAT3: 9,
                MAT4: 16
            },
            je = {
                POSITION: "position",
                NORMAL: "normal",
                TANGENT: "tangent",
                TEXCOORD_0: "uv",
                TEXCOORD_1: "uv2",
                COLOR_0: "color",
                WEIGHTS_0: "skinWeight",
                JOINTS_0: "skinIndex"
            },
            li = {
                scale: "scale",
                translation: "position",
                rotation: "quaternion",
                weights: "morphTargetInfluences"
            },
            O = {
                CUBICSPLINE: void 0,
                LINEAR: y.InterpolateLinear,
                STEP: y.InterpolateDiscrete
            },
            K = {
                OPAQUE: "OPAQUE",
                MASK: "MASK",
                BLEND: "BLEND"
            };

        function ae(oe, ve) {
            return typeof oe != "string" || oe === "" ? "" : (/^https?:\/\//i.test(ve) && /^\//.test(oe) && (ve = ve.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(oe) || /^data:.*,.*$/i.test(oe) || /^blob:.*$/i.test(oe) ? oe : ve + oe)
        }

        function _e(oe) {
            return oe.DefaultMaterial === void 0 && (oe.DefaultMaterial = new y.MeshStandardMaterial({
                color: 16777215,
                emissive: 0,
                metalness: 1,
                roughness: 1,
                transparent: !1,
                depthTest: !0,
                side: y.FrontSide
            })), oe.DefaultMaterial
        }

        function xe(oe, ve, Ne) {
            for (var Ue in Ne.extensions) oe[Ue] === void 0 && (ve.userData.gltfExtensions = ve.userData.gltfExtensions || {}, ve.userData.gltfExtensions[Ue] = Ne.extensions[Ue])
        }

        function Ze(oe, ve) {
            ve.extras !== void 0 && (typeof ve.extras == "object" ? Object.assign(oe.userData, ve.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + ve.extras))
        }

        function st(oe, ve, Ne) {
            for (var Ue = !1, Oe = !1, at = 0, ht = ve.length; at < ht; at++) {
                var tt = ve[at];
                if (tt.POSITION !== void 0 && (Ue = !0), tt.NORMAL !== void 0 && (Oe = !0), Ue && Oe) break
            }
            if (!Ue && !Oe) return Promise.resolve(oe);
            for (var Bt = [], Le = [], at = 0, ht = ve.length; at < ht; at++) {
                var tt = ve[at];
                if (Ue) {
                    var Ot = tt.POSITION !== void 0 ? Ne.getDependency("accessor", tt.POSITION) : oe.attributes.position;
                    Bt.push(Ot)
                }
                if (Oe) {
                    var Ot = tt.NORMAL !== void 0 ? Ne.getDependency("accessor", tt.NORMAL) : oe.attributes.normal;
                    Le.push(Ot)
                }
            }
            return Promise.all([Promise.all(Bt), Promise.all(Le)]).then(function(ii) {
                var Wt = ii[0],
                    bi = ii[1];
                return Ue && (oe.morphAttributes.position = Wt), Oe && (oe.morphAttributes.normal = bi), oe.morphTargetsRelative = !0, oe
            })
        }

        function De(oe, ve) {
            if (oe.updateMorphTargets(), ve.weights !== void 0)
                for (var Ne = 0, Ue = ve.weights.length; Ne < Ue; Ne++) oe.morphTargetInfluences[Ne] = ve.weights[Ne];
            if (ve.extras && Array.isArray(ve.extras.targetNames)) {
                var Oe = ve.extras.targetNames;
                if (oe.morphTargetInfluences.length === Oe.length) {
                    oe.morphTargetDictionary = {};
                    for (var Ne = 0, Ue = Oe.length; Ne < Ue; Ne++) oe.morphTargetDictionary[Oe[Ne]] = Ne
                } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
            }
        }

        function gt(oe) {
            var ve = oe.extensions && oe.extensions[Y.KHR_DRACO_MESH_COMPRESSION],
                Ne;
            return ve ? Ne = "draco:" + ve.bufferView + ":" + ve.indices + ":" + Qt(ve.attributes) : Ne = oe.indices + ":" + Qt(oe.attributes) + ":" + oe.mode, Ne
        }

        function Qt(oe) {
            for (var ve = "", Ne = Object.keys(oe).sort(), Ue = 0, Oe = Ne.length; Ue < Oe; Ue++) ve += Ne[Ue] + ":" + oe[Ne[Ue]] + ";";
            return ve
        }

        function Ve(oe, ve) {
            this.json = oe || {}, this.extensions = {}, this.plugins = {}, this.options = ve || {}, this.cache = new V, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
                refs: {},
                uses: {}
            }, this.cameraCache = {
                refs: {},
                uses: {}
            }, this.lightCache = {
                refs: {},
                uses: {}
            }, this.nodeNamesUsed = {}, typeof createImageBitmap != "undefined" && /Firefox/.test(navigator.userAgent) === !1 ? this.textureLoader = new y.ImageBitmapLoader(this.options.manager) : this.textureLoader = new y.TextureLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new y.FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0)
        }
        Ve.prototype.setExtensions = function(oe) {
            this.extensions = oe
        }, Ve.prototype.setPlugins = function(oe) {
            this.plugins = oe
        }, Ve.prototype.parse = function(oe, ve) {
            var Ne = this,
                Ue = this.json,
                Oe = this.extensions;
            this.cache.removeAll(), this._invokeAll(function(at) {
                return at._markDefs && at._markDefs()
            }), Promise.all(this._invokeAll(function(at) {
                return at.beforeRoot && at.beforeRoot()
            })).then(function() {
                return Promise.all([Ne.getDependencies("scene"), Ne.getDependencies("animation"), Ne.getDependencies("camera")])
            }).then(function(at) {
                var ht = {
                    scene: at[0][Ue.scene || 0],
                    scenes: at[0],
                    animations: at[1],
                    cameras: at[2],
                    asset: Ue.asset,
                    parser: Ne,
                    userData: {}
                };
                xe(Oe, ht, Ue), Ze(ht, Ue), Promise.all(Ne._invokeAll(function(tt) {
                    return tt.afterRoot && tt.afterRoot(ht)
                })).then(function() {
                    oe(ht)
                })
            }).catch(ve)
        }, Ve.prototype._markDefs = function() {
            for (var oe = this.json.nodes || [], ve = this.json.skins || [], Ne = this.json.meshes || [], Ue = 0, Oe = ve.length; Ue < Oe; Ue++)
                for (var at = ve[Ue].joints, ht = 0, tt = at.length; ht < tt; ht++) oe[at[ht]].isBone = !0;
            for (var Bt = 0, Le = oe.length; Bt < Le; Bt++) {
                var Ot = oe[Bt];
                Ot.mesh !== void 0 && (this._addNodeRef(this.meshCache, Ot.mesh), Ot.skin !== void 0 && (Ne[Ot.mesh].isSkinnedMesh = !0)), Ot.camera !== void 0 && this._addNodeRef(this.cameraCache, Ot.camera)
            }
        }, Ve.prototype._addNodeRef = function(oe, ve) {
            ve !== void 0 && (oe.refs[ve] === void 0 && (oe.refs[ve] = oe.uses[ve] = 0), oe.refs[ve]++)
        }, Ve.prototype._getNodeRef = function(oe, ve, Ne) {
            if (oe.refs[ve] <= 1) return Ne;
            var Ue = Ne.clone();
            return Ue.name += "_instance_" + oe.uses[ve]++, Ue
        }, Ve.prototype._invokeOne = function(oe) {
            var ve = Object.values(this.plugins);
            ve.push(this);
            for (var Ne = 0; Ne < ve.length; Ne++) {
                var Ue = oe(ve[Ne]);
                if (Ue) return Ue
            }
        }, Ve.prototype._invokeAll = function(oe) {
            var ve = Object.values(this.plugins);
            ve.unshift(this);
            for (var Ne = [], Ue = 0; Ue < ve.length; Ue++) {
                var Oe = oe(ve[Ue]);
                Oe && Ne.push(Oe)
            }
            return Ne
        }, Ve.prototype.getDependency = function(oe, ve) {
            var Ne = oe + ":" + ve,
                Ue = this.cache.get(Ne);
            if (!Ue) {
                switch (oe) {
                    case "scene":
                        Ue = this.loadScene(ve);
                        break;
                    case "node":
                        Ue = this.loadNode(ve);
                        break;
                    case "mesh":
                        Ue = this._invokeOne(function(Oe) {
                            return Oe.loadMesh && Oe.loadMesh(ve)
                        });
                        break;
                    case "accessor":
                        Ue = this.loadAccessor(ve);
                        break;
                    case "bufferView":
                        Ue = this._invokeOne(function(Oe) {
                            return Oe.loadBufferView && Oe.loadBufferView(ve)
                        });
                        break;
                    case "buffer":
                        Ue = this.loadBuffer(ve);
                        break;
                    case "material":
                        Ue = this._invokeOne(function(Oe) {
                            return Oe.loadMaterial && Oe.loadMaterial(ve)
                        });
                        break;
                    case "texture":
                        Ue = this._invokeOne(function(Oe) {
                            return Oe.loadTexture && Oe.loadTexture(ve)
                        });
                        break;
                    case "skin":
                        Ue = this.loadSkin(ve);
                        break;
                    case "animation":
                        Ue = this.loadAnimation(ve);
                        break;
                    case "camera":
                        Ue = this.loadCamera(ve);
                        break;
                    default:
                        throw new Error("Unknown type: " + oe)
                }
                this.cache.add(Ne, Ue)
            }
            return Ue
        }, Ve.prototype.getDependencies = function(oe) {
            var ve = this.cache.get(oe);
            if (!ve) {
                var Ne = this,
                    Ue = this.json[oe + (oe === "mesh" ? "es" : "s")] || [];
                ve = Promise.all(Ue.map(function(Oe, at) {
                    return Ne.getDependency(oe, at)
                })), this.cache.add(oe, ve)
            }
            return ve
        }, Ve.prototype.loadBuffer = function(oe) {
            var ve = this.json.buffers[oe],
                Ne = this.fileLoader;
            if (ve.type && ve.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + ve.type + " buffer type is not supported.");
            if (ve.uri === void 0 && oe === 0) return Promise.resolve(this.extensions[Y.KHR_BINARY_GLTF].body);
            var Ue = this.options;
            return new Promise(function(Oe, at) {
                Ne.load(ae(ve.uri, Ue.path), Oe, void 0, function() {
                    at(new Error('THREE.GLTFLoader: Failed to load buffer "' + ve.uri + '".'))
                })
            })
        }, Ve.prototype.loadBufferView = function(oe) {
            var ve = this.json.bufferViews[oe];
            return this.getDependency("buffer", ve.buffer).then(function(Ne) {
                var Ue = ve.byteLength || 0,
                    Oe = ve.byteOffset || 0;
                return Ne.slice(Oe, Oe + Ue)
            })
        }, Ve.prototype.loadAccessor = function(oe) {
            var ve = this,
                Ne = this.json,
                Ue = this.json.accessors[oe];
            if (Ue.bufferView === void 0 && Ue.sparse === void 0) return Promise.resolve(null);
            var Oe = [];
            return Ue.bufferView !== void 0 ? Oe.push(this.getDependency("bufferView", Ue.bufferView)) : Oe.push(null), Ue.sparse !== void 0 && (Oe.push(this.getDependency("bufferView", Ue.sparse.indices.bufferView)), Oe.push(this.getDependency("bufferView", Ue.sparse.values.bufferView))), Promise.all(Oe).then(function(at) {
                var ht = at[0],
                    tt = ct[Ue.type],
                    Bt = vi[Ue.componentType],
                    Le = Bt.BYTES_PER_ELEMENT,
                    Ot = Le * tt,
                    ii = Ue.byteOffset || 0,
                    Wt = Ue.bufferView !== void 0 ? Ne.bufferViews[Ue.bufferView].byteStride : void 0,
                    bi = Ue.normalized === !0,
                    Qi, sn;
                if (Wt && Wt !== Ot) {
                    var yn = Math.floor(ii / Wt),
                        Yi = "InterleavedBuffer:" + Ue.bufferView + ":" + Ue.componentType + ":" + yn + ":" + Ue.count,
                        rn = ve.cache.get(Yi);
                    rn || (Qi = new Bt(ht, yn * Wt, Ue.count * Wt / Le), rn = new y.InterleavedBuffer(Qi, Wt / Le), ve.cache.add(Yi, rn)), sn = new y.InterleavedBufferAttribute(rn, tt, ii % Wt / Le, bi)
                } else ht === null ? Qi = new Bt(Ue.count * tt) : Qi = new Bt(ht, ii, Ue.count * tt), sn = new y.BufferAttribute(Qi, tt, bi);
                if (Ue.sparse !== void 0) {
                    var Mi = ct.SCALAR,
                        Ht = vi[Ue.sparse.indices.componentType],
                        Pt = Ue.sparse.indices.byteOffset || 0,
                        qn = Ue.sparse.values.byteOffset || 0,
                        ji = new Ht(at[1], Pt, Ue.sparse.count * Mi),
                        na = new Bt(at[2], qn, Ue.sparse.count * tt);
                    ht !== null && (sn = new y.BufferAttribute(sn.array.slice(), sn.itemSize, sn.normalized));
                    for (var cn = 0, yi = ji.length; cn < yi; cn++) {
                        var Si = ji[cn];
                        if (sn.setX(Si, na[cn * tt]), tt >= 2 && sn.setY(Si, na[cn * tt + 1]), tt >= 3 && sn.setZ(Si, na[cn * tt + 2]), tt >= 4 && sn.setW(Si, na[cn * tt + 3]), tt >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                    }
                }
                return sn
            })
        }, Ve.prototype.loadTexture = function(oe) {
            var ve = this.json,
                Ne = this.options,
                Ue = ve.textures[oe],
                Oe = ve.images[Ue.source],
                at = this.textureLoader;
            if (Oe.uri) {
                var ht = Ne.manager.getHandler(Oe.uri);
                ht !== null && (at = ht)
            }
            return this.loadTextureImage(oe, Oe, at)
        }, Ve.prototype.loadTextureImage = function(oe, ve, Ne) {
            var Ue = this,
                Oe = this.json,
                at = this.options,
                ht = Oe.textures[oe],
                tt = self.URL || self.webkitURL,
                Bt = ve.uri,
                Le = !1,
                Ot = !0;
            if (ve.mimeType === "image/jpeg" && (Ot = !1), ve.bufferView !== void 0) Bt = Ue.getDependency("bufferView", ve.bufferView).then(function(ii) {
                if (ve.mimeType === "image/png") {
                    var Wt = new DataView(ii, 25, 1).getUint8(0, !1);
                    Ot = Wt === 6 || Wt === 4 || Wt === 3
                }
                Le = !0;
                var bi = new Blob([ii], {
                    type: ve.mimeType
                });
                return Bt = tt.createObjectURL(bi), Bt
            });
            else if (ve.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + oe + " is missing URI and bufferView");
            return Promise.resolve(Bt).then(function(ii) {
                return new Promise(function(Wt, bi) {
                    var Qi = Wt;
                    Ne.isImageBitmapLoader === !0 && (Qi = function(sn) {
                        Wt(new y.CanvasTexture(sn))
                    }), Ne.load(ae(ii, at.path), Qi, void 0, bi)
                })
            }).then(function(ii) {
                Le === !0 && tt.revokeObjectURL(Bt), ii.flipY = !1, ht.name && (ii.name = ht.name), Ot || (ii.format = y.RGBFormat);
                var Wt = Oe.samplers || {},
                    bi = Wt[ht.sampler] || {};
                return ii.magFilter = Li[bi.magFilter] || y.LinearFilter, ii.minFilter = Li[bi.minFilter] || y.LinearMipmapLinearFilter, ii.wrapS = Ei[bi.wrapS] || y.RepeatWrapping, ii.wrapT = Ei[bi.wrapT] || y.RepeatWrapping, Ue.associations.set(ii, {
                    type: "textures",
                    index: oe
                }), ii
            })
        }, Ve.prototype.assignTexture = function(oe, ve, Ne) {
            var Ue = this;
            return this.getDependency("texture", Ne.index).then(function(Oe) {
                if (Ne.texCoord !== void 0 && Ne.texCoord != 0 && !(ve === "aoMap" && Ne.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + Ne.texCoord + " for texture " + ve + " not yet supported."), Ue.extensions[Y.KHR_TEXTURE_TRANSFORM]) {
                    var at = Ne.extensions !== void 0 ? Ne.extensions[Y.KHR_TEXTURE_TRANSFORM] : void 0;
                    if (at) {
                        var ht = Ue.associations.get(Oe);
                        Oe = Ue.extensions[Y.KHR_TEXTURE_TRANSFORM].extendTexture(Oe, at), Ue.associations.set(Oe, ht)
                    }
                }
                oe[ve] = Oe
            })
        }, Ve.prototype.assignFinalMaterial = function(oe) {
            var ve = oe.geometry,
                Ne = oe.material,
                Ue = ve.attributes.tangent !== void 0,
                Oe = ve.attributes.color !== void 0,
                at = ve.attributes.normal === void 0,
                ht = oe.isSkinnedMesh === !0,
                tt = Object.keys(ve.morphAttributes).length > 0,
                Bt = tt && ve.morphAttributes.normal !== void 0;
            if (oe.isPoints) {
                var Le = "PointsMaterial:" + Ne.uuid,
                    Ot = this.cache.get(Le);
                Ot || (Ot = new y.PointsMaterial, y.Material.prototype.copy.call(Ot, Ne), Ot.color.copy(Ne.color), Ot.map = Ne.map, Ot.sizeAttenuation = !1, this.cache.add(Le, Ot)), Ne = Ot
            } else if (oe.isLine) {
                var Le = "LineBasicMaterial:" + Ne.uuid,
                    ii = this.cache.get(Le);
                ii || (ii = new y.LineBasicMaterial, y.Material.prototype.copy.call(ii, Ne), ii.color.copy(Ne.color), this.cache.add(Le, ii)), Ne = ii
            }
            if (Ue || Oe || at || ht || tt) {
                var Le = "ClonedMaterial:" + Ne.uuid + ":";
                Ne.isGLTFSpecularGlossinessMaterial && (Le += "specular-glossiness:"), ht && (Le += "skinning:"), Ue && (Le += "vertex-tangents:"), Oe && (Le += "vertex-colors:"), at && (Le += "flat-shading:"), tt && (Le += "morph-targets:"), Bt && (Le += "morph-normals:");
                var Wt = this.cache.get(Le);
                Wt || (Wt = Ne.clone(), ht && (Wt.skinning = !0), Oe && (Wt.vertexColors = !0), at && (Wt.flatShading = !0), tt && (Wt.morphTargets = !0), Bt && (Wt.morphNormals = !0), Ue && (Wt.vertexTangents = !0, Wt.normalScale && (Wt.normalScale.y *= -1), Wt.clearcoatNormalScale && (Wt.clearcoatNormalScale.y *= -1)), this.cache.add(Le, Wt), this.associations.set(Wt, this.associations.get(Ne))), Ne = Wt
            }
            Ne.aoMap && ve.attributes.uv2 === void 0 && ve.attributes.uv !== void 0 && ve.setAttribute("uv2", ve.attributes.uv), oe.material = Ne
        }, Ve.prototype.getMaterialType = function() {
            return y.MeshStandardMaterial
        }, Ve.prototype.loadMaterial = function(oe) {
            var ve = this,
                Ne = this.json,
                Ue = this.extensions,
                Oe = Ne.materials[oe],
                at, ht = {},
                tt = Oe.extensions || {},
                Bt = [];
            if (tt[Y.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                var Le = Ue[Y.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                at = Le.getMaterialType(), Bt.push(Le.extendParams(ht, Oe, ve))
            } else if (tt[Y.KHR_MATERIALS_UNLIT]) {
                var Ot = Ue[Y.KHR_MATERIALS_UNLIT];
                at = Ot.getMaterialType(), Bt.push(Ot.extendParams(ht, Oe, ve))
            } else {
                var ii = Oe.pbrMetallicRoughness || {};
                if (ht.color = new y.Color(1, 1, 1), ht.opacity = 1, Array.isArray(ii.baseColorFactor)) {
                    var Wt = ii.baseColorFactor;
                    ht.color.fromArray(Wt), ht.opacity = Wt[3]
                }
                ii.baseColorTexture !== void 0 && Bt.push(ve.assignTexture(ht, "map", ii.baseColorTexture)), ht.metalness = ii.metallicFactor !== void 0 ? ii.metallicFactor : 1, ht.roughness = ii.roughnessFactor !== void 0 ? ii.roughnessFactor : 1, ii.metallicRoughnessTexture !== void 0 && (Bt.push(ve.assignTexture(ht, "metalnessMap", ii.metallicRoughnessTexture)), Bt.push(ve.assignTexture(ht, "roughnessMap", ii.metallicRoughnessTexture))), at = this._invokeOne(function(Qi) {
                    return Qi.getMaterialType && Qi.getMaterialType(oe)
                }), Bt.push(Promise.all(this._invokeAll(function(Qi) {
                    return Qi.extendMaterialParams && Qi.extendMaterialParams(oe, ht)
                })))
            }
            Oe.doubleSided === !0 && (ht.side = y.DoubleSide);
            var bi = Oe.alphaMode || K.OPAQUE;
            return bi === K.BLEND ? (ht.transparent = !0, ht.depthWrite = !1) : (ht.transparent = !1, bi === K.MASK && (ht.alphaTest = Oe.alphaCutoff !== void 0 ? Oe.alphaCutoff : .5)), Oe.normalTexture !== void 0 && at !== y.MeshBasicMaterial && (Bt.push(ve.assignTexture(ht, "normalMap", Oe.normalTexture)), ht.normalScale = new y.Vector2(1, -1), Oe.normalTexture.scale !== void 0 && ht.normalScale.set(Oe.normalTexture.scale, -Oe.normalTexture.scale)), Oe.occlusionTexture !== void 0 && at !== y.MeshBasicMaterial && (Bt.push(ve.assignTexture(ht, "aoMap", Oe.occlusionTexture)), Oe.occlusionTexture.strength !== void 0 && (ht.aoMapIntensity = Oe.occlusionTexture.strength)), Oe.emissiveFactor !== void 0 && at !== y.MeshBasicMaterial && (ht.emissive = new y.Color().fromArray(Oe.emissiveFactor)), Oe.emissiveTexture !== void 0 && at !== y.MeshBasicMaterial && Bt.push(ve.assignTexture(ht, "emissiveMap", Oe.emissiveTexture)), Promise.all(Bt).then(function() {
                var Qi;
                return at === jt ? Qi = Ue[Y.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(ht) : Qi = new at(ht), Oe.name && (Qi.name = Oe.name), Qi.map && (Qi.map.encoding = y.sRGBEncoding), Qi.emissiveMap && (Qi.emissiveMap.encoding = y.sRGBEncoding), Ze(Qi, Oe), ve.associations.set(Qi, {
                    type: "materials",
                    index: oe
                }), Oe.extensions && xe(Ue, Qi, Oe), Qi
            })
        }, Ve.prototype.createUniqueName = function(oe) {
            for (var ve = y.PropertyBinding.sanitizeNodeName(oe || ""), Ne = ve, Ue = 1; this.nodeNamesUsed[Ne]; ++Ue) Ne = ve + "_" + Ue;
            return this.nodeNamesUsed[Ne] = !0, Ne
        };

        function Dt(oe, ve, Ne) {
            var Ue = ve.attributes,
                Oe = new y.Box3;
            if (Ue.POSITION !== void 0) {
                var at = Ne.json.accessors[Ue.POSITION],
                    ht = at.min,
                    tt = at.max;
                if (ht !== void 0 && tt !== void 0) Oe.set(new y.Vector3(ht[0], ht[1], ht[2]), new y.Vector3(tt[0], tt[1], tt[2]));
                else {
                    console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                    return
                }
            } else return;
            var Bt = ve.targets;
            if (Bt !== void 0) {
                for (var Le = new y.Vector3, Ot = new y.Vector3, ii = 0, Wt = Bt.length; ii < Wt; ii++) {
                    var bi = Bt[ii];
                    if (bi.POSITION !== void 0) {
                        var at = Ne.json.accessors[bi.POSITION],
                            ht = at.min,
                            tt = at.max;
                        ht !== void 0 && tt !== void 0 ? (Ot.setX(Math.max(Math.abs(ht[0]), Math.abs(tt[0]))), Ot.setY(Math.max(Math.abs(ht[1]), Math.abs(tt[1]))), Ot.setZ(Math.max(Math.abs(ht[2]), Math.abs(tt[2]))), Le.max(Ot)) : console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                    }
                }
                Oe.expandByVector(Le)
            }
            oe.boundingBox = Oe;
            var Qi = new y.Sphere;
            Oe.getCenter(Qi.center), Qi.radius = Oe.min.distanceTo(Oe.max) / 2, oe.boundingSphere = Qi
        }

        function ei(oe, ve, Ne) {
            var Ue = ve.attributes,
                Oe = [];

            function at(Le, Ot) {
                return Ne.getDependency("accessor", Le).then(function(ii) {
                    oe.setAttribute(Ot, ii)
                })
            }
            for (var ht in Ue) {
                var tt = je[ht] || ht.toLowerCase();
                tt in oe.attributes || Oe.push(at(Ue[ht], tt))
            }
            if (ve.indices !== void 0 && !oe.index) {
                var Bt = Ne.getDependency("accessor", ve.indices).then(function(Le) {
                    oe.setIndex(Le)
                });
                Oe.push(Bt)
            }
            return Ze(oe, ve), Dt(oe, ve, Ne), Promise.all(Oe).then(function() {
                return ve.targets !== void 0 ? st(oe, ve.targets, Ne) : oe
            })
        }

        function xi(oe, ve) {
            var Ne = oe.getIndex();
            if (Ne === null) {
                var Ue = [],
                    Oe = oe.getAttribute("position");
                if (Oe !== void 0) {
                    for (var at = 0; at < Oe.count; at++) Ue.push(at);
                    oe.setIndex(Ue), Ne = oe.getIndex()
                } else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), oe
            }
            var ht = Ne.count - 2,
                tt = [];
            if (ve === y.TriangleFanDrawMode)
                for (var at = 1; at <= ht; at++) tt.push(Ne.getX(0)), tt.push(Ne.getX(at)), tt.push(Ne.getX(at + 1));
            else
                for (var at = 0; at < ht; at++) at % 2 === 0 ? (tt.push(Ne.getX(at)), tt.push(Ne.getX(at + 1)), tt.push(Ne.getX(at + 2))) : (tt.push(Ne.getX(at + 2)), tt.push(Ne.getX(at + 1)), tt.push(Ne.getX(at)));
            tt.length / 3 !== ht && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
            var Bt = oe.clone();
            return Bt.setIndex(tt), Bt
        }
        return Ve.prototype.loadGeometries = function(oe) {
            var ve = this,
                Ne = this.extensions,
                Ue = this.primitiveCache;

            function Oe(Wt) {
                return Ne[Y.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Wt, ve).then(function(bi) {
                    return ei(bi, Wt, ve)
                })
            }
            for (var at = [], ht = 0, tt = oe.length; ht < tt; ht++) {
                var Bt = oe[ht],
                    Le = gt(Bt),
                    Ot = Ue[Le];
                if (Ot) at.push(Ot.promise);
                else {
                    var ii;
                    Bt.extensions && Bt.extensions[Y.KHR_DRACO_MESH_COMPRESSION] ? ii = Oe(Bt) : ii = ei(new y.BufferGeometry, Bt, ve), Ue[Le] = {
                        primitive: Bt,
                        promise: ii
                    }, at.push(ii)
                }
            }
            return Promise.all(at)
        }, Ve.prototype.loadMesh = function(oe) {
            for (var ve = this, Ne = this.json, Ue = this.extensions, Oe = Ne.meshes[oe], at = Oe.primitives, ht = [], tt = 0, Bt = at.length; tt < Bt; tt++) {
                var Le = at[tt].material === void 0 ? _e(this.cache) : this.getDependency("material", at[tt].material);
                ht.push(Le)
            }
            return ht.push(ve.loadGeometries(at)), Promise.all(ht).then(function(Ot) {
                for (var ii = Ot.slice(0, Ot.length - 1), Wt = Ot[Ot.length - 1], bi = [], Qi = 0, sn = Wt.length; Qi < sn; Qi++) {
                    var yn = Wt[Qi],
                        Yi = at[Qi],
                        rn, Mi = ii[Qi];
                    if (Yi.mode === Kt.TRIANGLES || Yi.mode === Kt.TRIANGLE_STRIP || Yi.mode === Kt.TRIANGLE_FAN || Yi.mode === void 0) rn = Oe.isSkinnedMesh === !0 ? new y.SkinnedMesh(yn, Mi) : new y.Mesh(yn, Mi), rn.isSkinnedMesh === !0 && !rn.geometry.attributes.skinWeight.normalized && rn.normalizeSkinWeights(), Yi.mode === Kt.TRIANGLE_STRIP ? rn.geometry = xi(rn.geometry, y.TriangleStripDrawMode) : Yi.mode === Kt.TRIANGLE_FAN && (rn.geometry = xi(rn.geometry, y.TriangleFanDrawMode));
                    else if (Yi.mode === Kt.LINES) rn = new y.LineSegments(yn, Mi);
                    else if (Yi.mode === Kt.LINE_STRIP) rn = new y.Line(yn, Mi);
                    else if (Yi.mode === Kt.LINE_LOOP) rn = new y.LineLoop(yn, Mi);
                    else if (Yi.mode === Kt.POINTS) rn = new y.Points(yn, Mi);
                    else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + Yi.mode);
                    Object.keys(rn.geometry.morphAttributes).length > 0 && De(rn, Oe), rn.name = ve.createUniqueName(Oe.name || "mesh_" + oe), Ze(rn, Oe), Yi.extensions && xe(Ue, rn, Yi), ve.assignFinalMaterial(rn), bi.push(rn)
                }
                if (bi.length === 1) return bi[0];
                for (var Ht = new y.Group, Qi = 0, sn = bi.length; Qi < sn; Qi++) Ht.add(bi[Qi]);
                return Ht
            })
        }, Ve.prototype.loadCamera = function(oe) {
            var ve, Ne = this.json.cameras[oe],
                Ue = Ne[Ne.type];
            if (!Ue) {
                console.warn("THREE.GLTFLoader: Missing camera parameters.");
                return
            }
            return Ne.type === "perspective" ? ve = new y.PerspectiveCamera(y.MathUtils.radToDeg(Ue.yfov), Ue.aspectRatio || 1, Ue.znear || 1, Ue.zfar || 2e6) : Ne.type === "orthographic" && (ve = new y.OrthographicCamera(-Ue.xmag, Ue.xmag, Ue.ymag, -Ue.ymag, Ue.znear, Ue.zfar)), Ne.name && (ve.name = this.createUniqueName(Ne.name)), Ze(ve, Ne), Promise.resolve(ve)
        }, Ve.prototype.loadSkin = function(oe) {
            var ve = this.json.skins[oe],
                Ne = {
                    joints: ve.joints
                };
            return ve.inverseBindMatrices === void 0 ? Promise.resolve(Ne) : this.getDependency("accessor", ve.inverseBindMatrices).then(function(Ue) {
                return Ne.inverseBindMatrices = Ue, Ne
            })
        }, Ve.prototype.loadAnimation = function(oe) {
            for (var ve = this.json, Ne = ve.animations[oe], Ue = [], Oe = [], at = [], ht = [], tt = [], Bt = 0, Le = Ne.channels.length; Bt < Le; Bt++) {
                var Ot = Ne.channels[Bt],
                    ii = Ne.samplers[Ot.sampler],
                    Wt = Ot.target,
                    bi = Wt.node !== void 0 ? Wt.node : Wt.id,
                    Qi = Ne.parameters !== void 0 ? Ne.parameters[ii.input] : ii.input,
                    sn = Ne.parameters !== void 0 ? Ne.parameters[ii.output] : ii.output;
                Ue.push(this.getDependency("node", bi)), Oe.push(this.getDependency("accessor", Qi)), at.push(this.getDependency("accessor", sn)), ht.push(ii), tt.push(Wt)
            }
            return Promise.all([Promise.all(Ue), Promise.all(Oe), Promise.all(at), Promise.all(ht), Promise.all(tt)]).then(function(yn) {
                for (var Yi = yn[0], rn = yn[1], Mi = yn[2], Ht = yn[3], Pt = yn[4], qn = [], ji = 0, na = Yi.length; ji < na; ji++) {
                    var cn = Yi[ji],
                        yi = rn[ji],
                        Si = Mi[ji],
                        qi = Ht[ji],
                        Nn = Pt[ji];
                    if (cn !== void 0) {
                        cn.updateMatrix(), cn.matrixAutoUpdate = !0;
                        var Bn;
                        switch (li[Nn.path]) {
                            case li.weights:
                                Bn = y.NumberKeyframeTrack;
                                break;
                            case li.rotation:
                                Bn = y.QuaternionKeyframeTrack;
                                break;
                            case li.position:
                            case li.scale:
                            default:
                                Bn = y.VectorKeyframeTrack;
                                break
                        }
                        var ge = cn.name ? cn.name : cn.uuid,
                            ga = qi.interpolation !== void 0 ? O[qi.interpolation] : y.InterpolateLinear,
                            On = [];
                        li[Nn.path] === li.weights ? cn.traverse(function(it) {
                            it.isMesh === !0 && it.morphTargetInfluences && On.push(it.name ? it.name : it.uuid)
                        }) : On.push(ge);
                        var Te = Si.array;
                        if (Si.normalized) {
                            var te;
                            if (Te.constructor === Int8Array) te = 1 / 127;
                            else if (Te.constructor === Uint8Array) te = 1 / 255;
                            else if (Te.constructor == Int16Array) te = 1 / 32767;
                            else if (Te.constructor === Uint16Array) te = 1 / 65535;
                            else throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");
                            for (var he = new Float32Array(Te.length), fe = 0, Ae = Te.length; fe < Ae; fe++) he[fe] = Te[fe] * te;
                            Te = he
                        }
                        for (var fe = 0, Ae = On.length; fe < Ae; fe++) {
                            var qe = new Bn(On[fe] + "." + li[Nn.path], yi.array, Te, ga);
                            qi.interpolation === "CUBICSPLINE" && (qe.createInterpolant = function(Jt) {
                                return new vt(this.times, this.values, this.getValueSize() / 3, Jt)
                            }, qe.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), qn.push(qe)
                        }
                    }
                }
                var et = Ne.name ? Ne.name : "animation_" + oe;
                return new y.AnimationClip(et, void 0, qn)
            })
        }, Ve.prototype.loadNode = function(oe) {
            var ve = this.json,
                Ne = this.extensions,
                Ue = this,
                Oe = ve.nodes[oe],
                at = Oe.name ? Ue.createUniqueName(Oe.name) : "";
            return function() {
                var ht = [];
                return Oe.mesh !== void 0 && ht.push(Ue.getDependency("mesh", Oe.mesh).then(function(tt) {
                    var Bt = Ue._getNodeRef(Ue.meshCache, Oe.mesh, tt);
                    return Oe.weights !== void 0 && Bt.traverse(function(Le) {
                        if (Le.isMesh)
                            for (var Ot = 0, ii = Oe.weights.length; Ot < ii; Ot++) Le.morphTargetInfluences[Ot] = Oe.weights[Ot]
                    }), Bt
                })), Oe.camera !== void 0 && ht.push(Ue.getDependency("camera", Oe.camera).then(function(tt) {
                    return Ue._getNodeRef(Ue.cameraCache, Oe.camera, tt)
                })), Ue._invokeAll(function(tt) {
                    return tt.createNodeAttachment && tt.createNodeAttachment(oe)
                }).forEach(function(tt) {
                    ht.push(tt)
                }), Promise.all(ht)
            }().then(function(ht) {
                var tt;
                if (Oe.isBone === !0 ? tt = new y.Bone : ht.length > 1 ? tt = new y.Group : ht.length === 1 ? tt = ht[0] : tt = new y.Object3D, tt !== ht[0])
                    for (var Bt = 0, Le = ht.length; Bt < Le; Bt++) tt.add(ht[Bt]);
                if (Oe.name && (tt.userData.name = Oe.name, tt.name = at), Ze(tt, Oe), Oe.extensions && xe(Ne, tt, Oe), Oe.matrix !== void 0) {
                    var Ot = new y.Matrix4;
                    Ot.fromArray(Oe.matrix), tt.applyMatrix4(Ot)
                } else Oe.translation !== void 0 && tt.position.fromArray(Oe.translation), Oe.rotation !== void 0 && tt.quaternion.fromArray(Oe.rotation), Oe.scale !== void 0 && tt.scale.fromArray(Oe.scale);
                return Ue.associations.set(tt, {
                    type: "nodes",
                    index: oe
                }), tt
            })
        }, Ve.prototype.loadScene = function() {
            function oe(ve, Ne, Ue, Oe) {
                var at = Ue.nodes[ve];
                return Oe.getDependency("node", ve).then(function(ht) {
                    if (at.skin === void 0) return ht;
                    var tt;
                    return Oe.getDependency("skin", at.skin).then(function(Bt) {
                        tt = Bt;
                        for (var Le = [], Ot = 0, ii = tt.joints.length; Ot < ii; Ot++) Le.push(Oe.getDependency("node", tt.joints[Ot]));
                        return Promise.all(Le)
                    }).then(function(Bt) {
                        return ht.traverse(function(Le) {
                            if (Le.isMesh) {
                                for (var Ot = [], ii = [], Wt = 0, bi = Bt.length; Wt < bi; Wt++) {
                                    var Qi = Bt[Wt];
                                    if (Qi) {
                                        Ot.push(Qi);
                                        var sn = new y.Matrix4;
                                        tt.inverseBindMatrices !== void 0 && sn.fromArray(tt.inverseBindMatrices.array, Wt * 16), ii.push(sn)
                                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', tt.joints[Wt])
                                }
                                Le.bind(new y.Skeleton(Ot, ii), Le.matrixWorld)
                            }
                        }), ht
                    })
                }).then(function(ht) {
                    Ne.add(ht);
                    var tt = [];
                    if (at.children)
                        for (var Bt = at.children, Le = 0, Ot = Bt.length; Le < Ot; Le++) {
                            var ii = Bt[Le];
                            tt.push(oe(ii, ht, Ue, Oe))
                        }
                    return Promise.all(tt)
                })
            }
            return function(Ne) {
                var Ue = this.json,
                    Oe = this.extensions,
                    at = this.json.scenes[Ne],
                    ht = this,
                    tt = new y.Group;
                at.name && (tt.name = ht.createUniqueName(at.name)), Ze(tt, at), at.extensions && xe(Oe, tt, at);
                for (var Bt = at.nodes || [], Le = [], Ot = 0, ii = Bt.length; Ot < ii; Ot++) Le.push(oe(Bt[Ot], tt, Ue, ht));
                return Promise.all(Le).then(function() {
                    return tt
                })
            }
        }(), z
    }(), ue.exports = y.GLTFLoader
})(Pf);
var fm = Pf.exports,
    kf = {
        exports: {}
    };
(function(ue, R) {
    const y = Xa;
    y.ColladaLoader = function(z) {
        y.Loader.call(this, z)
    }, y.ColladaLoader.prototype = Object.assign(Object.create(y.Loader.prototype), {
        constructor: y.ColladaLoader,
        load: function(z, V, Y, C) {
            var p = this,
                se = p.path === "" ? y.LoaderUtils.extractUrlBase(z) : p.path,
                ie = new y.FileLoader(p.manager);
            ie.setPath(p.path), ie.setRequestHeader(p.requestHeader), ie.setWithCredentials(p.withCredentials), ie.load(z, function(He) {
                try {
                    V(p.parse(He, se))
                } catch (be) {
                    C ? C(be) : console.error(be), p.manager.itemError(z)
                }
            }, Y, C)
        },
        options: {
            set convertUpAxis(z) {
                console.warn("THREE.ColladaLoader: options.convertUpAxis() has been removed. Up axis is converted automatically.")
            }
        },
        parse: function(z, V) {
            function Y(J, W) {
                for (var re = [], ye = J.childNodes, me = 0, rt = ye.length; me < rt; me++) {
                    var At = ye[me];
                    At.nodeName === W && re.push(At)
                }
                return re
            }

            function C(J) {
                if (J.length === 0) return [];
                for (var W = J.trim().split(/\s+/), re = new Array(W.length), ye = 0, me = W.length; ye < me; ye++) re[ye] = W[ye];
                return re
            }

            function p(J) {
                if (J.length === 0) return [];
                for (var W = J.trim().split(/\s+/), re = new Array(W.length), ye = 0, me = W.length; ye < me; ye++) re[ye] = parseFloat(W[ye]);
                return re
            }

            function se(J) {
                if (J.length === 0) return [];
                for (var W = J.trim().split(/\s+/), re = new Array(W.length), ye = 0, me = W.length; ye < me; ye++) re[ye] = parseInt(W[ye]);
                return re
            }

            function ie(J) {
                return J.substring(1)
            }

            function He() {
                return "three_default_" + Ft++
            }

            function be(J) {
                return Object.keys(J).length === 0
            }

            function Ee(J) {
                return {
                    unit: Lt(Y(J, "unit")[0]),
                    upAxis: Tt(Y(J, "up_axis")[0])
                }
            }

            function Lt(J) {
                return J !== void 0 && J.hasAttribute("meter") === !0 ? parseFloat(J.getAttribute("meter")) : 1
            }

            function Tt(J) {
                return J !== void 0 ? J.textContent : "Y_UP"
            }

            function Je(J, W, re, ye) {
                var me = Y(J, W)[0];
                if (me !== void 0)
                    for (var rt = Y(me, re), At = 0; At < rt.length; At++) ye(rt[At])
            }

            function wt(J, W) {
                for (var re in J) {
                    var ye = J[re];
                    ye.build = W(J[re])
                }
            }

            function Ke(J, W) {
                return J.build !== void 0 || (J.build = W(J)), J.build
            }

            function Ye(J) {
                for (var W = {
                        sources: {},
                        samplers: {},
                        channels: {}
                    }, re = !1, ye = 0, me = J.childNodes.length; ye < me; ye++) {
                    var rt = J.childNodes[ye];
                    if (rt.nodeType === 1) {
                        var At;
                        switch (rt.nodeName) {
                            case "source":
                                At = rt.getAttribute("id"), W.sources[At] = Te(rt);
                                break;
                            case "sampler":
                                At = rt.getAttribute("id"), W.samplers[At] = jt(rt);
                                break;
                            case "channel":
                                At = rt.getAttribute("target"), W.channels[At] = di(rt);
                                break;
                            case "animation":
                                Ye(rt), re = !0;
                                break;
                            default:
                                console.log(rt)
                        }
                    }
                }
                re === !1 && (_t.animations[J.getAttribute("id") || y.MathUtils.generateUUID()] = W)
            }

            function jt(J) {
                for (var W = {
                        inputs: {}
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "input":
                            var rt = ie(me.getAttribute("source")),
                                At = me.getAttribute("semantic");
                            W.inputs[At] = rt;
                            break
                    }
                }
                return W
            }

            function di(J) {
                var W = {},
                    re = J.getAttribute("target"),
                    ye = re.split("/"),
                    me = ye.shift(),
                    rt = ye.shift(),
                    At = rt.indexOf("(") !== -1,
                    Mt = rt.indexOf(".") !== -1;
                if (Mt) ye = rt.split("."), rt = ye.shift(), W.member = ye.shift();
                else if (At) {
                    var si = rt.split("(");
                    rt = si.shift();
                    for (var ti = 0; ti < si.length; ti++) si[ti] = parseInt(si[ti].replace(/\)/, ""));
                    W.indices = si
                }
                return W.id = me, W.sid = rt, W.arraySyntax = At, W.memberSyntax = Mt, W.sampler = ie(J.getAttribute("source")), W
            }

            function $e(J) {
                var W = [],
                    re = J.channels,
                    ye = J.samplers,
                    me = J.sources;
                for (var rt in re)
                    if (re.hasOwnProperty(rt)) {
                        var At = re[rt],
                            Mt = ye[At.sampler],
                            si = Mt.inputs.INPUT,
                            ti = Mt.inputs.OUTPUT,
                            ni = me[si],
                            ri = me[ti],
                            Wi = Kt(At, ni, ri);
                        je(Wi, W)
                    } return W
            }

            function vt(J) {
                return Ke(_t.animations[J], $e)
            }

            function Kt(J, W, re) {
                var ye = _t.nodes[J.id],
                    me = Jr(ye.id),
                    rt = ye.transforms[J.sid],
                    At = ye.matrix.clone().transpose(),
                    Mt, si, ti, ni, ri, Wi, Ci = {};
                switch (rt) {
                    case "matrix":
                        for (ti = 0, ni = W.array.length; ti < ni; ti++)
                            if (Mt = W.array[ti], si = ti * re.stride, Ci[Mt] === void 0 && (Ci[Mt] = {}), J.arraySyntax === !0) {
                                var Pi = re.array[si],
                                    ai = J.indices[0] + 4 * J.indices[1];
                                Ci[Mt][ai] = Pi
                            } else
                                for (ri = 0, Wi = re.stride; ri < Wi; ri++) Ci[Mt][ri] = re.array[si + ri];
                        break;
                    case "translate":
                        console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', rt);
                        break;
                    case "rotate":
                        console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', rt);
                        break;
                    case "scale":
                        console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', rt);
                        break
                }
                var Rt = vi(Ci, At),
                    Gi = {
                        name: me.uuid,
                        keyframes: Rt
                    };
                return Gi
            }

            function vi(J, W) {
                var re = [];
                for (var ye in J) re.push({
                    time: parseFloat(ye),
                    value: J[ye]
                });
                re.sort(rt);
                for (var me = 0; me < 16; me++) li(re, me, W.elements[me]);
                return re;

                function rt(At, Mt) {
                    return At.time - Mt.time
                }
            }
            var Li = new y.Vector3,
                Ei = new y.Vector3,
                ct = new y.Quaternion;

            function je(J, W) {
                for (var re = J.keyframes, ye = J.name, me = [], rt = [], At = [], Mt = [], si = 0, ti = re.length; si < ti; si++) {
                    var ni = re[si],
                        ri = ni.time,
                        Wi = ni.value;
                    Ui.fromArray(Wi).transpose(), Ui.decompose(Li, ct, Ei), me.push(ri), rt.push(Li.x, Li.y, Li.z), At.push(ct.x, ct.y, ct.z, ct.w), Mt.push(Ei.x, Ei.y, Ei.z)
                }
                return rt.length > 0 && W.push(new y.VectorKeyframeTrack(ye + ".position", me, rt)), At.length > 0 && W.push(new y.QuaternionKeyframeTrack(ye + ".quaternion", me, At)), Mt.length > 0 && W.push(new y.VectorKeyframeTrack(ye + ".scale", me, Mt)), W
            }

            function li(J, W, re) {
                var ye, me = !0,
                    rt, At;
                for (rt = 0, At = J.length; rt < At; rt++) ye = J[rt], ye.value[W] === void 0 ? ye.value[W] = null : me = !1;
                if (me === !0)
                    for (rt = 0, At = J.length; rt < At; rt++) ye = J[rt], ye.value[W] = re;
                else O(J, W)
            }

            function O(J, W) {
                for (var re, ye, me = 0, rt = J.length; me < rt; me++) {
                    var At = J[me];
                    if (At.value[W] === null) {
                        if (re = K(J, me, W), ye = ae(J, me, W), re === null) {
                            At.value[W] = ye.value[W];
                            continue
                        }
                        if (ye === null) {
                            At.value[W] = re.value[W];
                            continue
                        }
                        _e(At, re, ye, W)
                    }
                }
            }

            function K(J, W, re) {
                for (; W >= 0;) {
                    var ye = J[W];
                    if (ye.value[re] !== null) return ye;
                    W--
                }
                return null
            }

            function ae(J, W, re) {
                for (; W < J.length;) {
                    var ye = J[W];
                    if (ye.value[re] !== null) return ye;
                    W++
                }
                return null
            }

            function _e(J, W, re, ye) {
                if (re.time - W.time === 0) {
                    J.value[ye] = W.value[ye];
                    return
                }
                J.value[ye] = (J.time - W.time) * (re.value[ye] - W.value[ye]) / (re.time - W.time) + W.value[ye]
            }

            function xe(J) {
                for (var W = {
                        name: J.getAttribute("id") || "default",
                        start: parseFloat(J.getAttribute("start") || 0),
                        end: parseFloat(J.getAttribute("end") || 0),
                        animations: []
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "instance_animation":
                            W.animations.push(ie(me.getAttribute("url")));
                            break
                    }
                }
                _t.clips[J.getAttribute("id")] = W
            }

            function Ze(J) {
                for (var W = [], re = J.name, ye = J.end - J.start || -1, me = J.animations, rt = 0, At = me.length; rt < At; rt++)
                    for (var Mt = vt(me[rt]), si = 0, ti = Mt.length; si < ti; si++) W.push(Mt[si]);
                return new y.AnimationClip(re, ye, W)
            }

            function st(J) {
                return Ke(_t.clips[J], Ze)
            }

            function De(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "skin":
                            W.id = ie(me.getAttribute("source")), W.skin = gt(me);
                            break;
                        case "morph":
                            W.id = ie(me.getAttribute("source")), console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");
                            break
                    }
                }
                _t.controllers[J.getAttribute("id")] = W
            }

            function gt(J) {
                for (var W = {
                        sources: {}
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "bind_shape_matrix":
                            W.bindShapeMatrix = p(me.textContent);
                            break;
                        case "source":
                            var rt = me.getAttribute("id");
                            W.sources[rt] = Te(me);
                            break;
                        case "joints":
                            W.joints = Qt(me);
                            break;
                        case "vertex_weights":
                            W.vertexWeights = Ve(me);
                            break
                    }
                }
                return W
            }

            function Qt(J) {
                for (var W = {
                        inputs: {}
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "input":
                            var rt = me.getAttribute("semantic"),
                                At = ie(me.getAttribute("source"));
                            W.inputs[rt] = At;
                            break
                    }
                }
                return W
            }

            function Ve(J) {
                for (var W = {
                        inputs: {}
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "input":
                            var rt = me.getAttribute("semantic"),
                                At = ie(me.getAttribute("source")),
                                Mt = parseInt(me.getAttribute("offset"));
                            W.inputs[rt] = {
                                id: At,
                                offset: Mt
                            };
                            break;
                        case "vcount":
                            W.vcount = se(me.textContent);
                            break;
                        case "v":
                            W.v = se(me.textContent);
                            break
                    }
                }
                return W
            }

            function Dt(J) {
                var W = {
                        id: J.id
                    },
                    re = _t.geometries[W.id];
                return J.skin !== void 0 && (W.skin = ei(J.skin), re.sources.skinIndices = W.skin.indices, re.sources.skinWeights = W.skin.weights), W
            }

            function ei(J) {
                var W = 4,
                    re = {
                        joints: [],
                        indices: {
                            array: [],
                            stride: W
                        },
                        weights: {
                            array: [],
                            stride: W
                        }
                    },
                    ye = J.sources,
                    me = J.vertexWeights,
                    rt = me.vcount,
                    At = me.v,
                    Mt = me.inputs.JOINT.offset,
                    si = me.inputs.WEIGHT.offset,
                    ti = J.sources[J.joints.inputs.JOINT],
                    ni = J.sources[J.joints.inputs.INV_BIND_MATRIX],
                    ri = ye[me.inputs.WEIGHT.id].array,
                    Wi = 0,
                    Ci, Pi, ai;
                for (Ci = 0, ai = rt.length; Ci < ai; Ci++) {
                    var Rt = rt[Ci],
                        Gi = [];
                    for (Pi = 0; Pi < Rt; Pi++) {
                        var ki = At[Wi + Mt],
                            pn = At[Wi + si],
                            pi = ri[pn];
                        Gi.push({
                            index: ki,
                            weight: pi
                        }), Wi += 2
                    }
                    for (Gi.sort(Xi), Pi = 0; Pi < W; Pi++) {
                        var Hi = Gi[Pi];
                        Hi !== void 0 ? (re.indices.array.push(Hi.index), re.weights.array.push(Hi.weight)) : (re.indices.array.push(0), re.weights.array.push(0))
                    }
                }
                for (J.bindShapeMatrix ? re.bindMatrix = new y.Matrix4().fromArray(J.bindShapeMatrix).transpose() : re.bindMatrix = new y.Matrix4().identity(), Ci = 0, ai = ti.array.length; Ci < ai; Ci++) {
                    var en = ti.array[Ci],
                        Bi = new y.Matrix4().fromArray(ni.array, Ci * ni.stride).transpose();
                    re.joints.push({
                        name: en,
                        boneInverse: Bi
                    })
                }
                return re;

                function Xi(Un, lr) {
                    return lr.weight - Un.weight
                }
            }

            function xi(J) {
                return Ke(_t.controllers[J], Dt)
            }

            function oe(J) {
                var W = {
                    init_from: Y(J, "init_from")[0].textContent
                };
                _t.images[J.getAttribute("id")] = W
            }

            function ve(J) {
                return J.build !== void 0 ? J.build : J.init_from
            }

            function Ne(J) {
                var W = _t.images[J];
                return W !== void 0 ? Ke(W, ve) : (console.warn("THREE.ColladaLoader: Couldn't find image with ID:", J), null)
            }

            function Ue(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "profile_COMMON":
                            W.profile = Oe(me);
                            break
                    }
                }
                _t.effects[J.getAttribute("id")] = W
            }

            function Oe(J) {
                for (var W = {
                        surfaces: {},
                        samplers: {}
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "newparam":
                            at(me, W);
                            break;
                        case "technique":
                            W.technique = Bt(me);
                            break;
                        case "extra":
                            W.extra = Qi(me);
                            break
                    }
                }
                return W
            }

            function at(J, W) {
                for (var re = J.getAttribute("sid"), ye = 0, me = J.childNodes.length; ye < me; ye++) {
                    var rt = J.childNodes[ye];
                    if (rt.nodeType === 1) switch (rt.nodeName) {
                        case "surface":
                            W.surfaces[re] = ht(rt);
                            break;
                        case "sampler2D":
                            W.samplers[re] = tt(rt);
                            break
                    }
                }
            }

            function ht(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "init_from":
                            W.init_from = me.textContent;
                            break
                    }
                }
                return W
            }

            function tt(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "source":
                            W.source = me.textContent;
                            break
                    }
                }
                return W
            }

            function Bt(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "constant":
                        case "lambert":
                        case "blinn":
                        case "phong":
                            W.type = me.nodeName, W.parameters = Le(me);
                            break
                    }
                }
                return W
            }

            function Le(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "emission":
                        case "diffuse":
                        case "specular":
                        case "bump":
                        case "ambient":
                        case "shininess":
                        case "transparency":
                            W[me.nodeName] = Ot(me);
                            break;
                        case "transparent":
                            W[me.nodeName] = {
                                opaque: me.getAttribute("opaque"),
                                data: Ot(me)
                            };
                            break
                    }
                }
                return W
            }

            function Ot(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "color":
                            W[me.nodeName] = p(me.textContent);
                            break;
                        case "float":
                            W[me.nodeName] = parseFloat(me.textContent);
                            break;
                        case "texture":
                            W[me.nodeName] = {
                                id: me.getAttribute("texture"),
                                extra: ii(me)
                            };
                            break
                    }
                }
                return W
            }

            function ii(J) {
                for (var W = {
                        technique: {}
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "extra":
                            Wt(me, W);
                            break
                    }
                }
                return W
            }

            function Wt(J, W) {
                for (var re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "technique":
                            bi(me, W);
                            break
                    }
                }
            }

            function bi(J, W) {
                for (var re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "repeatU":
                        case "repeatV":
                        case "offsetU":
                        case "offsetV":
                            W.technique[me.nodeName] = parseFloat(me.textContent);
                            break;
                        case "wrapU":
                        case "wrapV":
                            me.textContent.toUpperCase() === "TRUE" ? W.technique[me.nodeName] = 1 : me.textContent.toUpperCase() === "FALSE" ? W.technique[me.nodeName] = 0 : W.technique[me.nodeName] = parseInt(me.textContent);
                            break
                    }
                }
            }

            function Qi(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "technique":
                            W.technique = sn(me);
                            break
                    }
                }
                return W
            }

            function sn(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "double_sided":
                            W[me.nodeName] = parseInt(me.textContent);
                            break
                    }
                }
                return W
            }

            function yn(J) {
                return J
            }

            function Yi(J) {
                return Ke(_t.effects[J], yn)
            }

            function rn(J) {
                for (var W = {
                        name: J.getAttribute("name")
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "instance_effect":
                            W.url = ie(me.getAttribute("url"));
                            break
                    }
                }
                _t.materials[J.getAttribute("id")] = W
            }

            function Mi(J) {
                var W, re = J.slice((J.lastIndexOf(".") - 1 >>> 0) + 2);
                switch (re = re.toLowerCase(), re) {
                    case "tga":
                        W = de;
                        break;
                    default:
                        W = q
                }
                return W
            }

            function Ht(J) {
                var W = Yi(J.url),
                    re = W.profile.technique,
                    ye = W.profile.extra,
                    me;
                switch (re.type) {
                    case "phong":
                    case "blinn":
                        me = new y.MeshPhongMaterial;
                        break;
                    case "lambert":
                        me = new y.MeshLambertMaterial;
                        break;
                    default:
                        me = new y.MeshBasicMaterial;
                        break
                }
                me.name = J.name || "";

                function rt(Wi) {
                    var Ci = W.profile.samplers[Wi.id],
                        Pi = null;
                    if (Ci !== void 0) {
                        var ai = W.profile.surfaces[Ci.source];
                        Pi = Ne(ai.init_from)
                    } else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."), Pi = Ne(Wi.id);
                    if (Pi !== null) {
                        var Rt = Mi(Pi);
                        if (Rt !== void 0) {
                            var Gi = Rt.load(Pi),
                                ki = Wi.extra;
                            if (ki !== void 0 && ki.technique !== void 0 && be(ki.technique) === !1) {
                                var pn = ki.technique;
                                Gi.wrapS = pn.wrapU ? y.RepeatWrapping : y.ClampToEdgeWrapping, Gi.wrapT = pn.wrapV ? y.RepeatWrapping : y.ClampToEdgeWrapping, Gi.offset.set(pn.offsetU || 0, pn.offsetV || 0), Gi.repeat.set(pn.repeatU || 1, pn.repeatV || 1)
                            } else Gi.wrapS = y.RepeatWrapping, Gi.wrapT = y.RepeatWrapping;
                            return Gi
                        } else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.", Pi), null
                    } else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:", Wi.id), null
                }
                var At = re.parameters;
                for (var Mt in At) {
                    var si = At[Mt];
                    switch (Mt) {
                        case "diffuse":
                            si.color && me.color.fromArray(si.color), si.texture && (me.map = rt(si.texture));
                            break;
                        case "specular":
                            si.color && me.specular && me.specular.fromArray(si.color), si.texture && (me.specularMap = rt(si.texture));
                            break;
                        case "bump":
                            si.texture && (me.normalMap = rt(si.texture));
                            break;
                        case "ambient":
                            si.texture && (me.lightMap = rt(si.texture));
                            break;
                        case "shininess":
                            si.float && me.shininess && (me.shininess = si.float);
                            break;
                        case "emission":
                            si.color && me.emissive && me.emissive.fromArray(si.color), si.texture && (me.emissiveMap = rt(si.texture));
                            break
                    }
                }
                var ti = At.transparent,
                    ni = At.transparency;
                if (ni === void 0 && ti && (ni = {
                        float: 1
                    }), ti === void 0 && ni && (ti = {
                        opaque: "A_ONE",
                        data: {
                            color: [1, 1, 1, 1]
                        }
                    }), ti && ni)
                    if (ti.data.texture) me.transparent = !0;
                    else {
                        var ri = ti.data.color;
                        switch (ti.opaque) {
                            case "A_ONE":
                                me.opacity = ri[3] * ni.float;
                                break;
                            case "RGB_ZERO":
                                me.opacity = 1 - ri[0] * ni.float;
                                break;
                            case "A_ZERO":
                                me.opacity = 1 - ri[3] * ni.float;
                                break;
                            case "RGB_ONE":
                                me.opacity = ri[0] * ni.float;
                                break;
                            default:
                                console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.', ti.opaque)
                        }
                        me.opacity < 1 && (me.transparent = !0)
                    } return ye !== void 0 && ye.technique !== void 0 && ye.technique.double_sided === 1 && (me.side = y.DoubleSide), me
            }

            function Pt(J) {
                return Ke(_t.materials[J], Ht)
            }

            function qn(J) {
                for (var W = {
                        name: J.getAttribute("name")
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "optics":
                            W.optics = ji(me);
                            break
                    }
                }
                _t.cameras[J.getAttribute("id")] = W
            }

            function ji(J) {
                for (var W = 0; W < J.childNodes.length; W++) {
                    var re = J.childNodes[W];
                    switch (re.nodeName) {
                        case "technique_common":
                            return na(re)
                    }
                }
                return {}
            }

            function na(J) {
                for (var W = {}, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    switch (ye.nodeName) {
                        case "perspective":
                        case "orthographic":
                            W.technique = ye.nodeName, W.parameters = cn(ye);
                            break
                    }
                }
                return W
            }

            function cn(J) {
                for (var W = {}, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    switch (ye.nodeName) {
                        case "xfov":
                        case "yfov":
                        case "xmag":
                        case "ymag":
                        case "znear":
                        case "zfar":
                        case "aspect_ratio":
                            W[ye.nodeName] = parseFloat(ye.textContent);
                            break
                    }
                }
                return W
            }

            function yi(J) {
                var W;
                switch (J.optics.technique) {
                    case "perspective":
                        W = new y.PerspectiveCamera(J.optics.parameters.yfov, J.optics.parameters.aspect_ratio, J.optics.parameters.znear, J.optics.parameters.zfar);
                        break;
                    case "orthographic":
                        var re = J.optics.parameters.ymag,
                            ye = J.optics.parameters.xmag,
                            me = J.optics.parameters.aspect_ratio;
                        ye = ye === void 0 ? re * me : ye, re = re === void 0 ? ye / me : re, ye *= .5, re *= .5, W = new y.OrthographicCamera(-ye, ye, re, -re, J.optics.parameters.znear, J.optics.parameters.zfar);
                        break;
                    default:
                        W = new y.PerspectiveCamera;
                        break
                }
                return W.name = J.name || "", W
            }

            function Si(J) {
                var W = _t.cameras[J];
                return W !== void 0 ? Ke(W, yi) : (console.warn("THREE.ColladaLoader: Couldn't find camera with ID:", J), null)
            }

            function qi(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "technique_common":
                            W = Nn(me);
                            break
                    }
                }
                _t.lights[J.getAttribute("id")] = W
            }

            function Nn(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "directional":
                        case "point":
                        case "spot":
                        case "ambient":
                            W.technique = me.nodeName, W.parameters = Bn(me)
                    }
                }
                return W
            }

            function Bn(J) {
                for (var W = {}, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "color":
                            var rt = p(me.textContent);
                            W.color = new y.Color().fromArray(rt);
                            break;
                        case "falloff_angle":
                            W.falloffAngle = parseFloat(me.textContent);
                            break;
                        case "quadratic_attenuation":
                            var At = parseFloat(me.textContent);
                            W.distance = At ? Math.sqrt(1 / At) : 0;
                            break
                    }
                }
                return W
            }

            function ge(J) {
                var W;
                switch (J.technique) {
                    case "directional":
                        W = new y.DirectionalLight;
                        break;
                    case "point":
                        W = new y.PointLight;
                        break;
                    case "spot":
                        W = new y.SpotLight;
                        break;
                    case "ambient":
                        W = new y.AmbientLight;
                        break
                }
                return J.parameters.color && W.color.copy(J.parameters.color), J.parameters.distance && (W.distance = J.parameters.distance), W
            }

            function ga(J) {
                var W = _t.lights[J];
                return W !== void 0 ? Ke(W, ge) : (console.warn("THREE.ColladaLoader: Couldn't find light with ID:", J), null)
            }

            function On(J) {
                var W = {
                        name: J.getAttribute("name"),
                        sources: {},
                        vertices: {},
                        primitives: []
                    },
                    re = Y(J, "mesh")[0];
                if (re !== void 0) {
                    for (var ye = 0; ye < re.childNodes.length; ye++) {
                        var me = re.childNodes[ye];
                        if (me.nodeType === 1) {
                            var rt = me.getAttribute("id");
                            switch (me.nodeName) {
                                case "source":
                                    W.sources[rt] = Te(me);
                                    break;
                                case "vertices":
                                    W.vertices = te(me);
                                    break;
                                case "polygons":
                                    console.warn("THREE.ColladaLoader: Unsupported primitive type: ", me.nodeName);
                                    break;
                                case "lines":
                                case "linestrips":
                                case "polylist":
                                case "triangles":
                                    W.primitives.push(he(me));
                                    break;
                                default:
                                    console.log(me)
                            }
                        }
                    }
                    _t.geometries[J.getAttribute("id")] = W
                }
            }

            function Te(J) {
                for (var W = {
                        array: [],
                        stride: 3
                    }, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "float_array":
                            W.array = p(ye.textContent);
                            break;
                        case "Name_array":
                            W.array = C(ye.textContent);
                            break;
                        case "technique_common":
                            var me = Y(ye, "accessor")[0];
                            me !== void 0 && (W.stride = parseInt(me.getAttribute("stride")));
                            break
                    }
                }
                return W
            }

            function te(J) {
                for (var W = {}, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    ye.nodeType === 1 && (W[ye.getAttribute("semantic")] = ie(ye.getAttribute("source")))
                }
                return W
            }

            function he(J) {
                for (var W = {
                        type: J.nodeName,
                        material: J.getAttribute("material"),
                        count: parseInt(J.getAttribute("count")),
                        inputs: {},
                        stride: 0,
                        hasUV: !1
                    }, re = 0, ye = J.childNodes.length; re < ye; re++) {
                    var me = J.childNodes[re];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "input":
                            var rt = ie(me.getAttribute("source")),
                                At = me.getAttribute("semantic"),
                                Mt = parseInt(me.getAttribute("offset")),
                                si = parseInt(me.getAttribute("set")),
                                ti = si > 0 ? At + si : At;
                            W.inputs[ti] = {
                                id: rt,
                                offset: Mt
                            }, W.stride = Math.max(W.stride, Mt + 1), At === "TEXCOORD" && (W.hasUV = !0);
                            break;
                        case "vcount":
                            W.vcount = se(me.textContent);
                            break;
                        case "p":
                            W.p = se(me.textContent);
                            break
                    }
                }
                return W
            }

            function fe(J) {
                for (var W = {}, re = 0; re < J.length; re++) {
                    var ye = J[re];
                    W[ye.type] === void 0 && (W[ye.type] = []), W[ye.type].push(ye)
                }
                return W
            }

            function Ae(J) {
                for (var W = 0, re = 0, ye = J.length; re < ye; re++) {
                    var me = J[re];
                    me.hasUV === !0 && W++
                }
                W > 0 && W < J.length && (J.uvsNeedsFix = !0)
            }

            function qe(J) {
                var W = {},
                    re = J.sources,
                    ye = J.vertices,
                    me = J.primitives;
                if (me.length === 0) return {};
                var rt = fe(me);
                for (var At in rt) {
                    var Mt = rt[At];
                    Ae(Mt), W[At] = et(Mt, re, ye)
                }
                return W
            }

            function et(J, W, re) {
                for (var ye = {}, me = {
                        array: [],
                        stride: 0
                    }, rt = {
                        array: [],
                        stride: 0
                    }, At = {
                        array: [],
                        stride: 0
                    }, Mt = {
                        array: [],
                        stride: 0
                    }, si = {
                        array: [],
                        stride: 0
                    }, ti = {
                        array: [],
                        stride: 4
                    }, ni = {
                        array: [],
                        stride: 4
                    }, ri = new y.BufferGeometry, Wi = [], Ci = 0, Pi = 0; Pi < J.length; Pi++) {
                    var ai = J[Pi],
                        Rt = ai.inputs,
                        Gi = 0;
                    switch (ai.type) {
                        case "lines":
                        case "linestrips":
                            Gi = ai.count * 2;
                            break;
                        case "triangles":
                            Gi = ai.count * 3;
                            break;
                        case "polylist":
                            for (var ki = 0; ki < ai.count; ki++) {
                                var pn = ai.vcount[ki];
                                switch (pn) {
                                    case 3:
                                        Gi += 3;
                                        break;
                                    case 4:
                                        Gi += 6;
                                        break;
                                    default:
                                        Gi += (pn - 2) * 3;
                                        break
                                }
                            }
                            break;
                        default:
                            console.warn("THREE.ColladaLoader: Unknow primitive type:", ai.type)
                    }
                    ri.addGroup(Ci, Gi, Pi), Ci += Gi, ai.material && Wi.push(ai.material);
                    for (var pi in Rt) {
                        var Hi = Rt[pi];
                        switch (pi) {
                            case "VERTEX":
                                for (var en in re) {
                                    var Bi = re[en];
                                    switch (en) {
                                        case "POSITION":
                                            var Xi = me.array.length;
                                            if (it(ai, W[Bi], Hi.offset, me.array), me.stride = W[Bi].stride, W.skinWeights && W.skinIndices && (it(ai, W.skinIndices, Hi.offset, ti.array), it(ai, W.skinWeights, Hi.offset, ni.array)), ai.hasUV === !1 && J.uvsNeedsFix === !0)
                                                for (var Gi = (me.array.length - Xi) / me.stride, Un = 0; Un < Gi; Un++) At.array.push(0, 0);
                                            break;
                                        case "NORMAL":
                                            it(ai, W[Bi], Hi.offset, rt.array), rt.stride = W[Bi].stride;
                                            break;
                                        case "COLOR":
                                            it(ai, W[Bi], Hi.offset, si.array), si.stride = W[Bi].stride;
                                            break;
                                        case "TEXCOORD":
                                            it(ai, W[Bi], Hi.offset, At.array), At.stride = W[Bi].stride;
                                            break;
                                        case "TEXCOORD1":
                                            it(ai, W[Bi], Hi.offset, Mt.array), At.stride = W[Bi].stride;
                                            break;
                                        default:
                                            console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.', en)
                                    }
                                }
                                break;
                            case "NORMAL":
                                it(ai, W[Hi.id], Hi.offset, rt.array), rt.stride = W[Hi.id].stride;
                                break;
                            case "COLOR":
                                it(ai, W[Hi.id], Hi.offset, si.array), si.stride = W[Hi.id].stride;
                                break;
                            case "TEXCOORD":
                                it(ai, W[Hi.id], Hi.offset, At.array), At.stride = W[Hi.id].stride;
                                break;
                            case "TEXCOORD1":
                                it(ai, W[Hi.id], Hi.offset, Mt.array), Mt.stride = W[Hi.id].stride;
                                break
                        }
                    }
                }
                return me.array.length > 0 && ri.setAttribute("position", new y.Float32BufferAttribute(me.array, me.stride)), rt.array.length > 0 && ri.setAttribute("normal", new y.Float32BufferAttribute(rt.array, rt.stride)), si.array.length > 0 && ri.setAttribute("color", new y.Float32BufferAttribute(si.array, si.stride)), At.array.length > 0 && ri.setAttribute("uv", new y.Float32BufferAttribute(At.array, At.stride)), Mt.array.length > 0 && ri.setAttribute("uv2", new y.Float32BufferAttribute(Mt.array, Mt.stride)), ti.array.length > 0 && ri.setAttribute("skinIndex", new y.Float32BufferAttribute(ti.array, ti.stride)), ni.array.length > 0 && ri.setAttribute("skinWeight", new y.Float32BufferAttribute(ni.array, ni.stride)), ye.data = ri, ye.type = J[0].type, ye.materialKeys = Wi, ye
            }

            function it(J, W, re, ye) {
                var me = J.p,
                    rt = J.stride,
                    At = J.vcount;

                function Mt(pi) {
                    for (var Hi = me[pi + re] * ti, en = Hi + ti; Hi < en; Hi++) ye.push(si[Hi])
                }
                var si = W.array,
                    ti = W.stride;
                if (J.vcount !== void 0)
                    for (var ni = 0, ri = 0, Wi = At.length; ri < Wi; ri++) {
                        var Ci = At[ri];
                        if (Ci === 4) {
                            var Pi = ni + rt * 0,
                                ai = ni + rt * 1,
                                Rt = ni + rt * 2,
                                Gi = ni + rt * 3;
                            Mt(Pi), Mt(ai), Mt(Gi), Mt(ai), Mt(Rt), Mt(Gi)
                        } else if (Ci === 3) {
                            var Pi = ni + rt * 0,
                                ai = ni + rt * 1,
                                Rt = ni + rt * 2;
                            Mt(Pi), Mt(ai), Mt(Rt)
                        } else if (Ci > 4)
                            for (var ki = 1, pn = Ci - 2; ki <= pn; ki++) {
                                var Pi = ni + rt * 0,
                                    ai = ni + rt * ki,
                                    Rt = ni + rt * (ki + 1);
                                Mt(Pi), Mt(ai), Mt(Rt)
                            }
                        ni += rt * Ci
                    } else
                        for (var ri = 0, Wi = me.length; ri < Wi; ri += rt) Mt(ri)
            }

            function We(J) {
                return Ke(_t.geometries[J], qe)
            }

            function ft(J) {
                for (var W = {
                        name: J.getAttribute("name") || "",
                        joints: {},
                        links: []
                    }, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "technique_common":
                            It(ye, W);
                            break
                    }
                }
                _t.kinematicsModels[J.getAttribute("id")] = W
            }

            function Jt(J) {
                return J.build !== void 0 ? J.build : J
            }

            function zt(J) {
                return Ke(_t.kinematicsModels[J], Jt)
            }

            function It(J, W) {
                for (var re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "joint":
                            W.joints[ye.getAttribute("sid")] = zi(ye);
                            break;
                        case "link":
                            W.links.push(dn(ye));
                            break
                    }
                }
            }

            function zi(J) {
                for (var W, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "prismatic":
                        case "revolute":
                            W = Zi(ye);
                            break
                    }
                }
                return W
            }

            function Zi(J, re) {
                for (var re = {
                        sid: J.getAttribute("sid"),
                        name: J.getAttribute("name") || "",
                        axis: new y.Vector3,
                        limits: {
                            min: 0,
                            max: 0
                        },
                        type: J.nodeName,
                        static: !1,
                        zeroPosition: 0,
                        middlePosition: 0
                    }, ye = 0; ye < J.childNodes.length; ye++) {
                    var me = J.childNodes[ye];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "axis":
                            var rt = p(me.textContent);
                            re.axis.fromArray(rt);
                            break;
                        case "limits":
                            var At = me.getElementsByTagName("max")[0],
                                Mt = me.getElementsByTagName("min")[0];
                            re.limits.max = parseFloat(At.textContent), re.limits.min = parseFloat(Mt.textContent);
                            break
                    }
                }
                return re.limits.min >= re.limits.max && (re.static = !0), re.middlePosition = (re.limits.min + re.limits.max) / 2, re
            }

            function dn(J) {
                for (var W = {
                        sid: J.getAttribute("sid"),
                        name: J.getAttribute("name") || "",
                        attachments: [],
                        transforms: []
                    }, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "attachment_full":
                            W.attachments.push(on(ye));
                            break;
                        case "matrix":
                        case "translate":
                        case "rotate":
                            W.transforms.push(vn(ye));
                            break
                    }
                }
                return W
            }

            function on(J) {
                for (var W = {
                        joint: J.getAttribute("joint").split("/").pop(),
                        transforms: [],
                        links: []
                    }, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "link":
                            W.links.push(dn(ye));
                            break;
                        case "matrix":
                        case "translate":
                        case "rotate":
                            W.transforms.push(vn(ye));
                            break
                    }
                }
                return W
            }

            function vn(J) {
                var W = {
                        type: J.nodeName
                    },
                    re = p(J.textContent);
                switch (W.type) {
                    case "matrix":
                        W.obj = new y.Matrix4, W.obj.fromArray(re).transpose();
                        break;
                    case "translate":
                        W.obj = new y.Vector3, W.obj.fromArray(re);
                        break;
                    case "rotate":
                        W.obj = new y.Vector3, W.obj.fromArray(re), W.angle = y.MathUtils.degToRad(re[3]);
                        break
                }
                return W
            }

            function Pn(J) {
                for (var W = {
                        name: J.getAttribute("name") || "",
                        rigidBodies: {}
                    }, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "rigid_body":
                            W.rigidBodies[ye.getAttribute("name")] = {}, Fn(ye, W.rigidBodies[ye.getAttribute("name")]);
                            break
                    }
                }
                _t.physicsModels[J.getAttribute("id")] = W
            }

            function Fn(J, W) {
                for (var re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "technique_common":
                            kn(ye, W);
                            break
                    }
                }
            }

            function kn(J, W) {
                for (var re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "inertia":
                            W.inertia = p(ye.textContent);
                            break;
                        case "mass":
                            W.mass = p(ye.textContent)[0];
                            break
                    }
                }
            }

            function hn(J) {
                for (var W = {
                        bindJointAxis: []
                    }, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "bind_joint_axis":
                            W.bindJointAxis.push(Vn(ye));
                            break
                    }
                }
                _t.kinematicsScenes[ie(J.getAttribute("url"))] = W
            }

            function Vn(J) {
                for (var W = {
                        target: J.getAttribute("target").split("/").pop()
                    }, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "axis":
                            var me = ye.getElementsByTagName("param")[0];
                            W.axis = me.textContent;
                            var rt = W.axis.split("inst_").pop().split("axis")[0];
                            W.jointIndex = rt.substr(0, rt.length - 1);
                            break
                    }
                }
                return W
            }

            function Gn(J) {
                return J.build !== void 0 ? J.build : J
            }

            function zr(J) {
                return Ke(_t.kinematicsScenes[J], Gn)
            }

            function br() {
                var J = Object.keys(_t.kinematicsModels)[0],
                    W = Object.keys(_t.kinematicsScenes)[0],
                    re = Object.keys(_t.visualScenes)[0];
                if (J === void 0 || W === void 0) return;
                for (var ye = zt(J), me = zr(W), rt = Ln(re), At = me.bindJointAxis, Mt = {}, si = 0, ti = At.length; si < ti; si++) {
                    var ni = At[si],
                        ri = $n.querySelector('[sid="' + ni.target + '"]');
                    if (ri) {
                        var Wi = ri.parentElement;
                        Ci(ni.jointIndex, Wi)
                    }
                }

                function Ci(ai, Rt) {
                    var Gi = Rt.getAttribute("name"),
                        ki = ye.joints[ai];
                    rt.traverse(function(pn) {
                        pn.name === Gi && (Mt[ai] = {
                            object: pn,
                            transforms: ur(Rt),
                            joint: ki,
                            position: ki.zeroPosition
                        })
                    })
                }
                var Pi = new y.Matrix4;
                Et = {
                    joints: ye && ye.joints,
                    getJointValue: function(ai) {
                        var Rt = Mt[ai];
                        if (Rt) return Rt.position;
                        console.warn("THREE.ColladaLoader: Joint " + ai + " doesn't exist.")
                    },
                    setJointValue: function(ai, Rt) {
                        var Gi = Mt[ai];
                        if (Gi) {
                            var ki = Gi.joint;
                            if (Rt > ki.limits.max || Rt < ki.limits.min) console.warn("THREE.ColladaLoader: Joint " + ai + " value " + Rt + " outside of limits (min: " + ki.limits.min + ", max: " + ki.limits.max + ").");
                            else if (ki.static) console.warn("THREE.ColladaLoader: Joint " + ai + " is static.");
                            else {
                                var pn = Gi.object,
                                    pi = ki.axis,
                                    Hi = Gi.transforms;
                                Ui.identity();
                                for (var en = 0; en < Hi.length; en++) {
                                    var Bi = Hi[en];
                                    if (Bi.sid && Bi.sid.indexOf(ai) !== -1) switch (ki.type) {
                                        case "revolute":
                                            Ui.multiply(Pi.makeRotationAxis(pi, y.MathUtils.degToRad(Rt)));
                                            break;
                                        case "prismatic":
                                            Ui.multiply(Pi.makeTranslation(pi.x * Rt, pi.y * Rt, pi.z * Rt));
                                            break;
                                        default:
                                            console.warn("THREE.ColladaLoader: Unknown joint type: " + ki.type);
                                            break
                                    } else switch (Bi.type) {
                                        case "matrix":
                                            Ui.multiply(Bi.obj);
                                            break;
                                        case "translate":
                                            Ui.multiply(Pi.makeTranslation(Bi.obj.x, Bi.obj.y, Bi.obj.z));
                                            break;
                                        case "scale":
                                            Ui.scale(Bi.obj);
                                            break;
                                        case "rotate":
                                            Ui.multiply(Pi.makeRotationAxis(Bi.obj, Bi.angle));
                                            break
                                    }
                                }
                                pn.matrix.copy(Ui), pn.matrix.decompose(pn.position, pn.quaternion, pn.scale), Mt[ai].position = Rt
                            }
                        } else console.log("THREE.ColladaLoader: " + ai + " does not exist.")
                    }
                }
            }

            function ur(J) {
                for (var W = [], re = $n.querySelector('[id="' + J.id + '"]'), ye = 0; ye < re.childNodes.length; ye++) {
                    var me = re.childNodes[ye];
                    if (me.nodeType === 1) switch (me.nodeName) {
                        case "matrix":
                            var At = p(me.textContent),
                                rt = new y.Matrix4().fromArray(At).transpose();
                            W.push({
                                sid: me.getAttribute("sid"),
                                type: me.nodeName,
                                obj: rt
                            });
                            break;
                        case "translate":
                        case "scale":
                            var At = p(me.textContent),
                                Mt = new y.Vector3().fromArray(At);
                            W.push({
                                sid: me.getAttribute("sid"),
                                type: me.nodeName,
                                obj: Mt
                            });
                            break;
                        case "rotate":
                            var At = p(me.textContent),
                                Mt = new y.Vector3().fromArray(At),
                                si = y.MathUtils.degToRad(At[3]);
                            W.push({
                                sid: me.getAttribute("sid"),
                                type: me.nodeName,
                                obj: Mt,
                                angle: si
                            });
                            break
                    }
                }
                return W
            }

            function wr(J) {
                for (var W = J.getElementsByTagName("node"), re = 0; re < W.length; re++) {
                    var ye = W[re];
                    ye.hasAttribute("id") === !1 && ye.setAttribute("id", He())
                }
            }
            var Ui = new y.Matrix4,
                ya = new y.Vector3;

            function _n(J) {
                for (var W = {
                        name: J.getAttribute("name") || "",
                        type: J.getAttribute("type"),
                        id: J.getAttribute("id"),
                        sid: J.getAttribute("sid"),
                        matrix: new y.Matrix4,
                        nodes: [],
                        instanceCameras: [],
                        instanceControllers: [],
                        instanceLights: [],
                        instanceGeometries: [],
                        instanceNodes: [],
                        transforms: {}
                    }, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    if (ye.nodeType === 1) switch (ye.nodeName) {
                        case "node":
                            W.nodes.push(ye.getAttribute("id")), _n(ye);
                            break;
                        case "instance_camera":
                            W.instanceCameras.push(ie(ye.getAttribute("url")));
                            break;
                        case "instance_controller":
                            W.instanceControllers.push(Qs(ye));
                            break;
                        case "instance_light":
                            W.instanceLights.push(ie(ye.getAttribute("url")));
                            break;
                        case "instance_geometry":
                            W.instanceGeometries.push(Qs(ye));
                            break;
                        case "instance_node":
                            W.instanceNodes.push(ie(ye.getAttribute("url")));
                            break;
                        case "matrix":
                            var rt = p(ye.textContent);
                            W.matrix.multiply(Ui.fromArray(rt).transpose()), W.transforms[ye.getAttribute("sid")] = ye.nodeName;
                            break;
                        case "translate":
                            var rt = p(ye.textContent);
                            ya.fromArray(rt), W.matrix.multiply(Ui.makeTranslation(ya.x, ya.y, ya.z)), W.transforms[ye.getAttribute("sid")] = ye.nodeName;
                            break;
                        case "rotate":
                            var rt = p(ye.textContent),
                                me = y.MathUtils.degToRad(rt[3]);
                            W.matrix.multiply(Ui.makeRotationAxis(ya.fromArray(rt), me)), W.transforms[ye.getAttribute("sid")] = ye.nodeName;
                            break;
                        case "scale":
                            var rt = p(ye.textContent);
                            W.matrix.scale(ya.fromArray(rt)), W.transforms[ye.getAttribute("sid")] = ye.nodeName;
                            break;
                        case "extra":
                            break;
                        default:
                            console.log(ye)
                    }
                }
                return gr(W.id) ? console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.", W.id) : _t.nodes[W.id] = W, W
            }

            function Qs(J) {
                for (var W = {
                        id: ie(J.getAttribute("url")),
                        materials: {},
                        skeletons: []
                    }, re = 0; re < J.childNodes.length; re++) {
                    var ye = J.childNodes[re];
                    switch (ye.nodeName) {
                        case "bind_material":
                            for (var me = ye.getElementsByTagName("instance_material"), rt = 0; rt < me.length; rt++) {
                                var At = me[rt],
                                    Mt = At.getAttribute("symbol"),
                                    si = At.getAttribute("target");
                                W.materials[Mt] = ie(si)
                            }
                            break;
                        case "skeleton":
                            W.skeletons.push(ie(ye.textContent));
                            break
                    }
                }
                return W
            }

            function Ra(J, W) {
                var re = [],
                    ye = [],
                    me, rt, At;
                for (me = 0; me < J.length; me++) {
                    var Mt = J[me],
                        si;
                    if (gr(Mt)) si = Jr(Mt), rr(si, W, re);
                    else if (la(Mt))
                        for (var ti = _t.visualScenes[Mt], ni = ti.children, rt = 0; rt < ni.length; rt++) {
                            var ri = ni[rt];
                            if (ri.type === "JOINT") {
                                var si = Jr(ri.id);
                                rr(si, W, re)
                            }
                        } else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:", Mt)
                }
                for (me = 0; me < W.length; me++)
                    for (rt = 0; rt < re.length; rt++)
                        if (At = re[rt], At.bone.name === W[me].name) {
                            ye[me] = At, At.processed = !0;
                            break
                        } for (me = 0; me < re.length; me++) At = re[me], At.processed === !1 && (ye.push(At), At.processed = !0);
                var Wi = [],
                    Ci = [];
                for (me = 0; me < ye.length; me++) At = ye[me], Wi.push(At.bone), Ci.push(At.boneInverse);
                return new y.Skeleton(Wi, Ci)
            }

            function rr(J, W, re) {
                J.traverse(function(ye) {
                    if (ye.isBone === !0) {
                        for (var me, rt = 0; rt < W.length; rt++) {
                            var At = W[rt];
                            if (At.name === ye.name) {
                                me = At.boneInverse;
                                break
                            }
                        }
                        me === void 0 && (me = new y.Matrix4), re.push({
                            bone: ye,
                            boneInverse: me,
                            processed: !1
                        })
                    }
                })
            }

            function Fr(J) {
                for (var W = [], re = J.matrix, ye = J.nodes, me = J.type, rt = J.instanceCameras, At = J.instanceControllers, Mt = J.instanceLights, si = J.instanceGeometries, ti = J.instanceNodes, ni = 0, ri = ye.length; ni < ri; ni++) W.push(Jr(ye[ni]));
                for (var ni = 0, ri = rt.length; ni < ri; ni++) {
                    var Wi = Si(rt[ni]);
                    Wi !== null && W.push(Wi.clone())
                }
                for (var ni = 0, ri = At.length; ni < ri; ni++)
                    for (var Ci = At[ni], Pi = xi(Ci.id), ai = We(Pi.id), Rt = $r(ai, Ci.materials), Gi = Ci.skeletons, ki = Pi.skin.joints, pn = Ra(Gi, ki), pi = 0, Hi = Rt.length; pi < Hi; pi++) {
                        var Bi = Rt[pi];
                        Bi.isSkinnedMesh && (Bi.bind(pn, Pi.skin.bindMatrix), Bi.normalizeSkinWeights()), W.push(Bi)
                    }
                for (var ni = 0, ri = Mt.length; ni < ri; ni++) {
                    var en = ga(Mt[ni]);
                    en !== null && W.push(en.clone())
                }
                for (var ni = 0, ri = si.length; ni < ri; ni++)
                    for (var Ci = si[ni], ai = We(Ci.id), Rt = $r(ai, Ci.materials), pi = 0, Hi = Rt.length; pi < Hi; pi++) W.push(Rt[pi]);
                for (var ni = 0, ri = ti.length; ni < ri; ni++) W.push(Jr(ti[ni]).clone());
                var Bi;
                if (ye.length === 0 && W.length === 1) Bi = W[0];
                else {
                    Bi = me === "JOINT" ? new y.Bone : new y.Group;
                    for (var ni = 0; ni < W.length; ni++) Bi.add(W[ni])
                }
                return Bi.name = me === "JOINT" ? J.sid : J.name, Bi.matrix.copy(re), Bi.matrix.decompose(Bi.position, Bi.quaternion, Bi.scale), Bi
            }
            var Lr = new y.MeshBasicMaterial({
                color: 16711935
            });

            function ra(J, W) {
                for (var re = [], ye = 0, me = J.length; ye < me; ye++) {
                    var rt = W[J[ye]];
                    rt === void 0 ? (console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.", J[ye]), re.push(Lr)) : re.push(Pt(rt))
                }
                return re
            }

            function $r(J, W) {
                var re = [];
                for (var ye in J) {
                    var me = J[ye],
                        rt = ra(me.materialKeys, W);
                    rt.length === 0 && (ye === "lines" || ye === "linestrips" ? rt.push(new y.LineBasicMaterial) : rt.push(new y.MeshPhongMaterial));
                    var At = me.data.attributes.skinIndex !== void 0;
                    if (At)
                        for (var Mt = 0, si = rt.length; Mt < si; Mt++) rt[Mt].skinning = !0;
                    var ti = rt.length === 1 ? rt[0] : rt,
                        ni;
                    switch (ye) {
                        case "lines":
                            ni = new y.LineSegments(me.data, ti);
                            break;
                        case "linestrips":
                            ni = new y.Line(me.data, ti);
                            break;
                        case "triangles":
                        case "polylist":
                            At ? ni = new y.SkinnedMesh(me.data, ti) : ni = new y.Mesh(me.data, ti);
                            break
                    }
                    re.push(ni)
                }
                return re
            }

            function gr(J) {
                return _t.nodes[J] !== void 0
            }

            function Jr(J) {
                return Ke(_t.nodes[J], Fr)
            }

            function or(J) {
                var W = {
                    name: J.getAttribute("name"),
                    children: []
                };
                wr(J);
                for (var re = Y(J, "node"), ye = 0; ye < re.length; ye++) W.children.push(_n(re[ye]));
                _t.visualScenes[J.getAttribute("id")] = W
            }

            function wa(J) {
                var W = new y.Group;
                W.name = J.name;
                for (var re = J.children, ye = 0; ye < re.length; ye++) {
                    var me = re[ye];
                    W.add(Jr(me.id))
                }
                return W
            }

            function la(J) {
                return _t.visualScenes[J] !== void 0
            }

            function Ln(J) {
                return Ke(_t.visualScenes[J], wa)
            }

            function ja(J) {
                var W = Y(J, "instance_visual_scene")[0];
                return Ln(ie(W.getAttribute("url")))
            }

            function Nr() {
                var J = _t.clips;
                if (be(J) === !0) {
                    if (be(_t.animations) === !1) {
                        var W = [];
                        for (var re in _t.animations)
                            for (var ye = vt(re), me = 0, rt = ye.length; me < rt; me++) W.push(ye[me]);
                        Pe.push(new y.AnimationClip("default", -1, W))
                    }
                } else
                    for (var re in J) Pe.push(st(re))
            }

            function Ps(J) {
                for (var W = "", re = [J]; re.length;) {
                    var ye = re.shift();
                    ye.nodeType === Node.TEXT_NODE ? W += ye.textContent : (W += `
`, re.push.apply(re, ye.childNodes))
                }
                return W.trim()
            }
            if (z.length === 0) return {
                scene: new y.Scene
            };
            var va = new DOMParser().parseFromString(z, "application/xml"),
                $n = Y(va, "COLLADA")[0],
                Qn = va.getElementsByTagName("parsererror")[0];
            if (Qn !== void 0) {
                var os = Y(Qn, "div")[0],
                    Va;
                return os ? Va = os.textContent : Va = Ps(Qn), console.error(`THREE.ColladaLoader: Failed to parse collada file.
`, Va), null
            }
            var Da = $n.getAttribute("version");
            console.log("THREE.ColladaLoader: File version", Da);
            var Z = Ee(Y($n, "asset")[0]),
                q = new y.TextureLoader(this.manager);
            q.setPath(this.resourcePath || V).setCrossOrigin(this.crossOrigin);
            var de;
            y.TGALoader && (de = new y.TGALoader(this.manager), de.setPath(this.resourcePath || V));
            var Pe = [],
                Et = {},
                Ft = 0,
                _t = {
                    animations: {},
                    clips: {},
                    controllers: {},
                    images: {},
                    effects: {},
                    materials: {},
                    cameras: {},
                    lights: {},
                    geometries: {},
                    nodes: {},
                    visualScenes: {},
                    kinematicsModels: {},
                    physicsModels: {},
                    kinematicsScenes: {}
                };
            Je($n, "library_animations", "animation", Ye), Je($n, "library_animation_clips", "animation_clip", xe), Je($n, "library_controllers", "controller", De), Je($n, "library_images", "image", oe), Je($n, "library_effects", "effect", Ue), Je($n, "library_materials", "material", rn), Je($n, "library_cameras", "camera", qn), Je($n, "library_lights", "light", qi), Je($n, "library_geometries", "geometry", On), Je($n, "library_nodes", "node", _n), Je($n, "library_visual_scenes", "visual_scene", or), Je($n, "library_kinematics_models", "kinematics_model", ft), Je($n, "library_physics_models", "physics_model", Pn), Je($n, "scene", "instance_kinematics_scene", hn), wt(_t.animations, $e), wt(_t.clips, Ze), wt(_t.controllers, Dt), wt(_t.images, ve), wt(_t.effects, yn), wt(_t.materials, Ht), wt(_t.cameras, yi), wt(_t.lights, ge), wt(_t.geometries, qe), wt(_t.visualScenes, wa), Nr(), br();
            var Yt = ja(Y($n, "scene")[0]);
            return Yt.animations = Pe, Z.upAxis === "Z_UP" && Yt.quaternion.setFromEuler(new y.Euler(-Math.PI / 2, 0, 0)), Yt.scale.multiplyScalar(Z.unit), {
                get animations() {
                    return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."), Pe
                },
                kinematics: Et,
                library: _t,
                scene: Yt
            }
        }
    }), ue.exports = y.ColladaLoader
})(kf);
var mm = kf.exports;
(function(ue, R) {
    const y = Ls,
        z = zl,
        V = hm,
        Y = um,
        C = pm,
        p = fm,
        se = mm,
        ie = new V,
        He = new Y,
        be = new p,
        Ee = new C,
        Lt = new se;

    function Tt(Je, wt, Ke) {
        if (Je === void 0) return console.error("Invalid options provided to loadObj()");
        Je = y._validate(Je, z.prototype._defaults.loadObj);
        let Ye;
        switch (Je.type || (Je.type = "mtl"), Je.type) {
            case "mtl":
                Ye = ie;
                break;
            case "gltf":
            case "glb":
                Ye = be;
                break;
            case "fbx":
                Ye = Ee;
                break;
            case "dae":
                Ye = Lt;
                break
        }
        He.load(Je.mtl, jt, () => null, $e => {
            console.warn("No material file found for SymbolLayer3D model " + m)
        });

        function jt($e) {
            $e && Je.type == "mtl" && ($e.preload(), Ye.setMaterials($e)), Ye.load(Je.obj, vt => {
                let Kt = [];
                switch (Je.type) {
                    case "mtl":
                        vt = vt.children[0];
                        break;
                    case "gltf":
                    case "glb":
                    case "dae":
                        Kt = vt.animations, vt = vt.scene;
                        break;
                    case "fbx":
                        Kt = vt.animations;
                        break
                }
                vt.animations = Kt;
                const vi = y.types.rotation(Je.rotation, [0, 0, 0]),
                    Li = y.types.scale(Je.scale, [1, 1, 1]);
                vt.rotation.set(vi[0], vi[1], vi[2]), vt.scale.set(Li[0], Li[1], Li[2]), Je.normalize && di(vt), vt.name = "model";
                let Ei = z.prototype._makeGroup(vt, Je);
                z.prototype._addMethods(Ei), Ei.setAnchor(Je.anchor), Ei.setCenter(Je.adjustment), Ei.raycasted = Je.raycasted, Ke(Ei), wt(Ei), Ei.setFixedZoom(Je.mapScale), Ei.idle()
            }, () => null, vt => {
                console.error("Could not load model file: " + Je.obj + ` 
 ` + vt.stack), Ke("Error loading the model")
            })
        }

        function di($e) {
            $e.traverse(function(vt) {
                if (vt.isMesh) {
                    let Kt;
                    vt.material.type == "MeshStandardMaterial" ? (vt.material.metalness && (vt.material.metalness *= .1), vt.material.glossiness && (vt.material.glossiness *= .25), Kt = new THREE.Color(12, 12, 12)) : vt.material.type == "MeshPhongMaterial" && (vt.material.shininess = .1, Kt = new THREE.Color(20, 20, 20)), vt.material.specular && vt.material.specular.isColor && (vt.material.specular = Kt)
                }
            })
        }
    }
    ue.exports = Tt
})(Rf);
var gm = Rf.exports,
    Df = {
        exports: {}
    };
(function(ue, R) {
    const y = Xa,
        z = Ls,
        V = zl;

    function Y(C) {
        C = z._validate(C, V.prototype._defaults.line);
        var p = z.lnglatsToWorld(C.geometry),
            se = z.normalizeVertices(p),
            ie = z.flattenVectors(se.vertices),
            He = new y.LineGeometry;
        He.setPositions(ie);
        let be = new y.LineMaterial({
            color: C.color,
            linewidth: C.width,
            dashed: !1,
            opacity: C.opacity
        });
        return be.resolution.set(window.innerWidth, window.innerHeight), be.isMaterial = !0, be.transparent = !0, be.depthWrite = !1, Y = new y.Line2(He, be), Y.position.copy(se.position), Y.computeLineDistances(), Y
    }
    ue.exports = Y, y.LineSegmentsGeometry = function() {
        y.InstancedBufferGeometry.call(this), this.type = "LineSegmentsGeometry";
        var C = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0],
            p = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2],
            se = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
        this.setIndex(se), this.setAttribute("position", new y.Float32BufferAttribute(C, 3)), this.setAttribute("uv", new y.Float32BufferAttribute(p, 2))
    }, y.LineSegmentsGeometry.prototype = Object.assign(Object.create(y.InstancedBufferGeometry.prototype), {
        constructor: y.LineSegmentsGeometry,
        isLineSegmentsGeometry: !0,
        applyMatrix4: function(C) {
            var p = this.attributes.instanceStart,
                se = this.attributes.instanceEnd;
            return p !== void 0 && (p.applyMatrix4(C), se.applyMatrix4(C), p.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
        },
        setPositions: function(C) {
            var p;
            C instanceof Float32Array ? p = C : Array.isArray(C) && (p = new Float32Array(C));
            var se = new y.InstancedInterleavedBuffer(p, 6, 1);
            return this.setAttribute("instanceStart", new y.InterleavedBufferAttribute(se, 3, 0)), this.setAttribute("instanceEnd", new y.InterleavedBufferAttribute(se, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this
        },
        setColors: function(C) {
            var p;
            C instanceof Float32Array ? p = C : Array.isArray(C) && (p = new Float32Array(C));
            var se = new y.InstancedInterleavedBuffer(p, 6, 1);
            return this.setAttribute("instanceColorStart", new y.InterleavedBufferAttribute(se, 3, 0)), this.setAttribute("instanceColorEnd", new y.InterleavedBufferAttribute(se, 3, 3)), this
        },
        fromWireframeGeometry: function(C) {
            return this.setPositions(C.attributes.position.array), this
        },
        fromEdgesGeometry: function(C) {
            return this.setPositions(C.attributes.position.array), this
        },
        fromMesh: function(C) {
            return this.fromWireframeGeometry(new y.WireframeGeometry(C.geometry)), this
        },
        fromLineSegments: function(C) {
            var p = C.geometry;
            if (p.isGeometry) {
                console.error("THREE.LineSegmentsGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                return
            } else p.isBufferGeometry && this.setPositions(p.attributes.position.array);
            return this
        },
        computeBoundingBox: function() {
            var C = new y.Box3;
            return function() {
                this.boundingBox === null && (this.boundingBox = new y.Box3);
                var se = this.attributes.instanceStart,
                    ie = this.attributes.instanceEnd;
                se !== void 0 && ie !== void 0 && (this.boundingBox.setFromBufferAttribute(se), C.setFromBufferAttribute(ie), this.boundingBox.union(C))
            }
        }(),
        computeBoundingSphere: function() {
            var C = new y.Vector3;
            return function() {
                this.boundingSphere === null && (this.boundingSphere = new y.Sphere), this.boundingBox === null && this.computeBoundingBox();
                var se = this.attributes.instanceStart,
                    ie = this.attributes.instanceEnd;
                if (se !== void 0 && ie !== void 0) {
                    var He = this.boundingSphere.center;
                    this.boundingBox.getCenter(He);
                    for (var be = 0, Ee = 0, Lt = se.count; Ee < Lt; Ee++) C.fromBufferAttribute(se, Ee), be = Math.max(be, He.distanceToSquared(C)), C.fromBufferAttribute(ie, Ee), be = Math.max(be, He.distanceToSquared(C));
                    this.boundingSphere.radius = Math.sqrt(be), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this)
                }
            }
        }(),
        toJSON: function() {},
        applyMatrix: function(C) {
            return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(C)
        }
    }), y.LineGeometry = function() {
        y.LineSegmentsGeometry.call(this), this.type = "LineGeometry"
    }, y.LineGeometry.prototype = Object.assign(Object.create(y.LineSegmentsGeometry.prototype), {
        constructor: y.LineGeometry,
        isLineGeometry: !0,
        setPositions: function(C) {
            for (var p = C.length - 3, se = new Float32Array(2 * p), ie = 0; ie < p; ie += 3) se[2 * ie] = C[ie], se[2 * ie + 1] = C[ie + 1], se[2 * ie + 2] = C[ie + 2], se[2 * ie + 3] = C[ie + 3], se[2 * ie + 4] = C[ie + 4], se[2 * ie + 5] = C[ie + 5];
            return y.LineSegmentsGeometry.prototype.setPositions.call(this, se), this
        },
        setColors: function(C) {
            for (var p = C.length - 3, se = new Float32Array(2 * p), ie = 0; ie < p; ie += 3) se[2 * ie] = C[ie], se[2 * ie + 1] = C[ie + 1], se[2 * ie + 2] = C[ie + 2], se[2 * ie + 3] = C[ie + 3], se[2 * ie + 4] = C[ie + 4], se[2 * ie + 5] = C[ie + 5];
            return y.LineSegmentsGeometry.prototype.setColors.call(this, se), this
        },
        fromLine: function(C) {
            var p = C.geometry;
            if (p.isGeometry) {
                console.error("THREE.LineGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                return
            } else p.isBufferGeometry && this.setPositions(p.attributes.position.array);
            return this
        },
        copy: function() {
            return this
        }
    }), y.WireframeGeometry2 = function(C) {
        y.LineSegmentsGeometry.call(this), this.type = "WireframeGeometry2", this.fromWireframeGeometry(new y.WireframeGeometry(C))
    }, y.WireframeGeometry2.prototype = Object.assign(Object.create(y.LineSegmentsGeometry.prototype), {
        constructor: y.WireframeGeometry2,
        isWireframeGeometry2: !0
    }), y.UniformsLib.line = {
        linewidth: {
            value: 1
        },
        resolution: {
            value: new y.Vector2(1, 1)
        },
        dashScale: {
            value: 1
        },
        dashSize: {
            value: 1
        },
        dashOffset: {
            value: 0
        },
        gapSize: {
            value: 1
        },
        opacity: {
            value: 1
        }
    }, y.ShaderLib.line = {
        uniforms: y.UniformsUtils.merge([y.UniformsLib.common, y.UniformsLib.fog, y.UniformsLib.line]),
        vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,
        fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float dashOffset;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
    }, y.LineMaterial = function(C) {
        y.ShaderMaterial.call(this, {
            type: "LineMaterial",
            uniforms: y.UniformsUtils.clone(y.ShaderLib.line.uniforms),
            vertexShader: y.ShaderLib.line.vertexShader,
            fragmentShader: y.ShaderLib.line.fragmentShader,
            clipping: !0
        }), this.dashed = !1, Object.defineProperties(this, {
            color: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.diffuse.value
                },
                set: function(p) {
                    this.uniforms.diffuse.value = p
                }
            },
            linewidth: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.linewidth.value
                },
                set: function(p) {
                    this.uniforms.linewidth.value = p
                }
            },
            dashScale: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.dashScale.value
                },
                set: function(p) {
                    this.uniforms.dashScale.value = p
                }
            },
            dashSize: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.dashSize.value
                },
                set: function(p) {
                    this.uniforms.dashSize.value = p
                }
            },
            dashOffset: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.dashOffset.value
                },
                set: function(p) {
                    this.uniforms.dashOffset.value = p
                }
            },
            gapSize: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.gapSize.value
                },
                set: function(p) {
                    this.uniforms.gapSize.value = p
                }
            },
            opacity: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.opacity.value
                },
                set: function(p) {
                    this.uniforms.opacity.value = p
                }
            },
            resolution: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.resolution.value
                },
                set: function(p) {
                    this.uniforms.resolution.value.copy(p)
                }
            }
        }), this.setValues(C)
    }, y.LineMaterial.prototype = Object.create(y.ShaderMaterial.prototype), y.LineMaterial.prototype.constructor = y.LineMaterial, y.LineMaterial.prototype.isLineMaterial = !0, y.LineSegments2 = function(C, p) {
        C === void 0 && (C = new y.LineSegmentsGeometry), p === void 0 && (p = new y.LineMaterial({
            color: Math.random() * 16777215
        })), y.Mesh.call(this, C, p), this.type = "LineSegments2"
    }, y.LineSegments2.prototype = Object.assign(Object.create(y.Mesh.prototype), {
        constructor: y.LineSegments2,
        isLineSegments2: !0,
        computeLineDistances: function() {
            var C = new y.Vector3,
                p = new y.Vector3;
            return function() {
                for (var ie = this.geometry, He = ie.attributes.instanceStart, be = ie.attributes.instanceEnd, Ee = new Float32Array(2 * He.data.count), Lt = 0, Tt = 0, Je = He.data.count; Lt < Je; Lt++, Tt += 2) C.fromBufferAttribute(He, Lt), p.fromBufferAttribute(be, Lt), Ee[Tt] = Tt === 0 ? 0 : Ee[Tt - 1], Ee[Tt + 1] = Ee[Tt] + C.distanceTo(p);
                var wt = new y.InstancedInterleavedBuffer(Ee, 2, 1);
                return ie.setAttribute("instanceDistanceStart", new y.InterleavedBufferAttribute(wt, 1, 0)), ie.setAttribute("instanceDistanceEnd", new y.InterleavedBufferAttribute(wt, 1, 1)), this
            }
        }(),
        raycast: function() {
            var C = new y.Vector4,
                p = new y.Vector4,
                se = new y.Vector4,
                ie = new y.Vector3,
                He = new y.Matrix4,
                be = new y.Line3,
                Ee = new y.Vector3;
            return function(Tt, Je) {
                Tt.camera === null && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2.');
                var wt = Tt.params.Line2 !== void 0 && Tt.params.Line2.threshold || 0,
                    Ke = Tt.ray,
                    Ye = Tt.camera,
                    jt = Ye.projectionMatrix,
                    di = this.geometry,
                    $e = this.material,
                    vt = $e.resolution,
                    Kt = $e.linewidth + wt,
                    vi = di.attributes.instanceStart,
                    Li = di.attributes.instanceEnd,
                    Ei = -Ye.near;
                Ke.at(1, se), se.w = 1, se.applyMatrix4(Ye.matrixWorldInverse), se.applyMatrix4(jt), se.multiplyScalar(1 / se.w), se.x *= vt.x / 2, se.y *= vt.y / 2, se.z = 0, ie.copy(se);
                var ct = this.matrixWorld;
                He.multiplyMatrices(Ye.matrixWorldInverse, ct);
                for (var je = 0, li = vi.count; je < li; je++) {
                    C.fromBufferAttribute(vi, je), p.fromBufferAttribute(Li, je), C.w = 1, p.w = 1, C.applyMatrix4(He), p.applyMatrix4(He);
                    var O = C.z > Ei && p.z > Ei;
                    if (!O) {
                        if (C.z > Ei) {
                            const De = C.z - p.z,
                                gt = (C.z - Ei) / De;
                            C.lerp(p, gt)
                        } else if (p.z > Ei) {
                            const De = p.z - C.z,
                                gt = (p.z - Ei) / De;
                            p.lerp(C, gt)
                        }
                        C.applyMatrix4(jt), p.applyMatrix4(jt), C.multiplyScalar(1 / C.w), p.multiplyScalar(1 / p.w), C.x *= vt.x / 2, C.y *= vt.y / 2, p.x *= vt.x / 2, p.y *= vt.y / 2, be.start.copy(C), be.start.z = 0, be.end.copy(p), be.end.z = 0;
                        var K = be.closestPointToPointParameter(ie, !0);
                        be.at(K, Ee);
                        var ae = y.MathUtils.lerp(C.z, p.z, K),
                            _e = ae >= -1 && ae <= 1,
                            xe = ie.distanceTo(Ee) < Kt * .5;
                        if (_e && xe) {
                            be.start.fromBufferAttribute(vi, je), be.end.fromBufferAttribute(Li, je), be.start.applyMatrix4(ct), be.end.applyMatrix4(ct);
                            var Ze = new y.Vector3,
                                st = new y.Vector3;
                            Ke.distanceSqToSegment(be.start, be.end, st, Ze), Je.push({
                                point: st,
                                pointOnLine: Ze,
                                distance: Ke.origin.distanceTo(st),
                                object: this,
                                face: null,
                                faceIndex: je,
                                uv: null,
                                uv2: null
                            })
                        }
                    }
                }
            }
        }()
    }), y.Line2 = function(C, p) {
        C === void 0 && (C = new y.LineGeometry), p === void 0 && (p = new y.LineMaterial({
            color: Math.random() * 16777215
        })), y.LineSegments2.call(this, C, p), this.type = "Line2"
    }, y.Line2.prototype = Object.assign(Object.create(y.LineSegments2.prototype), {
        constructor: y.Line2,
        isLine2: !0
    }), y.Wireframe = function(C, p) {
        y.Mesh.call(this), this.type = "Wireframe", this.geometry = C !== void 0 ? C : new y.LineSegmentsGeometry, this.material = p !== void 0 ? p : new y.LineMaterial({
            color: Math.random() * 16777215
        })
    }, y.Wireframe.prototype = Object.assign(Object.create(y.Mesh.prototype), {
        constructor: y.Wireframe,
        isWireframe: !0,
        computeLineDistances: function() {
            var C = new y.Vector3,
                p = new y.Vector3;
            return function() {
                for (var ie = this.geometry, He = ie.attributes.instanceStart, be = ie.attributes.instanceEnd, Ee = new Float32Array(2 * He.data.count), Lt = 0, Tt = 0, Je = He.data.count; Lt < Je; Lt++, Tt += 2) C.fromBufferAttribute(He, Lt), p.fromBufferAttribute(be, Lt), Ee[Tt] = Tt === 0 ? 0 : Ee[Tt - 1], Ee[Tt + 1] = Ee[Tt] + C.distanceTo(p);
                var wt = new y.InstancedInterleavedBuffer(Ee, 2, 1);
                return ie.setAttribute("instanceDistanceStart", new y.InterleavedBufferAttribute(wt, 1, 0)), ie.setAttribute("instanceDistanceEnd", new y.InterleavedBufferAttribute(wt, 1, 1)), this
            }
        }()
    })
})(Df);
var ym = Df.exports,
    Uf = {
        exports: {}
    };
(function(ue, R) {
    const y = Ls,
        z = Vp,
        V = zl,
        Y = Xa,
        C = _p;

    function p(se, ie) {
        se = y._validate(se, V.prototype._defaults.tube);
        let He = [];
        se.geometry.forEach(Je => {
            He.push(new Y.Vector3(Je[0], Je[1], Je[2]))
        });
        const be = new Y.CatmullRomCurve3(He);
        let Ee = new Y.TubeGeometry(be, He.length, se.radius, se.sides, !1),
            Lt = z(se),
            Tt = new Y.Mesh(Ee, Lt);
        return new C({
            obj: Tt,
            units: se.units,
            anchor: se.anchor,
            adjustment: se.adjustment,
            bbox: se.bbox,
            tooltip: se.tooltip,
            raycasted: se.raycasted
        })
    }
    ue.exports = p
})(Uf);
var vm = Uf.exports,
    If = {
        exports: {}
    };
(function(ue, R) {
    const y = vp;

    function z(V) {
        this.map = V, this.renderer = new y.CSS2DRenderer, this.renderer.setSize(this.map.getCanvas().clientWidth, this.map.getCanvas().clientHeight), this.renderer.domElement.style.position = "absolute", this.renderer.domElement.id = "labelCanvas", this.renderer.domElement.style.top = 0, this.renderer.domElement.style.zIndex = "0", this.map.getCanvasContainer().appendChild(this.renderer.domElement), this.scene, this.camera, this.dispose = function() {
            this.map.getCanvasContainer().removeChild(this.renderer.domElement), this.renderer.domElement.remove(), this.renderer = {}
        }, this.setSize = function(Y, C) {
            this.renderer.setSize(Y, C)
        }, this.map.on("resize", function() {
            this.renderer.setSize(this.map.getCanvas().clientWidth, this.map.getCanvas().clientHeight)
        }.bind(this)), this.state = {
            reset: function() {}
        }, this.render = function(Y, C) {
            return no(this, null, function*() {
                return this.scene = Y, this.camera = C, new Promise(p => {
                    p(this.renderer.render(Y, C))
                })
            })
        }, this.toggleLabels = function(Y, C) {
            return no(this, null, function*() {
                return new Promise(p => {
                    p(this.setVisibility(Y, C, this.scene, this.camera, this.renderer))
                })
            })
        }, this.setVisibility = function(Y, C, p, se, ie) {
            var He = this.renderer.cacheList;
            He.forEach(function(be) {
                be.visible != C && be.layer === Y && (C && be.alwaysVisible || !C) && (be.visible = C, ie.renderObject(be, p, se))
            })
        }
    }
    ue.exports = z
})(If);
var _m = If.exports,
    zf = {
        exports: {}
    };
(function(ue, R) {
    class y {
        constructor(V, Y) {
            this.id = V.layerId, this.type = "custom", this.renderingMode = "3d", this.opacity = .5, this.buildingsLayerId = V.buildingsLayerId, this.minAltitude = V.minAltitude || .1, this.tb = Y
        }
        onAdd(V, Y) {
            this.map = V;
            const C = `
			uniform mat4 u_matrix;
			uniform float u_height_factor;
			uniform float u_altitude;
			uniform float u_azimuth;
			attribute vec2 a_pos;
			attribute vec4 a_normal_ed;
			attribute lowp vec2 a_base;
			attribute lowp vec2 a_height;
			void main() {
				float base = max(0.0, a_base.x);
				float height = max(0.0, a_height.x);
				float t = mod(a_normal_ed.x, 2.0);
				vec4 pos = vec4(a_pos, t > 0.0 ? height : base, 1);
				float len = pos.z * u_height_factor / tan(u_altitude);
				pos.x += cos(u_azimuth) * len;
				pos.y += sin(u_azimuth) * len;
				pos.z = 0.0;
				gl_Position = u_matrix * pos;
			}
			`,
                p = `
			void main() {
				gl_FragColor = vec4(0.0, 0.0, 0.0, 0.7);
			}
			`,
                se = Y.createShader(Y.VERTEX_SHADER);
            Y.shaderSource(se, C), Y.compileShader(se);
            const ie = Y.createShader(Y.FRAGMENT_SHADER);
            Y.shaderSource(ie, p), Y.compileShader(ie), this.program = Y.createProgram(), Y.attachShader(this.program, se), Y.attachShader(this.program, ie), Y.linkProgram(this.program), Y.validateProgram(this.program), this.uMatrix = Y.getUniformLocation(this.program, "u_matrix"), this.uHeightFactor = Y.getUniformLocation(this.program, "u_height_factor"), this.uAltitude = Y.getUniformLocation(this.program, "u_altitude"), this.uAzimuth = Y.getUniformLocation(this.program, "u_azimuth"), this.aPos = Y.getAttribLocation(this.program, "a_pos"), this.aNormal = Y.getAttribLocation(this.program, "a_normal_ed"), this.aBase = Y.getAttribLocation(this.program, "a_base"), this.aHeight = Y.getAttribLocation(this.program, "a_height")
        }
        render(V, Y) {
            V.useProgram(this.program);
            const C = this.map.style.sourceCaches.composite,
                p = C.getVisibleCoordinates().reverse(),
                se = this.map.getLayer(this.buildingsLayerId),
                ie = this.map.painter.context,
                {
                    lng: He,
                    lat: be
                } = this.map.getCenter(),
                Ee = this.tb.getSunPosition(this.tb.lightDateTime, [He, be]);
            V.uniform1f(this.uAltitude, Ee.altitude > this.minAltitude ? Ee.altitude : 0), V.uniform1f(this.uAzimuth, Ee.azimuth + 3 * Math.PI / 2), V.enable(V.BLEND), V.blendFunc(V.SRC_ALPHA, V.ONE_MINUS_SRC_ALPHA), V.getExtension("EXT_blend_minmax"), V.disable(V.DEPTH_TEST);
            for (const Lt of p) {
                const Tt = C.getTile(Lt),
                    Je = Tt.getBucket(se);
                if (!Je) continue;
                const [wt, Ke] = Je.programConfigurations.programConfigurations[this.buildingsLayerId]._buffers;
                V.uniformMatrix4fv(this.uMatrix, !1, Lt.posMatrix), V.uniform1f(this.uHeightFactor, Math.pow(2, Lt.overscaledZ) / Tt.tileSize / 8);
                for (const Ye of Je.segments.get()) {
                    const jt = ie.currentNumAttributes || 0,
                        di = 2;
                    for (let vt = di; vt < jt; vt++) V.disableVertexAttribArray(vt);
                    const $e = Ye.vertexOffset || 0;
                    V.enableVertexAttribArray(this.aPos), V.enableVertexAttribArray(this.aNormal), V.enableVertexAttribArray(this.aHeight), V.enableVertexAttribArray(this.aBase), Je.layoutVertexBuffer.bind(), V.vertexAttribPointer(this.aPos, 2, V.SHORT, !1, 12, 12 * $e), V.vertexAttribPointer(this.aNormal, 4, V.SHORT, !1, 12, 4 + 12 * $e), wt.bind(), V.vertexAttribPointer(this.aHeight, 1, V.FLOAT, !1, 4, 4 * $e), Ke.bind(), V.vertexAttribPointer(this.aBase, 1, V.FLOAT, !1, 4, 4 * $e), Je.indexBuffer.bind(), ie.currentNumAttributes = di, V.drawElements(V.TRIANGLES, Ye.primitiveLength * 3, V.UNSIGNED_SHORT, Ye.primitiveOffset * 3 * 2)
                }
            }
        }
    }
    ue.exports = y
})(zf);
var xm = zf.exports;
(function(ue, R) {
    const y = Xa,
        z = nm,
        V = Ls,
        Y = rm,
        C = Op,
        p = zl,
        se = Vp,
        ie = sm,
        He = om,
        be = lm,
        Ee = cm,
        Lt = gm,
        Tt = _p,
        Je = ym,
        wt = vm,
        Ke = _m,
        Ye = xm;

    function jt($e, vt, Kt) {
        this.init($e, vt, Kt)
    }
    jt.prototype = {
        repaint: function() {
            this.map.repaint = !0
        },
        init: function($e, vt, Kt) {
            this.options = V._validate(Kt || {}, di), this.map = $e, this.map.tb = this, this.objects = new p, this.renderer = new y.WebGLRenderer({
                alpha: !0,
                antialias: !0,
                preserveDrawingBuffer: Kt.preserveDrawingBuffer,
                canvas: $e.getCanvas(),
                context: vt
            }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(this.map.getCanvas().clientWidth, this.map.getCanvas().clientHeight), this.renderer.outputEncoding = y.sRGBEncoding, this.renderer.autoClear = !1, this.labelRenderer = new Ke(this.map), this.scene = new y.Scene, this.world = new y.Group, this.world.name = "world", this.scene.add(this.world), this.objectsCache = new Map, this.zoomLayers = [], this.fov = this.options.fov, this.orthographic = this.options.orthographic || !1, this.raycaster = new y.Raycaster, this.raycaster.layers.set(0), this.mapCenter = this.map.getCenter(), this.mapCenterUnits = V.projectToWorld([this.mapCenter.lng, this.mapCenter.lat]), this.lightDateTime = new Date, this.lightLng = this.mapCenter.lng, this.lightLat = this.mapCenter.lat, this.sunPosition, this.rotationStep = 5, this.gridStep = 6, this.altitudeStep = .1, this.lights = this.initLights, this.options.defaultLights && this.defaultLights(), this.options.realSunlight && this.realSunlight(this.options.realSunlightHelper), this.skyLayerName = "sky-layer", this.sky = this.options.sky, this.enableSelectingFeatures = this.options.enableSelectingFeatures || !1, this.enableSelectingObjects = this.options.enableSelectingObjects || !1, this.enableDraggingObjects = this.options.enableDraggingObjects || !1, this.enableRotatingObjects = this.options.enableRotatingObjects || !1, this.enableTooltips = this.options.enableTooltips || !1, this.multiLayer = this.options.multiLayer || !1, this.map.on("style.load", function() {
                this.tb.zoomLayers = [], this.tb.options.multiLayer && this.addLayer({
                    id: "threebox_layer",
                    type: "custom",
                    renderingMode: "3d",
                    map: this,
                    onAdd: function(vi, Li) {},
                    render: function(vi, Li) {
                        this.map.tb.update()
                    }
                }), this.tb.sky && this.tb.createSkyLayer()
            }), this.map.on("load", function() {
                this.selectedObject, this.selectedFeature, this.draggedObject;
                let vi;
                this.overedObject, this.overedFeature;
                let Li = this.getCanvasContainer();
                this.getCanvasContainer().style.cursor = "default";
                let Ei, ct = [],
                    je, li, O, K;

                function ae(Ve) {
                    var Dt = Li.getBoundingClientRect();
                    return {
                        x: Ve.originalEvent.clientX - Dt.left - Li.clientLeft,
                        y: Ve.originalEvent.clientY - Dt.top - Li.clientTop
                    }
                }
                this.unselectObject = function() {
                    this.selectedObject.selected = !1, this.selectedObject = null
                }, this.outObject = function() {
                    this.overedObject.over = !1, this.overedObject = null
                }, this.unselectFeature = function(Ve) {
                    typeof Ve.id != "undefined" && (this.setFeatureState({
                        source: Ve.source,
                        sourceLayer: Ve.sourceLayer,
                        id: Ve.id
                    }, {
                        select: !1
                    }), this.removeTooltip(Ve), Ve = this.queryRenderedFeatures({
                        layers: [Ve.layer.id],
                        filter: ["==", ["id"], Ve.id]
                    })[0], Ve && this.fire("SelectedFeatureChange", {
                        detail: Ve
                    }), this.selectedFeature = null)
                }, this.selectFeature = function(Ve) {
                    this.selectedFeature = Ve, this.setFeatureState({
                        source: this.selectedFeature.source,
                        sourceLayer: this.selectedFeature.sourceLayer,
                        id: this.selectedFeature.id
                    }, {
                        select: !0
                    }), this.selectedFeature = this.queryRenderedFeatures({
                        layers: [this.selectedFeature.layer.id],
                        filter: ["==", ["id"], this.selectedFeature.id]
                    })[0], this.addTooltip(this.selectedFeature), this.fire("SelectedFeatureChange", {
                        detail: this.selectedFeature
                    })
                }, this.outFeature = function(Ve) {
                    this.overedFeature && typeof this.overedFeature != "undefined" && this.overedFeature.id != Ve && ($e.setFeatureState({
                        source: this.overedFeature.source,
                        sourceLayer: this.overedFeature.sourceLayer,
                        id: this.overedFeature.id
                    }, {
                        hover: !1
                    }), this.removeTooltip(this.overedFeature), this.overedFeature = null)
                }, this.addTooltip = function(Ve) {
                    if (!this.tb.enableTooltips) return;
                    let Dt = this.tb.getFeatureCenter(Ve),
                        ei = this.tb.tooltip({
                            text: Ve.properties.name || Ve.id || Ve.type,
                            mapboxStyle: !0,
                            feature: Ve
                        });
                    ei.setCoords(Dt), this.tb.add(ei, Ve.layer.id), Ve.tooltip = ei, Ve.tooltip.tooltip.visible = !0
                }, this.removeTooltip = function(Ve) {
                    Ve.tooltip && (Ve.tooltip.visibility = !1, this.tb.remove(Ve.tooltip), Ve.tooltip = null)
                }, $e.onContextMenu = function(Ve) {
                    alert("contextMenu")
                }, this.onClick = function(Ve) {
                    let Dt, ei = [];
                    if ($e.tb.enableSelectingObjects && (ei = this.tb.queryRenderedFeatures(Ve.point)), Dt = typeof ei[0] == "object", Dt) {
                        let xi = jt.prototype.findParent3DObject(ei[0]);
                        if (xi) {
                            if (this.selectedFeature && this.unselectFeature(this.selectedFeature), !this.selectedObject) this.selectedObject = xi, this.selectedObject.selected = !0;
                            else if (this.selectedObject.uuid != xi.uuid) this.selectedObject.selected = !1, xi.selected = !0, this.selectedObject = xi;
                            else if (this.selectedObject.uuid == xi.uuid) {
                                this.unselectObject();
                                return
                            }
                            this.selectedObject.dispatchEvent({
                                type: "Wireframed",
                                detail: this.selectedObject
                            }), this.selectedObject.dispatchEvent({
                                type: "IsPlayingChanged",
                                detail: this.selectedObject
                            }), this.repaint = !0, Ve.preventDefault()
                        }
                    } else {
                        let xi = [];
                        if ($e.tb.enableSelectingFeatures && (xi = this.queryRenderedFeatures(Ve.point)), xi.length > 0 && xi[0].layer.type == "fill-extrusion" && typeof xi[0].id != "undefined") {
                            if (this.selectedObject && this.unselectObject(), !this.selectedFeature) this.selectFeature(xi[0]);
                            else if (this.selectedFeature.id != xi[0].id) this.unselectFeature(this.selectedFeature), this.selectFeature(xi[0]);
                            else if (this.selectedFeature.id == xi[0].id) {
                                this.unselectFeature(this.selectedFeature);
                                return
                            }
                        }
                    }
                }, this.onMouseMove = function(Ve) {
                    let Dt = ae(Ve);
                    if (this.getCanvasContainer().style.cursor = "default", Ve.originalEvent.altKey && this.draggedObject) {
                        if (!$e.tb.enableRotatingObjects) return;
                        vi = "rotate", this.getCanvasContainer().style.cursor = "move", Math.min(Ei.x, Dt.x), Math.max(Ei.x, Dt.x), Math.min(Ei.y, Dt.y), Math.max(Ei.y, Dt.y);
                        let oe = {
                            x: 0,
                            y: 0,
                            z: Math.round(K[2] + ~~((Dt.x - Ei.x) / this.tb.rotationStep) % 360 * this.tb.rotationStep % 360)
                        };
                        this.draggedObject.setRotation(oe), this.draggedObject.addHelp("rot: " + oe.z + "&#176;");
                        return
                    }
                    if (Ve.originalEvent.shiftKey && this.draggedObject) {
                        if (!$e.tb.enableDraggingObjects) return;
                        vi = "translate", this.getCanvasContainer().style.cursor = "move";
                        let oe = Ve.lngLat,
                            ve = [Number((oe.lng + je).toFixed(this.tb.gridStep)), Number((oe.lat + li).toFixed(this.tb.gridStep)), this.draggedObject.modelHeight];
                        this.draggedObject.setCoords(ve), this.draggedObject.addHelp("lng: " + ve[0] + "&#176;, lat: " + ve[1] + "&#176;");
                        return
                    }
                    if (Ve.originalEvent.ctrlKey && this.draggedObject) {
                        if (!$e.tb.enableDraggingObjects) return;
                        vi = "altitude", this.getCanvasContainer().style.cursor = "move";
                        let oe = Ve.point.y * this.tb.altitudeStep,
                            ve = [this.draggedObject.coordinates[0], this.draggedObject.coordinates[1], Number((-oe - O).toFixed(this.tb.gridStep))];
                        this.draggedObject.setCoords(ve), this.draggedObject.addHelp("alt: " + ve[2] + "m");
                        return
                    }
                    let ei, xi = [];
                    if ($e.tb.enableSelectingObjects && (xi = this.tb.queryRenderedFeatures(Ve.point)), ei = typeof xi[0] == "object", ei) {
                        let oe = jt.prototype.findParent3DObject(xi[0]);
                        oe && (this.outFeature(this.overedFeature), this.getCanvasContainer().style.cursor = "pointer", (!this.selectedObject || oe.uuid != this.selectedObject.uuid) && (this.overedObject && this.overedObject.uuid != oe.uuid && this.outObject(), oe.over = !0, this.overedObject = oe), this.repaint = !0, Ve.preventDefault())
                    } else {
                        this.overedObject && this.outObject();
                        let oe = [];
                        $e.tb.enableSelectingFeatures && (oe = this.queryRenderedFeatures(Ve.point)), oe.length > 0 && (this.outFeature(oe[0]), oe[0].layer.type == "fill-extrusion" && typeof oe[0].id != "undefined" && (!this.selectedFeature || this.selectedFeature.id != oe[0].id) && (this.getCanvasContainer().style.cursor = "pointer", this.overedFeature = oe[0], this.setFeatureState({
                            source: this.overedFeature.source,
                            sourceLayer: this.overedFeature.sourceLayer,
                            id: this.overedFeature.id
                        }, {
                            hover: !0
                        }), this.overedFeature = $e.queryRenderedFeatures({
                            layers: [this.overedFeature.layer.id],
                            filter: ["==", ["id"], this.overedFeature.id]
                        })[0], this.addTooltip(this.overedFeature)))
                    }
                }, this.onMouseDown = function(Ve) {
                    (Ve.originalEvent.shiftKey || Ve.originalEvent.altKey || Ve.originalEvent.ctrlKey) && Ve.originalEvent.button === 0 && this.selectedObject && (!$e.tb.enableDraggingObjects && !$e.tb.enableRotatingObjects || (Ve.preventDefault(), $e.getCanvasContainer().style.cursor = "move", $e.once("mouseup", this.onMouseUp), this.draggedObject = this.selectedObject, Ei = ae(Ve), ct = this.draggedObject.coordinates, K = V.degreeify(this.draggedObject.rotation), je = ct[0] - Ve.lngLat.lng, li = ct[1] - Ve.lngLat.lat, O = -this.draggedObject.modelHeight - Ve.point.y * this.tb.altitudeStep))
                }, this.onMouseUp = function(Ve) {
                    this.getCanvasContainer().style.cursor = "default", this.off("mouseup", this.onMouseUp), this.off("mouseout", this.onMouseUp), this.dragPan.enable(), this.draggedObject && (this.draggedObject.dispatchEvent({
                        type: "ObjectDragged",
                        detail: {
                            draggedObject: this.draggedObject,
                            draggedAction: vi
                        }
                    }), this.draggedObject.removeHelp(), this.draggedObject = null, vi = null)
                }, this.onMouseOut = function(Ve) {
                    if (this.overedFeature) {
                        let Dt = this.queryRenderedFeatures(Ve.point);
                        Dt.length > 0 && this.overedFeature.id != Dt[0].id && (this.getCanvasContainer().style.cursor = "default", this.outFeature(Dt[0]))
                    }
                }, this.onZoom = function(Ve) {
                    this.tb.zoomLayers.forEach(Dt => {
                        this.tb.toggleLayer(Dt)
                    }), this.tb.world.children.filter(Dt => Dt.fixedZoom != null).forEach(Dt => {
                        Dt.setObjectScale(this.transform.scale)
                    })
                };
                let _e = !1,
                    xe = 17,
                    Ze = 91,
                    st = 16,
                    De = 83;

                function gt(Ve) {
                    Ve.which === xe || Ve.which, Ve.which === st && (_e = !0);
                    let Dt = this.selectedObject;
                    if (_e && Ve.which === De && Dt) {
                        let ei = V.toDecimal;
                        if (Dt.help) Dt.removeHelp();
                        else {
                            let xi = Dt.modelSize,
                                oe = 1;
                            Dt.userData.units !== "meters" && (oe = V.projectedUnitsPerMeter(Dt.coordinates[1]), oe || (oe = 1), oe = ei(oe, 7)), Dt.addHelp("size(m): " + ei(xi.x / oe, 3) + " W, " + ei(xi.y / oe, 3) + " L, " + ei(xi.z / oe, 3) + " H"), this.repaint = !0
                        }
                        return !1
                    }
                }

                function Qt(Ve) {
                    Ve.which == xe || Ve.which == Ze, Ve.which === st && (_e = !1)
                }
                this.on("click", this.onClick), this.on("mousemove", this.onMouseMove), this.on("mouseout", this.onMouseOut), this.on("mousedown", this.onMouseDown), this.on("zoom", this.onZoom), document.addEventListener("keydown", gt.bind(this), !0), document.addEventListener("keyup", Qt.bind(this))
            })
        },
        get sky() {
            return this.options.sky
        },
        set sky($e) {
            $e != this.sky && ($e ? this.createSkyLayer() : this.removeLayer(this.skyLayerName), this.options.sky = $e)
        },
        get fov() {
            return this.options.fov
        },
        set fov($e) {
            this.camera instanceof y.PerspectiveCamera && this.options.fov !== $e && (this.map.transform.fov = $e, this.camera.fov = this.map.transform.fov, this.cameraSync.setupCamera(), this.map.repaint = !0, this.options.fov = $e)
        },
        get orthographic() {
            return this.options.orthographic
        },
        set orthographic($e) {
            const vt = this.map.getCanvas().clientHeight,
                Kt = this.map.getCanvas().clientWidth;
            $e ? (this.map.transform.fov = 0, this.camera = new y.OrthographicCamera(Kt / -2, Kt / 2, vt / 2, vt / -2, .1, 1e21)) : (this.map.transform.fov = this.fov, this.camera = new y.PerspectiveCamera(this.map.transform.fov, Kt / vt, .1, 1e21)), this.camera.layers.enable(0), this.camera.layers.enable(1), this.cameraSync = new z(this.map, this.camera, this.world), this.map.repaint = !0, this.options.orthographic = $e
        },
        createSkyLayer: function() {
            this.map.getLayer(this.skyLayerName) || this.map.addLayer({
                id: this.skyLayerName,
                type: "sky",
                paint: {
                    "sky-opacity": ["interpolate", ["linear"],
                        ["zoom"], 0, 0, 5, .3, 8, 1
                    ],
                    "sky-type": "atmosphere",
                    "sky-atmosphere-sun": this.getSunSky(this.lightDateTime),
                    "sky-atmosphere-sun-intensity": 10
                }
            })
        },
        sphere: function($e) {
            return this.setDefaultView($e, this.options), ie($e, this.world)
        },
        line: Je,
        label: be,
        tooltip: Ee,
        tube: function($e) {
            return this.setDefaultView($e, this.options), wt($e, this.world)
        },
        extrusion: function($e) {
            return this.setDefaultView($e, this.options), He($e)
        },
        Object3D: function($e) {
            return this.setDefaultView($e, this.options), Tt($e)
        },
        loadObj: function(vt, Kt) {
            return no(this, null, function*() {
                this.setDefaultView(vt, this.options);
                let vi = this.objectsCache.get(vt.obj);
                vi ? vi.promise.then(Li => {
                    Kt(Li.duplicate(vt))
                }).catch(Li => {
                    this.objectsCache.delete(vt.obj), console.error("Could not load model file: " + vt.obj)
                }) : this.objectsCache.set(vt.obj, {
                    promise: new Promise((Li, Ei) => no(this, null, function*() {
                        Lt(vt, Kt, ct => no(this, null, function*() {
                            ct.duplicate ? Li(ct.duplicate()) : Ei(ct)
                        }))
                    }))
                })
            })
        },
        material: function($e) {
            return se($e)
        },
        initLights: {
            ambientLight: null,
            dirLight: null,
            dirLightBack: null,
            dirLightHelper: null,
            hemiLight: null,
            pointLight: null
        },
        utils: V,
        SunCalc: Y,
        Constants: C,
        projectToWorld: function($e) {
            return this.utils.projectToWorld($e)
        },
        unprojectFromWorld: function($e) {
            return this.utils.unprojectFromWorld($e)
        },
        projectedUnitsPerMeter: function($e) {
            return this.utils.projectedUnitsPerMeter($e)
        },
        getFeatureCenter: function(vt, Kt, vi) {
            return V.getFeatureCenter(vt, Kt, vi)
        },
        getObjectHeightOnFloor: function($e, vt, Kt) {
            return V.getObjectHeightOnFloor($e, vt, Kt)
        },
        queryRenderedFeatures: function($e) {
            let vt = new y.Vector2;
            return vt.x = $e.x / this.map.transform.width * 2 - 1, vt.y = 1 - $e.y / this.map.transform.height * 2, this.raycaster.setFromCamera(vt, this.camera), this.raycaster.intersectObjects(this.world.children, !0)
        },
        findParent3DObject: function($e) {
            var vt;
            return $e.object.traverseAncestors(function(Kt) {
                Kt.parent && Kt.parent.type == "Group" && Kt.userData.obj && (vt = Kt)
            }), vt
        },
        setLayoutProperty: function($e, vt, Kt) {
            if (this.map.setLayoutProperty($e, vt, Kt), Kt != null && vt === "visibility") {
                this.world.children.forEach(function(vi) {
                    vi.layer === $e && (vi.visibility = Kt)
                });
                return
            }
        },
        setLayerZoomRange: function($e, vt, Kt) {
            this.map.getLayer($e) && (this.map.setLayerZoomRange($e, vt, Kt), this.zoomLayers.includes($e) || this.zoomLayers.push($e), this.toggleLayer($e))
        },
        setLayerHeigthProperty: function($e, vt) {
            let Kt = this.map.getLayer($e);
            if (Kt)
                if (Kt.type == "fill-extrusion") {
                    let vi = this.map.getStyle().sources[Kt.source].data;
                    vi.features.forEach(function(Ei) {
                        Ei.properties.level = vt
                    }), this.map.getSource(Kt.source).setData(vi)
                } else Kt.type == "custom" && this.world.children.forEach(function(vi) {
                    let Li = vi.userData.feature;
                    if (Li && Li.layer === $e) {
                        let Ei = this.tb.getFeatureCenter(Li, vi, vt);
                        vi.setCoords(Ei)
                    }
                })
        },
        setStyle: function($e, vt) {
            this.clear().then(() => {
                this.map.setStyle($e, vt)
            })
        },
        toggleLayer: function($e, vt = !0) {
            let Kt = this.map.getLayer($e);
            if (Kt) {
                if (!vt) {
                    this.toggle(Kt.id, !1);
                    return
                }
                let vi = this.map.getZoom();
                if (Kt.minzoom && vi < Kt.minzoom) {
                    this.toggle(Kt.id, !1);
                    return
                }
                if (Kt.maxzoom && vi >= Kt.maxzoom) {
                    this.toggle(Kt.id, !1);
                    return
                }
                this.toggle(Kt.id, !0)
            }
        },
        toggle: function($e, vt) {
            this.setLayoutProperty($e, "visibility", vt ? "visible" : "none"), this.labelRenderer.toggleLabels($e, vt)
        },
        update: function() {
            this.map.repaint && (this.map.repaint = !1);
            var $e = Date.now();
            this.objects.animationManager.update($e), this.updateLightHelper(), this.renderer.resetState(), this.renderer.render(this.scene, this.camera), this.labelRenderer.render(this.scene, this.camera), this.options.passiveRendering === !1 && this.map.triggerRepaint()
        },
        add: function($e, vt, Kt) {
            if (!this.enableTooltips && $e.tooltip && ($e.tooltip.visibility = !1), this.world.add($e), vt) {
                $e.layer = vt, $e.source = Kt;
                let vi = this.map.getLayer(vt);
                if (vi) {
                    let Li = vi.visibility,
                        Ei = typeof Li == "undefined";
                    $e.visibility = !!(Ei || Li === "visible")
                }
            }
        },
        removeByName: function($e) {
            let vt = this.world.getObjectByName($e);
            vt && this.remove(vt)
        },
        remove: function($e) {
            this.map.selectedObject && $e.uuid == this.map.selectedObject.uuid && this.map.unselectObject(), this.map.draggedObject && $e.uuid == this.map.draggedObject.uuid && (this.map.draggedObject = null), $e.dispose && $e.dispose(), this.world.remove($e), $e = null
        },
        clear: function($e = null, vt = !1) {
            return no(this, null, function*() {
                return new Promise((Kt, vi) => {
                    let Li = [];
                    this.world.children.forEach(function(Ei) {
                        Li.push(Ei)
                    });
                    for (let Ei = 0; Ei < Li.length; Ei++) {
                        let ct = Li[Ei];
                        (ct.layer === $e || !$e) && this.remove(ct)
                    }
                    vt && this.objectsCache.forEach(Ei => {
                        Ei.promise.then(ct => {
                            ct.dispose(), ct = null
                        })
                    }), Kt("clear")
                })
            })
        },
        removeLayer: function($e) {
            this.clear($e, !0).then(() => {
                this.map.removeLayer($e)
            })
        },
        getSunPosition: function($e, vt) {
            return Y.getPosition($e || Date.now(), vt[1], vt[0])
        },
        getSunTimes: function($e, vt) {
            return Y.getTimes($e, vt[1], vt[0], vt[2] ? vt[2] : 0)
        },
        setBuildingShadows: function($e) {
            if (this.map.getLayer($e.buildingsLayerId)) {
                let vt = new Ye($e, this);
                this.map.addLayer(vt, $e.buildingsLayerId)
            } else console.warn("The layer '" + $e.buildingsLayerId + "' does not exist in the map.")
        },
        setSunlight: function($e = new Date, vt) {
            if (!this.lights.dirLight || !this.options.realSunlight) {
                console.warn("To use setSunlight it's required to set realSunlight : true in Threebox initial options.");
                return
            }
            var Kt = new Date($e.getTime());
            if (vt ? vt.lng && vt.lat ? this.mapCenter = vt : this.mapCenter = {
                    lng: vt[0],
                    lat: vt[1]
                } : this.mapCenter = this.map.getCenter(), this.lightDateTime && this.lightDateTime.getTime() === Kt.getTime() && this.lightLng === this.mapCenter.lng && this.lightLat === this.mapCenter.lat) return;
            this.lightDateTime = Kt, this.lightLng = this.mapCenter.lng, this.lightLat = this.mapCenter.lat, this.sunPosition = this.getSunPosition(Kt, [this.mapCenter.lng, this.mapCenter.lat]);
            let vi = this.sunPosition.altitude,
                Li = Math.PI + this.sunPosition.azimuth,
                Ei = C.WORLD_SIZE / 2,
                ct = Math.sin(vi),
                je = Math.cos(vi),
                li = Math.cos(Li) * je,
                O = Math.sin(Li) * je;
            this.lights.dirLight.position.set(O, li, ct), this.lights.dirLight.position.multiplyScalar(Ei), this.lights.dirLight.intensity = Math.max(ct, -.15), this.lights.dirLight.updateMatrixWorld(), this.updateLightHelper(), this.map.loaded() && (this.map.setLight({
                anchor: "map",
                position: [3, 180 + this.sunPosition.azimuth * 180 / Math.PI, 90 - this.sunPosition.altitude * 180 / Math.PI],
                intensity: Math.cos(this.sunPosition.altitude),
                color: `hsl(40, ${50*Math.cos(this.sunPosition.altitude)}%, ${Math.max(20,20+96*Math.sin(this.sunPosition.altitude))}%)`
            }, {
                duration: 0
            }), this.sky && this.updateSunSky(this.getSunSky(Kt, this.sunPosition)))
        },
        getSunSky: function($e, vt) {
            if (!vt) {
                var Kt = this.map.getCenter();
                vt = this.getSunPosition($e || Date.now(), [Kt.lng, Kt.lat])
            }
            var vi = 180 + vt.azimuth * 180 / Math.PI,
                Li = 90 - vt.altitude * 180 / Math.PI;
            return [vi, Li]
        },
        updateSunSky: function($e) {
            this.sky && this.map.setPaintProperty(tb.skyLayerName, "sky-atmosphere-sun", $e)
        },
        updateLightHelper: function() {
            this.lights.dirLightHelper && (this.lights.dirLightHelper.position.setFromMatrixPosition(this.lights.dirLight.matrixWorld), this.lights.dirLightHelper.updateMatrix(), this.lights.dirLightHelper.update())
        },
        dispose: function() {
            return no(this, null, function*() {
                return console.log(this.memory()), new Promise($e => {
                    $e(this.clear(null, !0).then(vt => (this.map.remove(), this.map = {}, this.scene.remove(this.world), this.world.children = [], this.world = null, this.objectsCache.clear(), this.labelRenderer.dispose(), console.log(this.memory()), this.renderer.dispose(), vt)))
                })
            })
        },
        defaultLights: function() {
            this.lights.ambientLight = new y.AmbientLight(new y.Color("hsl(0, 0%, 100%)"), .75), this.scene.add(this.lights.ambientLight), this.lights.dirLightBack = new y.DirectionalLight(new y.Color("hsl(0, 0%, 100%)"), .25), this.lights.dirLightBack.position.set(30, 100, 100), this.scene.add(this.lights.dirLightBack), this.lights.dirLight = new y.DirectionalLight(new y.Color("hsl(0, 0%, 100%)"), .25), this.lights.dirLight.position.set(-30, 100, -100), this.scene.add(this.lights.dirLight)
        },
        realSunlight: function($e = !1) {
            this.renderer.shadowMap.enabled = !0, this.lights.dirLight = new y.DirectionalLight(16777215, 1), this.scene.add(this.lights.dirLight), $e && (this.lights.dirLightHelper = new y.DirectionalLightHelper(this.lights.dirLight, 5), this.scene.add(this.lights.dirLightHelper));
            let vt = 1e3,
                Kt = 2,
                vi = 8192;
            this.lights.dirLight.castShadow = !0, this.lights.dirLight.shadow.radius = Kt, this.lights.dirLight.shadow.mapSize.width = vi, this.lights.dirLight.shadow.mapSize.height = vi, this.lights.dirLight.shadow.camera.top = this.lights.dirLight.shadow.camera.right = vt, this.lights.dirLight.shadow.camera.bottom = this.lights.dirLight.shadow.camera.left = -vt, this.lights.dirLight.shadow.camera.near = 1, this.lights.dirLight.shadow.camera.visible = !0, this.lights.dirLight.shadow.camera.far = 4e8, this.lights.hemiLight = new y.HemisphereLight(new y.Color(16777215), new y.Color(16777215), .6), this.lights.hemiLight.color.setHSL(.661, .96, .12), this.lights.hemiLight.groundColor.setHSL(.11, .96, .14), this.lights.hemiLight.position.set(0, 0, 50), this.scene.add(this.lights.hemiLight), this.setSunlight()
        },
        setDefaultView: function($e, vt) {
            $e.bbox = ($e.bbox || $e.bbox == null) && vt.enableSelectingObjects, $e.tooltip = ($e.tooltip || $e.tooltip == null) && vt.enableTooltips, $e.mapScale = this.map.transform.scale
        },
        memory: function() {
            return this.renderer.info.memory
        },
        programs: function() {
            return this.renderer.info.programs.length
        },
        version: "2.2.2"
    };
    var di = {
        defaultLights: !1,
        realSunlight: !1,
        realSunlightHelper: !1,
        passiveRendering: !0,
        preserveDrawingBuffer: !1,
        enableSelectingFeatures: !1,
        enableSelectingObjects: !1,
        enableDraggingObjects: !1,
        enableRotatingObjects: !1,
        enableTooltips: !1,
        multiLayer: !1,
        orthographic: !1,
        fov: C.FOV_DEGREES,
        sky: !1
    };
    ue.exports = jt
})(mf);
var bm = mf.exports;
(function(ue, R) {
    ue.exports = {
        Threebox: bm,
        THREE: Xa
    }
})(ff);
var sl = ff.exports;

var Nf = {
    exports: {}
};
(function(ue) {
    var R = {};

    function y(Y) {
        return Math.floor(Math.abs(Y) + .5) * (Y >= 0 ? 1 : -1)
    }

    function z(Y, C, p) {
        Y = y(Y * p), C = y(C * p);
        var se = (Y - C) * 2;
        se < 0 && (se = -se - 1);
        for (var ie = ""; se >= 32;) ie += String.fromCharCode((32 | se & 31) + 63), se /= 32;
        return ie += String.fromCharCode((se | 0) + 63), ie
    }
    R.decode = function(Y, C) {
        for (var p = 0, se = 0, ie = 0, He = [], be = 0, Ee = 0, Lt = null, Tt, Je, wt = Math.pow(10, Number.isInteger(C) ? C : 5); p < Y.length;) {
            Lt = null, be = 1, Ee = 0;
            do Lt = Y.charCodeAt(p++) - 63, Ee += (Lt & 31) * be, be *= 32; while (Lt >= 32);
            Tt = Ee & 1 ? (-Ee - 1) / 2 : Ee / 2, be = 1, Ee = 0;
            do Lt = Y.charCodeAt(p++) - 63, Ee += (Lt & 31) * be, be *= 32; while (Lt >= 32);
            Je = Ee & 1 ? (-Ee - 1) / 2 : Ee / 2, se += Tt, ie += Je, He.push([se / wt, ie / wt])
        }
        return He
    }, R.encode = function(Y, C) {
        if (!Y.length) return "";
        for (var p = Math.pow(10, Number.isInteger(C) ? C : 5), se = z(Y[0][0], 0, p) + z(Y[0][1], 0, p), ie = 1; ie < Y.length; ie++) {
            var He = Y[ie],
                be = Y[ie - 1];
            se += z(He[0], be[0], p), se += z(He[1], be[1], p)
        }
        return se
    };

    function V(Y) {
        for (var C = [], p = 0; p < Y.length; p++) {
            var se = Y[p].slice();
            C.push([se[1], se[0]])
        }
        return C
    }
    R.fromGeoJSON = function(Y, C) {
        if (Y && Y.type === "Feature" && (Y = Y.geometry), !Y || Y.type !== "LineString") throw new Error("Input must be a GeoJSON LineString");
        return R.encode(V(Y.coordinates), C)
    }, R.toGeoJSON = function(Y, C) {
        var p = R.decode(Y, C);
        return {
            type: "LineString",
            coordinates: V(p)
        }
    }, ue.exports && (ue.exports = R)
})(Nf);
var wm = Nf.exports;
const Of = tm(wm);

function Em(ue) {
    if (ue && typeof window != "undefined") {
        var R = document.createElement("style");
        return R.setAttribute("type", "text/css"), R.innerHTML = ue, document.head.appendChild(R), ue
    }
}

function Lu(ue, R) {
    var y = ue.__state.conversionName.toString(),
        z = Math.round(ue.r),
        V = Math.round(ue.g),
        Y = Math.round(ue.b),
        C = ue.a,
        p = Math.round(ue.h),
        se = ue.s.toFixed(1),
        ie = ue.v.toFixed(1);
    if (R || y === "THREE_CHAR_HEX" || y === "SIX_CHAR_HEX") {
        for (var He = ue.hex.toString(16); He.length < 6;) He = "0" + He;
        return "#" + He
    } else {
        if (y === "CSS_RGB") return "rgb(" + z + "," + V + "," + Y + ")";
        if (y === "CSS_RGBA") return "rgba(" + z + "," + V + "," + Y + "," + C + ")";
        if (y === "HEX") return "0x" + ue.hex.toString(16);
        if (y === "RGB_ARRAY") return "[" + z + "," + V + "," + Y + "]";
        if (y === "RGBA_ARRAY") return "[" + z + "," + V + "," + Y + "," + C + "]";
        if (y === "RGB_OBJ") return "{r:" + z + ",g:" + V + ",b:" + Y + "}";
        if (y === "RGBA_OBJ") return "{r:" + z + ",g:" + V + ",b:" + Y + ",a:" + C + "}";
        if (y === "HSV_OBJ") return "{h:" + p + ",s:" + se + ",v:" + ie + "}";
        if (y === "HSVA_OBJ") return "{h:" + p + ",s:" + se + ",v:" + ie + ",a:" + C + "}"
    }
    return "unknown format"
}
var $p = Array.prototype.forEach,
    Qd = Array.prototype.slice,
    mi = {
        BREAK: {},
        extend: function(R) {
            return this.each(Qd.call(arguments, 1), function(y) {
                var z = this.isObject(y) ? Object.keys(y) : [];
                z.forEach(function(V) {
                    this.isUndefined(y[V]) || (R[V] = y[V])
                }.bind(this))
            }, this), R
        },
        defaults: function(R) {
            return this.each(Qd.call(arguments, 1), function(y) {
                var z = this.isObject(y) ? Object.keys(y) : [];
                z.forEach(function(V) {
                    this.isUndefined(R[V]) && (R[V] = y[V])
                }.bind(this))
            }, this), R
        },
        compose: function() {
            var R = Qd.call(arguments);
            return function() {
                for (var y = Qd.call(arguments), z = R.length - 1; z >= 0; z--) y = [R[z].apply(this, y)];
                return y[0]
            }
        },
        each: function(R, y, z) {
            if (R) {
                if ($p && R.forEach && R.forEach === $p) R.forEach(y, z);
                else if (R.length === R.length + 0) {
                    var V = void 0,
                        Y = void 0;
                    for (V = 0, Y = R.length; V < Y; V++)
                        if (V in R && y.call(z, R[V], V) === this.BREAK) return
                } else
                    for (var C in R)
                        if (y.call(z, R[C], C) === this.BREAK) return
            }
        },
        defer: function(R) {
            setTimeout(R, 0)
        },
        debounce: function(R, y, z) {
            var V = void 0;
            return function() {
                var Y = this,
                    C = arguments;

                function p() {
                    V = null, z || R.apply(Y, C)
                }
                var se = z || !V;
                clearTimeout(V), V = setTimeout(p, y), se && R.apply(Y, C)
            }
        },
        toArray: function(R) {
            return R.toArray ? R.toArray() : Qd.call(R)
        },
        isUndefined: function(R) {
            return R === void 0
        },
        isNull: function(R) {
            return R === null
        },
        isNaN: function(ue) {
            function R(y) {
                return ue.apply(this, arguments)
            }
            return R.toString = function() {
                return ue.toString()
            }, R
        }(function(ue) {
            return isNaN(ue)
        }),
        isArray: Array.isArray || function(ue) {
            return ue.constructor === Array
        },
        isObject: function(R) {
            return R === Object(R)
        },
        isNumber: function(R) {
            return R === R + 0
        },
        isString: function(R) {
            return R === R + ""
        },
        isBoolean: function(R) {
            return R === !1 || R === !0
        },
        isFunction: function(R) {
            return R instanceof Function
        }
    },
    Sm = [{
        litmus: mi.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function(R) {
                    var y = R.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    return y === null ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + y[1].toString() + y[1].toString() + y[2].toString() + y[2].toString() + y[3].toString() + y[3].toString(), 0)
                    }
                },
                write: Lu
            },
            SIX_CHAR_HEX: {
                read: function(R) {
                    var y = R.match(/^#([A-F0-9]{6})$/i);
                    return y === null ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + y[1].toString(), 0)
                    }
                },
                write: Lu
            },
            CSS_RGB: {
                read: function(R) {
                    var y = R.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
                    return y === null ? !1 : {
                        space: "RGB",
                        r: parseFloat(y[1]),
                        g: parseFloat(y[2]),
                        b: parseFloat(y[3])
                    }
                },
                write: Lu
            },
            CSS_RGBA: {
                read: function(R) {
                    var y = R.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
                    return y === null ? !1 : {
                        space: "RGB",
                        r: parseFloat(y[1]),
                        g: parseFloat(y[2]),
                        b: parseFloat(y[3]),
                        a: parseFloat(y[4])
                    }
                },
                write: Lu
            }
        }
    }, {
        litmus: mi.isNumber,
        conversions: {
            HEX: {
                read: function(R) {
                    return {
                        space: "HEX",
                        hex: R,
                        conversionName: "HEX"
                    }
                },
                write: function(R) {
                    return R.hex
                }
            }
        }
    }, {
        litmus: mi.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function(R) {
                    return R.length !== 3 ? !1 : {
                        space: "RGB",
                        r: R[0],
                        g: R[1],
                        b: R[2]
                    }
                },
                write: function(R) {
                    return [R.r, R.g, R.b]
                }
            },
            RGBA_ARRAY: {
                read: function(R) {
                    return R.length !== 4 ? !1 : {
                        space: "RGB",
                        r: R[0],
                        g: R[1],
                        b: R[2],
                        a: R[3]
                    }
                },
                write: function(R) {
                    return [R.r, R.g, R.b, R.a]
                }
            }
        }
    }, {
        litmus: mi.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function(R) {
                    return mi.isNumber(R.r) && mi.isNumber(R.g) && mi.isNumber(R.b) && mi.isNumber(R.a) ? {
                        space: "RGB",
                        r: R.r,
                        g: R.g,
                        b: R.b,
                        a: R.a
                    } : !1
                },
                write: function(R) {
                    return {
                        r: R.r,
                        g: R.g,
                        b: R.b,
                        a: R.a
                    }
                }
            },
            RGB_OBJ: {
                read: function(R) {
                    return mi.isNumber(R.r) && mi.isNumber(R.g) && mi.isNumber(R.b) ? {
                        space: "RGB",
                        r: R.r,
                        g: R.g,
                        b: R.b
                    } : !1
                },
                write: function(R) {
                    return {
                        r: R.r,
                        g: R.g,
                        b: R.b
                    }
                }
            },
            HSVA_OBJ: {
                read: function(R) {
                    return mi.isNumber(R.h) && mi.isNumber(R.s) && mi.isNumber(R.v) && mi.isNumber(R.a) ? {
                        space: "HSV",
                        h: R.h,
                        s: R.s,
                        v: R.v,
                        a: R.a
                    } : !1
                },
                write: function(R) {
                    return {
                        h: R.h,
                        s: R.s,
                        v: R.v,
                        a: R.a
                    }
                }
            },
            HSV_OBJ: {
                read: function(R) {
                    return mi.isNumber(R.h) && mi.isNumber(R.s) && mi.isNumber(R.v) ? {
                        space: "HSV",
                        h: R.h,
                        s: R.s,
                        v: R.v
                    } : !1
                },
                write: function(R) {
                    return {
                        h: R.h,
                        s: R.s,
                        v: R.v
                    }
                }
            }
        }
    }],
    Pd = void 0,
    pp = void 0,
    kp = function() {
        pp = !1;
        var R = arguments.length > 1 ? mi.toArray(arguments) : arguments[0];
        return mi.each(Sm, function(y) {
            if (y.litmus(R)) return mi.each(y.conversions, function(z, V) {
                if (Pd = z.read(R), pp === !1 && Pd !== !1) return pp = Pd, Pd.conversionName = V, Pd.conversion = z, mi.BREAK
            }), mi.BREAK
        }), pp
    },
    Kp = void 0,
    mp = {
        hsv_to_rgb: function(R, y, z) {
            var V = Math.floor(R / 60) % 6,
                Y = R / 60 - Math.floor(R / 60),
                C = z * (1 - y),
                p = z * (1 - Y * y),
                se = z * (1 - (1 - Y) * y),
                ie = [
                    [z, se, C],
                    [p, z, C],
                    [C, z, se],
                    [C, p, z],
                    [se, C, z],
                    [z, C, p]
                ][V];
            return {
                r: ie[0] * 255,
                g: ie[1] * 255,
                b: ie[2] * 255
            }
        },
        rgb_to_hsv: function(R, y, z) {
            var V = Math.min(R, y, z),
                Y = Math.max(R, y, z),
                C = Y - V,
                p = void 0,
                se = void 0;
            if (Y !== 0) se = C / Y;
            else return {
                h: NaN,
                s: 0,
                v: 0
            };
            return R === Y ? p = (y - z) / C : y === Y ? p = 2 + (z - R) / C : p = 4 + (R - y) / C, p /= 6, p < 0 && (p += 1), {
                h: p * 360,
                s: se,
                v: Y / 255
            }
        },
        rgb_to_hex: function(R, y, z) {
            var V = this.hex_with_component(0, 2, R);
            return V = this.hex_with_component(V, 1, y), V = this.hex_with_component(V, 0, z), V
        },
        component_from_hex: function(R, y) {
            return R >> y * 8 & 255
        },
        hex_with_component: function(R, y, z) {
            return z << (Kp = y * 8) | R & ~(255 << Kp)
        }
    },
    Am = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(ue) {
        return typeof ue
    } : function(ue) {
        return ue && typeof Symbol == "function" && ue.constructor === Symbol && ue !== Symbol.prototype ? "symbol" : typeof ue
    },
    Mo = function(ue, R) {
        if (!(ue instanceof R)) throw new TypeError("Cannot call a class as a function")
    },
    Co = function() {
        function ue(R, y) {
            for (var z = 0; z < y.length; z++) {
                var V = y[z];
                V.enumerable = V.enumerable || !1, V.configurable = !0, "value" in V && (V.writable = !0), Object.defineProperty(R, V.key, V)
            }
        }
        return function(R, y, z) {
            return y && ue(R.prototype, y), z && ue(R, z), R
        }
    }(),
    Fc = function ue(R, y, z) {
        R === null && (R = Function.prototype);
        var V = Object.getOwnPropertyDescriptor(R, y);
        if (V === void 0) {
            var Y = Object.getPrototypeOf(R);
            return Y === null ? void 0 : ue(Y, y, z)
        } else {
            if ("value" in V) return V.value;
            var C = V.get;
            return C === void 0 ? void 0 : C.call(z)
        }
    },
    Lc = function(ue, R) {
        if (typeof R != "function" && R !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof R);
        ue.prototype = Object.create(R && R.prototype, {
            constructor: {
                value: ue,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), R && (Object.setPrototypeOf ? Object.setPrototypeOf(ue, R) : ue.__proto__ = R)
    },
    Qc = function(ue, R) {
        if (!ue) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return R && (typeof R == "object" || typeof R == "function") ? R : ue
    },
    ka = function() {
        function ue() {
            if (Mo(this, ue), this.__state = kp.apply(this, arguments), this.__state === !1) throw new Error("Failed to interpret color arguments");
            this.__state.a = this.__state.a || 1
        }
        return Co(ue, [{
            key: "toString",
            value: function() {
                return Lu(this)
            }
        }, {
            key: "toHexString",
            value: function() {
                return Lu(this, !0)
            }
        }, {
            key: "toOriginal",
            value: function() {
                return this.__state.conversion.write(this)
            }
        }]), ue
    }();

function Gp(ue, R, y) {
    Object.defineProperty(ue, R, {
        get: function() {
            return this.__state.space === "RGB" ? this.__state[R] : (ka.recalculateRGB(this, R, y), this.__state[R])
        },
        set: function(V) {
            this.__state.space !== "RGB" && (ka.recalculateRGB(this, R, y), this.__state.space = "RGB"), this.__state[R] = V
        }
    })
}

function Hp(ue, R) {
    Object.defineProperty(ue, R, {
        get: function() {
            return this.__state.space === "HSV" ? this.__state[R] : (ka.recalculateHSV(this), this.__state[R])
        },
        set: function(z) {
            this.__state.space !== "HSV" && (ka.recalculateHSV(this), this.__state.space = "HSV"), this.__state[R] = z
        }
    })
}
ka.recalculateRGB = function(ue, R, y) {
    if (ue.__state.space === "HEX") ue.__state[R] = mp.component_from_hex(ue.__state.hex, y);
    else if (ue.__state.space === "HSV") mi.extend(ue.__state, mp.hsv_to_rgb(ue.__state.h, ue.__state.s, ue.__state.v));
    else throw new Error("Corrupted color state")
};
ka.recalculateHSV = function(ue) {
    var R = mp.rgb_to_hsv(ue.r, ue.g, ue.b);
    mi.extend(ue.__state, {
        s: R.s,
        v: R.v
    }), mi.isNaN(R.h) ? mi.isUndefined(ue.__state.h) && (ue.__state.h = 0) : ue.__state.h = R.h
};
ka.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
Gp(ka.prototype, "r", 2);
Gp(ka.prototype, "g", 1);
Gp(ka.prototype, "b", 0);
Hp(ka.prototype, "h");
Hp(ka.prototype, "s");
Hp(ka.prototype, "v");
Object.defineProperty(ka.prototype, "a", {
    get: function() {
        return this.__state.a
    },
    set: function(R) {
        this.__state.a = R
    }
});
Object.defineProperty(ka.prototype, "hex", {
    get: function() {
        return this.__state.space !== "HEX" && (this.__state.hex = mp.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex
    },
    set: function(R) {
        this.__state.space = "HEX", this.__state.hex = R
    }
});
var Qh = function() {
        function ue(R, y) {
            Mo(this, ue), this.initialValue = R[y], this.domElement = document.createElement("div"), this.object = R, this.property = y, this.__onChange = void 0, this.__onFinishChange = void 0
        }
        return Co(ue, [{
            key: "onChange",
            value: function(y) {
                return this.__onChange = y, this
            }
        }, {
            key: "onFinishChange",
            value: function(y) {
                return this.__onFinishChange = y, this
            }
        }, {
            key: "setValue",
            value: function(y) {
                return this.object[this.property] = y, this.__onChange && this.__onChange.call(this, y), this.updateDisplay(), this
            }
        }, {
            key: "getValue",
            value: function() {
                return this.object[this.property]
            }
        }, {
            key: "updateDisplay",
            value: function() {
                return this
            }
        }, {
            key: "isModified",
            value: function() {
                return this.initialValue !== this.getValue()
            }
        }]), ue
    }(),
    Tm = {
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    },
    Vf = {};
mi.each(Tm, function(ue, R) {
    mi.each(ue, function(y) {
        Vf[y] = R
    })
});
var Mm = /(\d+(\.\d+)?)px/;

function ol(ue) {
    if (ue === "0" || mi.isUndefined(ue)) return 0;
    var R = ue.match(Mm);
    return mi.isNull(R) ? 0 : parseFloat(R[1])
}
var Ut = {
        makeSelectable: function(R, y) {
            R === void 0 || R.style === void 0 || (R.onselectstart = y ? function() {
                return !1
            } : function() {}, R.style.MozUserSelect = y ? "auto" : "none", R.style.KhtmlUserSelect = y ? "auto" : "none", R.unselectable = y ? "on" : "off")
        },
        makeFullscreen: function(R, y, z) {
            var V = z,
                Y = y;
            mi.isUndefined(Y) && (Y = !0), mi.isUndefined(V) && (V = !0), R.style.position = "absolute", Y && (R.style.left = 0, R.style.right = 0), V && (R.style.top = 0, R.style.bottom = 0)
        },
        fakeEvent: function(R, y, z, V) {
            var Y = z || {},
                C = Vf[y];
            if (!C) throw new Error("Event type " + y + " not supported.");
            var p = document.createEvent(C);
            switch (C) {
                case "MouseEvents": {
                    var se = Y.x || Y.clientX || 0,
                        ie = Y.y || Y.clientY || 0;
                    p.initMouseEvent(y, Y.bubbles || !1, Y.cancelable || !0, window, Y.clickCount || 1, 0, 0, se, ie, !1, !1, !1, !1, 0, null);
                    break
                }
                case "KeyboardEvents": {
                    var He = p.initKeyboardEvent || p.initKeyEvent;
                    mi.defaults(Y, {
                        cancelable: !0,
                        ctrlKey: !1,
                        altKey: !1,
                        shiftKey: !1,
                        metaKey: !1,
                        keyCode: void 0,
                        charCode: void 0
                    }), He(y, Y.bubbles || !1, Y.cancelable, window, Y.ctrlKey, Y.altKey, Y.shiftKey, Y.metaKey, Y.keyCode, Y.charCode);
                    break
                }
                default: {
                    p.initEvent(y, Y.bubbles || !1, Y.cancelable || !0);
                    break
                }
            }
            mi.defaults(p, V), R.dispatchEvent(p)
        },
        bind: function(R, y, z, V) {
            var Y = V || !1;
            return R.addEventListener ? R.addEventListener(y, z, Y) : R.attachEvent && R.attachEvent("on" + y, z), Ut
        },
        unbind: function(R, y, z, V) {
            var Y = V || !1;
            return R.removeEventListener ? R.removeEventListener(y, z, Y) : R.detachEvent && R.detachEvent("on" + y, z), Ut
        },
        addClass: function(R, y) {
            if (R.className === void 0) R.className = y;
            else if (R.className !== y) {
                var z = R.className.split(/ +/);
                z.indexOf(y) === -1 && (z.push(y), R.className = z.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
            }
            return Ut
        },
        removeClass: function(R, y) {
            if (y)
                if (R.className === y) R.removeAttribute("class");
                else {
                    var z = R.className.split(/ +/),
                        V = z.indexOf(y);
                    V !== -1 && (z.splice(V, 1), R.className = z.join(" "))
                }
            else R.className = void 0;
            return Ut
        },
        hasClass: function(R, y) {
            return new RegExp("(?:^|\\s+)" + y + "(?:\\s+|$)").test(R.className) || !1
        },
        getWidth: function(R) {
            var y = getComputedStyle(R);
            return ol(y["border-left-width"]) + ol(y["border-right-width"]) + ol(y["padding-left"]) + ol(y["padding-right"]) + ol(y.width)
        },
        getHeight: function(R) {
            var y = getComputedStyle(R);
            return ol(y["border-top-width"]) + ol(y["border-bottom-width"]) + ol(y["padding-top"]) + ol(y["padding-bottom"]) + ol(y.height)
        },
        getOffset: function(R) {
            var y = R,
                z = {
                    left: 0,
                    top: 0
                };
            if (y.offsetParent)
                do z.left += y.offsetLeft, z.top += y.offsetTop, y = y.offsetParent; while (y);
            return z
        },
        isActive: function(R) {
            return R === document.activeElement && (R.type || R.href)
        }
    },
    Gf = function(ue) {
        Lc(R, ue);

        function R(y, z) {
            Mo(this, R);
            var V = Qc(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, y, z)),
                Y = V;
            V.__prev = V.getValue(), V.__checkbox = document.createElement("input"), V.__checkbox.setAttribute("type", "checkbox");

            function C() {
                Y.setValue(!Y.__prev)
            }
            return Ut.bind(V.__checkbox, "change", C, !1), V.domElement.appendChild(V.__checkbox), V.updateDisplay(), V
        }
        return Co(R, [{
            key: "setValue",
            value: function(z) {
                var V = Fc(R.prototype.__proto__ || Object.getPrototypeOf(R.prototype), "setValue", this).call(this, z);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), V
            }
        }, {
            key: "updateDisplay",
            value: function() {
                return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), Fc(R.prototype.__proto__ || Object.getPrototypeOf(R.prototype), "updateDisplay", this).call(this)
            }
        }]), R
    }(Qh),
    Cm = function(ue) {
        Lc(R, ue);

        function R(y, z, V) {
            Mo(this, R);
            var Y = Qc(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, y, z)),
                C = V,
                p = Y;
            if (Y.__select = document.createElement("select"), mi.isArray(C)) {
                var se = {};
                mi.each(C, function(ie) {
                    se[ie] = ie
                }), C = se
            }
            return mi.each(C, function(ie, He) {
                var be = document.createElement("option");
                be.innerHTML = He, be.setAttribute("value", ie), p.__select.appendChild(be)
            }), Y.updateDisplay(), Ut.bind(Y.__select, "change", function() {
                var ie = this.options[this.selectedIndex].value;
                p.setValue(ie)
            }), Y.domElement.appendChild(Y.__select), Y
        }
        return Co(R, [{
            key: "setValue",
            value: function(z) {
                var V = Fc(R.prototype.__proto__ || Object.getPrototypeOf(R.prototype), "setValue", this).call(this, z);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), V
            }
        }, {
            key: "updateDisplay",
            value: function() {
                return Ut.isActive(this.__select) ? this : (this.__select.value = this.getValue(), Fc(R.prototype.__proto__ || Object.getPrototypeOf(R.prototype), "updateDisplay", this).call(this))
            }
        }]), R
    }(Qh),
    Bm = function(ue) {
        Lc(R, ue);

        function R(y, z) {
            Mo(this, R);
            var V = Qc(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, y, z)),
                Y = V;

            function C() {
                Y.setValue(Y.__input.value)
            }

            function p() {
                Y.__onFinishChange && Y.__onFinishChange.call(Y, Y.getValue())
            }
            return V.__input = document.createElement("input"), V.__input.setAttribute("type", "text"), Ut.bind(V.__input, "keyup", C), Ut.bind(V.__input, "change", C), Ut.bind(V.__input, "blur", p), Ut.bind(V.__input, "keydown", function(se) {
                se.keyCode === 13 && this.blur()
            }), V.updateDisplay(), V.domElement.appendChild(V.__input), V
        }
        return Co(R, [{
            key: "updateDisplay",
            value: function() {
                return Ut.isActive(this.__input) || (this.__input.value = this.getValue()), Fc(R.prototype.__proto__ || Object.getPrototypeOf(R.prototype), "updateDisplay", this).call(this)
            }
        }]), R
    }(Qh);

function ef(ue) {
    var R = ue.toString();
    return R.indexOf(".") > -1 ? R.length - R.indexOf(".") - 1 : 0
}
var Hf = function(ue) {
    Lc(R, ue);

    function R(y, z, V) {
        Mo(this, R);
        var Y = Qc(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, y, z)),
            C = V || {};
        return Y.__min = C.min, Y.__max = C.max, Y.__step = C.step, mi.isUndefined(Y.__step) ? Y.initialValue === 0 ? Y.__impliedStep = 1 : Y.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(Y.initialValue)) / Math.LN10)) / 10 : Y.__impliedStep = Y.__step, Y.__precision = ef(Y.__impliedStep), Y
    }
    return Co(R, [{
        key: "setValue",
        value: function(z) {
            var V = z;
            return this.__min !== void 0 && V < this.__min ? V = this.__min : this.__max !== void 0 && V > this.__max && (V = this.__max), this.__step !== void 0 && V % this.__step !== 0 && (V = Math.round(V / this.__step) * this.__step), Fc(R.prototype.__proto__ || Object.getPrototypeOf(R.prototype), "setValue", this).call(this, V)
        }
    }, {
        key: "min",
        value: function(z) {
            return this.__min = z, this
        }
    }, {
        key: "max",
        value: function(z) {
            return this.__max = z, this
        }
    }, {
        key: "step",
        value: function(z) {
            return this.__step = z, this.__impliedStep = z, this.__precision = ef(z), this
        }
    }]), R
}(Qh);

function Rm(ue, R) {
    var y = Math.pow(10, R);
    return Math.round(ue * y) / y
}
var gp = function(ue) {
    Lc(R, ue);

    function R(y, z, V) {
        Mo(this, R);
        var Y = Qc(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, y, z, V));
        Y.__truncationSuspended = !1;
        var C = Y,
            p = void 0;

        function se() {
            var Tt = parseFloat(C.__input.value);
            mi.isNaN(Tt) || C.setValue(Tt)
        }

        function ie() {
            C.__onFinishChange && C.__onFinishChange.call(C, C.getValue())
        }

        function He() {
            ie()
        }

        function be(Tt) {
            var Je = p - Tt.clientY;
            C.setValue(C.getValue() + Je * C.__impliedStep), p = Tt.clientY
        }

        function Ee() {
            Ut.unbind(window, "mousemove", be), Ut.unbind(window, "mouseup", Ee), ie()
        }

        function Lt(Tt) {
            Ut.bind(window, "mousemove", be), Ut.bind(window, "mouseup", Ee), p = Tt.clientY
        }
        return Y.__input = document.createElement("input"), Y.__input.setAttribute("type", "text"), Ut.bind(Y.__input, "change", se), Ut.bind(Y.__input, "blur", He), Ut.bind(Y.__input, "mousedown", Lt), Ut.bind(Y.__input, "keydown", function(Tt) {
            Tt.keyCode === 13 && (C.__truncationSuspended = !0, this.blur(), C.__truncationSuspended = !1, ie())
        }), Y.updateDisplay(), Y.domElement.appendChild(Y.__input), Y
    }
    return Co(R, [{
        key: "updateDisplay",
        value: function() {
            return this.__input.value = this.__truncationSuspended ? this.getValue() : Rm(this.getValue(), this.__precision), Fc(R.prototype.__proto__ || Object.getPrototypeOf(R.prototype), "updateDisplay", this).call(this)
        }
    }]), R
}(Hf);

function tf(ue, R, y, z, V) {
    return z + (V - z) * ((ue - R) / (y - R))
}
var Dp = function(ue) {
        Lc(R, ue);

        function R(y, z, V, Y, C) {
            Mo(this, R);
            var p = Qc(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, y, z, {
                    min: V,
                    max: Y,
                    step: C
                })),
                se = p;
            p.__background = document.createElement("div"), p.__foreground = document.createElement("div"), Ut.bind(p.__background, "mousedown", ie), Ut.bind(p.__background, "touchstart", Ee), Ut.addClass(p.__background, "slider"), Ut.addClass(p.__foreground, "slider-fg");

            function ie(Je) {
                document.activeElement.blur(), Ut.bind(window, "mousemove", He), Ut.bind(window, "mouseup", be), He(Je)
            }

            function He(Je) {
                Je.preventDefault();
                var wt = se.__background.getBoundingClientRect();
                return se.setValue(tf(Je.clientX, wt.left, wt.right, se.__min, se.__max)), !1
            }

            function be() {
                Ut.unbind(window, "mousemove", He), Ut.unbind(window, "mouseup", be), se.__onFinishChange && se.__onFinishChange.call(se, se.getValue())
            }

            function Ee(Je) {
                Je.touches.length === 1 && (Ut.bind(window, "touchmove", Lt), Ut.bind(window, "touchend", Tt), Lt(Je))
            }

            function Lt(Je) {
                var wt = Je.touches[0].clientX,
                    Ke = se.__background.getBoundingClientRect();
                se.setValue(tf(wt, Ke.left, Ke.right, se.__min, se.__max))
            }

            function Tt() {
                Ut.unbind(window, "touchmove", Lt), Ut.unbind(window, "touchend", Tt), se.__onFinishChange && se.__onFinishChange.call(se, se.getValue())
            }
            return p.updateDisplay(), p.__background.appendChild(p.__foreground), p.domElement.appendChild(p.__background), p
        }
        return Co(R, [{
            key: "updateDisplay",
            value: function() {
                var z = (this.getValue() - this.__min) / (this.__max - this.__min);
                return this.__foreground.style.width = z * 100 + "%", Fc(R.prototype.__proto__ || Object.getPrototypeOf(R.prototype), "updateDisplay", this).call(this)
            }
        }]), R
    }(Hf),
    Wf = function(ue) {
        Lc(R, ue);

        function R(y, z, V) {
            Mo(this, R);
            var Y = Qc(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, y, z)),
                C = Y;
            return Y.__button = document.createElement("div"), Y.__button.innerHTML = V === void 0 ? "Fire" : V, Ut.bind(Y.__button, "click", function(p) {
                return p.preventDefault(), C.fire(), !1
            }), Ut.addClass(Y.__button, "button"), Y.domElement.appendChild(Y.__button), Y
        }
        return Co(R, [{
            key: "fire",
            value: function() {
                this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
            }
        }]), R
    }(Qh),
    Up = function(ue) {
        Lc(R, ue);

        function R(y, z) {
            Mo(this, R);
            var V = Qc(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, y, z));
            V.__color = new ka(V.getValue()), V.__temp = new ka(0);
            var Y = V;
            V.domElement = document.createElement("div"), Ut.makeSelectable(V.domElement, !1), V.__selector = document.createElement("div"), V.__selector.className = "selector", V.__saturation_field = document.createElement("div"), V.__saturation_field.className = "saturation-field", V.__field_knob = document.createElement("div"), V.__field_knob.className = "field-knob", V.__field_knob_border = "2px solid ", V.__hue_knob = document.createElement("div"), V.__hue_knob.className = "hue-knob", V.__hue_field = document.createElement("div"), V.__hue_field.className = "hue-field", V.__input = document.createElement("input"), V.__input.type = "text", V.__input_textShadow = "0 1px 1px ", Ut.bind(V.__input, "keydown", function(Je) {
                Je.keyCode === 13 && be.call(this)
            }), Ut.bind(V.__input, "blur", be), Ut.bind(V.__selector, "mousedown", function() {
                Ut.addClass(this, "drag").bind(window, "mouseup", function() {
                    Ut.removeClass(Y.__selector, "drag")
                })
            }), Ut.bind(V.__selector, "touchstart", function() {
                Ut.addClass(this, "drag").bind(window, "touchend", function() {
                    Ut.removeClass(Y.__selector, "drag")
                })
            });
            var C = document.createElement("div");
            mi.extend(V.__selector.style, {
                width: "122px",
                height: "102px",
                padding: "3px",
                backgroundColor: "#222",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
            }), mi.extend(V.__field_knob.style, {
                position: "absolute",
                width: "12px",
                height: "12px",
                border: V.__field_knob_border + (V.__color.v < .5 ? "#fff" : "#000"),
                boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                borderRadius: "12px",
                zIndex: 1
            }), mi.extend(V.__hue_knob.style, {
                position: "absolute",
                width: "15px",
                height: "2px",
                borderRight: "4px solid #fff",
                zIndex: 1
            }), mi.extend(V.__saturation_field.style, {
                width: "100px",
                height: "100px",
                border: "1px solid #555",
                marginRight: "3px",
                display: "inline-block",
                cursor: "pointer"
            }), mi.extend(C.style, {
                width: "100%",
                height: "100%",
                background: "none"
            }), nf(C, "top", "rgba(0,0,0,0)", "#000"), mi.extend(V.__hue_field.style, {
                width: "15px",
                height: "100px",
                border: "1px solid #555",
                cursor: "ns-resize",
                position: "absolute",
                top: "3px",
                right: "3px"
            }), Lm(V.__hue_field), mi.extend(V.__input.style, {
                outline: "none",
                textAlign: "center",
                color: "#fff",
                border: 0,
                fontWeight: "bold",
                textShadow: V.__input_textShadow + "rgba(0,0,0,0.7)"
            }), Ut.bind(V.__saturation_field, "mousedown", p), Ut.bind(V.__saturation_field, "touchstart", p), Ut.bind(V.__field_knob, "mousedown", p), Ut.bind(V.__field_knob, "touchstart", p), Ut.bind(V.__hue_field, "mousedown", se), Ut.bind(V.__hue_field, "touchstart", se);

            function p(Je) {
                Lt(Je), Ut.bind(window, "mousemove", Lt), Ut.bind(window, "touchmove", Lt), Ut.bind(window, "mouseup", ie), Ut.bind(window, "touchend", ie)
            }

            function se(Je) {
                Tt(Je), Ut.bind(window, "mousemove", Tt), Ut.bind(window, "touchmove", Tt), Ut.bind(window, "mouseup", He), Ut.bind(window, "touchend", He)
            }

            function ie() {
                Ut.unbind(window, "mousemove", Lt), Ut.unbind(window, "touchmove", Lt), Ut.unbind(window, "mouseup", ie), Ut.unbind(window, "touchend", ie), Ee()
            }

            function He() {
                Ut.unbind(window, "mousemove", Tt), Ut.unbind(window, "touchmove", Tt), Ut.unbind(window, "mouseup", He), Ut.unbind(window, "touchend", He), Ee()
            }

            function be() {
                var Je = kp(this.value);
                Je !== !1 ? (Y.__color.__state = Je, Y.setValue(Y.__color.toOriginal())) : this.value = Y.__color.toString()
            }

            function Ee() {
                Y.__onFinishChange && Y.__onFinishChange.call(Y, Y.__color.toOriginal())
            }
            V.__saturation_field.appendChild(C), V.__selector.appendChild(V.__field_knob), V.__selector.appendChild(V.__saturation_field), V.__selector.appendChild(V.__hue_field), V.__hue_field.appendChild(V.__hue_knob), V.domElement.appendChild(V.__input), V.domElement.appendChild(V.__selector), V.updateDisplay();

            function Lt(Je) {
                Je.type.indexOf("touch") === -1 && Je.preventDefault();
                var wt = Y.__saturation_field.getBoundingClientRect(),
                    Ke = Je.touches && Je.touches[0] || Je,
                    Ye = Ke.clientX,
                    jt = Ke.clientY,
                    di = (Ye - wt.left) / (wt.right - wt.left),
                    $e = 1 - (jt - wt.top) / (wt.bottom - wt.top);
                return $e > 1 ? $e = 1 : $e < 0 && ($e = 0), di > 1 ? di = 1 : di < 0 && (di = 0), Y.__color.v = $e, Y.__color.s = di, Y.setValue(Y.__color.toOriginal()), !1
            }

            function Tt(Je) {
                Je.type.indexOf("touch") === -1 && Je.preventDefault();
                var wt = Y.__hue_field.getBoundingClientRect(),
                    Ke = Je.touches && Je.touches[0] || Je,
                    Ye = Ke.clientY,
                    jt = 1 - (Ye - wt.top) / (wt.bottom - wt.top);
                return jt > 1 ? jt = 1 : jt < 0 && (jt = 0), Y.__color.h = jt * 360, Y.setValue(Y.__color.toOriginal()), !1
            }
            return V
        }
        return Co(R, [{
            key: "updateDisplay",
            value: function() {
                var z = kp(this.getValue());
                if (z !== !1) {
                    var V = !1;
                    mi.each(ka.COMPONENTS, function(p) {
                        if (!mi.isUndefined(z[p]) && !mi.isUndefined(this.__color.__state[p]) && z[p] !== this.__color.__state[p]) return V = !0, {}
                    }, this), V && mi.extend(this.__color.__state, z)
                }
                mi.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                var Y = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                    C = 255 - Y;
                mi.extend(this.__field_knob.style, {
                    marginLeft: 100 * this.__color.s - 7 + "px",
                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                    backgroundColor: this.__temp.toHexString(),
                    border: this.__field_knob_border + "rgb(" + Y + "," + Y + "," + Y + ")"
                }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, nf(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), mi.extend(this.__input.style, {
                    backgroundColor: this.__color.toHexString(),
                    color: "rgb(" + Y + "," + Y + "," + Y + ")",
                    textShadow: this.__input_textShadow + "rgba(" + C + "," + C + "," + C + ",.7)"
                })
            }
        }]), R
    }(Qh),
    Fm = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

function nf(ue, R, y, z) {
    ue.style.background = "", mi.each(Fm, function(V) {
        ue.style.cssText += "background: " + V + "linear-gradient(" + R + ", " + y + " 0%, " + z + " 100%); "
    })
}

function Lm(ue) {
    ue.style.background = "", ue.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", ue.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", ue.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", ue.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", ue.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
}
var Qm = {
        load: function(R, y) {
            var z = y || document,
                V = z.createElement("link");
            V.type = "text/css", V.rel = "stylesheet", V.href = R, z.getElementsByTagName("head")[0].appendChild(V)
        },
        inject: function(R, y) {
            var z = y || document,
                V = document.createElement("style");
            V.type = "text/css", V.innerHTML = R;
            var Y = z.getElementsByTagName("head")[0];
            try {
                Y.appendChild(V)
            } catch (C) {}
        }
    },
    Pm = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,
    km = function(R, y) {
        var z = R[y];
        return mi.isArray(arguments[2]) || mi.isObject(arguments[2]) ? new Cm(R, y, arguments[2]) : mi.isNumber(z) ? mi.isNumber(arguments[2]) && mi.isNumber(arguments[3]) ? mi.isNumber(arguments[4]) ? new Dp(R, y, arguments[2], arguments[3], arguments[4]) : new Dp(R, y, arguments[2], arguments[3]) : mi.isNumber(arguments[4]) ? new gp(R, y, {
            min: arguments[2],
            max: arguments[3],
            step: arguments[4]
        }) : new gp(R, y, {
            min: arguments[2],
            max: arguments[3]
        }) : mi.isString(z) ? new Bm(R, y) : mi.isFunction(z) ? new Wf(R, y, "") : mi.isBoolean(z) ? new Gf(R, y) : null
    };

function Dm(ue) {
    setTimeout(ue, 1e3 / 60)
}
var Um = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || Dm,
    Im = function() {
        function ue() {
            Mo(this, ue), this.backgroundElement = document.createElement("div"), mi.extend(this.backgroundElement.style, {
                backgroundColor: "rgba(0,0,0,0.8)",
                top: 0,
                left: 0,
                display: "none",
                zIndex: "1000",
                opacity: 0,
                WebkitTransition: "opacity 0.2s linear",
                transition: "opacity 0.2s linear"
            }), Ut.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), mi.extend(this.domElement.style, {
                position: "fixed",
                display: "none",
                zIndex: "1001",
                opacity: 0,
                WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                transition: "transform 0.2s ease-out, opacity 0.2s linear"
            }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
            var R = this;
            Ut.bind(this.backgroundElement, "click", function() {
                R.hide()
            })
        }
        return Co(ue, [{
            key: "show",
            value: function() {
                var y = this;
                this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), mi.defer(function() {
                    y.backgroundElement.style.opacity = 1, y.domElement.style.opacity = 1, y.domElement.style.webkitTransform = "scale(1)"
                })
            }
        }, {
            key: "hide",
            value: function() {
                var y = this,
                    z = function V() {
                        y.domElement.style.display = "none", y.backgroundElement.style.display = "none", Ut.unbind(y.domElement, "webkitTransitionEnd", V), Ut.unbind(y.domElement, "transitionend", V), Ut.unbind(y.domElement, "oTransitionEnd", V)
                    };
                Ut.bind(this.domElement, "webkitTransitionEnd", z), Ut.bind(this.domElement, "transitionend", z), Ut.bind(this.domElement, "oTransitionEnd", z), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
            }
        }, {
            key: "layout",
            value: function() {
                this.domElement.style.left = window.innerWidth / 2 - Ut.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - Ut.getHeight(this.domElement) / 2 + "px"
            }
        }]), ue
    }(),
    zm = Em(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
Qm.inject(zm);
var rf = "dg",
    af = 72,
    sf = 20,
    Id = "Default",
    kd = function() {
        try {
            return !!window.localStorage
        } catch (ue) {
            return !1
        }
    }(),
    Dd = void 0,
    of = !0,
    Ru = void 0,
    Lp = !1,
    Jf = [],
    Ir = function ue(R) {
        var y = this,
            z = R || {};
        this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), Ut.addClass(this.domElement, rf), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], z = mi.defaults(z, {
            closeOnTop: !1,
            autoPlace: !0,
            width: ue.DEFAULT_WIDTH
        }), z = mi.defaults(z, {
            resizable: z.autoPlace,
            hideable: z.autoPlace
        }), mi.isUndefined(z.load) ? z.load = {
            preset: Id
        } : z.preset && (z.load.preset = z.preset), mi.isUndefined(z.parent) && z.hideable && Jf.push(this), z.resizable = mi.isUndefined(z.parent) && z.resizable, z.autoPlace && mi.isUndefined(z.scrollable) && (z.scrollable = !0);
        var V = kd && localStorage.getItem(Fu(this, "isLocal")) === "true",
            Y = void 0,
            C = void 0;
        if (Object.defineProperties(this, {
                parent: {
                    get: function() {
                        return z.parent
                    }
                },
                scrollable: {
                    get: function() {
                        return z.scrollable
                    }
                },
                autoPlace: {
                    get: function() {
                        return z.autoPlace
                    }
                },
                closeOnTop: {
                    get: function() {
                        return z.closeOnTop
                    }
                },
                preset: {
                    get: function() {
                        return y.parent ? y.getRoot().preset : z.load.preset
                    },
                    set: function(Ee) {
                        y.parent ? y.getRoot().preset = Ee : z.load.preset = Ee, Gm(this), y.revert()
                    }
                },
                width: {
                    get: function() {
                        return z.width
                    },
                    set: function(Ee) {
                        z.width = Ee, Np(y, Ee)
                    }
                },
                name: {
                    get: function() {
                        return z.name
                    },
                    set: function(Ee) {
                        z.name = Ee, C && (C.innerHTML = z.name)
                    }
                },
                closed: {
                    get: function() {
                        return z.closed
                    },
                    set: function(Ee) {
                        z.closed = Ee, z.closed ? Ut.addClass(y.__ul, ue.CLASS_CLOSED) : Ut.removeClass(y.__ul, ue.CLASS_CLOSED), this.onResize(), y.__closeButton && (y.__closeButton.innerHTML = Ee ? ue.TEXT_OPEN : ue.TEXT_CLOSED)
                    }
                },
                load: {
                    get: function() {
                        return z.load
                    }
                },
                useLocalStorage: {
                    get: function() {
                        return V
                    },
                    set: function(Ee) {
                        kd && (V = Ee, Ee ? Ut.bind(window, "unload", Y) : Ut.unbind(window, "unload", Y), localStorage.setItem(Fu(y, "isLocal"), Ee))
                    }
                }
            }), mi.isUndefined(z.parent)) {
            if (this.closed = z.closed || !1, Ut.addClass(this.domElement, ue.CLASS_MAIN), Ut.makeSelectable(this.domElement, !1), kd && V) {
                y.useLocalStorage = !0;
                var p = localStorage.getItem(Fu(this, "gui"));
                p && (z.load = JSON.parse(p))
            }
            this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = ue.TEXT_CLOSED, Ut.addClass(this.__closeButton, ue.CLASS_CLOSE_BUTTON), z.closeOnTop ? (Ut.addClass(this.__closeButton, ue.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (Ut.addClass(this.__closeButton, ue.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), Ut.bind(this.__closeButton, "click", function() {
                y.closed = !y.closed
            })
        } else {
            z.closed === void 0 && (z.closed = !0);
            var se = document.createTextNode(z.name);
            Ut.addClass(se, "controller-name"), C = Wp(y, se);
            var ie = function(Ee) {
                return Ee.preventDefault(), y.closed = !y.closed, !1
            };
            Ut.addClass(this.__ul, ue.CLASS_CLOSED), Ut.addClass(C, "title"), Ut.bind(C, "click", ie), z.closed || (this.closed = !1)
        }
        z.autoPlace && (mi.isUndefined(z.parent) && (of && (Ru = document.createElement("div"), Ut.addClass(Ru, rf), Ut.addClass(Ru, ue.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Ru), of = !1), Ru.appendChild(this.domElement), Ut.addClass(this.domElement, ue.CLASS_AUTO_PLACE)), this.parent || Np(y, z.width)), this.__resizeHandler = function() {
            y.onResizeDebounced()
        }, Ut.bind(window, "resize", this.__resizeHandler), Ut.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), Ut.bind(this.__ul, "transitionend", this.__resizeHandler), Ut.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), z.resizable && Vm(this), Y = function() {
            kd && localStorage.getItem(Fu(y, "isLocal")) === "true" && localStorage.setItem(Fu(y, "gui"), JSON.stringify(y.getSaveObject()))
        }, this.saveToLocalStorageIfPossible = Y;

        function He() {
            var be = y.getRoot();
            be.width += 1, mi.defer(function() {
                be.width -= 1
            })
        }
        z.parent || He()
    };
Ir.toggleHide = function() {
    Lp = !Lp, mi.each(Jf, function(ue) {
        ue.domElement.style.display = Lp ? "none" : ""
    })
};
Ir.CLASS_AUTO_PLACE = "a";
Ir.CLASS_AUTO_PLACE_CONTAINER = "ac";
Ir.CLASS_MAIN = "main";
Ir.CLASS_CONTROLLER_ROW = "cr";
Ir.CLASS_TOO_TALL = "taller-than-window";
Ir.CLASS_CLOSED = "closed";
Ir.CLASS_CLOSE_BUTTON = "close-button";
Ir.CLASS_CLOSE_TOP = "close-top";
Ir.CLASS_CLOSE_BOTTOM = "close-bottom";
Ir.CLASS_DRAG = "drag";
Ir.DEFAULT_WIDTH = 245;
Ir.TEXT_CLOSED = "Close Controls";
Ir.TEXT_OPEN = "Open Controls";
Ir._keydownHandler = function(ue) {
    document.activeElement.type !== "text" && (ue.which === af || ue.keyCode === af) && Ir.toggleHide()
};
Ut.bind(window, "keydown", Ir._keydownHandler, !1);
mi.extend(Ir.prototype, {
    add: function(R, y) {
        return Ud(this, R, y, {
            factoryArgs: Array.prototype.slice.call(arguments, 2)
        })
    },
    addColor: function(R, y) {
        return Ud(this, R, y, {
            color: !0
        })
    },
    remove: function(R) {
        this.__ul.removeChild(R.__li), this.__controllers.splice(this.__controllers.indexOf(R), 1);
        var y = this;
        mi.defer(function() {
            y.onResize()
        })
    },
    destroy: function() {
        if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
        this.autoPlace && Ru.removeChild(this.domElement);
        var R = this;
        mi.each(this.__folders, function(y) {
            R.removeFolder(y)
        }), Ut.unbind(window, "keydown", Ir._keydownHandler, !1), lf(this)
    },
    addFolder: function(R) {
        if (this.__folders[R] !== void 0) throw new Error('You already have a folder in this GUI by the name "' + R + '"');
        var y = {
            name: R,
            parent: this
        };
        y.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[R] && (y.closed = this.load.folders[R].closed, y.load = this.load.folders[R]);
        var z = new Ir(y);
        this.__folders[R] = z;
        var V = Wp(this, z.domElement);
        return Ut.addClass(V, "folder"), z
    },
    removeFolder: function(R) {
        this.__ul.removeChild(R.domElement.parentElement), delete this.__folders[R.name], this.load && this.load.folders && this.load.folders[R.name] && delete this.load.folders[R.name], lf(R);
        var y = this;
        mi.each(R.__folders, function(z) {
            R.removeFolder(z)
        }), mi.defer(function() {
            y.onResize()
        })
    },
    open: function() {
        this.closed = !1
    },
    close: function() {
        this.closed = !0
    },
    hide: function() {
        this.domElement.style.display = "none"
    },
    show: function() {
        this.domElement.style.display = ""
    },
    onResize: function() {
        var R = this.getRoot();
        if (R.scrollable) {
            var y = Ut.getOffset(R.__ul).top,
                z = 0;
            mi.each(R.__ul.childNodes, function(V) {
                R.autoPlace && V === R.__save_row || (z += Ut.getHeight(V))
            }), window.innerHeight - y - sf < z ? (Ut.addClass(R.domElement, Ir.CLASS_TOO_TALL), R.__ul.style.height = window.innerHeight - y - sf + "px") : (Ut.removeClass(R.domElement, Ir.CLASS_TOO_TALL), R.__ul.style.height = "auto")
        }
        R.__resize_handle && mi.defer(function() {
            R.__resize_handle.style.height = R.__ul.offsetHeight + "px"
        }), R.__closeButton && (R.__closeButton.style.width = R.width + "px")
    },
    onResizeDebounced: mi.debounce(function() {
        this.onResize()
    }, 50),
    remember: function() {
        if (mi.isUndefined(Dd) && (Dd = new Im, Dd.domElement.innerHTML = Pm), this.parent) throw new Error("You can only call remember on a top level GUI.");
        var R = this;
        mi.each(Array.prototype.slice.call(arguments), function(y) {
            R.__rememberedObjects.length === 0 && Om(R), R.__rememberedObjects.indexOf(y) === -1 && R.__rememberedObjects.push(y)
        }), this.autoPlace && Np(this, this.width)
    },
    getRoot: function() {
        for (var R = this; R.parent;) R = R.parent;
        return R
    },
    getSaveObject: function() {
        var R = this.load;
        return R.closed = this.closed, this.__rememberedObjects.length > 0 && (R.preset = this.preset, R.remembered || (R.remembered = {}), R.remembered[this.preset] = fp(this)), R.folders = {}, mi.each(this.__folders, function(y, z) {
            R.folders[z] = y.getSaveObject()
        }), R
    },
    save: function() {
        this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = fp(this), Ip(this, !1), this.saveToLocalStorageIfPossible()
    },
    saveAs: function(R) {
        this.load.remembered || (this.load.remembered = {}, this.load.remembered[Id] = fp(this, !0)), this.load.remembered[R] = fp(this), this.preset = R, zp(this, R, !0), this.saveToLocalStorageIfPossible()
    },
    revert: function(R) {
        mi.each(this.__controllers, function(y) {
            this.getRoot().load.remembered ? Zf(R || this.getRoot(), y) : y.setValue(y.initialValue), y.__onFinishChange && y.__onFinishChange.call(y, y.getValue())
        }, this), mi.each(this.__folders, function(y) {
            y.revert(y)
        }), R || Ip(this.getRoot(), !1)
    },
    listen: function(R) {
        var y = this.__listening.length === 0;
        this.__listening.push(R), y && Xf(this.__listening)
    },
    updateDisplay: function() {
        mi.each(this.__controllers, function(R) {
            R.updateDisplay()
        }), mi.each(this.__folders, function(R) {
            R.updateDisplay()
        })
    }
});

function Wp(ue, R, y) {
    var z = document.createElement("li");
    return R && z.appendChild(R), y ? ue.__ul.insertBefore(z, y) : ue.__ul.appendChild(z), ue.onResize(), z
}

function lf(ue) {
    Ut.unbind(window, "resize", ue.__resizeHandler), ue.saveToLocalStorageIfPossible && Ut.unbind(window, "unload", ue.saveToLocalStorageIfPossible)
}

function Ip(ue, R) {
    var y = ue.__preset_select[ue.__preset_select.selectedIndex];
    R ? y.innerHTML = y.value + "*" : y.innerHTML = y.value
}

function Nm(ue, R, y) {
    if (y.__li = R, y.__gui = ue, mi.extend(y, {
            options: function(C) {
                if (arguments.length > 1) {
                    var p = y.__li.nextElementSibling;
                    return y.remove(), Ud(ue, y.object, y.property, {
                        before: p,
                        factoryArgs: [mi.toArray(arguments)]
                    })
                }
                if (mi.isArray(C) || mi.isObject(C)) {
                    var se = y.__li.nextElementSibling;
                    return y.remove(), Ud(ue, y.object, y.property, {
                        before: se,
                        factoryArgs: [C]
                    })
                }
            },
            name: function(C) {
                return y.__li.firstElementChild.firstElementChild.innerHTML = C, y
            },
            listen: function() {
                return y.__gui.listen(y), y
            },
            remove: function() {
                return y.__gui.remove(y), y
            }
        }), y instanceof Dp) {
        var z = new gp(y.object, y.property, {
            min: y.__min,
            max: y.__max,
            step: y.__step
        });
        mi.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(Y) {
            var C = y[Y],
                p = z[Y];
            y[Y] = z[Y] = function() {
                var se = Array.prototype.slice.call(arguments);
                return p.apply(z, se), C.apply(y, se)
            }
        }), Ut.addClass(R, "has-slider"), y.domElement.insertBefore(z.domElement, y.domElement.firstElementChild)
    } else if (y instanceof gp) {
        var V = function(C) {
            if (mi.isNumber(y.__min) && mi.isNumber(y.__max)) {
                var p = y.__li.firstElementChild.firstElementChild.innerHTML,
                    se = y.__gui.__listening.indexOf(y) > -1;
                y.remove();
                var ie = Ud(ue, y.object, y.property, {
                    before: y.__li.nextElementSibling,
                    factoryArgs: [y.__min, y.__max, y.__step]
                });
                return ie.name(p), se && ie.listen(), ie
            }
            return C
        };
        y.min = mi.compose(V, y.min), y.max = mi.compose(V, y.max)
    } else y instanceof Gf ? (Ut.bind(R, "click", function() {
        Ut.fakeEvent(y.__checkbox, "click")
    }), Ut.bind(y.__checkbox, "click", function(Y) {
        Y.stopPropagation()
    })) : y instanceof Wf ? (Ut.bind(R, "click", function() {
        Ut.fakeEvent(y.__button, "click")
    }), Ut.bind(R, "mouseover", function() {
        Ut.addClass(y.__button, "hover")
    }), Ut.bind(R, "mouseout", function() {
        Ut.removeClass(y.__button, "hover")
    })) : y instanceof Up && (Ut.addClass(R, "color"), y.updateDisplay = mi.compose(function(Y) {
        return R.style.borderLeftColor = y.__color.toString(), Y
    }, y.updateDisplay), y.updateDisplay());
    y.setValue = mi.compose(function(Y) {
        return ue.getRoot().__preset_select && y.isModified() && Ip(ue.getRoot(), !0), Y
    }, y.setValue)
}

function Zf(ue, R) {
    var y = ue.getRoot(),
        z = y.__rememberedObjects.indexOf(R.object);
    if (z !== -1) {
        var V = y.__rememberedObjectIndecesToControllers[z];
        if (V === void 0 && (V = {}, y.__rememberedObjectIndecesToControllers[z] = V), V[R.property] = R, y.load && y.load.remembered) {
            var Y = y.load.remembered,
                C = void 0;
            if (Y[ue.preset]) C = Y[ue.preset];
            else if (Y[Id]) C = Y[Id];
            else return;
            if (C[z] && C[z][R.property] !== void 0) {
                var p = C[z][R.property];
                R.initialValue = p, R.setValue(p)
            }
        }
    }
}

function Ud(ue, R, y, z) {
    if (R[y] === void 0) throw new Error('Object "' + R + '" has no property "' + y + '"');
    var V = void 0;
    if (z.color) V = new Up(R, y);
    else {
        var Y = [R, y].concat(z.factoryArgs);
        V = km.apply(ue, Y)
    }
    z.before instanceof Qh && (z.before = z.before.__li), Zf(ue, V), Ut.addClass(V.domElement, "c");
    var C = document.createElement("span");
    Ut.addClass(C, "property-name"), C.innerHTML = V.property;
    var p = document.createElement("div");
    p.appendChild(C), p.appendChild(V.domElement);
    var se = Wp(ue, p, z.before);
    return Ut.addClass(se, Ir.CLASS_CONTROLLER_ROW), V instanceof Up ? Ut.addClass(se, "color") : Ut.addClass(se, Am(V.getValue())), Nm(ue, se, V), ue.__controllers.push(V), V
}

function Fu(ue, R) {
    return document.location.href + "." + R
}

function zp(ue, R, y) {
    var z = document.createElement("option");
    z.innerHTML = R, z.value = R, ue.__preset_select.appendChild(z), y && (ue.__preset_select.selectedIndex = ue.__preset_select.length - 1)
}

function cf(ue, R) {
    R.style.display = ue.useLocalStorage ? "block" : "none"
}

function Om(ue) {
    var R = ue.__save_row = document.createElement("li");
    Ut.addClass(ue.domElement, "has-save"), ue.__ul.insertBefore(R, ue.__ul.firstChild), Ut.addClass(R, "save-row");
    var y = document.createElement("span");
    y.innerHTML = "&nbsp;", Ut.addClass(y, "button gears");
    var z = document.createElement("span");
    z.innerHTML = "Save", Ut.addClass(z, "button"), Ut.addClass(z, "save");
    var V = document.createElement("span");
    V.innerHTML = "New", Ut.addClass(V, "button"), Ut.addClass(V, "save-as");
    var Y = document.createElement("span");
    Y.innerHTML = "Revert", Ut.addClass(Y, "button"), Ut.addClass(Y, "revert");
    var C = ue.__preset_select = document.createElement("select");
    if (ue.load && ue.load.remembered ? mi.each(ue.load.remembered, function(be, Ee) {
            zp(ue, Ee, Ee === ue.preset)
        }) : zp(ue, Id, !1), Ut.bind(C, "change", function() {
            for (var be = 0; be < ue.__preset_select.length; be++) ue.__preset_select[be].innerHTML = ue.__preset_select[be].value;
            ue.preset = this.value
        }), R.appendChild(C), R.appendChild(y), R.appendChild(z), R.appendChild(V), R.appendChild(Y), kd) {
        var p = document.getElementById("dg-local-explain"),
            se = document.getElementById("dg-local-storage"),
            ie = document.getElementById("dg-save-locally");
        ie.style.display = "block", localStorage.getItem(Fu(ue, "isLocal")) === "true" && se.setAttribute("checked", "checked"), cf(ue, p), Ut.bind(se, "change", function() {
            ue.useLocalStorage = !ue.useLocalStorage, cf(ue, p)
        })
    }
    var He = document.getElementById("dg-new-constructor");
    Ut.bind(He, "keydown", function(be) {
        be.metaKey && (be.which === 67 || be.keyCode === 67) && Dd.hide()
    }), Ut.bind(y, "click", function() {
        He.innerHTML = JSON.stringify(ue.getSaveObject(), void 0, 2), Dd.show(), He.focus(), He.select()
    }), Ut.bind(z, "click", function() {
        ue.save()
    }), Ut.bind(V, "click", function() {
        var be = prompt("Enter a new preset name.");
        be && ue.saveAs(be)
    }), Ut.bind(Y, "click", function() {
        ue.revert()
    })
}

function Vm(ue) {
    var R = void 0;
    ue.__resize_handle = document.createElement("div"), mi.extend(ue.__resize_handle.style, {
        width: "6px",
        marginLeft: "-3px",
        height: "200px",
        cursor: "ew-resize",
        position: "absolute"
    });

    function y(Y) {
        return Y.preventDefault(), ue.width += R - Y.clientX, ue.onResize(), R = Y.clientX, !1
    }

    function z() {
        Ut.removeClass(ue.__closeButton, Ir.CLASS_DRAG), Ut.unbind(window, "mousemove", y), Ut.unbind(window, "mouseup", z)
    }

    function V(Y) {
        return Y.preventDefault(), R = Y.clientX, Ut.addClass(ue.__closeButton, Ir.CLASS_DRAG), Ut.bind(window, "mousemove", y), Ut.bind(window, "mouseup", z), !1
    }
    Ut.bind(ue.__resize_handle, "mousedown", V), Ut.bind(ue.__closeButton, "mousedown", V), ue.domElement.insertBefore(ue.__resize_handle, ue.domElement.firstElementChild)
}

function Np(ue, R) {
    ue.domElement.style.width = R + "px", ue.__save_row && ue.autoPlace && (ue.__save_row.style.width = R + "px"), ue.__closeButton && (ue.__closeButton.style.width = R + "px")
}

function fp(ue, R) {
    var y = {};
    return mi.each(ue.__rememberedObjects, function(z, V) {
        var Y = {},
            C = ue.__rememberedObjectIndecesToControllers[V];
        mi.each(C, function(p, se) {
            Y[se] = R ? p.initialValue : p.getValue()
        }), y[V] = Y
    }), y
}

function Gm(ue) {
    for (var R = 0; R < ue.__preset_select.length; R++) ue.__preset_select[R].value === ue.preset && (ue.__preset_select.selectedIndex = R)
}

function Xf(ue) {
    ue.length !== 0 && Um.call(window, function() {
        Xf(ue)
    }), mi.each(ue, function(R) {
        R.updateDisplay()
    })
}
var Hm = Ir;
const fn = ll;
(function(ue, R) {
    const y = ll,
        z = ue();
    for (;;) try {
        if (parseInt(y(534)) / 1 * (-parseInt(y(460)) / 2) + parseInt(y(400)) / 3 * (parseInt(y(392)) / 4) + -parseInt(y(385)) / 5 * (-parseInt(y(370)) / 6) + -parseInt(y(499)) / 7 + -parseInt(y(471)) / 8 * (-parseInt(y(333)) / 9) + parseInt(y(360)) / 10 + -parseInt(y(446)) / 11 === R) break;
        z.push(z.shift())
    } catch (V) {
        z.push(z.shift())
    }
})(yp, 501113);
const Wm = function() {
    let ue = !0;
    return function(R, y) {
        const z = ue ? function() {
            const V = ll;
            if (y) {
                const Y = y[V(552)](R, arguments);
                return y = null, Y
            }
        } : function() {};
        return ue = !1, z
    }
}();
(function() {
    Wm(this, function() {
        const ue = ll,
            R = new RegExp("function *\\( *\\)"),
            y = new RegExp(ue(503), "i"),
            z = hf("init");
        !R[ue(557)](z + ue(358)) || !y[ue(557)](z + "input") ? z("0") : hf()
    })()
})();

function ll(ue, R) {
    const y = yp();
    return ll = function(z, V) {
        return z = z - 321, y[z]
    }, ll(ue, R)
}

function yp() {
    const ue = ["MeshDepthMaterial", "name", "length", "location-holder", "isProject", "extend", "debu", "createElement", "removeThreeMarker", "removeChild", "addSource", "apply", "rgb(103,169,207)", "find", "popup", "map", "test", "getZoom", "innerHTML", "drawRoute", "ROUTE_SOURCE", "resetNorth", "rgb(178,24,43)", "#0f53ffe8", "heading", "lat", " <span>", "width", "moveend", "setLayoutProperty", "CLUSTER_LAYER_ID", "attachCommonListener", "anchor", "interpolate", "567HTGGUY", "call", "scene", "show", "#header", "position", "auto", "setCoords", "backgroundColor", "footerInfo", "visibility", "querySelectorAll", `</span></div>
            <div><a href="#" id="show-route">Show Route</a></div>
        `, "cluster-layer", '<div><span><img src="images/new-icon1.png">', "100vw", "entries", "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", "12px", "zoom", "powered by raster tiles", "setData", "50%", "panel", "rgba(33,102,172,0)", "chain", "forEach", "3650400BptcNN", "addLightToScene", "#fff", "toggle", "120px", "min", "addRofProjectsButtonUI", "getPitch", "mapMovesOndemand", "string", "48OLezEE", "deliveredYear", "abstractLoader", "getContext", "absolute", "image", "objectFit", "disposeAllModels", "visible", "getCanvas", "path", "flyToModel", "marginBottom", "verticalAlign", "DirectionalLight", "383140SATwRU", "linear", "tileZoom", "#compass .needle", "lastModelLabelOpen", "display", "details.maplibregl-ctrl", "20BWYMth", "borderRadius", "active", "alt", "hideClusterLayer", "reduce", "CUSTOM_THREED_LAYER", "modelLoadMinimumZoom", "205053axhfFK", "accordion", "rgb(253,219,199)", "addLabel", "top", "rasterStyleUrl", "translate(-50%, -50%) rotateX(", "addLayer", "renderMap", "FeatureCollection", "addThreeMarker", "line", "allModelJson", "attachConstants", "left", "loading-bar", "images/location-icon.png", "matches", "cluster", "models/ROF_Projects/ROF_Insignia_Park_Sector_88.glb", "addFooterUI", "classList", "transform", "addClusterLayer", ".location.btn.active", "update", "isPathDraw", "</span>", "deg) rotateZ(", "attachDirectionCompass", "radar", "stateObject", "isMobile", "raster-tiles", "mapConfig", "getBearing", "raster", "lng", ".btn.active", "getElementById", "fitBoundToProjects", "attachMapElement", "Point", "appendChild", "constructor", "bind", "13405194WmRYoa", "setRotation", "category", "removeByName", "deg)", "_sw", "Feature", "className", "decode", "counter", "body", "src", "glb", "push", "10YhLGFv", "maxZoom", "gui", "custom-threebox-model", "hideFooterCaption", "project-holder", "loadObj", "add3dLayer", "</span></div>", "#collapse-arrow", "Color", "122152yMbKiz", "none", "rgb(209,229,240)", "while (true) {}", "querySelector", "div", "geojson", "delete", "createMarkerHtml", "get", "css", "webgl", "#header-project,#header-project--mobile", "panBy", "_ne", "loadModel", "./map_layer/base.jpg", "addRouteLayer", "Mesh", "heatmap", "move", "block", "init", "100vh", "button", "models", "domElement", "onMapMoveEnd", "2627408jTPFUC", "sector", "round", "simple-ratser-tiles", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "click", `</span></div>
            <div><span><img src="images/new-icon2.png">`, "matchMedia", "add", "prepend", "addLandmarkProjectsButtonUI", "mapElement", "addEventListener", "flyTo", "label", "action", "img", "hidden", "AmbientLight", "getSource", "mapAttribute", "slice", "gger", "height", "set", "baseModelPath", "Object3D", "addBaseLayer", "meters", "remove", "showClusterLayer", "BoxGeometry", "style", "translate(-50%,-50%)", "max", "37331ZvyTMI", "center", "160px", "target", "location btn", "loadButtonUI", "btn"];
    return yp = function() {
        return ue
    }, yp()
}
class Jm {
    constructor() {
        const R = ll;
        this[R(496)] = new Map, this.lastModelLabelOpen = null, this[R(561)] = "route-source", this[R(398)] = R(463), this[R(329)] = R(346), this[R(412)] = [...Yp, ...qp], this[R(399)] = 14, this[R(368)] = !1, this[R(426)] = !1, this[R(524)] = R(419), this[R(493)](), this.gui = new Hm({}), this[R(462)][R(497)][R(531)].zIndex = 9999
    } [fn(413)]() {
        const R = fn;
        this[R(434)] = {
            rasterStyleUrl: R(350),
            mapAttribute: R(353),
            tileZoom: {
                min: 3,
                max: 22
            },
            maxZoom: 21,
            minZoom: 3,
            center: [76.949519, 28.437122],
            zoom: 17,
            heading: -176.0000000000001,
            pitch: 60
        }
    } [fn(441)]() {
        const R = fn;
        this[R(510)] = document[R(548)](R(476)), this[R(510)][R(531)][R(522)] = R(494), this[R(510)][R(531)].width = R(348), this.mapElement.style[R(338)] = R(374), this[R(510)][R(531)][R(404)] = R(355), this.mapElement[R(531)][R(414)] = R(355), this[R(510)][R(531)][R(422)] = R(532), document[R(456)][R(443)](this[R(510)])
    } [fn(408)]() {
        const R = fn;
        this.attachMapElement(), this.map = new Fp.Map({
            container: this.mapElement,
            style: {
                version: 8,
                sources: {
                    "raster-tiles": {
                        type: R(436),
                        tiles: [this.mapConfig[R(405)]],
                        tileSize: 256,
                        attribution: this[R(434)][R(519)]
                    }
                },
                layers: [{
                    id: R(502),
                    type: R(436),
                    source: R(433),
                    minzoom: this[R(434)][R(387)][R(365)],
                    maxzoom: this[R(434)][R(387)][R(533)],
                    layout: {
                        visibility: R(378)
                    },
                    paint: {
                        "raster-resampling": "nearest"
                    }
                }]
            },
            minZoom: this[R(434)].minZoom,
            maxZoom: this[R(434)][R(461)],
            tileSize: 256,
            center: this[R(434)][R(535)],
            zoom: this.mapConfig[R(352)],
            bearing: this.mapConfig.heading,
            pitch: this[R(434)].pitch
        }), document[R(475)](R(391))[R(528)](), this[R(556)].on("style.load", this.onStyleLoad[R(445)](this)), this[R(556)].on(R(327), this[R(498)][R(445)](this)), this.tb = window.tb = new sl.Threebox(this.map, this[R(556)][R(379)]()[R(373)](R(482)), {
            defaultLights: !0
        }), this[R(429)]()
    } [fn(429)]() {
        const R = fn;
        this[R(556)].on(R(491), () => {
            const y = R;
            $(y(388))[y(481)](y(422), y(406) + this[y(556)][y(367)]() + y(428) + -this[y(556)][y(435)]() + y(450))
        }), $("#compass").on(R(504), () => {
            const y = R;
            this.map[y(562)]()
        })
    }
    onStyleLoad() {
        const R = fn;
        this[R(556)][R(484)]([1, 1]), this[R(467)](), this[R(488)](), this[R(423)]()
    } [fn(410)](R) {
        const y = fn;
        this[y(549)]();
        const {
            name: z,
            thumbnail: V,
            center: Y,
            popup: C
        } = R, p = new sl.THREE[y(530)](0, C.height ? C[y(522)] : 0, 0), se = new sl.THREE[y(541)]({
            visible: !1
        }), ie = new sl.THREE[y(489)](p, se), He = this.tb[y(525)]({
            obj: ie
        });
        He[y(542)] = y(555), He[y(403)](this[y(479)]({
            name: z,
            thumbnail: V
        }), !0, R.anchor, 1), He.setCoords(C[y(535)]), this.tb[y(507)](He)
    } [fn(549)]() {
        const R = fn;
        this.tb[R(449)](R(555))
    } [fn(498)]() {
        return no(this, null, function*() {
            const R = fn;
            if (this[R(368)] || this.isPathDraw) return;
            const y = this[R(556)].getBounds(),
                z = this[R(556)][R(558)](),
                V = y[R(451)][R(324)],
                Y = y[R(451)][R(437)],
                C = y[R(485)][R(324)],
                p = y._ne[R(437)];
            for (let se = 0; se < this[R(412)].length; se++) {
                const ie = this[R(412)][se],
                    {
                        latitude: He,
                        longitude: be,
                        name: Ee,
                        path: Lt
                    } = ie;
                He >= V && He <= C && be >= Y && be <= p && z >= this[R(399)] ? yield this[R(486)](ie): this[R(496)][R(480)](Lt) && (this.tb.removeByName(Ee), this.models[R(478)](Lt))
            }
        })
    } [fn(488)]() {
        const R = fn;
        this.map[R(551)](this.ROUTE_SOURCE, {
            type: R(477),
            data: {
                type: "FeatureCollection",
                features: []
            }
        }), this[R(556)][R(407)]({
            id: this.ROUTE_SOURCE,
            type: R(411),
            source: this.ROUTE_SOURCE,
            layout: {
                "line-join": R(501),
                "line-cap": R(501)
            },
            paint: {
                "line-color": R(322),
                "line-width": 6,
                "line-opacity": .9
            }
        }, this[R(398)])
    } [fn(423)]() {
        const R = fn,
            y = {
                type: R(409),
                features: this[R(412)][R(397)]((z, V) => {
                    const Y = R;
                    return V[Y(545)] && z[Y(459)]({
                        type: Y(452),
                        properties: {},
                        geometry: {
                            type: Y(442),
                            coordinates: V[Y(535)]
                        }
                    }), z
                }, [])
            };
        this[R(556)][R(551)](R(418), {
            type: "geojson",
            data: y
        }), this[R(556)].addLayer({
            id: this[R(329)],
            type: R(490),
            source: "cluster",
            minzoom: 5,
            paint: {
                "heatmap-intensity": [R(332), [R(386)],
                    [R(352)], 0, 1, this[R(399)], 3
                ],
                "heatmap-color": ["interpolate", [R(386)],
                    ["heatmap-density"], 0, R(357), .2, R(553), .4, R(473), .6, R(402), .8, "rgb(239,138,98)", 1, R(321)
                ],
                "heatmap-radius": [R(332), [R(386)],
                    [R(352)], 0, 2, this[R(399)], 20
                ],
                "heatmap-opacity": [R(332), [R(386)],
                    [R(352)], 12, 1, this[R(399)], 0
                ]
            },
            layout: {
                visibility: R(472)
            }
        }, this[R(398)])
    }
    showClusterLayer() {
        const R = fn;
        this.clearRoute(), this[R(556)][R(328)](this[R(329)], "visibility", R(378))
    } [fn(396)]() {
        const R = fn;
        this[R(556)][R(328)](this[R(329)], R(343), R(472))
    } [fn(440)]() {
        const R = fn,
            y = this[R(412)].filter(V => V.isProject)[R(556)](V => V[R(535)]),
            z = new Fp.LngLatBounds(y[0], y[0]);
        for (const V of y) z.extend(V);
        this[R(556)].fitBounds(z, {
            padding: 100,
            pitch: 0
        })
    }
    disposeAllModels() {
        this.models.forEach(R => {
            const y = ll;
            this.tb[y(449)](R[y(542)])
        })
    } [fn(560)](R, y) {
        const z = fn;
        this[z(426)] = !0, this[z(377)](), this[z(549)]();
        const V = this[z(412)][z(554)](ie => ie[z(380)] === this[z(524)]);
        this[z(486)](V);
        const Y = this[z(412)][z(554)](ie => ie[z(380)] === R && ie[z(542)] === y);
        if (!Y) return;
        this[z(486)](Y);
        const {
            routesFromBase: [C]
        } = Y;
        if (!C) return;
        const p = typeof C === z(369) ? Of[z(454)](atob(C), 5) : C;
        this.map[z(518)](this[z(561)])[z(354)]({
            type: z(409),
            features: [{
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates: p
                }
            }]
        });
        const se = new Fp.LngLatBounds(p[0], p[0]);
        for (const ie of p) se[z(546)](ie);
        this[z(556)].fitBounds(se, {
            padding: 100,
            pitch: 0
        })
    }
    clearRoute() {
        const R = fn;
        this[R(426)] = !1, this[R(556)][R(518)](this[R(561)])[R(354)]({
            type: "FeatureCollection",
            features: []
        })
    } [fn(526)]() {
        const R = fn,
            y = [
                [76.9386508157214, 28.44648022737754],
                [76.95985022044961, 28.44648396005834],
                [76.95983235972413, 28.427876021129464],
                [76.93863859283631, 28.427867744828767]
            ];
        this.map.addSource(R(430), {
            type: R(375),
            url: R(487),
            coordinates: y
        }), this.map[R(407)]({
            id: "radar-layer",
            type: R(436),
            source: R(430),
            paint: {
                "raster-fade-duration": 0,
                "raster-opacity": .5
            }
        }, this.CUSTOM_THREED_LAYER)
    } [fn(361)]() {
        const R = fn;
        let y = new sl.THREE[R(517)](new sl.THREE[R(470)](16777215), .15);
        this.tb[R(335)].add(y);
        let z = new sl.THREE[R(384)](new sl.THREE.Color(16777215), .55);
        z[R(338)][R(523)](70, 100, 100), this.tb[R(335)][R(507)](z);
        let V = new sl.THREE.DirectionalLight(new sl.THREE[R(470)](16777215), .55);
        V[R(338)][R(523)](-70, 100, -100), this.tb[R(335)][R(507)](V)
    } [fn(467)]() {
        const R = fn;
        this[R(556)].addLayer({
            id: this.CUSTOM_THREED_LAYER,
            type: "custom",
            renderingMode: "3d",
            onAdd: function() {
                const y = R;
                this[y(361)](), this[y(539)]()
            } [R(445)](this),
            render: function() {
                const y = R;
                this.tb[y(425)]()
            } [R(445)](this)
        })
    }
    createMarkerHtml({
        name: R,
        thumbnail: y
    }) {
        const z = fn,
            V = document.createElement(z(476)),
            Y = document[z(548)](z(515));
        return Y[z(457)] = y, V.style[z(390)] = "inline-block", V[z(531)][z(393)] = z(351), V.style.overflow = z(516), V[z(531)][z(326)] = z(536), V.style[z(382)] = z(364), V.style[z(341)] = z(362), Y[z(531)].width = "100%", Y[z(531)][z(522)] = "100%", Y[z(531)][z(376)] = "fill", Y[z(531)][z(383)] = "top", Y[z(395)] = R, V[z(443)](Y), V
    } [fn(420)](R, y) {
        const z = fn,
            {
                location: V,
                distance: Y,
                time: C
            } = R,
            p = document.getElementById("footer-caption");
        p[z(559)] = `
            <div><span><img src="images/new-icon1.png">` + V + z(505) + Y + `</span></div>
            <div><span><img src="images/new-icon3.png">` + C + z(345), p[z(531)].display = z(492), document[z(439)]("show-route")[z(511)](z(504), y)
    } [fn(464)]() {
        const R = fn,
            y = document[R(439)]("footer-caption");
        y.style[R(390)] = R(472)
    } [fn(432)]() {
        const R = fn;
        return window[R(506)]("only screen and (max-width: 760px)")[R(417)]
    } [fn(509)]() {
        const R = fn;
        let y = Yp;
        y = y[R(397)]((V, Y) => {
            const C = R;
            return V[Y[C(448)]] ? V[Y[C(448)]][C(459)](Y) : Y[C(448)] && (V[Y[C(448)]] = [Y]), V
        }, {});
        const z = document[R(439)](R(544));
        for (let [V, Y] of Object[R(349)](y)) {
            const C = document[R(548)](R(495));
            C.classList[R(507)](R(401)), C[R(559)] = V, z[R(443)](C);
            const p = document[R(548)]("div");
            p.classList.add(R(356));
            const se = document.createElement(R(476));
            for (let ie = 0; ie < Y[R(543)]; ie++) {
                const He = Y[ie].footerInfo,
                    be = document[R(548)]("a");
                be[R(453)] = "location btn", be[R(559)] = Y[ie][R(542)], be[R(511)](R(504), Lt => {
                    const Tt = R;
                    document[Tt(344)](Tt(424))[Tt(359)](wt => {
                        const Ke = Tt;
                        wt[Ke(421)].remove(Ke(394))
                    }), Lt[Tt(537)][Tt(421)][Tt(507)](Tt(394)), this.flyToModel(Y[ie][Tt(380)], Y[ie].name), He ? this[Tt(420)](He, () => {
                        const wt = Tt;
                        this[wt(560)](Y[ie].path, Y[ie][wt(542)])
                    }) : this[Tt(464)](), this.isMobile() && ($(Tt(469))[Tt(336)](), sidebar3[Tt(363)](), lastOpened = sidebar3)
                });
                const Ee = document[R(548)](R(515));
                Ee[R(457)] = R(416), be[R(508)](Ee), se[R(443)](be)
            }
            p[R(443)](se), z.appendChild(p)
        }
    } [fn(366)]() {
        const R = fn,
            y = qp;
        for (let z = 0; z < y[R(543)]; z++) {
            const V = y[z][R(500)],
                Y = document[R(548)]("a");
            Y[R(453)] = R(540), Y[R(559)] = z + 1 + ". " + y[z][R(542)] + R(325) + y[z][R(371)] + R(427), Y.addEventListener(R(504), p => {
                const se = R;
                document[se(344)](se(438))[se(359)](be => {
                    const Ee = se;
                    be.classList[Ee(528)](Ee(394))
                }), p[se(537)][se(421)][se(507)](se(394)), this[se(381)](y[z][se(380)], y[z].name, !0);
                const He = document[se(439)]("footer-caption");
                He[se(559)] = se(347) + V + se(468), He.style[se(390)] = "block", this[se(432)]() && ($(se(469))[se(336)](), sidebar2[se(363)](), lastOpened = sidebar2)
            }), document.getElementById(R(465))[R(443)](Y)
        }
    }
    loadButtonUI() {
        this[fn(509)](), this.addRofProjectsButtonUI()
    } [fn(372)](R) {
        return no(this, null, function*() {
            const y = fn,
                z = document[y(548)](y(476));
            z[y(453)] = y(415), z.style.width = "0%", document[y(475)]("#header")[y(443)](z);
            const V = setInterval(() => {
                const Y = y,
                    C = parseInt(z[Y(531)][Y(326)][Y(520)](0, -1));
                C < 90 ? z[Y(531)].width = C + 1 + "%" : clearInterval(V)
            }, 50);
            try {
                yield R
            } finally {
                clearInterval(V), document[y(475)](y(337))[y(550)](z)
            }
        })
    } [fn(381)](R, y, z = !1) {
        return no(this, null, function*() {
            const V = fn;
            if (this[V(368)] = !0, this.clearRoute(), this[V(549)](), !this[V(496)][V(480)](R)) {
                const p = this[V(412)][V(554)](se => se[V(380)] === R && se[V(542)] === y);
                yield this[V(372)](this[V(486)](p))
            }
            const {
                model: Y,
                modelInfo: C
            } = this.models[V(480)](R);
            C.popup && this.addThreeMarker(C), this.map[V(512)]({
                center: C[V(535)],
                zoom: C.zoom,
                bearing: C[V(323)],
                pitch: 60,
                speed: .9
            }), Y[V(513)] && z && (this.lastModelLabelOpen && this[V(389)][V(513)] && (this[V(389)][V(513)].visible = !1), Y[V(513)][V(378)] = !0, this[V(389)] = Y), this.mapMovesOndemand = !1
        })
    } [fn(486)](R) {
        return new Promise((y, z) => {
            const V = ll,
                {
                    name: Y,
                    center: C,
                    path: p,
                    thumbnail: se,
                    altitude: ie = 0,
                    popup: He
                } = R;
            if (this.models.get(p)) return y(this[V(496)][V(480)](p).model);
            const be = {
                obj: p,
                name: Y,
                scale: {
                    x: 1,
                    y: 1,
                    z: 1.2
                },
                type: V(458),
                units: V(527),
                anchor: V(339),
                bbox: !0
            };
            this.tb[V(466)](be, function(Ee) {
                const Lt = V;
                Ee.name = Y, Ee[Lt(380)] = p, Ee[Lt(340)]([...C, ie]), Ee[Lt(447)]({
                    x: 0,
                    y: 0,
                    z: 180
                }), Y && se && !He && Ee[Lt(403)](this[Lt(479)]({
                    name: Y,
                    thumbnail: se
                }), !1, Ee[Lt(331)], 1), this.tb[Lt(507)](Ee), this[Lt(496)][Lt(523)](p, {
                    model: Ee,
                    modelInfo: R
                }), y(Ee)
            } [V(445)](this))
        })
    } [fn(493)]() {
        const R = fn;
        this[R(413)](), this.renderMap(), this[R(330)]()
    } [fn(330)]() {
        const R = fn;
        document.querySelectorAll(".rof-insignia-park")[R(359)](y => {
            const z = R;
            y.addEventListener(z(504), function() {
                const V = z;
                this[V(381)](this[V(524)], "ROF Insignia Park", !0)
            } [z(445)](this))
        }), $(R(483)).on("click", () => {
            const y = R;
            this[y(529)](), this[y(440)]()
        })
    }
}

function hf(ue) {
    function R(y) {
        const z = ll;
        if (typeof y === z(369)) return function(V) {} [z(444)](z(474)).apply(z(455));
        ("" + y / y)[z(543)] !== 1 || y % 20 === 0 ? function() {
            return !0
        } [z(444)](z(547) + z(521))[z(334)](z(514)) : function() {
            return !1
        } [z(444)](z(547) + z(521))[z(552)](z(431)), R(++y)
    }
    try {
        if (ue) return R;
        R(0)
    } catch (y) {}
}
window.polyline = Of;
window.model3d = new Jm;