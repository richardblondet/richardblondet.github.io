// @codekit-prepend "modernizr.js"

/* TRACE FUNCTION */
function trace(str) { if(console) console.log(str); }

/* EASY SELECTOR */
function $(str) { return document.querySelector(str); }

/* CLASS MANIPULATION */
function hasClass(el, className) {
    return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

/* MOBILE DETECTION */
function isMobile() {
    if (Modernizr.touch) { 
        return true;
    } else { 
        return false;
    }
}