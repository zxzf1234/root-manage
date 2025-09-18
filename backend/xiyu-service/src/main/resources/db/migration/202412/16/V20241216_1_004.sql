INSERT IGNORE INTO infra_database_table(id,name,comment,remark,first_module,second_module) VALUES ('f04ef030-191e-42fa-ba2a-8195707c2c33','dict_country','字典-国家','','infra','data');
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('f8a287ce-92b3-4261-aaa2-5c930175df12','f04ef030-191e-42fa-ba2a-8195707c2c33','id','BIGINT','主键ID',false,'','Long','','',false,'',0);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('09e8ab5c-dc67-4b45-9c16-921d8dd1d6e7','f04ef030-191e-42fa-ba2a-8195707c2c33','name','VARCHAR(50)','国家名称',false,'''','String','','',false,'',1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('b6f959d3-19fd-4a91-bbd2-01d29d96d0ec','f04ef030-191e-42fa-ba2a-8195707c2c33','country_code','VARCHAR(50)','国家代码-iso3',false,'''','String','','',false,'',2);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('517b9f8c-117a-4577-8d28-f97261ce1e86','f04ef030-191e-42fa-ba2a-8195707c2c33','pinyin','VARCHAR(50)','拼音',false,'''','String','','',false,'',3);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('91493459-7132-4c3c-8199-44a989eb9968','f04ef030-191e-42fa-ba2a-8195707c2c33','create_time','TIMESTAMP','创建时间',false,'CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1000);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('51305ae9-fc1c-45b3-8541-5ce45a0bf5f9','f04ef030-191e-42fa-ba2a-8195707c2c33','update_time','TIMESTAMP','更新时间',false,'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1001);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('7a080467-23be-48af-a37f-d5bdf516f9e6','f04ef030-191e-42fa-ba2a-8195707c2c33','creator_id','BIGINT','创建人ID',false,'0','Long','','',false,'',1002);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('c97f198a-f879-41ee-8a36-8f4451507b7b','f04ef030-191e-42fa-ba2a-8195707c2c33','updater_id','BIGINT','修改人ID',false,'0','Long','','',false,'',1003);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('6e0b8452-5283-4db9-a915-74c8a93dfa7e','f04ef030-191e-42fa-ba2a-8195707c2c33','deleted_time','DATETIME','删除时间',true,'NULL','LocalDateTime','','',false,'',1004);
INSERT IGNORE INTO infra_interface_vo_class(creator_id,updater_id,id,name,comment,parent_id) VALUES (-1,-1,'41a7104e-74b7-4e75-a82e-1e64c680ba45','DictCountryBase','字典-国家','f04ef030-191e-42fa-ba2a-8195707c2c33');
DROP TABLE IF EXISTS `dict_country`;
CREATE TABLE `dict_country` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '国家名称',
  `country_code` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '国家代码-iso3',
  `pinyin` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '拼音',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `creator_id` BIGINT NOT NULL DEFAULT 0 COMMENT '创建人ID',
  `updater_id` BIGINT NOT NULL DEFAULT 0 COMMENT '修改人ID',
  `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '字典-国家';
