var version = '1.0';
var activeButtons = true;
var modulePeek = [];
var peeked = 0;
var mobile = false;

var preloadModules = [];
var preloadScripts = [];

var listeners = {
    twitter: [],
    video: [],
    locator: [],
    gallery: []
}

document.getElementById('border').style.border = '1px solid '+config.global.border;

document.getElementById('loader').innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path fill="#444444" d="M24.5 28c0.275 0 0.5 0.224 0.5 0.5s0 1.5 0 1.5h-19c0 0 0-1.224 0-1.5s0.224-0.5 0.5-0.5h1.67c0.083-6.658 4.432-8.804 4.432-11.495 0-2.705-4.429-2.885-4.471-11.505h-1.631c-0.276 0-0.5-0.224-0.5-0.5s0-1.5 0-1.5h19c0 0 0 1.224 0 1.5s-0.225 0.5-0.5 0.5h-1.53c-0.042 8.62-4.471 8.8-4.471 11.505 0 2.691 4.35 4.837 4.433 11.495h1.568zM17.111 16.505c0-2.716 4.43-2.885 4.471-11.505h-12.063c0.041 8.62 4.471 8.789 4.471 11.505 0 2.611-4.351 4.812-4.433 11.495h0.758c0.178-0.593 0.769-1.306 1.79-1.834l1.327-0.677c0.834-0.431 1.334-0.722 1.5-0.872s0.354-0.486 0.564-1.008c0.221 0.521 0.41 0.857 0.57 1.008s0.654 0.441 1.484 0.872l1.32 0.677c1.015 0.528 1.604 1.241 1.779 1.834h0.894c-0.082-6.683-4.432-8.884-4.432-11.495zM16.070 15.037c-0.12 0.236-0.221 0.685-0.301 1.347-0.020 0.2-0.064 0.501-0.135 0.902-0.070-0.401-0.115-0.702-0.135-0.902-0.081-0.662-0.182-1.11-0.303-1.347-0.121-0.235-0.462-0.658-1.025-1.271l-1.251-1.368c-0.855-0.922-1.403-1.584-1.644-1.984 1.484 0.945 2.933 1.418 4.347 1.418s2.868-0.473 4.362-1.418c-0.25 0.4-0.8 1.062-1.649 1.984l-1.246 1.368c-0.56 0.613-0.901 1.036-1.020 1.271z"></path></svg>';

function init() {

    trace(version);

    loadImage([
        //getURL(config.global.tab.bg),
        getURL(config.global.intro.bg),
        getURL(config.global.header.bg)
    ], loadModules);
}

function loadModules() {

    
    if(config.module.length)
    {
        for(var i = 0; i < config.module.length; i++)
            preloadModules.push(config.module[i].file);

        loadFile(uniq(preloadModules), loadSecondaryScripts);
    }
    else
    {
        loadSecondaryScripts();
    }

}

function loadSecondaryScripts() {

    if(preloadScripts.length)
        loadFile(uniq(preloadScripts), adStart);
    else
        adStart();
}

function adStart() {

    var backup = document.getElementById('backup')
        backup.src = getURL(config.global.intro.bg);
        backup.onclick = function(e) {
            Enabler.exitOverride('Background', config.global.intro.exit);
        }

    var header = document.getElementById('header');
        
    var hgb = header.getElementsByClassName('background')[0];
        hgb.src = getURL(config.global.header.bg);
        hgb.onclick = function(e) {
            Enabler.exitOverride('Header', config.global.header.exit);
        }

    var hcta = document.createElement('div');
        hcta.className = 'header_cta abs btn';
        hcta.onclick = function(e) {
            trace('Header CTA');
        }
        header.appendChild(hcta);

    document.getElementById('container').style.opacity = 1;

    for(var i = 0; i < config.module.length; i++)
    {
        var m = config.module[i].file.split('.')[0];

        this["module_"+i] = new window[m]( config.module[i], i );
        this["module_"+i].createModule();
        this["module_"+i].createTab();
    }

    // INTRO ANIMATION (?)

    toggleSpinner(0);

    setTimeout(function(){
        removeClass(document.getElementById('header'), 'start');
    }, 1000);

    setTimeout(function(){
        removeClass(document.getElementById('subcontainer'), 'start');
    }, 1900);

    // SETUP PEEK

    if(modulePeek.length)
    setTimeout(togglePeek, 3000);
}

function toggleSpinner(bool)
{
    if(bool)
    {
        document.getElementById('loader').style.visibility = 'visible';
        addClass(document.getElementById('loader'), 'active');
    }
    else
    {
        removeClass(document.getElementById('loader'), 'active');
        setTimeout(function(){
            document.getElementById('loader').style.visibility = 'hidden';
        }, 500)
    }
}

function togglePeek()
{
    var delay = 3000;

    if(peeked <= 2)
    {
        for(var i = 1; i < modulePeek.length + 1; i++) {
            autoPeek(modulePeek[i - 1], 'active', 1000 * i);

            if(peeked === 2 && i === modulePeek.length)
            {
                setTimeout(function(){
                    EventBus.dispatch("AUTO_GALLERY", window);
                }, ( modulePeek.length * 1000 ))
            }
            else
                setTimeout(togglePeek, ( modulePeek.length * 1000 ) + delay);
        }

        peeked++;
    }
}

function autoPeek(obj, cl, num)
{
    setTimeout(function(){

        addClass(obj, cl)

        setTimeout(function(){
            if(!isMobile()) removeClass(obj, cl);
        }, 1000)
    }, num)
}

