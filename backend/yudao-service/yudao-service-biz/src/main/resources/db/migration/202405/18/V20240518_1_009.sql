delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = '90c3ffcb-8bb4-460e-8b89-2c422586b668';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '49a0a10b-1963-436a-8fb3-bf94181ba123', '0a9647f1-dbe7-48c2-b332-624a05a83df0', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_DATABASE_INDEX set UPDATER_ID = '1', TABLE_ID = '0a9647f1-dbe7-48c2-b332-624a05a83df0', INDEX_TYPE = 'UNIQUE INDEX', INDEX_NAME = 'UNI_infra_database_table_name', COLUMN_NAMES = '["name","deleted_time"]' where ID = 'dbbda193-25e6-4117-8b2e-3d99cb9adb45';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-10T18:57:50', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '0', UPDATER_ID = '0', NAME = 'InfraDatabaseTableBase', COMMENT = '数据库表定义', TYPE = '0', PARENT_ID = '0a9647f1-dbe7-48c2-b332-624a05a83df0' where ID = '547782c7-376c-11ee-98db-00163e021dba';
ALTER TABLE infra_database_table
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
DROP INDEX `UNI_infra_database_table_name`,
ADD UNIQUE INDEX  `UNI_infra_database_table_name` (`name`,`deleted_time`);
