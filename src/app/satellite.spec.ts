import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite('one', 'two', 'three', 'four', true)).toBeTruthy();
  });
});
