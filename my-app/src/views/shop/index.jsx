/**
 *  商品筛选页
 */
import { useState, useRef } from "react";
import "./index.scss";
import Condition from "./components/condition/index";
import Table from "./components/table/index";
import Tree from "./components/tree/index";
import Pagetion from "./components/pagetion/index";
import { tableTable, TreeData } from "./mock/index";
import { Splitter } from "antd";

const ShopContainer = () => {
  const [tableData, setTableData] = useState(tableTable);
  const [treeData, setTreeData] = useState(TreeData);
  const tableRef = useRef(null);
  const treeRef = useRef(null);

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
  return (
    <>
      <div className="shop-container">
        <Condition refresh={refreshTable} clear={onClear}></Condition>
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
