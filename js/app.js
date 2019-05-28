



$.getJSON("./json/data.json", function(data){
    $("#title").html(data.header);
    $("#tagline").html(data.tagline);
    $("#aboutParagraph").html(data.about);


    var popUp = $("<div></div>");
    var popFlavor =$("<h2></h2>");
    var popCost =$("<h3></h3>");
    popUp.addClass("popUp");
    popUp.append(popFlavor, popCost);
    popUp.hide();
    popUp.click(function(){
        $(this).hide();
    })
    $("body").append(popUp);



    $.each(data.flavors, function(idx, data){
        var prod=$("<div></div>");
        prod.addClass("product");
        prod.html("<img src='"+data.image+"'/>");

        prod.click(function(){
            popUp.show();
            popFlavor.html("Name: " + data.flavor);
            popCost.html("Price: " + data.cost);
        });

        $(".flavorsWrapper").append(prod);
    })
});




