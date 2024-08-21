//Gradle Code
//JACOB SERVICES LLC

GameTexts = function() {
    this.xml = this.ud = null;
    this.Eb = []
};
GameTexts.prototype = {
    preload: function() {
        game.load.text("gameTexts", "lang.xml")
    },
    create: function() {
        xml = game.cache.getText("gameTexts");
        this.ud = (new DOMParser).parseFromString(xml, "text/xml");
        var a = this.ud.getElementsByTagName("string");
        for (i = 0; i < a.length; i++) null == this.Eb[a.item(i).getAttribute("id")] && (this.Eb[a.item(i).getAttribute("id")] = []), 0 < a.item(i).getElementsByTagName(aa[m]).length && (this.Eb[a.item(i).getAttribute("id")][m] = a.item(i).getElementsByTagName(aa[m])[0].textContent.replace(/\\n/g, "\n"))
    }
};

function ba(a) {
    var b = 35,
        d = game.height - 80 - 40;
    for (a.fontSize = b; a.height > d;) b--, a.fontSize = b
}

function n(a) {
    var b = ca;
    return void 0 == b.Eb[a] || void 0 == b.Eb[a][m] ? "" : b.Eb[a][m]
}
var aa = "en de fr es it pt".split(" "),
    m = 0,
    p = "";
var q = !0; - 1 < navigator.userAgent.indexOf("Windows Phone") && (q = !1);
Phaser.Device._initialize();
var da = Phaser.Device.desktop,
    ea = !1,
    fa = navigator.userAgent || navigator.vendor || window.opera;
if (fa.match(/iPad/i) || fa.match(/iPhone/i) || fa.match(/iPod/i)) ea = !0;
var r = {
        gc: 0,
        Pd: 1,
        wb: 2,
        Od: 3,
        Pb: 4
    },
    t = {
        fc: 10,
        xb: 13,
        Vd: 15,
        nd: 16,
        Td: 17,
        Nd: 18,
        Md: 19,
        Ud: 20,
        Sd: 21,
        Rd: 22,
        od: 23,
        Qd: 24,
        Pb: 50
    },
    u = 0,
    v = 0,
    w = {
        xMin: 0,
        xMax: 0,
        yMin: 0,
        yMax: 0
    },
    ga = "#992226 #BA4490 #DABF2F #E38436 #762D92 #5CB396 #58733C".split(" "),
    x = {
        moveMode: ["spr_level_type_ico", 0],
        timeMode: ["spr_level_type_ico"],
        blocksMode: ["spr_level_type_ico", 3],
        escapeMode: ["spr_level_type_ico", 1],
        fallMode: ["spr_level_type_ico", 2]
    };

function ha(a) {
    return {
        scale: {
            x: [1.25, .9, 1.15, 1],
            y: [.85, 1.1, .95, 1]
        },
        position: {
            y: [a.y + 4, a.y - 4, a.y, a.y],
            x: [a.x]
        },
        time: 500
    }
}

function ia(a) {
    return {
        scale: {
            x: [1.25, .9, 1.15, 1],
            y: [.85, 1.1, .95, 1]
        },
        position: {
            y: [a.y + 4, a.y - 4, a.y, a.y],
            x: [a.x]
        },
        time: 770
    }
}

function ja(a) {
    return {
        scale: {
            x: [1.3, .7, 1.8, 1, 1.05, .95, 1],
            y: [.7, 1.3, .8, 1, .95, 1.05, 1]
        },
        position: {
            y: [a.y + 16, a.y + 6, a.y - 18, a.y, a.y + 2, a.y - 1.2, a.y],
            x: [a.x]
        },
        time: 1100,
        delay: 350
    }
}

