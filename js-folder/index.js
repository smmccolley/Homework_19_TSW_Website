$('.readMore value').on ('click', function(){
    $(".modal").show("slow");
});
// I've tried and deleted different versions of this**//
//**var modal= (".communityModal");
//var btn=(".readMore");
//var span=documnent.getElementsbyClassName(".close");
//});

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