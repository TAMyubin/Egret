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
// 图鉴
var Book = (function (_super) {
    __extends(Book, _super);
    function Book() {
        var _this = _super.call(this) || this;
        //怪物图鉴
        _this.Monster_Group = [];
        _this.init();
        _this.visible = false;
        console.log("图鉴初始化");
        return _this;
    }
    //初始化界面
    Book.prototype.init = function () {
        //图鉴背景图
        this.bg = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.bg3, 0, -158, 750, 1650);
        /**捉妖库名字图 */
        var bb = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.url3, 265, 218, 221, 90);
        //返回按钮
        this.colse = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.btn4, 0, 231, 150, 88);
        //图鉴显示组
        this.group = new eui.Group();
        var bb = ConfigManager.Instance.foundimage(this.group, ConfigManager.Instance.ImageURL.bg1, 0, 0, 750, 2520);
        bb.alpha = 0;
        for (var i = 0; i < 30; i++) {
            var nont = new Monster();
            nont.yao(0);
            nont.x = 57 + (i % 3) * 222;
            nont.y = Math.floor(i / 3) * 255;
            this.group.addChild(nont);
            this.Monster_Group.push(nont);
        }
        var grou = new eui.Scroller();
        grou.x = 0;
        grou.y = 262;
        grou.width = 750;
        grou.height = 900;
        grou.viewport = this.group;
        this.addChild(grou);
        this.colse.addEventListener(egret.TouchEvent.TOUCH_TAP, this._colse, this);
    };
    Book.prototype._colse = function () {
        this.visible = false;
    };
    Book.prototype.open = function () {
        for (var i = 0; i < 6; i++) {
            if (i + 1 <= 4) {
                this.Monster_Group[i].yao(i + 1);
            }
            else {
                this.Monster_Group[i].yao(0);
            }
        }
        this.visible = true;
    };
    return Book;
}(egret.DisplayObjectContainer));
__reflect(Book.prototype, "Book");
//# sourceMappingURL=Book.js.map