function y(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
Array.prototype.contains = function(a) {
    for (var b = this.length; b--;)
        if (this[b] === a) return !0;
    return !1
};

function z(a, b, d) {
    null != b && (a.anchor.x = Math.round(a.width * b) / a.width);
    null != d && (a.anchor.y = Math.round(a.height * d) / a.height)
};

var partnerName = "gradle_code";

function ka() {
    var a;
    null == a && (a = !1);
    if (!game.device.desktop || a) document.getElementById("wrongRotation").style.display = "block"
}

function la() {
    var a;
    null == a && (a = !1);
    if (!game.device.desktop || a) document.getElementById("wrongRotation").style.display = "none"
};
var A = [{
        na: "clck",
        fileName: "Click"
    }, {
        na: "happymmnt",
        fileName: "happy_moment",
        bb: 2
    }, {
        na: "sndSwp",
        fileName: "geff/swap",
        bb: 2
    }, {
        na: "sndSwpB",
        fileName: "geff/swap_back",
        bb: 2
    }, {
        na: "sndStar1",
        fileName: "geff/Star1",
        bb: 2
    }, {
        na: "sndStar2",
        fileName: "geff/Star2",
        bb: 2
    }, {
        na: "sndStar3",
        fileName: "geff/Star3",
        bb: 2
    }, {
        na: "spectFlame",
        fileName: "geff/spectrumFlame1",
        bb: 2
    }, {
        na: "sndBombCreate",
        fileName: "bombs/bombExplosion2",
        bb: 2
    }, {
        na: "sndExpl1",
        fileName: "jeweldestroy/Match1"
    }, {
        na: "sndExpl2",
        fileName: "jeweldestroy/Match2"
    },
    {
        na: "sndExpl3",
        fileName: "jeweldestroy/Match3"
    }, {
        na: "sndExpl4",
        fileName: "jeweldestroy/Match4"
    }, {
        na: "sndExpl5",
        fileName: "jeweldestroy/Match5"
    }, {
        na: "sndWin",
        fileName: "Victory1"
    }, {
        na: "sndLose",
        fileName: "Fail"
    }
];
var ca = new GameTexts;

function StateSplash() {}
StateSplash.prototype = {
    preload: function() {
        game.load.crossOrigin = "Anonymous";
        game.stage.backgroundColor = "#000000";
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = !0;
		game.device.desktop = true;
        game.device.desktop || window.addEventListener("resize", function() {
            na()
        });
        this.scale.refresh();
        game.load.image("loading", "images/loading.png");
        game.load.image("bgImg", "images/background.png");
        game.load.image("gameSplash", "images/background.png");
        ca.preload();
        game.device.desktop && (game.input.mspointer.capture = !1);
        oa()
    },
    create: function() {
        var a = game.add.group(),
            b = this.add.sprite(game.width / 2, game.height / 2, "loading");
        z(b, .5, .5);
        a.addChild(b);
        a.alpha = 0;
        game.add.tween(a).to({
            alpha: 1
        }, 750, Phaser.Easing.Linear.None, !0, 0, 0, !1);
        a = navigator.If || navigator.language;
        a = a.toLowerCase();
        p = "en"; - 1 !== a.indexOf("fr") && (p = "fr"); - 1 !== a.indexOf("it") && (p = "it"); - 1 !== a.indexOf("de") && (p = "de"); - 1 !== a.indexOf("es") && (p = "es"); - 1 !== a.indexOf("pt") && (p = "pt");
        m = aa.indexOf(p);
        ca.create();
        na();
        game.time.events.add(1 * Phaser.Timer.SECOND, this.Id, this);
    },
    Id: function() {
        game.device.desktop || !1 !== na() ? (console.log("send", "event", "basic", "started", partnerName, 1), oa(), game.state.start("StatePreload")) : game.time.events.add(Phaser.Timer.SECOND, this.Id, this)
    }
};

function na() {
    var a = !0;
    ea ? document.documentElement.clientWidth > document.documentElement.clientHeight ? (ka(), game.onPause.dispatch(), a = !1) : (la(), game.onResume.dispatch()) : window.innerWidth > window.innerHeight ? (ka(), game.onPause.dispatch(), a = !1) : (la(), game.onResume.dispatch());
    return a
}

function oa() {
    resolutionY = Math.floor(window.innerHeight / window.innerWidth * resolutionX);
    resolutionY > pa && (resolutionY = pa);
    resolutionY < qa && (resolutionY = qa);
    game.scale.setGameSize(resolutionX, resolutionY);
    game.scale.refresh()
};

function StatePreload() {}
StatePreload.prototype = {
    preload: function() {
        game.stage.backgroundColor = "#000000";
        var a;
        try {
            if (a = localStorage.getItem("gradle_stk"), parsedData = JSON.parse(a), null != parsedData) {
                var b = parsedData.scrs;
                if (null !== b)
                    for (a = 0; 60 > a; a++) B.oa[a] = b[a];
                q && (b = parsedData.snd, 1 == b || 0 == b) && (C.Ca = b)
            }
        } catch (d) {}
        sa(this);
        this.Fa.alpha = 0;
        game.add.tween(this.Fa).to({
            alpha: 1
        }, 350, Phaser.Easing.Linear.None, !0, 0, 0, !1);
        game.load.setPreloadSprite(this.Fa.Je);
        a = [
            ["gameCharSpectrum", "IMG_bombsSpectrum.png"],
            ["gameCharPearl", "IMG_pearl.png"],
            ["gmTileImg", "IMG_policko.png"],
            ["topBar1", "IMG_topbar.png"],
            ["topBar2", "IMG_topbar2.png"],
            ["topBar3", "IMG_topbar3.png"],
            ["dialWin", "IMG_dialogwindow.png"],
            ["game_logo", "gameLogo.png"],
            ["shockWv", "expl_ShockWave.png"],
            ["explCross", "expl_ciara.png"],
            ["rotGlw", "IMG_RotatingGlow.png"],
            ["blockParticle1", "break_blocks_part1.png"],
            ["blockParticle2", "break_blocks_part2.png"],
            ["blockParticle3", "break_blocks_part3.png"],
            ["imgBblSmall", "IMG_bubbleMala.png"],
            ["eff_spect", "SprEffectSpectrumSplash.png"],
            ["msg_happy", "IMG_happyMoment.png"],
            ["msg_noMoreMoves", "IMG_noMoreMoves.png"],
            ["bblbtn", "IMG_bubble.png"],
            ["playbtn", "IMG_playpolicko.png"],
            ["btnlevel", "level.png"],
            ["locklevel", "locklevel.png"],
            ["timeBlue", "IMG_timeprazdny.png"],
            ["timeYell", "IMG_timeplny.png"]
        ];
        for (b = 0; b < a.length; b++) game.load.image(a[b][0], "images/" + a[b][1]);
        a = [
            ["gameCharactersImg", "SPR_characters.png", 67, 60],
            ["gameCharBomb", "SPR_bombsAround.png",
                62, 60
            ],
            ["gameCharBombCross", "SPR_bombsCross.png", 61, 60],
            ["flasksSpawnWhirpool", "SPR_whirpool.png", 70, 70],
            ["gameCharFlasks", "SPR_flacons.png", 64, 60],
            ["ui_buttons", "SPR_icons.png", 32, 22],
            ["ui_buttons2", "SPR_icons2.png", 54, 41],
            ["blockImg", "SPR_blocks.png", 73, 73],
            ["starBig", "SPR_stars.png", 103, 95],
            ["starSmall", "SPR_levelstars.png", 27, 24],
            ["starTopBar", "SPR_topbarstars.png", 40, 37],
            ["spr_btn", "SPR_buttons.png", 195, 152],
            ["spr_level_type_ico", "SPR_topbar1.png", 23, 24],
            ["spr_btn_sipka_refr", "SPR_buttonArrowRefresh.png", 80, 58],
            ["spr_levelIcons", "SPR_dialog1.png", 58, 50]
        ];
        for (b = 0; b < a.length; b++) game.load.spritesheet(a[b][0], "images/" + a[b][1], a[b][2], a[b][3]);
        if (q && q)
            for (game.load.audio("musicMenu", ["sounds/menuMusic.ogg", "sounds/menuMusic.mp3"]), game.load.audio("musicGame", ["sounds/gameMusic.ogg", "sounds/gameMusic.mp3"]), b = 0; b < A.length; b++) game.load.audio(A[b].na, ["sounds/" + A[b].fileName + ".ogg", "sounds/" + A[b].fileName +
                ".mp3"
            ]);
        game.load.json("levelsData", "levels.json");
        game.load.onFileComplete.add(this.fileComplete, this)
    },
    fileComplete: function() {},
    create: function() {
        ta(this)
    },
    gd: function() {
        game.state.start("StateGame")
    }
};

function ua() {
    var a = [255, 255, 255],
        b = game.add.bitmapData(192, 30);
    b.fill(a[0], a[1], a[2]);
    return b
}

function va() {
    var a = game.add.bitmapData(200, 30);
    a.line(0, 2, 200, 2, "#FFFFFF", 4);
    a.line(0, 28, 200, 28, "#FFFFFF", 4);
    a.line(2, 0, 2, 30, "#FFFFFF", 4);
    a.line(198, 0, 198, 30, "#FFFFFF", 4);
    return a
}

function wa(a) {
    game.add.tween(a.Fa.Ke).to({
        alpha: 0
    }, 250, Phaser.Easing.Linear.None, !0, 0);
    game.add.tween(a.Fa.zf).to({
        alpha: 1
    }, 250, Phaser.Easing.Linear.None, !0, 0)
}

function sa(a) {
    a.Fa = game.add.group();
    var b = game.add.sprite(game.width / 2, game.height / 2, "gameSplash");
    z(b, .5, .5);
    a.Fa.addChild(b);
    700 > resolutionY && (b.y += 30);
    b = game.make.sprite(0, game.height - 70, va());
    b.x = (game.width - b.width) / 2;
    z(b, 0, .5);
    a.Fa.Ke = a.Fa.addChild(b);
    var d = game.make.sprite(4, 0, ua());
    z(d, 0, .5);
    a.Fa.Je = b.addChild(d);
    var e = game.make.text(Math.floor(game.width / 2), b.y, n(26).toUpperCase(), {
        font: "30px gameFont",
        fill: "#fff"
    });
    z(e, .5, .5);
    a.Fa.zf = a.Fa.addChild(e);
    e.alpha = 0;
    e.Bd = game.add.tween(e.scale).to({
        x: 1.05,
        y: 1.05
    }, 150, Phaser.Easing.Linear.None, !0, 700);
    e.Cd = game.add.tween(e.scale).to({
        x: 1,
        y: 1
    }, 150, Phaser.Easing.Linear.None, !1, 0);
    e.Bd.onComplete.add(function() {
        e.Cd.start()
    }, a);
    e.Cd.onComplete.add(function() {
        e.Bd.start()
    }, a)
}

function ta(a) {
    wa(a);
	game.state.start("StateGame");
    /*game.input.onDown.addOnce(function() {
        game.add.tween(this.Fa).to({
            alpha: 0
        }, 150, Phaser.Easing.Linear.None, !0, 0);
		
        game.time.events.add(200, function() {
            this.gd()
        }, this);
    }, a);
	*/
};
Buttons = function() {};
Buttons.prototype = {
    constructor: Buttons,
    create: function() {},
    Pc: function(a) {
        if (a.jb) {
            if (!game.input.pointer1.isDown) {
                a.tint = 10078449;
                for (c in a.children) a.getChildAt(c).tint = 10078449;
                null != a.ub && xa(a, !0)
            }
            a.zc = !0
        }
    },
    Oc: function(a) {
        if (a.jb) {
            a.tint = 16777215;
            for (c in a.children) a.getChildAt(c).tint = 16777215;
            null != a.ub && xa(a, !1);
            a.zc = !1
        }
    },
    Qc: function(a) {
        if (a.jb) {
            a.tint = 16777215;
            for (c in a.children) a.getChildAt(c).tint = 16777215;
            null != a.ub && xa(a, !1);
            a.zc && (a.zc = !1, a.Sc.call(a.Tc, a));
            void 0 !== a.Xb && !1 !== a.Xb ||
                a.scale.set(a.Yc || 1, a.Zc || 1);
            a.cachedTint = -1
        }
    },
    Nc: function(a) {
        if (a.jb) {
            a.tint = 10078449;
            for (c in a.children) a.getChildAt(c).tint = 10078449;
            null != a.ub && xa(a, !0);
            void 0 !== a.Xb && !1 !== a.Xb || a.scale.set(.95 * a.Yc || .95, .95 * a.Zc || .95);
            a.cachedTint = -1;
            a.zc = !0
        }
    }
};

function xa(a, b) {
    for (var d = 0; d < a.ub.length; d++) b ? a.getChildAt(a.ub[d]).fill = "#CC9E6A" : a.getChildAt(a.ub[d]).fill = a.getChildAt(a.ub[d]).Kf
}

function ya(a, b, d, e) {
    b = game.add.button(game.width / 2, b, "playbtn");
    b.jb = !0;
    b.frame = 0;
    var f = game.make.sprite(0, 0, "spr_btn", 0);
    z(f, .5, .5);
    b.yc = b.addChild(f);
    b.Te = "playbtn";
    b.Se = null;
    b.Sc = d;
    b.Tc = e || a;
    b.events.onInputUp.add(a.Qc, a);
    b.events.onInputDown.add(a.Nc, a);
    b.events.onInputOver.add(a.Pc, a);
    b.events.onInputOut.add(a.Oc, a);
    z(b, .5, .5);
    return b
}

function D(a, b, d, e, f, g, h, k) {
    var l = game.add.button(b, d);
    l.anchor.set(.5);
    l.jb = !0;
    "string" == typeof g ? l.frameName = g : l.frame = g;
    b = game.make.sprite(0, 0, e);
    z(b, .5, .5);
    l.rd = l.addChild(b);
    f = game.make.sprite(0, 0, f, g);
    z(f, .5, .5);
    l.qa = l.addChild(f);
    l.Sc = h;
    l.Tc = k || a;
    l.events.onInputUp.add(a.Qc, a);
    l.events.onInputDown.add(a.Nc, a);
    l.events.onInputOver.add(a.Pc, a);
    l.events.onInputOut.add(a.Oc, a);
    l.Xb = !0;
    l.Cc = !1;
    l.Mc = game.add.tween(l.rd.scale).to({
        x: [1.07, 1, .93, 1],
        y: [.93, 1, 1.07, 1]
    }, y(1800, 2100), Phaser.Easing.Linear.None, !1, 0, 0);
    l.Mc.onComplete.add(function() {
        !0 === l.Cc && l.Mc.start()
    });
    l.qa.Ub = 0;
    l.$c = game.add.tween(l.qa).to({
        y: [l.qa.Ub - 2, l.qa.Ub, l.qa.Ub + 2, l.qa.Ub]
    }, y(1500, 2E3), Phaser.Easing.Linear.None, !1, 0, 0);
    l.$c.onComplete.add(function() {
        !0 === l.Cc && l.$c.start()
    });
    l.Ya = function() {
        l.scale.set(.8);
        l.rd.scale.set(1);
        l.qa.y = l.qa.Ub
    };
    l.$a = function() {
        l.Cc = !0;
        l.Mc.start();
        l.$c.start()
    };
    l.ab = function() {
        l.Cc = !1
    };
    return l
};
Anims = function() {};
Anims.prototype = {
    preload: function() {},
    create: function() {}
};

function za(a, b, d, e, f) {
    a = Aa(a);
    a.angle = 0;
    a.scale.set(.15);
    a.alpha = 1;
    a.Aa(b, d);
    game.add.tween(a.scale).to({
        x: .7 * E.j.ba.scale.x,
        y: .7 * E.j.ba.scale.x
    }, 250, Phaser.Easing.Linear.None, !0);
    game.add.tween(a).to({
        x: e,
        y: f
    }, 500, Phaser.Easing.Sinusoidal.Out, !0).onComplete.addOnce(function(a) {
        a.kill()
    })
}

function Ba(a, b, d, e, f) {
    var g = E.j.ja[0].Fb.worldPosition.x - E.j.ba.worldPosition.x,
        h = E.j.ja[0].Fb.worldPosition.y - E.j.ba.worldPosition.y - 13;
    a = Aa(a);
    a.angle = 0;
    a.scale.set(.15);
    a.alpha = 1;
    a.Aa(g, h);
    a.rotation = -10;
    game.add.tween(a.scale).to({
        x: 1,
        y: 1
    }, 400, Phaser.Easing.Linear.None, !0);
    b = game.add.tween(a).to({
        x: b,
        y: d,
        rotation: 0
    }, 400, Phaser.Easing.Linear.None, !0);
    b.onComplete.addOnce(function(a) {
        a.kill()
    });
    b.onComplete.addOnce(e, f)
}

function Aa(a) {
    var b = E.j.ba.Hd.getFirstDead();
    null === b && (b = E.j.ba.Hd.create(0, 0, "eff_spect"), b.anchor.set(.5), b.Aa = function(a, e) {
        b.reset(a, e)
    }.bind(a));
    b.scale.set(0);
    game.tweens.removeFrom(b, !0);
    return b
}

function Ca(a) {
    var b = E.j.Dd.getFirstDead();
    null === b && (b = E.j.Dd.create(0, 0, "msg_happy"));
    b.loadTexture(a);
    b.anchor.set(.5);
    b.scale.set(1);
    b.alpha = 1;
    b.reset(game.width / 2, game.height / 2);
    game.tweens.removeFrom(b, !0);
    b.angle = 180;
    game.add.tween(b).to({
        angle: 0
    }, 1500, Phaser.Easing.Elastic.Out, !0);
    var d = 1E3;
    "msg_noMoreMoves" === a && (d = 1200);
    game.add.tween(b).to({
        y: b.y - 200
    }, d, Phaser.Easing.Quadratic.In, !0, 600).onComplete.addOnce(function(a) {
        a.kill()
    });
    d = 900;
    "msg_noMoreMoves" === a && (d = 1200);
    game.add.tween(b).to({
            alpha: 0
        },
        400, Phaser.Easing.Linear.None, !0, d)
}

function Da(a, b, d, e) {
    var f = E.j.ba.Gd.getFirstDead();
    null === f && (f = game.make.text(0, 3, "0", {
        font: "35px gameFont",
        fill: "#FFFFFF"
    }), E.j.ba.Gd.addChild(f));
    f.fill = ga[e];
    f.setText(d);
    f.anchor.set(.5);
    f.scale.set(0);
    f.reset(a, b);
    game.tweens.removeFrom(f, !0);
    a = game.add.tween(f).to({
        y: f.y - 50
    }, 1E3, function(a) {
        return 1 > (a *= 2) ? .5 * a * a * (3 * a - 2) : .5 * ((a -= 2) * a * (3 * a + 2) + 2)
    }, !0);
    game.add.tween(f.scale).to({
        x: [1, 0],
        y: [1, 0]
    }, 1E3, Phaser.Easing.Linear.None, !0);
    a.onComplete.addOnce(function(a) {
        a.kill()
    })
}

function Ea(a) {
    var b = E.j.ba.sd.getFirstDead();
    null === b && (b = E.j.ba.sd.create(0, 0, "explCross"), b.Aa = function(a, e) {
        var f = F(a, e);
        b.reset(f[0], f[1]);
        b.Ga(a, e)
    }.bind(a), b.Ga = function(a, e) {
        b.ea = a;
        b.ga = e
    }.bind(a));
    b.scale.set(0);
    game.tweens.removeFrom(b, !0);
    return b
}

function Fa(a, b, d) {
    for (var e = 0; 3 > e; e++) {
        var f = Ga(a);
        f.tint = 65535;
        f.Aa(d, b);
        f.alpha = .9;
        f.scale.set(.05);
        game.add.tween(f.scale).to({
            x: 1,
            y: 1
        }, 200, Phaser.Easing.Linear.None, !0, 100 * e);
        game.add.tween(f).to({
            alpha: 0
        }, 400, Phaser.Easing.Linear.None, !0, 450).onComplete.addOnce(function(a) {
            a.kill()
        }, a)
    }
}

function Ha(a, b, d) {
    a = Ga(a);
    a.tint = 65535;
    a.Aa(d, b);
    a.alpha = 1;
    a.scale.set(.03);
    b = game.add.tween(a).to({
        alpha: 0
    }, 250, Phaser.Easing.Linear.None, !0, 250);
    game.add.tween(a.scale).to({
        x: .38,
        y: .38
    }, 500, Phaser.Easing.Linear.None, !0);
    b.onComplete.addOnce(function(a) {
        a.kill()
    })
}

function Ia(a, b, d) {
    a = Ga(a);
    a.Aa(d, b);
    a.alpha = 1;
    a.scale.set(.35);
    b = game.add.tween(a).to({
        alpha: 0
    }, 400, Phaser.Easing.Linear.None, !0, 200);
    game.add.tween(a.scale).to({
        x: 0,
        y: 0
    }, 600, Phaser.Easing.Linear.None, !0);
    b.onComplete.addOnce(function(a) {
        a.kill()
    })
}

function Ga(a) {
    var b = E.j.ba.qd.getFirstDead();
    null === b && (b = E.j.ba.qd.create(0, 0, "shockWv"), z(b, .5, .5), b.Aa = function(a, e) {
        var f = F(a, e);
        b.reset(f[0], f[1]);
        b.Ga(a, e)
    }.bind(a), b.Ga = function(a, e) {
        b.ea = a;
        b.ga = e
    }.bind(a));
    b.tint = 16777215;
    game.tweens.removeFrom(b, !0);
    return b
};

function Ja() {
    this.ma = this.k = this.o = this.j = this.fa = this.n = this.aa = this.ca = this.q = this.za = null;
    this.Kc = []
}
Ja.prototype = {
    preload: function() {},
    create: function() {
        this.ma = new Buttons;
        this.ma.create();
        G(-1, "lvlLocked");
        G(0, "lvlUnl_0");
        G(1, "lvlUnl_1");
        G(2, "lvlUnl_2");
        G(3, "lvlUnl_3");
        Ka(this);
        La(this);
        Ma(this);
        Na(this);
        Oa(this);
        this.fa = game.add.group();
        this.fa.name = "tutorialScreen";
        var a = game.make.sprite(game.width / 2, 0, "dialWin");
        z(a, .5, 0);
        a.y = Math.floor((game.height - a.height) / 2);
        a.jb = !0;
        a.events.onInputDown.add(this.Bf, this);
        this.fa.window = this.fa.addChild(a);
        var b = game.make.text(0, 30, n("GOAL"), {
            font: "80px gameFont",
            fill: "#FFFFFF"
        });
        z(b, .5, 0);
        this.fa.Jf = a.addChild(b);
        b = game.make.text(0, Math.floor(a.height / 2) + 10, "Bring 3\npearls down", {
            font: "40px gameFont",
            fill: "#FFFFFF",
            align: "center",
            wordWrap: !0,
            wordWrapWidth: .9 * a.width
        });
        b.lineSpacing = -3;
        z(b, .5, .5);
        this.fa.Ld = a.addChild(b);
        b = game.make.sprite(0, a.height - 15, "btnlevel");
        z(b, .5, .5);
        this.fa.Ef = a.addChild(b);
        a = game.make.sprite(0, 0, "spr_levelIcons", 0);
        z(a, .5, .5);
        this.fa.Oa = b.addChild(a);
        this.fa.lb = this.wf;
        this.fa.Xa = this.xf;
        this.fa.gb = this.ye;
        this.fa.Ua = this.ze;
        this.fa.visible = !1;
        Pa(this);
        Qa(this);
        this.Ac = game.add.group();
        game.input.onDown.add(this.Fe, this);
        game.input.onUp.add(this.Ge, this);
        game.input.mouse.mouseWheelCallback = this.Qe;
        game.input.mouse.callbackContext = this
    },
    update: function() {
        if (!1 !== this.j.visible) {
            0 < B.Ba && (0 === B.Ba % 2 ? (this.j.Gb += B.Ba / 2, B.Ba -= B.Ba / 2) : (this.j.Gb += B.Ba % 2, B.Ba -= B.Ba % 2));
            var a = this.j.Gb;
            this.j.ac.setText(a);
            z(this.j.ac, .5, .5);
            var b = Math.floor(a / B.e.mb * 1E3) / 1E3,
                d = 0,
                e = 0;
            1 < b && (b = 1, d = Math.floor((a - B.e.mb) / (B.e.$b - B.e.mb) * 1E3) / 1E3,
                1 < d && (d = 1, e = Math.floor((a - B.e.$b) / (B.e.dd - B.e.$b) * 1E3) / 1E3, 1 < e && (e = 1)));
            this.j.Ia[0].cropRect.width = 3 + 34 * b;
            this.j.Ia[0].updateCrop();
            this.j.Ia[1].cropRect.width = 3 + 34 * d;
            this.j.Ia[1].updateCrop();
            this.j.Ia[2].cropRect.width = 3 + 34 * e;
            this.j.Ia[2].updateCrop()
        }!1 !== this.n.visible && (null !== this.pc && Ra(this), 0 != this.la && (0 < this.la && 0 < this.la - 2 ? this.la -= 2 : 0 > this.la && 0 > this.la + 2 ? this.la += 2 : this.la = 0, Ra(this)));
        if (!1 !== this.k.visible) {
            if (!0 === this.k.Ec) {
                this.k.Dc += Date.now() - this.k.Fd;
                a = this.k.Dc / this.k.gf;
                1 < a && (a = 1);
                var b = this.k.ac,
                    d = n("SCORE").toUpperCase() + "\n" + Math.floor(this.k.ff * a),
                    f, g;
                void 0 !== d && null !== d && b.setText(d);
                void 0 === f && (f = .5);
                void 0 === g && (g = .5);
                z(b, f, g);
                1 === a && (this.k.Ec = !1)
            }
            this.k.Fd = Date.now()
        }
        0 < this.kc && (g = this.kc / this.Ab * this.Ab, f = game.rnd.integerInRange(-g, g), g = game.rnd.integerInRange(-g, g), game.camera.x = f, game.camera.y = g, this.kc--, 0 >= this.kc && (game.world.setBounds(this.Ja.x, this.Ja.x, this.Ja.width, this.Ja.height), this.Ja = null));
        Sa(this);
        Ta(this)
    },
    Qe: function() {
        !0 === this.n.visible &&
            (game.input.mouse.wheelDelta === Phaser.Mouse.WHEEL_UP ? 0 < this.la ? 50 > this.la && (this.la += 7) : this.la = 7 : 0 > this.la ? -50 < this.la && (this.la -= 7) : this.la = -7)
    },
    Me: function() {
		gradle.event('btn_play');
        H("clck");
        I(E, this.n)
    },
    Oe: function() {
		//console.trace();
        H("clck");
        I(this, this.ca)
    },
    Pe: function() {
		console.log('btn_sound');
		var gradle_menu = this;
		if( gradle.wait ){
			H("clck");
			Ua();
			gradle_menu.q.Rb.qa.frame = C.Ca ? 2 : 3;
			gradle.wait = false;
		}
        setTimeout(function(){
			gradle.wait = true;
		},600);
    },
    Ne: function() {
		//console.trace();
        H("clck");
        //I(this, this.aa);
		gradle.event('btn_share');
    },
    sf: function() {
        J(this.q, !1);
        this.q.Na.Bc = !0;
        this.q.Na.rb.start();
        this.q.Na.y = this.q.Na.ha;
        this.q.af.scale.set(0);
        for (var a = 0; a < this.q.ra.length; a++) this.q.ra[a].y = this.q.ra[a].ha,
            this.q.ra[a].Ya(), this.q.ra[a].$a();
        q && (this.q.Rb.qa.frame = C.Ca ? 2 : 3);
        K(this.q)
    },
    tf: function() {
        J(this.q, !0)
    },
    ue: function(a) {
        L(this.q);
        J(this.q, !1);
        this.q.Ha = a;
        for (a = 0; a < this.q.ra.length; a++) this.q.ra[a].ab();
        this.q.Na.Bc = !1
    },
    ve: function() {
        this.q.visible = !1
    },
    De: function() {
		//console.trace();
        H("clck");
        !0 === this.ca.ad ? I(this, this.o) : I(this, this.q)
    },
    of: function() {
        J(this.ca, !1);
        this.ca.backButton.alpha = 0;
        this.ca.backButton.y = this.ca.backButton.ha;
        this.ca.backButton.Ya();
        this.ca.backButton.$a();
        this.ca.Ce.alpha = 0;
        K(this.ca)
    },
    pf: function() {
        J(this.ca, !0)
    },
    qe: function(a) {
        L(this.ca);
        J(this.ca, !1);
        this.ca.Ha = a;
        this.ca.backButton.ab()
    },
    re: function() {
        this.ca.visible = !1;
        this.ca.ad = !1
    },
    Xd: function() {
		//console.trace();
        H("clck");
        I(this, this.q)
    },
    hf: function() {
        J(this.aa, !1);
        this.aa.backButton.alpha = 0;
        this.aa.backButton.y = this.aa.backButton.ha;
        this.aa.backButton.Ya();
        this.aa.backButton.$a();
        this.aa.Ae.alpha = 0;
        this.aa.fe.alpha = 0;
        K(this.aa)
    },
    jf: function() {
        J(this.aa, !0)
    },
    ke: function(a) {
        L(this.aa);
        J(this.aa, !1);
        this.aa.Ha = a;
        this.aa.backButton.ab()
    },
    le: function() {
        this.aa.visible = !1
    },
    Fe: function(a) {
        this.n.visible && (this.Xc = a.y, this.ce = this.n.ta.y, this.pc = 0)
    },
    Ge: function(a) {
        this.Af = Math.abs(this.Xc - a.y);
        this.pc = this.Xc = null
    },
    Ee: function() {
		//console.trace();
        H("clck");
        I(E, this.q)
    },
    He: function(a) {
        -1 === B.oa[a.Ad - 1] || 15 < this.Af || (gradle.event('btn_select_level'),H("clck"), B.va = a.Ad, Va(this))
    },
    qf: function() {
        J(this.n, !1);
        this.n.ta.alpha = 0;
        this.n.backButton.alpha = 0;
        this.n.backButton.y = this.n.backButton.ha;
        this.n.backButton.Ya();
        this.n.backButton.$a();
        if (!0 === this.n.md)
            for (this.n.md = !1, i = 0; i < this.n.ta.length; i++) - 1 !==
                B.oa[i] && (this.n.ta.getChildAt(i).Le.visible = !0, B.oa[i] > B.e.Va[i + 1].maxScore ? this.n.ta.getChildAt(i).loadTexture(game.cache.getBitmapData("lvlUnl_3")) : B.oa[i] > B.e.Va[i + 1].minScore ? this.n.ta.getChildAt(i).loadTexture(game.cache.getBitmapData("lvlUnl_2")) : B.oa[i] > B.e.Va[i + 1].midScore ? this.n.ta.getChildAt(i).loadTexture(game.cache.getBitmapData("lvlUnl_1")) : this.n.ta.getChildAt(i).loadTexture(game.cache.getBitmapData("lvlUnl_0")));
        K(this.n)
    },
    rf: function() {
        J(this.n, !0)
    },
    se: function(a) {
        L(this.n);
        J(this.n, !1);
        this.n.Ha = a;
        this.n.backButton.ab()
    },
    te: function() {
        this.n.visible = !1
    },
    Bf: function() {
		gradle.event('btn_start_game');
        H("clck");
        I(this, this.j);
        game.time.events.add(300, B.gd, B)
    },
    wf: function() {
        J(this.fa, !1);
        var a = "";
        !0 === B.e.yb && (this.fa.Oa.frame = 2, this.fa.Oa.x = -1, a = n("GET") + B.e.mb + " " + n("POINTS"));
        !0 === B.e.zb && (this.fa.Oa.frame = 4, this.fa.Oa.x = -3, a = n("GET") + B.e.mb + " " + n("POINTS"));
        !0 === B.e.hc && (this.fa.Oa.frame = 3, this.fa.Oa.x = -3, a = n("GOAL_BLOCK"));
        !0 === B.e.jc && (this.fa.Oa.frame = 0, this.fa.Oa.x = -2, a = n("CATCH") + " " + B.e.Ma + n("ESC"));
        !0 === B.e.ic && (this.fa.Oa.frame = 1, this.fa.Oa.x = 0, a = n("BRING") + " " + B.e.Ea + n("PEARLS"));
        this.fa.Ld.setText(a);
        z(this.fa.Ld, .5, .5);
        Wa(this, this.fa, 200)
    },
    xf: function() {
        J(this.fa, !0)
    },
    ye: function(a) {
        Xa(this, this.fa);
        J(this.fa, !1);
        this.fa.Ha = a
    },
    ze: function() {
        this.fa.visible = !1
    },
    je: function() {
		//console.trace();
        H("clck");
        M(C, 0);
        I(E, this.n);
        N = r.gc;
        O = t.fc;
        Ya(B)
    },
    ge: function() {
		gradle.event('btn_next_level');
        H("clck");
        this.k.Ic && (B.va += 1);
        Va(this)
    },
    he: function() {
		//console.trace();
        H("clck");
        this.k.Ic ? Va(this) : (I(this, this.q), N = r.gc, O = t.fc, Ya(B))
    },
    kf: function() {
        J(this.k, !1);
        this.k.Ie.setText(n("LEVEL").toUpperCase() + " " + B.va);
        this.k.ac.setText(n("SCORE").toUpperCase() + "\n0");
        this.k.$d.setText(n("BEST").toUpperCase() + "\n" + B.oa[B.va - 1]);
        var a = B.qc;
        a > this.k.Mb.length && (a = this.k.Mb.length);
        for (var b = 0; b < this.k.Mb.length; b++) {
            var d = this.k.Mb[b];
            d.scale.set(1.2);
            d.alpha = 0;
            d.x = 0;
            d.y = 200;
            d.rotation = -5;
            if (1 === B.Da && b < a)
                for (d = 0; d < this.k.Mb[b].Za.length; d++) this.k.Mb[b].Za[d].start()
        }
        this.k.Ic = 1 === B.Da;
        60 === B.va && (this.k.Ic = !1);
        !0 === this.k.Ic ? (this.k.Tb.qa.loadTexture("spr_btn_sipka_refr", 0), this.k.Sb.qa.loadTexture("ui_buttons",
            14)) : (this.k.Tb.qa.loadTexture("spr_btn_sipka_refr", 1), this.k.Sb.qa.loadTexture("ui_buttons", 2));
        this.k.Tb.Ya();
        this.k.Tb.$a();
        this.k.Sb.Ya();
        this.k.Sb.$a();
        this.k.Rc.Ya();
        this.k.Rc.$a();
        this.k.Dc = 0;
        this.k.ff = B.La;
        this.k.Ec = !1;
        Wa(this, this.k, 250);
        this.k.visible = !0
    },
    lf: function() {
        J(this.k, !0);
        game.time.events.add(200, function() {
            this.k.Ec = !0
        }, this)
    },
    me: function(a) {
        Xa(this, this.k);
        J(this.k, !1);
        this.k.Ha = a;
        this.k.Tb.ab();
        this.k.Sb.ab();
        this.k.Rc.ab()
    },
    ne: function() {
        this.k.visible = !1
    },
    We: function() {
		//console.trace();
        H("clck");
        Va(this)
    },
    Ue: function() {
		gradle.event('btn_continue');
        H("clck");
        var a = B;
        a.isPaused = !1;
        var b = a.Vc;
        a.Vc = null;
        null !== b && a[b].call(a);
        N = r.wb;
        I(this, this.j)
    },
    Ve: function() {
		//console.trace();
        H("clck");
        I(this, this.ca);
        this.ca.ad = !0
    },
    Ye: function() {
		//console.trace();
		console.log('btn_pause_sound');
		if(gradle.wait){
			H("clck");
			Ua();
			this.o.Rb.qa.frame = C.Ca ? 2 : 3;
			gradle.wait= false;
		}
		setTimeout(function(){
			gradle.wait = true;
		},600);
    },
    Xe: function() {
		//console.trace();
        H("clck");
        M(C, 0);
        N = r.gc;
        O = t.fc;
        I(this, this.n);
        Ya(B);
        Za(B, 3)
    },
    uf: function() {
        J(this.o, !1);
        this.o.Na.Bc = !0;
        this.o.Na.rb.start();
        this.o.Na.y = this.o.Na.ha;
        this.o.be.scale.set(0);
        this.o.Ze.scale.set(0);
        for (var a = 0; a < this.o.ra.length; a++) this.o.ra[a].y = this.o.ra[a].ha,
            this.o.ra[a].Ya(), this.o.ra[a].$a();
        q && (this.o.Rb.qa.frame = C.Ca ? 2 : 3);
        K(this.o)
    },
    vf: function() {
        J(this.o, !0)
    },
    we: function(a) {
        L(this.o);
        J(this.o, !1);
        this.o.Ha = a;
        for (a = 0; a < this.o.ra.length; a++) this.o.ra[a].ab()
    },
    xe: function() {
        this.o.visible = !1
    },
    td: function() {
		gradle.event('btn_pause');
        H("clck");
        B.isPaused = !0;
        N = r.Od;
        I(E, this.o)
    },
    mf: function() {
        J(this.j, !1);
        this.j.visible = !0;
        this.j.sb.alpha = 0;
        this.j.sb.y = this.j.sb.ha;
        this.j.sb.Ya();
        this.j.sb.$a();
        if (0 < this.j.ba.length) {
            var a = (w.xMax - w.xMin) / this.j.ba.getChildAt(0).width,
                b = (w.yMax -
                    w.yMin) / this.j.ba.getChildAt(0).height,
                a = a < b ? a : b;
            this.j.ba.scale.set(Math.floor(100 * (.85 > a ? a : .85)) / 100);
            this.j.ba.x = Math.floor((w.xMax - w.xMin) / 2 + w.xMin - this.j.ba.width / 2);
            this.j.ba.y = Math.floor((w.yMax - w.yMin) / 2 + w.yMin - this.j.ba.height / 2)
        }
        this.j.ba.alpha = 0;
        K(this.j)
    },
    nf: function() {
        J(this.j, !0)
    },
    oe: function(a) {
        J(this.j, !1);
        this.j.Ha = a;
        L(this.j);
        this.j.sb.ab()
    },
    pe: function() {
        this.j.visible = !1
    }
};

function Sa(a) {
    a.Ac.forEachAlive(function(a) {
        a.angle += a.ef
    }, a)
}

function P(a, b, d) {
    b.Qa--;
    0 > b.Qa || 0 != b.Qa || (b.Ua.call(d), void 0 != b.Ha && b.Ha.call(a))
}

function Q(a, b) {
    a.Qa--;
    0 > a.Qa || 0 == a.Qa && a.Xa.call(b)
}

function R(a, b, d, e, f, g, h, k) {
    a.qb = game.add.tween(b).to(d, e, f, !1, g);
    null != h && a.qb.onComplete.add(h, k)
}

function S(a, b, d, e, f, g, h, k, l) {
    b = game.add.tween(b).to(d, e, f, !1, g);
    null != k && b.onComplete.add(k, l);
    void 0 == a.Za && (a.Za = []);
    a.Hc = h;
    a.Za.push(b);
    return b
}

function L(a) {
    for (var b = a.Qa = 0; b < a.length; b++)
        if (1 == a.getChildAt(b).qb instanceof Array)
            for (var d = 0; d < a.getChildAt(b).qb.length; d++) a.getChildAt(b).qb[d].start();
        else void 0 != a.getChildAt(b).qb && 0 != a.getChildAt(b).pd && (a.getChildAt(b).qb.start(), a.Qa++)
}

function K(a) {
    a.visible = !0;
    for (var b = a.Qa = 0; b < a.length; b++)
        if (1 == a.getChildAt(b).Za instanceof Array)
            for (var d = 0; d < a.getChildAt(b).Za.length; d++) 0 != a.getChildAt(b).pd && (a.getChildAt(b).Za[d].start(), void 0 != a.getChildAt(b).Hc && !0 === a.getChildAt(b).Hc && a.Qa++);
        else void 0 != a.getChildAt(b).Za && 0 != a.getChildAt(b).pd && (a.getChildAt(b).Za.start(), void 0 != a.getChildAt(b).Hc && !0 === a.getChildAt(b).Hc && a.Qa++)
}

function Xa(a, b) {
    var d = 200,
        e = 0,
        f = Phaser.Easing.Quadratic.Out;
    null === d && (d = 300);
    null === e && (e = 150);
    null === f && (f = Phaser.Easing.Linear.None);
    b.y = 0;
    game.add.tween(b).to({
        y: -game.height
    }, d, f, !0, e).onComplete.add(function() {
        b.Ua.call(this);
        void 0 !== b.Ha && b.Ha.call(this)
    }, a)
}

function Wa(a, b, d) {
    var e = 0,
        f = Phaser.Easing.Quadratic.Out;
    null === d && (d = 300);
    null === e && (e = 150);
    null === f && (f = Phaser.Easing.Linear.None);
    b.y = -game.height;
    b.visible = !0;
    game.add.tween(b).to({
        y: 0
    }, d, f, !0, e).onComplete.add(function() {
        b.Xa.call(this)
    }, a)
}

function J(a, b) {
    function d(a) {
        for (var f = 0; f < a.children.length; f++)
            if (!0 !== a.getChildAt(f).de) {
                var g = a.getChildAt(f);
                g.inputEnabled = !1;
                1 == g.jb && (g.inputEnabled = b, g.tint = 16777215);
                0 < a.getChildAt(f).children.length && d(a.getChildAt(f))
            }
    }
    d(a)
}

function G(a, b) {
    var d = game.add.bitmapData(game.cache.getImage("btnlevel").width, game.cache.getImage("btnlevel").height + 29),
        e = game.make.sprite(0, 0, "btnlevel");
    e.anchor.set(.5, 0);
    d.draw(e, Math.floor(d.width / 2), 0);
    if (-1 === a) {
        var f = game.make.sprite(0, 0, "locklevel");
        f.anchor.set(.5);
        d.draw(f, Math.floor(d.width / 2), Math.floor(game.cache.getImage("btnlevel").height / 2))
    }
    for (var e = [
                [Math.floor(d.width / 2) - 26, e.height - 3, .9],
                [Math.floor(d.width / 2), e.height + 3, 1],
                [Math.floor(d.width / 2) + 26, e.height - 3, .9]
            ],
            f = game.make.sprite(0, 0, "starSmall", 1), g = 0; g < e.length; g++) 0 < a && (f.frame = a - 1 >= g ? 0 : 1), f.scale.set(e[g][2]), f.anchor.x = .5, d.draw(f, e[g][0], e[g][1]);
    null !== b && game.cache.addBitmapData(b, d)
}

function T(a) {
    var b = E;
    b.j.ja[1].Fb.setText(a);
    z(b.j.ja[1].Fb, .5, .5)
}

function U(a) {
    var b = E;
    b.j.ja[0].Fb.setText(a);
    z(b.j.ja[0].Fb, .5, .5)
}

function Ka(a) {
    a.j = game.add.group();
    a.j.name = "gameScreen";
    a.j.Gb = 0;
    var b = game.add.group();
    a.j.Cf = a.j.addChild(b);
    b.da = 0;
    b.ha = -80;
    S(b, b, {
        y: b.da
    }, 300, Phaser.Easing.Quadratic.Out, 0, !0, function() {
        Q(this.j, this)
    }, a);
    R(b, b, {
        y: b.ha
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.j, this)
    }, a);
    var d = game.make.sprite(game.width / 2, 20, "topBar1");
    z(d, .5, 0);
    var e = game.make.text(0, Math.floor(.42 * d.height) +10, 0, {
        font: "35px gameFont",
        fill: "#FFFFFF"
    });
    z(e, .5, .5);
    a.j.ac = d.addChild(e);
    b.addChild(d);
    e = game.make.sprite(game.width /
        2 + 150, Math.floor(.9 * d.height), "topBar3");
    z(e, .5, .5);
    b.addChild(e);
    var f = [
        [-60, -1],
        [-20, -1],
        [19, -1]
    ];
    a.j.Ia = [];
    for (var g = 0; 3 > g; g++) {
        var h = game.make.sprite(f[g][0], f[g][1], "starTopBar", 1);
        z(h, 0, .5);
        e.addChild(h);
        h = game.make.sprite(f[g][0], f[g][1], "starTopBar", 0);
        z(h, 0, .5);
        e.addChild(h);
        a.j.Ia.push(h)
    }
    a.j.ja = [];
    for (e = 0; 2 > e; e++) f = game.make.sprite(game.width / 2 - 150, Math.floor(.75 * d.height), "topBar2"), z(f, .5, .5), b.addChild(f), a.j.ja.push(f), g = game.make.text(13, 11, 0, {
            font: "25px gameFont",
            fill: "#FFFFFF"
        }),
        z(g, .5, .5), f.Fb = f.addChild(g), g = game.make.sprite(-12, -7, "spr_level_type_ico", 0), z(g, .5, .5), f.ib = f.addChild(g);
    b = game.make.group();
    b.scale.set(.85);
    b.x = -13;
    b.y = -7;
    a.j.ja[0].Jd = a.j.ja[0].addChild(b);
    d = game.make.sprite(0, 0, "timeBlue");
    d.anchor.set(0, .5);
    d.angle = 180;
    b.addChild(d);
    d = game.make.sprite(0, 0, "timeBlue");
    d.anchor.set(0, .5);
    b.addChild(d);
    d = game.make.sprite(0, 0, "timeYell");
    d.anchor.set(1, .5);
    b.Mf = b.addChild(d);
    var k = game.make.sprite(0, 0, "timeYell");
    k.anchor.set(1, .5);
    k.angle = 180;
    b.Nf = b.addChild(k);
    var l = game.make.sprite(0, 0, "timeBlue");
    l.anchor.set(0, .5);
    b.Lf = b.addChild(l);
    a.ed = function(a) {
        1 >= a && .5 < a ? (l.visible = !1, l.angle = 0, k.angle = Math.floor(180 - 360 * a)) : .5 >= a && 0 <= a && (l.visible = !0, l.angle = Math.floor(360 * (.5 - a)), k.angle = 0)
    };
    b = game.add.group();
    b.position.set(20, 20);
    b.de = !0;
    a.j.addChild(b);
    a.j.ba = b;
    d = game.make.sprite(0, 0);
    b.addChild(d);
    b.Zd = d;
    d = game.add.group();
    b.addChild(d);
    b.Wc = d;
    d = game.add.group();
    b.addChild(d);
    b.qd = d;
    d = game.add.group();
    b.addChild(d);
    b.Hd = d;
    d = game.add.group();
    b.addChild(d);
    b.sd = d;
    d = game.add.group();
    b.tc = b.addChild(d);
    d = game.add.group();
    b.addChild(d);
    b.pb = d;
    d = game.add.group();
    b.addChild(d);
    b.Gd = d;
    d = game.add.group();
    a.j.addChild(d);
    a.j.Dd = d;
    S(b, b, {
        alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, !0, function() {
        Q(this.j, this)
    }, a);
    R(b, b, {
        alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.j, this)
    }, a);
    b = D(a.ma, game.width - 50, game.height - 50, "imgBblSmall", "ui_buttons", 4, a.td, a);
    b.da = game.height - 50;
    b.ha = game.height + 50;
    a.j.sb = a.j.addChild(b);
    S(b, b, {
            y: b.da,
            alpha: 1
        }, 300,
        Phaser.Easing.Quadratic.Out, 0, !0,
        function() {
            Q(this.j, this)
        }, a);
    R(b, b, {
        y: b.ha,
        alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.j, this)
    }, a);
    a.j.lb = a.mf;
    a.j.Xa = a.nf;
    a.j.gb = a.oe;
    a.j.Ua = a.pe;
    a.j.visible = !1;
    w = {
        xMin: 20,
        xMax: game.width - 20,
        yMin: a.j.Cf.getChildAt(0).height + 50,
        yMax: game.height - 80
    }
}

