package uk.nhs.hee.web.utils;

import static org.junit.Assert.assertEquals;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.junit.Test;
import org.xml.sax.SAXException;

import java.io.IOException;
import java.util.Optional;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;

public class TableUtilsTest {
    private static final String COMPLETE_ELEMENT_ONE = "<table>" +
            "<tbody>" +
            "<tr>" +
            "<td attr=\"1\">T1.R1.C1</td>" +
            "<td attr=\"2\">T1.R1.C2</td>" +
            "</tr>" +
            "<tr>" +
            "<td attr=\"3\">T1.R2.C1</td>" +
            "<td attr=\"4\">T1.R2.C2</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>";

    private static final String COMPLETE_ELEMENT_THEAD = "<table>" +
            "<thead>"+
            "<tr>" +
            "<th>Head 1</th" +
            "<th>Head 2</th" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "<tr>" +
            "<td attr=\"1\">T1.R1.C1</td>" +
            "<td attr=\"2\">T1.R1.C2</td>" +
            "</tr>" +
            "<tr>" +
            "<td attr=\"3\">T1.R2.C1</td>" +
            "<td attr=\"4\">T1.R2.C2</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>";

    private static final String COMPLETE_ELEMENT_CAPTION_THEAD = "<table>" +
            "<caption>I am a caption</caption>"+
            "<thead>"+
            "<tr>" +
            "<th>Head 1</th" +
            "<th>Head 2</th" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "<tr>" +
            "<td attr=\"1\">T1.R1.C1</td>" +
            "<td attr=\"2\">T1.R1.C2</td>" +
            "</tr>" +
            "<tr>" +
            "<td attr=\"3\">T1.R2.C1</td>" +
            "<td attr=\"4\">T1.R2.C2</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>";

    private static final String INCOMPLETE_FIRST_ROW_ELEMENT_ONE = "<table>" +
            "<tbody>" +
            "<tr>" +
            "</tr>" +
            "<tr>" +
            "<td attr=\"3\">T1.R2.C1</td>" +
            "<td attr=\"4\">T1.R2.C2</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>";

    private static final String EMPTY_ROWS = "<table>" +
            "<tbody>" +
            "<tr>" +
            "</tr>" +
            "<tr>" +
            "</tr>" +
            "</tbody>" +
            "</table>";

    private static final String COMPLETE_ELEMENT_TWO = "<table>" +
            "<tbody>" +
            "<tr>" +
                "<td>T2.R1.C1</td>" +
                "<td>T2.R1.C2</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>";
    public static final String TABLE_SPAN_DATA_SPAN = "<table><span>data</span>";

    @Test
    public void testRejectNotSuppliedTableElement() {
        assertEquals("Cannot find a complete table", Optional.empty(), TableUtils.findFirstTable("<span>data</span>"));
    }

    @Test
    public void testAcceptIncompleteTableElement() {
        Optional<Element> tableContent = TableUtils.findFirstTable(TABLE_SPAN_DATA_SPAN);
        assertEquals("Found a partial table", "<table></table>", convertNodeToStringForComparativePurposes(tableContent.orElse(null)));
    }

    @Test
    public void testIsolateCompleteTableElement() {
        Optional<Element> tableContent = TableUtils.findFirstTable(COMPLETE_ELEMENT_ONE);
        String content = convertNodeToStringForComparativePurposes(tableContent.orElse(null));
        assertEquals("Looking for complete table element", COMPLETE_ELEMENT_ONE, content);
    }

    @Test
    public void testIsolateFirstCompleteTableElement() {
        Optional<Element> tableContent = TableUtils.findFirstTable(COMPLETE_ELEMENT_ONE + COMPLETE_ELEMENT_TWO);
        String content = convertNodeToStringForComparativePurposes(tableContent.orElse(null));
        assertEquals("Looking for complete table element", COMPLETE_ELEMENT_ONE, content);
    }

    @Test
    public void testRejectFirstCompleteTableElementWhenIncompleteAlsoInThere() {
        Optional<Element> tableContent = TableUtils.findFirstTable(COMPLETE_ELEMENT_ONE + "<table><span>data3></span>");
        assertEquals("Looking for complete table element", COMPLETE_ELEMENT_ONE, convertNodeToStringForComparativePurposes(tableContent.orElse(null)));
    }

    @Test
    public void testRejectEmptyTableNode() {
        assertEquals("Expected to receive no rows when passing empty table element", 0, TableUtils.findHeadersRowsAndCols(null).getRows().size());
    }

