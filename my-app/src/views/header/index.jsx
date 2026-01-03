import ButtonInfo from "../../components/button/index";
import ModalInfo from "../../components/modal/index";
import { useRef, useState, useContext } from "react";
import { Input } from "antd";
import "./index.scss";
import { DictContext } from "../../components/context/index";
function HeaderInfo({ btnGroups }) {
  const inputRef = useRef(null);
  const inputStyle = {
    width: "200px",
    marginLeft: "2%",
  };
  const [modalStatus, setModalStatus] = useState(false);
  const [modalTilte, setModalTilte] = useState(btnGroups[0].value);
  const dictContextInfo = useContext(DictContext);
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
        <DictContext
          value={dictContextInfo.map((e) => {
            return {
              key: Object.keys(e).length ? Object.keys(e)[0] : "default",
            };
          })}
        >
          <ModalInfo
            modalStatus={modalStatus}
            onModalChange={modalChange}
            title={modalTilte}
          ></ModalInfo>
        </DictContext>
        <Input placeholder="Basic usage" ref={inputRef} style={inputStyle} />
      </div>
    </>
  );
}
export default HeaderInfo;
