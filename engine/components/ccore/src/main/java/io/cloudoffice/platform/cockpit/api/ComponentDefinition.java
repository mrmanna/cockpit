/**
 * ***********************************************************
 * Copyright (c) 2012-2016, EUSIA BD LTD. and/or its affiliates. All rights
 * reserved. EUSIA PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 * ************************************************************
 */
package io.cloudoffice.platform.cockpit.api;

import net.java.html.json.Model;
import net.java.html.json.Property;

/**
 *
 * @author Administrator
 */
@Model(className = "ComponentDef", targetId = "", properties = {
    @Property(name = "name", type = String.class),
    @Property(name = "model", type = String.class),
    @Property(name = "component", type = String.class),
    @Property(name = "instanceId", type = String.class)
})
public class ComponentDefinition {

}
