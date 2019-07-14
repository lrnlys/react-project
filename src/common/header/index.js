import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { Row,Menu, Icon } from 'antd';
import { actionCreators as userActionCreators } from '../../modules/user/store'
import {
	HeaderWrapper,
	Logo
} from './style';

class Header extends Component {
	state = {
		current: 'editor',
	};

	handleClick = e => {
		this.setState({
		  current: e.key,
		});
	};

	render() {
		const { login } = this.props;
		return (
			<Row>
				<HeaderWrapper>
					<Link to="/">
						<Logo />
					</Link>
					<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
					<Menu.Item key="editor">
						<Icon type="form" />
						Json Editor
					</Menu.Item>
					</Menu>
				</HeaderWrapper>
			</Row>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.getIn(['user', 'user'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		logout() {
			dispatch(userActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
