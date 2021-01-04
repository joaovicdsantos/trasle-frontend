import styled from 'styled-components';


export const Container = styled.header`
	grid-area: header;
	display: flex;
	background-color: #000;
	color: #fff;
	padding: 0.5% 3%;
	align-items: center;
	justify-content: space-between;
`;

export const HeaderLogo = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
`;

export const HeaderTitle = styled.h1`
	font-family: 'Dancing Script', cursive !important;
	font-size: 3rem;
`;

export const HeaderSearch = styled.form`
	flex: 2;
	display: flex;
`;

export const HeaderSearchInput = styled.input`
	flex: 9;
	height: 30px;
	border-radius: 10px 0 0 10px;
	background-color: transparent;
	border-left: 1px solid rgba(255, 242, 0, 1);
	border-top: 1px solid rgba(255, 242, 0, 1);
	border-bottom: 1px solid rgba(255, 242, 0, 1);
	color: #fff;
	font-size: 12px;
	outline: none;
	padding: 5px;
`;

export const HeaderSearchButton = styled.button`
	flex: 1;
	margin-left: -20px;
	background-color: rgba(255, 242, 0, 1);
	padding: 5px;
	border-radius: 20px;
`;

export const HeaderAutentication = styled.nav`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;

export const HeaderAutenticationLink = styled.a`
	color: #ddd;
`;
