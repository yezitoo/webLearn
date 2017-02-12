// 图片横向排列和纵向排列的设置
$("#rank").click(function(){
      $(".right_wrap").show();
      $(".right_wrap_y").hide();
});
$("#vert").click(function(){
      $(".right_wrap_y").show();
      $(".right_wrap").hide();
});


//回到顶部的设置
$(window).scroll(function(){
	var scrollheight=$(window).scrollTop();
	// console.log(scrollheight);
      if (scrollheight>0){
      	$("#top").show();
      }else{
        $("#top").hide();
      };
});

// 头部放大镜点击事件
$(".search").click(function(){
	$(".wrap_search").show();
	$(".user").hide();
	$(".wrap_search").addClass("scale");
});

//点击头部关闭按钮事件
$(".close_icon").click(function(){
    $(".wrap_search").hide();
    $(".wrap").show();
    $(".user").show();
});

$(".left_list1 ul li").hover(
  function () {
  	// alert(1111);
    $(".left").css("border-right-color","transparent");
    $(this).css("border-right-color","transparent");
  },
  function () {
    $(".left").removeAttr("style");
    $(this).removeAttr("style");
  }
);