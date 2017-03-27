// VIDEO (HTML) SUB-ROUTINES

preloadScripts.push('style_video.css');
preloadScripts.push('helper_htmlvideo.js');

function module_video_html(obj, num) {

    var self = this;
    this.tabActive = false;

    this.obj = obj;
    this.num = num;
    this.large = false;

    this.active = obj.active;
    this.poster_small;
    this.vs;
    this.vb;

    loadVideoMetrics();

    Enabler.addEventListener(studio.events.StudioEvent.EXIT, function(e) {
        if(self.tabActive) self.toggle(0);
    });
}

module_video_html.prototype.createModule = function() {

    var self = this;
    var mod_size = ( this.large ? "mod_large" : "mod_reg" );

    var parent = document.getElementById('subcontainer');

    var container = document.createElement('div');
        container.id = 'module_'+this.num;
        container.style.border = '1px solid '+config.global.border;
        container.className = 'rel btn mod '+mod_size+' mod_vid border';

    var wrapper = document.createElement('div');
        wrapper.className = 'wrapper rel';

    this.poster_small = document.createElement('img');
    this.poster_small.className = 'poster abs';
    this.poster_small.src = getURL(this.obj.bg.small);

    if(this.active)
    {
        var vel = document.createElement('div');
            vel.className = 'video_element abs';
            vel.id = 'video_smallcontainer_'+this.num;

        var cta_vid = document.createElement('div');
            cta_vid.className = 'cta_video rel btn';
            cta_vid.innerHTML = 'play with sound';

        wrapper.appendChild(vel);
        wrapper.appendChild(this.poster_small);
        wrapper.appendChild(cta_vid);
    }
    else
    {
        var cta = document.createElement('div');
            cta.className = 'cta_regular abs';

        var title = document.createElement('span');
            title.className = 'rel mod_name';
            title.innerHTML = this.obj.mod_name;

        addClass(wrapper, 'peek');
        addClass(wrapper, 'animate');
        wrapper.onmouseover = function() {
            addClass(this, 'over');
        };
        wrapper.onmouseout = function() {
            removeClass(this, 'over');
        };

        cta.appendChild(title);
        wrapper.appendChild(this.poster_small);
        wrapper.appendChild(cta);
    }

    container.appendChild(wrapper);
    parent.appendChild(container);

    // PEEKABLE
    if(!this.obj.active)
        modulePeek.push( wrapper );

    // SETUP LISTENERS
    container.onclick = function(e) {
        self.toggle(1);
    }
}

module_video_html.prototype.createTab = function() {

    var self = this;

    var parent = document.getElementById('subcontainer');

    var container = document.createElement('div');
        container.id = 'tab_'+this.num;
        container.className = 'abs animate tab tab_'+this.obj.tab_class;
        
    // var bg = document.createElement('img');
    //     bg.className = 'background abs btn';
    //     bg.src = getURL(config.global.tab.bg);

    var content = document.createElement('div');
        content.className = 'abs animate content';

    var vel = document.createElement('div');
        vel.id = 'video_bigcontainer_'+this.num;
        vel.className = 'rel video_element';

    var wrapper = document.createElement('div');
        wrapper.className = 'wrapper abs';

    var title = document.createElement('div');
        title.className = 'rel title lato';
        title.innerHTML = this.obj.title;
            
    var text = document.createElement('div');
        text.className = 'rel description lato';
        text.innerHTML = this.obj.description;

    var misc = document.createElement('div');
        misc.className = 'rel attr lato';
        misc.innerHTML = this.obj.misc;

    var more = document.createElement('img');
        more.className = 'rel more btn';
        more.src = getURL(this.obj.learn);
        more.onclick = function() {
            Enabler.exitOverride('Video CTA', self.obj.exit);
        }

    var close = document.createElement('div');
        close.className = 'abs btn close_tab';
        close.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24"><path fill="#444444" d="M12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM14.578 8.016l1.406 1.406-2.578 2.578 2.578 2.578-1.406 1.406-2.578-2.578-2.578 2.578-1.406-1.406 2.578-2.578-2.578-2.578 1.406-1.406 2.578 2.578z"></path></svg>'
        close.getElementsByTagName('path')[0].style.fill = config.global.tab.close_color;

    var header = document.createElement('div');
        header.className = 'tab_header abs btn';
    
    wrapper.appendChild(title);
    wrapper.appendChild(text);
    wrapper.appendChild(misc);
    wrapper.appendChild(more);
    content.appendChild(vel);
    content.appendChild(wrapper);
    //container.appendChild(bg);
    container.appendChild(content);
    container.appendChild(header);
    container.appendChild(close);
    parent.appendChild(container);

    // SETUP LISTENERS
    // bg.onclick = function(e) {
    //     Enabler.exitOverride('Background', config.global.intro.exit);
    // }

    header.onclick = function(e) {
        Enabler.exitOverride('Header', config.global.header.exit);
    }

    close.onclick = function(e){
        self.toggle(0);
    };

    setTimeout(function(e) {
        self.setVideo();
    }, 10);
};

