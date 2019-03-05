$("button").click(
    function(){
        $("h2").hide();
        $("input").hide();
        $("button").hide();
        $("#img").show();
        var name = $(".name").val();
        //console.log(name);
        var adjective = $(".adjective").val();
        //console.log(adjective);
        var number = $(".number").val();
        //console.log(number);
        var artist = $(".artist").val();
        //console.log(artist);
        var want = $(".want").val();
        //console.log(want);
        
        
        var sentence = "Hello " + name + ", In the year 2030 " + " You are going to have a " + adjective + " Year. " + " You are going to have " + number + " babies with " + artist + ", And you are going to travel towards " + want + " It's going too " + adjective + ", you and " + artist + " are Going to marry in " + want + ".";
        $("#fortune").text(sentence);
  
        
    }
);