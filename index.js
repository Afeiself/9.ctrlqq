$(function() {
	$(".outer").mouseover(function() {
		$(".outer .left").css("display","block");
		$(".outer .right").css("display","block");
	})
	$(".outer").mouseout(function() {
		$(".outer .left").css("display","none");
		$(".outer .right").css("display","none");
	})
})
$(function (){
	var imgW=$('.inner img').width();
	var x=1;
	var anm=true;
	var timer1=null;
	
	$('.M').scrollLeft(imgW);
	var fir=$('.inner img:first').clone();
	var las=$('.inner img:last').clone();
	$('.inner').append(fir);
	$('.inner').prepend(las);

	$('.left').click(function (){
		clearInterval(timer1);
		if (anm) {
			anm=false;
			x--;
			if (x<0) {
				x=$('.inner img').length-1;
				$('.M').scrollLeft(imgW*(x+1));
			};
			move();
		};
		autoMove();
	});

	$('.right').click(function (){
		clearInterval(timer1);
		if (anm) {
			anm=false;
			x++;
			if (x>=$('.inner img').length) {
				x=2;
				$('.M').scrollLeft(imgW);
			};
			move();
		};
		autoMove();
	});

	function autoMove(){
		timer1=setInterval(function (){
			x++;
			if (x>=$('.inner img').length) {
				x=2;
				$('.M').scrollLeft(imgW);
			};
			move();
		},3500)
	}
	autoMove();

	function move(){
		$('.M').stop().animate({scrollLeft:imgW*x},function (){
			anm=true;
		});
	}
})

