INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('f9c1dc16-cdf0-476d-a239-e7addfde45df','952cf9db-6d76-4106-87bf-080715ee388e',0,'Range','max = 100000000','排序最大不能超过100000000');
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('952cf9db-6d76-4106-87bf-080715ee388e','285770c9-d338-4913-95bb-7c50fe968d12','sort','INT','排序',false,'0','Integer','','',false,'',14,1);
ALTER TABLE infra_interface_param
ADD COLUMN `sort` INT NOT NULL DEFAULT 0 COMMENT '排序';
