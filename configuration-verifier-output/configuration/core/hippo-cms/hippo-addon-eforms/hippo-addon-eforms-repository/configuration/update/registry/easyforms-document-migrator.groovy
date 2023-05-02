package org.hippoecm.frontend.plugins.cms.dev.updater

import com.onehippo.cms7.eforms.repository.migration.easyforms.EasyFormsDocumentHandleMigrator
import org.onehippo.repository.update.BaseNodeUpdateVisitor

import javax.jcr.Node

/**
 * HippoAddonEnterpriseFormsEasyFormsDocumentMigrator 
 *
 * <P>
 * This is a migration script to copy existing Easy Forms documents to Enterprise Forms documents.
 * By default, this script finds all the Easy Forms documents and creates an Enterprise Forms document
 * in the same folder with changing the document name with suffixes
 * ('-migrated' for node name, and ' (Migrated)' for display name).
 * </P>
 *
 * <P>
 * You can still customize somethings such as workflow categories when creating an Enterprise Forms document
 * or suffixes for Enterprise Forms document names. See the constructor or stringn literals below for customization.
 * Also, for advanced customization, please look into com.onehippo.cms7.eforms.repository.migration.easyforms.EasyFormsDocumentHandleMigrator
 * as a reference.
 * </P>
 *
 * <EM>
 * NOTE: Apparently, this script DOES NOT WORK unless you do have Easy Forms namespace and node types!
 *       You will get an error message, 'The query that is provided is not a valid xpath query' in that case.
 * </EM>
 */
class HippoAddonEnterpriseFormsEasyFormsDocumentMigrator extends BaseNodeUpdateVisitor {

    def migrator

    HippoAddonEnterpriseFormsEasyFormsDocumentMigrator() {
        migrator = new EasyFormsDocumentHandleMigrator()
        migrator.folderNodeWorkflowCategory = "threepane"
        migrator.formDocumentAdditionWorkflowCategory = "new-document"
        migrator.eformsNodeType = "eforms:form"
    }

    boolean doUpdate(Node node) {
        log.info "Migrating Easy Forms Document Handle node at '${node.path}'."

        Node migratedNode = null

        try {
            def displayName = null

            if (node.hasNode("hippo:translation") && node.getNode("hippo:translation").hasProperty("hippo:message")) {
                displayName = node.getNode("hippo:translation").getProperty("hippo:message").getString() + ' (Migrated)'
            }

            migratedNode = migrator.migrate(node, node.getParent(), node.name + "-migrated", displayName)
        } catch (Exception e) {
            log.error "Failed to migrate Easy Forms Document Handle node.", e
        }

        if (migratedNode != null) {
            log.info "Completed migration to Enterprise Forms Document at '${migratedNode.path}'."
        }

        return (migratedNode != null);
    }

    boolean undoUpdate(Node node) {
        throw new UnsupportedOperationException('Updater does not implement undoUpdate method')
    }

}