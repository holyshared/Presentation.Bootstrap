/*
---
name: Bootstrap.Keyboard

description: The module which carries out initial setting of the keyboard helper

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Presentation.Bootstrap/Module
  - Presentation/Helper.Keyboard

provides:
  - Keyboard
...
*/

(function(Module, Helper){

/*
	var bootstrap = new Moostrap('sync', Presentation.Bootstrap.Module, {
		configurations: {
			keyboard: {
				//keyboard helper configuration
			}
		}
	});
	bootstrap.execute(presentation);
*/
Module.register('keyboard', {

	title: 'setup of keyboard helper',

	handler: function(presentation, configuration){
		var bootstrapper = this,
			helper = null;

		if (!Type.isObject(configuration)){
			configuration = {};
		}

		try {
			helper = new Helper.Keyboard(configuration);
			presentation.addHelper(helper);
		} catch(exception){
			throw exception;
			bootstrapper.failure();
		}
		bootstrapper.success();
	}

});

}(Presentation.Bootstrap.Module, Presentation.Helper));