function Qa(a) {
    a.o = game.add.group();
    a.o.name = "pauseScreen";
    var b = ya(a.ma, .6 * game.height, a.Ue, a);
    b.yc.x = 13;
    b.yc.y = 5;
    a.o.be = a.o.addChild(b);
    b.Yc = .8;
    b.Zc = .8;
    S(b, b.scale, {
        x: .8,
        y: .8
    }, 250, Phaser.Easing.Back.Out, 0, !0, function() {
        Q(this.o, this)
    }, a);
    R(b, b.scale, {
        x: 0,
        y: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.o, this)
    }, a);
    var d = .6 * (game.height / 2 - b.height / 2),
        e = game.make.sprite(game.width / 2, d);
    z(e, .5, .5);
    var f = game.make.sprite(0, 0, "game_logo");
    z(f, .5, .5);
    e.addChild(f);
    e.da = d;
    e.ha = -100;
    e.rb = game.add.tween(f).to({
        y: [-2,
            0, 2, 0
        ]
    }, y(1500, 2E3), Phaser.Easing.Linear.None, !1, 0, 0);
    e.rb.onComplete.add(function() {
        !0 === e.Bc && e.rb.start()
    });
    a.o.Na = a.o.addChild(e);
    S(e, e, {
        y: e.da
    }, 300, Phaser.Easing.Quadratic.Out, 0, !1, null, a);
    R(e, e, {
        y: e.ha
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.o, this)
    }, a);
    f = game.add.text(game.width / 2, 200, n("PAUSE"), {
        font: "70px gameFont",
        fill: "#FFFFFF"
    });
    z(f, .5, .5);
    f.y = Math.floor(e.da + .44 * (b.y - e.da));
    f.strokeThickness = 5;
    f.stroke = "#252161";
    a.o.Ze = a.o.addChild(f);
    S(f, f.scale, {
            x: 1,
            y: 1
        }, 250, Phaser.Easing.Back.Out,
        0, !0,
        function() {
            Q(this.o, this)
        }, a);
    R(f, f.scale, {
        x: 0,
        y: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.o, this)
    }, a);
    b = [];
    a.o.ra = b;
    f = D(a.ma, 0, 0, "bblbtn", "ui_buttons2", 5, a.We, a);
    f.ha = game.height + 50;
    a.o.Hf = a.o.addChild(f);
    b.push(f);
    f = D(a.ma, 0, 0, "bblbtn", "ui_buttons2", 0, a.Ve, a);
    f.ha = game.height + 50;
    a.o.ae = a.o.addChild(f);
    b.push(f);
    q && (f = D(a.ma, 0, 0, "bblbtn", "ui_buttons2", 2, a.Ye, a), f.ha = game.height + 50, a.o.Rb = a.o.addChild(f), b.push(f));
    f = D(a.ma, 0, 0, "bblbtn", "ui_buttons2", 6, a.Xe, a);
    f.ha = game.height +
        50;
    a.o.Gf = a.o.addChild(f);
    b.push(f);
    2 === b.length ? (b[0].x = game.width / 2 - 50, b[1].x = game.width / 2 + 50, b[0].da = game.height - d, b[1].da = game.height - d) : 3 === b.length ? (b[1].x = game.width / 2, b[0].x = b[1].x - 100, b[2].x = b[1].x + 100, b[0].da = game.height - d, b[1].da = game.height - d + 20, b[2].da = game.height - d) : 4 === b.length && (b[0].x = game.width / 2 - 150, b[1].x = game.width / 2 - 50, b[2].x = game.width / 2 + 50, b[3].x = game.width / 2 + 150, b[0].da = game.height - d, b[1].da = game.height - d + 30, b[2].da = game.height - d + 30, b[3].da = game.height - d);
    for (d = 0; d < b.length; d++) S(b[d],
        b[d], {
            y: b[d].da
        }, y(400, 700), Phaser.Easing.Back.Out, y(20, 350), !1), R(b[d], b[d], {
        y: b[d].ha
    }, 350, Phaser.Easing.Exponential.Out, y(0, 75), function() {
        P(this, this.o, this)
    }, a);
    a.o.lb = a.uf;
    a.o.Xa = a.vf;
    a.o.gb = a.we;
    a.o.Ua = a.xe;
    a.o.visible = !1
}

