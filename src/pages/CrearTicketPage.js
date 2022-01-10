import React from 'react';
import {Row, Col, Typography, Button, Divider} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
import useHiddenMenu from "../hooks/useHiddenMenu";

const {Title, Text} = Typography;

const CrearTicketPage = () => {
    //useHiddenMenu
    useHiddenMenu(true);

    const nuevoTicket = () => {
        console.log("Nuevo ticket");
    };

    return (
        <>
            <Row>
                <Col span={14} offset={6} align="center">
                    <Title level={3}>Genera un nuevo ticket</Title>
                    <Button
                        type="primary"
                        icon={<DownloadOutlined/>}
                        size="large"
                        onClick={nuevoTicket}
                    >
                        Generar ticket
                    </Button>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col span={14} offset={6} align="center">
                    <Text style={{fontSize: 55}}>
                        Su número de ticket es:
                        <Text type="success"> 5 </Text>
                    </Text>
                </Col>
            </Row>
        </>
    );
};

export default CrearTicketPage;
