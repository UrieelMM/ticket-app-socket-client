import React, {useState} from 'react';
import {Button, Col, Divider, Row, Typography} from "antd";
import {CloseCircleOutlined, RightCircleOutlined} from "@ant-design/icons";
import useHiddenMenu from "../hooks/useHiddenMenu";
import {getUserStorage} from "../helpers/getUserStorage";
import {Redirect, useHistory} from "react-router-dom";

const {Title, Text} = Typography;

const EscritorioPage = () => {
    //useHiddenMenu
    useHiddenMenu(false);

    //useHistory
    const history = useHistory();

    //useState
    const [user] = useState(getUserStorage);

    const singUp = () => {
        localStorage.clear();
        history.replace("/ingresar");
    };

    const siguienteTicket = () => {
        console.log("Siguiente ticket");
    };

    if(!user.agente || !user.escritorio){
        return <Redirect to="/ingresar" />
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{user.agente}</Title>
                    <Text>Usted está trabajando en el escritorio:
                        <Text type="success"> {user.escritorio}</Text>
                    </Text>
                </Col>
                <Col span={4} aling="right">
                    <Button
                        type="danger"
                        onClick={singUp}
                    >
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col>
                    <Text style={{fontSize: 30}}>
                        Está atendiendo el ticket número:
                        <Text
                            type="danger"
                            style={{fontSize: 30}}> 5</Text>
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        type="primary"
                        onClick={siguienteTicket}
                    >
                        Siguiente ticket
                        <RightCircleOutlined />
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default EscritorioPage;
