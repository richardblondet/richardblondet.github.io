/* STUDIO POLITE */
if (!Enabler.isInitialized()) 
    Enabler.addEventListener( studio.events.StudioEvent.INIT, enablerInitialized ); 
else
    enablerInitialized();

function enablerInitialized() { 
    if (!Enabler.isPageLoaded()) 
        Enabler.addEventListener( studio.events.StudioEvent.PAGE_LOADED, pageLoaded); 
    else
        pageLoaded(); 
}

function pageLoaded() {
    if(console) console.log('[Studio Enabler] Callback set to: init()\n\t\t\t\t Common methods: Enabler.exitoverride(ID, URL), Enabler.counter(ID, true)\n\t\t\t\t Custom methods: loadVideoMetrics(), getURL(URL)');
    init();    
}

function adSupported()
{
    if(console) console.log('[Studio Enabler] Callback set to: init()\n\t\t\t\t Common methods: Enabler.exitoverride(ID, URL), Enabler.counter(ID, true)\n\t\t\t\t Custom methods: loadVideoMetrics(), getURL(URL)');
    init();
}

/* STUDIO RESOLVE URL */

function getURL(arg) {
    
    var value;

    switch(typeof arg)
    {
        case "object":
            value = [];
            for(var i = 0; i < arg.length; i++)
                value.push( Enabler.getUrl( arg[i] ) );
        break;
        default:
            value = Enabler.getUrl(arg);

    }
    
    return value;
}

/* INITIALIZE VIDEO METRICS */
function loadVideoMetrics() {
    if(Enabler) {
        Enabler.loadModule(studio.module.ModuleId.VIDEO);
        if(console) console.log('Studio Video Metrics Loaded\nUSAGE: studio.video.Reporter.attach("VIDEO_ID", VIDEO_ELEMENT);');
    }
}