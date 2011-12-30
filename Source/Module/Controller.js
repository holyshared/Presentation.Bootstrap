/*
---
name: Bootstrap.Controller

description: 

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Presentation.Bootstrap/Module
  - Presentation/Helper.Controller

provides:
  - Controller
...
*/

(function(Module, Helper){

/*
	var bootstrap = new Moostrap('sync', Presentation.Bootstrap.Module, {
		configurations: {
			controller: {
				//controller helper configuration
			}
		}
	});
	bootstrap.execute(presentation);
*/
Module.register('controller', {

	title: 'setup of controller helper',

	handler: function(presentation, configuration){
		var bootstrapper = this,
			helper = null;

		if (!Type.isObject(configuration)){
			configuration = {};
		}

		try {
			helper = new Helper.Controller(configuration);
			presentation.addHelper(helper);
		} catch(exception){
			throw exception;
			bootstrapper.failure();
		}
		bootstrapper.success();
	}

});

}(Presentation.Bootstrap.Module, Presentation.Helper));
