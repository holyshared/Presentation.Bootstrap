(function(Presentation, Bootstrap, module){

window.addEvent('load', function(){

	var presentation = $('presentation');

	var p = new Presentation(presentation);

	var b = new Bootstrap(Bootstrap.ASYNC_EXECUTER, module, {
		configurations: {
			controller: {
				prev: 'prevButton',
				next: 'nextButton',
				first: 'firstButton',
				last: 'lastButton'
			}
		},
		onBeforeBootstrap: function(key, title, current, total){
			log(current + '/' + total + ' ' + key + ' - ' + title + ' start');
		},
		onAfterBootstrap: function(key, title, current, total){
			log(current + '/' + total + ' ' + key + ' - ' + title + ' complete');
		},
		onSuccess: function(){
			p.start();

			var evt = document.createEvent('MouseEvents');
			evt.initMouseEvent(
				'click', true, true,
				window,
				0, 0, 0, 0, 0, 
                false, false, false, false, 
                null, null
            );

			var next = presentation.getElement('.nextButton');
			next.dispatchEvent(evt);

			log( (p.getCurrentIndex() == 1) ? 'controller helper current ok' : 'controller helper current is ng.' );
		},
		onFailure: function(){
			log('assert ng');
		}
	});
	b.execute(p);

});

}(Presentation, Moostrap, Presentation.Bootstrap.Module));
