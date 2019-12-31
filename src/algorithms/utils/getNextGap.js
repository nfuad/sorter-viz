const getNextGap = gap => {
  let nextGap = (gap * 10) / 13;
  if (nextGap < 1) return 1;
  return nextGap;
};

export default getNextGap;
