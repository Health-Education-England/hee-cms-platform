package uk.nhs.hee.web.utils;

import org.apache.commons.collections4.BidiMap;
import org.apache.commons.collections4.bidimap.DualHashBidiMap;

public class PublicationConstants {
    private static BidiMap<String, String> markerToChannel = new DualHashBidiMap<String, String>() {{
        put("d", "dental");
        put("k", "kls");
        put("m", "medical");
    }};

    /*
     * private methods to manage the to and fro of the marker to origin hub translations
     */
    public static String fromMarkerToChannel(String marker) {
        return markerToChannel.get(marker) == null ? "" : markerToChannel.get(marker);
    }

    public static String fromChannelToMarker(String channel) {
        return markerToChannel.getKey(channel) == null ? "" : markerToChannel.getKey(channel);
    }

}
