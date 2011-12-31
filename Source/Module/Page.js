/*
---
name: Bootstrap.Page

description: 

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Presentation.Bootstrap/Module
  - Presentation/Helper.Page

provides:
  - Page
...
*/

(function(Module, Helper){

/*
	var bootstrap = new Moostrap('sync', Presentation.Bootstrap.Module, {
		configurations: {
			page: {
				//page helper configuration
			}
		}
	});
	bootstrap.execute(presentation);
*/
Module.register('page', {

	title: 'setup of page helper',

	handler: function(presentation, configuration){
		var bootstrapper = this,
			helper = null;

		if (!Type.isObject(configuration)){
			configuration = {};
		}

		try {
			helper = new Helper.Page(configuration);
			presentation.addHelper(helper);
		} catch(exception){
			throw exception;
			bootstrapper.failure();
		}
		bootstrapper.success();
	}

});

}(Presentation.Bootstrap.Module, Presentation.Helper));
