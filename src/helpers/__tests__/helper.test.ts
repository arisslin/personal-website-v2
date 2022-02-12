import { getText } from '../helper';

describe('getText', () => {
  it('get text on true', () => {
    expect(getText(true)).toEqual('text');
  });

  it('get null on false', () => {
    expect(getText(false)).not.toEqual('text');
    expect(getText(false)).toEqual(null);
  });
});
