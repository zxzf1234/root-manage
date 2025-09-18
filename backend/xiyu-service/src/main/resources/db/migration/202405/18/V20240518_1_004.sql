delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = '7de3cd4f-e907-4aad-8b48-49018f6a59b1';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '3a7db067-7943-47f5-8e52-e7fd147ce2d1', 'e1a06dd2-bba2-49f8-ae05-8c172f216d61', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_DATABASE_INDEX set UPDATER_ID = '1', TABLE_ID = 'e1a06dd2-bba2-49f8-ae05-8c172f216d61', INDEX_TYPE = 'UNIQUE INDEX', INDEX_NAME = 'UN_system_user', COLUMN_NAMES = '["username","deleted_time"]' where ID = '5598bf5e-750d-4d48-b6a1-cfc6920da108';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-10T18:57:50', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '0', UPDATER_ID = '0', NAME = 'SystemUserBase', COMMENT = '用户信息表', TYPE = '0', PARENT_ID = 'e1a06dd2-bba2-49f8-ae05-8c172f216d61' where ID = '8b0b3235-376c-11ee-98db-00163e021dba';
ALTER TABLE system_user
DROP COLUMN `deletedTime`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
DROP INDEX `UN_system_user`,
ADD UNIQUE INDEX  `UN_system_user` (`username`,`deleted_time`);
