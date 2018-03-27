export class ConfirmationElement {
    constructor(id, label, type, orderIndex = 0, hidden = 0) {
        this.id = id;
        this.label = label;
        this.type = type;
        this.className = undefined;
        this.orderIndex = orderIndex;
        // hidden 0 - is not hidden,
        // 1- hidden in small confirmation screen, visible in expanded screen
        // 2- visible in small conf screen , hidden in expanded screen
        this.hidden = hidden;
        this.values = [];
    }

    addValue(value) {
        this.values.push(value);
    }

    setHidden(hidden) {
        this.hidden = hidden;
    }

    setClassName(className) {
        this.className = className;
    }
}


export class IBAN { /*IBAN Model*/
  //incapsulate all logic in the model

  static getDefaultProps() {
    return { 
        ibanMinLength: 6, 
        ibanMaxLength: 24, 
        ibanValue: "", 
        ibanRequiredErrorMessage: "" /*:string_content_editor*/, 
        ibanInvalidErrorMessage: "" /*:string_content_editor*/,
        _ibanError: "" /*:string_content_editor*/ 
    };
  }

  constructor(props) {
    this._backupProps = {}; /*:Object<props>*/

    /*assign*/
    Object.assign(this, IBAN.getDefaultProps(), props);
    /*Collect the 'props' for later onReset payload*/
    Object.assign(this._backupProps , props);
  }

  set ibanError(errMessage) {
    this._ibanError = errMessage;
  }

  get ibanError() { return this._ibanError; }


  validate() {
    /**/
  }

  hasMinLength()  { //check for a minimum length of iban
    if(this.ibanValue.length >= this.ibanMinLength) {
      return true;
    }

    //set ibanError
    // this.ibanError = this.ibanRequiredErrorMessage;
    // return false;
  }

  reset() {
    Object.assign(this, IBAN.getDefaultProps(), this._backupProps);
    /*emit reset event*/
  }
}

export class DatePickerModel {
  /* restrictions & validation conditions */
  static getDefaultProps() {
    return {
      formatYear: 'yy',
      maxDate: new Date(2027, 5, 22),
      minDate: new Date(),
      startingDay: 1,
      showWeeks: true,

      dateValue: new Date()//all inputs should use [x]Value name conventions
    };
  }  

  constructor(props) {
    this._backupProps = {};

    Object.assign(this, DatePickerModel.getDefaultProps(), props);
    Object.assign(this._backupProps, props);
  }

  reset() {
    Object.assign(this, DatePickerModel.getDefaultProps(), this._backupProps) 
  }
}

export class AccountModel {

}

export class AmountCurrency {

    balanceIsCorrect()/*:boolean*/ {

    }
}

export class SpecificModel {}


export default class BasicForm {


    constructor() {
        this.summaryModel/*Array<ConfirmationElement>*/ = [];
    }

    onSubmit() {

    }

    onReset() {

    }

    onSwitchForms() {

    }

    syncStepTwo({ id, label, type, order, hidden, values, className }) {
        let _confirmationEl = new ConfirmationElement(id, label, type, order);

        if(hidden) {
            _confirmationEl.setHidden(true);
        }

        if (className) {
            _confirmationEl.setClassName(className);
        }

        values.forEach( val => _confirmationEl.addValue(val));

        this.upsertById(_confirmationEl);
    }

    goStep2() {

    }

    goStep3() {

    }

    goBack() {

    }

    upsertById(el/*:ConfirmationElement*/) {
        let _item = this.summaryModel.filter(elem => elem.id === el.id);
        if(_item) {
            this.summaryModel = this.summaryModel.filter(elem => elem.id !== el.id);
        } else {
            this.summaryModel.push(_item);            
        }
        console.log("this.summaryModel:", this.summaryModel)
    }

    removeByIds(ids/*:Array<string>*/) {
        this.summaryModel = this.summaryModel.filter(elem => this.indexOf(elem.id) < 0, ids);

        // _.remove(this.summaryModel, (sd) => {
        //     return _.findIndex(ids, (id) => {
        //         return sd.id === id;
        //     }) !== -1;
        // });
    }
}



