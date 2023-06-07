package org.hippoecm.frontend.plugins.cms.dev.updater;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

import org.onehippo.repository.update.BaseNodeUpdateVisitor;

/**
 * Use query: /jcr:root/content/documents//element(*,eforms:form)//element(*,eforms:fieldgroup)
 *
 */
class UpdateEmbeddedFieldGroups extends BaseNodeUpdateVisitor {

    public boolean doUpdate(Node node) throws RepositoryException {
        log.debug("Updating embedded field group {}", node.getPath());

        // Remove hippo:document properties
        if (node.hasProperty("hippo:paths")) {
            log.debug("- Removing hippo:paths property");
            node.getProperty("hippo:paths").remove();
        }
        if (node.hasProperty("hippo:availability")) {
            log.debug("- Removing hippo:availability property");
            node.getProperty("hippo:availability").remove();
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
        Boolean conditional = node.hasProperty("eforms:conditional") ? node.getProperty("eforms:conditional")
                .getBoolean() : null;
        String conditionField = node.hasProperty("eforms:conditionfield") ? node.getProperty("eforms:conditionfield")
                .getString() : null;
        String conditionValue = node.hasProperty("eforms:conditionvalue") ? node.getProperty("eforms:conditionvalue")
                .getString() : null;

        // Change the primary node type
        log.debug("- Changing primary node type to eforms:embeddedfieldgroup");
        node.setPrimaryType("eforms:embeddedfieldgroup");

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
        if (conditional != null) {
            node.setProperty("eforms:conditional", conditional);
        }
        if (conditionField != null) {
            node.setProperty("eforms:conditionalfield", conditionField);
        }
        if (conditionValue != null) {
            node.setProperty("eforms:conditionalvalue", conditionValue);
        }

        return false;
    }

    public boolean undoUpdate(Node node) {
        throw new UnsupportedOperationException("Updater does not implement undoUpdate method");
    }

}