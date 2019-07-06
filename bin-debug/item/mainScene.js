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
// 主界面
var mainScene = (function (_super) {
    __extends(mainScene, _super);
    /*构造函数*/
    function mainScene() {
        var _this = _super.call(this) || this;
        _this.init();
        console.log("初始化主界面");
        return _this;
    }
    mainScene.prototype.init = function () {
        //初始化背景图片
        this.background = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.bg1, 0, 0, 750, 1650);
        //开始游戏按钮
        this._begin_button = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.btn1, 198, 950, 354, 112);
        //图鉴按钮
        this._book_button = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.btn5, 0, 220, 218, 90);
        this._begin_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this._begin, this); //开始按钮回调
        this._book_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this._book, this); //图鉴按钮回调
    };
    //开始游戏
    mainScene.prototype._begin = function () {
        ConfigManager.Instance.manage.playing.begingame(true);
        console.log("点击了开始游戏");
    };
    mainScene.prototype._book = function () {
        ConfigManager.Instance.manage.book.open();
    };
    return mainScene;
}(egret.DisplayObjectContainer));
__reflect(mainScene.prototype, "mainScene");
//# sourceMappingURL=mainScene.js.map