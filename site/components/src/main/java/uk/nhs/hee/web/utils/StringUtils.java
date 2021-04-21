package uk.nhs.hee.web.utils;

import org.apache.commons.lang.WordUtils;
import uk.nhs.hee.web.constants.HeeNodeType;

public class StringUtils extends org.apache.commons.lang3.StringUtils {
    /**
     * Extract the document type display on website from document type indentification
     * For example hee:guidance will be transformed into Guidance
     */
    public static String getDocumentTypeDisplayName(String documentType) {
        return WordUtils.capitalize(documentType.replace(HeeNodeType.HEE_NAMESPACE + ":", ""));
    }
}
