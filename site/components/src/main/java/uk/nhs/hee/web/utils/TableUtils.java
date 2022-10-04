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
     *
     * @param textContent is that content we want to parse
     * @return will be a {@link Node}, with a name of 'table' that we can reference later
     */
    public static Optional<Element> findFirstTable(final String textContent) {
        final Document parsed = Jsoup.parse(textContent);
        final Elements tableNodes = parsed.getElementsByTag("table");

        if (!tableNodes.isEmpty()) {
            final Element e = tableNodes.get(0);

            return Optional.of(e);
        }

        return Optional.empty();
    }

    /**
     * Find the rows and columns in a table and store them as cells
     *
     * @param tableContent is an Optional<Node> that contains the table element from a XHTML document
     * @return A {@link List} of rows, each element of which contains the columns for that row
     */
    public static HeeTable findHeadersRowsAndCols(final Element tableContent) {
        final List<List<String>> rowsAndCols = new ArrayList<>();
        List<String> headers = new ArrayList<>();

        if (tableContent != null && "table".equals(tableContent.tagName())) {
            // First child may be thead, or caption or straight into tbody
            final Elements tXXXElements = tableContent.children();
            Element tbodyElement = null;

            // Check for thead and tbody and ignore anything else (like caption)
            for (final Element element : tXXXElements) {
                if ("thead".equals(element.tagName())) {
                    headers = getHeaders(element);
                }
                if ("tbody".equals(element.tagName())) {
                    tbodyElement = element;
                }
            }

            // tbodyElement will be set to tbody (or empty) now
            if (tbodyElement != null && tbodyElement.children().size() > 0) {
                final Elements rows = tbodyElement.children();

                if (!rows.isEmpty() && "tr".equals(rows.get(0).tagName())) {
                    for (final Element row : rows) {
                        final Elements cols = row.children();

                        List<String> colList = null;

                        for (final Element col : cols) {
                            final String value = col.html();

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
     *
     * @param theadElement is the {@link Element} that we believe contains header information
     * @return A list of table headers, as text
     */
    private static List<String> getHeaders(final Element theadElement) {
        final Elements headers = theadElement.children();
        final List<String> headerText = new ArrayList<>();

        if (!headers.isEmpty()) {
            final Elements headerCells = headers.get(0).children();

            for (final Element headerCell : headerCells) {
                if ("th".equals(headerCell.tagName())) {
                    headerText.add(headerCell.text());
                }
            }
        }

        return headerText;
    }
}
