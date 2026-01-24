/**
 * 树显示项
 */
import { useState } from "react";
import "./index.scss";
const TreeContainer = () => {
  const [title, setTitle] = useState("这是树部分");

  return (
    <>
      <div className="tree-container">{title}</div>
    </>
  );
};

export default TreeContainer;
