import styled from 'styled-components';


export const Container = styled.div`
	grid-area: menu;
	display: flex;
	background-color: #111;
	padding: 2% 4%;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, .4);
	z-index: 2;
`;

export const Menu = styled.ul`
	width: 100%;
`;

export const Option = styled.li`
	margin: 10px 0;
	text-indent: 10px;

	&.active a {
		color: rgba(255, 242, 0, 1);
	}
`;

export const Link = styled.a`
	color: #ccc;
	font-size: 11pt;
`;

export const Divider = styled.li`
	margin: 10px 0;
	height: 2px;
	background-color: rgba(255, 255, 255, .05);
	width: 100%;
`;

export const Caption = styled.li`
	text-indent: 2px;
  color: rgb(225, 177, 44);
	font-size: 11pt;
`;
