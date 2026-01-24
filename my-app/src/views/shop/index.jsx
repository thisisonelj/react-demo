/**
 *  商品筛选页
 */
import { useState } from "react";
import "./index.scss";
import Condition from "./components/condition/index";
import Table from "./components/table/index";
import Tree from "./components/tree/index";
import Pagetion from "./components/pagetion/index";

import { Splitter } from "antd";

const ShopContainer = () => {
  return (
    <>
      <div className="shop-container">
        <Condition></Condition>
        <div className="content">
          <Splitter style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <Splitter.Panel defaultSize="40%" min="20%" max="70%">
              <Tree></Tree>
            </Splitter.Panel>
            <Splitter.Panel>
              <Table></Table>
            </Splitter.Panel>
          </Splitter>
        </div>
        <div className="footer">
          <Pagetion></Pagetion>
        </div>
      </div>
    </>
  );
};

export default ShopContainer;
