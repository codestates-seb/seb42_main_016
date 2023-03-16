import * as S from '../style/ListStyle';
import img from '../../utils/img.jpeg';
import { useNavigate } from 'react-router-dom';
import { IoHeart } from 'react-icons/io5';
import { HAIRSHOP } from '../../modules/routes';

function HairshopList({ shop }) {
  const navigate = useNavigate();

  return (
    <S.ListContainer>
      <S.ListWrapper>
        <S.List onClick={() => navigate(`${HAIRSHOP}/${shop.hairShopId}`)}>
          <S.ListFlex>
            <S.ImgBox>
              <S.Img src={img} alt="img" />
            </S.ImgBox>
            <S.TextBox>
              <S.ShopName>{shop.hairShopName}</S.ShopName>
              <S.Like>
                <IoHeart color="#ff7675" className="like" />
                {shop.likeCount.toLocaleString()}
              </S.Like>
              <S.Review>리뷰 {shop.reviewCount.toLocaleString()}</S.Review>
              <S.Address>{shop.hairShopAddress}</S.Address>
            </S.TextBox>
          </S.ListFlex>
        </S.List>
      </S.ListWrapper>
    </S.ListContainer>
  );
}

export default HairshopList;
