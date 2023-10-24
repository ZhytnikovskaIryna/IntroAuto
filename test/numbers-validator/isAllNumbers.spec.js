import { afterEach } from 'mocha';
import { expect } from 'chai';
import NumbersValidator from '../../app/Numbers_Validator';

describe('isAllNumbers  testing positive and negative scenarios', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with array where all elements are numbers', () => {
    const validationResults = validator.isAllNumbers([5, 2, 1]);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with array that has array inside', () => {
    const validationResults = validator.isAllNumbers([5, 2, 1, [6, 9]]);
    expect(validationResults).to.be.equal(false);
  });

  it('should return false when provided with not all numbers', () => {
    const validationResults = validator.isAllNumbers(['g', 4, 6]);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided value is not an array', () => {
    expect(() => {
      validator.isAllNumbers('4');
    }).to.throw('[4] is not an array');
  });
});
