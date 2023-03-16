import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin-top: 30px;
	line-height: normal;
`;

export const ContentBox = styled.div`
	height: 100%;
	margin: 0 auto;
	display: flex;
`;

export const Content = styled.div`
	float: left;
	width: 100%;
	min-height: 640px;
	padding: 0 29px 40px;
`;

export const TitleBox = styled.div`
	overflow: hidden;
	position: relative;
	width: 100%;
`;

export const Title = styled.h2`
	float: left;
	color: #333;
	font-size: 22px;
	line-height: 30px;
	width: 100%;
`;

export const CardFlex = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;
