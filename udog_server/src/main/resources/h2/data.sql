INSERT INTO member (email, member_status, nickname, password, sign_up_at) VALUES
('asd@gmail.com', null, '닉네임', '1111qq!!', null);

INSERT INTO dog(dog_birth_date, dog_description, dog_name, dog_species, dog_weight, member_id) VALUES
('2020-01-01', null, 'happy', '기타', '6kg', 1);

INSERT INTO reservation (hair_option, reserve_date, reserve_time, dog_id, hair_shop_id, member_id) VALUES
('위생미용', '2023-04-01', '11:21:2', 1, 1, 1),
('위생미용', '2023-04-01', '12:21:2', 1, 1, 1),
('위생미용', '2023-04-01', '13:21:2', 1, 1, 1);


INSERT INTO hair_shop (hair_shop_address, hair_shop_description, hair_shop_image, hair_shop_name, hair_shop_phone) VALUES
('서울 강남구 역삼로 156 태광빌딩 102호',
 'Always for My Little Precious, 가위컷전문 ㅣ 펫아로마 스파 ㅣ 24시간 상주호텔 ㅣ 놀이방 ㅣ 고급 수제간식 페스츄리는 강남, 역삼동 가위컷 전문 반려동물 미용실입니다.',
'imgimgimgimg', '페스츄리 펫살롱','02-842-8183'),
('서울 강남구 테헤란로53길 57-17 B1호',
'안녕하세요. 강남 프리미엄 펫살롱 슈몽 입니다.저희 슈몽은 쾌적한 공간과 친절한 선생님들이 미용을 하고있어 강아지들이 스트레스받지 않고 적응하여 미용을 합니다. ',
'imgimgimgimg', '슈몽','0507-1431-0262'),
('서울 강남구 언주로97길 36 1층 - 애견샵 / 2층 - 아카데미',
'오리지널그루밍 애견샵 & 아카데미','imgimgimgimg', '오리지널그루밍','0507-1373-4847'),
('서울 강남구 테헤란로34길 26 B1층',
'마이뷰티독은 국내 최고의 중앙애견미용학원 김선희 대표가 만든 프리미엄 애견미용실 입니다. 마이뷰티독 강남은 중앙애견미용학원에서 직접 운영하고 있습니다.',
'imgimgimgimg', '마이뷰티독 강남점','010-4369-0028'),
('서울 강남구 선릉로66길 5 1층',
'안녕하세요. 저희 펫하우스는 강남고양이미용,애견미용 전문샵입니다. 경력 8년의 전문미용사가 직접 미용하며, 지난 8년동안 아무사고 ,문제 없이 운영, 미용해왔습니다. ',
'imgimgimgimg', '펫하우스','0507-1310-5791'),
('서울 강남구 언주로71길 34 1층 101호',
'설명설명설명','imgimgimgimg', '엘리애견미용실','0507-1479-7050'),
('서울 강남구 강남대로84길 33 B106호',
'애견미용,호텔링,간식,사료,돌봄','imgimgimgimg', '바둑아사랑해','02-501-4428'),
('서울 강남구 선릉로76길 40 1층',
'대치동 애견미용 전문샵입니다. 소형견부터 대형견까지 고객님이 원하시는 스타일로 완성시켜 드립니다.최고의 시설과 서비스로 고객님을 만족시켜드릴수 있도록 노력하겠습니다. ',
'imgimgimgimg', '엘리스펫','02-558-1716'),
('서울 강남구 도곡로13길 19 롯데캐슬노블 상가동 101호',
'프리미엄 반려견 미용실 입니다. 가위컷전문으로 반려견의 안전을 우선으로 하여 최대한 스트레스 없는 꼼꼼한 미용을 합니다. 반려견피모의 각질, 보습, 털빠짐에 좋은 머드팩, 아로마스파, 수소스파가 준비되어 있습니다.',
'imgimgimgimg', '쏘큐트펫살롱','010-7494-7077'),
('서울 강남구 봉은사로30길 27 102호',
'설명설명설명','imgimgimgimg', '샤워하는 강아지','02-561-4484'),
('서울 강남구 언주로106길 13 1층 조이피아',
'소형견 전문 미용/부띠끄 조이피아입니다.','imgimgimgimg', '조이피아','02-6497-3633');

INSERT INTO review (review_text, review_image, created_at, last_modified_at, hair_shop_id, member_id, reservation_id) VALUES
('텍스트', 'imgimgimg', '2023-04-01T15:00:00', '2023-04-01T02:01:00', 1, 1, 1),
('텍스트2', 'imgimgimg', '2023-04-01T17:01:00', null, 1, 1, 2),
('텍스트3', 'imgimgimg', '2023-04-01T18:02:00', null, 1, 1, 3);