class dropdownSelectNgController {
    constructor() {
      this.name = 'dropdownSelectNg';

      //@input
      this.list;
      //@input
      this.isCollapsed = true;
      this.inputModel = '';
    }

    onSelectItem(valObj) {
		this.inputModel = valObj.name
    	this.api.onSelect(valObj);
    }
  }

  export default dropdownSelectNgController;