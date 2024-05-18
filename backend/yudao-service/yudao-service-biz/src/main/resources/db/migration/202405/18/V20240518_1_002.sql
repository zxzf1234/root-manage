insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '7de3cd4f-e907-4aad-8b48-49018f6a59b1', 'e1a06dd2-bba2-49f8-ae05-8c172f216d61', 'deletedTime', 'DATETIME', '删除时间', 0, '0', 'LocalDateTime', '', '', 0, '', '1004');
insert ignore into INFRA_DATABASE_INDEX(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, INDEX_TYPE, INDEX_NAME, COLUMN_NAMES) values('1', '1', '5598bf5e-750d-4d48-b6a1-cfc6920da108', 'e1a06dd2-bba2-49f8-ae05-8c172f216d61', 'UNIQUE INDEX', 'UN_system_user', '["username","deletedTime"]');
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-10T18:57:50', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '0', UPDATER_ID = '0', NAME = 'SystemUserBase', COMMENT = '用户信息表', TYPE = '0', PARENT_ID = 'e1a06dd2-bba2-49f8-ae05-8c172f216d61' where ID = '8b0b3235-376c-11ee-98db-00163e021dba';
ALTER TABLE system_user
ADD COLUMN `deletedTime` DATETIME NOT NULL DEFAULT 0 COMMENT '删除时间',
ADD UNIQUE INDEX  `UN_system_user` (`username`,`deletedTime`),
DROP INDEX `idx_username`;
