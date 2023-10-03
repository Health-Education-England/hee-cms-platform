package uk.nhs.hee.web.workflow;

import org.bloomreach.forge.reviewworkflow.cms.reviewedactions.AssignableGroupsProvider;
import org.onehippo.cms7.services.HippoServiceRegistry;
import org.onehippo.repository.security.Group;
import org.onehippo.repository.security.SecurityService;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * This class is an override, through Spring config, of the class used to determine which groups
 * are eligible to be sent assignments for review.
 *
 * See the notes in the provideGroups method
 */
public class HEEAssignableGroupsProvider implements AssignableGroupsProvider {
    /**
     * Use this method to find all groups that can have a review assigned to them.
     * Only groups which have the user-role hee.review.editor are considered to match that requirement
     *
     * @param currentUserId - we don't use this
     * @param docAbsolutePath - we don't use this
     *
     * @return the set of all groups that match the criteria of having the hee.review.author user-role
     */
    @Override
    public Set<String> provideGroups(String currentUserId, String docAbsolutePath) {
        SecurityService securityService = HippoServiceRegistry.getService(SecurityService.class);

        // The override is primarily about looking for up to 100 of the groups as
        // candidates and then applying the filter, where the original class would
        // return only the first twenty, regardless of user-roles
        Iterable<Group> allGroups = securityService.getGroups(0L, 100L);

        return StreamSupport.stream(allGroups.spliterator(), false)
                .filter(group -> group.getUserRoles().contains(HEEAuthorPublicationWorkflowPlugin.USERROLE_HEE_REVIEW_AUTHOR))
                .map(Group::getId)
                .collect(Collectors.toSet());
    }
}
