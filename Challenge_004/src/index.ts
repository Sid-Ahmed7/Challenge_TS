import assert = require('assert');

class BankCustomer {
    private name: string;
    private  pinInput: string;

    constructor(name: string, pinInput: string) {
        this.name = name;
        this.pinInput = pinInput;
    }
    getName() : string { 
        return this.name; 
    }

    verifyPinInput(codePin : string) : boolean { 
        return codePin === this.pinInput; 
    }  
}

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));