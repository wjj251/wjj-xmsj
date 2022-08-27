function getStyle(obj,attr){
    return window.getComputedStyle ? getComputedStyle(obj,true)[attr] : obj.currentStyle[attr];
}
console.log(1);
function startMove(obj,json,fn){

    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        let onOff = true;
        for(let key in json){
            let cur = key === 'opacity' ? Math.floor(parseFloat(getStyle(obj,key)) * 100) : parseInt(getStyle(obj,key));
            let speed = (json[key] - cur) / 7;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(cur !== json[key]){
                onOff = false;
            }
            if(key === 'opacity'){
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = `alpha(opacity=${cur + speed})`
            }else{
                obj.style[key] = cur + speed + 'px';
            }
        } 
        if(onOff){
            clearInterval(obj.timer);
            if(typeof fn === 'function'){
                fn();
            }
        }
    }, 30);
}