// GALLERY SUB-ROUTINES

preloadScripts.push('style_gallery.css');

function module_gallery(obj, num) {

    var self = this;

    this.obj = obj;
    this.num = num;

    this.firstTime = true;
    this.gallery = obj.slides;
    this.galleryTimer;
    this.gIndex = 0;
    this.currentSlide = 1;
    this.slideshow = true;
    this.bs;
    this.st;

    this.parent = document.getElementById('module');

}

module_gallery.prototype.createModule = function() {

    var self = this;
    
    var container = document.createElement('div');
        container.className = 'galleryContainer abs';
    
    var toptext1 = document.createElement('h2');
        toptext1.innerHTML = this.obj.header;
        toptext1.className = 'abs';
    
    var toptext2 = document.createElement('h1');
        toptext2.innerHTML = this.obj.title;
        toptext2.className = 'abs';

    this.st = document.createElement('span');
    this.st.className = 'abs animate slide_index';
    this.st.innerHTML = '1 of '+ ( this.gallery.length - 1 );

    var sources = document.createElement('img');
        sources.className = 'abs sources btn';
        sources.src = getURL(this.obj.sources.icon);
        sources.onclick = function() {
            Enabler.counter('Open sources', true);
            addClass(self.parent.getElementsByClassName('sourceContainer')[0], 'active');
        }


    var bp = document.createElement('div');
        bp.className = 'abs blueGradient btn_gallery btn btn_prev';
        bp.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6" height="16" viewBox="0 0 6 16"><path fill="#444444" d="M0 7.998l5.996 5.996v-11.992l-5.996 5.996z"></path></svg>';
        bp.onmouseover = function(e) {
            addClass(this, 'mouseover');
        };
        bp.onmouseout = function(e) {
            removeClass(this, 'mouseover');
        };
        bp.onclick = function(e) {
            removeClass(self.bs, 'active');
            self.prevnext(0);
            self.slideshow = false;
            Enabler.counter('Gallery: Previous Slide', true);
        };

    var bn = document.createElement('div');
        bn.className = 'abs blueGradient btn_gallery btn btn_next';
        bn.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6" height="16" viewBox="0 0 6 16"><path fill="#444444" d="M0.001 2.004l5.996 5.996-5.996 5.996v-11.992z"></path></svg>';
        bn.onmouseover = function(e) {
            addClass(this, 'mouseover');
        };
        bn.onmouseout = function(e) {
            removeClass(this, 'mouseover');
        };
        bn.onclick = function(e) {
            removeClass(self.bs, 'active');
            self.prevnext(1);
            self.slideshow = false;
            Enabler.counter('Gallery: Next Slide', true);
        };

    this.bs = document.createElement('div');
    this.bs.className = 'abs blueGradient btn_gallery btn btn_pause active';
    this.bs.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="16" viewBox="0 0 8 16"><path fill="#444444" d="M0 13h3v-10h-3v10zM5 3v10h3v-10h-3z"></path></svg>';
    this.bs.onmouseover = function(e) {
            addClass(this, 'mouseover');
        };
    this.bs.onmouseout = function(e) {
            removeClass(this, 'mouseover');
        };
    this.bs.onclick = function(e) {
            if(hasClass(this, 'active')) {
                self.slideshow = false;
                removeClass(this, 'active');
                Enabler.counter('Slideshow Mode Off');
            }
            else {
                self.slideshow = true;
                addClass(this, 'active');
                self.autoGallery();
                Enabler.counter('Slideshow Mode On');
            }
        }
    
    var bottomtext = document.createElement('div');
        bottomtext.innerHTML = 'Reviewed by <a class="btn expert">'+this.obj.footer.expert+'</a> '+this.obj.footer.date;
        bottomtext.className = 'abs footer';

    container.appendChild(toptext1);
    container.appendChild(toptext2);
    container.appendChild(bp);
    container.appendChild(this.bs);
    container.appendChild(bn);
    container.appendChild(this.st);
    container.appendChild(bottomtext);
    container.appendChild(sources);

    for(i = 0; i < this.gallery.length; i++)
    {
        var slide = document.createElement('div');
            slide.id = 'slide_'+i;
            slide.className = 'abs animate slide';

        var text = document.createElement('div');
            text.className = 'abs text';
            text.innerHTML = this.gallery[i].text;

        if(i == 0)
        {
            var ribbon = document.createElement('img');
                ribbon.src = getURL(this.gallery[i].image);
                ribbon.className = 'abs ribbon';

            slide.appendChild(ribbon);
        }
        else
        {
            var header = document.createElement('div')
                header.innerHTML = '<span class="color">'+this.gallery[i].color+'</span>'+this.gallery[i].header;
                header.className = 'abs title';

            var image = document.createElement('img');
                image.src = getURL(this.obj.slides[i].image);
                image.className = 'abs image';

            slide.appendChild(header);
            slide.appendChild(image);

        }

        slide.appendChild(text);
        container.appendChild(slide);
        if(i == 1) addClass(slide, 'active');
    }

    this.parent.appendChild(container);

    bottomtext.getElementsByClassName('expert')[0].onclick = function(e){
        Enabler.exitOverride('Expert', self.obj.footer.exit);
    };

    this.generateSources();
    this.autoGallery();

};

