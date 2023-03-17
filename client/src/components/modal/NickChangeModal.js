// import * as S from '../style/ModalStyle';
// import { useState, useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { closeModal, openModal } from '../../modules/redux/modalSlice';
// import useScroll from '../../hooks/useScroll';
// import CloseIcon from '../../utils/CloseIcon';
// import API from '../../modules/API';

// function NickModal() {
//   const [value, setValue] = useState({
//     nickname: '',
//   });

//   const modalRef = useRef();
//   const dispatch = useDispatch();

//   useScroll();

//   const handleOpenNickModal = () => {
//     dispatch(
//       openModal({
//         modalType: 'NickModal',
//         isOpen: true,
//       })
//     );
//   };

//   API.post('/merbers', {
//     nickname,
//   });

//   return (
//     <S.ModalWrap ref={modalRef}>
//       <S.TopWrapper>
//         <S.Title>닉네임 변경</S.Title>
//         <div onClick={() => dispatch(closeModal())}>
//           <CloseIcon />
//         </div>
//         <S.Input
//           type="text"
//           placeholder="변경할 닉네임을 적어주세요."
//           value={nickname}
//         />
//       </S.TopWrapper>
//     </S.ModalWrap>
//   );
// }

// export default NickModal;
