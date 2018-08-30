//check off specific todo by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//click on x to delete Todo
$("span").click(function(spanKlikEvent){
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); //this this refers to li
	});
	//stop bubbling
	spanKlikEvent.stopPropagation();

});
