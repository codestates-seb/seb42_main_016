import * as S from '../style/MyPageStyle';
import ReserveItem from './ReserveItem';
import Empty from '../Empty';
import Pagenation from '../mypage/PagenationR';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNonReview,
  selectNonReview,
  selectPageInfo,
} from '../../modules/redux/nonreviewSlice';

export default function WriteReview() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const reserve = useSelector(selectNonReview);
  const pageInfo = useSelector(selectPageInfo);
  const totalElements = pageInfo.totalElements;
  const minLen = 4;

  useEffect(() => {
    dispatch(fetchNonReview(currentPage));
  }, [dispatch, currentPage]);

  return (
    <S.Container>
      {reserve?.length ? (
        reserve.map((reserve) => {
          return <ReserveItem key={reserve.reservationId} reserve={reserve} />;
        })
      ) : (
        <Empty text={'작성가능한 리뷰가 없습니다.'} />
      )}
      {totalElements > minLen ? (
        <Pagenation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalElements={totalElements}
        />
      ) : (
        ''
      )}
    </S.Container>
  );
}
