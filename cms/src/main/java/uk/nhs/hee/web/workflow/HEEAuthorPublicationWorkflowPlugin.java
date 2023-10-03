package uk.nhs.hee.web.workflow;

import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.hippoecm.frontend.plugins.reviewedactions.PublicationWorkflowPlugin;
import org.hippoecm.frontend.session.PluginUserSession;
import org.hippoecm.frontend.session.UserSession;
import org.onehippo.repository.security.SessionUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.jcr.ItemNotFoundException;

/**
 * This class is used to remove the publication menu from users that are authors, but not REVIEWING authors.
 * Those reviewing authors are distinguished by having the hee.review.author user-role over and above the normal
 * user-roles assigned to an author
 */
public class HEEAuthorPublicationWorkflowPlugin extends PublicationWorkflowPlugin {

    private static final Logger log = LoggerFactory.getLogger(HEEAuthorPublicationWorkflowPlugin.class);

    public static final String PUBLISH = "publish";
    public static final String DEPUBLISH = "depublish";
    public static final String REQUEST_PUBLICATION = "requestPublication";
    public static final String REQUEST_DEPUBLICATION = "requestDepublication";

    public static final String USERROLE_HEE_REVIEW_AUTHOR = "hee.review.author";
    public static final String USERROLE_XM_CHANNEL_VIEWER = "xm.channel.viewer";

    public HEEAuthorPublicationWorkflowPlugin(IPluginContext context, IPluginConfig config) {
        super(context, config);
    }

    /**
     * Get the available workflow actions and restrict the contents if only an author
     *
     * Non-author-user-roles will not be restricted in any way
     */
    @Override
    public Map<String, Serializable> getHints() {
        Map<String, Serializable> theHints = super.getHints();

        if (isOnlyAuthor()) {
            final HashMap<String, Serializable> clonedHints = new HashMap<>(theHints);

            // Removes 'copy' operation from hints
            clonedHints.remove(PUBLISH);
            clonedHints.remove(DEPUBLISH);
            clonedHints.remove(REQUEST_PUBLICATION);
            clonedHints.remove(REQUEST_DEPUBLICATION);

            return clonedHints;
        } else {
            return theHints;
        }
    }

    /**
     * Figure out if the current user has a user-role that identifies them as an author (without review capability)
     *
     * @return boolean to indicate if an author or not
     */
    private boolean isOnlyAuthor() {
        PluginUserSession userSession = ((PluginUserSession) UserSession.get());

        if (userSession == null) {
            return false;
        }

        try {
            SessionUser user = userSession.getJcrSession().getUser();
            if (user == null) {
                return false;
            }
            Set<String> roles = user.getUserRoles();

            return (roles != null &&
                    !roles.contains(USERROLE_HEE_REVIEW_AUTHOR) &&
                    roles.contains(USERROLE_XM_CHANNEL_VIEWER));
        } catch (ItemNotFoundException e) {
            log.error("Unable to locate user session details when querying for user-roles", e);
        }
        return false;
    }
}
