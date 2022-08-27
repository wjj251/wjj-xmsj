function Detail() {
    this.$left = $('.ct_left');
    this.$right = $('.ct_right');
    this.$dk = $('.dog_kinds');
    this.$kinds = $('.kinds');
    this.$products = $('.products');
    this.$dp = $('.dog_products');
    this.$more = $('.more');
    this.$tbox = $('.tab');
    this.$tab = $('.table');
    this.num = 0;
    this.$aul = $('.attribute ul');
    this.$pul = $('.products_kinds ul');
    this.$sh = $('.shbox');
    this.$psel = $('.place_sel');
    this.$places = $('.places');
    this.$selects = $('.selects');
    this.$list = $('.list_box');
    this.init();
}
Detail.prototype.init = function () {
    let that = this;
    $.getJSON('../data/detail.json', (data) => {
        let dkinds = data.dkinds;
        let dproducts = data.dproducts;
        let brands = data.brand;
        let dbody = data.dbody;
        let dpro = data.dpro;
        $('.pro_num').text(data.list.length);
        //筛选框
        $(dkinds).each((index, value) => {
            that.$kinds.append(`<li>${value}</li>`);
        })
        $(dproducts).each((index, value) => {
            that.$products.append(`<li>${value}</li>`);
        })
        this.$left.on("mouseenter", function () {
            that.$kinds.css('display', 'block');
        });
        this.$left.on('mouseleave', function () {
            that.$kinds.css('display', 'none');
        });
        this.$right.on('mouseenter', function () {
            that.$products.css('display', 'block');
        })
        this.$right.on('mouseleave', function () {
            that.$products.css('display', 'none');
        })
        //品牌表格
        $(brands).each((index, value) => {

            if (parseInt(index % 6) === 0) {
                that.num = index;
                that.$tab.append(`<tr height="38px" align="center" class="tr${index}"> </tr>`);
                // that.$tab.append('<tr height="38px" align="center"></tr>');
                $(`.tr${index}`).append(`<td class="td" width="121px">${value}</td>`);
                // that.$tab.append(`<td width="121px"><a href="">${value}</a></td>`);
            } else {
                // console.log(1);
                $(`.tr${that.num}`).append(`<td class="td" width="121px">${value}</td>`);
            }

        })
        let first_cell = that.$tab.children().children().eq(0).children().eq(0);
       
        //更多
        this.$more.on('click', function () {
            that.$tbox.css('overflow', 'auto');
        })
        //适合体型
        $(dbody).each((index, value) => {
            that.$aul.append(`<li class='lis' style="height:20px">${value}</li>`);
        })
        $(dpro).each((index, value) => {
            that.$pul.append(`<li class='lis'style="height:20px">${value}</li>`);
        })
        // 遍历改变品牌颜色
        // that.$tab.children().children().children('td').each((index,value) => {
        //     $(value).on('mouseenter',function(){
        //         $(value).css('color','orange');

        //     })
        //     $(value).on('mouseleave',function(){
        //         $(value).css('color','black');

        //     })
        // })

    })
    //导航栏吸顶
    let $header = $('.menu');

$(window).scroll(function () {
    //顶部
    if ($(this).scrollTop() > 100) {
        $header.css({ "position": "fixed", "top": 0, "z-index": 2000,'background':'white','width':'978px' })
        
    }
    else {
        $header.css({ "position": "static", "top": 0, "z-index": 1000,'background':'white','width':'978px' })
    }

})

    //送货
    $('.shz').on('mouseenter', function () {
        that.$places.css('display', 'block');
    })
    $('.shz').on('mouseleave', function () {
        that.$places.css('display', 'none');
    })
    // 遍历送货地址
    this.$selects.each((index, value) => {
        $(value).children('li').each((index, value) => {
            $(value).on('click', function () {
                let str = $(value).text();
               
                $('.sh').children().eq(0).text(str);
                // console.log($(value).attr('class'));
                let provice = $(value);
                $('.city').each((index, value) => {
                    // console.log(value);

                    if ($(value).hasClass(provice.attr('class'))) {

                        // console.log(city);
                        $(value).css('display', 'inline-block');
                        $('.provice').hide();
                        that.$psel.children().eq(0).text(provice.text());
                        that.$psel.children().eq(1).css('display', 'inline-block');
                        let child = $(value).children().children();
                        child.each((index, value) => {
                            $(value).on('click', function () {
                                let city = $(value);
                                // console.log(city.text());
                                $(value).css({'background':'orange','color':'white'});
                                str = str + '' + city.text();
                                console.log(str);
                                $('.sh').children().eq(0).text(str);
                                // that.$psel.children().eq(1).text(city.text());
                                that.$psel.children().eq(1).text(city.text());
                                // console.log(str);
                                //区及目录
                                // $('.area').each((index,value) => {          
                                //     if($(value).hasClass(city.attr('class'))){

                                //         // console.log(city.text());
                                //         $(value).css('display','inline-block');
                                //         city.hide();
                                //         that.$psel.children().eq(2).css('display','inline-block');
                                //         $(value).css('display','inline-block');

                                //     }else{
                                //         ;
                                //     }
                                // })

                            })
                        })

                    }

                })
            })
        })
    })
    //列表
    //动态创建列表
    $.ajax({
        type: 'get',
        url: '../data/detail.json',
        async: true,
        cache: false,
        success: (data) => {
            let list_data = data.list;
            // console.log(list_data[0].big_pic);
            $(list_data).each((index, value) => {
                // console.log(index);
                // console.log(value);
                let big_pic = value.big_pic;
                // console.log(big_pic);
                let small_pic = value.small_pic;

                let good = value.good;
                let texts = value.texts;
                // console.log(texts[0]);
                let pre_price = value.pre_price;
                let price = value.price;
                let sales = value.sales;
                let brand = value.brand;
                let body = value.body;
                let product = value.product;
                that.$list.append(
                    `<li>
                        <div class='big_pic'>
                            <div>
                                <img src='${big_pic[0]}' alt=''>
                            </div>
                            <div>
                                <img src='${big_pic[1]}' alt=''>
                            </div>
                            <div>
                                <img src='${big_pic[2]}' alt=''>
                            </div>                          
                        </div>
                        <div class='small_pic'>
                            <div>
                                <img src='${small_pic[0]}' alt=''>
                            </div>
                            <div>
                                <img src='${small_pic[1]}' alt=''>
                            </div>
                            <div>
                                <img src='${small_pic[2]}' alt=''>
                            </div>
                        </div>
                        <div class='texts'>
                            <span class='activity'>活动</span>
                            <span>${brand} ${good}<span>${texts[0]}</span></span>
                        </div>
                        <div class='list_price'><del>${pre_price}</del><span style='color:orange;font-weight:bold;'>${price}</span></div>
                        <div class='list_sales'>月销<span>${sales}</span>袋</div>
                   </li>`
                );
                // 轮播图
               
                //类型筛选
                $('.mr').on('click', function () {
                    that.$list.children().show();
                })
                let td1 = that.$tab.children().eq(0).children().eq(0);
                td1.on('click', function () {
                    that.$list.children().show();
                })
                let select = [];
                let details = "";
                that.$tab.children().children().children('td').each((index, value) => {
                    $(value).on('click',function(){
                        select.push($(value).text());
                        let flag = false;
                        $('.td').css({'background-color':'white','color':'black'});
                        $(this).css({'background-color':'#fff6ef','color':'orange'});
                        that.$list.children().each((index,value) => {
                            // console.log($(value));
                            let ind = index;
                            let val = value;
                            // console.log(ind);
                            $(value).hide();
                                details = data.list[index].body+data.list[index].product + $(value).children('.texts').children().eq(1).text();
                                $(select).each((index,value) => {
                                    if(details.includes(value)){
                                        flag = true;
                                    }else{
                                        flag = false;
                                    }
                                })
                                if(flag){
                                    $(val).show();
                                }
                                else{
                                    $(val).hide();
                                }

                           
                            
                        })
                    })
                })
                $('.attribute').children().children('li').each((index,value) => {
                    $(value).on('click',function(){
                        select.push($(value).text());
                        let flag = false;
                        
                        that.$list.children().each((index,value) => {
                            // console.log($(value));
                            let ind = index;
                            let val = value;
                            // console.log(ind);
                            $(value).hide();
                                details = data.list[index].body+data.list[index].product + $(value).children('.texts').children().eq(1).text();
                                $(select).each((index,value) => {
                                    if(details.includes(value)){
                                        flag = true;
                                    }else{
                                        flag = false;
                                    }
                                })
                                if(flag){
                                    $(val).show();
                                }
                                else{
                                    $(val).hide();
                                }

                           
                            
                        })
                    })
                })
               
                //轮播图
                this.$list.children().each((index, value) => {
                    $(value).on('mouseenter', function () {
                        let $bpic = $(this).children('.big_pic');
                        $(value).css('border-color', 'green');
                        let $spic = $(this).children('.small_pic');
                        let $texts = $(this).children('.texts');
                        for (let i = 0, len = $spic.children().length; i < len; i++) {
                            $spic.children().eq(i).on('mouseenter', function () {
                                // console.log(index);
                                $texts.children().eq(1).children().text(texts[i]);
                                $(this).children().css('border-color', '#d3a018');
                                if (i <= 0) {
                                    $bpic.css('left', '0px');
                                } else if (i >= 2) {
                                    $bpic.css('left', '-400px');
                                } else {
                                    $bpic.css('left', '-200px');
                                }
                            })
                            $spic.children().eq(i).on('mouseleave', function () {
                                $(this).children().css('border-color', '#ddd');
                            })
                        }
                    })
                    $(value).on('mouseleave', function () {
                        $(value).css('border-color', '#ddd');
                    })
    
                })
                $('.products_kinds').children().children('li').each((index,value) => {
                    $(value).on('click',function(){
                        select.push($(value).text());
                        let flag = false;
                        
                        that.$list.children().each((index,value) => {
                            // console.log($(value));
                            let ind = index;
                            let val = value;
                            // console.log(ind);
                            $(value).hide();
                                details = data.list[index].body+data.list[index].product + $(value).children('.texts').children().eq(1).text();
                                $(select).each((index,value) => {
                                    if(details.includes(value)){
                                        flag = true;
                                    }else{
                                        flag = false;
                                    }
                                })
                                if(flag){
                                    $(val).show();
                                }
                                else{
                                    $(val).hide();
                                }

                           
                            
                        })
                        // console.log(details);
                    })
                })
                $('.sale').on('click',function(){ 
                    let lsales = []; 
                    let rsales = [];
                    $('.l_left').children().css('background','white');
                    $(this).css('background','#74be5f');
                    let inds = 0;
                    that.$list.children().each((index,value) => {
                        inds = index;
                        lsales.push($(value).children('.list_sales').children().text());
                        
                        
                    })
                    console.log(lsales.sort(
                        function(a,b){
                            return b-a;
                        }
                    ));
                })
                $('.l_left').children().on('click',function(){
                    $('.l_left').children().css('background','white');
                    $(this).css('background','#74be5f');
                })
            })
           
        },
        error: () => {
            
        }
    })
    
}   
new Detail();


