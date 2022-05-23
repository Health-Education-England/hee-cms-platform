package uk.nhs.hee.web.services;

import org.jsoup.nodes.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.utils.HeeTable;
import uk.nhs.hee.web.utils.TableUtils;

import java.util.ArrayList;
import java.util.Optional;

/**
 * Provide services for the parsing and management of content in a table component
 */
public class TableComponentService {
    private static final Logger LOGGER = LoggerFactory.getLogger(TableComponentService.class);

    public HeeTable getTableCellsFromTableMarkup(String textContent) {
        Optional<Element> firstTable = TableUtils.findFirstTable(textContent);

        if (firstTable.isPresent()) {
            HeeTable x = TableUtils.findHeadersRowsAndCols(firstTable);
            return x;
        }
        return new HeeTable(new ArrayList<>());
    }
}
