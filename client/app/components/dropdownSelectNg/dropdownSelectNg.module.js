import angular from 'angular';
import dropdownSelectNgComponent from './dropdownSelectNg.component';

const dropdownSelectNgModule = angular.module('dropdownSelectNg', [])
  .component('dropdownSelectNg', dropdownSelectNgComponent);
export default dropdownSelectNgModule;