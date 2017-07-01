$(".tabnew > .tabx li").click(function(){
$(this).addClass("change").siblings().removeClass();

var a=$(this).index();
$(".taball").children().eq(a).show().siblings().hide();

})

$(".nineul li").mouseenter(function(){
	$(this).children(".nine_two").show()
	/*$(this).css("z-index",1)*/
})
$(".nineul li").mouseleave(function(){
	$(this).children(".nine_two").hide()
})
