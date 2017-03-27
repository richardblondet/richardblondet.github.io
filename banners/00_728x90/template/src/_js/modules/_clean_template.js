function MODULE_NAME(obj, num) {

    var self = this;
    this.tabActive = false;

    this.obj = obj;
    this.num = num;

    Enabler.addEventListener(studio.events.StudioEvent.EXIT, function(e) {
        if(self.tabActive) self.toggle(0);
    });
}

MODULE_NAME.prototype.createModule = function() {

    var self = this;
    //var mod_size = ( this.large ? "mod_large" : "mod_reg" );

    var parent = document.getElementById('subcontainer');

    var container = document.createElement('div');
        container.id = 'module_'+this.num;
        container.style.border = '1px solid '+config.global.border;
        container.className = 'rel btn mod mod_small border';

    var wrapper = document.createElement('div');
        wrapper.className = 'wrapper rel animate peek';
        wrapper.onmouseover = function() {
            addClass(this, 'over');
        };
        wrapper.onmouseout = function() {
            removeClass(this, 'over');
        };

    var poster = document.createElement('img');
        poster.className = 'poster abs';
        poster.src = getURL(this.obj.bg);

    var cta = document.createElement('div');
        cta.className = 'cta_regular abs';

    var title = document.createElement('span');
        title.className = 'rel mod_name';
        title.innerHTML = this.obj.mod_name;

    cta.appendChild(title);
    wrapper.appendChild(poster);
    wrapper.appendChild(cta);
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

MODULE_NAME.prototype.createTab = function() {

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

    var wrapper = document.createElement('div');
        wrapper.className = 'wrapper abs';

    var close = document.createElement('div');
        close.className = 'abs btn close_tab';
        close.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24"><path fill="#444444" d="M12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM14.578 8.016l1.406 1.406-2.578 2.578 2.578 2.578-1.406 1.406-2.578-2.578-2.578 2.578-1.406-1.406 2.578-2.578-2.578-2.578 1.406-1.406 2.578 2.578z"></path></svg>'
        close.getElementsByTagName('path')[0].style.fill = config.global.tab.close_color;

    var header = document.createElement('div');
        header.className = 'tab_header abs btn';
    
    content.appendChild(wrapper);
    // container.appendChild(bg);
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
};

MODULE_NAME.prototype.toggle = function(bool) {
    if(bool)
    {
        addClass(document.getElementById('tab_'+this.num), 'active');
        Enabler.counter('Open MODULE_NAME Module', true);
        this.tabActive = true;
        EventBus.dispatch("KILL_SLIDESHOW", window);
    }
    else
    {
        removeClass(document.getElementById('tab_'+this.num), 'active');
        Enabler.counter('Close MODULE_NAME Module', true);
        this.tabActive = false;
    }
};