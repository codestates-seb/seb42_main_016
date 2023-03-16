import styled from 'styled-components';

export const UserContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TitleContainer = styled.div`
	overflow: hidden;
	position: relative;
	width: 100%;
`;

export const InfoTitle = styled.h2`
	float: left;
	color: #333;
	font-size: 22px;
	line-height: 30px;
	width: 100%;
`;

export const InfoButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 300px;
`;

export const InfoButton = styled.button`
	font-size: 14px;
	background-color: transparent;
	border: none;
	color: #8c949c;
	svg {
		font-size: 16px;
		vertical-align: middle;
	}
`;
