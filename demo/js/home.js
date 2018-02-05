function chkTxt(linkboxId,showId){
	$("#"+linkboxId).children("li").click(function(){
		var txt=$(this).text();
		$("#"+showId).text(txt);
	})
}
function show(boxId){
	$("#"+boxId).show();
}
function hide(boxId){
	$("#"+boxId).hide();
}
function fadeIn(boxId){
	$("#"+boxId).fadeIn();
}
function fadeOut(boxId){
	$("#"+boxId).fadeOut();
}
function showOrNot(boxId){
	if ($("#"+boxId).is(":hidden")) {
		$("#"+boxId).show();
	}else{
		$("#"+boxId).hide();
	};

}
function switchOn(chkId){
	 $("#"+chkId).attr("checked", !$(this).attr("checked")).next().find(".swi_check>.checked").css("left","2px");
	
}
/*正在巡检动画*/
function scaleX(num){
	$("#chkDoing"+num).animate({width:"80px"},500);
}

function addWarn(boxId){
  	 	$("#"+boxId).addClass("warn");
  	 }
/*滚动条滚动到指定位置*/
function scrollToP(boxId){
$("html,body").animate({scrollTop:$("#"+boxId).offset().top},1000)
}

/*异常项计算*/
function addCell(n){
	var warnEle = $("#categoryList"+n).find("li").find(".check-warning-num");
	var warnNum=0;
	warnEle.each(function(){
		warnNum=warnNum+parseInt($(this).text());
	})
	var cellNum=$("#categoryList"+n).find("li").length;
	var infoHtml="异常"+"<span class='c-orange'>"+warnNum+"项</span>"
	
	// var totalInfo=totalNum+"个异常项";
	if(warnNum>0){
		$("#info"+n).html(infoHtml);
		// $("#totalInfo").html(totalInfo);

	} 
}
function total(){
	var totalNum=0;
	$(".check-warning-num").each(function(){
		totalNum=totalNum+parseInt($(this).text());
		var totalInfo=totalNum+"个异常项";
		$("#totalInfo").html(totalInfo);
	})

}
/*年月周天切换*/
function changeEle(){
var optionVal=$("#changeCyc").val();
	if(optionVal=="year"){
		$("#monthSel").show();
		$("#monthLabel").show();
		$("#daySel").show();
		$("#dayLabel").show();
		$("#weekdaySel").hide();
	}
	if(optionVal=="month"){
		$("#monthSel").hide();
		$("#monthLabel").hide();
		$("#daySel").show();
		$("#dayLabel").show();
		$("#weekdaySel").hide();
	}
	if(optionVal=="week"){
		$("#monthSel").hide();
		$("#monthLabel").hide();
		$("#daySel").hide();
		$("#dayLabel").hide();
		$("#weekdaySel").show();
	}if(optionVal=="day"){
		$("#monthSel").hide();
		$("#monthLabel").hide();
		$("#daySel").hide();
		$("#dayLabel").hide();
		$("#weekdaySel").hide();
	}
}
/*start*/
$(function(){
    /*设置巡检项*/
    $("input[type='checkbox']").prop("checked",true);    
    $(".dap-ais-category-list").each(function(index){
        var lnum=index+1;
        $("#checkbox"+lnum).parents(".dap-ais-category-ico-box").on("click",function(){
            var checkbox=$(this).find("input[type='checkbox']");
            var oldChk=checkbox.prop("checked");
            checkbox.prop("checked",!oldChk);
            $("#categoryList"+lnum).find("li").find("input[type='checkbox']").prop("checked",!oldChk);
             if(!checkbox.prop("checked")){
                    $("#checkbox"+lnum).parent().prev(".dap-ais-category-ico").addClass("icoGray");
                    $("#categoryList"+lnum).find("li").find(".icon-box").addClass("imgGray");
                }else{
                    $("#checkbox"+lnum).parent().prev(".dap-ais-category-ico").removeClass("icoGray");
                    $("#categoryList"+lnum).find("li").find(".icon-box").removeClass("imgGray");
                }
        })
        $("#categoryList"+lnum).find("li").each(function(index){
            $(this).find(".icon-box").on("click",function(){
                var checkbox=$(this).find("input[type='checkbox']");
                var oldChk=checkbox.prop("checked");
                checkbox.prop("checked",!oldChk);
                if(!checkbox.prop("checked")){
                    $(this).addClass("imgGray");
                }else{
                    $(this).removeClass("imgGray");
                }
                var chkEle=$("#categoryList"+lnum).find("input[type='checkbox']:checked");
                if(chkEle.length==0){
                $("#checkbox"+lnum).prop("checked",false);
                $("#checkbox"+lnum).parent().prev(".dap-ais-category-ico").addClass("icoGray");
            }
            else{
                $("#checkbox"+lnum).prop("checked",true);
                $("#checkbox"+lnum).parent().prev(".dap-ais-category-ico").removeClass("icoGray");
            }
            }); 
        })
    })
	
	
	$('#myTab a').click(function (e) {
		e.preventDefault();
	// $("#totalNum").text(totalNum);
		$(this).tab('show')
	})
	
  	 /*是否检查*/
  	 $(".dap-ais-categorybox").on('click',function(){
  	 	if($(this).hasClass("dap-ais-nochoose")){
  	 	$(this).removeClass("dap-ais-nochoose");}
  	 	else{
  	 	$(this).addClass("dap-ais-nochoose");}
  	 })
  	 
  	 /*开始巡检*/
  	 $(".check-doing").each(function(index){
  	 	setTimeout(scaleX(index+1),500);
  	 })
    
  	  
})

/*响应式*/

/*var Body = $('body');
function sbOnResize() {
 if ($(window).width() <= 1024 && !Body.hasClass('dap-da-mobileview')) {
    Body.addClass('dap-da-mobileview');
 } else if ($(window).width() > 1024) {
    Body.removeClass('dap-da-mobileview');
 }

};
var lazyLayout = setTimeout(sbOnResize(), 300);
$(window).resize(lazyLayout);*/

// window.onload = function() {
//     if(document.hasOwnProperty("ontouchstart")) {
//         // alert("浏览器支持触屏");
//     }
//     else {
//         // alert("浏览器不支持触屏");
//     }
// };

