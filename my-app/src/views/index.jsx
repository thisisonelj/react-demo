import { useState } from "react";
import "./index.css";
import Header from "./header/index";
function Index() {
  const [btnGroups, setBtnGroups] = useState([
    {
      id: "create",
      value: "新建",
      size: "middle",
      color: "primary",
      type: "primary",
      icon: "",
      danger: false,
      ghost: false,
    },
    {
      id: "update",
      value: "修改",
      size: "middle",
      color: "defalut",
      type: "default",
      icon: "",
      danger: true,
      ghost: false,
    },
    {
      id: "query",
      value: "查询",
      size: "middle",
      color: "cyan",
      type: "default",
      icon: "",
      danger: false,
      ghost: false,
    },
  ]);
  return (
    <>
      <Header btnGroups={btnGroups}></Header>
    </>
  );
}

export default Index;
