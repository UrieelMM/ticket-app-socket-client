import React from 'react';
import {Card, Col, List, Row, Typography, Tag, Divider} from "antd";
import {data} from "../data";
import useHiddenMenu from "../hooks/useHiddenMenu";

const {Title, Text} = Typography;

const ColaPage = () => {
    //useHiddenMenu
    useHiddenMenu(true);

    return (
        <>
            <Title levelo={1}>Antendiendo al cliente</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={data.slice(0, 3)}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    style={{width: 300, marginTop: 16}}
                                    actions={[
                                        <Tag color="volcano">
                                            {item.agente}
                                        </Tag>,
                                        <Tag color="magenta">
                                            Escritorio: {item.escritorio}
                                        </Tag>
                                    ]}
                                >
                                    <Title>
                                        No. {item.ticketNo}
                                    </Title>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <Divider>Historial</Divider>
                    <List
                        dataSource={data.slice(3)}
                        renderItem={item => (
                            <List.Item.Meta
                                title={`Ticket No. ${item.ticketNo}`}
                                description={
                                    <>
                                        <Text type="secondary" > En el escritorio: </Text> <Tag color="magenta"> {item.escritorio}</Tag>
                                        <Text type="secondary"> Agente: </Text> <Tag color="volcano"> {item.agente}</Tag>
                                    </>
                                }
                            />
                        )}
                    >
                    </List>
                </Col>
            </Row>
        </>
    );
};

export default ColaPage;
