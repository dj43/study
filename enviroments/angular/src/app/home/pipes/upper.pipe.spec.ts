import { UpperPipe } from './upper.pipe';

describe('UpperPipe', () => {
  let pipe = new UpperPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert to upper', () => {
    const pipe = new UpperPipe();
    let result = pipe.transform('erer');
    expect(result).toBe('ERER');
  });
});
