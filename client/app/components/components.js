import angular from 'angular';
    import WesternReceiveModule from './westernReceive/westernReceive.module';
    import DropdownSelectNgModule from './dropdownSelectNg/dropdownSelectNg.module';

const ComponentsModule = angular.module('app.components',[
    WesternReceiveModule.name, 
    DropdownSelectNgModule.name 
]);

export default ComponentsModule;