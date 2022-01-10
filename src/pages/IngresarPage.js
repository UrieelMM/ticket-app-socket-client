import React, {useState,useEffect} from 'react';
import {Form, Input, Button, InputNumber, Typography, Divider} from 'antd';
import {useHistory, Redirect} from "react-router-dom";
import {SaveOutlined} from "@ant-design/icons";
import useHiddenMenu from "../hooks/useHiddenMenu";
import {getUserStorage} from "../helpers/getUserStorage";

const {Title, Text} = Typography;

const IngresarPage = () => {
    //useHiddenMenu
    useHiddenMenu(false);
    
    //useState
    const [user] = useState(getUserStorage);

    //useHistory
    const history = useHistory();

    const onFinish = ({agente, escritorio}) => {
        localStorage.setItem("agente", agente);
        localStorage.setItem("escritorio", escritorio);
        history.push("/escritorio");
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if(user.agente && user.escritorio){
        return <Redirect to="/escritorio" />
    }

    return (
        <>
            <Title level={2}>Ingresar</Title>
            <Text>Ingrese su nombre y número de escritorio</Text>
            <Divider/>
            <Form
                name="basic"
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Agente"
                    name="agente"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su nombre',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Escritorio"
                    name="escritorio"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese el número de escritorio',
                        },
                    ]}
                >
                    <InputNumber/>
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        <SaveOutlined/>
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default IngresarPage;
