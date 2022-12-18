import { useEffect, useRef, useState } from 'react';
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
  const menuRef = useRef(null);

  const handleClickOutside = (e: Event) => {
    if (menuRef.current && !(menuRef.current as any).contains(e.target as Node))
      setCollapsed(true);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, [menuRef]);

  return (
    <>
      <Button type='link' onClick={() => setCollapsed(prevState => !prevState)}>
        <MenuOutlined />
      </Button>
      <div ref={menuRef}>
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
      </div>
    </>
  );
};

export default MenuBars;
