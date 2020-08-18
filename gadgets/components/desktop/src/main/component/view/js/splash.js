//firebug.env.height = 500;

function hideSplash() {
   if($("ul#presentation > li:last-child").hasClass("activa")){
        window.localStorage.setItem("splashseen","1");
        $("#splash").hide(4000);
        return false;
    }
    if($("ul#presentation > li:nth-child(4n)").hasClass("activa")){
        $(".loader-item-button").hide();
        $(".getstarted-button").show(2000);
    }
    $("ul#presentation li").each(function () {
         if($(this).hasClass("activa")){
           if ($(this).next().length === 0) {
                return false;
            } else {
             //   var myArray = ['white','lightgray','skyblue'];
               // var rand = myArray[Math.floor(Math.random() * myArray.length)];
                $("#presentation").animate({'height':'100vh'},700);
                $(this).animate({'margin-top':'100vh'},700,function(){
                $(this).removeClass("activa");
              //  $("#presentation").css({'background':rand});
                $(this).next().addClass("activa").animate({'margin-top':'0px'},700);
                $("#presentation").animate({'height':'85vh'},1);
                });
                
               
                
                return false;
            }
        }
    });
}        