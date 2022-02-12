import { getText } from '../helper';

describe('getText', () => {
  it('check text', () => {
    expect(getText(true)).toEqual('text');
  });
});
