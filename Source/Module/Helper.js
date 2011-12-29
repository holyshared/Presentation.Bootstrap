/*
---
name: Bootstrap.Helper

description: 

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Presentation.Bootstrap/Module
  - Presentation/Helper

provides:
  - Helper
...
*/

(function(Module, Helper){

/*
	var bootstrap = new Moostrap('sync', Presentation.Bootstrap.Module, {
		configurations: {
			helpers: {
				keyboard: {
					//keyboard helper configuration
				},
				controller: {
					//controller helper configuration
				}
			}
		}
	});
	bootstrap.execute(presentation);
*/
Module.register('helpers', {

	title: 'setup of helpers',

	configuration: {},

	handler: function(presentation, configuration){
		var bootstrapper = this,
			helper = null,
			helperKey = '';

		if (!Type.isObject(configuration)){
			return;
		}

		try {
			Object.each(configuration, function(conf, key){
				helperKey = key.capitalize();
				if (!Helper[helperKey]){
					throw new Error('Presentation.Helper.' + helperKey + ' is not found.');
				}
				helper = new Helper[helperKey](conf);
				presentation.addHelper(helper);
			});
		} catch(exception){
			throw exception;
			bootstrapper.failure();
		}
		bootstrapper.success();
	}

});

}(Presentation.Bootstrap.Module, Presentation.Helper));
