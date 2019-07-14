import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as userActionCreators } from '../../modules/user/store'
import { Switch, Row, Col, Input, Button } from 'antd';
import "./editor.css";
import {
    ReleasePageUri,
    UriWrapper
} from './style'
import WrappedFirstForm from './components/FirstForm/FirstForm'

class Editor extends Component {
    render() {
        return (
            <div>
                <Row>
                    <ReleasePageUri>
                        <Switch checkedChildren="Create" unCheckedChildren="Update" defaultChecked />
                        <UriWrapper>
                            <Input placeholder="Please input the url of your target" />
                        </UriWrapper>
                        <Button type="primary">Start</Button>
                    </ReleasePageUri>
                </Row>
                <Row>
                    <Col span={6} >
                        <WrappedFirstForm></WrappedFirstForm>
                    </Col>
                    <Col span={8} style={{ 'background': 'yellow', height: '100px' }}></Col>
                    <Col span={10} style={{ 'background': 'blue', height: '100px' }}></Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispathToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispathToProps)(Editor);