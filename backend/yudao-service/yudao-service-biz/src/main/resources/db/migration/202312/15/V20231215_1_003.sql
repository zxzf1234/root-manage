update INFRA_DATABASE_COLUMN tb_1_ set COLUMN_COMMENT = '用户id', COLUMN_NAME = 'user_id', DATA_TYPE = 'BIGINT', DEFAULT_VALUE = '0', DICT_TYPE = '', EXAMPLE = '25025', JAVA_TYPE = 'Long', NULLABLE = 0, RELATED_TABLE = 'system_user', REQUIRED = 1 where tb_1_.ID = '3c0d7404-ffb4-402b-9c91-f187c15cff49';
ALTER TABLE system_notify_message
CHANGE `user_id` `user_id` BIGINT NOT NULL DEFAULT 0 COMMENT '用户id';
