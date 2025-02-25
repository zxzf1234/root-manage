INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('f50abb0c-7f06-4550-969d-27dfab35eaa0','7a6ac56d-422e-40a0-a0e6-1578dfb1811d','is_import','TINYINT','导入',false,'0','Boolean','','',false,'',13,1);
ALTER TABLE infra_interface
ADD COLUMN `is_import` TINYINT NOT NULL DEFAULT 0 COMMENT '导入';
INSERT IGNORE INTO `infra_interface_vo_class` VALUES
    ('52f5c182-8721-1fe3-3717-1be1bcdb74e5','importRespVO','导入返回参数类',2,'',NOW(),NOW(),0,0,0);