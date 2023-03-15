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