update system_menu set back_show = 1 where name = '基础设施';
update system_menu sm1, system_menu sm2 set sm2.back_show = 1 where sm1.name = '基础设施' and sm1.parent_id = sm2.id;
update system_menu sm1, system_menu sm2 set sm2.back_show = 1 where sm1.name = '基础设施' and sm2.parent_id = sm1.id;
update system_menu sm1, system_menu sm2, system_menu sm3 set sm3.back_show = 1 where sm1.name = '基础设施' and sm2.parent_id = sm1.id and sm3.parent_id = sm2.id;
update system_menu sm1, system_menu sm2, system_menu sm3, system_menu sm4 set sm4.back_show = 1 where sm1.name = '基础设施' and sm2.parent_id = sm1.id and sm3.parent_id = sm2.id and sm4.parent_id = sm3.id;
update system_menu sm1, system_menu sm2, system_menu sm3, system_menu sm4, system_menu sm5 set sm5.back_show = 1 where sm1.name = '基础设施' and sm2.parent_id = sm1.id and sm3.parent_id = sm2.id and sm4.parent_id = sm3.id and sm5.parent_id = sm4.id;
