
describe('Demo', () => {
  let testString = 'nothing';

  beforeEach(() => {
    testString = 'not nothing';
  });

  it('should say "not nothing"', () => {
    expect(testString).toBe('not nothing');
  });

});
