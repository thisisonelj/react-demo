/**
 * 筛选条件项   输入框、日期选择、下拉列表
 */
import { useState } from "react";
import "./index.scss";
import { Button, Form, Input, Select, Space, DatePicker } from "antd";
import moment from "moment";
import dayjs from "dayjs";
const formWrapperCol = {};
const dateFormat = "YYYY/MM/DD";
const ConditionContainer = () => {
  const [conditionForm] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");
  const onShopChange = (value) => {
    console.log(value);
  };
  const onReset = () => {
    conditionForm.resetFields();
  };
  const onsubmit = () => {
    const currentFormData = conditionForm.getFieldsValue();
    currentFormData.shopDate = dayjs(currentFormData.shopDate).format(
      dateFormat,
    );
    console.log(currentFormData);
  };
  return (
    <>
      <div className="condition-container">
        <Form
          wrapperCol={formWrapperCol}
          layout={formLayout}
          form={conditionForm}
          name="conditionShopForm"
        >
          <Form.Item
            name="shopName"
            label="商品名称"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="shopDate"
            label="购买日期"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: "100%" }} format={dateFormat} />
          </Form.Item>
          <Form.Item
            name="shopTypeList"
            label="商品类型"
            rules={[{ required: true }]}
          >
            <Select
              allowClear
              placeholder="请选择一种商品类型"
              style={{ width: "200px" }}
              onChange={onShopChange}
              options={[
                { label: "小型", value: "small" },
                { label: "中型", value: "normal" },
                { label: "大型", value: "large" },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" onClick={onsubmit}>
                查询
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ConditionContainer;
