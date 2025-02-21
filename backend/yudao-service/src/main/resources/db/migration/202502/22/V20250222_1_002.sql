INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('fa826367-1b20-4c95-b422-f43934a5c6fd','de58e03d-3290-4f44-9b18-33d49f9a91d5',0,'Range','max = 127','关联表类型最大不能超过127');
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('de58e03d-3290-4f44-9b18-33d49f9a91d5','376e9077-6e6d-47d3-b75d-b7aefdddccaa','related_table_type','TINYINT','关联表类型',false,'0','Integer','','',false,'',13);
ALTER TABLE infra_database_column
ADD COLUMN `related_table_type` TINYINT NOT NULL DEFAULT 0 COMMENT '关联表类型';
