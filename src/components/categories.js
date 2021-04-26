import React from "react";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['All', 'Products', 'New Product'];
const defaultCheckedList = ['All', 'Products'];

const Categories = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="categoriesChecbox">
        <div className="categoriesItem">
            <span>Categories</span>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </div>
        <div className="categoriesAll">
            <span className="categories-text">Items</span>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>All</Checkbox>
        </div>
    </div>
  );
};

export default Categories; 