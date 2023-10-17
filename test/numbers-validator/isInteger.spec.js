/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { afterEach } from 'mocha';
import { expect } from 'chai';
import NumbersValidator from '../../app/Numbers_Validator.js';

describe('isInteger  testing positive and negative scenarios', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with integer value', () => {
    const validationResults = validator.isInteger(5);
    expect(validationResults).to.be.equal(true);
  });

  it('should return true when provided with 0 value', () => {
    const validationResults = validator.isInteger(0);
    expect(validationResults).to.be.equal(true);
  });

  it('should return true when provided with negative value', () => {
    const validationResults = validator.isInteger(-9);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when not integer value', () => {
    const validationResults = validator.isInteger(2.05);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided value is not a number (string)', () => {
    expect(() => {
      validator.isInteger('4');
    }).to.throw('[4] is not a number');
  });

  it('should throw an error when provided value is not a number (array)', () => {
    expect(() => {
      validator.isInteger([4]);
    }).to.throw('[4] is not a number');
  });
});
