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
// 结束界面
var Over = (function (_super) {
    __extends(Over, _super);
    function Over() {
        var _this = _super.call(this) || this;
        _this.init();
        _this.visible = false;
        console.log("结束界面初始化完成");
        return _this;
    }
    Over.prototype.init = function () {
        //胜利显示
        this.victory = new eui.Group();
        this.victory.width = this.victory.height = 0;
        this.addChild(this.victory);
        /**背景光效 */
        var bg5 = ConfigManager.Instance.foundimage(this.victory, ConfigManager.Instance.ImageURL.bg5, 375, 541, 656, 651);
        bg5.anchorOffsetX = bg5.width / 2;
        bg5.anchorOffsetY = bg5.height / 2;
        egret.Tween.get(bg5, { loop: true }).to({ rotation: 360 }, 3000); //无限旋转
        //下一关
        this.next = ConfigManager.Instance.foundimage(this.victory, ConfigManager.Instance.ImageURL.btn2, 200, 712, 350, 116);
        //妖怪图鉴
        this.mon = new Monster();
        this.mon.x = 279;
        this.mon.y = 402;
        this.victory.addChild(this.mon);
        //胜利获得提示
        this.text2 = ConfigManager.Instance.foundlabel(this.victory, 230, 647);
        this.text2.size = 38;
        this.text2.bold = true;
        //失败显示组
        this.defeat = new eui.Group();
        this.defeat.width = this.defeat.height = 0;
        this.addChild(this.defeat);
        //失败鼓励语 
        this.text = ConfigManager.Instance.foundlabel(this.defeat, 88, 461);
        this.text.size = 46;
        this.text.bold = true;
        //再来一次
        this.again = ConfigManager.Instance.foundimage(this.defeat, ConfigManager.Instance.ImageURL.btn3, 200, 812, 350, 116);
        //返回
        this.return = ConfigManager.Instance.foundimage(this.defeat, ConfigManager.Instance.ImageURL.url4, 300, 812, 350, 116);
        this.victory.visible = false;
        this.defeat.visible = false;
        //下一关
        this.next.addEventListener(egret.TouchEvent.TOUCH_TAP, this._begin, this);
        //再玩一次
        this.again.addEventListener(egret.TouchEvent.TOUCH_TAP, this._begin, this);
        //回主界面
        this.return.addEventListener(egret.TouchEvent.TOUCH_TAP, this._close, this);
    };
    /**开始游戏（下一关或再来一次） */
    Over.prototype._begin = function () {
        this.visible = false;
        this.victory.visible = false;
        this.defeat.visible = false;
        ConfigManager.Instance.manage.playing.begingame(false);
    };
    /**返回主界面 */
    Over.prototype._close = function () {
        this.visible = false;
        this.victory.visible = false;
        this.defeat.visible = false;
        ConfigManager.Instance.manage.playing.visible = false;
    };
    /**打开结束界面 */
    Over.prototype.open = function (bool) {
        var _this = this;
        this.visible = true;
        setTimeout(function (e) {
            //过关
            if (bool) {
                _this.victory.visible = true;
                _this.return.visible = true;
                _this.defeat.visible = false;
                console.log('第', ConfigManager.Instance.nowlevel, '关通过');
                //刷新通过的最大关卡
                if (ConfigManager.Instance.nowlevel > ConfigManager.Instance.maxlevel) {
                    ConfigManager.Instance.maxlevel = ConfigManager.Instance.nowlevel;
                    _this.mon.yao(ConfigManager.Instance.nowlevel);
                    _this.mon.visible = true;
                    _this.text2.text = '恭喜获得' + ConfigManager.Instance.nowlevel + '级小怪';
                    console.log('第一次通过第', ConfigManager.Instance.nowlevel, '关');
                }
                else {
                    _this.mon.visible = false;
                    _this.text2.text = '';
                }
                //当前关卡+1
                ConfigManager.Instance.nowlevel = ConfigManager.Instance.nowlevel + 1;
            }
            else {
                _this.victory.visible = false;
                _this.defeat.visible = true;
                _this.return.visible = true;
                _this.text.text = '很遗憾！还差' + (ConfigManager.Instance.goal[ConfigManager.Instance.nowlevel - 1] - ConfigManager.Instance.nowgoal) + '分就过关了';
                console.log('第', ConfigManager.Instance.nowlevel, '关失败');
            }
        }, 1500);
    };
    return Over;
}(eui.Component));
__reflect(Over.prototype, "Over");
//# sourceMappingURL=Over.js.map