function Va(a) {
    var b = B;
    N = r.Pd;
    Ya(b);
    var d = b.e,
        e = d.Va[b.va];
    d.world = e.world;
    d.p = parseInt(e.maxCol);
    d.$ = parseInt(e.maxRow);
    d.Ob = "true" === e.wrap;
    d.oc = parseInt(e.color);
    null !== d.Hb && d.Hb.destroy();
    for (var f = game.add.bitmapData(u * d.p + 3 * (d.p - 1), v * d.$ + 3 * (d.$ - 1)), g = game.make.sprite(0, 0, "gmTileImg"), h = 0; h < d.$; h++)
        for (var k = 0; k < d.p; k++) 0 != d.world[h * d.p + k] && f.draw(g, k * (u + 3), h * (v + 3));
    d.Hb = f;
    g.destroy();
    d.yb = !1;
    d.zb = !1;
    d.hc = !1;
    d.jc = !1;
    d.ic = !1;
    d.ka = 0;
    d.mb = parseInt(e.minScore);
    d.$b = parseInt(e.midScore);
    d.dd = parseInt(e.maxScore);
    d.ua = 0;
    d.nb = 0;
    d.Ea = 0;
    d.Jb = [];
    d.Kb = !1;
    d.bd = 0;
    d.Yb = 0;
    d.Ma = 0;
    d.vc = [];
    d.Qb = [];
    "true" === e.moveMode && (d.ka = 0, d.yb = !0, d.ua = parseInt(e.move));
    "true" === e.timeMode && (d.ka = 1, d.zb = !0, d.nb = parseInt(e.time));
	
    if ("true" === e.fallMode) {
        d.ka = 4;
        d.ic = !0;
        d.Ea = parseInt(e.croissant);
        d.Ed = d.Ea;
        d.Jb = [];
        d.Kb = !0;
        f = e.balloonsBonus;
		console.log(f.length);
        for (g = 0; g < f.length; g++) "60" === f[g] ? (d.Jb.push(!0), d.Kb = !1) : d.Jb.push(!1);
        d.Kb && (d.bd = Math.floor((d.ua - 1) / d.Ea), d.Yb = 1)
    }
    if ("true" === e.escapeMode)
        for (d.ka = 3, d.jc = !0, d.Ma = parseInt(e.escOrFallCount), d.vc = [], f = e.vir, g = 0; g < f.length; g++) d.vc[g] = "100" === f[g] ? 1 : -1;
    if ("true" === e.blocksMode)
        for (d.ka = 2, d.hc = !0, d.Qb = [], f = e.block, g = 0; g < f.length; g++) d.Qb[g] = "2" === f[g] ? 1 : "3" === f[g] ? 2 : "4" === f[g] ? 3 : -1;
    E.j.ba.Zd.loadTexture(b.e.Hb);
    do $a(b), ab(b), bb(b); while (0 === b.pa.length);
    if (2 === b.e.ka) {
        for (d = 0; d < b.e.$; d++)
            for (e = 0; e < b.e.p; e++) - 1 === b.f[d][e] ? b.eb[d][e].dc(-1) : 0 < b.e.Qb[d * b.e.p + e] ? (b.eb[d][e].dc(b.e.Qb[d * b.e.p + e]), b.eb[d][e].revive()) : b.eb[d][e].dc(-1);
        T(cb(b))
    }
    if (3 === b.e.ka)
        for (db(b), d = 0; d < b.e.$; d++)
            for (e = 0; e <
                b.e.p; e++) - 1 !== b.f[d][e] && 1 === b.e.vc[d * b.e.p + e] && b.wc.push(eb(b, d, e));
    if (4 === b.e.ka)
        for (d = 0; d < b.e.Jb.length; d++) !0 === b.e.Jb[d] && b.f[Math.floor(d / b.e.p)][d % b.e.p].Nb(null, 5);
    fb = 0;
    b.ec = !1;
    b.e.yb && U(b.e.ua);
    b.e.zb && (U(b.e.nb), E.ed(1));
    b.e.hc && T(cb(b));
    b.e.jc && T(b.e.Ma);
    b.e.ic && T(b.e.Ea);
    b.Da = 1;
    b.qc = 0;
    b.La = 0;
    b.Ba = 0;
    b.bc = 0;
    b.kb = !1;
    b.isPaused = !1;
    b.ld = !1;
    for (b = a.j.Gb = 0; b < a.j.Ia.length; b++) d = new Phaser.Rectangle(0, 0, 0, a.j.Ia[b].height), a.j.Ia[b].crop(d), a.j.Ia[b].cropRect = d;
    b = B.e;
    d = B.va;
    e = [];
    "true" === b.Va[d].moveMode && e.push("moveMode");
    "true" === b.Va[d].timeMode && e.push("timeMode");
    "true" === b.Va[d].blocksMode && e.push("blocksMode");
    "true" === b.Va[d].escapeMode && e.push("escapeMode");
    "true" === b.Va[d].fallMode && e.push("fallMode");
    1 === e.length ? (a.j.ja[1].visible = !1, a.j.ja[0].x = game.width / 2 - 150) : (a.j.ja[1].visible = !0, a.j.ja[0].x = game.width / 2 - 190, a.j.ja[1].x = game.width / 2 - 115);
    a.j.ja[0].ib.visible = !0;
    a.j.ja[0].Jd.visible = !1;
    e.contains("moveMode") && a.j.ja[0].ib.loadTexture(x.moveMode[0], x.moveMode[1]);
    e.contains("timeMode") && (a.j.ja[0].ib.visible = !1, a.j.ja[0].Jd.visible = !0);
    e.contains("blocksMode") && a.j.ja[1].ib.loadTexture(x.blocksMode[0], x.blocksMode[1]);
    e.contains("escapeMode") && a.j.ja[1].ib.loadTexture(x.escapeMode[0], x.escapeMode[1]);
    e.contains("fallMode") && a.j.ja[1].ib.loadTexture(x.fallMode[0], x.fallMode[1]);
    I(a, a.fa);
    M(C, 1)
}

