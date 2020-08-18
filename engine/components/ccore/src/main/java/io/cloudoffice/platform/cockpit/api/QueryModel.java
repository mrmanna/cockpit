/**
 * **************************************************************************
 * Copyright (c) 2012-2016, EUSIA BD LTD. and/or its affiliates. All rights
 * reserved. EUSIA PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 * **************************************************************************
 */
package io.cloudoffice.platform.cockpit.api;

import net.java.html.json.Model;
import net.java.html.json.Property;

/**
 * @author imtiaz
 */

@Model(className = "Query", targetId = "", properties = {
    @Property(name = "pageNumber", type = int.class),
    @Property(name = "limit", type = int.class),
    @Property(name = "fromClause", type = String.class, array = true),
    @Property(name = "whereClause", type = io.cloudoffice.platform.cockpit.api.Clause.class, array = true),
    @Property(name = "orClauseGroups", type = io.cloudoffice.platform.cockpit.api.ClauseGroup.class, array = true),
    @Property(name = "andClauseGroups", type = io.cloudoffice.platform.cockpit.api.ClauseGroup.class, array = true)
})
public abstract class QueryModel {

}