module_gallery.prototype.generateSources = function() {

    var self = this;

    var container = document.createElement('div');
        container.className = 'abs sourceContainer'

    var header = document.createElement('div');
        header.className = 'abs header';
        header.innerHTML = this.obj.sources.header;

    var wrapper = document.createElement('div');
        wrapper.className = 'rel wrapper';
        wrapper.innerHTML = this.obj.sources.text;

    var closebtn = document.createElement('div');
        closebtn.className = 'abs close_btn_small btn'
        closebtn.onclick = function() {
            Enabler.counter('Close source', true);
            removeClass(self.parent.getElementsByClassName('sourceContainer')[0], 'active');
        }
        
    var closetext = document.createElement('div');
        closetext.innerHTML = 'close'
        closetext.className = 'abs'
        closebtn.appendChild(closetext);
    
    var closeicon = document.createElement('div');
        closeicon.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="8" viewBox="0 0 32 32"><path fill="#444444" d="M27.993 4c0.002 0.002 0.005 0.005 0.007 0.007v23.986c-0.002 0.002-0.005 0.005-0.007 0.007h-23.986c-0.003-0.002-0.005-0.005-0.007-0.007v-23.986c0.002-0.003 0.005-0.005 0.007-0.007h23.986zM28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4v0z"></path><path fill="#444444" d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path></svg>';
        closeicon.className = 'abs'
        closebtn.appendChild(closeicon);
    
    container.appendChild(closebtn);
    container.appendChild(wrapper);
    container.appendChild(header);
    this.parent.appendChild(container);

}

module_gallery.prototype.prevnext = function(bool) {

    var self = this;
    var nextslide;
    var right = false;

    if(activeButtons)
    {
        toggleSpinner(1);

        if(!bool) {

            right = true;

            if(self.currentSlide <= 0)
            {
                nextslide = self.gallery.length - 1;
            }
            else
            {
                nextslide = self.currentSlide-1
            }

            //Enabler.counter('Gallery: Previous Slide', true);
        }
        else
        {
            if(self.currentSlide >= self.gallery.length-1 )
            {
                nextslide = 0;
            }
            else
            {
                nextslide = self.currentSlide+1
            }

            //Enabler.counter('Gallery: Next Slide', true);
        }

        loadImage([ getURL(self.gallery[nextslide].image) ], function(e){
            toggleSpinner(0);
            self.loadSlide(nextslide, false, right);
        });
    }
};

module_gallery.prototype.loadSlide = function(num, bool, arg)
{

    var self = this;

    if(num != this.currentSlide || bool)
    {
        
        var oldslide = document.getElementById('slide_'+this.currentSlide);
        var newslide = document.getElementById('slide_'+num);

        this.currentSlide = num;

        removeClass(oldslide, 'active');
        addClass(newslide, 'active');

        if(num == 0 && this.firstTime) {
            this.firstTime = false;
            this.slideshow = false;
            removeClass(this.bs, 'active');
        }

        if(num == 0) {
            this.st.style.opacity = 0;
        }
        else {
            this.st.innerHTML = num+ ' of '+ ( this.gallery.length - 1 );
            this.st.style.opacity = 1;
        }
    }
}

module_gallery.prototype.autoGallery = function()
{
    var self = this;
    clearTimeout(this.galleryTimer);
    
    if(this.slideshow)
    {
        this.galleryTimer = setTimeout(function(){
            if(self.slideshow)
            {
                trace('next picture');
                self.prevnext(1);
                self.autoGallery();
            }
        }, 4000);
    }
}

