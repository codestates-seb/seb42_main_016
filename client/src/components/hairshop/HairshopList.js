import * as S from '../style/ListStyle';
import img from '../../utils/img.jpeg';
import {AiFillHeart} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';

function HairshopList({shop}) {
	const navigate = useNavigate();

	return (
		<S.ListContainer>
			<S.ListWrapper>
				<S.List onClick={() => navigate(`/hairshop/${shop.id}`)}>
					<S.ListFlex>
						<S.ImgBox>
							<S.Img src={img} alt="img" />
						</S.ImgBox>
						<S.TextBox>
							<S.ShopName>{shop.name}</S.ShopName>
							<S.Like>
								<AiFillHeart color="#ff7675" className="like" />
								{shop.like.toLocaleString()}
							</S.Like>
							<S.Review>리뷰 {shop.review.toLocaleString()}</S.Review>
							<S.Address>{shop.address}</S.Address>
						</S.TextBox>
					</S.ListFlex>
				</S.List>
			</S.ListWrapper>
		</S.ListContainer>
	);
}

export default HairshopList;