/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

/**
 *
 * @author toslim
 */
public class IconModel {

    private static final String defaultFileIcon = "fa fa-file-o";
    private static final String wordFileIcon = "fa fa-file-word-o";
    private static final String pdfFileIcon = "fa fa-file-pdf-o";
    private static final String imageFileIcon = "fa fa-file-image-o";
    private static final String vedioFileIcon = "fa fa-file-video-o";
    private static final String excelFileIcon = "fa fa-file-excel-o";
    private static final String powerPointFileIcon = "fa fa-file-powerpoint-o";
    private static final String textFileIcon = "fa fa-file-text-o";
    public static String removeIcon = "fa fa-trash-o";
    public static String breakLink = "fa fa-chain-broken";

    private static final String defaultFileColor = "#000";
    private static final String imageFileColor = "#16A085";
    private static final String wordFileColor = "#3498DB";
    private static final String excelFileColor = "#27AE60";
    private static final String powerPointFileColor = "#D35400";
    private static final String textFileColor = "#8E44AD";
    private static final String pdfFileColor = "#C0392B";
    private static final String vedioFileColor = "#7F8C8D";

    public static String getFileTypeIconClass(String fileType) {
        if (null != fileType) {
            if (fileType.contains("png") || fileType.contains("jpg") || fileType.contains("jpeg") || 
                    fileType.contains("image/png") || fileType.contains("image/jpg") || fileType.contains("image/jpeg")) {
                return imageFileIcon;
            } else if (fileType.contains("doc") || fileType.contains("dot") || fileType.contains("docx")
                    || fileType.contains("dotx") || fileType.contains("docm") || fileType.contains("dotm")) {
                return wordFileIcon;
            } else if (fileType.contains("xls") || fileType.contains("xlt") || fileType.contains("xla")
                    || fileType.contains("xlsx") || fileType.contains("xltx") || fileType.contains("xlsm")
                    || fileType.contains("xltm") || fileType.contains("xlam") || fileType.contains("xlsb")) {
                return excelFileIcon;
            } else if (fileType.contains("ppt") || fileType.contains("pot") || fileType.contains("pps")
                    || fileType.contains("ppa") || fileType.contains("pptx") || fileType.contains("potx")
                    || fileType.contains("ppsx") || fileType.contains("ppam") || fileType.contains("pptm")
                    || fileType.contains("potm") || fileType.contains("ppsm")) {
                return powerPointFileIcon;
            } else if (fileType.contains("pdf") || (fileType.contains("application/pdf"))) {
                return pdfFileIcon;
            } else {
                return defaultFileIcon;
            }
        }
        return "";
    }

    public static String getFileTypeIconColor(String fileType) {
        if (null != fileType) {
            if (fileType.contains("png") || fileType.contains("jpg") || fileType.contains("jpeg")) {
                return imageFileColor;
            } else if (fileType.contains("doc") || fileType.contains("dot") || fileType.contains("docx")
                    || fileType.contains("dotx") || fileType.contains("docm") || fileType.contains("dotm")) {
                return wordFileColor;
            } else if (fileType.contains("xls") || fileType.contains("xlt") || fileType.contains("xla")
                    || fileType.contains("xlsx") || fileType.contains("xltx") || fileType.contains("xlsm")
                    || fileType.contains("xltm") || fileType.contains("xlam") || fileType.contains("xlsb")) {
                return excelFileColor;
            } else if (fileType.contains("ppt") || fileType.contains("pot") || fileType.contains("pps")
                    || fileType.contains("ppa") || fileType.contains("pptx") || fileType.contains("potx")
                    || fileType.contains("ppsx") || fileType.contains("ppam") || fileType.contains("pptm")
                    || fileType.contains("potm") || fileType.contains("ppsm")) {
                return powerPointFileColor;
            } else if (fileType.contains("pdf")) {
                return pdfFileColor;
            } else {
                return defaultFileColor;
            }
        }
        return "";
    }

