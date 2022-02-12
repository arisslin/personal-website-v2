export const getText = (wantText) => {
  if (typeof wantText === 'boolean') {
    return wantText ? 'text' : null;
  }

  return null;
};