function Pa(a) {
    a.k = game.add.group();
    a.k.name = "gameOverScreen";
    var b = game.make.sprite(game.width / 2, 0, "dialWin");
    z(b, .5, 0);
    b.y = Math.floor((game.height - b.height) / 2);
    a.k.window = a.k.addChild(b);
    var d = game.make.text(0, 35, "LEVEL 1", {
        font: "37px gameFont",
        fill: "#eee197"
    });
    z(d, .5, .5);
    a.k.Ie = b.addChild(d);
    d = game.make.sprite(-90, 115, "starBig", 1);
    z(d, .5, .5);
    d.scale.set(.6);
    a.k.Of = b.addChild(d);
    d = game.make.sprite(0, 115, "starBig", 1);
    z(d, .5, .5);
    a.k.Pf = b.addChild(d);
    d = game.make.sprite(90, 115, "starBig", 1);
    z(d, .5, .5);
    d.scale.set(.6);
    a.k.Qf = b.addChild(d);
    d = [];
    a.k.Mb = d;
    for (var e = [
            [-90, 115, .6],
            [0, 115, 1],
            [90, 115, .6]
        ], f = 0; f < e.length; f++) {
        var g = game.make.sprite(e[f][0], e[f][1], "starBig", 0);
        z(g, .5, .5);
        g.scale.set(e[f][2]);
        d.push(b.addChild(g));
        var h = 850 + 600 * f;
        S(g, g, {
            alpha: 1,
            x: e[f][0],
            y: e[f][1],
            rotation: 0
        }, 400, Phaser.Easing.Quadratic.Out, h, !1, null, a);
        g = S(g, g.scale, {
            x: e[f][2],
            y: e[f][2]
        }, 800, Phaser.Easing.Elastic.Out, h + 400 - 100, !1, null, a);
        g.yf = "sndStar" + (f + 1);
        g.onStart.add(function(a, b) {
			gradle.event('game_result');
            H(b.yf)
        })
    }
    d = game.make.text(0, 205,
        "SCORE\n55", {
            font: "28px gameFont",
            fill: "#FFFFFF",
            align: "center"
        });
    d.lineSpacing = -8;
    z(d, .5, .5);
    a.k.ac = b.addChild(d);
    a.k.Ec = !1;
    a.k.Fd = 0;
    a.k.gf = 300;
    a.k.Dc = 0;
    d = game.make.text(0, 265, "BEST:\n102", {
        font: "25px gameFont",
        fill: "#FFFFFF",
        align: "center"
    });
    d.lineSpacing = -8;
    z(d, .5, .5);
    a.k.$d = b.addChild(d);
    d = D(a.ma, -95, 340, "imgBblSmall", "ui_buttons", 1, a.je, a);
    a.k.Rc = b.addChild(d);
    d = D(a.ma, 0, 340, "bblbtn", "spr_btn_sipka_refr", 0, a.ge, a);
    a.k.Tb = b.addChild(d);
    d = D(a.ma, 95, 340, "imgBblSmall", "spr_btn", 1, a.he, a);
    a.k.Sb =
        b.addChild(d);
    a.k.lb = a.kf;
    a.k.Xa = a.lf;
    a.k.gb = a.me;
    a.k.Ua = a.ne;
    a.k.visible = !1
}

function Ra(a) {
    var b = 0,
        d;
    0 === a.pc ? (b = game.input.activePointer.y - a.Xc, d = a.ce + b) : 0 !== a.la && (b = a.la, d = a.n.ta.y + b, a.pc = null);
    0 !== b && (0 < d ? a.n.ta.y = 0 : d < 0 - a.n.ta.Kd + (game.height - 60) ? a.n.ta.y = -a.n.ta.Kd + (game.height - 60) : a.n.ta.y = d)
}

function Oa(a) {
    a.n = game.add.group();
    a.n.name = "levelSelection";
    var b = D(a.ma, 50, game.height - 50, "imgBblSmall", "ui_buttons", 1, a.Ee, a);
    b.da = game.height - 50;
    b.ha = game.height + 50;
    a.n.backButton = a.n.addChild(b);
    S(b, b, {
        y: b.da,
        alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, !0, function() {
        Q(this.n, this)
    }, a);
    R(b, b, {
        y: b.ha,
        alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.n, this)
    }, a);
    var b = function(a, b, d) {
            var e = this.ma,
                f = game.cache.getBitmapData("lvlLocked"),
                g = this.He;
            a = game.add.button(a, b, f);
            a.jb = !0;
            a.frame = 0;
            a.Te = f;
            a.Se = null;
            a.Sc = g;
            a.Tc = this || e;
            a.events.onInputUp.add(e.Qc, e);
            a.events.onInputDown.add(e.Nc, e);
            a.events.onInputOver.add(e.Pc, e);
            a.events.onInputOut.add(e.Oc, e);
            z(a, .5, .5);
            a.anchor.set(.5, 0);
            a.Xb = !0;
            e = game.make.text(0, Math.floor(game.cache.getImage("btnlevel").height / 2), d, {
                font: "35px gameFont",
                fill: "#FFFFFF"
            });
            z(e, .5, .5);
            a.Le = a.addChild(e);
            e.visible = !1;
            a.Ad = d;
            return a
        }.bind(a),
        d = game.make.group();
    a.n.ta = a.n.addChild(d);
    var e = game.add.graphics(0, 0);
    e.beginFill(16777215);
    e.drawRect(0,
        40, game.width, game.height - 40 - 80);
    a.n.addChild(e);
    d.mask = e;
    for (var e = (game.width - 220) / 2, f = 0; 20 > f; f++)
        for (var g = 0; 3 > g; g++) {
            var h = b(e + 110 * g, 50 + 135 * f, g + 3 * f + 1);
            d.addChild(h)
        }
    a.n.ta.Kd = 2750;
    S(d, d, {
        alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, !1);
    R(d, d, {
        alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.n, this)
    }, a);
    a.n.lb = a.qf;
    a.n.Xa = a.rf;
    a.n.gb = a.se;
    a.n.Ua = a.te;
    a.n.md = !0;
    a.n.visible = !1
}

function Na(a) {
	
    a.aa = game.add.group();
    a.aa.name = "aboutScreen";
    var b = D(a.ma, 50, game.height - 50, "imgBblSmall", "ui_buttons", 1, a.Xd, a);
    b.da = game.height - 50;
    b.ha = game.height + 50;
    a.aa.backButton = a.aa.addChild(b);
    S(b, b, {
        y: b.da,
        alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, !0, function() {
        Q(this.aa, this)
    }, a);
    R(b, b, {
        y: b.ha,
        alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.aa, this)
    }, a);
    /*
	b = game.make.sprite(game.width / 2, 100, "loading");
    b.scale.set(.7);
    z(b, .5, 0);
    a.aa.Be = a.aa.addChild(b);
    S(b, b, {
            alpha: 1
        },
        250, Phaser.Easing.Linear.None, 150, !0,
        function() {
            Q(this.aa, this)
        }, a);
    R(b, b, {
        alpha: 0
    }, 250, Phaser.Easing.Linear.None, 0, function() {
        P(this, this.aa, this)
    }, a);
	*/
    b = game.make.text(Math.floor(game.width / 2), 250, "", {
        font: "35px gameFont",
        fill: "#FFFFFF"
    });
    z(b, .5, 0);
    a.aa.Ae = a.aa.addChild(b);
    S(b, b, {
        alpha: 1
    }, 250, Phaser.Easing.Linear.None, 350, !0, function() {
        Q(this.aa, this)
    }, a);
    R(b, b, {
        alpha: 0
    }, 250, Phaser.Easing.Linear.None, 0, function() {
        P(this, this.aa, this)
    }, a);
    b = game.make.text(Math.floor(game.width / 2), 300,
        "JEWEL AQUARIUM\nv.1.0.2", {
            font: "35px gameFont",
            fill: "#FFFFFF",
            align: "center"
        });
    z(b, .5, 0);
    a.aa.fe = a.aa.addChild(b);
    S(b, b, {
        alpha: 1
    }, 250, Phaser.Easing.Linear.None, 550, !1);
    R(b, b, {
        alpha: 0
    }, 250, Phaser.Easing.Linear.None, 0, function() {
        P(this, this.aa, this)
    }, a);
    a.aa.lb = a.hf;
    a.aa.Xa = a.jf;
    a.aa.gb = a.ke;
    a.aa.Ua = a.le;
    a.aa.visible = !1
}

function Ma(a) {
    a.ca = game.add.group();
    a.ca.name = "instructionsScreen";
    var b = D(a.ma, 50, game.height - 50, "imgBblSmall", "ui_buttons", 1, a.De, a);
    b.da = game.height - 50;
    b.ha = game.height + 50;
    a.ca.backButton = a.ca.addChild(b);
    S(b, b, {
        y: b.da,
        alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, !0, function() {
        Q(this.ca, this)
    }, a);
    R(b, b, {
        y: b.ha,
        alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.ca, this)
    }, a);
    b = game.make.text(game.width / 2, 100, n("INSTRUCTIONS_TEXT"), {
        font: "22px gameFont",
        fill: "#FFFFFF",
        wordWrap: !0,
        wordWrapWidth: .7 *
            game.width
    });
    b.lineSpacing = -5;
    ba(b);
    b.y = Math.floor((game.height - 70 - b.height) / 2);
    z(b, .5, 0);
    a.ca.Ce = a.ca.addChild(b);
    S(b, b, {
        alpha: 1
    }, 250, Phaser.Easing.Linear.None, 0, !0, function() {
        Q(this.ca, this)
    }, a);
    R(b, b, {
        alpha: 0
    }, 250, Phaser.Easing.Linear.None, 0, function() {
        P(this, this.ca, this)
    }, a);
    a.ca.lb = a.of;
    a.ca.Xa = a.pf;
    a.ca.gb = a.qe;
    a.ca.Ua = a.re;
    a.ca.ad = !1;
    a.ca.visible = !1
}

function La(a) {
    a.q = game.add.group();
    a.q.name = "mainMenu";
    var b = ya(a.ma, game.height / 2, a.Me, a);
	b.yc.x = 13;
    b.yc.y = 5;
    a.q.af = a.q.addChild(b);
    b.Yc = .8;
    b.Zc = .8;
    S(b, b.scale, {
        x: .8,
        y: .8
    }, 250, Phaser.Easing.Back.Out, 0, !0, function() {
        Q(this.q, this)
    }, a);
    R(b, b.scale, {
        x: 0,
        y: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.q, this)
    }, a);
    var b = .6 * (game.height / 2 - b.height / 2),
        d = game.make.sprite(game.width / 2, b);
    z(d, .5, .5);
    var e = game.make.sprite(0, 0, "game_logo");
    z(e, .5, .5);
    d.addChild(e);
    d.da = b;
    d.ha = -100;
    d.rb = game.add.tween(e).to({
        y: [-2,
            0, 2, 0
        ]
    }, y(1500, 2E3), Phaser.Easing.Linear.None, !1, 0, 0);
    d.rb.onComplete.add(function() {
        !0 === d.Bc && d.rb.start()
    });
    a.q.Na = a.q.addChild(d);
    S(d, d, {
        y: d.da
    }, 300, Phaser.Easing.Quadratic.Out, 0, !1, null, a);
    R(d, d, {
        y: d.ha
    }, 300, Phaser.Easing.Quadratic.Out, 0, function() {
        P(this, this.q, this)
    }, a);
    e = [];
    a.q.ra = e;
    var f = D(a.ma, 0, 0, "bblbtn", "ui_buttons2", 0, a.Oe, a);
    f.ha = game.height + 50;
    a.q.ae = a.q.addChild(f);
    e.push(f);
    q && (f = D(a.ma, 0, 0, "bblbtn", "ui_buttons2", 2, a.Pe, a), f.ha = game.height + 50, a.q.Rb = a.q.addChild(f), e.push(f));
    f = D(a.ma, 0, 0, "bblbtn", "ui_buttons2", 1, a.Ne, a);
    f.ha = game.height + 50;
    a.q.Ff = a.q.addChild(f);
    e.push(f);
    2 === e.length ? (e[0].x = game.width / 2 - 50, e[1].x = game.width / 2 + 50, e[0].da = game.height - b, e[1].da = game.height - b) : 3 === e.length ? (e[1].x = game.width / 2, e[0].x = e[1].x - 100, e[2].x = e[1].x + 100, e[0].da = game.height - b, e[1].da = game.height - b + 20, e[2].da = game.height - b) : 4 === e.length && (e[0].x = game.width / 2 - 150, e[1].x = game.width / 2 - 50, e[2].x = game.width / 2 + 50, e[3].x = game.width / 2 + 150, e[0].da = game.height - b, e[1].da = game.height - b + 30, e[2].da =
        game.height - b + 30, e[3].da = game.height - b);
    
	for (b = 0; b < e.length; b++) S(e[b], e[b], {
        y: e[b].da
    }, y(400, 700), Phaser.Easing.Back.Out, 150 * b + y(50, 150), !1), R(e[b], e[b], {
        y: e[b].ha
    }, 350, Phaser.Easing.Exponential.Out, y(0, 75), function() {
        P(this, this.q, this)
    }, a);
	
    a.q.lb = a.sf;
    a.q.Xa = a.tf;
    a.q.gb = a.ue;
    a.q.Ua = a.ve;
    a.q.visible = !1
}

function Ta(a) {
    a.za.cb.Gc -= game.time.physicsElapsed;
    if (0 >= a.za.cb.Gc) {
        for (var b = y(1, 2), d = 0; d < b; d++) gb(a);
        a.za.cb.Gc = 1 + Math.floor(2 * Math.random())
    }
    a.za.cb.forEachAlive(function(a) {
        a.y -= a.speed;
        0 > a.y + 30 && a.kill()
    }, a)
}

function gb(a) {
    var b = y(30, game.width - 30),
        d = game.height + 50,
        e = a.za.cb.getFirstDead();
    null === e && (e = a.za.cb.create(0, 0, "imgBblSmall"));
    e.scale.set(y(20, 55) / 100);
    e.alpha = y(30, 60) / 100;
    e.anchor.set(.5);
    e.reset(b, d);
    e.speed = .3 + Math.random() / 2
}

function I(a, b) {
    for (; 0 < a.Kc.length;) {
        var d = a.Kc.pop();
        void 0 != d.Vb && 0 < d.Vb.alpha && d.Vb.qb.start();
        d.gb.call(a)
    }
    a.Kc.push(b);
    b.lb.call(a);
    null != b.Vb && (b.Vb.alpha = 0, b.Vb.visible = !1)
};

function hb() {
    this.$ = this.p = 0;
    this.Hb = this.world = null;
    this.oc = 0;
    this.ka = null;
    this.ic = this.jc = this.hc = this.zb = this.yb = this.Ob = !1;
    this.nb = this.ua = 0;
    this.vc = this.Qb = null;
    this.Ea = this.Ma = 0;
    this.Jb = [];
    this.Kb = !0;
    this.dd = this.$b = this.mb = this.Yb = this.bd = 0
}
hb.prototype = {
    constructor: hb,
    create: function() {
        this.Va = game.cache.getJSON("levelsData")
    }
};
var ib = 0,
    V = 0,
    jb = 0,
    fb = 0;

