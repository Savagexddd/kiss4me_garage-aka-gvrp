create table owned_vehicles
(
    owner   varchar(22)               not null,
    plate   varchar(12)               not null
        primary key,
    vehicle longtext                  null,
    type    varchar(20) default 'car' not null,
    job     varchar(20) default 'civ' not null,
    stored  tinyint(1)  default 0     not null
);

