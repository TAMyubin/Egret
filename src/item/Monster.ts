// 怪物图鉴
class Monster extends egret.DisplayObjectContainer{
    /**构造函数 */
    public constructor(){
        super();
        this.init();
    }
    /**怪物背景图片 */
    public bg:eui.Image;
    /**怪物样子图片 */
    public Monster_Img:eui.Image;
    /**怪物名字 */
    public Monster_name:eui.Label;

    /**初始化界面 */
    private init(){
         this.bg = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.bg4, 0, 0, 192, 220);
        this.Monster_Img = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.btn1, 17, 35, 158, 107);
        this.Monster_name = ConfigManager.Instance.foundlabel(this, 41, 165);
        this.Monster_name.size = 28;  
    }
    /**显示小妖 */
    public yao(level:number){
        ConfigManager.Instance.changeImage(this.Monster_Img,ConfigManager.Instance.ImageURL.monster + level + "_png")
        switch(level){
              case 0:
                this.Monster_name.text = '？？？？';
                break;
            case 1:
                this.Monster_name.text = '无知小妖';
                break;
            case 2:
                this.Monster_name.text = '懵懂妖将';
                break;
            case 3:
                this.Monster_name.text = '聪明妖王';
                break;
            case 4:
                this.Monster_name.text = '机智妖皇';
                break;
            case 5:
                this.Monster_name.text = '智慧妖帝';
                break;
        }
    }
}