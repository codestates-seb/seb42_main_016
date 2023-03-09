import styled from 'styled-components';

export const BgColor = styled.div`
	background-color: #f7f7f7;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.div`
	max-width: 400px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`;

export const Border = styled.div`
	border-radius: 5px;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border: 1px solid #e1e2e3; ;
`;

export const FormWrapper = styled.div`
	overflow: auto;
	position: relative;
	padding: 20px;
`;

export const Logo = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-bottom: 30px;
	padding-top: 40px;
	cursor: pointer;
`;

export const Form = styled.form`
	display: block;
	margin-top: 0em;
`;

export const LabelContainer = styled.div`
	margin: 17px 0px 7px;
`;

export const Label = styled.label`
	color: #888;
	font-weight: 500;
	text-align: left;
	letter-spacing: 0.0145em;
	font-size: 14px;
	line-height: 20px;
`;

export const Input = styled.input`
	width: 100%;
	height: 50px;
	min-height: 50px;
	padding: 0px 12px;
	outline: none;
	background-color: transparent;
	border: 1px solid #e1e2e3;
	color: #333;
	border-radius: 5px;
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 8px;
	border-color: ${(props) => (props.valid ? 'none' : '#fe415c')};
	&:focus {
		border-color: ${(props) => (props.valid ? '#6495ed ' : '#fe415c')};
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 50px;
	min-height: 50px;
	border-radius: 5px;
	font-size: 16px;
	margin-top: 30px;
	margin-bottom: 40px;
	border: none;
	background-color: cornflowerblue;
	&:disabled {
		background-color: #f2f4f7;
		border: none;
		cursor: default;
		span {
			color: #ccc;
		}
	}
`;

export const ButtonText = styled.span`
	color: #fff;
	font-weight: 500;
	text-align: left;
	letter-spacing: 0.0056em;
	font-size: 16px;
	line-height: 24px;
`;

export const IsMember = styled.p`
	width: 100%;
	margin-top: 0;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #767676;
	font-weight: 500;
	letter-spacing: 0.0145em;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 20px;
	cursor: pointer;
`;

export const ValidText = styled.p`
	color: #fe415c;
	font-weight: 400;
	text-align: left;
	letter-spacing: 0.0192em;
	font-size: 13px;
	line-height: 18px;
	margin-bottom: 8px;
	margin-top: 0px;
`;
