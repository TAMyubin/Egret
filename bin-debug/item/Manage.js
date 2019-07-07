var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// 界面管理
var Manage = (function (_super) {
    __extends(Manage, _super);
    /**构造函数 */
    function Manage(hh) {
        var _this = _super.call(this) || this;
        _this.y = hh;
        console.log("误差为：", hh);
        ConfigManager.Instance.hei = hh;
        _this.init();
        console.log('界面管理初始化完成');
        return _this;
    }
    /**初始化界面 */
    Manage.prototype.init = function () {
        this.mainscene = new mainScene();
        this.addChild(this.mainscene);
        this.playing = new Playing();
        this.addChild(this.playing);
        this.book = new Book();
        this.addChild(this.book);
        this.over = new Over();
        this.addChild(this.over);
        ConfigManager.Instance.manage = this;
    };
    return Manage;
}(egret.DisplayObjectContainer));
__reflect(Manage.prototype, "Manage");
//# sourceMappingURL=Manage.js.map