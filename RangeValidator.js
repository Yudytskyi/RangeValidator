'use strict';

class RangeValidator {
    /**
     *
     * @param {number} from
     * @param {number} to
     */
    constructor(from, to) {
        this._from = from;
        this._to = to;
    }

    set from(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Your value must be number type');
        }
        this._from = value;
    }

    get from() {
        return this._from;
    }

    set to(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Your value must be number type');
        }
        this._to = value;
    }

    get to() {
        return this._to;
    }

    get range() {
        return [this._from, this._to]
    }

    validate(number) {
        if (typeof number !== 'number') {
            throw new TypeError('Your value mast be number type');
        }
        if (number < this._from || number > this._to) {
            console.log(`Your number must be in range from ${this._from} to ${this._to}`);
        } else {
            console.log('Your number is good!')
        }
    }
}

const value1 = new RangeValidator(10, 20);

value1.validate(12);

value1.validate(8);

value1.validate(42);

value1.to = 50;

value1.validate(42);

console.log(`New range from ${value1.from} to ${value1.to}`);