module_video_html.prototype.toggle = function(bool) {
    if(bool)
    {
        addClass(document.getElementById('tab_'+this.num), 'active');
        Enabler.counter('Open Video Module', true);
        this.tabActive = true;

        this.vb.play();
        this.vb.seek(0);

        if(!isMobile() && this.obj.active) {
            this.vs.pause();
        }
        EventBus.dispatch("KILL_SLIDESHOW", window);
    }
    else
    {
        removeClass(document.getElementById('tab_'+this.num), 'active');
        Enabler.counter('Close Video Module', true);
            
        this.tabActive = false;

        this.vb.pause();

        if(!isMobile() & this.obj.active) {
            this.vs.seek(0);
            this.vs.play();
        }
    }
};

module_video_html.prototype.setVideo = function()
{
    var self = this;

    this.vs = new VideoPlayer();
    this.vs.ismobile = isMobile();
    this.vb = new VideoPlayer();
    this.vb.ismobile = isMobile();
    
    if(!isMobile() && self.obj.active)
    {
        //isMobile() = true;
        self.vs.debug = true;
        self.vs.chromeless = true;
        self.vs.autoplay = true;
        self.vs.startmuted = true;
        this.vs.init('video_smallcontainer_'+this.num);
        self.vs.load(self.obj.files, getURL(this.obj.bg.small));
    }
    
    if(isMobile())
        self.toggleVideoCTA(1);    
    else
        self.toggleVideoCTA(0);

    //this.vb.ismobile = true;
    self.vb.debug = true;
    self.vb.chromeless = false;
    self.vb.autoplay = false;
    self.vb.startmuted = false;
    self.vb.uniquereplay = false;
    this.vb.init('video_bigcontainer_'+this.num);
    self.vb.load(self.obj.files, getURL(this.obj.bg.big));
    
    this.vs.callback_ready = function(e) {
        studio.video.Reporter.attach('PREVIEW_VIDEO', self.vs.proxy);
    }

    this.vs.callback_ended = function(e) {
        self.toggleVideoSmallPoster(1);
    }
    this.vs.callback_play = function(e) {
        self.vs.mute();
        self.toggleVideoSmallPoster(0);
        self.toggleVideoCTA(1);
    }

    this.vs.callback_progress = function(e) {

        if(self.vs.playhead > 10)
        {
            self.vs.pause();
            self.toggleVideoSmallPoster(1);   
        }
        else
        {
            //trace(self.vs.playhead);
        }
    }

    this.vb.callback_ready = function(e) {
        studio.video.Reporter.attach('MAIN_VIDEO', self.vb.proxy);
        if(isMobile())
            self.toggleVideoCTA(1);
    }

    this.vb.callback_progress = function(e) {
        if(isMobile())
            self.toggleVideoCTA(1);
    }
}

module_video_html.prototype.toggleVideoCTA = function(bool)
{
    if(bool)
    {
        if(this.obj.active)
            document.getElementsByClassName('cta_video')[0].style.opacity = 1;
    }
    else
    {
        if(this.obj.active)
            document.getElementsByClassName('cta_video')[0].style.opacity = 0;
    }
}

module_video_html.prototype.toggleVideoSmallPoster = function(bool)
{
    trace('toggle smallposter');

    if(bool)
        this.poster_small.style.opacity = 1;
    else
        this.poster_small.style.opacity = 0;

}

