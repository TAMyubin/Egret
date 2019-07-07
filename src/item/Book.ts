// 图鉴
class Book extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.init();
        this.visible = false;
        console.log("图鉴初始化");
    }
    //图鉴背景图
    private bg:eui.Image;
    //返回按钮
    private colse:eui.Image;
    //图鉴显示组
    private group :eui.Group;
    //怪物图鉴
    public Monster_Group:Monster[] = [];
    //初始化界面
    private init(){
        //图鉴背景图
        this.bg = ConfigManager.Instance.foundimage(this,ConfigManager.Instance.ImageURL.bg3,0,-158,750,1650);
        /**捉妖库名字图 */
        var bb = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.url3, 265, 218, 221, 90);
        //返回按钮
        this.colse = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.btn4, 0, 231, 150, 88);
        //图鉴显示组
        this.group = new eui.Group();
        var bb = ConfigManager.Instance.foundimage(this.group, ConfigManager.Instance.ImageURL.bg1, 0, 0, 750, 2520);
        bb.alpha = 0;

        for(var i = 0;i<30;i++){
            var nont = new Monster();
            nont.yao(0);
            nont.x = 57 + (i%3)*222;
            nont.y = Math.floor(i/3)*255;
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
    }
 private _colse() {
        this.visible = false;
    }
   public open(){
       for(var i = 0;i<6;i++){
           if(i + 1<=ConfigManager.Instance.maxlevel){
               this.Monster_Group[i].yao(i+1);
           }
           else{
               this.Monster_Group[i].yao(0);
           }
       }
       this.visible = true;
   }
}