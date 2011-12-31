/*
---
name: Bootstrap.Swipe

description: The module which carries out initial setting of the swipe helper

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Presentation.Bootstrap/Module
  - Presentation/Helper.Swipe

provides:
  - Swipe
...
*/

(function(Module, Helper){

/*
	var bootstrap = new Moostrap('sync', Presentation.Bootstrap.Module, {
		configurations: {
			swipable: true
		}
	});
	bootstrap.execute(presentation);
*/
Module.register('swipable', {

	title: 'setup of swipe helper',

	handler: function(presentation, configuration){
		var bootstrapper = this,
			helper = null;

		if (!Type.isBoolean(configuration) || configuration === false){
			bootstrapper.success();
			return;
		}

		try {
			helper = new Helper.Swipe();
			presentation.addHelper(helper);
		} catch(exception){
			throw exception;
			bootstrapper.failure();
		}
		bootstrapper.success();
	}

});

}(Presentation.Bootstrap.Module, Presentation.Helper));
