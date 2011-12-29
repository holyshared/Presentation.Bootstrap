(function(Presentation, Bootstrap, module){

window.addEvent('load', function(){

	var presentation = $('presentation');

	var p = new Presentation(presentation);

	var b = new Bootstrap('async', module, {
		onSuccess: function(){
			log('assert ok');
		},
		onFailure: function(){
			log('assert ng');
		}
	});
	b.execute(p);

});

}(Presentation, Moostrap, Presentation.Bootstrap.Module));
