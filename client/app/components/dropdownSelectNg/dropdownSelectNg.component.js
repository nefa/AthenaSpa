import template from './dropdownSelectNg.component.html';
import controller from './dropdownSelectNg.controller.js';
import './dropdownSelectNg.component.scss';

let dropdownSelectNgComponent = {
  restrict: 'E',
  bindings: {
  	list: '<',
  	api: '<'
  },
  template,
  controller,
  controllerAs: 'ds'
};
export default dropdownSelectNgComponent;