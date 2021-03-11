package uk.nhs.hee.web.components.beans;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * Bean to hold Breadcrumb Link Text and URL.
 */
public class BreadcrumbLink {
    private final String text;
    private final String url;

    /**
     * Creates an instance of {@link BreadcrumbLink} with {@code text} and {@code url}.
     *
     * @param text the Breadcrumb Link Text.
     * @param url  the Breadcrumb Link URL.
     */
    public BreadcrumbLink(final String text, final String url) {
        this.text = text;
        this.url = url;
    }

    /**
     * Returns Breadcrumb Link Text.
     *
     * @return the Breadcrumb Link Text.
     */
    public String getText() {
        return text;
    }

    /**
     * Returns Breadcrumb Link URL.
     *
     * @return the Breadcrumb Link URL.
     */
    public String getUrl() {
        return url;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("text", text)
                .append("url", url)
                .toString();
    }
}
