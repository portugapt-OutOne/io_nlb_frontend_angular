import { SortPipe } from './sort.pipe';

describe('ProductsPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });
});
