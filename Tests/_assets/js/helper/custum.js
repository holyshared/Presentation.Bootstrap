(function(Presentation, Bootstrap, module){

window.addEvent('load', function(){

	var presentation = $('presentation');

	var p = new Presentation(presentation);

	var b = new Bootstrap('async', module, {
		configurations: {
			helpers: {
				keyboard: {
					'prev': ['left'],
					'next': ['right']
				}
			}
		},
		onSuccess: function(){
			var isKeyboardAdded = false, message = '';

			isKeyboardAdded = p.hasHelper('keyboard'),
			message = (isKeyboardAdded) ? 'assert ok' : 'keyboard helper is added';

			log(message);

			p.start();
		},
		onFailure: function(){
			log('assert ng');
		}
	});
	b.execute(p);

});

}(Presentation, Moostrap, Presentation.Bootstrap.Module));
