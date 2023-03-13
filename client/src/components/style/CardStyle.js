import styled from 'styled-components';

export const Container = styled.section`
	box-shadow: 0 2px 10px rgba(50, 50, 50, 0.1);
	border-radius: 10px;
	width: 400px;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TextWrapper = styled.div`
	padding-bottom: 0;
	padding: 1.5rem;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Name = styled.div`
	color: #1b1e21;
	font-weight: 700;
	font-size: 18px;
	margin-bottom: 8px;
`;

export const Detail = styled.div`
	color: #8c949c;
	font-size: 14px;
	margin-bottom: 4px;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const ButtonWrapper = styled.div`
	font-size: 14px;
	border-top-width: 1px;
	align-items: center;
	height: 3rem;
	display: flex;
	border-color: #f4f7fa;
	width: 100%;
`;

export const Button = styled.button`
	border: 1px solid #f4f7fa;
	width: 50%;
	height: 100%;
	background-color: transparent;
	text-transform: none;
	font-size: 100%;
`;

export const CreateBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 200px;
`;

export const CreateButton = styled.button`
	background-color: transparent;
	text-transform: none;
	border: none;
`;

export const CreateText = styled.div`
	color: #8c949c;
	line-height: 19px;
	font-size: 16px;
	margin-top: 16px;
`;
