import React, { Component } from 'react';
import { Input, Form } from 'antd';
import { connect } from 'react-redux';
import {
    FormWrapper
} from '../../style'

class FirstForm extends React.Component {

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const { getFieldDecorator } = this.props.form;

        return (
            <FormWrapper className="form-wrapper" >
                <Form {...formItemLayout} >
                    <Form.Item label="First Field" >
                        {getFieldDecorator('first', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your first field!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Second Field" >
                        {getFieldDecorator('second', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your second field!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>

                    <Form.Item label="Thrid Field" >
                        {getFieldDecorator('third', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your third field!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                </Form>
            </FormWrapper>
        )
    }
};

const WrappedFirstForm = Form.create({})(FirstForm);

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispathToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispathToProps)(WrappedFirstForm);