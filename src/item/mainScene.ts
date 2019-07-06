// 主界面
class mainScene extends egret.DisplayObjectContainer{
    /*构造函数*/
    public constructor(){
        super();
        this.init();
        console.log("初始化主界面");
    }
    private background : eui.Image;//定义主界面背景图片
    private _begin_button:eui.Image;//开始按钮
    private _book_button:eui.Image;//图鉴按钮
    private init(){
        //初始化背景图片
        this.background = ConfigManager.Instance.foundimage(this,ConfigManager.Instance.ImageURL.bg1,0,0,750,1650);
        //开始游戏按钮
        this._begin_button = ConfigManager.Instance.foundimage(this,ConfigManager.Instance.ImageURL.btn1,198,950,354,112);
        //图鉴按钮
        this._book_button = ConfigManager.Instance.foundimage(this,ConfigManager.Instance.ImageURL.btn5,0,220,218,90);

        this._begin_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this._begin, this);//开始按钮回调
        this._book_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this._book, this);//图鉴按钮回调
    }
    //开始游戏
    private _begin(){
         ConfigManager.Instance.manage.playing.begingame(true);
       console.log("点击了开始游戏");
    }
    private _book(){
    ConfigManager.Instance.manage.book.open();
    }
}