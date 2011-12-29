(function(Presentation, Bootstrap, module){

window.addEvent('load', function(){

	var presentation = $('presentation');

	var p = new Presentation(presentation);

	var filter = {
		activate: function(content){
		}
	};

	var b = new Bootstrap('async', module, {
		onSuccess: function(){
			var isAdded = false, message = '';

			isAdded = p.hasFilter(filter),
			message = (!isAdded) ? 'assert ok' : 'filter is not added';

			log(message);
		}
	});
	b.execute(p);

});

}(Presentation, Moostrap, Presentation.Bootstrap.Module));
