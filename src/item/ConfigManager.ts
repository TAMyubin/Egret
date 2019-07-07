// 管理类（管理图片读取得分）
class ConfigManager {
    /*做个单例 */
    private static _instance: ConfigManager = null;
    public static get Instance(): ConfigManager {
        if (!ConfigManager._instance) {
            ConfigManager._instance = new ConfigManager();//如果第一次调用就创建一个新的实例
        }
        return ConfigManager._instance;
    }
    /*创建图片（容器，地址，x坐标，y坐标，宽，高）*/
    public foundimage(group: any, url: string, xx: number, yy: number, w: number, h: number) {
        var image = new eui.Image();//定义一张图片
        let texture: egret.Texture = RES.getRes(url);//定义贴图
        image.texture = texture;
        /*位置 */
        image.x = xx;
        image.y = yy;
        image.width = w;
        image.height = h;
        group.addChild(image);
        return image;
    }
    //创建文本(容器，x,y)
    public foundlabel(group: any, xx: number, yy: number) {
        var label = new eui.Label();
        label.x = xx;
        label.y = yy;
        group.addChild(label);
        return label;
    }
    //更换图片
    public changeImage(image: eui.Image, str: string) {
        let texture: egret.Texture = RES.getRes(str);
        image.texture = texture;
    }
    //图片路径容器
    public ImageURL = {
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
    }

    /**屏幕适配 */
    public hei = 0;
    /* 地洞管理组 */
    private cave_Group: { node: eui.Image, bool: boolean }[] = [];
    /*读取地洞管理组（节点，是否使用） */
    public get _cave_Group(): { node: eui.Image, bool: boolean }[] {
        return this.cave_Group;
    }
    //前5关需要的分数
    private _goal = [300, 500, 1000, 1500, 3000];
    //读取前五关需要的分数
    public get goal(): number[] {
        return this._goal;
    }
    //增加的分值
    private _score = [10,15,20,25,30];
    public get score():number[]{
        return this._score;
    }
    //地鼠出现的时间间隔
    private _count = [700,600,500,450,400];
     //地鼠出现的时间间隔
    public get count():number[]{
        return this._count;
    }
    //已经过了多少关
    private _maxlevel:number;
    //读取已经过了多少关
    public get maxlevel():number{
        return this._maxlevel;
    }
    //修改已经过了多少关
    public set maxlevel(value:number){
        this._maxlevel = value;
    }
    //记录第几关
    private _nowlevel: number = 1;
    //设置现在第几关
    public set nowlevel(value: number) {
        this._nowlevel = value;
    }
    //读取现在第几关
    public get nowlevel(): number {
        return this._nowlevel;
    }
    //记录当前得分
    private _nowgoal:number = 0;
    //设置当前得分
    public set nowgoal(value:number){
        this._nowgoal = value;
    }
       //获取当前得分
    public get nowgoal():number{
        return this._nowgoal;
    }

    /**脚本管理 */
    public manage: Manage;
    //加分显示对象池
    private _addfen:eui.Label[] = [];
    //加分显示
public addfen(){
    if(this._addfen.length>0){
        for(var i = 0;i<this._addfen.length;i++){
            if(this._addfen[i].visible == false){
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
}


}