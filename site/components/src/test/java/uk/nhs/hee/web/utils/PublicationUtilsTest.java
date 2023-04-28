package uk.nhs.hee.web.utils;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;

public class PublicationUtilsTest {
    private PublicationUtils support;

    @Before
    public void setUp() {
        support = new PublicationUtils();
    }

    @Test
    public void canIdentifyMarkerInURL() {
        String newURL = support.getURLAfterPossibleMarkerRemoved("/medical/publications/d/dental-info");
        assertEquals("dental/publications/dental-info", newURL);
    }

    @Test
    public void canManageWithoutAMarkerInURL() {
        String newURL = support.getURLAfterPossibleMarkerRemoved("/medical/publications/dental-info");
        assertEquals("medical/publications/dental-info", newURL);
    }

    @Test
    public void thisDoesNotLookLikeAPublicationsURL() {
        assertFalse(support.isThisAPublicationsURL("/medical/publications/dental-info"));
    }

    @Test
    public void thisDoesNotLookLikeAPublicationsURLEither() {
        assertFalse(support.isThisAPublicationsURL("medical/publications/dental-info"));
    }

    @Test
    public void thisLooksLikeAPublicationsURL() {
        assertTrue(support.isThisAPublicationsURL("medical/publications/m/dental-info"));
    }

    @Test
    public void thisAlsoLooksLikeAPublicationsURL() {
        assertTrue(support.isThisAPublicationsURL("/medical/publications/m/dental-info"));
    }

    @Test
    public void areTheseActuallyTheSameURLWhenBothMedical() {
        assertTrue(support.sameResolvedURL("medical/publications/m/dental-info",
                "medical/publications/dental-info"));
    }

    @Test
    public void areTheseActuallyTheSameURLWhenApparentlyDifferentHubs() {
        assertTrue(support.sameResolvedURL("medical/publications/d/dental-info",
                "dental/publications/dental-info"));
    }

    @Test
    public void findPathToActualDocumentButNotDocumentItself() {
        assertEquals("medical/publications", support.findRootToDocumentInURL("medical/publications/d/info-1"));
    }

    @Test
    public void cannotFindPathToActualDocumentAsNotPubsURL() {
        assertEquals("medical/publications/info-1", support.findRootToDocumentInURL("medical/publications/info-1"));
    }
}
