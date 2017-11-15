$(function () {
	// 输入框
	// 有光标的时候
	$('.search1 input').focus(function () {
		$('.search').addClass('active');
		$('.search1 input').css({
			backgroundImage: 'none',
			width: '196px',
			backgroundColor: '#fff',
			color: '#a3a4a6'
		});
		$('.search1 input').attr('placeholder','请输入关键字');
	});
	// 失去光标的时候
	$('.search1 input').blur(function () {
		$('.search').removeClass('active');
		$('.search1 input').css({
			backgroundImage: '',
			backgroundSize: '24px 24px',
			width: '85px',
			backgroundColor: ''
		});
		$('.search1 input').attr('placeholder','搜索');
		$('.search1 input').attr('value','');
	});
	// 头部选项卡
	// 鼠标移入
	$('.header-nav .ul1 .li1').mouseenter(function () {
		// 字体变色
		$('.header-nav .ul1 .li1 .a').eq($(this).index()).css({
			color: 'rgba(255,255,255,0.5)'
		});
		// 先清空所有ul
		$('.header-nav .ul1 .li1 .ul2').hide();
		// 点谁谁出现
		$('.header-nav .ul1 .li1 .ul2').eq($(this).index()).show();
	})
	// 鼠标移出
	$('.header-nav .ul1 .li1').mouseleave(function () {
		// 先清空所有ul
		$('.header-nav .ul1 .li1 .ul2').hide();
		// 字体颜色恢复
		$('.header-nav .ul1 .li1 .a').eq($(this).index()).css({
			color: ''
		});
	});
	// logo下的选项卡
	// 鼠标移入
	$('.logo-down1 .ul1 .li1').mouseenter(function () {
		// 全部隐藏
		$('.logo-down1 .ul1 .li1 .down').hide();
		// 点谁谁出现
		$('.logo-down1 .ul1 .li1 .down').eq($(this).index()).show();
		$('.logo-down1 .ul1 .li1 .down').eq($(this).index()).animate({
			top: '57px'
		});
	});
	// 鼠标移出
	$('.logo-down1 .ul1 .li1').mouseleave(function () {
		// 全部隐藏
		$('.logo-down1 .ul1 .li1 .down').hide();
		$('.logo-down1 .ul1 .li1 .down').eq($(this).index()).animate({
			top: '47px'
		});
	});
	// 轮播图
	// 下标
	var iNow = 0;
	var a = $('#banner').width();
	$('#banner .ul2 li').width(a);
	var aLi2 = $('#banner .ul2 li');
	// 一个li标签的宽
	var liW = aLi2.width();
	// 默认值
	$('#banner .ul1 li').eq(0).addClass('active');
	// 显示第二个图片
	$('#banner .ul2').css('left',-liW);
	// ul的宽
	$('#banner .ul2').width(aLi2.length * liW);
	// 下一页
	$('#next').on('click',nextPage);
	// 下一页的函数
	function nextPage() {
		iNow++; // 1
		if (iNow == aLi2.length - 2) {
			$('#banner .ul2').stop().animate({left: -(iNow + 1) * liW},100,function () {
				$('#banner .ul2').css('left',-liW);
			});
			iNow = 0;
		} else {
			// 给ul设置left
			$('#banner .ul2').stop().animate({left: -(iNow + 1) * liW},100);
		}
		// 改变选项
		$('#banner .ul1 li').removeClass('active');
		$('#banner .ul1 li').eq(iNow).addClass('active');
	}
	// 上一页
	$('#pre').on('click',prePage);
	// 上一页的函数
	function prePage () {
		iNow--;
		if (iNow == -1) {
			$('#banner .ul2').stop().animate({left: -(iNow + 1) * liW},100,function () {
				$('#banner .ul2').css('left',-(aLi2.length - 2) * liW);
			});
			iNow = aLi2.length - 3;
		}else {
			$('#banner .ul2').stop().animate({left: -(iNow + 1) * liW},100);
		}
		// 改变选项
		$('#banner .ul1 li').removeClass('active');
		$('#banner .ul1 li').eq(iNow).addClass('active');
	}
	// 定时器
	var timer = setInterval(nextPage,3000);
	// 鼠标移入时关闭定时器
	$('#banner').mouseenter(function () {
		clearInterval(timer);
	})
	// 鼠标移出时开启定时器
	$('#banner').mouseleave(function () {
		timer = setInterval(nextPage,3000);
	})
	// 选项卡
	$('#banner .ul1 li').mouseenter(function () {
		// 先清空所有
		// 改变选项
		$('#banner .ul1 li').removeClass('active');
		iNow = $(this).index();
		$('#banner .ul1 li').eq(iNow).addClass('active');
		$('#banner .ul2').stop().animate({left: -(iNow + 1) * liW},100);
	});
})