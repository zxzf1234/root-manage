INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('4b3117a2-0378-4792-8256-121502cb1ceb','2b1d1baf-3acb-490f-9dc4-bf6a022c1fd1',0,'Size','max = 50','省名称长度不能超过50');
INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('d4c5a1cb-6a38-44ef-a0fd-1a6e48d6c67f','64883503-ea00-4828-9770-7931d53e4faf',0,'Size','max = 50','拼音长度不能超过50');
INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('e6ad4bd9-f5b3-4f8c-8fc0-30a3b1e7a04d','a369568d-4c54-4a51-a63b-fcd54b4e2361',0,'Size','max = 50','省代码长度不能超过50');
INSERT IGNORE INTO infra_database_table(id,name,comment,remark,first_module,second_module) VALUES ('941885b9-e5a6-4d7b-8d87-da88487c96c8','dict_province','字典-国家','','infra','data');
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('cbfb8eb8-06a8-491d-8112-33d085c65638','941885b9-e5a6-4d7b-8d87-da88487c96c8','id','BIGINT','主键ID',false,'','Long','','',false,'',0);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('322c098b-d9b1-4dcf-bb4b-9ee16111d771','941885b9-e5a6-4d7b-8d87-da88487c96c8','country_id','BIGINT','国家ID',false,'0','Long','','',false,'dict_country',1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('2b1d1baf-3acb-490f-9dc4-bf6a022c1fd1','941885b9-e5a6-4d7b-8d87-da88487c96c8','name','VARCHAR(50)','省名称',false,'''','String','','',false,'',2);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('64883503-ea00-4828-9770-7931d53e4faf','941885b9-e5a6-4d7b-8d87-da88487c96c8','pinyin','VARCHAR(50)','拼音',false,'''','String','','',false,'',3);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('a369568d-4c54-4a51-a63b-fcd54b4e2361','941885b9-e5a6-4d7b-8d87-da88487c96c8','province_code','VARCHAR(50)','省代码',false,'''','String','','',false,'',4);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('4eb45863-7cec-4720-a729-282fdf3b8611','941885b9-e5a6-4d7b-8d87-da88487c96c8','create_time','TIMESTAMP','创建时间',false,'CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1000);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('8c310946-477d-4681-bcf9-5f5783a6d7b8','941885b9-e5a6-4d7b-8d87-da88487c96c8','update_time','TIMESTAMP','更新时间',false,'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1001);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('cb1e1e9a-7c15-4189-ac53-90e1a542a973','941885b9-e5a6-4d7b-8d87-da88487c96c8','creator_id','BIGINT','创建人ID',false,'0','Long','','',false,'',1002);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('75f48e64-8b2b-43db-9da0-c2e03bda88f6','941885b9-e5a6-4d7b-8d87-da88487c96c8','updater_id','BIGINT','修改人ID',false,'0','Long','','',false,'',1003);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('e1a6a24d-3b3e-4f95-b116-802f267cf22f','941885b9-e5a6-4d7b-8d87-da88487c96c8','deleted_time','DATETIME','删除时间',true,'NULL','LocalDateTime','','',false,'',1004);
INSERT IGNORE INTO infra_interface_vo_class(creator_id,updater_id,id,name,comment,parent_id) VALUES (-1,-1,'1c5a80f5-fa4d-47b7-891e-0a21041f1635','DictProvinceBase','字典-国家','941885b9-e5a6-4d7b-8d87-da88487c96c8');
DROP TABLE IF EXISTS `dict_province`;
CREATE TABLE `dict_province` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '编号',
  `country_id` BIGINT NOT NULL DEFAULT 0 COMMENT '国家ID',
  `name` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '省名称',
  `pinyin` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '拼音',
  `province_code` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '省代码',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `creator_id` BIGINT NOT NULL DEFAULT 0 COMMENT '创建人ID',
  `updater_id` BIGINT NOT NULL DEFAULT 0 COMMENT '修改人ID',
  `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '字典-国家';
INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('a56209a3-352e-4f6a-a077-2ea066d766f1','1e78c6e7-7235-43a9-93d6-894f99f6f5a3',0,'Size','max = 50','市名称长度不能超过50');
INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('4a01aae4-3104-4a27-bcc1-f5a1a76dd813','4f2dc60e-3909-4dab-b4a2-9778142fe7bb',0,'Size','max = 50','拼音长度不能超过50');
INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('48193270-61bd-4bd8-9cc0-7ae53bf16574','02a74fc0-b790-475d-a9af-9635590e8dc0',0,'Size','max = 50','市代码长度不能超过50');
INSERT IGNORE INTO infra_database_table(id,name,comment,remark,first_module,second_module) VALUES ('b2760842-f062-4dc7-89a6-59ed5858ff6b','dict_city','字典-城市','','infra','data');
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('63878da4-4f18-4df7-9bae-df1168651feb','b2760842-f062-4dc7-89a6-59ed5858ff6b','id','BIGINT','主键ID',false,'','Long','','',false,'',0);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('52a658f2-5fc9-453e-8b90-26718679a7d4','b2760842-f062-4dc7-89a6-59ed5858ff6b','province_id','BIGINT','省ID',false,'0','Long','','',false,'dict_province',1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('1e78c6e7-7235-43a9-93d6-894f99f6f5a3','b2760842-f062-4dc7-89a6-59ed5858ff6b','name','VARCHAR(50)','市名称',false,'''','String','','',false,'',2);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('4f2dc60e-3909-4dab-b4a2-9778142fe7bb','b2760842-f062-4dc7-89a6-59ed5858ff6b','pinyin','VARCHAR(50)','拼音',false,'''','String','','',false,'',3);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('02a74fc0-b790-475d-a9af-9635590e8dc0','b2760842-f062-4dc7-89a6-59ed5858ff6b','city_code','VARCHAR(50)','市代码',false,'''','String','','',false,'',4);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('b36ef029-988e-4ce2-bafd-f348acd209b6','b2760842-f062-4dc7-89a6-59ed5858ff6b','create_time','TIMESTAMP','创建时间',false,'CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1000);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('969a4f16-ce2b-42ba-ba95-cb722bdba521','b2760842-f062-4dc7-89a6-59ed5858ff6b','update_time','TIMESTAMP','更新时间',false,'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1001);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('10c854d6-80a0-45b4-ad03-c24870f5070d','b2760842-f062-4dc7-89a6-59ed5858ff6b','creator_id','BIGINT','创建人ID',false,'0','Long','','',false,'',1002);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('21e27467-6d4d-482e-ba0d-1ec1872e3ad4','b2760842-f062-4dc7-89a6-59ed5858ff6b','updater_id','BIGINT','修改人ID',false,'0','Long','','',false,'',1003);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('613f81a7-c541-4c6c-88f2-256a50fa4be9','b2760842-f062-4dc7-89a6-59ed5858ff6b','deleted_time','DATETIME','删除时间',true,'NULL','LocalDateTime','','',false,'',1004);
INSERT IGNORE INTO infra_interface_vo_class(creator_id,updater_id,id,name,comment,parent_id) VALUES (-1,-1,'d0ad04ed-f27c-49e5-a5dc-31a4ce7a900c','DictCityBase','字典-城市','b2760842-f062-4dc7-89a6-59ed5858ff6b');
DROP TABLE IF EXISTS `dict_city`;
CREATE TABLE `dict_city` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '编号',
  `province_id` BIGINT NOT NULL DEFAULT 0 COMMENT '省ID',
  `name` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '市名称',
  `pinyin` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '拼音',
  `city_code` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '市代码',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `creator_id` BIGINT NOT NULL DEFAULT 0 COMMENT '创建人ID',
  `updater_id` BIGINT NOT NULL DEFAULT 0 COMMENT '修改人ID',
  `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '字典-城市';
INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('f44eac26-6d64-4837-bd63-7beacae3ba0e','f35c9d86-a474-4aff-8f97-85b19c3001c2',0,'Size','max = 50','区名称长度不能超过50');
INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('20fefc55-b06b-41f6-a1bd-adb49abdd4d4','bbb1de65-0dba-4e0f-83b4-f11109b9ea3e',0,'Size','max = 50','拼音长度不能超过50');
INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('40f9dcc7-a616-47d6-84c1-403addcb2d16','b73de18f-104f-4239-948a-499d0a195925',0,'Size','max = 50','区代码长度不能超过50');
INSERT IGNORE INTO infra_database_table(id,name,comment,remark,first_module,second_module) VALUES ('1808eb8e-b807-4046-a5d0-7e157fdb5dfb','dict_district','字典-区','','infra','data');
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('8954958d-4b91-425f-be7b-084306a061a2','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','id','BIGINT','主键ID',false,'','Long','','',false,'',0);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('acfcf675-9f58-4e45-bdb6-3821bc847163','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','city_id','BIGINT','市ID',false,'0','Long','','',false,'dict_city',1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('f35c9d86-a474-4aff-8f97-85b19c3001c2','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','name','VARCHAR(50)','区名称',false,'''','String','','',false,'',2);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('bbb1de65-0dba-4e0f-83b4-f11109b9ea3e','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','pinyin','VARCHAR(50)','拼音',false,'''','String','','',false,'',3);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('b73de18f-104f-4239-948a-499d0a195925','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','distict_code','VARCHAR(50)','区代码',false,'''','String','','',false,'',4);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('78d518b4-a0e9-41ba-b7cb-317b9bb4f140','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','create_time','TIMESTAMP','创建时间',false,'CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1000);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('bcd5b214-8ca4-4a32-9d6b-755285ed5a00','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','update_time','TIMESTAMP','更新时间',false,'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1001);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('6ed0cf13-771e-4f34-bc02-30668ae044e8','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','creator_id','BIGINT','创建人ID',false,'0','Long','','',false,'',1002);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('47508eea-a0ec-4a0a-9552-2f1558320561','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','updater_id','BIGINT','修改人ID',false,'0','Long','','',false,'',1003);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('bf9546dd-5893-4e7a-ad44-3b1fdd7b8ceb','1808eb8e-b807-4046-a5d0-7e157fdb5dfb','deleted_time','DATETIME','删除时间',true,'NULL','LocalDateTime','','',false,'',1004);
INSERT IGNORE INTO infra_interface_vo_class(creator_id,updater_id,id,name,comment,parent_id) VALUES (-1,-1,'611261c7-daaa-4828-b16a-36bfff5d152b','DictDistrictBase','字典-区','1808eb8e-b807-4046-a5d0-7e157fdb5dfb');
DROP TABLE IF EXISTS `dict_district`;
CREATE TABLE `dict_district` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '编号',
  `city_id` BIGINT NOT NULL DEFAULT 0 COMMENT '市ID',
  `name` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '区名称',
  `pinyin` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '拼音',
  `distict_code` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '区代码',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `creator_id` BIGINT NOT NULL DEFAULT 0 COMMENT '创建人ID',
  `updater_id` BIGINT NOT NULL DEFAULT 0 COMMENT '修改人ID',
  `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '字典-区';
