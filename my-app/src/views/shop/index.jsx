/**
 *  商品筛选页
 */
import { useState, useRef, useEffect, useEffectEvent } from "react";
import "./index.scss";
import Condition from "./components/condition/index";
import Table from "./components/table/index";
import Tree from "./components/tree/index";
import Pagetion from "./components/pagetion/index";
import { tableTable, TreeData } from "./mock/index";
import { Splitter } from "antd";
import { useCacultePriceInfo } from "./hooks/index";
import { message } from "antd";
import BigNumber from "bignumber.js";
const ShopContainer = () => {
  const [messageApi] = message.useMessage();
  const [tableData, setTableData] = useState(tableTable);
  const [treeData, setTreeData] = useState(TreeData);
  const tableRef = useRef(null);
  const treeRef = useRef(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const { cacultePrice, cacultePriceResult } =
    useCacultePriceInfo(currentPrice);
  // 树联动表格
  const handleTreeSelect = (shopType) => {
    const currentTableData = tableTable.filter((n) => {
      return n.shopType === shopType;
    });
    setTableData(currentTableData);
  };
  // 刷新表格、树
  const refreshTable = () => {
    setTableData(tableTable);
    setTreeData(TreeData);
  };
  // 编辑表格行
  const updateTable = (val) => {
    const currentTableRow = tableData.map((n) => {
      if (n.key !== val.key) {
        return n;
      } else {
        return {
          ...val,
          key: "AAAAAAAAA",
          shopDate: "2026/02/14",
          shopName: "商品$$$$$",
          shopPrice: 999,
          shopType: "normal",
          shopTypeName: "中型",
        };
      }
    });
    setTableData(currentTableRow);
  };

  // 删除表格行
  const deleteTable = (val) => {
    const currentTableData = tableData.filter((n) => {
      return n.key !== val.key;
    });
    setTableData(currentTableData);
  };
  // 清空表格和树
  const onClear = () => {
    setTableData([]);
    setTreeData([]);
  };
  // 监听价格变化
  const priceChangeInfo = (val) => {
    setCurrentPrice(val);
  };
  // 将提示从响应式里抽出来
  const priceChangeTip = useEffectEvent(() => {
    if (currentPrice && new BigNumber(currentPrice).isGreaterThan(0)) {
      console.log("价格发生变化");
    }
  });
  useEffect(() => {
    const currentTableData = tableData.map((m) => {
      return { ...m, shopPrice: cacultePriceResult };
    });
    setTableData(currentTableData);
    priceChangeTip();
    return () => {
      // setCurrentPrice(0);
    };
  }, [currentPrice]);
  return (
    <>
      <div className="shop-container">
        <Condition
          refresh={refreshTable}
          clear={onClear}
          priceVarible={priceChangeInfo}
        ></Condition>
        <div className="content">
          <Splitter style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <Splitter.Panel defaultSize="40%" min="20%" max="70%">
              <Tree
                data={{ treeData }}
                nodeClick={handleTreeSelect}
                ref={treeRef}
              ></Tree>
            </Splitter.Panel>
            <Splitter.Panel>
              <Table
                data={{ tableData }}
                updateRow={updateTable}
                deleteRow={deleteTable}
                ref={tableRef}
              ></Table>
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
