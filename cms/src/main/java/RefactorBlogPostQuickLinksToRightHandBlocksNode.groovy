package org.hippoecm.frontend.plugins.cms.admin.updater

import org.onehippo.repository.update.BaseNodeUpdateVisitor

import javax.jcr.Node

class RefactorBlogPostQuickLinksToRightHandBlocksNode extends BaseNodeUpdateVisitor {

    boolean doUpdate(Node node) {
        log.debug "Updating node ${node.path}"
        node.getSession().move(node.getPath(), node.getParent().getPath() + "/hee:rightHandBlocks")
        log.debug "Successfully renamed '${node.parent.path + "/hee:QuickLinks"}' to '${node.path}'"
        return true
    }

    boolean undoUpdate(Node node) {
        throw new UnsupportedOperationException('Updater does not implement undoUpdate method')
    }

}