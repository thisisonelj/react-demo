/**
 * 动态crud表单
 */
import { useState, useReducer } from "react";
import { Input, Button } from "antd";
import "./index.scss";
import { formCrudReducer } from "../../store/index.js";
// 生成随机数
function getRandomString(length = 8) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function FormInfo() {
  const formList = [
    {
      inputText: "",
      id: getRandomString(),
    },
    {
      inputText: "",
      id: getRandomString(),
    },
  ];
  const [formListTasks, dispatch] = useReducer(formCrudReducer, formList);
  const incrementInfo = () => {
    dispatch({
      type: "add",
    });
  };
  const decrementInfo = (e) => {
    dispatch({
      type: "delete",
      id: e.id,
    });
  };
  const formListInfo = formListTasks.map((e) => {
    return (
      <>
        <div key={e.id} className="item">
          <Input value={e.inputText}></Input>
          <Button type="primary" onClick={incrementInfo}>
            增加
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              return decrementInfo(e);
            }}
          >
            删除
          </Button>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="form-container">{formListInfo}</div>
    </>
  );
}
export default FormInfo;
