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

<script>
function myFunction() { 
  document.getElementById("myDialog").showModal(); 
} 
</script>

// examples from class activities//
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

    $(".searchButton").on("click", function(){
        $(".searchButton").toggleClass("active");
        if ($(".searchButton").hasClass("active")) {
          $(".searchBar").css("height", "100vh");
          $("#searchForm").css("opacity","1");
          $(".searchIcon").removeClass("fa-search").addClass("fa-times");
        }
        else {
          $(".searchBar").css('height', "0vh");
          $("#searchForm").css("opacity","0");
          $(".searchIcon").removeClass("fa-times").addClass("fa-search");
        }
      });

// example from class activities //

      $('.tab').on("click", function(){
  
        if ($(this).hasClass("tab1")){
          $(".tab1").addClass("active");
          $(".tab2").removeClass("active");
          $("#tabContent1").css("display", "block");
          $("#tabContent2").css("display", "none");
        }
        else if ($(this).hasClass("tab2")){
          $(".tab2").addClass("active");
          $(".tab1").removeClass("active");
          $("#tabContent2").css("display", "block");
          $("#tabContent1").css("display", "none");
        }
      });

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


  
