// Strategy interface declaration
interface PaymentStrategy {
    makePayment: (amount: number) => void;
}

// Base class implementing the startegy interface
abstract class BasePaymentStrategy implements PaymentStrategy {
    makePayment (amount: number): void {
        throw new Error("Strategy must be implemented");
    }
}

// Concrete strategy implementation
class CashPayment extends BasePaymentStrategy {
    makePayment (amount: number): void {
        console.log("Making a cash payment of " + amount);
    }
}

// Concrete strategy implementation
class NetBanking extends BasePaymentStrategy {
    cardNumber: string;
    cvv: number;
    constructor ( cardNumber: string, cvv: number ) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    makePayment (amount: number): void {
        console.log("Making a account net banking payment of " + amount + " with card number " + this.cardNumber);
    }
}

// Concrete strategy implementation
class UpiPayment extends BasePaymentStrategy {
    id: string;
    pin: number;
    constructor ( id: string, pin: number ) {
        super();
        this.id = id;
        this.pin = pin;
    }

    makePayment (amount: number): void {
        console.log("Making a UPI payment of " + amount + " with id " + this.id);
    }
}

// ContextClass
class PaymentSystem {
    strategy: PaymentStrategy;

    setStrategy ( strategy: PaymentStrategy ) {
        this.strategy = strategy;
    }

    pay ( amount: number ) {
        this.strategy.makePayment(amount);
    }
}

// Client driver code;

const context = new PaymentSystem();

context.setStrategy(new UpiPayment("1234", 2345));
context.pay(123);

context.setStrategy(new NetBanking("12345", 890));
context.pay(234);