function kb() {
    this.bc = this.Ba = this.qc = this.La = this.va = 0;
    this.e = null;
    this.f = [];
    this.eb = [];
    this.wc = [];
    this.uc = !1;
    this.u = this.xa = null;
    this.Lb = [];
    this.pa = [];
    this.Db = 0;
    this.ec = !1;
    this.Da = null;
    this.oa = [];
    this.Wb = 0;
    this.isPaused = this.kb = !1;
    this.Vc = null;
    this.ld = !1;
    this.Ta = new Anims
}
kb.prototype = {
    constructor: kb,
    preload: function() {
        for (var a = 0; 60 > a; a++) 
			void 0 === this.oa[a] && (this.oa[a] = -1); - 1 === this.oa[0] && (this.oa[0] = 0);
        this.Ta.preload();
        for (key in this) "function" === typeof this[key] && (this[key].hb = key)
    },
    create: function() {
        this.e = new hb;
        this.e.create();
        for (var a = 0; 64 > a; a++) lb(this, 0, 0);
        $a(this);
        mb(this);
        game.input.addMoveCallback(function() {
            if (N === r.wb && O === t.xb && null !== this.xa) {
                3 === this.e.ka && (this.uc = !0);
                var a = this.Lb[0] - game.input.x,
                    d = this.Lb[1] - game.input.y;
                if (!(10 > Math.abs(a) &&
                        10 > Math.abs(d))) {
                    var e = this.xa.ea,
                        f = this.xa.ga; - 10 >= a && e++;
                    10 <= a && e--;
                    e === this.xa.ea && (-10 >= d && f++, 10 <= d && f--);
                    W(this, e, f) && (this.ec = !0, Ia(this.Ta, this.xa.ga, this.xa.ea), Ia(this.Ta, f, e), this.u = {
                        ob: this.xa.ea,
                        tb: this.xa.ga,
                        Ka: e,
                        Pa: f
                    }, nb(this, this.xa.ea, this.xa.ga, e, f, t.nd, this.nc), H("sndSwp"));
                    this.xa = null;
                    this.Lb = []
                }
            }
        }, this);
        V = (new Date).getTime();
        jb = V - ib;
        ib = V;
        this.Ta.create();
        game.input.onDown.add(function() {
            this.Wb = 0
        }, this)
    },
    update: function() {
        V = (new Date).getTime();
        jb = V - ib;
        ib = V;
        N === r.wb && (fb += jb, !0 === this.e.zb && !1 === this.ld && (this.cc = this.e.nb - Math.floor(fb / 1E3), 0 >= this.cc && (this.cc = 0, this.ld = ob(this)), U(this.cc), da ? E.ed((this.e.nb - fb / 1E3) / this.e.nb) : E.ed(this.cc / this.e.nb)), pb(this), O === t.xb && (this.Wb += jb, 3E3 < this.Wb && qb(ja, this.f[this.pa[this.Db][0][0]][this.pa[this.Db][0][1]])))
    },
    gd: function() {
        N = r.wb;
        this.sc();
        console.log("send", "event", "basic", "level_started:" + this.va, partnerName, 1)
    },
    sc: function() {
        !0 !== ob(this) && !0 !== this.kb && (O = t.xb, this.bc = 1, this.Wb = 0)
    },
    cf: function() {
        O = t.Sd;
        if (!0 !== X(this,
                arguments.callee.hb)) {
            Ca("msg_noMoreMoves");
            for (var a = [], b = 0; b < this.e.$; b++)
                for (var d = 0; d < this.e.p; d++) - 1 !== this.f[b][d] && 5 !== this.f[b][d].m && 4 !== this.f[b][d].m && (a.push(this.f[b][d]), this.f[b][d] = null);
            for (b = 0; b < a.length; b++) {
                d = a[b];
                do var e = y(0, this.e.$ - 1),
                    f = y(0, this.e.p - 1); while (null !== this.f[e][f]);
                this.f[e][f] = d;
                d.ga = e;
                d.ea = f
            }
            for (b = 0; b < a.length; b++) d = a[b], e = F(d.ea, d.ga), game.add.tween(d).to({
                    x: e[0],
                    y: e[1]
                }, 400 + y(0, 300), Phaser.Easing.Sinusoidal.Out, !0, 400 + y(0, 300)).onComplete.add(this.df, this),
                d.ya = !0
        }
    },
    df: function(a) {
        a.ya = !1;
        Y(this) || this.nc()
    },
    nc: function() {
        if (!Y(this) && !0 !== X(this, arguments.callee.hb)) {
            O = t.nd;
            if (null !== this.u) {
                var a;
                a = this.f[this.u.tb][this.u.ob];
                var b = this.f[this.u.Pa][this.u.Ka];
                a = 3 === a.m && 3 === b.m ? 2 : 3 === a.m ? 0 : 3 === b.m ? 1 : !1;
                if (!1 !== a && !(0 === a && 5 === this.f[this.u.Pa][this.u.Ka].m || 1 === a && 5 === this.f[this.u.tb][this.u.ob].m)) {
                    rb(this);
                    sb(this, a, [this.f[this.u.tb][this.u.ob], this.f[this.u.Pa][this.u.Ka]]);
                    this.u = null;
                    tb(this);
                    return
                }
                a = ub(this.f[this.u.tb][this.u.ob], this.f[this.u.Pa][this.u.Ka]);
                if (!1 !== a) {
                    rb(this);
                    this.f[this.u.tb][this.u.ob].mc = !1;
                    this.f[this.u.Pa][this.u.Ka].mc = !1;
                    if (!0 === a) this.f[this.u.tb][this.u.ob].wa(), this.f[this.u.Pa][this.u.Ka].wa();
                    else if (1 === a) {
                        a = this.u.Pa - 2;
                        for (var b = this.u.Ka - 2, d = a; d < a + 5; d++)
                            for (var e = b; e < b + 5; e++) W(this, e, d) && Z(this, e, d).wa()
                    } else if (2 === a) {
                        a = this.u.Pa;
                        b = this.u.Ka;
                        a = [a - 1, a, a + 1];
                        for (var b = [b - 1, b, b + 1], f = 0; f < a.length; f++)
                            for (d = a[f], e = 0; e < this.e.p; e++) W(this, e, d) && Z(this, e, d).wa();
                        for (a = 0; a < b.length; a++)
                            for (e = b[a], d = 0; d < this.e.$; d++) W(this, e,
                                d) && Z(this, e, d).wa()
                    }
                    vb(this, 2100, !0, this.u.Pa, this.u.Ka, this.u.ia);
                    this.Zb();
                    this.u = null;
                    tb(this);
                    return
                }
            }
            a = [];
            for (b = 0; b < this.e.$; b++)
                for (d = 0; d < this.e.p - 2;)
                    if (e = this.f[b][d], null !== e) {
                        var g = e,
                            e = g.ia,
                            f = g.m,
                            h = [];
                        h.push(g);
                        for (var k = g.ga, g = g.ea + 1; g < this.e.p; g++)
                            if (null !== this.f[k][g] && -1 !== this.f[k][g] && this.f[k][g].ia === e && 5 !== f && 3 !== f) h.push(this.f[k][g]);
                            else break;
                        e = h;
                        3 <= e.length && a.push(e);
                        d += e.length
                    } else d += 1;
            for (d = 0; d < this.e.p; d++)
                for (b = 0; b < this.e.$ - 2;)
                    if (e = this.f[b][d], null !== e) {
                        g = e;
                        e = g.ia;
                        f = g.m;
                        h = [];
                        h.push(g);
                        k = g.ea;
                        for (g = g.ga + 1; g < this.e.$; g++)
                            if (null !== this.f[g][k] && -1 !== this.f[g][k] && this.f[g][k].ia === e && 5 !== f && 3 !== f) h.push(this.f[g][k]);
                            else break;
                        e = h;
                        3 <= e.length && a.push(e);
                        b += e.length
                    } else b += 1;
            if (0 < a.length) {
                rb(this);
                O = t.Td;
                f = {};
                b = [];
                for (d = 0; d < a.length; d++) void 0 === f[a[d][0].ia] && (f[a[d][0].ia] = []), f[a[d][0].ia].push(a[d]);
                for (colorKeys in f)
                    if (1 < f[colorKeys].length)
                        for (d = 0; d < f[colorKeys].length; d++)
                            for (e = d + 1; e < f[colorKeys].length; e++)
                                for (h = 0; h < f[colorKeys][d].length; h++)
                                    for (k =
                                        0; k < f[colorKeys][e].length; k++) f[colorKeys][d][h].ga === f[colorKeys][e][k].ga && f[colorKeys][d][h].ea === f[colorKeys][e][k].ea && (f[colorKeys][d].xd = !0, f[colorKeys][e].xd = !0, b.push({
                                        ROW: f[colorKeys][d][h].ga,
                                        COL: f[colorKeys][d][h].ea,
                                        type: 2
                                    }));
                for (d = 0; d < a.length; d++)
                    for (f = a[d], !0 !== f.xd && (5 <= f.length ? (e = wb(f), b.push({
                            ROW: f[e].ga,
                            COL: f[e].ea,
                            type: 3
                        })) : 4 === f.length && (e = wb(f), b.push({
                            ROW: f[e].ga,
                            COL: f[e].ea,
                            type: 1
                        }))), e = 0; e < f.length; e++) f[e].wa();
                for (d = 0; d < b.length; d++) a = b[d], this.f[a.ROW][a.COL].Nb(null,
                    a.type), this.f[a.ROW][a.COL].Ra = !1, 2 === this.e.ka && !0 === xb(this, a.ROW, a.COL) && vb(this, 1E3, !1);
                this.Zb();
                this.u = null;
                this.bc += 1;
                tb(this)
            } else if (null !== this.u) H("sndSwpB"), nb(this, this.u.Ka, this.u.Pa, this.u.ob, this.u.tb, null, this.sc), this.u = null;
            else if (bb(this), 0 === this.pa.length) this.cf();
            else if (3 === this.e.ka && !0 === this.uc) this.uc = !1, this.Re();
            else if (4 === this.e.ka) a: {
                if (!0 !== this.kb)
                    for (a = 0; a < this.e.p; a++)
                        if (b = this.f[this.e.$ - 1][a], -1 !== b && 5 === b.m) {
                            a = b;
                            this.f[a.ga][a.ea] = null;
                            game.add.tween(a).to({
                                x: E.j.ja[1].ib.worldPosition.x -
                                    E.j.ba.worldPosition.x + 23,
                                y: E.j.ja[1].ib.worldPosition.y - E.j.ba.worldPosition.y - 33
                            }, 450, Phaser.Easing.Linear.None, !0).onComplete.add(this.$e, this);
                            break a
                        }
                this.sc()
            }
            else this.sc()
        }
    },
    rc: function() {
        O = t.Nd;
        if (!0 !== X(this, arguments.callee.hb)) {
            for (var a = !1, b = 0; b < this.e.p; b++)
                for (var d = 0, e = this.e.$ - 1; 0 <= e; e--)
                    if (null === this.f[e][b])
                        for (var f = e - 1; 0 <= f; f--)
                            if (null !== this.f[f][b]) {
                                if (-1 === this.f[f][b])
                                    if (!0 === this.e.Ob) break;
                                    else continue;
                                this.f[e][b] = this.f[f][b];
                                this.f[f][b] = null;
                                this.f[e][b].Ga(b, e);
                                var a =
                                    this.f[e][b],
                                    f = Math.abs(f - e),
                                    g = F(b, e);
                                a.ya = !0;
                                game.add.tween(a).to({
                                    x: g[0],
                                    y: g[1]
                                }, 140 * f, Phaser.Easing.Linear.In, !0, 30 * d).onComplete.add(this.ee, this);
                                d++;
                                a = !0;
                                break
                            }!1 === a && (!0 === this.e.Ob ? this.fd() : this.lc())
        }
    },
    ee: function(a) {
        a.ya = !1;
        Y(this) || (!0 === this.e.Ob ? this.fd() : this.lc())
    },
    fd: function() {
        O = t.Ud;
        if (!0 !== X(this, arguments.callee.hb)) {
            this.vb = !1;
            for (var a = this.e.$ - 2; 0 <= a; a--)
                for (var b = 0; b < this.e.p; b++) null !== this.f[a][b] && -1 !== this.f[a][b] && (yb(this, b - 1, a) && zb(this, b - 1, a + 1) ? (Ab(this, b, a, b - 1, a +
                    1, this.Fc, this), this.vb = !0) : yb(this, b + 1, a) && zb(this, b + 1, a + 1) ? (Ab(this, b, a, b + 1, a + 1, this.Fc, this), this.vb = !0) : yb(this, b, a + 1) && (zb(this, b - 1, a + 1) ? (Ab(this, b, a, b - 1, a + 1, this.Fc, this), this.vb = !0) : zb(this, b + 1, a + 1) && (Ab(this, b, a, b + 1, a + 1, this.Fc, this), this.vb = !0)));
            !1 === this.vb && (!0 === this.vb ? this.rc() : this.lc())
        }
    },
    Fc: function(a) {
        a.ya = !1;
        Y(this) || (!0 === this.vb ? this.rc() : this.lc())
    },
    lc: function() {
        O = t.Md;
        if (!0 !== X(this, arguments.callee.hb)) {
            this.Lc = !1;
            for (var a = 0; a < this.e.p; a++) {
                for (var b = Math.floor(Math.random() *
                        this.e.oc), d = [], e = 0; e < this.e.$ && (!0 !== this.e.Ob || -1 !== this.f[e][a]); e++)
                    if (null === this.f[e][a]) {
                        var f;
                        do f = Math.floor(Math.random() * this.e.oc); while (f === b);
                        b = f;
                        f = lb(this, a, -1, f, 0);
                        this.Lc = !0;
                        4 === this.e.ka && !0 === this.e.Kb && 0 === this.e.Yb && 0 < this.e.Ed && (this.e.Yb = this.e.bd, this.e.Ed--, f.Nb(null, 5));
                        f.scale.set(0, 1);
                        var g = Math.abs(1 + e),
                            h = F(a, e);
                        f.ya = !0;
                        d.push([f, h, g]);
                        this.f[e][a] = f;
                        this.f[e][a].Ga(a, e)
                    }
                for (b = 0; b < d.length; b++) e = d[b], f = game.add.tween(e[0]).to({
                    x: e[1][0],
                    y: e[1][1]
                }, 140 * e[2], Phaser.Easing.Linear.In, !0, 140 * (d.length - b - 1)), game.add.tween(e[0].scale).to({
                    x: 1
                }, 100, Phaser.Easing.Linear.In, !0, 140 * (d.length - b - 1)), f.onComplete.add(this.Yd, this)
            }!1 === this.Lc && Bb(this)
        }
    },
    Yd: function(a) {
        a.ya = !1;
        Y(this) || Bb(this)
    },
    Zb: function() {
        if (!0 !== X(this, arguments.callee.hb))
            for (var a = function(a, b) {
                    if (W(this, b, a) && !0 === this.f[a][b].Ra) {
                        var d = 0,
                            h = !1;
                        2 === this.e.ka && !0 === xb(this, a, b) && (d += 1E3);
                        var k = this.f[a][b];
                        this.f[a][b] = null;
                        1 === k.m ? !0 === k.mc && (d += 720, h = !0) : 2 === k.m ? !0 === k.mc && (d += 1350, h = !0) : 0 === k.m ? (d += 80 * this.bc,
                            h = !0) : 4 === k.m && (d += 3E3, h = !0);
                        0 < d && vb(this, d, h, k.ga, k.ea, k.ia);
                        H("sndExpl" + y(1, 5));
                        Cb(this, k)
                    }
                }.bind(this), b = 0; b < this.e.$; b++)
                for (var d = 0; d < this.e.p; d++) a(b, d)
    },
    Re: function() {
        if (!0 !== this.kb && (O = t.Rd, !0 !== X(this, arguments.callee.hb))) {
            for (var a = 0, b = 0; b < this.e.$; b++)
                for (var d = 0; d < this.e.p; d++) {
                    var e = this.f[b][d];
                    if (0 === b && 4 === e.m) {
                        this.Da = 2;
                        this.xc();
                        return
                    }
                    if (4 === e.m) {
                        var f = e.ga - 1,
                            g = e.ea;
                        if (-1 === this.f[f][g]) {
                            var g = [-1, 1],
                                g = g[Math.floor(Math.random() * g.length)],
                                h = e.ea + g;
                            if (0 <= h && h < this.e.p && -1 !== this.f[f][h] &&
                                4 !== this.f[f][h].m) g = h;
                            else if (g *= -1, h = e.ea + g, 0 <= h && h < this.e.p && -1 !== this.f[f][h] && 4 !== this.f[f][h].m) g = h;
                            else continue
                        }
                        nb(this, e.ea, e.ga, g, f, t.od, this.vd);
                        a += 1
                    }
                }
            0 === a && this.vd()
        }
    },
    vd: function() {
        if (!0 !== this.kb && (O = t.od, !0 !== X(this, arguments.callee.hb))) {
            for (var a = [], b = 0; b < this.wc.length; b++) a.push(this.wc[b]);
            b = null;
            do {
                if (0 === a.length) break;
                var d = y(0, a.length - 1),
                    e = a[d];
                a.splice(d, 1);
                var f = e.ga,
                    g = e.ea;
                if (0 === this.f[f][g].m) {
                    b = e;
                    break
                }
            } while (1);
            null === b ? this.wd() : (f = b.ga, g = b.ea, game.add.tween(this.f[f][g].scale).to({
                x: 0,
                y: 0
            }, 220, Phaser.Easing.Linear.None, !0).onComplete.add(function() {
                this.f[f][g].Nb(null, 4);
                this.f[f][g].scale.set(0);
                game.add.tween(this.f[f][g].scale).to({
                    x: 1,
                    y: 1
                }, 150, Phaser.Easing.Back.Out, !0).onComplete.add(this.wd, this)
            }, this))
        }
    },
    wd: function() {
        this.nc()
    },
    $e: function(a) {
        this.e.Ea--;
        0 > this.e.Ea && (this.e.Ea = 0);
        T(this.e.Ea);
        vb(this, 8E3, !1);
        a.kill();
        this.rc()
    },
    Jc: function() {
        0 < this.e.ua ? Db(this) : Eb(this)
    },
    Wd: function() {
        this.f[this.Ib.cd][this.Ib.Uc].Nb(null, 2);
        vb(this, 3E3, !0, this.Ib.cd, this.Ib.Uc, this.f[this.Ib.cd][this.Ib.Uc].ia);
        Db(this)
    },
    xc: function() {
        N = r.Pb;
        O = t.Pb;
        1 === this.Da ? (this.qc = this.La >= this.e.dd ? 3 : this.La >= this.e.$b ? 2 : this.La >= this.e.mb ? 1 : 0, this.La > this.oa[this.va - 1] && (this.oa[this.va - 1] = this.La), 60 > this.va && -1 === this.oa[this.va] && (this.oa[this.va] = 0), E.n.md = !0, H("sndWin"), gradle.event('level_win')) : (this.qc = 0, H("sndLose"), gradle.event('level_lose'));
        I(E, E.k);
        Fb();
        Za(this, this.Da)
    }
};

