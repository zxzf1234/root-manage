package com.xiyu.service.service.infra.file;

import com.xiyu.service.framework.file.core.client.db.DBFileContentFrameworkDAO;
import com.xiyu.service.repository.infra.file.InfraFileContentRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import jakarta.annotation.Resource;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.Map;

@Repository
public class FileContentFrameworkServiceImpl implements DBFileContentFrameworkDAO {

    @Resource
    private InfraFileContentRepository infraFileContentRepository;

    // jimmer不支持大数据返回和byte[]  直接用jdbcTemplate
    @Resource
    private JdbcTemplate jdbcTemplate;

    @Override
    public void insert(Long configId, String path, byte[] content) {
        jdbcTemplate.update("insert into infra_file_content(config_id, path, content)values(?,?,?)", configId, path, content);
    }

    @Override
    public void delete(Long configId, String path) {
        infraFileContentRepository.deleteByConfigIdAndPath(configId, path);
    }

    @Override
    public byte[] selectContent(Long configId, String path) {
        Map<String, Object> content = jdbcTemplate.queryForMap("select * FROM infra_file_content where config_id = ? AND path = ? limit 1", configId, path);
        return (byte[])(content.get("content"));

    }
    public static byte[] toByteArray(Object obj) {
        byte[] bytes = null;
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try {
            ObjectOutputStream oos = new ObjectOutputStream(bos);
            oos.writeObject(obj);
            oos.flush();
            bytes = bos.toByteArray ();
            oos.close();
            bos.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return bytes;
    }

}
