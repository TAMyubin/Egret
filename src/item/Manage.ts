// 界面管理
class Manage extends egret.DisplayObjectContainer{
    /**构造函数 */
    public constructor(hh:number){
        super();
        this.y = hh;
        console.log("误差为：" ,hh);
        ConfigManager.Instance.hei = hh;
        this.init();
           console.log('界面管理初始化完成');
    }
    /**主界面 */
    public mainscene: mainScene;
    /**游戏界面 */
    public playing : Playing;
        /**结束界面 */
     public over:Over;
       /**捉妖库界面 */
    public book:Book;

       /**初始化界面 */
    private init(){
        this.mainscene = new mainScene();
        this.addChild(this.mainscene);
         this.playing = new Playing();
        this.addChild(this.playing);
        this.book = new Book();
        this.addChild(this.book);
        this.over = new Over();
        this.addChild(this.over);
        ConfigManager.Instance.manage = this;
    }
  
}