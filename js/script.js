$(function(){
	console.log('rolling!');
	autofocus();
});

autofocus = function(){
	if(!Modernizr.input.autofocus){
		console.log('no support for autofocus. Setting manually');
		$('input[autofocus]').focus();
	} else {
		console.log('support for autofocus...good');
	}
}