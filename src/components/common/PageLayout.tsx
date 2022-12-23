import { ReactNode } from 'react';
import { ConfigProvider, Layout } from 'antd';

import { ReactComponent as TeamwayLogo } from './logo.svg';
import { LayoutWrapper } from './styledComponents';
import MenuBars from './MenuBars';

const { Header, Content } = Layout;

const PageLayout = (props: { children: ReactNode }) => (
  <ConfigProvider theme={{ token: { colorPrimary: '#aaa' } }}>
    <LayoutWrapper>
      <Header>
        <MenuBars />
        <TeamwayLogo />
      </Header>
      <Content>{props.children}</Content>
    </LayoutWrapper>
  </ConfigProvider>
);

export default PageLayout;
