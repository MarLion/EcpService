/**
 * Created by Echonessy on 2018/10/19.
 */
const common = require("./common");


//默认页面
exports.index = function (req, res) {
    return res.render('void');
};
//404
exports.i404 = function (req, res) {
    return res.render('error/404');
};
//403
exports.i403 = function (req, res) {
    return res.render('error/403');
};
//400
exports.i400 = function (req, res) {
    return res.render('error/400');
};
//500
exports.i500 = function (req, res) {
    return res.render('error/500');
};
//503
exports.i503 = function (req, res) {
    return res.render('error/503');
};
