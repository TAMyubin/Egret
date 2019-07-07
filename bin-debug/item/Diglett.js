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
// 地鼠对象池
var Diglett = (function (_super) {
    __extends(Diglett, _super);
    //构造函数
    function Diglett() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Diglett.prototype.init = function () {
        this.mask = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.monster + '1_png', 0, 0, 190, 134);
        this.Img = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.monster + '1_png', 0, 0, 190, 134);
        this.Img.addEventListener(egret.TouchEvent.TOUCH_TAP, this._add, this); //加分事件
    };
    //地鼠的弹出
    Diglett.prototype.motion = function (num) {
        var _this = this;
        this.index = num;
        this.x = ConfigManager.Instance._cave_Group[num].node.x + 40;
        this.y = ConfigManager.Instance._cave_Group[num].node.y - 60;
        this.Img.y = 100;
        this.visible = true;
        egret.Tween.get(this.Img).to({ x: 0, y: 0 }, 200).wait(1500).to({ x: 0, y: 100 }, 200).call(function (e) {
            _this.visible = false;
            ConfigManager.Instance._cave_Group[_this.index].bool = false;
            console.log("点击到地鼠了"), _this.index;
        });
    };
    Diglett.prototype._add = function () {
        egret.Tween.removeTweens(this.Img);
        this.visible = false;
        ConfigManager.Instance._cave_Group[this.index].bool = false;
        console.log("加分");
        ConfigManager.Instance.nowgoal = ConfigManager.Instance.nowgoal + ConfigManager.Instance.score[ConfigManager.Instance.nowlevel - 1];
        ConfigManager.Instance.manage.playing.Now_Goal.text = "" + ConfigManager.Instance.nowgoal;
        var Grade = ConfigManager.Instance.addfen();
        Grade.x = this.x + 50;
        Grade.y = this.y + 50;
        Grade.text = "+" + ConfigManager.Instance.score[ConfigManager.Instance.nowlevel - 1];
        Grade.visible = true;
        egret.Tween.get(Grade).to({ x: this.x + 50, y: this.y }, 1000).wait(500).call(function (e) {
            Grade.visible = false;
        });
    };
    return Diglett;
}(egret.DisplayObjectContainer));
__reflect(Diglett.prototype, "Diglett");
//# sourceMappingURL=Diglett.js.map