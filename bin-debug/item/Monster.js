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
// 怪物图鉴
var Monster = (function (_super) {
    __extends(Monster, _super);
    /**构造函数 */
    function Monster() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    /**初始化界面 */
    Monster.prototype.init = function () {
        this.bg = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.bg4, 0, 0, 192, 220);
        this.Monster_Img = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.btn1, 17, 35, 158, 107);
        this.Monster_name = ConfigManager.Instance.foundlabel(this, 41, 165);
        this.Monster_name.size = 28;
    };
    /**显示小妖 */
    Monster.prototype.yao = function (level) {
        ConfigManager.Instance.changeImage(this.Monster_Img, ConfigManager.Instance.ImageURL.monster + level + "_png");
        switch (level) {
            case 0:
                this.Monster_name.text = '？？？？';
                break;
            case 1:
                this.Monster_name.text = '无知小妖';
                break;
            case 2:
                this.Monster_name.text = '懵懂妖将';
                break;
            case 3:
                this.Monster_name.text = '聪明妖王';
                break;
            case 4:
                this.Monster_name.text = '机智妖皇';
                break;
            case 5:
                this.Monster_name.text = '智慧妖帝';
                break;
        }
    };
    return Monster;
}(egret.DisplayObjectContainer));
__reflect(Monster.prototype, "Monster");
//# sourceMappingURL=Monster.js.map