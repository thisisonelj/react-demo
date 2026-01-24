/**
 * 筛选条件项
 */
import { useState } from "react";
import "./index.scss";
const ConditionContainer = () => {
  const [conditionTitle, setConditionTitle] = useState("这是筛选条件项");

  return (
    <>
      <div className="condition-container">{conditionTitle}</div>
    </>
  );
};

export default ConditionContainer;
