// $(".toggle").click(function(){
//   $(this).find(".toggleContainer").toggleClass("active");
//   $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
// });


$('.readMore-value').on ('click', function(){
  console.log("readMore was pressed")
    $(".valueCommunity").hide();
    $(".studios").css("opacity", 0.3);
    $(".TSWideas").css("opacity", 0.3);
    $("#Recess").css("opacity", 0.3);
    $("#BlogPost").css("opacity", 0.3);
    $(".valueCommunity").css("opacity", 0.3);
    $(".featuredProjects").css("opacity", 0.3);
    $("#modal").show()
});
$('.close').on ('click', function(){
  console.log("readMore was pressed")
    $("#modal").hide();
    $(".studios").css("opacity", 1);
    $(".TSWideas").css("opacity", 1);
    $("#Recess").css("opacity", 1);
    $("#BlogPost").css("opacity", 1);
    $(".valueCommunity").css("opacity", 1);
    $(".featuredProjects").css("opacity", 1);
    $(".valueCommunity").show();
});


  
