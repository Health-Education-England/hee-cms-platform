package org.hippoecm.frontend.plugins.cms.dev.updater;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

import org.onehippo.repository.update.BaseNodeUpdateVisitor;

/**
 * Use query: /jcr:root/content/eforms/templates//element(*,eforms:fieldgroup)
 *
 */
class UpdateReusableFieldGroups extends BaseNodeUpdateVisitor {

    public boolean doUpdate(Node node) throws RepositoryException {
        log.debug("Updating reusable field group {}", node.getPath());

        // The mixin eforms:conditional will be removed, so remove its properties
        if (node.hasProperty("eforms:conditional")) {
            log.debug("- Removing eforms:conditional property");
            node.getProperty("eforms:conditional").remove();
        }
        if (node.hasProperty("eforms:conditionfield")) {
            log.debug("- Removing eforms:conditionfield property");
            node.getProperty("eforms:conditionfield").remove();
        }
        if (node.hasProperty("eforms:conditionvalue")) {
            log.debug("- Removing eforms:conditionvalue property");
            node.getProperty("eforms:conditionalvalue").remove();
        }
        if (node.hasProperty("eforms:conditionnegate")) {
            log.debug("- Removing eforms:conditionnegate property");
            node.getProperty("eforms:conditionnegate").remove();
        }

        // Save property value because changing primary node type will overwrite autocreated properties
        log.debug("- Saving property values");
        String groupName = node.hasProperty("eforms:groupname") ? node.getProperty("eforms:groupname").getString()
                : null;
        String fieldNamePrefix = node.hasProperty("eforms:fieldnameprefix") ? node
                .getProperty("eforms:fieldnameprefix").getString() : null;
        String label = node.hasProperty("eforms:label") ? node.getProperty("eforms:label").getString() : null;
        Boolean mandatory = node.hasProperty("eforms:mandatory") ? node.getProperty("eforms:mandatory").getBoolean()
                : null;
        Boolean oneLine = node.hasProperty("eforms:oneline") ? node.getProperty("eforms:oneline").getBoolean() : null;
        Boolean validationHelper = node.hasProperty("eforms:validationhelper") ? node.getProperty(
                "eforms:validationhelper").getBoolean() : null;

        // Change the primary node type
        log.debug("- Changing primary node type to eforms:reusablefieldgroup");
        node.setPrimaryType("eforms:reusablefieldgroup");

        // Restore saved property values which were re-autocreated
        log.debug("- Restoring property values");
        if (groupName != null) {
            node.setProperty("eforms:groupname", groupName);
        }
        if (fieldNamePrefix != null) {
            node.setProperty("eforms:fieldnameprefix", fieldNamePrefix);
        }
        if (label != null) {
            node.setProperty("eforms:label", label);
        }
        if (mandatory != null) {
            node.setProperty("eforms:mandatory", mandatory);
        }
        if (oneLine != null) {
            node.setProperty("eforms:oneline", oneLine);
        }
        if (validationHelper != null) {
            node.setProperty("eforms:validationhelper", validationHelper);
        }

        return false;
    }

    public boolean undoUpdate(Node node) {
        throw new UnsupportedOperationException("Updater does not implement undoUpdate method");
    }

}