import ButtonInfo from "../../components/button/index";
import ModalInfo from "../../components/modal/index";
import { useRef, useState } from "react";
import { Input } from "antd";
import "./index.scss";
function HeaderInfo({ btnGroups }) {
  const inputRef = useRef(null);
  const inputStyle = {
    width: "200px",
    marginLeft: "2%",
  };
  const [modalStatus, setModalStatus] = useState(false);
  const [modalTilte, setModalTilte] = useState(btnGroups[0].value);
  const btnChaneg = (n) => {
    console.log("父组件传递的事件prop属性");
    inputRef.current.focus();
    setModalStatus(!modalStatus);
    setModalTilte(n.value);
  };
  const modalChange = (status) => {
    setModalStatus(status);
  };
  return (
    <>
      <div className="header-container">
        <ButtonInfo btnProps={btnGroups} onBtnChange={btnChaneg}></ButtonInfo>
        <ModalInfo
          modalStatus={modalStatus}
          onModalChange={modalChange}
          title={modalTilte}
        ></ModalInfo>
        <Input placeholder="Basic usage" ref={inputRef} style={inputStyle} />
      </div>
    </>
  );
}
export default HeaderInfo;
