package uk.nhs.hee.web.utils;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Node;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Utility methods to locate and then manipulate the content of a rich text field that will
 * contain the definition of a table
 */
public class TableUtils {
    private static final Logger LOGGER = LoggerFactory.getLogger(TableUtils.class);

    /**
     * Look for a table element in a pre-supplied DOM. We assume it's syntactically correct but
     * if we have any issues we return an empty Node.
     * @param textContent is that content we want to parse
     * @return will be a {@link Node}, with a name of 'table' that we can reference later
     */
    public static Optional<Element> findFirstTable(String textContent) {
        Document parsed = Jsoup.parse(textContent);
        Elements tableNodes = parsed.getElementsByTag("table");

        if (tableNodes != null && tableNodes.size() > 0) {
            Element e = tableNodes.get(0);
            return Optional.of(e);
        }

        return Optional.empty();
    }

    /**
     * Find the rows and columns in a table and store them as cells
     * @param tableContent is an Optional<Node> that contains the table element from a XHTML document
     * @return A {@link List} of rows, each element of which contains the columns for that row
     */
    public static HeeTable findHeadersRowsAndCols(Optional<Element> tableContent) {
        List<List<String>> rowsAndCols = new ArrayList<>();
        List<String> headers = new ArrayList<>();

        if (tableContent.isPresent() && "table".equals(tableContent.get().tagName())) {
            // First child may be thead or straight into tbody
            Elements tXXXElements = tableContent.get().children();
            Element tbodyElement = null;

            // Check for thead followed by tbody or just tbody
            switch (tXXXElements.size()) {
                case 2:
                    Element theadElement = tXXXElements.get(0);
                    if ("thead".equals(theadElement.tagName())) {
                        headers = getHeaders(theadElement);
                        if (tXXXElements.size() > 1 && "tbody".equals(tXXXElements.get(1).tagName())) {
                            tbodyElement = tXXXElements.get(1);
                        }
                    }
                    break;

                case 1:
                    if ("tbody".equals(tXXXElements.get(0).tagName())) {
                        tbodyElement = tXXXElements.get(0);
                    }
                    break;

                default:
                    return new HeeTable(headers, rowsAndCols);
            }

            // tbodyElement will be set to tbody (or empty) now
            if (tbodyElement != null && tbodyElement.children().size() > 0) {
                Elements rows = tbodyElement.children();

                if (rows.size() > 0 && "tr".equals(rows.get(0).tagName())) {
                    for (int rowCounter = 0; rowCounter < rows.size(); rowCounter++) {
                        Element row = rows.get(rowCounter);

                        Elements cols = row.children();

                        List<String> colList = null;

                        for (int colCounter = 0; colCounter < cols.size(); colCounter++) {
                            Element col = cols.get(colCounter);
                            String value = col.text();

                            if (colList == null) {
                                colList = new ArrayList<>();
                            }
                            colList.add(value);
                        }

                        if (colList != null) {
                            rowsAndCols.add(colList);
                        }
                    }
                }
            }
        }
        return new HeeTable(headers, rowsAndCols);
    }

    /**
     * Locate nd process headers in a table
     * @param theadElement
     * @return
     */
    private static List<String> getHeaders(Element theadElement) {
        Elements headers = theadElement.children();
        List<String> headerText = new ArrayList<>();

        if (headers.size() > 0) {
            Elements headerCells = headers.get(0).children();

            for (int thCounter = 0; thCounter < headerCells.size(); thCounter++) {
                if ("th".equals(headerCells.get(thCounter).tagName())) {
                    headerText.add(headerCells.get(thCounter).text());
                }
            }
        }

        return headerText;
    }
}
