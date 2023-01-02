import { IBankAccout } from './Interface.js'
export class BankAccount implements IBankAccout {

    public accountBalance!: number;

    constructor() {
        this.accountBalance = 100;
    }

    public get AccountBalance(): number {
        return this.accountBalance
    }

    public set AccountBalance(value: number) {
        this.accountBalance = value;
    }

    public Debit(amount: number) {
        var statement: string = "Sorry, You Have Insufficient Balance !";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this.accountBalance > amount) {
                this.accountBalance = this.accountBalance - amount;
                statement = `Transaction successfull New Account Balance is ${this.accountBalance}`
            }
            else {
                statement = `You don't have enough money to do this transaction`;
            }
        }
        return statement;
    }

    public Credit(amount: number) {
        var statement: string = "Transaction failed!";

        if (amount > 0) {
            this.accountBalance = this.accountBalance + amount;
            if (amount > 100) {
                this.accountBalance = this.accountBalance - 1;
            }
            statement = "Your account has been credited successfully!";

        }
        return statement;
    }



}