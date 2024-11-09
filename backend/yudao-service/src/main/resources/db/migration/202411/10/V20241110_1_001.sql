INSERT IGNORE INTO infra_interface_validation(id,parent_id,parent_type,validation,validation_condition,message) VALUES ('63e50a2e-03ac-49de-876c-cea2734020c1','c6ef6272-9f41-492b-8656-42cb3a911098',0,'Size','max = 255','关联字段长度不能超过255');
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort) VALUES ('c6ef6272-9f41-492b-8656-42cb3a911098','285770c9-d338-4913-95bb-7c50fe968d12','related_column','VARCHAR(255)','关联字段',false,'''','String','','',false,'',13);
ALTER TABLE infra_interface_param
ADD COLUMN `related_column` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '关联字段';
