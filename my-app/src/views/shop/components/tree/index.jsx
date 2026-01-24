/**
 * 树显示项
 */
import { useState } from "react";
import "./index.scss";
import { Tree } from "antd";

const customFieldNames = {
  title: "shopName",
  key: "key",
  children: "children",
};
const TreeContainer = ({ data, nodeClick }) => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onSelect = (selectedKeysValue, info) => {
    const selectShopType = info.node.shopType;
    nodeClick(selectShopType);
  };

  return (
    <>
      <div className="tree-container">
        <Tree
          blockNode
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          treeData={data.treeData}
          defaultExpandAll
          fieldNames={customFieldNames}
        />
      </div>
    </>
  );
};

export default TreeContainer;
