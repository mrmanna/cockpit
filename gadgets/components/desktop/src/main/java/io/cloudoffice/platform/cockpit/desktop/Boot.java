package io.cloudoffice.platform.cockpit.desktop;

import io.cloudoffice.platform.cockpit.boot.Startup;
import java.security.GeneralSecurityException;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import net.java.html.boot.BrowserBuilder;

public class Boot {

    private Boot() {
    }

    public static void main(String... args) throws Exception {
        TrustManager[] trustAllCerts = new TrustManager[]{
            new X509TrustManager() {
                public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                    return null;
                }

                public void checkClientTrusted(
                        java.security.cert.X509Certificate[] certs, String authType) {
                }

                public void checkServerTrusted(
                        java.security.cert.X509Certificate[] certs, String authType) {
                }
            }
        };

// Install the all-trusting trust manager
        try {
            SSLContext sc = SSLContext.getInstance("SSL");
            sc.init(null, trustAllCerts, new java.security.SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
        } catch (GeneralSecurityException e) {
        }
        BrowserBuilder.newBrowser().
                loadPage("view/desktop.html").
                loadClass(Boot.class).
                invoke("onPageLoad", args).
                showAndWait();
        System.exit(0);

    }

    /**
     * Called when the page is ready.
     */
    public static void onPageLoad() throws Exception {
        Startup.fromDesktop();
    }

}
