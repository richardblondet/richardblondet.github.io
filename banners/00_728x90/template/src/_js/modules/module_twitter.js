preloadScripts.push('style_twitter.css');
preloadScripts.push('helper_autolinker.js');

function module_twitter(obj, num) {

    var self = this;
    this.tabActive = false;

    this.obj = obj;
    this.num = num;
    this.tweets;
    this.bp;
    this.bn;

    this.tweetsloaded = false;
    this.currentTweet = 0;
    this.twitterTweets;
    this.follow = 'https://twitter.com/'+this.obj.id;

    Enabler.addEventListener(studio.events.StudioEvent.EXIT, function(e) {
        if(self.tabActive) self.toggle(0);
    });
}

module_twitter.prototype.createModule = function() {

    var self = this;
    //var mod_size = ( this.large ? "mod_large" : "mod_reg" );

    var parent = document.getElementById('subcontainer');

    var container = document.createElement('div');
        container.id = 'module_'+this.num;
        container.style.border = '1px solid '+config.global.border;
        container.className = 'rel btn mod mod_small border';

    var wrapper = document.createElement('div');
        wrapper.className = 'wrapper rel animate peek';

    var poster = document.createElement('img');
        poster.className = 'poster abs';
        poster.src = getURL(this.obj.bg.small);

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

module_twitter.prototype.createTab = function() {

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

    this.tweets = document.createElement('div');
    this.tweets.className = 'tweets abs animate';
    this.tweets.id = 'tweets_'+this.num;

    this.bn = document.createElement('div');
    this.bn.className = 'btn_next btn abs prevnext animate';
    this.bn.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="32" viewBox="0 0 12 32"><path fill="#444444" d="M0.002 4.008l11.992 11.992-11.992 11.992v-23.984z"></path></svg>'
    this.bn.style.color = this.obj.btn_color;
    this.bn.onclick = function() {
        if(self.currentTweet < self.twitterTweets.length-1)
            self.slideTweet(1);
    };

    this.bp = document.createElement('div');
    this.bp.className = 'btn_prev btn abs prevnext animate';
    this.bp.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="32" viewBox="0 0 12 32"><path fill="#444444" d="M0 15.996l11.992 11.992v-23.984l-11.992 11.992z"></path></svg>'
    this.bp.style.color = this.obj.btn_color;
    this.bp.onclick = function() {
        if(self.currentTweet > 0)
        self.slideTweet(0)
    }

    var ticon = document.createElement('img');
        ticon.className = 'abs btn twitter_icon';
        ticon.src = getURL(this.obj.bg.icon);
        ticon.onclick = function() {
            Enabler.exitOverride("Twitter: Follow", self.follow)
        }

    var close = document.createElement('div');
        close.className = 'abs btn close_tab';
        close.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24"><path fill="#444444" d="M12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM14.578 8.016l1.406 1.406-2.578 2.578 2.578 2.578-1.406 1.406-2.578-2.578-2.578 2.578-1.406-1.406 2.578-2.578-2.578-2.578 1.406-1.406 2.578 2.578z"></path></svg>'
        close.getElementsByTagName('path')[0].style.fill = config.global.tab.close_color;

    var header = document.createElement('div');
        header.className = 'tab_header abs btn';
    
    wrapper.appendChild(this.tweets);
    content.appendChild(wrapper);
    // container.appendChild(bg);
    container.appendChild(this.bn);
    container.appendChild(this.bp);
    container.appendChild(content);
    container.appendChild(ticon);
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

module_twitter.prototype.toggle = function(bool) {
    var self = this;

    if(bool)
    {
        if(!this.tweetsloaded)
        {
            toggleSpinner(1);
            
            var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.obj.feed + '?callback=module_'+self.num+'.loadTweets';
            
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        else
        {
            addClass(document.getElementById('tab_'+this.num), 'active');
        }

        Enabler.counter('Open Twitter Module', true);
        this.tabActive = true;

        EventBus.dispatch("KILL_SLIDESHOW", window);
    }
    else
    {
        removeClass(document.getElementById('tab_'+this.num), 'active');
        Enabler.counter('Close Twitter Module', true);
        this.tabActive = false;
    }
};

module_twitter.prototype.loadTweets = function(e)
{

    trace("tweets loaded");

    this.twitterTweets = e;

    for(var i = 0; i < e.length; i++)
    {
        //trace(e[i]);

        var tweetC = document.createElement('div');
            tweetC.className = 'tweet rel abs'
            tweetC.id = 'tweet_'+i;

        var tweetIcon = document.createElement('a');
            tweetIcon.href = 'https://twitter.com/'+this.obj.id;
            tweetIcon.className = 'icon abs';

        var tweetImage = document.createElement('img');
            tweetImage.className = 'image tw_link';
            tweetImage.src = getURL(e[i].user.profile_image_url_https);

        var tweetContent = document.createElement('div');
            tweetContent.className = 'content rel';

        var tweetName = document.createElement('span');
            tweetName.className = 'name lato';
            tweetName.innerHTML = e[i].user.name;

        var tweetHandle = document.createElement('span');
            tweetHandle.className = 'handle lato';
            tweetHandle.innerHTML = Autolinker.link( this.obj.handle, { className: 'twh' } );

        var tweetDate = document.createElement('span');
            tweetDate.className = 'date lato';
            tweetDate.innerHTML = e[i].created_at;

        var tweetText = document.createElement('div');
            tweetText.className = 'text lato';
            tweetText.innerHTML = Autolinker.link( e[i].text, { className: 'twc' } );

            tweetContent.appendChild(tweetName);
            tweetContent.appendChild(tweetHandle);
            tweetContent.appendChild(tweetDate);
            tweetContent.appendChild(tweetText);

            tweetIcon.appendChild(tweetImage);

            tweetC.appendChild(tweetIcon);
            tweetC.appendChild(tweetContent);

        this.tweets.appendChild(tweetC);

    }

    [].forEach.call(document.getElementsByClassName('twc'), function (e) {
        e.onclick = function(){
            Enabler.exitOverride('Twitter Hyperlink', e.href);
        };
    });
    [].forEach.call(document.getElementsByClassName('twh'), function (e) {
        e.onclick = function(){
            Enabler.exitOverride('Twitter Hyperlink', e.href);
        };
    });
    [].forEach.call(document.getElementsByClassName('tw_link'), function (e) {
        e.onclick = function(){
            Enabler.exitOverride('Twitter Hyperlink', e.href);
        };
    });

    this.toggle(1);
    this.tweetsloaded = true;
    toggleSpinner(0);

    //document.getElementById('tweet_template').style.display = 'none';
    //addClass(document.getElementById('btn_prev_t'), 'disabled');
        
}

module_twitter.prototype.slideTweet = function(num)
{
    var self = this;

    trace("active: "+activeButtons+' / '+' slide: '+num)

    if(activeButtons)
    {
        addClass(this.bp, 'disabled');
        addClass(this.bn, 'disabled');
        activeButtons = false;

        var pt = this.tweets;
        var ct = document.getElementById('tweet_'+this.currentTweet);
        var nt;
        var offset = document.getElementById('tweet_0').offsetLeft - document.getElementById('tweet_1').offsetLeft;
        var ptl;
        var tempti;


        if(!num)
        {
            Enabler.counter('Twitter: Previous Tweet', true);

            tempti = this.currentTweet + 1;
            this.currentTweet -= 1;
            nt = document.getElementById('tweet_'+tempti);

            ptl = pt.offsetLeft;
            ptl -= offset;

        }
        else
        {
            Enabler.counter('Twitter: Next Tweet', true);

            tempti = this.currentTweet - 1;
            this.currentTweet += 1;
            nt = document.getElementById('tweet_'+tempti);

            ptl = pt.offsetLeft;
            ptl += offset;
            
        }

        pt.style.left = ptl;

        setTimeout(function(){ 
            if(self.currentTweet > 0)
                removeClass(self.bp, 'disabled');
            if(self.currentTweet < self.twitterTweets.length-1)
                removeClass(self.bn, 'disabled');
            activeButtons = true;    

        }, 500);
    }
}