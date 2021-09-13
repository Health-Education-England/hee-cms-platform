package uk.nhs.hee.web.utils;

import org.hippoecm.hst.container.RequestContextProvider;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.onehippo.forge.selection.hst.contentbean.ValueList;
import org.onehippo.forge.selection.hst.util.SelectionUtil;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.eq;
import static org.powermock.api.mockito.PowerMockito.mockStatic;
import static org.powermock.api.mockito.PowerMockito.when;

@RunWith(PowerMockRunner.class)
@PowerMockIgnore({"javax.management.*", "javax.script.*"})
@PrepareForTest({
        RequestContextProvider.class,
        SelectionUtil.class
})
public class ValueListUtilsTest {

    @Mock
    private ValueList mockValueList;

    @Mock
    private HstRequestContext mockHstRequestContext;

    @Before
    public void setUp() {
        mockStatic(RequestContextProvider.class, SelectionUtil.class);
        when(RequestContextProvider.get()).thenReturn(mockHstRequestContext);
    }

    @Test
    public void getValueListMap_WithIdentifierAndChannelAndVLExists_ReturnsValueListMap() {
        // Mocks & stubs
        final String valueListIdentifier = "blogCategories";
        final String channel = "lks";
        final Map<String, String> blogCategoriesMap = Collections.unmodifiableMap(new HashMap<String, String>() {
            private static final long serialVersionUID = 5806501208388279582L;

            {
                put("authentication", "Authentication");
                put("events", "Events");
                put("patient_information", "Patient Information");
            }
        });

        when(SelectionUtil.getValueListByIdentifier(eq(valueListIdentifier + "_" + channel),
                eq(mockHstRequestContext))).thenReturn(mockValueList);
        when(SelectionUtil.valueListAsMap(mockValueList)).thenReturn(blogCategoriesMap);

        // Execute the method to be tested
        final Map<String, String> actualBlogCategoriesMap =
                ValueListUtils.getValueListMap(valueListIdentifier, channel);

        // Verify
        assertThat(actualBlogCategoriesMap).isEqualTo(blogCategoriesMap);
    }

    @Test
    public void getValueListMap_WithIdentifierAndVLExists_ReturnsValueListMap() {
        // Mocks & stubs
        final String valueListIdentifier = "navMapRegions";
        final Map<String, String> navMapRegionsMap = Collections.unmodifiableMap(new HashMap<String, String>() {
            private static final long serialVersionUID = 490172206132817428L;

            {
                put("dental-lk", "[DENTAL] London and Kent, Surrey and Sussex (KSS)");
                put("dental-sw", "[DENTAL] South West");
                put("dental-yh", "[DENTAL] Yorkshire and the Humber");
            }
        });

        when(SelectionUtil.getValueListByIdentifier(eq(valueListIdentifier), eq(mockHstRequestContext)))
                .thenReturn(mockValueList);
        when(SelectionUtil.valueListAsMap(mockValueList)).thenReturn(navMapRegionsMap);

        // Execute the method to be tested
        final Map<String, String> actualNavMapRegionsMap = ValueListUtils.getValueListMap(valueListIdentifier);

        // Verify
        assertThat(actualNavMapRegionsMap).isEqualTo(navMapRegionsMap);
    }

    @Test
    public void getValueListMap_WithIdentifierAndVLDoesNotExists_ReturnsEmptyValueListMap() {
        // Mocks & stubs
        final String valueListIdentifier = "non-existent-value-list";

        when(SelectionUtil.getValueListByIdentifier(eq(valueListIdentifier), eq(mockHstRequestContext)))
                .thenReturn(mockValueList);

        // Execute the method to be tested
        final Map<String, String> actualNavMapRegionsMap = ValueListUtils.getValueListMap(valueListIdentifier);

        // Verify
        assertThat(actualNavMapRegionsMap).isEmpty();
    }

    @Test
    public void getChannelSpecificValueListIdentifier_WithIdentifierAndChannel_ReturnsChannelSpecificIdentifier() {
        // Mocks & stubs
        final String valueListIdentifier = "blogCategories";
        final String channel = "lks";

        // Execute the method to be tested
        final String channelSpecificValueListIdentifier =
                ValueListUtils.getChannelSpecificValueListIdentifier(valueListIdentifier, channel);

        // Verify
        assertThat(channelSpecificValueListIdentifier).isEqualTo(valueListIdentifier + "_" + channel);
    }

}
