
class cart{
	constructor(){
		this.cartList = document.querySelector('.e-two');
		this.money = document.querySelector('.money')
		this.init();
	}
	init(){

		//获取本地存储
		let storage = window.localStorage;
		let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
        // alert(storage_str)

		//转对象
        let storage_obj = convertStrToObj(storage_str);
        // console.log(storage_obj)

           
		//动态添加
		for(let key in storage_obj){  //key : 商品id
            //取出商品信息
			
            let goods = storage_obj[key];
         //如果有num为0 就显示空购物车样式
         if(goods == ''){
            $('.e-two').css({"display" : "none"});
            $('.carr').css({"display" : "block"});

        }else{
            $('.e-two').css({"display" : "block"});
            $('.carr').css({"display" : "none"});

        }
			//添加
			let div = document.createElement('div');
			div.className = 'page';
            div.setAttribute('data-good-id',key);
			div.innerHTML = `
                <div class="tu-a">
                        <input type="checkbox" name="" id="" checked>
                    </div>
                    <div class="tu-w"><img src="../../dist/img/img/2.jpg" alt=""></div> 
                    <div class="tu-z">${goods.name}</div>   
                    <div class="tu-n">
                        <div class="tn-1">-</div>
                        <input class="tn-2" type="text" name="" id="" value="${goods.num}" />  
                        <div class="tn-3">+</div>
                    </div>
                    <div class="yh">有货</div>
                    <div class="tu-j">￥${goods.price * goods.num}</div>   
                    <div class="tu-d">
                        <span>[收藏]</span>
                        <span class="del">[删除]</span>
                    </div>
                </div>

			`
			this.cartList.insertBefore(div,this.money);
            // this.cartList.appendChild(div);
            $('.price1').text(goods.price * goods.num);
            // let num = /(\d+)/.exec($('.green').text())[1];
            $('.green').text('去结算(' + goods.num + ')');
            $('.jia').text('E宠购物车' + goods.num);

         
		}

            


		//获取所有的-
        let minus = document.querySelectorAll('.tn-1');
       
		        //添加事件
				for(let i = 0,len = minus.length;i < len;i ++){
                 
					minus[i].onclick = function(){
						//后端
						//获取商品Id
						let id = this.parentNode.parentNode.getAttribute('data-good-id');
						//获取后端数据
						let storage = window.localStorage;
						let  storage_str = storage.getItem('products') ? storage.getItem('products') : '';
						//转对象
						let storage_obj = convertStrToObj(storage_str);
						if(storage_obj[id].num > 1){
							storage_obj[id].num --;
						}
						//存入本地存储中
						storage.setItem('products',JSON.stringify(storage_obj));
						//前端
						this.nextElementSibling.value = storage_obj[id].num;
						//合计
						this.parentNode.nextElementSibling.innerText = storage_obj[id].price * storage_obj[id].num;
                        location.reload(true);

					}   
				}
        //获取所有的+
        let plus = document.querySelectorAll('.tn-3');
		//添加事件
        for(let i = 0,len = plus.length;i < len;i ++){
            plus[i].onclick = function(){
                //后端
                //获取商品Id
                let id = this.parentNode.parentNode.getAttribute('data-good-id');
                //获取后端数据
                let storage = window.localStorage;
                let  storage_str = storage.getItem('products') ? storage.getItem('products') : '';
                //转对象
                let storage_obj = convertStrToObj(storage_str);
                
                storage_obj[id].num ++;
                
                //存入本地存储中
                storage.setItem('products',JSON.stringify(storage_obj));
                //前端
                this.previousElementSibling.value = storage_obj[id].num;
                //合计
                this.parentNode.nextElementSibling.innerText = storage_obj[id].price * storage_obj[id].num;
                location.reload(true);

            }
        }
		//获取所有的数量框
		let input = document.querySelectorAll('.tn-2');
		//添加事件
        for(let i = 0,len = input.length;i < len;i ++){
            input[i].onblur = function(){
                //后端
                //获取商品Id
                let id = this.parentNode.parentNode.getAttribute('data-good-id');
                //获取后端数据
                let storage = window.localStorage;
                let  storage_str = storage.getItem('products') ? storage.getItem('products') : '';
                //转对象
                let storage_obj = convertStrToObj(storage_str);
                let num = this.value;
                if(/^\d+$/.test(num) && num > 0){
                    storage_obj[id].num = num*1;
                }else{
                    storage_obj[id].num = 1;
                }
                //存入本地存储中
                storage.setItem('products',JSON.stringify(storage_obj));
                //前端
                this.value = storage_obj[id].num;
                //合计
                this.parentNode.nextElementSibling.innerText = storage_obj[id].price * storage_obj[id].num;
                location.reload(true);

            }
        }
		//获取所有删除
		let del = document.querySelectorAll('.del');
		for(let i = 0,len = del.length;i < len;i ++){
			del[i].onclick = function(){
			// alert(1)
             //后端
                //获取商品Id
                let id = this.parentNode.parentNode.getAttribute('data-good-id');
                //获取后端数据
                let storage = window.localStorage;
                let  storage_str = storage.getItem('products') ? storage.getItem('products') : '';
                //转对象
                let storage_obj = convertStrToObj(storage_str);
                //删除这个商品
                //delete ：删除对象中指定的属性
                delete storage_obj[id];
                //存入本地存储中
                storage.setItem('products',JSON.stringify(storage_obj));
			this.parentNode.parentNode.parentNode.remove();
            location.reload(true);
			
		}

         
		}}
		
    }


new cart();

$('.e-left>span').click(function(){
    location.href = '../index.html'
})
$('.e-left>span').mouseenter(function(){
    $(this).css({"cursor" : "pointer"})
})

//页面跳转
$('.buy').click(function(){
    location.href = '../index.html' //去首页
})
