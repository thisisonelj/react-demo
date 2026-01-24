/**
 * 表格显示项
 */
import { useState } from "react";
import "./index.scss";
const TableContainer = () => {
  const [title, setTitle] = useState("这是表格部分");

  return (
    <>
      <div className="table-container">{title}</div>
    </>
  );
};

export default TableContainer;
