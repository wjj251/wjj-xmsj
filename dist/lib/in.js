class Index {
	constructor() {
		this.$header = $('#header')

		this.init();
	}
	init() {
		this.$header.load('./html/boss.html #top', function () {
			//模态框
			$('#option li').click(function () {
				$(this).addClass('active').siblings().removeClass('active');
				var a = $(this).index();
				$('#card li:eq(' + a + ')').addClass('active').siblings().removeClass('active');
			})

			$(".icon_e").click(function () {
				$(".login_count_b").show();
				$(".login_count_a").hide();
			})
			$(".icon_z").click(function () {
				$(".login_count_a").show();
				$(".login_count_b").hide();
			})
			$('#toggleModal').click(function () {
				$('.mask').css({ "display": "block" })
				$('.modal').css({ "display": "block" })
			})

			$('.zczc').click(function () {
				$('.mask').css({ "display": "block" })
				$('.modal1').css({ "display": "block" })
			})

			$('.lolo').click(function () {
				$('.mask').css({ "display": "block" })
				$('.modal').css({ "display": "block" })
				$('.modal1').css({ "display": "none" })
			})

			// mask.addEventListener('click', function(e){
			//   if (e.target.ClassName == 'modal'){
			//     console.log('模态框被点击了')
			//   } else {
			//     modal.style.display = 'none'
			//     modal1.style.display = 'none'

			//     mask.style.display = 'none';
			//   }
			// })

			$('.mask').click(function () {
				$('.mask').css({ "display": "none" })
				$('.modal').css({ "display": "none" })
				$('.modal1').css({ "display": "none" })
			})



			$('.yzm').css({ "font-size": "12px", "margin-top": "15px" })

			//登录
			//验证码点击获取

			var falg = false;

			const codee = ('000000' + Math.floor(Math.random() * 999999)).slice(-6);
			// alert(code)
			var str = codee;
			// alert(str)

			$(".yzm").click(function () {
				if ($('.hh').val() == '' | falg == false) {
					$('.off').text("请输入正确的手机号")

				} if (falg == true) {
					console.log(str);
					var count = 60;

					//jquery要用setInterval()定时器，因为这里不会调用倒计时函数，要循环执行
					var interval = setInterval(() => {
						if (count == 0) {
							//因为button是<input>元素，所以这里要用.val()方法
							$(".yzm").text("重新获取").removeAttr("disabled");
							count = 60;
							//当倒计时结束，这里要清除定时器
							clearTimeout(interval);
						} else {
							$(".yzm").text(count + "s后重新获取").attr("disabled", "disabled");
							count--;
						}
					}, 1000);
				}

			})


			// alert($('.hh').val);
			//手机框失焦
			$('.hh').blur(function () {
				var re = /^[1][345678][0-9]{9}$/;
				var content = $('.hh').val();
				// alert(content)
				if (re.test(content)) {
					$('.off').text("✓")
					falg = true;
				}
				else {
					$('.off').text("请输入正确的手机号")
					// alert('错误')
					falg = false;


				}
				// 点击登录
				$('.login_button').click(function () {


					
					let us = $('.hh').val();
					// alert(us)
					// console.log(cookie);
					// $.cookie('aa','bb',{expires : 2,path : '/'})
					$.cookie('logined',us,{expires : 7,path : '/'});


					
					if ($('.mm').val() == str) {

						$('.modal').css({ "display": "none" });
						$('.modal1').css({ "display": "none" });
						$('.mask').css({ "display": "none" });
						$('#toggleModal').text($('.hh').val()[0] + $('.hh').val()[1] + $('.hh').val()[2] + '****' + $('.hh').val()[7] + $('.hh').val()[8] + $('.hh').val()[9] + $('.hh').val()[10])
						$('.zczc').text('[退出]')
						$('.zczc').text('[退出]').css({ "color": "blue" })
					} else {
						$('.off').text("请输入一致的验证码")

					}

					$('.zczc').text('[退出]').click(function () {
						location.reload()
					})
				})

			});


			//注册验证码点击获取

			var fal = false;

			const codd = ('000000' + Math.floor(Math.random() * 999999)).slice(-6);

			var st = codd;
			// alert(str)

			$(".yzm1").click(function () {
				if ($('.hh1').val() == '' | fal == false) {
					$('.off1').text("请输入正确的手机号")

				} if (fal == true) {
					console.log(st);
					var count = 60;

					//jquery要用setInterval()定时器，因为这里不会调用倒计时函数，要循环执行
					var interval = setInterval(() => {
						if (count == 0) {
							//因为button是<input>元素，所以这里要用.val()方法
							$(".yzm1").text("重新获取").removeAttr("disabled");
							count = 60;
							//当倒计时结束，这里要清除定时器
							clearTimeout(interval);
						} else {
							$(".yzm1").text(count + "s后重新获取").attr("disabled", "disabled");
							count--;
						}
					}, 1000);
				}

			})


			// alert($('.hh').val);
			//手机框失焦
			$('.hh1').blur(function () {
				var re = /^[1][345678][0-9]{9}$/;
				var content = $('.hh1').val();
				// alert(content)
				if (re.test(content)) {
					$('.off1').text("✓")
					fal = true;
				}
				else {
					$('.off1').text("请输入正确的手机号")
					// alert('错误')
					fal = false;
				}


				// 点击注册
				$('.zc1').click(function () {

					if ($('.mm11').val() == st) {
						// alert($('.mm11').val())

						location.href = './register.html'

					} else {
						$('.off1').text("请输入一致的验证码")

					}

				})
			})

			//页面跳转

			$('.ccc').click(function () {
				// let num = /(\d+)/.exec($('.ccc').text())[1];
				// console.log(num);
				// if (num == 0) {
				// 	location.href = './html/kcard.html'

				// } else {
					location.href = './html/card.html'

				// }

			})
			$('.ccc').mouseenter(function () {
				$(this).css({ "color": "blue" })
			})
			$('.ccc').mouseleave(function () {
				$(this).css({ "color": "black" })
			})


			$('.boss').click(function () {
				location.href = './index.html'
			})
			
			let storage = window.localStorage;
			let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
			// alert(storage_str)
			let storage_obj = convertStrToObj(storage_str);

			//转对象
			for (let key in storage_obj) {  //key : 商品id

				let goods = storage_obj[key];
				console.log(goods.num)
				$('.ccc').text('购物车(' + goods.num + ')');
			}
		})

	}
}


new Index()
