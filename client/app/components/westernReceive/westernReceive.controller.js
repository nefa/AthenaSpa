import BasicForm, { ConfirmationElement, AmountCurrency } from '../BasicFormModel';


const mockedAccounts = [
	{id: 1, name: 'first Account', IBAN: 'zzzz1234Iban'},
	{id: 2, name: 'second Account', IBAN: 'yyyy1234Iban'},
	{id: 3, name: 'third Account', IBAN: 'kkkk1234Iban'}
]

class WestenReceive extends BasicForm {
    constructor($scope, $filter) {
        super();
        this.$scope = $scope;
        this.$filter = $filter;

        // this.onSelectAccount.

        this.dropdownApi = {
        	onSelect: this.onSelectAccount.bind(this)
        }
    }

    $onInit() {
        this.$scope.$on('RESET_FORM', () => {
            this.onReset(/*special conditions*/);
        })

        this.amount_currency = new AmountCurrency(/*generates default empty currency model*/)
        //@input
        this.selectedAccount; /*:AccountModel*/
        //@Input
        this.accounts/*:Array<AccountModel>*/=[...mockedAccounts];
    }

    onReset(wu) {
        //do special stuff based on special wuReceive conditions
        // if (wu.someSpecialCondition) {
            super.onReset();
            // this.amount_currency.reset();

            this.removeByIds(['account', 'amount']);
        // }
    }

    onSelectAccount(account) {
        this.selectedAccount = this.accounts.filter(acc => account.id == acc.id)[0];

        const {name, nickname, IBAN} = this.selectedAccount;
        const _currentName = name || nickname;

        this.syncStepTwo({
            id: 'account', label: 'western__labels__to_account', 
            type: 'complex', order: 1, hidden: 0, values: [
                _currentName || id || this.selectedAccount.id,
                this.$filter('uppercase')(IBAN)
            ]
        });

    }

    onChangeAmount(amountVal/*:string*/) {
        if(this.validateAmount(amountVal)) {
            if (this.amount_currency.currencySelected) {

                this.amount_currency.amount = amountVal; //write on local model

                this.syncStepTwo({
                    id: 'amount', className: 'is-bold',
                    label: 'general__labels__amount', type: 'basic', 
                    order: 2, hidden: 0, values: [
                        this.$filter('currency')(this.amount_currency.amount || amountVal, this.amount_currency.currency)
                ]})
            }
        }
    }

    validateAmount(amount/*:string*/) {
        //apply specific western receive money validation for amount
        // return values or set values as class members 
    }

    onSelectCurrency(currency/*:string*/) {
        this.amount_currency.currency = currency;
    }
}


WestenReceive.$inject = ['$scope', '$filter'];

// export class WesternSend extends WestenReceive {
//     constructor($scope, $filter, $window) {
//         super($scope, $filter);
//         this.$window = $window;
//     }

//     validateAmount(amount) { // same method name -> use same template implementation | same super class flow
//         //override: specific western send money validation form amount
//     }

//     $onInit() {
//         super.$onInit();
//         this.specificItem = new SpecificModel();
//     }

//     onReset(wu) { // this.onReset({someSpecialCondition: 'different implementation on send vs receive'})
//         super.onReset(wu);
//         this.specificItem.reset();
        
//         this.removeByIds(['specificItemName']);
//     }
// }
  

export default WestenReceive;