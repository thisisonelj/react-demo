import React from "react";
import { Button, Flex } from "antd";

const btnInfo = ({ btnProps, onBtnChange }) => {
  const btnGroupDoms = btnProps.map((n) => {
    return (
      <Button
        type={n.type}
        key={n.id}
        size={n.size}
        color={n.color}
        danger={n.danger}
        onClick={() => {
          console.log(n.id);
          onBtnChange();
        }}
      >
        {n.value}
      </Button>
    );
  });
  return (
    <Flex gap="middle" wrap>
      {btnGroupDoms}
    </Flex>
  );
};

export default btnInfo;
