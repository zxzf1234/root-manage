delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = '66c00f1b-4972-4d1b-bb7a-2e4ac70eb0f8';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', '7c1f7815-77bb-404b-b656-8269b03b7ede', '16f0d4c9-9ceb-4139-9df9-bc2801dc95fe', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-10T18:57:50', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '0', UPDATER_ID = '0', NAME = 'SystemUserRoleBase', COMMENT = '用户和角色关联表', TYPE = '0', PARENT_ID = '16f0d4c9-9ceb-4139-9df9-bc2801dc95fe' where ID = '57ff9d61-376c-11ee-98db-00163e021dba';
ALTER TABLE system_user_role
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间';
delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = '7369a83f-9a04-4157-a88d-7ae85a0cd5c6';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', 'e17de72b-2e4d-4e9d-a71d-76436705bdb0', '64d538ec-3b21-4d17-81e0-36861fd066f3', 'deleted_time', 'DATETIME', '删除时间', 1, 'NULL', 'LocalDateTime', '', '', 0, '', '1004');
update INFRA_DATABASE_INDEX set UPDATER_ID = '1', TABLE_ID = '64d538ec-3b21-4d17-81e0-36861fd066f3', INDEX_TYPE = 'UNIQUE INDEX', INDEX_NAME = 'UN_infra_no_key_name', COLUMN_NAMES = '["key_name","deleted_time"]' where ID = '4840712b-6425-4cf6-a45b-ef51ea60abd6';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-12-01T23:15', UPDATE_TIME = '2023-12-02T20:26:53', CREATOR_ID = '1', UPDATER_ID = '1', NAME = 'InfraDictNoBase', COMMENT = '编号管理', TYPE = '0', PARENT_ID = '64d538ec-3b21-4d17-81e0-36861fd066f3' where ID = '0a6a946a-49af-42bc-b06d-329d8be89a06';
ALTER TABLE infra_dict_no
DROP COLUMN `deleted`,
ADD COLUMN `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
DROP INDEX `UN_infra_no_key_name`,
ADD UNIQUE INDEX  `UN_infra_no_key_name` (`key_name`,`deleted_time`);
