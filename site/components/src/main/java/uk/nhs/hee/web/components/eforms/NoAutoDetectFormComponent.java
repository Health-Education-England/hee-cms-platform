package uk.nhs.hee.web.components.eforms;

import com.onehippo.cms7.eforms.hst.components.AutoDetectFormComponent;
import com.onehippo.cms7.eforms.hst.components.info.AutoDetectFormComponentInfo;
import org.apache.commons.lang3.ArrayUtils;
import org.hippoecm.hst.core.parameters.ParametersInfo;

/**
 * An extension of {@link AutoDetectFormComponent} which overrides default behaviors
 * with an empty one (@{ArrayUtils.EMPTY_CLASS_ARRAY}) so that it wouldn't auto-detect behaviors
 * by checking the underlying form document instance, that was picked in the Channel Manager.
 *
 * This will let components using this class define behaviors and its order using the {@code behaviors} parameter name
 * (without including default behaviors automatically).
 */
@ParametersInfo(type = AutoDetectFormComponentInfo.class)
public class NoAutoDetectFormComponent extends AutoDetectFormComponent {

    /**
     * An override of {@link AutoDetectFormComponent#getAutoDetectBehaviors()} returning an empty {@link Class} array.
     */
    @Override
    protected Class[] getAutoDetectBehaviors() {
        return ArrayUtils.EMPTY_CLASS_ARRAY;
    }
}
