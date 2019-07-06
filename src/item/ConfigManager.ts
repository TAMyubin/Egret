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
    public foundlabel(group:any,xx:number,yy:number){
        var label = new eui.Label();
        label.x = xx;
        label.y = yy;
        group.addChild(label);
        return label;
    }
    //更换图片
    public changeImage(image:eui.Image,str:string){
        let texture:egret.Texture = RES.getRes(str);
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
    private cave_Group:{node:eui.Image,bool:boolean}[] = [];
    /*读取地洞管理组（节点，是否使用） */
    public get _cave_Group():{node:eui.Image,bool:boolean}[]{
        return this.cave_Group;
    }


    /**脚本管理 */
    public manage: Manage;

}