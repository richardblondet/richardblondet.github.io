preloadScripts.push('style_email.css');
preloadScripts.push('helper_emailvalidate.js');

function module_email(obj, num) {
    
    var self = this;

    this.obj = obj;
    this.num = num;

    this.i1;
    this.i2;
    this.i3;

    this.diagC;
    this.diagT;

    this.parent = document.getElementById('module');
    this.sent = false;

    this.container;
    
}

function emailSuccess(e) {
    toggleSpinner(0);

    if(e.status != "success")
        module_1.showDialogue(module_1.obj.fail);
    else {
        module_1.showDialogue(module_1.obj.success);
        module_1.sent = true;
        document.getElementsByClassName('field')[0].value = '';
        document.getElementsByClassName('field')[1].value = '';
        document.getElementsByClassName('field')[2].value = '';
    }

}

module_email.prototype.createModule = function() {

    var self = this;

    this.container = document.createElement('div');
    this.container.className = 'emailContainer abs';

    var content = document.createElement('div');
        content.className = 'contentbox abs';

    var closebtn = document.createElement('div');
        closebtn.className = 'abs close_btn_small btn'
        closebtn.onclick = function() {
            Enabler.counter('Close Email', true);
            removeClass(self.container, 'active');
        }
        
    var closetext = document.createElement('div');
        closetext.innerHTML = 'close'
        closetext.className = 'abs'
        closebtn.appendChild(closetext);
    
    var closeicon = document.createElement('div');
        closeicon.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="8" viewBox="0 0 32 32"><path fill="#444444" d="M27.993 4c0.002 0.002 0.005 0.005 0.007 0.007v23.986c-0.002 0.002-0.005 0.005-0.007 0.007h-23.986c-0.003-0.002-0.005-0.005-0.007-0.007v-23.986c0.002-0.003 0.005-0.005 0.007-0.007h23.986zM28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4v0z"></path><path fill="#444444" d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path></svg>';
        closeicon.className = 'abs'
        closebtn.appendChild(closeicon);

    var t1 = document.createElement('div');
        t1.innerHTML = this.obj.text1;
        t1.className = 'text1';

    var t2 = document.createElement('div');
        t2.innerHTML = this.obj.text2;
        t2.className = 'text2';

    var t3 = document.createElement('div');
        t3.innerHTML = this.obj.text3;
        t3.className = 'text3';

    var email_truste = document.createElement('img');
        email_truste.src = Enabler.getUrl("email_truste_2.jpg");
        email_truste.className = 'email_truste';

    this.i1 = document.createElement("input");
    this.i1.setAttribute('type', 'text');
    this.i1.setAttribute('placeholder', this.obj.f1);
    this.i1.className = 'rel field';
    this.i1.onfocus = function() {
        this.setAttribute('placeholder', '');
    }
    this.i1.addEventListener('focusout', function() {
        if(!this.val) this.setAttribute('placeholder', self.obj.f1);
    });
    
    this.i2 = document.createElement("input");
    this.i2.setAttribute('type', 'text');
    this.i2.setAttribute('placeholder', this.obj.f2);
    this.i2.className = 'rel field';
    this.i2.onfocus = function() {
        this.setAttribute('placeholder', '');   
    }
    this.i2.addEventListener('focusout', function() {
        if(!this.val) this.setAttribute('placeholder', self.obj.f2);
    });

    this.i3 = document.createElement("input");
    this.i3.setAttribute('type', 'text');
    // this.i3.setAttribute('value', 'carlo@joystickinteractive.com');
    this.i3.setAttribute('placeholder', this.obj.f3);
    this.i3.className = 'rel field';
    this.i3.onfocus = function() {
        this.setAttribute('placeholder', '');
    }
    this.i3.addEventListener('focusout', function() {
        if(!this.val) this.setAttribute('placeholder', self.obj.f3);
    });

    var sup1 = document.createElement('span');
        sup1.innerHTML = '*';
        sup1.className = 'abs sup'

    var sup2 = document.createElement('span');
        sup2.innerHTML = '*';
        sup2.className = 'abs sup sup2'

    var send = document.createElement('div');
        send.innerHTML = this.obj.send;
        send.className = 'rel orangeGradient btn_send btn';
        send.onclick = function() {

            var sendable = true;     
            var temail = '';
            var sender;
            
            if( self.i1.value != '' && validateEmail(self.i1.value) )
                sender = encodeURIComponent(self.i1.value);
            else
                sendable = false;

            if( self.i2.value != '' && validateEmail(self.i2.value) ) {
                temail = encodeURIComponent(self.i2.value);
            }
            else
                sendable = false;

            if( !self.i3.value || validateEmail(self.i3.value) ) {
                if(self.i3.value) temail += ','+encodeURIComponent(self.i3.value);
            }
            else
                sendable = false;
            
            if(sendable)
            {

                toggleSpinner(1);
                // console.log("Template Id: ", self.obj.id);
                var url = "https://emailer.joystickinteractive.com/api/send/" + self.obj.id + "/" + temail + "?sender="+ sender +"&callback=emailSuccess";
                
                trace(url);
                
                var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = url;
                
                var head = document.getElementsByTagName('head')[0];
                    head.appendChild(s);

                Enabler.counter('Send Email', true);

            }
            else
            {
                self.showDialogue(self.obj.invalid);
            }
        };

    var email = document.createElement('div');
        email.innerHTML = this.obj.email;
        email.className = 'abs orangeGradient btn_email btn';
        email.onclick = function() {
            Enabler.counter('Open Email', true);
            addClass(self.container, 'active');
        }

    // DIALOG

    this.diagC = document.createElement('div');
    this.diagC.className = 'contentbox dialogbox abs';

    this.diagT = document.createElement('div');
    this.diagT.className = 'rel dialogtext';

    var dclosebtn = document.createElement('div');
        dclosebtn.innerHTML = this.obj.dialog;
        dclosebtn.className = 'rel orangeGradient btn_send btn'
        dclosebtn.onclick = function() {
            removeClass(self.diagC, 'active');
            removeClass(self.i1, 'hide');
            removeClass(self.i2, 'hide');
            removeClass(self.i3, 'hide');

            if(self.sent) {
                self.sent = false;
                removeClass(self.container, 'active');
            }
        }

    this.diagC.appendChild(this.diagT);
    this.diagC.appendChild(dclosebtn);
    
    content.appendChild(closebtn);
    content.appendChild(t1);
    content.appendChild(t2);
    content.appendChild(sup1);
    content.appendChild(sup2);
    content.appendChild(this.i1);
    content.appendChild(this.i2);
    content.appendChild(this.i3);
    content.appendChild(send);
    content.appendChild(t3);
    content.appendChild(email_truste);
    this.container.appendChild(content);
    this.container.appendChild(this.diagC);
    this.parent.appendChild(email);
    this.parent.appendChild(this.container);

    t3.getElementsByTagName('a')[0].onclick = function() {
        Enabler.exitOverride('Privacy Policy', this.title);
    }

}

module_email.prototype.showDialogue = function(str) {
    addClass(this.i1, 'hide');
    addClass(this.i2, 'hide');
    addClass(this.i3, 'hide');
    this.diagT.innerHTML = str;
    addClass(this.diagC, 'active');
}

