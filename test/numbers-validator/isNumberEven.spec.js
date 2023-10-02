import { afterEach } from 'mocha';
import NumbersValidator from '../../app/Numbers_Validator.js';
import { expect } from 'chai';

describe('isNumberEven testing', ()=> {
  let validator;
  beforeEach(()=>{
    validator = new NumbersValidator();
  });

  afterEach(()=>{
    validator=null;
  });

  it('should return true when provided with an even number', ()=>{
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with an odd number', ()=>{
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', ()=>{
    expect(()=>{
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });

  it('should throw an error when provided an array', ()=>{
    expect(()=>{
      validator.isNumberEven([4,8]);
    }).to.throw('[4,8] is not of type "Number" it is of type "object"');
  });
});
