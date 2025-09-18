UPDATE infra_database_column SET table_id='1808eb8e-b807-4046-a5d0-7e157fdb5dfb',column_name='district_code',data_type='VARCHAR(50)',column_comment='区代码',nullable=false,default_value='''',java_type='String',dict_type='',example='',required=false,related_table='',sort=4 WHERE id = 'b73de18f-104f-4239-948a-499d0a195925';
ALTER TABLE dict_district
CHANGE `distict_code` `district_code` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '区代码';
