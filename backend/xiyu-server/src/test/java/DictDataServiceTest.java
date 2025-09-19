import com.xiyu.server.ServerApplication;
import com.xiyu.service.repository.infra.data.InfraDictTypeRepository;
import com.xiyu.service.service.infra.codegen.inner.CodegenEngine;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.test.context.SpringBootTest;

//@Import(DictTypeServiceImpl.class)
@SpringBootTest(classes = ServerApplication.class)
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
