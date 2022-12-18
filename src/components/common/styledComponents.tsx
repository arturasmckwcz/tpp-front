import styled from 'styled-components';
import { Layout } from 'antd';

const sidesPadding = '15rem';

export const LayoutWrapper = styled(Layout)`
  .ant-layout-header {
    height: 6rem;
    padding: 0.7rem ${sidesPadding};
    display: flex;
    flex-direction: row;
    align-items: center;
    .ant-btn {
      padding-left: 0;
    }
    & > svg {
      /* pushing logo to the far right */
      margin-left: auto;
    }
    path {
      fill: #f5f5f5;
    }
    .ant-menu {
      margin-right: auto;
      position: relative;
      top: 3rem;
    }
    .ant-menu-inline {
      width: auto;
    }
    .ant-menu-item-selected {
      color: #001529;
      background: #f5f5f5;
    }
    .ant-menu-inline-collapsed {
      display: none;
    }
  }
  .ant-layout-content {
    padding: 0 ${sidesPadding} 2rem ${sidesPadding};
  }
`;
