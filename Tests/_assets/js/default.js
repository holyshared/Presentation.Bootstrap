(function(Presentation, Bootstrap, module){

window.addEvent('load', function(){

	var presentation = $('presentation');

	var p = new Presentation(presentation);

	var b = new Bootstrap(Bootstrap.ASYNC_EXECUTER, module, {
		onBeforeBootstrap: function(key, title, current, total){
			log(current + '/' + total + ' ' + key + ' - ' + title + ' start');
		},
		onAfterBootstrap: function(key, title, current, total){
			log(current + '/' + total + ' ' + key + ' - ' + title + ' complete');
		},
		onSuccess: function(){
			p.start();

			var evt = document.createEvent('KeyEvents');
			evt.initKeyEvent(
				'keydown', true, true,
				window, 
                false, false, false, false, 
                39, 0
            );

			var root = document.documentElement;
			root.dispatchEvent(evt);

			log( (p.getCurrentIndex() == 1) ? 'keyboard helper ok' : 'keyboard helper is disabled.' );


		},
		onFailure: function(){
			log('assert ng');
		}
	});
	b.execute(p);

});

}(Presentation, Moostrap, Presentation.Bootstrap.Module));
