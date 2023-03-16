import {useEffect} from 'react';

function useScrollTop() {
	useEffect(() => {
		if (window) window.scrollTo(0, 0);
	}, []);
}

export default useScrollTop;
