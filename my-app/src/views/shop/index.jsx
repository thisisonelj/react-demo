/**
 *  商品筛选页
 */
import { useState } from "react";
import "./index.scss";
import Condition from "./components/condition/index";
import Table from "./components/table/index";
import Tree from "./components/tree/index";

const ShopContainer = () => {
  const [indexTitle, setIndexTitle] = useState("这是商品筛选页");

  return (
    <>
      <div className="shop-container">
        {indexTitle}
        <Condition></Condition>
        <Table></Table>
        <Tree></Tree>
      </div>
    </>
  );
};

export default ShopContainer;
