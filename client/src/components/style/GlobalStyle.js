import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}
button {
	cursor: pointer;
}
input {
	padding: 0px 12px;
}
li {
	list-style: none;
}
`;

export default GlobalStyle;
