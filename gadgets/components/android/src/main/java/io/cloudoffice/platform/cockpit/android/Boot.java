package io.cloudoffice.platform.cockpit.android;

import android.app.Activity;
import android.content.SharedPreferences;
import io.cloudoffice.platform.cockpit.boot.Startup;

public class Boot extends Activity {

    private Boot() {
    }

    public static void main(android.content.Context context) throws Exception {
           Startup.fromDesktop();
    }

    private static final class AndroidServices {

        private final SharedPreferences prefs;

        AndroidServices(SharedPreferences prefs) {
            this.prefs = prefs;
        }

    }
}
