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
// 游戏主逻辑
var Playing = (function (_super) {
    __extends(Playing, _super);
    /**构造函数 */
    function Playing() {
        var _this = _super.call(this) || this;
        //游戏计时
        _this._time = 30;
        //1s定时器
        _this._timeupdate = new egret.Timer(1000, 0);
        _this.init();
        _this.visible = false;
        console.log("游戏主界面初始化完成");
        return _this;
    }
    Playing.prototype.init = function () {
        //初始化背景图片
        this.bg = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.bg2, 0, -158, 750, 1650);
        //初始化地洞图片
        this.caveImg = new eui.Group();
        this.caveImg.width = this.caveImg.height = 0;
        this.addChild(this.caveImg);
        //初始化倒计时
        this.times = ConfigManager.Instance.foundlabel(this, 348, 242);
        this.times.size = 34;
        this.times.bold = true; //粗体
        //监听倒计时
        this._timeupdate.addEventListener(egret.TimerEvent.TIMER, this._countdown, this); //监听事件（监听时间，事件，对象）
        //总分
        this.need_Goal = ConfigManager.Instance.foundlabel(this, 160, 244);
        this.need_Goal.size = 30;
        //创建地洞函数
        this.setup();
    };
    /**开始游戏(是否从新开始) */
    Playing.prototype.begingame = function (bool) {
        console.log("开始游戏", bool);
        this.visible = true;
        this._time = 30;
        this.time_format();
        this._timeupdate.start();
        this.need_Goal.text = "0000000!!";
    };
    //创建12个地洞
    Playing.prototype.setup = function () {
        for (var i = 0; i < 12; i++) {
            var xx = 235 * (i % 3);
            var yy = 450 + 180 * Math.floor(i / 3); //Math.floor数学方法进一法
            var cave = ConfigManager.Instance.foundimage(this.caveImg, ConfigManager.Instance.ImageURL.url4, xx, yy, 243, 95);
            ConfigManager.Instance._cave_Group.push({ node: cave, bool: false });
        }
    };
    //设置时间格式
    Playing.prototype.time_format = function () {
        if (this._time >= 10) {
            this.times.text = "00:" + this._time;
        }
        else {
            this.times.text = "00:0" + this._time;
        }
    };
    //计时器倒数
    Playing.prototype._countdown = function () {
        this._time--;
        this.time_format();
        if (this._time <= 0) {
            console.log("游戏结束");
            this._timeupdate.stop();
        }
    };
    return Playing;
}(egret.DisplayObjectContainer));
__reflect(Playing.prototype, "Playing");
//# sourceMappingURL=Playing.js.map