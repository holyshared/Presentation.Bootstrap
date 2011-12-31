
Presentation.Bootstrap
=======================================

It is an initialization library which helps initialization of **Presentation.js**. 
If this library is used, **Presentation.js** can be initialized freely. 
Initialization processing can also be added to a module.

### Default modules

#### Filter module

A filter module registers the filter specified at the time of initialization.  
Two or more filters can be specified in arrangement.

#### Helper module

A helper module registers the helper who specified at the time of initialization.  
Two or more helpers can be specified with an option. 


How to use
---------------------------------------

In the following example, **Moostrap** is used and the presentation is initialized.  
Original initialization processing is applicable by defining initialization processing as **Presentation.Bootstrap.Module**.

	(function(Presentation, Bootstrap, module){
	
	window.addEvent('domready', function(){
	
		var element = $('presentation');
	
		var presentation = new Presentation(element);
	
		var bootstrapper = new Bootstrap('async', module, {
			configurations: {
				//Filter custum configuration
				//@see Presentation.js filter guide line.
				//@url http://holyshared.github.com/Presentation/
				filters: [
					namespace.filter1,
					namespace.filter2
				],
	
				//Helper custum configuration
				keyboard: {
					prev: ['left', 'j'],
					next: ['right', 'k'],
					first: ['0'],
					last: ['4']
				}
			},
			onSuccess: function(){
				presentation.start();
			}
		});
		bootstrapper.execute(presentation);

	});

	}(Presentation, Moostrap, Presentation.Bootstrap.Module));


### The addition of initialization processing

In order to add initialization processing, it adds using the register method of **Presentation.Bootstrap.Module**.  
A title, initial setting, and the processing to perform are specified. 

(function(Module){

	/*
		var bootstrap = new Moostrap('sync', Presentation.Bootstrap.Module, {
			configurations: {
				custum: {
					key1: 'custum value1',
					key2: 'custum value2'
				}
			}
		});
		bootstrap.execute(presentation);
	*/
	Module.register('custum', {

		title: 'setup of custum helper',

		//default configuration
		configuration: {
			key1: 'value1',
			key2: 'value2'
		},

		handler: function(presentation, configuration){
			var bootstrapper = this;

			if (!Type.isObject(configuration)){
				bootstrapper.failure();
				return;
			}

			try {
				presentation.addHelper(new CustumHelper(configuration));
			} catch(exception){
				//Initialization went wrong.
				throw exception;
				bootstrapper.failure();
			}
			//Initialization was successful.
			bootstrapper.success();
		}
	
	});

}(Presentation.Bootstrap.Module));

The method of building
---------------------------------------

### A module is not included.

php packager build Presentation.Bootstrap/Core Presentation.Bootstrap/Module > presentation-standard.js

### A filter module is included.

php packager build Presentation.Bootstrap/Filter > presentation-standard.js

### A helper module is included.

php packager build Presentation.Bootstrap/Keyboard > presentation-standard.js
php packager build Presentation.Bootstrap/Controller > presentation-standard.js
php packager build Presentation.Bootstrap/Page > presentation-standard.js
php packager build Presentation.Bootstrap/Swipe > presentation-standard.js

### All the modules are included.

php packager build Presentation.Bootstrap/Filter Presentation.Bootstrap/Keyboard Presentation.Bootstrap/Controller Presentation.Bootstrap/Page Presentation.Bootstrap/Swipe > presentation-standard.js
