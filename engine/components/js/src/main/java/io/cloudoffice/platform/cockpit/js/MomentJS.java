/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.js;

import net.java.html.js.JavaScriptBody;

/**
 *
 * @author Toslim
 */
public class MomentJS {

    private MomentJS() {
    }

    @JavaScriptBody(args = {}, body = "moment.locale('nl', {\n"
            + "    months : \"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december\".split(\"_\"),\n"
            + "    monthsShort : \"jan._feb._mrt_apr._mei_jun_jul._aug_sep._okt._nov._dec.\".split(\"_\"),\n"
            + "    weekdays : \"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag\".split(\"_\"),\n"
            + "    weekdaysShort : \"	zo._ma._di._wo._do._vr._za.\".split(\"_\"),\n"
            + "    weekdaysMin : \"zo_ma_di_wo_do_vr_za\".split(\"_\"),\n"
            + "    longDateFormat : {\n"
            + "        LT : \"HH:mm\",\n"
            + "        LTS : \"HH:mm:ss\",\n"
            + "        L : \"DD/MM/YYYY\",\n"
            + "        LL : \"D MMMM YYYY\",\n"
            + "        LLL : \"D MMMM YYYY LT\",\n"
            + "        LLLL : \"dddd D MMMM YYYY LT\"\n"
            + "    },\n"
            + "    calendar : {\n"
            + "        sameDay: \"[vandaag] LT\",\n"
            + "        nextDay: '[morgen] LT',\n"
            + "        nextWeek: 'dddd [naar] LT',\n"
            + "        lastDay: '[gisteren op] LT',\n"
            + "        lastWeek: 'dddd [laatste] LT',\n"
            + "        sameElse: 'L'\n"
            + "    },\n"
            + "    relativeTime : {\n"
            + "        future : \"in %s\",\n"
            + "        past : \"er %s\",\n"
            + "        s : \"seconden\",\n"
            + "        m : \"een minuut\",\n"
            + "        mm : \"%d notulen\",\n"
            + "        h : \"één uur\",\n"
            + "        hh : \"%d uur\",\n"
            + "        d : \"op zekere dag\",\n"
            + "        dd : \"%d dagen\",\n"
            + "        M : \"één maand\",\n"
            + "        MM : \"%d maand\",\n"
            + "        y : \"een jaar\",\n"
            + "        yy : \"%d jaar\"\n"
            + "    },\n"
            + "    ordinalParse : /\\d{1,2}(er|ème)/,\n"
            + "    ordinal : function (number) {\n"
            + "        return number + (number === 1 ? 'er' : 'ème');\n"
            + "    },\n"
            + "    meridiemParse: /AM|PM/,\n"
            + "    isPM: function (input) {\n"
            + "        return input.charAt(0) === 'M';\n"
            + "    },\n"
            + "    // in case the meridiem units are not separated around 12, then implement\n"
            + "    // this function (look at locale/id.js for an example)\n"
            + "    // meridiemHour : function (hour, meridiem) {\n"
            + "    //     return /* 0-23 hour, given meridiem token and hour 1-12 */\n"
            + "    // },\n"
            + "    meridiem : function (hours, minutes, isLower) {\n"
            + "        return hours < 12 ? 'AM' : 'PM';\n"
            + "    }\n"
            + "});")
    public static native void locale();

    @JavaScriptBody(args = {}, body = "return moment().valueOf();")
    public static native long getCurrentUnixTime();

    @JavaScriptBody(args = {"oldtime", "duration"}, body = "return moment(oldtime).add(duration,'seconds').valueOf()<=moment().valueOf();")
    public static native boolean canExecute(long oldtime, int duration);

    @JavaScriptBody(args = {"yearId"}, body = "var weeknumber=moment().set('year', yearId).weeksInYear();\n"
            + "return weeknumber;")
    public static native int getWeeksInYear(int yearId);

    /**
     * get current year
     *
     * @return
     */
    @JavaScriptBody(args = {}, body = "var curyear=moment();\n"
            + "return curyear.year();")
    public static native int getYear();

    @JavaScriptBody(args = {}, body = "")
    public static native void registerComponent();

    /**
     * Get current Month
     *
     * @return
     */
    @JavaScriptBody(args = {}, body = ""
            + "return moment().month();\n")
    public static native int getMonth();

    /**
     * Get Month
     *
     * @param yearId
     * @param weekId
     * @param dayofweek
     * @return
     */
    @JavaScriptBody(args = {"yearId", "weekId", "dayofweek"}, body = ""
            + "var curMonth=moment().year(yearId).week(weekId).day(dayofweek);\n"
            + "var curMonth1=moment(curMonth).month();\n"
            + "return curMonth1;")
    public static native int getMonth(int yearId, int weekId, int dayofweek);

    /**
     * It will give you current day of Month
     *
     * @return
     */
    @JavaScriptBody(args = {}, body = ""
            + "var currentDay=moment().date();\n"
            + "return currentDay;")
    public static native int getDayOfMonth();

