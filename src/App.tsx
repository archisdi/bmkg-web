import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';

import HomePage from './pages/Home';

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <div className="App">
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Earthquake</Menu.Item>
        <Menu.Item key="3">Weather</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '50px' }}>
      <HomePage />
    </Content>
    <Footer style={{ textAlign: 'center' }}>developed by archisdi</Footer>
  </Layout>
    </div>
  );
}

export default App;
