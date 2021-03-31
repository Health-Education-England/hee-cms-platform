package uk.nhs.hee.web.utils;

import org.hippoecm.hst.resourcebundle.ResourceBundleUtils;

import java.util.Locale;
import java.util.ResourceBundle;

public class ConfigReader {

    private static final String CONFIG_RESOURCE_BUNDLE_ID = "uk.nhs.hee.web.lks.configuration";

    public static ResourceBundle getResourceBundle() {
        return ResourceBundleUtils.getBundle(CONFIG_RESOURCE_BUNDLE_ID, Locale.UK);
    }

    public static String getValue(String key) {
        return getResourceBundle().getString(key);
    }

}
