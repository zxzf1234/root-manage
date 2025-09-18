INSERT IGNORE INTO infra_database_table(id,name,comment,remark,first_module,second_module) VALUES ('aea50cce-144d-4cdc-9c61-688f06e36fb2','system_dept_leader','部门负责人','','system','dept');
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('e44fbb5c-7696-447c-908b-4716b9fdf8a3','aea50cce-144d-4cdc-9c61-688f06e36fb2','id','BIGINT','主键ID',false,'','Long','','',false,'',0,1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('35bd32ee-cce9-429b-a318-2e53f31f08c1','aea50cce-144d-4cdc-9c61-688f06e36fb2','dept_id','BIGINT','部门ID',false,'0','Long','','',false,'system_dept',1,1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('7554a820-adb1-4ae7-a0a6-75e9d5964e62','aea50cce-144d-4cdc-9c61-688f06e36fb2','leader_id','BIGINT','负责人ID',false,'0','Long','','',false,'system_user',2,1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('15700c13-fed8-4a1c-b608-7c0b7088a7b8','aea50cce-144d-4cdc-9c61-688f06e36fb2','create_time','TIMESTAMP','创建时间',false,'CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1000,1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('d6735801-7418-4a31-8c7b-8319f859e8ee','aea50cce-144d-4cdc-9c61-688f06e36fb2','update_time','TIMESTAMP','更新时间',false,'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP','LocalDateTime','','',false,'',1001,1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('99421d73-f23e-4e57-aa19-57ae7554079e','aea50cce-144d-4cdc-9c61-688f06e36fb2','creator_id','BIGINT','创建人ID',false,'0','Long','','',false,'',1002,1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('b19737f4-753f-4102-814f-50af9ffbab80','aea50cce-144d-4cdc-9c61-688f06e36fb2','updater_id','BIGINT','修改人ID',false,'0','Long','','',false,'',1003,1);
INSERT IGNORE INTO infra_database_column(id,table_id,column_name,data_type,column_comment,nullable,default_value,java_type,dict_type,example,required,related_table,sort,related_table_type) VALUES ('16f62b14-39dc-4622-987f-5529e8a897b7','aea50cce-144d-4cdc-9c61-688f06e36fb2','deleted_time','DATETIME','删除时间',true,'NULL','LocalDateTime','','',false,'',1004,1);
INSERT IGNORE INTO infra_interface_vo_class(creator_id,updater_id,id,name,comment,parent_id) VALUES (-1,-1,'048b56a5-5c6d-41f3-8f7b-a284a473016f','SystemDeptLeaderBase','部门负责人','aea50cce-144d-4cdc-9c61-688f06e36fb2');
DROP TABLE IF EXISTS `system_dept_leader`;
CREATE TABLE `system_dept_leader` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '编号',
  `dept_id` BIGINT NOT NULL DEFAULT 0 COMMENT '部门ID',
  `leader_id` BIGINT NOT NULL DEFAULT 0 COMMENT '负责人ID',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `creator_id` BIGINT NOT NULL DEFAULT 0 COMMENT '创建人ID',
  `updater_id` BIGINT NOT NULL DEFAULT 0 COMMENT '修改人ID',
  `deleted_time` DATETIME  DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '部门负责人';

insert ignore system_dept_leader(dept_id, leader_id)values(100, 1);