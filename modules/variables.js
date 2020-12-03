const { error } = require('./utils.js');
module.exports = {
    set: function (variable, value, expireAfter = 0) {
        if (variable == 'set') return error('Cannot set variable \'set\'');
        this[variable] = value;
        if (expireAfter > 0)
            setTimeout(function () {
                delete this[variable];
            }, expireAfter)
        return value;
    }
}
// 268769   8501   2047405    52657   1606939650   959ce5f8bef7402bb490d09cd0e38b78041c6fb2   2047405