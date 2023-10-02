import { afterEach } from 'mocha';
import NumbersValidator from '../../app/Numbers_Validator.js';
import { expect } from 'chai';

describe('getEvenNumbersFromArray testing positive and negative scenarios', ()=> {
  let validator;
  beforeEach(()=>{
    validator = new NumbersValidator();
  });

  afterEach(()=>{
    validator=null;
  });

  it('should return array of even numbers when array of numbers is provided', ()=>{
    const validationResults = validator.getEvenNumbersFromArray([5,7,6,7,8]);
    expect(validationResults).to.be.eql([6,8]);
  });

  it('should return empty array if provided array is empty', ()=>{
    const validationResults = validator.getEvenNumbersFromArray([]);
    expect(validationResults).to.be.eql([]);
  });

  it('should return an empty array if in provided array has all numbers but there are no even', ()=>{
    const validationResults = validator.getEvenNumbersFromArray([5,7,9,13,57]);
    expect(validationResults).to.be.eql([]);
  });

  it('should throw an error when provided value is not an array', ()=>{
    expect(()=>{
      validator.getEvenNumbersFromArray('4');
    }).to.throw('[4] is not an array of "Numbers"');
  });

  it('should throw an error when provided value is array with not only numbers', ()=>{
    expect(()=>{
      validator.getEvenNumbersFromArray([6,7,"j"]);
    }).to.throw('[6,7,j] is not an array of "Numbers"');
  });
});
