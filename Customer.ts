import { BankAccount } from "./BankAccount.js";
class Customer {
    public firstName!: string;
    public lastName!: string;
    public gender!: string;
    public age!: number;
    public mobileNumber!: number;
    public bankAccount!: BankAccount;



    public get FirstName(): string {
        return this.firstName;
    }
    public set FirstName(value: string) {
        this.firstName = value;
    }

    public get LastName(): string {
        return this.lastName;
    }

    public set LastName(value: string) {
        this.lastName = value;
    }

    public get Gender(): string {
        return this.gender;
    }
    public set Gender(value: string) {
        this.gender = value
    }

    public get Age(): number {
        return this.age;
    }

    public set Age(value: number) {
        this.age = value;
    }


    public get MobileNumber(): number {
        return this.mobileNumber;
    }

    public set MobileNumber(value: number) {
        this.mobileNumber = value;
    }

    public get BankAccount(): BankAccount {
        return this.bankAccount;
    }

    public set BankAccount(value: BankAccount) {
        this.bankAccount = value;
    }

    public CustomerInfo() {
        return `
            Name:${this.firstName} ${this.lastName}
            Age: ${this.age}
            Gender: ${this.gender}
            Mobile : ${this.mobileNumber}
            Account Balance : ${this.bankAccount}
        
        `
    }
}