    public static String getItemTypeIconClass(String itemType) {
        if (null != itemType) {
            if (itemType.equalsIgnoreCase(QueryMetaModel.PERSON)
                    || itemType.equalsIgnoreCase(QueryMetaModel.OWNER)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.PERSON);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.DOCUMENTS)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.DOCUMENTS);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.GROUP)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.GROUP);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.ORGANIZATION)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.ORGANIZATION);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PRODUCT)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.PRODUCT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.REPORT)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.REPORT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.NOTE)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.CHAT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TASK)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.TASK);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.CAMPAIGN)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.CAMPAIGN);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PROJECT)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.PROJECT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.SITE)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.SITE);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TEMPLATE)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.TEMPLATE);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.CALENDAR) || itemType.equalsIgnoreCase("CALENDAR EVENT")) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.CALENDAR);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.RELATED)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.RELATED);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.COLLECTION)) {
                // collection
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.COLLECTION);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.getItemTypeDisplayName(QueryMetaModel.COLLECTION_CHAT))) {
                // titled chat
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.COLLECTION_CHAT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_MY_TAG)
                    || itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_OTHERS_TAGS)
                    || itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_SYSTEM_TAGS)) {
                return "fa fa-tags";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TAG)) {
                return "fa fa-tag";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PAGE)) {
                return "fa fa-trello";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.COMPONENT)) {
                return "fa fa-suitcase";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.USER_DEFINE)) {
                return "fa fa-hashtag";
            } else {
                return "";
            }
        }

        return "";
    }
    public static String getItemTypeIconClass(String itemType, String extension) {
        if (null != itemType) {
            if (itemType.equalsIgnoreCase(QueryMetaModel.PERSON)
                    || itemType.equalsIgnoreCase(QueryMetaModel.OWNER)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.PERSON);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.DOCUMENTS)) {
                
                if(null!= extension && !extension.isEmpty()){
                    return IconModel.getFileTypeIconClass(extension);
                }
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.DOCUMENTS);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.GROUP)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.GROUP);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.ORGANIZATION)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.ORGANIZATION);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PRODUCT)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.PRODUCT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.REPORT)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.REPORT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.NOTE)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.CHAT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TASK)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.TASK);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.CAMPAIGN)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.CAMPAIGN);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PROJECT)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.PROJECT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.SITE)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.SITE);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TEMPLATE)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.TEMPLATE);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.CALENDAR) || itemType.equalsIgnoreCase("CALENDAR EVENT")) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.CALENDAR);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.RELATED)) {
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.RELATED);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.COLLECTION)) {
                // collection
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.COLLECTION);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.getItemTypeDisplayName(QueryMetaModel.COLLECTION_CHAT))) {
                // titled chat
                return QueryMetaModel.getItemTypeIconCss(QueryMetaModel.COLLECTION_CHAT);
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_MY_TAG)
                    || itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_OTHERS_TAGS)
                    || itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_SYSTEM_TAGS)) {
                return "fa fa-tags";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TAG)) {
                return "fa fa-tag";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PAGE)) {
                return "fa fa-trello";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.COMPONENT)) {
                return "fa fa-suitcase";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.USER_DEFINE)) {
                return "fa fa-hashtag";
            } else {
                return "";
            }
        }

        return "";
    }

    public static String getItemTypeIconColor(String itemType) {
        if (null != itemType) {
            if (itemType.equalsIgnoreCase(QueryMetaModel.PERSON)
                    || itemType.equalsIgnoreCase(QueryMetaModel.OWNER)) {
                return "#ffd500"; // yello
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.DOCUMENTS)) {
                return "#00404e"; // deep blue
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.GROUP)) {
                return "#FF7D00"; // deep orrange
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.ORGANIZATION)) {
                return "#5b2c6f"; // violet
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PRODUCT)) {
                return "#03c268 "; // green
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.REPORT)) {
                return "#ff5733";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.NOTE)) {
                return "#3498db";// blue
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TASK)) {
                return "#d4ac0d";// golden
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.CAMPAIGN)) {
                return "#00e0ff";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PROJECT)) {
                return "#d502be"; // salmon
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.SITE)) {
                return "#2874a6";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TEMPLATE)) {
                return "#06741a";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.CALENDAR)) {
                return "#d35400";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.COLLECTION)) {
                return "#58595b"; // deep ash
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.getItemTypeDisplayName(QueryMetaModel.COLLECTION_CHAT))) {
                return "#32CD32"; // limegreen
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_MY_TAG)) {
                return "#3dd94a";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_OTHERS_TAGS)) {
                return "#FF5733";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_SYSTEM_TAGS)) {
                return "#633974";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PAGE)) {
                return "fa fa-trello";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.COMPONENT)) {
                return "fa fa-suitcase";
            } else {
                return "";
            }
        }

        return "";
    }
    public static String getItemTypeIconColor(String itemType, String extension) {
        if (null != itemType) {
            if (itemType.equalsIgnoreCase(QueryMetaModel.PERSON)
                    || itemType.equalsIgnoreCase(QueryMetaModel.OWNER)) {
                return "#ffd500"; // yello
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.DOCUMENTS)) {
                if (null != extension && !extension.isEmpty()) {
                    return IconModel.getFileTypeIconColor(extension);
                }
                return "#00404e"; // deep blue
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.GROUP)) {
                return "#FF7D00"; // deep orrange
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.ORGANIZATION)) {
                return "#5b2c6f"; // violet
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PRODUCT)) {
                return "#03c268 "; // green
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.REPORT)) {
                return "#ff5733";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.NOTE)) {
                return "#3498db";// blue
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TASK)) {
                return "#d4ac0d";// golden
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.CAMPAIGN)) {
                return "#00e0ff";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PROJECT)) {
                return "#d502be"; // salmon
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.SITE)) {
                return "#2874a6";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.TEMPLATE)) {
                return "#06741a";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.CALENDAR)) {
                return "#d35400";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.COLLECTION)) {
                return "#58595b"; // deep ash
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.getItemTypeDisplayName(QueryMetaModel.COLLECTION_CHAT))) {
                return "#32CD32"; // limegreen
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_MY_TAG)) {
                return "#3dd94a";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_OTHERS_TAGS)) {
                return "#FF5733";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.FILTER_TYPE_SYSTEM_TAGS)) {
                return "#633974";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.PAGE)) {
                return "fa fa-trello";
            } else if (itemType.equalsIgnoreCase(QueryMetaModel.COMPONENT)) {
                return "fa fa-suitcase";
            } else {
                return "";
            }
        }

        return "";
    }

}
