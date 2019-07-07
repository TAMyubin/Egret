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
        //实例地鼠
        _this._diglett = [];
        //地鼠出现的数量
        _this._count = 0;
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
        //过关需要的分数
        this.need_Goal = ConfigManager.Instance.foundlabel(this, 10, 244);
        this.need_Goal.size = 30;
        //当前总分
        this.Now_Goal = ConfigManager.Instance.foundlabel(this, 18, 281);
        this.Now_Goal.size = 20;
        this.Now_Goal.bold = true;
        //创建地洞函数
        this.setup();
        //显示消除地鼠后的分数
        this.Group = new eui.Group();
        this.Group.width = this.Group.height = 0;
        this.addChild(this.Group);
    };
    /**开始游戏(是否从新开始) */
    Playing.prototype.begingame = function (bool) {
        var _this = this;
        console.log("开始游戏", bool);
        this.visible = true;
        if (bool) {
            ConfigManager.Instance.nowlevel = 1;
        }
        this._time = 30;
        this.time_format();
        this._timeupdate.start(); //开始计时
        this.dig_time = setInterval(function (e) { _this._logic(); }, ConfigManager.Instance.count[ConfigManager.Instance.nowlevel - 1]);
        //初始化得分
        ConfigManager.Instance.nowgoal = 0;
        this._goal();
        this._count = 0;
        this.need_Goal.text = ConfigManager.Instance.goal[ConfigManager.Instance.nowlevel - 1] + "分获得" + ConfigManager.Instance.nowlevel + "级小妖";
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
            //判断是否过关
            if (ConfigManager.Instance.nowgoal >= ConfigManager.Instance.goal[ConfigManager.Instance.nowlevel - 1]) {
                ConfigManager.Instance.manage.over.open(true);
            }
            else {
                ConfigManager.Instance.manage.over.open(false);
            }
            this._timeupdate.stop();
            clearInterval(this.dig_time); //地鼠停止产生
        }
    };
    //显示现在的分数
    Playing.prototype._goal = function () {
        this.Now_Goal.text = "现在分数为： " + ConfigManager.Instance.nowgoal;
    };
    //获取地鼠的对象池并添加到地洞中
    Playing.prototype.get_diglett = function () {
        if (this._diglett.length > 0) {
            for (var i = 0; i < this._diglett.length; i++) {
                if (this._diglett[i].visible == false) {
                    return this._diglett[i];
                }
            }
        }
        var diglett = new Diglett();
        this.caveImg.addChild(diglett); //在地洞中添加地鼠图片
        this._diglett.push(diglett);
        return diglett;
    };
    Playing.prototype._logic = function () {
        this._count++;
        //随机洞口0-11；
        var randnum = this.random();
        ConfigManager.Instance._cave_Group[randnum].bool = true;
        //地鼠出现
        var diglett = this.get_diglett();
        ConfigManager.Instance.changeImage(diglett.Img, ConfigManager.Instance.ImageURL.monster + ConfigManager.Instance.nowlevel + "_png");
        diglett.motion(randnum);
    };
    //获取随机数
    Playing.prototype.random = function () {
        var randnum = Math.floor(Math.random() * 100) % 12;
        //地洞中有老鼠
        if (ConfigManager.Instance._cave_Group[randnum].bool == true) {
            var temp = 1;
            while (temp < 12) {
                var j = (randnum + temp) % 12;
                if (ConfigManager.Instance._cave_Group[j].bool == false) {
                    console.log("出现在：" + j + "洞");
                    return j;
                }
                randnum++;
            }
        }
        else {
            return randnum;
        }
    };
    return Playing;
}(egret.DisplayObjectContainer));
__reflect(Playing.prototype, "Playing");
//# sourceMappingURL=Playing.js.map