import React from 'react';
import 'antd/dist/antd.css';
import { Select, Tag } from 'antd';

const Tags = (props) => {
    const options = [{ value: 'Vat 20%' }, { value: 'Vat 10%' }];
    return (
        <div className="tag-form">
            <Tag className="label-tag">
                Tag
            </Tag>
            <Select
                mode="multiple"
                showArrow
                tagRender={props}
                defaultValue={['Vat 20%']}
                options={options}
                className="general-select-style"
            />
      </div>
    );
};

export default Tags;  