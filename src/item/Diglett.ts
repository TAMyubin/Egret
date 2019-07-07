// 地鼠对象池
class Diglett extends egret.DisplayObjectContainer{
    //构造函数
    public constructor(){
        super();
        this.init();
    }
    //遮罩
    public mask:eui.Image;
    //地鼠图片
    public Img:eui.Image;
    //出现在哪个洞的索引
    private index:number;
    private init(){
        this.mask = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.monster + '1_png', 0, 0, 190, 134);
        this.Img = ConfigManager.Instance.foundimage(this, ConfigManager.Instance.ImageURL.monster + '1_png', 0, 0, 190, 134);
        this.Img.addEventListener(egret.TouchEvent.TOUCH_TAP,this._add,this);//加分事件
    }
    //地鼠的弹出
    public motion(num:number){
        this.index = num;
        this.x = ConfigManager.Instance._cave_Group[num].node.x+40;
        this.y = ConfigManager.Instance._cave_Group[num].node.y-60;
        this.Img.y=100;
        this.visible = true;
        egret.Tween.get(this.Img).to({x:0,y:0},200).wait(1500).to({x:0,y:100},200).call(e=>{
            this.visible = false;
            ConfigManager.Instance._cave_Group[this.index].bool = false;
            console.log("点击到地鼠了"),this.index;
        });
    }
    private _add(){
        egret.Tween.removeTweens(this.Img);
        this.visible = false;
        ConfigManager.Instance._cave_Group[this.index].bool = false;
        console.log("加分");
        ConfigManager.Instance.nowgoal = ConfigManager.Instance.nowgoal + ConfigManager.Instance.score[ConfigManager.Instance.nowlevel-1];
        ConfigManager.Instance.manage.playing.Now_Goal.text = "" + ConfigManager.Instance.nowgoal;
        var Grade = ConfigManager.Instance.addfen();
        Grade.x = this.x+50;
        Grade.y  =this.y + 50;
        Grade.text = "+" + ConfigManager.Instance.score[ConfigManager.Instance.nowlevel-1];
        Grade.visible = true;
        egret.Tween.get(Grade).to({x:this.x + 50,y:this.y},1000).wait(500).call(e=>{
            Grade.visible = false;
        })
    }
}