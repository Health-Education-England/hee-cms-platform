package uk.nhs.hee.web.utils;

import org.hippoecm.hst.core.component.HstRequest;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class HstUtils {
    public static List<String> getQueryParameterValues(final HstRequest request, final String parameter) {
        String[] parameterValues = request.getParameterValues(parameter);
        if (parameterValues == null) {
            return Collections.emptyList();
        }

        return Arrays.asList(parameterValues);
    }
}
