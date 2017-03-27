// LOCATOR SUB-ROUTINES

function module_facebook(obj, num) {

    var self = this;
    this.tabActive = false;

    this.obj = obj;
    this.num = num;
    // this.large = true;
}

module_facebook.prototype.createModule = function() {
	var self = this;
    // var mod_size = ( this.large ? "mod_large" : "mod_reg" );

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
        Enabler.exitOverride("Facebook", self.obj.exit);
    }
};

module_facebook.prototype.createTab = function() {};

