$(function(){
	console.log('rolling!');
	autofocus();
	placeholder();
	showRange();
});

autofocus = function(){
	if(!Modernizr.input.autofocus){
		console.log('no support for autofocus. Setting manually');
		$('input[autofocus]').focus();
	} else {
		console.log('support for autofocus...good');
	}
}

placeholder = function(){
	if(!Modernizr.input.placeholder){
		console.log('no support for placeholder. Setting manually');
		
	} else {
		console.log('support for placeholder...good');
	}
}

showRange = function(){
	$('#range-val').text($('#range').val());
	$('#range').change(function(){
		console.log('range changed');
		var range = $(this);
		$('#range-val').text(range.val());
	});
}