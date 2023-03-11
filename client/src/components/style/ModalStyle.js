import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.2);
	z-index: 9999;
`;

export const ModalWrap = styled.div`
	width: 600px;
	/* height: fit-content; */
	max-height: 500px;
	border-radius: 15px;
	background-color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const CloseButton = styled.div`
	float: right;
	width: 40px;
	height: 40px;
	margin: 20px;
	cursor: pointer;
	i {
		color: #5d5d5d;
		font-size: 30px;
	}
`;

export const Contents = styled.div`
	margin: 50px 30px;
	h1 {
		font-size: 30px;
		font-weight: 600;
	}
`;
export const Button = styled.button`
	font-size: 14px;
	padding: 10px 20px;
	border: none;
	background-color: #ababab;
	border-radius: 10px;
	color: white;
	font-style: italic;
	font-weight: 200;
	cursor: pointer;
	&:hover {
		background-color: #898989;
	}
`;

export const ModalForm = styled.div`
	overflow-y: scroll;
	margin-bottom: 30px;
	max-height: 300px;
`;
