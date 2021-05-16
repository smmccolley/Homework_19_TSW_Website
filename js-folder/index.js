$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});



$('.readMore value').on ('click', function(){
    $(".modal").show("slow");
});


$(".readMore").dialog({
    modal: true;
});

var modal = $(".readMore").dialog(".modal")
$(".readMore").dialog(".modal", true);

// Getter
var position = $( ".selector" ).dialog(".modal", "position");
 
// Setter
$( ".selector" ).dialog( "option", "position", { my: "left top", at: "left bottom", of: button } );


function myFunction() { 
  document.getElementById(".modal").showModal(); 
} 



      // example from class activities //
      // Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }


  
