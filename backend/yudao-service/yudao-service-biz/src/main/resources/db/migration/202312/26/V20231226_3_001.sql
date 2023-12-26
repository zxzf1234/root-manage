update INFRA_DATABASE_COLUMN tb_1_ set COLUMN_COMMENT = '一级模块', COLUMN_NAME = 'first_module', DATA_TYPE = 'VARCHAR(30)', DEFAULT_VALUE = '''''', DICT_TYPE = '', EXAMPLE = 'codegen', JAVA_TYPE = 'String', NULLABLE = 0, RELATED_TABLE = '', REQUIRED = 1 where tb_1_.ID = 'ae012ea8-d7cc-4129-9f4f-a00a0fd78a85';
insert ignore into INFRA_DATABASE_COLUMN(CREATOR_ID, UPDATER_ID, DELETED, ID, TABLE_ID, COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, NULLABLE, DEFAULT_VALUE, JAVA_TYPE, DICT_TYPE, EXAMPLE, REQUIRED, RELATED_TABLE, SORT) values('1', '1', 0, 'f5184d4a-cac4-40a1-8678-e7358bef1c3a', '0a9647f1-dbe7-48c2-b332-624a05a83df0', 'second_module', 'VARCHAR(30)', '二级模块', 0, '''''', 'String', '', '', 0, '', '5');
ALTER TABLE infra_database_table
CHANGE `business_name` `first_module` VARCHAR(30) NOT NULL DEFAULT '' COMMENT '一级模块',
ADD COLUMN `second_module` VARCHAR(30) NOT NULL DEFAULT '' COMMENT '二级模块';
