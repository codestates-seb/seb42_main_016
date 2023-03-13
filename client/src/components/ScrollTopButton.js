import React from 'react';
import * as S from './style/SBStyle';
import {BsArrowUpCircle} from 'react-icons/bs';

export default function ScrollTopButton({area}) {
	const handleClick = () => {
		if (area.current) {
			area.current.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};
	return (
		<S.Topcontainer>
			<BsArrowUpCircle className="icon" onClick={handleClick} />
		</S.Topcontainer>
	);
}
