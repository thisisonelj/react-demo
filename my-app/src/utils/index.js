/**
 * 冒泡排序
 */
export const bubbleSortFunc = (oldArr) => {
  if (!oldArr || !oldArr.length) return [];
  for (let i = 0; i < oldArr.length - 1; i++) {
    for (let j = 0; j < oldArr.length - 1 - i; j++) {
      if (oldArr[j] > oldArr[j + 1]) {
        let temp = oldArr[j];
        oldArr[j] = oldArr[j + 1];
        oldArr[j + 1] = temp;
      }
    }
  }
  return oldArr;
};