function X(a, b) {
    return a.isPaused ? (a.Vc = b, !0) : !1
}

function Za(a, b) {
    for (var d = 0; d < a.oa.length; d++);
   // 3 !== b && (1 === b ? Android.levelCompleted() : 2 === b && Android.levelFailed())
}

function Eb(a) {
    for (var b = !1, d = 0; d < a.e.$; d++)
        for (var e = 0; e < a.e.p; e++)
            if (W(a, e, d)) {
                var f = a.f[d][e];
                1 === f.m && (f.wa(), b = !0);
                2 === f.m && (f.wa(), b = !0)
            }
    if (!0 === b) a.Zb();
    else {
        b = [];
        for (d = 0; d < a.e.$; d++)
            for (e = 0; e < a.e.p; e++)
                if (W(a, e, d) && (f = a.f[d][e], 3 === f.m)) {
                    do var f = y(0, a.e.$ - 1),
                        g = y(0, a.e.p - 1); while (null === a.f[f][g] || -1 === a.f[f][g] || 5 === a.f[f][g].m);
                    b.push([d, e]);
                    b.push([f, g]);
                    d = a.e.$;
                    e = a.e.p
                }
        0 < b.length ? (sb(a, 0, [a.f[b[0][0]][b[0][1]], a.f[b[1][0]][b[1][1]]]), a.u = null) : (N = r.Pb, O = t.Pb, game.time.events.add(1E3, a.xc,
            a))
    }
}

function Db(a) {
    var b;
    if (b = 0 < a.e.ua) a: {
        for (b = 0; b < a.e.$; b++)
            for (var d = 0; d < a.e.p; d++)
                if (null !== a.f[b][d] && -1 !== a.f[b][d] && 0 == a.f[b][d].m) {
                    b = !0;
                    break a
                }
        b = !1
    }
    if (b) {
        a.e.ua--;
        U(a.e.ua);
        do b = y(0, a.e.$ - 1), d = y(0, a.e.p - 1); while (null === a.f[b][d] || -1 === a.f[b][d] || 0 !== a.f[b][d].m);
        a.Ib = {
            cd: b,
            Uc: d
        };
        Ba(a.Ta, a.f[b][d].x, a.f[b][d].y, a.Wd, a)
    } else Eb(a)
}

function ob(a) {
    if (!0 === a.kb) a.Jc();
    else {
        var b = !1;
        4 === a.e.ka && 0 === a.e.Ea && (b = !0);
        3 === a.e.ka && 0 === a.e.Ma && (b = !0);
        !0 === a.e.yb && 0 >= a.e.ua && (b = !0);
        !0 === a.e.zb && O === t.xb && 0 >= a.cc && (b = !0);
        2 === a.e.ka && 0 >= cb(a) && (b = !0);
        if (!0 === b) {
            a.Da = 1;
            a.La < a.e.mb && (a.Da = 2);
            4 === a.e.ka && 0 < a.e.Ea && (a.Da = 2);
            3 === a.e.ka && 0 < a.e.Ma && (a.Da = 2);
            2 === a.e.ka && 0 < cb(a) && (a.Da = 2);
            if (1 === a.Da) {
                for (var b = !1, d = 0; d < a.e.$; d++)
                    for (var e = 0; e < a.e.p; e++)
                        if (W(a, e, d)) {
                            var f = a.f[d][e];
                            if (1 === f.m || 2 === f.m || 3 === f.m) b = !0, d = e = 50
                        }!0 === b || 0 < a.e.ua ? (O = t.Qd, !1 === a.kb ? (a.kb = !0, Ca("msg_happy"), H("happymmnt"), game.time.events.add(1E3, a.Jc, a)) : a.Jc()) : game.time.events.add(1E3, a.xc, a)
            } else a.xc();
            return !0
        }
        return !1
    }
}

function db(a) {
    E.j.ba.tc.callAll("kill");
    a.wc = [];
    a.uc = !1
}

function pb(a) {
    3 === a.e.ka && E.j.ba.tc.forEachAlive(function(a) {
        a.angle -= 2
    }, a)
}

function eb(a, b, d) {
    var e = E.j.ba.tc.getFirstDead();
    null === e && (e = E.j.ba.tc.create(0, 0, "flasksSpawnWhirpool", 0), z(e, .5, .5), e.Aa = function(a, b) {
        var d = F(a, b);
        e.reset(d[0], d[1]);
        e.Ga(a, b)
    }.bind(a), e.Ga = function(a, b) {
        e.ea = a;
        e.ga = b
    }.bind(a));
    e.Aa(d, b);
    return e
}

function cb(a) {
    for (var b = 0, d = 0; d < a.e.$; d++)
        for (var e = 0; e < a.e.p; e++) 0 < a.eb[d][e].Cb && b++;
    return b
}

function xb(a, b, d) {
    b = a.eb[b][d];
    if (0 < b.Cb) {
        b.Cb--;
        d = b.worldPosition.x;
        var e = b.worldPosition.y,
            f = E,
            g = 2;
        void 0 === g && (g = 1);
        for (var h = 0; h < g && !(30 < f.Ac.countLiving()); h++) {
            var k = f.Ac.getFirstDead();
            null === k && (k = f.Ac.create(0, 0), z(k, .5, .5), game.physics.enable(k, Phaser.Physics.ARCADE));
            k.loadTexture("blockParticle" + y(1, 3));
            k.reset(d, e);
            k.alpha = y(40, 70) / 100;
            k.angle = Math.floor(90 * Math.random()) - 45;
            k.lifespan = 1100;
            k.ef = Math.floor(200 * Math.random()) / 10 - 10;
            k.scale.set(.3 + Math.floor(15 * Math.random()) / 100);
            k.angle =
                Math.floor(360 * Math.random());
            k.allowGravity = !0;
            k.body.gravity.y = y(300, 1E3);
            k.body.velocity.y = -(40 * y(1, 4));
            k.body.velocity.x = y(-150, 150);
            game.tweens.removeFrom(k, !0);
            game.add.tween(k).to({
                alpha: 0
            }, 600, Phaser.Easing.Linear.None, !0, 500);
            k.revive()
        }
        b.dc(b.Cb)
    }
    T(cb(a));
    return 0 >= b.Cb ? (b.Cb = 0, b.kill(), !0) : !1
}

function Gb(a, b, d) {
    var e = E.j.ba.Wc.create(0, 0, "blockImg", 0);
    z(e, .5, .5);
    e.wa = function() {}.bind(a);
    e.dc = function(a) {
        0 > a && (a = 0);
        e.Cb = a;
        0 === a && e.kill();
        0 < a && (e.frame = a - 1)
    };
    a = F(d, b);
    e.reset(a[0], a[1]);
    e.ea = d;
    e.ga = b;
    e.dc(-1);
    return e
}

function mb(a) {
    for (var b = 0; 8 > b; b++) {
        a.eb[b] = [];
        for (var d = 0; 8 > d; d++) a.eb[b][d] = Gb(a, b, d)
    }
    E.j.ba.Wc.callAll("kill")
}

function vb(a, b, d, e, f, g) {
    a.La += b;
    a.Ba += b;
    !0 === d && (a = F(f, e), Da(a[0], a[1], b, g))
}

function F(a, b) {
    return [(u >> 1) + a * (u + 3), (v >> 1) + b * (v + 3)]
}

function $a(a) {
    E.j.ba.pb.forEachAlive(function(a) {
        game.tweens.removeFrom(a, !0)
    }, a);
    E.j.ba.pb.callAll("kill")
}

function Ya(a) {
    $a(a);
    E.j.ba.Wc.callAll("kill");
    db(a);
    a.f = [];
    a.pa = [];
    a.Db = 0;
    a.xa = null;
    a.u = null;
    a.Lb = [];
    a.isPaused = !1;
    a.ec = !1;
    null !== a.e.Hb && a.e.Hb.destroy()
}

function Y(a) {
    for (var b = 0; b < a.e.$; b++)
        for (var d = 0; d < a.e.p; d++)
            if (null !== Z(a, d, b) && !0 === Z(a, d, b).ya) return !0;
    return !1
}

function Hb(a, b, d) {
    for (var e = a.f[d][b].ia, f = a.f[d][b].m, g = 1, h = b - 1; 0 <= h; h--)
        if (null !== a.f[d][h] && -1 !== a.f[d][h] && a.f[d][h].ia === e && 5 !== f && 3 !== f) g += 1;
        else break;
    for (h = b + 1; h < a.e.p; h++)
        if (null !== a.f[d][h] && -1 !== a.f[d][h] && a.f[d][h].ia === e && 5 !== f && 3 !== f) g += 1;
        else break;
    if (3 <= g) a = !0;
    else {
        e = a.f[d][b].ia;
        f = a.f[d][b].m;
        g = 1;
        for (h = d - 1; 0 <= h; h--)
            if (null !== a.f[h][b] && -1 !== a.f[h][b] && a.f[h][b].ia === e && 5 !== f && 3 !== f) g += 1;
            else break;
        for (h = d + 1; h < a.e.$; h++)
            if (null !== a.f[h][b] && -1 !== a.f[h][b] && a.f[h][b].ia === e && 5 !== f &&
                3 !== f) g += 1;
            else break;
        a = 3 <= g
    }
    return a
}

function bb(a) {
    a.pa = [];
    for (var b = 0; b < a.e.$; b++)
        for (var d = 0; d < a.e.p - 1; d++) {
            var e = a.f[b][d],
                f = a.f[b][d + 1];
            null !== e && -1 !== e && null !== f && -1 !== f && (a.f[b][d + 1] = e, a.f[b][d] = f, Hb(a, d, b) ? a.pa.push([
                [b, d + 1],
                [b, d]
            ]) : Hb(a, d + 1, b) && a.pa.push([
                [b, d],
                [b, d + 1]
            ]), a.f[b][d] = e, a.f[b][d + 1] = f)
        }
    for (b = 0; b < a.e.$ - 1; b++)
        for (d = 0; d < a.e.p; d++) e = a.f[b][d], f = a.f[b + 1][d], null !== e && -1 !== e && null !== f && -1 !== f && (a.f[b + 1][d] = e, a.f[b][d] = f, Hb(a, d, b) ? a.pa.push([
                [b + 1, d],
                [b, d]
            ]) : Hb(a, d, b + 1) && a.pa.push([
                [b, d],
                [b + 1, d]
            ]), a.f[b][d] = e, a.f[b + 1][d] =
            f);
    if (0 === a.pa.length)
        for (e = [
                [0, -1],
                [0, 1],
                [-1, 0],
                [1, 0]
            ], b = 0; b < a.e.$; b++)
            for (d = 0; d < a.e.p; d++)
                if (3 === a.f[b][d].m)
                    for (f = 0; f < e.length; f++) {
                        if (-1 !== a.f[b + e[f][0]][d + e[f][1]].m && 5 !== a.f[b + e[f][0]][d + e[f][1]].m) {
                            a.pa.push([
                                [b, d]
                            ]);
                            break
                        }
                    } else
                        for (f = 0; f < e.length; f++) W(a, d + e[f][1], b + e[f][0]) && !1 !== ub(a.f[b][d], a.f[b + e[f][0]][d + e[f][1]]) && a.pa.push([
                            [b, d],
                            [b + e[f][0], d + e[f][1]]
                        ]);
    a.Db = y(0, a.pa.length - 1)
}

function Cb(a, b) {
    b.Ra = !1;
    b.kill();
    !0 !== function() {
        for (var a = 0; a < E.j.ba.pb.length; a++) {
            var b = E.j.ba.pb.getChildAt(a);
            if (null !== b && !0 === b.Ra) return !0
        }
        return !1
    }() && game.time.events.add(250, function() {
        this.rc()
    }, a)
}

function Bb(a) {
    !0 === a.e.Ob && !0 === a.Lc ? a.fd() : a.nc()
}

function Ab(a, b, d, e, f, g, h) {
    a.f[f][e] = a.f[d][b];
    a.f[d][b] = null;
    a.f[f][e].Ga(e, f);
    a = a.f[f][e];
    e = F(e, f);
    a.ya = !0;
    game.add.tween(a).to({
        x: e[0],
        y: e[1]
    }, 140, Phaser.Easing.Linear.In, !0, 0).onComplete.add(g, h)
}

