/**
 * 筛选条件项   输入框、日期选择、下拉列表
 */
import { useState } from "react";
import "./index.scss";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  DatePicker,
  InputNumber,
} from "antd";
import moment from "moment";
import dayjs from "dayjs";
const formWrapperCol = {};
const dateFormat = "YYYY/MM/DD";
const ConditionContainer = ({ refresh, clear, priceVarible }) => {
  const [conditionForm] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");
  const [inputNumberSwitch, setInputNumberSwitch] = useState(false);
  const onShopChange = (value) => {};
  const onPriceChange = (value) => {
    priceVarible(value);
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
  const onFresh = () => {
    refresh();
  };
  const onClear = () => {
    clear();
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
          <Form.Item
            name="shopPrice"
            label="商品价格"
            rules={[{ required: true }]}
          >
            <InputNumber
              min={1}
              max={100000}
              onChange={onPriceChange}
              controls={inputNumberSwitch}
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
              <Button type="primary" onClick={onFresh}>
                刷新
              </Button>
              <Button type="primary" onClick={onClear}>
                清空
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ConditionContainer;
