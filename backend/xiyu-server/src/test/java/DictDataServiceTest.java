import com.xiyu.server.YudaoServerApplication;
import com.xiyu.service.model.infra.data.InfraDictType;
import com.xiyu.service.repository.infra.data.InfraDictTypeRepository;
import com.xiyu.service.service.infra.codegen.inner.CodegenEngine;
import com.xiyu.service.service.infra.data.DictTypeService;
import com.xiyu.service.service.infra.data.DictTypeServiceImpl;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

import java.util.List;
import java.util.Optional;

//@Import(DictTypeServiceImpl.class)
@SpringBootTest(classes = YudaoServerApplication.class)
@Slf4j
public class DictDataServiceTest {
    @Resource
    private InfraDictTypeRepository infraDictTypeRepository;

    @Resource
    private CodegenEngine codegenEngine;

//    @Test
//    public void testUpdateDictType() {
//        List<InfraDictType> typeList = infraDictTypeRepository.findAll();
//        System.out.println("this is testUpdateDictType");
//        System.out.println(typeList.size());
//        for(InfraDictType type : typeList){
//            Optional<InfraDictType> opOldTypeDetail = infraDictTypeRepository.findByDetailId(type.id());
//            codegenEngine.tmpDictUpdateExecute(opOldTypeDetail.get());
//        }
//
//    }
}
