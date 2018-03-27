import angular from 'angular';
import westernReceiveComponent from './westernReceive.component';

const westernReceiveModule = angular.module('westernReceive', [])
  .component('westernReceive', westernReceiveComponent);
export default westernReceiveModule;