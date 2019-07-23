$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
});
$("ul").on("click", "span", function(event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(function() {
      $(this).remove();
    });
});

$("input").keypress(function(event) {
  if (event.which === 13) {
    var item = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li>" +
        item +
        "<span id='x'><i class='fa fa-minus-square-o' aria-hidden='true'></i></span></li>"
    );
  }
});

$("#add").click(function() {
  $("input").fadeToggle();
});
