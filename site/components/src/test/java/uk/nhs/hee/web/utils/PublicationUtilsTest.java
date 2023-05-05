package uk.nhs.hee.web.utils;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class PublicationUtilsTest {
    private PublicationUtils support;

    @Before
    public void setUp() {
        support = new PublicationUtils();
    }

    @Test
    public void thisDoesLookLikeAPublicationsURL() {
        assertTrue(support.isThisAPublicationsURL("/medical/publications/dental-info"));
    }

    @Test
    public void thisDoesLookLikeAPublicationsURLAsWell() {
        assertTrue(support.isThisAPublicationsURL("medical/publications/dental-info"));
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
        assertFalse(support.sameResolvedURL("medical/publications/m/dental-info",
                "medical/publications/dental-info"));
    }

    @Test
    public void areTheseActuallyTheSameURLWhenApparentlyDifferentHubs() {
        assertTrue(support.sameResolvedURL("medical/publications/dental-info",
                "dental/publications/dental-info"));
    }

    @Test
    public void findPathToActualDocumentButNotDocumentItself() {
        assertEquals("medical/publications", support.findRootToDocumentInURL("medical/publications/d/info-1"));
    }

    @Test
    public void cannotFindPathToActualDocumentAsNotPubsURL() {
        assertEquals("medical/publications", support.findRootToDocumentInURL("medical/publications"));
    }

    @Test
    public void checkListOfGeneratedURLSIsCorrect() {
        List<String> urls = support.buildListOfUrlsToCheck("/fred/red");
        assertEquals(3, urls.size());

        checkUrlsAgainstAssertions(urls);
    }

    @Test
    public void checkListOfGeneratedURLSIsCorrectWhenURLSuppliedHasNoLeadingSlash() {
        List<String> urls = support.buildListOfUrlsToCheck("fred/red");
        assertEquals(3, urls.size());

        checkUrlsAgainstAssertions(urls);
    }

    private void checkUrlsAgainstAssertions(List<String> urls) {
        assertTrue(urls.contains("medical/fred/red"));
        assertTrue(urls.contains("dental/fred/red"));
        assertTrue(urls.contains("kls/fred/red"));
    }
}
