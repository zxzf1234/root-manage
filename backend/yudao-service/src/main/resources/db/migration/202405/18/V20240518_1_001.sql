delete tb_1_ from INFRA_DATABASE_COLUMN tb_1_ where tb_1_.ID = '02e99be3-3244-44c2-a4ad-68dbfc5e2ef2';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-08-10T18:57:50', UPDATE_TIME = '2023-11-10T10:10:19', CREATOR_ID = '0', UPDATER_ID = '0', NAME = 'SystemUserBase', COMMENT = '用户信息表', TYPE = '0', PARENT_ID = 'e1a06dd2-bba2-49f8-ae05-8c172f216d61' where ID = '8b0b3235-376c-11ee-98db-00163e021dba';
ALTER TABLE system_user
DROP COLUMN `deleted`;