    /**
     * This will provide you day of Month from date in this format 'DD-MM-YYYY'
     *
     * @param date
     * @return
     */
    @JavaScriptBody(args = {"date"}, body = "var date = new Date(moment(date,'DD-MM-YYYY'));\n"
            + "var value=moment(date).date();\n"
            + "return value;")
    public static native int getDayOfMonth(String date);

    /**
     * Provides day of Month
     *
     * @param yearId
     * @param monthId
     * @param weekId
     * @param dayofweek
     * @return
     */
    @JavaScriptBody(args = {"yearId", "monthId", "weekId", "dayofweek"}, body = ""
            + "var curday=moment().year(yearId).month(monthId).week(weekId).day(dayofweek);\n"
            + "return curday.date();")
    public static native int getDayOfMonth(int yearId, int monthId, int weekId, int dayofweek);

    /**
     * It will give you current day of week
     *
     * @return
     */
    @JavaScriptBody(args = {}, body = ""
            + "var currentDay=moment().isoWeekday();\n"
            + "return currentDay;")
    public static native int getDayOfWeek();

    /**
     * This will provide you day of week from date in this format 'DD-MM-YYYY'
     *
     * @param date
     * @return
     */
    @JavaScriptBody(args = {"date"}, body = "var date = new Date(moment(date,'DD-MM-YYYY'));\n"
            + "var value=moment(date).isoWeekday();\n"
            + "return value;")
    public static native int getDayOfWeek(String date);

    /**
     * This will provide you day of week
     *
     * @param yearId
     * @param monthId
     * @param dateId
     * @return
     */
    @JavaScriptBody(args = {"yearId", "monthId", "dateId"},
            body = "var date = moment().year(yearId).month(monthId).date(dateId);\n"
            + "var value=moment(date).isoWeekday();\n"
            + "return value;")
    public static native int getDayOfweek(int yearId, int monthId, int dateId);

    /**
     * This will provide you week no if you provide date in 'DD-MM-YYYY' format
     *
     * @param date
     * @return
     */
    @JavaScriptBody(args = {"date"}, body = "var date = new Date(moment(date,'DD-MM-YYYY'));\n"
            + "return moment(date).isoWeek();\n")
    public static native int getWeek(String date);

    /**
     * It will give you current week no
     *
     * @return
     */
    @JavaScriptBody(args = {}, body = "return moment().isoWeek();")
    public static native int getWeek();

    /**
     * If you provide week no
     *
     * @param yearId
     * @param monthId
     * @param dateId
     * @return
     */
    @JavaScriptBody(args = {"yearId", "monthId", "dateId"}, body = ""
            + "var curWeek=moment().year(yearId).month(monthId).date(dateId);\n"
            + "return curWeek.isoWeek();")
    public static native int getWeek(int yearId, int monthId, int dateId);

    @JavaScriptBody(args = {"id", "css"}, body = ""
            + "$('#110').removeClass('slot-30m-top').addClass('free-time');"
    )
    public static native String changeCss(String id, String css);

    @JavaScriptBody(args = {"hourId", "minuteId"}, body = ""
            + "var time=moment('\"'+hourId+minuteId+'\"', 'hmm').format('HH:mm');\n"
            + "return time;")
    public static native String getTime(int hourId, String minuteId);

    @JavaScriptBody(args = {"format"}, body = "var currentDate = moment().format(format);\n"
            + "return currentDate;")
    public static native String getCurrent(String format);
    
        @JavaScriptBody(args = {"format"}, body 
            = "var today = moment();\n"
            + "var tomorrow = today.add(1, 'days');\n"
            + "return tomorrow.format(format);")
    public static native String getTomorrow(String format);

    @JavaScriptBody(args = {"time", "format"}, body = "var currentDate = moment(time).format(format);\n"
            + "return currentDate;")
    public static native String getFormatedTime(long time, String format);

    @JavaScriptBody(args = {"date", "format"}, body
            = "var SpecialTo = moment(date, format);\n"
            + "if (moment().diff(SpecialTo, 'days') <=0) {\n"
            + "    return true;\n"
            + "} else {\n"
            + "    return false;\n"
            + "}"
            + " return false;")
    public static native boolean isFutureDate(String date, String format);

    @JavaScriptBody(args = {"date", "currentFormat", "desiredFormat"}, body = "var currentDate = moment(date, currentFormat).format(desiredFormat);\n"
            + "return currentDate;")
    public static native String formatDate(String date, String currentFormat, String desiredFormat);

    
       @JavaScriptBody(args = {"increment", "type", "format"}, body = "var currentDate = moment().add(increment, type) .format(format);\n"
            + "return currentDate;")
    public static native String getFutureDate(int increment, String type, String format);
    
    @JavaScriptBody(args = {"timeInMS"}, body = ""
            + "var isSameDay = moment(Number(timeInMS)).isSame(moment(), 'day');\n"
            + "return isSameDay;")
    public static native boolean isToday(String timeInMS);
}
