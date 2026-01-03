import React, { useContext } from "react";
import { ConfigProvider, Modal } from "antd";
import { createStyles, useTheme } from "antd-style";
import { DictContext } from "../../components/context/index";
const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {
    background: token.blue1,
    padding: token.paddingSM,
  },
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-modal-header": {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  "my-modal-footer": {
    color: token.colorPrimary,
  },
  "my-modal-content": {
    border: "1px solid #333",
  },
}));

const ModalInfo = ({ modalStatus, onModalChange, title }) => {
  const dictContextInfo = useContext(DictContext);
  // 获取上下文字典数据
  const { styles } = useStyle();
  const token = useTheme();
  const visible = modalStatus;
  const modalTitle = title;
  const toggleModal = (status) => {
    onModalChange(status);
  };
  const classNames = {
    body: styles["my-modal-body"],
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
  };

  const modalStyles = {
    header: {
      borderInlineStart: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: "inset 0 0 5px #999",
      borderRadius: 5,
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {
      borderTop: "1px solid #333",
    },
    content: {
      boxShadow: "0 0 30px #999",
    },
  };

  return (
    <>
      <ConfigProvider
        modal={{
          classNames,
          styles: modalStyles,
        }}
      >
        <Modal
          title={modalTitle}
          open={visible}
          onOk={() => toggleModal(false)}
          onCancel={() => toggleModal(false)}
          footer="Footer"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default ModalInfo;
