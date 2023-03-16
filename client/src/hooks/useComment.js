import { useState } from 'react';

function useComment(description, maxLen) {
  const comment = description || '';
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const getDisplayComment = () => {
    if (!show) {
      return comment.length > maxLen ? `${comment.slice(0, maxLen)} ...` : comment;
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
