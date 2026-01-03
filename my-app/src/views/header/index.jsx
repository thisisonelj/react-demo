import ButtonInfo from "../../components/button/index";
import "./index.scss";
function HeaderInfo({ btnGroups }) {
  const btnChaneg = () => {
    console.log("父组件传递的事件prop属性");
  };
  return (
    <>
      <div className="header-container">
        <ButtonInfo btnProps={btnGroups} onBtnChange={btnChaneg}></ButtonInfo>
      </div>
    </>
  );
}
export default HeaderInfo;
