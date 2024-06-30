export const removeLeadingZerosFromString = (str: string): string => {
  const zerosFromStartToEndRegex = /^0+$/;
  const startsFromZeroRegex = /^0[0-9]+/;
  const zerosFromStartToAnyNumberRegex = /^0+/;

  if (zerosFromStartToEndRegex.test(str)) {
    return '0';
  }
  if (startsFromZeroRegex.test(str)) {
    return str.replace(zerosFromStartToAnyNumberRegex, '');
  }
  return str;
};
