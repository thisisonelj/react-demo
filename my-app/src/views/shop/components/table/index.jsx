/**
 * 表格显示项
 */
import { useState } from "react";
import "./index.scss";
import { Flex, Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;

const TableContainer = ({ data, updateRow, deleteRow }) => {
  const onUpdate = (value, record, index) => {
    updateRow(value);
  };
  const onDelete = (value, record, index) => {
    deleteRow(value);
  };
  return (
    <>
      <div className="table-container">
        <Table dataSource={data.tableData}>
          <Column title="商品名称" dataIndex="shopName" key="key" />
          <Column title="商品日期" dataIndex="shopDate" key="key" />
          <Column title="商品类型" dataIndex="shopTypeName" key="key" />
          <Column title="商品价格" dataIndex="shopPrice" key="key" />
          <Column
            title="操作"
            key="action"
            render={(value, record, index) => (
              <Space size="middle">
                <a onClick={() => onUpdate(value, record, index)}>修改</a>
                <a onClick={() => onDelete(value, record, index)}>删除</a>
              </Space>
            )}
          />
        </Table>
      </div>
    </>
  );
};

export default TableContainer;
