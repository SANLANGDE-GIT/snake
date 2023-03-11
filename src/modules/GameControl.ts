
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    // 蛇
    snake: Snake;
    // 食物
    foot: Food;
    // 记分牌
    scorePanel: ScorePanel;

    // 移动方向
    direction: string = '';
    // 是否死亡
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.scorePanel = new ScorePanel(10,1);
        this.foot = new Food();

        // 初始化
        this.init();
    }
    // 游戏初始化方法，调用即游戏开始
    init(){
        document.addEventListener('keydown', this.keydownHandler.bind(this));

        this.run();

    }

    keydownHandler(event: KeyboardEvent){
        // console.log(this)
        // 验证key是否合法
        // 修改direction
        this.direction = event.key
    }

    run(){
        /**
         * 上
         * 下
         * 左
         * 右
         */

        let X = this.snake.X;
        let Y = this.snake.Y;

        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y -=10;
                break;
            case "ArrowDown":
            case "Down":
                Y +=10;
                break;
            case "ArrowLeft":
            case "Left":
                X -=10;
                break;
            case "ArrowRight":
            case "right":
                X +=10;
                break;
        }

        this.checkEated(X, Y)

        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e){
            alert(e);
            this.isLive = false;
        }
        
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1) * 30);

    }

    checkEated(X:number, Y:number):boolean{
        if(X === this.foot.X && Y === this.foot.Y){
            this.foot.change(); // 修改食物
            this.scorePanel.addScore(); // 添加分数
            this.snake.addBody(); // 添加身体
            return true;
        }
        return false;
    }

}

export default GameControl;
