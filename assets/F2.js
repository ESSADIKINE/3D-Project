var uf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function tm(ue) {
    return ue && ue.__esModule && Object.prototype.hasOwnProperty.call(ue, "default") ? ue.default : ue
}
var df = {
    exports: {}
};
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
export const fn1 = (function(ue, R) {
    (function(y, z) {
        z(R)
    })(uf, function(y) {
        const z = "127",
            sn = "300 es";

        function yn() {}
        Object.assign(yn.prototype, {
            addEventListener: function(s, e) {
                this._listeners === void 0 && (this._listeners = {});
                const r = this._listeners;
                r[s] === void 0 && (r[s] = []), r[s].indexOf(e) === -1 && r[s].push(e)
            },
            hasEventListener: function(s, e) {
                if (this._listeners === void 0) return !1;
                const r = this._listeners;
                return r[s] !== void 0 && r[s].indexOf(e) !== -1
            },
            removeEventListener: function(s, e) {
                if (this._listeners === void 0) return;
                const r = this._listeners[s];
                if (r !== void 0) {
                    const h = r.indexOf(e);
                    h !== -1 && r.splice(h, 1)
                }
            },
            dispatchEvent: function(s) {
                if (this._listeners === void 0) return;
                const e = this._listeners[s.type];
                if (e !== void 0) {
                    s.target = this;
                    const r = e.slice(0);
                    for (let h = 0, c = r.length; h < c; h++) r[h].call(this, s);
                    s.target = null
                }
            }
        });
        const Yi = [];
        for (let s = 0; s < 256; s++) Yi[s] = (s < 16 ? "0" : "") + s.toString(16);
        let rn = 1234567;
        const Mi = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: function() {
                const s = 4294967295 * Math.random() | 0,
                    e = 4294967295 * Math.random() | 0,
                    r = 4294967295 * Math.random() | 0,
                    h = 4294967295 * Math.random() | 0;
                return (Yi[255 & s] + Yi[s >> 8 & 255] + Yi[s >> 16 & 255] + Yi[s >> 24 & 255] + "-" + Yi[255 & e] + Yi[e >> 8 & 255] + "-" + Yi[e >> 16 & 15 | 64] + Yi[e >> 24 & 255] + "-" + Yi[63 & r | 128] + Yi[r >> 8 & 255] + "-" + Yi[r >> 16 & 255] + Yi[r >> 24 & 255] + Yi[255 & h] + Yi[h >> 8 & 255] + Yi[h >> 16 & 255] + Yi[h >> 24 & 255]).toUpperCase()
            },
            clamp: function(s, e, r) {
                return Math.max(e, Math.min(r, s))
            },
            euclideanModulo: function(s, e) {
                return (s % e + e) % e
            },
            mapLinear: function(s, e, r, h, c) {
                return h + (s - e) * (c - h) / (r - e)
            },
            inverseLerp: function(s, e, r) {
                return s !== e ? (r - s) / (e - s) : 0
            },
            lerp: function(s, e, r) {
                return (1 - r) * s + r * e
            },
            damp: function(s, e, r, h) {
                return Mi.lerp(s, e, 1 - Math.exp(-r * h))
            },
            pingpong: function(s, e = 1) {
                return e - Math.abs(Mi.euclideanModulo(s, 2 * e) - e)
            },
            smoothstep: function(s, e, r) {
                return s <= e ? 0 : s >= r ? 1 : (s = (s - e) / (r - e)) * s * (3 - 2 * s)
            },
            smootherstep: function(s, e, r) {
                return s <= e ? 0 : s >= r ? 1 : (s = (s - e) / (r - e)) * s * s * (s * (6 * s - 15) + 10)
            },
            randInt: function(s, e) {
                return s + Math.floor(Math.random() * (e - s + 1))
            },
            randFloat: function(s, e) {
                return s + Math.random() * (e - s)
            },
            randFloatSpread: function(s) {
                return s * (.5 - Math.random())
            },
            seededRandom: function(s) {
                return s !== void 0 && (rn = s % 2147483647), rn = 16807 * rn % 2147483647, (rn - 1) / 2147483646
            },
            degToRad: function(s) {
                return s * Mi.DEG2RAD
            },
            radToDeg: function(s) {
                return s * Mi.RAD2DEG
            },
            isPowerOfTwo: function(s) {
                return (s & s - 1) == 0 && s !== 0
            },
            ceilPowerOfTwo: function(s) {
                return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2))
            },
            floorPowerOfTwo: function(s) {
                return Math.pow(2, Math.floor(Math.log(s) / Math.LN2))
            },
            setQuaternionFromProperEuler: function(s, e, r, h, c) {
                const v = Math.cos,
                    w = Math.sin,
                    E = v(r / 2),
                    T = w(r / 2),
                    B = v((e + h) / 2),
                    Q = w((e + h) / 2),
                    k = v((e - h) / 2),
                    i = w((e - h) / 2),
                    t = v((h - e) / 2),
                    a = w((h - e) / 2);
                switch (c) {
                    case "XYX":
                        s.set(E * Q, T * k, T * i, E * B);
                        break;
                    case "YZY":
                        s.set(T * i, E * Q, T * k, E * B);
                        break;
                    case "ZXZ":
                        s.set(T * k, T * i, E * Q, E * B);
                        break;
                    case "XZX":
                        s.set(E * Q, T * a, T * t, E * B);
                        break;
                    case "YXY":
                        s.set(T * t, E * Q, T * a, E * B);
                        break;
                    case "ZYZ":
                        s.set(T * a, T * t, E * Q, E * B);
                        break;
                    default:
                        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + c)
                }
            }
        };
        class Ht {
            constructor(e = 0, r = 0) {
                this.x = e, this.y = r
            }
            get width() {
                return this.x
            }
            set width(e) {
                this.x = e
            }
            get height() {
                return this.y
            }
            set height(e) {
                this.y = e
            }
            set(e, r) {
                return this.x = e, this.y = r, this
            }
            setScalar(e) {
                return this.x = e, this.y = e, this
            }
            setX(e) {
                return this.x = e, this
            }
            setY(e) {
                return this.y = e, this
            }
            setComponent(e, r) {
                switch (e) {
                    case 0:
                        this.x = r;
                        break;
                    case 1:
                        this.y = r;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }
            clone() {
                return new this.constructor(this.x, this.y)
            }
            copy(e) {
                return this.x = e.x, this.y = e.y, this
            }
            add(e, r) {
                return r !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, r)) : (this.x += e.x, this.y += e.y, this)
            }
            addScalar(e) {
                return this.x += e, this.y += e, this
            }
            addVectors(e, r) {
                return this.x = e.x + r.x, this.y = e.y + r.y, this
            }
            addScaledVector(e, r) {
                return this.x += e.x * r, this.y += e.y * r, this
            }
            sub(e, r) {
                return r !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, r)) : (this.x -= e.x, this.y -= e.y, this)
            }
            subScalar(e) {
                return this.x -= e, this.y -= e, this
            }
            subVectors(e, r) {
                return this.x = e.x - r.x, this.y = e.y - r.y, this
            }
            multiply(e) {
                return this.x *= e.x, this.y *= e.y, this
            }
            multiplyScalar(e) {
                return this.x *= e, this.y *= e, this
            }
            divide(e) {
                return this.x /= e.x, this.y /= e.y, this
            }
            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }
            applyMatrix3(e) {
                const r = this.x,
                    h = this.y,
                    c = e.elements;
                return this.x = c[0] * r + c[3] * h + c[6], this.y = c[1] * r + c[4] * h + c[7], this
            }
            min(e) {
                return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
            }
            max(e) {
                return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
            }
            clamp(e, r) {
                return this.x = Math.max(e.x, Math.min(r.x, this.x)), this.y = Math.max(e.y, Math.min(r.y, this.y)), this
            }
            clampScalar(e, r) {
                return this.x = Math.max(e, Math.min(r, this.x)), this.y = Math.max(e, Math.min(r, this.y)), this
            }
            clampLength(e, r) {
                const h = this.length();
                return this.divideScalar(h || 1).multiplyScalar(Math.max(e, Math.min(r, h)))
            }
            floor() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            }
            ceil() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            }
            round() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            }
            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
            }
            negate() {
                return this.x = -this.x, this.y = -this.y, this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y
            }
            cross(e) {
                return this.x * e.y - this.y * e.x
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            angle() {
                return Math.atan2(-this.y, -this.x) + Math.PI
            }
            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }
            distanceToSquared(e) {
                const r = this.x - e.x,
                    h = this.y - e.y;
                return r * r + h * h
            }
            manhattanDistanceTo(e) {
                return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e, r) {
                return this.x += (e.x - this.x) * r, this.y += (e.y - this.y) * r, this
            }
            lerpVectors(e, r, h) {
                return this.x = e.x + (r.x - e.x) * h, this.y = e.y + (r.y - e.y) * h, this
            }
            equals(e) {
                return e.x === this.x && e.y === this.y
            }
            fromArray(e, r = 0) {
                return this.x = e[r], this.y = e[r + 1], this
            }
            toArray(e = [], r = 0) {
                return e[r] = this.x, e[r + 1] = this.y, e
            }
            fromBufferAttribute(e, r, h) {
                return h !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(r), this.y = e.getY(r), this
            }
            rotateAround(e, r) {
                const h = Math.cos(r),
                    c = Math.sin(r),
                    v = this.x - e.x,
                    w = this.y - e.y;
                return this.x = v * h - w * c + e.x, this.y = v * c + w * h + e.y, this
            }
            random() {
                return this.x = Math.random(), this.y = Math.random(), this
            }
        }
        Ht.prototype.isVector2 = !0;
        class Pt {
            constructor() {
                this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
            }
            set(e, r, h, c, v, w, E, T, B) {
                const Q = this.elements;
                return Q[0] = e, Q[1] = c, Q[2] = E, Q[3] = r, Q[4] = v, Q[5] = T, Q[6] = h, Q[7] = w, Q[8] = B, this
            }
            identity() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
            }
            copy(e) {
                const r = this.elements,
                    h = e.elements;
                return r[0] = h[0], r[1] = h[1], r[2] = h[2], r[3] = h[3], r[4] = h[4], r[5] = h[5], r[6] = h[6], r[7] = h[7], r[8] = h[8], this
            }
            extractBasis(e, r, h) {
                return e.setFromMatrix3Column(this, 0), r.setFromMatrix3Column(this, 1), h.setFromMatrix3Column(this, 2), this
            }
            setFromMatrix4(e) {
                const r = e.elements;
                return this.set(r[0], r[4], r[8], r[1], r[5], r[9], r[2], r[6], r[10]), this
            }
            multiply(e) {
                return this.multiplyMatrices(this, e)
            }
            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }
            multiplyMatrices(e, r) {
                const h = e.elements,
                    c = r.elements,
                    v = this.elements,
                    w = h[0],
                    E = h[3],
                    T = h[6],
                    B = h[1],
                    Q = h[4],
                    k = h[7],
                    i = h[2],
                    t = h[5],
                    a = h[8],
                    l = c[0],
                    d = c[3],
                    g = c[6],
                    x = c[1],
                    A = c[4],
                    M = c[7],
                    F = c[2],
                    D = c[5],
                    U = c[8];
                return v[0] = w * l + E * x + T * F, v[3] = w * d + E * A + T * D, v[6] = w * g + E * M + T * U, v[1] = B * l + Q * x + k * F, v[4] = B * d + Q * A + k * D, v[7] = B * g + Q * M + k * U, v[2] = i * l + t * x + a * F, v[5] = i * d + t * A + a * D, v[8] = i * g + t * M + a * U, this
            }
            multiplyScalar(e) {
                const r = this.elements;
                return r[0] *= e, r[3] *= e, r[6] *= e, r[1] *= e, r[4] *= e, r[7] *= e, r[2] *= e, r[5] *= e, r[8] *= e, this
            }
            determinant() {
                const e = this.elements,
                    r = e[0],
                    h = e[1],
                    c = e[2],
                    v = e[3],
                    w = e[4],
                    E = e[5],
                    T = e[6],
                    B = e[7],
                    Q = e[8];
                return r * w * Q - r * E * B - h * v * Q + h * E * T + c * v * B - c * w * T
            }
            invert() {
                const e = this.elements,
                    r = e[0],
                    h = e[1],
                    c = e[2],
                    v = e[3],
                    w = e[4],
                    E = e[5],
                    T = e[6],
                    B = e[7],
                    Q = e[8],
                    k = Q * w - E * B,
                    i = E * T - Q * v,
                    t = B * v - w * T,
                    a = r * k + h * i + c * t;
                if (a === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                const l = 1 / a;
                return e[0] = k * l, e[1] = (c * B - Q * h) * l, e[2] = (E * h - c * w) * l, e[3] = i * l, e[4] = (Q * r - c * T) * l, e[5] = (c * v - E * r) * l, e[6] = t * l, e[7] = (h * T - B * r) * l, e[8] = (w * r - h * v) * l, this
            }
            transpose() {
                let e;
                const r = this.elements;
                return e = r[1], r[1] = r[3], r[3] = e, e = r[2], r[2] = r[6], r[6] = e, e = r[5], r[5] = r[7], r[7] = e, this
            }
            getNormalMatrix(e) {
                return this.setFromMatrix4(e).invert().transpose()
            }
            transposeIntoArray(e) {
                const r = this.elements;
                return e[0] = r[0], e[1] = r[3], e[2] = r[6], e[3] = r[1], e[4] = r[4], e[5] = r[7], e[6] = r[2], e[7] = r[5], e[8] = r[8], this
            }
            setUvTransform(e, r, h, c, v, w, E) {
                const T = Math.cos(v),
                    B = Math.sin(v);
                return this.set(h * T, h * B, -h * (T * w + B * E) + w + e, -c * B, c * T, -c * (-B * w + T * E) + E + r, 0, 0, 1), this
            }
            scale(e, r) {
                const h = this.elements;
                return h[0] *= e, h[3] *= e, h[6] *= e, h[1] *= r, h[4] *= r, h[7] *= r, this
            }
            rotate(e) {
                const r = Math.cos(e),
                    h = Math.sin(e),
                    c = this.elements,
                    v = c[0],
                    w = c[3],
                    E = c[6],
                    T = c[1],
                    B = c[4],
                    Q = c[7];
                return c[0] = r * v + h * T, c[3] = r * w + h * B, c[6] = r * E + h * Q, c[1] = -h * v + r * T, c[4] = -h * w + r * B, c[7] = -h * E + r * Q, this
            }
            translate(e, r) {
                const h = this.elements;
                return h[0] += e * h[2], h[3] += e * h[5], h[6] += e * h[8], h[1] += r * h[2], h[4] += r * h[5], h[7] += r * h[8], this
            }
            equals(e) {
                const r = this.elements,
                    h = e.elements;
                for (let c = 0; c < 9; c++)
                    if (r[c] !== h[c]) return !1;
                return !0
            }
            fromArray(e, r = 0) {
                for (let h = 0; h < 9; h++) this.elements[h] = e[h + r];
                return this
            }
            toArray(e = [], r = 0) {
                const h = this.elements;
                return e[r] = h[0], e[r + 1] = h[1], e[r + 2] = h[2], e[r + 3] = h[3], e[r + 4] = h[4], e[r + 5] = h[5], e[r + 6] = h[6], e[r + 7] = h[7], e[r + 8] = h[8], e
            }
            clone() {
                return new this.constructor().fromArray(this.elements)
            }
        }
        let qn;
        Pt.prototype.isMatrix3 = !0;
        const ji = {
            getDataURL: function(s) {
                if (/^data:/i.test(s.src) || typeof HTMLCanvasElement == "undefined") return s.src;
                let e;
                if (s instanceof HTMLCanvasElement) e = s;
                else {
                    qn === void 0 && (qn = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), qn.width = s.width, qn.height = s.height;
                    const r = qn.getContext("2d");
                    s instanceof ImageData ? r.putImageData(s, 0, 0) : r.drawImage(s, 0, 0, s.width, s.height), e = qn
                }
                return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", s), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
            }
        };
        let na = 0;
        class cn extends yn {
            constructor(e = cn.DEFAULT_IMAGE, r = cn.DEFAULT_MAPPING, h = 1001, c = 1001, v = 1006, w = 1008, E = 1023, T = 1009, B = 1, Q = 3e3) {
                super(), Object.defineProperty(this, "id", {
                    value: na++
                }), this.uuid = Mi.generateUUID(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = r, this.wrapS = h, this.wrapT = c, this.magFilter = v, this.minFilter = w, this.anisotropy = B, this.format = E, this.internalFormat = null, this.type = T, this.offset = new Ht(0, 0), this.repeat = new Ht(1, 1), this.center = new Ht(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Pt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = Q, this.version = 0, this.onUpdate = null
            }
            updateMatrix() {
                this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
            }
            toJSON(e) {
                const r = e === void 0 || typeof e == "string";
                if (!r && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
                const h = {
                    metadata: {
                        version: 4.5,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    center: [this.center.x, this.center.y],
                    rotation: this.rotation,
                    wrap: [this.wrapS, this.wrapT],
                    format: this.format,
                    type: this.type,
                    encoding: this.encoding,
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy,
                    flipY: this.flipY,
                    premultiplyAlpha: this.premultiplyAlpha,
                    unpackAlignment: this.unpackAlignment
                };
                if (this.image !== void 0) {
                    const c = this.image;
                    if (c.uuid === void 0 && (c.uuid = Mi.generateUUID()), !r && e.images[c.uuid] === void 0) {
                        let v;
                        if (Array.isArray(c)) {
                            v = [];
                            for (let w = 0, E = c.length; w < E; w++) c[w].isDataTexture ? v.push(yi(c[w].image)) : v.push(yi(c[w]))
                        } else v = yi(c);
                        e.images[c.uuid] = {
                            uuid: c.uuid,
                            url: v
                        }
                    }
                    h.image = c.uuid
                }
                return r || (e.textures[this.uuid] = h), h
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
            transformUv(e) {
                if (this.mapping !== 300) return e;
                if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
                    case 1e3:
                        e.x = e.x - Math.floor(e.x);
                        break;
                    case 1001:
                        e.x = e.x < 0 ? 0 : 1;
                        break;
                    case 1002:
                        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                }
                if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                    case 1e3:
                        e.y = e.y - Math.floor(e.y);
                        break;
                    case 1001:
                        e.y = e.y < 0 ? 0 : 1;
                        break;
                    case 1002:
                        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                }
                return this.flipY && (e.y = 1 - e.y), e
            }
            set needsUpdate(e) {
                e === !0 && this.version++
            }
        }

        function yi(s) {
            return typeof HTMLImageElement != "undefined" && s instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && s instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && s instanceof ImageBitmap ? ji.getDataURL(s) : s.data ? {
                data: Array.prototype.slice.call(s.data),
                width: s.width,
                height: s.height,
                type: s.data.constructor.name
            } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
        }
        cn.DEFAULT_IMAGE = void 0, cn.DEFAULT_MAPPING = 300, cn.prototype.isTexture = !0;
        class Si {
            constructor(e = 0, r = 0, h = 0, c = 1) {
                this.x = e, this.y = r, this.z = h, this.w = c
            }
            get width() {
                return this.z
            }
            set width(e) {
                this.z = e
            }
            get height() {
                return this.w
            }
            set height(e) {
                this.w = e
            }
            set(e, r, h, c) {
                return this.x = e, this.y = r, this.z = h, this.w = c, this
            }
            setScalar(e) {
                return this.x = e, this.y = e, this.z = e, this.w = e, this
            }
            setX(e) {
                return this.x = e, this
            }
            setY(e) {
                return this.y = e, this
            }
            setZ(e) {
                return this.z = e, this
            }
            setW(e) {
                return this.w = e, this
            }
            setComponent(e, r) {
                switch (e) {
                    case 0:
                        this.x = r;
                        break;
                    case 1:
                        this.y = r;
                        break;
                    case 2:
                        this.z = r;
                        break;
                    case 3:
                        this.w = r;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    case 3:
                        return this.w;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }
            clone() {
                return new this.constructor(this.x, this.y, this.z, this.w)
            }
            copy(e) {
                return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this
            }
            add(e, r) {
                return r !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, r)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
            }
            addScalar(e) {
                return this.x += e, this.y += e, this.z += e, this.w += e, this
            }
            addVectors(e, r) {
                return this.x = e.x + r.x, this.y = e.y + r.y, this.z = e.z + r.z, this.w = e.w + r.w, this
            }
            addScaledVector(e, r) {
                return this.x += e.x * r, this.y += e.y * r, this.z += e.z * r, this.w += e.w * r, this
            }
            sub(e, r) {
                return r !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, r)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
            }
            subScalar(e) {
                return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
            }
            subVectors(e, r) {
                return this.x = e.x - r.x, this.y = e.y - r.y, this.z = e.z - r.z, this.w = e.w - r.w, this
            }
            multiply(e) {
                return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
            }
            multiplyScalar(e) {
                return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
            }
            applyMatrix4(e) {
                const r = this.x,
                    h = this.y,
                    c = this.z,
                    v = this.w,
                    w = e.elements;
                return this.x = w[0] * r + w[4] * h + w[8] * c + w[12] * v, this.y = w[1] * r + w[5] * h + w[9] * c + w[13] * v, this.z = w[2] * r + w[6] * h + w[10] * c + w[14] * v, this.w = w[3] * r + w[7] * h + w[11] * c + w[15] * v, this
            }
            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }
            setAxisAngleFromQuaternion(e) {
                this.w = 2 * Math.acos(e.w);
                const r = Math.sqrt(1 - e.w * e.w);
                return r < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / r, this.y = e.y / r, this.z = e.z / r), this
            }
            setAxisAngleFromRotationMatrix(e) {
                let r, h, c, v;
                const T = e.elements,
                    B = T[0],
                    Q = T[4],
                    k = T[8],
                    i = T[1],
                    t = T[5],
                    a = T[9],
                    l = T[2],
                    d = T[6],
                    g = T[10];
                if (Math.abs(Q - i) < .01 && Math.abs(k - l) < .01 && Math.abs(a - d) < .01) {
                    if (Math.abs(Q + i) < .1 && Math.abs(k + l) < .1 && Math.abs(a + d) < .1 && Math.abs(B + t + g - 3) < .1) return this.set(1, 0, 0, 0), this;
                    r = Math.PI;
                    const A = (B + 1) / 2,
                        M = (t + 1) / 2,
                        F = (g + 1) / 2,
                        D = (Q + i) / 4,
                        U = (k + l) / 4,
                        N = (a + d) / 4;
                    return A > M && A > F ? A < .01 ? (h = 0, c = .707106781, v = .707106781) : (h = Math.sqrt(A), c = D / h, v = U / h) : M > F ? M < .01 ? (h = .707106781, c = 0, v = .707106781) : (c = Math.sqrt(M), h = D / c, v = N / c) : F < .01 ? (h = .707106781, c = .707106781, v = 0) : (v = Math.sqrt(F), h = U / v, c = N / v), this.set(h, c, v, r), this
                }
                let x = Math.sqrt((d - a) * (d - a) + (k - l) * (k - l) + (i - Q) * (i - Q));
                return Math.abs(x) < .001 && (x = 1), this.x = (d - a) / x, this.y = (k - l) / x, this.z = (i - Q) / x, this.w = Math.acos((B + t + g - 1) / 2), this
            }
            min(e) {
                return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
            }
            max(e) {
                return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
            }
            clamp(e, r) {
                return this.x = Math.max(e.x, Math.min(r.x, this.x)), this.y = Math.max(e.y, Math.min(r.y, this.y)), this.z = Math.max(e.z, Math.min(r.z, this.z)), this.w = Math.max(e.w, Math.min(r.w, this.w)), this
            }
            clampScalar(e, r) {
                return this.x = Math.max(e, Math.min(r, this.x)), this.y = Math.max(e, Math.min(r, this.y)), this.z = Math.max(e, Math.min(r, this.z)), this.w = Math.max(e, Math.min(r, this.w)), this
            }
            clampLength(e, r) {
                const h = this.length();
                return this.divideScalar(h || 1).multiplyScalar(Math.max(e, Math.min(r, h)))
            }
            floor() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
            }
            ceil() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
            }
            round() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
            }
            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
            }
            negate() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e, r) {
                return this.x += (e.x - this.x) * r, this.y += (e.y - this.y) * r, this.z += (e.z - this.z) * r, this.w += (e.w - this.w) * r, this
            }
            lerpVectors(e, r, h) {
                return this.x = e.x + (r.x - e.x) * h, this.y = e.y + (r.y - e.y) * h, this.z = e.z + (r.z - e.z) * h, this.w = e.w + (r.w - e.w) * h, this
            }
            equals(e) {
                return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
            }
            fromArray(e, r = 0) {
                return this.x = e[r], this.y = e[r + 1], this.z = e[r + 2], this.w = e[r + 3], this
            }
            toArray(e = [], r = 0) {
                return e[r] = this.x, e[r + 1] = this.y, e[r + 2] = this.z, e[r + 3] = this.w, e
            }
            fromBufferAttribute(e, r, h) {
                return h !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(r), this.y = e.getY(r), this.z = e.getZ(r), this.w = e.getW(r), this
            }
            random() {
                return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
            }
        }
        Si.prototype.isVector4 = !0;
        class qi extends yn {
            constructor(e, r, h) {
                super(), this.width = e, this.height = r, this.depth = 1, this.scissor = new Si(0, 0, e, r), this.scissorTest = !1, this.viewport = new Si(0, 0, e, r), h = h || {}, this.texture = new cn(void 0, h.mapping, h.wrapS, h.wrapT, h.magFilter, h.minFilter, h.format, h.type, h.anisotropy, h.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = r, this.texture.image.depth = 1, this.texture.generateMipmaps = h.generateMipmaps !== void 0 && h.generateMipmaps, this.texture.minFilter = h.minFilter !== void 0 ? h.minFilter : 1006, this.depthBuffer = h.depthBuffer === void 0 || h.depthBuffer, this.stencilBuffer = h.stencilBuffer !== void 0 && h.stencilBuffer, this.depthTexture = h.depthTexture !== void 0 ? h.depthTexture : null
            }
            setTexture(e) {
                e.image = {
                    width: this.width,
                    height: this.height,
                    depth: this.depth
                }, this.texture = e
            }
            setSize(e, r, h = 1) {
                this.width === e && this.height === r && this.depth === h || (this.width = e, this.height = r, this.depth = h, this.texture.image.width = e, this.texture.image.height = r, this.texture.image.depth = h, this.dispose()), this.viewport.set(0, 0, e, r), this.scissor.set(0, 0, e, r)
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }
        qi.prototype.isWebGLRenderTarget = !0;
        class Nn extends qi {
            constructor(e, r, h) {
                super(e, r, h), this.samples = 4
            }
            copy(e) {
                return super.copy.call(this, e), this.samples = e.samples, this
            }
        }
        Nn.prototype.isWebGLMultisampleRenderTarget = !0;
        class Bn {
            constructor(e = 0, r = 0, h = 0, c = 1) {
                this._x = e, this._y = r, this._z = h, this._w = c
            }
            static slerp(e, r, h, c) {
                return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), h.slerpQuaternions(e, r, c)
            }
            static slerpFlat(e, r, h, c, v, w, E) {
                let T = h[c + 0],
                    B = h[c + 1],
                    Q = h[c + 2],
                    k = h[c + 3];
                const i = v[w + 0],
                    t = v[w + 1],
                    a = v[w + 2],
                    l = v[w + 3];
                if (E === 0) return e[r + 0] = T, e[r + 1] = B, e[r + 2] = Q, void(e[r + 3] = k);
                if (E === 1) return e[r + 0] = i, e[r + 1] = t, e[r + 2] = a, void(e[r + 3] = l);
                if (k !== l || T !== i || B !== t || Q !== a) {
                    let d = 1 - E;
                    const g = T * i + B * t + Q * a + k * l,
                        x = g >= 0 ? 1 : -1,
                        A = 1 - g * g;
                    if (A > Number.EPSILON) {
                        const F = Math.sqrt(A),
                            D = Math.atan2(F, g * x);
                        d = Math.sin(d * D) / F, E = Math.sin(E * D) / F
                    }
                    const M = E * x;
                    if (T = T * d + i * M, B = B * d + t * M, Q = Q * d + a * M, k = k * d + l * M, d === 1 - E) {
                        const F = 1 / Math.sqrt(T * T + B * B + Q * Q + k * k);
                        T *= F, B *= F, Q *= F, k *= F
                    }
                }
                e[r] = T, e[r + 1] = B, e[r + 2] = Q, e[r + 3] = k
            }
            static multiplyQuaternionsFlat(e, r, h, c, v, w) {
                const E = h[c],
                    T = h[c + 1],
                    B = h[c + 2],
                    Q = h[c + 3],
                    k = v[w],
                    i = v[w + 1],
                    t = v[w + 2],
                    a = v[w + 3];
                return e[r] = E * a + Q * k + T * t - B * i, e[r + 1] = T * a + Q * i + B * k - E * t, e[r + 2] = B * a + Q * t + E * i - T * k, e[r + 3] = Q * a - E * k - T * i - B * t, e
            }
            get x() {
                return this._x
            }
            set x(e) {
                this._x = e, this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(e) {
                this._y = e, this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(e) {
                this._z = e, this._onChangeCallback()
            }
            get w() {
                return this._w
            }
            set w(e) {
                this._w = e, this._onChangeCallback()
            }
            set(e, r, h, c) {
                return this._x = e, this._y = r, this._z = h, this._w = c, this._onChangeCallback(), this
            }
            clone() {
                return new this.constructor(this._x, this._y, this._z, this._w)
            }
            copy(e) {
                return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
            }
            setFromEuler(e, r) {
                if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                const h = e._x,
                    c = e._y,
                    v = e._z,
                    w = e._order,
                    E = Math.cos,
                    T = Math.sin,
                    B = E(h / 2),
                    Q = E(c / 2),
                    k = E(v / 2),
                    i = T(h / 2),
                    t = T(c / 2),
                    a = T(v / 2);
                switch (w) {
                    case "XYZ":
                        this._x = i * Q * k + B * t * a, this._y = B * t * k - i * Q * a, this._z = B * Q * a + i * t * k, this._w = B * Q * k - i * t * a;
                        break;
                    case "YXZ":
                        this._x = i * Q * k + B * t * a, this._y = B * t * k - i * Q * a, this._z = B * Q * a - i * t * k, this._w = B * Q * k + i * t * a;
                        break;
                    case "ZXY":
                        this._x = i * Q * k - B * t * a, this._y = B * t * k + i * Q * a, this._z = B * Q * a + i * t * k, this._w = B * Q * k - i * t * a;
                        break;
                    case "ZYX":
                        this._x = i * Q * k - B * t * a, this._y = B * t * k + i * Q * a, this._z = B * Q * a - i * t * k, this._w = B * Q * k + i * t * a;
                        break;
                    case "YZX":
                        this._x = i * Q * k + B * t * a, this._y = B * t * k + i * Q * a, this._z = B * Q * a - i * t * k, this._w = B * Q * k - i * t * a;
                        break;
                    case "XZY":
                        this._x = i * Q * k - B * t * a, this._y = B * t * k - i * Q * a, this._z = B * Q * a + i * t * k, this._w = B * Q * k + i * t * a;
                        break;
                    default:
                        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + w)
                }
                return r !== !1 && this._onChangeCallback(), this
            }
            setFromAxisAngle(e, r) {
                const h = r / 2,
                    c = Math.sin(h);
                return this._x = e.x * c, this._y = e.y * c, this._z = e.z * c, this._w = Math.cos(h), this._onChangeCallback(), this
            }
            setFromRotationMatrix(e) {
                const r = e.elements,
                    h = r[0],
                    c = r[4],
                    v = r[8],
                    w = r[1],
                    E = r[5],
                    T = r[9],
                    B = r[2],
                    Q = r[6],
                    k = r[10],
                    i = h + E + k;
                if (i > 0) {
                    const t = .5 / Math.sqrt(i + 1);
                    this._w = .25 / t, this._x = (Q - T) * t, this._y = (v - B) * t, this._z = (w - c) * t
                } else if (h > E && h > k) {
                    const t = 2 * Math.sqrt(1 + h - E - k);
                    this._w = (Q - T) / t, this._x = .25 * t, this._y = (c + w) / t, this._z = (v + B) / t
                } else if (E > k) {
                    const t = 2 * Math.sqrt(1 + E - h - k);
                    this._w = (v - B) / t, this._x = (c + w) / t, this._y = .25 * t, this._z = (T + Q) / t
                } else {
                    const t = 2 * Math.sqrt(1 + k - h - E);
                    this._w = (w - c) / t, this._x = (v + B) / t, this._y = (T + Q) / t, this._z = .25 * t
                }
                return this._onChangeCallback(), this
            }
            setFromUnitVectors(e, r) {
                let h = e.dot(r) + 1;
                return h < Number.EPSILON ? (h = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = h) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = h)) : (this._x = e.y * r.z - e.z * r.y, this._y = e.z * r.x - e.x * r.z, this._z = e.x * r.y - e.y * r.x, this._w = h), this.normalize()
            }
            angleTo(e) {
                return 2 * Math.acos(Math.abs(Mi.clamp(this.dot(e), -1, 1)))
            }
            rotateTowards(e, r) {
                const h = this.angleTo(e);
                if (h === 0) return this;
                const c = Math.min(1, r / h);
                return this.slerp(e, c), this
            }
            identity() {
                return this.set(0, 0, 0, 1)
            }
            invert() {
                return this.conjugate()
            }
            conjugate() {
                return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
            }
            dot(e) {
                return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
            }
            lengthSq() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            }
            length() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            }
            normalize() {
                let e = this.length();
                return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
            }
            multiply(e, r) {
                return r !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, r)) : this.multiplyQuaternions(this, e)
            }
            premultiply(e) {
                return this.multiplyQuaternions(e, this)
            }
            multiplyQuaternions(e, r) {
                const h = e._x,
                    c = e._y,
                    v = e._z,
                    w = e._w,
                    E = r._x,
                    T = r._y,
                    B = r._z,
                    Q = r._w;
                return this._x = h * Q + w * E + c * B - v * T, this._y = c * Q + w * T + v * E - h * B, this._z = v * Q + w * B + h * T - c * E, this._w = w * Q - h * E - c * T - v * B, this._onChangeCallback(), this
            }
            slerp(e, r) {
                if (r === 0) return this;
                if (r === 1) return this.copy(e);
                const h = this._x,
                    c = this._y,
                    v = this._z,
                    w = this._w;
                let E = w * e._w + h * e._x + c * e._y + v * e._z;
                if (E < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, E = -E) : this.copy(e), E >= 1) return this._w = w, this._x = h, this._y = c, this._z = v, this;
                const T = 1 - E * E;
                if (T <= Number.EPSILON) {
                    const t = 1 - r;
                    return this._w = t * w + r * this._w, this._x = t * h + r * this._x, this._y = t * c + r * this._y, this._z = t * v + r * this._z, this.normalize(), this._onChangeCallback(), this
                }
                const B = Math.sqrt(T),
                    Q = Math.atan2(B, E),
                    k = Math.sin((1 - r) * Q) / B,
                    i = Math.sin(r * Q) / B;
                return this._w = w * k + this._w * i, this._x = h * k + this._x * i, this._y = c * k + this._y * i, this._z = v * k + this._z * i, this._onChangeCallback(), this
            }
            slerpQuaternions(e, r, h) {
                this.copy(e).slerp(r, h)
            }
            equals(e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
            }
            fromArray(e, r = 0) {
                return this._x = e[r], this._y = e[r + 1], this._z = e[r + 2], this._w = e[r + 3], this._onChangeCallback(), this
            }
            toArray(e = [], r = 0) {
                return e[r] = this._x, e[r + 1] = this._y, e[r + 2] = this._z, e[r + 3] = this._w, e
            }
            fromBufferAttribute(e, r) {
                return this._x = e.getX(r), this._y = e.getY(r), this._z = e.getZ(r), this._w = e.getW(r), this
            }
            _onChange(e) {
                return this._onChangeCallback = e, this
            }
            _onChangeCallback() {}
        }
        Bn.prototype.isQuaternion = !0;
        class ge {
            constructor(e = 0, r = 0, h = 0) {
                this.x = e, this.y = r, this.z = h
            }
            set(e, r, h) {
                return h === void 0 && (h = this.z), this.x = e, this.y = r, this.z = h, this
            }
            setScalar(e) {
                return this.x = e, this.y = e, this.z = e, this
            }
            setX(e) {
                return this.x = e, this
            }
            setY(e) {
                return this.y = e, this
            }
            setZ(e) {
                return this.z = e, this
            }
            setComponent(e, r) {
                switch (e) {
                    case 0:
                        this.x = r;
                        break;
                    case 1:
                        this.y = r;
                        break;
                    case 2:
                        this.z = r;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }
            clone() {
                return new this.constructor(this.x, this.y, this.z)
            }
            copy(e) {
                return this.x = e.x, this.y = e.y, this.z = e.z, this
            }
            add(e, r) {
                return r !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, r)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
            }
            addScalar(e) {
                return this.x += e, this.y += e, this.z += e, this
            }
            addVectors(e, r) {
                return this.x = e.x + r.x, this.y = e.y + r.y, this.z = e.z + r.z, this
            }
            addScaledVector(e, r) {
                return this.x += e.x * r, this.y += e.y * r, this.z += e.z * r, this
            }
            sub(e, r) {
                return r !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, r)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
            }
            subScalar(e) {
                return this.x -= e, this.y -= e, this.z -= e, this
            }
            subVectors(e, r) {
                return this.x = e.x - r.x, this.y = e.y - r.y, this.z = e.z - r.z, this
            }
            multiply(e, r) {
                return r !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, r)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
            }
            multiplyScalar(e) {
                return this.x *= e, this.y *= e, this.z *= e, this
            }
            multiplyVectors(e, r) {
                return this.x = e.x * r.x, this.y = e.y * r.y, this.z = e.z * r.z, this
            }
            applyEuler(e) {
                return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(On.setFromEuler(e))
            }
            applyAxisAngle(e, r) {
                return this.applyQuaternion(On.setFromAxisAngle(e, r))
            }
            applyMatrix3(e) {
                const r = this.x,
                    h = this.y,
                    c = this.z,
                    v = e.elements;
                return this.x = v[0] * r + v[3] * h + v[6] * c, this.y = v[1] * r + v[4] * h + v[7] * c, this.z = v[2] * r + v[5] * h + v[8] * c, this
            }
            applyNormalMatrix(e) {
                return this.applyMatrix3(e).normalize()
            }
            applyMatrix4(e) {
                const r = this.x,
                    h = this.y,
                    c = this.z,
                    v = e.elements,
                    w = 1 / (v[3] * r + v[7] * h + v[11] * c + v[15]);
                return this.x = (v[0] * r + v[4] * h + v[8] * c + v[12]) * w, this.y = (v[1] * r + v[5] * h + v[9] * c + v[13]) * w, this.z = (v[2] * r + v[6] * h + v[10] * c + v[14]) * w, this
            }
            applyQuaternion(e) {
                const r = this.x,
                    h = this.y,
                    c = this.z,
                    v = e.x,
                    w = e.y,
                    E = e.z,
                    T = e.w,
                    B = T * r + w * c - E * h,
                    Q = T * h + E * r - v * c,
                    k = T * c + v * h - w * r,
                    i = -v * r - w * h - E * c;
                return this.x = B * T + i * -v + Q * -E - k * -w, this.y = Q * T + i * -w + k * -v - B * -E, this.z = k * T + i * -E + B * -w - Q * -v, this
            }
            project(e) {
                return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
            }
            unproject(e) {
                return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
            }
            transformDirection(e) {
                const r = this.x,
                    h = this.y,
                    c = this.z,
                    v = e.elements;
                return this.x = v[0] * r + v[4] * h + v[8] * c, this.y = v[1] * r + v[5] * h + v[9] * c, this.z = v[2] * r + v[6] * h + v[10] * c, this.normalize()
            }
            divide(e) {
                return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
            }
            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }
            min(e) {
                return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
            }
            max(e) {
                return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
            }
            clamp(e, r) {
                return this.x = Math.max(e.x, Math.min(r.x, this.x)), this.y = Math.max(e.y, Math.min(r.y, this.y)), this.z = Math.max(e.z, Math.min(r.z, this.z)), this
            }
            clampScalar(e, r) {
                return this.x = Math.max(e, Math.min(r, this.x)), this.y = Math.max(e, Math.min(r, this.y)), this.z = Math.max(e, Math.min(r, this.z)), this
            }
            clampLength(e, r) {
                const h = this.length();
                return this.divideScalar(h || 1).multiplyScalar(Math.max(e, Math.min(r, h)))
            }
            floor() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
            }
            ceil() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
            }
            round() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
            }
            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
            }
            negate() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e, r) {
                return this.x += (e.x - this.x) * r, this.y += (e.y - this.y) * r, this.z += (e.z - this.z) * r, this
            }
            lerpVectors(e, r, h) {
                return this.x = e.x + (r.x - e.x) * h, this.y = e.y + (r.y - e.y) * h, this.z = e.z + (r.z - e.z) * h, this
            }
            cross(e, r) {
                return r !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, r)) : this.crossVectors(this, e)
            }
            crossVectors(e, r) {
                const h = e.x,
                    c = e.y,
                    v = e.z,
                    w = r.x,
                    E = r.y,
                    T = r.z;
                return this.x = c * T - v * E, this.y = v * w - h * T, this.z = h * E - c * w, this
            }
            projectOnVector(e) {
                const r = e.lengthSq();
                if (r === 0) return this.set(0, 0, 0);
                const h = e.dot(this) / r;
                return this.copy(e).multiplyScalar(h)
            }
            projectOnPlane(e) {
                return ga.copy(this).projectOnVector(e), this.sub(ga)
            }
            reflect(e) {
                return this.sub(ga.copy(e).multiplyScalar(2 * this.dot(e)))
            }
            angleTo(e) {
                const r = Math.sqrt(this.lengthSq() * e.lengthSq());
                if (r === 0) return Math.PI / 2;
                const h = this.dot(e) / r;
                return Math.acos(Mi.clamp(h, -1, 1))
            }
            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }
            distanceToSquared(e) {
                const r = this.x - e.x,
                    h = this.y - e.y,
                    c = this.z - e.z;
                return r * r + h * h + c * c
            }
            manhattanDistanceTo(e) {
                return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
            }
            setFromSpherical(e) {
                return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
            }
            setFromSphericalCoords(e, r, h) {
                const c = Math.sin(r) * e;
                return this.x = c * Math.sin(h), this.y = Math.cos(r) * e, this.z = c * Math.cos(h), this
            }
            setFromCylindrical(e) {
                return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
            }
            setFromCylindricalCoords(e, r, h) {
                return this.x = e * Math.sin(r), this.y = h, this.z = e * Math.cos(r), this
            }
            setFromMatrixPosition(e) {
                const r = e.elements;
                return this.x = r[12], this.y = r[13], this.z = r[14], this
            }
            setFromMatrixScale(e) {
                const r = this.setFromMatrixColumn(e, 0).length(),
                    h = this.setFromMatrixColumn(e, 1).length(),
                    c = this.setFromMatrixColumn(e, 2).length();
                return this.x = r, this.y = h, this.z = c, this
            }
            setFromMatrixColumn(e, r) {
                return this.fromArray(e.elements, 4 * r)
            }
            setFromMatrix3Column(e, r) {
                return this.fromArray(e.elements, 3 * r)
            }
            equals(e) {
                return e.x === this.x && e.y === this.y && e.z === this.z
            }
            fromArray(e, r = 0) {
                return this.x = e[r], this.y = e[r + 1], this.z = e[r + 2], this
            }
            toArray(e = [], r = 0) {
                return e[r] = this.x, e[r + 1] = this.y, e[r + 2] = this.z, e
            }
            fromBufferAttribute(e, r, h) {
                return h !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(r), this.y = e.getY(r), this.z = e.getZ(r), this
            }
            random() {
                return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
            }
        }
        ge.prototype.isVector3 = !0;
        const ga = new ge,
            On = new Bn;
        class Te {
            constructor(e = new ge(1 / 0, 1 / 0, 1 / 0), r = new ge(-1 / 0, -1 / 0, -1 / 0)) {
                this.min = e, this.max = r
            }
            set(e, r) {
                return this.min.copy(e), this.max.copy(r), this
            }
            setFromArray(e) {
                let r = 1 / 0,
                    h = 1 / 0,
                    c = 1 / 0,
                    v = -1 / 0,
                    w = -1 / 0,
                    E = -1 / 0;
                for (let T = 0, B = e.length; T < B; T += 3) {
                    const Q = e[T],
                        k = e[T + 1],
                        i = e[T + 2];
                    Q < r && (r = Q), k < h && (h = k), i < c && (c = i), Q > v && (v = Q), k > w && (w = k), i > E && (E = i)
                }
                return this.min.set(r, h, c), this.max.set(v, w, E), this
            }
            setFromBufferAttribute(e) {
                let r = 1 / 0,
                    h = 1 / 0,
                    c = 1 / 0,
                    v = -1 / 0,
                    w = -1 / 0,
                    E = -1 / 0;
                for (let T = 0, B = e.count; T < B; T++) {
                    const Q = e.getX(T),
                        k = e.getY(T),
                        i = e.getZ(T);
                    Q < r && (r = Q), k < h && (h = k), i < c && (c = i), Q > v && (v = Q), k > w && (w = k), i > E && (E = i)
                }
                return this.min.set(r, h, c), this.max.set(v, w, E), this
            }
            setFromPoints(e) {
                this.makeEmpty();
                for (let r = 0, h = e.length; r < h; r++) this.expandByPoint(e[r]);
                return this
            }
            setFromCenterAndSize(e, r) {
                const h = he.copy(r).multiplyScalar(.5);
                return this.min.copy(e).sub(h), this.max.copy(e).add(h), this
            }
            setFromObject(e) {
                return this.makeEmpty(), this.expandByObject(e)
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                return this.min.copy(e.min), this.max.copy(e.max), this
            }
            makeEmpty() {
                return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
            }
            isEmpty() {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            }
            getCenter(e) {
                return e === void 0 && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new ge), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
            }
            getSize(e) {
                return e === void 0 && (console.warn("THREE.Box3: .getSize() target is now required"), e = new ge), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
            }
            expandByPoint(e) {
                return this.min.min(e), this.max.max(e), this
            }
            expandByVector(e) {
                return this.min.sub(e), this.max.add(e), this
            }
            expandByScalar(e) {
                return this.min.addScalar(-e), this.max.addScalar(e), this
            }
            expandByObject(e) {
                e.updateWorldMatrix(!1, !1);
                const r = e.geometry;
                r !== void 0 && (r.boundingBox === null && r.computeBoundingBox(), fe.copy(r.boundingBox), fe.applyMatrix4(e.matrixWorld), this.union(fe));
                const h = e.children;
                for (let c = 0, v = h.length; c < v; c++) this.expandByObject(h[c]);
                return this
            }
            containsPoint(e) {
                return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
            }
            containsBox(e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
            }
            getParameter(e, r) {
                return r === void 0 && (console.warn("THREE.Box3: .getParameter() target is now required"), r = new ge), r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
            }
            intersectsBox(e) {
                return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
            }
            intersectsSphere(e) {
                return this.clampPoint(e.center, he), he.distanceToSquared(e.center) <= e.radius * e.radius
            }
            intersectsPlane(e) {
                let r, h;
                return e.normal.x > 0 ? (r = e.normal.x * this.min.x, h = e.normal.x * this.max.x) : (r = e.normal.x * this.max.x, h = e.normal.x * this.min.x), e.normal.y > 0 ? (r += e.normal.y * this.min.y, h += e.normal.y * this.max.y) : (r += e.normal.y * this.max.y, h += e.normal.y * this.min.y), e.normal.z > 0 ? (r += e.normal.z * this.min.z, h += e.normal.z * this.max.z) : (r += e.normal.z * this.max.z, h += e.normal.z * this.min.z), r <= -e.constant && h >= -e.constant
            }
            intersectsTriangle(e) {
                if (this.isEmpty()) return !1;
                this.getCenter(Jt), zt.subVectors(this.max, Jt), Ae.subVectors(e.a, Jt), qe.subVectors(e.b, Jt), et.subVectors(e.c, Jt), it.subVectors(qe, Ae), We.subVectors(et, qe), ft.subVectors(Ae, et);
                let r = [0, -it.z, it.y, 0, -We.z, We.y, 0, -ft.z, ft.y, it.z, 0, -it.x, We.z, 0, -We.x, ft.z, 0, -ft.x, -it.y, it.x, 0, -We.y, We.x, 0, -ft.y, ft.x, 0];
                return !!Zi(r, Ae, qe, et, zt) && (r = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Zi(r, Ae, qe, et, zt) && (It.crossVectors(it, We), r = [It.x, It.y, It.z], Zi(r, Ae, qe, et, zt)))
            }
            clampPoint(e, r) {
                return r === void 0 && (console.warn("THREE.Box3: .clampPoint() target is now required"), r = new ge), r.copy(e).clamp(this.min, this.max)
            }
            distanceToPoint(e) {
                return he.copy(e).clamp(this.min, this.max).sub(e).length()
            }
            getBoundingSphere(e) {
                return e === void 0 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = .5 * this.getSize(he).length(), e
            }
            intersect(e) {
                return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
            }
            union(e) {
                return this.min.min(e.min), this.max.max(e.max), this
            }
            applyMatrix4(e) {
                return this.isEmpty() || (te[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), te[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), te[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), te[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), te[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), te[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), te[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), te[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(te)), this
            }
            translate(e) {
                return this.min.add(e), this.max.add(e), this
            }
            equals(e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }
        }
        Te.prototype.isBox3 = !0;
        const te = [new ge, new ge, new ge, new ge, new ge, new ge, new ge, new ge],
            he = new ge,
            fe = new Te,
            Ae = new ge,
            qe = new ge,
            et = new ge,
            it = new ge,
            We = new ge,
            ft = new ge,
            Jt = new ge,
            zt = new ge,
            It = new ge,
            zi = new ge;

        function Zi(s, e, r, h, c) {
            for (let v = 0, w = s.length - 3; v <= w; v += 3) {
                zi.fromArray(s, v);
                const E = c.x * Math.abs(zi.x) + c.y * Math.abs(zi.y) + c.z * Math.abs(zi.z),
                    T = e.dot(zi),
                    B = r.dot(zi),
                    Q = h.dot(zi);
                if (Math.max(-Math.max(T, B, Q), Math.min(T, B, Q)) > E) return !1
            }
            return !0
        }
        const dn = new Te,
            on = new ge,
            vn = new ge,
            Pn = new ge;
        class Fn {
            constructor(e = new ge, r = -1) {
                this.center = e, this.radius = r
            }
            set(e, r) {
                return this.center.copy(e), this.radius = r, this
            }
            setFromPoints(e, r) {
                const h = this.center;
                r !== void 0 ? h.copy(r) : dn.setFromPoints(e).getCenter(h);
                let c = 0;
                for (let v = 0, w = e.length; v < w; v++) c = Math.max(c, h.distanceToSquared(e[v]));
                return this.radius = Math.sqrt(c), this
            }
            copy(e) {
                return this.center.copy(e.center), this.radius = e.radius, this
            }
            isEmpty() {
                return this.radius < 0
            }
            makeEmpty() {
                return this.center.set(0, 0, 0), this.radius = -1, this
            }
            containsPoint(e) {
                return e.distanceToSquared(this.center) <= this.radius * this.radius
            }
            distanceToPoint(e) {
                return e.distanceTo(this.center) - this.radius
            }
            intersectsSphere(e) {
                const r = this.radius + e.radius;
                return e.center.distanceToSquared(this.center) <= r * r
            }
            intersectsBox(e) {
                return e.intersectsSphere(this)
            }
            intersectsPlane(e) {
                return Math.abs(e.distanceToPoint(this.center)) <= this.radius
            }
            clampPoint(e, r) {
                const h = this.center.distanceToSquared(e);
                return r === void 0 && (console.warn("THREE.Sphere: .clampPoint() target is now required"), r = new ge), r.copy(e), h > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
            }
            getBoundingBox(e) {
                return e === void 0 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new Te), this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
            }
            applyMatrix4(e) {
                return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
            }
            translate(e) {
                return this.center.add(e), this
            }
            expandByPoint(e) {
                Pn.subVectors(e, this.center);
                const r = Pn.lengthSq();
                if (r > this.radius * this.radius) {
                    const h = Math.sqrt(r),
                        c = .5 * (h - this.radius);
                    this.center.add(Pn.multiplyScalar(c / h)), this.radius += c
                }
                return this
            }
            union(e) {
                return vn.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(on.copy(e.center).add(vn)), this.expandByPoint(on.copy(e.center).sub(vn)), this
            }
            equals(e) {
                return e.center.equals(this.center) && e.radius === this.radius
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        const kn = new ge,
            hn = new ge,
            Vn = new ge,
            Gn = new ge,
            zr = new ge,
            br = new ge,
            ur = new ge;
        class wr {
            constructor(e = new ge, r = new ge(0, 0, -1)) {
                this.origin = e, this.direction = r
            }
            set(e, r) {
                return this.origin.copy(e), this.direction.copy(r), this
            }
            copy(e) {
                return this.origin.copy(e.origin), this.direction.copy(e.direction), this
            }
            at(e, r) {
                return r === void 0 && (console.warn("THREE.Ray: .at() target is now required"), r = new ge), r.copy(this.direction).multiplyScalar(e).add(this.origin)
            }
            lookAt(e) {
                return this.direction.copy(e).sub(this.origin).normalize(), this
            }
            recast(e) {
                return this.origin.copy(this.at(e, kn)), this
            }
            closestPointToPoint(e, r) {
                r === void 0 && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), r = new ge), r.subVectors(e, this.origin);
                const h = r.dot(this.direction);
                return h < 0 ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(h).add(this.origin)
            }
            distanceToPoint(e) {
                return Math.sqrt(this.distanceSqToPoint(e))
            }
            distanceSqToPoint(e) {
                const r = kn.subVectors(e, this.origin).dot(this.direction);
                return r < 0 ? this.origin.distanceToSquared(e) : (kn.copy(this.direction).multiplyScalar(r).add(this.origin), kn.distanceToSquared(e))
            }
            distanceSqToSegment(e, r, h, c) {
                hn.copy(e).add(r).multiplyScalar(.5), Vn.copy(r).sub(e).normalize(), Gn.copy(this.origin).sub(hn);
                const v = .5 * e.distanceTo(r),
                    w = -this.direction.dot(Vn),
                    E = Gn.dot(this.direction),
                    T = -Gn.dot(Vn),
                    B = Gn.lengthSq(),
                    Q = Math.abs(1 - w * w);
                let k, i, t, a;
                if (Q > 0)
                    if (k = w * T - E, i = w * E - T, a = v * Q, k >= 0)
                        if (i >= -a)
                            if (i <= a) {
                                const l = 1 / Q;
                                k *= l, i *= l, t = k * (k + w * i + 2 * E) + i * (w * k + i + 2 * T) + B
                            } else i = v, k = Math.max(0, -(w * i + E)), t = -k * k + i * (i + 2 * T) + B;
                else i = -v, k = Math.max(0, -(w * i + E)), t = -k * k + i * (i + 2 * T) + B;
                else i <= -a ? (k = Math.max(0, -(-w * v + E)), i = k > 0 ? -v : Math.min(Math.max(-v, -T), v), t = -k * k + i * (i + 2 * T) + B) : i <= a ? (k = 0, i = Math.min(Math.max(-v, -T), v), t = i * (i + 2 * T) + B) : (k = Math.max(0, -(w * v + E)), i = k > 0 ? v : Math.min(Math.max(-v, -T), v), t = -k * k + i * (i + 2 * T) + B);
                else i = w > 0 ? -v : v, k = Math.max(0, -(w * i + E)), t = -k * k + i * (i + 2 * T) + B;
                return h && h.copy(this.direction).multiplyScalar(k).add(this.origin), c && c.copy(Vn).multiplyScalar(i).add(hn), t
            }
            intersectSphere(e, r) {
                kn.subVectors(e.center, this.origin);
                const h = kn.dot(this.direction),
                    c = kn.dot(kn) - h * h,
                    v = e.radius * e.radius;
                if (c > v) return null;
                const w = Math.sqrt(v - c),
                    E = h - w,
                    T = h + w;
                return E < 0 && T < 0 ? null : E < 0 ? this.at(T, r) : this.at(E, r)
            }
            intersectsSphere(e) {
                return this.distanceSqToPoint(e.center) <= e.radius * e.radius
            }
            distanceToPlane(e) {
                const r = e.normal.dot(this.direction);
                if (r === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
                const h = -(this.origin.dot(e.normal) + e.constant) / r;
                return h >= 0 ? h : null
            }
            intersectPlane(e, r) {
                const h = this.distanceToPlane(e);
                return h === null ? null : this.at(h, r)
            }
            intersectsPlane(e) {
                const r = e.distanceToPoint(this.origin);
                return r === 0 ? !0 : e.normal.dot(this.direction) * r < 0
            }
            intersectBox(e, r) {
                let h, c, v, w, E, T;
                const B = 1 / this.direction.x,
                    Q = 1 / this.direction.y,
                    k = 1 / this.direction.z,
                    i = this.origin;
                return B >= 0 ? (h = (e.min.x - i.x) * B, c = (e.max.x - i.x) * B) : (h = (e.max.x - i.x) * B, c = (e.min.x - i.x) * B), Q >= 0 ? (v = (e.min.y - i.y) * Q, w = (e.max.y - i.y) * Q) : (v = (e.max.y - i.y) * Q, w = (e.min.y - i.y) * Q), h > w || v > c ? null : ((v > h || h != h) && (h = v), (w < c || c != c) && (c = w), k >= 0 ? (E = (e.min.z - i.z) * k, T = (e.max.z - i.z) * k) : (E = (e.max.z - i.z) * k, T = (e.min.z - i.z) * k), h > T || E > c ? null : ((E > h || h != h) && (h = E), (T < c || c != c) && (c = T), c < 0 ? null : this.at(h >= 0 ? h : c, r)))
            }
            intersectsBox(e) {
                return this.intersectBox(e, kn) !== null
            }
            intersectTriangle(e, r, h, c, v) {
                zr.subVectors(r, e), br.subVectors(h, e), ur.crossVectors(zr, br);
                let w, E = this.direction.dot(ur);
                if (E > 0) {
                    if (c) return null;
                    w = 1
                } else {
                    if (!(E < 0)) return null;
                    w = -1, E = -E
                }
                Gn.subVectors(this.origin, e);
                const T = w * this.direction.dot(br.crossVectors(Gn, br));
                if (T < 0) return null;
                const B = w * this.direction.dot(zr.cross(Gn));
                if (B < 0 || T + B > E) return null;
                const Q = -w * Gn.dot(ur);
                return Q < 0 ? null : this.at(Q / E, v)
            }
            applyMatrix4(e) {
                return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
            }
            equals(e) {
                return e.origin.equals(this.origin) && e.direction.equals(this.direction)
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        class Ui {
            constructor() {
                this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
            }
            set(e, r, h, c, v, w, E, T, B, Q, k, i, t, a, l, d) {
                const g = this.elements;
                return g[0] = e, g[4] = r, g[8] = h, g[12] = c, g[1] = v, g[5] = w, g[9] = E, g[13] = T, g[2] = B, g[6] = Q, g[10] = k, g[14] = i, g[3] = t, g[7] = a, g[11] = l, g[15] = d, this
            }
            identity() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            }
            clone() {
                return new Ui().fromArray(this.elements)
            }
            copy(e) {
                const r = this.elements,
                    h = e.elements;
                return r[0] = h[0], r[1] = h[1], r[2] = h[2], r[3] = h[3], r[4] = h[4], r[5] = h[5], r[6] = h[6], r[7] = h[7], r[8] = h[8], r[9] = h[9], r[10] = h[10], r[11] = h[11], r[12] = h[12], r[13] = h[13], r[14] = h[14], r[15] = h[15], this
            }
            copyPosition(e) {
                const r = this.elements,
                    h = e.elements;
                return r[12] = h[12], r[13] = h[13], r[14] = h[14], this
            }
            setFromMatrix3(e) {
                const r = e.elements;
                return this.set(r[0], r[3], r[6], 0, r[1], r[4], r[7], 0, r[2], r[5], r[8], 0, 0, 0, 0, 1), this
            }
            extractBasis(e, r, h) {
                return e.setFromMatrixColumn(this, 0), r.setFromMatrixColumn(this, 1), h.setFromMatrixColumn(this, 2), this
            }
            makeBasis(e, r, h) {
                return this.set(e.x, r.x, h.x, 0, e.y, r.y, h.y, 0, e.z, r.z, h.z, 0, 0, 0, 0, 1), this
            }
            extractRotation(e) {
                const r = this.elements,
                    h = e.elements,
                    c = 1 / ya.setFromMatrixColumn(e, 0).length(),
                    v = 1 / ya.setFromMatrixColumn(e, 1).length(),
                    w = 1 / ya.setFromMatrixColumn(e, 2).length();
                return r[0] = h[0] * c, r[1] = h[1] * c, r[2] = h[2] * c, r[3] = 0, r[4] = h[4] * v, r[5] = h[5] * v, r[6] = h[6] * v, r[7] = 0, r[8] = h[8] * w, r[9] = h[9] * w, r[10] = h[10] * w, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, this
            }
            makeRotationFromEuler(e) {
                e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                const r = this.elements,
                    h = e.x,
                    c = e.y,
                    v = e.z,
                    w = Math.cos(h),
                    E = Math.sin(h),
                    T = Math.cos(c),
                    B = Math.sin(c),
                    Q = Math.cos(v),
                    k = Math.sin(v);
                if (e.order === "XYZ") {
                    const i = w * Q,
                        t = w * k,
                        a = E * Q,
                        l = E * k;
                    r[0] = T * Q, r[4] = -T * k, r[8] = B, r[1] = t + a * B, r[5] = i - l * B, r[9] = -E * T, r[2] = l - i * B, r[6] = a + t * B, r[10] = w * T
                } else if (e.order === "YXZ") {
                    const i = T * Q,
                        t = T * k,
                        a = B * Q,
                        l = B * k;
                    r[0] = i + l * E, r[4] = a * E - t, r[8] = w * B, r[1] = w * k, r[5] = w * Q, r[9] = -E, r[2] = t * E - a, r[6] = l + i * E, r[10] = w * T
                } else if (e.order === "ZXY") {
                    const i = T * Q,
                        t = T * k,
                        a = B * Q,
                        l = B * k;
                    r[0] = i - l * E, r[4] = -w * k, r[8] = a + t * E, r[1] = t + a * E, r[5] = w * Q, r[9] = l - i * E, r[2] = -w * B, r[6] = E, r[10] = w * T
                } else if (e.order === "ZYX") {
                    const i = w * Q,
                        t = w * k,
                        a = E * Q,
                        l = E * k;
                    r[0] = T * Q, r[4] = a * B - t, r[8] = i * B + l, r[1] = T * k, r[5] = l * B + i, r[9] = t * B - a, r[2] = -B, r[6] = E * T, r[10] = w * T
                } else if (e.order === "YZX") {
                    const i = w * T,
                        t = w * B,
                        a = E * T,
                        l = E * B;
                    r[0] = T * Q, r[4] = l - i * k, r[8] = a * k + t, r[1] = k, r[5] = w * Q, r[9] = -E * Q, r[2] = -B * Q, r[6] = t * k + a, r[10] = i - l * k
                } else if (e.order === "XZY") {
                    const i = w * T,
                        t = w * B,
                        a = E * T,
                        l = E * B;
                    r[0] = T * Q, r[4] = -k, r[8] = B * Q, r[1] = i * k + l, r[5] = w * Q, r[9] = t * k - a, r[2] = a * k - t, r[6] = E * Q, r[10] = l * k + i
                }
                return r[3] = 0, r[7] = 0, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, this
            }
            makeRotationFromQuaternion(e) {
                return this.compose(Qs, e, Ra)
            }
            lookAt(e, r, h) {
                const c = this.elements;
                return Lr.subVectors(e, r), Lr.lengthSq() === 0 && (Lr.z = 1), Lr.normalize(), rr.crossVectors(h, Lr), rr.lengthSq() === 0 && (Math.abs(h.z) === 1 ? Lr.x += 1e-4 : Lr.z += 1e-4, Lr.normalize(), rr.crossVectors(h, Lr)), rr.normalize(), Fr.crossVectors(Lr, rr), c[0] = rr.x, c[4] = Fr.x, c[8] = Lr.x, c[1] = rr.y, c[5] = Fr.y, c[9] = Lr.y, c[2] = rr.z, c[6] = Fr.z, c[10] = Lr.z, this
            }
            multiply(e, r) {
                return r !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, r)) : this.multiplyMatrices(this, e)
            }
            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }
            multiplyMatrices(e, r) {
                const h = e.elements,
                    c = r.elements,
                    v = this.elements,
                    w = h[0],
                    E = h[4],
                    T = h[8],
                    B = h[12],
                    Q = h[1],
                    k = h[5],
                    i = h[9],
                    t = h[13],
                    a = h[2],
                    l = h[6],
                    d = h[10],
                    g = h[14],
                    x = h[3],
                    A = h[7],
                    M = h[11],
                    F = h[15],
                    D = c[0],
                    U = c[4],
                    N = c[8],
                    H = c[12],
                    X = c[1],
                    ne = c[5],
                    le = c[9],
                    ce = c[13],
                    Qe = c[2],
                    Se = c[6],
                    Re = c[10],
                    ot = c[14],
                    dt = c[3],
                    Ct = c[7],
                    Nt = c[11],
                    qt = c[15];
                return v[0] = w * D + E * X + T * Qe + B * dt, v[4] = w * U + E * ne + T * Se + B * Ct, v[8] = w * N + E * le + T * Re + B * Nt, v[12] = w * H + E * ce + T * ot + B * qt, v[1] = Q * D + k * X + i * Qe + t * dt, v[5] = Q * U + k * ne + i * Se + t * Ct, v[9] = Q * N + k * le + i * Re + t * Nt, v[13] = Q * H + k * ce + i * ot + t * qt, v[2] = a * D + l * X + d * Qe + g * dt, v[6] = a * U + l * ne + d * Se + g * Ct, v[10] = a * N + l * le + d * Re + g * Nt, v[14] = a * H + l * ce + d * ot + g * qt, v[3] = x * D + A * X + M * Qe + F * dt, v[7] = x * U + A * ne + M * Se + F * Ct, v[11] = x * N + A * le + M * Re + F * Nt, v[15] = x * H + A * ce + M * ot + F * qt, this
            }
            multiplyScalar(e) {
                const r = this.elements;
                return r[0] *= e, r[4] *= e, r[8] *= e, r[12] *= e, r[1] *= e, r[5] *= e, r[9] *= e, r[13] *= e, r[2] *= e, r[6] *= e, r[10] *= e, r[14] *= e, r[3] *= e, r[7] *= e, r[11] *= e, r[15] *= e, this
            }
            determinant() {
                const e = this.elements,
                    r = e[0],
                    h = e[4],
                    c = e[8],
                    v = e[12],
                    w = e[1],
                    E = e[5],
                    T = e[9],
                    B = e[13],
                    Q = e[2],
                    k = e[6],
                    i = e[10],
                    t = e[14];
                return e[3] * (+v * T * k - c * B * k - v * E * i + h * B * i + c * E * t - h * T * t) + e[7] * (+r * T * t - r * B * i + v * w * i - c * w * t + c * B * Q - v * T * Q) + e[11] * (+r * B * k - r * E * t - v * w * k + h * w * t + v * E * Q - h * B * Q) + e[15] * (-c * E * Q - r * T * k + r * E * i + c * w * k - h * w * i + h * T * Q)
            }
            transpose() {
                const e = this.elements;
                let r;
                return r = e[1], e[1] = e[4], e[4] = r, r = e[2], e[2] = e[8], e[8] = r, r = e[6], e[6] = e[9], e[9] = r, r = e[3], e[3] = e[12], e[12] = r, r = e[7], e[7] = e[13], e[13] = r, r = e[11], e[11] = e[14], e[14] = r, this
            }
            setPosition(e, r, h) {
                const c = this.elements;
                return e.isVector3 ? (c[12] = e.x, c[13] = e.y, c[14] = e.z) : (c[12] = e, c[13] = r, c[14] = h), this
            }
            invert() {
                const e = this.elements,
                    r = e[0],
                    h = e[1],
                    c = e[2],
                    v = e[3],
                    w = e[4],
                    E = e[5],
                    T = e[6],
                    B = e[7],
                    Q = e[8],
                    k = e[9],
                    i = e[10],
                    t = e[11],
                    a = e[12],
                    l = e[13],
                    d = e[14],
                    g = e[15],
                    x = k * d * B - l * i * B + l * T * t - E * d * t - k * T * g + E * i * g,
                    A = a * i * B - Q * d * B - a * T * t + w * d * t + Q * T * g - w * i * g,
                    M = Q * l * B - a * k * B + a * E * t - w * l * t - Q * E * g + w * k * g,
                    F = a * k * T - Q * l * T - a * E * i + w * l * i + Q * E * d - w * k * d,
                    D = r * x + h * A + c * M + v * F;
                if (D === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                const U = 1 / D;
                return e[0] = x * U, e[1] = (l * i * v - k * d * v - l * c * t + h * d * t + k * c * g - h * i * g) * U, e[2] = (E * d * v - l * T * v + l * c * B - h * d * B - E * c * g + h * T * g) * U, e[3] = (k * T * v - E * i * v - k * c * B + h * i * B + E * c * t - h * T * t) * U, e[4] = A * U, e[5] = (Q * d * v - a * i * v + a * c * t - r * d * t - Q * c * g + r * i * g) * U, e[6] = (a * T * v - w * d * v - a * c * B + r * d * B + w * c * g - r * T * g) * U, e[7] = (w * i * v - Q * T * v + Q * c * B - r * i * B - w * c * t + r * T * t) * U, e[8] = M * U, e[9] = (a * k * v - Q * l * v - a * h * t + r * l * t + Q * h * g - r * k * g) * U, e[10] = (w * l * v - a * E * v + a * h * B - r * l * B - w * h * g + r * E * g) * U, e[11] = (Q * E * v - w * k * v - Q * h * B + r * k * B + w * h * t - r * E * t) * U, e[12] = F * U, e[13] = (Q * l * c - a * k * c + a * h * i - r * l * i - Q * h * d + r * k * d) * U, e[14] = (a * E * c - w * l * c - a * h * T + r * l * T + w * h * d - r * E * d) * U, e[15] = (w * k * c - Q * E * c + Q * h * T - r * k * T - w * h * i + r * E * i) * U, this
            }
            scale(e) {
                const r = this.elements,
                    h = e.x,
                    c = e.y,
                    v = e.z;
                return r[0] *= h, r[4] *= c, r[8] *= v, r[1] *= h, r[5] *= c, r[9] *= v, r[2] *= h, r[6] *= c, r[10] *= v, r[3] *= h, r[7] *= c, r[11] *= v, this
            }
            getMaxScaleOnAxis() {
                const e = this.elements,
                    r = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                    h = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                    c = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                return Math.sqrt(Math.max(r, h, c))
            }
            makeTranslation(e, r, h) {
                return this.set(1, 0, 0, e, 0, 1, 0, r, 0, 0, 1, h, 0, 0, 0, 1), this
            }
            makeRotationX(e) {
                const r = Math.cos(e),
                    h = Math.sin(e);
                return this.set(1, 0, 0, 0, 0, r, -h, 0, 0, h, r, 0, 0, 0, 0, 1), this
            }
            makeRotationY(e) {
                const r = Math.cos(e),
                    h = Math.sin(e);
                return this.set(r, 0, h, 0, 0, 1, 0, 0, -h, 0, r, 0, 0, 0, 0, 1), this
            }
            makeRotationZ(e) {
                const r = Math.cos(e),
                    h = Math.sin(e);
                return this.set(r, -h, 0, 0, h, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            }
            makeRotationAxis(e, r) {
                const h = Math.cos(r),
                    c = Math.sin(r),
                    v = 1 - h,
                    w = e.x,
                    E = e.y,
                    T = e.z,
                    B = v * w,
                    Q = v * E;
                return this.set(B * w + h, B * E - c * T, B * T + c * E, 0, B * E + c * T, Q * E + h, Q * T - c * w, 0, B * T - c * E, Q * T + c * w, v * T * T + h, 0, 0, 0, 0, 1), this
            }
            makeScale(e, r, h) {
                return this.set(e, 0, 0, 0, 0, r, 0, 0, 0, 0, h, 0, 0, 0, 0, 1), this
            }
            makeShear(e, r, h) {
                return this.set(1, r, h, 0, e, 1, h, 0, e, r, 1, 0, 0, 0, 0, 1), this
            }
            compose(e, r, h) {
                const c = this.elements,
                    v = r._x,
                    w = r._y,
                    E = r._z,
                    T = r._w,
                    B = v + v,
                    Q = w + w,
                    k = E + E,
                    i = v * B,
                    t = v * Q,
                    a = v * k,
                    l = w * Q,
                    d = w * k,
                    g = E * k,
                    x = T * B,
                    A = T * Q,
                    M = T * k,
                    F = h.x,
                    D = h.y,
                    U = h.z;
                return c[0] = (1 - (l + g)) * F, c[1] = (t + M) * F, c[2] = (a - A) * F, c[3] = 0, c[4] = (t - M) * D, c[5] = (1 - (i + g)) * D, c[6] = (d + x) * D, c[7] = 0, c[8] = (a + A) * U, c[9] = (d - x) * U, c[10] = (1 - (i + l)) * U, c[11] = 0, c[12] = e.x, c[13] = e.y, c[14] = e.z, c[15] = 1, this
            }
            decompose(e, r, h) {
                const c = this.elements;
                let v = ya.set(c[0], c[1], c[2]).length();
                const w = ya.set(c[4], c[5], c[6]).length(),
                    E = ya.set(c[8], c[9], c[10]).length();
                this.determinant() < 0 && (v = -v), e.x = c[12], e.y = c[13], e.z = c[14], _n.copy(this);
                const T = 1 / v,
                    B = 1 / w,
                    Q = 1 / E;
                return _n.elements[0] *= T, _n.elements[1] *= T, _n.elements[2] *= T, _n.elements[4] *= B, _n.elements[5] *= B, _n.elements[6] *= B, _n.elements[8] *= Q, _n.elements[9] *= Q, _n.elements[10] *= Q, r.setFromRotationMatrix(_n), h.x = v, h.y = w, h.z = E, this
            }
            makePerspective(e, r, h, c, v, w) {
                w === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
                const E = this.elements,
                    T = 2 * v / (r - e),
                    B = 2 * v / (h - c),
                    Q = (r + e) / (r - e),
                    k = (h + c) / (h - c),
                    i = -(w + v) / (w - v),
                    t = -2 * w * v / (w - v);
                return E[0] = T, E[4] = 0, E[8] = Q, E[12] = 0, E[1] = 0, E[5] = B, E[9] = k, E[13] = 0, E[2] = 0, E[6] = 0, E[10] = i, E[14] = t, E[3] = 0, E[7] = 0, E[11] = -1, E[15] = 0, this
            }
            makeOrthographic(e, r, h, c, v, w) {
                const E = this.elements,
                    T = 1 / (r - e),
                    B = 1 / (h - c),
                    Q = 1 / (w - v),
                    k = (r + e) * T,
                    i = (h + c) * B,
                    t = (w + v) * Q;
                return E[0] = 2 * T, E[4] = 0, E[8] = 0, E[12] = -k, E[1] = 0, E[5] = 2 * B, E[9] = 0, E[13] = -i, E[2] = 0, E[6] = 0, E[10] = -2 * Q, E[14] = -t, E[3] = 0, E[7] = 0, E[11] = 0, E[15] = 1, this
            }
            equals(e) {
                const r = this.elements,
                    h = e.elements;
                for (let c = 0; c < 16; c++)
                    if (r[c] !== h[c]) return !1;
                return !0
            }
            fromArray(e, r = 0) {
                for (let h = 0; h < 16; h++) this.elements[h] = e[h + r];
                return this
            }
            toArray(e = [], r = 0) {
                const h = this.elements;
                return e[r] = h[0], e[r + 1] = h[1], e[r + 2] = h[2], e[r + 3] = h[3], e[r + 4] = h[4], e[r + 5] = h[5], e[r + 6] = h[6], e[r + 7] = h[7], e[r + 8] = h[8], e[r + 9] = h[9], e[r + 10] = h[10], e[r + 11] = h[11], e[r + 12] = h[12], e[r + 13] = h[13], e[r + 14] = h[14], e[r + 15] = h[15], e
            }
        }
        Ui.prototype.isMatrix4 = !0;
        const ya = new ge,
            _n = new Ui,
            Qs = new ge(0, 0, 0),
            Ra = new ge(1, 1, 1),
            rr = new ge,
            Fr = new ge,
            Lr = new ge,
            ra = new Ui,
            $r = new Bn;
        class gr {
            constructor(e = 0, r = 0, h = 0, c = gr.DefaultOrder) {
                this._x = e, this._y = r, this._z = h, this._order = c
            }
            get x() {
                return this._x
            }
            set x(e) {
                this._x = e, this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(e) {
                this._y = e, this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(e) {
                this._z = e, this._onChangeCallback()
            }
            get order() {
                return this._order
            }
            set order(e) {
                this._order = e, this._onChangeCallback()
            }
            set(e, r, h, c) {
                return this._x = e, this._y = r, this._z = h, this._order = c || this._order, this._onChangeCallback(), this
            }
            clone() {
                return new this.constructor(this._x, this._y, this._z, this._order)
            }
            copy(e) {
                return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
            }
            setFromRotationMatrix(e, r, h) {
                const c = Mi.clamp,
                    v = e.elements,
                    w = v[0],
                    E = v[4],
                    T = v[8],
                    B = v[1],
                    Q = v[5],
                    k = v[9],
                    i = v[2],
                    t = v[6],
                    a = v[10];
                switch (r = r || this._order) {
                    case "XYZ":
                        this._y = Math.asin(c(T, -1, 1)), Math.abs(T) < .9999999 ? (this._x = Math.atan2(-k, a), this._z = Math.atan2(-E, w)) : (this._x = Math.atan2(t, Q), this._z = 0);
                        break;
                    case "YXZ":
                        this._x = Math.asin(-c(k, -1, 1)), Math.abs(k) < .9999999 ? (this._y = Math.atan2(T, a), this._z = Math.atan2(B, Q)) : (this._y = Math.atan2(-i, w), this._z = 0);
                        break;
                    case "ZXY":
                        this._x = Math.asin(c(t, -1, 1)), Math.abs(t) < .9999999 ? (this._y = Math.atan2(-i, a), this._z = Math.atan2(-E, Q)) : (this._y = 0, this._z = Math.atan2(B, w));
                        break;
                    case "ZYX":
                        this._y = Math.asin(-c(i, -1, 1)), Math.abs(i) < .9999999 ? (this._x = Math.atan2(t, a), this._z = Math.atan2(B, w)) : (this._x = 0, this._z = Math.atan2(-E, Q));
                        break;
                    case "YZX":
                        this._z = Math.asin(c(B, -1, 1)), Math.abs(B) < .9999999 ? (this._x = Math.atan2(-k, Q), this._y = Math.atan2(-i, w)) : (this._x = 0, this._y = Math.atan2(T, a));
                        break;
                    case "XZY":
                        this._z = Math.asin(-c(E, -1, 1)), Math.abs(E) < .9999999 ? (this._x = Math.atan2(t, Q), this._y = Math.atan2(T, w)) : (this._x = Math.atan2(-k, a), this._y = 0);
                        break;
                    default:
                        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + r)
                }
                return this._order = r, h !== !1 && this._onChangeCallback(), this
            }
            setFromQuaternion(e, r, h) {
                return ra.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ra, r, h)
            }
            setFromVector3(e, r) {
                return this.set(e.x, e.y, e.z, r || this._order)
            }
            reorder(e) {
                return $r.setFromEuler(this), this.setFromQuaternion($r, e)
            }
            equals(e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
            }
            fromArray(e) {
                return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this
            }
            toArray(e = [], r = 0) {
                return e[r] = this._x, e[r + 1] = this._y, e[r + 2] = this._z, e[r + 3] = this._order, e
            }
            toVector3(e) {
                return e ? e.set(this._x, this._y, this._z) : new ge(this._x, this._y, this._z)
            }
            _onChange(e) {
                return this._onChangeCallback = e, this
            }
            _onChangeCallback() {}
        }
        gr.prototype.isEuler = !0, gr.DefaultOrder = "XYZ", gr.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
        class Jr {
            constructor() {
                this.mask = 1
            }
            set(e) {
                this.mask = 1 << e | 0
            }
            enable(e) {
                this.mask |= 1 << e | 0
            }
            enableAll() {
                this.mask = -1
            }
            toggle(e) {
                this.mask ^= 1 << e | 0
            }
            disable(e) {
                this.mask &= ~(1 << e | 0)
            }
            disableAll() {
                this.mask = 0
            }
            test(e) {
                return (this.mask & e.mask) != 0
            }
        }
        let or = 0;
        const wa = new ge,
            la = new Bn,
            Ln = new Ui,
            ja = new ge,
            Nr = new ge,
            Ps = new ge,
            va = new Bn,
            $n = new ge(1, 0, 0),
            Qn = new ge(0, 1, 0),
            os = new ge(0, 0, 1),
            Va = {
                type: "added"
            },
            Da = {
                type: "removed"
            };

        function Z() {
            Object.defineProperty(this, "id", {
                value: or++
            }), this.uuid = Mi.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Z.DefaultUp.clone();
            const s = new ge,
                e = new gr,
                r = new Bn,
                h = new ge(1, 1, 1);
            e._onChange(function() {
                r.setFromEuler(e, !1)
            }), r._onChange(function() {
                e.setFromQuaternion(r, void 0, !1)
            }), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: s
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: r
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: h
                },
                modelViewMatrix: {
                    value: new Ui
                },
                normalMatrix: {
                    value: new Pt
                }
            }), this.matrix = new Ui, this.matrixWorld = new Ui, this.matrixAutoUpdate = Z.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Jr, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
        }
        Z.DefaultUp = new ge(0, 1, 0), Z.DefaultMatrixAutoUpdate = !0, Z.prototype = Object.assign(Object.create(yn.prototype), {
            constructor: Z,
            isObject3D: !0,
            onBeforeRender: function() {},
            onAfterRender: function() {},
            applyMatrix4: function(s) {
                this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(s), this.matrix.decompose(this.position, this.quaternion, this.scale)
            },
            applyQuaternion: function(s) {
                return this.quaternion.premultiply(s), this
            },
            setRotationFromAxisAngle: function(s, e) {
                this.quaternion.setFromAxisAngle(s, e)
            },
            setRotationFromEuler: function(s) {
                this.quaternion.setFromEuler(s, !0)
            },
            setRotationFromMatrix: function(s) {
                this.quaternion.setFromRotationMatrix(s)
            },
            setRotationFromQuaternion: function(s) {
                this.quaternion.copy(s)
            },
            rotateOnAxis: function(s, e) {
                return la.setFromAxisAngle(s, e), this.quaternion.multiply(la), this
            },
            rotateOnWorldAxis: function(s, e) {
                return la.setFromAxisAngle(s, e), this.quaternion.premultiply(la), this
            },
            rotateX: function(s) {
                return this.rotateOnAxis($n, s)
            },
            rotateY: function(s) {
                return this.rotateOnAxis(Qn, s)
            },
            rotateZ: function(s) {
                return this.rotateOnAxis(os, s)
            },
            translateOnAxis: function(s, e) {
                return wa.copy(s).applyQuaternion(this.quaternion), this.position.add(wa.multiplyScalar(e)), this
            },
            translateX: function(s) {
                return this.translateOnAxis($n, s)
            },
            translateY: function(s) {
                return this.translateOnAxis(Qn, s)
            },
            translateZ: function(s) {
                return this.translateOnAxis(os, s)
            },
            localToWorld: function(s) {
                return s.applyMatrix4(this.matrixWorld)
            },
            worldToLocal: function(s) {
                return s.applyMatrix4(Ln.copy(this.matrixWorld).invert())
            },
            lookAt: function(s, e, r) {
                s.isVector3 ? ja.copy(s) : ja.set(s, e, r);
                const h = this.parent;
                this.updateWorldMatrix(!0, !1), Nr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ln.lookAt(Nr, ja, this.up) : Ln.lookAt(ja, Nr, this.up), this.quaternion.setFromRotationMatrix(Ln), h && (Ln.extractRotation(h.matrixWorld), la.setFromRotationMatrix(Ln), this.quaternion.premultiply(la.invert()))
            },
            add: function(s) {
                if (arguments.length > 1) {
                    for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
                    return this
                }
                return s === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", s), this) : (s && s.isObject3D ? (s.parent !== null && s.parent.remove(s), s.parent = this, this.children.push(s), s.dispatchEvent(Va)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", s), this)
            },
            remove: function(s) {
                if (arguments.length > 1) {
                    for (let r = 0; r < arguments.length; r++) this.remove(arguments[r]);
                    return this
                }
                const e = this.children.indexOf(s);
                return e !== -1 && (s.parent = null, this.children.splice(e, 1), s.dispatchEvent(Da)), this
            },
            clear: function() {
                for (let s = 0; s < this.children.length; s++) {
                    const e = this.children[s];
                    e.parent = null, e.dispatchEvent(Da)
                }
                return this.children.length = 0, this
            },
            attach: function(s) {
                return this.updateWorldMatrix(!0, !1), Ln.copy(this.matrixWorld).invert(), s.parent !== null && (s.parent.updateWorldMatrix(!0, !1), Ln.multiply(s.parent.matrixWorld)), s.applyMatrix4(Ln), this.add(s), s.updateWorldMatrix(!1, !0), this
            },
            getObjectById: function(s) {
                return this.getObjectByProperty("id", s)
            },
            getObjectByName: function(s) {
                return this.getObjectByProperty("name", s)
            },
            getObjectByProperty: function(s, e) {
                if (this[s] === e) return this;
                for (let r = 0, h = this.children.length; r < h; r++) {
                    const c = this.children[r].getObjectByProperty(s, e);
                    if (c !== void 0) return c
                }
            },
            getWorldPosition: function(s) {
                return s === void 0 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), s = new ge), this.updateWorldMatrix(!0, !1), s.setFromMatrixPosition(this.matrixWorld)
            },
            getWorldQuaternion: function(s) {
                return s === void 0 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), s = new Bn), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Nr, s, Ps), s
            },
            getWorldScale: function(s) {
                return s === void 0 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), s = new ge), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Nr, va, s), s
            },
            getWorldDirection: function(s) {
                s === void 0 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), s = new ge), this.updateWorldMatrix(!0, !1);
                const e = this.matrixWorld.elements;
                return s.set(e[8], e[9], e[10]).normalize()
            },
            raycast: function() {},
            traverse: function(s) {
                s(this);
                const e = this.children;
                for (let r = 0, h = e.length; r < h; r++) e[r].traverse(s)
            },
            traverseVisible: function(s) {
                if (this.visible === !1) return;
                s(this);
                const e = this.children;
                for (let r = 0, h = e.length; r < h; r++) e[r].traverseVisible(s)
            },
            traverseAncestors: function(s) {
                const e = this.parent;
                e !== null && (s(e), e.traverseAncestors(s))
            },
            updateMatrix: function() {
                this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
            },
            updateMatrixWorld: function(s) {
                this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || s) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, s = !0);
                const e = this.children;
                for (let r = 0, h = e.length; r < h; r++) e[r].updateMatrixWorld(s)
            },
            updateWorldMatrix: function(s, e) {
                const r = this.parent;
                if (s === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), e === !0) {
                    const h = this.children;
                    for (let c = 0, v = h.length; c < v; c++) h[c].updateWorldMatrix(!1, !0)
                }
            },
            toJSON: function(s) {
                const e = s === void 0 || typeof s == "string",
                    r = {};
                e && (s = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {},
                    shapes: {},
                    skeletons: {},
                    animations: {}
                }, r.metadata = {
                    version: 4.5,
                    type: "Object",
                    generator: "Object3D.toJSON"
                });
                const h = {};

                function c(w, E) {
                    return w[E.uuid] === void 0 && (w[E.uuid] = E.toJSON(s)), E.uuid
                }
                if (h.uuid = this.uuid, h.type = this.type, this.name !== "" && (h.name = this.name), this.castShadow === !0 && (h.castShadow = !0), this.receiveShadow === !0 && (h.receiveShadow = !0), this.visible === !1 && (h.visible = !1), this.frustumCulled === !1 && (h.frustumCulled = !1), this.renderOrder !== 0 && (h.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (h.userData = this.userData), h.layers = this.layers.mask, h.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (h.matrixAutoUpdate = !1), this.isInstancedMesh && (h.type = "InstancedMesh", h.count = this.count, h.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (h.instanceColor = this.instanceColor.toJSON())), this.isMesh || this.isLine || this.isPoints) {
                    h.geometry = c(s.geometries, this.geometry);
                    const w = this.geometry.parameters;
                    if (w !== void 0 && w.shapes !== void 0) {
                        const E = w.shapes;
                        if (Array.isArray(E))
                            for (let T = 0, B = E.length; T < B; T++) {
                                const Q = E[T];
                                c(s.shapes, Q)
                            } else c(s.shapes, E)
                    }
                }
                if (this.isSkinnedMesh && (h.bindMode = this.bindMode, h.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (c(s.skeletons, this.skeleton), h.skeleton = this.skeleton.uuid)), this.material !== void 0)
                    if (Array.isArray(this.material)) {
                        const w = [];
                        for (let E = 0, T = this.material.length; E < T; E++) w.push(c(s.materials, this.material[E]));
                        h.material = w
                    } else h.material = c(s.materials, this.material);
                if (this.children.length > 0) {
                    h.children = [];
                    for (let w = 0; w < this.children.length; w++) h.children.push(this.children[w].toJSON(s).object)
                }
                if (this.animations.length > 0) {
                    h.animations = [];
                    for (let w = 0; w < this.animations.length; w++) {
                        const E = this.animations[w];
                        h.animations.push(c(s.animations, E))
                    }
                }
                if (e) {
                    const w = v(s.geometries),
                        E = v(s.materials),
                        T = v(s.textures),
                        B = v(s.images),
                        Q = v(s.shapes),
                        k = v(s.skeletons),
                        i = v(s.animations);
                    w.length > 0 && (r.geometries = w), E.length > 0 && (r.materials = E), T.length > 0 && (r.textures = T), B.length > 0 && (r.images = B), Q.length > 0 && (r.shapes = Q), k.length > 0 && (r.skeletons = k), i.length > 0 && (r.animations = i)
                }
                return r.object = h, r;

                function v(w) {
                    const E = [];
                    for (const T in w) {
                        const B = w[T];
                        delete B.metadata, E.push(B)
                    }
                    return E
                }
            },
            clone: function(s) {
                return new this.constructor().copy(this, s)
            },
            copy: function(s, e = !0) {
                if (this.name = s.name, this.up.copy(s.up), this.position.copy(s.position), this.rotation.order = s.rotation.order, this.quaternion.copy(s.quaternion), this.scale.copy(s.scale), this.matrix.copy(s.matrix), this.matrixWorld.copy(s.matrixWorld), this.matrixAutoUpdate = s.matrixAutoUpdate, this.matrixWorldNeedsUpdate = s.matrixWorldNeedsUpdate, this.layers.mask = s.layers.mask, this.visible = s.visible, this.castShadow = s.castShadow, this.receiveShadow = s.receiveShadow, this.frustumCulled = s.frustumCulled, this.renderOrder = s.renderOrder, this.userData = JSON.parse(JSON.stringify(s.userData)), e === !0)
                    for (let r = 0; r < s.children.length; r++) {
                        const h = s.children[r];
                        this.add(h.clone())
                    }
                return this
            }
        });
        const q = new ge,
            de = new ge,
            Pe = new Pt;
        class Et {
            constructor(e = new ge(1, 0, 0), r = 0) {
                this.normal = e, this.constant = r
            }
            set(e, r) {
                return this.normal.copy(e), this.constant = r, this
            }
            setComponents(e, r, h, c) {
                return this.normal.set(e, r, h), this.constant = c, this
            }
            setFromNormalAndCoplanarPoint(e, r) {
                return this.normal.copy(e), this.constant = -r.dot(this.normal), this
            }
            setFromCoplanarPoints(e, r, h) {
                const c = q.subVectors(h, r).cross(de.subVectors(e, r)).normalize();
                return this.setFromNormalAndCoplanarPoint(c, e), this
            }
            copy(e) {
                return this.normal.copy(e.normal), this.constant = e.constant, this
            }
            normalize() {
                const e = 1 / this.normal.length();
                return this.normal.multiplyScalar(e), this.constant *= e, this
            }
            negate() {
                return this.constant *= -1, this.normal.negate(), this
            }
            distanceToPoint(e) {
                return this.normal.dot(e) + this.constant
            }
            distanceToSphere(e) {
                return this.distanceToPoint(e.center) - e.radius
            }
            projectPoint(e, r) {
                return r === void 0 && (console.warn("THREE.Plane: .projectPoint() target is now required"), r = new ge), r.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
            }
            intersectLine(e, r) {
                r === void 0 && (console.warn("THREE.Plane: .intersectLine() target is now required"), r = new ge);
                const h = e.delta(q),
                    c = this.normal.dot(h);
                if (c === 0) return this.distanceToPoint(e.start) === 0 ? r.copy(e.start) : null;
                const v = -(e.start.dot(this.normal) + this.constant) / c;
                return v < 0 || v > 1 ? null : r.copy(h).multiplyScalar(v).add(e.start)
            }
            intersectsLine(e) {
                const r = this.distanceToPoint(e.start),
                    h = this.distanceToPoint(e.end);
                return r < 0 && h > 0 || h < 0 && r > 0
            }
            intersectsBox(e) {
                return e.intersectsPlane(this)
            }
            intersectsSphere(e) {
                return e.intersectsPlane(this)
            }
            coplanarPoint(e) {
                return e === void 0 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new ge), e.copy(this.normal).multiplyScalar(-this.constant)
            }
            applyMatrix4(e, r) {
                const h = r || Pe.getNormalMatrix(e),
                    c = this.coplanarPoint(q).applyMatrix4(e),
                    v = this.normal.applyMatrix3(h).normalize();
                return this.constant = -c.dot(v), this
            }
            translate(e) {
                return this.constant -= e.dot(this.normal), this
            }
            equals(e) {
                return e.normal.equals(this.normal) && e.constant === this.constant
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        Et.prototype.isPlane = !0;
        const Ft = new ge,
            _t = new ge,
            Yt = new ge,
            J = new ge,
            W = new ge,
            re = new ge,
            ye = new ge,
            me = new ge,
            rt = new ge,
            At = new ge;
        class Mt {
            constructor(e = new ge, r = new ge, h = new ge) {
                this.a = e, this.b = r, this.c = h
            }
            static getNormal(e, r, h, c) {
                c === void 0 && (console.warn("THREE.Triangle: .getNormal() target is now required"), c = new ge), c.subVectors(h, r), Ft.subVectors(e, r), c.cross(Ft);
                const v = c.lengthSq();
                return v > 0 ? c.multiplyScalar(1 / Math.sqrt(v)) : c.set(0, 0, 0)
            }
            static getBarycoord(e, r, h, c, v) {
                Ft.subVectors(c, r), _t.subVectors(h, r), Yt.subVectors(e, r);
                const w = Ft.dot(Ft),
                    E = Ft.dot(_t),
                    T = Ft.dot(Yt),
                    B = _t.dot(_t),
                    Q = _t.dot(Yt),
                    k = w * B - E * E;
                if (v === void 0 && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), v = new ge), k === 0) return v.set(-2, -1, -1);
                const i = 1 / k,
                    t = (B * T - E * Q) * i,
                    a = (w * Q - E * T) * i;
                return v.set(1 - t - a, a, t)
            }
            static containsPoint(e, r, h, c) {
                return this.getBarycoord(e, r, h, c, J), J.x >= 0 && J.y >= 0 && J.x + J.y <= 1
            }
            static getUV(e, r, h, c, v, w, E, T) {
                return this.getBarycoord(e, r, h, c, J), T.set(0, 0), T.addScaledVector(v, J.x), T.addScaledVector(w, J.y), T.addScaledVector(E, J.z), T
            }
            static isFrontFacing(e, r, h, c) {
                return Ft.subVectors(h, r), _t.subVectors(e, r), Ft.cross(_t).dot(c) < 0
            }
            set(e, r, h) {
                return this.a.copy(e), this.b.copy(r), this.c.copy(h), this
            }
            setFromPointsAndIndices(e, r, h, c) {
                return this.a.copy(e[r]), this.b.copy(e[h]), this.c.copy(e[c]), this
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
            }
            getArea() {
                return Ft.subVectors(this.c, this.b), _t.subVectors(this.a, this.b), .5 * Ft.cross(_t).length()
            }
            getMidpoint(e) {
                return e === void 0 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new ge), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            }
            getNormal(e) {
                return Mt.getNormal(this.a, this.b, this.c, e)
            }
            getPlane(e) {
                return e === void 0 && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new Et), e.setFromCoplanarPoints(this.a, this.b, this.c)
            }
            getBarycoord(e, r) {
                return Mt.getBarycoord(e, this.a, this.b, this.c, r)
            }
            getUV(e, r, h, c, v) {
                return Mt.getUV(e, this.a, this.b, this.c, r, h, c, v)
            }
            containsPoint(e) {
                return Mt.containsPoint(e, this.a, this.b, this.c)
            }
            isFrontFacing(e) {
                return Mt.isFrontFacing(this.a, this.b, this.c, e)
            }
            intersectsBox(e) {
                return e.intersectsTriangle(this)
            }
            closestPointToPoint(e, r) {
                r === void 0 && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), r = new ge);
                const h = this.a,
                    c = this.b,
                    v = this.c;
                let w, E;
                W.subVectors(c, h), re.subVectors(v, h), me.subVectors(e, h);
                const T = W.dot(me),
                    B = re.dot(me);
                if (T <= 0 && B <= 0) return r.copy(h);
                rt.subVectors(e, c);
                const Q = W.dot(rt),
                    k = re.dot(rt);
                if (Q >= 0 && k <= Q) return r.copy(c);
                const i = T * k - Q * B;
                if (i <= 0 && T >= 0 && Q <= 0) return w = T / (T - Q), r.copy(h).addScaledVector(W, w);
                At.subVectors(e, v);
                const t = W.dot(At),
                    a = re.dot(At);
                if (a >= 0 && t <= a) return r.copy(v);
                const l = t * B - T * a;
                if (l <= 0 && B >= 0 && a <= 0) return E = B / (B - a), r.copy(h).addScaledVector(re, E);
                const d = Q * a - t * k;
                if (d <= 0 && k - Q >= 0 && t - a >= 0) return ye.subVectors(v, c), E = (k - Q) / (k - Q + (t - a)), r.copy(c).addScaledVector(ye, E);
                const g = 1 / (d + l + i);
                return w = l * g, E = i * g, r.copy(h).addScaledVector(W, w).addScaledVector(re, E)
            }
            equals(e) {
                return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
            }
        }
        let si = 0;

        function ti() {
            Object.defineProperty(this, "id", {
                value: si++
            }), this.uuid = Mi.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
        }
        ti.prototype = Object.assign(Object.create(yn.prototype), {
            constructor: ti,
            isMaterial: !0,
            onBeforeCompile: function() {},
            customProgramCacheKey: function() {
                return this.onBeforeCompile.toString()
            },
            setValues: function(s) {
                if (s !== void 0)
                    for (const e in s) {
                        const r = s[e];
                        if (r === void 0) {
                            console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                            continue
                        }
                        if (e === "shading") {
                            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = r === 1;
                            continue
                        }
                        const h = this[e];
                        h !== void 0 ? h && h.isColor ? h.set(r) : h && h.isVector3 && r && r.isVector3 ? h.copy(r) : this[e] = r : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                    }
            },
            toJSON: function(s) {
                const e = s === void 0 || typeof s == "string";
                e && (s = {
                    textures: {},
                    images: {}
                });
                const r = {
                    metadata: {
                        version: 4.5,
                        type: "Material",
                        generator: "Material.toJSON"
                    }
                };

                function h(c) {
                    const v = [];
                    for (const w in c) {
                        const E = c[w];
                        delete E.metadata, v.push(E)
                    }
                    return v
                }
                if (r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.color && this.color.isColor && (r.color = this.color.getHex()), this.roughness !== void 0 && (r.roughness = this.roughness), this.metalness !== void 0 && (r.metalness = this.metalness), this.sheen && this.sheen.isColor && (r.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (r.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (r.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (r.specular = this.specular.getHex()), this.shininess !== void 0 && (r.shininess = this.shininess), this.clearcoat !== void 0 && (r.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (r.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (r.clearcoatMap = this.clearcoatMap.toJSON(s).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (r.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(s).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (r.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(s).uuid, r.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (r.map = this.map.toJSON(s).uuid), this.matcap && this.matcap.isTexture && (r.matcap = this.matcap.toJSON(s).uuid), this.alphaMap && this.alphaMap.isTexture && (r.alphaMap = this.alphaMap.toJSON(s).uuid), this.lightMap && this.lightMap.isTexture && (r.lightMap = this.lightMap.toJSON(s).uuid, r.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (r.aoMap = this.aoMap.toJSON(s).uuid, r.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (r.bumpMap = this.bumpMap.toJSON(s).uuid, r.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (r.normalMap = this.normalMap.toJSON(s).uuid, r.normalMapType = this.normalMapType, r.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (r.displacementMap = this.displacementMap.toJSON(s).uuid, r.displacementScale = this.displacementScale, r.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (r.roughnessMap = this.roughnessMap.toJSON(s).uuid), this.metalnessMap && this.metalnessMap.isTexture && (r.metalnessMap = this.metalnessMap.toJSON(s).uuid), this.emissiveMap && this.emissiveMap.isTexture && (r.emissiveMap = this.emissiveMap.toJSON(s).uuid), this.specularMap && this.specularMap.isTexture && (r.specularMap = this.specularMap.toJSON(s).uuid), this.envMap && this.envMap.isTexture && (r.envMap = this.envMap.toJSON(s).uuid, r.reflectivity = this.reflectivity, r.refractionRatio = this.refractionRatio, this.combine !== void 0 && (r.combine = this.combine), this.envMapIntensity !== void 0 && (r.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (r.gradientMap = this.gradientMap.toJSON(s).uuid), this.size !== void 0 && (r.size = this.size), this.shadowSide !== null && (r.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (r.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (r.blending = this.blending), this.side !== 0 && (r.side = this.side), this.vertexColors && (r.vertexColors = !0), this.opacity < 1 && (r.opacity = this.opacity), this.transparent === !0 && (r.transparent = this.transparent), r.depthFunc = this.depthFunc, r.depthTest = this.depthTest, r.depthWrite = this.depthWrite, r.colorWrite = this.colorWrite, r.stencilWrite = this.stencilWrite, r.stencilWriteMask = this.stencilWriteMask, r.stencilFunc = this.stencilFunc, r.stencilRef = this.stencilRef, r.stencilFuncMask = this.stencilFuncMask, r.stencilFail = this.stencilFail, r.stencilZFail = this.stencilZFail, r.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (r.rotation = this.rotation), this.polygonOffset === !0 && (r.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (r.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (r.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (r.linewidth = this.linewidth), this.dashSize !== void 0 && (r.dashSize = this.dashSize), this.gapSize !== void 0 && (r.gapSize = this.gapSize), this.scale !== void 0 && (r.scale = this.scale), this.dithering === !0 && (r.dithering = !0), this.alphaTest > 0 && (r.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (r.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (r.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (r.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (r.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (r.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (r.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (r.morphTargets = !0), this.morphNormals === !0 && (r.morphNormals = !0), this.skinning === !0 && (r.skinning = !0), this.flatShading === !0 && (r.flatShading = this.flatShading), this.visible === !1 && (r.visible = !1), this.toneMapped === !1 && (r.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (r.userData = this.userData), e) {
                    const c = h(s.textures),
                        v = h(s.images);
                    c.length > 0 && (r.textures = c), v.length > 0 && (r.images = v)
                }
                return r
            },
            clone: function() {
                return new this.constructor().copy(this)
            },
            copy: function(s) {
                this.name = s.name, this.fog = s.fog, this.blending = s.blending, this.side = s.side, this.vertexColors = s.vertexColors, this.opacity = s.opacity, this.transparent = s.transparent, this.blendSrc = s.blendSrc, this.blendDst = s.blendDst, this.blendEquation = s.blendEquation, this.blendSrcAlpha = s.blendSrcAlpha, this.blendDstAlpha = s.blendDstAlpha, this.blendEquationAlpha = s.blendEquationAlpha, this.depthFunc = s.depthFunc, this.depthTest = s.depthTest, this.depthWrite = s.depthWrite, this.stencilWriteMask = s.stencilWriteMask, this.stencilFunc = s.stencilFunc, this.stencilRef = s.stencilRef, this.stencilFuncMask = s.stencilFuncMask, this.stencilFail = s.stencilFail, this.stencilZFail = s.stencilZFail, this.stencilZPass = s.stencilZPass, this.stencilWrite = s.stencilWrite;
                const e = s.clippingPlanes;
                let r = null;
                if (e !== null) {
                    const h = e.length;
                    r = new Array(h);
                    for (let c = 0; c !== h; ++c) r[c] = e[c].clone()
                }
                return this.clippingPlanes = r, this.clipIntersection = s.clipIntersection, this.clipShadows = s.clipShadows, this.shadowSide = s.shadowSide, this.colorWrite = s.colorWrite, this.precision = s.precision, this.polygonOffset = s.polygonOffset, this.polygonOffsetFactor = s.polygonOffsetFactor, this.polygonOffsetUnits = s.polygonOffsetUnits, this.dithering = s.dithering, this.alphaTest = s.alphaTest, this.alphaToCoverage = s.alphaToCoverage, this.premultipliedAlpha = s.premultipliedAlpha, this.visible = s.visible, this.toneMapped = s.toneMapped, this.userData = JSON.parse(JSON.stringify(s.userData)), this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }), Object.defineProperty(ti.prototype, "needsUpdate", {
            set: function(s) {
                s === !0 && this.version++
            }
        });
        const ni = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            },
            ri = {
                h: 0,
                s: 0,
                l: 0
            },
            Wi = {
                h: 0,
                s: 0,
                l: 0
            };

        function Ci(s, e, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? s + 6 * (e - s) * r : r < .5 ? e : r < 2 / 3 ? s + 6 * (e - s) * (2 / 3 - r) : s
        }

        function Pi(s) {
            return s < .04045 ? .0773993808 * s : Math.pow(.9478672986 * s + .0521327014, 2.4)
        }

        function ai(s) {
            return s < .0031308 ? 12.92 * s : 1.055 * Math.pow(s, .41666) - .055
        }
        class Rt {
            constructor(e, r, h) {
                return r === void 0 && h === void 0 ? this.set(e) : this.setRGB(e, r, h)
            }
            set(e) {
                return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this
            }
            setScalar(e) {
                return this.r = e, this.g = e, this.b = e, this
            }
            setHex(e) {
                return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
            }
            setRGB(e, r, h) {
                return this.r = e, this.g = r, this.b = h, this
            }
            setHSL(e, r, h) {
                if (e = Mi.euclideanModulo(e, 1), r = Mi.clamp(r, 0, 1), h = Mi.clamp(h, 0, 1), r === 0) this.r = this.g = this.b = h;
                else {
                    const c = h <= .5 ? h * (1 + r) : h + r - h * r,
                        v = 2 * h - c;
                    this.r = Ci(v, c, e + 1 / 3), this.g = Ci(v, c, e), this.b = Ci(v, c, e - 1 / 3)
                }
                return this
            }
            setStyle(e) {
                function r(c) {
                    c !== void 0 && parseFloat(c) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
                }
                let h;
                if (h = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
                    let c;
                    const v = h[1],
                        w = h[2];
                    switch (v) {
                        case "rgb":
                        case "rgba":
                            if (c = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(w)) return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, r(c[4]), this;
                            if (c = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(w)) return this.r = Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, r(c[4]), this;
                            break;
                        case "hsl":
                        case "hsla":
                            if (c = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(w)) {
                                const E = parseFloat(c[1]) / 360,
                                    T = parseInt(c[2], 10) / 100,
                                    B = parseInt(c[3], 10) / 100;
                                return r(c[4]), this.setHSL(E, T, B)
                            }
                    }
                } else if (h = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                    const c = h[1],
                        v = c.length;
                    if (v === 3) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
                    if (v === 6) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
                }
                return e && e.length > 0 ? this.setColorName(e) : this
            }
            setColorName(e) {
                const r = ni[e];
                return r !== void 0 ? this.setHex(r) : console.warn("THREE.Color: Unknown color " + e), this
            }
            clone() {
                return new this.constructor(this.r, this.g, this.b)
            }
            copy(e) {
                return this.r = e.r, this.g = e.g, this.b = e.b, this
            }
            copyGammaToLinear(e, r = 2) {
                return this.r = Math.pow(e.r, r), this.g = Math.pow(e.g, r), this.b = Math.pow(e.b, r), this
            }
            copyLinearToGamma(e, r = 2) {
                const h = r > 0 ? 1 / r : 1;
                return this.r = Math.pow(e.r, h), this.g = Math.pow(e.g, h), this.b = Math.pow(e.b, h), this
            }
            convertGammaToLinear(e) {
                return this.copyGammaToLinear(this, e), this
            }
            convertLinearToGamma(e) {
                return this.copyLinearToGamma(this, e), this
            }
            copySRGBToLinear(e) {
                return this.r = Pi(e.r), this.g = Pi(e.g), this.b = Pi(e.b), this
            }
            copyLinearToSRGB(e) {
                return this.r = ai(e.r), this.g = ai(e.g), this.b = ai(e.b), this
            }
            convertSRGBToLinear() {
                return this.copySRGBToLinear(this), this
            }
            convertLinearToSRGB() {
                return this.copyLinearToSRGB(this), this
            }
            getHex() {
                return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
            }
            getHexString() {
                return ("000000" + this.getHex().toString(16)).slice(-6)
            }
            getHSL(e) {
                e === void 0 && (console.warn("THREE.Color: .getHSL() target is now required"), e = {
                    h: 0,
                    s: 0,
                    l: 0
                });
                const r = this.r,
                    h = this.g,
                    c = this.b,
                    v = Math.max(r, h, c),
                    w = Math.min(r, h, c);
                let E, T;
                const B = (w + v) / 2;
                if (w === v) E = 0, T = 0;
                else {
                    const Q = v - w;
                    switch (T = B <= .5 ? Q / (v + w) : Q / (2 - v - w), v) {
                        case r:
                            E = (h - c) / Q + (h < c ? 6 : 0);
                            break;
                        case h:
                            E = (c - r) / Q + 2;
                            break;
                        case c:
                            E = (r - h) / Q + 4
                    }
                    E /= 6
                }
                return e.h = E, e.s = T, e.l = B, e
            }
            getStyle() {
                return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
            }
            offsetHSL(e, r, h) {
                return this.getHSL(ri), ri.h += e, ri.s += r, ri.l += h, this.setHSL(ri.h, ri.s, ri.l), this
            }
            add(e) {
                return this.r += e.r, this.g += e.g, this.b += e.b, this
            }
            addColors(e, r) {
                return this.r = e.r + r.r, this.g = e.g + r.g, this.b = e.b + r.b, this
            }
            addScalar(e) {
                return this.r += e, this.g += e, this.b += e, this
            }
            sub(e) {
                return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
            }
            multiply(e) {
                return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
            }
            multiplyScalar(e) {
                return this.r *= e, this.g *= e, this.b *= e, this
            }
            lerp(e, r) {
                return this.r += (e.r - this.r) * r, this.g += (e.g - this.g) * r, this.b += (e.b - this.b) * r, this
            }
            lerpColors(e, r, h) {
                return this.r = e.r + (r.r - e.r) * h, this.g = e.g + (r.g - e.g) * h, this.b = e.b + (r.b - e.b) * h, this
            }
            lerpHSL(e, r) {
                this.getHSL(ri), e.getHSL(Wi);
                const h = Mi.lerp(ri.h, Wi.h, r),
                    c = Mi.lerp(ri.s, Wi.s, r),
                    v = Mi.lerp(ri.l, Wi.l, r);
                return this.setHSL(h, c, v), this
            }
            equals(e) {
                return e.r === this.r && e.g === this.g && e.b === this.b
            }
            fromArray(e, r = 0) {
                return this.r = e[r], this.g = e[r + 1], this.b = e[r + 2], this
            }
            toArray(e = [], r = 0) {
                return e[r] = this.r, e[r + 1] = this.g, e[r + 2] = this.b, e
            }
            fromBufferAttribute(e, r) {
                return this.r = e.getX(r), this.g = e.getY(r), this.b = e.getZ(r), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this
            }
            toJSON() {
                return this.getHex()
            }
        }
        Rt.NAMES = ni, Rt.prototype.isColor = !0, Rt.prototype.r = 1, Rt.prototype.g = 1, Rt.prototype.b = 1;
        class Gi extends ti {
            constructor(e) {
                super(), this.type = "MeshBasicMaterial", this.color = new Rt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
            }
        }
        Gi.prototype.isMeshBasicMaterial = !0;
        const ki = new ge,
            pn = new Ht;

        function pi(s, e, r) {
            if (Array.isArray(s)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.name = "", this.array = s, this.itemSize = e, this.count = s !== void 0 ? s.length / e : 0, this.normalized = r === !0, this.usage = 35044, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }

        function Hi(s, e, r) {
            pi.call(this, new Int8Array(s), e, r)
        }

        function en(s, e, r) {
            pi.call(this, new Uint8Array(s), e, r)
        }

        function Bi(s, e, r) {
            pi.call(this, new Uint8ClampedArray(s), e, r)
        }

        function Xi(s, e, r) {
            pi.call(this, new Int16Array(s), e, r)
        }

        function Un(s, e, r) {
            pi.call(this, new Uint16Array(s), e, r)
        }

        function lr(s, e, r) {
            pi.call(this, new Int32Array(s), e, r)
        }

        function Qr(s, e, r) {
            pi.call(this, new Uint32Array(s), e, r)
        }

        function aa(s, e, r) {
            pi.call(this, new Uint16Array(s), e, r)
        }

        function Ai(s, e, r) {
            pi.call(this, new Float32Array(s), e, r)
        }

        function ca(s, e, r) {
            pi.call(this, new Float64Array(s), e, r)
        }

        function Ea(s) {
            if (s.length === 0) return -1 / 0;
            let e = s[0];
            for (let r = 1, h = s.length; r < h; ++r) s[r] > e && (e = s[r]);
            return e
        }
        Object.defineProperty(pi.prototype, "needsUpdate", {
            set: function(s) {
                s === !0 && this.version++
            }
        }), Object.assign(pi.prototype, {
            isBufferAttribute: !0,
            onUploadCallback: function() {},
            setUsage: function(s) {
                return this.usage = s, this
            },
            copy: function(s) {
                return this.name = s.name, this.array = new s.array.constructor(s.array), this.itemSize = s.itemSize, this.count = s.count, this.normalized = s.normalized, this.usage = s.usage, this
            },
            copyAt: function(s, e, r) {
                s *= this.itemSize, r *= e.itemSize;
                for (let h = 0, c = this.itemSize; h < c; h++) this.array[s + h] = e.array[r + h];
                return this
            },
            copyArray: function(s) {
                return this.array.set(s), this
            },
            copyColorsArray: function(s) {
                const e = this.array;
                let r = 0;
                for (let h = 0, c = s.length; h < c; h++) {
                    let v = s[h];
                    v === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", h), v = new Rt), e[r++] = v.r, e[r++] = v.g, e[r++] = v.b
                }
                return this
            },
            copyVector2sArray: function(s) {
                const e = this.array;
                let r = 0;
                for (let h = 0, c = s.length; h < c; h++) {
                    let v = s[h];
                    v === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", h), v = new Ht), e[r++] = v.x, e[r++] = v.y
                }
                return this
            },
            copyVector3sArray: function(s) {
                const e = this.array;
                let r = 0;
                for (let h = 0, c = s.length; h < c; h++) {
                    let v = s[h];
                    v === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", h), v = new ge), e[r++] = v.x, e[r++] = v.y, e[r++] = v.z
                }
                return this
            },
            copyVector4sArray: function(s) {
                const e = this.array;
                let r = 0;
                for (let h = 0, c = s.length; h < c; h++) {
                    let v = s[h];
                    v === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", h), v = new Si), e[r++] = v.x, e[r++] = v.y, e[r++] = v.z, e[r++] = v.w
                }
                return this
            },
            applyMatrix3: function(s) {
                if (this.itemSize === 2)
                    for (let e = 0, r = this.count; e < r; e++) pn.fromBufferAttribute(this, e), pn.applyMatrix3(s), this.setXY(e, pn.x, pn.y);
                else if (this.itemSize === 3)
                    for (let e = 0, r = this.count; e < r; e++) ki.fromBufferAttribute(this, e), ki.applyMatrix3(s), this.setXYZ(e, ki.x, ki.y, ki.z);
                return this
            },
            applyMatrix4: function(s) {
                for (let e = 0, r = this.count; e < r; e++) ki.x = this.getX(e), ki.y = this.getY(e), ki.z = this.getZ(e), ki.applyMatrix4(s), this.setXYZ(e, ki.x, ki.y, ki.z);
                return this
            },
            applyNormalMatrix: function(s) {
                for (let e = 0, r = this.count; e < r; e++) ki.x = this.getX(e), ki.y = this.getY(e), ki.z = this.getZ(e), ki.applyNormalMatrix(s), this.setXYZ(e, ki.x, ki.y, ki.z);
                return this
            },
            transformDirection: function(s) {
                for (let e = 0, r = this.count; e < r; e++) ki.x = this.getX(e), ki.y = this.getY(e), ki.z = this.getZ(e), ki.transformDirection(s), this.setXYZ(e, ki.x, ki.y, ki.z);
                return this
            },
            set: function(s, e = 0) {
                return this.array.set(s, e), this
            },
            getX: function(s) {
                return this.array[s * this.itemSize]
            },
            setX: function(s, e) {
                return this.array[s * this.itemSize] = e, this
            },
            getY: function(s) {
                return this.array[s * this.itemSize + 1]
            },
            setY: function(s, e) {
                return this.array[s * this.itemSize + 1] = e, this
            },
            getZ: function(s) {
                return this.array[s * this.itemSize + 2]
            },
            setZ: function(s, e) {
                return this.array[s * this.itemSize + 2] = e, this
            },
            getW: function(s) {
                return this.array[s * this.itemSize + 3]
            },
            setW: function(s, e) {
                return this.array[s * this.itemSize + 3] = e, this
            },
            setXY: function(s, e, r) {
                return s *= this.itemSize, this.array[s + 0] = e, this.array[s + 1] = r, this
            },
            setXYZ: function(s, e, r, h) {
                return s *= this.itemSize, this.array[s + 0] = e, this.array[s + 1] = r, this.array[s + 2] = h, this
            },
            setXYZW: function(s, e, r, h, c) {
                return s *= this.itemSize, this.array[s + 0] = e, this.array[s + 1] = r, this.array[s + 2] = h, this.array[s + 3] = c, this
            },
            onUpload: function(s) {
                return this.onUploadCallback = s, this
            },
            clone: function() {
                return new this.constructor(this.array, this.itemSize).copy(this)
            },
            toJSON: function() {
                const s = {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: Array.prototype.slice.call(this.array),
                    normalized: this.normalized
                };
                return this.name !== "" && (s.name = this.name), this.usage !== 35044 && (s.usage = this.usage), this.updateRange.offset === 0 && this.updateRange.count === -1 || (s.updateRange = this.updateRange), s
            }
        }), Hi.prototype = Object.create(pi.prototype), Hi.prototype.constructor = Hi, en.prototype = Object.create(pi.prototype), en.prototype.constructor = en, Bi.prototype = Object.create(pi.prototype), Bi.prototype.constructor = Bi, Xi.prototype = Object.create(pi.prototype), Xi.prototype.constructor = Xi, Un.prototype = Object.create(pi.prototype), Un.prototype.constructor = Un, lr.prototype = Object.create(pi.prototype), lr.prototype.constructor = lr, Qr.prototype = Object.create(pi.prototype), Qr.prototype.constructor = Qr, aa.prototype = Object.create(pi.prototype), aa.prototype.constructor = aa, aa.prototype.isFloat16BufferAttribute = !0, Ai.prototype = Object.create(pi.prototype), Ai.prototype.constructor = Ai, ca.prototype = Object.create(pi.prototype), ca.prototype.constructor = ca;
        const Kr = {
            Int8Array,
            Uint8Array,
            Uint8ClampedArray,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array
        };

        function Er(s, e) {
            return new Kr[s](e)
        }
        let ro = 0;
        const Or = new Ui,
            ls = new Z,
            ms = new ge,
            _a = new Te,
            ks = new Te,
            Pr = new ge;

        function an() {
            Object.defineProperty(this, "id", {
                value: ro++
            }), this.uuid = Mi.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {}
        }
        an.prototype = Object.assign(Object.create(yn.prototype), {
            constructor: an,
            isBufferGeometry: !0,
            getIndex: function() {
                return this.index
            },
            setIndex: function(s) {
                return Array.isArray(s) ? this.index = new(Ea(s) > 65535 ? Qr : Un)(s, 1) : this.index = s, this
            },
            getAttribute: function(s) {
                return this.attributes[s]
            },
            setAttribute: function(s, e) {
                return this.attributes[s] = e, this
            },
            deleteAttribute: function(s) {
                return delete this.attributes[s], this
            },
            hasAttribute: function(s) {
                return this.attributes[s] !== void 0
            },
            addGroup: function(s, e, r = 0) {
                this.groups.push({
                    start: s,
                    count: e,
                    materialIndex: r
                })
            },
            clearGroups: function() {
                this.groups = []
            },
            setDrawRange: function(s, e) {
                this.drawRange.start = s, this.drawRange.count = e
            },
            applyMatrix4: function(s) {
                const e = this.attributes.position;
                e !== void 0 && (e.applyMatrix4(s), e.needsUpdate = !0);
                const r = this.attributes.normal;
                if (r !== void 0) {
                    const c = new Pt().getNormalMatrix(s);
                    r.applyNormalMatrix(c), r.needsUpdate = !0
                }
                const h = this.attributes.tangent;
                return h !== void 0 && (h.transformDirection(s), h.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
            },
            rotateX: function(s) {
                return Or.makeRotationX(s), this.applyMatrix4(Or), this
            },
            rotateY: function(s) {
                return Or.makeRotationY(s), this.applyMatrix4(Or), this
            },
            rotateZ: function(s) {
                return Or.makeRotationZ(s), this.applyMatrix4(Or), this
            },
            translate: function(s, e, r) {
                return Or.makeTranslation(s, e, r), this.applyMatrix4(Or), this
            },
            scale: function(s, e, r) {
                return Or.makeScale(s, e, r), this.applyMatrix4(Or), this
            },
            lookAt: function(s) {
                return ls.lookAt(s), ls.updateMatrix(), this.applyMatrix4(ls.matrix), this
            },
            center: function() {
                return this.computeBoundingBox(), this.boundingBox.getCenter(ms).negate(), this.translate(ms.x, ms.y, ms.z), this
            },
            setFromPoints: function(s) {
                const e = [];
                for (let r = 0, h = s.length; r < h; r++) {
                    const c = s[r];
                    e.push(c.x, c.y, c.z || 0)
                }
                return this.setAttribute("position", new Ai(e, 3)), this
            },
            computeBoundingBox: function() {
                this.boundingBox === null && (this.boundingBox = new Te);
                const s = this.attributes.position,
                    e = this.morphAttributes.position;
                if (s && s.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new ge(-1 / 0, -1 / 0, -1 / 0), new ge(1 / 0, 1 / 0, 1 / 0));
                if (s !== void 0) {
                    if (this.boundingBox.setFromBufferAttribute(s), e)
                        for (let r = 0, h = e.length; r < h; r++) {
                            const c = e[r];
                            _a.setFromBufferAttribute(c), this.morphTargetsRelative ? (Pr.addVectors(this.boundingBox.min, _a.min), this.boundingBox.expandByPoint(Pr), Pr.addVectors(this.boundingBox.max, _a.max), this.boundingBox.expandByPoint(Pr)) : (this.boundingBox.expandByPoint(_a.min), this.boundingBox.expandByPoint(_a.max))
                        }
                } else this.boundingBox.makeEmpty();
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            },
            computeBoundingSphere: function() {
                this.boundingSphere === null && (this.boundingSphere = new Fn);
                const s = this.attributes.position,
                    e = this.morphAttributes.position;
                if (s && s.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new ge, 1 / 0);
                if (s) {
                    const r = this.boundingSphere.center;
                    if (_a.setFromBufferAttribute(s), e)
                        for (let c = 0, v = e.length; c < v; c++) {
                            const w = e[c];
                            ks.setFromBufferAttribute(w), this.morphTargetsRelative ? (Pr.addVectors(_a.min, ks.min), _a.expandByPoint(Pr), Pr.addVectors(_a.max, ks.max), _a.expandByPoint(Pr)) : (_a.expandByPoint(ks.min), _a.expandByPoint(ks.max))
                        }
                    _a.getCenter(r);
                    let h = 0;
                    for (let c = 0, v = s.count; c < v; c++) Pr.fromBufferAttribute(s, c), h = Math.max(h, r.distanceToSquared(Pr));
                    if (e)
                        for (let c = 0, v = e.length; c < v; c++) {
                            const w = e[c],
                                E = this.morphTargetsRelative;
                            for (let T = 0, B = w.count; T < B; T++) Pr.fromBufferAttribute(w, T), E && (ms.fromBufferAttribute(s, T), Pr.add(ms)), h = Math.max(h, r.distanceToSquared(Pr))
                        }
                    this.boundingSphere.radius = Math.sqrt(h), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            },
            computeFaceNormals: function() {},
            computeTangents: function() {
                const s = this.index,
                    e = this.attributes;
                if (s === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                const r = s.array,
                    h = e.position.array,
                    c = e.normal.array,
                    v = e.uv.array,
                    w = h.length / 3;
                e.tangent === void 0 && this.setAttribute("tangent", new pi(new Float32Array(4 * w), 4));
                const E = e.tangent.array,
                    T = [],
                    B = [];
                for (let H = 0; H < w; H++) T[H] = new ge, B[H] = new ge;
                const Q = new ge,
                    k = new ge,
                    i = new ge,
                    t = new Ht,
                    a = new Ht,
                    l = new Ht,
                    d = new ge,
                    g = new ge;

                function x(H, X, ne) {
                    Q.fromArray(h, 3 * H), k.fromArray(h, 3 * X), i.fromArray(h, 3 * ne), t.fromArray(v, 2 * H), a.fromArray(v, 2 * X), l.fromArray(v, 2 * ne), k.sub(Q), i.sub(Q), a.sub(t), l.sub(t);
                    const le = 1 / (a.x * l.y - l.x * a.y);
                    isFinite(le) && (d.copy(k).multiplyScalar(l.y).addScaledVector(i, -a.y).multiplyScalar(le), g.copy(i).multiplyScalar(a.x).addScaledVector(k, -l.x).multiplyScalar(le), T[H].add(d), T[X].add(d), T[ne].add(d), B[H].add(g), B[X].add(g), B[ne].add(g))
                }
                let A = this.groups;
                A.length === 0 && (A = [{
                    start: 0,
                    count: r.length
                }]);
                for (let H = 0, X = A.length; H < X; ++H) {
                    const ne = A[H],
                        le = ne.start;
                    for (let ce = le, Qe = le + ne.count; ce < Qe; ce += 3) x(r[ce + 0], r[ce + 1], r[ce + 2])
                }
                const M = new ge,
                    F = new ge,
                    D = new ge,
                    U = new ge;

                function N(H) {
                    D.fromArray(c, 3 * H), U.copy(D);
                    const X = T[H];
                    M.copy(X), M.sub(D.multiplyScalar(D.dot(X))).normalize(), F.crossVectors(U, X);
                    const ne = F.dot(B[H]) < 0 ? -1 : 1;
                    E[4 * H] = M.x, E[4 * H + 1] = M.y, E[4 * H + 2] = M.z, E[4 * H + 3] = ne
                }
                for (let H = 0, X = A.length; H < X; ++H) {
                    const ne = A[H],
                        le = ne.start;
                    for (let ce = le, Qe = le + ne.count; ce < Qe; ce += 3) N(r[ce + 0]), N(r[ce + 1]), N(r[ce + 2])
                }
            },
            computeVertexNormals: function() {
                const s = this.index,
                    e = this.getAttribute("position");
                if (e !== void 0) {
                    let r = this.getAttribute("normal");
                    if (r === void 0) r = new pi(new Float32Array(3 * e.count), 3), this.setAttribute("normal", r);
                    else
                        for (let k = 0, i = r.count; k < i; k++) r.setXYZ(k, 0, 0, 0);
                    const h = new ge,
                        c = new ge,
                        v = new ge,
                        w = new ge,
                        E = new ge,
                        T = new ge,
                        B = new ge,
                        Q = new ge;
                    if (s)
                        for (let k = 0, i = s.count; k < i; k += 3) {
                            const t = s.getX(k + 0),
                                a = s.getX(k + 1),
                                l = s.getX(k + 2);
                            h.fromBufferAttribute(e, t), c.fromBufferAttribute(e, a), v.fromBufferAttribute(e, l), B.subVectors(v, c), Q.subVectors(h, c), B.cross(Q), w.fromBufferAttribute(r, t), E.fromBufferAttribute(r, a), T.fromBufferAttribute(r, l), w.add(B), E.add(B), T.add(B), r.setXYZ(t, w.x, w.y, w.z), r.setXYZ(a, E.x, E.y, E.z), r.setXYZ(l, T.x, T.y, T.z)
                        } else
                            for (let k = 0, i = e.count; k < i; k += 3) h.fromBufferAttribute(e, k + 0), c.fromBufferAttribute(e, k + 1), v.fromBufferAttribute(e, k + 2), B.subVectors(v, c), Q.subVectors(h, c), B.cross(Q), r.setXYZ(k + 0, B.x, B.y, B.z), r.setXYZ(k + 1, B.x, B.y, B.z), r.setXYZ(k + 2, B.x, B.y, B.z);
                    this.normalizeNormals(), r.needsUpdate = !0
                }
            },
            merge: function(s, e) {
                if (!s || !s.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", s);
                e === void 0 && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                const r = this.attributes;
                for (const h in r) {
                    if (s.attributes[h] === void 0) continue;
                    const c = r[h].array,
                        v = s.attributes[h],
                        w = v.array,
                        E = v.itemSize * e,
                        T = Math.min(w.length, c.length - E);
                    for (let B = 0, Q = E; B < T; B++, Q++) c[Q] = w[B]
                }
                return this
            },
            normalizeNormals: function() {
                const s = this.attributes.normal;
                for (let e = 0, r = s.count; e < r; e++) Pr.fromBufferAttribute(s, e), Pr.normalize(), s.setXYZ(e, Pr.x, Pr.y, Pr.z)
            },
            toNonIndexed: function() {
                function s(w, E) {
                    const T = w.array,
                        B = w.itemSize,
                        Q = w.normalized,
                        k = new T.constructor(E.length * B);
                    let i = 0,
                        t = 0;
                    for (let a = 0, l = E.length; a < l; a++) {
                        i = E[a] * B;
                        for (let d = 0; d < B; d++) k[t++] = T[i++]
                    }
                    return new pi(k, B, Q)
                }
                if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
                const e = new an,
                    r = this.index.array,
                    h = this.attributes;
                for (const w in h) {
                    const E = s(h[w], r);
                    e.setAttribute(w, E)
                }
                const c = this.morphAttributes;
                for (const w in c) {
                    const E = [],
                        T = c[w];
                    for (let B = 0, Q = T.length; B < Q; B++) {
                        const k = s(T[B], r);
                        E.push(k)
                    }
                    e.morphAttributes[w] = E
                }
                e.morphTargetsRelative = this.morphTargetsRelative;
                const v = this.groups;
                for (let w = 0, E = v.length; w < E; w++) {
                    const T = v[w];
                    e.addGroup(T.start, T.count, T.materialIndex)
                }
                return e
            },
            toJSON: function() {
                const s = {
                    metadata: {
                        version: 4.5,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), Object.keys(this.userData).length > 0 && (s.userData = this.userData), this.parameters !== void 0) {
                    const E = this.parameters;
                    for (const T in E) E[T] !== void 0 && (s[T] = E[T]);
                    return s
                }
                s.data = {
                    attributes: {}
                };
                const e = this.index;
                e !== null && (s.data.index = {
                    type: e.array.constructor.name,
                    array: Array.prototype.slice.call(e.array)
                });
                const r = this.attributes;
                for (const E in r) {
                    const T = r[E];
                    s.data.attributes[E] = T.toJSON(s.data)
                }
                const h = {};
                let c = !1;
                for (const E in this.morphAttributes) {
                    const T = this.morphAttributes[E],
                        B = [];
                    for (let Q = 0, k = T.length; Q < k; Q++) {
                        const i = T[Q];
                        B.push(i.toJSON(s.data))
                    }
                    B.length > 0 && (h[E] = B, c = !0)
                }
                c && (s.data.morphAttributes = h, s.data.morphTargetsRelative = this.morphTargetsRelative);
                const v = this.groups;
                v.length > 0 && (s.data.groups = JSON.parse(JSON.stringify(v)));
                const w = this.boundingSphere;
                return w !== null && (s.data.boundingSphere = {
                    center: w.center.toArray(),
                    radius: w.radius
                }), s
            },
            clone: function() {
                return new an().copy(this)
            },
            copy: function(s) {
                this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
                const e = {};
                this.name = s.name;
                const r = s.index;
                r !== null && this.setIndex(r.clone(e));
                const h = s.attributes;
                for (const T in h) {
                    const B = h[T];
                    this.setAttribute(T, B.clone(e))
                }
                const c = s.morphAttributes;
                for (const T in c) {
                    const B = [],
                        Q = c[T];
                    for (let k = 0, i = Q.length; k < i; k++) B.push(Q[k].clone(e));
                    this.morphAttributes[T] = B
                }
                this.morphTargetsRelative = s.morphTargetsRelative;
                const v = s.groups;
                for (let T = 0, B = v.length; T < B; T++) {
                    const Q = v[T];
                    this.addGroup(Q.start, Q.count, Q.materialIndex)
                }
                const w = s.boundingBox;
                w !== null && (this.boundingBox = w.clone());
                const E = s.boundingSphere;
                return E !== null && (this.boundingSphere = E.clone()), this.drawRange.start = s.drawRange.start, this.drawRange.count = s.drawRange.count, this.userData = s.userData, this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        });
        const Nl = new Ui,
            gs = new wr,
            cl = new Fn,
            cs = new ge,
            Ua = new ge,
            ys = new ge,
            Ol = new ge,
            hl = new ge,
            vs = new ge,
            ul = new ge,
            _s = new ge,
            xs = new ge,
            dl = new Ht,
            Bo = new Ht,
            Mn = new Ht,
            Ro = new ge,
            Vl = new ge;

        function ar(s = new an, e = new Gi) {
            Z.call(this), this.type = "Mesh", this.geometry = s, this.material = e, this.updateMorphTargets()
        }

        function Ds(s, e, r, h, c, v, w, E, T, B, Q, k) {
            cs.fromBufferAttribute(c, B), Ua.fromBufferAttribute(c, Q), ys.fromBufferAttribute(c, k);
            const i = s.morphTargetInfluences;
            if (e.morphTargets && v && i) {
                ul.set(0, 0, 0), _s.set(0, 0, 0), xs.set(0, 0, 0);
                for (let a = 0, l = v.length; a < l; a++) {
                    const d = i[a],
                        g = v[a];
                    d !== 0 && (Ol.fromBufferAttribute(g, B), hl.fromBufferAttribute(g, Q), vs.fromBufferAttribute(g, k), w ? (ul.addScaledVector(Ol, d), _s.addScaledVector(hl, d), xs.addScaledVector(vs, d)) : (ul.addScaledVector(Ol.sub(cs), d), _s.addScaledVector(hl.sub(Ua), d), xs.addScaledVector(vs.sub(ys), d)))
                }
                cs.add(ul), Ua.add(_s), ys.add(xs)
            }
            s.isSkinnedMesh && e.skinning && (s.boneTransform(B, cs), s.boneTransform(Q, Ua), s.boneTransform(k, ys));
            const t = function(a, l, d, g, x, A, M, F) {
                let D;
                if (D = l.side === 1 ? g.intersectTriangle(M, A, x, !0, F) : g.intersectTriangle(x, A, M, l.side !== 2, F), D === null) return null;
                Vl.copy(F), Vl.applyMatrix4(a.matrixWorld);
                const U = d.ray.origin.distanceTo(Vl);
                return U < d.near || U > d.far ? null : {
                    distance: U,
                    point: Vl.clone(),
                    object: a
                }
            }(s, e, r, h, cs, Ua, ys, Ro);
            if (t) {
                E && (dl.fromBufferAttribute(E, B), Bo.fromBufferAttribute(E, Q), Mn.fromBufferAttribute(E, k), t.uv = Mt.getUV(Ro, cs, Ua, ys, dl, Bo, Mn, new Ht)), T && (dl.fromBufferAttribute(T, B), Bo.fromBufferAttribute(T, Q), Mn.fromBufferAttribute(T, k), t.uv2 = Mt.getUV(Ro, cs, Ua, ys, dl, Bo, Mn, new Ht));
                const a = {
                    a: B,
                    b: Q,
                    c: k,
                    normal: new ge,
                    materialIndex: 0
                };
                Mt.getNormal(cs, Ua, ys, a.normal), t.face = a
            }
            return t
        }
        ar.prototype = Object.assign(Object.create(Z.prototype), {
            constructor: ar,
            isMesh: !0,
            copy: function(s) {
                return Z.prototype.copy.call(this, s), s.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = s.morphTargetInfluences.slice()), s.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, s.morphTargetDictionary)), this.material = s.material, this.geometry = s.geometry, this
            },
            updateMorphTargets: function() {
                const s = this.geometry;
                if (s.isBufferGeometry) {
                    const e = s.morphAttributes,
                        r = Object.keys(e);
                    if (r.length > 0) {
                        const h = e[r[0]];
                        if (h !== void 0) {
                            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                            for (let c = 0, v = h.length; c < v; c++) {
                                const w = h[c].name || String(c);
                                this.morphTargetInfluences.push(0), this.morphTargetDictionary[w] = c
                            }
                        }
                    }
                } else {
                    const e = s.morphTargets;
                    e !== void 0 && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            },
            raycast: function(s, e) {
                const r = this.geometry,
                    h = this.material,
                    c = this.matrixWorld;
                if (h === void 0 || (r.boundingSphere === null && r.computeBoundingSphere(), cl.copy(r.boundingSphere), cl.applyMatrix4(c), s.ray.intersectsSphere(cl) === !1) || (Nl.copy(c).invert(), gs.copy(s.ray).applyMatrix4(Nl), r.boundingBox !== null && gs.intersectsBox(r.boundingBox) === !1)) return;
                let v;
                if (r.isBufferGeometry) {
                    const w = r.index,
                        E = r.attributes.position,
                        T = r.morphAttributes.position,
                        B = r.morphTargetsRelative,
                        Q = r.attributes.uv,
                        k = r.attributes.uv2,
                        i = r.groups,
                        t = r.drawRange;
                    if (w !== null)
                        if (Array.isArray(h))
                            for (let a = 0, l = i.length; a < l; a++) {
                                const d = i[a],
                                    g = h[d.materialIndex];
                                for (let x = Math.max(d.start, t.start), A = Math.min(d.start + d.count, t.start + t.count); x < A; x += 3) {
                                    const M = w.getX(x),
                                        F = w.getX(x + 1),
                                        D = w.getX(x + 2);
                                    v = Ds(this, g, s, gs, E, T, B, Q, k, M, F, D), v && (v.faceIndex = Math.floor(x / 3), v.face.materialIndex = d.materialIndex, e.push(v))
                                }
                            } else
                                for (let a = Math.max(0, t.start), l = Math.min(w.count, t.start + t.count); a < l; a += 3) {
                                    const d = w.getX(a),
                                        g = w.getX(a + 1),
                                        x = w.getX(a + 2);
                                    v = Ds(this, h, s, gs, E, T, B, Q, k, d, g, x), v && (v.faceIndex = Math.floor(a / 3), e.push(v))
                                } else if (E !== void 0)
                                    if (Array.isArray(h))
                                        for (let a = 0, l = i.length; a < l; a++) {
                                            const d = i[a],
                                                g = h[d.materialIndex];
                                            for (let x = Math.max(d.start, t.start), A = Math.min(d.start + d.count, t.start + t.count); x < A; x += 3) v = Ds(this, g, s, gs, E, T, B, Q, k, x, x + 1, x + 2), v && (v.faceIndex = Math.floor(x / 3), v.face.materialIndex = d.materialIndex, e.push(v))
                                        } else
                                            for (let a = Math.max(0, t.start), l = Math.min(E.count, t.start + t.count); a < l; a += 3) v = Ds(this, h, s, gs, E, T, B, Q, k, a, a + 1, a + 2), v && (v.faceIndex = Math.floor(a / 3), e.push(v))
                } else r.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        });
        class sr extends an {
            constructor(e = 1, r = 1, h = 1, c = 1, v = 1, w = 1) {
                super(), this.type = "BoxGeometry", this.parameters = {
                    width: e,
                    height: r,
                    depth: h,
                    widthSegments: c,
                    heightSegments: v,
                    depthSegments: w
                };
                const E = this;
                c = Math.floor(c), v = Math.floor(v), w = Math.floor(w);
                const T = [],
                    B = [],
                    Q = [],
                    k = [];
                let i = 0,
                    t = 0;

                function a(l, d, g, x, A, M, F, D, U, N, H) {
                    const X = M / U,
                        ne = F / N,
                        le = M / 2,
                        ce = F / 2,
                        Qe = D / 2,
                        Se = U + 1,
                        Re = N + 1;
                    let ot = 0,
                        dt = 0;
                    const Ct = new ge;
                    for (let Nt = 0; Nt < Re; Nt++) {
                        const qt = Nt * ne - ce;
                        for (let Fe = 0; Fe < Se; Fe++) {
                            const Be = Fe * X - le;
                            Ct[l] = Be * x, Ct[d] = qt * A, Ct[g] = Qe, B.push(Ct.x, Ct.y, Ct.z), Ct[l] = 0, Ct[d] = 0, Ct[g] = D > 0 ? 1 : -1, Q.push(Ct.x, Ct.y, Ct.z), k.push(Fe / U), k.push(1 - Nt / N), ot += 1
                        }
                    }
                    for (let Nt = 0; Nt < N; Nt++)
                        for (let qt = 0; qt < U; qt++) {
                            const Fe = i + qt + Se * Nt,
                                Be = i + qt + Se * (Nt + 1),
                                mt = i + (qt + 1) + Se * (Nt + 1),
                                lt = i + (qt + 1) + Se * Nt;
                            T.push(Fe, Be, lt), T.push(Be, mt, lt), dt += 6
                        }
                    E.addGroup(t, dt, H), t += dt, i += ot
                }
                a("z", "y", "x", -1, -1, h, r, e, w, v, 0), a("z", "y", "x", 1, -1, h, r, -e, w, v, 1), a("x", "z", "y", 1, 1, e, h, r, c, w, 2), a("x", "z", "y", 1, -1, e, h, -r, c, w, 3), a("x", "y", "z", 1, -1, e, r, h, c, v, 4), a("x", "y", "z", -1, -1, e, r, -h, c, v, 5), this.setIndex(T), this.setAttribute("position", new Ai(B, 3)), this.setAttribute("normal", new Ai(Q, 3)), this.setAttribute("uv", new Ai(k, 2))
            }
        }

        function Fo(s) {
            const e = {};
            for (const r in s) {
                e[r] = {};
                for (const h in s[r]) {
                    const c = s[r][h];
                    c && (c.isColor || c.isMatrix3 || c.isMatrix4 || c.isVector2 || c.isVector3 || c.isVector4 || c.isTexture || c.isQuaternion) ? e[r][h] = c.clone() : Array.isArray(c) ? e[r][h] = c.slice() : e[r][h] = c
                }
            }
            return e
        }

        function un(s) {
            const e = {};
            for (let r = 0; r < s.length; r++) {
                const h = Fo(s[r]);
                for (const c in h) e[c] = h[c]
            }
            return e
        }
        const Gl = {
            clone: Fo,
            merge: un
        };

        function Cn(s) {
            ti.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, this.fragmentShader = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            }, this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, s !== void 0 && (s.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(s))
        }

        function Dn() {
            Z.call(this), this.type = "Camera", this.matrixWorldInverse = new Ui, this.projectionMatrix = new Ui, this.projectionMatrixInverse = new Ui
        }

        function dr(s = 50, e = 1, r = .1, h = 2e3) {
            Dn.call(this), this.type = "PerspectiveCamera", this.fov = s, this.zoom = 1, this.near = r, this.far = h, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
        }
        Cn.prototype = Object.create(ti.prototype), Cn.prototype.constructor = Cn, Cn.prototype.isShaderMaterial = !0, Cn.prototype.copy = function(s) {
            return ti.prototype.copy.call(this, s), this.fragmentShader = s.fragmentShader, this.vertexShader = s.vertexShader, this.uniforms = Fo(s.uniforms), this.defines = Object.assign({}, s.defines), this.wireframe = s.wireframe, this.wireframeLinewidth = s.wireframeLinewidth, this.lights = s.lights, this.clipping = s.clipping, this.skinning = s.skinning, this.morphTargets = s.morphTargets, this.morphNormals = s.morphNormals, this.extensions = Object.assign({}, s.extensions), this.glslVersion = s.glslVersion, this
        }, Cn.prototype.toJSON = function(s) {
            const e = ti.prototype.toJSON.call(this, s);
            e.glslVersion = this.glslVersion, e.uniforms = {};
            for (const h in this.uniforms) {
                const c = this.uniforms[h].value;
                c && c.isTexture ? e.uniforms[h] = {
                    type: "t",
                    value: c.toJSON(s).uuid
                } : c && c.isColor ? e.uniforms[h] = {
                    type: "c",
                    value: c.getHex()
                } : c && c.isVector2 ? e.uniforms[h] = {
                    type: "v2",
                    value: c.toArray()
                } : c && c.isVector3 ? e.uniforms[h] = {
                    type: "v3",
                    value: c.toArray()
                } : c && c.isVector4 ? e.uniforms[h] = {
                    type: "v4",
                    value: c.toArray()
                } : c && c.isMatrix3 ? e.uniforms[h] = {
                    type: "m3",
                    value: c.toArray()
                } : c && c.isMatrix4 ? e.uniforms[h] = {
                    type: "m4",
                    value: c.toArray()
                } : e.uniforms[h] = {
                    value: c
                }
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
            const r = {};
            for (const h in this.extensions) this.extensions[h] === !0 && (r[h] = !0);
            return Object.keys(r).length > 0 && (e.extensions = r), e
        }, Dn.prototype = Object.assign(Object.create(Z.prototype), {
            constructor: Dn,
            isCamera: !0,
            copy: function(s, e) {
                return Z.prototype.copy.call(this, s, e), this.matrixWorldInverse.copy(s.matrixWorldInverse), this.projectionMatrix.copy(s.projectionMatrix), this.projectionMatrixInverse.copy(s.projectionMatrixInverse), this
            },
            getWorldDirection: function(s) {
                s === void 0 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), s = new ge), this.updateWorldMatrix(!0, !1);
                const e = this.matrixWorld.elements;
                return s.set(-e[8], -e[9], -e[10]).normalize()
            },
            updateMatrixWorld: function(s) {
                Z.prototype.updateMatrixWorld.call(this, s), this.matrixWorldInverse.copy(this.matrixWorld).invert()
            },
            updateWorldMatrix: function(s, e) {
                Z.prototype.updateWorldMatrix.call(this, s, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
            },
            clone: function() {
                return new this.constructor().copy(this)
            }
        }), dr.prototype = Object.assign(Object.create(Dn.prototype), {
            constructor: dr,
            isPerspectiveCamera: !0,
            copy: function(s, e) {
                return Dn.prototype.copy.call(this, s, e), this.fov = s.fov, this.zoom = s.zoom, this.near = s.near, this.far = s.far, this.focus = s.focus, this.aspect = s.aspect, this.view = s.view === null ? null : Object.assign({}, s.view), this.filmGauge = s.filmGauge, this.filmOffset = s.filmOffset, this
            },
            setFocalLength: function(s) {
                const e = .5 * this.getFilmHeight() / s;
                this.fov = 2 * Mi.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
            },
            getFocalLength: function() {
                const s = Math.tan(.5 * Mi.DEG2RAD * this.fov);
                return .5 * this.getFilmHeight() / s
            },
            getEffectiveFOV: function() {
                return 2 * Mi.RAD2DEG * Math.atan(Math.tan(.5 * Mi.DEG2RAD * this.fov) / this.zoom)
            },
            getFilmWidth: function() {
                return this.filmGauge * Math.min(this.aspect, 1)
            },
            getFilmHeight: function() {
                return this.filmGauge / Math.max(this.aspect, 1)
            },
            setViewOffset: function(s, e, r, h, c, v) {
                this.aspect = s / e, this.view === null && (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1
                }), this.view.enabled = !0, this.view.fullWidth = s, this.view.fullHeight = e, this.view.offsetX = r, this.view.offsetY = h, this.view.width = c, this.view.height = v, this.updateProjectionMatrix()
            },
            clearViewOffset: function() {
                this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
            },
            updateProjectionMatrix: function() {
                const s = this.near;
                let e = s * Math.tan(.5 * Mi.DEG2RAD * this.fov) / this.zoom,
                    r = 2 * e,
                    h = this.aspect * r,
                    c = -.5 * h;
                const v = this.view;
                if (this.view !== null && this.view.enabled) {
                    const E = v.fullWidth,
                        T = v.fullHeight;
                    c += v.offsetX * h / E, e -= v.offsetY * r / T, h *= v.width / E, r *= v.height / T
                }
                const w = this.filmOffset;
                w !== 0 && (c += s * w / this.getFilmWidth()), this.projectionMatrix.makePerspective(c, c + h, e, e - r, s, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            },
            toJSON: function(s) {
                const e = Z.prototype.toJSON.call(this, s);
                return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
            }
        });
        const bs = 90;
        class Lo extends Z {
            constructor(e, r, h) {
                if (super(), this.type = "CubeCamera", h.isWebGLCubeRenderTarget !== !0) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
                this.renderTarget = h;
                const c = new dr(bs, 1, e, r);
                c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new ge(1, 0, 0)), this.add(c);
                const v = new dr(bs, 1, e, r);
                v.layers = this.layers, v.up.set(0, -1, 0), v.lookAt(new ge(-1, 0, 0)), this.add(v);
                const w = new dr(bs, 1, e, r);
                w.layers = this.layers, w.up.set(0, 0, 1), w.lookAt(new ge(0, 1, 0)), this.add(w);
                const E = new dr(bs, 1, e, r);
                E.layers = this.layers, E.up.set(0, 0, -1), E.lookAt(new ge(0, -1, 0)), this.add(E);
                const T = new dr(bs, 1, e, r);
                T.layers = this.layers, T.up.set(0, -1, 0), T.lookAt(new ge(0, 0, 1)), this.add(T);
                const B = new dr(bs, 1, e, r);
                B.layers = this.layers, B.up.set(0, -1, 0), B.lookAt(new ge(0, 0, -1)), this.add(B)
            }
            update(e, r) {
                this.parent === null && this.updateMatrixWorld();
                const h = this.renderTarget,
                    [c, v, w, E, T, B] = this.children,
                    Q = e.xr.enabled,
                    k = e.getRenderTarget();
                e.xr.enabled = !1;
                const i = h.texture.generateMipmaps;
                h.texture.generateMipmaps = !1, e.setRenderTarget(h, 0), e.render(r, c), e.setRenderTarget(h, 1), e.render(r, v), e.setRenderTarget(h, 2), e.render(r, w), e.setRenderTarget(h, 3), e.render(r, E), e.setRenderTarget(h, 4), e.render(r, T), h.texture.generateMipmaps = i, e.setRenderTarget(h, 5), e.render(r, B), e.setRenderTarget(k), e.xr.enabled = Q
            }
        }
        class ao extends cn {
            constructor(e, r, h, c, v, w, E, T, B, Q) {
                super(e = e !== void 0 ? e : [], r = r !== void 0 ? r : 301, h, c, v, w, E = E !== void 0 ? E : 1022, T, B, Q), this._needsFlipEnvMap = !0, this.flipY = !1
            }
            get images() {
                return this.image
            }
            set images(e) {
                this.image = e
            }
        }
        ao.prototype.isCubeTexture = !0;
        class so extends qi {
            constructor(e, r, h) {
                Number.isInteger(r) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), r = h), super(e, e, r), r = r || {}, this.texture = new ao(void 0, r.mapping, r.wrapS, r.wrapT, r.magFilter, r.minFilter, r.format, r.type, r.anisotropy, r.encoding), this.texture.generateMipmaps = r.generateMipmaps !== void 0 && r.generateMipmaps, this.texture.minFilter = r.minFilter !== void 0 ? r.minFilter : 1006, this.texture._needsFlipEnvMap = !1
            }
            fromEquirectangularTexture(e, r) {
                this.texture.type = r.type, this.texture.format = 1023, this.texture.encoding = r.encoding, this.texture.generateMipmaps = r.generateMipmaps, this.texture.minFilter = r.minFilter, this.texture.magFilter = r.magFilter;
                const h = {
                        uniforms: {
                            tEquirect: {
                                value: null
                            }
                        },
                        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
                    },
                    c = new sr(5, 5, 5),
                    v = new Cn({
                        name: "CubemapFromEquirect",
                        uniforms: Fo(h.uniforms),
                        vertexShader: h.vertexShader,
                        fragmentShader: h.fragmentShader,
                        side: 1,
                        blending: 0
                    });
                v.uniforms.tEquirect.value = r;
                const w = new ar(c, v),
                    E = r.minFilter;
                return r.minFilter === 1008 && (r.minFilter = 1006), new Lo(1, 10, this).update(e, w), r.minFilter = E, w.geometry.dispose(), w.material.dispose(), this
            }
            clear(e, r, h, c) {
                const v = e.getRenderTarget();
                for (let w = 0; w < 6; w++) e.setRenderTarget(this, w), e.clear(r, h, c);
                e.setRenderTarget(v)
            }
        }
        so.prototype.isWebGLCubeRenderTarget = !0;
        class ws extends cn {
            constructor(e, r, h, c, v, w, E, T, B, Q, k, i) {
                super(null, w, E, T, B, Q, c, v, k, i), this.image = {
                    data: e || null,
                    width: r || 1,
                    height: h || 1
                }, this.magFilter = B !== void 0 ? B : 1003, this.minFilter = Q !== void 0 ? Q : 1003, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
            }
        }
        ws.prototype.isDataTexture = !0;
        const Es = new Fn,
            pl = new ge;
        class Us {
            constructor(e = new Et, r = new Et, h = new Et, c = new Et, v = new Et, w = new Et) {
                this.planes = [e, r, h, c, v, w]
            }
            set(e, r, h, c, v, w) {
                const E = this.planes;
                return E[0].copy(e), E[1].copy(r), E[2].copy(h), E[3].copy(c), E[4].copy(v), E[5].copy(w), this
            }
            copy(e) {
                const r = this.planes;
                for (let h = 0; h < 6; h++) r[h].copy(e.planes[h]);
                return this
            }
            setFromProjectionMatrix(e) {
                const r = this.planes,
                    h = e.elements,
                    c = h[0],
                    v = h[1],
                    w = h[2],
                    E = h[3],
                    T = h[4],
                    B = h[5],
                    Q = h[6],
                    k = h[7],
                    i = h[8],
                    t = h[9],
                    a = h[10],
                    l = h[11],
                    d = h[12],
                    g = h[13],
                    x = h[14],
                    A = h[15];
                return r[0].setComponents(E - c, k - T, l - i, A - d).normalize(), r[1].setComponents(E + c, k + T, l + i, A + d).normalize(), r[2].setComponents(E + v, k + B, l + t, A + g).normalize(), r[3].setComponents(E - v, k - B, l - t, A - g).normalize(), r[4].setComponents(E - w, k - Q, l - a, A - x).normalize(), r[5].setComponents(E + w, k + Q, l + a, A + x).normalize(), this
            }
            intersectsObject(e) {
                const r = e.geometry;
                return r.boundingSphere === null && r.computeBoundingSphere(), Es.copy(r.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Es)
            }
            intersectsSprite(e) {
                return Es.center.set(0, 0, 0), Es.radius = .7071067811865476, Es.applyMatrix4(e.matrixWorld), this.intersectsSphere(Es)
            }
            intersectsSphere(e) {
                const r = this.planes,
                    h = e.center,
                    c = -e.radius;
                for (let v = 0; v < 6; v++)
                    if (r[v].distanceToPoint(h) < c) return !1;
                return !0
            }
            intersectsBox(e) {
                const r = this.planes;
                for (let h = 0; h < 6; h++) {
                    const c = r[h];
                    if (pl.x = c.normal.x > 0 ? e.max.x : e.min.x, pl.y = c.normal.y > 0 ? e.max.y : e.min.y, pl.z = c.normal.z > 0 ? e.max.z : e.min.z, c.distanceToPoint(pl) < 0) return !1
                }
                return !0
            }
            containsPoint(e) {
                const r = this.planes;
                for (let h = 0; h < 6; h++)
                    if (r[h].distanceToPoint(e) < 0) return !1;
                return !0
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }

        function Pc() {
            let s = null,
                e = !1,
                r = null,
                h = null;

            function c(v, w) {
                r(v, w), h = s.requestAnimationFrame(c)
            }
            return {
                start: function() {
                    e !== !0 && r !== null && (h = s.requestAnimationFrame(c), e = !0)
                },
                stop: function() {
                    s.cancelAnimationFrame(h), e = !1
                },
                setAnimationLoop: function(v) {
                    r = v
                },
                setContext: function(v) {
                    s = v
                }
            }
        }

        function Hl(s, e) {
            const r = e.isWebGL2,
                h = new WeakMap;
            return {
                get: function(c) {
                    return c.isInterleavedBufferAttribute && (c = c.data), h.get(c)
                },
                remove: function(c) {
                    c.isInterleavedBufferAttribute && (c = c.data);
                    const v = h.get(c);
                    v && (s.deleteBuffer(v.buffer), h.delete(c))
                },
                update: function(c, v) {
                    if (c.isGLBufferAttribute) {
                        const E = h.get(c);
                        return void((!E || E.version < c.version) && h.set(c, {
                            buffer: c.buffer,
                            type: c.type,
                            bytesPerElement: c.elementSize,
                            version: c.version
                        }))
                    }
                    c.isInterleavedBufferAttribute && (c = c.data);
                    const w = h.get(c);
                    w === void 0 ? h.set(c, function(E, T) {
                        const B = E.array,
                            Q = E.usage,
                            k = s.createBuffer();
                        s.bindBuffer(T, k), s.bufferData(T, B, Q), E.onUploadCallback();
                        let i = 5126;
                        return B instanceof Float32Array ? i = 5126 : B instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : B instanceof Uint16Array ? E.isFloat16BufferAttribute ? r ? i = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : i = 5123 : B instanceof Int16Array ? i = 5122 : B instanceof Uint32Array ? i = 5125 : B instanceof Int32Array ? i = 5124 : B instanceof Int8Array ? i = 5120 : B instanceof Uint8Array && (i = 5121), {
                            buffer: k,
                            type: i,
                            bytesPerElement: B.BYTES_PER_ELEMENT,
                            version: E.version
                        }
                    }(c, v)) : w.version < c.version && (function(E, T, B) {
                        const Q = T.array,
                            k = T.updateRange;
                        s.bindBuffer(B, E), k.count === -1 ? s.bufferSubData(B, 0, Q) : (r ? s.bufferSubData(B, k.offset * Q.BYTES_PER_ELEMENT, Q, k.offset, k.count) : s.bufferSubData(B, k.offset * Q.BYTES_PER_ELEMENT, Q.subarray(k.offset, k.offset + k.count)), k.count = -1)
                    }(w.buffer, c, v), w.version = c.version)
                }
            }
        }
        class Is extends an {
            constructor(e = 1, r = 1, h = 1, c = 1) {
                super(), this.type = "PlaneGeometry", this.parameters = {
                    width: e,
                    height: r,
                    widthSegments: h,
                    heightSegments: c
                };
                const v = e / 2,
                    w = r / 2,
                    E = Math.floor(h),
                    T = Math.floor(c),
                    B = E + 1,
                    Q = T + 1,
                    k = e / E,
                    i = r / T,
                    t = [],
                    a = [],
                    l = [],
                    d = [];
                for (let g = 0; g < Q; g++) {
                    const x = g * i - w;
                    for (let A = 0; A < B; A++) {
                        const M = A * k - v;
                        a.push(M, -x, 0), l.push(0, 0, 1), d.push(A / E), d.push(1 - g / T)
                    }
                }
                for (let g = 0; g < T; g++)
                    for (let x = 0; x < E; x++) {
                        const A = x + B * g,
                            M = x + B * (g + 1),
                            F = x + 1 + B * (g + 1),
                            D = x + 1 + B * g;
                        t.push(A, M, D), t.push(M, F, D)
                    }
                this.setIndex(t), this.setAttribute("position", new Ai(a, 3)), this.setAttribute("normal", new Ai(l, 3)), this.setAttribute("uv", new Ai(d, 2))
            }
        }
        const An = {
                alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
                alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
                alphatest_fragment: `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,
                aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,
                aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
                begin_vertex: "vec3 transformed = vec3( position );",
                beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
                bsdfs: `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,
                bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
                clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
                clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
                clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
                clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
                color_fragment: `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
                color_pars_fragment: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
                color_pars_vertex: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
                color_vertex: `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
                common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
                cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
                defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
                displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
                displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
                emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
                emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
                encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
                encodings_pars_fragment: `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,
                envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
                envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
                envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
                envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
                envmap_physical_pars_fragment: `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,
                envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
                fog_vertex: `#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,
                fog_pars_vertex: `#ifdef USE_FOG
	varying float fogDepth;
#endif`,
                fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
                fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
                gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
                lightmap_fragment: `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,
                lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
                lights_lambert_vertex: `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
                lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,
                lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
                lights_toon_pars_fragment: `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
                lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
                lights_phong_pars_fragment: `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
                lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,
                lights_physical_pars_fragment: `struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(		0, 1,		0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
                lights_fragment_begin: `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
                lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,
                lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
                logdepthbuf_fragment: `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
                logdepthbuf_pars_fragment: `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
                logdepthbuf_pars_vertex: `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
                logdepthbuf_vertex: `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
                map_fragment: `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,
                map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
                map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
                map_particle_pars_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
                metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
                metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
                morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,
                morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,
                morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,
                normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
                normal_fragment_maps: `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
                normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
                clearcoat_normal_fragment_begin: `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
                clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
                clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
                packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
                premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
                project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
                dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
                dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
                roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
                roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
                shadowmap_pars_fragment: `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
							f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
							f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
                shadowmap_pars_vertex: `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
                shadowmap_vertex: `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
                shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
                skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
                skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
                skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
                skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
                specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
                specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
                tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
                tonemapping_pars_fragment: `#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,	1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
                transmissionmap_fragment: `#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,
                transmissionmap_pars_fragment: `#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,
                uv_pars_fragment: `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
                uv_pars_vertex: `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
                uv_vertex: `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
                uv2_pars_fragment: `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
                uv2_pars_vertex: `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
                uv2_vertex: `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
                worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
                background_frag: `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
                background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
                cube_frag: `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
                cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
                depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
                depth_vert: `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
                distanceRGBA_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
                distanceRGBA_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
                equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
                equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
                linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
                linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
                meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshbasic_vert: `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
                meshlambert_frag: `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshlambert_vert: `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
                meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                normal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,
                normal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
                points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
                points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
                shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
                shadow_vert: `#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
                sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
            },
            Oi = {
                common: {
                    diffuse: {
                        value: new Rt(15658734)
                    },
                    opacity: {
                        value: 1
                    },
                    map: {
                        value: null
                    },
                    uvTransform: {
                        value: new Pt
                    },
                    uv2Transform: {
                        value: new Pt
                    },
                    alphaMap: {
                        value: null
                    }
                },
                specularmap: {
                    specularMap: {
                        value: null
                    }
                },
                envmap: {
                    envMap: {
                        value: null
                    },
                    flipEnvMap: {
                        value: -1
                    },
                    reflectivity: {
                        value: 1
                    },
                    refractionRatio: {
                        value: .98
                    },
                    maxMipLevel: {
                        value: 0
                    }
                },
                aomap: {
                    aoMap: {
                        value: null
                    },
                    aoMapIntensity: {
                        value: 1
                    }
                },
                lightmap: {
                    lightMap: {
                        value: null
                    },
                    lightMapIntensity: {
                        value: 1
                    }
                },
                emissivemap: {
                    emissiveMap: {
                        value: null
                    }
                },
                bumpmap: {
                    bumpMap: {
                        value: null
                    },
                    bumpScale: {
                        value: 1
                    }
                },
                normalmap: {
                    normalMap: {
                        value: null
                    },
                    normalScale: {
                        value: new Ht(1, 1)
                    }
                },
                displacementmap: {
                    displacementMap: {
                        value: null
                    },
                    displacementScale: {
                        value: 1
                    },
                    displacementBias: {
                        value: 0
                    }
                },
                roughnessmap: {
                    roughnessMap: {
                        value: null
                    }
                },
                metalnessmap: {
                    metalnessMap: {
                        value: null
                    }
                },
                gradientmap: {
                    gradientMap: {
                        value: null
                    }
                },
                fog: {
                    fogDensity: {
                        value: 25e-5
                    },
                    fogNear: {
                        value: 1
                    },
                    fogFar: {
                        value: 2e3
                    },
                    fogColor: {
                        value: new Rt(16777215)
                    }
                },
                lights: {
                    ambientLightColor: {
                        value: []
                    },
                    lightProbe: {
                        value: []
                    },
                    directionalLights: {
                        value: [],
                        properties: {
                            direction: {},
                            color: {}
                        }
                    },
                    directionalLightShadows: {
                        value: [],
                        properties: {
                            shadowBias: {},
                            shadowNormalBias: {},
                            shadowRadius: {},
                            shadowMapSize: {}
                        }
                    },
                    directionalShadowMap: {
                        value: []
                    },
                    directionalShadowMatrix: {
                        value: []
                    },
                    spotLights: {
                        value: [],
                        properties: {
                            color: {},
                            position: {},
                            direction: {},
                            distance: {},
                            coneCos: {},
                            penumbraCos: {},
                            decay: {}
                        }
                    },
                    spotLightShadows: {
                        value: [],
                        properties: {
                            shadowBias: {},
                            shadowNormalBias: {},
                            shadowRadius: {},
                            shadowMapSize: {}
                        }
                    },
                    spotShadowMap: {
                        value: []
                    },
                    spotShadowMatrix: {
                        value: []
                    },
                    pointLights: {
                        value: [],
                        properties: {
                            color: {},
                            position: {},
                            decay: {},
                            distance: {}
                        }
                    },
                    pointLightShadows: {
                        value: [],
                        properties: {
                            shadowBias: {},
                            shadowNormalBias: {},
                            shadowRadius: {},
                            shadowMapSize: {},
                            shadowCameraNear: {},
                            shadowCameraFar: {}
                        }
                    },
                    pointShadowMap: {
                        value: []
                    },
                    pointShadowMatrix: {
                        value: []
                    },
                    hemisphereLights: {
                        value: [],
                        properties: {
                            direction: {},
                            skyColor: {},
                            groundColor: {}
                        }
                    },
                    rectAreaLights: {
                        value: [],
                        properties: {
                            color: {},
                            position: {},
                            width: {},
                            height: {}
                        }
                    },
                    ltc_1: {
                        value: null
                    },
                    ltc_2: {
                        value: null
                    }
                },
                points: {
                    diffuse: {
                        value: new Rt(15658734)
                    },
                    opacity: {
                        value: 1
                    },
                    size: {
                        value: 1
                    },
                    scale: {
                        value: 1
                    },
                    map: {
                        value: null
                    },
                    alphaMap: {
                        value: null
                    },
                    uvTransform: {
                        value: new Pt
                    }
                },
                sprite: {
                    diffuse: {
                        value: new Rt(15658734)
                    },
                    opacity: {
                        value: 1
                    },
                    center: {
                        value: new Ht(.5, .5)
                    },
                    rotation: {
                        value: 0
                    },
                    map: {
                        value: null
                    },
                    alphaMap: {
                        value: null
                    },
                    uvTransform: {
                        value: new Pt
                    }
                }
            },
            Ga = {
                basic: {
                    uniforms: un([Oi.common, Oi.specularmap, Oi.envmap, Oi.aomap, Oi.lightmap, Oi.fog]),
                    vertexShader: An.meshbasic_vert,
                    fragmentShader: An.meshbasic_frag
                },
                lambert: {
                    uniforms: un([Oi.common, Oi.specularmap, Oi.envmap, Oi.aomap, Oi.lightmap, Oi.emissivemap, Oi.fog, Oi.lights, {
                        emissive: {
                            value: new Rt(0)
                        }
                    }]),
                    vertexShader: An.meshlambert_vert,
                    fragmentShader: An.meshlambert_frag
                },
                phong: {
                    uniforms: un([Oi.common, Oi.specularmap, Oi.envmap, Oi.aomap, Oi.lightmap, Oi.emissivemap, Oi.bumpmap, Oi.normalmap, Oi.displacementmap, Oi.fog, Oi.lights, {
                        emissive: {
                            value: new Rt(0)
                        },
                        specular: {
                            value: new Rt(1118481)
                        },
                        shininess: {
                            value: 30
                        }
                    }]),
                    vertexShader: An.meshphong_vert,
                    fragmentShader: An.meshphong_frag
                },
                standard: {
                    uniforms: un([Oi.common, Oi.envmap, Oi.aomap, Oi.lightmap, Oi.emissivemap, Oi.bumpmap, Oi.normalmap, Oi.displacementmap, Oi.roughnessmap, Oi.metalnessmap, Oi.fog, Oi.lights, {
                        emissive: {
                            value: new Rt(0)
                        },
                        roughness: {
                            value: 1
                        },
                        metalness: {
                            value: 0
                        },
                        envMapIntensity: {
                            value: 1
                        }
                    }]),
                    vertexShader: An.meshphysical_vert,
                    fragmentShader: An.meshphysical_frag
                },
                toon: {
                    uniforms: un([Oi.common, Oi.aomap, Oi.lightmap, Oi.emissivemap, Oi.bumpmap, Oi.normalmap, Oi.displacementmap, Oi.gradientmap, Oi.fog, Oi.lights, {
                        emissive: {
                            value: new Rt(0)
                        }
                    }]),
                    vertexShader: An.meshtoon_vert,
                    fragmentShader: An.meshtoon_frag
                },
                matcap: {
                    uniforms: un([Oi.common, Oi.bumpmap, Oi.normalmap, Oi.displacementmap, Oi.fog, {
                        matcap: {
                            value: null
                        }
                    }]),
                    vertexShader: An.meshmatcap_vert,
                    fragmentShader: An.meshmatcap_frag
                },
                points: {
                    uniforms: un([Oi.points, Oi.fog]),
                    vertexShader: An.points_vert,
                    fragmentShader: An.points_frag
                },
                dashed: {
                    uniforms: un([Oi.common, Oi.fog, {
                        scale: {
                            value: 1
                        },
                        dashSize: {
                            value: 1
                        },
                        totalSize: {
                            value: 2
                        }
                    }]),
                    vertexShader: An.linedashed_vert,
                    fragmentShader: An.linedashed_frag
                },
                depth: {
                    uniforms: un([Oi.common, Oi.displacementmap]),
                    vertexShader: An.depth_vert,
                    fragmentShader: An.depth_frag
                },
                normal: {
                    uniforms: un([Oi.common, Oi.bumpmap, Oi.normalmap, Oi.displacementmap, {
                        opacity: {
                            value: 1
                        }
                    }]),
                    vertexShader: An.normal_vert,
                    fragmentShader: An.normal_frag
                },
                sprite: {
                    uniforms: un([Oi.sprite, Oi.fog]),
                    vertexShader: An.sprite_vert,
                    fragmentShader: An.sprite_frag
                },
                background: {
                    uniforms: {
                        uvTransform: {
                            value: new Pt
                        },
                        t2D: {
                            value: null
                        }
                    },
                    vertexShader: An.background_vert,
                    fragmentShader: An.background_frag
                },
                cube: {
                    uniforms: un([Oi.envmap, {
                        opacity: {
                            value: 1
                        }
                    }]),
                    vertexShader: An.cube_vert,
                    fragmentShader: An.cube_frag
                },
                equirect: {
                    uniforms: {
                        tEquirect: {
                            value: null
                        }
                    },
                    vertexShader: An.equirect_vert,
                    fragmentShader: An.equirect_frag
                },
                distanceRGBA: {
                    uniforms: un([Oi.common, Oi.displacementmap, {
                        referencePosition: {
                            value: new ge
                        },
                        nearDistance: {
                            value: 1
                        },
                        farDistance: {
                            value: 1e3
                        }
                    }]),
                    vertexShader: An.distanceRGBA_vert,
                    fragmentShader: An.distanceRGBA_frag
                },
                shadow: {
                    uniforms: un([Oi.lights, Oi.fog, {
                        color: {
                            value: new Rt(0)
                        },
                        opacity: {
                            value: 1
                        }
                    }]),
                    vertexShader: An.shadow_vert,
                    fragmentShader: An.shadow_frag
                }
            };

        function Wl(s, e, r, h, c) {
            const v = new Rt(0);
            let w, E, T = 0,
                B = null,
                Q = 0,
                k = null;

            function i(t, a) {
                r.buffers.color.setClear(t.r, t.g, t.b, a, c)
            }
            return {
                getClearColor: function() {
                    return v
                },
                setClearColor: function(t, a = 1) {
                    v.set(t), T = a, i(v, T)
                },
                getClearAlpha: function() {
                    return T
                },
                setClearAlpha: function(t) {
                    T = t, i(v, T)
                },
                render: function(t, a, l, d) {
                    let g = a.isScene === !0 ? a.background : null;
                    g && g.isTexture && (g = e.get(g));
                    const x = s.xr,
                        A = x.getSession && x.getSession();
                    A && A.environmentBlendMode === "additive" && (g = null), g === null ? i(v, T) : g && g.isColor && (i(g, 1), d = !0), (s.autoClear || d) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), g && (g.isCubeTexture || g.mapping === 306) ? (E === void 0 && (E = new ar(new sr(1, 1, 1), new Cn({
                        name: "BackgroundCubeMaterial",
                        uniforms: Fo(Ga.cube.uniforms),
                        vertexShader: Ga.cube.vertexShader,
                        fragmentShader: Ga.cube.fragmentShader,
                        side: 1,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    })), E.geometry.deleteAttribute("normal"), E.geometry.deleteAttribute("uv"), E.onBeforeRender = function(M, F, D) {
                        this.matrixWorld.copyPosition(D.matrixWorld)
                    }, Object.defineProperty(E.material, "envMap", {
                        get: function() {
                            return this.uniforms.envMap.value
                        }
                    }), h.update(E)), E.material.uniforms.envMap.value = g, E.material.uniforms.flipEnvMap.value = g.isCubeTexture && g._needsFlipEnvMap ? -1 : 1, B === g && Q === g.version && k === s.toneMapping || (E.material.needsUpdate = !0, B = g, Q = g.version, k = s.toneMapping), t.unshift(E, E.geometry, E.material, 0, 0, null)) : g && g.isTexture && (w === void 0 && (w = new ar(new Is(2, 2), new Cn({
                        name: "BackgroundMaterial",
                        uniforms: Fo(Ga.background.uniforms),
                        vertexShader: Ga.background.vertexShader,
                        fragmentShader: Ga.background.fragmentShader,
                        side: 0,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    })), w.geometry.deleteAttribute("normal"), Object.defineProperty(w.material, "map", {
                        get: function() {
                            return this.uniforms.t2D.value
                        }
                    }), h.update(w)), w.material.uniforms.t2D.value = g, g.matrixAutoUpdate === !0 && g.updateMatrix(), w.material.uniforms.uvTransform.value.copy(g.matrix), B === g && Q === g.version && k === s.toneMapping || (w.material.needsUpdate = !0, B = g, Q = g.version, k = s.toneMapping), t.unshift(w, w.geometry, w.material, 0, 0, null))
                }
            }
        }

        function kc(s, e, r, h) {
            const c = s.getParameter(34921),
                v = h.isWebGL2 ? null : e.get("OES_vertex_array_object"),
                w = h.isWebGL2 || v !== null,
                E = {},
                T = i(null);
            let B = T;

            function Q(M) {
                return h.isWebGL2 ? s.bindVertexArray(M) : v.bindVertexArrayOES(M)
            }

            function k(M) {
                return h.isWebGL2 ? s.deleteVertexArray(M) : v.deleteVertexArrayOES(M)
            }

            function i(M) {
                const F = [],
                    D = [],
                    U = [];
                for (let N = 0; N < c; N++) F[N] = 0, D[N] = 0, U[N] = 0;
                return {
                    geometry: null,
                    program: null,
                    wireframe: !1,
                    newAttributes: F,
                    enabledAttributes: D,
                    attributeDivisors: U,
                    object: M,
                    attributes: {},
                    index: null
                }
            }

            function t() {
                const M = B.newAttributes;
                for (let F = 0, D = M.length; F < D; F++) M[F] = 0
            }

            function a(M) {
                l(M, 0)
            }

            function l(M, F) {
                const D = B.newAttributes,
                    U = B.enabledAttributes,
                    N = B.attributeDivisors;
                D[M] = 1, U[M] === 0 && (s.enableVertexAttribArray(M), U[M] = 1), N[M] !== F && ((h.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[h.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](M, F), N[M] = F)
            }

            function d() {
                const M = B.newAttributes,
                    F = B.enabledAttributes;
                for (let D = 0, U = F.length; D < U; D++) F[D] !== M[D] && (s.disableVertexAttribArray(D), F[D] = 0)
            }

            function g(M, F, D, U, N, H) {
                h.isWebGL2 !== !0 || D !== 5124 && D !== 5125 ? s.vertexAttribPointer(M, F, D, U, N, H) : s.vertexAttribIPointer(M, F, D, N, H)
            }

            function x() {
                A(), B !== T && (B = T, Q(B.object))
            }

            function A() {
                T.geometry = null, T.program = null, T.wireframe = !1
            }
            return {
                setup: function(M, F, D, U, N) {
                    let H = !1;
                    if (w) {
                        const X = function(ne, le, ce) {
                            const Qe = ce.wireframe === !0;
                            let Se = E[ne.id];
                            Se === void 0 && (Se = {}, E[ne.id] = Se);
                            let Re = Se[le.id];
                            Re === void 0 && (Re = {}, Se[le.id] = Re);
                            let ot = Re[Qe];
                            return ot === void 0 && (ot = i(h.isWebGL2 ? s.createVertexArray() : v.createVertexArrayOES()), Re[Qe] = ot), ot
                        }(U, D, F);
                        B !== X && (B = X, Q(B.object)), H = function(ne, le) {
                            const ce = B.attributes,
                                Qe = ne.attributes;
                            let Se = 0;
                            for (const Re in Qe) {
                                const ot = ce[Re],
                                    dt = Qe[Re];
                                if (ot === void 0 || ot.attribute !== dt || ot.data !== dt.data) return !0;
                                Se++
                            }
                            return B.attributesNum !== Se || B.index !== le
                        }(U, N), H && function(ne, le) {
                            const ce = {},
                                Qe = ne.attributes;
                            let Se = 0;
                            for (const Re in Qe) {
                                const ot = Qe[Re],
                                    dt = {};
                                dt.attribute = ot, ot.data && (dt.data = ot.data), ce[Re] = dt, Se++
                            }
                            B.attributes = ce, B.attributesNum = Se, B.index = le
                        }(U, N)
                    } else {
                        const X = F.wireframe === !0;
                        B.geometry === U.id && B.program === D.id && B.wireframe === X || (B.geometry = U.id, B.program = D.id, B.wireframe = X, H = !0)
                    }
                    M.isInstancedMesh === !0 && (H = !0), N !== null && r.update(N, 34963), H && (function(X, ne, le, ce) {
                        if (h.isWebGL2 === !1 && (X.isInstancedMesh || ce.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
                        t();
                        const Qe = ce.attributes,
                            Se = le.getAttributes(),
                            Re = ne.defaultAttributeValues;
                        for (const ot in Se) {
                            const dt = Se[ot];
                            if (dt >= 0) {
                                const Ct = Qe[ot];
                                if (Ct !== void 0) {
                                    const Nt = Ct.normalized,
                                        qt = Ct.itemSize,
                                        Fe = r.get(Ct);
                                    if (Fe === void 0) continue;
                                    const Be = Fe.buffer,
                                        mt = Fe.type,
                                        lt = Fe.bytesPerElement;
                                    if (Ct.isInterleavedBufferAttribute) {
                                        const Xe = Ct.data,
                                            Zt = Xe.stride,
                                            Ie = Ct.offset;
                                        Xe && Xe.isInstancedInterleavedBuffer ? (l(dt, Xe.meshPerAttribute), ce._maxInstanceCount === void 0 && (ce._maxInstanceCount = Xe.meshPerAttribute * Xe.count)) : a(dt), s.bindBuffer(34962, Be), g(dt, qt, mt, Nt, Zt * lt, Ie * lt)
                                    } else Ct.isInstancedBufferAttribute ? (l(dt, Ct.meshPerAttribute), ce._maxInstanceCount === void 0 && (ce._maxInstanceCount = Ct.meshPerAttribute * Ct.count)) : a(dt), s.bindBuffer(34962, Be), g(dt, qt, mt, Nt, 0, 0)
                                } else if (ot === "instanceMatrix") {
                                    const Nt = r.get(X.instanceMatrix);
                                    if (Nt === void 0) continue;
                                    const qt = Nt.buffer,
                                        Fe = Nt.type;
                                    l(dt + 0, 1), l(dt + 1, 1), l(dt + 2, 1), l(dt + 3, 1), s.bindBuffer(34962, qt), s.vertexAttribPointer(dt + 0, 4, Fe, !1, 64, 0), s.vertexAttribPointer(dt + 1, 4, Fe, !1, 64, 16), s.vertexAttribPointer(dt + 2, 4, Fe, !1, 64, 32), s.vertexAttribPointer(dt + 3, 4, Fe, !1, 64, 48)
                                } else if (ot === "instanceColor") {
                                    const Nt = r.get(X.instanceColor);
                                    if (Nt === void 0) continue;
                                    const qt = Nt.buffer,
                                        Fe = Nt.type;
                                    l(dt, 1), s.bindBuffer(34962, qt), s.vertexAttribPointer(dt, 3, Fe, !1, 12, 0)
                                } else if (Re !== void 0) {
                                    const Nt = Re[ot];
                                    if (Nt !== void 0) switch (Nt.length) {
                                        case 2:
                                            s.vertexAttrib2fv(dt, Nt);
                                            break;
                                        case 3:
                                            s.vertexAttrib3fv(dt, Nt);
                                            break;
                                        case 4:
                                            s.vertexAttrib4fv(dt, Nt);
                                            break;
                                        default:
                                            s.vertexAttrib1fv(dt, Nt)
                                    }
                                }
                            }
                        }
                        d()
                    }(M, F, D, U), N !== null && s.bindBuffer(34963, r.get(N).buffer))
                },
                reset: x,
                resetDefaultState: A,
                dispose: function() {
                    x();
                    for (const M in E) {
                        const F = E[M];
                        for (const D in F) {
                            const U = F[D];
                            for (const N in U) k(U[N].object), delete U[N];
                            delete F[D]
                        }
                        delete E[M]
                    }
                },
                releaseStatesOfGeometry: function(M) {
                    if (E[M.id] === void 0) return;
                    const F = E[M.id];
                    for (const D in F) {
                        const U = F[D];
                        for (const N in U) k(U[N].object), delete U[N];
                        delete F[D]
                    }
                    delete E[M.id]
                },
                releaseStatesOfProgram: function(M) {
                    for (const F in E) {
                        const D = E[F];
                        if (D[M.id] === void 0) continue;
                        const U = D[M.id];
                        for (const N in U) k(U[N].object), delete U[N];
                        delete D[M.id]
                    }
                },
                initAttributes: t,
                enableAttribute: a,
                disableUnusedAttributes: d
            }
        }

        function Qu(s, e, r, h) {
            const c = h.isWebGL2;
            let v;
            this.setMode = function(w) {
                v = w
            }, this.render = function(w, E) {
                s.drawArrays(v, w, E), r.update(E, v, 1)
            }, this.renderInstances = function(w, E, T) {
                if (T === 0) return;
                let B, Q;
                if (c) B = s, Q = "drawArraysInstanced";
                else if (B = e.get("ANGLE_instanced_arrays"), Q = "drawArraysInstancedANGLE", B === null) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                B[Q](v, w, E, T), r.update(E, v, T)
            }
        }

        function Ph(s, e, r) {
            let h;

            function c(A) {
                if (A === "highp") {
                    if (s.getShaderPrecisionFormat(35633, 36338).precision > 0 && s.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                    A = "mediump"
                }
                return A === "mediump" && s.getShaderPrecisionFormat(35633, 36337).precision > 0 && s.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
            }
            const v = typeof WebGL2RenderingContext != "undefined" && s instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext != "undefined" && s instanceof WebGL2ComputeRenderingContext;
            let w = r.precision !== void 0 ? r.precision : "highp";
            const E = c(w);
            E !== w && (console.warn("THREE.WebGLRenderer:", w, "not supported, using", E, "instead."), w = E);
            const T = r.logarithmicDepthBuffer === !0,
                B = s.getParameter(34930),
                Q = s.getParameter(35660),
                k = s.getParameter(3379),
                i = s.getParameter(34076),
                t = s.getParameter(34921),
                a = s.getParameter(36347),
                l = s.getParameter(36348),
                d = s.getParameter(36349),
                g = Q > 0,
                x = v || e.has("OES_texture_float");
            return {
                isWebGL2: v,
                getMaxAnisotropy: function() {
                    if (h !== void 0) return h;
                    if (e.has("EXT_texture_filter_anisotropic") === !0) {
                        const A = e.get("EXT_texture_filter_anisotropic");
                        h = s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                    } else h = 0;
                    return h
                },
                getMaxPrecision: c,
                precision: w,
                logarithmicDepthBuffer: T,
                maxTextures: B,
                maxVertexTextures: Q,
                maxTextureSize: k,
                maxCubemapSize: i,
                maxAttributes: t,
                maxVertexUniforms: a,
                maxVaryings: l,
                maxFragmentUniforms: d,
                vertexTextures: g,
                floatFragmentTextures: x,
                floatVertexTextures: g && x,
                maxSamples: v ? s.getParameter(36183) : 0
            }
        }

        function Sr(s) {
            const e = this;
            let r = null,
                h = 0,
                c = !1,
                v = !1;
            const w = new Et,
                E = new Pt,
                T = {
                    value: null,
                    needsUpdate: !1
                };

            function B() {
                T.value !== r && (T.value = r, T.needsUpdate = h > 0), e.numPlanes = h, e.numIntersection = 0
            }

            function Q(k, i, t, a) {
                const l = k !== null ? k.length : 0;
                let d = null;
                if (l !== 0) {
                    if (d = T.value, a !== !0 || d === null) {
                        const g = t + 4 * l,
                            x = i.matrixWorldInverse;
                        E.getNormalMatrix(x), (d === null || d.length < g) && (d = new Float32Array(g));
                        for (let A = 0, M = t; A !== l; ++A, M += 4) w.copy(k[A]).applyMatrix4(x, E), w.normal.toArray(d, M), d[M + 3] = w.constant
                    }
                    T.value = d, T.needsUpdate = !0
                }
                return e.numPlanes = l, e.numIntersection = 0, d
            }
            this.uniform = T, this.numPlanes = 0, this.numIntersection = 0, this.init = function(k, i, t) {
                const a = k.length !== 0 || i || h !== 0 || c;
                return c = i, r = Q(k, t, 0), h = k.length, a
            }, this.beginShadows = function() {
                v = !0, Q(null)
            }, this.endShadows = function() {
                v = !1, B()
            }, this.setState = function(k, i, t) {
                const a = k.clippingPlanes,
                    l = k.clipIntersection,
                    d = k.clipShadows,
                    g = s.get(k);
                if (!c || a === null || a.length === 0 || v && !d) v ? Q(null) : B();
                else {
                    const x = v ? 0 : h,
                        A = 4 * x;
                    let M = g.clippingState || null;
                    T.value = M, M = Q(a, i, A, t);
                    for (let F = 0; F !== A; ++F) M[F] = r[F];
                    g.clippingState = M, this.numIntersection = l ? this.numPlanes : 0, this.numPlanes += x
                }
            }
        }

        function zs(s) {
            let e = new WeakMap;

            function r(c, v) {
                return v === 303 ? c.mapping = 301 : v === 304 && (c.mapping = 302), c
            }

            function h(c) {
                const v = c.target;
                v.removeEventListener("dispose", h);
                const w = e.get(v);
                w !== void 0 && (e.delete(v), w.dispose())
            }
            return {
                get: function(c) {
                    if (c && c.isTexture) {
                        const v = c.mapping;
                        if (v === 303 || v === 304) {
                            if (e.has(c)) return r(e.get(c).texture, c.mapping);
                            {
                                const w = c.image;
                                if (w && w.height > 0) {
                                    const E = s.getRenderTarget(),
                                        T = new so(w.height / 2);
                                    return T.fromEquirectangularTexture(s, c), e.set(c, T), s.setRenderTarget(E), c.addEventListener("dispose", h), r(T.texture, c.mapping)
                                }
                                return null
                            }
                        }
                    }
                    return c
                },
                dispose: function() {
                    e = new WeakMap
                }
            }
        }

        function Sa(s) {
            const e = {};

            function r(h) {
                if (e[h] !== void 0) return e[h];
                let c;
                switch (h) {
                    case "WEBGL_depth_texture":
                        c = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        c = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        c = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        c = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    default:
                        c = s.getExtension(h)
                }
                return e[h] = c, c
            }
            return {
                has: function(h) {
                    return r(h) !== null
                },
                init: function(h) {
                    h.isWebGL2 ? r("EXT_color_buffer_float") : (r("WEBGL_depth_texture"), r("OES_texture_float"), r("OES_texture_half_float"), r("OES_texture_half_float_linear"), r("OES_standard_derivatives"), r("OES_element_index_uint"), r("OES_vertex_array_object"), r("ANGLE_instanced_arrays")), r("OES_texture_float_linear"), r("EXT_color_buffer_half_float")
                },
                get: function(h) {
                    const c = r(h);
                    return c === null && console.warn("THREE.WebGLRenderer: " + h + " extension not supported."), c
                }
            }
        }

        function Dc(s, e, r, h) {
            const c = {},
                v = new WeakMap;

            function w(T) {
                const B = T.target;
                B.index !== null && e.remove(B.index);
                for (const k in B.attributes) e.remove(B.attributes[k]);
                B.removeEventListener("dispose", w), delete c[B.id];
                const Q = v.get(B);
                Q && (e.remove(Q), v.delete(B)), h.releaseStatesOfGeometry(B), B.isInstancedBufferGeometry === !0 && delete B._maxInstanceCount, r.memory.geometries--
            }

            function E(T) {
                const B = [],
                    Q = T.index,
                    k = T.attributes.position;
                let i = 0;
                if (Q !== null) {
                    const l = Q.array;
                    i = Q.version;
                    for (let d = 0, g = l.length; d < g; d += 3) {
                        const x = l[d + 0],
                            A = l[d + 1],
                            M = l[d + 2];
                        B.push(x, A, A, M, M, x)
                    }
                } else {
                    const l = k.array;
                    i = k.version;
                    for (let d = 0, g = l.length / 3 - 1; d < g; d += 3) {
                        const x = d + 0,
                            A = d + 1,
                            M = d + 2;
                        B.push(x, A, A, M, M, x)
                    }
                }
                const t = new(Ea(B) > 65535 ? Qr : Un)(B, 1);
                t.version = i;
                const a = v.get(T);
                a && e.remove(a), v.set(T, t)
            }
            return {
                get: function(T, B) {
                    return c[B.id] === !0 || (B.addEventListener("dispose", w), c[B.id] = !0, r.memory.geometries++), B
                },
                update: function(T) {
                    const B = T.attributes;
                    for (const k in B) e.update(B[k], 34962);
                    const Q = T.morphAttributes;
                    for (const k in Q) {
                        const i = Q[k];
                        for (let t = 0, a = i.length; t < a; t++) e.update(i[t], 34962)
                    }
                },
                getWireframeAttribute: function(T) {
                    const B = v.get(T);
                    if (B) {
                        const Q = T.index;
                        Q !== null && B.version < Q.version && E(T)
                    } else E(T);
                    return v.get(T)
                }
            }
        }

        function Jl(s, e, r, h) {
            const c = h.isWebGL2;
            let v, w, E;
            this.setMode = function(T) {
                v = T
            }, this.setIndex = function(T) {
                w = T.type, E = T.bytesPerElement
            }, this.render = function(T, B) {
                s.drawElements(v, B, w, T * E), r.update(B, v, 1)
            }, this.renderInstances = function(T, B, Q) {
                if (Q === 0) return;
                let k, i;
                if (c) k = s, i = "drawElementsInstanced";
                else if (k = e.get("ANGLE_instanced_arrays"), i = "drawElementsInstancedANGLE", k === null) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                k[i](v, B, w, T * E, Q), r.update(B, v, Q)
            }
        }

        function kh(s) {
            const e = {
                frame: 0,
                calls: 0,
                triangles: 0,
                points: 0,
                lines: 0
            };
            return {
                memory: {
                    geometries: 0,
                    textures: 0
                },
                render: e,
                programs: null,
                autoReset: !0,
                reset: function() {
                    e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
                },
                update: function(r, h, c) {
                    switch (e.calls++, h) {
                        case 4:
                            e.triangles += c * (r / 3);
                            break;
                        case 1:
                            e.lines += c * (r / 2);
                            break;
                        case 3:
                            e.lines += c * (r - 1);
                            break;
                        case 2:
                            e.lines += c * r;
                            break;
                        case 0:
                            e.points += c * r;
                            break;
                        default:
                            console.error("THREE.WebGLInfo: Unknown draw mode:", h)
                    }
                }
            }
        }

        function Ns(s, e) {
            return s[0] - e[0]
        }

        function Os(s, e) {
            return Math.abs(e[1]) - Math.abs(s[1])
        }

        function Qo(s) {
            const e = {},
                r = new Float32Array(8),
                h = [];
            for (let c = 0; c < 8; c++) h[c] = [c, 0];
            return {
                update: function(c, v, w, E) {
                    const T = c.morphTargetInfluences,
                        B = T === void 0 ? 0 : T.length;
                    let Q = e[v.id];
                    if (Q === void 0) {
                        Q = [];
                        for (let l = 0; l < B; l++) Q[l] = [l, 0];
                        e[v.id] = Q
                    }
                    for (let l = 0; l < B; l++) {
                        const d = Q[l];
                        d[0] = l, d[1] = T[l]
                    }
                    Q.sort(Os);
                    for (let l = 0; l < 8; l++) l < B && Q[l][1] ? (h[l][0] = Q[l][0], h[l][1] = Q[l][1]) : (h[l][0] = Number.MAX_SAFE_INTEGER, h[l][1] = 0);
                    h.sort(Ns);
                    const k = w.morphTargets && v.morphAttributes.position,
                        i = w.morphNormals && v.morphAttributes.normal;
                    let t = 0;
                    for (let l = 0; l < 8; l++) {
                        const d = h[l],
                            g = d[0],
                            x = d[1];
                        g !== Number.MAX_SAFE_INTEGER && x ? (k && v.getAttribute("morphTarget" + l) !== k[g] && v.setAttribute("morphTarget" + l, k[g]), i && v.getAttribute("morphNormal" + l) !== i[g] && v.setAttribute("morphNormal" + l, i[g]), r[l] = x, t += x) : (k && v.hasAttribute("morphTarget" + l) === !0 && v.deleteAttribute("morphTarget" + l), i && v.hasAttribute("morphNormal" + l) === !0 && v.deleteAttribute("morphNormal" + l), r[l] = 0)
                    }
                    const a = v.morphTargetsRelative ? 1 : 1 - t;
                    E.getUniforms().setValue(s, "morphTargetBaseInfluence", a), E.getUniforms().setValue(s, "morphTargetInfluences", r)
                }
            }
        }

        function Zl(s, e, r, h) {
            let c = new WeakMap;

            function v(w) {
                const E = w.target;
                E.removeEventListener("dispose", v), r.remove(E.instanceMatrix), E.instanceColor !== null && r.remove(E.instanceColor)
            }
            return {
                update: function(w) {
                    const E = h.render.frame,
                        T = w.geometry,
                        B = e.get(w, T);
                    return c.get(B) !== E && (e.update(B), c.set(B, E)), w.isInstancedMesh && (w.hasEventListener("dispose", v) === !1 && w.addEventListener("dispose", v), r.update(w.instanceMatrix, 34962), w.instanceColor !== null && r.update(w.instanceColor, 34962)), B
                },
                dispose: function() {
                    c = new WeakMap
                }
            }
        }
        Ga.physical = {
            uniforms: un([Ga.standard.uniforms, {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatNormalScale: {
                    value: new Ht(1, 1)
                },
                clearcoatNormalMap: {
                    value: null
                },
                sheen: {
                    value: new Rt(0)
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                }
            }]),
            vertexShader: An.meshphysical_vert,
            fragmentShader: An.meshphysical_frag
        };
        class fl extends cn {
            constructor(e = null, r = 1, h = 1, c = 1) {
                super(null), this.image = {
                    data: e,
                    width: r,
                    height: h,
                    depth: c
                }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
            }
        }
        fl.prototype.isDataTexture2DArray = !0;
        class ml extends cn {
            constructor(e = null, r = 1, h = 1, c = 1) {
                super(null), this.image = {
                    data: e,
                    width: r,
                    height: h,
                    depth: c
                }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
            }
        }
        ml.prototype.isDataTexture3D = !0;
        const Po = new cn,
            Dh = new fl,
            oo = new ml,
            Uc = new ao,
            Ic = [],
            zc = [],
            ko = new Float32Array(16),
            Do = new Float32Array(9),
            Aa = new Float32Array(4);

        function Ya(s, e, r) {
            const h = s[0];
            if (h <= 0 || h > 0) return s;
            const c = e * r;
            let v = Ic[c];
            if (v === void 0 && (v = new Float32Array(c), Ic[c] = v), e !== 0) {
                h.toArray(v, 0);
                for (let w = 1, E = 0; w !== e; ++w) E += r, s[w].toArray(v, E)
            }
            return v
        }

        function Vr(s, e) {
            if (s.length !== e.length) return !1;
            for (let r = 0, h = s.length; r < h; r++)
                if (s[r] !== e[r]) return !1;
            return !0
        }

        function ha(s, e) {
            for (let r = 0, h = e.length; r < h; r++) s[r] = e[r]
        }

        function Ha(s, e) {
            let r = zc[e];
            r === void 0 && (r = new Int32Array(e), zc[e] = r);
            for (let h = 0; h !== e; ++h) r[h] = s.allocateTextureUnit();
            return r
        }

        function Fa(s, e) {
            const r = this.cache;
            r[0] !== e && (s.uniform1f(this.addr, e), r[0] = e)
        }

        function Nc(s, e) {
            const r = this.cache;
            if (e.x !== void 0) r[0] === e.x && r[1] === e.y || (s.uniform2f(this.addr, e.x, e.y), r[0] = e.x, r[1] = e.y);
            else {
                if (Vr(r, e)) return;
                s.uniform2fv(this.addr, e), ha(r, e)
            }
        }

        function Wa(s, e) {
            const r = this.cache;
            if (e.x !== void 0) r[0] === e.x && r[1] === e.y && r[2] === e.z || (s.uniform3f(this.addr, e.x, e.y, e.z), r[0] = e.x, r[1] = e.y, r[2] = e.z);
            else if (e.r !== void 0) r[0] === e.r && r[1] === e.g && r[2] === e.b || (s.uniform3f(this.addr, e.r, e.g, e.b), r[0] = e.r, r[1] = e.g, r[2] = e.b);
            else {
                if (Vr(r, e)) return;
                s.uniform3fv(this.addr, e), ha(r, e)
            }
        }

        function gl(s, e) {
            const r = this.cache;
            if (e.x !== void 0) r[0] === e.x && r[1] === e.y && r[2] === e.z && r[3] === e.w || (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), r[0] = e.x, r[1] = e.y, r[2] = e.z, r[3] = e.w);
            else {
                if (Vr(r, e)) return;
                s.uniform4fv(this.addr, e), ha(r, e)
            }
        }

        function Oc(s, e) {
            const r = this.cache,
                h = e.elements;
            if (h === void 0) {
                if (Vr(r, e)) return;
                s.uniformMatrix2fv(this.addr, !1, e), ha(r, e)
            } else {
                if (Vr(r, h)) return;
                Aa.set(h), s.uniformMatrix2fv(this.addr, !1, Aa), ha(r, h)
            }
        }

        function Pu(s, e) {
            const r = this.cache,
                h = e.elements;
            if (h === void 0) {
                if (Vr(r, e)) return;
                s.uniformMatrix3fv(this.addr, !1, e), ha(r, e)
            } else {
                if (Vr(r, h)) return;
                Do.set(h), s.uniformMatrix3fv(this.addr, !1, Do), ha(r, h)
            }
        }

        function yl(s, e) {
            const r = this.cache,
                h = e.elements;
            if (h === void 0) {
                if (Vr(r, e)) return;
                s.uniformMatrix4fv(this.addr, !1, e), ha(r, e)
            } else {
                if (Vr(r, h)) return;
                ko.set(h), s.uniformMatrix4fv(this.addr, !1, ko), ha(r, h)
            }
        }

        function Uh(s, e) {
            const r = this.cache;
            r[0] !== e && (s.uniform1i(this.addr, e), r[0] = e)
        }

        function lo(s, e) {
            const r = this.cache;
            Vr(r, e) || (s.uniform2iv(this.addr, e), ha(r, e))
        }

        function Ss(s, e) {
            const r = this.cache;
            Vr(r, e) || (s.uniform3iv(this.addr, e), ha(r, e))
        }

        function Ii(s, e) {
            const r = this.cache;
            Vr(r, e) || (s.uniform4iv(this.addr, e), ha(r, e))
        }

        function Vc(s, e) {
            const r = this.cache;
            r[0] !== e && (s.uniform1ui(this.addr, e), r[0] = e)
        }

        function Uo(s, e) {
            const r = this.cache;
            Vr(r, e) || (s.uniform2uiv(this.addr, e), ha(r, e))
        }

        function vl(s, e) {
            const r = this.cache;
            Vr(r, e) || (s.uniform3uiv(this.addr, e), ha(r, e))
        }

        function Xl(s, e) {
            const r = this.cache;
            Vr(r, e) || (s.uniform4uiv(this.addr, e), ha(r, e))
        }

        function Ti(s, e, r) {
            const h = this.cache,
                c = r.allocateTextureUnit();
            h[0] !== c && (s.uniform1i(this.addr, c), h[0] = c), r.safeSetTexture2D(e || Po, c)
        }

        function jl(s, e, r) {
            const h = this.cache,
                c = r.allocateTextureUnit();
            h[0] !== c && (s.uniform1i(this.addr, c), h[0] = c), r.setTexture3D(e || oo, c)
        }

        function Ih(s, e, r) {
            const h = this.cache,
                c = r.allocateTextureUnit();
            h[0] !== c && (s.uniform1i(this.addr, c), h[0] = c), r.safeSetTextureCube(e || Uc, c)
        }

        function zh(s, e, r) {
            const h = this.cache,
                c = r.allocateTextureUnit();
            h[0] !== c && (s.uniform1i(this.addr, c), h[0] = c), r.setTexture2DArray(e || Dh, c)
        }

        function Yl(s, e) {
            s.uniform1fv(this.addr, e)
        }

        function ql(s, e) {
            const r = Ya(e, this.size, 2);
            s.uniform2fv(this.addr, r)
        }

        function Gc(s, e) {
            const r = Ya(e, this.size, 3);
            s.uniform3fv(this.addr, r)
        }

        function ku(s, e) {
            const r = Ya(e, this.size, 4);
            s.uniform4fv(this.addr, r)
        }

        function Nh(s, e) {
            const r = Ya(e, this.size, 4);
            s.uniformMatrix2fv(this.addr, !1, r)
        }

        function co(s, e) {
            const r = Ya(e, this.size, 9);
            s.uniformMatrix3fv(this.addr, !1, r)
        }

        function cr(s, e) {
            const r = Ya(e, this.size, 16);
            s.uniformMatrix4fv(this.addr, !1, r)
        }

        function _l(s, e) {
            s.uniform1iv(this.addr, e)
        }

        function $l(s, e) {
            s.uniform2iv(this.addr, e)
        }

        function Oh(s, e) {
            s.uniform3iv(this.addr, e)
        }

        function Vh(s, e) {
            s.uniform4iv(this.addr, e)
        }

        function Hc(s, e) {
            s.uniform1uiv(this.addr, e)
        }

        function Gh(s, e) {
            s.uniform2uiv(this.addr, e)
        }

        function qa(s, e) {
            s.uniform3uiv(this.addr, e)
        }

        function xl(s, e) {
            s.uniform4uiv(this.addr, e)
        }

        function Ji(s, e, r) {
            const h = e.length,
                c = Ha(r, h);
            s.uniform1iv(this.addr, c);
            for (let v = 0; v !== h; ++v) r.safeSetTexture2D(e[v] || Po, c[v])
        }

        function ln(s, e, r) {
            const h = e.length,
                c = Ha(r, h);
            s.uniform1iv(this.addr, c);
            for (let v = 0; v !== h; ++v) r.safeSetTextureCube(e[v] || Uc, c[v])
        }

        function Io(s, e, r) {
            this.id = s, this.addr = r, this.cache = [], this.setValue = function(h) {
                switch (h) {
                    case 5126:
                        return Fa;
                    case 35664:
                        return Nc;
                    case 35665:
                        return Wa;
                    case 35666:
                        return gl;
                    case 35674:
                        return Oc;
                    case 35675:
                        return Pu;
                    case 35676:
                        return yl;
                    case 5124:
                    case 35670:
                        return Uh;
                    case 35667:
                    case 35671:
                        return lo;
                    case 35668:
                    case 35672:
                        return Ss;
                    case 35669:
                    case 35673:
                        return Ii;
                    case 5125:
                        return Vc;
                    case 36294:
                        return Uo;
                    case 36295:
                        return vl;
                    case 36296:
                        return Xl;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Ti;
                    case 35679:
                    case 36299:
                    case 36307:
                        return jl;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Ih;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return zh
                }
            }(e.type)
        }

        function Kl(s, e, r) {
            this.id = s, this.addr = r, this.cache = [], this.size = e.size, this.setValue = function(h) {
                switch (h) {
                    case 5126:
                        return Yl;
                    case 35664:
                        return ql;
                    case 35665:
                        return Gc;
                    case 35666:
                        return ku;
                    case 35674:
                        return Nh;
                    case 35675:
                        return co;
                    case 35676:
                        return cr;
                    case 5124:
                    case 35670:
                        return _l;
                    case 35667:
                    case 35671:
                        return $l;
                    case 35668:
                    case 35672:
                        return Oh;
                    case 35669:
                    case 35673:
                        return Vh;
                    case 5125:
                        return Hc;
                    case 36294:
                        return Gh;
                    case 36295:
                        return qa;
                    case 36296:
                        return xl;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Ji;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return ln
                }
            }(e.type)
        }

        function ec(s) {
            this.id = s, this.seq = [], this.map = {}
        }
        Kl.prototype.updateCache = function(s) {
            const e = this.cache;
            s instanceof Float32Array && e.length !== s.length && (this.cache = new Float32Array(s.length)), ha(e, s)
        }, ec.prototype.setValue = function(s, e, r) {
            const h = this.seq;
            for (let c = 0, v = h.length; c !== v; ++c) {
                const w = h[c];
                w.setValue(s, e[w.id], r)
            }
        };
        const ua = /(\w+)(\])?(\[|\.)?/g;

        function tc(s, e) {
            s.seq.push(e), s.map[e.id] = e
        }

        function $a(s, e, r) {
            const h = s.name,
                c = h.length;
            for (ua.lastIndex = 0;;) {
                const v = ua.exec(h),
                    w = ua.lastIndex;
                let E = v[1];
                const T = v[2] === "]",
                    B = v[3];
                if (T && (E |= 0), B === void 0 || B === "[" && w + 2 === c) {
                    tc(r, B === void 0 ? new Io(E, s, e) : new Kl(E, s, e));
                    break
                } {
                    let Q = r.map[E];
                    Q === void 0 && (Q = new ec(E), tc(r, Q)), r = Q
                }
            }
        }

        function Vs(s, e) {
            this.seq = [], this.map = {};
            const r = s.getProgramParameter(e, 35718);
            for (let h = 0; h < r; ++h) {
                const c = s.getActiveUniform(e, h);
                $a(c, s.getUniformLocation(e, c.name), this)
            }
        }

        function zo(s, e, r) {
            const h = s.createShader(e);
            return s.shaderSource(h, r), s.compileShader(h), h
        }
        Vs.prototype.setValue = function(s, e, r, h) {
            const c = this.map[e];
            c !== void 0 && c.setValue(s, r, h)
        }, Vs.prototype.setOptional = function(s, e, r) {
            const h = e[r];
            h !== void 0 && this.setValue(s, r, h)
        }, Vs.upload = function(s, e, r, h) {
            for (let c = 0, v = e.length; c !== v; ++c) {
                const w = e[c],
                    E = r[w.id];
                E.needsUpdate !== !1 && w.setValue(s, E.value, h)
            }
        }, Vs.seqWithValue = function(s, e) {
            const r = [];
            for (let h = 0, c = s.length; h !== c; ++h) {
                const v = s[h];
                v.id in e && r.push(v)
            }
            return r
        };
        let Ar = 0;

        function kr(s) {
            switch (s) {
                case 3e3:
                    return ["Linear", "( value )"];
                case 3001:
                    return ["sRGB", "( value )"];
                case 3002:
                    return ["RGBE", "( value )"];
                case 3004:
                    return ["RGBM", "( value, 7.0 )"];
                case 3005:
                    return ["RGBM", "( value, 16.0 )"];
                case 3006:
                    return ["RGBD", "( value, 256.0 )"];
                case 3007:
                    return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                case 3003:
                    return ["LogLuv", "( value )"];
                default:
                    return console.warn("THREE.WebGLProgram: Unsupported encoding:", s), ["Linear", "( value )"]
            }
        }

        function Wc(s, e, r) {
            const h = s.getShaderParameter(e, 35713),
                c = s.getShaderInfoLog(e).trim();
            return h && c === "" ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + r + `
` + c + function(v) {
                const w = v.split(`
`);
                for (let E = 0; E < w.length; E++) w[E] = E + 1 + ": " + w[E];
                return w.join(`
`)
            }(s.getShaderSource(e))
        }

        function La(s, e) {
            const r = kr(e);
            return "vec4 " + s + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }"
        }

        function ic(s, e) {
            const r = kr(e);
            return "vec4 " + s + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }"
        }

        function Jc(s, e) {
            let r;
            switch (e) {
                case 1:
                    r = "Linear";
                    break;
                case 2:
                    r = "Reinhard";
                    break;
                case 3:
                    r = "OptimizedCineon";
                    break;
                case 4:
                    r = "ACESFilmic";
                    break;
                case 5:
                    r = "Custom";
                    break;
                default:
                    console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), r = "Linear"
            }
            return "vec3 " + s + "( vec3 color ) { return " + r + "ToneMapping( color ); }"
        }

        function ho(s) {
            return s !== ""
        }

        function nc(s, e) {
            return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
        }

        function uo(s, e) {
            return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
        }
        const Zc = /^[ \t]*#include +<([\w\d./]+)>/gm;

        function bl(s) {
            return s.replace(Zc, As)
        }

        function As(s, e) {
            const r = An[e];
            if (r === void 0) throw new Error("Can not resolve #include <" + e + ">");
            return bl(r)
        }
        const rc = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
            wl = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

        function El(s) {
            return s.replace(wl, ac).replace(rc, Sl)
        }

        function Sl(s, e, r, h) {
            return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), ac(s, e, r, h)
        }

        function ac(s, e, r, h) {
            let c = "";
            for (let v = parseInt(e); v < parseInt(r); v++) c += h.replace(/\[\s*i\s*\]/g, "[ " + v + " ]").replace(/UNROLLED_LOOP_INDEX/g, v);
            return c
        }

        function Gs(s) {
            let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;";
            return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
        }

        function po(s, e, r, h) {
            const c = s.getContext(),
                v = r.defines;
            let w = r.vertexShader,
                E = r.fragmentShader;
            const T = function(N) {
                    let H = "SHADOWMAP_TYPE_BASIC";
                    return N.shadowMapType === 1 ? H = "SHADOWMAP_TYPE_PCF" : N.shadowMapType === 2 ? H = "SHADOWMAP_TYPE_PCF_SOFT" : N.shadowMapType === 3 && (H = "SHADOWMAP_TYPE_VSM"), H
                }(r),
                B = function(N) {
                    let H = "ENVMAP_TYPE_CUBE";
                    if (N.envMap) switch (N.envMapMode) {
                        case 301:
                        case 302:
                            H = "ENVMAP_TYPE_CUBE";
                            break;
                        case 306:
                        case 307:
                            H = "ENVMAP_TYPE_CUBE_UV"
                    }
                    return H
                }(r),
                Q = function(N) {
                    let H = "ENVMAP_MODE_REFLECTION";
                    if (N.envMap) switch (N.envMapMode) {
                        case 302:
                        case 307:
                            H = "ENVMAP_MODE_REFRACTION"
                    }
                    return H
                }(r),
                k = function(N) {
                    let H = "ENVMAP_BLENDING_NONE";
                    if (N.envMap) switch (N.combine) {
                        case 0:
                            H = "ENVMAP_BLENDING_MULTIPLY";
                            break;
                        case 1:
                            H = "ENVMAP_BLENDING_MIX";
                            break;
                        case 2:
                            H = "ENVMAP_BLENDING_ADD"
                    }
                    return H
                }(r),
                i = s.gammaFactor > 0 ? s.gammaFactor : 1,
                t = r.isWebGL2 ? "" : function(N) {
                    return [N.extensionDerivatives || N.envMapCubeUV || N.bumpMap || N.tangentSpaceNormalMap || N.clearcoatNormalMap || N.flatShading || N.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (N.extensionFragDepth || N.logarithmicDepthBuffer) && N.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", N.extensionDrawBuffers && N.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (N.extensionShaderTextureLOD || N.envMap) && N.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ho).join(`
`)
                }(r),
                a = function(N) {
                    const H = [];
                    for (const X in N) {
                        const ne = N[X];
                        ne !== !1 && H.push("#define " + X + " " + ne)
                    }
                    return H.join(`
`)
                }(v),
                l = c.createProgram();
            let d, g, x = r.glslVersion ? "#version " + r.glslVersion + `
` : "";
            r.isRawShaderMaterial ? (d = [a].filter(ho).join(`
`), d.length > 0 && (d += `
`), g = [t, a].filter(ho).join(`
`), g.length > 0 && (g += `
`)) : (d = [Gs(r), "#define SHADER_NAME " + r.shaderName, a, r.instancing ? "#define USE_INSTANCING" : "", r.instancingColor ? "#define USE_INSTANCING_COLOR" : "", r.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + i, "#define MAX_BONES " + r.maxBones, r.useFog && r.fog ? "#define USE_FOG" : "", r.useFog && r.fogExp2 ? "#define FOG_EXP2" : "", r.map ? "#define USE_MAP" : "", r.envMap ? "#define USE_ENVMAP" : "", r.envMap ? "#define " + Q : "", r.lightMap ? "#define USE_LIGHTMAP" : "", r.aoMap ? "#define USE_AOMAP" : "", r.emissiveMap ? "#define USE_EMISSIVEMAP" : "", r.bumpMap ? "#define USE_BUMPMAP" : "", r.normalMap ? "#define USE_NORMALMAP" : "", r.normalMap && r.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", r.normalMap && r.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", r.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", r.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", r.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", r.displacementMap && r.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", r.specularMap ? "#define USE_SPECULARMAP" : "", r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", r.metalnessMap ? "#define USE_METALNESSMAP" : "", r.alphaMap ? "#define USE_ALPHAMAP" : "", r.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", r.vertexTangents ? "#define USE_TANGENT" : "", r.vertexColors ? "#define USE_COLOR" : "", r.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", r.vertexUvs ? "#define USE_UV" : "", r.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", r.flatShading ? "#define FLAT_SHADED" : "", r.skinning ? "#define USE_SKINNING" : "", r.useVertexTexture ? "#define BONE_TEXTURE" : "", r.morphTargets ? "#define USE_MORPHTARGETS" : "", r.morphNormals && r.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", r.doubleSided ? "#define DOUBLE_SIDED" : "", r.flipSided ? "#define FLIP_SIDED" : "", r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", r.shadowMapEnabled ? "#define " + T : "", r.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", r.logarithmicDepthBuffer && r.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ho).join(`
`), g = [t, Gs(r), "#define SHADER_NAME " + r.shaderName, a, r.alphaTest ? "#define ALPHATEST " + r.alphaTest + (r.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + i, r.useFog && r.fog ? "#define USE_FOG" : "", r.useFog && r.fogExp2 ? "#define FOG_EXP2" : "", r.map ? "#define USE_MAP" : "", r.matcap ? "#define USE_MATCAP" : "", r.envMap ? "#define USE_ENVMAP" : "", r.envMap ? "#define " + B : "", r.envMap ? "#define " + Q : "", r.envMap ? "#define " + k : "", r.lightMap ? "#define USE_LIGHTMAP" : "", r.aoMap ? "#define USE_AOMAP" : "", r.emissiveMap ? "#define USE_EMISSIVEMAP" : "", r.bumpMap ? "#define USE_BUMPMAP" : "", r.normalMap ? "#define USE_NORMALMAP" : "", r.normalMap && r.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", r.normalMap && r.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", r.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", r.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", r.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", r.specularMap ? "#define USE_SPECULARMAP" : "", r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", r.metalnessMap ? "#define USE_METALNESSMAP" : "", r.alphaMap ? "#define USE_ALPHAMAP" : "", r.sheen ? "#define USE_SHEEN" : "", r.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", r.vertexTangents ? "#define USE_TANGENT" : "", r.vertexColors || r.instancingColor ? "#define USE_COLOR" : "", r.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", r.vertexUvs ? "#define USE_UV" : "", r.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", r.gradientMap ? "#define USE_GRADIENTMAP" : "", r.flatShading ? "#define FLAT_SHADED" : "", r.doubleSided ? "#define DOUBLE_SIDED" : "", r.flipSided ? "#define FLIP_SIDED" : "", r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", r.shadowMapEnabled ? "#define " + T : "", r.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", r.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", r.logarithmicDepthBuffer && r.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (r.extensionShaderTextureLOD || r.envMap) && r.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", r.toneMapping !== 0 ? "#define TONE_MAPPING" : "", r.toneMapping !== 0 ? An.tonemapping_pars_fragment : "", r.toneMapping !== 0 ? Jc("toneMapping", r.toneMapping) : "", r.dithering ? "#define DITHERING" : "", An.encodings_pars_fragment, r.map ? La("mapTexelToLinear", r.mapEncoding) : "", r.matcap ? La("matcapTexelToLinear", r.matcapEncoding) : "", r.envMap ? La("envMapTexelToLinear", r.envMapEncoding) : "", r.emissiveMap ? La("emissiveMapTexelToLinear", r.emissiveMapEncoding) : "", r.lightMap ? La("lightMapTexelToLinear", r.lightMapEncoding) : "", ic("linearToOutputTexel", r.outputEncoding), r.depthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "", `
`].filter(ho).join(`
`)), w = bl(w), w = nc(w, r), w = uo(w, r), E = bl(E), E = nc(E, r), E = uo(E, r), w = El(w), E = El(E), r.isWebGL2 && r.isRawShaderMaterial !== !0 && (x = `#version 300 es
`, d = ["#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + d, g = ["#define varying in", r.glslVersion === sn ? "" : "out highp vec4 pc_fragColor;", r.glslVersion === sn ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + g);
            const A = x + g + E,
                M = zo(c, 35633, x + d + w),
                F = zo(c, 35632, A);
            if (c.attachShader(l, M), c.attachShader(l, F), r.index0AttributeName !== void 0 ? c.bindAttribLocation(l, 0, r.index0AttributeName) : r.morphTargets === !0 && c.bindAttribLocation(l, 0, "position"), c.linkProgram(l), s.debug.checkShaderErrors) {
                const N = c.getProgramInfoLog(l).trim(),
                    H = c.getShaderInfoLog(M).trim(),
                    X = c.getShaderInfoLog(F).trim();
                let ne = !0,
                    le = !0;
                if (c.getProgramParameter(l, 35714) === !1) {
                    ne = !1;
                    const ce = Wc(c, M, "vertex"),
                        Qe = Wc(c, F, "fragment");
                    console.error("THREE.WebGLProgram: shader error: ", c.getError(), "35715", c.getProgramParameter(l, 35715), "gl.getProgramInfoLog", N, ce, Qe)
                } else N !== "" ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", N) : H !== "" && X !== "" || (le = !1);
                le && (this.diagnostics = {
                    runnable: ne,
                    programLog: N,
                    vertexShader: {
                        log: H,
                        prefix: d
                    },
                    fragmentShader: {
                        log: X,
                        prefix: g
                    }
                })
            }
            let D, U;
            return c.deleteShader(M), c.deleteShader(F), this.getUniforms = function() {
                return D === void 0 && (D = new Vs(c, l)), D
            }, this.getAttributes = function() {
                return U === void 0 && (U = function(N, H) {
                    const X = {},
                        ne = N.getProgramParameter(H, 35721);
                    for (let le = 0; le < ne; le++) {
                        const ce = N.getActiveAttrib(H, le).name;
                        X[ce] = N.getAttribLocation(H, ce)
                    }
                    return X
                }(c, l)), U
            }, this.destroy = function() {
                h.releaseStatesOfProgram(this), c.deleteProgram(l), this.program = void 0
            }, this.name = r.shaderName, this.id = Ar++, this.cacheKey = e, this.usedTimes = 1, this.program = l, this.vertexShader = M, this.fragmentShader = F, this
        }

        function Xc(s, e, r, h, c, v) {
            const w = [],
                E = h.isWebGL2,
                T = h.logarithmicDepthBuffer,
                B = h.floatVertexTextures,
                Q = h.maxVertexUniforms,
                k = h.vertexTextures;
            let i = h.precision;
            const t = {
                    MeshDepthMaterial: "depth",
                    MeshDistanceMaterial: "distanceRGBA",
                    MeshNormalMaterial: "normal",
                    MeshBasicMaterial: "basic",
                    MeshLambertMaterial: "lambert",
                    MeshPhongMaterial: "phong",
                    MeshToonMaterial: "toon",
                    MeshStandardMaterial: "physical",
                    MeshPhysicalMaterial: "physical",
                    MeshMatcapMaterial: "matcap",
                    LineBasicMaterial: "basic",
                    LineDashedMaterial: "dashed",
                    PointsMaterial: "points",
                    ShadowMaterial: "shadow",
                    SpriteMaterial: "sprite"
                },
                a = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];

            function l(d) {
                let g;
                return d && d.isTexture ? g = d.encoding : d && d.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), g = d.texture.encoding) : g = 3e3, g
            }
            return {
                getParameters: function(d, g, x, A, M) {
                    const F = A.fog,
                        D = d.isMeshStandardMaterial ? A.environment : null,
                        U = e.get(d.envMap || D),
                        N = t[d.type],
                        H = M.isSkinnedMesh ? function(ce) {
                            const Qe = ce.skeleton.bones;
                            if (B) return 1024;
                            {
                                const Se = Q,
                                    Re = Math.floor((Se - 20) / 4),
                                    ot = Math.min(Re, Qe.length);
                                return ot < Qe.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + Qe.length + " bones. This GPU supports " + ot + "."), 0) : ot
                            }
                        }(M) : 0;
                    let X, ne;
                    if (d.precision !== null && (i = h.getMaxPrecision(d.precision), i !== d.precision && console.warn("THREE.WebGLProgram.getParameters:", d.precision, "not supported, using", i, "instead.")), N) {
                        const ce = Ga[N];
                        X = ce.vertexShader, ne = ce.fragmentShader
                    } else X = d.vertexShader, ne = d.fragmentShader;
                    const le = s.getRenderTarget();
                    return {
                        isWebGL2: E,
                        shaderID: N,
                        shaderName: d.type,
                        vertexShader: X,
                        fragmentShader: ne,
                        defines: d.defines,
                        isRawShaderMaterial: d.isRawShaderMaterial === !0,
                        glslVersion: d.glslVersion,
                        precision: i,
                        instancing: M.isInstancedMesh === !0,
                        instancingColor: M.isInstancedMesh === !0 && M.instanceColor !== null,
                        supportsVertexTextures: k,
                        outputEncoding: le !== null ? l(le.texture) : s.outputEncoding,
                        map: !!d.map,
                        mapEncoding: l(d.map),
                        matcap: !!d.matcap,
                        matcapEncoding: l(d.matcap),
                        envMap: !!U,
                        envMapMode: U && U.mapping,
                        envMapEncoding: l(U),
                        envMapCubeUV: !!U && (U.mapping === 306 || U.mapping === 307),
                        lightMap: !!d.lightMap,
                        lightMapEncoding: l(d.lightMap),
                        aoMap: !!d.aoMap,
                        emissiveMap: !!d.emissiveMap,
                        emissiveMapEncoding: l(d.emissiveMap),
                        bumpMap: !!d.bumpMap,
                        normalMap: !!d.normalMap,
                        objectSpaceNormalMap: d.normalMapType === 1,
                        tangentSpaceNormalMap: d.normalMapType === 0,
                        clearcoatMap: !!d.clearcoatMap,
                        clearcoatRoughnessMap: !!d.clearcoatRoughnessMap,
                        clearcoatNormalMap: !!d.clearcoatNormalMap,
                        displacementMap: !!d.displacementMap,
                        roughnessMap: !!d.roughnessMap,
                        metalnessMap: !!d.metalnessMap,
                        specularMap: !!d.specularMap,
                        alphaMap: !!d.alphaMap,
                        gradientMap: !!d.gradientMap,
                        sheen: !!d.sheen,
                        transmissionMap: !!d.transmissionMap,
                        combine: d.combine,
                        vertexTangents: d.normalMap && d.vertexTangents,
                        vertexColors: d.vertexColors,
                        vertexAlphas: d.vertexColors === !0 && M.geometry.attributes.color && M.geometry.attributes.color.itemSize === 4,
                        vertexUvs: !!(d.map || d.bumpMap || d.normalMap || d.specularMap || d.alphaMap || d.emissiveMap || d.roughnessMap || d.metalnessMap || d.clearcoatMap || d.clearcoatRoughnessMap || d.clearcoatNormalMap || d.displacementMap || d.transmissionMap),
                        uvsVertexOnly: !(d.map || d.bumpMap || d.normalMap || d.specularMap || d.alphaMap || d.emissiveMap || d.roughnessMap || d.metalnessMap || d.clearcoatNormalMap || d.transmissionMap || !d.displacementMap),
                        fog: !!F,
                        useFog: d.fog,
                        fogExp2: F && F.isFogExp2,
                        flatShading: !!d.flatShading,
                        sizeAttenuation: d.sizeAttenuation,
                        logarithmicDepthBuffer: T,
                        skinning: d.skinning && H > 0,
                        maxBones: H,
                        useVertexTexture: B,
                        morphTargets: d.morphTargets,
                        morphNormals: d.morphNormals,
                        numDirLights: g.directional.length,
                        numPointLights: g.point.length,
                        numSpotLights: g.spot.length,
                        numRectAreaLights: g.rectArea.length,
                        numHemiLights: g.hemi.length,
                        numDirLightShadows: g.directionalShadowMap.length,
                        numPointLightShadows: g.pointShadowMap.length,
                        numSpotLightShadows: g.spotShadowMap.length,
                        numClippingPlanes: v.numPlanes,
                        numClipIntersection: v.numIntersection,
                        dithering: d.dithering,
                        shadowMapEnabled: s.shadowMap.enabled && x.length > 0,
                        shadowMapType: s.shadowMap.type,
                        toneMapping: d.toneMapped ? s.toneMapping : 0,
                        physicallyCorrectLights: s.physicallyCorrectLights,
                        premultipliedAlpha: d.premultipliedAlpha,
                        alphaTest: d.alphaTest,
                        doubleSided: d.side === 2,
                        flipSided: d.side === 1,
                        depthPacking: d.depthPacking !== void 0 && d.depthPacking,
                        index0AttributeName: d.index0AttributeName,
                        extensionDerivatives: d.extensions && d.extensions.derivatives,
                        extensionFragDepth: d.extensions && d.extensions.fragDepth,
                        extensionDrawBuffers: d.extensions && d.extensions.drawBuffers,
                        extensionShaderTextureLOD: d.extensions && d.extensions.shaderTextureLOD,
                        rendererExtensionFragDepth: E || r.has("EXT_frag_depth"),
                        rendererExtensionDrawBuffers: E || r.has("WEBGL_draw_buffers"),
                        rendererExtensionShaderTextureLod: E || r.has("EXT_shader_texture_lod"),
                        customProgramCacheKey: d.customProgramCacheKey()
                    }
                },
                getProgramCacheKey: function(d) {
                    const g = [];
                    if (d.shaderID ? g.push(d.shaderID) : (g.push(d.fragmentShader), g.push(d.vertexShader)), d.defines !== void 0)
                        for (const x in d.defines) g.push(x), g.push(d.defines[x]);
                    if (d.isRawShaderMaterial === !1) {
                        for (let x = 0; x < a.length; x++) g.push(d[a[x]]);
                        g.push(s.outputEncoding), g.push(s.gammaFactor)
                    }
                    return g.push(d.customProgramCacheKey), g.join()
                },
                getUniforms: function(d) {
                    const g = t[d.type];
                    let x;
                    if (g) {
                        const A = Ga[g];
                        x = Gl.clone(A.uniforms)
                    } else x = d.uniforms;
                    return x
                },
                acquireProgram: function(d, g) {
                    let x;
                    for (let A = 0, M = w.length; A < M; A++) {
                        const F = w[A];
                        if (F.cacheKey === g) {
                            x = F, ++x.usedTimes;
                            break
                        }
                    }
                    return x === void 0 && (x = new po(s, g, d, c), w.push(x)), x
                },
                releaseProgram: function(d) {
                    if (--d.usedTimes == 0) {
                        const g = w.indexOf(d);
                        w[g] = w[w.length - 1], w.pop(), d.destroy()
                    }
                },
                programs: w
            }
        }

        function Al() {
            let s = new WeakMap;
            return {
                get: function(e) {
                    let r = s.get(e);
                    return r === void 0 && (r = {}, s.set(e, r)), r
                },
                remove: function(e) {
                    s.delete(e)
                },
                update: function(e, r, h) {
                    s.get(e)[r] = h
                },
                dispose: function() {
                    s = new WeakMap
                }
            }
        }

        function fo(s, e) {
            return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.program !== e.program ? s.program.id - e.program.id : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id
        }

        function jc(s, e) {
            return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id
        }

        function sc(s) {
            const e = [];
            let r = 0;
            const h = [],
                c = [],
                v = {
                    id: -1
                };

            function w(E, T, B, Q, k, i) {
                let t = e[r];
                const a = s.get(B);
                return t === void 0 ? (t = {
                    id: E.id,
                    object: E,
                    geometry: T,
                    material: B,
                    program: a.program || v,
                    groupOrder: Q,
                    renderOrder: E.renderOrder,
                    z: k,
                    group: i
                }, e[r] = t) : (t.id = E.id, t.object = E, t.geometry = T, t.material = B, t.program = a.program || v, t.groupOrder = Q, t.renderOrder = E.renderOrder, t.z = k, t.group = i), r++, t
            }
            return {
                opaque: h,
                transparent: c,
                init: function() {
                    r = 0, h.length = 0, c.length = 0
                },
                push: function(E, T, B, Q, k, i) {
                    const t = w(E, T, B, Q, k, i);
                    (B.transparent === !0 ? c : h).push(t)
                },
                unshift: function(E, T, B, Q, k, i) {
                    const t = w(E, T, B, Q, k, i);
                    (B.transparent === !0 ? c : h).unshift(t)
                },
                finish: function() {
                    for (let E = r, T = e.length; E < T; E++) {
                        const B = e[E];
                        if (B.id === null) break;
                        B.id = null, B.object = null, B.geometry = null, B.material = null, B.program = null, B.group = null
                    }
                },
                sort: function(E, T) {
                    h.length > 1 && h.sort(E || fo), c.length > 1 && c.sort(T || jc)
                }
            }
        }

        function oc(s) {
            let e = new WeakMap;
            return {
                get: function(r, h) {
                    let c;
                    return e.has(r) === !1 ? (c = new sc(s), e.set(r, [c])) : h >= e.get(r).length ? (c = new sc(s), e.get(r).push(c)) : c = e.get(r)[h], c
                },
                dispose: function() {
                    e = new WeakMap
                }
            }
        }

        function Yc() {
            const s = {};
            return {
                get: function(e) {
                    if (s[e.id] !== void 0) return s[e.id];
                    let r;
                    switch (e.type) {
                        case "DirectionalLight":
                            r = {
                                direction: new ge,
                                color: new Rt
                            };
                            break;
                        case "SpotLight":
                            r = {
                                position: new ge,
                                direction: new ge,
                                color: new Rt,
                                distance: 0,
                                coneCos: 0,
                                penumbraCos: 0,
                                decay: 0
                            };
                            break;
                        case "PointLight":
                            r = {
                                position: new ge,
                                color: new Rt,
                                distance: 0,
                                decay: 0
                            };
                            break;
                        case "HemisphereLight":
                            r = {
                                direction: new ge,
                                skyColor: new Rt,
                                groundColor: new Rt
                            };
                            break;
                        case "RectAreaLight":
                            r = {
                                color: new Rt,
                                position: new ge,
                                halfWidth: new ge,
                                halfHeight: new ge
                            }
                    }
                    return s[e.id] = r, r
                }
            }
        }
        let b = 0;

        function n(s, e) {
            return (e.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0)
        }

        function u(s, e) {
            const r = new Yc,
                h = function() {
                    const T = {};
                    return {
                        get: function(B) {
                            if (T[B.id] !== void 0) return T[B.id];
                            let Q;
                            switch (B.type) {
                                case "DirectionalLight":
                                case "SpotLight":
                                    Q = {
                                        shadowBias: 0,
                                        shadowNormalBias: 0,
                                        shadowRadius: 1,
                                        shadowMapSize: new Ht
                                    };
                                    break;
                                case "PointLight":
                                    Q = {
                                        shadowBias: 0,
                                        shadowNormalBias: 0,
                                        shadowRadius: 1,
                                        shadowMapSize: new Ht,
                                        shadowCameraNear: 1,
                                        shadowCameraFar: 1e3
                                    }
                            }
                            return T[B.id] = Q, Q
                        }
                    }
                }(),
                c = {
                    version: 0,
                    hash: {
                        directionalLength: -1,
                        pointLength: -1,
                        spotLength: -1,
                        rectAreaLength: -1,
                        hemiLength: -1,
                        numDirectionalShadows: -1,
                        numPointShadows: -1,
                        numSpotShadows: -1
                    },
                    ambient: [0, 0, 0],
                    probe: [],
                    directional: [],
                    directionalShadow: [],
                    directionalShadowMap: [],
                    directionalShadowMatrix: [],
                    spot: [],
                    spotShadow: [],
                    spotShadowMap: [],
                    spotShadowMatrix: [],
                    rectArea: [],
                    rectAreaLTC1: null,
                    rectAreaLTC2: null,
                    point: [],
                    pointShadow: [],
                    pointShadowMap: [],
                    pointShadowMatrix: [],
                    hemi: []
                };
            for (let T = 0; T < 9; T++) c.probe.push(new ge);
            const v = new ge,
                w = new Ui,
                E = new Ui;
            return {
                setup: function(T) {
                    let B = 0,
                        Q = 0,
                        k = 0;
                    for (let F = 0; F < 9; F++) c.probe[F].set(0, 0, 0);
                    let i = 0,
                        t = 0,
                        a = 0,
                        l = 0,
                        d = 0,
                        g = 0,
                        x = 0,
                        A = 0;
                    T.sort(n);
                    for (let F = 0, D = T.length; F < D; F++) {
                        const U = T[F],
                            N = U.color,
                            H = U.intensity,
                            X = U.distance,
                            ne = U.shadow && U.shadow.map ? U.shadow.map.texture : null;
                        if (U.isAmbientLight) B += N.r * H, Q += N.g * H, k += N.b * H;
                        else if (U.isLightProbe)
                            for (let le = 0; le < 9; le++) c.probe[le].addScaledVector(U.sh.coefficients[le], H);
                        else if (U.isDirectionalLight) {
                            const le = r.get(U);
                            if (le.color.copy(U.color).multiplyScalar(U.intensity), U.castShadow) {
                                const ce = U.shadow,
                                    Qe = h.get(U);
                                Qe.shadowBias = ce.bias, Qe.shadowNormalBias = ce.normalBias, Qe.shadowRadius = ce.radius, Qe.shadowMapSize = ce.mapSize, c.directionalShadow[i] = Qe, c.directionalShadowMap[i] = ne, c.directionalShadowMatrix[i] = U.shadow.matrix, g++
                            }
                            c.directional[i] = le, i++
                        } else if (U.isSpotLight) {
                            const le = r.get(U);
                            if (le.position.setFromMatrixPosition(U.matrixWorld), le.color.copy(N).multiplyScalar(H), le.distance = X, le.coneCos = Math.cos(U.angle), le.penumbraCos = Math.cos(U.angle * (1 - U.penumbra)), le.decay = U.decay, U.castShadow) {
                                const ce = U.shadow,
                                    Qe = h.get(U);
                                Qe.shadowBias = ce.bias, Qe.shadowNormalBias = ce.normalBias, Qe.shadowRadius = ce.radius, Qe.shadowMapSize = ce.mapSize, c.spotShadow[a] = Qe, c.spotShadowMap[a] = ne, c.spotShadowMatrix[a] = U.shadow.matrix, A++
                            }
                            c.spot[a] = le, a++
                        } else if (U.isRectAreaLight) {
                            const le = r.get(U);
                            le.color.copy(N).multiplyScalar(H), le.halfWidth.set(.5 * U.width, 0, 0), le.halfHeight.set(0, .5 * U.height, 0), c.rectArea[l] = le, l++
                        } else if (U.isPointLight) {
                            const le = r.get(U);
                            if (le.color.copy(U.color).multiplyScalar(U.intensity), le.distance = U.distance, le.decay = U.decay, U.castShadow) {
                                const ce = U.shadow,
                                    Qe = h.get(U);
                                Qe.shadowBias = ce.bias, Qe.shadowNormalBias = ce.normalBias, Qe.shadowRadius = ce.radius, Qe.shadowMapSize = ce.mapSize, Qe.shadowCameraNear = ce.camera.near, Qe.shadowCameraFar = ce.camera.far, c.pointShadow[t] = Qe, c.pointShadowMap[t] = ne, c.pointShadowMatrix[t] = U.shadow.matrix, x++
                            }
                            c.point[t] = le, t++
                        } else if (U.isHemisphereLight) {
                            const le = r.get(U);
                            le.skyColor.copy(U.color).multiplyScalar(H), le.groundColor.copy(U.groundColor).multiplyScalar(H), c.hemi[d] = le, d++
                        }
                    }
                    l > 0 && (e.isWebGL2 || s.has("OES_texture_float_linear") === !0 ? (c.rectAreaLTC1 = Oi.LTC_FLOAT_1, c.rectAreaLTC2 = Oi.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (c.rectAreaLTC1 = Oi.LTC_HALF_1, c.rectAreaLTC2 = Oi.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), c.ambient[0] = B, c.ambient[1] = Q, c.ambient[2] = k;
                    const M = c.hash;
                    M.directionalLength === i && M.pointLength === t && M.spotLength === a && M.rectAreaLength === l && M.hemiLength === d && M.numDirectionalShadows === g && M.numPointShadows === x && M.numSpotShadows === A || (c.directional.length = i, c.spot.length = a, c.rectArea.length = l, c.point.length = t, c.hemi.length = d, c.directionalShadow.length = g, c.directionalShadowMap.length = g, c.pointShadow.length = x, c.pointShadowMap.length = x, c.spotShadow.length = A, c.spotShadowMap.length = A, c.directionalShadowMatrix.length = g, c.pointShadowMatrix.length = x, c.spotShadowMatrix.length = A, M.directionalLength = i, M.pointLength = t, M.spotLength = a, M.rectAreaLength = l, M.hemiLength = d, M.numDirectionalShadows = g, M.numPointShadows = x, M.numSpotShadows = A, c.version = b++)
                },
                setupView: function(T, B) {
                    let Q = 0,
                        k = 0,
                        i = 0,
                        t = 0,
                        a = 0;
                    const l = B.matrixWorldInverse;
                    for (let d = 0, g = T.length; d < g; d++) {
                        const x = T[d];
                        if (x.isDirectionalLight) {
                            const A = c.directional[Q];
                            A.direction.setFromMatrixPosition(x.matrixWorld), v.setFromMatrixPosition(x.target.matrixWorld), A.direction.sub(v), A.direction.transformDirection(l), Q++
                        } else if (x.isSpotLight) {
                            const A = c.spot[i];
                            A.position.setFromMatrixPosition(x.matrixWorld), A.position.applyMatrix4(l), A.direction.setFromMatrixPosition(x.matrixWorld), v.setFromMatrixPosition(x.target.matrixWorld), A.direction.sub(v), A.direction.transformDirection(l), i++
                        } else if (x.isRectAreaLight) {
                            const A = c.rectArea[t];
                            A.position.setFromMatrixPosition(x.matrixWorld), A.position.applyMatrix4(l), E.identity(), w.copy(x.matrixWorld), w.premultiply(l), E.extractRotation(w), A.halfWidth.set(.5 * x.width, 0, 0), A.halfHeight.set(0, .5 * x.height, 0), A.halfWidth.applyMatrix4(E), A.halfHeight.applyMatrix4(E), t++
                        } else if (x.isPointLight) {
                            const A = c.point[k];
                            A.position.setFromMatrixPosition(x.matrixWorld), A.position.applyMatrix4(l), k++
                        } else if (x.isHemisphereLight) {
                            const A = c.hemi[a];
                            A.direction.setFromMatrixPosition(x.matrixWorld), A.direction.transformDirection(l), A.direction.normalize(), a++
                        }
                    }
                },
                state: c
            }
        }

        function f(s, e) {
            const r = new u(s, e),
                h = [],
                c = [];
            return {
                init: function() {
                    h.length = 0, c.length = 0
                },
                state: {
                    lightsArray: h,
                    shadowsArray: c,
                    lights: r
                },
                setupLights: function() {
                    r.setup(h)
                },
                setupLightsView: function(v) {
                    r.setupView(h, v)
                },
                pushLight: function(v) {
                    h.push(v)
                },
                pushShadow: function(v) {
                    c.push(v)
                }
            }
        }

        function _(s, e) {
            let r = new WeakMap;
            return {
                get: function(h, c = 0) {
                    let v;
                    return r.has(h) === !1 ? (v = new f(s, e), r.set(h, [v])) : c >= r.get(h).length ? (v = new f(s, e), r.get(h).push(v)) : v = r.get(h)[c], v
                },
                dispose: function() {
                    r = new WeakMap
                }
            }
        }
        class S extends ti {
            constructor(e) {
                super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
            }
        }
        S.prototype.isMeshDepthMaterial = !0;
        class L extends ti {
            constructor(e) {
                super(), this.type = "MeshDistanceMaterial", this.referencePosition = new ge, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
            }
        }
        L.prototype.isMeshDistanceMaterial = !0;

        function P(s, e, r) {
            let h = new Us;
            const c = new Ht,
                v = new Ht,
                w = new Si,
                E = [],
                T = [],
                B = {},
                Q = r.maxTextureSize,
                k = {
                    0: 1,
                    1: 0,
                    2: 2
                },
                i = new Cn({
                    defines: {
                        SAMPLE_RATE: 2 / 8,
                        HALF_SAMPLE_RATE: 1 / 8
                    },
                    uniforms: {
                        shadow_pass: {
                            value: null
                        },
                        resolution: {
                            value: new Ht
                        },
                        radius: {
                            value: 4
                        }
                    },
                    vertexShader: `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
                    fragmentShader: `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`
                }),
                t = i.clone();
            t.defines.HORIZONTAL_PASS = 1;
            const a = new an;
            a.setAttribute("position", new pi(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
            const l = new ar(a, i),
                d = this;

            function g(D, U) {
                const N = e.update(l);
                i.uniforms.shadow_pass.value = D.map.texture, i.uniforms.resolution.value = D.mapSize, i.uniforms.radius.value = D.radius, s.setRenderTarget(D.mapPass), s.clear(), s.renderBufferDirect(U, null, N, i, l, null), t.uniforms.shadow_pass.value = D.mapPass.texture, t.uniforms.resolution.value = D.mapSize, t.uniforms.radius.value = D.radius, s.setRenderTarget(D.map), s.clear(), s.renderBufferDirect(U, null, N, t, l, null)
            }

            function x(D, U, N) {
                const H = D << 0 | U << 1 | N << 2;
                let X = E[H];
                return X === void 0 && (X = new S({
                    depthPacking: 3201,
                    morphTargets: D,
                    skinning: U
                }), E[H] = X), X
            }

            function A(D, U, N) {
                const H = D << 0 | U << 1 | N << 2;
                let X = T[H];
                return X === void 0 && (X = new L({
                    morphTargets: D,
                    skinning: U
                }), T[H] = X), X
            }

            function M(D, U, N, H, X, ne, le) {
                let ce = null,
                    Qe = x,
                    Se = D.customDepthMaterial;
                if (H.isPointLight === !0 && (Qe = A, Se = D.customDistanceMaterial), Se === void 0) {
                    let Re = !1;
                    N.morphTargets === !0 && (Re = U.morphAttributes && U.morphAttributes.position && U.morphAttributes.position.length > 0);
                    let ot = !1;
                    D.isSkinnedMesh === !0 && (N.skinning === !0 ? ot = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", D)), ce = Qe(Re, ot, D.isInstancedMesh === !0)
                } else ce = Se;
                if (s.localClippingEnabled && N.clipShadows === !0 && N.clippingPlanes.length !== 0) {
                    const Re = ce.uuid,
                        ot = N.uuid;
                    let dt = B[Re];
                    dt === void 0 && (dt = {}, B[Re] = dt);
                    let Ct = dt[ot];
                    Ct === void 0 && (Ct = ce.clone(), dt[ot] = Ct), ce = Ct
                }
                return ce.visible = N.visible, ce.wireframe = N.wireframe, ce.side = le === 3 ? N.shadowSide !== null ? N.shadowSide : N.side : N.shadowSide !== null ? N.shadowSide : k[N.side], ce.clipShadows = N.clipShadows, ce.clippingPlanes = N.clippingPlanes, ce.clipIntersection = N.clipIntersection, ce.wireframeLinewidth = N.wireframeLinewidth, ce.linewidth = N.linewidth, H.isPointLight === !0 && ce.isMeshDistanceMaterial === !0 && (ce.referencePosition.setFromMatrixPosition(H.matrixWorld), ce.nearDistance = X, ce.farDistance = ne), ce
            }

            function F(D, U, N, H, X) {
                if (D.visible === !1) return;
                if (D.layers.test(U.layers) && (D.isMesh || D.isLine || D.isPoints) && (D.castShadow || D.receiveShadow && X === 3) && (!D.frustumCulled || h.intersectsObject(D))) {
                    D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, D.matrixWorld);
                    const le = e.update(D),
                        ce = D.material;
                    if (Array.isArray(ce)) {
                        const Qe = le.groups;
                        for (let Se = 0, Re = Qe.length; Se < Re; Se++) {
                            const ot = Qe[Se],
                                dt = ce[ot.materialIndex];
                            if (dt && dt.visible) {
                                const Ct = M(D, le, dt, H, N.near, N.far, X);
                                s.renderBufferDirect(N, null, le, Ct, D, ot)
                            }
                        }
                    } else if (ce.visible) {
                        const Qe = M(D, le, ce, H, N.near, N.far, X);
                        s.renderBufferDirect(N, null, le, Qe, D, null)
                    }
                }
                const ne = D.children;
                for (let le = 0, ce = ne.length; le < ce; le++) F(ne[le], U, N, H, X)
            }
            this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(D, U, N) {
                if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || D.length === 0) return;
                const H = s.getRenderTarget(),
                    X = s.getActiveCubeFace(),
                    ne = s.getActiveMipmapLevel(),
                    le = s.state;
                le.setBlending(0), le.buffers.color.setClear(1, 1, 1, 1), le.buffers.depth.setTest(!0), le.setScissorTest(!1);
                for (let ce = 0, Qe = D.length; ce < Qe; ce++) {
                    const Se = D[ce],
                        Re = Se.shadow;
                    if (Re === void 0) {
                        console.warn("THREE.WebGLShadowMap:", Se, "has no shadow.");
                        continue
                    }
                    if (Re.autoUpdate === !1 && Re.needsUpdate === !1) continue;
                    c.copy(Re.mapSize);
                    const ot = Re.getFrameExtents();
                    if (c.multiply(ot), v.copy(Re.mapSize), (c.x > Q || c.y > Q) && (c.x > Q && (v.x = Math.floor(Q / ot.x), c.x = v.x * ot.x, Re.mapSize.x = v.x), c.y > Q && (v.y = Math.floor(Q / ot.y), c.y = v.y * ot.y, Re.mapSize.y = v.y)), Re.map === null && !Re.isPointLightShadow && this.type === 3) {
                        const Ct = {
                            minFilter: 1006,
                            magFilter: 1006,
                            format: 1023
                        };
                        Re.map = new qi(c.x, c.y, Ct), Re.map.texture.name = Se.name + ".shadowMap", Re.mapPass = new qi(c.x, c.y, Ct), Re.camera.updateProjectionMatrix()
                    }
                    if (Re.map === null) {
                        const Ct = {
                            minFilter: 1003,
                            magFilter: 1003,
                            format: 1023
                        };
                        Re.map = new qi(c.x, c.y, Ct), Re.map.texture.name = Se.name + ".shadowMap", Re.camera.updateProjectionMatrix()
                    }
                    s.setRenderTarget(Re.map), s.clear();
                    const dt = Re.getViewportCount();
                    for (let Ct = 0; Ct < dt; Ct++) {
                        const Nt = Re.getViewport(Ct);
                        w.set(v.x * Nt.x, v.y * Nt.y, v.x * Nt.z, v.y * Nt.w), le.viewport(w), Re.updateMatrices(Se, Ct), h = Re.getFrustum(), F(U, N, Re.camera, Se, this.type)
                    }
                    Re.isPointLightShadow || this.type !== 3 || g(Re, N), Re.needsUpdate = !1
                }
                d.needsUpdate = !1, s.setRenderTarget(H, X, ne)
            }
        }

        function I(s, e, r) {
            const h = r.isWebGL2,
                c = new function() {
                    let Ie = !1;
                    const pt = new Si;
                    let xt = null;
                    const Gt = new Si(0, 0, 0, 0);
                    return {
                        setMask: function(Xt) {
                            xt === Xt || Ie || (s.colorMask(Xt, Xt, Xt, Xt), xt = Xt)
                        },
                        setLocked: function(Xt) {
                            Ie = Xt
                        },
                        setClear: function(Xt, hi, _i, Di, nn) {
                            nn === !0 && (Xt *= Di, hi *= Di, _i *= Di), pt.set(Xt, hi, _i, Di), Gt.equals(pt) === !1 && (s.clearColor(Xt, hi, _i, Di), Gt.copy(pt))
                        },
                        reset: function() {
                            Ie = !1, xt = null, Gt.set(-1, 0, 0, 0)
                        }
                    }
                },
                v = new function() {
                    let Ie = !1,
                        pt = null,
                        xt = null,
                        Gt = null;
                    return {
                        setTest: function(Xt) {
                            Xt ? Ct(2929) : Nt(2929)
                        },
                        setMask: function(Xt) {
                            pt === Xt || Ie || (s.depthMask(Xt), pt = Xt)
                        },
                        setFunc: function(Xt) {
                            if (xt !== Xt) {
                                if (Xt) switch (Xt) {
                                    case 0:
                                        s.depthFunc(512);
                                        break;
                                    case 1:
                                        s.depthFunc(519);
                                        break;
                                    case 2:
                                        s.depthFunc(513);
                                        break;
                                    case 3:
                                        s.depthFunc(515);
                                        break;
                                    case 4:
                                        s.depthFunc(514);
                                        break;
                                    case 5:
                                        s.depthFunc(518);
                                        break;
                                    case 6:
                                        s.depthFunc(516);
                                        break;
                                    case 7:
                                        s.depthFunc(517);
                                        break;
                                    default:
                                        s.depthFunc(515)
                                } else s.depthFunc(515);
                                xt = Xt
                            }
                        },
                        setLocked: function(Xt) {
                            Ie = Xt
                        },
                        setClear: function(Xt) {
                            Gt !== Xt && (s.clearDepth(Xt), Gt = Xt)
                        },
                        reset: function() {
                            Ie = !1, pt = null, xt = null, Gt = null
                        }
                    }
                },
                w = new function() {
                    let Ie = !1,
                        pt = null,
                        xt = null,
                        Gt = null,
                        Xt = null,
                        hi = null,
                        _i = null,
                        Di = null,
                        nn = null;
                    return {
                        setTest: function(Fi) {
                            Ie || (Fi ? Ct(2960) : Nt(2960))
                        },
                        setMask: function(Fi) {
                            pt === Fi || Ie || (s.stencilMask(Fi), pt = Fi)
                        },
                        setFunc: function(Fi, tn, gn) {
                            xt === Fi && Gt === tn && Xt === gn || (s.stencilFunc(Fi, tn, gn), xt = Fi, Gt = tn, Xt = gn)
                        },
                        setOp: function(Fi, tn, gn) {
                            hi === Fi && _i === tn && Di === gn || (s.stencilOp(Fi, tn, gn), hi = Fi, _i = tn, Di = gn)
                        },
                        setLocked: function(Fi) {
                            Ie = Fi
                        },
                        setClear: function(Fi) {
                            nn !== Fi && (s.clearStencil(Fi), nn = Fi)
                        },
                        reset: function() {
                            Ie = !1, pt = null, xt = null, Gt = null, Xt = null, hi = null, _i = null, Di = null, nn = null
                        }
                    }
                };
            let E = {},
                T = null,
                B = {},
                Q = null,
                k = !1,
                i = null,
                t = null,
                a = null,
                l = null,
                d = null,
                g = null,
                x = null,
                A = !1,
                M = null,
                F = null,
                D = null,
                U = null,
                N = null;
            const H = s.getParameter(35661);
            let X = !1,
                ne = 0;
            const le = s.getParameter(7938);
            le.indexOf("WebGL") !== -1 ? (ne = parseFloat(/^WebGL (\d)/.exec(le)[1]), X = ne >= 1) : le.indexOf("OpenGL ES") !== -1 && (ne = parseFloat(/^OpenGL ES (\d)/.exec(le)[1]), X = ne >= 2);
            let ce = null,
                Qe = {};
            const Se = new Si(0, 0, s.canvas.width, s.canvas.height),
                Re = new Si(0, 0, s.canvas.width, s.canvas.height);

            function ot(Ie, pt, xt) {
                const Gt = new Uint8Array(4),
                    Xt = s.createTexture();
                s.bindTexture(Ie, Xt), s.texParameteri(Ie, 10241, 9728), s.texParameteri(Ie, 10240, 9728);
                for (let hi = 0; hi < xt; hi++) s.texImage2D(pt + hi, 0, 6408, 1, 1, 0, 6408, 5121, Gt);
                return Xt
            }
            const dt = {};

            function Ct(Ie) {
                E[Ie] !== !0 && (s.enable(Ie), E[Ie] = !0)
            }

            function Nt(Ie) {
                E[Ie] !== !1 && (s.disable(Ie), E[Ie] = !1)
            }
            dt[3553] = ot(3553, 3553, 1), dt[34067] = ot(34067, 34069, 6), c.setClear(0, 0, 0, 1), v.setClear(1), w.setClear(0), Ct(2929), v.setFunc(3), mt(!1), lt(1), Ct(2884), Be(0);
            const qt = {
                100: 32774,
                101: 32778,
                102: 32779
            };
            if (h) qt[103] = 32775, qt[104] = 32776;
            else {
                const Ie = e.get("EXT_blend_minmax");
                Ie !== null && (qt[103] = Ie.MIN_EXT, qt[104] = Ie.MAX_EXT)
            }
            const Fe = {
                200: 0,
                201: 1,
                202: 768,
                204: 770,
                210: 776,
                208: 774,
                206: 772,
                203: 769,
                205: 771,
                209: 775,
                207: 773
            };

            function Be(Ie, pt, xt, Gt, Xt, hi, _i, Di) {
                if (Ie !== 0) {
                    if (k === !1 && (Ct(3042), k = !0), Ie === 5) Xt = Xt || pt, hi = hi || xt, _i = _i || Gt, pt === t && Xt === d || (s.blendEquationSeparate(qt[pt], qt[Xt]), t = pt, d = Xt), xt === a && Gt === l && hi === g && _i === x || (s.blendFuncSeparate(Fe[xt], Fe[Gt], Fe[hi], Fe[_i]), a = xt, l = Gt, g = hi, x = _i), i = Ie, A = null;
                    else if (Ie !== i || Di !== A) {
                        if (t === 100 && d === 100 || (s.blendEquation(32774), t = 100, d = 100), Di) switch (Ie) {
                            case 1:
                                s.blendFuncSeparate(1, 771, 1, 771);
                                break;
                            case 2:
                                s.blendFunc(1, 1);
                                break;
                            case 3:
                                s.blendFuncSeparate(0, 0, 769, 771);
                                break;
                            case 4:
                                s.blendFuncSeparate(0, 768, 0, 770);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", Ie)
                        } else switch (Ie) {
                            case 1:
                                s.blendFuncSeparate(770, 771, 1, 771);
                                break;
                            case 2:
                                s.blendFunc(770, 1);
                                break;
                            case 3:
                                s.blendFunc(0, 769);
                                break;
                            case 4:
                                s.blendFunc(0, 768);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", Ie)
                        }
                        a = null, l = null, g = null, x = null, i = Ie, A = Di
                    }
                } else k === !0 && (Nt(3042), k = !1)
            }

            function mt(Ie) {
                M !== Ie && (Ie ? s.frontFace(2304) : s.frontFace(2305), M = Ie)
            }

            function lt(Ie) {
                Ie !== 0 ? (Ct(2884), Ie !== F && (Ie === 1 ? s.cullFace(1029) : Ie === 2 ? s.cullFace(1028) : s.cullFace(1032))) : Nt(2884), F = Ie
            }

            function Xe(Ie, pt, xt) {
                Ie ? (Ct(32823), U === pt && N === xt || (s.polygonOffset(pt, xt), U = pt, N = xt)) : Nt(32823)
            }

            function Zt(Ie) {
                Ie === void 0 && (Ie = 33984 + H - 1), ce !== Ie && (s.activeTexture(Ie), ce = Ie)
            }
            return {
                buffers: {
                    color: c,
                    depth: v,
                    stencil: w
                },
                enable: Ct,
                disable: Nt,
                bindFramebuffer: function(Ie, pt) {
                    pt === null && T !== null && (pt = T), B[Ie] !== pt && (s.bindFramebuffer(Ie, pt), B[Ie] = pt)
                },
                bindXRFramebuffer: function(Ie) {
                    Ie !== T && (s.bindFramebuffer(36160, Ie), T = Ie)
                },
                useProgram: function(Ie) {
                    return Q !== Ie && (s.useProgram(Ie), Q = Ie, !0)
                },
                setBlending: Be,
                setMaterial: function(Ie, pt) {
                    Ie.side === 2 ? Nt(2884) : Ct(2884);
                    let xt = Ie.side === 1;
                    pt && (xt = !xt), mt(xt), Ie.blending === 1 && Ie.transparent === !1 ? Be(0) : Be(Ie.blending, Ie.blendEquation, Ie.blendSrc, Ie.blendDst, Ie.blendEquationAlpha, Ie.blendSrcAlpha, Ie.blendDstAlpha, Ie.premultipliedAlpha), v.setFunc(Ie.depthFunc), v.setTest(Ie.depthTest), v.setMask(Ie.depthWrite), c.setMask(Ie.colorWrite);
                    const Gt = Ie.stencilWrite;
                    w.setTest(Gt), Gt && (w.setMask(Ie.stencilWriteMask), w.setFunc(Ie.stencilFunc, Ie.stencilRef, Ie.stencilFuncMask), w.setOp(Ie.stencilFail, Ie.stencilZFail, Ie.stencilZPass)), Xe(Ie.polygonOffset, Ie.polygonOffsetFactor, Ie.polygonOffsetUnits), Ie.alphaToCoverage === !0 ? Ct(32926) : Nt(32926)
                },
                setFlipSided: mt,
                setCullFace: lt,
                setLineWidth: function(Ie) {
                    Ie !== D && (X && s.lineWidth(Ie), D = Ie)
                },
                setPolygonOffset: Xe,
                setScissorTest: function(Ie) {
                    Ie ? Ct(3089) : Nt(3089)
                },
                activeTexture: Zt,
                bindTexture: function(Ie, pt) {
                    ce === null && Zt();
                    let xt = Qe[ce];
                    xt === void 0 && (xt = {
                        type: void 0,
                        texture: void 0
                    }, Qe[ce] = xt), xt.type === Ie && xt.texture === pt || (s.bindTexture(Ie, pt || dt[Ie]), xt.type = Ie, xt.texture = pt)
                },
                unbindTexture: function() {
                    const Ie = Qe[ce];
                    Ie !== void 0 && Ie.type !== void 0 && (s.bindTexture(Ie.type, null), Ie.type = void 0, Ie.texture = void 0)
                },
                compressedTexImage2D: function() {
                    try {
                        s.compressedTexImage2D.apply(s, arguments)
                    } catch (Ie) {
                        console.error("THREE.WebGLState:", Ie)
                    }
                },
                texImage2D: function() {
                    try {
                        s.texImage2D.apply(s, arguments)
                    } catch (Ie) {
                        console.error("THREE.WebGLState:", Ie)
                    }
                },
                texImage3D: function() {
                    try {
                        s.texImage3D.apply(s, arguments)
                    } catch (Ie) {
                        console.error("THREE.WebGLState:", Ie)
                    }
                },
                scissor: function(Ie) {
                    Se.equals(Ie) === !1 && (s.scissor(Ie.x, Ie.y, Ie.z, Ie.w), Se.copy(Ie))
                },
                viewport: function(Ie) {
                    Re.equals(Ie) === !1 && (s.viewport(Ie.x, Ie.y, Ie.z, Ie.w), Re.copy(Ie))
                },
                reset: function() {
                    s.disable(3042), s.disable(2884), s.disable(2929), s.disable(32823), s.disable(3089), s.disable(2960), s.disable(32926), s.blendEquation(32774), s.blendFunc(1, 0), s.blendFuncSeparate(1, 0, 1, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(513), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(519, 0, 4294967295), s.stencilOp(7680, 7680, 7680), s.clearStencil(0), s.cullFace(1029), s.frontFace(2305), s.polygonOffset(0, 0), s.activeTexture(33984), s.bindFramebuffer(36160, null), h === !0 && (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), E = {}, ce = null, Qe = {}, T = null, B = {}, Q = null, k = !1, i = null, t = null, a = null, l = null, d = null, g = null, x = null, A = !1, M = null, F = null, D = null, U = null, N = null, Se.set(0, 0, s.canvas.width, s.canvas.height), Re.set(0, 0, s.canvas.width, s.canvas.height), c.reset(), v.reset(), w.reset()
                }
            }
        }

        function G(s, e, r, h, c, v, w) {
            const E = c.isWebGL2,
                T = c.maxTextures,
                B = c.maxCubemapSize,
                Q = c.maxTextureSize,
                k = c.maxSamples,
                i = new WeakMap;
            let t, a = !1;
            try {
                a = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null
            } catch (Fe) {}

            function l(Fe, Be) {
                return a ? new OffscreenCanvas(Fe, Be) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
            }

            function d(Fe, Be, mt, lt) {
                let Xe = 1;
                if ((Fe.width > lt || Fe.height > lt) && (Xe = lt / Math.max(Fe.width, Fe.height)), Xe < 1 || Be === !0) {
                    if (typeof HTMLImageElement != "undefined" && Fe instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && Fe instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && Fe instanceof ImageBitmap) {
                        const Zt = Be ? Mi.floorPowerOfTwo : Math.floor,
                            Ie = Zt(Xe * Fe.width),
                            pt = Zt(Xe * Fe.height);
                        t === void 0 && (t = l(Ie, pt));
                        const xt = mt ? l(Ie, pt) : t;
                        return xt.width = Ie, xt.height = pt, xt.getContext("2d").drawImage(Fe, 0, 0, Ie, pt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Fe.width + "x" + Fe.height + ") to (" + Ie + "x" + pt + ")."), xt
                    }
                    return "data" in Fe && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Fe.width + "x" + Fe.height + ")."), Fe
                }
                return Fe
            }

            function g(Fe) {
                return Mi.isPowerOfTwo(Fe.width) && Mi.isPowerOfTwo(Fe.height)
            }

            function x(Fe, Be) {
                return Fe.generateMipmaps && Be && Fe.minFilter !== 1003 && Fe.minFilter !== 1006
            }

            function A(Fe, Be, mt, lt) {
                s.generateMipmap(Fe), h.get(Be).__maxMipLevel = Math.log2(Math.max(mt, lt))
            }

            function M(Fe, Be, mt) {
                if (E === !1) return Be;
                if (Fe !== null) {
                    if (s[Fe] !== void 0) return s[Fe];
                    console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + Fe + "'")
                }
                let lt = Be;
                return Be === 6403 && (mt === 5126 && (lt = 33326), mt === 5131 && (lt = 33325), mt === 5121 && (lt = 33321)), Be === 6407 && (mt === 5126 && (lt = 34837), mt === 5131 && (lt = 34843), mt === 5121 && (lt = 32849)), Be === 6408 && (mt === 5126 && (lt = 34836), mt === 5131 && (lt = 34842), mt === 5121 && (lt = 32856)), lt !== 33325 && lt !== 33326 && lt !== 34842 && lt !== 34836 || e.get("EXT_color_buffer_float"), lt
            }

            function F(Fe) {
                return Fe === 1003 || Fe === 1004 || Fe === 1005 ? 9728 : 9729
            }

            function D(Fe) {
                const Be = Fe.target;
                Be.removeEventListener("dispose", D),
                    function(mt) {
                        const lt = h.get(mt);
                        lt.__webglInit !== void 0 && (s.deleteTexture(lt.__webglTexture), h.remove(mt))
                    }(Be), Be.isVideoTexture && i.delete(Be), w.memory.textures--
            }

            function U(Fe) {
                const Be = Fe.target;
                Be.removeEventListener("dispose", U),
                    function(mt) {
                        const lt = mt.texture,
                            Xe = h.get(mt),
                            Zt = h.get(lt);
                        if (mt) {
                            if (Zt.__webglTexture !== void 0 && s.deleteTexture(Zt.__webglTexture), mt.depthTexture && mt.depthTexture.dispose(), mt.isWebGLCubeRenderTarget)
                                for (let Ie = 0; Ie < 6; Ie++) s.deleteFramebuffer(Xe.__webglFramebuffer[Ie]), Xe.__webglDepthbuffer && s.deleteRenderbuffer(Xe.__webglDepthbuffer[Ie]);
                            else s.deleteFramebuffer(Xe.__webglFramebuffer), Xe.__webglDepthbuffer && s.deleteRenderbuffer(Xe.__webglDepthbuffer), Xe.__webglMultisampledFramebuffer && s.deleteFramebuffer(Xe.__webglMultisampledFramebuffer), Xe.__webglColorRenderbuffer && s.deleteRenderbuffer(Xe.__webglColorRenderbuffer), Xe.__webglDepthRenderbuffer && s.deleteRenderbuffer(Xe.__webglDepthRenderbuffer);
                            h.remove(lt), h.remove(mt)
                        }
                    }(Be), w.memory.textures--
            }
            let N = 0;

            function H(Fe, Be) {
                const mt = h.get(Fe);
                if (Fe.isVideoTexture && function(lt) {
                        const Xe = w.render.frame;
                        i.get(lt) !== Xe && (i.set(lt, Xe), lt.update())
                    }(Fe), Fe.version > 0 && mt.__version !== Fe.version) {
                    const lt = Fe.image;
                    if (lt === void 0) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                    else {
                        if (lt.complete !== !1) return void Se(mt, Fe, Be);
                        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                    }
                }
                r.activeTexture(33984 + Be), r.bindTexture(3553, mt.__webglTexture)
            }

            function X(Fe, Be) {
                const mt = h.get(Fe);
                Fe.version > 0 && mt.__version !== Fe.version ? function(lt, Xe, Zt) {
                    if (Xe.image.length !== 6) return;
                    Qe(lt, Xe), r.activeTexture(33984 + Zt), r.bindTexture(34067, lt.__webglTexture), s.pixelStorei(37440, Xe.flipY), s.pixelStorei(37441, Xe.premultiplyAlpha), s.pixelStorei(3317, Xe.unpackAlignment), s.pixelStorei(37443, 0);
                    const Ie = Xe && (Xe.isCompressedTexture || Xe.image[0].isCompressedTexture),
                        pt = Xe.image[0] && Xe.image[0].isDataTexture,
                        xt = [];
                    for (let Fi = 0; Fi < 6; Fi++) xt[Fi] = Ie || pt ? pt ? Xe.image[Fi].image : Xe.image[Fi] : d(Xe.image[Fi], !1, !0, B);
                    const Gt = xt[0],
                        Xt = g(Gt) || E,
                        hi = v.convert(Xe.format),
                        _i = v.convert(Xe.type),
                        Di = M(Xe.internalFormat, hi, _i);
                    let nn;
                    if (ce(34067, Xe, Xt), Ie) {
                        for (let Fi = 0; Fi < 6; Fi++) {
                            nn = xt[Fi].mipmaps;
                            for (let tn = 0; tn < nn.length; tn++) {
                                const gn = nn[tn];
                                Xe.format !== 1023 && Xe.format !== 1022 ? hi !== null ? r.compressedTexImage2D(34069 + Fi, tn, Di, gn.width, gn.height, 0, gn.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : r.texImage2D(34069 + Fi, tn, Di, gn.width, gn.height, 0, hi, _i, gn.data)
                            }
                        }
                        lt.__maxMipLevel = nn.length - 1
                    } else {
                        nn = Xe.mipmaps;
                        for (let Fi = 0; Fi < 6; Fi++)
                            if (pt) {
                                r.texImage2D(34069 + Fi, 0, Di, xt[Fi].width, xt[Fi].height, 0, hi, _i, xt[Fi].data);
                                for (let tn = 0; tn < nn.length; tn++) {
                                    const gn = nn[tn].image[Fi].image;
                                    r.texImage2D(34069 + Fi, tn + 1, Di, gn.width, gn.height, 0, hi, _i, gn.data)
                                }
                            } else {
                                r.texImage2D(34069 + Fi, 0, Di, hi, _i, xt[Fi]);
                                for (let tn = 0; tn < nn.length; tn++) {
                                    const gn = nn[tn];
                                    r.texImage2D(34069 + Fi, tn + 1, Di, hi, _i, gn.image[Fi])
                                }
                            } lt.__maxMipLevel = nn.length
                    }
                    x(Xe, Xt) && A(34067, Xe, Gt.width, Gt.height), lt.__version = Xe.version, Xe.onUpdate && Xe.onUpdate(Xe)
                }(mt, Fe, Be) : (r.activeTexture(33984 + Be), r.bindTexture(34067, mt.__webglTexture))
            }
            const ne = {
                    1e3: 10497,
                    1001: 33071,
                    1002: 33648
                },
                le = {
                    1003: 9728,
                    1004: 9984,
                    1005: 9986,
                    1006: 9729,
                    1007: 9985,
                    1008: 9987
                };

            function ce(Fe, Be, mt) {
                if (mt ? (s.texParameteri(Fe, 10242, ne[Be.wrapS]), s.texParameteri(Fe, 10243, ne[Be.wrapT]), Fe !== 32879 && Fe !== 35866 || s.texParameteri(Fe, 32882, ne[Be.wrapR]), s.texParameteri(Fe, 10240, le[Be.magFilter]), s.texParameteri(Fe, 10241, le[Be.minFilter])) : (s.texParameteri(Fe, 10242, 33071), s.texParameteri(Fe, 10243, 33071), Fe !== 32879 && Fe !== 35866 || s.texParameteri(Fe, 32882, 33071), Be.wrapS === 1001 && Be.wrapT === 1001 || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(Fe, 10240, F(Be.magFilter)), s.texParameteri(Fe, 10241, F(Be.minFilter)), Be.minFilter !== 1003 && Be.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
                    const lt = e.get("EXT_texture_filter_anisotropic");
                    if (Be.type === 1015 && e.has("OES_texture_float_linear") === !1 || E === !1 && Be.type === 1016 && e.has("OES_texture_half_float_linear") === !1) return;
                    (Be.anisotropy > 1 || h.get(Be).__currentAnisotropy) && (s.texParameterf(Fe, lt.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(Be.anisotropy, c.getMaxAnisotropy())), h.get(Be).__currentAnisotropy = Be.anisotropy)
                }
            }

            function Qe(Fe, Be) {
                Fe.__webglInit === void 0 && (Fe.__webglInit = !0, Be.addEventListener("dispose", D), Fe.__webglTexture = s.createTexture(), w.memory.textures++)
            }

            function Se(Fe, Be, mt) {
                let lt = 3553;
                Be.isDataTexture2DArray && (lt = 35866), Be.isDataTexture3D && (lt = 32879), Qe(Fe, Be), r.activeTexture(33984 + mt), r.bindTexture(lt, Fe.__webglTexture), s.pixelStorei(37440, Be.flipY), s.pixelStorei(37441, Be.premultiplyAlpha), s.pixelStorei(3317, Be.unpackAlignment), s.pixelStorei(37443, 0);
                const Xe = function(_i) {
                        return !E && (_i.wrapS !== 1001 || _i.wrapT !== 1001 || _i.minFilter !== 1003 && _i.minFilter !== 1006)
                    }(Be) && g(Be.image) === !1,
                    Zt = d(Be.image, Xe, !1, Q),
                    Ie = g(Zt) || E,
                    pt = v.convert(Be.format);
                let xt, Gt = v.convert(Be.type),
                    Xt = M(Be.internalFormat, pt, Gt);
                ce(lt, Be, Ie);
                const hi = Be.mipmaps;
                if (Be.isDepthTexture) Xt = 6402, E ? Xt = Be.type === 1015 ? 36012 : Be.type === 1014 ? 33190 : Be.type === 1020 ? 35056 : 33189 : Be.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), Be.format === 1026 && Xt === 6402 && Be.type !== 1012 && Be.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), Be.type = 1012, Gt = v.convert(Be.type)), Be.format === 1027 && Xt === 6402 && (Xt = 34041, Be.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), Be.type = 1020, Gt = v.convert(Be.type))), r.texImage2D(3553, 0, Xt, Zt.width, Zt.height, 0, pt, Gt, null);
                else if (Be.isDataTexture)
                    if (hi.length > 0 && Ie) {
                        for (let _i = 0, Di = hi.length; _i < Di; _i++) xt = hi[_i], r.texImage2D(3553, _i, Xt, xt.width, xt.height, 0, pt, Gt, xt.data);
                        Be.generateMipmaps = !1, Fe.__maxMipLevel = hi.length - 1
                    } else r.texImage2D(3553, 0, Xt, Zt.width, Zt.height, 0, pt, Gt, Zt.data), Fe.__maxMipLevel = 0;
                else if (Be.isCompressedTexture) {
                    for (let _i = 0, Di = hi.length; _i < Di; _i++) xt = hi[_i], Be.format !== 1023 && Be.format !== 1022 ? pt !== null ? r.compressedTexImage2D(3553, _i, Xt, xt.width, xt.height, 0, xt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : r.texImage2D(3553, _i, Xt, xt.width, xt.height, 0, pt, Gt, xt.data);
                    Fe.__maxMipLevel = hi.length - 1
                } else if (Be.isDataTexture2DArray) r.texImage3D(35866, 0, Xt, Zt.width, Zt.height, Zt.depth, 0, pt, Gt, Zt.data), Fe.__maxMipLevel = 0;
                else if (Be.isDataTexture3D) r.texImage3D(32879, 0, Xt, Zt.width, Zt.height, Zt.depth, 0, pt, Gt, Zt.data), Fe.__maxMipLevel = 0;
                else if (hi.length > 0 && Ie) {
                    for (let _i = 0, Di = hi.length; _i < Di; _i++) xt = hi[_i], r.texImage2D(3553, _i, Xt, pt, Gt, xt);
                    Be.generateMipmaps = !1, Fe.__maxMipLevel = hi.length - 1
                } else r.texImage2D(3553, 0, Xt, pt, Gt, Zt), Fe.__maxMipLevel = 0;
                x(Be, Ie) && A(lt, Be, Zt.width, Zt.height), Fe.__version = Be.version, Be.onUpdate && Be.onUpdate(Be)
            }

            function Re(Fe, Be, mt, lt) {
                const Xe = Be.texture,
                    Zt = v.convert(Xe.format),
                    Ie = v.convert(Xe.type),
                    pt = M(Xe.internalFormat, Zt, Ie);
                lt === 32879 || lt === 35866 ? r.texImage3D(lt, 0, pt, Be.width, Be.height, Be.depth, 0, Zt, Ie, null) : r.texImage2D(lt, 0, pt, Be.width, Be.height, 0, Zt, Ie, null), r.bindFramebuffer(36160, Fe), s.framebufferTexture2D(36160, mt, lt, h.get(Xe).__webglTexture, 0), r.bindFramebuffer(36160, null)
            }

            function ot(Fe, Be, mt) {
                if (s.bindRenderbuffer(36161, Fe), Be.depthBuffer && !Be.stencilBuffer) {
                    let lt = 33189;
                    if (mt) {
                        const Xe = Be.depthTexture;
                        Xe && Xe.isDepthTexture && (Xe.type === 1015 ? lt = 36012 : Xe.type === 1014 && (lt = 33190));
                        const Zt = Ct(Be);
                        s.renderbufferStorageMultisample(36161, Zt, lt, Be.width, Be.height)
                    } else s.renderbufferStorage(36161, lt, Be.width, Be.height);
                    s.framebufferRenderbuffer(36160, 36096, 36161, Fe)
                } else if (Be.depthBuffer && Be.stencilBuffer) {
                    if (mt) {
                        const lt = Ct(Be);
                        s.renderbufferStorageMultisample(36161, lt, 35056, Be.width, Be.height)
                    } else s.renderbufferStorage(36161, 34041, Be.width, Be.height);
                    s.framebufferRenderbuffer(36160, 33306, 36161, Fe)
                } else {
                    const lt = Be.texture,
                        Xe = v.convert(lt.format),
                        Zt = v.convert(lt.type),
                        Ie = M(lt.internalFormat, Xe, Zt);
                    if (mt) {
                        const pt = Ct(Be);
                        s.renderbufferStorageMultisample(36161, pt, Ie, Be.width, Be.height)
                    } else s.renderbufferStorage(36161, Ie, Be.width, Be.height)
                }
                s.bindRenderbuffer(36161, null)
            }

            function dt(Fe) {
                const Be = h.get(Fe),
                    mt = Fe.isWebGLCubeRenderTarget === !0;
                if (Fe.depthTexture) {
                    if (mt) throw new Error("target.depthTexture not supported in Cube render targets");
                    (function(lt, Xe) {
                        if (Xe && Xe.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                        if (r.bindFramebuffer(36160, lt), !Xe.depthTexture || !Xe.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                        h.get(Xe.depthTexture).__webglTexture && Xe.depthTexture.image.width === Xe.width && Xe.depthTexture.image.height === Xe.height || (Xe.depthTexture.image.width = Xe.width, Xe.depthTexture.image.height = Xe.height, Xe.depthTexture.needsUpdate = !0), H(Xe.depthTexture, 0);
                        const Zt = h.get(Xe.depthTexture).__webglTexture;
                        if (Xe.depthTexture.format === 1026) s.framebufferTexture2D(36160, 36096, 3553, Zt, 0);
                        else {
                            if (Xe.depthTexture.format !== 1027) throw new Error("Unknown depthTexture format");
                            s.framebufferTexture2D(36160, 33306, 3553, Zt, 0)
                        }
                    })(Be.__webglFramebuffer, Fe)
                } else if (mt) {
                    Be.__webglDepthbuffer = [];
                    for (let lt = 0; lt < 6; lt++) r.bindFramebuffer(36160, Be.__webglFramebuffer[lt]), Be.__webglDepthbuffer[lt] = s.createRenderbuffer(), ot(Be.__webglDepthbuffer[lt], Fe, !1)
                } else r.bindFramebuffer(36160, Be.__webglFramebuffer), Be.__webglDepthbuffer = s.createRenderbuffer(), ot(Be.__webglDepthbuffer, Fe, !1);
                r.bindFramebuffer(36160, null)
            }

            function Ct(Fe) {
                return E && Fe.isWebGLMultisampleRenderTarget ? Math.min(k, Fe.samples) : 0
            }
            let Nt = !1,
                qt = !1;
            this.allocateTextureUnit = function() {
                const Fe = N;
                return Fe >= T && console.warn("THREE.WebGLTextures: Trying to use " + Fe + " texture units while this GPU supports only " + T), N += 1, Fe
            }, this.resetTextureUnits = function() {
                N = 0
            }, this.setTexture2D = H, this.setTexture2DArray = function(Fe, Be) {
                const mt = h.get(Fe);
                Fe.version > 0 && mt.__version !== Fe.version ? Se(mt, Fe, Be) : (r.activeTexture(33984 + Be), r.bindTexture(35866, mt.__webglTexture))
            }, this.setTexture3D = function(Fe, Be) {
                const mt = h.get(Fe);
                Fe.version > 0 && mt.__version !== Fe.version ? Se(mt, Fe, Be) : (r.activeTexture(33984 + Be), r.bindTexture(32879, mt.__webglTexture))
            }, this.setTextureCube = X, this.setupRenderTarget = function(Fe) {
                const Be = Fe.texture,
                    mt = h.get(Fe),
                    lt = h.get(Be);
                Fe.addEventListener("dispose", U), lt.__webglTexture = s.createTexture(), lt.__version = Be.version, w.memory.textures++;
                const Xe = Fe.isWebGLCubeRenderTarget === !0,
                    Zt = Fe.isWebGLMultisampleRenderTarget === !0,
                    Ie = Be.isDataTexture3D || Be.isDataTexture2DArray,
                    pt = g(Fe) || E;
                if (!E || Be.format !== 1022 || Be.type !== 1015 && Be.type !== 1016 || (Be.format = 1023, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), Xe) {
                    mt.__webglFramebuffer = [];
                    for (let xt = 0; xt < 6; xt++) mt.__webglFramebuffer[xt] = s.createFramebuffer()
                } else if (mt.__webglFramebuffer = s.createFramebuffer(), Zt)
                    if (E) {
                        mt.__webglMultisampledFramebuffer = s.createFramebuffer(), mt.__webglColorRenderbuffer = s.createRenderbuffer(), s.bindRenderbuffer(36161, mt.__webglColorRenderbuffer);
                        const xt = v.convert(Be.format),
                            Gt = v.convert(Be.type),
                            Xt = M(Be.internalFormat, xt, Gt),
                            hi = Ct(Fe);
                        s.renderbufferStorageMultisample(36161, hi, Xt, Fe.width, Fe.height), r.bindFramebuffer(36160, mt.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064, 36161, mt.__webglColorRenderbuffer), s.bindRenderbuffer(36161, null), Fe.depthBuffer && (mt.__webglDepthRenderbuffer = s.createRenderbuffer(), ot(mt.__webglDepthRenderbuffer, Fe, !0)), r.bindFramebuffer(36160, null)
                    } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
                if (Xe) {
                    r.bindTexture(34067, lt.__webglTexture), ce(34067, Be, pt);
                    for (let xt = 0; xt < 6; xt++) Re(mt.__webglFramebuffer[xt], Fe, 36064, 34069 + xt);
                    x(Be, pt) && A(34067, Be, Fe.width, Fe.height), r.bindTexture(34067, null)
                } else {
                    let xt = 3553;
                    Ie && (E ? xt = Be.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), r.bindTexture(xt, lt.__webglTexture), ce(xt, Be, pt), Re(mt.__webglFramebuffer, Fe, 36064, xt), x(Be, pt) && A(3553, Be, Fe.width, Fe.height), r.bindTexture(3553, null)
                }
                Fe.depthBuffer && dt(Fe)
            }, this.updateRenderTargetMipmap = function(Fe) {
                const Be = Fe.texture;
                if (x(Be, g(Fe) || E)) {
                    const mt = Fe.isWebGLCubeRenderTarget ? 34067 : 3553,
                        lt = h.get(Be).__webglTexture;
                    r.bindTexture(mt, lt), A(mt, Be, Fe.width, Fe.height), r.bindTexture(mt, null)
                }
            }, this.updateMultisampleRenderTarget = function(Fe) {
                if (Fe.isWebGLMultisampleRenderTarget)
                    if (E) {
                        const Be = h.get(Fe);
                        r.bindFramebuffer(36008, Be.__webglMultisampledFramebuffer), r.bindFramebuffer(36009, Be.__webglFramebuffer);
                        const mt = Fe.width,
                            lt = Fe.height;
                        let Xe = 16384;
                        Fe.depthBuffer && (Xe |= 256), Fe.stencilBuffer && (Xe |= 1024), s.blitFramebuffer(0, 0, mt, lt, 0, 0, mt, lt, Xe, 9728), r.bindFramebuffer(36160, Be.__webglMultisampledFramebuffer)
                    } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
            }, this.safeSetTexture2D = function(Fe, Be) {
                Fe && Fe.isWebGLRenderTarget && (Nt === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Nt = !0), Fe = Fe.texture), H(Fe, Be)
            }, this.safeSetTextureCube = function(Fe, Be) {
                Fe && Fe.isWebGLCubeRenderTarget && (qt === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), qt = !0), Fe = Fe.texture), X(Fe, Be)
            }
        }

        function j(s, e, r) {
            const h = r.isWebGL2;
            return {
                convert: function(c) {
                    let v;
                    if (c === 1009) return 5121;
                    if (c === 1017) return 32819;
                    if (c === 1018) return 32820;
                    if (c === 1019) return 33635;
                    if (c === 1010) return 5120;
                    if (c === 1011) return 5122;
                    if (c === 1012) return 5123;
                    if (c === 1013) return 5124;
                    if (c === 1014) return 5125;
                    if (c === 1015) return 5126;
                    if (c === 1016) return h ? 5131 : (v = e.get("OES_texture_half_float"), v !== null ? v.HALF_FLOAT_OES : null);
                    if (c === 1021) return 6406;
                    if (c === 1022) return 6407;
                    if (c === 1023) return 6408;
                    if (c === 1024) return 6409;
                    if (c === 1025) return 6410;
                    if (c === 1026) return 6402;
                    if (c === 1027) return 34041;
                    if (c === 1028) return 6403;
                    if (c === 1029) return 36244;
                    if (c === 1030) return 33319;
                    if (c === 1031) return 33320;
                    if (c === 1032) return 36248;
                    if (c === 1033) return 36249;
                    if (c === 33776 || c === 33777 || c === 33778 || c === 33779) {
                        if (v = e.get("WEBGL_compressed_texture_s3tc"), v === null) return null;
                        if (c === 33776) return v.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (c === 33777) return v.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (c === 33778) return v.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (c === 33779) return v.COMPRESSED_RGBA_S3TC_DXT5_EXT
                    }
                    if (c === 35840 || c === 35841 || c === 35842 || c === 35843) {
                        if (v = e.get("WEBGL_compressed_texture_pvrtc"), v === null) return null;
                        if (c === 35840) return v.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        if (c === 35841) return v.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        if (c === 35842) return v.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        if (c === 35843) return v.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                    }
                    if (c === 36196) return v = e.get("WEBGL_compressed_texture_etc1"), v !== null ? v.COMPRESSED_RGB_ETC1_WEBGL : null;
                    if ((c === 37492 || c === 37496) && (v = e.get("WEBGL_compressed_texture_etc"), v !== null)) {
                        if (c === 37492) return v.COMPRESSED_RGB8_ETC2;
                        if (c === 37496) return v.COMPRESSED_RGBA8_ETC2_EAC
                    }
                    return c === 37808 || c === 37809 || c === 37810 || c === 37811 || c === 37812 || c === 37813 || c === 37814 || c === 37815 || c === 37816 || c === 37817 || c === 37818 || c === 37819 || c === 37820 || c === 37821 || c === 37840 || c === 37841 || c === 37842 || c === 37843 || c === 37844 || c === 37845 || c === 37846 || c === 37847 || c === 37848 || c === 37849 || c === 37850 || c === 37851 || c === 37852 || c === 37853 ? (v = e.get("WEBGL_compressed_texture_astc"), v !== null ? c : null) : c === 36492 ? (v = e.get("EXT_texture_compression_bptc"), v !== null ? c : null) : c === 1020 ? h ? 34042 : (v = e.get("WEBGL_depth_texture"), v !== null ? v.UNSIGNED_INT_24_8_WEBGL : null) : void 0
                }
            }
        }
        class ee extends dr {
            constructor(e = []) {
                super(), this.cameras = e
            }
        }
        ee.prototype.isArrayCamera = !0;
        class pe extends Z {
            constructor() {
                super(), this.type = "Group"
            }
        }

        function Ce() {
            this._targetRay = null, this._grip = null, this._hand = null
        }

        function Me(s, e) {
            const r = this,
                h = s.state;
            let c = null,
                v = 1,
                w = null,
                E = "local-floor",
                T = null;
            const B = [],
                Q = new Map,
                k = new dr;
            k.layers.enable(1), k.viewport = new Si;
            const i = new dr;
            i.layers.enable(2), i.viewport = new Si;
            const t = [k, i],
                a = new ee;
            a.layers.enable(1), a.layers.enable(2);
            let l = null,
                d = null;

            function g(H) {
                const X = Q.get(H.inputSource);
                X && X.dispatchEvent({
                    type: H.type,
                    data: H.inputSource
                })
            }

            function x() {
                Q.forEach(function(H, X) {
                    H.disconnect(X)
                }), Q.clear(), l = null, d = null, h.bindXRFramebuffer(null), s.setRenderTarget(s.getRenderTarget()), N.stop(), r.isPresenting = !1, r.dispatchEvent({
                    type: "sessionend"
                })
            }

            function A(H) {
                const X = c.inputSources;
                for (let ne = 0; ne < B.length; ne++) Q.set(X[ne], B[ne]);
                for (let ne = 0; ne < H.removed.length; ne++) {
                    const le = H.removed[ne],
                        ce = Q.get(le);
                    ce && (ce.dispatchEvent({
                        type: "disconnected",
                        data: le
                    }), Q.delete(le))
                }
                for (let ne = 0; ne < H.added.length; ne++) {
                    const le = H.added[ne],
                        ce = Q.get(le);
                    ce && ce.dispatchEvent({
                        type: "connected",
                        data: le
                    })
                }
            }
            this.enabled = !1, this.isPresenting = !1, this.getController = function(H) {
                let X = B[H];
                return X === void 0 && (X = new Ce, B[H] = X), X.getTargetRaySpace()
            }, this.getControllerGrip = function(H) {
                let X = B[H];
                return X === void 0 && (X = new Ce, B[H] = X), X.getGripSpace()
            }, this.getHand = function(H) {
                let X = B[H];
                return X === void 0 && (X = new Ce, B[H] = X), X.getHandSpace()
            }, this.setFramebufferScaleFactor = function(H) {
                v = H, r.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
            }, this.setReferenceSpaceType = function(H) {
                E = H, r.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
            }, this.getReferenceSpace = function() {
                return w
            }, this.getSession = function() {
                return c
            }, this.setSession = function(H) {
                return no(this, null, function*() {
                    if (c = H, c !== null) {
                        c.addEventListener("select", g), c.addEventListener("selectstart", g), c.addEventListener("selectend", g), c.addEventListener("squeeze", g), c.addEventListener("squeezestart", g), c.addEventListener("squeezeend", g), c.addEventListener("end", x), c.addEventListener("inputsourceschange", A);
                        const X = e.getContextAttributes();
                        X.xrCompatible !== !0 && (yield e.makeXRCompatible());
                        const ne = {
                                antialias: X.antialias,
                                alpha: X.alpha,
                                depth: X.depth,
                                stencil: X.stencil,
                                framebufferScaleFactor: v
                            },
                            le = new XRWebGLLayer(c, e, ne);
                        c.updateRenderState({
                            baseLayer: le
                        }), w = yield c.requestReferenceSpace(E), N.setContext(c), N.start(), r.isPresenting = !0, r.dispatchEvent({
                            type: "sessionstart"
                        })
                    }
                })
            };
            const M = new ge,
                F = new ge;

            function D(H, X) {
                X === null ? H.matrixWorld.copy(H.matrix) : H.matrixWorld.multiplyMatrices(X.matrixWorld, H.matrix), H.matrixWorldInverse.copy(H.matrixWorld).invert()
            }
            this.getCamera = function(H) {
                a.near = i.near = k.near = H.near, a.far = i.far = k.far = H.far, l === a.near && d === a.far || (c.updateRenderState({
                    depthNear: a.near,
                    depthFar: a.far
                }), l = a.near, d = a.far);
                const X = H.parent,
                    ne = a.cameras;
                D(a, X);
                for (let ce = 0; ce < ne.length; ce++) D(ne[ce], X);
                H.matrixWorld.copy(a.matrixWorld), H.matrix.copy(a.matrix), H.matrix.decompose(H.position, H.quaternion, H.scale);
                const le = H.children;
                for (let ce = 0, Qe = le.length; ce < Qe; ce++) le[ce].updateMatrixWorld(!0);
                return ne.length === 2 ? function(ce, Qe, Se) {
                    M.setFromMatrixPosition(Qe.matrixWorld), F.setFromMatrixPosition(Se.matrixWorld);
                    const Re = M.distanceTo(F),
                        ot = Qe.projectionMatrix.elements,
                        dt = Se.projectionMatrix.elements,
                        Ct = ot[14] / (ot[10] - 1),
                        Nt = ot[14] / (ot[10] + 1),
                        qt = (ot[9] + 1) / ot[5],
                        Fe = (ot[9] - 1) / ot[5],
                        Be = (ot[8] - 1) / ot[0],
                        mt = (dt[8] + 1) / dt[0],
                        lt = Ct * Be,
                        Xe = Ct * mt,
                        Zt = Re / (-Be + mt),
                        Ie = Zt * -Be;
                    Qe.matrixWorld.decompose(ce.position, ce.quaternion, ce.scale), ce.translateX(Ie), ce.translateZ(Zt), ce.matrixWorld.compose(ce.position, ce.quaternion, ce.scale), ce.matrixWorldInverse.copy(ce.matrixWorld).invert();
                    const pt = Ct + Zt,
                        xt = Nt + Zt,
                        Gt = lt - Ie,
                        Xt = Xe + (Re - Ie),
                        hi = qt * Nt / xt * pt,
                        _i = Fe * Nt / xt * pt;
                    ce.projectionMatrix.makePerspective(Gt, Xt, hi, _i, pt, xt)
                }(a, k, i) : a.projectionMatrix.copy(k.projectionMatrix), a
            };
            let U = null;
            const N = new Pc;
            N.setAnimationLoop(function(H, X) {
                if (T = X.getViewerPose(w), T !== null) {
                    const le = T.views,
                        ce = c.renderState.baseLayer;
                    h.bindXRFramebuffer(ce.framebuffer);
                    let Qe = !1;
                    le.length !== a.cameras.length && (a.cameras.length = 0, Qe = !0);
                    for (let Se = 0; Se < le.length; Se++) {
                        const Re = le[Se],
                            ot = ce.getViewport(Re),
                            dt = t[Se];
                        dt.matrix.fromArray(Re.transform.matrix), dt.projectionMatrix.fromArray(Re.projectionMatrix), dt.viewport.set(ot.x, ot.y, ot.width, ot.height), Se === 0 && a.matrix.copy(dt.matrix), Qe === !0 && a.cameras.push(dt)
                    }
                }
                const ne = c.inputSources;
                for (let le = 0; le < B.length; le++) {
                    const ce = B[le],
                        Qe = ne[le];
                    ce.update(Qe, X, w)
                }
                U && U(H, X)
            }), this.setAnimationLoop = function(H) {
                U = H
            }, this.dispose = function() {}
        }

        function ke(s) {
            function e(h, c) {
                h.opacity.value = c.opacity, c.color && h.diffuse.value.copy(c.color), c.emissive && h.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity), c.map && (h.map.value = c.map), c.alphaMap && (h.alphaMap.value = c.alphaMap), c.specularMap && (h.specularMap.value = c.specularMap);
                const v = s.get(c).envMap;
                if (v) {
                    h.envMap.value = v, h.flipEnvMap.value = v.isCubeTexture && v._needsFlipEnvMap ? -1 : 1, h.reflectivity.value = c.reflectivity, h.refractionRatio.value = c.refractionRatio;
                    const T = s.get(v).__maxMipLevel;
                    T !== void 0 && (h.maxMipLevel.value = T)
                }
                let w, E;
                c.lightMap && (h.lightMap.value = c.lightMap, h.lightMapIntensity.value = c.lightMapIntensity), c.aoMap && (h.aoMap.value = c.aoMap, h.aoMapIntensity.value = c.aoMapIntensity), c.map ? w = c.map : c.specularMap ? w = c.specularMap : c.displacementMap ? w = c.displacementMap : c.normalMap ? w = c.normalMap : c.bumpMap ? w = c.bumpMap : c.roughnessMap ? w = c.roughnessMap : c.metalnessMap ? w = c.metalnessMap : c.alphaMap ? w = c.alphaMap : c.emissiveMap ? w = c.emissiveMap : c.clearcoatMap ? w = c.clearcoatMap : c.clearcoatNormalMap ? w = c.clearcoatNormalMap : c.clearcoatRoughnessMap && (w = c.clearcoatRoughnessMap), w !== void 0 && (w.isWebGLRenderTarget && (w = w.texture), w.matrixAutoUpdate === !0 && w.updateMatrix(), h.uvTransform.value.copy(w.matrix)), c.aoMap ? E = c.aoMap : c.lightMap && (E = c.lightMap), E !== void 0 && (E.isWebGLRenderTarget && (E = E.texture), E.matrixAutoUpdate === !0 && E.updateMatrix(), h.uv2Transform.value.copy(E.matrix))
            }

            function r(h, c) {
                h.roughness.value = c.roughness, h.metalness.value = c.metalness, c.roughnessMap && (h.roughnessMap.value = c.roughnessMap), c.metalnessMap && (h.metalnessMap.value = c.metalnessMap), c.emissiveMap && (h.emissiveMap.value = c.emissiveMap), c.bumpMap && (h.bumpMap.value = c.bumpMap, h.bumpScale.value = c.bumpScale, c.side === 1 && (h.bumpScale.value *= -1)), c.normalMap && (h.normalMap.value = c.normalMap, h.normalScale.value.copy(c.normalScale), c.side === 1 && h.normalScale.value.negate()), c.displacementMap && (h.displacementMap.value = c.displacementMap, h.displacementScale.value = c.displacementScale, h.displacementBias.value = c.displacementBias), s.get(c).envMap && (h.envMapIntensity.value = c.envMapIntensity)
            }
            return {
                refreshFogUniforms: function(h, c) {
                    h.fogColor.value.copy(c.color), c.isFog ? (h.fogNear.value = c.near, h.fogFar.value = c.far) : c.isFogExp2 && (h.fogDensity.value = c.density)
                },
                refreshMaterialUniforms: function(h, c, v, w) {
                    c.isMeshBasicMaterial ? e(h, c) : c.isMeshLambertMaterial ? (e(h, c), function(E, T) {
                        T.emissiveMap && (E.emissiveMap.value = T.emissiveMap)
                    }(h, c)) : c.isMeshToonMaterial ? (e(h, c), function(E, T) {
                        T.gradientMap && (E.gradientMap.value = T.gradientMap), T.emissiveMap && (E.emissiveMap.value = T.emissiveMap), T.bumpMap && (E.bumpMap.value = T.bumpMap, E.bumpScale.value = T.bumpScale, T.side === 1 && (E.bumpScale.value *= -1)), T.normalMap && (E.normalMap.value = T.normalMap, E.normalScale.value.copy(T.normalScale), T.side === 1 && E.normalScale.value.negate()), T.displacementMap && (E.displacementMap.value = T.displacementMap, E.displacementScale.value = T.displacementScale, E.displacementBias.value = T.displacementBias)
                    }(h, c)) : c.isMeshPhongMaterial ? (e(h, c), function(E, T) {
                        E.specular.value.copy(T.specular), E.shininess.value = Math.max(T.shininess, 1e-4), T.emissiveMap && (E.emissiveMap.value = T.emissiveMap), T.bumpMap && (E.bumpMap.value = T.bumpMap, E.bumpScale.value = T.bumpScale, T.side === 1 && (E.bumpScale.value *= -1)), T.normalMap && (E.normalMap.value = T.normalMap, E.normalScale.value.copy(T.normalScale), T.side === 1 && E.normalScale.value.negate()), T.displacementMap && (E.displacementMap.value = T.displacementMap, E.displacementScale.value = T.displacementScale, E.displacementBias.value = T.displacementBias)
                    }(h, c)) : c.isMeshStandardMaterial ? (e(h, c), c.isMeshPhysicalMaterial ? function(E, T) {
                        r(E, T), E.reflectivity.value = T.reflectivity, E.clearcoat.value = T.clearcoat, E.clearcoatRoughness.value = T.clearcoatRoughness, T.sheen && E.sheen.value.copy(T.sheen), T.clearcoatMap && (E.clearcoatMap.value = T.clearcoatMap), T.clearcoatRoughnessMap && (E.clearcoatRoughnessMap.value = T.clearcoatRoughnessMap), T.clearcoatNormalMap && (E.clearcoatNormalScale.value.copy(T.clearcoatNormalScale), E.clearcoatNormalMap.value = T.clearcoatNormalMap, T.side === 1 && E.clearcoatNormalScale.value.negate()), E.transmission.value = T.transmission, T.transmissionMap && (E.transmissionMap.value = T.transmissionMap)
                    }(h, c) : r(h, c)) : c.isMeshMatcapMaterial ? (e(h, c), function(E, T) {
                        T.matcap && (E.matcap.value = T.matcap), T.bumpMap && (E.bumpMap.value = T.bumpMap, E.bumpScale.value = T.bumpScale, T.side === 1 && (E.bumpScale.value *= -1)), T.normalMap && (E.normalMap.value = T.normalMap, E.normalScale.value.copy(T.normalScale), T.side === 1 && E.normalScale.value.negate()), T.displacementMap && (E.displacementMap.value = T.displacementMap, E.displacementScale.value = T.displacementScale, E.displacementBias.value = T.displacementBias)
                    }(h, c)) : c.isMeshDepthMaterial ? (e(h, c), function(E, T) {
                        T.displacementMap && (E.displacementMap.value = T.displacementMap, E.displacementScale.value = T.displacementScale, E.displacementBias.value = T.displacementBias)
                    }(h, c)) : c.isMeshDistanceMaterial ? (e(h, c), function(E, T) {
                        T.displacementMap && (E.displacementMap.value = T.displacementMap, E.displacementScale.value = T.displacementScale, E.displacementBias.value = T.displacementBias), E.referencePosition.value.copy(T.referencePosition), E.nearDistance.value = T.nearDistance, E.farDistance.value = T.farDistance
                    }(h, c)) : c.isMeshNormalMaterial ? (e(h, c), function(E, T) {
                        T.bumpMap && (E.bumpMap.value = T.bumpMap, E.bumpScale.value = T.bumpScale, T.side === 1 && (E.bumpScale.value *= -1)), T.normalMap && (E.normalMap.value = T.normalMap, E.normalScale.value.copy(T.normalScale), T.side === 1 && E.normalScale.value.negate()), T.displacementMap && (E.displacementMap.value = T.displacementMap, E.displacementScale.value = T.displacementScale, E.displacementBias.value = T.displacementBias)
                    }(h, c)) : c.isLineBasicMaterial ? (function(E, T) {
                        E.diffuse.value.copy(T.color), E.opacity.value = T.opacity
                    }(h, c), c.isLineDashedMaterial && function(E, T) {
                        E.dashSize.value = T.dashSize, E.totalSize.value = T.dashSize + T.gapSize, E.scale.value = T.scale
                    }(h, c)) : c.isPointsMaterial ? function(E, T, B, Q) {
                        E.diffuse.value.copy(T.color), E.opacity.value = T.opacity, E.size.value = T.size * B, E.scale.value = .5 * Q, T.map && (E.map.value = T.map), T.alphaMap && (E.alphaMap.value = T.alphaMap);
                        let k;
                        T.map ? k = T.map : T.alphaMap && (k = T.alphaMap), k !== void 0 && (k.matrixAutoUpdate === !0 && k.updateMatrix(), E.uvTransform.value.copy(k.matrix))
                    }(h, c, v, w) : c.isSpriteMaterial ? function(E, T) {
                        E.diffuse.value.copy(T.color), E.opacity.value = T.opacity, E.rotation.value = T.rotation, T.map && (E.map.value = T.map), T.alphaMap && (E.alphaMap.value = T.alphaMap);
                        let B;
                        T.map ? B = T.map : T.alphaMap && (B = T.alphaMap), B !== void 0 && (B.matrixAutoUpdate === !0 && B.updateMatrix(), E.uvTransform.value.copy(B.matrix))
                    }(h, c) : c.isShadowMaterial ? (h.color.value.copy(c.color), h.opacity.value = c.opacity) : c.isShaderMaterial && (c.uniformsNeedUpdate = !1)
                }
            }
        }

        function we(s) {
            const e = (s = s || {}).canvas !== void 0 ? s.canvas : function() {
                    const Ge = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                    return Ge.style.display = "block", Ge
                }(),
                r = s.context !== void 0 ? s.context : null,
                h = s.alpha !== void 0 && s.alpha,
                c = s.depth === void 0 || s.depth,
                v = s.stencil === void 0 || s.stencil,
                w = s.antialias !== void 0 && s.antialias,
                E = s.premultipliedAlpha === void 0 || s.premultipliedAlpha,
                T = s.preserveDrawingBuffer !== void 0 && s.preserveDrawingBuffer,
                B = s.powerPreference !== void 0 ? s.powerPreference : "default",
                Q = s.failIfMajorPerformanceCaveat !== void 0 && s.failIfMajorPerformanceCaveat;
            let k = null,
                i = null;
            const t = [],
                a = [];
            this.domElement = e, this.debug = {
                checkShaderErrors: !0
            }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
            const l = this;
            let d = !1,
                g = 0,
                x = 0,
                A = null,
                M = -1,
                F = null;
            const D = new Si,
                U = new Si;
            let N = null,
                H = e.width,
                X = e.height,
                ne = 1,
                le = null,
                ce = null;
            const Qe = new Si(0, 0, H, X),
                Se = new Si(0, 0, H, X);
            let Re = !1;
            const ot = new Us;
            let dt = !1,
                Ct = !1;
            const Nt = new Ui,
                qt = new ge,
                Fe = {
                    background: null,
                    fog: null,
                    environment: null,
                    overrideMaterial: null,
                    isScene: !0
                };

            function Be() {
                return A === null ? ne : 1
            }
            let mt, lt, Xe, Zt, Ie, pt, xt, Gt, Xt, hi, _i, Di, nn, Fi, tn, gn, Kn, er, ia, oa, tr, jn, fi = r;

            function Yr(Ge, oi) {
                for (let kt = 0; kt < Ge.length; kt++) {
                    const ui = Ge[kt],
                        Ni = e.getContext(ui, oi);
                    if (Ni !== null) return Ni
                }
                return null
            }
            try {
                const Ge = {
                    alpha: h,
                    depth: c,
                    stencil: v,
                    antialias: w,
                    premultipliedAlpha: E,
                    preserveDrawingBuffer: T,
                    powerPreference: B,
                    failIfMajorPerformanceCaveat: Q
                };
                if (e.addEventListener("webglcontextlost", fa, !1), e.addEventListener("webglcontextrestored", qr, !1), fi === null) {
                    const oi = ["webgl2", "webgl", "experimental-webgl"];
                    if (l.isWebGL1Renderer === !0 && oi.shift(), fi = Yr(oi, Ge), fi === null) throw Yr(oi) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
                }
                fi.getShaderPrecisionFormat === void 0 && (fi.getShaderPrecisionFormat = function() {
                    return {
                        rangeMin: 1,
                        rangeMax: 1,
                        precision: 1
                    }
                })
            } catch (Ge) {
                throw console.error("THREE.WebGLRenderer: " + Ge.message), Ge
            }

            function Tn() {
                mt = new Sa(fi), lt = new Ph(fi, mt, s), mt.init(lt), tr = new j(fi, mt, lt), Xe = new I(fi, mt, lt), Zt = new kh, Ie = new Al, pt = new G(fi, mt, Xe, Ie, lt, tr, Zt), xt = new zs(l), Gt = new Hl(fi, lt), jn = new kc(fi, mt, Gt, lt), Xt = new Dc(fi, Gt, Zt, jn), hi = new Zl(fi, Xt, Gt, Zt), er = new Qo(fi), tn = new Sr(Ie), _i = new Xc(l, xt, mt, lt, jn, tn), Di = new ke(Ie), nn = new oc(Ie), Fi = new _(mt, lt), Kn = new Wl(l, xt, Xe, hi, E), gn = new P(l, hi, lt), ia = new Qu(fi, mt, Zt, lt), oa = new Jl(fi, mt, Zt, lt), Zt.programs = _i.programs, l.capabilities = lt, l.extensions = mt, l.properties = Ie, l.renderLists = nn, l.shadowMap = gn, l.state = Xe, l.info = Zt
            }
            Tn();
            const mr = new Me(l, fi);

            function fa(Ge) {
                Ge.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), d = !0
            }

            function qr() {
                console.log("THREE.WebGLRenderer: Context Restored."), d = !1;
                const Ge = Zt.autoReset,
                    oi = gn.enabled,
                    kt = gn.autoUpdate,
                    ui = gn.needsUpdate,
                    Ni = gn.type;
                Tn(), Zt.autoReset = Ge, gn.enabled = oi, gn.autoUpdate = kt, gn.needsUpdate = ui, gn.type = Ni
            }

            function rs(Ge) {
                const oi = Ge.target;
                oi.removeEventListener("dispose", rs),
                    function(kt) {
                        (function(ui) {
                            const Ni = Ie.get(ui).programs;
                            Ni !== void 0 && Ni.forEach(function(Rn) {
                                _i.releaseProgram(Rn)
                            })
                        })(kt), Ie.remove(kt)
                    }(oi)
            }
            this.xr = mr, this.getContext = function() {
                return fi
            }, this.getContextAttributes = function() {
                return fi.getContextAttributes()
            }, this.forceContextLoss = function() {
                const Ge = mt.get("WEBGL_lose_context");
                Ge && Ge.loseContext()
            }, this.forceContextRestore = function() {
                const Ge = mt.get("WEBGL_lose_context");
                Ge && Ge.restoreContext()
            }, this.getPixelRatio = function() {
                return ne
            }, this.setPixelRatio = function(Ge) {
                Ge !== void 0 && (ne = Ge, this.setSize(H, X, !1))
            }, this.getSize = function(Ge) {
                return Ge === void 0 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), Ge = new Ht), Ge.set(H, X)
            }, this.setSize = function(Ge, oi, kt) {
                mr.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (H = Ge, X = oi, e.width = Math.floor(Ge * ne), e.height = Math.floor(oi * ne), kt !== !1 && (e.style.width = Ge + "px", e.style.height = oi + "px"), this.setViewport(0, 0, Ge, oi))
            }, this.getDrawingBufferSize = function(Ge) {
                return Ge === void 0 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), Ge = new Ht), Ge.set(H * ne, X * ne).floor()
            }, this.setDrawingBufferSize = function(Ge, oi, kt) {
                H = Ge, X = oi, ne = kt, e.width = Math.floor(Ge * kt), e.height = Math.floor(oi * kt), this.setViewport(0, 0, Ge, oi)
            }, this.getCurrentViewport = function(Ge) {
                return Ge === void 0 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), Ge = new Si), Ge.copy(D)
            }, this.getViewport = function(Ge) {
                return Ge.copy(Qe)
            }, this.setViewport = function(Ge, oi, kt, ui) {
                Ge.isVector4 ? Qe.set(Ge.x, Ge.y, Ge.z, Ge.w) : Qe.set(Ge, oi, kt, ui), Xe.viewport(D.copy(Qe).multiplyScalar(ne).floor())
            }, this.getScissor = function(Ge) {
                return Ge.copy(Se)
            }, this.setScissor = function(Ge, oi, kt, ui) {
                Ge.isVector4 ? Se.set(Ge.x, Ge.y, Ge.z, Ge.w) : Se.set(Ge, oi, kt, ui), Xe.scissor(U.copy(Se).multiplyScalar(ne).floor())
            }, this.getScissorTest = function() {
                return Re
            }, this.setScissorTest = function(Ge) {
                Xe.setScissorTest(Re = Ge)
            }, this.setOpaqueSort = function(Ge) {
                le = Ge
            }, this.setTransparentSort = function(Ge) {
                ce = Ge
            }, this.getClearColor = function(Ge) {
                return Ge === void 0 && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), Ge = new Rt), Ge.copy(Kn.getClearColor())
            }, this.setClearColor = function() {
                Kn.setClearColor.apply(Kn, arguments)
            }, this.getClearAlpha = function() {
                return Kn.getClearAlpha()
            }, this.setClearAlpha = function() {
                Kn.setClearAlpha.apply(Kn, arguments)
            }, this.clear = function(Ge, oi, kt) {
                let ui = 0;
                (Ge === void 0 || Ge) && (ui |= 16384), (oi === void 0 || oi) && (ui |= 256), (kt === void 0 || kt) && (ui |= 1024), fi.clear(ui)
            }, this.clearColor = function() {
                this.clear(!0, !1, !1)
            }, this.clearDepth = function() {
                this.clear(!1, !0, !1)
            }, this.clearStencil = function() {
                this.clear(!1, !1, !0)
            }, this.dispose = function() {
                e.removeEventListener("webglcontextlost", fa, !1), e.removeEventListener("webglcontextrestored", qr, !1), nn.dispose(), Fi.dispose(), Ie.dispose(), xt.dispose(), hi.dispose(), jn.dispose(), mr.dispose(), mr.removeEventListener("sessionstart", ps), mr.removeEventListener("sessionend", to), ba.stop()
            }, this.renderBufferImmediate = function(Ge, oi) {
                jn.initAttributes();
                const kt = Ie.get(Ge);
                Ge.hasPositions && !kt.position && (kt.position = fi.createBuffer()), Ge.hasNormals && !kt.normal && (kt.normal = fi.createBuffer()), Ge.hasUvs && !kt.uv && (kt.uv = fi.createBuffer()), Ge.hasColors && !kt.color && (kt.color = fi.createBuffer());
                const ui = oi.getAttributes();
                Ge.hasPositions && (fi.bindBuffer(34962, kt.position), fi.bufferData(34962, Ge.positionArray, 35048), jn.enableAttribute(ui.position), fi.vertexAttribPointer(ui.position, 3, 5126, !1, 0, 0)), Ge.hasNormals && (fi.bindBuffer(34962, kt.normal), fi.bufferData(34962, Ge.normalArray, 35048), jn.enableAttribute(ui.normal), fi.vertexAttribPointer(ui.normal, 3, 5126, !1, 0, 0)), Ge.hasUvs && (fi.bindBuffer(34962, kt.uv), fi.bufferData(34962, Ge.uvArray, 35048), jn.enableAttribute(ui.uv), fi.vertexAttribPointer(ui.uv, 2, 5126, !1, 0, 0)), Ge.hasColors && (fi.bindBuffer(34962, kt.color), fi.bufferData(34962, Ge.colorArray, 35048), jn.enableAttribute(ui.color), fi.vertexAttribPointer(ui.color, 3, 5126, !1, 0, 0)), jn.disableUnusedAttributes(), fi.drawArrays(4, 0, Ge.count), Ge.count = 0
            }, this.renderBufferDirect = function(Ge, oi, kt, ui, Ni, Rn) {
                oi === null && (oi = Fe);
                const En = Ni.isMesh && Ni.matrixWorld.determinant() < 0,
                    In = Bu(Ge, oi, ui, Ni);
                Xe.setMaterial(ui, En);
                let ir = kt.index;
                const Sn = kt.attributes.position;
                if (ir === null) {
                    if (Sn === void 0 || Sn.count === 0) return
                } else if (ir.count === 0) return;
                let nr, bn = 1;
                ui.wireframe === !0 && (ir = Xt.getWireframeAttribute(kt), bn = 2), (ui.morphTargets || ui.morphNormals) && er.update(Ni, kt, ui, In), jn.setup(Ni, ui, In, kt, ir);
                let zn = ia;
                ir !== null && (nr = Gt.get(ir), zn = oa, zn.setIndex(nr));
                const ss = ir !== null ? ir.count : Sn.count,
                    Ur = kt.drawRange.start * bn,
                    Ul = kt.drawRange.count * bn,
                    ma = Rn !== null ? Rn.start * bn : 0,
                    Il = Rn !== null ? Rn.count * bn : 1 / 0,
                    Yn = Math.max(Ur, ma),
                    Rr = Math.min(ss, Ur + Ul, ma + Il) - 1,
                    xr = Math.max(0, Rr - Yn + 1);
                if (xr !== 0) {
                    if (Ni.isMesh) ui.wireframe === !0 ? (Xe.setLineWidth(ui.wireframeLinewidth * Be()), zn.setMode(1)) : zn.setMode(4);
                    else if (Ni.isLine) {
                        let Ba = ui.linewidth;
                        Ba === void 0 && (Ba = 1), Xe.setLineWidth(Ba * Be()), Ni.isLineSegments ? zn.setMode(1) : Ni.isLineLoop ? zn.setMode(2) : zn.setMode(3)
                    } else Ni.isPoints ? zn.setMode(0) : Ni.isSprite && zn.setMode(4);
                    if (Ni.isInstancedMesh) zn.renderInstances(Yn, xr, Ni.count);
                    else if (kt.isInstancedBufferGeometry) {
                        const Ba = Math.min(kt.instanceCount, kt._maxInstanceCount);
                        zn.renderInstances(Yn, xr, Ba)
                    } else zn.render(Yn, xr)
                }
            }, this.compile = function(Ge, oi) {
                i = Fi.get(Ge), i.init(), Ge.traverseVisible(function(kt) {
                    kt.isLight && kt.layers.test(oi.layers) && (i.pushLight(kt), kt.castShadow && i.pushShadow(kt))
                }), i.setupLights(), Ge.traverse(function(kt) {
                    const ui = kt.material;
                    if (ui)
                        if (Array.isArray(ui))
                            for (let Ni = 0; Ni < ui.length; Ni++) Dl(ui[Ni], Ge, kt);
                        else Dl(ui, Ge, kt)
                })
            };
            let as = null;

            function ps() {
                ba.stop()
            }

            function to() {
                ba.start()
            }
            const ba = new Pc;

            function Za(Ge, oi, kt, ui) {
                if (Ge.visible === !1) return;
                if (Ge.layers.test(oi.layers)) {
                    if (Ge.isGroup) kt = Ge.renderOrder;
                    else if (Ge.isLOD) Ge.autoUpdate === !0 && Ge.update(oi);
                    else if (Ge.isLight) i.pushLight(Ge), Ge.castShadow && i.pushShadow(Ge);
                    else if (Ge.isSprite) {
                        if (!Ge.frustumCulled || ot.intersectsSprite(Ge)) {
                            ui && qt.setFromMatrixPosition(Ge.matrixWorld).applyMatrix4(Nt);
                            const Rn = hi.update(Ge),
                                En = Ge.material;
                            En.visible && k.push(Ge, Rn, En, kt, qt.z, null)
                        }
                    } else if (Ge.isImmediateRenderObject) ui && qt.setFromMatrixPosition(Ge.matrixWorld).applyMatrix4(Nt), k.push(Ge, null, Ge.material, kt, qt.z, null);
                    else if ((Ge.isMesh || Ge.isLine || Ge.isPoints) && (Ge.isSkinnedMesh && Ge.skeleton.frame !== Zt.render.frame && (Ge.skeleton.update(), Ge.skeleton.frame = Zt.render.frame), !Ge.frustumCulled || ot.intersectsObject(Ge))) {
                        ui && qt.setFromMatrixPosition(Ge.matrixWorld).applyMatrix4(Nt);
                        const Rn = hi.update(Ge),
                            En = Ge.material;
                        if (Array.isArray(En)) {
                            const In = Rn.groups;
                            for (let ir = 0, Sn = In.length; ir < Sn; ir++) {
                                const nr = In[ir],
                                    bn = En[nr.materialIndex];
                                bn && bn.visible && k.push(Ge, Rn, bn, kt, qt.z, nr)
                            }
                        } else En.visible && k.push(Ge, Rn, En, kt, qt.z, null)
                    }
                }
                const Ni = Ge.children;
                for (let Rn = 0, En = Ni.length; Rn < En; Rn++) Za(Ni[Rn], oi, kt, ui)
            }

            function Pa(Ge, oi, kt) {
                const ui = oi.isScene === !0 ? oi.overrideMaterial : null;
                for (let Ni = 0, Rn = Ge.length; Ni < Rn; Ni++) {
                    const En = Ge[Ni],
                        In = En.object,
                        ir = En.geometry,
                        Sn = ui === null ? En.material : ui,
                        nr = En.group;
                    if (kt.isArrayCamera) {
                        const bn = kt.cameras;
                        for (let zn = 0, ss = bn.length; zn < ss; zn++) {
                            const Ur = bn[zn];
                            In.layers.test(Ur.layers) && (Xe.viewport(D.copy(Ur.viewport)), i.setupLightsView(Ur), io(In, oi, Ur, ir, Sn, nr))
                        }
                    } else io(In, oi, kt, ir, Sn, nr)
                }
            }

            function io(Ge, oi, kt, ui, Ni, Rn) {
                if (Ge.onBeforeRender(l, oi, kt, ui, Ni, Rn), Ge.modelViewMatrix.multiplyMatrices(kt.matrixWorldInverse, Ge.matrixWorld), Ge.normalMatrix.getNormalMatrix(Ge.modelViewMatrix), Ge.isImmediateRenderObject) {
                    const En = Bu(kt, oi, Ni, Ge);
                    Xe.setMaterial(Ni), jn.reset(),
                        function(In, ir) {
                            In.render(function(Sn) {
                                l.renderBufferImmediate(Sn, ir)
                            })
                        }(Ge, En)
                } else l.renderBufferDirect(kt, oi, ui, Ni, Ge, Rn);
                Ge.onAfterRender(l, oi, kt, ui, Ni, Rn)
            }

            function Dl(Ge, oi, kt) {
                oi.isScene !== !0 && (oi = Fe);
                const ui = Ie.get(Ge),
                    Ni = i.state.lights,
                    Rn = i.state.shadowsArray,
                    En = Ni.state.version,
                    In = _i.getParameters(Ge, Ni.state, Rn, oi, kt),
                    ir = _i.getProgramCacheKey(In);
                let Sn = ui.programs;
                ui.environment = Ge.isMeshStandardMaterial ? oi.environment : null, ui.fog = oi.fog, ui.envMap = xt.get(Ge.envMap || ui.environment), Sn === void 0 && (Ge.addEventListener("dispose", rs), Sn = new Map, ui.programs = Sn);
                let nr = Sn.get(ir);
                if (nr !== void 0) {
                    if (ui.currentProgram === nr && ui.lightsStateVersion === En) return Ld(Ge, In), nr
                } else In.uniforms = _i.getUniforms(Ge), Ge.onBeforeCompile(In, l), nr = _i.acquireProgram(In, ir), Sn.set(ir, nr), ui.uniforms = In.uniforms;
                const bn = ui.uniforms;
                (Ge.isShaderMaterial || Ge.isRawShaderMaterial) && Ge.clipping !== !0 || (bn.clippingPlanes = tn.uniform), Ld(Ge, In), ui.needsLights = function(Ur) {
                    return Ur.isMeshLambertMaterial || Ur.isMeshToonMaterial || Ur.isMeshPhongMaterial || Ur.isMeshStandardMaterial || Ur.isShadowMaterial || Ur.isShaderMaterial && Ur.lights === !0
                }(Ge), ui.lightsStateVersion = En, ui.needsLights && (bn.ambientLightColor.value = Ni.state.ambient, bn.lightProbe.value = Ni.state.probe, bn.directionalLights.value = Ni.state.directional, bn.directionalLightShadows.value = Ni.state.directionalShadow, bn.spotLights.value = Ni.state.spot, bn.spotLightShadows.value = Ni.state.spotShadow, bn.rectAreaLights.value = Ni.state.rectArea, bn.ltc_1.value = Ni.state.rectAreaLTC1, bn.ltc_2.value = Ni.state.rectAreaLTC2, bn.pointLights.value = Ni.state.point, bn.pointLightShadows.value = Ni.state.pointShadow, bn.hemisphereLights.value = Ni.state.hemi, bn.directionalShadowMap.value = Ni.state.directionalShadowMap, bn.directionalShadowMatrix.value = Ni.state.directionalShadowMatrix, bn.spotShadowMap.value = Ni.state.spotShadowMap, bn.spotShadowMatrix.value = Ni.state.spotShadowMatrix, bn.pointShadowMap.value = Ni.state.pointShadowMap, bn.pointShadowMatrix.value = Ni.state.pointShadowMatrix);
                const zn = nr.getUniforms(),
                    ss = Vs.seqWithValue(zn.seq, bn);
                return ui.currentProgram = nr, ui.uniformsList = ss, nr
            }

            function Ld(Ge, oi) {
                const kt = Ie.get(Ge);
                kt.outputEncoding = oi.outputEncoding, kt.instancing = oi.instancing, kt.numClippingPlanes = oi.numClippingPlanes, kt.numIntersection = oi.numClipIntersection, kt.vertexAlphas = oi.vertexAlphas
            }

            function Bu(Ge, oi, kt, ui) {
                oi.isScene !== !0 && (oi = Fe), pt.resetTextureUnits();
                const Ni = oi.fog,
                    Rn = kt.isMeshStandardMaterial ? oi.environment : null,
                    En = A === null ? l.outputEncoding : A.texture.encoding,
                    In = xt.get(kt.envMap || Rn),
                    ir = kt.vertexColors === !0 && ui.geometry.attributes.color && ui.geometry.attributes.color.itemSize === 4,
                    Sn = Ie.get(kt),
                    nr = i.state.lights;
                if (dt === !0 && (Ct === !0 || Ge !== F)) {
                    const xr = Ge === F && kt.id === M;
                    tn.setState(kt, Ge, xr)
                }
                let bn = !1;
                kt.version === Sn.__version ? Sn.needsLights && Sn.lightsStateVersion !== nr.state.version || Sn.outputEncoding !== En || ui.isInstancedMesh && Sn.instancing === !1 ? bn = !0 : ui.isInstancedMesh || Sn.instancing !== !0 ? Sn.envMap !== In || kt.fog && Sn.fog !== Ni ? bn = !0 : Sn.numClippingPlanes === void 0 || Sn.numClippingPlanes === tn.numPlanes && Sn.numIntersection === tn.numIntersection ? Sn.vertexAlphas !== ir && (bn = !0) : bn = !0 : bn = !0 : (bn = !0, Sn.__version = kt.version);
                let zn = Sn.currentProgram;
                bn === !0 && (zn = Dl(kt, oi, ui));
                let ss = !1,
                    Ur = !1,
                    Ul = !1;
                const ma = zn.getUniforms(),
                    Il = Sn.uniforms;
                if (Xe.useProgram(zn.program) && (ss = !0, Ur = !0, Ul = !0), kt.id !== M && (M = kt.id, Ur = !0), ss || F !== Ge) {
                    if (ma.setValue(fi, "projectionMatrix", Ge.projectionMatrix), lt.logarithmicDepthBuffer && ma.setValue(fi, "logDepthBufFC", 2 / (Math.log(Ge.far + 1) / Math.LN2)), F !== Ge && (F = Ge, Ur = !0, Ul = !0), kt.isShaderMaterial || kt.isMeshPhongMaterial || kt.isMeshToonMaterial || kt.isMeshStandardMaterial || kt.envMap) {
                        const xr = ma.map.cameraPosition;
                        xr !== void 0 && xr.setValue(fi, qt.setFromMatrixPosition(Ge.matrixWorld))
                    }(kt.isMeshPhongMaterial || kt.isMeshToonMaterial || kt.isMeshLambertMaterial || kt.isMeshBasicMaterial || kt.isMeshStandardMaterial || kt.isShaderMaterial) && ma.setValue(fi, "isOrthographic", Ge.isOrthographicCamera === !0), (kt.isMeshPhongMaterial || kt.isMeshToonMaterial || kt.isMeshLambertMaterial || kt.isMeshBasicMaterial || kt.isMeshStandardMaterial || kt.isShaderMaterial || kt.isShadowMaterial || kt.skinning) && ma.setValue(fi, "viewMatrix", Ge.matrixWorldInverse)
                }
                if (kt.skinning) {
                    ma.setOptional(fi, ui, "bindMatrix"), ma.setOptional(fi, ui, "bindMatrixInverse");
                    const xr = ui.skeleton;
                    if (xr) {
                        const Ba = xr.bones;
                        if (lt.floatVertexTextures) {
                            if (xr.boneTexture === null) {
                                let Oa = Math.sqrt(4 * Ba.length);
                                Oa = Mi.ceilPowerOfTwo(Oa), Oa = Math.max(Oa, 4);
                                const fs = new Float32Array(Oa * Oa * 4);
                                fs.set(xr.boneMatrices);
                                const jf = new ws(fs, Oa, Oa, 1023, 1015);
                                xr.boneMatrices = fs, xr.boneTexture = jf, xr.boneTextureSize = Oa
                            }
                            ma.setValue(fi, "boneTexture", xr.boneTexture, pt), ma.setValue(fi, "boneTextureSize", xr.boneTextureSize)
                        } else ma.setOptional(fi, xr, "boneMatrices")
                    }
                }
                var Yn, Rr;
                return (Ur || Sn.receiveShadow !== ui.receiveShadow) && (Sn.receiveShadow = ui.receiveShadow, ma.setValue(fi, "receiveShadow", ui.receiveShadow)), Ur && (ma.setValue(fi, "toneMappingExposure", l.toneMappingExposure), Sn.needsLights && (Rr = Ul, (Yn = Il).ambientLightColor.needsUpdate = Rr, Yn.lightProbe.needsUpdate = Rr, Yn.directionalLights.needsUpdate = Rr, Yn.directionalLightShadows.needsUpdate = Rr, Yn.pointLights.needsUpdate = Rr, Yn.pointLightShadows.needsUpdate = Rr, Yn.spotLights.needsUpdate = Rr, Yn.spotLightShadows.needsUpdate = Rr, Yn.rectAreaLights.needsUpdate = Rr, Yn.hemisphereLights.needsUpdate = Rr), Ni && kt.fog && Di.refreshFogUniforms(Il, Ni), Di.refreshMaterialUniforms(Il, kt, ne, X), Vs.upload(fi, Sn.uniformsList, Il, pt)), kt.isShaderMaterial && kt.uniformsNeedUpdate === !0 && (Vs.upload(fi, Sn.uniformsList, Il, pt), kt.uniformsNeedUpdate = !1), kt.isSpriteMaterial && ma.setValue(fi, "center", ui.center), ma.setValue(fi, "modelViewMatrix", ui.modelViewMatrix), ma.setValue(fi, "normalMatrix", ui.normalMatrix), ma.setValue(fi, "modelMatrix", ui.matrixWorld), zn
            }
            ba.setAnimationLoop(function(Ge) {
                as && as(Ge)
            }), typeof window != "undefined" && ba.setContext(window), this.setAnimationLoop = function(Ge) {
                as = Ge, mr.setAnimationLoop(Ge), Ge === null ? ba.stop() : ba.start()
            }, mr.addEventListener("sessionstart", ps), mr.addEventListener("sessionend", to), this.render = function(Ge, oi) {
                let kt, ui;
                if (arguments[2] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), kt = arguments[2]), arguments[3] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), ui = arguments[3]), oi !== void 0 && oi.isCamera !== !0) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                if (d === !0) return;
                Ge.autoUpdate === !0 && Ge.updateMatrixWorld(), oi.parent === null && oi.updateMatrixWorld(), mr.enabled === !0 && mr.isPresenting === !0 && (oi = mr.getCamera(oi)), Ge.isScene === !0 && Ge.onBeforeRender(l, Ge, oi, kt || A), i = Fi.get(Ge, a.length), i.init(), a.push(i), Nt.multiplyMatrices(oi.projectionMatrix, oi.matrixWorldInverse), ot.setFromProjectionMatrix(Nt), Ct = this.localClippingEnabled, dt = tn.init(this.clippingPlanes, Ct, oi), k = nn.get(Ge, t.length), k.init(), t.push(k), Za(Ge, oi, 0, l.sortObjects), k.finish(), l.sortObjects === !0 && k.sort(le, ce), dt === !0 && tn.beginShadows();
                const Ni = i.state.shadowsArray;
                gn.render(Ni, Ge, oi), i.setupLights(), i.setupLightsView(oi), dt === !0 && tn.endShadows(), this.info.autoReset === !0 && this.info.reset(), kt !== void 0 && this.setRenderTarget(kt), Kn.render(k, Ge, oi, ui);
                const Rn = k.opaque,
                    En = k.transparent;
                Rn.length > 0 && Pa(Rn, Ge, oi), En.length > 0 && Pa(En, Ge, oi), A !== null && (pt.updateRenderTargetMipmap(A), pt.updateMultisampleRenderTarget(A)), Ge.isScene === !0 && Ge.onAfterRender(l, Ge, oi), Xe.buffers.depth.setTest(!0), Xe.buffers.depth.setMask(!0), Xe.buffers.color.setMask(!0), Xe.setPolygonOffset(!1), jn.resetDefaultState(), M = -1, F = null, a.pop(), i = a.length > 0 ? a[a.length - 1] : null, t.pop(), k = t.length > 0 ? t[t.length - 1] : null
            }, this.getActiveCubeFace = function() {
                return g
            }, this.getActiveMipmapLevel = function() {
                return x
            }, this.getRenderTarget = function() {
                return A
            }, this.setRenderTarget = function(Ge, oi = 0, kt = 0) {
                A = Ge, g = oi, x = kt, Ge && Ie.get(Ge).__webglFramebuffer === void 0 && pt.setupRenderTarget(Ge);
                let ui = null,
                    Ni = !1,
                    Rn = !1;
                if (Ge) {
                    const En = Ge.texture;
                    (En.isDataTexture3D || En.isDataTexture2DArray) && (Rn = !0);
                    const In = Ie.get(Ge).__webglFramebuffer;
                    Ge.isWebGLCubeRenderTarget ? (ui = In[oi], Ni = !0) : ui = Ge.isWebGLMultisampleRenderTarget ? Ie.get(Ge).__webglMultisampledFramebuffer : In, D.copy(Ge.viewport), U.copy(Ge.scissor), N = Ge.scissorTest
                } else D.copy(Qe).multiplyScalar(ne).floor(), U.copy(Se).multiplyScalar(ne).floor(), N = Re;
                if (Xe.bindFramebuffer(36160, ui), Xe.viewport(D), Xe.scissor(U), Xe.setScissorTest(N), Ni) {
                    const En = Ie.get(Ge.texture);
                    fi.framebufferTexture2D(36160, 36064, 34069 + oi, En.__webglTexture, kt)
                } else if (Rn) {
                    const En = Ie.get(Ge.texture),
                        In = oi || 0;
                    fi.framebufferTextureLayer(36160, 36064, En.__webglTexture, kt || 0, In)
                }
            }, this.readRenderTargetPixels = function(Ge, oi, kt, ui, Ni, Rn, En) {
                if (!Ge || !Ge.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                let In = Ie.get(Ge).__webglFramebuffer;
                if (Ge.isWebGLCubeRenderTarget && En !== void 0 && (In = In[En]), In) {
                    Xe.bindFramebuffer(36160, In);
                    try {
                        const ir = Ge.texture,
                            Sn = ir.format,
                            nr = ir.type;
                        if (Sn !== 1023 && tr.convert(Sn) !== fi.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        const bn = nr === 1016 && (mt.has("EXT_color_buffer_half_float") || lt.isWebGL2 && mt.has("EXT_color_buffer_float"));
                        if (!(nr === 1009 || tr.convert(nr) === fi.getParameter(35738) || nr === 1015 && (lt.isWebGL2 || mt.has("OES_texture_float") || mt.has("WEBGL_color_buffer_float")) || bn)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        fi.checkFramebufferStatus(36160) === 36053 ? oi >= 0 && oi <= Ge.width - ui && kt >= 0 && kt <= Ge.height - Ni && fi.readPixels(oi, kt, ui, Ni, tr.convert(Sn), tr.convert(nr), Rn) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        const ir = A !== null ? Ie.get(A).__webglFramebuffer : null;
                        Xe.bindFramebuffer(36160, ir)
                    }
                }
            }, this.copyFramebufferToTexture = function(Ge, oi, kt = 0) {
                const ui = Math.pow(2, -kt),
                    Ni = Math.floor(oi.image.width * ui),
                    Rn = Math.floor(oi.image.height * ui),
                    En = tr.convert(oi.format);
                pt.setTexture2D(oi, 0), fi.copyTexImage2D(3553, kt, En, Ge.x, Ge.y, Ni, Rn, 0), Xe.unbindTexture()
            }, this.copyTextureToTexture = function(Ge, oi, kt, ui = 0) {
                const Ni = oi.image.width,
                    Rn = oi.image.height,
                    En = tr.convert(kt.format),
                    In = tr.convert(kt.type);
                pt.setTexture2D(kt, 0), fi.pixelStorei(37440, kt.flipY), fi.pixelStorei(37441, kt.premultiplyAlpha), fi.pixelStorei(3317, kt.unpackAlignment), oi.isDataTexture ? fi.texSubImage2D(3553, ui, Ge.x, Ge.y, Ni, Rn, En, In, oi.image.data) : oi.isCompressedTexture ? fi.compressedTexSubImage2D(3553, ui, Ge.x, Ge.y, oi.mipmaps[0].width, oi.mipmaps[0].height, En, oi.mipmaps[0].data) : fi.texSubImage2D(3553, ui, Ge.x, Ge.y, En, In, oi.image), ui === 0 && kt.generateMipmaps && fi.generateMipmap(3553), Xe.unbindTexture()
            }, this.copyTextureToTexture3D = function(Ge, oi, kt, ui, Ni = 0) {
                if (l.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                const {
                    width: Rn,
                    height: En,
                    data: In
                } = kt.image, ir = tr.convert(ui.format), Sn = tr.convert(ui.type);
                let nr;
                if (ui.isDataTexture3D) pt.setTexture3D(ui, 0), nr = 32879;
                else {
                    if (!ui.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                    pt.setTexture2DArray(ui, 0), nr = 35866
                }
                fi.pixelStorei(37440, ui.flipY), fi.pixelStorei(37441, ui.premultiplyAlpha), fi.pixelStorei(3317, ui.unpackAlignment);
                const bn = fi.getParameter(3314),
                    zn = fi.getParameter(32878),
                    ss = fi.getParameter(3316),
                    Ur = fi.getParameter(3315),
                    Ul = fi.getParameter(32877);
                fi.pixelStorei(3314, Rn), fi.pixelStorei(32878, En), fi.pixelStorei(3316, Ge.min.x), fi.pixelStorei(3315, Ge.min.y), fi.pixelStorei(32877, Ge.min.z), fi.texSubImage3D(nr, Ni, oi.x, oi.y, oi.z, Ge.max.x - Ge.min.x + 1, Ge.max.y - Ge.min.y + 1, Ge.max.z - Ge.min.z + 1, ir, Sn, In), fi.pixelStorei(3314, bn), fi.pixelStorei(32878, zn), fi.pixelStorei(3316, ss), fi.pixelStorei(3315, Ur), fi.pixelStorei(32877, Ul), Ni === 0 && ui.generateMipmaps && fi.generateMipmap(nr), Xe.unbindTexture()
            }, this.initTexture = function(Ge) {
                pt.setTexture2D(Ge, 0), Xe.unbindTexture()
            }, this.resetState = function() {
                g = 0, x = 0, A = null, Xe.reset(), jn.reset()
            }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }))
        }
        pe.prototype.isGroup = !0, Object.assign(Ce.prototype, {
            constructor: Ce,
            getHandSpace: function() {
                return this._hand === null && (this._hand = new pe, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                    pinching: !1
                }), this._hand
            },
            getTargetRaySpace: function() {
                return this._targetRay === null && (this._targetRay = new pe, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay
            },
            getGripSpace: function() {
                return this._grip === null && (this._grip = new pe, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip
            },
            dispatchEvent: function(s) {
                return this._targetRay !== null && this._targetRay.dispatchEvent(s), this._grip !== null && this._grip.dispatchEvent(s), this._hand !== null && this._hand.dispatchEvent(s), this
            },
            disconnect: function(s) {
                return this.dispatchEvent({
                    type: "disconnected",
                    data: s
                }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this
            },
            update: function(s, e, r) {
                let h = null,
                    c = null,
                    v = null;
                const w = this._targetRay,
                    E = this._grip,
                    T = this._hand;
                if (s && e.session.visibilityState !== "visible-blurred")
                    if (w !== null && (h = e.getPose(s.targetRaySpace, r), h !== null && (w.matrix.fromArray(h.transform.matrix), w.matrix.decompose(w.position, w.rotation, w.scale))), T && s.hand) {
                        v = !0;
                        for (const a of s.hand.values()) {
                            const l = e.getJointPose(a, r);
                            if (T.joints[a.jointName] === void 0) {
                                const g = new pe;
                                g.matrixAutoUpdate = !1, g.visible = !1, T.joints[a.jointName] = g, T.add(g)
                            }
                            const d = T.joints[a.jointName];
                            l !== null && (d.matrix.fromArray(l.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.jointRadius = l.radius), d.visible = l !== null
                        }
                        const B = T.joints["index-finger-tip"],
                            Q = T.joints["thumb-tip"],
                            k = B.position.distanceTo(Q.position),
                            i = .02,
                            t = .005;
                        T.inputState.pinching && k > i + t ? (T.inputState.pinching = !1, this.dispatchEvent({
                            type: "pinchend",
                            handedness: s.handedness,
                            target: this
                        })) : !T.inputState.pinching && k <= i - t && (T.inputState.pinching = !0, this.dispatchEvent({
                            type: "pinchstart",
                            handedness: s.handedness,
                            target: this
                        }))
                    } else E !== null && s.gripSpace && (c = e.getPose(s.gripSpace, r), c !== null && (E.matrix.fromArray(c.transform.matrix), E.matrix.decompose(E.position, E.rotation, E.scale)));
                return w !== null && (w.visible = h !== null), E !== null && (E.visible = c !== null), T !== null && (T.visible = v !== null), this
            }
        }), Object.assign(Me.prototype, yn.prototype);
        class nt extends we {}
        nt.prototype.isWebGL1Renderer = !0;
        class bt {
            constructor(e, r = 25e-5) {
                this.name = "", this.color = new Rt(e), this.density = r
            }
            clone() {
                return new bt(this.color, this.density)
            }
            toJSON() {
                return {
                    type: "FogExp2",
                    color: this.color.getHex(),
                    density: this.density
                }
            }
        }
        bt.prototype.isFogExp2 = !0;
        class ze {
            constructor(e, r = 1, h = 1e3) {
                this.name = "", this.color = new Rt(e), this.near = r, this.far = h
            }
            clone() {
                return new ze(this.color, this.near, this.far)
            }
            toJSON() {
                return {
                    type: "Fog",
                    color: this.color.getHex(),
                    near: this.near,
                    far: this.far
                }
            }
        }
        ze.prototype.isFog = !0;
        class ut extends Z {
            constructor() {
                super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                    detail: this
                }))
            }
            copy(e, r) {
                return super.copy(e, r), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
            }
            toJSON(e) {
                const r = super.toJSON(e);
                return this.background !== null && (r.object.background = this.background.toJSON(e)), this.environment !== null && (r.object.environment = this.environment.toJSON(e)), this.fog !== null && (r.object.fog = this.fog.toJSON()), r
            }
        }

        function St(s, e) {
            this.array = s, this.stride = e, this.count = s !== void 0 ? s.length / e : 0, this.usage = 35044, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0, this.uuid = Mi.generateUUID()
        }
        ut.prototype.isScene = !0, Object.defineProperty(St.prototype, "needsUpdate", {
            set: function(s) {
                s === !0 && this.version++
            }
        }), Object.assign(St.prototype, {
            isInterleavedBuffer: !0,
            onUploadCallback: function() {},
            setUsage: function(s) {
                return this.usage = s, this
            },
            copy: function(s) {
                return this.array = new s.array.constructor(s.array), this.count = s.count, this.stride = s.stride, this.usage = s.usage, this
            },
            copyAt: function(s, e, r) {
                s *= this.stride, r *= e.stride;
                for (let h = 0, c = this.stride; h < c; h++) this.array[s + h] = e.array[r + h];
                return this
            },
            set: function(s, e = 0) {
                return this.array.set(s, e), this
            },
            clone: function(s) {
                s.arrayBuffers === void 0 && (s.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Mi.generateUUID()), s.arrayBuffers[this.array.buffer._uuid] === void 0 && (s.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
                const e = new St(new this.array.constructor(s.arrayBuffers[this.array.buffer._uuid]), this.stride);
                return e.setUsage(this.usage), e
            },
            onUpload: function(s) {
                return this.onUploadCallback = s, this
            },
            toJSON: function(s) {
                return s.arrayBuffers === void 0 && (s.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Mi.generateUUID()), s.arrayBuffers[this.array.buffer._uuid] === void 0 && (s.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
                    uuid: this.uuid,
                    buffer: this.array.buffer._uuid,
                    type: this.array.constructor.name,
                    stride: this.stride
                }
            }
        });
        const yt = new ge;

        function Vt(s, e, r, h) {
            this.name = "", this.data = s, this.itemSize = e, this.offset = r, this.normalized = h === !0
        }
        Object.defineProperties(Vt.prototype, {
            count: {
                get: function() {
                    return this.data.count
                }
            },
            array: {
                get: function() {
                    return this.data.array
                }
            },
            needsUpdate: {
                set: function(s) {
                    this.data.needsUpdate = s
                }
            }
        }), Object.assign(Vt.prototype, {
            isInterleavedBufferAttribute: !0,
            applyMatrix4: function(s) {
                for (let e = 0, r = this.data.count; e < r; e++) yt.x = this.getX(e), yt.y = this.getY(e), yt.z = this.getZ(e), yt.applyMatrix4(s), this.setXYZ(e, yt.x, yt.y, yt.z);
                return this
            },
            applyNormalMatrix: function(s) {
                for (let e = 0, r = this.count; e < r; e++) yt.x = this.getX(e), yt.y = this.getY(e), yt.z = this.getZ(e), yt.applyNormalMatrix(s), this.setXYZ(e, yt.x, yt.y, yt.z);
                return this
            },
            transformDirection: function(s) {
                for (let e = 0, r = this.count; e < r; e++) yt.x = this.getX(e), yt.y = this.getY(e), yt.z = this.getZ(e), yt.transformDirection(s), this.setXYZ(e, yt.x, yt.y, yt.z);
                return this
            },
            setX: function(s, e) {
                return this.data.array[s * this.data.stride + this.offset] = e, this
            },
            setY: function(s, e) {
                return this.data.array[s * this.data.stride + this.offset + 1] = e, this
            },
            setZ: function(s, e) {
                return this.data.array[s * this.data.stride + this.offset + 2] = e, this
            },
            setW: function(s, e) {
                return this.data.array[s * this.data.stride + this.offset + 3] = e, this
            },
            getX: function(s) {
                return this.data.array[s * this.data.stride + this.offset]
            },
            getY: function(s) {
                return this.data.array[s * this.data.stride + this.offset + 1]
            },
            getZ: function(s) {
                return this.data.array[s * this.data.stride + this.offset + 2]
            },
            getW: function(s) {
                return this.data.array[s * this.data.stride + this.offset + 3]
            },
            setXY: function(s, e, r) {
                return s = s * this.data.stride + this.offset, this.data.array[s + 0] = e, this.data.array[s + 1] = r, this
            },
            setXYZ: function(s, e, r, h) {
                return s = s * this.data.stride + this.offset, this.data.array[s + 0] = e, this.data.array[s + 1] = r, this.data.array[s + 2] = h, this
            },
            setXYZW: function(s, e, r, h, c) {
                return s = s * this.data.stride + this.offset, this.data.array[s + 0] = e, this.data.array[s + 1] = r, this.data.array[s + 2] = h, this.data.array[s + 3] = c, this
            },
            clone: function(s) {
                if (s === void 0) {
                    console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
                    const e = [];
                    for (let r = 0; r < this.count; r++) {
                        const h = r * this.data.stride + this.offset;
                        for (let c = 0; c < this.itemSize; c++) e.push(this.data.array[h + c])
                    }
                    return new pi(new this.array.constructor(e), this.itemSize, this.normalized)
                }
                return s.interleavedBuffers === void 0 && (s.interleavedBuffers = {}), s.interleavedBuffers[this.data.uuid] === void 0 && (s.interleavedBuffers[this.data.uuid] = this.data.clone(s)), new Vt(s.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
            },
            toJSON: function(s) {
                if (s === void 0) {
                    console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
                    const e = [];
                    for (let r = 0; r < this.count; r++) {
                        const h = r * this.data.stride + this.offset;
                        for (let c = 0; c < this.itemSize; c++) e.push(this.data.array[h + c])
                    }
                    return {
                        itemSize: this.itemSize,
                        type: this.array.constructor.name,
                        array: e,
                        normalized: this.normalized
                    }
                }
                return s.interleavedBuffers === void 0 && (s.interleavedBuffers = {}), s.interleavedBuffers[this.data.uuid] === void 0 && (s.interleavedBuffers[this.data.uuid] = this.data.toJSON(s)), {
                    isInterleavedBufferAttribute: !0,
                    itemSize: this.itemSize,
                    data: this.data.uuid,
                    offset: this.offset,
                    normalized: this.normalized
                }
            }
        });
        class ci extends ti {
            constructor(e) {
                super(), this.type = "SpriteMaterial", this.color = new Rt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
            }
        }
        let $t;
        ci.prototype.isSpriteMaterial = !0;
        const gi = new ge,
            Ri = new ge,
            Ki = new ge,
            wi = new Ht,
            $i = new Ht,
            Vi = new Ui,
            Jn = new ge,
            xn = new ge,
            mn = new ge,
            wn = new Ht,
            Tr = new Ht,
            Hn = new Ht;
        class sa extends Z {
            constructor(e) {
                if (super(), this.type = "Sprite", $t === void 0) {
                    $t = new an;
                    const r = new St(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
                    $t.setIndex([0, 1, 2, 0, 2, 3]), $t.setAttribute("position", new Vt(r, 3, 0, !1)), $t.setAttribute("uv", new Vt(r, 2, 3, !1))
                }
                this.geometry = $t, this.material = e !== void 0 ? e : new ci, this.center = new Ht(.5, .5)
            }
            raycast(e, r) {
                e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ri.setFromMatrixScale(this.matrixWorld), Vi.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ki.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Ri.multiplyScalar(-Ki.z);
                const h = this.material.rotation;
                let c, v;
                h !== 0 && (v = Math.cos(h), c = Math.sin(h));
                const w = this.center;
                Gr(Jn.set(-.5, -.5, 0), Ki, w, Ri, c, v), Gr(xn.set(.5, -.5, 0), Ki, w, Ri, c, v), Gr(mn.set(.5, .5, 0), Ki, w, Ri, c, v), wn.set(0, 0), Tr.set(1, 0), Hn.set(1, 1);
                let E = e.ray.intersectTriangle(Jn, xn, mn, !1, gi);
                if (E === null && (Gr(xn.set(-.5, .5, 0), Ki, w, Ri, c, v), Tr.set(0, 1), E = e.ray.intersectTriangle(Jn, mn, xn, !1, gi), E === null)) return;
                const T = e.ray.origin.distanceTo(gi);
                T < e.near || T > e.far || r.push({
                    distance: T,
                    point: gi.clone(),
                    uv: Mt.getUV(gi, Jn, xn, mn, wn, Tr, Hn, new Ht),
                    face: null,
                    object: this
                })
            }
            copy(e) {
                return super.copy(e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this
            }
        }

        function Gr(s, e, r, h, c, v) {
            wi.subVectors(s, r).addScalar(.5).multiply(h), c !== void 0 ? ($i.x = v * wi.x - c * wi.y, $i.y = c * wi.x + v * wi.y) : $i.copy(wi), s.copy(e), s.x += $i.x, s.y += $i.y, s.applyMatrix4(Vi)
        }
        sa.prototype.isSprite = !0;
        const hr = new ge,
            da = new ge;
        class pa extends Z {
            constructor() {
                super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
                    levels: {
                        enumerable: !0,
                        value: []
                    },
                    isLOD: {
                        value: !0
                    }
                }), this.autoUpdate = !0
            }
            copy(e) {
                super.copy(e, !1);
                const r = e.levels;
                for (let h = 0, c = r.length; h < c; h++) {
                    const v = r[h];
                    this.addLevel(v.object.clone(), v.distance)
                }
                return this.autoUpdate = e.autoUpdate, this
            }
            addLevel(e, r = 0) {
                r = Math.abs(r);
                const h = this.levels;
                let c;
                for (c = 0; c < h.length && !(r < h[c].distance); c++);
                return h.splice(c, 0, {
                    distance: r,
                    object: e
                }), this.add(e), this
            }
            getCurrentLevel() {
                return this._currentLevel
            }
            getObjectForDistance(e) {
                const r = this.levels;
                if (r.length > 0) {
                    let h, c;
                    for (h = 1, c = r.length; h < c && !(e < r[h].distance); h++);
                    return r[h - 1].object
                }
                return null
            }
            raycast(e, r) {
                if (this.levels.length > 0) {
                    hr.setFromMatrixPosition(this.matrixWorld);
                    const h = e.ray.origin.distanceTo(hr);
                    this.getObjectForDistance(h).raycast(e, r)
                }
            }
            update(e) {
                const r = this.levels;
                if (r.length > 1) {
                    hr.setFromMatrixPosition(e.matrixWorld), da.setFromMatrixPosition(this.matrixWorld);
                    const h = hr.distanceTo(da) / e.zoom;
                    let c, v;
                    for (r[0].object.visible = !0, c = 1, v = r.length; c < v && h >= r[c].distance; c++) r[c - 1].object.visible = !1, r[c].object.visible = !0;
                    for (this._currentLevel = c - 1; c < v; c++) r[c].object.visible = !1
                }
            }
            toJSON(e) {
                const r = super.toJSON(e);
                this.autoUpdate === !1 && (r.object.autoUpdate = !1), r.object.levels = [];
                const h = this.levels;
                for (let c = 0, v = h.length; c < v; c++) {
                    const w = h[c];
                    r.object.levels.push({
                        object: w.object.uuid,
                        distance: w.distance
                    })
                }
                return r
            }
        }
        const Ia = new ge,
            Ts = new Si,
            mo = new Si,
            No = new ge,
            Ms = new Ui;

        function Mr(s, e) {
            ar.call(this, s, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ui, this.bindMatrixInverse = new Ui
        }

        function pr() {
            Z.call(this), this.type = "Bone"
        }
        Mr.prototype = Object.assign(Object.create(ar.prototype), {
            constructor: Mr,
            isSkinnedMesh: !0,
            copy: function(s) {
                return ar.prototype.copy.call(this, s), this.bindMode = s.bindMode, this.bindMatrix.copy(s.bindMatrix), this.bindMatrixInverse.copy(s.bindMatrixInverse), this.skeleton = s.skeleton, this
            },
            bind: function(s, e) {
                this.skeleton = s, e === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert()
            },
            pose: function() {
                this.skeleton.pose()
            },
            normalizeSkinWeights: function() {
                const s = new Si,
                    e = this.geometry.attributes.skinWeight;
                for (let r = 0, h = e.count; r < h; r++) {
                    s.x = e.getX(r), s.y = e.getY(r), s.z = e.getZ(r), s.w = e.getW(r);
                    const c = 1 / s.manhattanLength();
                    c !== 1 / 0 ? s.multiplyScalar(c) : s.set(1, 0, 0, 0), e.setXYZW(r, s.x, s.y, s.z, s.w)
                }
            },
            updateMatrixWorld: function(s) {
                ar.prototype.updateMatrixWorld.call(this, s), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
            },
            boneTransform: function(s, e) {
                const r = this.skeleton,
                    h = this.geometry;
                Ts.fromBufferAttribute(h.attributes.skinIndex, s), mo.fromBufferAttribute(h.attributes.skinWeight, s), Ia.fromBufferAttribute(h.attributes.position, s).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
                for (let c = 0; c < 4; c++) {
                    const v = mo.getComponent(c);
                    if (v !== 0) {
                        const w = Ts.getComponent(c);
                        Ms.multiplyMatrices(r.bones[w].matrixWorld, r.boneInverses[w]), e.addScaledVector(No.copy(Ia).applyMatrix4(Ms), v)
                    }
                }
                return e.applyMatrix4(this.bindMatrixInverse)
            }
        }), pr.prototype = Object.assign(Object.create(Z.prototype), {
            constructor: pr,
            isBone: !0
        });
        const yr = new Ui,
            Ta = new Ui;
        class Zn {
            constructor(e = [], r = []) {
                this.uuid = Mi.generateUUID(), this.bones = e.slice(0), this.boneInverses = r, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
            }
            init() {
                const e = this.bones,
                    r = this.boneInverses;
                if (this.boneMatrices = new Float32Array(16 * e.length), r.length === 0) this.calculateInverses();
                else if (e.length !== r.length) {
                    console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
                    for (let h = 0, c = this.bones.length; h < c; h++) this.boneInverses.push(new Ui)
                }
            }
            calculateInverses() {
                this.boneInverses.length = 0;
                for (let e = 0, r = this.bones.length; e < r; e++) {
                    const h = new Ui;
                    this.bones[e] && h.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(h)
                }
            }
            pose() {
                for (let e = 0, r = this.bones.length; e < r; e++) {
                    const h = this.bones[e];
                    h && h.matrixWorld.copy(this.boneInverses[e]).invert()
                }
                for (let e = 0, r = this.bones.length; e < r; e++) {
                    const h = this.bones[e];
                    h && (h.parent && h.parent.isBone ? (h.matrix.copy(h.parent.matrixWorld).invert(), h.matrix.multiply(h.matrixWorld)) : h.matrix.copy(h.matrixWorld), h.matrix.decompose(h.position, h.quaternion, h.scale))
                }
            }
            update() {
                const e = this.bones,
                    r = this.boneInverses,
                    h = this.boneMatrices,
                    c = this.boneTexture;
                for (let v = 0, w = e.length; v < w; v++) {
                    const E = e[v] ? e[v].matrixWorld : Ta;
                    yr.multiplyMatrices(E, r[v]), yr.toArray(h, 16 * v)
                }
                c !== null && (c.needsUpdate = !0)
            }
            clone() {
                return new Zn(this.bones, this.boneInverses)
            }
            getBoneByName(e) {
                for (let r = 0, h = this.bones.length; r < h; r++) {
                    const c = this.bones[r];
                    if (c.name === e) return c
                }
            }
            dispose() {
                this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null)
            }
            fromJSON(e, r) {
                this.uuid = e.uuid;
                for (let h = 0, c = e.bones.length; h < c; h++) {
                    const v = e.bones[h];
                    let w = r[v];
                    w === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", v), w = new pr), this.bones.push(w), this.boneInverses.push(new Ui().fromArray(e.boneInverses[h]))
                }
                return this.init(), this
            }
            toJSON() {
                const e = {
                    metadata: {
                        version: 4.5,
                        type: "Skeleton",
                        generator: "Skeleton.toJSON"
                    },
                    bones: [],
                    boneInverses: []
                };
                e.uuid = this.uuid;
                const r = this.bones,
                    h = this.boneInverses;
                for (let c = 0, v = r.length; c < v; c++) {
                    const w = r[c];
                    e.bones.push(w.uuid);
                    const E = h[c];
                    e.boneInverses.push(E.toArray())
                }
                return e
            }
        }
        const Zr = new Ui,
            ea = new Ui,
            Dr = [],
            Oo = new ar;

        function fr(s, e, r) {
            ar.call(this, s, e), this.instanceMatrix = new pi(new Float32Array(16 * r), 16), this.instanceColor = null, this.count = r, this.frustumCulled = !1
        }
        fr.prototype = Object.assign(Object.create(ar.prototype), {
            constructor: fr,
            isInstancedMesh: !0,
            copy: function(s) {
                return ar.prototype.copy.call(this, s), this.instanceMatrix.copy(s.instanceMatrix), s.instanceColor !== null && (this.instanceColor = s.instanceColor.clone()), this.count = s.count, this
            },
            getColorAt: function(s, e) {
                e.fromArray(this.instanceColor.array, 3 * s)
            },
            getMatrixAt: function(s, e) {
                e.fromArray(this.instanceMatrix.array, 16 * s)
            },
            raycast: function(s, e) {
                const r = this.matrixWorld,
                    h = this.count;
                if (Oo.geometry = this.geometry, Oo.material = this.material, Oo.material !== void 0)
                    for (let c = 0; c < h; c++) {
                        this.getMatrixAt(c, Zr), ea.multiplyMatrices(r, Zr), Oo.matrixWorld = ea, Oo.raycast(s, Dr);
                        for (let v = 0, w = Dr.length; v < w; v++) {
                            const E = Dr[v];
                            E.instanceId = c, E.object = this, e.push(E)
                        }
                        Dr.length = 0
                    }
            },
            setColorAt: function(s, e) {
                this.instanceColor === null && (this.instanceColor = new pi(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * s)
            },
            setMatrixAt: function(s, e) {
                e.toArray(this.instanceMatrix.array, 16 * s)
            },
            updateMorphTargets: function() {},
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        });
        class Xr extends ti {
            constructor(e) {
                super(), this.type = "LineBasicMaterial", this.color = new Rt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.morphTargets = e.morphTargets, this
            }
        }
        Xr.prototype.isLineBasicMaterial = !0;
        const qc = new ge,
            Hs = new ge,
            Ws = new Ui,
            Ka = new wr,
            go = new Fn;

        function za(s = new an, e = new Xr) {
            Z.call(this), this.type = "Line", this.geometry = s, this.material = e, this.updateMorphTargets()
        }
        za.prototype = Object.assign(Object.create(Z.prototype), {
            constructor: za,
            isLine: !0,
            copy: function(s) {
                return Z.prototype.copy.call(this, s), this.material = s.material, this.geometry = s.geometry, this
            },
            computeLineDistances: function() {
                const s = this.geometry;
                if (s.isBufferGeometry)
                    if (s.index === null) {
                        const e = s.attributes.position,
                            r = [0];
                        for (let h = 1, c = e.count; h < c; h++) qc.fromBufferAttribute(e, h - 1), Hs.fromBufferAttribute(e, h), r[h] = r[h - 1], r[h] += qc.distanceTo(Hs);
                        s.setAttribute("lineDistance", new Ai(r, 1))
                    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else s.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                return this
            },
            raycast: function(s, e) {
                const r = this.geometry,
                    h = this.matrixWorld,
                    c = s.params.Line.threshold,
                    v = r.drawRange;
                if (r.boundingSphere === null && r.computeBoundingSphere(), go.copy(r.boundingSphere), go.applyMatrix4(h), go.radius += c, s.ray.intersectsSphere(go) === !1) return;
                Ws.copy(h).invert(), Ka.copy(s.ray).applyMatrix4(Ws);
                const w = c / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                    E = w * w,
                    T = new ge,
                    B = new ge,
                    Q = new ge,
                    k = new ge,
                    i = this.isLineSegments ? 2 : 1;
                if (r.isBufferGeometry) {
                    const t = r.index,
                        a = r.attributes.position;
                    if (t !== null)
                        for (let l = Math.max(0, v.start), d = Math.min(t.count, v.start + v.count) - 1; l < d; l += i) {
                            const g = t.getX(l),
                                x = t.getX(l + 1);
                            if (T.fromBufferAttribute(a, g), B.fromBufferAttribute(a, x), Ka.distanceSqToSegment(T, B, k, Q) > E) continue;
                            k.applyMatrix4(this.matrixWorld);
                            const A = s.ray.origin.distanceTo(k);
                            A < s.near || A > s.far || e.push({
                                distance: A,
                                point: Q.clone().applyMatrix4(this.matrixWorld),
                                index: l,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        } else
                            for (let l = Math.max(0, v.start), d = Math.min(a.count, v.start + v.count) - 1; l < d; l += i) {
                                if (T.fromBufferAttribute(a, l), B.fromBufferAttribute(a, l + 1), Ka.distanceSqToSegment(T, B, k, Q) > E) continue;
                                k.applyMatrix4(this.matrixWorld);
                                const g = s.ray.origin.distanceTo(k);
                                g < s.near || g > s.far || e.push({
                                    distance: g,
                                    point: Q.clone().applyMatrix4(this.matrixWorld),
                                    index: l,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                } else r.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            },
            updateMorphTargets: function() {
                const s = this.geometry;
                if (s.isBufferGeometry) {
                    const e = s.morphAttributes,
                        r = Object.keys(e);
                    if (r.length > 0) {
                        const h = e[r[0]];
                        if (h !== void 0) {
                            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                            for (let c = 0, v = h.length; c < v; c++) {
                                const w = h[c].name || String(c);
                                this.morphTargetInfluences.push(0), this.morphTargetDictionary[w] = c
                            }
                        }
                    }
                } else {
                    const e = s.morphTargets;
                    e !== void 0 && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            }
        });
        const $c = new ge,
            Tl = new ge;

        function xa(s, e) {
            za.call(this, s, e), this.type = "LineSegments"
        }
        xa.prototype = Object.assign(Object.create(za.prototype), {
            constructor: xa,
            isLineSegments: !0,
            computeLineDistances: function() {
                const s = this.geometry;
                if (s.isBufferGeometry)
                    if (s.index === null) {
                        const e = s.attributes.position,
                            r = [];
                        for (let h = 0, c = e.count; h < c; h += 2) $c.fromBufferAttribute(e, h), Tl.fromBufferAttribute(e, h + 1), r[h] = h === 0 ? 0 : r[h - 1], r[h + 1] = r[h] + $c.distanceTo(Tl);
                        s.setAttribute("lineDistance", new Ai(r, 1))
                    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else s.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                return this
            }
        });
        class yo extends za {
            constructor(e, r) {
                super(e, r), this.type = "LineLoop"
            }
        }
        yo.prototype.isLineLoop = !0;
        class Ml extends ti {
            constructor(e) {
                super(), this.type = "PointsMaterial", this.color = new Rt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this
            }
        }
        Ml.prototype.isPointsMaterial = !0;
        const Hh = new Ui,
            Wh = new wr,
            Kc = new Fn,
            vo = new ge;

        function lc(s = new an, e = new Ml) {
            Z.call(this), this.type = "Points", this.geometry = s, this.material = e, this.updateMorphTargets()
        }

        function cc(s, e, r, h, c, v, w) {
            const E = Wh.distanceSqToPoint(s);
            if (E < r) {
                const T = new ge;
                Wh.closestPointToPoint(s, T), T.applyMatrix4(h);
                const B = c.ray.origin.distanceTo(T);
                if (B < c.near || B > c.far) return;
                v.push({
                    distance: B,
                    distanceToRay: Math.sqrt(E),
                    point: T,
                    index: e,
                    face: null,
                    object: w
                })
            }
        }
        lc.prototype = Object.assign(Object.create(Z.prototype), {
            constructor: lc,
            isPoints: !0,
            copy: function(s) {
                return Z.prototype.copy.call(this, s), this.material = s.material, this.geometry = s.geometry, this
            },
            raycast: function(s, e) {
                const r = this.geometry,
                    h = this.matrixWorld,
                    c = s.params.Points.threshold,
                    v = r.drawRange;
                if (r.boundingSphere === null && r.computeBoundingSphere(), Kc.copy(r.boundingSphere), Kc.applyMatrix4(h), Kc.radius += c, s.ray.intersectsSphere(Kc) === !1) return;
                Hh.copy(h).invert(), Wh.copy(s.ray).applyMatrix4(Hh);
                const w = c / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                    E = w * w;
                if (r.isBufferGeometry) {
                    const T = r.index,
                        B = r.attributes.position;
                    if (T !== null)
                        for (let Q = Math.max(0, v.start), k = Math.min(T.count, v.start + v.count); Q < k; Q++) {
                            const i = T.getX(Q);
                            vo.fromBufferAttribute(B, i), cc(vo, i, E, h, s, e, this)
                        } else
                            for (let Q = Math.max(0, v.start), k = Math.min(B.count, v.start + v.count); Q < k; Q++) vo.fromBufferAttribute(B, Q), cc(vo, Q, E, h, s, e, this)
                } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            },
            updateMorphTargets: function() {
                const s = this.geometry;
                if (s.isBufferGeometry) {
                    const e = s.morphAttributes,
                        r = Object.keys(e);
                    if (r.length > 0) {
                        const h = e[r[0]];
                        if (h !== void 0) {
                            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                            for (let c = 0, v = h.length; c < v; c++) {
                                const w = h[c].name || String(c);
                                this.morphTargetInfluences.push(0), this.morphTargetDictionary[w] = c
                            }
                        }
                    }
                } else {
                    const e = s.morphTargets;
                    e !== void 0 && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            }
        });
        class eh extends cn {
            constructor(e, r, h, c, v, w, E, T, B) {
                super(e, r, h, c, v, w, E, T, B), this.format = E !== void 0 ? E : 1022, this.minFilter = w !== void 0 ? w : 1006, this.magFilter = v !== void 0 ? v : 1006, this.generateMipmaps = !1;
                const Q = this;
                "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(function k() {
                    Q.needsUpdate = !0, e.requestVideoFrameCallback(k)
                })
            }
            clone() {
                return new this.constructor(this.image).copy(this)
            }
            update() {
                const e = this.image;
                !("requestVideoFrameCallback" in e) && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
            }
        }
        eh.prototype.isVideoTexture = !0;
        class hc extends cn {
            constructor(e, r, h, c, v, w, E, T, B, Q, k, i) {
                super(null, w, E, T, B, Q, c, v, k, i), this.image = {
                    width: r,
                    height: h
                }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
            }
        }
        hc.prototype.isCompressedTexture = !0;
        class Du extends cn {
            constructor(e, r, h, c, v, w, E, T, B) {
                super(e, r, h, c, v, w, E, T, B), this.needsUpdate = !0
            }
        }
        Du.prototype.isCanvasTexture = !0;
        class Uu extends cn {
            constructor(e, r, h, c, v, w, E, T, B, Q) {
                if ((Q = Q !== void 0 ? Q : 1026) !== 1026 && Q !== 1027) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                h === void 0 && Q === 1026 && (h = 1012), h === void 0 && Q === 1027 && (h = 1020), super(null, c, v, w, E, T, Q, h, B), this.image = {
                    width: e,
                    height: r
                }, this.magFilter = E !== void 0 ? E : 1003, this.minFilter = T !== void 0 ? T : 1003, this.flipY = !1, this.generateMipmaps = !1
            }
        }
        Uu.prototype.isDepthTexture = !0;
        class Jh extends an {
            constructor(e = 1, r = 8, h = 0, c = 2 * Math.PI) {
                super(), this.type = "CircleGeometry", this.parameters = {
                    radius: e,
                    segments: r,
                    thetaStart: h,
                    thetaLength: c
                }, r = Math.max(3, r);
                const v = [],
                    w = [],
                    E = [],
                    T = [],
                    B = new ge,
                    Q = new Ht;
                w.push(0, 0, 0), E.push(0, 0, 1), T.push(.5, .5);
                for (let k = 0, i = 3; k <= r; k++, i += 3) {
                    const t = h + k / r * c;
                    B.x = e * Math.cos(t), B.y = e * Math.sin(t), w.push(B.x, B.y, B.z), E.push(0, 0, 1), Q.x = (w[i] / e + 1) / 2, Q.y = (w[i + 1] / e + 1) / 2, T.push(Q.x, Q.y)
                }
                for (let k = 1; k <= r; k++) v.push(k, k + 1, 0);
                this.setIndex(v), this.setAttribute("position", new Ai(w, 3)), this.setAttribute("normal", new Ai(E, 3)), this.setAttribute("uv", new Ai(T, 2))
            }
        }
        class ta extends an {
            constructor(e = 1, r = 1, h = 1, c = 8, v = 1, w = !1, E = 0, T = 2 * Math.PI) {
                super(), this.type = "CylinderGeometry", this.parameters = {
                    radiusTop: e,
                    radiusBottom: r,
                    height: h,
                    radialSegments: c,
                    heightSegments: v,
                    openEnded: w,
                    thetaStart: E,
                    thetaLength: T
                };
                const B = this;
                c = Math.floor(c), v = Math.floor(v);
                const Q = [],
                    k = [],
                    i = [],
                    t = [];
                let a = 0;
                const l = [],
                    d = h / 2;
                let g = 0;

                function x(A) {
                    const M = a,
                        F = new Ht,
                        D = new ge;
                    let U = 0;
                    const N = A === !0 ? e : r,
                        H = A === !0 ? 1 : -1;
                    for (let ne = 1; ne <= c; ne++) k.push(0, d * H, 0), i.push(0, H, 0), t.push(.5, .5), a++;
                    const X = a;
                    for (let ne = 0; ne <= c; ne++) {
                        const le = ne / c * T + E,
                            ce = Math.cos(le),
                            Qe = Math.sin(le);
                        D.x = N * Qe, D.y = d * H, D.z = N * ce, k.push(D.x, D.y, D.z), i.push(0, H, 0), F.x = .5 * ce + .5, F.y = .5 * Qe * H + .5, t.push(F.x, F.y), a++
                    }
                    for (let ne = 0; ne < c; ne++) {
                        const le = M + ne,
                            ce = X + ne;
                        A === !0 ? Q.push(ce, ce + 1, le) : Q.push(ce + 1, ce, le), U += 3
                    }
                    B.addGroup(g, U, A === !0 ? 1 : 2), g += U
                }(function() {
                    const A = new ge,
                        M = new ge;
                    let F = 0;
                    const D = (r - e) / h;
                    for (let U = 0; U <= v; U++) {
                        const N = [],
                            H = U / v,
                            X = H * (r - e) + e;
                        for (let ne = 0; ne <= c; ne++) {
                            const le = ne / c,
                                ce = le * T + E,
                                Qe = Math.sin(ce),
                                Se = Math.cos(ce);
                            M.x = X * Qe, M.y = -H * h + d, M.z = X * Se, k.push(M.x, M.y, M.z), A.set(Qe, D, Se).normalize(), i.push(A.x, A.y, A.z), t.push(le, 1 - H), N.push(a++)
                        }
                        l.push(N)
                    }
                    for (let U = 0; U < c; U++)
                        for (let N = 0; N < v; N++) {
                            const H = l[N][U],
                                X = l[N + 1][U],
                                ne = l[N + 1][U + 1],
                                le = l[N][U + 1];
                            Q.push(H, X, le), Q.push(X, ne, le), F += 6
                        }
                    B.addGroup(g, F, 0), g += F
                })(), w === !1 && (e > 0 && x(!0), r > 0 && x(!1)), this.setIndex(Q), this.setAttribute("position", new Ai(k, 3)), this.setAttribute("normal", new Ai(i, 3)), this.setAttribute("uv", new Ai(t, 2))
            }
        }
        class _o extends ta {
            constructor(e = 1, r = 1, h = 8, c = 1, v = !1, w = 0, E = 2 * Math.PI) {
                super(0, e, r, h, c, v, w, E), this.type = "ConeGeometry", this.parameters = {
                    radius: e,
                    height: r,
                    radialSegments: h,
                    heightSegments: c,
                    openEnded: v,
                    thetaStart: w,
                    thetaLength: E
                }
            }
        }
        class Js extends an {
            constructor(e, r, h = 1, c = 0) {
                super(), this.type = "PolyhedronGeometry", this.parameters = {
                    vertices: e,
                    indices: r,
                    radius: h,
                    detail: c
                };
                const v = [],
                    w = [];

                function E(i, t, a, l) {
                    const d = l + 1,
                        g = [];
                    for (let x = 0; x <= d; x++) {
                        g[x] = [];
                        const A = i.clone().lerp(a, x / d),
                            M = t.clone().lerp(a, x / d),
                            F = d - x;
                        for (let D = 0; D <= F; D++) g[x][D] = D === 0 && x === d ? A : A.clone().lerp(M, D / F)
                    }
                    for (let x = 0; x < d; x++)
                        for (let A = 0; A < 2 * (d - x) - 1; A++) {
                            const M = Math.floor(A / 2);
                            A % 2 == 0 ? (T(g[x][M + 1]), T(g[x + 1][M]), T(g[x][M])) : (T(g[x][M + 1]), T(g[x + 1][M + 1]), T(g[x + 1][M]))
                        }
                }

                function T(i) {
                    v.push(i.x, i.y, i.z)
                }

                function B(i, t) {
                    const a = 3 * i;
                    t.x = e[a + 0], t.y = e[a + 1], t.z = e[a + 2]
                }

                function Q(i, t, a, l) {
                    l < 0 && i.x === 1 && (w[t] = i.x - 1), a.x === 0 && a.z === 0 && (w[t] = l / 2 / Math.PI + .5)
                }

                function k(i) {
                    return Math.atan2(i.z, -i.x)
                }(function(i) {
                    const t = new ge,
                        a = new ge,
                        l = new ge;
                    for (let d = 0; d < r.length; d += 3) B(r[d + 0], t), B(r[d + 1], a), B(r[d + 2], l), E(t, a, l, i)
                })(c),
                function(i) {
                    const t = new ge;
                    for (let a = 0; a < v.length; a += 3) t.x = v[a + 0], t.y = v[a + 1], t.z = v[a + 2], t.normalize().multiplyScalar(i), v[a + 0] = t.x, v[a + 1] = t.y, v[a + 2] = t.z
                }(h),
                function() {
                    const i = new ge;
                    for (let a = 0; a < v.length; a += 3) {
                        i.x = v[a + 0], i.y = v[a + 1], i.z = v[a + 2];
                        const l = k(i) / 2 / Math.PI + .5,
                            d = (t = i, Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z)) / Math.PI + .5);
                        w.push(l, 1 - d)
                    }
                    var t;
                    (function() {
                        const a = new ge,
                            l = new ge,
                            d = new ge,
                            g = new ge,
                            x = new Ht,
                            A = new Ht,
                            M = new Ht;
                        for (let F = 0, D = 0; F < v.length; F += 9, D += 6) {
                            a.set(v[F + 0], v[F + 1], v[F + 2]), l.set(v[F + 3], v[F + 4], v[F + 5]), d.set(v[F + 6], v[F + 7], v[F + 8]), x.set(w[D + 0], w[D + 1]), A.set(w[D + 2], w[D + 3]), M.set(w[D + 4], w[D + 5]), g.copy(a).add(l).add(d).divideScalar(3);
                            const U = k(g);
                            Q(x, D + 0, a, U), Q(A, D + 2, l, U), Q(M, D + 4, d, U)
                        }
                    })(),
                    function() {
                        for (let a = 0; a < w.length; a += 6) {
                            const l = w[a + 0],
                                d = w[a + 2],
                                g = w[a + 4],
                                x = Math.max(l, d, g),
                                A = Math.min(l, d, g);
                            x > .9 && A < .1 && (l < .2 && (w[a + 0] += 1), d < .2 && (w[a + 2] += 1), g < .2 && (w[a + 4] += 1))
                        }
                    }()
                }(), this.setAttribute("position", new Ai(v, 3)), this.setAttribute("normal", new Ai(v.slice(), 3)), this.setAttribute("uv", new Ai(w, 2)), c === 0 ? this.computeVertexNormals() : this.normalizeNormals()
            }
        }
        class th extends Js {
            constructor(e = 1, r = 0) {
                const h = (1 + Math.sqrt(5)) / 2,
                    c = 1 / h;
                super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -c, -h, 0, -c, h, 0, c, -h, 0, c, h, -c, -h, 0, -c, h, 0, c, -h, 0, c, h, 0, -h, 0, -c, h, 0, -c, -h, 0, c, h, 0, c], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, r), this.type = "DodecahedronGeometry", this.parameters = {
                    radius: e,
                    detail: r
                }
            }
        }
        const Vo = new ge,
            Zh = new ge,
            uc = new ge,
            Xh = new Mt;
        class jh extends an {
            constructor(e, r) {
                if (super(), this.type = "EdgesGeometry", this.parameters = {
                        thresholdAngle: r
                    }, r = r !== void 0 ? r : 1, e.isGeometry === !0) return void console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                const h = Math.pow(10, 4),
                    c = Math.cos(Mi.DEG2RAD * r),
                    v = e.getIndex(),
                    w = e.getAttribute("position"),
                    E = v ? v.count : w.count,
                    T = [0, 0, 0],
                    B = ["a", "b", "c"],
                    Q = new Array(3),
                    k = {},
                    i = [];
                for (let t = 0; t < E; t += 3) {
                    v ? (T[0] = v.getX(t), T[1] = v.getX(t + 1), T[2] = v.getX(t + 2)) : (T[0] = t, T[1] = t + 1, T[2] = t + 2);
                    const {
                        a,
                        b: l,
                        c: d
                    } = Xh;
                    if (a.fromBufferAttribute(w, T[0]), l.fromBufferAttribute(w, T[1]), d.fromBufferAttribute(w, T[2]), Xh.getNormal(uc), Q[0] = `${Math.round(a.x*h)},${Math.round(a.y*h)},${Math.round(a.z*h)}`, Q[1] = `${Math.round(l.x*h)},${Math.round(l.y*h)},${Math.round(l.z*h)}`, Q[2] = `${Math.round(d.x*h)},${Math.round(d.y*h)},${Math.round(d.z*h)}`, Q[0] !== Q[1] && Q[1] !== Q[2] && Q[2] !== Q[0])
                        for (let g = 0; g < 3; g++) {
                            const x = (g + 1) % 3,
                                A = Q[g],
                                M = Q[x],
                                F = Xh[B[g]],
                                D = Xh[B[x]],
                                U = `${A}_${M}`,
                                N = `${M}_${A}`;
                            N in k && k[N] ? (uc.dot(k[N].normal) <= c && (i.push(F.x, F.y, F.z), i.push(D.x, D.y, D.z)), k[N] = null) : U in k || (k[U] = {
                                index0: T[g],
                                index1: T[x],
                                normal: uc.clone()
                            })
                        }
                }
                for (const t in k)
                    if (k[t]) {
                        const {
                            index0: a,
                            index1: l
                        } = k[t];
                        Vo.fromBufferAttribute(w, a), Zh.fromBufferAttribute(w, l), i.push(Vo.x, Vo.y, Vo.z), i.push(Zh.x, Zh.y, Zh.z)
                    } this.setAttribute("position", new Ai(i, 3))
            }
        }
        const zd = function(s, e, r) {
            r = r || 2;
            const h = e && e.length,
                c = h ? e[0] * r : s.length;
            let v = Iu(s, 0, c, r, !0);
            const w = [];
            if (!v || v.next === v.prev) return w;
            let E, T, B, Q, k, i, t;
            if (h && (v = function(a, l, d, g) {
                    const x = [];
                    let A, M, F, D, U;
                    for (A = 0, M = l.length; A < M; A++) F = l[A] * g, D = A < M - 1 ? l[A + 1] * g : a.length, U = Iu(a, F, D, g, !1), U === U.next && (U.steiner = !0), x.push(bp(U));
                    for (x.sort(Od), A = 0; A < x.length; A++) xp(x[A], d), d = Go(d, d.next);
                    return d
                }(s, e, v, r)), s.length > 80 * r) {
                E = B = s[0], T = Q = s[1];
                for (let a = r; a < c; a += r) k = s[a], i = s[a + 1], k < E && (E = k), i < T && (T = i), k > B && (B = k), i > Q && (Q = i);
                t = Math.max(B - E, Q - T), t = t !== 0 ? 1 / t : 0
            }
            return Cl(v, w, r, E, T, t), w
        };

        function Iu(s, e, r, h, c) {
            let v, w;
            if (c === function(E, T, B, Q) {
                    let k = 0;
                    for (let i = T, t = B - Q; i < B; i += Q) k += (E[t] - E[i]) * (E[i + 1] + E[t + 1]), t = i;
                    return k
                }(s, e, r, h) > 0)
                for (v = e; v < r; v += h) w = Hd(v, s[v], s[v + 1], w);
            else
                for (v = r - h; v >= e; v -= h) w = Hd(v, s[v], s[v + 1], w);
            return w && Bl(w, w.next) && (rh(w), w = w.next), w
        }

        function Go(s, e) {
            if (!s) return s;
            e || (e = s);
            let r, h = s;
            do
                if (r = !1, h.steiner || !Bl(h, h.next) && Cr(h.prev, h, h.next) !== 0) h = h.next;
                else {
                    if (rh(h), h = e = h.prev, h === h.next) break;
                    r = !0
                } while (r || h !== e);
            return e
        }

        function Cl(s, e, r, h, c, v, w) {
            if (!s) return;
            !w && v && function(Q, k, i, t) {
                let a = Q;
                do a.z === null && (a.z = Nu(a.x, a.y, k, i, t)), a.prevZ = a.prev, a.nextZ = a.next, a = a.next; while (a !== Q);
                a.prevZ.nextZ = null, a.prevZ = null,
                    function(l) {
                        let d, g, x, A, M, F, D, U, N = 1;
                        do {
                            for (g = l, l = null, M = null, F = 0; g;) {
                                for (F++, x = g, D = 0, d = 0; d < N && (D++, x = x.nextZ, x); d++);
                                for (U = N; D > 0 || U > 0 && x;) D !== 0 && (U === 0 || !x || g.z <= x.z) ? (A = g, g = g.nextZ, D--) : (A = x, x = x.nextZ, U--), M ? M.nextZ = A : l = A, A.prevZ = M, M = A;
                                g = x
                            }
                            M.nextZ = null, N *= 2
                        } while (F > 1)
                    }(a)
            }(s, h, c, v);
            let E, T, B = s;
            for (; s.prev !== s.next;)
                if (E = s.prev, T = s.next, v ? zu(s, h, c, v) : Nd(s)) e.push(E.i / r), e.push(s.i / r), e.push(T.i / r), rh(s), s = T.next, B = T.next;
                else if ((s = T) === B) {
                w ? w === 1 ? Cl(s = ih(Go(s), e, r), e, r, h, c, v, 2) : w === 2 && es(s, e, r, h, c, v) : Cl(Go(s), e, r, h, c, v, 1);
                break
            }
        }

        function Nd(s) {
            const e = s.prev,
                r = s,
                h = s.next;
            if (Cr(e, r, h) >= 0) return !1;
            let c = s.next.next;
            for (; c !== s.prev;) {
                if (dc(e.x, e.y, r.x, r.y, h.x, h.y, c.x, c.y) && Cr(c.prev, c, c.next) >= 0) return !1;
                c = c.next
            }
            return !0
        }

        function zu(s, e, r, h) {
            const c = s.prev,
                v = s,
                w = s.next;
            if (Cr(c, v, w) >= 0) return !1;
            const E = c.x < v.x ? c.x < w.x ? c.x : w.x : v.x < w.x ? v.x : w.x,
                T = c.y < v.y ? c.y < w.y ? c.y : w.y : v.y < w.y ? v.y : w.y,
                B = c.x > v.x ? c.x > w.x ? c.x : w.x : v.x > w.x ? v.x : w.x,
                Q = c.y > v.y ? c.y > w.y ? c.y : w.y : v.y > w.y ? v.y : w.y,
                k = Nu(E, T, e, r, h),
                i = Nu(B, Q, e, r, h);
            let t = s.prevZ,
                a = s.nextZ;
            for (; t && t.z >= k && a && a.z <= i;) {
                if (t !== s.prev && t !== s.next && dc(c.x, c.y, v.x, v.y, w.x, w.y, t.x, t.y) && Cr(t.prev, t, t.next) >= 0 || (t = t.prevZ, a !== s.prev && a !== s.next && dc(c.x, c.y, v.x, v.y, w.x, w.y, a.x, a.y) && Cr(a.prev, a, a.next) >= 0)) return !1;
                a = a.nextZ
            }
            for (; t && t.z >= k;) {
                if (t !== s.prev && t !== s.next && dc(c.x, c.y, v.x, v.y, w.x, w.y, t.x, t.y) && Cr(t.prev, t, t.next) >= 0) return !1;
                t = t.prevZ
            }
            for (; a && a.z <= i;) {
                if (a !== s.prev && a !== s.next && dc(c.x, c.y, v.x, v.y, w.x, w.y, a.x, a.y) && Cr(a.prev, a, a.next) >= 0) return !1;
                a = a.nextZ
            }
            return !0
        }

        function ih(s, e, r) {
            let h = s;
            do {
                const c = h.prev,
                    v = h.next.next;
                !Bl(c, v) && Ou(c, h, h.next, v) && nh(c, v) && nh(v, c) && (e.push(c.i / r), e.push(h.i / r), e.push(v.i / r), rh(h), rh(h.next), h = s = v), h = h.next
            } while (h !== s);
            return Go(h)
        }

        function es(s, e, r, h, c, v) {
            let w = s;
            do {
                let E = w.next.next;
                for (; E !== w.prev;) {
                    if (w.i !== E.i && wp(w, E)) {
                        let T = Gd(w, E);
                        return w = Go(w, w.next), T = Go(T, T.next), Cl(w, e, r, h, c, v), void Cl(T, e, r, h, c, v)
                    }
                    E = E.next
                }
                w = w.next
            } while (w !== s)
        }

        function Od(s, e) {
            return s.x - e.x
        }

        function xp(s, e) {
            if (e = function(r, h) {
                    let c = h;
                    const v = r.x,
                        w = r.y;
                    let E, T = -1 / 0;
                    do {
                        if (w <= c.y && w >= c.next.y && c.next.y !== c.y) {
                            const a = c.x + (w - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
                            if (a <= v && a > T) {
                                if (T = a, a === v) {
                                    if (w === c.y) return c;
                                    if (w === c.next.y) return c.next
                                }
                                E = c.x < c.next.x ? c : c.next
                            }
                        }
                        c = c.next
                    } while (c !== h);
                    if (!E) return null;
                    if (v === T) return E;
                    const B = E,
                        Q = E.x,
                        k = E.y;
                    let i, t = 1 / 0;
                    c = E;
                    do v >= c.x && c.x >= Q && v !== c.x && dc(w < k ? v : T, w, Q, k, w < k ? T : v, w, c.x, c.y) && (i = Math.abs(w - c.y) / (v - c.x), nh(c, r) && (i < t || i === t && (c.x > E.x || c.x === E.x && Vd(E, c))) && (E = c, t = i)), c = c.next; while (c !== B);
                    return E
                }(s, e)) {
                const r = Gd(e, s);
                Go(e, e.next), Go(r, r.next)
            }
        }

        function Vd(s, e) {
            return Cr(s.prev, s, e.prev) < 0 && Cr(e.next, s, s.next) < 0
        }

        function Nu(s, e, r, h, c) {
            return (s = 1431655765 & ((s = 858993459 & ((s = 252645135 & ((s = 16711935 & ((s = 32767 * (s - r) * c) | s << 8)) | s << 4)) | s << 2)) | s << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - h) * c) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
        }

        function bp(s) {
            let e = s,
                r = s;
            do(e.x < r.x || e.x === r.x && e.y < r.y) && (r = e), e = e.next; while (e !== s);
            return r
        }

        function dc(s, e, r, h, c, v, w, E) {
            return (c - w) * (e - E) - (s - w) * (v - E) >= 0 && (s - w) * (h - E) - (r - w) * (e - E) >= 0 && (r - w) * (v - E) - (c - w) * (h - E) >= 0
        }

        function wp(s, e) {
            return s.next.i !== e.i && s.prev.i !== e.i && ! function(r, h) {
                let c = r;
                do {
                    if (c.i !== r.i && c.next.i !== r.i && c.i !== h.i && c.next.i !== h.i && Ou(c, c.next, r, h)) return !0;
                    c = c.next
                } while (c !== r);
                return !1
            }(s, e) && (nh(s, e) && nh(e, s) && function(r, h) {
                let c = r,
                    v = !1;
                const w = (r.x + h.x) / 2,
                    E = (r.y + h.y) / 2;
                do c.y > E != c.next.y > E && c.next.y !== c.y && w < (c.next.x - c.x) * (E - c.y) / (c.next.y - c.y) + c.x && (v = !v), c = c.next; while (c !== r);
                return v
            }(s, e) && (Cr(s.prev, s, e.prev) || Cr(s, e.prev, e)) || Bl(s, e) && Cr(s.prev, s, s.next) > 0 && Cr(e.prev, e, e.next) > 0)
        }

        function Cr(s, e, r) {
            return (e.y - s.y) * (r.x - e.x) - (e.x - s.x) * (r.y - e.y)
        }

        function Bl(s, e) {
            return s.x === e.x && s.y === e.y
        }

        function Ou(s, e, r, h) {
            const c = Ho(Cr(s, e, r)),
                v = Ho(Cr(s, e, h)),
                w = Ho(Cr(r, h, s)),
                E = Ho(Cr(r, h, e));
            return c !== v && w !== E || !(c !== 0 || !Zs(s, r, e)) || !(v !== 0 || !Zs(s, h, e)) || !(w !== 0 || !Zs(r, s, h)) || !(E !== 0 || !Zs(r, e, h))
        }

        function Zs(s, e, r) {
            return e.x <= Math.max(s.x, r.x) && e.x >= Math.min(s.x, r.x) && e.y <= Math.max(s.y, r.y) && e.y >= Math.min(s.y, r.y)
        }

        function Ho(s) {
            return s > 0 ? 1 : s < 0 ? -1 : 0
        }

        function nh(s, e) {
            return Cr(s.prev, s, s.next) < 0 ? Cr(s, e, s.next) >= 0 && Cr(s, s.prev, e) >= 0 : Cr(s, e, s.prev) < 0 || Cr(s, s.next, e) < 0
        }

        function Gd(s, e) {
            const r = new Vu(s.i, s.x, s.y),
                h = new Vu(e.i, e.x, e.y),
                c = s.next,
                v = e.prev;
            return s.next = e, e.prev = s, r.next = c, c.prev = r, h.next = r, r.prev = h, v.next = h, h.prev = v, h
        }

        function Hd(s, e, r, h) {
            const c = new Vu(s, e, r);
            return h ? (c.next = h.next, c.prev = h, h.next.prev = c, h.next = c) : (c.prev = c, c.next = c), c
        }

        function rh(s) {
            s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ)
        }

        function Vu(s, e, r) {
            this.i = s, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }
        const xo = {
            area: function(s) {
                const e = s.length;
                let r = 0;
                for (let h = e - 1, c = 0; c < e; h = c++) r += s[h].x * s[c].y - s[c].x * s[h].y;
                return .5 * r
            },
            isClockWise: function(s) {
                return xo.area(s) < 0
            },
            triangulateShape: function(s, e) {
                const r = [],
                    h = [],
                    c = [];
                Wd(s), Yh(r, s);
                let v = s.length;
                e.forEach(Wd);
                for (let E = 0; E < e.length; E++) h.push(v), v += e[E].length, Yh(r, e[E]);
                const w = zd(r, h);
                for (let E = 0; E < w.length; E += 3) c.push(w.slice(E, E + 3));
                return c
            }
        };

        function Wd(s) {
            const e = s.length;
            e > 2 && s[e - 1].equals(s[0]) && s.pop()
        }

        function Yh(s, e) {
            for (let r = 0; r < e.length; r++) s.push(e[r].x), s.push(e[r].y)
        }
        class bo extends an {
            constructor(e, r) {
                super(), this.type = "ExtrudeGeometry", this.parameters = {
                    shapes: e,
                    options: r
                }, e = Array.isArray(e) ? e : [e];
                const h = this,
                    c = [],
                    v = [];
                for (let E = 0, T = e.length; E < T; E++) w(e[E]);

                function w(E) {
                    const T = [],
                        B = r.curveSegments !== void 0 ? r.curveSegments : 12,
                        Q = r.steps !== void 0 ? r.steps : 1;
                    let k = r.depth !== void 0 ? r.depth : 100,
                        i = r.bevelEnabled === void 0 || r.bevelEnabled,
                        t = r.bevelThickness !== void 0 ? r.bevelThickness : 6,
                        a = r.bevelSize !== void 0 ? r.bevelSize : t - 2,
                        l = r.bevelOffset !== void 0 ? r.bevelOffset : 0,
                        d = r.bevelSegments !== void 0 ? r.bevelSegments : 3;
                    const g = r.extrudePath,
                        x = r.UVGenerator !== void 0 ? r.UVGenerator : pc;
                    r.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), k = r.amount);
                    let A, M, F, D, U, N = !1;
                    g && (A = g.getSpacedPoints(Q), N = !0, i = !1, M = g.computeFrenetFrames(Q, !1), F = new ge, D = new ge, U = new ge), i || (d = 0, t = 0, a = 0, l = 0);
                    const H = E.extractPoints(B);
                    let X = H.shape;
                    const ne = H.holes;
                    if (!xo.isClockWise(X)) {
                        X = X.reverse();
                        for (let pt = 0, xt = ne.length; pt < xt; pt++) {
                            const Gt = ne[pt];
                            xo.isClockWise(Gt) && (ne[pt] = Gt.reverse())
                        }
                    }
                    const le = xo.triangulateShape(X, ne),
                        ce = X;
                    for (let pt = 0, xt = ne.length; pt < xt; pt++) {
                        const Gt = ne[pt];
                        X = X.concat(Gt)
                    }

                    function Qe(pt, xt, Gt) {
                        return xt || console.error("THREE.ExtrudeGeometry: vec does not exist"), xt.clone().multiplyScalar(Gt).add(pt)
                    }
                    const Se = X.length,
                        Re = le.length;

                    function ot(pt, xt, Gt) {
                        let Xt, hi, _i;
                        const Di = pt.x - xt.x,
                            nn = pt.y - xt.y,
                            Fi = Gt.x - pt.x,
                            tn = Gt.y - pt.y,
                            gn = Di * Di + nn * nn,
                            Kn = Di * tn - nn * Fi;
                        if (Math.abs(Kn) > Number.EPSILON) {
                            const er = Math.sqrt(gn),
                                ia = Math.sqrt(Fi * Fi + tn * tn),
                                oa = xt.x - nn / er,
                                tr = xt.y + Di / er,
                                jn = ((Gt.x - tn / ia - oa) * tn - (Gt.y + Fi / ia - tr) * Fi) / (Di * tn - nn * Fi);
                            Xt = oa + Di * jn - pt.x, hi = tr + nn * jn - pt.y;
                            const fi = Xt * Xt + hi * hi;
                            if (fi <= 2) return new Ht(Xt, hi);
                            _i = Math.sqrt(fi / 2)
                        } else {
                            let er = !1;
                            Di > Number.EPSILON ? Fi > Number.EPSILON && (er = !0) : Di < -Number.EPSILON ? Fi < -Number.EPSILON && (er = !0) : Math.sign(nn) === Math.sign(tn) && (er = !0), er ? (Xt = -nn, hi = Di, _i = Math.sqrt(gn)) : (Xt = Di, hi = nn, _i = Math.sqrt(gn / 2))
                        }
                        return new Ht(Xt / _i, hi / _i)
                    }
                    const dt = [];
                    for (let pt = 0, xt = ce.length, Gt = xt - 1, Xt = pt + 1; pt < xt; pt++, Gt++, Xt++) Gt === xt && (Gt = 0), Xt === xt && (Xt = 0), dt[pt] = ot(ce[pt], ce[Gt], ce[Xt]);
                    const Ct = [];
                    let Nt, qt = dt.concat();
                    for (let pt = 0, xt = ne.length; pt < xt; pt++) {
                        const Gt = ne[pt];
                        Nt = [];
                        for (let Xt = 0, hi = Gt.length, _i = hi - 1, Di = Xt + 1; Xt < hi; Xt++, _i++, Di++) _i === hi && (_i = 0), Di === hi && (Di = 0), Nt[Xt] = ot(Gt[Xt], Gt[_i], Gt[Di]);
                        Ct.push(Nt), qt = qt.concat(Nt)
                    }
                    for (let pt = 0; pt < d; pt++) {
                        const xt = pt / d,
                            Gt = t * Math.cos(xt * Math.PI / 2),
                            Xt = a * Math.sin(xt * Math.PI / 2) + l;
                        for (let hi = 0, _i = ce.length; hi < _i; hi++) {
                            const Di = Qe(ce[hi], dt[hi], Xt);
                            mt(Di.x, Di.y, -Gt)
                        }
                        for (let hi = 0, _i = ne.length; hi < _i; hi++) {
                            const Di = ne[hi];
                            Nt = Ct[hi];
                            for (let nn = 0, Fi = Di.length; nn < Fi; nn++) {
                                const tn = Qe(Di[nn], Nt[nn], Xt);
                                mt(tn.x, tn.y, -Gt)
                            }
                        }
                    }
                    const Fe = a + l;
                    for (let pt = 0; pt < Se; pt++) {
                        const xt = i ? Qe(X[pt], qt[pt], Fe) : X[pt];
                        N ? (D.copy(M.normals[0]).multiplyScalar(xt.x), F.copy(M.binormals[0]).multiplyScalar(xt.y), U.copy(A[0]).add(D).add(F), mt(U.x, U.y, U.z)) : mt(xt.x, xt.y, 0)
                    }
                    for (let pt = 1; pt <= Q; pt++)
                        for (let xt = 0; xt < Se; xt++) {
                            const Gt = i ? Qe(X[xt], qt[xt], Fe) : X[xt];
                            N ? (D.copy(M.normals[pt]).multiplyScalar(Gt.x), F.copy(M.binormals[pt]).multiplyScalar(Gt.y), U.copy(A[pt]).add(D).add(F), mt(U.x, U.y, U.z)) : mt(Gt.x, Gt.y, k / Q * pt)
                        }
                    for (let pt = d - 1; pt >= 0; pt--) {
                        const xt = pt / d,
                            Gt = t * Math.cos(xt * Math.PI / 2),
                            Xt = a * Math.sin(xt * Math.PI / 2) + l;
                        for (let hi = 0, _i = ce.length; hi < _i; hi++) {
                            const Di = Qe(ce[hi], dt[hi], Xt);
                            mt(Di.x, Di.y, k + Gt)
                        }
                        for (let hi = 0, _i = ne.length; hi < _i; hi++) {
                            const Di = ne[hi];
                            Nt = Ct[hi];
                            for (let nn = 0, Fi = Di.length; nn < Fi; nn++) {
                                const tn = Qe(Di[nn], Nt[nn], Xt);
                                N ? mt(tn.x, tn.y + A[Q - 1].y, A[Q - 1].x + Gt) : mt(tn.x, tn.y, k + Gt)
                            }
                        }
                    }

                    function Be(pt, xt) {
                        let Gt = pt.length;
                        for (; --Gt >= 0;) {
                            const Xt = Gt;
                            let hi = Gt - 1;
                            hi < 0 && (hi = pt.length - 1);
                            for (let _i = 0, Di = Q + 2 * d; _i < Di; _i++) {
                                const nn = Se * _i,
                                    Fi = Se * (_i + 1);
                                Xe(xt + Xt + nn, xt + hi + nn, xt + hi + Fi, xt + Xt + Fi)
                            }
                        }
                    }

                    function mt(pt, xt, Gt) {
                        T.push(pt), T.push(xt), T.push(Gt)
                    }

                    function lt(pt, xt, Gt) {
                        Zt(pt), Zt(xt), Zt(Gt);
                        const Xt = c.length / 3,
                            hi = x.generateTopUV(h, c, Xt - 3, Xt - 2, Xt - 1);
                        Ie(hi[0]), Ie(hi[1]), Ie(hi[2])
                    }

                    function Xe(pt, xt, Gt, Xt) {
                        Zt(pt), Zt(xt), Zt(Xt), Zt(xt), Zt(Gt), Zt(Xt);
                        const hi = c.length / 3,
                            _i = x.generateSideWallUV(h, c, hi - 6, hi - 3, hi - 2, hi - 1);
                        Ie(_i[0]), Ie(_i[1]), Ie(_i[3]), Ie(_i[1]), Ie(_i[2]), Ie(_i[3])
                    }

                    function Zt(pt) {
                        c.push(T[3 * pt + 0]), c.push(T[3 * pt + 1]), c.push(T[3 * pt + 2])
                    }

                    function Ie(pt) {
                        v.push(pt.x), v.push(pt.y)
                    }(function() {
                        const pt = c.length / 3;
                        if (i) {
                            let xt = 0,
                                Gt = Se * xt;
                            for (let Xt = 0; Xt < Re; Xt++) {
                                const hi = le[Xt];
                                lt(hi[2] + Gt, hi[1] + Gt, hi[0] + Gt)
                            }
                            xt = Q + 2 * d, Gt = Se * xt;
                            for (let Xt = 0; Xt < Re; Xt++) {
                                const hi = le[Xt];
                                lt(hi[0] + Gt, hi[1] + Gt, hi[2] + Gt)
                            }
                        } else {
                            for (let xt = 0; xt < Re; xt++) {
                                const Gt = le[xt];
                                lt(Gt[2], Gt[1], Gt[0])
                            }
                            for (let xt = 0; xt < Re; xt++) {
                                const Gt = le[xt];
                                lt(Gt[0] + Se * Q, Gt[1] + Se * Q, Gt[2] + Se * Q)
                            }
                        }
                        h.addGroup(pt, c.length / 3 - pt, 0)
                    })(),
                    function() {
                        const pt = c.length / 3;
                        let xt = 0;
                        Be(ce, xt), xt += ce.length;
                        for (let Gt = 0, Xt = ne.length; Gt < Xt; Gt++) {
                            const hi = ne[Gt];
                            Be(hi, xt), xt += hi.length
                        }
                        h.addGroup(pt, c.length / 3 - pt, 1)
                    }()
                }
                this.setAttribute("position", new Ai(c, 3)), this.setAttribute("uv", new Ai(v, 2)), this.computeVertexNormals()
            }
            toJSON() {
                const e = an.prototype.toJSON.call(this);
                return function(r, h, c) {
                    if (c.shapes = [], Array.isArray(r))
                        for (let v = 0, w = r.length; v < w; v++) {
                            const E = r[v];
                            c.shapes.push(E.uuid)
                        } else c.shapes.push(r.uuid);
                    return h.extrudePath !== void 0 && (c.options.extrudePath = h.extrudePath.toJSON()), c
                }(this.parameters.shapes, this.parameters.options, e)
            }
        }
        const pc = {
            generateTopUV: function(s, e, r, h, c) {
                const v = e[3 * r],
                    w = e[3 * r + 1],
                    E = e[3 * h],
                    T = e[3 * h + 1],
                    B = e[3 * c],
                    Q = e[3 * c + 1];
                return [new Ht(v, w), new Ht(E, T), new Ht(B, Q)]
            },
            generateSideWallUV: function(s, e, r, h, c, v) {
                const w = e[3 * r],
                    E = e[3 * r + 1],
                    T = e[3 * r + 2],
                    B = e[3 * h],
                    Q = e[3 * h + 1],
                    k = e[3 * h + 2],
                    i = e[3 * c],
                    t = e[3 * c + 1],
                    a = e[3 * c + 2],
                    l = e[3 * v],
                    d = e[3 * v + 1],
                    g = e[3 * v + 2];
                return Math.abs(E - Q) < .01 ? [new Ht(w, 1 - T), new Ht(B, 1 - k), new Ht(i, 1 - a), new Ht(l, 1 - g)] : [new Ht(E, 1 - T), new Ht(Q, 1 - k), new Ht(t, 1 - a), new Ht(d, 1 - g)]
            }
        };
        class qh extends Js {
            constructor(e = 1, r = 0) {
                const h = (1 + Math.sqrt(5)) / 2;
                super([-1, h, 0, 1, h, 0, -1, -h, 0, 1, -h, 0, 0, -1, h, 0, 1, h, 0, -1, -h, 0, 1, -h, h, 0, -1, h, 0, 1, -h, 0, -1, -h, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, r), this.type = "IcosahedronGeometry", this.parameters = {
                    radius: e,
                    detail: r
                }
            }
        }
        class vr extends an {
            constructor(e, r = 12, h = 0, c = 2 * Math.PI) {
                super(), this.type = "LatheGeometry", this.parameters = {
                    points: e,
                    segments: r,
                    phiStart: h,
                    phiLength: c
                }, r = Math.floor(r), c = Mi.clamp(c, 0, 2 * Math.PI);
                const v = [],
                    w = [],
                    E = [],
                    T = 1 / r,
                    B = new ge,
                    Q = new Ht;
                for (let k = 0; k <= r; k++) {
                    const i = h + k * T * c,
                        t = Math.sin(i),
                        a = Math.cos(i);
                    for (let l = 0; l <= e.length - 1; l++) B.x = e[l].x * t, B.y = e[l].y, B.z = e[l].x * a, w.push(B.x, B.y, B.z), Q.x = k / r, Q.y = l / (e.length - 1), E.push(Q.x, Q.y)
                }
                for (let k = 0; k < r; k++)
                    for (let i = 0; i < e.length - 1; i++) {
                        const t = i + k * e.length,
                            a = t,
                            l = t + e.length,
                            d = t + e.length + 1,
                            g = t + 1;
                        v.push(a, l, g), v.push(l, d, g)
                    }
                if (this.setIndex(v), this.setAttribute("position", new Ai(w, 3)), this.setAttribute("uv", new Ai(E, 2)), this.computeVertexNormals(), c === 2 * Math.PI) {
                    const k = this.attributes.normal.array,
                        i = new ge,
                        t = new ge,
                        a = new ge,
                        l = r * e.length * 3;
                    for (let d = 0, g = 0; d < e.length; d++, g += 3) i.x = k[g + 0], i.y = k[g + 1], i.z = k[g + 2], t.x = k[l + g + 0], t.y = k[l + g + 1], t.z = k[l + g + 2], a.addVectors(i, t).normalize(), k[g + 0] = k[l + g + 0] = a.x, k[g + 1] = k[l + g + 1] = a.y, k[g + 2] = k[l + g + 2] = a.z
                }
            }
        }
        class Wo extends Js {
            constructor(e = 1, r = 0) {
                super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, r), this.type = "OctahedronGeometry", this.parameters = {
                    radius: e,
                    detail: r
                }
            }
        }

        function Jo(s, e, r) {
            an.call(this), this.type = "ParametricGeometry", this.parameters = {
                func: s,
                slices: e,
                stacks: r
            };
            const h = [],
                c = [],
                v = [],
                w = [],
                E = 1e-5,
                T = new ge,
                B = new ge,
                Q = new ge,
                k = new ge,
                i = new ge;
            s.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
            const t = e + 1;
            for (let a = 0; a <= r; a++) {
                const l = a / r;
                for (let d = 0; d <= e; d++) {
                    const g = d / e;
                    s(g, l, B), c.push(B.x, B.y, B.z), g - E >= 0 ? (s(g - E, l, Q), k.subVectors(B, Q)) : (s(g + E, l, Q), k.subVectors(Q, B)), l - E >= 0 ? (s(g, l - E, Q), i.subVectors(B, Q)) : (s(g, l + E, Q), i.subVectors(Q, B)), T.crossVectors(k, i).normalize(), v.push(T.x, T.y, T.z), w.push(g, l)
                }
            }
            for (let a = 0; a < r; a++)
                for (let l = 0; l < e; l++) {
                    const d = a * t + l,
                        g = a * t + l + 1,
                        x = (a + 1) * t + l + 1,
                        A = (a + 1) * t + l;
                    h.push(d, g, A), h.push(g, x, A)
                }
            this.setIndex(h), this.setAttribute("position", new Ai(c, 3)), this.setAttribute("normal", new Ai(v, 3)), this.setAttribute("uv", new Ai(w, 2))
        }
        Jo.prototype = Object.create(an.prototype), Jo.prototype.constructor = Jo;
        class Rl extends an {
            constructor(e = .5, r = 1, h = 8, c = 1, v = 0, w = 2 * Math.PI) {
                super(), this.type = "RingGeometry", this.parameters = {
                    innerRadius: e,
                    outerRadius: r,
                    thetaSegments: h,
                    phiSegments: c,
                    thetaStart: v,
                    thetaLength: w
                }, h = Math.max(3, h);
                const E = [],
                    T = [],
                    B = [],
                    Q = [];
                let k = e;
                const i = (r - e) / (c = Math.max(1, c)),
                    t = new ge,
                    a = new Ht;
                for (let l = 0; l <= c; l++) {
                    for (let d = 0; d <= h; d++) {
                        const g = v + d / h * w;
                        t.x = k * Math.cos(g), t.y = k * Math.sin(g), T.push(t.x, t.y, t.z), B.push(0, 0, 1), a.x = (t.x / r + 1) / 2, a.y = (t.y / r + 1) / 2, Q.push(a.x, a.y)
                    }
                    k += i
                }
                for (let l = 0; l < c; l++) {
                    const d = l * (h + 1);
                    for (let g = 0; g < h; g++) {
                        const x = g + d,
                            A = x,
                            M = x + h + 1,
                            F = x + h + 2,
                            D = x + 1;
                        E.push(A, M, D), E.push(M, F, D)
                    }
                }
                this.setIndex(E), this.setAttribute("position", new Ai(T, 3)), this.setAttribute("normal", new Ai(B, 3)), this.setAttribute("uv", new Ai(Q, 2))
            }
        }
        class Zo extends an {
            constructor(e, r = 12) {
                super(), this.type = "ShapeGeometry", this.parameters = {
                    shapes: e,
                    curveSegments: r
                };
                const h = [],
                    c = [],
                    v = [],
                    w = [];
                let E = 0,
                    T = 0;
                if (Array.isArray(e) === !1) B(e);
                else
                    for (let Q = 0; Q < e.length; Q++) B(e[Q]), this.addGroup(E, T, Q), E += T, T = 0;

                function B(Q) {
                    const k = c.length / 3,
                        i = Q.extractPoints(r);
                    let t = i.shape;
                    const a = i.holes;
                    xo.isClockWise(t) === !1 && (t = t.reverse());
                    for (let d = 0, g = a.length; d < g; d++) {
                        const x = a[d];
                        xo.isClockWise(x) === !0 && (a[d] = x.reverse())
                    }
                    const l = xo.triangulateShape(t, a);
                    for (let d = 0, g = a.length; d < g; d++) {
                        const x = a[d];
                        t = t.concat(x)
                    }
                    for (let d = 0, g = t.length; d < g; d++) {
                        const x = t[d];
                        c.push(x.x, x.y, 0), v.push(0, 0, 1), w.push(x.x, x.y)
                    }
                    for (let d = 0, g = l.length; d < g; d++) {
                        const x = l[d],
                            A = x[0] + k,
                            M = x[1] + k,
                            F = x[2] + k;
                        h.push(A, M, F), T += 3
                    }
                }
                this.setIndex(h), this.setAttribute("position", new Ai(c, 3)), this.setAttribute("normal", new Ai(v, 3)), this.setAttribute("uv", new Ai(w, 2))
            }
            toJSON() {
                const e = an.prototype.toJSON.call(this);
                return function(r, h) {
                    if (h.shapes = [], Array.isArray(r))
                        for (let c = 0, v = r.length; c < v; c++) {
                            const w = r[c];
                            h.shapes.push(w.uuid)
                        } else h.shapes.push(r.uuid);
                    return h
                }(this.parameters.shapes, e)
            }
        }
        class wo extends an {
            constructor(e = 1, r = 8, h = 6, c = 0, v = 2 * Math.PI, w = 0, E = Math.PI) {
                super(), this.type = "SphereGeometry", this.parameters = {
                    radius: e,
                    widthSegments: r,
                    heightSegments: h,
                    phiStart: c,
                    phiLength: v,
                    thetaStart: w,
                    thetaLength: E
                }, r = Math.max(3, Math.floor(r)), h = Math.max(2, Math.floor(h));
                const T = Math.min(w + E, Math.PI);
                let B = 0;
                const Q = [],
                    k = new ge,
                    i = new ge,
                    t = [],
                    a = [],
                    l = [],
                    d = [];
                for (let g = 0; g <= h; g++) {
                    const x = [],
                        A = g / h;
                    let M = 0;
                    g == 0 && w == 0 ? M = .5 / r : g == h && T == Math.PI && (M = -.5 / r);
                    for (let F = 0; F <= r; F++) {
                        const D = F / r;
                        k.x = -e * Math.cos(c + D * v) * Math.sin(w + A * E), k.y = e * Math.cos(w + A * E), k.z = e * Math.sin(c + D * v) * Math.sin(w + A * E), a.push(k.x, k.y, k.z), i.copy(k).normalize(), l.push(i.x, i.y, i.z), d.push(D + M, 1 - A), x.push(B++)
                    }
                    Q.push(x)
                }
                for (let g = 0; g < h; g++)
                    for (let x = 0; x < r; x++) {
                        const A = Q[g][x + 1],
                            M = Q[g][x],
                            F = Q[g + 1][x],
                            D = Q[g + 1][x + 1];
                        (g !== 0 || w > 0) && t.push(A, M, D), (g !== h - 1 || T < Math.PI) && t.push(M, F, D)
                    }
                this.setIndex(t), this.setAttribute("position", new Ai(a, 3)), this.setAttribute("normal", new Ai(l, 3)), this.setAttribute("uv", new Ai(d, 2))
            }
        }
        class ah extends Js {
            constructor(e = 1, r = 0) {
                super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, r), this.type = "TetrahedronGeometry", this.parameters = {
                    radius: e,
                    detail: r
                }
            }
        }
        class sh extends bo {
            constructor(e, r = {}) {
                const h = r.font;
                if (!h || !h.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new an;
                const c = h.generateShapes(e, r.size);
                r.depth = r.height !== void 0 ? r.height : 50, r.bevelThickness === void 0 && (r.bevelThickness = 10), r.bevelSize === void 0 && (r.bevelSize = 8), r.bevelEnabled === void 0 && (r.bevelEnabled = !1), super(c, r), this.type = "TextGeometry"
            }
        }
        class Xo extends an {
            constructor(e = 1, r = .4, h = 8, c = 6, v = 2 * Math.PI) {
                super(), this.type = "TorusGeometry", this.parameters = {
                    radius: e,
                    tube: r,
                    radialSegments: h,
                    tubularSegments: c,
                    arc: v
                }, h = Math.floor(h), c = Math.floor(c);
                const w = [],
                    E = [],
                    T = [],
                    B = [],
                    Q = new ge,
                    k = new ge,
                    i = new ge;
                for (let t = 0; t <= h; t++)
                    for (let a = 0; a <= c; a++) {
                        const l = a / c * v,
                            d = t / h * Math.PI * 2;
                        k.x = (e + r * Math.cos(d)) * Math.cos(l), k.y = (e + r * Math.cos(d)) * Math.sin(l), k.z = r * Math.sin(d), E.push(k.x, k.y, k.z), Q.x = e * Math.cos(l), Q.y = e * Math.sin(l), i.subVectors(k, Q).normalize(), T.push(i.x, i.y, i.z), B.push(a / c), B.push(t / h)
                    }
                for (let t = 1; t <= h; t++)
                    for (let a = 1; a <= c; a++) {
                        const l = (c + 1) * t + a - 1,
                            d = (c + 1) * (t - 1) + a - 1,
                            g = (c + 1) * (t - 1) + a,
                            x = (c + 1) * t + a;
                        w.push(l, d, x), w.push(d, g, x)
                    }
                this.setIndex(w), this.setAttribute("position", new Ai(E, 3)), this.setAttribute("normal", new Ai(T, 3)), this.setAttribute("uv", new Ai(B, 2))
            }
        }
        class fc extends an {
            constructor(e = 1, r = .4, h = 64, c = 8, v = 2, w = 3) {
                super(), this.type = "TorusKnotGeometry", this.parameters = {
                    radius: e,
                    tube: r,
                    tubularSegments: h,
                    radialSegments: c,
                    p: v,
                    q: w
                }, h = Math.floor(h), c = Math.floor(c);
                const E = [],
                    T = [],
                    B = [],
                    Q = [],
                    k = new ge,
                    i = new ge,
                    t = new ge,
                    a = new ge,
                    l = new ge,
                    d = new ge,
                    g = new ge;
                for (let A = 0; A <= h; ++A) {
                    const M = A / h * v * Math.PI * 2;
                    x(M, v, w, e, t), x(M + .01, v, w, e, a), d.subVectors(a, t), g.addVectors(a, t), l.crossVectors(d, g), g.crossVectors(l, d), l.normalize(), g.normalize();
                    for (let F = 0; F <= c; ++F) {
                        const D = F / c * Math.PI * 2,
                            U = -r * Math.cos(D),
                            N = r * Math.sin(D);
                        k.x = t.x + (U * g.x + N * l.x), k.y = t.y + (U * g.y + N * l.y), k.z = t.z + (U * g.z + N * l.z), T.push(k.x, k.y, k.z), i.subVectors(k, t).normalize(), B.push(i.x, i.y, i.z), Q.push(A / h), Q.push(F / c)
                    }
                }
                for (let A = 1; A <= h; A++)
                    for (let M = 1; M <= c; M++) {
                        const F = (c + 1) * (A - 1) + (M - 1),
                            D = (c + 1) * A + (M - 1),
                            U = (c + 1) * A + M,
                            N = (c + 1) * (A - 1) + M;
                        E.push(F, D, N), E.push(D, U, N)
                    }

                function x(A, M, F, D, U) {
                    const N = Math.cos(A),
                        H = Math.sin(A),
                        X = F / M * A,
                        ne = Math.cos(X);
                    U.x = D * (2 + ne) * .5 * N, U.y = D * (2 + ne) * H * .5, U.z = D * Math.sin(X) * .5
                }
                this.setIndex(E), this.setAttribute("position", new Ai(T, 3)), this.setAttribute("normal", new Ai(B, 3)), this.setAttribute("uv", new Ai(Q, 2))
            }
        }
        class mc extends an {
            constructor(e, r = 64, h = 1, c = 8, v = !1) {
                super(), this.type = "TubeGeometry", this.parameters = {
                    path: e,
                    tubularSegments: r,
                    radius: h,
                    radialSegments: c,
                    closed: v
                };
                const w = e.computeFrenetFrames(r, v);
                this.tangents = w.tangents, this.normals = w.normals, this.binormals = w.binormals;
                const E = new ge,
                    T = new ge,
                    B = new Ht;
                let Q = new ge;
                const k = [],
                    i = [],
                    t = [],
                    a = [];

                function l(d) {
                    Q = e.getPointAt(d / r, Q);
                    const g = w.normals[d],
                        x = w.binormals[d];
                    for (let A = 0; A <= c; A++) {
                        const M = A / c * Math.PI * 2,
                            F = Math.sin(M),
                            D = -Math.cos(M);
                        T.x = D * g.x + F * x.x, T.y = D * g.y + F * x.y, T.z = D * g.z + F * x.z, T.normalize(), i.push(T.x, T.y, T.z), E.x = Q.x + h * T.x, E.y = Q.y + h * T.y, E.z = Q.z + h * T.z, k.push(E.x, E.y, E.z)
                    }
                }(function() {
                    for (let d = 0; d < r; d++) l(d);
                    l(v === !1 ? r : 0),
                        function() {
                            for (let d = 0; d <= r; d++)
                                for (let g = 0; g <= c; g++) B.x = d / r, B.y = g / c, t.push(B.x, B.y)
                        }(),
                        function() {
                            for (let d = 1; d <= r; d++)
                                for (let g = 1; g <= c; g++) {
                                    const x = (c + 1) * (d - 1) + (g - 1),
                                        A = (c + 1) * d + (g - 1),
                                        M = (c + 1) * d + g,
                                        F = (c + 1) * (d - 1) + g;
                                    a.push(x, A, F), a.push(A, M, F)
                                }
                        }()
                })(), this.setIndex(a), this.setAttribute("position", new Ai(k, 3)), this.setAttribute("normal", new Ai(i, 3)), this.setAttribute("uv", new Ai(t, 2))
            }
            toJSON() {
                const e = an.prototype.toJSON.call(this);
                return e.path = this.parameters.path.toJSON(), e
            }
        }
        class $h extends an {
            constructor(e) {
                if (super(), this.type = "WireframeGeometry", e.isGeometry === !0) return void console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                const r = [],
                    h = [0, 0],
                    c = {},
                    v = new ge;
                if (e.index !== null) {
                    const w = e.attributes.position,
                        E = e.index;
                    let T = e.groups;
                    T.length === 0 && (T = [{
                        start: 0,
                        count: E.count,
                        materialIndex: 0
                    }]);
                    for (let B = 0, Q = T.length; B < Q; ++B) {
                        const k = T[B],
                            i = k.start;
                        for (let t = i, a = i + k.count; t < a; t += 3)
                            for (let l = 0; l < 3; l++) {
                                const d = E.getX(t + l),
                                    g = E.getX(t + (l + 1) % 3);
                                h[0] = Math.min(d, g), h[1] = Math.max(d, g);
                                const x = h[0] + "," + h[1];
                                c[x] === void 0 && (c[x] = {
                                    index1: h[0],
                                    index2: h[1]
                                })
                            }
                    }
                    for (const B in c) {
                        const Q = c[B];
                        v.fromBufferAttribute(w, Q.index1), r.push(v.x, v.y, v.z), v.fromBufferAttribute(w, Q.index2), r.push(v.x, v.y, v.z)
                    }
                } else {
                    const w = e.attributes.position;
                    for (let E = 0, T = w.count / 3; E < T; E++)
                        for (let B = 0; B < 3; B++) {
                            const Q = 3 * E + B;
                            v.fromBufferAttribute(w, Q), r.push(v.x, v.y, v.z);
                            const k = 3 * E + (B + 1) % 3;
                            v.fromBufferAttribute(w, k), r.push(v.x, v.y, v.z)
                        }
                }
                this.setAttribute("position", new Ai(r, 3))
            }
        }
        var Na = Object.freeze({
            __proto__: null,
            BoxGeometry: sr,
            BoxBufferGeometry: sr,
            CircleGeometry: Jh,
            CircleBufferGeometry: Jh,
            ConeGeometry: _o,
            ConeBufferGeometry: _o,
            CylinderGeometry: ta,
            CylinderBufferGeometry: ta,
            DodecahedronGeometry: th,
            DodecahedronBufferGeometry: th,
            EdgesGeometry: jh,
            ExtrudeGeometry: bo,
            ExtrudeBufferGeometry: bo,
            IcosahedronGeometry: qh,
            IcosahedronBufferGeometry: qh,
            LatheGeometry: vr,
            LatheBufferGeometry: vr,
            OctahedronGeometry: Wo,
            OctahedronBufferGeometry: Wo,
            ParametricGeometry: Jo,
            ParametricBufferGeometry: Jo,
            PlaneGeometry: Is,
            PlaneBufferGeometry: Is,
            PolyhedronGeometry: Js,
            PolyhedronBufferGeometry: Js,
            RingGeometry: Rl,
            RingBufferGeometry: Rl,
            ShapeGeometry: Zo,
            ShapeBufferGeometry: Zo,
            SphereGeometry: wo,
            SphereBufferGeometry: wo,
            TetrahedronGeometry: ah,
            TetrahedronBufferGeometry: ah,
            TextGeometry: sh,
            TextBufferGeometry: sh,
            TorusGeometry: Xo,
            TorusBufferGeometry: Xo,
            TorusKnotGeometry: fc,
            TorusKnotBufferGeometry: fc,
            TubeGeometry: mc,
            TubeBufferGeometry: mc,
            WireframeGeometry: $h
        });
        class Kh extends ti {
            constructor(e) {
                super(), this.type = "ShadowMaterial", this.color = new Rt(0), this.transparent = !0, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this
            }
        }
        Kh.prototype.isShadowMaterial = !0;
        class Xs extends Cn {
            constructor(e) {
                super(e), this.type = "RawShaderMaterial"
            }
        }

        function js(s) {
            ti.call(this), this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new Rt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Rt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ht(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(s)
        }

        function Ys(s) {
            js.call(this), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Ht(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", {
                get: function() {
                    return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity)
                },
                set: function(e) {
                    this.reflectivity = Mi.clamp(2.5 * (e - 1) / (e + 1), 0, 1)
                }
            }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(s)
        }
        Xs.prototype.isRawShaderMaterial = !0, js.prototype = Object.create(ti.prototype), js.prototype.constructor = js, js.prototype.isMeshStandardMaterial = !0, js.prototype.copy = function(s) {
            return ti.prototype.copy.call(this, s), this.defines = {
                STANDARD: ""
            }, this.color.copy(s.color), this.roughness = s.roughness, this.metalness = s.metalness, this.map = s.map, this.lightMap = s.lightMap, this.lightMapIntensity = s.lightMapIntensity, this.aoMap = s.aoMap, this.aoMapIntensity = s.aoMapIntensity, this.emissive.copy(s.emissive), this.emissiveMap = s.emissiveMap, this.emissiveIntensity = s.emissiveIntensity, this.bumpMap = s.bumpMap, this.bumpScale = s.bumpScale, this.normalMap = s.normalMap, this.normalMapType = s.normalMapType, this.normalScale.copy(s.normalScale), this.displacementMap = s.displacementMap, this.displacementScale = s.displacementScale, this.displacementBias = s.displacementBias, this.roughnessMap = s.roughnessMap, this.metalnessMap = s.metalnessMap, this.alphaMap = s.alphaMap, this.envMap = s.envMap, this.envMapIntensity = s.envMapIntensity, this.refractionRatio = s.refractionRatio, this.wireframe = s.wireframe, this.wireframeLinewidth = s.wireframeLinewidth, this.wireframeLinecap = s.wireframeLinecap, this.wireframeLinejoin = s.wireframeLinejoin, this.skinning = s.skinning, this.morphTargets = s.morphTargets, this.morphNormals = s.morphNormals, this.flatShading = s.flatShading, this.vertexTangents = s.vertexTangents, this
        }, Ys.prototype = Object.create(js.prototype), Ys.prototype.constructor = Ys, Ys.prototype.isMeshPhysicalMaterial = !0, Ys.prototype.copy = function(s) {
            return js.prototype.copy.call(this, s), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.clearcoat = s.clearcoat, this.clearcoatMap = s.clearcoatMap, this.clearcoatRoughness = s.clearcoatRoughness, this.clearcoatRoughnessMap = s.clearcoatRoughnessMap, this.clearcoatNormalMap = s.clearcoatNormalMap, this.clearcoatNormalScale.copy(s.clearcoatNormalScale), this.reflectivity = s.reflectivity, s.sheen ? this.sheen = (this.sheen || new Rt).copy(s.sheen) : this.sheen = null, this.transmission = s.transmission, this.transmissionMap = s.transmissionMap, this
        };
        class Gu extends ti {
            constructor(e) {
                super(), this.type = "MeshPhongMaterial", this.color = new Rt(16777215), this.specular = new Rt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Rt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ht(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this
            }
        }
        Gu.prototype.isMeshPhongMaterial = !0;
        class oh extends ti {
            constructor(e) {
                super(), this.defines = {
                    TOON: ""
                }, this.type = "MeshToonMaterial", this.color = new Rt(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Rt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ht(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
            }
        }
        oh.prototype.isMeshToonMaterial = !0;
        class lh extends ti {
            constructor(e) {
                super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ht(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this
            }
        }
        lh.prototype.isMeshNormalMaterial = !0;
        class ch extends ti {
            constructor(e) {
                super(), this.type = "MeshLambertMaterial", this.color = new Rt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Rt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
            }
        }
        ch.prototype.isMeshLambertMaterial = !0;
        class eu extends ti {
            constructor(e) {
                super(), this.defines = {
                    MATCAP: ""
                }, this.type = "MeshMatcapMaterial", this.color = new Rt(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ht(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.defines = {
                    MATCAP: ""
                }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this
            }
        }
        eu.prototype.isMeshMatcapMaterial = !0;
        class tu extends Xr {
            constructor(e) {
                super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
            }
        }
        tu.prototype.isLineDashedMaterial = !0;
        var Ep = Object.freeze({
            __proto__: null,
            ShadowMaterial: Kh,
            SpriteMaterial: ci,
            RawShaderMaterial: Xs,
            ShaderMaterial: Cn,
            PointsMaterial: Ml,
            MeshPhysicalMaterial: Ys,
            MeshStandardMaterial: js,
            MeshPhongMaterial: Gu,
            MeshToonMaterial: oh,
            MeshNormalMaterial: lh,
            MeshLambertMaterial: ch,
            MeshDepthMaterial: S,
            MeshDistanceMaterial: L,
            MeshBasicMaterial: Gi,
            MeshMatcapMaterial: eu,
            LineDashedMaterial: tu,
            LineBasicMaterial: Xr,
            Material: ti
        });
        const Br = {
            arraySlice: function(s, e, r) {
                return Br.isTypedArray(s) ? new s.constructor(s.subarray(e, r !== void 0 ? r : s.length)) : s.slice(e, r)
            },
            convertArray: function(s, e, r) {
                return !s || !r && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s)
            },
            isTypedArray: function(s) {
                return ArrayBuffer.isView(s) && !(s instanceof DataView)
            },
            getKeyframeOrder: function(s) {
                const e = s.length,
                    r = new Array(e);
                for (let h = 0; h !== e; ++h) r[h] = h;
                return r.sort(function(h, c) {
                    return s[h] - s[c]
                }), r
            },
            sortedArray: function(s, e, r) {
                const h = s.length,
                    c = new s.constructor(h);
                for (let v = 0, w = 0; w !== h; ++v) {
                    const E = r[v] * e;
                    for (let T = 0; T !== e; ++T) c[w++] = s[E + T]
                }
                return c
            },
            flattenJSON: function(s, e, r, h) {
                let c = 1,
                    v = s[0];
                for (; v !== void 0 && v[h] === void 0;) v = s[c++];
                if (v === void 0) return;
                let w = v[h];
                if (w !== void 0)
                    if (Array.isArray(w))
                        do w = v[h], w !== void 0 && (e.push(v.time), r.push.apply(r, w)), v = s[c++]; while (v !== void 0);
                    else if (w.toArray !== void 0)
                    do w = v[h], w !== void 0 && (e.push(v.time), w.toArray(r, r.length)), v = s[c++]; while (v !== void 0);
                else
                    do w = v[h], w !== void 0 && (e.push(v.time), r.push(w)), v = s[c++]; while (v !== void 0)
            },
            subclip: function(s, e, r, h, c = 30) {
                const v = s.clone();
                v.name = e;
                const w = [];
                for (let T = 0; T < v.tracks.length; ++T) {
                    const B = v.tracks[T],
                        Q = B.getValueSize(),
                        k = [],
                        i = [];
                    for (let t = 0; t < B.times.length; ++t) {
                        const a = B.times[t] * c;
                        if (!(a < r || a >= h)) {
                            k.push(B.times[t]);
                            for (let l = 0; l < Q; ++l) i.push(B.values[t * Q + l])
                        }
                    }
                    k.length !== 0 && (B.times = Br.convertArray(k, B.times.constructor), B.values = Br.convertArray(i, B.values.constructor), w.push(B))
                }
                v.tracks = w;
                let E = 1 / 0;
                for (let T = 0; T < v.tracks.length; ++T) E > v.tracks[T].times[0] && (E = v.tracks[T].times[0]);
                for (let T = 0; T < v.tracks.length; ++T) v.tracks[T].shift(-1 * E);
                return v.resetDuration(), v
            },
            makeClipAdditive: function(s, e = 0, r = s, h = 30) {
                h <= 0 && (h = 30);
                const c = r.tracks.length,
                    v = e / h;
                for (let w = 0; w < c; ++w) {
                    const E = r.tracks[w],
                        T = E.ValueTypeName;
                    if (T === "bool" || T === "string") continue;
                    const B = s.tracks.find(function(g) {
                        return g.name === E.name && g.ValueTypeName === T
                    });
                    if (B === void 0) continue;
                    let Q = 0;
                    const k = E.getValueSize();
                    E.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (Q = k / 3);
                    let i = 0;
                    const t = B.getValueSize();
                    B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (i = t / 3);
                    const a = E.times.length - 1;
                    let l;
                    if (v <= E.times[0]) {
                        const g = Q,
                            x = k - Q;
                        l = Br.arraySlice(E.values, g, x)
                    } else if (v >= E.times[a]) {
                        const g = a * k + Q,
                            x = g + k - Q;
                        l = Br.arraySlice(E.values, g, x)
                    } else {
                        const g = E.createInterpolant(),
                            x = Q,
                            A = k - Q;
                        g.evaluate(v), l = Br.arraySlice(g.resultBuffer, x, A)
                    }
                    T === "quaternion" && new Bn().fromArray(l).normalize().conjugate().toArray(l);
                    const d = B.times.length;
                    for (let g = 0; g < d; ++g) {
                        const x = g * t + i;
                        if (T === "quaternion") Bn.multiplyQuaternionsFlat(B.values, x, l, 0, B.values, x);
                        else {
                            const A = t - 2 * i;
                            for (let M = 0; M < A; ++M) B.values[x + M] -= l[M]
                        }
                    }
                }
                return s.blendMode = 2501, s
            }
        };

        function ts(s, e, r, h) {
            this.parameterPositions = s, this._cachedIndex = 0, this.resultBuffer = h !== void 0 ? h : new e.constructor(r), this.sampleValues = e, this.valueSize = r
        }

        function iu(s, e, r, h) {
            ts.call(this, s, e, r, h), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
        }

        function hh(s, e, r, h) {
            ts.call(this, s, e, r, h)
        }

        function Cs(s, e, r, h) {
            ts.call(this, s, e, r, h)
        }
        Object.assign(ts.prototype, {
            evaluate: function(s) {
                const e = this.parameterPositions;
                let r = this._cachedIndex,
                    h = e[r],
                    c = e[r - 1];
                e: {
                    t: {
                        let v;i: {
                            n: if (!(s < h)) {
                                for (let w = r + 2;;) {
                                    if (h === void 0) {
                                        if (s < c) break n;
                                        return r = e.length, this._cachedIndex = r, this.afterEnd_(r - 1, s, c)
                                    }
                                    if (r === w) break;
                                    if (c = h, h = e[++r], s < h) break t
                                }
                                v = e.length;
                                break i
                            }if (s >= c) break e;
                            {
                                const w = e[1];
                                s < w && (r = 2, c = w);
                                for (let E = r - 2;;) {
                                    if (c === void 0) return this._cachedIndex = 0, this.beforeStart_(0, s, h);
                                    if (r === E) break;
                                    if (h = c, c = e[--r - 1], s >= c) break t
                                }
                                v = r, r = 0
                            }
                        }
                        for (; r < v;) {
                            const w = r + v >>> 1;
                            s < e[w] ? v = w : r = w + 1
                        }
                        if (h = e[r], c = e[r - 1], c === void 0) return this._cachedIndex = 0,
                        this.beforeStart_(0, s, h);
                        if (h === void 0) return r = e.length,
                        this._cachedIndex = r,
                        this.afterEnd_(r - 1, c, s)
                    }
                    this._cachedIndex = r,
                    this.intervalChanged_(r, c, h)
                }
                return this.interpolate_(r, c, s, h)
            },
            settings: null,
            DefaultSettings_: {},
            getSettings_: function() {
                return this.settings || this.DefaultSettings_
            },
            copySampleValue_: function(s) {
                const e = this.resultBuffer,
                    r = this.sampleValues,
                    h = this.valueSize,
                    c = s * h;
                for (let v = 0; v !== h; ++v) e[v] = r[c + v];
                return e
            },
            interpolate_: function() {
                throw new Error("call to abstract method")
            },
            intervalChanged_: function() {}
        }), Object.assign(ts.prototype, {
            beforeStart_: ts.prototype.copySampleValue_,
            afterEnd_: ts.prototype.copySampleValue_
        }), iu.prototype = Object.assign(Object.create(ts.prototype), {
            constructor: iu,
            DefaultSettings_: {
                endingStart: 2400,
                endingEnd: 2400
            },
            intervalChanged_: function(s, e, r) {
                const h = this.parameterPositions;
                let c = s - 2,
                    v = s + 1,
                    w = h[c],
                    E = h[v];
                if (w === void 0) switch (this.getSettings_().endingStart) {
                    case 2401:
                        c = s, w = 2 * e - r;
                        break;
                    case 2402:
                        c = h.length - 2, w = e + h[c] - h[c + 1];
                        break;
                    default:
                        c = s, w = r
                }
                if (E === void 0) switch (this.getSettings_().endingEnd) {
                    case 2401:
                        v = s, E = 2 * r - e;
                        break;
                    case 2402:
                        v = 1, E = r + h[1] - h[0];
                        break;
                    default:
                        v = s - 1, E = e
                }
                const T = .5 * (r - e),
                    B = this.valueSize;
                this._weightPrev = T / (e - w), this._weightNext = T / (E - r), this._offsetPrev = c * B, this._offsetNext = v * B
            },
            interpolate_: function(s, e, r, h) {
                const c = this.resultBuffer,
                    v = this.sampleValues,
                    w = this.valueSize,
                    E = s * w,
                    T = E - w,
                    B = this._offsetPrev,
                    Q = this._offsetNext,
                    k = this._weightPrev,
                    i = this._weightNext,
                    t = (r - e) / (h - e),
                    a = t * t,
                    l = a * t,
                    d = -k * l + 2 * k * a - k * t,
                    g = (1 + k) * l + (-1.5 - 2 * k) * a + (-.5 + k) * t + 1,
                    x = (-1 - i) * l + (1.5 + i) * a + .5 * t,
                    A = i * l - i * a;
                for (let M = 0; M !== w; ++M) c[M] = d * v[B + M] + g * v[T + M] + x * v[E + M] + A * v[Q + M];
                return c
            }
        }), hh.prototype = Object.assign(Object.create(ts.prototype), {
            constructor: hh,
            interpolate_: function(s, e, r, h) {
                const c = this.resultBuffer,
                    v = this.sampleValues,
                    w = this.valueSize,
                    E = s * w,
                    T = E - w,
                    B = (r - e) / (h - e),
                    Q = 1 - B;
                for (let k = 0; k !== w; ++k) c[k] = v[T + k] * Q + v[E + k] * B;
                return c
            }
        }), Cs.prototype = Object.assign(Object.create(ts.prototype), {
            constructor: Cs,
            interpolate_: function(s) {
                return this.copySampleValue_(s - 1)
            }
        });
        class Bs {
            constructor(e, r, h, c) {
                if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
                if (r === void 0 || r.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
                this.name = e, this.times = Br.convertArray(r, this.TimeBufferType), this.values = Br.convertArray(h, this.ValueBufferType), this.setInterpolation(c || this.DefaultInterpolation)
            }
            static toJSON(e) {
                const r = e.constructor;
                let h;
                if (r.toJSON !== this.toJSON) h = r.toJSON(e);
                else {
                    h = {
                        name: e.name,
                        times: Br.convertArray(e.times, Array),
                        values: Br.convertArray(e.values, Array)
                    };
                    const c = e.getInterpolation();
                    c !== e.DefaultInterpolation && (h.interpolation = c)
                }
                return h.type = e.ValueTypeName, h
            }
            InterpolantFactoryMethodDiscrete(e) {
                return new Cs(this.times, this.values, this.getValueSize(), e)
            }
            InterpolantFactoryMethodLinear(e) {
                return new hh(this.times, this.values, this.getValueSize(), e)
            }
            InterpolantFactoryMethodSmooth(e) {
                return new iu(this.times, this.values, this.getValueSize(), e)
            }
            setInterpolation(e) {
                let r;
                switch (e) {
                    case 2300:
                        r = this.InterpolantFactoryMethodDiscrete;
                        break;
                    case 2301:
                        r = this.InterpolantFactoryMethodLinear;
                        break;
                    case 2302:
                        r = this.InterpolantFactoryMethodSmooth
                }
                if (r === void 0) {
                    const h = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                    if (this.createInterpolant === void 0) {
                        if (e === this.DefaultInterpolation) throw new Error(h);
                        this.setInterpolation(this.DefaultInterpolation)
                    }
                    return console.warn("THREE.KeyframeTrack:", h), this
                }
                return this.createInterpolant = r, this
            }
            getInterpolation() {
                switch (this.createInterpolant) {
                    case this.InterpolantFactoryMethodDiscrete:
                        return 2300;
                    case this.InterpolantFactoryMethodLinear:
                        return 2301;
                    case this.InterpolantFactoryMethodSmooth:
                        return 2302
                }
            }
            getValueSize() {
                return this.values.length / this.times.length
            }
            shift(e) {
                if (e !== 0) {
                    const r = this.times;
                    for (let h = 0, c = r.length; h !== c; ++h) r[h] += e
                }
                return this
            }
            scale(e) {
                if (e !== 1) {
                    const r = this.times;
                    for (let h = 0, c = r.length; h !== c; ++h) r[h] *= e
                }
                return this
            }
            trim(e, r) {
                const h = this.times,
                    c = h.length;
                let v = 0,
                    w = c - 1;
                for (; v !== c && h[v] < e;) ++v;
                for (; w !== -1 && h[w] > r;) --w;
                if (++w, v !== 0 || w !== c) {
                    v >= w && (w = Math.max(w, 1), v = w - 1);
                    const E = this.getValueSize();
                    this.times = Br.arraySlice(h, v, w), this.values = Br.arraySlice(this.values, v * E, w * E)
                }
                return this
            }
            validate() {
                let e = !0;
                const r = this.getValueSize();
                r - Math.floor(r) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
                const h = this.times,
                    c = this.values,
                    v = h.length;
                v === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
                let w = null;
                for (let E = 0; E !== v; E++) {
                    const T = h[E];
                    if (typeof T == "number" && isNaN(T)) {
                        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, E, T), e = !1;
                        break
                    }
                    if (w !== null && w > T) {
                        console.error("THREE.KeyframeTrack: Out of order keys.", this, E, T, w), e = !1;
                        break
                    }
                    w = T
                }
                if (c !== void 0 && Br.isTypedArray(c))
                    for (let E = 0, T = c.length; E !== T; ++E) {
                        const B = c[E];
                        if (isNaN(B)) {
                            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, E, B), e = !1;
                            break
                        }
                    }
                return e
            }
            optimize() {
                const e = Br.arraySlice(this.times),
                    r = Br.arraySlice(this.values),
                    h = this.getValueSize(),
                    c = this.getInterpolation() === 2302,
                    v = e.length - 1;
                let w = 1;
                for (let E = 1; E < v; ++E) {
                    let T = !1;
                    const B = e[E];
                    if (B !== e[E + 1] && (E !== 1 || B !== e[0]))
                        if (c) T = !0;
                        else {
                            const Q = E * h,
                                k = Q - h,
                                i = Q + h;
                            for (let t = 0; t !== h; ++t) {
                                const a = r[Q + t];
                                if (a !== r[k + t] || a !== r[i + t]) {
                                    T = !0;
                                    break
                                }
                            }
                        } if (T) {
                        if (E !== w) {
                            e[w] = e[E];
                            const Q = E * h,
                                k = w * h;
                            for (let i = 0; i !== h; ++i) r[k + i] = r[Q + i]
                        }++w
                    }
                }
                if (v > 0) {
                    e[w] = e[v];
                    for (let E = v * h, T = w * h, B = 0; B !== h; ++B) r[T + B] = r[E + B];
                    ++w
                }
                return w !== e.length ? (this.times = Br.arraySlice(e, 0, w), this.values = Br.arraySlice(r, 0, w * h)) : (this.times = e, this.values = r), this
            }
            clone() {
                const e = Br.arraySlice(this.times, 0),
                    r = Br.arraySlice(this.values, 0),
                    h = new this.constructor(this.name, e, r);
                return h.createInterpolant = this.createInterpolant, h
            }
        }
        Bs.prototype.TimeBufferType = Float32Array, Bs.prototype.ValueBufferType = Float32Array, Bs.prototype.DefaultInterpolation = 2301;
        class jo extends Bs {}
        jo.prototype.ValueTypeName = "bool", jo.prototype.ValueBufferType = Array, jo.prototype.DefaultInterpolation = 2300, jo.prototype.InterpolantFactoryMethodLinear = void 0, jo.prototype.InterpolantFactoryMethodSmooth = void 0;
        class Yo extends Bs {}
        Yo.prototype.ValueTypeName = "color";
        class uh extends Bs {}

        function nu(s, e, r, h) {
            ts.call(this, s, e, r, h)
        }
        uh.prototype.ValueTypeName = "number", nu.prototype = Object.assign(Object.create(ts.prototype), {
            constructor: nu,
            interpolate_: function(s, e, r, h) {
                const c = this.resultBuffer,
                    v = this.sampleValues,
                    w = this.valueSize,
                    E = (r - e) / (h - e);
                let T = s * w;
                for (let B = T + w; T !== B; T += 4) Bn.slerpFlat(c, 0, v, T - w, v, T, E);
                return c
            }
        });
        class gc extends Bs {
            InterpolantFactoryMethodLinear(e) {
                return new nu(this.times, this.values, this.getValueSize(), e)
            }
        }
        gc.prototype.ValueTypeName = "quaternion", gc.prototype.DefaultInterpolation = 2301, gc.prototype.InterpolantFactoryMethodSmooth = void 0;
        class qo extends Bs {}
        qo.prototype.ValueTypeName = "string", qo.prototype.ValueBufferType = Array, qo.prototype.DefaultInterpolation = 2300, qo.prototype.InterpolantFactoryMethodLinear = void 0, qo.prototype.InterpolantFactoryMethodSmooth = void 0;
        class yc extends Bs {}
        yc.prototype.ValueTypeName = "vector";
        class dh {
            constructor(e, r = -1, h, c = 2500) {
                this.name = e, this.tracks = h, this.duration = r, this.blendMode = c, this.uuid = Mi.generateUUID(), this.duration < 0 && this.resetDuration()
            }
            static parse(e) {
                const r = [],
                    h = e.tracks,
                    c = 1 / (e.fps || 1);
                for (let w = 0, E = h.length; w !== E; ++w) r.push(Sp(h[w]).scale(c));
                const v = new this(e.name, e.duration, r, e.blendMode);
                return v.uuid = e.uuid, v
            }
            static toJSON(e) {
                const r = [],
                    h = e.tracks,
                    c = {
                        name: e.name,
                        duration: e.duration,
                        tracks: r,
                        uuid: e.uuid,
                        blendMode: e.blendMode
                    };
                for (let v = 0, w = h.length; v !== w; ++v) r.push(Bs.toJSON(h[v]));
                return c
            }
            static CreateFromMorphTargetSequence(e, r, h, c) {
                const v = r.length,
                    w = [];
                for (let E = 0; E < v; E++) {
                    let T = [],
                        B = [];
                    T.push((E + v - 1) % v, E, (E + 1) % v), B.push(0, 1, 0);
                    const Q = Br.getKeyframeOrder(T);
                    T = Br.sortedArray(T, 1, Q), B = Br.sortedArray(B, 1, Q), c || T[0] !== 0 || (T.push(v), B.push(B[0])), w.push(new uh(".morphTargetInfluences[" + r[E].name + "]", T, B).scale(1 / h))
                }
                return new this(e, -1, w)
            }
            static findByName(e, r) {
                let h = e;
                if (!Array.isArray(e)) {
                    const c = e;
                    h = c.geometry && c.geometry.animations || c.animations
                }
                for (let c = 0; c < h.length; c++)
                    if (h[c].name === r) return h[c];
                return null
            }
            static CreateClipsFromMorphTargetSequences(e, r, h) {
                const c = {},
                    v = /^([\w-]*?)([\d]+)$/;
                for (let E = 0, T = e.length; E < T; E++) {
                    const B = e[E],
                        Q = B.name.match(v);
                    if (Q && Q.length > 1) {
                        const k = Q[1];
                        let i = c[k];
                        i || (c[k] = i = []), i.push(B)
                    }
                }
                const w = [];
                for (const E in c) w.push(this.CreateFromMorphTargetSequence(E, c[E], r, h));
                return w
            }
            static parseAnimation(e, r) {
                if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
                const h = function(Q, k, i, t, a) {
                        if (i.length !== 0) {
                            const l = [],
                                d = [];
                            Br.flattenJSON(i, l, d, t), l.length !== 0 && a.push(new Q(k, l, d))
                        }
                    },
                    c = [],
                    v = e.name || "default",
                    w = e.fps || 30,
                    E = e.blendMode;
                let T = e.length || -1;
                const B = e.hierarchy || [];
                for (let Q = 0; Q < B.length; Q++) {
                    const k = B[Q].keys;
                    if (k && k.length !== 0)
                        if (k[0].morphTargets) {
                            const i = {};
                            let t;
                            for (t = 0; t < k.length; t++)
                                if (k[t].morphTargets)
                                    for (let a = 0; a < k[t].morphTargets.length; a++) i[k[t].morphTargets[a]] = -1;
                            for (const a in i) {
                                const l = [],
                                    d = [];
                                for (let g = 0; g !== k[t].morphTargets.length; ++g) {
                                    const x = k[t];
                                    l.push(x.time), d.push(x.morphTarget === a ? 1 : 0)
                                }
                                c.push(new uh(".morphTargetInfluence[" + a + "]", l, d))
                            }
                            T = i.length * (w || 1)
                        } else {
                            const i = ".bones[" + r[Q].name + "]";
                            h(yc, i + ".position", k, "pos", c), h(gc, i + ".quaternion", k, "rot", c), h(yc, i + ".scale", k, "scl", c)
                        }
                }
                return c.length === 0 ? null : new this(v, T, c, E)
            }
            resetDuration() {
                let e = 0;
                for (let r = 0, h = this.tracks.length; r !== h; ++r) {
                    const c = this.tracks[r];
                    e = Math.max(e, c.times[c.times.length - 1])
                }
                return this.duration = e, this
            }
            trim() {
                for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
                return this
            }
            validate() {
                let e = !0;
                for (let r = 0; r < this.tracks.length; r++) e = e && this.tracks[r].validate();
                return e
            }
            optimize() {
                for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
                return this
            }
            clone() {
                const e = [];
                for (let r = 0; r < this.tracks.length; r++) e.push(this.tracks[r].clone());
                return new this.constructor(this.name, this.duration, e, this.blendMode)
            }
            toJSON() {
                return this.constructor.toJSON(this)
            }
        }

        function Sp(s) {
            if (s.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
            const e = function(r) {
                switch (r.toLowerCase()) {
                    case "scalar":
                    case "double":
                    case "float":
                    case "number":
                    case "integer":
                        return uh;
                    case "vector":
                    case "vector2":
                    case "vector3":
                    case "vector4":
                        return yc;
                    case "color":
                        return Yo;
                    case "quaternion":
                        return gc;
                    case "bool":
                    case "boolean":
                        return jo;
                    case "string":
                        return qo
                }
                throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r)
            }(s.type);
            if (s.times === void 0) {
                const r = [],
                    h = [];
                Br.flattenJSON(s.keys, r, h, "value"), s.times = r, s.values = h
            }
            return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation)
        }
        const Fl = {
            enabled: !1,
            files: {},
            add: function(s, e) {
                this.enabled !== !1 && (this.files[s] = e)
            },
            get: function(s) {
                if (this.enabled !== !1) return this.files[s]
            },
            remove: function(s) {
                delete this.files[s]
            },
            clear: function() {
                this.files = {}
            }
        };

        function Hu(s, e, r) {
            const h = this;
            let c, v = !1,
                w = 0,
                E = 0;
            const T = [];
            this.onStart = void 0, this.onLoad = s, this.onProgress = e, this.onError = r, this.itemStart = function(B) {
                E++, v === !1 && h.onStart !== void 0 && h.onStart(B, w, E), v = !0
            }, this.itemEnd = function(B) {
                w++, h.onProgress !== void 0 && h.onProgress(B, w, E), w === E && (v = !1, h.onLoad !== void 0 && h.onLoad())
            }, this.itemError = function(B) {
                h.onError !== void 0 && h.onError(B)
            }, this.resolveURL = function(B) {
                return c ? c(B) : B
            }, this.setURLModifier = function(B) {
                return c = B, this
            }, this.addHandler = function(B, Q) {
                return T.push(B, Q), this
            }, this.removeHandler = function(B) {
                const Q = T.indexOf(B);
                return Q !== -1 && T.splice(Q, 2), this
            }, this.getHandler = function(B) {
                for (let Q = 0, k = T.length; Q < k; Q += 2) {
                    const i = T[Q],
                        t = T[Q + 1];
                    if (i.global && (i.lastIndex = 0), i.test(B)) return t
                }
                return null
            }
        }
        const ru = new Hu;

        function _r(s) {
            this.manager = s !== void 0 ? s : ru, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
        }
        Object.assign(_r.prototype, {
            load: function() {},
            loadAsync: function(s, e) {
                const r = this;
                return new Promise(function(h, c) {
                    r.load(s, h, e, c)
                })
            },
            parse: function() {},
            setCrossOrigin: function(s) {
                return this.crossOrigin = s, this
            },
            setWithCredentials: function(s) {
                return this.withCredentials = s, this
            },
            setPath: function(s) {
                return this.path = s, this
            },
            setResourcePath: function(s) {
                return this.resourcePath = s, this
            },
            setRequestHeader: function(s) {
                return this.requestHeader = s, this
            }
        });
        const is = {};

        function hs(s) {
            _r.call(this, s)
        }
        hs.prototype = Object.assign(Object.create(_r.prototype), {
            constructor: hs,
            load: function(s, e, r, h) {
                s === void 0 && (s = ""), this.path !== void 0 && (s = this.path + s), s = this.manager.resolveURL(s);
                const c = this,
                    v = Fl.get(s);
                if (v !== void 0) return c.manager.itemStart(s), setTimeout(function() {
                    e && e(v), c.manager.itemEnd(s)
                }, 0), v;
                if (is[s] !== void 0) return void is[s].push({
                    onLoad: e,
                    onProgress: r,
                    onError: h
                });
                const w = s.match(/^data:(.*?)(;base64)?,(.*)$/);
                let E;
                if (w) {
                    const T = w[1],
                        B = !!w[2];
                    let Q = w[3];
                    Q = decodeURIComponent(Q), B && (Q = atob(Q));
                    try {
                        let k;
                        const i = (this.responseType || "").toLowerCase();
                        switch (i) {
                            case "arraybuffer":
                            case "blob":
                                const t = new Uint8Array(Q.length);
                                for (let l = 0; l < Q.length; l++) t[l] = Q.charCodeAt(l);
                                k = i === "blob" ? new Blob([t.buffer], {
                                    type: T
                                }) : t.buffer;
                                break;
                            case "document":
                                k = new DOMParser().parseFromString(Q, T);
                                break;
                            case "json":
                                k = JSON.parse(Q);
                                break;
                            default:
                                k = Q
                        }
                        setTimeout(function() {
                            e && e(k), c.manager.itemEnd(s)
                        }, 0)
                    } catch (k) {
                        setTimeout(function() {
                            h && h(k), c.manager.itemError(s), c.manager.itemEnd(s)
                        }, 0)
                    }
                } else {
                    is[s] = [], is[s].push({
                        onLoad: e,
                        onProgress: r,
                        onError: h
                    }), E = new XMLHttpRequest, E.open("GET", s, !0), E.addEventListener("load", function(T) {
                        const B = this.response,
                            Q = is[s];
                        if (delete is[s], this.status === 200 || this.status === 0) {
                            this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), Fl.add(s, B);
                            for (let k = 0, i = Q.length; k < i; k++) {
                                const t = Q[k];
                                t.onLoad && t.onLoad(B)
                            }
                            c.manager.itemEnd(s)
                        } else {
                            for (let k = 0, i = Q.length; k < i; k++) {
                                const t = Q[k];
                                t.onError && t.onError(T)
                            }
                            c.manager.itemError(s), c.manager.itemEnd(s)
                        }
                    }, !1), E.addEventListener("progress", function(T) {
                        const B = is[s];
                        for (let Q = 0, k = B.length; Q < k; Q++) {
                            const i = B[Q];
                            i.onProgress && i.onProgress(T)
                        }
                    }, !1), E.addEventListener("error", function(T) {
                        const B = is[s];
                        delete is[s];
                        for (let Q = 0, k = B.length; Q < k; Q++) {
                            const i = B[Q];
                            i.onError && i.onError(T)
                        }
                        c.manager.itemError(s), c.manager.itemEnd(s)
                    }, !1), E.addEventListener("abort", function(T) {
                        const B = is[s];
                        delete is[s];
                        for (let Q = 0, k = B.length; Q < k; Q++) {
                            const i = B[Q];
                            i.onError && i.onError(T)
                        }
                        c.manager.itemError(s), c.manager.itemEnd(s)
                    }, !1), this.responseType !== void 0 && (E.responseType = this.responseType), this.withCredentials !== void 0 && (E.withCredentials = this.withCredentials), E.overrideMimeType && E.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
                    for (const T in this.requestHeader) E.setRequestHeader(T, this.requestHeader[T]);
                    E.send(null)
                }
                return c.manager.itemStart(s), E
            },
            setResponseType: function(s) {
                return this.responseType = s, this
            },
            setMimeType: function(s) {
                return this.mimeType = s, this
            }
        });

        function Wu(s) {
            _r.call(this, s)
        }
        Wu.prototype = Object.assign(Object.create(_r.prototype), {
            constructor: Wu,
            load: function(s, e, r, h) {
                const c = this,
                    v = [],
                    w = new hc,
                    E = new hs(this.manager);
                E.setPath(this.path), E.setResponseType("arraybuffer"), E.setRequestHeader(this.requestHeader), E.setWithCredentials(c.withCredentials);
                let T = 0;

                function B(Q) {
                    E.load(s[Q], function(k) {
                        const i = c.parse(k, !0);
                        v[Q] = {
                            width: i.width,
                            height: i.height,
                            format: i.format,
                            mipmaps: i.mipmaps
                        }, T += 1, T === 6 && (i.mipmapCount === 1 && (w.minFilter = 1006), w.image = v, w.format = i.format, w.needsUpdate = !0, e && e(w))
                    }, r, h)
                }
                if (Array.isArray(s))
                    for (let Q = 0, k = s.length; Q < k; ++Q) B(Q);
                else E.load(s, function(Q) {
                    const k = c.parse(Q, !0);
                    if (k.isCubemap) {
                        const i = k.mipmaps.length / k.mipmapCount;
                        for (let t = 0; t < i; t++) {
                            v[t] = {
                                mipmaps: []
                            };
                            for (let a = 0; a < k.mipmapCount; a++) v[t].mipmaps.push(k.mipmaps[t * k.mipmapCount + a]), v[t].format = k.format, v[t].width = k.width, v[t].height = k.height
                        }
                        w.image = v
                    } else w.image.width = k.width, w.image.height = k.height, w.mipmaps = k.mipmaps;
                    k.mipmapCount === 1 && (w.minFilter = 1006), w.format = k.format, w.needsUpdate = !0, e && e(w)
                }, r, h);
                return w
            }
        });
        class ph extends _r {
            constructor(e) {
                super(e)
            }
            load(e, r, h, c) {
                this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
                const v = this,
                    w = Fl.get(e);
                if (w !== void 0) return v.manager.itemStart(e), setTimeout(function() {
                    r && r(w), v.manager.itemEnd(e)
                }, 0), w;
                const E = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

                function T() {
                    E.removeEventListener("load", T, !1), E.removeEventListener("error", B, !1), Fl.add(e, this), r && r(this), v.manager.itemEnd(e)
                }

                function B(Q) {
                    E.removeEventListener("load", T, !1), E.removeEventListener("error", B, !1), c && c(Q), v.manager.itemError(e), v.manager.itemEnd(e)
                }
                return E.addEventListener("load", T, !1), E.addEventListener("error", B, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (E.crossOrigin = this.crossOrigin), v.manager.itemStart(e), E.src = e, E
            }
        }
        class Jd extends _r {
            constructor(e) {
                super(e)
            }
            load(e, r, h, c) {
                const v = new ao,
                    w = new ph(this.manager);
                w.setCrossOrigin(this.crossOrigin), w.setPath(this.path);
                let E = 0;

                function T(B) {
                    w.load(e[B], function(Q) {
                        v.images[B] = Q, E++, E === 6 && (v.needsUpdate = !0, r && r(v))
                    }, void 0, c)
                }
                for (let B = 0; B < e.length; ++B) T(B);
                return v
            }
        }

        function au(s) {
            _r.call(this, s)
        }

        function $o(s) {
            _r.call(this, s)
        }

        function Qa() {
            this.type = "Curve", this.arcLengthDivisions = 200
        }
        au.prototype = Object.assign(Object.create(_r.prototype), {
            constructor: au,
            load: function(s, e, r, h) {
                const c = this,
                    v = new ws,
                    w = new hs(this.manager);
                return w.setResponseType("arraybuffer"), w.setRequestHeader(this.requestHeader), w.setPath(this.path), w.setWithCredentials(c.withCredentials), w.load(s, function(E) {
                    const T = c.parse(E);
                    T && (T.image !== void 0 ? v.image = T.image : T.data !== void 0 && (v.image.width = T.width, v.image.height = T.height, v.image.data = T.data), v.wrapS = T.wrapS !== void 0 ? T.wrapS : 1001, v.wrapT = T.wrapT !== void 0 ? T.wrapT : 1001, v.magFilter = T.magFilter !== void 0 ? T.magFilter : 1006, v.minFilter = T.minFilter !== void 0 ? T.minFilter : 1006, v.anisotropy = T.anisotropy !== void 0 ? T.anisotropy : 1, T.encoding !== void 0 && (v.encoding = T.encoding), T.flipY !== void 0 && (v.flipY = T.flipY), T.format !== void 0 && (v.format = T.format), T.type !== void 0 && (v.type = T.type), T.mipmaps !== void 0 && (v.mipmaps = T.mipmaps, v.minFilter = 1008), T.mipmapCount === 1 && (v.minFilter = 1006), T.generateMipmaps !== void 0 && (v.generateMipmaps = T.generateMipmaps), v.needsUpdate = !0, e && e(v, T))
                }, r, h), v
            }
        }), $o.prototype = Object.assign(Object.create(_r.prototype), {
            constructor: $o,
            load: function(s, e, r, h) {
                const c = new cn,
                    v = new ph(this.manager);
                return v.setCrossOrigin(this.crossOrigin), v.setPath(this.path), v.load(s, function(w) {
                    c.image = w;
                    const E = s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0;
                    c.format = E ? 1022 : 1023, c.needsUpdate = !0, e !== void 0 && e(c)
                }, r, h), c
            }
        }), Object.assign(Qa.prototype, {
            getPoint: function() {
                return console.warn("THREE.Curve: .getPoint() not implemented."), null
            },
            getPointAt: function(s, e) {
                const r = this.getUtoTmapping(s);
                return this.getPoint(r, e)
            },
            getPoints: function(s = 5) {
                const e = [];
                for (let r = 0; r <= s; r++) e.push(this.getPoint(r / s));
                return e
            },
            getSpacedPoints: function(s = 5) {
                const e = [];
                for (let r = 0; r <= s; r++) e.push(this.getPointAt(r / s));
                return e
            },
            getLength: function() {
                const s = this.getLengths();
                return s[s.length - 1]
            },
            getLengths: function(s) {
                if (s === void 0 && (s = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === s + 1 && !this.needsUpdate) return this.cacheArcLengths;
                this.needsUpdate = !1;
                const e = [];
                let r, h = this.getPoint(0),
                    c = 0;
                e.push(0);
                for (let v = 1; v <= s; v++) r = this.getPoint(v / s), c += r.distanceTo(h), e.push(c), h = r;
                return this.cacheArcLengths = e, e
            },
            updateArcLengths: function() {
                this.needsUpdate = !0, this.getLengths()
            },
            getUtoTmapping: function(s, e) {
                const r = this.getLengths();
                let h = 0;
                const c = r.length;
                let v;
                v = e || s * r[c - 1];
                let w, E = 0,
                    T = c - 1;
                for (; E <= T;)
                    if (h = Math.floor(E + (T - E) / 2), w = r[h] - v, w < 0) E = h + 1;
                    else {
                        if (!(w > 0)) {
                            T = h;
                            break
                        }
                        T = h - 1
                    } if (h = T, r[h] === v) return h / (c - 1);
                const B = r[h];
                return (h + (v - B) / (r[h + 1] - B)) / (c - 1)
            },
            getTangent: function(s, e) {
                let h = s - 1e-4,
                    c = s + 1e-4;
                h < 0 && (h = 0), c > 1 && (c = 1);
                const v = this.getPoint(h),
                    w = this.getPoint(c),
                    E = e || (v.isVector2 ? new Ht : new ge);
                return E.copy(w).sub(v).normalize(), E
            },
            getTangentAt: function(s, e) {
                const r = this.getUtoTmapping(s);
                return this.getTangent(r, e)
            },
            computeFrenetFrames: function(s, e) {
                const r = new ge,
                    h = [],
                    c = [],
                    v = [],
                    w = new ge,
                    E = new Ui;
                for (let i = 0; i <= s; i++) {
                    const t = i / s;
                    h[i] = this.getTangentAt(t, new ge), h[i].normalize()
                }
                c[0] = new ge, v[0] = new ge;
                let T = Number.MAX_VALUE;
                const B = Math.abs(h[0].x),
                    Q = Math.abs(h[0].y),
                    k = Math.abs(h[0].z);
                B <= T && (T = B, r.set(1, 0, 0)), Q <= T && (T = Q, r.set(0, 1, 0)), k <= T && r.set(0, 0, 1), w.crossVectors(h[0], r).normalize(), c[0].crossVectors(h[0], w), v[0].crossVectors(h[0], c[0]);
                for (let i = 1; i <= s; i++) {
                    if (c[i] = c[i - 1].clone(), v[i] = v[i - 1].clone(), w.crossVectors(h[i - 1], h[i]), w.length() > Number.EPSILON) {
                        w.normalize();
                        const t = Math.acos(Mi.clamp(h[i - 1].dot(h[i]), -1, 1));
                        c[i].applyMatrix4(E.makeRotationAxis(w, t))
                    }
                    v[i].crossVectors(h[i], c[i])
                }
                if (e === !0) {
                    let i = Math.acos(Mi.clamp(c[0].dot(c[s]), -1, 1));
                    i /= s, h[0].dot(w.crossVectors(c[0], c[s])) > 0 && (i = -i);
                    for (let t = 1; t <= s; t++) c[t].applyMatrix4(E.makeRotationAxis(h[t], i * t)), v[t].crossVectors(h[t], c[t])
                }
                return {
                    tangents: h,
                    normals: c,
                    binormals: v
                }
            },
            clone: function() {
                return new this.constructor().copy(this)
            },
            copy: function(s) {
                return this.arcLengthDivisions = s.arcLengthDivisions, this
            },
            toJSON: function() {
                const s = {
                    metadata: {
                        version: 4.5,
                        type: "Curve",
                        generator: "Curve.toJSON"
                    }
                };
                return s.arcLengthDivisions = this.arcLengthDivisions, s.type = this.type, s
            },
            fromJSON: function(s) {
                return this.arcLengthDivisions = s.arcLengthDivisions, this
            }
        });
        class fh extends Qa {
            constructor(e = 0, r = 0, h = 1, c = 1, v = 0, w = 2 * Math.PI, E = !1, T = 0) {
                super(), this.type = "EllipseCurve", this.aX = e, this.aY = r, this.xRadius = h, this.yRadius = c, this.aStartAngle = v, this.aEndAngle = w, this.aClockwise = E, this.aRotation = T
            }
            getPoint(e, r) {
                const h = r || new Ht,
                    c = 2 * Math.PI;
                let v = this.aEndAngle - this.aStartAngle;
                const w = Math.abs(v) < Number.EPSILON;
                for (; v < 0;) v += c;
                for (; v > c;) v -= c;
                v < Number.EPSILON && (v = w ? 0 : c), this.aClockwise !== !0 || w || (v === c ? v = -c : v -= c);
                const E = this.aStartAngle + e * v;
                let T = this.aX + this.xRadius * Math.cos(E),
                    B = this.aY + this.yRadius * Math.sin(E);
                if (this.aRotation !== 0) {
                    const Q = Math.cos(this.aRotation),
                        k = Math.sin(this.aRotation),
                        i = T - this.aX,
                        t = B - this.aY;
                    T = i * Q - t * k + this.aX, B = i * k + t * Q + this.aY
                }
                return h.set(T, B)
            }
            copy(e) {
                return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
            }
            toJSON() {
                const e = super.toJSON();
                return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
            }
            fromJSON(e) {
                return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
            }
        }
        fh.prototype.isEllipseCurve = !0;
        class Ju extends fh {
            constructor(e, r, h, c, v, w) {
                super(e, r, h, h, c, v, w), this.type = "ArcCurve"
            }
        }

        function Zu() {
            let s = 0,
                e = 0,
                r = 0,
                h = 0;

            function c(v, w, E, T) {
                s = v, e = E, r = -3 * v + 3 * w - 2 * E - T, h = 2 * v - 2 * w + E + T
            }
            return {
                initCatmullRom: function(v, w, E, T, B) {
                    c(w, E, B * (E - v), B * (T - w))
                },
                initNonuniformCatmullRom: function(v, w, E, T, B, Q, k) {
                    let i = (w - v) / B - (E - v) / (B + Q) + (E - w) / Q,
                        t = (E - w) / Q - (T - w) / (Q + k) + (T - E) / k;
                    i *= Q, t *= Q, c(w, E, i, t)
                },
                calc: function(v) {
                    const w = v * v;
                    return s + e * v + r * w + h * (w * v)
                }
            }
        }
        Ju.prototype.isArcCurve = !0;
        const su = new ge,
            Xu = new Zu,
            ju = new Zu,
            ou = new Zu;
        class mh extends Qa {
            constructor(e = [], r = !1, h = "centripetal", c = .5) {
                super(), this.type = "CatmullRomCurve3", this.points = e, this.closed = r, this.curveType = h, this.tension = c
            }
            getPoint(e, r = new ge) {
                const h = r,
                    c = this.points,
                    v = c.length,
                    w = (v - (this.closed ? 0 : 1)) * e;
                let E, T, B = Math.floor(w),
                    Q = w - B;
                this.closed ? B += B > 0 ? 0 : (Math.floor(Math.abs(B) / v) + 1) * v : Q === 0 && B === v - 1 && (B = v - 2, Q = 1), this.closed || B > 0 ? E = c[(B - 1) % v] : (su.subVectors(c[0], c[1]).add(c[0]), E = su);
                const k = c[B % v],
                    i = c[(B + 1) % v];
                if (this.closed || B + 2 < v ? T = c[(B + 2) % v] : (su.subVectors(c[v - 1], c[v - 2]).add(c[v - 1]), T = su), this.curveType === "centripetal" || this.curveType === "chordal") {
                    const t = this.curveType === "chordal" ? .5 : .25;
                    let a = Math.pow(E.distanceToSquared(k), t),
                        l = Math.pow(k.distanceToSquared(i), t),
                        d = Math.pow(i.distanceToSquared(T), t);
                    l < 1e-4 && (l = 1), a < 1e-4 && (a = l), d < 1e-4 && (d = l), Xu.initNonuniformCatmullRom(E.x, k.x, i.x, T.x, a, l, d), ju.initNonuniformCatmullRom(E.y, k.y, i.y, T.y, a, l, d), ou.initNonuniformCatmullRom(E.z, k.z, i.z, T.z, a, l, d)
                } else this.curveType === "catmullrom" && (Xu.initCatmullRom(E.x, k.x, i.x, T.x, this.tension), ju.initCatmullRom(E.y, k.y, i.y, T.y, this.tension), ou.initCatmullRom(E.z, k.z, i.z, T.z, this.tension));
                return h.set(Xu.calc(Q), ju.calc(Q), ou.calc(Q)), h
            }
            copy(e) {
                super.copy(e), this.points = [];
                for (let r = 0, h = e.points.length; r < h; r++) {
                    const c = e.points[r];
                    this.points.push(c.clone())
                }
                return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
            }
            toJSON() {
                const e = super.toJSON();
                e.points = [];
                for (let r = 0, h = this.points.length; r < h; r++) {
                    const c = this.points[r];
                    e.points.push(c.toArray())
                }
                return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
            }
            fromJSON(e) {
                super.fromJSON(e), this.points = [];
                for (let r = 0, h = e.points.length; r < h; r++) {
                    const c = e.points[r];
                    this.points.push(new ge().fromArray(c))
                }
                return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
            }
        }

        function Yu(s, e, r, h, c) {
            const v = .5 * (h - e),
                w = .5 * (c - r),
                E = s * s;
            return (2 * r - 2 * h + v + w) * (s * E) + (-3 * r + 3 * h - 2 * v - w) * E + v * s + r
        }

        function vc(s, e, r, h) {
            return function(c, v) {
                const w = 1 - c;
                return w * w * v
            }(s, e) + function(c, v) {
                return 2 * (1 - c) * c * v
            }(s, r) + function(c, v) {
                return c * c * v
            }(s, h)
        }

        function _c(s, e, r, h, c) {
            return function(v, w) {
                const E = 1 - v;
                return E * E * E * w
            }(s, e) + function(v, w) {
                const E = 1 - v;
                return 3 * E * E * v * w
            }(s, r) + function(v, w) {
                return 3 * (1 - v) * v * v * w
            }(s, h) + function(v, w) {
                return v * v * v * w
            }(s, c)
        }
        mh.prototype.isCatmullRomCurve3 = !0;
        class lu extends Qa {
            constructor(e = new Ht, r = new Ht, h = new Ht, c = new Ht) {
                super(), this.type = "CubicBezierCurve", this.v0 = e, this.v1 = r, this.v2 = h, this.v3 = c
            }
            getPoint(e, r = new Ht) {
                const h = r,
                    c = this.v0,
                    v = this.v1,
                    w = this.v2,
                    E = this.v3;
                return h.set(_c(e, c.x, v.x, w.x, E.x), _c(e, c.y, v.y, w.y, E.y)), h
            }
            copy(e) {
                return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
            }
            toJSON() {
                const e = super.toJSON();
                return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
            }
            fromJSON(e) {
                return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
            }
        }
        lu.prototype.isCubicBezierCurve = !0;
        class xc extends Qa {
            constructor(e = new ge, r = new ge, h = new ge, c = new ge) {
                super(), this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = r, this.v2 = h, this.v3 = c
            }
            getPoint(e, r = new ge) {
                const h = r,
                    c = this.v0,
                    v = this.v1,
                    w = this.v2,
                    E = this.v3;
                return h.set(_c(e, c.x, v.x, w.x, E.x), _c(e, c.y, v.y, w.y, E.y), _c(e, c.z, v.z, w.z, E.z)), h
            }
            copy(e) {
                return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
            }
            toJSON() {
                const e = super.toJSON();
                return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
            }
            fromJSON(e) {
                return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
            }
        }
        xc.prototype.isCubicBezierCurve3 = !0;
        class gh extends Qa {
            constructor(e = new Ht, r = new Ht) {
                super(), this.type = "LineCurve", this.v1 = e, this.v2 = r
            }
            getPoint(e, r = new Ht) {
                const h = r;
                return e === 1 ? h.copy(this.v2) : (h.copy(this.v2).sub(this.v1), h.multiplyScalar(e).add(this.v1)), h
            }
            getPointAt(e, r) {
                return this.getPoint(e, r)
            }
            getTangent(e, r) {
                const h = r || new Ht;
                return h.copy(this.v2).sub(this.v1).normalize(), h
            }
            copy(e) {
                return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
            }
            toJSON() {
                const e = super.toJSON();
                return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
            }
            fromJSON(e) {
                return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
            }
        }
        gh.prototype.isLineCurve = !0;
        class qu extends Qa {
            constructor(e = new ge, r = new ge) {
                super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = r
            }
            getPoint(e, r = new ge) {
                const h = r;
                return e === 1 ? h.copy(this.v2) : (h.copy(this.v2).sub(this.v1), h.multiplyScalar(e).add(this.v1)), h
            }
            getPointAt(e, r) {
                return this.getPoint(e, r)
            }
            copy(e) {
                return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
            }
            toJSON() {
                const e = super.toJSON();
                return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
            }
            fromJSON(e) {
                return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
            }
        }
        class cu extends Qa {
            constructor(e = new Ht, r = new Ht, h = new Ht) {
                super(), this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = r, this.v2 = h
            }
            getPoint(e, r = new Ht) {
                const h = r,
                    c = this.v0,
                    v = this.v1,
                    w = this.v2;
                return h.set(vc(e, c.x, v.x, w.x), vc(e, c.y, v.y, w.y)), h
            }
            copy(e) {
                return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
            }
            toJSON() {
                const e = super.toJSON();
                return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
            }
            fromJSON(e) {
                return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
            }
        }
        cu.prototype.isQuadraticBezierCurve = !0;
        class $u extends Qa {
            constructor(e = new ge, r = new ge, h = new ge) {
                super(), this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = r, this.v2 = h
            }
            getPoint(e, r = new ge) {
                const h = r,
                    c = this.v0,
                    v = this.v1,
                    w = this.v2;
                return h.set(vc(e, c.x, v.x, w.x), vc(e, c.y, v.y, w.y), vc(e, c.z, v.z, w.z)), h
            }
            copy(e) {
                return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
            }
            toJSON() {
                const e = super.toJSON();
                return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
            }
            fromJSON(e) {
                return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
            }
        }
        $u.prototype.isQuadraticBezierCurve3 = !0;
        class hu extends Qa {
            constructor(e = []) {
                super(), this.type = "SplineCurve", this.points = e
            }
            getPoint(e, r = new Ht) {
                const h = r,
                    c = this.points,
                    v = (c.length - 1) * e,
                    w = Math.floor(v),
                    E = v - w,
                    T = c[w === 0 ? w : w - 1],
                    B = c[w],
                    Q = c[w > c.length - 2 ? c.length - 1 : w + 1],
                    k = c[w > c.length - 3 ? c.length - 1 : w + 2];
                return h.set(Yu(E, T.x, B.x, Q.x, k.x), Yu(E, T.y, B.y, Q.y, k.y)), h
            }
            copy(e) {
                super.copy(e), this.points = [];
                for (let r = 0, h = e.points.length; r < h; r++) {
                    const c = e.points[r];
                    this.points.push(c.clone())
                }
                return this
            }
            toJSON() {
                const e = super.toJSON();
                e.points = [];
                for (let r = 0, h = this.points.length; r < h; r++) {
                    const c = this.points[r];
                    e.points.push(c.toArray())
                }
                return e
            }
            fromJSON(e) {
                super.fromJSON(e), this.points = [];
                for (let r = 0, h = e.points.length; r < h; r++) {
                    const c = e.points[r];
                    this.points.push(new Ht().fromArray(c))
                }
                return this
            }
        }
        hu.prototype.isSplineCurve = !0;
        var uu = Object.freeze({
            __proto__: null,
            ArcCurve: Ju,
            CatmullRomCurve3: mh,
            CubicBezierCurve: lu,
            CubicBezierCurve3: xc,
            EllipseCurve: fh,
            LineCurve: gh,
            LineCurve3: qu,
            QuadraticBezierCurve: cu,
            QuadraticBezierCurve3: $u,
            SplineCurve: hu
        });
        class Zd extends Qa {
            constructor() {
                super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1
            }
            add(e) {
                this.curves.push(e)
            }
            closePath() {
                const e = this.curves[0].getPoint(0),
                    r = this.curves[this.curves.length - 1].getPoint(1);
                e.equals(r) || this.curves.push(new gh(r, e))
            }
            getPoint(e) {
                const r = e * this.getLength(),
                    h = this.getCurveLengths();
                let c = 0;
                for (; c < h.length;) {
                    if (h[c] >= r) {
                        const v = h[c] - r,
                            w = this.curves[c],
                            E = w.getLength(),
                            T = E === 0 ? 0 : 1 - v / E;
                        return w.getPointAt(T)
                    }
                    c++
                }
                return null
            }
            getLength() {
                const e = this.getCurveLengths();
                return e[e.length - 1]
            }
            updateArcLengths() {
                this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
            }
            getCurveLengths() {
                if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
                const e = [];
                let r = 0;
                for (let h = 0, c = this.curves.length; h < c; h++) r += this.curves[h].getLength(), e.push(r);
                return this.cacheLengths = e, e
            }
            getSpacedPoints(e = 40) {
                const r = [];
                for (let h = 0; h <= e; h++) r.push(this.getPoint(h / e));
                return this.autoClose && r.push(r[0]), r
            }
            getPoints(e = 12) {
                const r = [];
                let h;
                for (let c = 0, v = this.curves; c < v.length; c++) {
                    const w = v[c],
                        E = w && w.isEllipseCurve ? 2 * e : w && (w.isLineCurve || w.isLineCurve3) ? 1 : w && w.isSplineCurve ? e * w.points.length : e,
                        T = w.getPoints(E);
                    for (let B = 0; B < T.length; B++) {
                        const Q = T[B];
                        h && h.equals(Q) || (r.push(Q), h = Q)
                    }
                }
                return this.autoClose && r.length > 1 && !r[r.length - 1].equals(r[0]) && r.push(r[0]), r
            }
            copy(e) {
                super.copy(e), this.curves = [];
                for (let r = 0, h = e.curves.length; r < h; r++) {
                    const c = e.curves[r];
                    this.curves.push(c.clone())
                }
                return this.autoClose = e.autoClose, this
            }
            toJSON() {
                const e = super.toJSON();
                e.autoClose = this.autoClose, e.curves = [];
                for (let r = 0, h = this.curves.length; r < h; r++) {
                    const c = this.curves[r];
                    e.curves.push(c.toJSON())
                }
                return e
            }
            fromJSON(e) {
                super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
                for (let r = 0, h = e.curves.length; r < h; r++) {
                    const c = e.curves[r];
                    this.curves.push(new uu[c.type]().fromJSON(c))
                }
                return this
            }
        }
        class yh extends Zd {
            constructor(e) {
                super(), this.type = "Path", this.currentPoint = new Ht, e && this.setFromPoints(e)
            }
            setFromPoints(e) {
                this.moveTo(e[0].x, e[0].y);
                for (let r = 1, h = e.length; r < h; r++) this.lineTo(e[r].x, e[r].y);
                return this
            }
            moveTo(e, r) {
                return this.currentPoint.set(e, r), this
            }
            lineTo(e, r) {
                const h = new gh(this.currentPoint.clone(), new Ht(e, r));
                return this.curves.push(h), this.currentPoint.set(e, r), this
            }
            quadraticCurveTo(e, r, h, c) {
                const v = new cu(this.currentPoint.clone(), new Ht(e, r), new Ht(h, c));
                return this.curves.push(v), this.currentPoint.set(h, c), this
            }
            bezierCurveTo(e, r, h, c, v, w) {
                const E = new lu(this.currentPoint.clone(), new Ht(e, r), new Ht(h, c), new Ht(v, w));
                return this.curves.push(E), this.currentPoint.set(v, w), this
            }
            splineThru(e) {
                const r = [this.currentPoint.clone()].concat(e),
                    h = new hu(r);
                return this.curves.push(h), this.currentPoint.copy(e[e.length - 1]), this
            }
            arc(e, r, h, c, v, w) {
                const E = this.currentPoint.x,
                    T = this.currentPoint.y;
                return this.absarc(e + E, r + T, h, c, v, w), this
            }
            absarc(e, r, h, c, v, w) {
                return this.absellipse(e, r, h, h, c, v, w), this
            }
            ellipse(e, r, h, c, v, w, E, T) {
                const B = this.currentPoint.x,
                    Q = this.currentPoint.y;
                return this.absellipse(e + B, r + Q, h, c, v, w, E, T), this
            }
            absellipse(e, r, h, c, v, w, E, T) {
                const B = new fh(e, r, h, c, v, w, E, T);
                if (this.curves.length > 0) {
                    const k = B.getPoint(0);
                    k.equals(this.currentPoint) || this.lineTo(k.x, k.y)
                }
                this.curves.push(B);
                const Q = B.getPoint(1);
                return this.currentPoint.copy(Q), this
            }
            copy(e) {
                return super.copy(e), this.currentPoint.copy(e.currentPoint), this
            }
            toJSON() {
                const e = super.toJSON();
                return e.currentPoint = this.currentPoint.toArray(), e
            }
            fromJSON(e) {
                return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this
            }
        }
        class us extends yh {
            constructor(e) {
                super(e), this.uuid = Mi.generateUUID(), this.type = "Shape", this.holes = []
            }
            getPointsHoles(e) {
                const r = [];
                for (let h = 0, c = this.holes.length; h < c; h++) r[h] = this.holes[h].getPoints(e);
                return r
            }
            extractPoints(e) {
                return {
                    shape: this.getPoints(e),
                    holes: this.getPointsHoles(e)
                }
            }
            copy(e) {
                super.copy(e), this.holes = [];
                for (let r = 0, h = e.holes.length; r < h; r++) {
                    const c = e.holes[r];
                    this.holes.push(c.clone())
                }
                return this
            }
            toJSON() {
                const e = super.toJSON();
                e.uuid = this.uuid, e.holes = [];
                for (let r = 0, h = this.holes.length; r < h; r++) {
                    const c = this.holes[r];
                    e.holes.push(c.toJSON())
                }
                return e
            }
            fromJSON(e) {
                super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
                for (let r = 0, h = e.holes.length; r < h; r++) {
                    const c = e.holes[r];
                    this.holes.push(new yh().fromJSON(c))
                }
                return this
            }
        }
        class Xn extends Z {
            constructor(e, r = 1) {
                super(), this.type = "Light", this.color = new Rt(e), this.intensity = r
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this
            }
            toJSON(e) {
                const r = super.toJSON(e);
                return r.object.color = this.color.getHex(), r.object.intensity = this.intensity, this.groundColor !== void 0 && (r.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (r.object.distance = this.distance), this.angle !== void 0 && (r.object.angle = this.angle), this.decay !== void 0 && (r.object.decay = this.decay), this.penumbra !== void 0 && (r.object.penumbra = this.penumbra), this.shadow !== void 0 && (r.object.shadow = this.shadow.toJSON()), r
            }
        }
        Xn.prototype.isLight = !0;
        class du extends Xn {
            constructor(e, r, h) {
                super(e, h), this.type = "HemisphereLight", this.position.copy(Z.DefaultUp), this.updateMatrix(), this.groundColor = new Rt(r)
            }
            copy(e) {
                return Xn.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
            }
        }
        du.prototype.isHemisphereLight = !0;
        const Ku = new Ui,
            ed = new ge,
            Wn = new ge;
        class vh {
            constructor(e) {
                this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new Ht(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ui, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Us, this._frameExtents = new Ht(1, 1), this._viewportCount = 1, this._viewports = [new Si(0, 0, 1, 1)]
            }
            getViewportCount() {
                return this._viewportCount
            }
            getFrustum() {
                return this._frustum
            }
            updateMatrices(e) {
                const r = this.camera,
                    h = this.matrix;
                ed.setFromMatrixPosition(e.matrixWorld), r.position.copy(ed), Wn.setFromMatrixPosition(e.target.matrixWorld), r.lookAt(Wn), r.updateMatrixWorld(), Ku.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ku), h.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), h.multiply(r.projectionMatrix), h.multiply(r.matrixWorldInverse)
            }
            getViewport(e) {
                return this._viewports[e]
            }
            getFrameExtents() {
                return this._frameExtents
            }
            copy(e) {
                return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
            }
            clone() {
                return new this.constructor().copy(this)
            }
            toJSON() {
                const e = {};
                return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), this.mapSize.x === 512 && this.mapSize.y === 512 || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
            }
        }
        class td extends vh {
            constructor() {
                super(new dr(50, 1, .5, 500)), this.focus = 1
            }
            updateMatrices(e) {
                const r = this.camera,
                    h = 2 * Mi.RAD2DEG * e.angle * this.focus,
                    c = this.mapSize.width / this.mapSize.height,
                    v = e.distance || r.far;
                h === r.fov && c === r.aspect && v === r.far || (r.fov = h, r.aspect = c, r.far = v, r.updateProjectionMatrix()), super.updateMatrices(e)
            }
            copy(e) {
                return super.copy(e), this.focus = e.focus, this
            }
        }
        td.prototype.isSpotLightShadow = !0;
        class pu extends Xn {
            constructor(e, r, h = 0, c = Math.PI / 3, v = 0, w = 1) {
                super(e, r), this.type = "SpotLight", this.position.copy(Z.DefaultUp), this.updateMatrix(), this.target = new Z, this.distance = h, this.angle = c, this.penumbra = v, this.decay = w, this.shadow = new td
            }
            get power() {
                return this.intensity * Math.PI
            }
            set power(e) {
                this.intensity = e / Math.PI
            }
            copy(e) {
                return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
            }
        }
        pu.prototype.isSpotLight = !0;
        const qs = new Ui,
            $s = new ge,
            fu = new ge;
        class Xd extends vh {
            constructor() {
                super(new dr(90, 1, .5, 500)), this._frameExtents = new Ht(4, 2), this._viewportCount = 6, this._viewports = [new Si(2, 1, 1, 1), new Si(0, 1, 1, 1), new Si(3, 1, 1, 1), new Si(1, 1, 1, 1), new Si(3, 0, 1, 1), new Si(1, 0, 1, 1)], this._cubeDirections = [new ge(1, 0, 0), new ge(-1, 0, 0), new ge(0, 0, 1), new ge(0, 0, -1), new ge(0, 1, 0), new ge(0, -1, 0)], this._cubeUps = [new ge(0, 1, 0), new ge(0, 1, 0), new ge(0, 1, 0), new ge(0, 1, 0), new ge(0, 0, 1), new ge(0, 0, -1)]
            }
            updateMatrices(e, r = 0) {
                const h = this.camera,
                    c = this.matrix,
                    v = e.distance || h.far;
                v !== h.far && (h.far = v, h.updateProjectionMatrix()), $s.setFromMatrixPosition(e.matrixWorld), h.position.copy($s), fu.copy(h.position), fu.add(this._cubeDirections[r]), h.up.copy(this._cubeUps[r]), h.lookAt(fu), h.updateMatrixWorld(), c.makeTranslation(-$s.x, -$s.y, -$s.z), qs.multiplyMatrices(h.projectionMatrix, h.matrixWorldInverse), this._frustum.setFromProjectionMatrix(qs)
            }
        }
        Xd.prototype.isPointLightShadow = !0;
        class id extends Xn {
            constructor(e, r, h = 0, c = 1) {
                super(e, r), this.type = "PointLight", this.distance = h, this.decay = c, this.shadow = new Xd
            }
            get power() {
                return 4 * this.intensity * Math.PI
            }
            set power(e) {
                this.intensity = e / (4 * Math.PI)
            }
            copy(e) {
                return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
            }
        }
        id.prototype.isPointLight = !0;
        class _h extends Dn {
            constructor(e = -1, r = 1, h = 1, c = -1, v = .1, w = 2e3) {
                super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = r, this.top = h, this.bottom = c, this.near = v, this.far = w, this.updateProjectionMatrix()
            }
            copy(e, r) {
                return super.copy(e, r), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this
            }
            setViewOffset(e, r, h, c, v, w) {
                this.view === null && (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1
                }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = r, this.view.offsetX = h, this.view.offsetY = c, this.view.width = v, this.view.height = w, this.updateProjectionMatrix()
            }
            clearViewOffset() {
                this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
            }
            updateProjectionMatrix() {
                const e = (this.right - this.left) / (2 * this.zoom),
                    r = (this.top - this.bottom) / (2 * this.zoom),
                    h = (this.right + this.left) / 2,
                    c = (this.top + this.bottom) / 2;
                let v = h - e,
                    w = h + e,
                    E = c + r,
                    T = c - r;
                if (this.view !== null && this.view.enabled) {
                    const B = (this.right - this.left) / this.view.fullWidth / this.zoom,
                        Q = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                    v += B * this.view.offsetX, w = v + B * this.view.width, E -= Q * this.view.offsetY, T = E - Q * this.view.height
                }
                this.projectionMatrix.makeOrthographic(v, w, E, T, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }
            toJSON(e) {
                const r = Z.prototype.toJSON.call(this, e);
                return r.object.zoom = this.zoom, r.object.left = this.left, r.object.right = this.right, r.object.top = this.top, r.object.bottom = this.bottom, r.object.near = this.near, r.object.far = this.far, this.view !== null && (r.object.view = Object.assign({}, this.view)), r
            }
        }
        _h.prototype.isOrthographicCamera = !0;
        class jd extends vh {
            constructor() {
                super(new _h(-5, 5, 5, -5, .5, 500))
            }
        }
        jd.prototype.isDirectionalLightShadow = !0;
        class nd extends Xn {
            constructor(e, r) {
                super(e, r), this.type = "DirectionalLight", this.position.copy(Z.DefaultUp), this.updateMatrix(), this.target = new Z, this.shadow = new jd
            }
            copy(e) {
                return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
            }
        }
        nd.prototype.isDirectionalLight = !0;
        class rd extends Xn {
            constructor(e, r) {
                super(e, r), this.type = "AmbientLight"
            }
        }
        rd.prototype.isAmbientLight = !0;
        class ad extends Xn {
            constructor(e, r, h = 10, c = 10) {
                super(e, r), this.type = "RectAreaLight", this.width = h, this.height = c
            }
            copy(e) {
                return super.copy(e), this.width = e.width, this.height = e.height, this
            }
            toJSON(e) {
                const r = super.toJSON(e);
                return r.object.width = this.width, r.object.height = this.height, r
            }
        }
        ad.prototype.isRectAreaLight = !0;
        class sd {
            constructor() {
                this.coefficients = [];
                for (let e = 0; e < 9; e++) this.coefficients.push(new ge)
            }
            set(e) {
                for (let r = 0; r < 9; r++) this.coefficients[r].copy(e[r]);
                return this
            }
            zero() {
                for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
                return this
            }
            getAt(e, r) {
                const h = e.x,
                    c = e.y,
                    v = e.z,
                    w = this.coefficients;
                return r.copy(w[0]).multiplyScalar(.282095), r.addScaledVector(w[1], .488603 * c), r.addScaledVector(w[2], .488603 * v), r.addScaledVector(w[3], .488603 * h), r.addScaledVector(w[4], h * c * 1.092548), r.addScaledVector(w[5], c * v * 1.092548), r.addScaledVector(w[6], .315392 * (3 * v * v - 1)), r.addScaledVector(w[7], h * v * 1.092548), r.addScaledVector(w[8], .546274 * (h * h - c * c)), r
            }
            getIrradianceAt(e, r) {
                const h = e.x,
                    c = e.y,
                    v = e.z,
                    w = this.coefficients;
                return r.copy(w[0]).multiplyScalar(.886227), r.addScaledVector(w[1], 1.023328 * c), r.addScaledVector(w[2], 1.023328 * v), r.addScaledVector(w[3], 1.023328 * h), r.addScaledVector(w[4], .858086 * h * c), r.addScaledVector(w[5], .858086 * c * v), r.addScaledVector(w[6], .743125 * v * v - .247708), r.addScaledVector(w[7], .858086 * h * v), r.addScaledVector(w[8], .429043 * (h * h - c * c)), r
            }
            add(e) {
                for (let r = 0; r < 9; r++) this.coefficients[r].add(e.coefficients[r]);
                return this
            }
            addScaledSH(e, r) {
                for (let h = 0; h < 9; h++) this.coefficients[h].addScaledVector(e.coefficients[h], r);
                return this
            }
            scale(e) {
                for (let r = 0; r < 9; r++) this.coefficients[r].multiplyScalar(e);
                return this
            }
            lerp(e, r) {
                for (let h = 0; h < 9; h++) this.coefficients[h].lerp(e.coefficients[h], r);
                return this
            }
            equals(e) {
                for (let r = 0; r < 9; r++)
                    if (!this.coefficients[r].equals(e.coefficients[r])) return !1;
                return !0
            }
            copy(e) {
                return this.set(e.coefficients)
            }
            clone() {
                return new this.constructor().copy(this)
            }
            fromArray(e, r = 0) {
                const h = this.coefficients;
                for (let c = 0; c < 9; c++) h[c].fromArray(e, r + 3 * c);
                return this
            }
            toArray(e = [], r = 0) {
                const h = this.coefficients;
                for (let c = 0; c < 9; c++) h[c].toArray(e, r + 3 * c);
                return e
            }
            static getBasisAt(e, r) {
                const h = e.x,
                    c = e.y,
                    v = e.z;
                r[0] = .282095, r[1] = .488603 * c, r[2] = .488603 * v, r[3] = .488603 * h, r[4] = 1.092548 * h * c, r[5] = 1.092548 * c * v, r[6] = .315392 * (3 * v * v - 1), r[7] = 1.092548 * h * v, r[8] = .546274 * (h * h - c * c)
            }
        }
        sd.prototype.isSphericalHarmonics3 = !0;
        class xh extends Xn {
            constructor(e = new sd, r = 1) {
                super(void 0, r), this.sh = e
            }
            copy(e) {
                return super.copy(e), this.sh.copy(e.sh), this
            }
            fromJSON(e) {
                return this.intensity = e.intensity, this.sh.fromArray(e.sh), this
            }
            toJSON(e) {
                const r = super.toJSON(e);
                return r.object.sh = this.sh.toArray(), r
            }
        }
        xh.prototype.isLightProbe = !0;
        class bh extends _r {
            constructor(e) {
                super(e), this.textures = {}
            }
            load(e, r, h, c) {
                const v = this,
                    w = new hs(v.manager);
                w.setPath(v.path), w.setRequestHeader(v.requestHeader), w.setWithCredentials(v.withCredentials), w.load(e, function(E) {
                    try {
                        r(v.parse(JSON.parse(E)))
                    } catch (T) {
                        c ? c(T) : console.error(T), v.manager.itemError(e)
                    }
                }, h, c)
            }
            parse(e) {
                const r = this.textures;

                function h(v) {
                    return r[v] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", v), r[v]
                }
                const c = new Ep[e.type];
                if (e.uuid !== void 0 && (c.uuid = e.uuid), e.name !== void 0 && (c.name = e.name), e.color !== void 0 && c.color !== void 0 && c.color.setHex(e.color), e.roughness !== void 0 && (c.roughness = e.roughness), e.metalness !== void 0 && (c.metalness = e.metalness), e.sheen !== void 0 && (c.sheen = new Rt().setHex(e.sheen)), e.emissive !== void 0 && c.emissive !== void 0 && c.emissive.setHex(e.emissive), e.specular !== void 0 && c.specular !== void 0 && c.specular.setHex(e.specular), e.shininess !== void 0 && (c.shininess = e.shininess), e.clearcoat !== void 0 && (c.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (c.clearcoatRoughness = e.clearcoatRoughness), e.fog !== void 0 && (c.fog = e.fog), e.flatShading !== void 0 && (c.flatShading = e.flatShading), e.blending !== void 0 && (c.blending = e.blending), e.combine !== void 0 && (c.combine = e.combine), e.side !== void 0 && (c.side = e.side), e.shadowSide !== void 0 && (c.shadowSide = e.shadowSide), e.opacity !== void 0 && (c.opacity = e.opacity), e.transparent !== void 0 && (c.transparent = e.transparent), e.alphaTest !== void 0 && (c.alphaTest = e.alphaTest), e.depthTest !== void 0 && (c.depthTest = e.depthTest), e.depthWrite !== void 0 && (c.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (c.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (c.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (c.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (c.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (c.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (c.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (c.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (c.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (c.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (c.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (c.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (c.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (c.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (c.rotation = e.rotation), e.linewidth !== 1 && (c.linewidth = e.linewidth), e.dashSize !== void 0 && (c.dashSize = e.dashSize), e.gapSize !== void 0 && (c.gapSize = e.gapSize), e.scale !== void 0 && (c.scale = e.scale), e.polygonOffset !== void 0 && (c.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (c.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (c.polygonOffsetUnits = e.polygonOffsetUnits), e.skinning !== void 0 && (c.skinning = e.skinning), e.morphTargets !== void 0 && (c.morphTargets = e.morphTargets), e.morphNormals !== void 0 && (c.morphNormals = e.morphNormals), e.dithering !== void 0 && (c.dithering = e.dithering), e.alphaToCoverage !== void 0 && (c.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (c.premultipliedAlpha = e.premultipliedAlpha), e.vertexTangents !== void 0 && (c.vertexTangents = e.vertexTangents), e.visible !== void 0 && (c.visible = e.visible), e.toneMapped !== void 0 && (c.toneMapped = e.toneMapped), e.userData !== void 0 && (c.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? c.vertexColors = e.vertexColors > 0 : c.vertexColors = e.vertexColors), e.uniforms !== void 0)
                    for (const v in e.uniforms) {
                        const w = e.uniforms[v];
                        switch (c.uniforms[v] = {}, w.type) {
                            case "t":
                                c.uniforms[v].value = h(w.value);
                                break;
                            case "c":
                                c.uniforms[v].value = new Rt().setHex(w.value);
                                break;
                            case "v2":
                                c.uniforms[v].value = new Ht().fromArray(w.value);
                                break;
                            case "v3":
                                c.uniforms[v].value = new ge().fromArray(w.value);
                                break;
                            case "v4":
                                c.uniforms[v].value = new Si().fromArray(w.value);
                                break;
                            case "m3":
                                c.uniforms[v].value = new Pt().fromArray(w.value);
                                break;
                            case "m4":
                                c.uniforms[v].value = new Ui().fromArray(w.value);
                                break;
                            default:
                                c.uniforms[v].value = w.value
                        }
                    }
                if (e.defines !== void 0 && (c.defines = e.defines), e.vertexShader !== void 0 && (c.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (c.fragmentShader = e.fragmentShader), e.extensions !== void 0)
                    for (const v in e.extensions) c.extensions[v] = e.extensions[v];
                if (e.shading !== void 0 && (c.flatShading = e.shading === 1), e.size !== void 0 && (c.size = e.size), e.sizeAttenuation !== void 0 && (c.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (c.map = h(e.map)), e.matcap !== void 0 && (c.matcap = h(e.matcap)), e.alphaMap !== void 0 && (c.alphaMap = h(e.alphaMap)), e.bumpMap !== void 0 && (c.bumpMap = h(e.bumpMap)), e.bumpScale !== void 0 && (c.bumpScale = e.bumpScale), e.normalMap !== void 0 && (c.normalMap = h(e.normalMap)), e.normalMapType !== void 0 && (c.normalMapType = e.normalMapType), e.normalScale !== void 0) {
                    let v = e.normalScale;
                    Array.isArray(v) === !1 && (v = [v, v]), c.normalScale = new Ht().fromArray(v)
                }
                return e.displacementMap !== void 0 && (c.displacementMap = h(e.displacementMap)), e.displacementScale !== void 0 && (c.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (c.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (c.roughnessMap = h(e.roughnessMap)), e.metalnessMap !== void 0 && (c.metalnessMap = h(e.metalnessMap)), e.emissiveMap !== void 0 && (c.emissiveMap = h(e.emissiveMap)), e.emissiveIntensity !== void 0 && (c.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (c.specularMap = h(e.specularMap)), e.envMap !== void 0 && (c.envMap = h(e.envMap)), e.envMapIntensity !== void 0 && (c.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (c.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (c.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (c.lightMap = h(e.lightMap)), e.lightMapIntensity !== void 0 && (c.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (c.aoMap = h(e.aoMap)), e.aoMapIntensity !== void 0 && (c.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (c.gradientMap = h(e.gradientMap)), e.clearcoatMap !== void 0 && (c.clearcoatMap = h(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (c.clearcoatRoughnessMap = h(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (c.clearcoatNormalMap = h(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (c.clearcoatNormalScale = new Ht().fromArray(e.clearcoatNormalScale)), e.transmission !== void 0 && (c.transmission = e.transmission), e.transmissionMap !== void 0 && (c.transmissionMap = h(e.transmissionMap)), c
            }
            setTextures(e) {
                return this.textures = e, this
            }
        }
        const Ko = {
            decodeText: function(s) {
                if (typeof TextDecoder != "undefined") return new TextDecoder().decode(s);
                let e = "";
                for (let r = 0, h = s.length; r < h; r++) e += String.fromCharCode(s[r]);
                try {
                    return decodeURIComponent(escape(e))
                } catch (r) {
                    return e
                }
            },
            extractUrlBase: function(s) {
                const e = s.lastIndexOf("/");
                return e === -1 ? "./" : s.substr(0, e + 1)
            }
        };

        function bc() {
            an.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
        }

        function wc(s, e, r, h) {
            typeof r == "number" && (h = r, r = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), pi.call(this, s, e, r), this.meshPerAttribute = h || 1
        }
        bc.prototype = Object.assign(Object.create(an.prototype), {
            constructor: bc,
            isInstancedBufferGeometry: !0,
            copy: function(s) {
                return an.prototype.copy.call(this, s), this.instanceCount = s.instanceCount, this
            },
            clone: function() {
                return new this.constructor().copy(this)
            },
            toJSON: function() {
                const s = an.prototype.toJSON.call(this);
                return s.instanceCount = this.instanceCount, s.isInstancedBufferGeometry = !0, s
            }
        }), wc.prototype = Object.assign(Object.create(pi.prototype), {
            constructor: wc,
            isInstancedBufferAttribute: !0,
            copy: function(s) {
                return pi.prototype.copy.call(this, s), this.meshPerAttribute = s.meshPerAttribute, this
            },
            toJSON: function() {
                const s = pi.prototype.toJSON.call(this);
                return s.meshPerAttribute = this.meshPerAttribute, s.isInstancedBufferAttribute = !0, s
            }
        });
        class mu extends _r {
            constructor(e) {
                super(e)
            }
            load(e, r, h, c) {
                const v = this,
                    w = new hs(v.manager);
                w.setPath(v.path), w.setRequestHeader(v.requestHeader), w.setWithCredentials(v.withCredentials), w.load(e, function(E) {
                    try {
                        r(v.parse(JSON.parse(E)))
                    } catch (T) {
                        c ? c(T) : console.error(T), v.manager.itemError(e)
                    }
                }, h, c)
            }
            parse(e) {
                const r = {},
                    h = {};

                function c(k, i) {
                    if (r[i] !== void 0) return r[i];
                    const t = k.interleavedBuffers[i],
                        a = function(d, g) {
                            if (h[g] !== void 0) return h[g];
                            const x = d.arrayBuffers[g],
                                A = new Uint32Array(x).buffer;
                            return h[g] = A, A
                        }(k, t.buffer),
                        l = new St(Er(t.type, a), t.stride);
                    return l.uuid = t.uuid, r[i] = l, l
                }
                const v = e.isInstancedBufferGeometry ? new bc : new an,
                    w = e.data.index;
                if (w !== void 0) {
                    const k = Er(w.type, w.array);
                    v.setIndex(new pi(k, 1))
                }
                const E = e.data.attributes;
                for (const k in E) {
                    const i = E[k];
                    let t;
                    if (i.isInterleavedBufferAttribute) t = new Vt(c(e.data, i.data), i.itemSize, i.offset, i.normalized);
                    else {
                        const a = Er(i.type, i.array);
                        t = new(i.isInstancedBufferAttribute ? wc : pi)(a, i.itemSize, i.normalized)
                    }
                    i.name !== void 0 && (t.name = i.name), i.usage !== void 0 && t.setUsage(i.usage), i.updateRange !== void 0 && (t.updateRange.offset = i.updateRange.offset, t.updateRange.count = i.updateRange.count), v.setAttribute(k, t)
                }
                const T = e.data.morphAttributes;
                if (T)
                    for (const k in T) {
                        const i = T[k],
                            t = [];
                        for (let a = 0, l = i.length; a < l; a++) {
                            const d = i[a];
                            let g;
                            d.isInterleavedBufferAttribute ? g = new Vt(c(e.data, d.data), d.itemSize, d.offset, d.normalized) : g = new pi(Er(d.type, d.array), d.itemSize, d.normalized), d.name !== void 0 && (g.name = d.name), t.push(g)
                        }
                        v.morphAttributes[k] = t
                    }
                e.data.morphTargetsRelative && (v.morphTargetsRelative = !0);
                const B = e.data.groups || e.data.drawcalls || e.data.offsets;
                if (B !== void 0)
                    for (let k = 0, i = B.length; k !== i; ++k) {
                        const t = B[k];
                        v.addGroup(t.start, t.count, t.materialIndex)
                    }
                const Q = e.data.boundingSphere;
                if (Q !== void 0) {
                    const k = new ge;
                    Q.center !== void 0 && k.fromArray(Q.center), v.boundingSphere = new Fn(k, Q.radius)
                }
                return e.name && (v.name = e.name), e.userData && (v.userData = e.userData), v
            }
        }
        const Ap = {
                UVMapping: 300,
                CubeReflectionMapping: 301,
                CubeRefractionMapping: 302,
                EquirectangularReflectionMapping: 303,
                EquirectangularRefractionMapping: 304,
                CubeUVReflectionMapping: 306,
                CubeUVRefractionMapping: 307
            },
            Yd = {
                RepeatWrapping: 1e3,
                ClampToEdgeWrapping: 1001,
                MirroredRepeatWrapping: 1002
            },
            qd = {
                NearestFilter: 1003,
                NearestMipmapNearestFilter: 1004,
                NearestMipmapLinearFilter: 1005,
                LinearFilter: 1006,
                LinearMipmapNearestFilter: 1007,
                LinearMipmapLinearFilter: 1008
            };

        function gu(s) {
            typeof createImageBitmap == "undefined" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch == "undefined" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), _r.call(this, s), this.options = {
                premultiplyAlpha: "none"
            }
        }
        gu.prototype = Object.assign(Object.create(_r.prototype), {
            constructor: gu,
            isImageBitmapLoader: !0,
            setOptions: function(s) {
                return this.options = s, this
            },
            load: function(s, e, r, h) {
                s === void 0 && (s = ""), this.path !== void 0 && (s = this.path + s), s = this.manager.resolveURL(s);
                const c = this,
                    v = Fl.get(s);
                if (v !== void 0) return c.manager.itemStart(s), setTimeout(function() {
                    e && e(v), c.manager.itemEnd(s)
                }, 0), v;
                const w = {};
                w.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", w.headers = this.requestHeader, fetch(s, w).then(function(E) {
                    return E.blob()
                }).then(function(E) {
                    return createImageBitmap(E, Object.assign(c.options, {
                        colorSpaceConversion: "none"
                    }))
                }).then(function(E) {
                    Fl.add(s, E), e && e(E), c.manager.itemEnd(s)
                }).catch(function(E) {
                    h && h(E), c.manager.itemError(s), c.manager.itemEnd(s)
                }), c.manager.itemStart(s)
            }
        });
        class od {
            constructor() {
                this.type = "ShapePath", this.color = new Rt, this.subPaths = [], this.currentPath = null
            }
            moveTo(e, r) {
                return this.currentPath = new yh, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, r), this
            }
            lineTo(e, r) {
                return this.currentPath.lineTo(e, r), this
            }
            quadraticCurveTo(e, r, h, c) {
                return this.currentPath.quadraticCurveTo(e, r, h, c), this
            }
            bezierCurveTo(e, r, h, c, v, w) {
                return this.currentPath.bezierCurveTo(e, r, h, c, v, w), this
            }
            splineThru(e) {
                return this.currentPath.splineThru(e), this
            }
            toShapes(e, r) {
                function h(x) {
                    const A = [];
                    for (let M = 0, F = x.length; M < F; M++) {
                        const D = x[M],
                            U = new us;
                        U.curves = D.curves, A.push(U)
                    }
                    return A
                }

                function c(x, A) {
                    const M = A.length;
                    let F = !1;
                    for (let D = M - 1, U = 0; U < M; D = U++) {
                        let N = A[D],
                            H = A[U],
                            X = H.x - N.x,
                            ne = H.y - N.y;
                        if (Math.abs(ne) > Number.EPSILON) {
                            if (ne < 0 && (N = A[U], X = -X, H = A[D], ne = -ne), x.y < N.y || x.y > H.y) continue;
                            if (x.y === N.y) {
                                if (x.x === N.x) return !0
                            } else {
                                const le = ne * (x.x - N.x) - X * (x.y - N.y);
                                if (le === 0) return !0;
                                if (le < 0) continue;
                                F = !F
                            }
                        } else {
                            if (x.y !== N.y) continue;
                            if (H.x <= x.x && x.x <= N.x || N.x <= x.x && x.x <= H.x) return !0
                        }
                    }
                    return F
                }
                const v = xo.isClockWise,
                    w = this.subPaths;
                if (w.length === 0) return [];
                if (r === !0) return h(w);
                let E, T, B;
                const Q = [];
                if (w.length === 1) return T = w[0], B = new us, B.curves = T.curves, Q.push(B), Q;
                let k = !v(w[0].getPoints());
                k = e ? !k : k;
                const i = [],
                    t = [];
                let a, l, d = [],
                    g = 0;
                t[g] = void 0, d[g] = [];
                for (let x = 0, A = w.length; x < A; x++) T = w[x], a = T.getPoints(), E = v(a), E = e ? !E : E, E ? (!k && t[g] && g++, t[g] = {
                    s: new us,
                    p: a
                }, t[g].s.curves = T.curves, k && g++, d[g] = []) : d[g].push({
                    h: T,
                    p: a[0]
                });
                if (!t[0]) return h(w);
                if (t.length > 1) {
                    let x = !1;
                    const A = [];
                    for (let M = 0, F = t.length; M < F; M++) i[M] = [];
                    for (let M = 0, F = t.length; M < F; M++) {
                        const D = d[M];
                        for (let U = 0; U < D.length; U++) {
                            const N = D[U];
                            let H = !0;
                            for (let X = 0; X < t.length; X++) c(N.p, t[X].p) && (M !== X && A.push({
                                froms: M,
                                tos: X,
                                hole: U
                            }), H ? (H = !1, i[X].push(N)) : x = !0);
                            H && i[M].push(N)
                        }
                    }
                    A.length > 0 && (x || (d = i))
                }
                for (let x = 0, A = t.length; x < A; x++) {
                    B = t[x].s, Q.push(B), l = d[x];
                    for (let M = 0, F = l.length; M < F; M++) B.holes.push(l[M].h)
                }
                return Q
            }
        }
        class Ma {
            constructor(e) {
                this.type = "Font", this.data = e
            }
            generateShapes(e, r = 100) {
                const h = [],
                    c = function(v, w, E) {
                        const T = Array.from(v),
                            B = w / E.resolution,
                            Q = (E.boundingBox.yMax - E.boundingBox.yMin + E.underlineThickness) * B,
                            k = [];
                        let i = 0,
                            t = 0;
                        for (let a = 0; a < T.length; a++) {
                            const l = T[a];
                            if (l === `
`) i = 0, t -= Q;
                            else {
                                const d = ld(l, B, i, t, E);
                                i += d.offsetX, k.push(d.path)
                            }
                        }
                        return k
                    }(e, r, this.data);
                for (let v = 0, w = c.length; v < w; v++) Array.prototype.push.apply(h, c[v].toShapes());
                return h
            }
        }

        function ld(s, e, r, h, c) {
            const v = c.glyphs[s] || c.glyphs["?"];
            if (!v) return void console.error('THREE.Font: character "' + s + '" does not exists in font family ' + c.familyName + ".");
            const w = new od;
            let E, T, B, Q, k, i, t, a;
            if (v.o) {
                const l = v._cachedOutline || (v._cachedOutline = v.o.split(" "));
                for (let d = 0, g = l.length; d < g;) switch (l[d++]) {
                    case "m":
                        E = l[d++] * e + r, T = l[d++] * e + h, w.moveTo(E, T);
                        break;
                    case "l":
                        E = l[d++] * e + r, T = l[d++] * e + h, w.lineTo(E, T);
                        break;
                    case "q":
                        B = l[d++] * e + r, Q = l[d++] * e + h, k = l[d++] * e + r, i = l[d++] * e + h, w.quadraticCurveTo(k, i, B, Q);
                        break;
                    case "b":
                        B = l[d++] * e + r, Q = l[d++] * e + h, k = l[d++] * e + r, i = l[d++] * e + h, t = l[d++] * e + r, a = l[d++] * e + h, w.bezierCurveTo(k, i, t, a, B, Q)
                }
            }
            return {
                offsetX: v.ha * e,
                path: w
            }
        }
        Ma.prototype.isFont = !0;
        let wh;
        const Ks = {
            getContext: function() {
                return wh === void 0 && (wh = new(window.AudioContext || window.webkitAudioContext)), wh
            },
            setContext: function(s) {
                wh = s
            }
        };
        class Ec extends _r {
            constructor(e) {
                super(e)
            }
            load(e, r, h, c) {
                const v = this,
                    w = new hs(this.manager);
                w.setResponseType("arraybuffer"), w.setPath(this.path), w.setRequestHeader(this.requestHeader), w.setWithCredentials(this.withCredentials), w.load(e, function(E) {
                    try {
                        const T = E.slice(0);
                        Ks.getContext().decodeAudioData(T, function(B) {
                            r(B)
                        })
                    } catch (T) {
                        c ? c(T) : console.error(T), v.manager.itemError(e)
                    }
                }, h, c)
            }
        }
        class Sc extends xh {
            constructor(e, r, h = 1) {
                super(void 0, h);
                const c = new Rt().set(e),
                    v = new Rt().set(r),
                    w = new ge(c.r, c.g, c.b),
                    E = new ge(v.r, v.g, v.b),
                    T = Math.sqrt(Math.PI),
                    B = T * Math.sqrt(.75);
                this.sh.coefficients[0].copy(w).add(E).multiplyScalar(T), this.sh.coefficients[1].copy(w).sub(E).multiplyScalar(B)
            }
        }
        Sc.prototype.isHemisphereLightProbe = !0;
        class Ll extends xh {
            constructor(e, r = 1) {
                super(void 0, r);
                const h = new Rt().set(e);
                this.sh.coefficients[0].set(h.r, h.g, h.b).multiplyScalar(2 * Math.sqrt(Math.PI))
            }
        }
        Ll.prototype.isAmbientLightProbe = !0;
        const Eh = new Ui,
            Sh = new Ui;
        class $d {
            constructor(e) {
                this.autoStart = e === void 0 || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
            }
            start() {
                this.startTime = cd(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
            }
            stop() {
                this.getElapsedTime(), this.running = !1, this.autoStart = !1
            }
            getElapsedTime() {
                return this.getDelta(), this.elapsedTime
            }
            getDelta() {
                let e = 0;
                if (this.autoStart && !this.running) return this.start(), 0;
                if (this.running) {
                    const r = cd();
                    e = (r - this.oldTime) / 1e3, this.oldTime = r, this.elapsedTime += e
                }
                return e
            }
        }

        function cd() {
            return (typeof performance == "undefined" ? Date : performance).now()
        }
        const el = new ge,
            Kd = new Bn,
            ep = new ge,
            tl = new ge;
        class Ah extends Z {
            constructor(e) {
                super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
            }
            getOutput() {
                return this.gain
            }
            setNodeSource(e) {
                return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
            }
            setMediaElementSource(e) {
                return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
            }
            setMediaStreamSource(e) {
                return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this
            }
            setBuffer(e) {
                return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
            }
            play(e = 0) {
                if (this.isPlaying === !0) return void console.warn("THREE.Audio: Audio is already playing.");
                if (this.hasPlaybackControl === !1) return void console.warn("THREE.Audio: this Audio has no playback control.");
                this._startedAt = this.context.currentTime + e;
                const r = this.context.createBufferSource();
                return r.buffer = this.buffer, r.loop = this.loop, r.loopStart = this.loopStart, r.loopEnd = this.loopEnd, r.onended = this.onEnded.bind(this), r.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = r, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
            }
            pause() {
                if (this.hasPlaybackControl !== !1) return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
            stop() {
                if (this.hasPlaybackControl !== !1) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
            connect() {
                if (this.filters.length > 0) {
                    this.source.connect(this.filters[0]);
                    for (let e = 1, r = this.filters.length; e < r; e++) this.filters[e - 1].connect(this.filters[e]);
                    this.filters[this.filters.length - 1].connect(this.getOutput())
                } else this.source.connect(this.getOutput());
                return this._connected = !0, this
            }
            disconnect() {
                if (this.filters.length > 0) {
                    this.source.disconnect(this.filters[0]);
                    for (let e = 1, r = this.filters.length; e < r; e++) this.filters[e - 1].disconnect(this.filters[e]);
                    this.filters[this.filters.length - 1].disconnect(this.getOutput())
                } else this.source.disconnect(this.getOutput());
                return this._connected = !1, this
            }
            getFilters() {
                return this.filters
            }
            setFilters(e) {
                return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this
            }
            setDetune(e) {
                if (this.detune = e, this.source.detune !== void 0) return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
            }
            getDetune() {
                return this.detune
            }
            getFilter() {
                return this.getFilters()[0]
            }
            setFilter(e) {
                return this.setFilters(e ? [e] : [])
            }
            setPlaybackRate(e) {
                if (this.hasPlaybackControl !== !1) return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
            getPlaybackRate() {
                return this.playbackRate
            }
            onEnded() {
                this.isPlaying = !1
            }
            getLoop() {
                return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
            }
            setLoop(e) {
                if (this.hasPlaybackControl !== !1) return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
            setLoopStart(e) {
                return this.loopStart = e, this
            }
            setLoopEnd(e) {
                return this.loopEnd = e, this
            }
            getVolume() {
                return this.gain.gain.value
            }
            setVolume(e) {
                return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
            }
        }
        const Eo = new ge,
            tp = new Bn,
            Tp = new ge,
            il = new ge;
        class Ac {
            constructor(e, r = 2048) {
                this.analyser = e.context.createAnalyser(), this.analyser.fftSize = r, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
            }
            getFrequencyData() {
                return this.analyser.getByteFrequencyData(this.data), this.data
            }
            getAverageFrequency() {
                let e = 0;
                const r = this.getFrequencyData();
                for (let h = 0; h < r.length; h++) e += r[h];
                return e / r.length
            }
        }
        class Rs {
            constructor(e, r, h) {
                let c, v, w;
                switch (this.binding = e, this.valueSize = h, r) {
                    case "quaternion":
                        c = this._slerp, v = this._slerpAdditive, w = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * h), this._workIndex = 5;
                        break;
                    case "string":
                    case "bool":
                        c = this._select, v = this._select, w = this._setAdditiveIdentityOther, this.buffer = new Array(5 * h);
                        break;
                    default:
                        c = this._lerp, v = this._lerpAdditive, w = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * h)
                }
                this._mixBufferRegion = c, this._mixBufferRegionAdditive = v, this._setIdentity = w, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
            }
            accumulate(e, r) {
                const h = this.buffer,
                    c = this.valueSize,
                    v = e * c + c;
                let w = this.cumulativeWeight;
                if (w === 0) {
                    for (let E = 0; E !== c; ++E) h[v + E] = h[E];
                    w = r
                } else {
                    w += r;
                    const E = r / w;
                    this._mixBufferRegion(h, v, 0, E, c)
                }
                this.cumulativeWeight = w
            }
            accumulateAdditive(e) {
                const r = this.buffer,
                    h = this.valueSize,
                    c = h * this._addIndex;
                this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(r, c, 0, e, h), this.cumulativeWeightAdditive += e
            }
            apply(e) {
                const r = this.valueSize,
                    h = this.buffer,
                    c = e * r + r,
                    v = this.cumulativeWeight,
                    w = this.cumulativeWeightAdditive,
                    E = this.binding;
                if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, v < 1) {
                    const T = r * this._origIndex;
                    this._mixBufferRegion(h, c, T, 1 - v, r)
                }
                w > 0 && this._mixBufferRegionAdditive(h, c, this._addIndex * r, 1, r);
                for (let T = r, B = r + r; T !== B; ++T)
                    if (h[T] !== h[T + r]) {
                        E.setValue(h, c);
                        break
                    }
            }
            saveOriginalState() {
                const e = this.binding,
                    r = this.buffer,
                    h = this.valueSize,
                    c = h * this._origIndex;
                e.getValue(r, c);
                for (let v = h, w = c; v !== w; ++v) r[v] = r[c + v % h];
                this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
            }
            restoreOriginalState() {
                const e = 3 * this.valueSize;
                this.binding.setValue(this.buffer, e)
            }
            _setAdditiveIdentityNumeric() {
                const e = this._addIndex * this.valueSize,
                    r = e + this.valueSize;
                for (let h = e; h < r; h++) this.buffer[h] = 0
            }
            _setAdditiveIdentityQuaternion() {
                this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
            }
            _setAdditiveIdentityOther() {
                const e = this._origIndex * this.valueSize,
                    r = this._addIndex * this.valueSize;
                for (let h = 0; h < this.valueSize; h++) this.buffer[r + h] = this.buffer[e + h]
            }
            _select(e, r, h, c, v) {
                if (c >= .5)
                    for (let w = 0; w !== v; ++w) e[r + w] = e[h + w]
            }
            _slerp(e, r, h, c) {
                Bn.slerpFlat(e, r, e, r, e, h, c)
            }
            _slerpAdditive(e, r, h, c, v) {
                const w = this._workIndex * v;
                Bn.multiplyQuaternionsFlat(e, w, e, r, e, h), Bn.slerpFlat(e, r, e, r, e, w, c)
            }
            _lerp(e, r, h, c, v) {
                const w = 1 - c;
                for (let E = 0; E !== v; ++E) {
                    const T = r + E;
                    e[T] = e[T] * w + e[h + E] * c
                }
            }
            _lerpAdditive(e, r, h, c, v) {
                for (let w = 0; w !== v; ++w) {
                    const E = r + w;
                    e[E] = e[E] + e[h + w] * c
                }
            }
        }
        const nl = "\\[\\]\\.:\\/",
            ip = new RegExp("[\\[\\]\\.:\\/]", "g"),
            Th = "[^\\[\\]\\.:\\/]",
            Mp = "[^" + nl.replace("\\.", "") + "]",
            Cp = /((?:WC+[\/:])*)/.source.replace("WC", Th),
            yu = /(WCOD+)?/.source.replace("WCOD", Mp),
            hd = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Th),
            Bp = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Th),
            ud = new RegExp("^" + Cp + yu + hd + Bp + "$"),
            dd = ["material", "materials", "bones"];

        function Ql(s, e, r) {
            const h = r || Ca.parseTrackName(e);
            this._targetGroup = s, this._bindings = s.subscribe_(e, h)
        }

        function Ca(s, e, r) {
            this.path = e, this.parsedPath = r || Ca.parseTrackName(e), this.node = Ca.findNode(s, this.parsedPath.nodeName) || s, this.rootNode = s
        }
        Object.assign(Ql.prototype, {
            getValue: function(s, e) {
                this.bind();
                const r = this._targetGroup.nCachedObjects_,
                    h = this._bindings[r];
                h !== void 0 && h.getValue(s, e)
            },
            setValue: function(s, e) {
                const r = this._bindings;
                for (let h = this._targetGroup.nCachedObjects_, c = r.length; h !== c; ++h) r[h].setValue(s, e)
            },
            bind: function() {
                const s = this._bindings;
                for (let e = this._targetGroup.nCachedObjects_, r = s.length; e !== r; ++e) s[e].bind()
            },
            unbind: function() {
                const s = this._bindings;
                for (let e = this._targetGroup.nCachedObjects_, r = s.length; e !== r; ++e) s[e].unbind()
            }
        }), Object.assign(Ca, {
            Composite: Ql,
            create: function(s, e, r) {
                return s && s.isAnimationObjectGroup ? new Ca.Composite(s, e, r) : new Ca(s, e, r)
            },
            sanitizeNodeName: function(s) {
                return s.replace(/\s/g, "_").replace(ip, "")
            },
            parseTrackName: function(s) {
                const e = ud.exec(s);
                if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + s);
                const r = {
                        nodeName: e[2],
                        objectName: e[3],
                        objectIndex: e[4],
                        propertyName: e[5],
                        propertyIndex: e[6]
                    },
                    h = r.nodeName && r.nodeName.lastIndexOf(".");
                if (h !== void 0 && h !== -1) {
                    const c = r.nodeName.substring(h + 1);
                    dd.indexOf(c) !== -1 && (r.nodeName = r.nodeName.substring(0, h), r.objectName = c)
                }
                if (r.propertyName === null || r.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + s);
                return r
            },
            findNode: function(s, e) {
                if (!e || e === "" || e === "." || e === -1 || e === s.name || e === s.uuid) return s;
                if (s.skeleton) {
                    const r = s.skeleton.getBoneByName(e);
                    if (r !== void 0) return r
                }
                if (s.children) {
                    const r = function(c) {
                            for (let v = 0; v < c.length; v++) {
                                const w = c[v];
                                if (w.name === e || w.uuid === e) return w;
                                const E = r(w.children);
                                if (E) return E
                            }
                            return null
                        },
                        h = r(s.children);
                    if (h) return h
                }
                return null
            }
        }), Object.assign(Ca.prototype, {
            _getValue_unavailable: function() {},
            _setValue_unavailable: function() {},
            BindingType: {
                Direct: 0,
                EntireArray: 1,
                ArrayElement: 2,
                HasFromToArray: 3
            },
            Versioning: {
                None: 0,
                NeedsUpdate: 1,
                MatrixWorldNeedsUpdate: 2
            },
            GetterByBindingType: [function(s, e) {
                s[e] = this.node[this.propertyName]
            }, function(s, e) {
                const r = this.resolvedProperty;
                for (let h = 0, c = r.length; h !== c; ++h) s[e++] = r[h]
            }, function(s, e) {
                s[e] = this.resolvedProperty[this.propertyIndex]
            }, function(s, e) {
                this.resolvedProperty.toArray(s, e)
            }],
            SetterByBindingTypeAndVersioning: [
                [function(s, e) {
                    this.targetObject[this.propertyName] = s[e]
                }, function(s, e) {
                    this.targetObject[this.propertyName] = s[e], this.targetObject.needsUpdate = !0
                }, function(s, e) {
                    this.targetObject[this.propertyName] = s[e], this.targetObject.matrixWorldNeedsUpdate = !0
                }],
                [function(s, e) {
                    const r = this.resolvedProperty;
                    for (let h = 0, c = r.length; h !== c; ++h) r[h] = s[e++]
                }, function(s, e) {
                    const r = this.resolvedProperty;
                    for (let h = 0, c = r.length; h !== c; ++h) r[h] = s[e++];
                    this.targetObject.needsUpdate = !0
                }, function(s, e) {
                    const r = this.resolvedProperty;
                    for (let h = 0, c = r.length; h !== c; ++h) r[h] = s[e++];
                    this.targetObject.matrixWorldNeedsUpdate = !0
                }],
                [function(s, e) {
                    this.resolvedProperty[this.propertyIndex] = s[e]
                }, function(s, e) {
                    this.resolvedProperty[this.propertyIndex] = s[e], this.targetObject.needsUpdate = !0
                }, function(s, e) {
                    this.resolvedProperty[this.propertyIndex] = s[e], this.targetObject.matrixWorldNeedsUpdate = !0
                }],
                [function(s, e) {
                    this.resolvedProperty.fromArray(s, e)
                }, function(s, e) {
                    this.resolvedProperty.fromArray(s, e), this.targetObject.needsUpdate = !0
                }, function(s, e) {
                    this.resolvedProperty.fromArray(s, e), this.targetObject.matrixWorldNeedsUpdate = !0
                }]
            ],
            getValue: function(s, e) {
                this.bind(), this.getValue(s, e)
            },
            setValue: function(s, e) {
                this.bind(), this.setValue(s, e)
            },
            bind: function() {
                let s = this.node;
                const e = this.parsedPath,
                    r = e.objectName,
                    h = e.propertyName;
                let c = e.propertyIndex;
                if (s || (s = Ca.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = s), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !s) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
                if (r) {
                    let T = e.objectIndex;
                    switch (r) {
                        case "materials":
                            if (!s.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            if (!s.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            s = s.material.materials;
                            break;
                        case "bones":
                            if (!s.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            s = s.skeleton.bones;
                            for (let B = 0; B < s.length; B++)
                                if (s[B].name === T) {
                                    T = B;
                                    break
                                } break;
                        default:
                            if (s[r] === void 0) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            s = s[r]
                    }
                    if (T !== void 0) {
                        if (s[T] === void 0) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, s);
                        s = s[T]
                    }
                }
                const v = s[h];
                if (v === void 0) {
                    const T = e.nodeName;
                    return void console.error("THREE.PropertyBinding: Trying to update property for track: " + T + "." + h + " but it wasn't found.", s)
                }
                let w = this.Versioning.None;
                this.targetObject = s, s.needsUpdate !== void 0 ? w = this.Versioning.NeedsUpdate : s.matrixWorldNeedsUpdate !== void 0 && (w = this.Versioning.MatrixWorldNeedsUpdate);
                let E = this.BindingType.Direct;
                if (c !== void 0) {
                    if (h === "morphTargetInfluences") {
                        if (!s.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                        if (!s.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                        if (!s.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                        s.morphTargetDictionary[c] !== void 0 && (c = s.morphTargetDictionary[c])
                    }
                    E = this.BindingType.ArrayElement, this.resolvedProperty = v, this.propertyIndex = c
                } else v.fromArray !== void 0 && v.toArray !== void 0 ? (E = this.BindingType.HasFromToArray, this.resolvedProperty = v) : Array.isArray(v) ? (E = this.BindingType.EntireArray, this.resolvedProperty = v) : this.propertyName = h;
                this.getValue = this.GetterByBindingType[E], this.setValue = this.SetterByBindingTypeAndVersioning[E][w]
            },
            unbind: function() {
                this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
            }
        }), Object.assign(Ca.prototype, {
            _getValue_unbound: Ca.prototype.getValue,
            _setValue_unbound: Ca.prototype.setValue
        });
        class pd {
            constructor() {
                this.uuid = Mi.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
                const e = {};
                this._indicesByUUID = e;
                for (let h = 0, c = arguments.length; h !== c; ++h) e[arguments[h].uuid] = h;
                this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
                const r = this;
                this.stats = {
                    objects: {
                        get total() {
                            return r._objects.length
                        },
                        get inUse() {
                            return this.total - r.nCachedObjects_
                        }
                    },
                    get bindingsPerObject() {
                        return r._bindings.length
                    }
                }
            }
            add() {
                const e = this._objects,
                    r = this._indicesByUUID,
                    h = this._paths,
                    c = this._parsedPaths,
                    v = this._bindings,
                    w = v.length;
                let E, T = e.length,
                    B = this.nCachedObjects_;
                for (let Q = 0, k = arguments.length; Q !== k; ++Q) {
                    const i = arguments[Q],
                        t = i.uuid;
                    let a = r[t];
                    if (a === void 0) {
                        a = T++, r[t] = a, e.push(i);
                        for (let l = 0, d = w; l !== d; ++l) v[l].push(new Ca(i, h[l], c[l]))
                    } else if (a < B) {
                        E = e[a];
                        const l = --B,
                            d = e[l];
                        r[d.uuid] = a, e[a] = d, r[t] = l, e[l] = i;
                        for (let g = 0, x = w; g !== x; ++g) {
                            const A = v[g],
                                M = A[l];
                            let F = A[a];
                            A[a] = M, F === void 0 && (F = new Ca(i, h[g], c[g])), A[l] = F
                        }
                    } else e[a] !== E && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
                }
                this.nCachedObjects_ = B
            }
            remove() {
                const e = this._objects,
                    r = this._indicesByUUID,
                    h = this._bindings,
                    c = h.length;
                let v = this.nCachedObjects_;
                for (let w = 0, E = arguments.length; w !== E; ++w) {
                    const T = arguments[w],
                        B = T.uuid,
                        Q = r[B];
                    if (Q !== void 0 && Q >= v) {
                        const k = v++,
                            i = e[k];
                        r[i.uuid] = Q, e[Q] = i, r[B] = k, e[k] = T;
                        for (let t = 0, a = c; t !== a; ++t) {
                            const l = h[t],
                                d = l[k],
                                g = l[Q];
                            l[Q] = d, l[k] = g
                        }
                    }
                }
                this.nCachedObjects_ = v
            }
            uncache() {
                const e = this._objects,
                    r = this._indicesByUUID,
                    h = this._bindings,
                    c = h.length;
                let v = this.nCachedObjects_,
                    w = e.length;
                for (let E = 0, T = arguments.length; E !== T; ++E) {
                    const B = arguments[E].uuid,
                        Q = r[B];
                    if (Q !== void 0)
                        if (delete r[B], Q < v) {
                            const k = --v,
                                i = e[k],
                                t = --w,
                                a = e[t];
                            r[i.uuid] = Q, e[Q] = i, r[a.uuid] = k, e[k] = a, e.pop();
                            for (let l = 0, d = c; l !== d; ++l) {
                                const g = h[l],
                                    x = g[k],
                                    A = g[t];
                                g[Q] = x, g[k] = A, g.pop()
                            }
                        } else {
                            const k = --w,
                                i = e[k];
                            k > 0 && (r[i.uuid] = Q), e[Q] = i, e.pop();
                            for (let t = 0, a = c; t !== a; ++t) {
                                const l = h[t];
                                l[Q] = l[k], l.pop()
                            }
                        }
                }
                this.nCachedObjects_ = v
            }
            subscribe_(e, r) {
                const h = this._bindingsIndicesByPath;
                let c = h[e];
                const v = this._bindings;
                if (c !== void 0) return v[c];
                const w = this._paths,
                    E = this._parsedPaths,
                    T = this._objects,
                    B = T.length,
                    Q = this.nCachedObjects_,
                    k = new Array(B);
                c = v.length, h[e] = c, w.push(e), E.push(r), v.push(k);
                for (let i = Q, t = T.length; i !== t; ++i) {
                    const a = T[i];
                    k[i] = new Ca(a, e, r)
                }
                return k
            }
            unsubscribe_(e) {
                const r = this._bindingsIndicesByPath,
                    h = r[e];
                if (h !== void 0) {
                    const c = this._paths,
                        v = this._parsedPaths,
                        w = this._bindings,
                        E = w.length - 1,
                        T = w[E];
                    r[e[E]] = h, w[h] = T, w.pop(), v[h] = v[E], v.pop(), c[h] = c[E], c.pop()
                }
            }
        }
        pd.prototype.isAnimationObjectGroup = !0;
        class fd {
            constructor(e, r, h = null, c = r.blendMode) {
                this._mixer = e, this._clip = r, this._localRoot = h, this.blendMode = c;
                const v = r.tracks,
                    w = v.length,
                    E = new Array(w),
                    T = {
                        endingStart: 2400,
                        endingEnd: 2400
                    };
                for (let B = 0; B !== w; ++B) {
                    const Q = v[B].createInterpolant(null);
                    E[B] = Q, Q.settings = T
                }
                this._interpolantSettings = T, this._interpolants = E, this._propertyBindings = new Array(w), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
            }
            play() {
                return this._mixer._activateAction(this), this
            }
            stop() {
                return this._mixer._deactivateAction(this), this.reset()
            }
            reset() {
                return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
            }
            isRunning() {
                return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this)
            }
            isScheduled() {
                return this._mixer._isActiveAction(this)
            }
            startAt(e) {
                return this._startTime = e, this
            }
            setLoop(e, r) {
                return this.loop = e, this.repetitions = r, this
            }
            setEffectiveWeight(e) {
                return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
            }
            getEffectiveWeight() {
                return this._effectiveWeight
            }
            fadeIn(e) {
                return this._scheduleFading(e, 0, 1)
            }
            fadeOut(e) {
                return this._scheduleFading(e, 1, 0)
            }
            crossFadeFrom(e, r, h) {
                if (e.fadeOut(r), this.fadeIn(r), h) {
                    const c = this._clip.duration,
                        v = e._clip.duration,
                        w = v / c,
                        E = c / v;
                    e.warp(1, w, r), this.warp(E, 1, r)
                }
                return this
            }
            crossFadeTo(e, r, h) {
                return e.crossFadeFrom(this, r, h)
            }
            stopFading() {
                const e = this._weightInterpolant;
                return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
            }
            setEffectiveTimeScale(e) {
                return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
            }
            getEffectiveTimeScale() {
                return this._effectiveTimeScale
            }
            setDuration(e) {
                return this.timeScale = this._clip.duration / e, this.stopWarping()
            }
            syncWith(e) {
                return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
            }
            halt(e) {
                return this.warp(this._effectiveTimeScale, 0, e)
            }
            warp(e, r, h) {
                const c = this._mixer,
                    v = c.time,
                    w = this.timeScale;
                let E = this._timeScaleInterpolant;
                E === null && (E = c._lendControlInterpolant(), this._timeScaleInterpolant = E);
                const T = E.parameterPositions,
                    B = E.sampleValues;
                return T[0] = v, T[1] = v + h, B[0] = e / w, B[1] = r / w, this
            }
            stopWarping() {
                const e = this._timeScaleInterpolant;
                return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
            }
            getMixer() {
                return this._mixer
            }
            getClip() {
                return this._clip
            }
            getRoot() {
                return this._localRoot || this._mixer._root
            }
            _update(e, r, h, c) {
                if (!this.enabled) return void this._updateWeight(e);
                const v = this._startTime;
                if (v !== null) {
                    const T = (e - v) * h;
                    if (T < 0 || h === 0) return;
                    this._startTime = null, r = h * T
                }
                r *= this._updateTimeScale(e);
                const w = this._updateTime(r),
                    E = this._updateWeight(e);
                if (E > 0) {
                    const T = this._interpolants,
                        B = this._propertyBindings;
                    switch (this.blendMode) {
                        case 2501:
                            for (let Q = 0, k = T.length; Q !== k; ++Q) T[Q].evaluate(w), B[Q].accumulateAdditive(E);
                            break;
                        case 2500:
                        default:
                            for (let Q = 0, k = T.length; Q !== k; ++Q) T[Q].evaluate(w), B[Q].accumulate(c, E)
                    }
                }
            }
            _updateWeight(e) {
                let r = 0;
                if (this.enabled) {
                    r = this.weight;
                    const h = this._weightInterpolant;
                    if (h !== null) {
                        const c = h.evaluate(e)[0];
                        r *= c, e > h.parameterPositions[1] && (this.stopFading(), c === 0 && (this.enabled = !1))
                    }
                }
                return this._effectiveWeight = r, r
            }
            _updateTimeScale(e) {
                let r = 0;
                if (!this.paused) {
                    r = this.timeScale;
                    const h = this._timeScaleInterpolant;
                    h !== null && (r *= h.evaluate(e)[0], e > h.parameterPositions[1] && (this.stopWarping(), r === 0 ? this.paused = !0 : this.timeScale = r))
                }
                return this._effectiveTimeScale = r, r
            }
            _updateTime(e) {
                const r = this._clip.duration,
                    h = this.loop;
                let c = this.time + e,
                    v = this._loopCount;
                const w = h === 2202;
                if (e === 0) return v === -1 ? c : w && (1 & v) == 1 ? r - c : c;
                if (h === 2200) {
                    v === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                    e: {
                        if (c >= r) c = r;
                        else {
                            if (!(c < 0)) {
                                this.time = c;
                                break e
                            }
                            c = 0
                        }
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        this.time = c,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: e < 0 ? -1 : 1
                        })
                    }
                } else {
                    if (v === -1 && (e >= 0 ? (v = 0, this._setEndings(!0, this.repetitions === 0, w)) : this._setEndings(this.repetitions === 0, !0, w)), c >= r || c < 0) {
                        const E = Math.floor(c / r);
                        c -= r * E, v += Math.abs(E);
                        const T = this.repetitions - v;
                        if (T <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, c = e > 0 ? r : 0, this.time = c, this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: e > 0 ? 1 : -1
                        });
                        else {
                            if (T === 1) {
                                const B = e < 0;
                                this._setEndings(B, !B, w)
                            } else this._setEndings(!1, !1, w);
                            this._loopCount = v, this.time = c, this._mixer.dispatchEvent({
                                type: "loop",
                                action: this,
                                loopDelta: E
                            })
                        }
                    } else this.time = c;
                    if (w && (1 & v) == 1) return r - c
                }
                return c
            }
            _setEndings(e, r, h) {
                const c = this._interpolantSettings;
                h ? (c.endingStart = 2401, c.endingEnd = 2401) : (c.endingStart = e ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, c.endingEnd = r ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
            }
            _scheduleFading(e, r, h) {
                const c = this._mixer,
                    v = c.time;
                let w = this._weightInterpolant;
                w === null && (w = c._lendControlInterpolant(), this._weightInterpolant = w);
                const E = w.parameterPositions,
                    T = w.sampleValues;
                return E[0] = v, T[0] = r, E[1] = v + e, T[1] = h, this
            }
        }
        class md extends yn {
            constructor(e) {
                super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
            }
            _bindAction(e, r) {
                const h = e._localRoot || this._root,
                    c = e._clip.tracks,
                    v = c.length,
                    w = e._propertyBindings,
                    E = e._interpolants,
                    T = h.uuid,
                    B = this._bindingsByRootAndName;
                let Q = B[T];
                Q === void 0 && (Q = {}, B[T] = Q);
                for (let k = 0; k !== v; ++k) {
                    const i = c[k],
                        t = i.name;
                    let a = Q[t];
                    if (a !== void 0) w[k] = a;
                    else {
                        if (a = w[k], a !== void 0) {
                            a._cacheIndex === null && (++a.referenceCount, this._addInactiveBinding(a, T, t));
                            continue
                        }
                        const l = r && r._propertyBindings[k].binding.parsedPath;
                        a = new Rs(Ca.create(h, t, l), i.ValueTypeName, i.getValueSize()), ++a.referenceCount, this._addInactiveBinding(a, T, t), w[k] = a
                    }
                    E[k].resultBuffer = a.buffer
                }
            }
            _activateAction(e) {
                if (!this._isActiveAction(e)) {
                    if (e._cacheIndex === null) {
                        const h = (e._localRoot || this._root).uuid,
                            c = e._clip.uuid,
                            v = this._actionsByClip[c];
                        this._bindAction(e, v && v.knownActions[0]), this._addInactiveAction(e, c, h)
                    }
                    const r = e._propertyBindings;
                    for (let h = 0, c = r.length; h !== c; ++h) {
                        const v = r[h];
                        v.useCount++ == 0 && (this._lendBinding(v), v.saveOriginalState())
                    }
                    this._lendAction(e)
                }
            }
            _deactivateAction(e) {
                if (this._isActiveAction(e)) {
                    const r = e._propertyBindings;
                    for (let h = 0, c = r.length; h !== c; ++h) {
                        const v = r[h];
                        --v.useCount == 0 && (v.restoreOriginalState(), this._takeBackBinding(v))
                    }
                    this._takeBackAction(e)
                }
            }
            _initMemoryManager() {
                this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
                const e = this;
                this.stats = {
                    actions: {
                        get total() {
                            return e._actions.length
                        },
                        get inUse() {
                            return e._nActiveActions
                        }
                    },
                    bindings: {
                        get total() {
                            return e._bindings.length
                        },
                        get inUse() {
                            return e._nActiveBindings
                        }
                    },
                    controlInterpolants: {
                        get total() {
                            return e._controlInterpolants.length
                        },
                        get inUse() {
                            return e._nActiveControlInterpolants
                        }
                    }
                }
            }
            _isActiveAction(e) {
                const r = e._cacheIndex;
                return r !== null && r < this._nActiveActions
            }
            _addInactiveAction(e, r, h) {
                const c = this._actions,
                    v = this._actionsByClip;
                let w = v[r];
                if (w === void 0) w = {
                    knownActions: [e],
                    actionByRoot: {}
                }, e._byClipCacheIndex = 0, v[r] = w;
                else {
                    const E = w.knownActions;
                    e._byClipCacheIndex = E.length, E.push(e)
                }
                e._cacheIndex = c.length, c.push(e), w.actionByRoot[h] = e
            }
            _removeInactiveAction(e) {
                const r = this._actions,
                    h = r[r.length - 1],
                    c = e._cacheIndex;
                h._cacheIndex = c, r[c] = h, r.pop(), e._cacheIndex = null;
                const v = e._clip.uuid,
                    w = this._actionsByClip,
                    E = w[v],
                    T = E.knownActions,
                    B = T[T.length - 1],
                    Q = e._byClipCacheIndex;
                B._byClipCacheIndex = Q, T[Q] = B, T.pop(), e._byClipCacheIndex = null, delete E.actionByRoot[(e._localRoot || this._root).uuid], T.length === 0 && delete w[v], this._removeInactiveBindingsForAction(e)
            }
            _removeInactiveBindingsForAction(e) {
                const r = e._propertyBindings;
                for (let h = 0, c = r.length; h !== c; ++h) {
                    const v = r[h];
                    --v.referenceCount == 0 && this._removeInactiveBinding(v)
                }
            }
            _lendAction(e) {
                const r = this._actions,
                    h = e._cacheIndex,
                    c = this._nActiveActions++,
                    v = r[c];
                e._cacheIndex = c, r[c] = e, v._cacheIndex = h, r[h] = v
            }
            _takeBackAction(e) {
                const r = this._actions,
                    h = e._cacheIndex,
                    c = --this._nActiveActions,
                    v = r[c];
                e._cacheIndex = c, r[c] = e, v._cacheIndex = h, r[h] = v
            }
            _addInactiveBinding(e, r, h) {
                const c = this._bindingsByRootAndName,
                    v = this._bindings;
                let w = c[r];
                w === void 0 && (w = {}, c[r] = w), w[h] = e, e._cacheIndex = v.length, v.push(e)
            }
            _removeInactiveBinding(e) {
                const r = this._bindings,
                    h = e.binding,
                    c = h.rootNode.uuid,
                    v = h.path,
                    w = this._bindingsByRootAndName,
                    E = w[c],
                    T = r[r.length - 1],
                    B = e._cacheIndex;
                T._cacheIndex = B, r[B] = T, r.pop(), delete E[v], Object.keys(E).length === 0 && delete w[c]
            }
            _lendBinding(e) {
                const r = this._bindings,
                    h = e._cacheIndex,
                    c = this._nActiveBindings++,
                    v = r[c];
                e._cacheIndex = c, r[c] = e, v._cacheIndex = h, r[h] = v
            }
            _takeBackBinding(e) {
                const r = this._bindings,
                    h = e._cacheIndex,
                    c = --this._nActiveBindings,
                    v = r[c];
                e._cacheIndex = c, r[c] = e, v._cacheIndex = h, r[h] = v
            }
            _lendControlInterpolant() {
                const e = this._controlInterpolants,
                    r = this._nActiveControlInterpolants++;
                let h = e[r];
                return h === void 0 && (h = new hh(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), h.__cacheIndex = r, e[r] = h), h
            }
            _takeBackControlInterpolant(e) {
                const r = this._controlInterpolants,
                    h = e.__cacheIndex,
                    c = --this._nActiveControlInterpolants,
                    v = r[c];
                e.__cacheIndex = c, r[c] = e, v.__cacheIndex = h, r[h] = v
            }
            clipAction(e, r, h) {
                const c = r || this._root,
                    v = c.uuid;
                let w = typeof e == "string" ? dh.findByName(c, e) : e;
                const E = w !== null ? w.uuid : e,
                    T = this._actionsByClip[E];
                let B = null;
                if (h === void 0 && (h = w !== null ? w.blendMode : 2500), T !== void 0) {
                    const k = T.actionByRoot[v];
                    if (k !== void 0 && k.blendMode === h) return k;
                    B = T.knownActions[0], w === null && (w = B._clip)
                }
                if (w === null) return null;
                const Q = new fd(this, w, r, h);
                return this._bindAction(Q, B), this._addInactiveAction(Q, E, v), Q
            }
            existingAction(e, r) {
                const h = r || this._root,
                    c = h.uuid,
                    v = typeof e == "string" ? dh.findByName(h, e) : e,
                    w = v ? v.uuid : e,
                    E = this._actionsByClip[w];
                return E !== void 0 && E.actionByRoot[c] || null
            }
            stopAllAction() {
                const e = this._actions;
                for (let r = this._nActiveActions - 1; r >= 0; --r) e[r].stop();
                return this
            }
            update(e) {
                e *= this.timeScale;
                const r = this._actions,
                    h = this._nActiveActions,
                    c = this.time += e,
                    v = Math.sign(e),
                    w = this._accuIndex ^= 1;
                for (let B = 0; B !== h; ++B) r[B]._update(c, e, v, w);
                const E = this._bindings,
                    T = this._nActiveBindings;
                for (let B = 0; B !== T; ++B) E[B].apply(w);
                return this
            }
            setTime(e) {
                this.time = 0;
                for (let r = 0; r < this._actions.length; r++) this._actions[r].time = 0;
                return this.update(e)
            }
            getRoot() {
                return this._root
            }
            uncacheClip(e) {
                const r = this._actions,
                    h = e.uuid,
                    c = this._actionsByClip,
                    v = c[h];
                if (v !== void 0) {
                    const w = v.knownActions;
                    for (let E = 0, T = w.length; E !== T; ++E) {
                        const B = w[E];
                        this._deactivateAction(B);
                        const Q = B._cacheIndex,
                            k = r[r.length - 1];
                        B._cacheIndex = null, B._byClipCacheIndex = null, k._cacheIndex = Q, r[Q] = k, r.pop(), this._removeInactiveBindingsForAction(B)
                    }
                    delete c[h]
                }
            }
            uncacheRoot(e) {
                const r = e.uuid,
                    h = this._actionsByClip;
                for (const v in h) {
                    const w = h[v].actionByRoot[r];
                    w !== void 0 && (this._deactivateAction(w), this._removeInactiveAction(w))
                }
                const c = this._bindingsByRootAndName[r];
                if (c !== void 0)
                    for (const v in c) {
                        const w = c[v];
                        w.restoreOriginalState(), this._removeInactiveBinding(w)
                    }
            }
            uncacheAction(e, r) {
                const h = this.existingAction(e, r);
                h !== null && (this._deactivateAction(h), this._removeInactiveAction(h))
            }
        }
        md.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
        class Pl {
            constructor(e) {
                typeof e == "string" && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e
            }
            clone() {
                return new Pl(this.value.clone === void 0 ? this.value : this.value.clone())
            }
        }

        function vu(s, e, r) {
            St.call(this, s, e), this.meshPerAttribute = r || 1
        }

        function gd(s, e, r, h, c) {
            this.buffer = s, this.type = e, this.itemSize = r, this.elementSize = h, this.count = c, this.version = 0
        }

        function yd(s, e, r = 0, h = 1 / 0) {
            this.ray = new wr(s, e), this.near = r, this.far = h, this.camera = null, this.layers = new Jr, this.params = {
                Mesh: {},
                Line: {
                    threshold: 1
                },
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            }, Object.defineProperties(this.params, {
                PointCloud: {
                    get: function() {
                        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                    }
                }
            })
        }

        function vd(s, e) {
            return s.distance - e.distance
        }

        function _d(s, e, r, h) {
            if (s.layers.test(e.layers) && s.raycast(e, r), h === !0) {
                const c = s.children;
                for (let v = 0, w = c.length; v < w; v++) _d(c[v], e, r, !0)
            }
        }
        vu.prototype = Object.assign(Object.create(St.prototype), {
            constructor: vu,
            isInstancedInterleavedBuffer: !0,
            copy: function(s) {
                return St.prototype.copy.call(this, s), this.meshPerAttribute = s.meshPerAttribute, this
            },
            clone: function(s) {
                const e = St.prototype.clone.call(this, s);
                return e.meshPerAttribute = this.meshPerAttribute, e
            },
            toJSON: function(s) {
                const e = St.prototype.toJSON.call(this, s);
                return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e
            }
        }), Object.defineProperty(gd.prototype, "needsUpdate", {
            set: function(s) {
                s === !0 && this.version++
            }
        }), Object.assign(gd.prototype, {
            isGLBufferAttribute: !0,
            setBuffer: function(s) {
                return this.buffer = s, this
            },
            setType: function(s, e) {
                return this.type = s, this.elementSize = e, this
            },
            setItemSize: function(s) {
                return this.itemSize = s, this
            },
            setCount: function(s) {
                return this.count = s, this
            }
        }), Object.assign(yd.prototype, {
            set: function(s, e) {
                this.ray.set(s, e)
            },
            setFromCamera: function(s, e) {
                e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(s.x, s.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(s.x, s.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
            },
            intersectObject: function(s, e = !1, r = []) {
                return _d(s, this, r, e), r.sort(vd), r
            },
            intersectObjects: function(s, e = !1, r = []) {
                for (let h = 0, c = s.length; h < c; h++) _d(s[h], this, r, e);
                return r.sort(vd), r
            }
        });
        const np = new Ht;
        class Tc {
            constructor(e = new Ht(1 / 0, 1 / 0), r = new Ht(-1 / 0, -1 / 0)) {
                this.min = e, this.max = r
            }
            set(e, r) {
                return this.min.copy(e), this.max.copy(r), this
            }
            setFromPoints(e) {
                this.makeEmpty();
                for (let r = 0, h = e.length; r < h; r++) this.expandByPoint(e[r]);
                return this
            }
            setFromCenterAndSize(e, r) {
                const h = np.copy(r).multiplyScalar(.5);
                return this.min.copy(e).sub(h), this.max.copy(e).add(h), this
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                return this.min.copy(e.min), this.max.copy(e.max), this
            }
            makeEmpty() {
                return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
            }
            isEmpty() {
                return this.max.x < this.min.x || this.max.y < this.min.y
            }
            getCenter(e) {
                return e === void 0 && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new Ht), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
            }
            getSize(e) {
                return e === void 0 && (console.warn("THREE.Box2: .getSize() target is now required"), e = new Ht), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
            }
            expandByPoint(e) {
                return this.min.min(e), this.max.max(e), this
            }
            expandByVector(e) {
                return this.min.sub(e), this.max.add(e), this
            }
            expandByScalar(e) {
                return this.min.addScalar(-e), this.max.addScalar(e), this
            }
            containsPoint(e) {
                return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
            }
            containsBox(e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
            }
            getParameter(e, r) {
                return r === void 0 && (console.warn("THREE.Box2: .getParameter() target is now required"), r = new Ht), r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
            }
            intersectsBox(e) {
                return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
            }
            clampPoint(e, r) {
                return r === void 0 && (console.warn("THREE.Box2: .clampPoint() target is now required"), r = new Ht), r.copy(e).clamp(this.min, this.max)
            }
            distanceToPoint(e) {
                return np.copy(e).clamp(this.min, this.max).sub(e).length()
            }
            intersect(e) {
                return this.min.max(e.min), this.max.min(e.max), this
            }
            union(e) {
                return this.min.min(e.min), this.max.max(e.max), this
            }
            translate(e) {
                return this.min.add(e), this.max.add(e), this
            }
            equals(e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }
        }
        Tc.prototype.isBox2 = !0;
        const rp = new ge,
            Mc = new ge;
        class So {
            constructor(e = new ge, r = new ge) {
                this.start = e, this.end = r
            }
            set(e, r) {
                return this.start.copy(e), this.end.copy(r), this
            }
            copy(e) {
                return this.start.copy(e.start), this.end.copy(e.end), this
            }
            getCenter(e) {
                return e === void 0 && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new ge), e.addVectors(this.start, this.end).multiplyScalar(.5)
            }
            delta(e) {
                return e === void 0 && (console.warn("THREE.Line3: .delta() target is now required"), e = new ge), e.subVectors(this.end, this.start)
            }
            distanceSq() {
                return this.start.distanceToSquared(this.end)
            }
            distance() {
                return this.start.distanceTo(this.end)
            }
            at(e, r) {
                return r === void 0 && (console.warn("THREE.Line3: .at() target is now required"), r = new ge), this.delta(r).multiplyScalar(e).add(this.start)
            }
            closestPointToPointParameter(e, r) {
                rp.subVectors(e, this.start), Mc.subVectors(this.end, this.start);
                const h = Mc.dot(Mc);
                let c = Mc.dot(rp) / h;
                return r && (c = Mi.clamp(c, 0, 1)), c
            }
            closestPointToPoint(e, r, h) {
                const c = this.closestPointToPointParameter(e, r);
                return h === void 0 && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), h = new ge), this.delta(h).multiplyScalar(c).add(this.start)
            }
            applyMatrix4(e) {
                return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
            }
            equals(e) {
                return e.start.equals(this.start) && e.end.equals(this.end)
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }

        function Cc(s) {
            Z.call(this), this.material = s, this.render = function() {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0
        }
        Cc.prototype = Object.create(Z.prototype), Cc.prototype.constructor = Cc, Cc.prototype.isImmediateRenderObject = !0;
        const xd = new ge,
            Ao = new ge,
            Mh = new Ui,
            _u = new Ui;
        class xu extends xa {
            constructor(e) {
                const r = Ch(e),
                    h = new an,
                    c = [],
                    v = [],
                    w = new Rt(0, 0, 1),
                    E = new Rt(0, 1, 0);
                for (let T = 0; T < r.length; T++) {
                    const B = r[T];
                    B.parent && B.parent.isBone && (c.push(0, 0, 0), c.push(0, 0, 0), v.push(w.r, w.g, w.b), v.push(E.r, E.g, E.b))
                }
                h.setAttribute("position", new Ai(c, 3)), h.setAttribute("color", new Ai(v, 3)), super(h, new Xr({
                    vertexColors: !0,
                    depthTest: !1,
                    depthWrite: !1,
                    toneMapped: !1,
                    transparent: !0
                })), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = r, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
            }
            updateMatrixWorld(e) {
                const r = this.bones,
                    h = this.geometry,
                    c = h.getAttribute("position");
                _u.copy(this.root.matrixWorld).invert();
                for (let v = 0, w = 0; v < r.length; v++) {
                    const E = r[v];
                    E.parent && E.parent.isBone && (Mh.multiplyMatrices(_u, E.matrixWorld), Ao.setFromMatrixPosition(Mh), c.setXYZ(w, Ao.x, Ao.y, Ao.z), Mh.multiplyMatrices(_u, E.parent.matrixWorld), Ao.setFromMatrixPosition(Mh), c.setXYZ(w + 1, Ao.x, Ao.y, Ao.z), w += 2)
                }
                h.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e)
            }
        }

        function Ch(s) {
            const e = [];
            s && s.isBone && e.push(s);
            for (let r = 0; r < s.children.length; r++) e.push.apply(e, Ch(s.children[r]));
            return e
        }
        const ap = new ge,
            bu = new Rt,
            bd = new Rt;
        class Ja extends xa {
            constructor(e = 10, r = 10, h = 4473924, c = 8947848) {
                h = new Rt(h), c = new Rt(c);
                const v = r / 2,
                    w = e / r,
                    E = e / 2,
                    T = [],
                    B = [];
                for (let k = 0, i = 0, t = -E; k <= r; k++, t += w) {
                    T.push(-E, 0, t, E, 0, t), T.push(t, 0, -E, t, 0, E);
                    const a = k === v ? h : c;
                    a.toArray(B, i), i += 3, a.toArray(B, i), i += 3, a.toArray(B, i), i += 3, a.toArray(B, i), i += 3
                }
                const Q = new an;
                Q.setAttribute("position", new Ai(T, 3)), Q.setAttribute("color", new Ai(B, 3)), super(Q, new Xr({
                    vertexColors: !0,
                    toneMapped: !1
                })), this.type = "GridHelper"
            }
        }
        const Bc = new ge,
            Bh = new ge,
            wd = new ge,
            Rh = new ge,
            Hr = new Dn;

        function jr(s, e, r, h, c, v, w) {
            Rh.set(c, v, w).unproject(h);
            const E = e[s];
            if (E !== void 0) {
                const T = r.getAttribute("position");
                for (let B = 0, Q = E.length; B < Q; B++) T.setXYZ(E[B], Rh.x, Rh.y, Rh.z)
            }
        }
        const Fh = new Te;
        class sp extends xa {
            constructor(e, r = 16776960) {
                const h = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                    c = new Float32Array(24),
                    v = new an;
                v.setIndex(new pi(h, 1)), v.setAttribute("position", new pi(c, 3)), super(v, new Xr({
                    color: r,
                    toneMapped: !1
                })), this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update()
            }
            update(e) {
                if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && Fh.setFromObject(this.object), Fh.isEmpty()) return;
                const r = Fh.min,
                    h = Fh.max,
                    c = this.geometry.attributes.position,
                    v = c.array;
                v[0] = h.x, v[1] = h.y, v[2] = h.z, v[3] = r.x, v[4] = h.y, v[5] = h.z, v[6] = r.x, v[7] = r.y, v[8] = h.z, v[9] = h.x, v[10] = r.y, v[11] = h.z, v[12] = h.x, v[13] = h.y, v[14] = r.z, v[15] = r.x, v[16] = h.y, v[17] = r.z, v[18] = r.x, v[19] = r.y, v[20] = r.z, v[21] = h.x, v[22] = r.y, v[23] = r.z, c.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
            setFromObject(e) {
                return this.object = e, this.update(), this
            }
            copy(e) {
                return xa.prototype.copy.call(this, e), this.object = e.object, this
            }
        }
        const Ed = new ge;
        let Fs, wu;
        class Sd extends xa {
            constructor(e = 1) {
                const r = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
                    h = new an;
                h.setAttribute("position", new Ai(r, 3)), h.setAttribute("color", new Ai([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3)), super(h, new Xr({
                    vertexColors: !0,
                    toneMapped: !1
                })), this.type = "AxesHelper"
            }
        }
        const Ad = new Float32Array(1),
            op = new Int32Array(Ad.buffer),
            Rp = {
                toHalfFloat: function(s) {
                    Ad[0] = s;
                    const e = op[0];
                    let r = e >> 16 & 32768,
                        h = e >> 12 & 2047;
                    const c = e >> 23 & 255;
                    return c < 103 ? r : c > 142 ? (r |= 31744, r |= (c == 255 ? 0 : 1) && 8388607 & e, r) : c < 113 ? (h |= 2048, r |= (h >> 114 - c) + (h >> 113 - c & 1), r) : (r |= c - 112 << 10 | h >> 1, r += 1 & h, r)
                }
            },
            eo = Math.pow(2, 8),
            Td = [.125, .215, .35, .446, .526, .582],
            kl = 5 + Td.length,
            Lh = 20,
            ns = {
                3e3: 0,
                3001: 1,
                3002: 2,
                3004: 3,
                3005: 4,
                3006: 5,
                3007: 6
            },
            rl = new Gi({
                side: 1,
                depthWrite: !1,
                depthTest: !1
            }),
            Eu = new ar(new sr, rl),
            Rc = new _h,
            {
                _lodPlanes: al,
                _sizeLods: lp,
                _sigmas: Su
            } = up(),
            cp = new Rt;
        let Md = null;
        const ds = (1 + Math.sqrt(5)) / 2,
            Wr = 1 / ds,
            To = [new ge(1, 1, 1), new ge(-1, 1, 1), new ge(1, 1, -1), new ge(-1, 1, -1), new ge(0, ds, Wr), new ge(0, ds, -Wr), new ge(Wr, 0, ds), new ge(-Wr, 0, ds), new ge(ds, Wr, 0), new ge(-ds, Wr, 0)];

        function Au(s) {
            const e = Math.max(s.r, s.g, s.b),
                r = Math.min(Math.max(Math.ceil(Math.log2(e)), -128), 127);
            return s.multiplyScalar(Math.pow(2, -r)), (r + 128) / 255
        }

        function hp(s) {
            return s !== void 0 && s.type === 1009 && (s.encoding === 3e3 || s.encoding === 3001 || s.encoding === 3007)
        }

        function up() {
            const s = [],
                e = [],
                r = [];
            let h = 8;
            for (let c = 0; c < kl; c++) {
                const v = Math.pow(2, h);
                e.push(v);
                let w = 1 / v;
                c > 4 ? w = Td[c - 8 + 4 - 1] : c == 0 && (w = 0), r.push(w);
                const E = 1 / (v - 1),
                    T = -E / 2,
                    B = 1 + E / 2,
                    Q = [T, T, B, T, B, B, T, T, B, B, T, B],
                    k = 6,
                    i = 6,
                    t = 3,
                    a = 2,
                    l = 1,
                    d = new Float32Array(t * i * k),
                    g = new Float32Array(a * i * k),
                    x = new Float32Array(l * i * k);
                for (let M = 0; M < k; M++) {
                    const F = M % 3 * 2 / 3 - 1,
                        D = M > 2 ? 0 : -1,
                        U = [F, D, 0, F + 2 / 3, D, 0, F + 2 / 3, D + 1, 0, F, D, 0, F + 2 / 3, D + 1, 0, F, D + 1, 0];
                    d.set(U, t * i * M), g.set(Q, a * i * M);
                    const N = [M, M, M, M, M, M];
                    x.set(N, l * i * M)
                }
                const A = new an;
                A.setAttribute("position", new pi(d, t)), A.setAttribute("uv", new pi(g, a)), A.setAttribute("faceIndex", new pi(x, l)), s.push(A), h > 4 && h--
            }
            return {
                _lodPlanes: s,
                _sizeLods: e,
                _sigmas: r
            }
        }

        function Tu(s) {
            const e = new qi(3 * eo, 3 * eo, s);
            return e.texture.mapping = 306, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e
        }

        function Mu(s, e, r, h, c) {
            s.viewport.set(e, r, h, c), s.scissor.set(e, r, h, c)
        }

        function Cd() {
            const s = new Ht(1, 1);
            return new Xs({
                name: "EquirectangularToCubeUV",
                uniforms: {
                    envMap: {
                        value: null
                    },
                    texelSize: {
                        value: s
                    },
                    inputEncoding: {
                        value: ns[3e3]
                    },
                    outputEncoding: {
                        value: ns[3e3]
                    }
                },
                vertexShader: Rd(),
                fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Cu()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
                blending: 0,
                depthTest: !1,
                depthWrite: !1
            })
        }

        function Bd() {
            return new Xs({
                name: "CubemapToCubeUV",
                uniforms: {
                    envMap: {
                        value: null
                    },
                    inputEncoding: {
                        value: ns[3e3]
                    },
                    outputEncoding: {
                        value: ns[3e3]
                    }
                },
                vertexShader: Rd(),
                fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Cu()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
                blending: 0,
                depthTest: !1,
                depthWrite: !1
            })
        }

        function Rd() {
            return `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
        }

        function Cu() {
            return `

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`
        }
        Qa.create = function(s, e) {
            return console.log("THREE.Curve.create() has been deprecated"), s.prototype = Object.create(Qa.prototype), s.prototype.constructor = s, s.prototype.getPoint = e, s
        }, yh.prototype.fromPoints = function(s) {
            return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(s)
        }, Ja.prototype.setColors = function() {
            console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
        }, xu.prototype.update = function() {
            console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
        }, _r.prototype.extractUrlBase = function(s) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Ko.extractUrlBase(s)
        }, _r.Handlers = {
            add: function() {
                console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
            },
            get: function() {
                console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
            }
        }, Tc.prototype.center = function(s) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(s)
        }, Tc.prototype.empty = function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        }, Tc.prototype.isIntersectionBox = function(s) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s)
        }, Tc.prototype.size = function(s) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(s)
        }, Te.prototype.center = function(s) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(s)
        }, Te.prototype.empty = function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        }, Te.prototype.isIntersectionBox = function(s) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s)
        }, Te.prototype.isIntersectionSphere = function(s) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(s)
        }, Te.prototype.size = function(s) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(s)
        }, Fn.prototype.empty = function() {
            return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        }, Us.prototype.setFromMatrix = function(s) {
            return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(s)
        }, So.prototype.center = function(s) {
            return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(s)
        }, Mi.random16 = function() {
            return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
        }, Mi.nearestPowerOfTwo = function(s) {
            return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Mi.floorPowerOfTwo(s)
        }, Mi.nextPowerOfTwo = function(s) {
            return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Mi.ceilPowerOfTwo(s)
        }, Pt.prototype.flattenToArrayOffset = function(s, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(s, e)
        }, Pt.prototype.multiplyVector3 = function(s) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), s.applyMatrix3(this)
        }, Pt.prototype.multiplyVector3Array = function() {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        }, Pt.prototype.applyToBufferAttribute = function(s) {
            return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), s.applyMatrix3(this)
        }, Pt.prototype.applyToVector3Array = function() {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }, Pt.prototype.getInverse = function(s) {
            return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(s).invert()
        }, Ui.prototype.extractPosition = function(s) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(s)
        }, Ui.prototype.flattenToArrayOffset = function(s, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(s, e)
        }, Ui.prototype.getPosition = function() {
            return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new ge().setFromMatrixColumn(this, 3)
        }, Ui.prototype.setRotationFromQuaternion = function(s) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(s)
        }, Ui.prototype.multiplyToArray = function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        }, Ui.prototype.multiplyVector3 = function(s) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), s.applyMatrix4(this)
        }, Ui.prototype.multiplyVector4 = function(s) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), s.applyMatrix4(this)
        }, Ui.prototype.multiplyVector3Array = function() {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        }, Ui.prototype.rotateAxis = function(s) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), s.transformDirection(this)
        }, Ui.prototype.crossVector = function(s) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), s.applyMatrix4(this)
        }, Ui.prototype.translate = function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        }, Ui.prototype.rotateX = function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        }, Ui.prototype.rotateY = function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        }, Ui.prototype.rotateZ = function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        }, Ui.prototype.rotateByAxis = function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }, Ui.prototype.applyToBufferAttribute = function(s) {
            return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), s.applyMatrix4(this)
        }, Ui.prototype.applyToVector3Array = function() {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        }, Ui.prototype.makeFrustum = function(s, e, r, h, c, v) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(s, e, h, r, c, v)
        }, Ui.prototype.getInverse = function(s) {
            return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(s).invert()
        }, Et.prototype.isIntersectionLine = function(s) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(s)
        }, Bn.prototype.multiplyVector3 = function(s) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), s.applyQuaternion(this)
        }, Bn.prototype.inverse = function() {
            return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
        }, wr.prototype.isIntersectionBox = function(s) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s)
        }, wr.prototype.isIntersectionPlane = function(s) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(s)
        }, wr.prototype.isIntersectionSphere = function(s) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(s)
        }, Mt.prototype.area = function() {
            return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
        }, Mt.prototype.barycoordFromPoint = function(s, e) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(s, e)
        }, Mt.prototype.midpoint = function(s) {
            return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(s)
        }, Mt.prototypenormal = function(s) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(s)
        }, Mt.prototype.plane = function(s) {
            return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(s)
        }, Mt.barycoordFromPoint = function(s, e, r, h, c) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Mt.getBarycoord(s, e, r, h, c)
        }, Mt.normal = function(s, e, r, h) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Mt.getNormal(s, e, r, h)
        }, us.prototype.extractAllPoints = function(s) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(s)
        }, us.prototype.extrude = function(s) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new bo(this, s)
        }, us.prototype.makeGeometry = function(s) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Zo(this, s)
        }, Ht.prototype.fromAttribute = function(s, e, r) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s, e, r)
        }, Ht.prototype.distanceToManhattan = function(s) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(s)
        }, Ht.prototype.lengthManhattan = function() {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }, ge.prototype.setEulerFromRotationMatrix = function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        }, ge.prototype.setEulerFromQuaternion = function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        }, ge.prototype.getPositionFromMatrix = function(s) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(s)
        }, ge.prototype.getScaleFromMatrix = function(s) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(s)
        }, ge.prototype.getColumnFromMatrix = function(s, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, s)
        }, ge.prototype.applyProjection = function(s) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(s)
        }, ge.prototype.fromAttribute = function(s, e, r) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s, e, r)
        }, ge.prototype.distanceToManhattan = function(s) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(s)
        }, ge.prototype.lengthManhattan = function() {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }, Si.prototype.fromAttribute = function(s, e, r) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s, e, r)
        }, Si.prototype.lengthManhattan = function() {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }, Z.prototype.getChildByName = function(s) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(s)
        }, Z.prototype.renderDepth = function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        }, Z.prototype.translate = function(s, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, s)
        }, Z.prototype.getWorldRotation = function() {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
        }, Z.prototype.applyMatrix = function(s) {
            return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(s)
        }, Object.defineProperties(Z.prototype, {
            eulerOrder: {
                get: function() {
                    return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
                },
                set: function(s) {
                    console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = s
                }
            },
            useQuaternion: {
                get: function() {
                    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                },
                set: function() {
                    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                }
            }
        }), ar.prototype.setDrawMode = function() {
            console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
        }, Object.defineProperties(ar.prototype, {
            drawMode: {
                get: function() {
                    return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0
                },
                set: function() {
                    console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
                }
            }
        }), Mr.prototype.initBones = function() {
            console.error("THREE.SkinnedMesh: initBones() has been removed.")
        }, Object.defineProperty(Qa.prototype, "__arcLengthDivisions", {
            get: function() {
                return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
            },
            set: function(s) {
                console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = s
            }
        }), dr.prototype.setLens = function(s, e) {
            console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(s)
        }, Object.defineProperties(Xn.prototype, {
            onlyShadow: {
                set: function() {
                    console.warn("THREE.Light: .onlyShadow has been removed.")
                }
            },
            shadowCameraFov: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = s
                }
            },
            shadowCameraLeft: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = s
                }
            },
            shadowCameraRight: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = s
                }
            },
            shadowCameraTop: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = s
                }
            },
            shadowCameraBottom: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = s
                }
            },
            shadowCameraNear: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = s
                }
            },
            shadowCameraFar: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = s
                }
            },
            shadowCameraVisible: {
                set: function() {
                    console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
                }
            },
            shadowBias: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = s
                }
            },
            shadowDarkness: {
                set: function() {
                    console.warn("THREE.Light: .shadowDarkness has been removed.")
                }
            },
            shadowMapWidth: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = s
                }
            },
            shadowMapHeight: {
                set: function(s) {
                    console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = s
                }
            }
        }), Object.defineProperties(pi.prototype, {
            length: {
                get: function() {
                    return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
                }
            },
            dynamic: {
                get: function() {
                    return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === 35048
                },
                set: function() {
                    console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(35048)
                }
            }
        }), pi.prototype.setDynamic = function(s) {
            return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(s === !0 ? 35048 : 35044), this
        }, pi.prototype.copyIndicesArray = function() {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
        }, pi.prototype.setArray = function() {
            console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
        }, an.prototype.addIndex = function(s) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(s)
        }, an.prototype.addAttribute = function(s, e) {
            return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? s === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(s, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(s, new pi(arguments[1], arguments[2])))
        }, an.prototype.addDrawCall = function(s, e, r) {
            r !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(s, e)
        }, an.prototype.clearDrawCalls = function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        }, an.prototype.computeOffsets = function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }, an.prototype.removeAttribute = function(s) {
            return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(s)
        }, an.prototype.applyMatrix = function(s) {
            return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(s)
        }, Object.defineProperties(an.prototype, {
            drawcalls: {
                get: function() {
                    return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
                }
            },
            offsets: {
                get: function() {
                    return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
                }
            }
        }), Object.defineProperties(bc.prototype, {
            maxInstancedCount: {
                get: function() {
                    return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount
                },
                set: function(s) {
                    console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount = s
                }
            }
        }), Object.defineProperties(yd.prototype, {
            linePrecision: {
                get: function() {
                    return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold
                },
                set: function(s) {
                    console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = s
                }
            }
        }), Object.defineProperties(St.prototype, {
            dynamic: {
                get: function() {
                    return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === 35048
                },
                set: function(s) {
                    console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(s)
                }
            }
        }), St.prototype.setDynamic = function(s) {
            return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(s === !0 ? 35048 : 35044), this
        }, St.prototype.setArray = function() {
            console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
        }, bo.prototype.getArrays = function() {
            console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
        }, bo.prototype.addShapeList = function() {
            console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
        }, bo.prototype.addShape = function() {
            console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
        }, ut.prototype.dispose = function() {
            console.error("THREE.Scene: .dispose() has been removed.")
        }, Pl.prototype.onUpdate = function() {
            return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
        }, Object.defineProperties(ti.prototype, {
            wrapAround: {
                get: function() {
                    console.warn("THREE.Material: .wrapAround has been removed.")
                },
                set: function() {
                    console.warn("THREE.Material: .wrapAround has been removed.")
                }
            },
            overdraw: {
                get: function() {
                    console.warn("THREE.Material: .overdraw has been removed.")
                },
                set: function() {
                    console.warn("THREE.Material: .overdraw has been removed.")
                }
            },
            wrapRGB: {
                get: function() {
                    return console.warn("THREE.Material: .wrapRGB has been removed."), new Rt
                }
            },
            shading: {
                get: function() {
                    console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
                },
                set: function(s) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = s === 1
                }
            },
            stencilMask: {
                get: function() {
                    return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
                },
                set: function(s) {
                    console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = s
                }
            }
        }), Object.defineProperties(Ys.prototype, {
            transparency: {
                get: function() {
                    return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission
                },
                set: function(s) {
                    console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission = s
                }
            }
        }), Object.defineProperties(Cn.prototype, {
            derivatives: {
                get: function() {
                    return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
                },
                set: function(s) {
                    console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = s
                }
            }
        }), we.prototype.clearTarget = function(s, e, r, h) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(s), this.clear(e, r, h)
        }, we.prototype.animate = function(s) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(s)
        }, we.prototype.getCurrentRenderTarget = function() {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
        }, we.prototype.getMaxAnisotropy = function() {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
        }, we.prototype.getPrecision = function() {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
        }, we.prototype.resetGLState = function() {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
        }, we.prototype.supportsFloatTextures = function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        }, we.prototype.supportsHalfFloatTextures = function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        }, we.prototype.supportsStandardDerivatives = function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        }, we.prototype.supportsCompressedTextureS3TC = function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        }, we.prototype.supportsCompressedTexturePVRTC = function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        }, we.prototype.supportsBlendMinMax = function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        }, we.prototype.supportsVertexTextures = function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
        }, we.prototype.supportsInstancedArrays = function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        }, we.prototype.enableScissorTest = function(s) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(s)
        }, we.prototype.initMaterial = function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        }, we.prototype.addPrePlugin = function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        }, we.prototype.addPostPlugin = function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        }, we.prototype.updateShadowMap = function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }, we.prototype.setFaceCulling = function() {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
        }, we.prototype.allocTextureUnit = function() {
            console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
        }, we.prototype.setTexture = function() {
            console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
        }, we.prototype.setTexture2D = function() {
            console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
        }, we.prototype.setTextureCube = function() {
            console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
        }, we.prototype.getActiveMipMapLevel = function() {
            return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
        }, Object.defineProperties(we.prototype, {
            shadowMapEnabled: {
                get: function() {
                    return this.shadowMap.enabled
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = s
                }
            },
            shadowMapType: {
                get: function() {
                    return this.shadowMap.type
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = s
                }
            },
            shadowMapCullFace: {
                get: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
                }
            },
            context: {
                get: function() {
                    return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
                }
            },
            vr: {
                get: function() {
                    return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
                }
            },
            gammaInput: {
                get: function() {
                    return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
                }
            },
            gammaOutput: {
                get: function() {
                    return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = s === !0 ? 3001 : 3e3
                }
            },
            toneMappingWhitePoint: {
                get: function() {
                    return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
                }
            }
        }), Object.defineProperties(P.prototype, {
            cullFace: {
                get: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
                }
            },
            renderReverseSided: {
                get: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
                }
            },
            renderSingleSided: {
                get: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
                }
            }
        }), Object.defineProperties(qi.prototype, {
            wrapS: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = s
                }
            },
            wrapT: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = s
                }
            },
            magFilter: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = s
                }
            },
            minFilter: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = s
                }
            },
            anisotropy: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = s
                }
            },
            offset: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = s
                }
            },
            repeat: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = s
                }
            },
            format: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = s
                }
            },
            type: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = s
                }
            },
            generateMipmaps: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
                },
                set: function(s) {
                    console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = s
                }
            }
        }), Ah.prototype.load = function(s) {
            console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
            const e = this;
            return new Ec().load(s, function(r) {
                e.setBuffer(r)
            }), this
        }, Ac.prototype.getData = function() {
            return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
        }, Lo.prototype.updateCubeMap = function(s, e) {
            return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(s, e)
        }, Lo.prototype.clear = function(s, e, r, h) {
            return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(s, e, r, h)
        }, ji.crossOrigin = void 0, ji.loadTexture = function(s, e, r, h) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            const c = new $o;
            c.setCrossOrigin(this.crossOrigin);
            const v = c.load(s, r, void 0, h);
            return e && (v.mapping = e), v
        }, ji.loadTextureCube = function(s, e, r, h) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            const c = new Jd;
            c.setCrossOrigin(this.crossOrigin);
            const v = c.load(s, r, void 0, h);
            return e && (v.mapping = e), v
        }, ji.loadCompressedTexture = function() {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        }, ji.loadCompressedTextureCube = function() {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        };
        const Fd = {
            createMultiMaterialObject: function() {
                console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")
            },
            detach: function() {
                console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")
            },
            attach: function() {
                console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")
            }
        };
        typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
            detail: {
                revision: z
            }
        })), typeof window != "undefined" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = z), y.ACESFilmicToneMapping = 4, y.AddEquation = 100, y.AddOperation = 2, y.AdditiveAnimationBlendMode = 2501, y.AdditiveBlending = 2, y.AlphaFormat = 1021, y.AlwaysDepth = 1, y.AlwaysStencilFunc = 519, y.AmbientLight = rd, y.AmbientLightProbe = Ll, y.AnimationClip = dh, y.AnimationLoader = class extends _r {
            constructor(s) {
                super(s)
            }
            load(s, e, r, h) {
                const c = this,
                    v = new hs(this.manager);
                v.setPath(this.path), v.setRequestHeader(this.requestHeader), v.setWithCredentials(this.withCredentials), v.load(s, function(w) {
                    try {
                        e(c.parse(JSON.parse(w)))
                    } catch (E) {
                        h ? h(E) : console.error(E), c.manager.itemError(s)
                    }
                }, r, h)
            }
            parse(s) {
                const e = [];
                for (let r = 0; r < s.length; r++) {
                    const h = dh.parse(s[r]);
                    e.push(h)
                }
                return e
            }
        }, y.AnimationMixer = md, y.AnimationObjectGroup = pd, y.AnimationUtils = Br, y.ArcCurve = Ju, y.ArrayCamera = ee, y.ArrowHelper = class extends Z {
            constructor(s = new ge(0, 0, 1), e = new ge(0, 0, 0), r = 1, h = 16776960, c = .2 * r, v = .2 * c) {
                super(), this.type = "ArrowHelper", Fs === void 0 && (Fs = new an, Fs.setAttribute("position", new Ai([0, 0, 0, 0, 1, 0], 3)), wu = new ta(0, .5, 1, 5, 1), wu.translate(0, -.5, 0)), this.position.copy(e), this.line = new za(Fs, new Xr({
                    color: h,
                    toneMapped: !1
                })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new ar(wu, new Gi({
                    color: h,
                    toneMapped: !1
                })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(s), this.setLength(r, c, v)
            }
            setDirection(s) {
                if (s.y > .99999) this.quaternion.set(0, 0, 0, 1);
                else if (s.y < -.99999) this.quaternion.set(1, 0, 0, 0);
                else {
                    Ed.set(s.z, 0, -s.x).normalize();
                    const e = Math.acos(s.y);
                    this.quaternion.setFromAxisAngle(Ed, e)
                }
            }
            setLength(s, e = .2 * s, r = .2 * e) {
                this.line.scale.set(1, Math.max(1e-4, s - e), 1), this.line.updateMatrix(), this.cone.scale.set(r, e, r), this.cone.position.y = s, this.cone.updateMatrix()
            }
            setColor(s) {
                this.line.material.color.set(s), this.cone.material.color.set(s)
            }
            copy(s) {
                return super.copy(s, !1), this.line.copy(s.line), this.cone.copy(s.cone), this
            }
        }, y.Audio = Ah, y.AudioAnalyser = Ac, y.AudioContext = Ks, y.AudioListener = class extends Z {
            constructor() {
                super(), this.type = "AudioListener", this.context = Ks.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new $d
            }
            getInput() {
                return this.gain
            }
            removeFilter() {
                return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
            }
            getFilter() {
                return this.filter
            }
            setFilter(s) {
                return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = s, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
            }
            getMasterVolume() {
                return this.gain.gain.value
            }
            setMasterVolume(s) {
                return this.gain.gain.setTargetAtTime(s, this.context.currentTime, .01), this
            }
            updateMatrixWorld(s) {
                super.updateMatrixWorld(s);
                const e = this.context.listener,
                    r = this.up;
                if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(el, Kd, ep), tl.set(0, 0, -1).applyQuaternion(Kd), e.positionX) {
                    const h = this.context.currentTime + this.timeDelta;
                    e.positionX.linearRampToValueAtTime(el.x, h), e.positionY.linearRampToValueAtTime(el.y, h), e.positionZ.linearRampToValueAtTime(el.z, h), e.forwardX.linearRampToValueAtTime(tl.x, h), e.forwardY.linearRampToValueAtTime(tl.y, h), e.forwardZ.linearRampToValueAtTime(tl.z, h), e.upX.linearRampToValueAtTime(r.x, h), e.upY.linearRampToValueAtTime(r.y, h), e.upZ.linearRampToValueAtTime(r.z, h)
                } else e.setPosition(el.x, el.y, el.z), e.setOrientation(tl.x, tl.y, tl.z, r.x, r.y, r.z)
            }
        }, y.AudioLoader = Ec, y.AxesHelper = Sd, y.AxisHelper = function(s) {
            return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new Sd(s)
        }, y.BackSide = 1, y.BasicDepthPacking = 3200, y.BasicShadowMap = 0, y.BinaryTextureLoader = function(s) {
            return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new au(s)
        }, y.Bone = pr, y.BooleanKeyframeTrack = jo, y.BoundingBoxHelper = function(s, e) {
            return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new sp(s, e)
        }, y.Box2 = Tc, y.Box3 = Te, y.Box3Helper = class extends xa {
            constructor(s, e = 16776960) {
                const r = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                    h = new an;
                h.setIndex(new pi(r, 1)), h.setAttribute("position", new Ai([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), super(h, new Xr({
                    color: e,
                    toneMapped: !1
                })), this.box = s, this.type = "Box3Helper", this.geometry.computeBoundingSphere()
            }
            updateMatrixWorld(s) {
                const e = this.box;
                e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(s))
            }
        }, y.BoxBufferGeometry = sr, y.BoxGeometry = sr, y.BoxHelper = sp, y.BufferAttribute = pi, y.BufferGeometry = an, y.BufferGeometryLoader = mu, y.ByteType = 1010, y.Cache = Fl, y.Camera = Dn, y.CameraHelper = class extends xa {
            constructor(s) {
                const e = new an,
                    r = new Xr({
                        color: 16777215,
                        vertexColors: !0,
                        toneMapped: !1
                    }),
                    h = [],
                    c = [],
                    v = {},
                    w = new Rt(16755200),
                    E = new Rt(16711680),
                    T = new Rt(43775),
                    B = new Rt(16777215),
                    Q = new Rt(3355443);

                function k(t, a, l) {
                    i(t, l), i(a, l)
                }

                function i(t, a) {
                    h.push(0, 0, 0), c.push(a.r, a.g, a.b), v[t] === void 0 && (v[t] = []), v[t].push(h.length / 3 - 1)
                }
                k("n1", "n2", w), k("n2", "n4", w), k("n4", "n3", w), k("n3", "n1", w), k("f1", "f2", w), k("f2", "f4", w), k("f4", "f3", w), k("f3", "f1", w), k("n1", "f1", w), k("n2", "f2", w), k("n3", "f3", w), k("n4", "f4", w), k("p", "n1", E), k("p", "n2", E), k("p", "n3", E), k("p", "n4", E), k("u1", "u2", T), k("u2", "u3", T), k("u3", "u1", T), k("c", "t", B), k("p", "c", Q), k("cn1", "cn2", Q), k("cn3", "cn4", Q), k("cf1", "cf2", Q), k("cf3", "cf4", Q), e.setAttribute("position", new Ai(h, 3)), e.setAttribute("color", new Ai(c, 3)), super(e, r), this.type = "CameraHelper", this.camera = s, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = s.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = v, this.update()
            }
            update() {
                const s = this.geometry,
                    e = this.pointMap;
                Hr.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), jr("c", e, s, Hr, 0, 0, -1), jr("t", e, s, Hr, 0, 0, 1), jr("n1", e, s, Hr, -1, -1, -1), jr("n2", e, s, Hr, 1, -1, -1), jr("n3", e, s, Hr, -1, 1, -1), jr("n4", e, s, Hr, 1, 1, -1), jr("f1", e, s, Hr, -1, -1, 1), jr("f2", e, s, Hr, 1, -1, 1), jr("f3", e, s, Hr, -1, 1, 1), jr("f4", e, s, Hr, 1, 1, 1), jr("u1", e, s, Hr, .7, 1.1, -1), jr("u2", e, s, Hr, -.7, 1.1, -1), jr("u3", e, s, Hr, 0, 2, -1), jr("cf1", e, s, Hr, -1, 0, 1), jr("cf2", e, s, Hr, 1, 0, 1), jr("cf3", e, s, Hr, 0, -1, 1), jr("cf4", e, s, Hr, 0, 1, 1), jr("cn1", e, s, Hr, -1, 0, -1), jr("cn2", e, s, Hr, 1, 0, -1), jr("cn3", e, s, Hr, 0, -1, -1), jr("cn4", e, s, Hr, 0, 1, -1), s.getAttribute("position").needsUpdate = !0
            }
        }, y.CanvasRenderer = function() {
            console.error("THREE.CanvasRenderer has been removed")
        }, y.CanvasTexture = Du, y.CatmullRomCurve3 = mh, y.CineonToneMapping = 3, y.CircleBufferGeometry = Jh, y.CircleGeometry = Jh, y.ClampToEdgeWrapping = 1001, y.Clock = $d, y.Color = Rt, y.ColorKeyframeTrack = Yo, y.CompressedTexture = hc, y.CompressedTextureLoader = Wu, y.ConeBufferGeometry = _o, y.ConeGeometry = _o, y.CubeCamera = Lo, y.CubeReflectionMapping = 301, y.CubeRefractionMapping = 302, y.CubeTexture = ao, y.CubeTextureLoader = Jd, y.CubeUVReflectionMapping = 306, y.CubeUVRefractionMapping = 307, y.CubicBezierCurve = lu, y.CubicBezierCurve3 = xc, y.CubicInterpolant = iu, y.CullFaceBack = 1, y.CullFaceFront = 2, y.CullFaceFrontBack = 3, y.CullFaceNone = 0, y.Curve = Qa, y.CurvePath = Zd, y.CustomBlending = 5, y.CustomToneMapping = 5, y.CylinderBufferGeometry = ta, y.CylinderGeometry = ta, y.Cylindrical = class {
            constructor(s = 1, e = 0, r = 0) {
                return this.radius = s, this.theta = e, this.y = r, this
            }
            set(s, e, r) {
                return this.radius = s, this.theta = e, this.y = r, this
            }
            copy(s) {
                return this.radius = s.radius, this.theta = s.theta, this.y = s.y, this
            }
            setFromVector3(s) {
                return this.setFromCartesianCoords(s.x, s.y, s.z)
            }
            setFromCartesianCoords(s, e, r) {
                return this.radius = Math.sqrt(s * s + r * r), this.theta = Math.atan2(s, r), this.y = e, this
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }, y.DataTexture = ws, y.DataTexture2DArray = fl, y.DataTexture3D = ml, y.DataTextureLoader = au, y.DataUtils = Rp, y.DecrementStencilOp = 7683, y.DecrementWrapStencilOp = 34056, y.DefaultLoadingManager = ru, y.DepthFormat = 1026, y.DepthStencilFormat = 1027, y.DepthTexture = Uu, y.DirectionalLight = nd, y.DirectionalLightHelper = class extends Z {
            constructor(s, e, r) {
                super(), this.light = s, this.light.updateMatrixWorld(), this.matrix = s.matrixWorld, this.matrixAutoUpdate = !1, this.color = r, e === void 0 && (e = 1);
                let h = new an;
                h.setAttribute("position", new Ai([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
                const c = new Xr({
                    fog: !1,
                    toneMapped: !1
                });
                this.lightPlane = new za(h, c), this.add(this.lightPlane), h = new an, h.setAttribute("position", new Ai([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new za(h, c), this.add(this.targetLine), this.update()
            }
            dispose() {
                this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
            }
            update() {
                Bc.setFromMatrixPosition(this.light.matrixWorld), Bh.setFromMatrixPosition(this.light.target.matrixWorld), wd.subVectors(Bh, Bc), this.lightPlane.lookAt(Bh), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Bh), this.targetLine.scale.z = wd.length()
            }
        }, y.DiscreteInterpolant = Cs, y.DodecahedronBufferGeometry = th, y.DodecahedronGeometry = th, y.DoubleSide = 2, y.DstAlphaFactor = 206, y.DstColorFactor = 208, y.DynamicBufferAttribute = function(s, e) {
            return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."), new pi(s, e).setUsage(35048)
        }, y.DynamicCopyUsage = 35050, y.DynamicDrawUsage = 35048, y.DynamicReadUsage = 35049, y.EdgesGeometry = jh, y.EdgesHelper = function(s, e) {
            return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new xa(new jh(s.geometry), new Xr({
                color: e !== void 0 ? e : 16777215
            }))
        }, y.EllipseCurve = fh, y.EqualDepth = 4, y.EqualStencilFunc = 514, y.EquirectangularReflectionMapping = 303, y.EquirectangularRefractionMapping = 304, y.Euler = gr, y.EventDispatcher = yn, y.ExtrudeBufferGeometry = bo, y.ExtrudeGeometry = bo, y.FaceColors = 1, y.FileLoader = hs, y.FlatShading = 1, y.Float16BufferAttribute = aa, y.Float32Attribute = function(s, e) {
            return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new Ai(s, e)
        }, y.Float32BufferAttribute = Ai, y.Float64Attribute = function(s, e) {
            return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new ca(s, e)
        }, y.Float64BufferAttribute = ca, y.FloatType = 1015, y.Fog = ze, y.FogExp2 = bt, y.Font = Ma, y.FontLoader = class extends _r {
            constructor(s) {
                super(s)
            }
            load(s, e, r, h) {
                const c = this,
                    v = new hs(this.manager);
                v.setPath(this.path), v.setRequestHeader(this.requestHeader), v.setWithCredentials(c.withCredentials), v.load(s, function(w) {
                    let E;
                    try {
                        E = JSON.parse(w)
                    } catch (B) {
                        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), E = JSON.parse(w.substring(65, w.length - 2))
                    }
                    const T = c.parse(E);
                    e && e(T)
                }, r, h)
            }
            parse(s) {
                return new Ma(s)
            }
        }, y.FrontSide = 0, y.Frustum = Us, y.GLBufferAttribute = gd, y.GLSL1 = "100", y.GLSL3 = sn, y.GammaEncoding = 3007, y.GreaterDepth = 6, y.GreaterEqualDepth = 5, y.GreaterEqualStencilFunc = 518, y.GreaterStencilFunc = 516, y.GridHelper = Ja, y.Group = pe, y.HalfFloatType = 1016, y.HemisphereLight = du, y.HemisphereLightHelper = class extends Z {
            constructor(s, e, r) {
                super(), this.light = s, this.light.updateMatrixWorld(), this.matrix = s.matrixWorld, this.matrixAutoUpdate = !1, this.color = r;
                const h = new Wo(e);
                h.rotateY(.5 * Math.PI), this.material = new Gi({
                    wireframe: !0,
                    fog: !1,
                    toneMapped: !1
                }), this.color === void 0 && (this.material.vertexColors = !0);
                const c = h.getAttribute("position"),
                    v = new Float32Array(3 * c.count);
                h.setAttribute("color", new pi(v, 3)), this.add(new ar(h, this.material)), this.update()
            }
            dispose() {
                this.children[0].geometry.dispose(), this.children[0].material.dispose()
            }
            update() {
                const s = this.children[0];
                if (this.color !== void 0) this.material.color.set(this.color);
                else {
                    const e = s.geometry.getAttribute("color");
                    bu.copy(this.light.color), bd.copy(this.light.groundColor);
                    for (let r = 0, h = e.count; r < h; r++) {
                        const c = r < h / 2 ? bu : bd;
                        e.setXYZ(r, c.r, c.g, c.b)
                    }
                    e.needsUpdate = !0
                }
                s.lookAt(ap.setFromMatrixPosition(this.light.matrixWorld).negate())
            }
        }, y.HemisphereLightProbe = Sc, y.IcosahedronBufferGeometry = qh, y.IcosahedronGeometry = qh, y.ImageBitmapLoader = gu, y.ImageLoader = ph, y.ImageUtils = ji, y.ImmediateRenderObject = Cc, y.IncrementStencilOp = 7682, y.IncrementWrapStencilOp = 34055, y.InstancedBufferAttribute = wc, y.InstancedBufferGeometry = bc, y.InstancedInterleavedBuffer = vu, y.InstancedMesh = fr, y.Int16Attribute = function(s, e) {
            return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new Xi(s, e)
        }, y.Int16BufferAttribute = Xi, y.Int32Attribute = function(s, e) {
            return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new lr(s, e)
        }, y.Int32BufferAttribute = lr, y.Int8Attribute = function(s, e) {
            return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new Hi(s, e)
        }, y.Int8BufferAttribute = Hi, y.IntType = 1013, y.InterleavedBuffer = St, y.InterleavedBufferAttribute = Vt, y.Interpolant = ts, y.InterpolateDiscrete = 2300, y.InterpolateLinear = 2301, y.InterpolateSmooth = 2302, y.InvertStencilOp = 5386, y.JSONLoader = function() {
            console.error("THREE.JSONLoader has been removed.")
        }, y.KeepStencilOp = 7680, y.KeyframeTrack = Bs, y.LOD = pa, y.LatheBufferGeometry = vr, y.LatheGeometry = vr, y.Layers = Jr, y.LensFlare = function() {
            console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")
        }, y.LessDepth = 2, y.LessEqualDepth = 3, y.LessEqualStencilFunc = 515, y.LessStencilFunc = 513, y.Light = Xn, y.LightProbe = xh, y.Line = za, y.Line3 = So, y.LineBasicMaterial = Xr, y.LineCurve = gh, y.LineCurve3 = qu, y.LineDashedMaterial = tu, y.LineLoop = yo, y.LinePieces = 1, y.LineSegments = xa, y.LineStrip = 0, y.LinearEncoding = 3e3, y.LinearFilter = 1006, y.LinearInterpolant = hh, y.LinearMipMapLinearFilter = 1008, y.LinearMipMapNearestFilter = 1007, y.LinearMipmapLinearFilter = 1008, y.LinearMipmapNearestFilter = 1007, y.LinearToneMapping = 1, y.Loader = _r, y.LoaderUtils = Ko, y.LoadingManager = Hu, y.LogLuvEncoding = 3003, y.LoopOnce = 2200, y.LoopPingPong = 2202, y.LoopRepeat = 2201, y.LuminanceAlphaFormat = 1025, y.LuminanceFormat = 1024, y.MOUSE = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2
        }, y.Material = ti, y.MaterialLoader = bh, y.Math = Mi, y.MathUtils = Mi, y.Matrix3 = Pt, y.Matrix4 = Ui, y.MaxEquation = 104, y.Mesh = ar, y.MeshBasicMaterial = Gi, y.MeshDepthMaterial = S, y.MeshDistanceMaterial = L, y.MeshFaceMaterial = function(s) {
            return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), s
        }, y.MeshLambertMaterial = ch, y.MeshMatcapMaterial = eu, y.MeshNormalMaterial = lh, y.MeshPhongMaterial = Gu, y.MeshPhysicalMaterial = Ys, y.MeshStandardMaterial = js, y.MeshToonMaterial = oh, y.MinEquation = 103, y.MirroredRepeatWrapping = 1002, y.MixOperation = 1, y.MultiMaterial = function(s = []) {
            return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), s.isMultiMaterial = !0, s.materials = s, s.clone = function() {
                return s.slice()
            }, s
        }, y.MultiplyBlending = 4, y.MultiplyOperation = 0, y.NearestFilter = 1003, y.NearestMipMapLinearFilter = 1005, y.NearestMipMapNearestFilter = 1004, y.NearestMipmapLinearFilter = 1005, y.NearestMipmapNearestFilter = 1004, y.NeverDepth = 0, y.NeverStencilFunc = 512, y.NoBlending = 0, y.NoColors = 0, y.NoToneMapping = 0, y.NormalAnimationBlendMode = 2500, y.NormalBlending = 1, y.NotEqualDepth = 7, y.NotEqualStencilFunc = 517, y.NumberKeyframeTrack = uh, y.Object3D = Z, y.ObjectLoader = class extends _r {
            constructor(s) {
                super(s)
            }
            load(s, e, r, h) {
                const c = this,
                    v = this.path === "" ? Ko.extractUrlBase(s) : this.path;
                this.resourcePath = this.resourcePath || v;
                const w = new hs(this.manager);
                w.setPath(this.path), w.setRequestHeader(this.requestHeader), w.setWithCredentials(this.withCredentials), w.load(s, function(E) {
                    let T = null;
                    try {
                        T = JSON.parse(E)
                    } catch (Q) {
                        return h !== void 0 && h(Q), void console.error("THREE:ObjectLoader: Can't parse " + s + ".", Q.message)
                    }
                    const B = T.metadata;
                    B !== void 0 && B.type !== void 0 && B.type.toLowerCase() !== "geometry" ? c.parse(T, e) : console.error("THREE.ObjectLoader: Can't load " + s)
                }, r, h)
            }
            parse(s, e) {
                const r = this.parseAnimations(s.animations),
                    h = this.parseShapes(s.shapes),
                    c = this.parseGeometries(s.geometries, h),
                    v = this.parseImages(s.images, function() {
                        e !== void 0 && e(T)
                    }),
                    w = this.parseTextures(s.textures, v),
                    E = this.parseMaterials(s.materials, w),
                    T = this.parseObject(s.object, c, E, r),
                    B = this.parseSkeletons(s.skeletons, T);
                if (this.bindSkeletons(T, B), e !== void 0) {
                    let Q = !1;
                    for (const k in v)
                        if (v[k] instanceof HTMLImageElement) {
                            Q = !0;
                            break
                        } Q === !1 && e(T)
                }
                return T
            }
            parseShapes(s) {
                const e = {};
                if (s !== void 0)
                    for (let r = 0, h = s.length; r < h; r++) {
                        const c = new us().fromJSON(s[r]);
                        e[c.uuid] = c
                    }
                return e
            }
            parseSkeletons(s, e) {
                const r = {},
                    h = {};
                if (e.traverse(function(c) {
                        c.isBone && (h[c.uuid] = c)
                    }), s !== void 0)
                    for (let c = 0, v = s.length; c < v; c++) {
                        const w = new Zn().fromJSON(s[c], h);
                        r[w.uuid] = w
                    }
                return r
            }
            parseGeometries(s, e) {
                const r = {};
                let h;
                if (s !== void 0) {
                    const c = new mu;
                    for (let v = 0, w = s.length; v < w; v++) {
                        let E;
                        const T = s[v];
                        switch (T.type) {
                            case "PlaneGeometry":
                            case "PlaneBufferGeometry":
                                E = new Na[T.type](T.width, T.height, T.widthSegments, T.heightSegments);
                                break;
                            case "BoxGeometry":
                            case "BoxBufferGeometry":
                                E = new Na[T.type](T.width, T.height, T.depth, T.widthSegments, T.heightSegments, T.depthSegments);
                                break;
                            case "CircleGeometry":
                            case "CircleBufferGeometry":
                                E = new Na[T.type](T.radius, T.segments, T.thetaStart, T.thetaLength);
                                break;
                            case "CylinderGeometry":
                            case "CylinderBufferGeometry":
                                E = new Na[T.type](T.radiusTop, T.radiusBottom, T.height, T.radialSegments, T.heightSegments, T.openEnded, T.thetaStart, T.thetaLength);
                                break;
                            case "ConeGeometry":
                            case "ConeBufferGeometry":
                                E = new Na[T.type](T.radius, T.height, T.radialSegments, T.heightSegments, T.openEnded, T.thetaStart, T.thetaLength);
                                break;
                            case "SphereGeometry":
                            case "SphereBufferGeometry":
                                E = new Na[T.type](T.radius, T.widthSegments, T.heightSegments, T.phiStart, T.phiLength, T.thetaStart, T.thetaLength);
                                break;
                            case "DodecahedronGeometry":
                            case "DodecahedronBufferGeometry":
                            case "IcosahedronGeometry":
                            case "IcosahedronBufferGeometry":
                            case "OctahedronGeometry":
                            case "OctahedronBufferGeometry":
                            case "TetrahedronGeometry":
                            case "TetrahedronBufferGeometry":
                                E = new Na[T.type](T.radius, T.detail);
                                break;
                            case "RingGeometry":
                            case "RingBufferGeometry":
                                E = new Na[T.type](T.innerRadius, T.outerRadius, T.thetaSegments, T.phiSegments, T.thetaStart, T.thetaLength);
                                break;
                            case "TorusGeometry":
                            case "TorusBufferGeometry":
                                E = new Na[T.type](T.radius, T.tube, T.radialSegments, T.tubularSegments, T.arc);
                                break;
                            case "TorusKnotGeometry":
                            case "TorusKnotBufferGeometry":
                                E = new Na[T.type](T.radius, T.tube, T.tubularSegments, T.radialSegments, T.p, T.q);
                                break;
                            case "TubeGeometry":
                            case "TubeBufferGeometry":
                                E = new Na[T.type](new uu[T.path.type]().fromJSON(T.path), T.tubularSegments, T.radius, T.radialSegments, T.closed);
                                break;
                            case "LatheGeometry":
                            case "LatheBufferGeometry":
                                E = new Na[T.type](T.points, T.segments, T.phiStart, T.phiLength);
                                break;
                            case "PolyhedronGeometry":
                            case "PolyhedronBufferGeometry":
                                E = new Na[T.type](T.vertices, T.indices, T.radius, T.details);
                                break;
                            case "ShapeGeometry":
                            case "ShapeBufferGeometry":
                                h = [];
                                for (let Q = 0, k = T.shapes.length; Q < k; Q++) {
                                    const i = e[T.shapes[Q]];
                                    h.push(i)
                                }
                                E = new Na[T.type](h, T.curveSegments);
                                break;
                            case "ExtrudeGeometry":
                            case "ExtrudeBufferGeometry":
                                h = [];
                                for (let Q = 0, k = T.shapes.length; Q < k; Q++) {
                                    const i = e[T.shapes[Q]];
                                    h.push(i)
                                }
                                const B = T.options.extrudePath;
                                B !== void 0 && (T.options.extrudePath = new uu[B.type]().fromJSON(B)), E = new Na[T.type](h, T.options);
                                break;
                            case "BufferGeometry":
                            case "InstancedBufferGeometry":
                                E = c.parse(T);
                                break;
                            case "Geometry":
                                console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
                                break;
                            default:
                                console.warn('THREE.ObjectLoader: Unsupported geometry type "' + T.type + '"');
                                continue
                        }
                        E.uuid = T.uuid, T.name !== void 0 && (E.name = T.name), E.isBufferGeometry === !0 && T.userData !== void 0 && (E.userData = T.userData), r[T.uuid] = E
                    }
                }
                return r
            }
            parseMaterials(s, e) {
                const r = {},
                    h = {};
                if (s !== void 0) {
                    const c = new bh;
                    c.setTextures(e);
                    for (let v = 0, w = s.length; v < w; v++) {
                        const E = s[v];
                        if (E.type === "MultiMaterial") {
                            const T = [];
                            for (let B = 0; B < E.materials.length; B++) {
                                const Q = E.materials[B];
                                r[Q.uuid] === void 0 && (r[Q.uuid] = c.parse(Q)), T.push(r[Q.uuid])
                            }
                            h[E.uuid] = T
                        } else r[E.uuid] === void 0 && (r[E.uuid] = c.parse(E)), h[E.uuid] = r[E.uuid]
                    }
                }
                return h
            }
            parseAnimations(s) {
                const e = {};
                if (s !== void 0)
                    for (let r = 0; r < s.length; r++) {
                        const h = s[r],
                            c = dh.parse(h);
                        e[c.uuid] = c
                    }
                return e
            }
            parseImages(s, e) {
                const r = this,
                    h = {};
                let c;

                function v(w) {
                    if (typeof w == "string") {
                        const E = w;
                        return function(T) {
                            return r.manager.itemStart(T), c.load(T, function() {
                                r.manager.itemEnd(T)
                            }, void 0, function() {
                                r.manager.itemError(T), r.manager.itemEnd(T)
                            })
                        }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(E) ? E : r.resourcePath + E)
                    }
                    return w.data ? {
                        data: Er(w.type, w.data),
                        width: w.width,
                        height: w.height
                    } : null
                }
                if (s !== void 0 && s.length > 0) {
                    const w = new Hu(e);
                    c = new ph(w), c.setCrossOrigin(this.crossOrigin);
                    for (let E = 0, T = s.length; E < T; E++) {
                        const B = s[E],
                            Q = B.url;
                        if (Array.isArray(Q)) {
                            h[B.uuid] = [];
                            for (let k = 0, i = Q.length; k < i; k++) {
                                const t = v(Q[k]);
                                t !== null && (t instanceof HTMLImageElement ? h[B.uuid].push(t) : h[B.uuid].push(new ws(t.data, t.width, t.height)))
                            }
                        } else {
                            const k = v(B.url);
                            k !== null && (h[B.uuid] = k)
                        }
                    }
                }
                return h
            }
            parseTextures(s, e) {
                function r(c, v) {
                    return typeof c == "number" ? c : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", c), v[c])
                }
                const h = {};
                if (s !== void 0)
                    for (let c = 0, v = s.length; c < v; c++) {
                        const w = s[c];
                        let E;
                        w.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', w.uuid), e[w.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", w.image);
                        const T = e[w.image];
                        Array.isArray(T) ? (E = new ao(T), T.length === 6 && (E.needsUpdate = !0)) : (E = T && T.data ? new ws(T.data, T.width, T.height) : new cn(T), T && (E.needsUpdate = !0)), E.uuid = w.uuid, w.name !== void 0 && (E.name = w.name), w.mapping !== void 0 && (E.mapping = r(w.mapping, Ap)), w.offset !== void 0 && E.offset.fromArray(w.offset), w.repeat !== void 0 && E.repeat.fromArray(w.repeat), w.center !== void 0 && E.center.fromArray(w.center), w.rotation !== void 0 && (E.rotation = w.rotation), w.wrap !== void 0 && (E.wrapS = r(w.wrap[0], Yd), E.wrapT = r(w.wrap[1], Yd)), w.format !== void 0 && (E.format = w.format), w.type !== void 0 && (E.type = w.type), w.encoding !== void 0 && (E.encoding = w.encoding), w.minFilter !== void 0 && (E.minFilter = r(w.minFilter, qd)), w.magFilter !== void 0 && (E.magFilter = r(w.magFilter, qd)), w.anisotropy !== void 0 && (E.anisotropy = w.anisotropy), w.flipY !== void 0 && (E.flipY = w.flipY), w.premultiplyAlpha !== void 0 && (E.premultiplyAlpha = w.premultiplyAlpha), w.unpackAlignment !== void 0 && (E.unpackAlignment = w.unpackAlignment), h[w.uuid] = E
                    }
                return h
            }
            parseObject(s, e, r, h) {
                let c, v, w;

                function E(B) {
                    return e[B] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", B), e[B]
                }

                function T(B) {
                    if (B !== void 0) {
                        if (Array.isArray(B)) {
                            const Q = [];
                            for (let k = 0, i = B.length; k < i; k++) {
                                const t = B[k];
                                r[t] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", t), Q.push(r[t])
                            }
                            return Q
                        }
                        return r[B] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", B), r[B]
                    }
                }
                switch (s.type) {
                    case "Scene":
                        c = new ut, s.background !== void 0 && Number.isInteger(s.background) && (c.background = new Rt(s.background)), s.fog !== void 0 && (s.fog.type === "Fog" ? c.fog = new ze(s.fog.color, s.fog.near, s.fog.far) : s.fog.type === "FogExp2" && (c.fog = new bt(s.fog.color, s.fog.density)));
                        break;
                    case "PerspectiveCamera":
                        c = new dr(s.fov, s.aspect, s.near, s.far), s.focus !== void 0 && (c.focus = s.focus), s.zoom !== void 0 && (c.zoom = s.zoom), s.filmGauge !== void 0 && (c.filmGauge = s.filmGauge), s.filmOffset !== void 0 && (c.filmOffset = s.filmOffset), s.view !== void 0 && (c.view = Object.assign({}, s.view));
                        break;
                    case "OrthographicCamera":
                        c = new _h(s.left, s.right, s.top, s.bottom, s.near, s.far), s.zoom !== void 0 && (c.zoom = s.zoom), s.view !== void 0 && (c.view = Object.assign({}, s.view));
                        break;
                    case "AmbientLight":
                        c = new rd(s.color, s.intensity);
                        break;
                    case "DirectionalLight":
                        c = new nd(s.color, s.intensity);
                        break;
                    case "PointLight":
                        c = new id(s.color, s.intensity, s.distance, s.decay);
                        break;
                    case "RectAreaLight":
                        c = new ad(s.color, s.intensity, s.width, s.height);
                        break;
                    case "SpotLight":
                        c = new pu(s.color, s.intensity, s.distance, s.angle, s.penumbra, s.decay);
                        break;
                    case "HemisphereLight":
                        c = new du(s.color, s.groundColor, s.intensity);
                        break;
                    case "LightProbe":
                        c = new xh().fromJSON(s);
                        break;
                    case "SkinnedMesh":
                        v = E(s.geometry), w = T(s.material), c = new Mr(v, w), s.bindMode !== void 0 && (c.bindMode = s.bindMode), s.bindMatrix !== void 0 && c.bindMatrix.fromArray(s.bindMatrix), s.skeleton !== void 0 && (c.skeleton = s.skeleton);
                        break;
                    case "Mesh":
                        v = E(s.geometry), w = T(s.material), c = new ar(v, w);
                        break;
                    case "InstancedMesh":
                        v = E(s.geometry), w = T(s.material);
                        const B = s.count,
                            Q = s.instanceMatrix,
                            k = s.instanceColor;
                        c = new fr(v, w, B), c.instanceMatrix = new pi(new Float32Array(Q.array), 16), k !== void 0 && (c.instanceColor = new pi(new Float32Array(k.array), k.itemSize));
                        break;
                    case "LOD":
                        c = new pa;
                        break;
                    case "Line":
                        c = new za(E(s.geometry), T(s.material));
                        break;
                    case "LineLoop":
                        c = new yo(E(s.geometry), T(s.material));
                        break;
                    case "LineSegments":
                        c = new xa(E(s.geometry), T(s.material));
                        break;
                    case "PointCloud":
                    case "Points":
                        c = new lc(E(s.geometry), T(s.material));
                        break;
                    case "Sprite":
                        c = new sa(T(s.material));
                        break;
                    case "Group":
                        c = new pe;
                        break;
                    case "Bone":
                        c = new pr;
                        break;
                    default:
                        c = new Z
                }
                if (c.uuid = s.uuid, s.name !== void 0 && (c.name = s.name), s.matrix !== void 0 ? (c.matrix.fromArray(s.matrix), s.matrixAutoUpdate !== void 0 && (c.matrixAutoUpdate = s.matrixAutoUpdate), c.matrixAutoUpdate && c.matrix.decompose(c.position, c.quaternion, c.scale)) : (s.position !== void 0 && c.position.fromArray(s.position), s.rotation !== void 0 && c.rotation.fromArray(s.rotation), s.quaternion !== void 0 && c.quaternion.fromArray(s.quaternion), s.scale !== void 0 && c.scale.fromArray(s.scale)), s.castShadow !== void 0 && (c.castShadow = s.castShadow), s.receiveShadow !== void 0 && (c.receiveShadow = s.receiveShadow), s.shadow && (s.shadow.bias !== void 0 && (c.shadow.bias = s.shadow.bias), s.shadow.normalBias !== void 0 && (c.shadow.normalBias = s.shadow.normalBias), s.shadow.radius !== void 0 && (c.shadow.radius = s.shadow.radius), s.shadow.mapSize !== void 0 && c.shadow.mapSize.fromArray(s.shadow.mapSize), s.shadow.camera !== void 0 && (c.shadow.camera = this.parseObject(s.shadow.camera))), s.visible !== void 0 && (c.visible = s.visible), s.frustumCulled !== void 0 && (c.frustumCulled = s.frustumCulled), s.renderOrder !== void 0 && (c.renderOrder = s.renderOrder), s.userData !== void 0 && (c.userData = s.userData), s.layers !== void 0 && (c.layers.mask = s.layers), s.children !== void 0) {
                    const B = s.children;
                    for (let Q = 0; Q < B.length; Q++) c.add(this.parseObject(B[Q], e, r, h))
                }
                if (s.animations !== void 0) {
                    const B = s.animations;
                    for (let Q = 0; Q < B.length; Q++) {
                        const k = B[Q];
                        c.animations.push(h[k])
                    }
                }
                if (s.type === "LOD") {
                    s.autoUpdate !== void 0 && (c.autoUpdate = s.autoUpdate);
                    const B = s.levels;
                    for (let Q = 0; Q < B.length; Q++) {
                        const k = B[Q],
                            i = c.getObjectByProperty("uuid", k.object);
                        i !== void 0 && c.addLevel(i, k.distance)
                    }
                }
                return c
            }
            bindSkeletons(s, e) {
                Object.keys(e).length !== 0 && s.traverse(function(r) {
                    if (r.isSkinnedMesh === !0 && r.skeleton !== void 0) {
                        const h = e[r.skeleton];
                        h === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", r.skeleton) : r.bind(h, r.bindMatrix)
                    }
                })
            }
            setTexturePath(s) {
                return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(s)
            }
        }, y.ObjectSpaceNormalMap = 1, y.OctahedronBufferGeometry = Wo, y.OctahedronGeometry = Wo, y.OneFactor = 201, y.OneMinusDstAlphaFactor = 207, y.OneMinusDstColorFactor = 209, y.OneMinusSrcAlphaFactor = 205, y.OneMinusSrcColorFactor = 203, y.OrthographicCamera = _h, y.PCFShadowMap = 1, y.PCFSoftShadowMap = 2, y.PMREMGenerator = class {
            constructor(s) {
                this._renderer = s, this._pingPongRenderTarget = null, this._blurMaterial = function(e) {
                    const r = new Float32Array(e),
                        h = new ge(0, 1, 0);
                    return new Xs({
                        name: "SphericalGaussianBlur",
                        defines: {
                            n: e
                        },
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            samples: {
                                value: 1
                            },
                            weights: {
                                value: r
                            },
                            latitudinal: {
                                value: !1
                            },
                            dTheta: {
                                value: 0
                            },
                            mipInt: {
                                value: 0
                            },
                            poleAxis: {
                                value: h
                            },
                            inputEncoding: {
                                value: ns[3e3]
                            },
                            outputEncoding: {
                                value: ns[3e3]
                            }
                        },
                        vertexShader: Rd(),
                        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Cu()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
                        blending: 0,
                        depthTest: !1,
                        depthWrite: !1
                    })
                }(Lh), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial)
            }
            fromScene(s, e = 0, r = .1, h = 100) {
                Md = this._renderer.getRenderTarget();
                const c = this._allocateTargets();
                return this._sceneToCubeUV(s, r, h, c), e > 0 && this._blur(c, 0, 0, e), this._applyPMREM(c), this._cleanup(c), c
            }
            fromEquirectangular(s) {
                return this._fromTexture(s)
            }
            fromCubemap(s) {
                return this._fromTexture(s)
            }
            compileCubemapShader() {
                this._cubemapShader === null && (this._cubemapShader = Bd(), this._compileMaterial(this._cubemapShader))
            }
            compileEquirectangularShader() {
                this._equirectShader === null && (this._equirectShader = Cd(), this._compileMaterial(this._equirectShader))
            }
            dispose() {
                this._blurMaterial.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose();
                for (let s = 0; s < al.length; s++) al[s].dispose()
            }
            _cleanup(s) {
                this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(Md), s.scissorTest = !1, Mu(s, 0, 0, s.width, s.height)
            }
            _fromTexture(s) {
                Md = this._renderer.getRenderTarget();
                const e = this._allocateTargets(s);
                return this._textureToCubeUV(s, e), this._applyPMREM(e), this._cleanup(e), e
            }
            _allocateTargets(s) {
                const e = {
                        magFilter: 1003,
                        minFilter: 1003,
                        generateMipmaps: !1,
                        type: 1009,
                        format: 1023,
                        encoding: hp(s) ? s.encoding : 3002,
                        depthBuffer: !1
                    },
                    r = Tu(e);
                return r.depthBuffer = !s, this._pingPongRenderTarget = Tu(e), r
            }
            _compileMaterial(s) {
                const e = new ar(al[0], s);
                this._renderer.compile(e, Rc)
            }
            _sceneToCubeUV(s, e, r, h) {
                const c = new dr(90, 1, e, r),
                    v = [1, -1, 1, 1, 1, 1],
                    w = [1, 1, 1, -1, -1, -1],
                    E = this._renderer,
                    T = E.autoClear,
                    B = E.outputEncoding,
                    Q = E.toneMapping;
                E.getClearColor(cp), E.toneMapping = 0, E.outputEncoding = 3e3, E.autoClear = !1;
                let k = !1;
                const i = s.background;
                if (i) {
                    if (i.isColor) {
                        rl.color.copy(i).convertSRGBToLinear(), s.background = null;
                        const t = Au(rl.color);
                        rl.opacity = t, k = !0
                    }
                } else {
                    rl.color.copy(cp).convertSRGBToLinear();
                    const t = Au(rl.color);
                    rl.opacity = t, k = !0
                }
                for (let t = 0; t < 6; t++) {
                    const a = t % 3;
                    a == 0 ? (c.up.set(0, v[t], 0), c.lookAt(w[t], 0, 0)) : a == 1 ? (c.up.set(0, 0, v[t]), c.lookAt(0, w[t], 0)) : (c.up.set(0, v[t], 0), c.lookAt(0, 0, w[t])), Mu(h, a * eo, t > 2 ? eo : 0, eo, eo), E.setRenderTarget(h), k && E.render(Eu, c), E.render(s, c)
                }
                E.toneMapping = Q, E.outputEncoding = B, E.autoClear = T
            }
            _textureToCubeUV(s, e) {
                const r = this._renderer;
                s.isCubeTexture ? this._cubemapShader == null && (this._cubemapShader = Bd()) : this._equirectShader == null && (this._equirectShader = Cd());
                const h = s.isCubeTexture ? this._cubemapShader : this._equirectShader,
                    c = new ar(al[0], h),
                    v = h.uniforms;
                v.envMap.value = s, s.isCubeTexture || v.texelSize.value.set(1 / s.image.width, 1 / s.image.height), v.inputEncoding.value = ns[s.encoding], v.outputEncoding.value = ns[e.texture.encoding], Mu(e, 0, 0, 3 * eo, 2 * eo), r.setRenderTarget(e), r.render(c, Rc)
            }
            _applyPMREM(s) {
                const e = this._renderer,
                    r = e.autoClear;
                e.autoClear = !1;
                for (let h = 1; h < kl; h++) {
                    const c = Math.sqrt(Su[h] * Su[h] - Su[h - 1] * Su[h - 1]),
                        v = To[(h - 1) % To.length];
                    this._blur(s, h - 1, h, c, v)
                }
                e.autoClear = r
            }
            _blur(s, e, r, h, c) {
                const v = this._pingPongRenderTarget;
                this._halfBlur(s, v, e, r, h, "latitudinal", c), this._halfBlur(v, s, r, r, h, "longitudinal", c)
            }
            _halfBlur(s, e, r, h, c, v, w) {
                const E = this._renderer,
                    T = this._blurMaterial;
                v !== "latitudinal" && v !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
                const B = new ar(al[h], T),
                    Q = T.uniforms,
                    k = lp[r] - 1,
                    i = isFinite(c) ? Math.PI / (2 * k) : 2 * Math.PI / 39,
                    t = c / i,
                    a = isFinite(c) ? 1 + Math.floor(3 * t) : Lh;
                a > Lh && console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${a} samples when the maximum is set to 20`);
                const l = [];
                let d = 0;
                for (let x = 0; x < Lh; ++x) {
                    const A = x / t,
                        M = Math.exp(-A * A / 2);
                    l.push(M), x == 0 ? d += M : x < a && (d += 2 * M)
                }
                for (let x = 0; x < l.length; x++) l[x] = l[x] / d;
                Q.envMap.value = s.texture, Q.samples.value = a, Q.weights.value = l, Q.latitudinal.value = v === "latitudinal", w && (Q.poleAxis.value = w), Q.dTheta.value = i, Q.mipInt.value = 8 - r, Q.inputEncoding.value = ns[s.texture.encoding], Q.outputEncoding.value = ns[s.texture.encoding];
                const g = lp[h];
                Mu(e, 3 * Math.max(0, eo - 2 * g), (h === 0 ? 0 : 2 * eo) + 2 * g * (h > 4 ? h - 8 + 4 : 0), 3 * g, 2 * g), E.setRenderTarget(e), E.render(B, Rc)
            }
        }, y.ParametricBufferGeometry = Jo, y.ParametricGeometry = Jo, y.Particle = function(s) {
            return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new sa(s)
        }, y.ParticleBasicMaterial = function(s) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new Ml(s)
        }, y.ParticleSystem = function(s, e) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new lc(s, e)
        }, y.ParticleSystemMaterial = function(s) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new Ml(s)
        }, y.Path = yh, y.PerspectiveCamera = dr, y.Plane = Et, y.PlaneBufferGeometry = Is, y.PlaneGeometry = Is, y.PlaneHelper = class extends za {
            constructor(s, e = 1, r = 16776960) {
                const h = r,
                    c = new an;
                c.setAttribute("position", new Ai([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), c.computeBoundingSphere(), super(c, new Xr({
                    color: h,
                    toneMapped: !1
                })), this.type = "PlaneHelper", this.plane = s, this.size = e;
                const v = new an;
                v.setAttribute("position", new Ai([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), v.computeBoundingSphere(), this.add(new ar(v, new Gi({
                    color: h,
                    opacity: .2,
                    transparent: !0,
                    depthWrite: !1,
                    toneMapped: !1
                })))
            }
            updateMatrixWorld(s) {
                let e = -this.plane.constant;
                Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), super.updateMatrixWorld(s)
            }
        }, y.PointCloud = function(s, e) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new lc(s, e)
        }, y.PointCloudMaterial = function(s) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new Ml(s)
        }, y.PointLight = id, y.PointLightHelper = class extends ar {
            constructor(s, e, r) {
                super(new wo(e, 4, 2), new Gi({
                    wireframe: !0,
                    fog: !1,
                    toneMapped: !1
                })), this.light = s, this.light.updateMatrixWorld(), this.color = r, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
            }
            dispose() {
                this.geometry.dispose(), this.material.dispose()
            }
            update() {
                this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
            }
        }, y.Points = lc, y.PointsMaterial = Ml, y.PolarGridHelper = class extends xa {
            constructor(s = 10, e = 16, r = 8, h = 64, c = 4473924, v = 8947848) {
                c = new Rt(c), v = new Rt(v);
                const w = [],
                    E = [];
                for (let B = 0; B <= e; B++) {
                    const Q = B / e * (2 * Math.PI),
                        k = Math.sin(Q) * s,
                        i = Math.cos(Q) * s;
                    w.push(0, 0, 0), w.push(k, 0, i);
                    const t = 1 & B ? c : v;
                    E.push(t.r, t.g, t.b), E.push(t.r, t.g, t.b)
                }
                for (let B = 0; B <= r; B++) {
                    const Q = 1 & B ? c : v,
                        k = s - s / r * B;
                    for (let i = 0; i < h; i++) {
                        let t = i / h * (2 * Math.PI),
                            a = Math.sin(t) * k,
                            l = Math.cos(t) * k;
                        w.push(a, 0, l), E.push(Q.r, Q.g, Q.b), t = (i + 1) / h * (2 * Math.PI), a = Math.sin(t) * k, l = Math.cos(t) * k, w.push(a, 0, l), E.push(Q.r, Q.g, Q.b)
                    }
                }
                const T = new an;
                T.setAttribute("position", new Ai(w, 3)), T.setAttribute("color", new Ai(E, 3)), super(T, new Xr({
                    vertexColors: !0,
                    toneMapped: !1
                })), this.type = "PolarGridHelper"
            }
        }, y.PolyhedronBufferGeometry = Js, y.PolyhedronGeometry = Js, y.PositionalAudio = class extends Ah {
            constructor(s) {
                super(s), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain)
            }
            getOutput() {
                return this.panner
            }
            getRefDistance() {
                return this.panner.refDistance
            }
            setRefDistance(s) {
                return this.panner.refDistance = s, this
            }
            getRolloffFactor() {
                return this.panner.rolloffFactor
            }
            setRolloffFactor(s) {
                return this.panner.rolloffFactor = s, this
            }
            getDistanceModel() {
                return this.panner.distanceModel
            }
            setDistanceModel(s) {
                return this.panner.distanceModel = s, this
            }
            getMaxDistance() {
                return this.panner.maxDistance
            }
            setMaxDistance(s) {
                return this.panner.maxDistance = s, this
            }
            setDirectionalCone(s, e, r) {
                return this.panner.coneInnerAngle = s, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = r, this
            }
            updateMatrixWorld(s) {
                if (super.updateMatrixWorld(s), this.hasPlaybackControl === !0 && this.isPlaying === !1) return;
                this.matrixWorld.decompose(Eo, tp, Tp), il.set(0, 0, 1).applyQuaternion(tp);
                const e = this.panner;
                if (e.positionX) {
                    const r = this.context.currentTime + this.listener.timeDelta;
                    e.positionX.linearRampToValueAtTime(Eo.x, r), e.positionY.linearRampToValueAtTime(Eo.y, r), e.positionZ.linearRampToValueAtTime(Eo.z, r), e.orientationX.linearRampToValueAtTime(il.x, r), e.orientationY.linearRampToValueAtTime(il.y, r), e.orientationZ.linearRampToValueAtTime(il.z, r)
                } else e.setPosition(Eo.x, Eo.y, Eo.z), e.setOrientation(il.x, il.y, il.z)
            }
        }, y.PropertyBinding = Ca, y.PropertyMixer = Rs, y.QuadraticBezierCurve = cu, y.QuadraticBezierCurve3 = $u, y.Quaternion = Bn, y.QuaternionKeyframeTrack = gc, y.QuaternionLinearInterpolant = nu, y.REVISION = z, y.RGBADepthPacking = 3201, y.RGBAFormat = 1023, y.RGBAIntegerFormat = 1033, y.RGBA_ASTC_10x10_Format = 37819, y.RGBA_ASTC_10x5_Format = 37816, y.RGBA_ASTC_10x6_Format = 37817, y.RGBA_ASTC_10x8_Format = 37818, y.RGBA_ASTC_12x10_Format = 37820, y.RGBA_ASTC_12x12_Format = 37821, y.RGBA_ASTC_4x4_Format = 37808, y.RGBA_ASTC_5x4_Format = 37809, y.RGBA_ASTC_5x5_Format = 37810, y.RGBA_ASTC_6x5_Format = 37811, y.RGBA_ASTC_6x6_Format = 37812, y.RGBA_ASTC_8x5_Format = 37813, y.RGBA_ASTC_8x6_Format = 37814, y.RGBA_ASTC_8x8_Format = 37815, y.RGBA_BPTC_Format = 36492, y.RGBA_ETC2_EAC_Format = 37496, y.RGBA_PVRTC_2BPPV1_Format = 35843, y.RGBA_PVRTC_4BPPV1_Format = 35842, y.RGBA_S3TC_DXT1_Format = 33777, y.RGBA_S3TC_DXT3_Format = 33778, y.RGBA_S3TC_DXT5_Format = 33779, y.RGBDEncoding = 3006, y.RGBEEncoding = 3002, y.RGBEFormat = 1023, y.RGBFormat = 1022, y.RGBIntegerFormat = 1032, y.RGBM16Encoding = 3005, y.RGBM7Encoding = 3004, y.RGB_ETC1_Format = 36196, y.RGB_ETC2_Format = 37492, y.RGB_PVRTC_2BPPV1_Format = 35841, y.RGB_PVRTC_4BPPV1_Format = 35840, y.RGB_S3TC_DXT1_Format = 33776, y.RGFormat = 1030, y.RGIntegerFormat = 1031, y.RawShaderMaterial = Xs, y.Ray = wr, y.Raycaster = yd, y.RectAreaLight = ad, y.RedFormat = 1028, y.RedIntegerFormat = 1029, y.ReinhardToneMapping = 2, y.RepeatWrapping = 1e3, y.ReplaceStencilOp = 7681, y.ReverseSubtractEquation = 102, y.RingBufferGeometry = Rl, y.RingGeometry = Rl, y.SRGB8_ALPHA8_ASTC_10x10_Format = 37851, y.SRGB8_ALPHA8_ASTC_10x5_Format = 37848, y.SRGB8_ALPHA8_ASTC_10x6_Format = 37849, y.SRGB8_ALPHA8_ASTC_10x8_Format = 37850, y.SRGB8_ALPHA8_ASTC_12x10_Format = 37852, y.SRGB8_ALPHA8_ASTC_12x12_Format = 37853, y.SRGB8_ALPHA8_ASTC_4x4_Format = 37840, y.SRGB8_ALPHA8_ASTC_5x4_Format = 37841, y.SRGB8_ALPHA8_ASTC_5x5_Format = 37842, y.SRGB8_ALPHA8_ASTC_6x5_Format = 37843, y.SRGB8_ALPHA8_ASTC_6x6_Format = 37844, y.SRGB8_ALPHA8_ASTC_8x5_Format = 37845, y.SRGB8_ALPHA8_ASTC_8x6_Format = 37846, y.SRGB8_ALPHA8_ASTC_8x8_Format = 37847, y.Scene = ut, y.SceneUtils = Fd, y.ShaderChunk = An, y.ShaderLib = Ga, y.ShaderMaterial = Cn, y.ShadowMaterial = Kh, y.Shape = us, y.ShapeBufferGeometry = Zo, y.ShapeGeometry = Zo, y.ShapePath = od, y.ShapeUtils = xo, y.ShortType = 1011, y.Skeleton = Zn, y.SkeletonHelper = xu, y.SkinnedMesh = Mr, y.SmoothShading = 2, y.Sphere = Fn, y.SphereBufferGeometry = wo, y.SphereGeometry = wo, y.Spherical = class {
            constructor(s = 1, e = 0, r = 0) {
                return this.radius = s, this.phi = e, this.theta = r, this
            }
            set(s, e, r) {
                return this.radius = s, this.phi = e, this.theta = r, this
            }
            copy(s) {
                return this.radius = s.radius, this.phi = s.phi, this.theta = s.theta, this
            }
            makeSafe() {
                return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
            }
            setFromVector3(s) {
                return this.setFromCartesianCoords(s.x, s.y, s.z)
            }
            setFromCartesianCoords(s, e, r) {
                return this.radius = Math.sqrt(s * s + e * e + r * r), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(s, r), this.phi = Math.acos(Mi.clamp(e / this.radius, -1, 1))), this
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }, y.SphericalHarmonics3 = sd, y.SplineCurve = hu, y.SpotLight = pu, y.SpotLightHelper = class extends Z {
            constructor(s, e) {
                super(), this.light = s, this.light.updateMatrixWorld(), this.matrix = s.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
                const r = new an,
                    h = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
                for (let v = 0, w = 1, E = 32; v < E; v++, w++) {
                    const T = v / E * Math.PI * 2,
                        B = w / E * Math.PI * 2;
                    h.push(Math.cos(T), Math.sin(T), 1, Math.cos(B), Math.sin(B), 1)
                }
                r.setAttribute("position", new Ai(h, 3));
                const c = new Xr({
                    fog: !1,
                    toneMapped: !1
                });
                this.cone = new xa(r, c), this.add(this.cone), this.update()
            }
            dispose() {
                this.cone.geometry.dispose(), this.cone.material.dispose()
            }
            update() {
                this.light.updateMatrixWorld();
                const s = this.light.distance ? this.light.distance : 1e3,
                    e = s * Math.tan(this.light.angle);
                this.cone.scale.set(e, e, s), xd.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(xd), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
            }
        }, y.Sprite = sa, y.SpriteMaterial = ci, y.SrcAlphaFactor = 204, y.SrcAlphaSaturateFactor = 210, y.SrcColorFactor = 202, y.StaticCopyUsage = 35046, y.StaticDrawUsage = 35044, y.StaticReadUsage = 35045, y.StereoCamera = class {
            constructor() {
                this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new dr, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new dr, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
                    focus: null,
                    fov: null,
                    aspect: null,
                    near: null,
                    far: null,
                    zoom: null,
                    eyeSep: null
                }
            }
            update(s) {
                const e = this._cache;
                if (e.focus !== s.focus || e.fov !== s.fov || e.aspect !== s.aspect * this.aspect || e.near !== s.near || e.far !== s.far || e.zoom !== s.zoom || e.eyeSep !== this.eyeSep) {
                    e.focus = s.focus, e.fov = s.fov, e.aspect = s.aspect * this.aspect, e.near = s.near, e.far = s.far, e.zoom = s.zoom, e.eyeSep = this.eyeSep;
                    const r = s.projectionMatrix.clone(),
                        h = e.eyeSep / 2,
                        c = h * e.near / e.focus,
                        v = e.near * Math.tan(Mi.DEG2RAD * e.fov * .5) / e.zoom;
                    let w, E;
                    Sh.elements[12] = -h, Eh.elements[12] = h, w = -v * e.aspect + c, E = v * e.aspect + c, r.elements[0] = 2 * e.near / (E - w), r.elements[8] = (E + w) / (E - w), this.cameraL.projectionMatrix.copy(r), w = -v * e.aspect - c, E = v * e.aspect - c, r.elements[0] = 2 * e.near / (E - w), r.elements[8] = (E + w) / (E - w), this.cameraR.projectionMatrix.copy(r)
                }
                this.cameraL.matrixWorld.copy(s.matrixWorld).multiply(Sh), this.cameraR.matrixWorld.copy(s.matrixWorld).multiply(Eh)
            }
        }, y.StreamCopyUsage = 35042, y.StreamDrawUsage = 35040, y.StreamReadUsage = 35041, y.StringKeyframeTrack = qo, y.SubtractEquation = 101, y.SubtractiveBlending = 3, y.TOUCH = {
            ROTATE: 0,
            PAN: 1,
            DOLLY_PAN: 2,
            DOLLY_ROTATE: 3
        }, y.TangentSpaceNormalMap = 0, y.TetrahedronBufferGeometry = ah, y.TetrahedronGeometry = ah, y.TextBufferGeometry = sh, y.TextGeometry = sh, y.Texture = cn, y.TextureLoader = $o, y.TorusBufferGeometry = Xo, y.TorusGeometry = Xo, y.TorusKnotBufferGeometry = fc, y.TorusKnotGeometry = fc, y.Triangle = Mt, y.TriangleFanDrawMode = 2, y.TriangleStripDrawMode = 1, y.TrianglesDrawMode = 0, y.TubeBufferGeometry = mc, y.TubeGeometry = mc, y.UVMapping = 300, y.Uint16Attribute = function(s, e) {
            return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new Un(s, e)
        }, y.Uint16BufferAttribute = Un, y.Uint32Attribute = function(s, e) {
            return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new Qr(s, e)
        }, y.Uint32BufferAttribute = Qr, y.Uint8Attribute = function(s, e) {
            return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new en(s, e)
        }, y.Uint8BufferAttribute = en, y.Uint8ClampedAttribute = function(s, e) {
            return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new Bi(s, e)
        }, y.Uint8ClampedBufferAttribute = Bi, y.Uniform = Pl, y.UniformsLib = Oi, y.UniformsUtils = Gl, y.UnsignedByteType = 1009, y.UnsignedInt248Type = 1020, y.UnsignedIntType = 1014, y.UnsignedShort4444Type = 1017, y.UnsignedShort5551Type = 1018, y.UnsignedShort565Type = 1019, y.UnsignedShortType = 1012, y.VSMShadowMap = 3, y.Vector2 = Ht, y.Vector3 = ge, y.Vector4 = Si, y.VectorKeyframeTrack = yc, y.Vertex = function(s, e, r) {
            return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new ge(s, e, r)
        }, y.VertexColors = 2, y.VideoTexture = eh, y.WebGL1Renderer = nt, y.WebGLCubeRenderTarget = so, y.WebGLMultisampleRenderTarget = Nn, y.WebGLRenderTarget = qi, y.WebGLRenderTargetCube = function(s, e, r) {
            return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."), new so(s, r)
        }, y.WebGLRenderer = we, y.WebGLUtils = j, y.WireframeGeometry = $h, y.WireframeHelper = function(s, e) {
            return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new xa(new $h(s.geometry), new Xr({
                color: e !== void 0 ? e : 16777215
            }))
        }, y.WrapAroundEnding = 2402, y.XHRLoader = function(s) {
            return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new hs(s)
        }, y.ZeroCurvatureEnding = 2400, y.ZeroFactor = 200, y.ZeroSlopeEnding = 2401, y.ZeroStencilOp = 0, y.sRGBEncoding = 3001, Object.defineProperty(y, "__esModule", {
            value: !0
        })
    })
})(Qp, Qp.exports);
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
export const fn2 = (function(ue, R) {
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
    export const fn3 = (function(ue, R) {
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
export const fn4 = (function(ue, R) {
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
export const fn5 = (function(ue, R) {
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