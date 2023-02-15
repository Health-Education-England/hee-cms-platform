package uk.nhs.hee.web.repository.documentworkflow;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.times;
import static org.powermock.api.mockito.PowerMockito.*;

@RunWith(PowerMockRunner.class)
@PowerMockIgnore({"javax.management.*", "javax.script.*"})
@PrepareForTest({ AuthorDocumentWorkflowImpl.class })
public class AuthorDocumentWorkflowImplTest {

    private final HashMap<String, Serializable> originalHints = new HashMap<String, Serializable>(){
        private static final long serialVersionUID = -2936036450308608383L;
        {
            put("delete", "true");
            put("copy", "true");
            put("publish", "true");
            put("depublish", "false");
        }};

    private AuthorDocumentWorkflowImpl systemUnderTest;

    @Before
    public void setUp() throws Exception {
        systemUnderTest = spy(new AuthorDocumentWorkflowImpl());
    }

    @Test
    public void hints_VerifyThatTheCopyOperationHasBeenRemoved() throws Exception {
        // Mocks & stubs
        doReturn(originalHints).when(systemUnderTest, "getHints", Mockito.anyString());

        // Execute the method to be tested
        final Map<String, Serializable> actualHints = systemUnderTest.hints("master");

        // Verify
        verifyPrivate(systemUnderTest, times(1)).invoke("getHints", any(String.class));
        assertThat(actualHints)
                .doesNotContain(entry("copy", "true"))
                .contains(entry("delete", "true"), entry("publish", "true"), entry("depublish", "false"));
    }
}


