class lunbo{
    constructor(){
        this.big_box = document.querySelector('#box');
        this.ltmark = document.querySelector('#left');
        this.rtmark = document.querySelector('#right');
        this.lt_btn = document.querySelector('#btn_l');
        this.rt_btn = document.querySelector('#btn_r');
        this.big_pic = document.querySelectorAll('#top li');
        this.small_ul = document.querySelector('#small_ul');
        this.small_pic = document.querySelectorAll('#bottom li');
        this.small_ul.style.width = this.small_pic[0].offsetWidth * this.small_pic.length + 'px';
        this.cur_index = 0;
        this.num = this.small_pic.length;
        this.zIndex = 1;
        this.addEvent();
        this.slide();
        this.autoPlay();
    }
    addEvent(){
        this.ltmark.onmouseenter = this.lt_btn.onmouseenter = function(){
            startMove(this.lt_btn,{opacity : 100});
        }.bind(this);
        this.ltmark.onmouseleave = function(){
            startMove(this.lt_btn,{opacity : 0});
        }.bind(this);
        this.rtmark.onmouseenter = this.rt_btn.onmouseenter = function(){
            startMove(this.rt_btn,{opacity : 100});
        }.bind(this);
        this.rtmark.onmouseleave = function(){
            startMove(this.rt_btn,{opacity : 0});
        }.bind(this);
        this.lt_btn.onclick = function(){
            this.cur_index --;
            if(this.cur_index === -1){
                this.cur_index = this.num - 1;
            }
            this.slide();
        }.bind(this);
        this.rt_btn.onclick = function(){
            this.cur_index ++;
            if(this.cur_index === this.num){
                this.cur_index = 0;
            }
            this.slide();
        }.bind(this);
        let that = this;
        for(let i = 0;i < this.num;i ++){
            this.small_pic[i].onmouseenter = function(){
                startMove(this,{opacity : 100});
            };
            this.small_pic[i].onmouseleave = function(){           
                if(that.cur_index !== i){
                    startMove(this,{opacity : 50});
                }
            }
            this.small_pic[i].onclick = function(){
                this.cur_index = i;
                this.slide();
            }.bind(this);
        }
    }
    slide(){
        this.big_pic[this.cur_index].style.zIndex = ++ this.zIndex;      
        if(this.cur_index === 0){
            startMove(this.small_ul,{left : 0});
        }else if(this.cur_index === this.num - 1){
            startMove(this.small_ul,{left : -(this.num - 3) * this.small_pic[0].offsetWidth});
        }else{
            startMove(this.small_ul,{left : -(this.cur_index - 1) * this.small_pic[0].offsetWidth});
        }
        for(let i = 0;i < this.num;i ++){
            startMove(this.small_pic[i],{opacity : 50});
        }
        startMove(this.small_pic[this.cur_index],{opacity : 100});
    }
    autoPlay(){
        this.timer = setInterval(() => {          
            this.cur_index ++;
            if(this.cur_index === this.num){
                this.cur_index = 0;
            }
            this.slide();
        }, 2000);
        this.big_box.onmouseenter = function(){
            clearInterval(this.timer);
        }.bind(this);
        this.big_box.onmouseleave = function(){
            this.autoPlay();
        }.bind(this);
    }
}
new lunbo();
