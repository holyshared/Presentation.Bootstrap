(function(Presentation, Bootstrap, module){

window.addEvent('load', function(){

	var presentation = $('presentation');

	var p = new Presentation(presentation);

	var b = new Bootstrap(Bootstrap.ASYNC_EXECUTER, module, {
		configurations: {
			page: {
				current: 'currentPage',
				total: 'totalPage'
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

			var evt = document.createEvent('KeyEvents');
			evt.initKeyEvent(
				'keydown', true, true,
				window, 
                false, false, false, false, 
                39, 0
            );

			var root = document.documentElement;
			root.dispatchEvent(evt);

			var current = $('current').get('text'),
				total = $('total').get('text');

			log( (p.getCurrentIndex() == current.toInt() - 1) ? 'page helper current ok' : 'page helper current is ng.' );
			log( (p.getLength() == total.toInt()) ? 'page helper total ok' : 'page helper total is ng.' );
		},
		onFailure: function(){
			log('assert ng');
		}
	});
	b.execute(p);

});

}(Presentation, Moostrap, Presentation.Bootstrap.Module));
