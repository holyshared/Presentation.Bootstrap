/*
---
name: Bootstrap.Filter

description: 

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Presentation.Bootstrap/Module
  - Presentation/Filter

provides:
  - Filter
...
*/

(function(Module){

/*
	var bootstrap = new Moostrap('sync', Presentation.Bootstrap.Module, {
		configurations: {
			filters: [filter1, filter2, filter3]
		}
	});
	bootstrap.execute(presentation);
*/
Module.register('filters', {

	title: 'setup of filter',

	configuration: [],

	handler: function(presentation, configuration){
		var bootstrapper = this;

		if (!Type.isArray(configuration)){
			return;
		}

		try {
			configuration.each(function(filter){
				presentation.addFilter(filter);
			});
		} catch(exception){
			throw exception;
			bootstrapper.failure();
		}
		bootstrapper.success();
	}

});

}(Presentation.Bootstrap.Module));
