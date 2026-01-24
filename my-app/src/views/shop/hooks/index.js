/**
 * 相关hooks
 */
// 价格响应计算  商品价格=price/(1 + 20%)
import BigNumber from "bignumber.js";
import { useCallback, useRef, useMemo } from "react";
export const useCacultePriceInfo = (price) => {
  const defaultTaxRate = useRef("0.2");
  const currentPrice = price;
  const cacultePrice = useCallback(() => {
    return new BigNumber(currentPrice)
      .dividedBy(new BigNumber(1).plus(defaultTaxRate.current))
      .toFixed(2);
  }, [currentPrice]);
  const cacultePriceResult = useMemo(() => {
    return new BigNumber(currentPrice)
      .dividedBy(new BigNumber(1).plus(defaultTaxRate.current))
      .toFixed(2);
  }, [currentPrice]);
  return {
    cacultePrice,
    cacultePriceResult,
  };
};
