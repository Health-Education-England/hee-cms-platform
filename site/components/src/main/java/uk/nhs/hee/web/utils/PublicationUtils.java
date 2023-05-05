package uk.nhs.hee.web.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PublicationUtils {
    private static Pattern pattern = Pattern.compile("(.+)/(publications/)(.+)");

    public String getURLAfterPossibleHubElementRemoved(String path) {
        if (path.contains("/publications/")) {
            Matcher m = pattern.matcher(path);
            if (m.find()) {
                path = m.replaceAll("$2$3");
            }
        }

        if (path.startsWith("/")) {
            return path.substring(1);
        } else {
            return path;
        }
    }

    /**
     * Figure out if this is a publications URL of some sort
     * @param path
     * @return
     */
    public boolean isThisAPublicationsURL(String path) {
        if (path.contains("/publications/")) {
            String checkPath = path.startsWith("/") ? path.substring(1) : path;
            Matcher m = pattern.matcher(checkPath);
            return m.find();
        }

        return false;
    }

    public boolean sameResolvedURL(String firstURL, String secondURL) {
        String resolvedFirst = getURLAfterPossibleHubElementRemoved(firstURL);
        String resolvedSecond = getURLAfterPossibleHubElementRemoved(secondURL);

        return resolvedFirst.equals(resolvedSecond);
    }

    public String findRootToDocumentInURL(String URL) {
        if (!isThisAPublicationsURL(URL)) {
            return URL;
        }

        String workURL;

        if (URL.startsWith("/")) {
            workURL = URL.substring(1);
        } else {
            workURL = URL;
        }

        String parts[] = workURL.split("/");

        if (parts.length > 2) {
            return parts[0] + "/" + parts[1];
        }

        return URL;
    }

    public List<String> buildListOfUrlsToCheck(String modifiedPath) {
        List<String> hubs = Arrays.asList("medical", "dental", "kls");
        List<String> list = new ArrayList<>();

        final String workingPath = modifiedPath.startsWith("/") ? modifiedPath.substring(1) : modifiedPath;

        hubs.stream().forEach(hub -> list.add(hub + "/" + workingPath));
        return list;
    }
}
