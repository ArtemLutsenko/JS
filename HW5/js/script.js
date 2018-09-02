function clone(obj) {
    if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
        return obj;

    if (obj instanceof Date)
        var temp = new obj.constructor(); //or new Date(obj);
    else
        var temp = obj.constructor();

    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveClone'];
        }
    }

    return temp;
}
let obj = {g:2,
    h: [[[5]],['gg']] ,
    c: {f: 5,
        g: [{g: {g:5, h: 7, g: [1, {g: {jl: 5, kl: null, dd: new Date(), lk: undefined, ff: [], rm: /.+/}}]}}] }} ;

let obj2 = clone(obj);
console.log(obj2);