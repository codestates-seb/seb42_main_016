drop table if exists hair_shop CASCADE;

    create table hair_shop (
       hair_shop_id bigint generated by default as identity,
        hair_shop_address varchar(100) not null,
        hair_shop_description clob,
        hair_shop_image clob,
        hair_shop_name varchar(50) not null,
        hair_shop_phone varchar(255) not null,
        primary key (hair_shop_id)
    );



--CREATE TABLE test_entity (
--  id INT PRIMARY KEY,
--  name VARCHAR(255),
--  addr VARCHAR(255)
--);
--
--LOAD DATA LOCAL INFILE '/Users/sangyoonlee/Downloads/DistrictOffice.csv'
--INTO TABLE district_office
--FIELDS TERMINATED BY ','
--ENCLOSED BY '"'
--LINES TERMINATED BY '\n'
--IGNORE 1 ROWS
--(district_office_id, name, address, latitude, longitude, keyword);
----
--
--LOAD DATA LOCAL INFILE '/Users/sangyoonlee/Downloads/exceldata.csv'
--INTO TABLE excel_list
--FIELDS TERMINATED BY ','
--ENCLOSED BY '"'
--LINES TERMINATED BY '\n'
--IGNORE 1 ROWS
--(id, addr);

--SELECT kakao_api_id, COUNT(kakao_api_id)
--FROM hair_shop
--GROUP BY COLUMN_NAME
--HAVING COUNT(COLUMN_NAME) > 1 ;
--
--UPDATE hair_shop AS t1 INNER JOIN hair_shop_cp AS t2 ON t1.kakao_api_id = t2.kakao_api_id SET t1.hair_shop_image = t2.hair_shop_image;
