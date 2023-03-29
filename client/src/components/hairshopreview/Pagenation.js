import * as S from '../style/ShopRevewStyle';
import { useSelector } from 'react-redux';
import { selectShop } from '../../modules/redux/shopSlice';
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineRight,
  AiOutlineLeft,
} from 'react-icons/ai';

function Pagenation({ currentPage, setCurrentPage }) {
  const shop = useSelector(selectShop);
  const reviewPerPage = 10;
  const pageNumbers = Math.ceil(shop.reviewCount / reviewPerPage);

  const renderPageNumbers = () => {
    const pageArray = [];
    for (let i = 1; i <= pageNumbers; i++) {
      pageArray.push(
        <S.PageNum key={i}>
          <S.PageBtn
            onClick={() => setCurrentPage(i)}
            className={currentPage === i ? 'selected' : ''}>
            {i}
          </S.PageBtn>
        </S.PageNum>,
      );
    }
    return pageArray;
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleLastPage = () => {
    setCurrentPage(pageNumbers);
  };

  return (
    <S.PageContainer>
      <S.ArrowBtn onClick={handleFirstPage} disabled={currentPage <= 1}>
        <AiOutlineDoubleLeft />
      </S.ArrowBtn>
      <S.ArrowBtn onClick={handlePrevPage} disabled={currentPage <= 1}>
        <AiOutlineLeft />
      </S.ArrowBtn>
      <S.PageList>{renderPageNumbers()}</S.PageList>
      <S.ArrowBtn onClick={handleNextPage} disabled={currentPage >= pageNumbers}>
        <AiOutlineRight />
      </S.ArrowBtn>
      <S.ArrowBtn onClick={handleLastPage} disabled={currentPage >= pageNumbers}>
        <AiOutlineDoubleRight />
      </S.ArrowBtn>
    </S.PageContainer>
  );
}

export default Pagenation;
