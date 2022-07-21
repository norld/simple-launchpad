export const truncateWalletAddress = (input = '', n = 10) => {
    if (input.length > n) {
      let sbstr = input.substring(0, n - 1);
      let revSbstr = input
        .split('')
        .reverse()
        .join('')
        .substring(0, n - 2);
      const finalString = `${sbstr} ... ${revSbstr}`;
      return finalString;
    } else {
      return input;
    }
  };