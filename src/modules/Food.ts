
class Food{
    // 定义一个属性表示食物对应的元素
    element: HTMLElement;
    constructor(){
        this.element = document.getElementById("food")!; // 叹号表示不为空
    }
    // 获取坐标
    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }

    //修改位置
    change(){
        // 生成随机位置
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + "px";
        this.element.style.top = left + "px";
    }

}

export default Food;