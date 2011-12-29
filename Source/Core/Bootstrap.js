/*
---
name: Bootstrap

description: 

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Presentation/Presentation
  - Moostrap/Moostrap.Executer.Async

provides:
  - Core
  - Module
...
*/

(function(Presentation, Module){

Presentation.Bootstrap = {};
Presentation.Bootstrap.Module = Module;

}(Presentation, new Moostrap.Module()));