function sb(a, b, d) {
    if (2 === b) {
        for (var e = 0; e < a.e.$; e++)
            for (var f = 0; f < a.e.p; f++)
                if (W(a, f, e)) {
                    var g = a.f[e][f];
                    g.wa()
                }
        d[0].Ra = !0;
        d[1].Ra = !0;
        a.Zb();
        H("spectFlame")
    } else {
        for (var e = 0 === b ? 1 : 0, h = d[e].ia, k = d[e].m, l = [], e = 0; e < a.e.$; e++)
            for (f = 0; f < a.e.p; f++) W(a, f, e) && (g = a.f[e][f], g.ia === h && (1 === k && (g.m = 1), 2 === k && (g.m = 2), l.push([g.ga, g.ea]), za(a.Ta, d[b].x, d[b].y, g.x, g.y)));
        d[b].Ra = !0;
        game.time.events.add(500, function() {
            for (var a = 0; a < l.length; a++) this.f[l[a][0]][l[a][1]].wa();
            this.Zb();
            H("spectFlame")
        }, a)
    }
}

function ub(a, b) {
    return 2 === a.m && 2 === b.m ? 2 : 1 === a.m && 1 === b.m ? 1 : 2 !== a.m && 1 !== a.m || 2 !== b.m && 1 !== b.m ? !1 : !0
}

function tb(a) {
    !1 !== a.ec && (a.ec = !1, !0 === a.e.yb && (a.e.ua--, 0 > a.e.ua && (a.e.ua = 0), U(a.e.ua), 4 === a.e.ka && !0 === a.e.Kb && a.e.Yb--))
}

function Ib(a) {
    null !== a.kd && (O = a.kd, a.kd = null);
    if (null !== a.jd) {
        var b = a.jd;
        a.jd = null;
        b.call(a)
    }
}

function nb(a, b, d, e, f, g, h) {
    a.kd = g;
    a.jd = h;
    O = t.Vd;
    g = !1;
    if (!1 !== W(a, e, f)) {
        var k = Z(a, b, d),
            l = Z(a, e, f);
        Jb(k);
        Jb(l);
        k.Ga(e, f);
        Kb(a, b, d, l);
        l.Ga(b, d);
        Kb(a, e, f, k);
        g ? (e = F(e, f), k.x = e[0], k.y = e[1], e = F(b, d), l.x = e[0], l.y = e[1]) : (game.tweens.removeFrom(k, !0), game.tweens.removeFrom(l, !0), e = F(e, f), k.ya = !0, game.add.tween(k.position).to({
            x: e[0],
            y: e[1]
        }, 140, Phaser.Easing.Linear.In, !0, 0).onComplete.add(function() {
            k.ya = !1;
            Y(this) || Ib(this)
        }, a), l.ya = !0, e = F(b, d), game.add.tween(l.position).to({
            x: e[0],
            y: e[1]
        }, 140, Phaser.Easing.Linear.In, !0, 0).onComplete.add(function() {
            l.ya = !1;
            Y(this) || Ib(this)
        }, a))
    }
}

function Kb(a, b, d, e) {
    0 > d || 0 > b || d >= a.e.$ || b >= a.e.p || -1 !== a.f[d][b] && (a.f[d][b] = e)
}

function Z(a, b, d) {
    return 0 > d || 0 > b || d >= a.e.$ || b >= a.e.p || -1 === a.f[d][b] ? null : a.f[d][b]
}

function zb(a, b, d) {
    return 0 > d || 0 > b || d >= a.e.$ || b >= a.e.p || -1 === a.f[d][b] ? !1 : null === a.f[d][b] ? !0 : !1
}

function yb(a, b, d) {
    return 0 > d || 0 > b || d >= a.e.$ || b >= a.e.p ? !1 : -1 === a.f[d][b] ? !0 : !1
}

function W(a, b, d) {
    return 0 > d || 0 > b || d >= a.e.$ || b >= a.e.p || -1 === Z(a, b, d) || null === Z(a, b, d) ? !1 : !0
}

function wb(a) {
    for (var b = 0, d = 0, e = 0; e < a.length; e++) a[e].zd > b && (b = a[e].zd, d = e);
    return d
}

function Jb(a) {
    if (!1 !== Lb(a) && 0 !== a.Sa.length) {
        for (var b = 0; b < a.Sa.length; b++) a.Sa[b].stop();
        a.scale.set(1);
        b = F(a.ea, a.ga);
        a.reset(b[0], b[1])
    }
}

function rb(a) {
    for (var b = 0; b < a.e.$; b++)
        for (var d = 0; d < a.e.p; d++) W(a, d, b) && Jb(a.f[b][d])
}

function Lb(a) {
    if (void 0 === a.Sa) return !1;
    for (var b = 0; b < a.Sa.length; b++)
        if (!0 === a.Sa[b].isRunning) return !0;
    return !1
}

function qb(a, b) {
    if (!0 !== Lb(b)) {
        var d = a(b),
            e = 0;
        void 0 !== d.delay && (e = d.delay);
        b.Sa = [];
        void 0 !== d.scale && b.Sa.push(game.add.tween(b.scale).to({
            x: d.scale.x,
            y: d.scale.y
        }, d.time, Phaser.Easing.Linear.None, !0, e));
        void 0 !== d.position && b.Sa.push(game.add.tween(b).to({
            x: d.position.x,
            y: d.position.y
        }, d.time, Phaser.Easing.Linear.None, !0, e))
    }
}

function lb(a, b, d, e, f) {
    var g = E.j.ba.pb.getFirstDead();
    if (null === g) {
        g = E.j.ba.pb.create(0, 0);
        z(g, .5, .5);
        var h = game.make.sprite(0, 0, "rotGlw");
        h.anchor.set(.5);
        g.sa = g.addChild(h);
        g.sa.kill();
        g.sa.hd = function() {
            g.sa.rotation = 0;
            g.sa.scale.set(1.3);
            g.sa.revive();
            g.sa.scale.set(1.2);
            game.add.tween(g.sa.scale).to({
                x: 0,
                y: 0
            }, 150, Phaser.Easing.Linear.None, !0, 1050);
            g.sa.scale.set(0);
            game.add.tween(g.sa.scale).to({
                x: 1.2,
                y: 1.2
            }, 200, Phaser.Easing.Linear.None, !0);
            game.add.tween(g.sa).to({
                rotation: 2
            }, 1200, Phaser.Easing.Linear.None, !0);
            g.sa.lifespan = 1400
        };
        h = game.make.sprite(0, 0, "gameCharactersImg", 0);
        z(h, .5, 1);
        g.fb = g.addChild(h);
        g.fb.inputEnabled = !0;
        g.fb.events.onInputDown.add(function() {
            var a = g;
            N === r.wb && O === t.xb && (this.xa = a, this.Lb = [game.input.x, game.input.y], E.j.ba.pb.bringToTop(a), qb(ha, a), qb(ia, this.f[this.pa[this.Db][0][0]][this.pa[this.Db][0][1]]))
        }, a);
        g.fb.events.onInputUp.add(function() {
            N === r.wb && O === t.xb && (this.xa = null, this.Lb = [])
        }, a);
        g.Nb = function(a, b) {
            void 0 === a || null === a ? a = g.ia : g.ia = a;
            void 0 === b || null === b || (g.m =
                b);
            g.scale.set(1);
            var d = "gameCharactersImg";
            1 === g.m ? (g.sa.hd(), d = "gameCharBomb", H("sndBombCreate")) : 2 === g.m ? (g.sa.hd(), d = "gameCharBombCross", H("sndBombCreate")) : 4 === g.m ? d = "gameCharFlasks" : 5 === g.m ? (d = "gameCharPearl", a = g.ia = null) : 3 === g.m && (g.sa.hd(), d = "gameCharSpectrum", a = g.ia = null, H("sndBombCreate"));
            g.fb.loadTexture(d);
            g.fb.frame = a;
            g.fb.anchor.set(.5, 1);
            g.fb.y = g.fb.height / 2
        };
        g.m = 0;
        g.Aa = function(a, b) {
            var d = F(a, b);
            g.reset(d[0], d[1]);
            g.Ga(a, b)
        }.bind(a);
        g.Ga = function(a, b) {
            g.ea = a;
            g.ga = b;
            g.zd = Date.now()
        }.bind(a);
        g.wa = function() {
            if (!0 !== g.Ra && 5 !== g.m && 3 !== g.m) {
                g.Ra = !0;
                Ha(this.Ta, g.ga, g.ea);
                if (1 === g.m) {
                    for (var a = g.ga - 1, b = g.ea - 1, d = a; d < a + 3; d++)
                        for (var e = b; e < b + 3; e++) W(this, e, d) && Z(this, e, d).wa();
                    Fa(this.Ta, g.ga, g.ea);
                    a = E;
                    a.kc = 10;
                    a.Ab = .5;
                    null == a.Ja && (a.Ja = Phaser.Utils.extend(!1, {}, game.world.bounds));
                    game.world.setBounds(a.Ja.x - a.Ab, a.Ja.y - a.Ab, a.Ja.width + 2 * a.Ab, a.Ja.height + 2 * a.Ab)
                } else if (2 === g.m) {
                    d = g.ga;
                    for (e = 0; e < this.e.p; e++) W(this, e, d) && Z(this, e, d).wa();
                    e = g.ea;
                    for (d = 0; d < this.e.$; d++) W(this, e, d) && Z(this, e, d).wa();
                    a = this.Ta;
                    b = g.ga;
                    d = g.ea;
                    e = Ea(a);
                    e.angle = 0;
                    e.anchor.set(.5);
                    e.Aa(d, b);
                    game.add.tween(e.scale).to({
                        x: [4, 0],
                        y: [1.5, 0]
                    }, 225, Phaser.Easing.Linear.None, !0);
                    e.lifespan = 225;
                    e = Ea(a);
                    e.angle = 90;
                    e.anchor.set(.5);
                    e.Aa(d, b);
                    game.add.tween(e.scale).to({
                        x: [4, 0],
                        y: [1.5, 0]
                    }, 225, Phaser.Easing.Linear.None, !0);
                    e.lifespan = 225
                }
                4 === g.m && (this.e.Ma--, 0 > this.e.Ma && (this.e.Ma = 0), T(this.e.Ma))
            }
        }.bind(a)
    }
    g.Nb(e, f);
    g.Aa(b, d);
    g.scale.set(1);
    g.Ra = !1;
    g.ya = !1;
    g.mc = !0;
    g.Rf = [];
    g.sa.kill();
    game.tweens.removeFrom(g, !0);
    g.Sa = [];
    return g
}

function ab(a) {
    for (var b = function(a, b) {
            var d = 0;
            do d = Math.floor(Math.random() * this.e.oc); while (2 <= a && null !== this.f[b][a - 2] && -1 !== this.f[b][a - 2] && this.f[b][a - 2].ia === d && null !== this.f[b][a - 1] && this.f[b][a - 1].ia === d || 2 <= b && null !== this.f[b - 2][a] && -1 !== this.f[b - 2][a] && this.f[b - 2][a].ia === d && null !== this.f[b - 1][a] && this.f[b - 1][a].ia === d);
            return d
        }.bind(a), d = 0; d < a.e.$; d++) {
        a.f[d] = [];
        for (var e = 0; e < a.e.p; e++) 0 != a.e.world[d * a.e.p + e] ? Kb(a, e, d, lb(a, e, d, b(e, d), 0)) : Kb(a, e, d, -1)
    }
};
MusicPlayer = function() {
    this.Ca = !0;
    this.Wa = [];
    this.sounds = [];
    this.Bb = null
};
MusicPlayer.prototype = {
    constructor: MusicPlayer,
    create: function() {
        this.Wa[0] = game.add.audio("musicMenu", 1, !0);
        this.Wa[1] = game.add.audio("musicGame", 1, !0);
        for (var a = 0; a < A.length; a++) {
            var b = 1;
            void 0 !== A[a].bb && (b = A[a].bb);
            this.sounds[A[a].na] = game.add.audio(A[a].na, b)
        }
    }
};

function Ua() {
    var a = C;
    if (q) {
        if (a.Ca) {
            if (a.Ca = !1, q)
                for (var b = 0; b < a.Wa.length; b++) a.Wa[b].stop()
        } else a.Ca = !0, M(a, a.Bb, !0);
        Fb()
    }
}

function H(a) {
    var b = C;
    if (q && b.Ca) try {
        b.sounds[a].play()
    } catch (d) {}
}

function M(a, b, d) {
    if (q && (b != a.Bb || 1 == d) && (a.Bb = b, a.Ca)) {
        for (b = 0; b < a.Wa.length; b++) a.Wa[b].stop();
        a.Wa[a.Bb].play()
    }
};
var N, O, B = new kb,
    E = new Ja,
    C = new MusicPlayer;

function StateGame() {}
StateGame.prototype = {
    preload: function() {
        u = game.cache.getImage("gmTileImg").width;
        v = game.cache.getImage("gmTileImg").height;
        E.preload();
        B.preload();
        game.input.maxPointers = 1;
        var a = E;
        game.stage.backgroundColor = "#000000";
        a.za = game.add.group();
        var b = game.add.sprite(0, 0, "bgImg");
        b.height = game.height;
        b.width = game.width;
        a.za.Df = a.za.add(b);
        b = game.add.group();
        a.za.addChild(b);
        a.za.cb = b;
        a.za.cb.Gc = 0
    },
    create: function() {
        C.create();
        E.create();
        B.create();
        console.log("send", "event", "basic", "loaded", partnerName, 1);
        N = r.gc;
        O = t.fc;
        I(E, E.q);
        M(C, 0);
        game.onPause.add(Nb);
        game.onResume.add(Ob);
        this.yd = Date.now()
    },
    update: function() {
        game.time.physicsElapsed = (Date.now() - this.yd) / 1E3;
        B.update();
        E.update();
        this.yd = Date.now()
    }
};

function Fb() {
    try {
        localStorage.setItem("gradle_stk", JSON.stringify({
            snd: C.Ca,
            scrs: B.oa
        }))
    } catch (a) {}
}

function Nb() {
    !0 === E.j.visible && !0 === E.j.sb.inputEnabled && E.td();
    var a = C;
    q && a.Ca && a.Wa[a.Bb].pause()
}

function Ob() {
    var a = C;
    q && a.Ca && a.Wa[a.Bb].resume()
};
var qa = 575,
    pa = 950,
    resolutionY = pa,
    resolutionX = 480,
    Pb = Phaser.CANVAS;
da && (Pb = Phaser.AUTO);
var Qb = 0,
    Rb = /MSIE (\d+\.\d+);/.test(navigator.userAgent),
    Sb = !!navigator.userAgent.match(/Trident\/7.0/),
    Tb = navigator.userAgent.indexOf("rv:11.0");
Rb && (Qb = new Number(RegExp.$1)); - 1 != navigator.appVersion.indexOf("MSIE 10") && (Qb = 10);
Sb && -1 != Tb && (Qb = 11);
11 == Qb && (renderer = Phaser.CANVAS);
var game;

function phaserInit() {
    game = new Phaser.Game(resolutionX, resolutionY, Pb, "");
    game.state.add("StateSplash", StateSplash);
    game.state.add("StatePreload", StatePreload);
    game.state.add("StateGame", StateGame);
    game.state.start("StateSplash")
}

window.phsrI = phaserInit;
document.documentElement.style.overflow = "hidden";
document.body.scroll = "no";
window.addEventListener("contextmenu", function(a) {
    a.preventDefault()
});
window.addEventListener("touchend", function() {
    if (null !== game) try {
        "running" !== game.sound.context.state && game.sound.context.resume()
    } catch (a) {}
}, !1);