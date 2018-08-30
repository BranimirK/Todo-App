//check off specific todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete Todo
$("ul").on("click", "span", function(spanKlikEvent){
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); //this this refers to li
	});
	//stop bubbling
	spanKlikEvent.stopPropagation();

});

$("input[type='text']").keypress(function(keyEvent){
	if(keyEvent.which ===13){
		//grab a new todo text from input
		var todoText = $(this).val();
		//create and add a new li
		$("ul").prepend("<li><span><i class='far fa-trash-alt'></i></span> " +todoText +"</ul>")
		//delete text in input box
		$(this).val("");
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
})