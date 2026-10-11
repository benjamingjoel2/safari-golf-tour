/* Safari Golf Tour — ink illustrations.
 * Draws sumi-e style brush illustrations as inline SVG: a cover scene for every course
 * (golfers, trees, mountains, wildlife, a flag) and a hole-by-hole course map, both seeded
 * by the course id so they are stable between visits. No images are loaded.
 * Loaded after js/places.js, before js/site.js.
 */
(function () {
  "use strict";
  var S = window.SGT;
  var INK = "#1c1c1c";
  function esc(v) { return String(v).replace(/[&<>"]/g, function (ch) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[ch]; }); }

  /* ---------- seeded randomness ---------- */
  function seed(str) { var h = 1779033703 ^ str.length; for (var i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); } return function () { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; }; }
  function rnd(r, a, b) { return a + (b - a) * r(); }
  function pick(r, arr) { return arr[Math.floor(r() * arr.length) % arr.length]; }
  function f(n) { return Math.round(n * 10) / 10; }

  /* ---------- brush primitives ---------- */
  /* A brush stroke: a polyline with slight jitter, round caps, displaced by the ink filter. */
  function stroke(r, pts, w, opts) {
    opts = opts || {};
    var d = "", j = opts.jitter == null ? 1.2 : opts.jitter;
    for (var i = 0; i < pts.length; i++) {
      var x = pts[i][0] + rnd(r, -j, j), y = pts[i][1] + rnd(r, -j, j);
      d += (i ? " L" : "M") + f(x) + " " + f(y);
    }
    if (opts.close) d += " Z";
    var o = opts.opacity == null ? 0.92 : opts.opacity;
    var s = '<path d="' + d + '" fill="' + (opts.fill ? INK : "none") + '" stroke="' + INK + '" stroke-width="' + f(w) + '" stroke-linecap="round" stroke-linejoin="round" opacity="' + o + '"' + (opts.filter === false ? "" : ' filter="url(#ink-brush)"') + "/>";
    if (opts.dry) {
      s += '<path d="' + d + '" fill="none" stroke="#f4f1ea" stroke-width="' + f(w * 0.28) + '" stroke-dasharray="' + f(rnd(r, 2, 5)) + " " + f(rnd(r, 6, 14)) + '" stroke-linecap="round" opacity="0.5"/>';
    }
    return s;
  }
  /* A smooth curve through points (quadratic). */
  function curve(r, pts, w, opts) {
    opts = opts || {};
    var j = opts.jitter == null ? 1 : opts.jitter;
    var p = pts.map(function (q) { return [q[0] + rnd(r, -j, j), q[1] + rnd(r, -j, j)]; });
    var d = "M" + f(p[0][0]) + " " + f(p[0][1]);
    for (var i = 1; i < p.length - 1; i++) {
      var mx = (p[i][0] + p[i + 1][0]) / 2, my = (p[i][1] + p[i + 1][1]) / 2;
      d += " Q" + f(p[i][0]) + " " + f(p[i][1]) + " " + f(mx) + " " + f(my);
    }
    var l = p[p.length - 1];
    d += " T" + f(l[0]) + " " + f(l[1]);
    if (opts.close) d += " Z";
    var o = opts.opacity == null ? 0.92 : opts.opacity;
    return '<path d="' + d + '" fill="' + (opts.fill ? INK : "none") + '" stroke="' + INK + '" stroke-width="' + f(w) + '" stroke-linecap="round" stroke-linejoin="round" opacity="' + o + '" filter="url(#ink-brush)"/>';
  }
  /* An ink blob: irregular filled shape, used for canopies, bunkers, rocks, heads. */
  function blob(r, cx, cy, rx, ry, opts) {
    opts = opts || {};
    var n = opts.n || 9, pts = [];
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2, k = rnd(r, 0.72, 1.12);
      pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
    }
    return curve(r, pts.concat([pts[0], pts[1]]), opts.w || 2, { fill: true, close: true, opacity: opts.opacity == null ? 0.9 : opts.opacity, jitter: 0.6 });
  }
  function hatch(r, x, y, w, h, n, slant) {
    var s = "";
    for (var i = 0; i < n; i++) {
      var yy = y + (h * (i + 0.5)) / n, len = rnd(r, w * 0.3, w);
      var x0 = x + rnd(r, 0, w - len);
      s += stroke(r, [[x0, yy], [x0 + len, yy - (slant || 0) * len]], rnd(r, 1.2, 2.4), { opacity: 0.6, dry: true, jitter: 0.8 });
    }
    return s;
  }

  /* ---------- scene elements ---------- */
  function mountainCone(r, cx, base, h, w) {
    var top = base - h, s = "";
    /* slopes */
    s += curve(r, [[cx - w, base], [cx - w * 0.55, base - h * 0.45], [cx - w * 0.2, top + 8], [cx, top], [cx + w * 0.2, top + 6], [cx + w * 0.55, base - h * 0.5], [cx + w, base]], 5, { opacity: 0.95, jitter: 2 });
    /* snow line and ridges */
    s += curve(r, [[cx - w * 0.22, top + h * 0.22], [cx - w * 0.1, top + h * 0.17], [cx, top + h * 0.24], [cx + w * 0.12, top + h * 0.16], [cx + w * 0.24, top + h * 0.24]], 2.4, { opacity: 0.8, jitter: 1.5 });
    for (var i = 0; i < 6; i++) {
      var sx = cx + rnd(r, -w * 0.35, w * 0.35), sy = top + h * rnd(r, 0.3, 0.55);
      s += stroke(r, [[sx, sy], [sx + rnd(r, -8, 8), sy + rnd(r, 18, 40)]], rnd(r, 1.5, 3), { opacity: 0.55, dry: true });
    }
    /* foothills wash */
    s += hatch(r, cx - w * 0.9, base - 16, w * 1.8, 14, 3, 0.02);
    return s;
  }
  function mountainRange(r, x0, x1, base, h) {
    var pts = [[x0, base]], n = 7, w = x1 - x0;
    for (var i = 1; i < n; i++) pts.push([x0 + (w * i) / n + rnd(r, -20, 20), base - h * rnd(r, 0.35, 1)]);
    pts.push([x1, base]);
    var s = curve(r, pts, 4.5, { opacity: 0.95, jitter: 2 });
    for (var k = 1; k < pts.length - 1; k += 2) s += stroke(r, [[pts[k][0], pts[k][1]], [pts[k][0] + rnd(r, 10, 30), pts[k][1] + rnd(r, 30, 60)]], 2, { opacity: 0.55, dry: true });
    s += hatch(r, x0 + 20, base - 18, w - 40, 16, 3, 0.03);
    return s;
  }
  function mountainTable(r, cx, base, h, w) {
    var s = curve(r, [[cx - w, base], [cx - w * 0.6, base - h * 0.8], [cx - w * 0.5, base - h], [cx + w * 0.5, base - h], [cx + w * 0.62, base - h * 0.78], [cx + w, base]], 5, { opacity: 0.95, jitter: 1.5 });
    s += hatch(r, cx - w * 0.5, base - h + 10, w, h * 0.5, 5, 0.01);
    return s;
  }
  function hills(r, x0, x1, base, h) {
    var s = "";
    for (var k = 0; k < 2; k++) {
      var pts = [], n = 6, w = x1 - x0;
      for (var i = 0; i <= n; i++) pts.push([x0 + (w * i) / n, base - (i === 0 || i === n ? 0 : h * rnd(r, 0.3, 1) * (k ? 0.6 : 1))]);
      s += curve(r, pts, 3, { opacity: k ? 0.5 : 0.85, jitter: 2 });
      base += 10;
    }
    return s;
  }
  function dunes(r, x0, x1, base, h) {
    var s = "";
    for (var k = 0; k < 3; k++) {
      var pts = [], n = 5, w = x1 - x0;
      for (var i = 0; i <= n; i++) pts.push([x0 + (w * i) / n + k * 30, base - (i === 0 || i === n ? 0 : h * rnd(r, 0.4, 1))]);
      s += curve(r, pts, 2.6 - k * 0.5, { opacity: 0.85 - k * 0.2, jitter: 2 });
      base += 14 + k * 6;
    }
    return s;
  }
  function sea(r, x0, x1, y) {
    var s = "";
    for (var i = 0; i < 5; i++) {
      var sx = rnd(r, x0, x1 - 80), len = rnd(r, 50, 160), yy = y + i * 9 + rnd(r, -3, 3);
      s += curve(r, [[sx, yy], [sx + len * 0.3, yy - 3], [sx + len * 0.6, yy + 2], [sx + len, yy - 1]], rnd(r, 1.2, 2.2), { opacity: 0.6, jitter: 0.5 });
    }
    return s;
  }
  function sun(r, cx, cy, rad) { return curve(r, [[cx + rad, cy], [cx, cy - rad], [cx - rad, cy], [cx, cy + rad], [cx + rad, cy], [cx, cy - rad]], 2, { opacity: 0.55, jitter: 1 }); }
  function cloud(r, cx, cy, w) { return curve(r, [[cx - w / 2, cy], [cx - w / 4, cy - 6], [cx, cy - 2], [cx + w / 4, cy - 7], [cx + w / 2, cy + 1]], 1.8, { opacity: 0.45, jitter: 0.8 }); }

  function treeAcacia(r, x, base, h) {
    var s = stroke(r, [[x, base], [x + h * 0.04, base - h * 0.55], [x - h * 0.02, base - h * 0.75]], h * 0.07, { opacity: 0.95 });
    s += stroke(r, [[x - h * 0.02, base - h * 0.7], [x - h * 0.28, base - h * 0.85]], h * 0.04);
    s += stroke(r, [[x, base - h * 0.72], [x + h * 0.3, base - h * 0.84]], h * 0.04);
    for (var i = 0; i < 7; i++) {
      var cx = x + rnd(r, -h * 0.42, h * 0.42), cy = base - h * rnd(r, 0.82, 0.98);
      s += blob(r, cx, cy, h * rnd(r, 0.1, 0.17), h * rnd(r, 0.035, 0.06), { n: 7, opacity: 0.88 });
    }
    return s;
  }
  function treePalm(r, x, base, h) {
    var lean = rnd(r, -h * 0.18, h * 0.18), top = [x + lean, base - h];
    var s = curve(r, [[x, base], [x + lean * 0.4, base - h * 0.5], top], h * 0.05, { opacity: 0.95 });
    for (var i = 0; i < 7; i++) {
      var a = -Math.PI * 0.95 + (i / 6) * Math.PI * 0.9 + rnd(r, -0.15, 0.15), len = h * rnd(r, 0.32, 0.46);
      var ex = top[0] + Math.cos(a) * len, ey = top[1] + Math.sin(a) * len + len * 0.5;
      s += curve(r, [top, [top[0] + Math.cos(a) * len * 0.55, top[1] + Math.sin(a) * len * 0.55 - 4], [ex, ey]], h * 0.045, { opacity: 0.9 });
    }
    return s;
  }
  function treePine(r, x, base, h) {
    var s = stroke(r, [[x, base], [x + 2, base - h * 0.3]], h * 0.06, { opacity: 0.95 });
    for (var i = 0; i < 4; i++) {
      var y = base - h * (0.3 + i * 0.18), w = h * (0.32 - i * 0.07);
      s += curve(r, [[x - w, y], [x - w * 0.3, y - h * 0.04], [x, y - h * 0.11], [x + w * 0.3, y - h * 0.04], [x + w, y]], h * 0.05, { fill: true, close: true, opacity: 0.9, jitter: 1.5 });
    }
    return s;
  }
  function treeBaobab(r, x, base, h) {
    var s = stroke(r, [[x - h * 0.1, base], [x - h * 0.08, base - h * 0.6], [x + h * 0.08, base - h * 0.6], [x + h * 0.1, base]], h * 0.14, { fill: true, close: true, opacity: 0.95 });
    for (var i = 0; i < 6; i++) {
      var a = -Math.PI / 2 + rnd(r, -1.1, 1.1), len = h * rnd(r, 0.22, 0.4);
      var sx = x + rnd(r, -h * 0.06, h * 0.06), sy = base - h * 0.6;
      s += stroke(r, [[sx, sy], [sx + Math.cos(a) * len * 0.6, sy + Math.sin(a) * len * 0.6], [sx + Math.cos(a + rnd(r, -0.5, 0.5)) * len, sy + Math.sin(a) * len]], h * 0.035, { opacity: 0.9 });
    }
    return s;
  }
  function treeCypress(r, x, base, h) {
    return curve(r, [[x - h * 0.08, base], [x - h * 0.1, base - h * 0.5], [x, base - h], [x + h * 0.1, base - h * 0.5], [x + h * 0.08, base]], h * 0.06, { fill: true, close: true, opacity: 0.92, jitter: 2 });
  }
  function treeOak(r, x, base, h) {
    var s = stroke(r, [[x, base], [x + h * 0.03, base - h * 0.45]], h * 0.07, { opacity: 0.95 });
    for (var i = 0; i < 8; i++) {
      var cx = x + rnd(r, -h * 0.33, h * 0.33), cy = base - h * rnd(r, 0.5, 0.92);
      s += blob(r, cx, cy, h * rnd(r, 0.1, 0.17), h * rnd(r, 0.08, 0.13), { n: 7, opacity: 0.85 });
    }
    return s;
  }
  function bush(r, x, base, w) {
    var s = "";
    for (var i = 0; i < 4; i++) s += blob(r, x + rnd(r, -w * 0.4, w * 0.4), base - rnd(r, 4, w * 0.3), w * rnd(r, 0.18, 0.3), w * rnd(r, 0.12, 0.2), { n: 7, opacity: 0.8 });
    return s;
  }
  function tree(r, kind, x, base, h) {
    switch (kind) {
      case "palm": return treePalm(r, x, base, h);
      case "pine": return treePine(r, x, base, h);
      case "baobab": return treeBaobab(r, x, base, h);
      case "cypress": return treeCypress(r, x, base, h);
      case "oak": return treeOak(r, x, base, h);
      default: return treeAcacia(r, x, base, h);
    }
  }

  /* Golfer silhouettes: solid brush figures (hat, shirt, trousers) in five poses. */
  function golfer(r, pose, x, base, h, flip) {
    var k = flip ? -1 : 1, s = "";
    function P(dx, dy) { return [x + dx * h * k, base - dy * h]; }
    function solid(pts, w) { return stroke(r, pts, w, { fill: true, close: true, opacity: 0.95, jitter: 0.8 }); }
    var headR = h * 0.068;
    var head, hatY;
    if (pose === "swing") {
      /* legs: front straight, back heel lifted */
      s += solid([P(-0.16, 0.0), P(-0.06, 0.0), P(-0.02, 0.5), P(-0.14, 0.52)], h * 0.05);
      s += solid([P(0.04, 0.05), P(0.14, 0.02), P(0.14, 0.5), P(0.02, 0.52)], h * 0.05);
      /* torso twisted back */
      s += solid([P(-0.14, 0.5), P(0.14, 0.5), P(0.12, 0.86), P(-0.1, 0.86)], h * 0.05);
      /* arms raised over the shoulder, club across the top */
      s += stroke(r, [P(0.0, 0.8), P(0.14, 0.98), P(0.26, 1.08)], h * 0.075);
      s += stroke(r, [P(0.26, 1.08), P(0.02, 1.3)], h * 0.028);
      s += blob(r, x + 0.0 * h * k, base - 1.3 * h, h * 0.045, h * 0.028, { n: 6 });
      head = P(0.0, 0.95); hatY = 1.01;
    } else if (pose === "address") {
      s += solid([P(-0.2, 0.0), P(-0.1, 0.0), P(-0.04, 0.5), P(-0.16, 0.52)], h * 0.05);
      s += solid([P(0.02, 0.0), P(0.12, 0.0), P(0.12, 0.5), P(0.0, 0.52)], h * 0.05);
      /* bent torso */
      s += solid([P(-0.16, 0.5), P(0.12, 0.5), P(0.3, 0.78), P(0.12, 0.9)], h * 0.05);
      /* arms hanging to the club */
      s += stroke(r, [P(0.2, 0.74), P(0.3, 0.5), P(0.34, 0.3)], h * 0.075);
      s += stroke(r, [P(0.34, 0.3), P(0.4, 0.04)], h * 0.028);
      s += blob(r, x + 0.42 * h * k, base - 0.03 * h, h * 0.045, h * 0.022, { n: 6 });
      head = P(0.3, 0.9); hatY = 0.96;
    } else if (pose === "point") {
      s += solid([P(-0.14, 0.0), P(-0.04, 0.0), P(-0.02, 0.5), P(-0.14, 0.52)], h * 0.05);
      s += solid([P(0.04, 0.0), P(0.14, 0.0), P(0.14, 0.5), P(0.02, 0.52)], h * 0.05);
      s += solid([P(-0.14, 0.5), P(0.14, 0.5), P(0.12, 0.88), P(-0.12, 0.88)], h * 0.05);
      s += stroke(r, [P(0.08, 0.82), P(0.24, 0.86), P(0.4, 0.92)], h * 0.07); /* pointing */
      s += stroke(r, [P(-0.1, 0.82), P(-0.16, 0.6)], h * 0.065);
      head = P(0.0, 0.98); hatY = 1.04;
    } else if (pose === "caddie") {
      s += solid([P(-0.14, 0.0), P(-0.04, 0.0), P(-0.02, 0.5), P(-0.14, 0.52)], h * 0.05);
      s += solid([P(0.04, 0.0), P(0.14, 0.0), P(0.14, 0.5), P(0.02, 0.52)], h * 0.05);
      s += solid([P(-0.14, 0.5), P(0.14, 0.5), P(0.12, 0.88), P(-0.12, 0.88)], h * 0.05);
      s += solid([P(-0.26, 0.5), P(-0.14, 0.5), P(-0.16, 0.96), P(-0.3, 0.98)], h * 0.05); /* bag */
      s += stroke(r, [P(-0.26, 0.98), P(-0.3, 1.1)], h * 0.03); s += stroke(r, [P(-0.2, 0.98), P(-0.2, 1.12)], h * 0.03); s += stroke(r, [P(-0.16, 0.98), P(-0.12, 1.1)], h * 0.03);
      s += stroke(r, [P(0.1, 0.84), P(0.2, 0.66), P(0.14, 0.55)], h * 0.065);
      head = P(0.0, 0.98); hatY = 1.04;
    } else { /* stand, leaning on a club */
      s += solid([P(-0.14, 0.0), P(-0.04, 0.0), P(-0.02, 0.5), P(-0.14, 0.52)], h * 0.05);
      s += solid([P(0.04, 0.0), P(0.14, 0.0), P(0.14, 0.5), P(0.02, 0.52)], h * 0.05);
      s += solid([P(-0.14, 0.5), P(0.14, 0.5), P(0.12, 0.88), P(-0.12, 0.88)], h * 0.05);
      s += stroke(r, [P(0.1, 0.82), P(0.22, 0.62), P(0.24, 0.5)], h * 0.065);
      s += stroke(r, [P(0.24, 0.5), P(0.26, 0.02)], h * 0.026);
      s += stroke(r, [P(-0.1, 0.82), P(-0.18, 0.62)], h * 0.065);
      head = P(0.0, 0.98); hatY = 1.04;
    }
    /* feet */
    s += blob(r, P(-0.1, 0.0)[0], base + 2, h * 0.07, h * 0.022, { n: 6 });
    s += blob(r, P(0.1, 0.0)[0], base + 2, h * 0.07, h * 0.022, { n: 6 });
    /* head and hat */
    s += blob(r, head[0], head[1], headR, headR * 0.95, { n: 7 });
    s += stroke(r, [[head[0] - h * 0.13 * k, base - hatY * h], [head[0] + h * 0.12 * k, base - hatY * h]], h * 0.028);
    s += blob(r, head[0], base - (hatY + 0.025) * h, h * 0.075, h * 0.03, { n: 6 });
    /* shadow */
    s += stroke(r, [P(-0.22, -0.03), P(0.24, -0.03)], h * 0.03, { opacity: 0.4, dry: true });
    return s;
  }
  function flag(r, x, base, h) {
    var s = stroke(r, [[x, base], [x, base - h]], 3, { opacity: 0.95 });
    s += stroke(r, [[x, base - h], [x + h * 0.42, base - h * 0.85], [x, base - h * 0.7]], 3, { fill: true, close: true, opacity: 0.95 });
    s += blob(r, x, base + 2, h * 0.1, h * 0.03, { n: 6, opacity: 0.6 });
    return s;
  }
  function elephant(r, x, base, h, flip) {
    var k = flip ? -1 : 1;
    function P(dx, dy) { return [x + dx * h * k, base - dy * h]; }
    var s = blob(r, x, base - h * 0.55, h * 0.55, h * 0.35, { n: 9 }); /* body */
    s += blob(r, x + 0.55 * h * k, base - h * 0.72, h * 0.26, h * 0.24, { n: 8 }); /* head */
    s += blob(r, x + 0.5 * h * k, base - h * 0.72, h * 0.16, h * 0.22, { n: 7, opacity: 0.85 }); /* ear */
    s += curve(r, [P(0.78, 0.62), P(0.86, 0.4), P(0.8, 0.15), P(0.86, 0.02)], h * 0.09); /* trunk */
    s += stroke(r, [P(0.72, 0.55), P(0.9, 0.5)], h * 0.03, { opacity: 0.8 }); /* tusk */
    [-0.32, -0.14, 0.14, 0.32].forEach(function (lx) { s += stroke(r, [P(lx, 0.3), P(lx + 0.02, 0.0)], h * 0.12); });
    s += stroke(r, [P(-0.55, 0.6), P(-0.72, 0.35)], h * 0.03); /* tail */
    return s;
  }
  function giraffe(r, x, base, h, flip) {
    var k = flip ? -1 : 1;
    function P(dx, dy) { return [x + dx * h * k, base - dy * h]; }
    var s = blob(r, x, base - h * 0.5, h * 0.22, h * 0.13, { n: 8 });
    s += stroke(r, [P(0.18, 0.56), P(0.3, 0.85), P(0.36, 0.98)], h * 0.09); /* neck */
    s += blob(r, x + 0.4 * h * k, base - h * 1.0, h * 0.08, h * 0.045, { n: 6 });
    s += stroke(r, [P(0.36, 1.02), P(0.34, 1.1)], h * 0.02); s += stroke(r, [P(0.42, 1.02), P(0.43, 1.1)], h * 0.02);
    [-0.14, -0.06, 0.08, 0.16].forEach(function (lx) { s += stroke(r, [P(lx, 0.42), P(lx, 0.0)], h * 0.045); });
    for (var i = 0; i < 6; i++) s += blob(r, x + rnd(r, -0.16, 0.16) * h, base - h * rnd(r, 0.42, 0.6), h * 0.03, h * 0.025, { n: 5, opacity: 0.5 });
    return s;
  }
  function kasbah(r, x, base, w) {
    var h = w * 0.5, s = stroke(r, [[x - w / 2, base], [x - w / 2, base - h * 0.7], [x - w * 0.3, base - h * 0.7], [x - w * 0.3, base - h], [x - w * 0.1, base - h], [x - w * 0.1, base - h * 0.75], [x + w * 0.25, base - h * 0.75], [x + w * 0.25, base - h * 0.95], [x + w * 0.5, base - h * 0.95], [x + w * 0.5, base]], 2.6, { opacity: 0.9, jitter: 1 });
    s += hatch(r, x - w * 0.45, base - h * 0.6, w * 0.9, h * 0.5, 4, 0);
    return s;
  }
  function lodge(r, x, base, w) {
    var h = w * 0.55, s = "";
    s += curve(r, [[x - w * 0.6, base - h * 0.5], [x - w * 0.3, base - h * 0.85], [x, base - h], [x + w * 0.3, base - h * 0.85], [x + w * 0.6, base - h * 0.5]], 3.5, { opacity: 0.95, jitter: 1.5 }); /* thatch roof */
    s += stroke(r, [[x - w * 0.42, base - h * 0.5], [x - w * 0.42, base]], 3); s += stroke(r, [[x + w * 0.42, base - h * 0.5], [x + w * 0.42, base]], 3);
    s += stroke(r, [[x - w * 0.1, base - h * 0.48], [x - w * 0.1, base]], 2); s += stroke(r, [[x + w * 0.1, base - h * 0.48], [x + w * 0.1, base]], 2);
    s += hatch(r, x - w * 0.5, base - h * 0.95, w, h * 0.4, 5, 0.1);
    return s;
  }
  function groundWash(r, x0, x1, y) {
    var s = "";
    for (var i = 0; i < 6; i++) {
      var sx = rnd(r, x0, x1 - 120), len = rnd(r, 80, 300), yy = y + rnd(r, -6, 24);
      s += stroke(r, [[sx, yy], [sx + len, yy + rnd(r, -2, 2)]], rnd(r, 1.5, 3.5), { opacity: rnd(r, 0.35, 0.65), dry: true, jitter: 0.6 });
    }
    return s;
  }

  /* ---------- scene presets by course ---------- */
  var SCENES = {
    savanna: { mountain: "none", trees: ["acacia", "acacia"], animal: "giraffe" },
    savannaElephant: { mountain: "hills", trees: ["acacia"], animal: "elephant" },
    kilimanjaro: { mountain: "cone", trees: ["acacia"], animal: "giraffe" },
    rift: { mountain: "range", trees: ["acacia"], animal: "giraffe" },
    parkland: { mountain: "hills", trees: ["oak", "pine"], animal: null },
    forest: { mountain: "hills", trees: ["pine", "oak", "pine"], animal: null },
    coast: { mountain: "none", trees: ["palm", "palm"], animal: null, sea: true },
    island: { mountain: "hills", trees: ["palm"], animal: null, sea: true },
    links: { mountain: "none", trees: [], animal: null, sea: true, dunes: true },
    winelands: { mountain: "range", trees: ["cypress", "oak"], animal: null },
    table: { mountain: "table", trees: ["pine"], animal: null, sea: true },
    bushveld: { mountain: "hills", trees: ["acacia", "baobab"], animal: "elephant" },
    falls: { mountain: "none", trees: ["baobab", "acacia"], animal: "elephant", spray: true },
    lake: { mountain: "hills", trees: ["palm", "acacia"], animal: null, sea: true },
    desert: { mountain: "none", trees: ["palm"], animal: null, dunes: true },
    atlas: { mountain: "range", trees: ["cypress", "palm"], animal: null, kasbah: true },
    cedar: { mountain: "range", trees: ["pine", "pine"], animal: null },
    highlands: { mountain: "hills", trees: ["pine", "oak"], animal: null, lodge: true },
    lodge: { mountain: "hills", trees: ["acacia"], animal: "elephant", lodge: true },
    baobab: { mountain: "hills", trees: ["baobab", "baobab"], animal: null }
  };

  S.inkDefs = function () {
    return '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
      '<filter id="ink-brush" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G"/></filter>' +
      '<filter id="ink-paper" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="3" result="g"/><feColorMatrix in="g" type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.1  0 0 0 0 0.07  0 0 0 0.06 0"/></filter>' +
      "</defs></svg>";
  };

  /* A cover scene for a course: 900 x 560. */
  S.inkCover = function (c, opts) {
    opts = opts || {};
    var r = seed("cover:" + c.id), sc = SCENES[c.scene] || SCENES.parkland;
    var W = 900, H = 560, base = 455, s = "";
    s += '<rect width="' + W + '" height="' + H + '" fill="#f4f1ea"/>';
    s += '<rect width="' + W + '" height="' + H + '" filter="url(#ink-paper)" opacity="0.9"/>';
    /* sky */
    if (r() > 0.5) s += sun(r, rnd(r, 640, 800), rnd(r, 90, 140), rnd(r, 18, 28));
    s += cloud(r, rnd(r, 120, 400), rnd(r, 80, 130), rnd(r, 90, 160));
    /* far landscape */
    if (sc.mountain === "cone") s += mountainCone(r, rnd(r, 470, 600), base - 110, rnd(r, 150, 190), rnd(r, 230, 290));
    else if (sc.mountain === "range") s += mountainRange(r, 300, 880, base - 120, rnd(r, 110, 160));
    else if (sc.mountain === "table") s += mountainTable(r, rnd(r, 520, 620), base - 120, rnd(r, 90, 120), rnd(r, 200, 260));
    else if (sc.mountain === "hills") s += hills(r, 240, 900, base - 125, rnd(r, 50, 90));
    if (sc.dunes) s += dunes(r, 380, 900, base - 100, rnd(r, 60, 110));
    if (sc.sea) s += sea(r, 520, 880, base - 95);
    if (sc.spray) { for (var k = 0; k < 4; k++) s += curve(r, [[560 + k * 50, base - 110], [575 + k * 50, base - 190 - k * 10], [590 + k * 50, base - 110]], 2, { opacity: 0.45, jitter: 2 }); }
    if (sc.kasbah) s += kasbah(r, rnd(r, 600, 720), base - 100, rnd(r, 120, 160));
    if (sc.lodge) s += lodge(r, rnd(r, 640, 760), base - 100, rnd(r, 110, 150));
    /* mid: trees on the left, animal on the right */
    var tx = 150;
    sc.trees.forEach(function (t, i) { var h = t === "cypress" ? rnd(r, 170, 230) : rnd(r, 150, 230); s += tree(r, t, tx + i * rnd(r, 60, 110) + rnd(r, -30, 30), base - rnd(r, 60, 110) - i * 8, h); });
    if (sc.animal === "elephant") s += elephant(r, rnd(r, 700, 790), base - 70, rnd(r, 70, 90), r() > 0.5);
    if (sc.animal === "giraffe") s += giraffe(r, rnd(r, 720, 800), base - 75, rnd(r, 95, 120), r() > 0.5);
    s += bush(r, rnd(r, 60, 140), base - 20, rnd(r, 60, 110));
    /* foreground: the golfers and the flag */
    var poses = pick(r, [["stand", "address", "swing", "caddie"], ["caddie", "swing", "address"], ["stand", "swing", "point"], ["swing", "address", "caddie", "point"], ["address", "swing"]]);
    var fh = rnd(r, 150, 175), gx = rnd(r, 190, 250), gap = (560 - gx) / Math.max(poses.length, 2);
    poses.forEach(function (p, i) { s += golfer(r, p, gx + i * gap + rnd(r, -10, 10), base + 20 - i * 3, fh * rnd(r, 0.92, 1.05), p === "address" ? r() > 0.3 : r() > 0.6); });
    s += flag(r, rnd(r, 690, 760), base + 10, rnd(r, 60, 80));
    s += groundWash(r, 60, 880, base + 28);
    return '<svg class="ink ink-cover" viewBox="0 0 900 560" role="img" aria-label="' + esc("Ink illustration of " + c.name) + '"' + (opts.attrs || "") + ">" + s + "</svg>";
  };

  /* ---------- course map ---------- */
  function parSequence(r, holes, par) {
    var n = holes >= 18 ? 18 : 9;
    var target = holes >= 18 ? par : par; /* nine-hole courses carry a nine-hole par */
    var p3 = n === 18 ? 4 : 2, p5 = n === 18 ? 4 : 2;
    var p4 = n - p3 - p5;
    var sum = p3 * 3 + p4 * 4 + p5 * 5;
    while (sum < target) { if (p4 > 0) { p4--; p5++; sum++; } else break; }
    while (sum > target) { if (p4 > 0) { p4--; p3++; sum--; } else break; }
    var seq = [];
    for (var i = 0; i < p3; i++) seq.push(3);
    for (var j = 0; j < p4; j++) seq.push(4);
    for (var k = 0; k < p5; k++) seq.push(5);
    /* shuffle, but never two par 3s or two par 5s in a row and open and close on a 4 or 5 */
    for (var t = 0; t < 200; t++) {
      var a = Math.floor(r() * n), b = Math.floor(r() * n), tmp = seq[a]; seq[a] = seq[b]; seq[b] = tmp;
    }
    for (var u = 0; u < 60; u++) {
      var bad = -1;
      for (var v = 0; v < n; v++) { if ((v > 0 && seq[v] === seq[v - 1] && seq[v] !== 4) || (v === 0 && seq[v] === 3) || (v === n - 1 && seq[v] === 3)) { bad = v; break; } }
      if (bad < 0) break;
      var w2 = Math.floor(r() * n), t2 = seq[bad]; seq[bad] = seq[w2]; seq[w2] = t2;
    }
    return seq;
  }
  S.courseHoles = function (c) {
    var r = seed("holes:" + c.id), pars = parSequence(r, c.holes, c.holes >= 18 ? c.par : c.par);
    var yards = pars.map(function (p) { return p === 3 ? rnd(r, 140, 215) : p === 4 ? rnd(r, 330, 470) : rnd(r, 485, 590); });
    var total = yards.reduce(function (a, b) { return a + b; }, 0);
    if (c.length) { var k = c.length / total; yards = yards.map(function (y) { return y * k; }); }
    return pars.map(function (p, i) { return { hole: i + 1, par: p, yards: Math.round(yards[i] / 5) * 5, dog: p === 3 ? 0 : rnd(r, -1, 1) }; });
  };

  /* A hole-by-hole map: 1000 x 700. */
  S.inkMap = function (c, opts) {
    opts = opts || {};
    var r = seed("map:" + c.id), holes = S.courseHoles(c), n = holes.length;
    var W = 1000, H = 700, s = "";
    s += '<rect width="' + W + '" height="' + H + '" fill="#f4f1ea"/>';
    s += '<rect width="' + W + '" height="' + H + '" filter="url(#ink-paper)" opacity="0.9"/>';
    var cols = n === 18 ? 6 : 3, rows = n === 18 ? 3 : 3;
    var mx = 70, my = 70, cw = (W - mx * 2) / cols, ch = (H - my * 2 - 30) / rows;
    var sc = SCENES[c.scene] || SCENES.parkland;
    var waterHoles = [];
    for (var i = 0; i < n; i++) { if (r() < (sc.sea ? 0.35 : 0.18)) waterHoles.push(i); }
    /* clubhouse near the first tee */
    s += lodge(r, mx + cw * 0.5, my + 40, 70);
    s += '<text x="' + f(mx + cw * 0.5) + '" y="' + f(my + 62) + '" text-anchor="middle" font-family="inherit" font-size="13" fill="' + INK + '" opacity="0.8">Clubhouse</text>';
    holes.forEach(function (h, i) {
      var row = Math.floor(i / cols), col = i % cols;
      if (row % 2 === 1) col = cols - 1 - col; /* snake through the rows */
      var x0 = mx + col * cw, y0 = my + row * ch + 70, down = row % 2 === 0; /* even rows play away from the clubhouse */
      var cx = x0 + cw / 2, len = ch * (h.par === 3 ? 0.42 : h.par === 4 ? 0.7 : 0.86);
      var ty = down ? y0 + ch * 0.1 : y0 + ch * 0.1 + len, gy = down ? ty + len : ty - len; /* tee y, green y */
      var bend = h.dog * cw * 0.22, midx = cx + bend, midy = (ty + gy) / 2 + rnd(r, -10, 10);
      var wdt = h.par === 3 ? 22 : 30;
      /* fairway: an outline around the centreline */
      if (h.par !== 3) {
        var left = [[cx - wdt * 0.6, ty], [midx - wdt, midy], [cx + rnd(r, -6, 6) - wdt * 0.7, gy]];
        var right = [[cx + wdt * 0.6, ty], [midx + wdt, midy], [cx + rnd(r, -6, 6) + wdt * 0.7, gy]];
        s += curve(r, left.concat([right[2], right[1], right[0], left[0], left[1]]), 2.2, { close: true, opacity: 0.85, jitter: 2 });
        s += hatch(r, Math.min(cx, midx) - wdt * 0.5, Math.min(ty, gy) + 10, wdt * 1.6, Math.abs(gy - ty) - 20, 4, 0.05);
      } else {
        s += stroke(r, [[cx, ty], [cx, gy]], 1.4, { opacity: 0.5, dry: true });
      }
      /* tee */
      s += stroke(r, [[cx - 9, ty], [cx + 9, ty]], 4, { opacity: 0.9 });
      s += stroke(r, [[cx - 6, ty + (down ? -8 : 8)], [cx + 6, ty + (down ? -8 : 8)]], 3, { opacity: 0.6 });
      /* green with flag */
      var gx = cx + rnd(r, -6, 6);
      s += blob(r, gx, gy, 20, 14, { n: 8, opacity: 0.18 });
      s += curve(r, [[gx - 20, gy], [gx - 10, gy - 14], [gx + 12, gy - 13], [gx + 21, gy + 2], [gx + 8, gy + 14], [gx - 12, gy + 13], [gx - 20, gy], [gx - 10, gy - 14]], 2.4, { opacity: 0.9, jitter: 1.5 });
      s += flag(r, gx + 4, gy + 2, 26);
      /* bunkers */
      var nb = h.par === 3 ? 2 : h.par === 4 ? 2 : 3;
      for (var b = 0; b < nb; b++) {
        var bx = gx + rnd(r, -36, 36), by = gy + rnd(r, -30, 30);
        if (Math.abs(bx - gx) < 24 && Math.abs(by - gy) < 18) bx += 30;
        s += blob(r, bx, by, rnd(r, 6, 11), rnd(r, 4, 7), { n: 6, opacity: 0.85 });
      }
      if (h.par === 5 && r() > 0.4) s += blob(r, midx + wdt * (r() > 0.5 ? 1.3 : -1.3), midy, 9, 6, { n: 6, opacity: 0.85 });
      /* water */
      if (waterHoles.indexOf(i) !== -1) {
        var wx = cx + (h.dog >= 0 ? -1 : 1) * cw * 0.3, wy = midy + rnd(r, -20, 20);
        for (var k = 0; k < 4; k++) s += curve(r, [[wx - 26, wy + k * 7], [wx - 10, wy + k * 7 - 3], [wx + 8, wy + k * 7 + 2], [wx + 26, wy + k * 7 - 1]], 1.6, { opacity: 0.6, jitter: 0.5 });
      }
      /* trees between holes */
      var nt = 2 + Math.floor(r() * 3);
      for (var t = 0; t < nt; t++) {
        var tx = x0 + (r() > 0.5 ? cw * rnd(r, 0.02, 0.18) : cw * rnd(r, 0.82, 0.98)), tyy = y0 + ch * rnd(r, 0.1, 0.9);
        s += blob(r, tx, tyy, rnd(r, 8, 14), rnd(r, 7, 12), { n: 8, opacity: 0.8 });
      }
      /* number */
      var nx = cx + (h.dog >= 0 ? -1 : 1) * 34, ny = ty + (down ? 14 : -10);
      s += '<circle cx="' + f(nx) + '" cy="' + f(ny) + '" r="11" fill="#f4f1ea" stroke="' + INK + '" stroke-width="1.6" filter="url(#ink-brush)"/>';
      s += '<text x="' + f(nx) + '" y="' + f(ny + 4.5) + '" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="500" fill="' + INK + '">' + h.hole + "</text>";
      s += '<text x="' + f(nx) + '" y="' + f(ny + 24) + '" text-anchor="middle" font-family="inherit" font-size="10" fill="' + INK + '" opacity="0.75">Par ' + h.par + " · " + h.yards + "y</text>";
    });
    /* compass and frame */
    s += stroke(r, [[W - 60, 95], [W - 60, 45]], 2.4) + stroke(r, [[W - 70, 60], [W - 60, 42], [W - 50, 60]], 2.4, { fill: true, close: true });
    s += '<text x="' + (W - 60) + '" y="112" text-anchor="middle" font-family="inherit" font-size="12" fill="' + INK + '">N</text>';
    s += stroke(r, [[mx - 30, my - 30], [W - mx + 30, my - 30], [W - mx + 30, H - my + 30], [mx - 30, H - my + 30]], 1.6, { close: true, opacity: 0.5, dry: true, jitter: 2 });
    return '<svg class="ink ink-map" viewBox="0 0 1000 700" role="img" aria-label="' + esc("Ink course map of " + c.name) + '"' + (opts.attrs || "") + ">" + s + "</svg>";
  };

  /* Inject the shared filters once. */
  if (document.body) document.body.insertAdjacentHTML("afterbegin", S.inkDefs());
  else document.addEventListener("DOMContentLoaded", function () { document.body.insertAdjacentHTML("afterbegin", S.inkDefs()); });
})();
