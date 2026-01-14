/**
 * 秒表
 */
import { useState, useRef } from "react";
import { Button } from "antd";
import "./index.scss";

function TestRef() {
  const [show, setShow] = useState(true);
  const testRef = useRef(null);
  const setStateClick = () => {
    setShow(!show);
  };
  const deleteClick = () => {
    testRef.current.remove();
  };
  return (
    <>
      <div className="test-ref-container">
        <Button onClick={setStateClick}>通过state切换</Button>
        <Button onClick={deleteClick} className="change">从dom中删除</Button>
        {show && <h1 ref={testRef}>Hello World</h1>}
      </div>
    </>
  );
}
export default TestRef;