    @Test
    public void testRejectFirstNodeThatIsntATableNode() {
        Element emptyTableContent = createDocWithTopLevelNodeOfType("xyz");
        assertEquals("Expected to receive no rows back when passing empty table element", 0, TableUtils.findHeadersRowsAndCols(emptyTableContent).getRows().size());
    }

    @Test
    public void testRejectWhenFirstNodeIsTableNodeButNoRowsBeneath() {
        Element emptyTableContent = createDocWithTopLevelNodeOfType("table");
        assertEquals("Expected to receive a row back when passing table element", 1, TableUtils.findHeadersRowsAndCols(emptyTableContent).getRows().size());
    }

    @Test
    public void testFindTwoRowsWhenFirstNodeIsTableNodeAndHasRowsBeneath() {
        Optional<Element> tableContent = TableUtils.findFirstTable(COMPLETE_ELEMENT_ONE + COMPLETE_ELEMENT_TWO);
        assertEquals("Expected to receive two rows of data", 2, TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getRows().size());
    }

    @Test
    public void testFindTwoRowsWhenFirstNodeIsTableNodeAndHasRowsBeneathIncludingNBSP() {
        Optional<Element> tableContent = TableUtils.findFirstTable(COMPLETE_ELEMENT_ONE + COMPLETE_ELEMENT_TWO + "&nbsp;");
        assertEquals("Expected to receive two rows of data", 2, TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getRows().size());
    }

    @Test
    public void testFindNoRowsWhenFirstNodeIsTableNodeAndHasRowsWithNoColumnsBeneath() {
        Optional<Element> tableContent = TableUtils.findFirstTable(EMPTY_ROWS + COMPLETE_ELEMENT_TWO);
        assertEquals("Expected to receive no rows of data", 0, TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getRows().size());
    }

    @Test
    public void testFindOneRowWhenFirstNodeIsTableNodeAndHasRowsWithOnlyOneLotOfColumnsBeneath() {
        Optional<Element> tableContent = TableUtils.findFirstTable(INCOMPLETE_FIRST_ROW_ELEMENT_ONE + COMPLETE_ELEMENT_TWO);
        HeeTable headersRowsAndCols = TableUtils.findHeadersRowsAndCols(tableContent.orElse(null));

        assertEquals("Expected to receive one rows of data", 1, headersRowsAndCols.getRows().size());
        assertEquals("Expected correct column content", "T1.R2.C1", headersRowsAndCols.getCellsForRow(0).get(0));
    }

    @Test
    public void testFindTwoRowsWhenFirstNodeIsTHead() {
        Optional<Element> tableContent = TableUtils.findFirstTable(COMPLETE_ELEMENT_THEAD);
        assertEquals("Expected to receive two header cells", 2, TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getHeaders().size());
        assertEquals("Expected to receive specific text in the first header cell", "Head 1", TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getHeaders().get(0));
        assertEquals("Expected to receive specific text in the second header cell", "Head 2", TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getHeaders().get(1));
        assertEquals("Expected to receive two rows of data", 2, TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getRows().size());
    }

    @Test
    public void testFindTwoRowsWhenFirstNodeIsCaptionFOllowedByTHead() {
        Optional<Element> tableContent = TableUtils.findFirstTable(COMPLETE_ELEMENT_CAPTION_THEAD);
        assertEquals("Expected to receive two header cells", 2, TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getHeaders().size());
        assertEquals("Expected to receive specific text in the first header cell", "Head 1", TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getHeaders().get(0));
        assertEquals("Expected to receive specific text in the second header cell", "Head 2", TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getHeaders().get(1));
        assertEquals("Expected to receive two rows of data", 2, TableUtils.findHeadersRowsAndCols(tableContent.orElse(null)).getRows().size());
    }

    /*
    Private methods follow
     */
    private Element createDocWithTopLevelNodeOfType(String xyz) {
        String workingContent = "<" + xyz + "><tbody><tr><td>hahahah</td></tr></tbody></" + xyz + ">";
        Document data = Jsoup.parse(workingContent);
        return data.getElementsByTag(xyz).get(0);
    }

    private String convertNodeToStringForComparativePurposes(Element node) {
        if (node != null){
            String ret = node.toString();
            return ret.replaceAll("\n[\\s]*", "");
        }

        return null;
    }
}
