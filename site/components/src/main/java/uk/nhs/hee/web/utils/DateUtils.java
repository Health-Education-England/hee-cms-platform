package uk.nhs.hee.web.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {
    public static final String DD_MMMM_YYYY_PATTERN = "dd MMMM yyyy";

    public static String formatDate(Date date, String pattern) {
        return new SimpleDateFormat(pattern).format(date);
    }
}
