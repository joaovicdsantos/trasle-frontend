import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-areas: 
		'header header header header header'
		'menu   main   main   main   main';
	width: 100vw;
	height: 100vh;
	grid-template-rows: 2fr 20fr;
	grid-template-columns: 2fr 7fr;
`;
