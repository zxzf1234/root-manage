INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('d846a3f3-380a-4b2c-9700-d6c84e829ea4','7f7c2842-fbc4-4b37-9ec9-4949e36307ed','notifier_id','BIGINT','通知人',false,'0','Long','','',false,'',5,1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('4ec1d1d0-3556-4731-8328-4b4b675e1bb5','7f7c2842-fbc4-4b37-9ec9-4949e36307ed','is_read','TINYINT','是否已读',false,'0','Boolean','','',false,'',6,1);
ALTER TABLE system_notice
ADD COLUMN `notifier_id` BIGINT NOT NULL DEFAULT 0 COMMENT '通知人',
ADD COLUMN `is_read` TINYINT NOT NULL DEFAULT 0 COMMENT '是否已读';
INSERT IGNORE INTO infra_interface_module(creator_id,updater_id,id,name,comment,parent_id,type,sort,deleted_time) VALUES (-1,-1,'2dde01dc-c023-48e6-93cc-35d1488e927c','notice','通知','d6f6f5fc-0c97-4623-97c5-2cb2d3dad0ca',0,0,NULL);
INSERT IGNORE INTO infra_interface_module(creator_id,updater_id,id,name,comment,parent_id,type,sort,deleted_time) VALUES (-1,-1,'bd2f7566-40a2-4db7-b242-38ed51993bcf','notice','通知管理','2dde01dc-c023-48e6-93cc-35d1488e927c',1,1001004000,NULL);
