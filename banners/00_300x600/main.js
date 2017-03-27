
function init() {
    trace(version), trace("Loading images..."), loadImage([getURL(config.global.header.img), getURL(config.global.footer.img)], loadModules)
}

function loadModules() {
    if (trace("Loading modules..."), config.module.length) {
        for (var e = 0; e < config.module.length; e++) preloadModules.push(config.module[e].file);
        loadFile(uniq(preloadModules), loadSecondaryScripts)
    } else loadSecondaryScripts()
}

function loadSecondaryScripts() {
    trace("Loading secondary scripts..."), preloadScripts.length ? loadFile(uniq(preloadScripts), adStart) : adStart()
}

function adStart() {
    trace("Initializing AD");
    var e = document.getElementById("header");
    e.style.backgroundImage = "url(" + getURL(config.global.header.img) + ")", e.getElementsByClassName("trigger")[0].onclick = function(e) {
        Enabler.counter("Open Brought By", !0), addClass(document.getElementsByClassName("btybContainer")[0], "active")
    };
    var t = document.getElementById("footer"),
        n = document.createElement("img");
    n.className = "background abs btn", n.src = getURL(config.global.footer.img), n.onclick = function(e) {
        Enabler.exitOverride("AD Background", config.global.footer.exit)
    }, t.appendChild(n);
    // var l = document.createElement("div");
    // l.className = "cta abs btn", l.onclick = function(e) {
    //     Enabler.exitOverride("AD CTA", config.global.footer.exit)
    // }, t.appendChild(l);
    document.getElementById("container").style.opacity = 1;
    for (var o = 0; o < config.module.length; o++) {
        var a = config.module[o].file.split(".")[0];
        this["module_" + o] = new window[a](config.module[o], o), this["module_" + o].createModule()
    }
    toggleSpinner(0), generateLegal()
}

function toggleSpinner(e) {
    e ? (document.getElementById("loader").style.visibility = "visible", addClass(document.getElementById("loader"), "active")) : (removeClass(document.getElementById("loader"), "active"), setTimeout(function() {
        document.getElementById("loader").style.visibility = "hidden"
    }, 500))
}

function generateLegal() {
    var e = document.getElementById("topbox"),
        t = document.createElement("div");
    t.className = "abs btybContainer";
    var n = document.createElement("div");
    n.className = "abs header", n.innerHTML = config.global.header.legal.header;
    var l = document.createElement("div");
    l.className = "rel wrapper", l.innerHTML = config.global.header.legal.text;
    var o = document.createElement("div");
    o.className = "abs close_btn_small btn", o.onclick = function() {
        Enabler.counter("Close Brought By", !0), removeClass(document.getElementsByClassName("btybContainer")[0], "active")
    };
    var a = document.createElement("div");
    a.innerHTML = "close", a.className = "abs", o.appendChild(a);
    var i = document.createElement("div");
    i.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="8" viewBox="0 0 32 32"><path fill="#444444" d="M27.993 4c0.002 0.002 0.005 0.005 0.007 0.007v23.986c-0.002 0.002-0.005 0.005-0.007 0.007h-23.986c-0.003-0.002-0.005-0.005-0.007-0.007v-23.986c0.002-0.003 0.005-0.005 0.007-0.007h23.986zM28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4v0z"></path><path fill="#444444" d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path></svg>', i.className = "abs", o.appendChild(i), t.appendChild(o), t.appendChild(l), t.appendChild(n), e.appendChild(t), t.getElementsByClassName("sponsor")[0].onclick = function(e) {
        Enabler.exitOverride("Sponsor Policy", this.title)
    }
}
var version = "(IMU) 1.0",
    activeButtons = !0,
    mobile = isMobile(),
    preloadModules = [],
    preloadScripts = [];
document.getElementById("border").style.border = "1px solid " + config.global.border, document.getElementById("loader").innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path fill="#444444" d="M24.5 28c0.275 0 0.5 0.224 0.5 0.5s0 1.5 0 1.5h-19c0 0 0-1.224 0-1.5s0.224-0.5 0.5-0.5h1.67c0.083-6.658 4.432-8.804 4.432-11.495 0-2.705-4.429-2.885-4.471-11.505h-1.631c-0.276 0-0.5-0.224-0.5-0.5s0-1.5 0-1.5h19c0 0 0 1.224 0 1.5s-0.225 0.5-0.5 0.5h-1.53c-0.042 8.62-4.471 8.8-4.471 11.505 0 2.691 4.35 4.837 4.433 11.495h1.568zM17.111 16.505c0-2.716 4.43-2.885 4.471-11.505h-12.063c0.041 8.62 4.471 8.789 4.471 11.505 0 2.611-4.351 4.812-4.433 11.495h0.758c0.178-0.593 0.769-1.306 1.79-1.834l1.327-0.677c0.834-0.431 1.334-0.722 1.5-0.872s0.354-0.486 0.564-1.008c0.221 0.521 0.41 0.857 0.57 1.008s0.654 0.441 1.484 0.872l1.32 0.677c1.015 0.528 1.604 1.241 1.779 1.834h0.894c-0.082-6.683-4.432-8.884-4.432-11.495zM16.070 15.037c-0.12 0.236-0.221 0.685-0.301 1.347-0.020 0.2-0.064 0.501-0.135 0.902-0.070-0.401-0.115-0.702-0.135-0.902-0.081-0.662-0.182-1.11-0.303-1.347-0.121-0.235-0.462-0.658-1.025-1.271l-1.251-1.368c-0.855-0.922-1.403-1.584-1.644-1.984 1.484 0.945 2.933 1.418 4.347 1.418s2.868-0.473 4.362-1.418c-0.25 0.4-0.8 1.062-1.649 1.984l-1.246 1.368c-0.56 0.613-0.901 1.036-1.020 1.271z"></path></svg>';