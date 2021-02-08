package uk.nhs.hee.web.components;

import org.hippoecm.hst.container.RequestContextProvider;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsListComponent;
import org.onehippo.forge.selection.hst.contentbean.ValueList;
import org.onehippo.forge.selection.hst.util.SelectionUtil;
import uk.nhs.hee.web.components.info.BulletinComponentInfo;

import java.util.Map;

@ParametersInfo(type = BulletinComponentInfo.class)
public class BulletinComponent extends EssentialsListComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        request.setAttribute("categoriesMap", getCategoriesMap());
    }

    private Map<String, String> getCategoriesMap() {
        final ValueList categoriesValueList =
                SelectionUtil.getValueListByIdentifier("categories", RequestContextProvider.get());
        return SelectionUtil.valueListAsMap(categoriesValueList);
    }
}