package uk.nhs.hee.web.utils;

import java.util.ArrayList;
import java.util.List;

/**
 * Data storage object used for table information that will be output in the HEE web front end.
 * The table contents are pre-parsed and is just stored in here
 *
 * There are a number of convenience methods in here that simplify the interaction with
 * Freemarker such as getHeaderCount() and getHeaderAt()
 *
 */
public class HeeTable {
    private List<List<String>> rows;
    private List<String> headers;

    public HeeTable(List<List<String>> rows){
        this.rows = rows;
    }

    public HeeTable(List<String> headers, List<List<String>> rows) {
        this.headers = headers;
        this.rows = rows;
    }

    public List<List<String>> getRows () {
        return rows;
    }

    /**
     * Convenience method for FTL
     * @return the number of rows, or zero if none found
     */
    public int getRowCount() {
        return rows == null ? 0 : rows.size();
    }

    /**
     * Simplify access to the list of columns in a row
     * @param rowNumber which is checked to be valid
     * @return a list of cell contents for the nominated row
     */
    public List<String> getCellsForRow(int rowNumber) {
        if (rows != null && rows.size() > rowNumber) {
            return rows.get(rowNumber);
        }

        return new ArrayList<>();
    }

    public List<String> getHeaders() {
        return headers;
    }

    /**
     * Convenience method
     * @return the number of header elements
     */
    public int getHeaderCount() {
        return headers == null ? 0 : headers.size();
    }

    /**
     * Return a specific header element, based on index
     * @param index is the cell number we want
     * @return the value for that cell, if available
     */
    public String getHeaderAt(int index) {
        if (headers != null) {
            if (headers.size() > index) {
                return headers.get(index);
            }
        }

        return "";
    }
}
