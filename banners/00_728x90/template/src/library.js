// @codekit-prepend "_js/includes/common.js"
// @codekit-prepend "_js/includes/EventBus.js"
// @codekit-prepend "_js/includes/preload.js"
// @codekit-prepend "_js/includes/DCS_enabler.js"

function uniq(a) {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}