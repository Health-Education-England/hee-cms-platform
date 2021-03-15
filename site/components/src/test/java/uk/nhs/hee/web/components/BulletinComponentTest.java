package uk.nhs.hee.web.components;

import org.bloomreach.forge.brut.common.repository.utils.ImporterUtils;
import org.bloomreach.forge.brut.components.BaseComponentTest;
import org.bloomreach.forge.brut.components.exception.SetupTeardownException;
import org.junit.After;
import org.junit.Test;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.onehippo.cms7.essentials.components.paging.IterablePagination;
import uk.nhs.hee.web.beans.Bulletin;
import uk.nhs.hee.web.components.info.BulletinComponentInfo;

import javax.jcr.RepositoryException;
import java.net.URL;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(JUnit4.class)
public class BulletinComponentTest extends BaseComponentTest {
//
//    private BulletinComponent component = new BulletinComponent();
//
    @Override
    protected String getAnnotatedClassesResourcePath() {
        return "classpath*:uk/nhs/hee/web/beans/*.class" +
                "classpath*:uk/nhs/hee/web/components/*.class" +
                "classpath*:uk/nhs/hee/web/components/info/*.class";
    }
//
//    @Before
//    public void setup() {
//        try {
//            super.setup();
//            registerNodeType("hee:bulletin");
//            URL newsResource = getClass().getResource("/bulletins.yaml");
//            ImporterUtils.importYaml(newsResource, rootNode, "/content/documents/lks", "hippostd:folder");
//            recalculateHippoPaths();
//            setSiteContentBase("/content/documents/lks");
//            component.init(null, componentConfiguration);
//        } catch (RepositoryException e) {
//            throw new SetupTeardownException(e);
//        }
//    }
//
//    @After
//    public void teardown() {
//        super.teardown();
//    }
//
//    @Test
//    public void ascending() throws RepositoryException {
//        setParamInfo("/evidence-and-resources", "hee:bulletin", 2);
//
//        component.doBeforeRender(request, response);
//        IterablePagination<Bulletin> pageable = getRequestAttribute("pageable");
//        List<Bulletin> items = pageable.getItems();
//        assertEquals(3, items.size());
//        assertEquals("Bulletin3", items.get(0).getName());
//        assertEquals("Bulletin2", items.get(1).getName());
//        assertEquals("Bulletin1", items.get(2).getName());
//    }
//
//    private void setParamInfo(String path, String type, int pageSize) {
//        BulletinComponentInfo paramInfo = mock(BulletinComponentInfo.class);
//        when(paramInfo.getDocumentTypes()).thenReturn(type);
//        when(paramInfo.getPath()).thenReturn(path);
//        when(paramInfo.getPageSize()).thenReturn(pageSize);
//        setComponentParameterInfo(paramInfo);
//    }
//
////    private void setRequestQueryParams(List<String> categoryParams, String sortOrder) {
////
////        request.addParameter();
////    }


}