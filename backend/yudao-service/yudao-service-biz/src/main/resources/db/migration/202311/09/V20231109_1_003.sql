update INFRA_DATABASE_COLUMN tb_1_ set COLUMN_COMMENT = '字典类型', COLUMN_NAME = 'type_id', DATA_TYPE = 'VARCHAR(50)', DEFAULT_VALUE = '', DICT_TYPE = '', EXAMPLE = 'c0fcc1e7-02a0-635b-0702-2c96f6482dae', JAVA_TYPE = 'UUID', NULLABLE = 0, RELATED_TABLE = 'infra_dict_type', REQUIRED = 0 where tb_1_.ID = '3644ebd6-bd33-49b1-b4b3-18ad6f193d6d';
ALTER TABLE infra_dict_data
CHANGE `type_id` `type_id` VARCHAR(50) NOT NULL  COMMENT '字典类型';
delete from INFRA_DICT_DATA where ID in ('461773f8-5794-11ee-873c-e073e73d10a7', '46177462-5794-11ee-873c-e073e73d10a7');
delete tb_1_ from INFRA_DICT_TYPE tb_1_ where tb_1_.ID = '297aedc4-5635-11c1-c8f9-3417ef6180c8';
delete from INFRA_DICT_DATA where ID in ('4617528d-5794-11ee-873c-e073e73d10a7', '461752ce-5794-11ee-873c-e073e73d10a7', '46175313-5794-11ee-873c-e073e73d10a7', '461767c0-5794-11ee-873c-e073e73d10a7');
delete tb_1_ from INFRA_DICT_TYPE tb_1_ where tb_1_.ID = 'e1e54b68-f540-b89e-0eb5-c0482666d86c';
delete from INFRA_DICT_DATA where ID in ('46173c0f-5794-11ee-873c-e073e73d10a7', '461747a5-5794-11ee-873c-e073e73d10a7');
delete tb_1_ from INFRA_DICT_TYPE tb_1_ where tb_1_.ID = 'c0fcc1e7-02a0-635b-0702-2c96f6482dae';
