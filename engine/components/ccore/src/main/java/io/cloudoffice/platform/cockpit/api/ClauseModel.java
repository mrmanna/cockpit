package io.cloudoffice.platform.cockpit.api;

import net.java.html.json.Model;
import net.java.html.json.Property;

/**
 * @author imtiaz
 */
@Model(className = "Clause", targetId = "", properties = {
    @Property(name = "key", type = String.class, array = true), // value will be search in these fields
    @Property(name = "value", type = String.class), // EUSIA   OR 1001
    @Property(name = "itemType", type = String.class), // OWN OR PERSON
    @Property(name = "type", type = String.class),// TAG | VIRTUAL | BY | DATE | SHARED | FIELD
    @Property(name = "fieldName", type = String.class),// if type is  FIELD
    @Property(name = "occur", type = String.class),
    @Property(name = "like", type = boolean.class),
    @Property(name = "anotherClause", type = io.cloudoffice.platform.cockpit.api.Clause.class, array = true)
})
public class ClauseModel {

    public static enum Occur {

        MUST {
            @Override
            public String toString() {
                return "+";
            }
        },
        SHOULD {
            @Override
            public String toString() {
                return "";
            }
        },
        MUST_NOT {
            @Override
            public String toString() {
                return "-";
            }
        };

    }
}
