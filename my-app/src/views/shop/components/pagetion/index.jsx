/**
 * 筛选条件项   输入框、日期选择、下拉列表
 */
import { useState } from "react";
import "./index.scss";
import { Button, Form, Input, Select, Space, DatePicker } from "antd";
import moment from "moment";
import dayjs from "dayjs";
const PagetionContainer = () => {
  const [title] = useState("这是分页部分");
  return (
    <>
      <div className="pagetion-container">{title}</div>
    </>
  );
};

export default PagetionContainer;
