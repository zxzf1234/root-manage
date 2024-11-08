ALTER TABLE infra_file_content change column `content` `content` longblob NOT NULL COMMENT '文件内容';
ALTER TABLE infra_file ADD COLUMN `unique_code` VARCHAR(128) NOT NULL DEFAULT '' COMMENT '唯一码',
    ADD INDEX `infra_file_unique_code`(`unique_code`);