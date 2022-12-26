import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { label: 'Start', key: 0 },
  { label: 'Quiz', key: 1 },
  { label: 'Verdict', key: 2 },
];

const paths = ['/', '/quiz', '/verdict'];

const MenuBars = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Button
        data-test='menu-bar-bttn'
        type='link'
        onClick={() => setCollapsed(prevState => !prevState)}
      >
        <MenuOutlined />
      </Button>
      <Menu
        theme='dark'
        mode='inline'
        inlineCollapsed={collapsed}
        items={items}
        onClick={({ key }) => {
          setCollapsed(true);
          navigate(paths[+key]);
        }}
        selectedKeys={[]}
      />
    </>
  );
};

export default MenuBars;
