/* IMAGE PRELOADER */
var loadImage = function(arg, callback)
{
    switch(typeof arg)
    {
        case "object":
            var lcounter  = 0;

            for(var i = 0; i < arg.length; i++)
            {
                var img = new Image();

                    img.onload = function() {
                        if(++lcounter == arg.length && callback)
                            callback();
                    };
                    
                    img.onerror = function(e) { if(console) console.log(e); };
                    img.src = arg[i];
            }
        break;
        default:
            var img = new Image();
                img.onload = callback; 
                img.onerror = function(e) { if(console) console.log(e); };
                img.src = arg;

    }
};

/* SCRIPT PRELOADER */
var Loader = function () {};
    
Loader.prototype = {
    queue: function (scripts, callback) {

        if(typeof scripts === 'string')
        {
            this.scriptArray = new Array(String(scripts));
            this.totalRequired  = 1;
        }
        else
        {
            this.scriptArray    = scripts;
            this.totalRequired  = scripts.length;
        }
        
        this.loadCount      = 0;
        this.callback       = callback;
        this.processScript( this.loadCount );
    },
    processScript: function(num) {
        if(console) console.log( 'loading file '+ (num+1) + ' of ' + this.totalRequired + ' ('+this.scriptArray[ num ]+')');
        this.writeScript( this.scriptArray[ num ] );
    },
    loaded: function (evt) {
        this.loadCount++;

        if ( this.loadCount == this.totalRequired && typeof this.callback === 'function' ) 
        {
            trace('all scripts loaded');
            this.callback.call();
        }
        else
            this.processScript( this.loadCount );   
        
    },
    writeScript: function (src) {

        var self = this;
        var s;

        switch(src.split('.')[ (src.split('.').length - 1 )])
        {
            case "css":
                s = document.createElement('link');
                s.rel = 'stylesheet';
                s.type = 'text/css';
                s.href = src;
                
            break;
            default:
                s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = src;
        }      

        s.addEventListener('load', function (e) { self.loaded(e); }, false);    

        var head = document.getElementsByTagName('head')[0];
            head.appendChild(s);
    }
}

function loadFile(scripts, cb)
{
    var l = new Loader();
        l.queue( scripts, cb );
}