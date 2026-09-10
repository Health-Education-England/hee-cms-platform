package uk.nhs.hee.web.repository.documentworkflow;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.Silent.class)
public class DocumentWorkflowImplWithoutCopyOperationTest {

    private final HashMap<String, Serializable> originalHints = new HashMap<String, Serializable>() {
        private static final long serialVersionUID = -2936036450308608383L;

        {
            put("delete", "true");
            put("copy", "true");
            put("publish", "true");
            put("depublish", "false");
        }
    };

    private DocumentWorkflowImplWithoutCopyOperation systemUnderTest;

    @Before
    public void setUp() throws Exception {
        systemUnderTest = spy(new DocumentWorkflowImplWithoutCopyOperation());
    }

    @Test
    public void hints_VerifyThatTheCopyOperationHasBeenRemoved() throws Exception {
        doReturn(originalHints).when(systemUnderTest).getHints(anyString());

        final Map<String, Serializable> actualHints = systemUnderTest.hints("master");

        verify(systemUnderTest, times(1)).getHints(any(String.class));
        assertThat(actualHints)
                .doesNotContain(entry("copy", "true"))
                .contains(entry("delete", "true"), entry("publish", "true"), entry("depublish", "false"));
    }
}
