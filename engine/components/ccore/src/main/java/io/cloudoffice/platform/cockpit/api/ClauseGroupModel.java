package io.cloudoffice.platform.cockpit.api;

import net.java.html.json.Model;
import net.java.html.json.Property;

/**
 * @author imtiaz
 */
@Model(className = "ClauseGroup", targetId = "", properties = {
    @Property(name = "clauses", type = io.cloudoffice.platform.cockpit.api.Clause.class, array = true)
})
public class ClauseGroupModel {
   
}
