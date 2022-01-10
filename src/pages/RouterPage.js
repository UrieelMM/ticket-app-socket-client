import React, {useContext} from 'react';
import {Layout, Menu} from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import IngresarPage from "./IngresarPage";
import ColaPage from "./ColaPage";
import CrearTicketPage from "./CrearTicketPage";
import EscritorioPage from "./EscritorioPage";
import {UiContext} from "../context/UIContext";

const {Sider, Content} = Layout;

const RouterPage = () => {
    //useContext
    const {hiddenMenuState} = useContext(UiContext);

    return (
        <Router>
            <Layout style={{height: "100vh"}}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    hidden={hiddenMenuState}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link
                                to="/ingresar"
                            >
                                Ingresar
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            <Link
                                to="/cola"
                            >
                                Cola
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            <Link
                                to="/crear-ticket"
                            >
                                Crear ticket
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/ingresar" component={IngresarPage}/>
                            <Route path="/cola" component={ColaPage}/>
                            <Route path="/crear-ticket" component={CrearTicketPage}/>
                            <Route path="/escritorio" component={EscritorioPage}/>
                            <Redirect to="/ingresar"/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default RouterPage;
