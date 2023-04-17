import { CustomError } from './custom-error.model';

describe('CustomError', () => {
  it('should create an instance', () => {
    expect(new CustomError()).toBeTruthy();
  });
});
