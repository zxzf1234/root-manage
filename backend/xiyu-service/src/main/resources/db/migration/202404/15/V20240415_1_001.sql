update INFRA_DATABASE_COLUMN tb_1_ set COLUMN_COMMENT = '最后日期', COLUMN_NAME = 'last_date', DATA_TYPE = 'DATE', DEFAULT_VALUE = '', DICT_TYPE = '', EXAMPLE = '', JAVA_TYPE = 'LocalDateTime', NULLABLE = 0, RELATED_TABLE = '', REQUIRED = 0 where tb_1_.ID = 'aff4bd75-f0a0-437b-ac73-e99b2bd9f116';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-12-01T23:15', UPDATE_TIME = '2023-12-02T20:26:53', CREATOR_ID = '1', UPDATER_ID = '1', DELETED = 0, NAME = 'InfraDictNoBase', COMMENT = '编号管理', TYPE = '0', PARENT_ID = '64d538ec-3b21-4d17-81e0-36861fd066f3' where ID = '0a6a946a-49af-42bc-b06d-329d8be89a06';
ALTER TABLE infra_dict_no
CHANGE `last_date` `last_date` DATE NOT NULL  COMMENT '最后日期';
update INFRA_DATABASE_COLUMN tb_1_ set COLUMN_COMMENT = '最后日期', COLUMN_NAME = 'last_date', DATA_TYPE = 'DATE', DEFAULT_VALUE = '', DICT_TYPE = '', EXAMPLE = '', JAVA_TYPE = 'LocalDateTime', NULLABLE = 1, RELATED_TABLE = '', REQUIRED = 0 where tb_1_.ID = 'aff4bd75-f0a0-437b-ac73-e99b2bd9f116';
update INFRA_INTERFACE_VO_CLASS set CREATE_TIME = '2023-12-01T23:15', UPDATE_TIME = '2023-12-02T20:26:53', CREATOR_ID = '1', UPDATER_ID = '1', DELETED = 0, NAME = 'InfraDictNoBase', COMMENT = '编号管理', TYPE = '0', PARENT_ID = '64d538ec-3b21-4d17-81e0-36861fd066f3' where ID = '0a6a946a-49af-42bc-b06d-329d8be89a06';
ALTER TABLE infra_dict_no
CHANGE `last_date` `last_date` DATE   COMMENT '最后日期';
