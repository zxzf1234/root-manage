delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = '6583e137-b7bb-4c6a-ba9c-e0023bb0e76b' and tb_1_.DELETED_TIME is null;
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '90c50276-9330-42a6-9425-a2acc3a4036e', 'bb3acb96-f7d5-4b8a-97c7-3f02abb12153', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-10T18:57:50', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '0', UPDATER_ID = '0', NAME = 'InfraInterfaceValidationBase', COMMENT = '代码生成表校验定义', TYPE = '0', PARENT_ID = 'bb3acb96-f7d5-4b8a-97c7-3f02abb12153' where ID = '7d26ad91-376c-11ee-98db-00163e021dba';
ALTER TABLE infra_interface_validation
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间';
update INFRA_DATABASE_INDEX set UPDATER_ID = '1', TABLE_ID = 'bb3acb96-f7d5-4b8a-97c7-3f02abb12153', INDEX_TYPE = 'UNIQUE INDEX', INDEX_NAME = 'UNI_infra_database_validation', COLUMN_NAMES = '["parent_id","validation","deleted_time"]' where ID = '65ae7744-e028-474b-b52b-e4132feaab90';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-10T18:57:50', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '0', UPDATER_ID = '0', NAME = 'InfraInterfaceValidationBase', COMMENT = '代码生成表校验定义', TYPE = '0', PARENT_ID = 'bb3acb96-f7d5-4b8a-97c7-3f02abb12153' where ID = '7d26ad91-376c-11ee-98db-00163e021dba';
ALTER TABLE infra_interface_validation
DROP INDEX `UNI_infra_database_validation_name`,
ADD UNIQUE INDEX  `UNI_infra_database_validation` (`parent_id`,`validation`,`deleted_time`);
ALTER TABLE infra_interface_vo_class
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
DROP INDEX `UK_infra_interface_param_class`,
ADD UNIQUE INDEX  `UK_infra_interface_param_class` (`name`,`deleted_time`);
