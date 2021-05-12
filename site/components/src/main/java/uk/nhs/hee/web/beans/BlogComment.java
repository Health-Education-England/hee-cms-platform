package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import uk.nhs.hee.web.beans.BlogCommentAuthor;
import java.util.Calendar;

@HippoEssentialsGenerated(internalName = "hee:blogComment")
@Node(jcrType = "hee:blogComment")
public class BlogComment extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:message")
    public String getMessage() {
        return getSingleProperty("hee:message");
    }

    @HippoEssentialsGenerated(internalName = "hee:author")
    public BlogCommentAuthor getAuthor() {
        return getBean("hee:author", BlogCommentAuthor.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:postedDate")
    public Calendar getPostedDate() {
        return getSingleProperty("hee:postedDate");
    }
}
