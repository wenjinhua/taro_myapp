import Taro, {Component} from '@tarojs/taro'
import React from 'react'
import './index.less'

interface BarrageData {
    color: string,
    content: string,
    time: string
}

class Barrage extends Component<any, any>{
    private barrageRef: React.RefObject<HTMLDivElement>;
    private randomTop: number=0;
    // public viewWidth: number=document.body.clientWidth;
    public viewWidth: number=665;
    private contentHeight: number;
    constructor(props){
        super(props);
        this.barrageRef = React.createRef();
        this.state={

        }
    }

    //发送弹幕
    send(barrage: BarrageData){
        const barrageDOM = this.barrageRef.current;
        const barrageElement = this.createBarrageElem(barrage);
        barrageDOM.appendChild(barrageElement);

        const x = -(this.viewWidth + barrageElement.offsetWidth);
        setTimeout(()=>{
            barrageElement.style.transform = `translateX(${x}px)`;
            barrageElement.style.webkitTransform = `translateX(${x}px)`;
        }, 5);
    }

    //创建弹幕对象
    createBarrageElem(barrage: barrageData){
        const div = document.createElement('div');
        div.innerHTML = barrage.content;

        div.className = 'left';
        const style: any = {
            color: barrage.color,
            position: 'absolute',
            fontSize: '20px',
            whiteSpace: 'pre',
            textShadow: 'rgb(0,0,0) 1px 1px',
        };

        //默认弹幕是随机滚动
        style.top = `${this.randomTop}px`,
        style.left = `${this.viewWidth}px`;
        style.direction = 'rtl';
        style.transition = 'transform 3s linear 1s';
        style.webkitTransition = '-webkit-transform 3s linear 1s';

        const transitionName = this.getTransitionEndName(div);
        const handleTransitionEnd = () => {
            //弹幕运动完之后移除监听，清除弹幕
            div.removeEventListener(transitionName, handleTransitionEnd);
            this.barrageRef.current.removeChild(div);

            //距离顶端高度减小一个弹幕内容高度
            this.randomTop -= this.contentHeight;
            if(this.randomTop<0){
                this.randomTop=0;
            }
        }
        div.addEventListener(transitionName, handleTransitionEnd);
        
        //增加一个弹幕，就距离顶端位置增加一个弹幕高度，防止弹幕重叠
        this.randomTop += this.contentHeight;

        for(const k in style){
            if(style[k] != void 0){
                div.style[k] = style[k];
            }
        }

        return div;
    }

    getTransitionEndName = (dom: HTMLElement): string | undefined => {
        const cssTransition = ["transition", "webkitTransition"];
        const transitionEnd = {
            transition: "transitionend",
            webkitTransition: "webkitTransitionEnd"
        };
        for (const key of cssTransition) {
            if (dom.style[key] !== undefined) {
            return transitionEnd[key];
            }
        }
        return undefined;
    }

    init = () => {
        // const div = document.createElement("div");
        // div.innerHTML = "div";
        // div.style.fontSize = this.fontSize;
        // const body = document.getElementsByTagName("body")[0];
        // body.appendChild(div);
        this.contentHeight = 30;
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {
        // this.clear();
    }

    render(){
        return(
            <div ref={this.barrageRef}/>
        )
    }
}
export default Barrage