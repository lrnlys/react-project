import styled from 'styled-components';
import logoPic from '../../statics/logo.jpeg';

export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 50px;
	border-bottom: 1px solid #f0f0f0;
	padding-left: 60px;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 60px;
	height: 50px;
	background: url(${logoPic});
	background-size: contain;
`;