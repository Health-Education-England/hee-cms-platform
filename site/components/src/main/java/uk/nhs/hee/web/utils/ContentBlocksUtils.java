package uk.nhs.hee.web.utils;

import com.google.common.collect.ImmutableMap;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import uk.nhs.hee.web.beans.Contact;
import uk.nhs.hee.web.beans.ContactCardReference;
import uk.nhs.hee.web.beans.NavMap;
import uk.nhs.hee.web.components.Model;
import uk.nhs.hee.web.repository.ValueListIdentifier;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;

public class ContentBlocksUtils {

    /**
     * This method returns the valueLists required by the given list of contentBlocks components.
     *
     * @param contentBlocks list of HippoBeans that represent contentBlocks components inside a page.
     * @return a Map that contain a model name as key and the valueList map as value
     */
    public static Map<String, Map<String, String>> getValueListMaps(List<HippoBean> contentBlocks) {
        Map<String, Map<String, String>> modelToValueListMap = new HashMap<>();

        modelToValueListMap.putAll(
                getValueListForBeanType(
                        contentBlocks,
                        hippoBean -> hippoBean instanceof ContactCardReference || hippoBean instanceof Contact,
                        ImmutableMap.of(
                                Model.PERSON_TITLES_MAP.getKey(), ValueListUtils.getValueListMap(ValueListIdentifier.PERSON_TITLES.getName()),
                                Model.PERSON_PRONOUNS_MAP.getKey(), ValueListUtils.getValueListMap(ValueListIdentifier.PERSON_PRONOUNS.getName())
                        )
                )
        );

        modelToValueListMap.putAll(
                getValueListForBeanType(
                        contentBlocks,
                        hippoBean -> hippoBean instanceof NavMap,
                        Collections.singletonMap(
                                Model.NAV_MAP_REGION_MAP.getKey(),
                                ValueListUtils.getValueListMap(ValueListIdentifier.NAV_MAP_REGIONS.getName())
                        )
                )
        );

        return modelToValueListMap;
    }

    private static Map<String, Map<String, String>> getValueListForBeanType(
            List<HippoBean> hippoBeanList,
            Predicate<HippoBean> predicate,
            Map<String, Map<String, String>> modelValueList
    ) {
        if (hippoBeanList == null) {
            return Collections.emptyMap();
        }

        boolean match = hippoBeanList
                .stream()
                .anyMatch(predicate);

        return match ? modelValueList : Collections.emptyMap();
    }
}
