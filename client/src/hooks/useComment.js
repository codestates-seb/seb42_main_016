import {useState} from 'react';

function useComment(description) {
	const comment = description || '';
	const [show, setShow] = useState(false);

	const handleToggle = () => {
		setShow(!show);
	};

	const getDisplayComment = () => {
		if (!show) {
			return comment.length > 63 ? `${comment.slice(0, 63)} ...` : comment;
		}
		return comment;
	};

	return {
		show,
		handleToggle,
		getDisplayComment,
		comment,
	};
}

export default useComment;
