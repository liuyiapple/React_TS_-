import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
// 导入 hooks 
import { useHistory,useParams,useRouteMatch,useLocation } from "react-router-dom"
export const Header = () => {
  const history = useHistory() 
  const parmas = useParams() //  获取当前页面传递过来的参数
  const match = useRouteMatch() // 
  const location = useLocation()
  console.log(parmas); 
  console.log(match);
  console.log(location);
  
 return <div className={styles["app-header"]}>
    {/* top-header */}
    <div className={styles["top-header"]}>
      <div className={styles.inner}>
        <Typography.Text>让旅游更幸福</Typography.Text>
        <Dropdown.Button
          style={{ marginLeft: 15 }}
          overlay={
            <Menu>
              <Menu.Item>中文</Menu.Item>
              <Menu.Item>English</Menu.Item>
            </Menu>
          }
          icon={<GlobalOutlined />}
        >
          语言
        </Dropdown.Button>
        <Button.Group className={styles["button-group"]}>
          <Button onClick={() => history.push("register")}>注册</Button>
          <Button onClick={() => history.push("signIn")}>登录</Button>
        </Button.Group>
      </div>
    </div>
    <Layout.Header className={styles["main-header"]}>
    <span onClick={() => history.push("/")}>
      <img src={logo} alt="" className={styles["App-logo"]} />
        <Typography.Title level={3} className={styles.title}>
          React旅游网
        </Typography.Title>
    </span>
      <Input.Search
        placeholder="请输入旅游目的地、主题或关键字"
        className={styles["search-input"]}
      />
    </Layout.Header>
    <Menu mode={"horizontal"} className={styles["main-menu"]}>
      <Menu.Item key={1}>旅游首页 </Menu.Item>
      <Menu.Item key={2}>周末游 </Menu.Item>
      <Menu.Item key={3}>跟团游 </Menu.Item>
      <Menu.Item key={4}>自由行 </Menu.Item>
      <Menu.Item key={5}>XXXX </Menu.Item>
      <Menu.Item key={6}>XXXX </Menu.Item>
      <Menu.Item key={7}>XXXX </Menu.Item>
      <Menu.Item key={8}>XXXX </Menu.Item>
      <Menu.Item key={9}>XXXX </Menu.Item>
      <Menu.Item key={10}>XXXX </Menu.Item>
      <Menu.Item key={11}>XXXX </Menu.Item>
    </Menu>
  </div>;
};
