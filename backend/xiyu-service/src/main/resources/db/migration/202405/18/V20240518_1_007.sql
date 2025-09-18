delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = '63c4f3a8-0ebc-4a2c-939b-8d7a4d7dce1a';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '2d3c2fa1-ac0e-4d34-8d0f-d8c90e6c855a', '209dd887-1db4-4260-9f9a-10efa33b439f', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_DATABASE_INDEX set UPDATER_ID = '1', TABLE_ID = '209dd887-1db4-4260-9f9a-10efa33b439f', INDEX_TYPE = 'UNIQUE INDEX', INDEX_NAME = 'un_infra_dict_data', COLUMN_NAMES = '["type_id","value","deleted_time"]' where ID = '29e6cdc9-5b2c-4d27-a09b-cd7153b8d404';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-09-20T10:13:53', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '1', UPDATER_ID = '1', NAME = 'InfraDictDataBase', COMMENT = '字典数据表', TYPE = '0', PARENT_ID = '209dd887-1db4-4260-9f9a-10efa33b439f' where ID = '95f6a762-434a-413f-b9c8-3c86beb5df6f';
ALTER TABLE infra_dict_data
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
DROP INDEX `un_infra_dict_data`,
ADD UNIQUE INDEX  `un_infra_dict_data` (`type_id`,`value`,`deleted_time`);
delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = 'ec214d65-e60f-44ef-bbce-7fe1d31f674b';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '4fcc4301-57d8-4bfc-8d06-91399372e838', '8e93110a-90fe-4e9c-9fb5-f7fa480dc892', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-09-20T10:06:35', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '1', UPDATER_ID = '1', NAME = 'InfraDictTypeBase', COMMENT = '字典类型表', TYPE = '0', PARENT_ID = '8e93110a-90fe-4e9c-9fb5-f7fa480dc892' where ID = '165c8897-9b43-48f9-894d-fae5d5ecda82';
ALTER TABLE infra_dict_type
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间';
delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = 'bc904f86-5d98-4e13-a40a-aaf8326ef2c7';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '281dfd8b-b4c6-4ffd-a5cf-d69e5c103f8f', 'cac76521-8eec-4d07-87f8-df26fe2aed4e', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-19T12:05:23', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '1', UPDATER_ID = '1', NAME = 'InfraInterfaceSubclassBase', COMMENT = '接口子类', TYPE = '0', PARENT_ID = 'cac76521-8eec-4d07-87f8-df26fe2aed4e' where ID = 'b6e2e230-0754-4dee-b054-5480829c9ddc';
ALTER TABLE infra_interface_subclass
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间';
delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = '083ac816-3f7b-42cd-acb4-a762d7d38cae';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', 'd9a6733a-fdc3-49d6-8640-9673fbe0bc04', '0526ebf1-9d5a-4226-a47b-c4384acff4eb', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_DATABASE_INDEX set UPDATER_ID = '1', TABLE_ID = '0526ebf1-9d5a-4226-a47b-c4384acff4eb', INDEX_TYPE = 'UNIQUE INDEX', INDEX_NAME = 'UK_infra_database_index', COLUMN_NAMES = '["index_name","table_id","deleted_time"]' where ID = 'd92d0194-c979-42dd-958b-1d456b43a0d6';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-18T08:52:03', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '1', UPDATER_ID = '1', NAME = 'InfraDatabaseIndexBase', COMMENT = '数据库表索引', TYPE = '0', PARENT_ID = '0526ebf1-9d5a-4226-a47b-c4384acff4eb' where ID = 'ae9b933f-248d-4efe-90c0-28844850f20a';
ALTER TABLE infra_database_index
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
DROP INDEX `UNI_infra_database_index_name`,
ADD UNIQUE INDEX  `UK_infra_database_index` (`index_name`,`table_id`,`deleted_time`);
delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = 'bb96efa6-11c5-4468-9dcb-c144645fed48';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', 'aaad4368-65df-4203-b0c4-381e796ed53a', '376e9077-6e6d-47d3-b75d-b7aefdddccaa', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_DATABASE_INDEX set UPDATER_ID = '1', TABLE_ID = '376e9077-6e6d-47d3-b75d-b7aefdddccaa', INDEX_TYPE = 'UNIQUE INDEX', INDEX_NAME = 'UK_infra_database_column', COLUMN_NAMES = '["column_name","table_id","deleted_time"]' where ID = '8101f976-268d-4dd9-a957-2258e9d8f32d';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-17T18:47:39', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '1', UPDATER_ID = '1', NAME = 'InfraDatabaseColumnBase', COMMENT = '数据库表字段', TYPE = '0', PARENT_ID = '376e9077-6e6d-47d3-b75d-b7aefdddccaa' where ID = 'ad08d1a8-4102-4bff-ac78-79f7b30c0002';
ALTER TABLE infra_database_column
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
DROP INDEX `UNI_infra_database_column_name`,
ADD UNIQUE INDEX  `UK_infra_database_column` (`column_name`,`table_id`,`deleted_time`);
delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = 'd5c9e528-34b8-40df-9101-0584546ec668';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '786a5429-c3ce-410c-8847-550aa2a7b248', 'ba35bc1c-c14c-44af-9506-f5f57cc79fae', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_DATABASE_INDEX set UPDATER_ID = '1', TABLE_ID = 'ba35bc1c-c14c-44af-9506-f5f57cc79fae', INDEX_TYPE = 'UNIQUE INDEX', INDEX_NAME = 'UN_infra_database_mapping', COLUMN_NAMES = '["table_id","name","deleted_time"]' where ID = '5dfa879c-8703-4100-b5b3-d7910ede95bd';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-16T11:53:48', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '1', UPDATER_ID = '1', NAME = 'InfraDatabaseMappingBase', COMMENT = '数据库表映射', TYPE = '0', PARENT_ID = 'ba35bc1c-c14c-44af-9506-f5f57cc79fae' where ID = '7be344ea-e783-4b02-9267-2f63f08d98b6';
ALTER TABLE infra_database_mapping
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
DROP INDEX `UN_infra_database_mapping`,
ADD UNIQUE INDEX  `UN_infra_database_mapping` (`table_id`,`name`,`deleted_time`);
delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = '0a748610-7c6a-41ed-bf97-8a8d3c08e283';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '282770f1-9ddd-4a0f-8d72-2a160d84ba24', 'bc3f458b-d80d-4526-abcf-07d7277cccb3', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_DATABASE_INDEX set UPDATER_ID = '1', TABLE_ID = 'bc3f458b-d80d-4526-abcf-07d7277cccb3', INDEX_TYPE = 'UNIQUE INDEX', INDEX_NAME = 'UK_infra_interface_param_class', COLUMN_NAMES = '["name","deleted_time"]' where ID = '4abaccb7-f2a3-47d5-909f-02fc9082db08';
