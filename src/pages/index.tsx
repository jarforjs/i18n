import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import {
  history,
  addLocale,
  setLocale,
  getLocale,
  getAllLocales,
  useIntl,
} from 'umi';
import styles from './index.less';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

const { Item: MenuItem } = Menu;

export default function IndexPage(props) {
  const { value } = props;
  const intl = useIntl();
  const [list, setList] = useState<string[]>(getAllLocales());
  console.log(list, 'list')
  const onChange = ({ key }) => {
    setLocale(key, false);
  };
  const local = getLocale();
  return (
    <div>
      <Dropdown
        overlayStyle={{ zIndex: 1112 }}
        visible={true}
        overlay={
          <Menu onClick={onChange}>
            {list.map((l) => {
              return <MenuItem key={l}>{l}</MenuItem>;
            })}
            {/* <MenuItem key="en-US">English</MenuItem> */}
          </Menu>
        }
      >
        <Button className={styles.triggle} size={'small'}>
          {local === 'zh-CN' ? 'Chinese' : 'English'}{' '}
          {intl.formatMessage(
            {
              id: 'name',
              // defaultMessage: '旅行者',
            },
            {
              name: 'jack',
            },
          )}
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
