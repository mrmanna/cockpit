/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.security;

import io.netty.util.Mapping;
import io.netty.util.internal.StringUtil;
import java.net.IDN;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Pattern;

public class SecurityMapping<V> implements Mapping<String, V> {
    
    private static final Pattern DNS_WILDCARD_PATTERN = Pattern.compile("^\\*\\..*");

    private  Map<String, V> map;

    private final V defaultValue;

    /**
     * Creates a default, order-sensitive mapping. If your hostnames are in conflict, the mapping
     * will choose the one you add first.
     *
     * @param defaultValue the default value for {@link #map(String)} to return when nothing matches the input
     */
    public SecurityMapping(V defaultValue) {
        this(4, defaultValue);
    }

    /**
     * Creates a default, order-sensitive mapping. If your hostnames are in conflict, the mapping
     * will choose the one you add first.
     *
     * @param initialCapacity initial capacity for the internal map
     * @param defaultValue the default value for {@link #map(String)} to return when nothing matches the input
     */
    public SecurityMapping(int initialCapacity, V defaultValue) {
        if (defaultValue == null) {
            throw new NullPointerException("defaultValue");
        }
        map = new LinkedHashMap<String, V>(initialCapacity);
        this.defaultValue = defaultValue;
    }

    /**
     * Adds a mapping that maps the specified (optionally wildcard) host name to the specified output value.
     * <p>
     * <a href="http://en.wikipedia.org/wiki/Wildcard_DNS_record">DNS wildcard</a> is supported as hostname.
     * For example, you can use {@code *.netty.io} to match {@code netty.io} and {@code downloads.netty.io}.
     * </p>
     *
     * @param hostname the host name (optionally wildcard)
     * @param output the output value that will be returned by {@link #map(String)} when the specified host name
     *               matches the specified input host name
     */
    public SecurityMapping<V> add(String hostname, V output) {
        if (hostname == null) {
            throw new NullPointerException("input");
        }

        if (output == null) {
            throw new NullPointerException("output");
        }

        map.put(normalizeHostname(hostname), output);
        return this;
    }

    /**
     * Simple function to match <a href="http://en.wikipedia.org/wiki/Wildcard_DNS_record">DNS wildcard</a>.
     */
    private static boolean matches(String hostNameTemplate, String hostName) {
        // note that inputs are converted and lowercased already
        if (DNS_WILDCARD_PATTERN.matcher(hostNameTemplate).matches()) {
            return hostNameTemplate.substring(2).equals(hostName) ||
                    hostName.endsWith(hostNameTemplate.substring(1));
        } else {
            return hostNameTemplate.equals(hostName);
        }
    }

    /**
     * IDNA ASCII conversion and case normalization
     */
    private static String normalizeHostname(String hostname) {
        if (needsNormalization(hostname)) {
            hostname = IDN.toASCII(hostname, IDN.ALLOW_UNASSIGNED);
        }
        return hostname.toLowerCase(Locale.US);
    }

    private static boolean needsNormalization(String hostname) {
        final int length = hostname.length();
        for (int i = 0; i < length; i ++) {
            int c = hostname.charAt(i);
            if (c > 0x7F) {
                return true;
            }
        }
        return false;
    }

    @Override
    public V map(String input) {
        if (input != null) {
            input = normalizeHostname(input);

            for (Map.Entry<String, V> entry : map.entrySet()) {
                if (matches(entry.getKey(), input)) {
                    return entry.getValue();
                }
            }
        }

        return defaultValue;
    }

    @Override
    public String toString() {
        return StringUtil.simpleClassName(this) + "(default: " + defaultValue + ", map: " + map + ')';
    }
    
    
}
