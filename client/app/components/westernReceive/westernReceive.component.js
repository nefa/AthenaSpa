import template from './westernReceive.component.html';
import controller from './westernReceive.controller.js';
import './westernReceive.component.scss';

let westernReceiveComponent = {
  restrict: 'E',
  bindings: {
  	accounts: '<'
  },
  template,
  controller,
  controllerAs: '$ctrl'
};
export default westernReceiveComponent;