import styled from 'styled-components';

export const ListContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const ListWrapper = styled.div`
	margin-top: 40px;
	width: 60%;
`;

export const List = styled.li`
	overflow: hidden;
	position: relative;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	cursor: pointer;
`;

export const ListFlex = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1 0 auto;
	justify-content: space-evenly;
`;

export const ImgBox = styled.div`
	min-width: 200px;
	height: 200px;
	margin-bottom: 20px;
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 5px;
`;

export const TextBox = styled.div`
	font-size: 18px;
	line-height: 21px;
	width: 380px;
	margin-left: 15px;
	height: 100%;
	color: #2d3436;
`;

export const ShopName = styled.h2`
	margin-top: 20px;
	font-size: 35px;
	line-height: 30px;
	letter-spacing: 2px;
	font-weight: bold;
`;

export const Like = styled.div`
	display: flex;
	margin-top: 25px;
	margin-bottom: 20px;
	letter-spacing: 0.8px;

	.like {
		margin-right: 5px;
		align-items: center;
	}
`;

export const Review = styled.div`
	margin-bottom: 20px;
	letter-spacing: 0.8px;
`;

export const Address = styled.div`
	font-size: 16px;
	color: #636e72;
	letter-spacing: 0.5px;
`;

export const LocationStyle = styled.h1`
	width: 60%;
	color: #2d3436;
	display: flex;
	justify-content: center;
	font-size: 40px;
	margin-top: 50px;
	margin-bottom: 10px;
`;

export const ScrollArea = styled.div`
	/* border: 1px solid;
	display: flex;
	flex-direction: column;
	flex: 1; */
	height: 100vh;
	overflow-y: auto;
`;