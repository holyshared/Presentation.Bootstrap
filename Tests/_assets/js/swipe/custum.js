(function(Presentation, Bootstrap, module){

window.addEvent('load', function(){

	var presentation = $('presentation');

	var p = new Presentation(presentation);

	var b = new Bootstrap(Bootstrap.ASYNC_EXECUTER, module, {
		configurations: {
			swipable: true
		},
		onBeforeBootstrap: function(key, title, current, total){
			log(current + '/' + total + ' ' + key + ' - ' + title + ' start');
		},
		onAfterBootstrap: function(key, title, current, total){
			log(current + '/' + total + ' ' + key + ' - ' + title + ' complete');
		},
		onSuccess: function(){
			p.start();
		},
		onFailure: function(){
			log('assert ng');
		}
	});
	b.execute(p);

});

}(Presentation, Moostrap, Presentation.Bootstrap.Module));
