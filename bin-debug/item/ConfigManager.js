var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// 管理类（管理图片读取得分）
var ConfigManager = (function () {
    function ConfigManager() {
        //图片路径容器
        this.ImageURL = {
            /**小妖(0-5) */
            monster: 'yao',
            /**统一头像 */
            icon: 'icon1_png',
            /**主界面背景 */
            bg1: 'bg1_jpg',
            /**游戏界面背景 */
            bg2: 'bg2_jpg',
            /**遮罩 */
            bg3: 'bg3_png',
            /**妖怪背景 */
            bg4: 'bg4_png',
            /**结束界面获得妖怪光效 */
            bg5: 'bg5_png',
            /**游戏中倒计时背景 */
            bg6: 'bg6_png',
            /**主界面开始按钮 */
            btn1: 'btn1_png',
            /**结束界面下一关按钮*/
            btn2: 'btn2_png',
            /**结束界面重新开始按钮 */
            btn3: 'btn3_png',
            /**图鉴界面返回按钮 */
            btn4: 'btn4_png',
            /**主界面捉妖库按钮 */
            btn5: 'btn5_png',
            /**时间背景 */
            url1: 'url1_png',
            /**分数 */
            url2: 'url2_png',
            /**捉妖库 */
            url3: 'url3_png',
            /**地洞 */
            url4: 'keng_png',
            /**结束界面失败未知鸟 */
            url5: 'url5_png',
            /**半透明遮罩 */
            url7: 'zhezhao_png',
        };
        /**屏幕适配 */
        this.hei = 0;
        /* 地洞管理组 */
        this.cave_Group = [];
        //前5关需要的分数
        this._goal = [300, 500, 1000, 1500, 3000];
        //增加的分值
        this._score = [10, 15, 20, 25, 30];
        //地鼠出现的时间间隔
        this._count = [700, 600, 500, 450, 400];
        //记录第几关
        this._nowlevel = 1;
        //记录当前得分
        this._nowgoal = 0;
        //加分显示对象池
        this._addfen = [];
    }
    Object.defineProperty(ConfigManager, "Instance", {
        get: function () {
            if (!ConfigManager._instance) {
                ConfigManager._instance = new ConfigManager(); //如果第一次调用就创建一个新的实例
            }
            return ConfigManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    /*创建图片（容器，地址，x坐标，y坐标，宽，高）*/
    ConfigManager.prototype.foundimage = function (group, url, xx, yy, w, h) {
        var image = new eui.Image(); //定义一张图片
        var texture = RES.getRes(url); //定义贴图
        image.texture = texture;
        /*位置 */
        image.x = xx;
        image.y = yy;
        image.width = w;
        image.height = h;
        group.addChild(image);
        return image;
    };
    //创建文本(容器，x,y)
    ConfigManager.prototype.foundlabel = function (group, xx, yy) {
        var label = new eui.Label();
        label.x = xx;
        label.y = yy;
        group.addChild(label);
        return label;
    };
    //更换图片
    ConfigManager.prototype.changeImage = function (image, str) {
        var texture = RES.getRes(str);
        image.texture = texture;
    };
    Object.defineProperty(ConfigManager.prototype, "_cave_Group", {
        /*读取地洞管理组（节点，是否使用） */
        get: function () {
            return this.cave_Group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManager.prototype, "goal", {
        //读取前五关需要的分数
        get: function () {
            return this._goal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManager.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManager.prototype, "count", {
        //地鼠出现的时间间隔
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManager.prototype, "maxlevel", {
        //读取已经过了多少关
        get: function () {
            return this._maxlevel;
        },
        //修改已经过了多少关
        set: function (value) {
            this._maxlevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManager.prototype, "nowlevel", {
        //读取现在第几关
        get: function () {
            return this._nowlevel;
        },
        //设置现在第几关
        set: function (value) {
            this._nowlevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManager.prototype, "nowgoal", {
        //获取当前得分
        get: function () {
            return this._nowgoal;
        },
        //设置当前得分
        set: function (value) {
            this._nowgoal = value;
        },
        enumerable: true,
        configurable: true
    });
    //加分显示
    ConfigManager.prototype.addfen = function () {
        if (this._addfen.length > 0) {
            for (var i = 0; i < this._addfen.length; i++) {
                if (this._addfen[i].visible == false) {
                    this._addfen[i].visible == true;
                    return this._addfen[i];
                }
            }
        }
        var fen = new eui.Label();
        fen.size = 40;
        fen.textColor = 0xFCF305;
        fen.touchEnabled = false;
        this.manage.playing.Group.addChild(fen);
        this._addfen.push(fen);
        return fen;
    };
    /*做个单例 */
    ConfigManager._instance = null;
    return ConfigManager;
}());
__reflect(ConfigManager.prototype, "ConfigManager");
//# sourceMappingURL=ConfigManager.js.map