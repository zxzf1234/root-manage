INSERT IGNORE INTO system_user(id, username, password, nickname)value (-1, 'root','$2a$04$u.mtYe.O3xTUyrLqmxT4.O5.V6xoB1mAwiX55sQyWxublHgnjQ7eW', 'root');
INSERT IGNORE INTO system_role(id, name, `code`, sort, `type`, `status`)value(-1, 'root', 'root', '1', 1, 0);
INSERT IGNORE INTO system_user_role(user_id, role_id)value(-1,-1);